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
      const {deviceId,taskId,text,category,remindAt}=body;
      if(!deviceId||!taskId||!text||!remindAt)return res.status(400).json({error:'Missing reminder fields'});
      const when=new Date(remindAt);if(Number.isNaN(when.getTime()))return res.status(400).json({error:'Invalid reminder time'});
      await db.query(`INSERT INTO reminders(device_id,task_id,text,category,remind_at,sent_at) VALUES($1,$2,$3,$4,$5,NULL) ON CONFLICT(device_id,task_id) DO UPDATE SET text=EXCLUDED.text,category=EXCLUDED.category,remind_at=EXCLUDED.remind_at,sent_at=NULL`,[deviceId,taskId,text,category||null,when.toISOString()]);
      return res.status(200).json({ok:true});
    }
    if(req.method==='DELETE'){
      const {deviceId,taskId}=body;if(!deviceId||!taskId)return res.status(400).json({error:'Missing deviceId or taskId'});
      await db.query('DELETE FROM reminders WHERE device_id=$1 AND task_id=$2',[deviceId,taskId]);
      return res.status(200).json({ok:true});
    }
    return res.status(405).json({error:'Method not allowed'});
  }catch(e){return res.status(500).json({error:e.message});}
};
