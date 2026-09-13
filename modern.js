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

if('serviceWorker'in navigator){window.addEventListener('load',async()=>{try{await navigator.serviceWorker.register('service-worker.js?v=20260913-3');updateNotificationButton()}catch(e){showNotice('Could not start notifications on this device.')}})}
render();