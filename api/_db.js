const {Pool}=require('pg');
let pool;
function getPool(){if(!pool){const connectionString=process.env.DATABASE_URL||process.env.POSTGRES_URL;if(!connectionString)throw new Error('DATABASE_URL is not configured');pool=new Pool({connectionString,ssl:connectionString.includes('localhost')?false:{rejectUnauthorized:false},max:3})}return pool}
async function init(){
  const db=getPool();
  await db.query(`
CREATE TABLE IF NOT EXISTS push_subscriptions (
 device_id TEXT PRIMARY KEY,
 subscription JSONB NOT NULL,
 updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE TABLE IF NOT EXISTS reminders (
 id BIGSERIAL PRIMARY KEY,
 device_id TEXT NOT NULL,
 task_id TEXT NOT NULL,
 reminder_key TEXT NOT NULL DEFAULT 'primary',
 text TEXT NOT NULL,
 category TEXT,
 remind_at TIMESTAMPTZ NOT NULL,
 sent_at TIMESTAMPTZ,
 created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
ALTER TABLE reminders ADD COLUMN IF NOT EXISTS reminder_key TEXT NOT NULL DEFAULT 'primary';
ALTER TABLE reminders DROP CONSTRAINT IF EXISTS reminders_device_id_task_id_key;
CREATE UNIQUE INDEX IF NOT EXISTS reminders_device_task_key_idx ON reminders(device_id,task_id,reminder_key);
CREATE INDEX IF NOT EXISTS reminders_due_idx ON reminders(remind_at) WHERE sent_at IS NULL;
`);
  return db;
}
module.exports={init};
