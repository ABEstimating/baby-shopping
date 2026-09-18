const PERIODS=['Today','This Week','This Month','This Year'];
const DEFAULT_TASKS=[
{id:'pet-1',period:'Today',category:'Pets',text:'Wash the dog',done:false},
{id:'pet-2',period:'Today',category:'Pets',text:'Trim the dog',done:false},
{id:'pet-3',period:'Today',category:'Pets',text:"Clip the dog's nails",done:false},
{id:'pet-4',period:'Today',category:'Pets',text:'Wash the fish tanks',done:false},
{id:'house-1',period:'Today',category:'Housework',text:'Finish edging and weed whacking',done:false},
{id:'house-2',period:'Today',category:'Housework',text:'Do the dishes',done:false},
{id:'house-3',period:'Today',category:'Housework',text:'Vacuum the house',done:false},
{id:'house-4',period:'Today',category:'Housework',text:'Do laundry',done:false}
];
const STORAGE='personalChecklistV1';
const DEVICE_KEY='checklistDeviceId';
const API_BASE=localStorage.getItem('checklistApiBase')||'';
let tasks=loadTasks(),activePeriod='Today',showingArchive=false;
const $=id=>document.getElementById(id);
const tabs=$('timeTabs'),groups=$('groups'),archiveBtn=$('archiveBtn'),activeView=$('activeView'),archiveView=$('archiveView'),archiveList=$('archiveList'),summary=$('summary'),modal=$('addModal'),taskInput=$('taskInput'),periodInput=$('periodInput'),categoryInput=$('categoryInput'),reminderInput=$('reminderInput'),notifyBtn=$('notifyBtn'),notice=$('notice');

function loadTasks(){let stored=[];try{stored=JSON.parse(localStorage.getItem(STORAGE))||[]}catch(e){}if(!Array.isArray(stored))stored=[];const ids=new Set(stored.map(x=>x.id));for(const seed of DEFAULT_TASKS)if(!ids.has(seed.id))stored.push({...seed});localStorage.setItem(STORAGE,JSON.stringify(stored));return stored}
function save(){localStorage.setItem(STORAGE,JSON.stringify(tasks))}
function esc(s){return String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c]))}
function newId(){return't-'+Date.now().toString(36)+'-'+Math.random().toString(36).slice(2,7)}
function deviceId(){let id=localStorage.getItem(DEVICE_KEY);if(!id){id=crypto.randomUUID?crypto.randomUUID():newId();localStorage.setItem(DEVICE_KEY,id)}return id}
function api(path,options={}){return fetch(API_BASE+path,{headers:{'Content-Type':'application/json',...(options.headers||{})},...options}).then(async r=>{const data=await r.json().catch(()=>({}));if(!r.ok)throw new Error(data.error||`Request failed (${r.status})`);return data})}
function showNotice(text){notice.textContent=text;notice.classList.toggle('hidden',!text)}
function fmtReminder(iso){if(!iso)return'';const d=new Date(iso);return Number.isNaN(d.getTime())?'':d.toLocaleString([],{weekday:'short',month:'short',day:'numeric',hour:'numeric',minute:'2-digit'})}

function renderTabs(){tabs.innerHTML=PERIODS.map(p=>`<button class="tab ${p===activePeriod?'active':''}" data-period="${p}">${p}</button>`).join('');tabs.querySelectorAll('.tab').forEach(b=>b.onclick=()=>{activePeriod=b.dataset.period;showingArchive=false;render()})}
function renderActive(){const active=tasks.filter(t=>!t.done&&t.period===activePeriod),cats=[...new Set(active.map(t=>t.category))];if(!active.length){groups.innerHTML=`<div class="empty"><strong>Nothing scheduled for ${activePeriod.toLowerCase()}.</strong>Tap + to add an item.</div>`;return}groups.innerHTML=cats.map(cat=>{const items=active.filter(t=>t.category===cat);return`<section class="group"><div class="group-head"><h2>${esc(cat)}</h2><span class="group-count">${items.length} item${items.length===1?'':'s'}</span></div>${items.map(t=>`<label class="task"><input type="checkbox" data-id="${t.id}"><span class="check"></span><span class="task-copy"><span class="task-text">${esc(t.text)}</span>${t.remindAt?`<span class="reminder">🔔 ${esc(fmtReminder(t.remindAt))}</span>`:''}</span></label>`).join('')}</section>`}).join('');groups.querySelectorAll('input[type="checkbox"]').forEach(b=>b.onchange=()=>completeTask(b.dataset.id))}
async function completeTask(id){const t=tasks.find(x=>x.id===id);if(!t)return;t.done=true;t.completedAt=new Date().toISOString();save();if(t.remindAt)api('/api/reminders',{method:'DELETE',body:JSON.stringify({deviceId:deviceId(),taskId:id})}).catch(()=>{});setTimeout(render,120)}
function renderArchive(){const a=tasks.filter(t=>t.done).sort((x,y)=>(y.completedAt||'').localeCompare(x.completedAt||''));archiveList.innerHTML=a.length?a.map(t=>`<div class="archived-item"><div class="archived-main"><strong>${esc(t.text)}</strong><small>${esc(t.period)} · ${esc(t.category)}</small></div><button class="restore" data-restore="${t.id}">Restore</button></div>`).join(''):`<div class="empty"><strong>No completed items yet.</strong>Checked-off tasks will appear here.</div>`;archiveList.querySelectorAll('[data-restore]').forEach(b=>b.onclick=()=>{const t=tasks.find(x=>x.id===b.dataset.restore);if(t){t.done=false;delete t.completedAt;save();render()}})}
function updateSummary(){const remaining=tasks.filter(t=>!t.done).length,today=tasks.filter(t=>!t.done&&t.period==='Today').length;summary.textContent=`${remaining} item${remaining===1?'':'s'} left · ${today} today`}
function render(){renderTabs();renderActive();renderArchive();updateSummary();activeView.classList.toggle('hidden',showingArchive);archiveView.classList.toggle('hidden',!showingArchive);tabs.classList.toggle('hidden',showingArchive);archiveBtn.textContent=showingArchive?'Back':'Archive';updateNotificationButton()}

archiveBtn.onclick=()=>{showingArchive=!showingArchive;render()};
$('clearArchive').onclick=()=>{if(tasks.some(t=>t.done)&&confirm('Permanently clear all completed items?')){tasks=tasks.filter(t=>!t.done);save();render()}};
$('addFab').onclick=()=>{periodInput.value=activePeriod;categoryInput.value='';taskInput.value='';reminderInput.value='';modal.classList.remove('hidden');setTimeout(()=>taskInput.focus(),50)};
$('closeModal').onclick=()=>modal.classList.add('hidden');modal.onclick=e=>{if(e.target===modal)modal.classList.add('hidden')};$('saveTask').onclick=addTask;taskInput.onkeydown=e=>{if(e.key==='Enter')addTask()};
async function addTask(){const text=taskInput.value.trim();if(!text){taskInput.focus();return}const task={id:newId(),period:periodInput.value,category:categoryInput.value.trim()||'Other',text,done:false};if(reminderInput.value)task.remindAt=new Date(reminderInput.value).toISOString();tasks.push(task);activePeriod=task.period;save();modal.classList.add('hidden');render();if(task.remindAt){try{if(Notification.permission!=='granted')await enableNotifications();await api('/api/reminders',{method:'POST',body:JSON.stringify({deviceId:deviceId(),taskId:task.id,text:task.text,category:task.category,remindAt:task.remindAt})});showNotice(`Reminder set for ${fmtReminder(task.remindAt)}.`)}catch(e){showNotice(`Task saved, but the reminder is not active yet: ${e.message}`)}}}

function urlBase64ToUint8Array(base64){const padding='='.repeat((4-base64.length%4)%4),base64Safe=(base64+padding).replace(/-/g,'+').replace(/_/g,'/'),raw=atob(base64Safe);return Uint8Array.from([...raw].map(c=>c.charCodeAt(0)))}
async function enableNotifications(){if(!('serviceWorker'in navigator)||!('PushManager'in window)||!('Notification'in window))throw new Error('Push notifications are not supported here. On iPhone, add the site to your Home Screen and open it there.');const permission=await Notification.requestPermission();if(permission!=='granted')throw new Error('Notification permission was not granted.');const reg=await navigator.serviceWorker.ready;const {publicKey}=await api('/api/config');let sub=await reg.pushManager.getSubscription();if(!sub)sub=await reg.pushManager.subscribe({userVisibleOnly:true,applicationServerKey:urlBase64ToUint8Array(publicKey)});await api('/api/subscribe',{method:'POST',body:JSON.stringify({deviceId:deviceId(),subscription:sub.toJSON()})});showNotice('Notifications are enabled on this iPhone.');updateNotificationButton();return sub}
function updateNotificationButton(){if(!('Notification'in window)){notifyBtn.textContent='Alerts Unavailable';return}notifyBtn.textContent=Notification.permission==='granted'?'Alerts On':'Enable Alerts'}
notifyBtn.onclick=()=>enableNotifications().catch(e=>showNotice(e.message));

if('serviceWorker'in navigator){window.addEventListener('load',async()=>{try{await navigator.serviceWorker.register('service-worker.js?v=20260918-1');updateNotificationButton()}catch(e){showNotice('Could not start notifications on this device.')}})}
render();
// Checklist category, color, editing and multi-reminder enhancements.
(function(){
  const PC_CATEGORY_STORAGE='personalChecklistCategoriesV1';
  const PC_COLORS=new Set(['none','red','orange','yellow','green','blue','purple']);
  let pcEditingTaskId=null,pcSelectedColor='none';

  function pcLoadCategories(){
    let stored=[];try{stored=JSON.parse(localStorage.getItem(PC_CATEGORY_STORAGE))||[]}catch(e){}
    if(!Array.isArray(stored))stored=[];
    const out=[];
    [...stored,...tasks.map(t=>t.category)].forEach(name=>{const clean=String(name||'').trim();if(clean&&!out.some(x=>x.toLowerCase()===clean.toLowerCase()))out.push(clean)});
    localStorage.setItem(PC_CATEGORY_STORAGE,JSON.stringify(out));return out;
  }
  let pcCategories=pcLoadCategories();
  const pcSaveCategories=()=>localStorage.setItem(PC_CATEGORY_STORAGE,JSON.stringify(pcCategories));
  function pcEnsureCategory(name){const clean=String(name||'').trim()||'Other';const found=pcCategories.find(x=>x.toLowerCase()===clean.toLowerCase());if(found)return found;pcCategories.push(clean);pcSaveCategories();return clean}
  const pcAttr=s=>encodeURIComponent(String(s));
  function pcToLocal(iso){if(!iso)return'';const d=new Date(iso);if(Number.isNaN(d.getTime()))return'';return new Date(d.getTime()-d.getTimezoneOffset()*60000).toISOString().slice(0,16)}
  function pcToIso(value){if(!value)return'';const d=new Date(value);return Number.isNaN(d.getTime())?'':d.toISOString()}
  function pcReminderLine(t){const times=[t.remindAt,...(Array.isArray(t.followUps)?t.followUps:[])].filter(Boolean);if(!times.length)return'';const first=fmtReminder(times[0]),more=times.length-1;return `🔔 ${esc(first)}${more?` · ${more} follow-up${more===1?'':'s'}`:''}`}

  document.getElementById('addFab')?.remove();
  let pcAddCategoryBtn=document.getElementById('addCategoryBtn');
  if(!pcAddCategoryBtn){pcAddCategoryBtn=document.createElement('button');pcAddCategoryBtn.id='addCategoryBtn';pcAddCategoryBtn.className='secondary';pcAddCategoryBtn.type='button';pcAddCategoryBtn.textContent='+ Category';document.querySelector('.header-actions')?.prepend(pcAddCategoryBtn)}

  const pcCard=modal.querySelector('.modal-card');
  const pcReminderLabel=reminderInput.closest('label');
  const pcColorBlock=document.createElement('div');pcColorBlock.className='pc-field-block';pcColorBlock.innerHTML=`<div class="pc-field-label">Color</div><div id="pcColorPicker" class="pc-color-picker"><button type="button" class="pc-color selected" data-pc-color="none" aria-label="No color">×</button><button type="button" class="pc-color red" data-pc-color="red" aria-label="Red"></button><button type="button" class="pc-color orange" data-pc-color="orange" aria-label="Orange"></button><button type="button" class="pc-color yellow" data-pc-color="yellow" aria-label="Yellow"></button><button type="button" class="pc-color green" data-pc-color="green" aria-label="Green"></button><button type="button" class="pc-color blue" data-pc-color="blue" aria-label="Blue"></button><button type="button" class="pc-color purple" data-pc-color="purple" aria-label="Purple"></button></div>`;
  pcReminderLabel.before(pcColorBlock);
  const pcFollowBlock=document.createElement('div');pcFollowBlock.className='pc-follow-block';pcFollowBlock.innerHTML=`<div class="pc-follow-head"><div><strong>Follow-up alerts</strong><span>Add extra notification times after the first reminder.</span></div><button id="pcAddFollowup" type="button">+ Add</button></div><div id="pcFollowupList" class="pc-follow-list"></div><p id="pcModalError" class="pc-modal-error hidden"></p>`;
  pcReminderLabel.after(pcFollowBlock);
  const pcDelete=document.createElement('button');pcDelete.id='pcDeleteTask';pcDelete.type='button';pcDelete.className='pc-delete hidden';pcDelete.textContent='Delete Item';document.getElementById('saveTask').before(pcDelete);
  const pcFollowList=document.getElementById('pcFollowupList'),pcError=document.getElementById('pcModalError');

  function pcSetColor(color){pcSelectedColor=PC_COLORS.has(color)?color:'none';document.querySelectorAll('[data-pc-color]').forEach(b=>b.classList.toggle('selected',b.dataset.pcColor===pcSelectedColor))}
  document.querySelectorAll('[data-pc-color]').forEach(b=>b.onclick=()=>pcSetColor(b.dataset.pcColor));
  function pcShowError(text){pcError.textContent=text;pcError.classList.toggle('hidden',!text)}
  function pcAddFollowup(value=''){if(pcFollowList.children.length>=6){pcShowError('You can add up to 6 follow-up alerts.');return}const row=document.createElement('div');row.className='pc-follow-row';row.innerHTML=`<input type="datetime-local" class="pc-follow-input" value="${esc(value)}"><button type="button" aria-label="Remove follow-up">×</button>`;row.querySelector('button').onclick=()=>row.remove();pcFollowList.appendChild(row)}
  document.getElementById('pcAddFollowup').onclick=()=>pcAddFollowup('');
  function pcRenderFollowups(values=[]){pcFollowList.innerHTML='';values.forEach(v=>pcAddFollowup(pcToLocal(v)))}

  function pcOpenTask(id=null,presetCategory=''){
    pcEditingTaskId=id;pcShowError('');const t=id?tasks.find(x=>x.id===id):null;
    document.getElementById('addTitle').textContent=t?'Edit Item':'Add Item';document.getElementById('saveTask').textContent=t?'Save Changes':'Add to Checklist';pcDelete.classList.toggle('hidden',!t);
    taskInput.value=t?.text||'';periodInput.value=t?.period||activePeriod;categoryInput.value=t?.category||presetCategory||'';reminderInput.value=pcToLocal(t?.remindAt||'');pcRenderFollowups(t?.followUps||[]);pcSetColor(t?.color||'none');modal.classList.remove('hidden');setTimeout(()=>taskInput.focus(),50)
  }
  function pcCloseTask(){modal.classList.add('hidden');pcEditingTaskId=null;pcShowError('')}
  document.getElementById('closeModal').onclick=pcCloseTask;modal.onclick=e=>{if(e.target===modal)pcCloseTask()};
  pcDelete.onclick=()=>{const t=tasks.find(x=>x.id===pcEditingTaskId);if(!t||!confirm(`Delete “${t.text}”?`))return;tasks=tasks.filter(x=>x.id!==t.id);save();pcCloseTask();render();api('/api/reminders',{method:'DELETE',body:JSON.stringify({deviceId:deviceId(),taskId:t.id})}).catch(()=>{})};

  function pcValidate(primary,followUps){if(followUps.length&&!primary)return'Add the first reminder before adding follow-up alerts.';if(primary&&followUps.some(x=>new Date(x)<=new Date(primary)))return'Follow-up alerts must be later than the first reminder.';const stamps=followUps.map(x=>+new Date(x));if(new Set(stamps).size!==stamps.length)return'Follow-up alert times must be different.';return''}
  async function pcSaveTask(){
    pcShowError('');const text=taskInput.value.trim();if(!text){pcShowError('Enter an item name.');return}
    const category=pcEnsureCategory(categoryInput.value),remindAt=pcToIso(reminderInput.value),followUps=[...pcFollowList.querySelectorAll('.pc-follow-input')].map(i=>pcToIso(i.value)).filter(Boolean),err=pcValidate(remindAt,followUps);if(err){pcShowError(err);return}
    let t=pcEditingTaskId?tasks.find(x=>x.id===pcEditingTaskId):null;
    if(t){Object.assign(t,{text,period:periodInput.value,category,color:pcSelectedColor,followUps});if(remindAt)t.remindAt=remindAt;else delete t.remindAt}
    else{t={id:newId(),period:periodInput.value,category,text,color:pcSelectedColor,done:false,followUps};if(remindAt)t.remindAt=remindAt;tasks.push(t)}
    activePeriod=t.period;save();pcCloseTask();render();
    const reminders=[];if(t.remindAt)reminders.push({key:'primary',remindAt:t.remindAt});(t.followUps||[]).forEach((v,i)=>reminders.push({key:`followup-${i+1}`,remindAt:v}));
    try{if(reminders.length){if(!('Notification'in window)||Notification.permission!=='granted')await enableNotifications();await api('/api/reminders',{method:'POST',body:JSON.stringify({deviceId:deviceId(),taskId:t.id,text:t.text,category:t.category,reminders})});showNotice(`Reminder${reminders.length>1?'s':''} saved for ${t.text}.`)}else await api('/api/reminders',{method:'DELETE',body:JSON.stringify({deviceId:deviceId(),taskId:t.id})}).catch(()=>{})}catch(e){showNotice(`Item saved, but the reminder is not active yet: ${e.message}`)}
  }
  addTask=pcSaveTask;document.getElementById('saveTask').onclick=pcSaveTask;taskInput.onkeydown=e=>{if(e.key==='Enter'&&!e.shiftKey)pcSaveTask()};

  renderActive=function(){
    if(!pcCategories.length){groups.innerHTML=`<div class="empty"><strong>No categories yet.</strong>Use + Category at the top to make one.</div>`;return}
    groups.innerHTML=pcCategories.map(cat=>{const items=tasks.filter(t=>!t.done&&t.period===activePeriod&&String(t.category).toLowerCase()===cat.toLowerCase());return `<section class="group"><div class="group-head"><h2>${esc(cat)}</h2><div class="pc-group-actions"><span class="group-count">${items.length} item${items.length===1?'':'s'}</span><button type="button" class="pc-category-add" data-pc-add="${pcAttr(cat)}" aria-label="Add item to ${esc(cat)}">+</button></div></div>${items.length?items.map(t=>`<div class="task pc-color-${PC_COLORS.has(t.color)?t.color:'none'}" data-pc-task="${t.id}" title="Double-click to edit"><label class="pc-check-wrap"><input type="checkbox" data-id="${t.id}"><span class="check"></span></label><span class="task-copy"><span class="task-text">${esc(t.text)}</span>${pcReminderLine(t)?`<span class="reminder">${pcReminderLine(t)}</span>`:''}</span><button type="button" class="pc-task-edit" data-pc-edit="${t.id}" aria-label="Edit ${esc(t.text)}">•••</button></div>`).join(''):`<div class="pc-empty-category">No items in ${esc(activePeriod.toLowerCase())}. Use + to add one.</div>`}</section>`}).join('');
    groups.querySelectorAll('input[type="checkbox"]').forEach(b=>b.onchange=()=>completeTask(b.dataset.id));groups.querySelectorAll('[data-pc-add]').forEach(b=>b.onclick=()=>pcOpenTask(null,decodeURIComponent(b.dataset.pcAdd)));groups.querySelectorAll('[data-pc-edit]').forEach(b=>b.onclick=e=>{e.stopPropagation();pcOpenTask(b.dataset.pcEdit)});groups.querySelectorAll('[data-pc-task]').forEach(row=>row.ondblclick=e=>{if(!e.target.closest('.pc-check-wrap,.pc-task-edit'))pcOpenTask(row.dataset.pcTask)})
  };

  pcAddCategoryBtn.onclick=()=>{const name=(prompt('New category name:')||'').trim();if(!name)return;if(pcCategories.some(x=>x.toLowerCase()===name.toLowerCase())){showNotice('That category already exists.');return}pcCategories.push(name);pcSaveCategories();showingArchive=false;render()};
  render();
})();
