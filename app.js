const raw=[
['Infant Car Seat','Before Birth',1,['Chicco KeyFit 35 ClearTex','Clek Liing Mammoth','Nuna PIPA']],
['Bassinet or Crib','Before Birth',1,['Babyletto Hudson Crib','DaVinci Kalani Crib','HALO Bassinest']],
['Crib / Bassinet Mattress','Before Birth',1,['Naturepedic Organic Crib Mattress','Newton Baby Crib Mattress','Avocado Organic Crib Mattress']],
['Fitted Sheets','Before Birth',3,["Burt's Bees Baby Organic Sheets",'Mushie Organic Crib Sheets','Pehr Organic Crib Sheet']],
['Waterproof Mattress Protectors','Before Birth',2,['Naturepedic Protector Pad',"Burt's Bees Baby Mattress Pad",'Organic Cotton Crib Protector']],
['Newborn Diapers','Diapering',1,['HealthyBaby Diapers','Pura Diapers','Kudos Diapers']],
['Size 1 Diapers','Diapering',2,['HealthyBaby Diapers Size 1','Pura Diapers Size 1','Kudos Diapers Size 1']],
['Fragrance-Free Wipes','Diapering',10,['Pura Wipes','WaterWipes','Kudos Wipes']],
['Diaper Cream / Balm','Diapering',2,['Earth Mama Organic Diaper Balm','Babo Sensitive Diaper Cream','HealthyBaby Diaper Cream']],
['Changing Pad / Mat','Diapering',2,['Keekaroo Peanut Changer','Skip Hop Wipe Clean Changing Pad','Naturepedic Organic Changing Pad']],
['Glass Bottles','Feeding',6,['Philips Avent Natural Response Glass','Dr Browns Glass Bottles','Lansinoh Glass Bottles']],
['Slow-Flow Newborn Nipples','Feeding',6,['Philips Avent Natural Response Flow 1','Dr Browns Newborn Nipples','Lansinoh Slow Flow Nipples']],
['Bottle Brush','Feeding',1,['OXO Tot Bottle Brush','Dr Browns Bottle Brush','Munchkin Bottle Brush']],
['Bottle Drying Rack','Feeding',1,['Boon Lawn Drying Rack','OXO Tot Drying Rack','Philips Avent Drying Rack']],
['Burp Cloths','Clothing & Textiles',12,["Burt's Bees Organic Burp Cloths",'HonestBaby Organic Burp Cloths','KeaBabies Organic Burp Cloths']],
['Bibs','Clothing & Textiles',6,["Burt's Bees Baby Organic Bibs",'HonestBaby Organic Bibs','KeaBabies Organic Bibs']],
['Newborn / 0–3M Sleepers','Clothing & Textiles',10,["Burt's Bees Baby Organic Sleepers",'HonestBaby Organic Sleepers','Touched by Nature Organic Sleepers']],
['Short-Sleeve Bodysuits','Clothing & Textiles',8,["Burt's Bees Baby Organic Bodysuits",'HonestBaby Organic Bodysuits','Touched by Nature Organic Bodysuits']],
['Baby Pants','Clothing & Textiles',4,["Burt's Bees Baby Organic Pants",'HonestBaby Organic Baby Pants','Touched by Nature Organic Baby Pants']],
['Baby Socks','Clothing & Textiles',6,["Burt's Bees Baby Socks",'Touched by Nature Baby Socks','Organic Cotton Baby Socks']],
['Swaddles','Sleep',3,['ergoPouch Organic Cocoon','HALO Organic Cotton Swaddle','aden + anais Organic Swaddle']],
['Wearable Sleep Sacks','Sleep',2,['HALO Organic SleepSack','ergoPouch Organic Sleep Sack',"Burt's Bees Baby Beekeeper"]],
['Hooded Bath Towels','Bath & Care',2,["Burt's Bees Organic Hooded Towel",'KeaBabies Organic Hooded Towel','HonestBaby Organic Towel']],
['Washcloths','Bath & Care',10,["Burt's Bees Organic Washcloths",'KeaBabies Organic Washcloths','HonestBaby Organic Washcloths']],
['Baby Wash / Shampoo','Bath & Care',1,['Babo Sensitive Fragrance Free','ATTITUDE Baby Unscented','Earth Mama Simply Non-Scents']],
['Baby Moisturizer','Bath & Care',1,['Babo Sensitive Baby Lotion','ATTITUDE Baby Unscented Lotion','Earth Mama Simply Non-Scents Lotion']],
['Digital Thermometer','Health',1,['Frida Baby True Temp','Braun ThermoScan 7','Kinsa QuickCare']],
['Nasal Aspirator','Health',1,['FridaBaby NoseFrida','NeilMed Naspira','FridaBaby Electric NoseFrida']],
['Plain Saline','Health',2,['Little Remedies Saline','Boogie Mist Saline','FridaBaby Saline']],
['Baby Nail File / Clippers','Health',1,['Frida Baby Electric Nail Buffer','Haakaa Electric Nail File','FridaBaby SnipperClipper']],
['Pacifiers','Comfort',4,['Natursutten Natural Rubber Pacifier','Philips Avent Soothie','NUK for Nature Pacifier']],
['Fragrance-Free Laundry Detergent','Home',1,['ATTITUDE Baby Unscented Laundry','Mollys Suds Unscented','Branch Basics Laundry']],
['Diaper Pail','Home',1,['Ubbi Steel Diaper Pail','Dekor Plus Diaper Pail','Munchkin STEP Diaper Pail']],
['Diaper Caddy','Home',1,['Parker Baby Diaper Caddy','Munchkin Portable Diaper Caddy','Ubbi Diaper Caddy']],
['Baby Monitor','Gear',1,['Infant Optics DXR-8 Pro','VTech VM819','HelloBaby No WiFi Monitor']],
['Stroller','Gear',1,['UPPAbaby Cruz','Nuna MIXX Next','Baby Jogger City Mini GT2']],
['Baby Carrier','Gear',1,['Ergobaby Embrace','Baby Tula Free-to-Grow','Solly Baby Wrap']],
['Diaper Bag','Gear',1,['Dagne Dover Indi','Freshly Picked Diaper Bag','RUVALINO Diaper Backpack']]
];

const notes={
'Infant Car Seat':'Prioritize models with lower-emission materials and no added flame-retardant chemicals where verified.',
'Bassinet or Crib':'Use a firm, flat sleep surface with no loose bedding, pillows, bumpers, or positioners.',
'Crib / Bassinet Mattress':'For a low-tox priority, certified organic materials and GREENGUARD Gold are strong signals.',
'Fitted Sheets':'GOTS organic cotton is preferred for fabric that stays against baby for long periods.',
'Newborn Diapers':'Start with one box because newborn sizing may be short-lived.',
'Fragrance-Free Wipes':'Simple fragrance-free formulas help minimize unnecessary skin exposure.',
'Glass Bottles':'Glass reduces plastic food-contact exposure. Start small until you know which nipple works best.',
'Newborn / 0–3M Sleepers':'Organic cotton and two-way zippers are a useful combination for comfort and nighttime changes.',
'Baby Wash / Shampoo':'Choose fragrance-free, minimal-ingredient formulas and use only as much as needed.',
'Baby Monitor':'A dedicated non-Wi-Fi monitor avoids cloud dependence and keeps setup simple.',
'Fragrance-Free Laundry Detergent':'Prioritize fragrance-free formulas without unnecessary dyes or scent boosters.'
};

const why={
'Chicco KeyFit 35 ClearTex':['ClearTex fabric line is designed around reduced chemical additions.','Strong usability and installation reputation.','Popular infant-seat format that works well for everyday use.'],
'Naturepedic Organic Crib Mattress':['Organic-material focus fits the low-tox goal.','GREENGUARD Gold options and transparent material choices.','Firm crib-mattress construction designed for infant sleep.'],
'HealthyBaby Diapers':['Brand emphasizes material transparency and sensitive-skin considerations.','Useful choice when minimizing fragrance and unnecessary additives.','Premium diaper option with strong parent interest.'],
'Pura Wipes':['Simple, sensitive-skin-oriented wipe option.','Fragrance-free direction fits the app standard.','Pairs well with a low-tox diapering setup.'],
'Philips Avent Natural Response Glass':['Glass bottle body minimizes plastic contact with milk.','Widely available bottle system with replacement nipples.','Natural Response nipple system gives another feeding-flow option.'],
"Burt's Bees Baby Organic Sleepers":['Organic cotton is a good default for frequently worn baby clothing.','Soft everyday basic with broad size availability.','Easy to build a simple capsule wardrobe around.'],
'ergoPouch Organic Cocoon':['Organic fabric option.','Simple newborn sleepwear format.','Avoids loose blankets in the sleep space.'],
'Babo Sensitive Fragrance Free':['Fragrance-free sensitive-skin direction.','Straightforward bath product for a minimal routine.','Brand has multiple sensitive baby-care products.'],
'Frida Baby True Temp':['Useful newborn-care basic.','Designed for multiple temperature-taking methods.','Easy to keep in the dedicated baby health kit.'],
'Infant Optics DXR-8 Pro':['Dedicated monitor avoids cloud dependence.','No Wi-Fi account needed for basic monitoring.','Popular expandable monitor format.']
};

const categoryInfo={
'Before Birth':{icon:'☆',label:'Must-Haves',desc:'The essentials to have ready before baby comes home.'},
'Diapering':{icon:'◒',label:'Diapering',desc:'Diapers, wipes, changing and skin protection.'},
'Feeding':{icon:'♢',label:'Feeding',desc:'Bottles and practical feeding cleanup.'},
'Clothing & Textiles':{icon:'♧',label:'Clothing',desc:'Organic basics, burp cloths and everyday layers.'},
'Sleep':{icon:'☾',label:'Sleep',desc:'Wearable sleep products and safe-sleep basics.'},
'Bath & Care':{icon:'◌',label:'Bath & Care',desc:'Gentle fragrance-free bath and care picks.'},
'Health':{icon:'＋',label:'Health',desc:'Thermometer, nose care and grooming essentials.'},
'Comfort':{icon:'♡',label:'Comfort',desc:'Simple soothing essentials.'},
'Home':{icon:'⌂',label:'Home',desc:'Laundry and diaper-station organization.'},
'Gear':{icon:'◇',label:'Gear',desc:'Monitor, stroller, carrier and going-out gear.'}
};

const ITEMS=raw.map((x,i)=>({id:'i'+i,name:x[0],category:x[1],need:x[2],products:x[3],priority:i+1,note:notes[x[0]]||''}));
const KEY='babyShoppingStateV1';
const SAVE_KEY='babyShoppingSavedV1';
const state=JSON.parse(localStorage.getItem(KEY)||'{}');
const saved=new Set(JSON.parse(localStorage.getItem(SAVE_KEY)||'[]'));
let currentTab='home';
let activeCategory=null;

const view=document.getElementById('view');
const title=document.getElementById('pageTitle');
const $=s=>document.querySelector(s);
const $$=s=>[...document.querySelectorAll(s)];
const st=id=>state[id]||(state[id]={purchased:0});
const saveState=()=>localStorage.setItem(KEY,JSON.stringify(state));
const saveSaved=()=>localStorage.setItem(SAVE_KEY,JSON.stringify([...saved]));
const amazon=q=>'https://www.amazon.com/s?k='+encodeURIComponent(q);
const productId=(item,pidx)=>item.id+'p'+pidx;
const artFor=cat=>categoryInfo[cat]?.icon||'♡';

function totalProgress(){const done=ITEMS.filter(i=>st(i.id).purchased>=i.need).length;return{done,total:ITEMS.length,pct:Math.round(done/ITEMS.length*100)}}
function setNav(tab){currentTab=tab;$$('.nav-btn').forEach(b=>b.classList.toggle('active',b.dataset.tab===tab));}
function navigate(tab){setNav(tab);activeCategory=null;render();window.scrollTo({top:0,behavior:'smooth'})}
function openCategory(cat){activeCategory=cat;setNav('categories');renderCategory(cat);window.scrollTo({top:0,behavior:'smooth'})}

function productCard(item,pidx=0){const name=item.products[pidx];const pid=productId(item,pidx);const isSaved=saved.has(pid);return `<article class="product-card" data-item="${item.id}" data-product="${pidx}">
<button class="save-card" data-save="${pid}" aria-label="Save product">${isSaved?'♥':'♡'}</button>
<div class="product-art">${artFor(item.category)}</div>
<h3>${name}</h3>
<div class="product-meta">${item.name}<br>Selected as ${pidx===0?'our top pick':'an alternative'}</div>
<div class="prime-line">Amazon • Check current Prime price</div>
<div class="card-actions"><button class="mini-btn primary" data-detail="${item.id}:${pidx}">Details</button><a class="mini-btn" href="${amazon(name)}" target="_blank" rel="noopener">Amazon</a></div>
</article>`}

function renderHome(){title.textContent='Categories';const p=totalProgress();const cats=Object.keys(categoryInfo);const topItems=ITEMS.filter((x,i)=>[0,2,5,10,16,24,26,34].includes(i));view.innerHTML=`
<section class="category-scroll">${cats.slice(0,7).map(c=>`<button class="category-chip" data-category="${c}"><span class="cat-icon">${categoryInfo[c].icon}</span><small>${categoryInfo[c].label}</small></button>`).join('')}</section>
<section class="hero-card"><p class="hero-kicker">CURATED FOR A LOWER-TOX START</p><h2>Safe. simple. baby-ready.</h2><p>Organized picks with the reason behind every recommendation.</p></section>
<section class="progress-card"><div class="progress-top"><strong>${p.pct}% checklist complete</strong><span>${p.done} / ${p.total}</span></div><div class="bar"><span style="width:${p.pct}%"></span></div></section>
<div class="section-head"><h2>Top picks</h2><button data-go="categories">See all</button></div><section class="product-strip">${topItems.map(i=>productCard(i,0)).join('')}</section>
<div class="section-head"><h2>Explore categories</h2><button data-go="categories">See all</button></div><section class="category-grid">${cats.map(c=>{const count=ITEMS.filter(i=>i.category===c).length;return `<button class="category-tile" data-category="${c}"><span class="tile-icon">${categoryInfo[c].icon}</span><h3>${categoryInfo[c].label}</h3><p>${count} essentials</p></button>`}).join('')}</section>`;bindDynamic()}

function renderCategories(){title.textContent='Categories';const cats=Object.keys(categoryInfo);view.innerHTML=`<section class="category-grid">${cats.map(c=>{const count=ITEMS.filter(i=>i.category===c).length;return `<button class="category-tile" data-category="${c}"><span class="tile-icon">${categoryInfo[c].icon}</span><h3>${categoryInfo[c].label}</h3><p>${categoryInfo[c].desc}<br><strong>${count} items</strong></p></button>`}).join('')}</section>`;bindDynamic()}

function renderCategory(cat){const info=categoryInfo[cat];title.textContent=info.label;const items=ITEMS.filter(i=>i.category===cat);view.innerHTML=`<div class="category-page-head"><button class="back-btn" id="catBack">‹</button><div class="category-title"><h2>${info.icon} ${info.label}</h2><p>${info.desc}</p></div></div><section class="product-list">${items.map(i=>productCard(i,0)).join('')}</section><div class="section-head"><h2>More options</h2></div><section class="product-list">${items.flatMap(i=>[1,2].map(p=>productCard(i,p))).join('')}</section>`;$('#catBack').onclick=()=>{activeCategory=null;renderCategories()};bindDynamic()}

function renderChecklist(){title.textContent='Checklist';const p=totalProgress();view.innerHTML=`<section class="progress-card"><div class="progress-top"><strong>${p.pct}% complete</strong><span>${p.done} / ${p.total}</span></div><div class="bar"><span style="width:${p.pct}%"></span></div></section><div class="section-head"><h2>What we need</h2></div>${ITEMS.map(i=>{const s=st(i.id),done=s.purchased>=i.need;return `<article class="checklist-row"><button class="check-circle ${done?'done':''}" data-check="${i.id}">${done?'✓':''}</button><div><h3>${i.name}</h3><p>${categoryInfo[i.category].label} • Top pick: ${i.products[0]}</p></div><span class="qty-pill">${s.purchased}/${i.need}</span></article>`}).join('')}`;$$('[data-check]').forEach(b=>b.onclick=()=>{const i=ITEMS.find(x=>x.id===b.dataset.check);const s=st(i.id);s.purchased=s.purchased>=i.need?0:i.need;saveState();renderChecklist()})}

function renderSaved(){title.textContent='Saved';const products=[];ITEMS.forEach(i=>i.products.forEach((_,p)=>{if(saved.has(productId(i,p)))products.push([i,p])}));view.innerHTML=products.length?`<section class="product-list">${products.map(([i,p])=>productCard(i,p)).join('')}</section>`:`<div class="empty-state"><div class="big">♡</div><h2>No saved products yet</h2><p>Tap the heart on any product to keep it here.</p></div>`;bindDynamic()}

function renderMore(){title.textContent='More';view.innerHTML=`<article class="more-card"><h3>Add to Home Screen</h3><p>Install Baby Shop on your iPhone so it opens full-screen like an app.</p><button id="moreInstall" class="secondary-btn">Show iPhone Instructions</button></article><article class="more-card"><h3>About the Amazon information</h3><p>Amazon prices, Prime status, ratings and delivery dates can change by seller, ZIP code and inventory. Product cards therefore send you to Amazon for the current live information instead of displaying stale data.</p></article><article class="more-card"><h3>Shopping standard</h3><p>Recommendations prioritize useful certifications and lower-exposure choices such as organic textiles, fragrance-free care, glass food-contact materials and reduced-chemical gear where verifiable.</p></article><button id="resetProgress" class="danger-btn">Reset checklist progress</button>`;$('#moreInstall').onclick=openInstall;$('#resetProgress').onclick=()=>{if(confirm('Reset checklist progress?')){localStorage.removeItem(KEY);location.reload()}}}

function render(){if(activeCategory)return renderCategory(activeCategory);if(currentTab==='home')renderHome();else if(currentTab==='categories')renderCategories();else if(currentTab==='checklist')renderChecklist();else if(currentTab==='saved')renderSaved();else renderMore()}

function bindDynamic(){
$$('[data-category]').forEach(b=>b.onclick=()=>openCategory(b.dataset.category));
$$('[data-go]').forEach(b=>b.onclick=()=>navigate(b.dataset.go));
$$('[data-detail]').forEach(b=>b.onclick=e=>{e.stopPropagation();const [id,p]=b.dataset.detail.split(':');openDetail(ITEMS.find(x=>x.id===id),Number(p))});
$$('[data-save]').forEach(b=>b.onclick=e=>{e.stopPropagation();const id=b.dataset.save;saved.has(id)?saved.delete(id):saved.add(id);saveSaved();render()});
}

function openDetail(item,pidx){const name=item.products[pidx];const pid=productId(item,pidx);const bullets=why[name]||[item.note||'Selected because it fits the category and the lower-exposure shopping standard.','Chosen as a practical, well-known option to compare against similar products.','Amazon link is provided so you can verify the current seller, price, Prime status and delivery date before buying.'];$('#detailContent').innerHTML=`<div class="detail-hero">${artFor(item.category)}</div><span class="detail-badge">${pidx===0?'MOST RECOMMENDED':'ALTERNATIVE PICK'}</span><h2 class="detail-title">${name}</h2><div class="rating">★★★★★ <span style="color:#71766f">Review count and rating: verify live on Amazon</span></div><div class="amazon-status"><strong>Live Amazon information</strong><span>Tap below for the current price, Prime eligibility, seller and delivery date for your location.</span></div><a class="primary-btn" style="display:block;text-align:center;text-decoration:none" href="${amazon(name)}" target="_blank" rel="noopener">View Current Amazon Listing</a><button class="secondary-btn" id="detailPurchased">${st(item.id).purchased>=item.need?'Mark Not Purchased':'Mark Item Purchased'}</button><section class="why-box"><h3>✓ Why we chose this</h3><ul>${bullets.map(x=>`<li>${x}</li>`).join('')}</ul></section><section class="detail-section"><h3>What to know</h3><p>${item.note||'Compare materials, sizing, return policy and the current Amazon seller before purchasing.'}</p></section><section class="detail-section"><h3>Checklist</h3><p>You need ${item.need} ${item.need===1?'item':'items'} in the ${categoryInfo[item.category].label} category.</p></section>`;$('#detailSave').textContent=saved.has(pid)?'♥':'♡';$('#detailSave').onclick=()=>{saved.has(pid)?saved.delete(pid):saved.add(pid);saveSaved();$('#detailSave').textContent=saved.has(pid)?'♥':'♡'};$('#detailPurchased').onclick=()=>{const s=st(item.id);s.purchased=s.purchased>=item.need?0:item.need;saveState();$('#detailPurchased').textContent=s.purchased>=item.need?'Mark Not Purchased':'Mark Item Purchased'};openSheet('detailSheet')}

function openSheet(id){document.getElementById(id).classList.remove('hidden')}
function closeSheet(el){el.closest('.sheet-backdrop').classList.add('hidden')}
$$('.close-sheet').forEach(b=>b.onclick=()=>closeSheet(b));
$('#detailBack').onclick=()=>$('#detailSheet').classList.add('hidden');
$$('.sheet-backdrop').forEach(x=>x.addEventListener('click',e=>{if(e.target===x)x.classList.add('hidden')}));

function openInstall(){const standalone=window.matchMedia('(display-mode: standalone)').matches||window.navigator.standalone===true;const ios=/iphone|ipad|ipod/i.test(navigator.userAgent);$('#installNote').textContent=standalone?'Baby Shop is already running from the Home Screen.':ios?'Apple does not allow a website button to perform the Home Screen installation automatically; Safari requires you to confirm it from the Share menu.':'On iPhone, open this page in Safari and follow the steps above.';openSheet('installSheet')}
$('#installBtn').onclick=openInstall;
$('#copyUrlBtn').onclick=async()=>{try{await navigator.clipboard.writeText(location.href);$('#copyUrlBtn').textContent='Link Copied ✓'}catch(e){prompt('Copy this link:',location.href)}};

$('#searchBtn').onclick=()=>{openSheet('searchSheet');setTimeout(()=>$('#globalSearch').focus(),100)};
$('#globalSearch').addEventListener('input',e=>{const q=e.target.value.trim().toLowerCase();const box=$('#searchResults');if(!q){box.innerHTML='';return}const found=[];ITEMS.forEach(i=>i.products.forEach((p,idx)=>{if((p+' '+i.name+' '+i.category).toLowerCase().includes(q))found.push([i,idx])}));box.innerHTML=found.slice(0,18).map(([i,p])=>`<div class="search-result" data-search-detail="${i.id}:${p}"><div class="search-result-icon">${artFor(i.category)}</div><div><h3>${i.products[p]}</h3><p>${i.name} • ${categoryInfo[i.category].label}</p></div></div>`).join('')||'<div class="empty-state"><p>No matching products.</p></div>';$$('[data-search-detail]').forEach(r=>r.onclick=()=>{const [id,p]=r.dataset.searchDetail.split(':');$('#searchSheet').classList.add('hidden');openDetail(ITEMS.find(x=>x.id===id),Number(p))})});

$$('.nav-btn').forEach(b=>b.onclick=()=>navigate(b.dataset.tab));
render();
if('serviceWorker'in navigator)window.addEventListener('load',()=>navigator.serviceWorker.register('service-worker.js'));