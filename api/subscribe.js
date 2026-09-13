const {init}=require('./_db');
module.exports=async function handler(req,res){
  res.setHeader('Access-Control-Allow-Origin','*');
  res.setHeader('Access-Control-Allow-Methods','POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers','Content-Type');
  if(req.method==='OPTIONS')return res.status(204).end();
  if(req.method!=='POST')return res.status(405).json({error:'Method not allowed'});
  try{
    const {deviceId,subscription}=req.body||{};
    if(!deviceId||!subscription?.endpoint)return res.status(400).json({error:'Missing deviceId or subscription'});
    const db=await init();
    await db.query(`INSERT INTO push_subscriptions(device_id,subscription,updated_at) VALUES($1,$2,NOW()) ON CONFLICT(device_id) DO UPDATE SET subscription=EXCLUDED.subscription,updated_at=NOW()`,[deviceId,subscription]);
    return res.status(200).json({ok:true});
  }catch(e){return res.status(500).json({error:e.message});}
};
