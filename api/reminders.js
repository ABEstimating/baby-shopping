const {init}=require('./_db');
module.exports=async function handler(req,res){
  res.setHeader('Access-Control-Allow-Origin','*');
  res.setHeader('Access-Control-Allow-Methods','POST,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers','Content-Type');
  if(req.method==='OPTIONS')return res.status(204).end();
  try{
    const db=await init();
    const body=req.body||{};
    if(req.method==='POST'){
      const {deviceId,taskId,text,category}=body;
      if(!deviceId||!taskId||!text)return res.status(400).json({error:'Missing reminder fields'});
      const raw=Array.isArray(body.reminders)?body.reminders:(body.remindAt?[{key:'primary',remindAt:body.remindAt}]:[]);
      if(raw.length>7)return res.status(400).json({error:'Too many reminder times'});
      const reminders=[];
      const keys=new Set();
      for(let i=0;i<raw.length;i++){
        const item=raw[i]||{};
        const key=String(item.key||`reminder-${i+1}`).replace(/[^a-zA-Z0-9_-]/g,'').slice(0,40)||`reminder-${i+1}`;
        if(keys.has(key))return res.status(400).json({error:'Duplicate reminder key'});keys.add(key);
        const when=new Date(item.remindAt);if(Number.isNaN(when.getTime()))return res.status(400).json({error:'Invalid reminder time'});
        reminders.push({key,when:when.toISOString()});
      }
      await db.query('BEGIN');
      try{
        await db.query('DELETE FROM reminders WHERE device_id=$1 AND task_id=$2',[deviceId,taskId]);
        for(const reminder of reminders){
          await db.query('INSERT INTO reminders(device_id,task_id,reminder_key,text,category,remind_at,sent_at) VALUES($1,$2,$3,$4,$5,$6,NULL)',[deviceId,taskId,reminder.key,text,category||null,reminder.when]);
        }
        await db.query('COMMIT');
      }catch(e){await db.query('ROLLBACK');throw e}
      return res.status(200).json({ok:true,count:reminders.length});
    }
    if(req.method==='DELETE'){
      const {deviceId,taskId}=body;if(!deviceId||!taskId)return res.status(400).json({error:'Missing deviceId or taskId'});
      await db.query('DELETE FROM reminders WHERE device_id=$1 AND task_id=$2',[deviceId,taskId]);
      return res.status(200).json({ok:true});
    }
    return res.status(405).json({error:'Method not allowed'});
  }catch(e){return res.status(500).json({error:e.message});}
};
