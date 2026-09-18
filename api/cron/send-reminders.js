const webpush=require('web-push');
const {init}=require('../_db');
module.exports=async function handler(req,res){
  if(req.method!=='GET')return res.status(405).json({error:'Method not allowed'});
  if(process.env.CRON_SECRET&&req.headers.authorization!==`Bearer ${process.env.CRON_SECRET}`)return res.status(401).json({error:'Unauthorized'});
  try{
    const pub=process.env.VAPID_PUBLIC_KEY,priv=process.env.VAPID_PRIVATE_KEY,subject=process.env.VAPID_SUBJECT||'mailto:admin@example.com';
    if(!pub||!priv)return res.status(503).json({error:'VAPID keys not configured'});
    webpush.setVapidDetails(subject,pub,priv);
    const db=await init();
    const {rows}=await db.query(`SELECT r.id,r.device_id,r.task_id,r.reminder_key,r.text,r.category,s.subscription FROM reminders r JOIN push_subscriptions s ON s.device_id=r.device_id WHERE r.sent_at IS NULL AND r.remind_at<=NOW() ORDER BY r.remind_at ASC LIMIT 100`);
    let sent=0,failed=0;
    for(const row of rows){
      try{
        await webpush.sendNotification(row.subscription,JSON.stringify({title:'My Checklist',body:row.text,tag:`task-${row.task_id}-${row.reminder_key||row.id}`,url:'./'}));
        await db.query('UPDATE reminders SET sent_at=NOW() WHERE id=$1',[row.id]);sent++;
      }catch(e){failed++;if(e.statusCode===404||e.statusCode===410){await db.query('DELETE FROM push_subscriptions WHERE device_id=$1',[row.device_id]);await db.query('DELETE FROM reminders WHERE device_id=$1',[row.device_id]);}}
    }
    return res.status(200).json({ok:true,due:rows.length,sent,failed});
  }catch(e){return res.status(500).json({error:e.message});}
};
