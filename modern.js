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
let tasks=loadTasks();
let activePeriod='Today';
let showingArchive=false;

const tabs=document.getElementById('timeTabs');
const groups=document.getElementById('groups');
const archiveBtn=document.getElementById('archiveBtn');
const activeView=document.getElementById('activeView');
const archiveView=document.getElementById('archiveView');
const archiveList=document.getElementById('archiveList');
const summary=document.getElementById('summary');
const modal=document.getElementById('addModal');
const taskInput=document.getElementById('taskInput');
const periodInput=document.getElementById('periodInput');
const categoryInput=document.getElementById('categoryInput');

function loadTasks(){
  try{
    const stored=JSON.parse(localStorage.getItem(STORAGE));
    if(Array.isArray(stored)) return stored;
  }catch(e){}
  localStorage.setItem(STORAGE,JSON.stringify(DEFAULT_TASKS));
  return DEFAULT_TASKS.map(x=>({...x}));
}
function save(){localStorage.setItem(STORAGE,JSON.stringify(tasks));}
function esc(s){return String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c]));}
function newId(){return 't-'+Date.now().toString(36)+'-'+Math.random().toString(36).slice(2,7);}

function renderTabs(){
  tabs.innerHTML=PERIODS.map(p=>`<button class="tab ${p===activePeriod?'active':''}" data-period="${p}">${p}</button>`).join('');
  tabs.querySelectorAll('.tab').forEach(btn=>btn.addEventListener('click',()=>{activePeriod=btn.dataset.period;showingArchive=false;render();}));
}

function renderActive(){
  const active=tasks.filter(t=>!t.done&&t.period===activePeriod);
  const cats=[...new Set(active.map(t=>t.category))];
  if(!active.length){
    groups.innerHTML=`<div class="empty"><strong>Nothing scheduled for ${activePeriod.toLowerCase()}.</strong>Tap + to add an item.</div>`;
    return;
  }
  groups.innerHTML=cats.map(cat=>{
    const items=active.filter(t=>t.category===cat);
    return `<section class="group"><div class="group-head"><h2>${esc(cat)}</h2><span class="group-count">${items.length} item${items.length===1?'':'s'}</span></div>${items.map(t=>`<label class="task"><input type="checkbox" data-id="${t.id}"><span class="check"></span><span class="task-text">${esc(t.text)}</span></label>`).join('')}</section>`;
  }).join('');
  groups.querySelectorAll('input[type="checkbox"]').forEach(box=>box.addEventListener('change',()=>completeTask(box.dataset.id)));
}

function completeTask(id){
  const t=tasks.find(x=>x.id===id); if(!t)return;
  t.done=true;t.completedAt=new Date().toISOString();save();
  setTimeout(render,120);
}

function renderArchive(){
  const archived=tasks.filter(t=>t.done).sort((a,b)=>(b.completedAt||'').localeCompare(a.completedAt||''));
  archiveList.innerHTML=archived.length?archived.map(t=>`<div class="archived-item"><div class="archived-main"><strong>${esc(t.text)}</strong><small>${esc(t.period)} · ${esc(t.category)}</small></div><button class="restore" data-restore="${t.id}">Restore</button></div>`).join(''):`<div class="empty"><strong>No completed items yet.</strong>Checked-off tasks will appear here.</div>`;
  archiveList.querySelectorAll('[data-restore]').forEach(btn=>btn.addEventListener('click',()=>{const t=tasks.find(x=>x.id===btn.dataset.restore);if(t){t.done=false;delete t.completedAt;save();render();}}));
}

function updateSummary(){
  const remaining=tasks.filter(t=>!t.done).length;
  const today=tasks.filter(t=>!t.done&&t.period==='Today').length;
  summary.textContent=`${remaining} item${remaining===1?'':'s'} left · ${today} today`;
}

function render(){
  renderTabs();renderActive();renderArchive();updateSummary();
  activeView.classList.toggle('hidden',showingArchive);
  archiveView.classList.toggle('hidden',!showingArchive);
  tabs.classList.toggle('hidden',showingArchive);
  archiveBtn.textContent=showingArchive?'Back to Checklist':'Show Archive';
}

archiveBtn.addEventListener('click',()=>{showingArchive=!showingArchive;render();});
document.getElementById('clearArchive').addEventListener('click',()=>{if(!tasks.some(t=>t.done))return;if(confirm('Permanently clear all completed items?')){tasks=tasks.filter(t=>!t.done);save();render();}});

document.getElementById('addFab').addEventListener('click',()=>{periodInput.value=activePeriod;categoryInput.value='';taskInput.value='';modal.classList.remove('hidden');setTimeout(()=>taskInput.focus(),50);});
document.getElementById('closeModal').addEventListener('click',()=>modal.classList.add('hidden'));
modal.addEventListener('click',e=>{if(e.target===modal)modal.classList.add('hidden');});
document.getElementById('saveTask').addEventListener('click',addTask);
taskInput.addEventListener('keydown',e=>{if(e.key==='Enter')addTask();});
function addTask(){
  const text=taskInput.value.trim();
  if(!text){taskInput.focus();return;}
  const category=categoryInput.value.trim()||'Other';
  tasks.push({id:newId(),period:periodInput.value,category,text,done:false});
  activePeriod=periodInput.value;save();modal.classList.add('hidden');render();
}

if('serviceWorker' in navigator){window.addEventListener('load',()=>navigator.serviceWorker.register('service-worker.js').catch(()=>{}));}
render();