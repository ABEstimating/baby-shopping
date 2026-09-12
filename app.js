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
'Infant Car Seat':'Prioritize models with low-emission materials and no added flame-retardant chemicals where verified.',
'Crib / Bassinet Mattress':'Prioritize GOTS, GREENGUARD Gold, or certified organic materials.',
'Fitted Sheets':'GOTS organic cotton preferred.',
'Newborn Diapers':'Start with one box; newborn sizing can be short-lived.',
'Fragrance-Free Wipes':'Simple, fragrance-free formulas are preferred.',
'Glass Bottles':'Start small until you know which bottle and nipple work best.',
'Newborn / 0–3M Sleepers':'Two-way zippers make nighttime changes easier.',
'Baby Wash / Shampoo':'Choose fragrance-free and minimal-ingredient formulas.',
'Baby Monitor':'A dedicated non-Wi-Fi monitor avoids cloud dependence.'
};
const ITEMS=raw.map((x,i)=>({id:'i'+i,name:x[0],category:x[1],need:x[2],products:x[3],priority:i+1,note:notes[x[0]]||''}));
const KEY='babyShoppingStateV1';
const state=JSON.parse(localStorage.getItem(KEY)||'{}');
let activeCategory='All';
const list=document.getElementById('list'),tpl=document.getElementById('cardTemplate'),search=document.getElementById('search'),remainingOnly=document.getElementById('remainingOnly');
const save=()=>localStorage.setItem(KEY,JSON.stringify(state));
const st=id=>state[id]||(state[id]={purchased:0});
const amazon=q=>'https://www.amazon.com/s?k='+encodeURIComponent(q);
function categories(){return ['All',...new Set(ITEMS.map(x=>x.category))]}
function renderChips(){const w=document.getElementById('chips');w.innerHTML='';categories().forEach(c=>{const b=document.createElement('button');b.className='chip'+(c===activeCategory?' active':'');b.textContent=c;b.onclick=()=>{activeCategory=c;renderChips();render()};w.appendChild(b)})}
function render(){const q=search.value.trim().toLowerCase();list.innerHTML='';let current='';ITEMS.filter(i=>{const done=st(i.id).purchased>=i.need;return(activeCategory==='All'||i.category===activeCategory)&&(!q||i.name.toLowerCase().includes(q)||i.category.toLowerCase().includes(q))&&(!remainingOnly.checked||!done)}).forEach(item=>{if(activeCategory==='All'&&item.category!==current){current=item.category;const h=document.createElement('div');h.className='group-title';h.textContent=current.toUpperCase();list.appendChild(h)}const node=tpl.content.cloneNode(true),card=node.querySelector('.card'),s=st(item.id),done=s.purchased>=item.need;if(done)card.classList.add('done');node.querySelector('.priority').textContent='#'+item.priority;node.querySelector('.name').textContent=item.name;const n=node.querySelector('.note');n.textContent=item.note;if(!item.note)n.style.display='none';node.querySelector('.need').textContent=item.need;const qty=node.querySelector('.qty');for(let i=0;i<=item.need;i++){const o=document.createElement('option');o.value=i;o.textContent=i;if(i===s.purchased)o.selected=true;qty.appendChild(o)}qty.onchange=e=>{s.purchased=Number(e.target.value);save();render()};node.querySelector('.check').onclick=()=>{s.purchased=done?0:item.need;save();render()};node.querySelector('.expand').onclick=()=>card.classList.toggle('open');const p=node.querySelector('.products');item.products.forEach((name,idx)=>{const a=document.createElement('a');a.className='product';a.href=amazon(name);a.target='_blank';a.rel='noopener';a.innerHTML='<span>'+(idx===0?'★ ':'')+name+'</span><span>Amazon ↗</span>';p.appendChild(a)});list.appendChild(node)});updateProgress()}
function updateProgress(){let c=0;ITEMS.forEach(i=>{if(st(i.id).purchased>=i.need)c++});const pct=Math.round(c/ITEMS.length*100);document.getElementById('progressText').textContent=pct+'% complete';document.getElementById('countText').textContent=c+' / '+ITEMS.length+' items';document.getElementById('barFill').style.width=pct+'%'}
search.addEventListener('input',render);remainingOnly.addEventListener('change',render);document.getElementById('reset').onclick=()=>{if(confirm('Reset all purchased quantities?')){localStorage.removeItem(KEY);location.reload()}};renderChips();render();if('serviceWorker'in navigator)window.addEventListener('load',()=>navigator.serviceWorker.register('service-worker.js'));