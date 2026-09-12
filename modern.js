const PRODUCTS=[
// NURSERY
{name:'Babyletto Hudson 3-in-1 Convertible Crib',cat:'Nursery',price:'$499.00',source:'https://babyletto.com/products/hudson-3-in-1-convertible-crib-with-toddler-bed-conversion-kit',ship:'Prime ETA: usually 1–2 days • confirm on Amazon',details:'GREENGUARD Gold-certified convertible crib with toddler conversion kit.'},
{name:'Newton Baby Essential Crib Mattress',cat:'Nursery',price:'$249.99',source:'https://www.newtonbaby.com/products/essential-crib-mattress',ship:'Prime ETA: usually 1–2 days • confirm on Amazon',details:'Breathable, washable crib mattress with a firm infant sleep surface.'},
{name:'Keekaroo Peanut Changer',cat:'Nursery',price:'$149.95',source:'https://www.keekaroo.com/peanut-changer.html',ship:'Prime ETA: usually 1–2 days • confirm on Amazon',details:'Wipe-clean changing pad that does not require fabric covers.'},
{name:'Infant Optics DXR-8 PRO Baby Monitor',cat:'Nursery',price:'$199.99',source:'https://www.infantoptics.com/dxr-8-pro/',ship:'Prime ETA: usually 1–2 days • confirm on Amazon',details:'Dedicated non-Wi-Fi video monitor with interchangeable lens system.'},
{name:'Ubbi Steel Diaper Pail',cat:'Nursery',price:'$69.99',source:'https://ubbiworld.com/products/ubbi-diaper-pail',ship:'Prime ETA: usually 1–2 days • confirm on Amazon',details:'Powder-coated steel diaper pail designed to reduce odor escape.'},

// SLEEP
{name:'HALO BassiNest Swivel Sleeper 3.0',cat:'Sleep',price:'$219.99',source:'https://www.halosleep.com/bassinest-swivel-sleeper-3-0',ship:'Prime ETA: usually 1–2 days • confirm on Amazon',details:'Bedside bassinet with breathable mesh walls and a swiveling sleep surface.'},
{name:'Naturepedic Organic Cotton Classic Crib Mattress',cat:'Sleep',price:'From $279.00',source:'https://www.naturepedic.com/products/organic-cotton-classic-seamless-baby-crib-mattress-buy',ship:'Prime ETA: usually 1–2 days • confirm on Amazon',details:'Organic cotton waterproof crib mattress with firm infant support.'},
{name:'HALO SleepSack Wearable Blanket Organic Cotton',cat:'Sleep',price:'$34.99',source:'https://www.halosleep.com/products/sleepsack-wearable-blanket-100-organic-cotton',ship:'Prime ETA: usually 1–2 days • confirm on Amazon',details:'Organic cotton wearable blanket intended to replace loose blankets.'},
{name:'ergoPouch Cocoon Swaddle Bag',cat:'Sleep',price:'$49.95',source:'https://www.ergopouch.com/collections/newborn-swaddles',ship:'Prime ETA: usually 1–2 days • confirm on Amazon',details:'Zip-up swaddle with arm-out conversion for the transition from swaddling.'},
{name:"Burt's Bees Baby Beekeeper Wearable Blanket",cat:'Sleep',price:'$19.95',source:'https://burtsbeesbaby.com/products/beekeeper-wearable-blanket',ship:'Prime ETA: usually 1–2 days • confirm on Amazon',details:'Organic cotton wearable blanket with a simple zipper design.'},

// DIAPERING
{name:'HealthyBaby Diapers',cat:'Diapering',price:'From $29.00',source:'https://healthybaby.com/products/our-diaper-1-pack',ship:'Prime ETA: usually 1–2 days • confirm on Amazon',details:'Premium diaper focused on material transparency and sensitive skin.'},
{name:'Pura Baby Wipes',cat:'Diapering',price:'About $18.99',source:'https://us.mypura.com/products/baby-wipes',ship:'Prime ETA: usually 1–2 days • confirm on Amazon',details:'Fragrance-free plastic-free wipes designed for sensitive skin.'},
{name:'WaterWipes Original Baby Wipes',cat:'Diapering',price:'About $39.99 / case',source:'https://www.waterwipes.com/us/en/products/baby-wipes',ship:'Prime ETA: usually 1–2 days • confirm on Amazon',details:'Minimal-ingredient wipes made primarily from purified water.'},
{name:'Earth Mama Organic Diaper Balm',cat:'Diapering',price:'$13.99',source:'https://earthmamaorganics.com/products/organic-diaper-balm',ship:'Prime ETA: usually 1–2 days • confirm on Amazon',details:'Petroleum-free diaper balm with an organic botanical formula.'},
{name:'Parker Baby Diaper Caddy',cat:'Diapering',price:'About $19.95',source:'https://www.parkerbaby.com/products/diaper-caddy',ship:'Prime ETA: usually 1–2 days • confirm on Amazon',details:'Portable felt organizer for diapers, wipes, creams and changing supplies.'},

// FEEDING
{name:'Philips Avent Natural Response Glass Baby Bottles',cat:'Feeding',price:'About $32.95 / set',source:'https://www.usa.philips.com/c-p/SCY910_04/natural-response-baby-bottle',ship:'Prime ETA: usually 1–2 days • confirm on Amazon',details:'Glass bottle system with Natural Response nipples and widely available replacement parts.'},
{name:"Dr. Brown's Natural Flow Anti-Colic Glass Bottles",cat:'Feeding',price:'About $24.99 / set',source:'https://www.drbrownsbaby.com/product/dr-browns-options-plus-glass-baby-bottle/',ship:'Prime ETA: usually 1–2 days • confirm on Amazon',details:'Glass bottles with an internal vent system intended to reduce swallowed air.'},
{name:'OXO Tot Bottle Brush with Cleaner',cat:'Feeding',price:'$9.99',source:'https://www.oxo.com/oxo-tot-bottle-brush.html',ship:'Prime ETA: usually 1–2 days • confirm on Amazon',details:'Bottle brush with a flexible neck and built-in nipple cleaner.'},
{name:'Boon LAWN Countertop Drying Rack',cat:'Feeding',price:'$24.99',source:'https://booninc.com/lawn-green/',ship:'Prime ETA: usually 1–2 days • confirm on Amazon',details:'Large countertop drying rack for bottles, pump parts and accessories.'},
{name:'Lansinoh NaturalWave Slow Flow Nipples',cat:'Feeding',price:'About $7.99',source:'https://lansinoh.com/products/naturalwave-nipples',ship:'Prime ETA: usually 1–2 days • confirm on Amazon',details:'Slow-flow replacement nipples designed for Lansinoh bottles.'},

// CLOTHING
{name:"Burt's Bees Baby Organic Cotton Sleep & Play",cat:'Clothing',price:'About $18.95',source:'https://burtsbeesbaby.com/collections/sleep-and-play',ship:'Prime ETA: usually 1–2 days • confirm on Amazon',details:'GOTS-certified organic cotton one-piece sleeper for everyday wear.'},
{name:'HonestBaby Organic Cotton Bodysuits 5-Pack',cat:'Clothing',price:'About $24.99',source:'https://honestbabyclothing.com/collections/bodysuits',ship:'Prime ETA: usually 1–2 days • confirm on Amazon',details:'Organic cotton short-sleeve bodysuits for easy layering.'},
{name:'Touched by Nature Organic Cotton Sleep N Play',cat:'Clothing',price:'About $19.99',source:'https://touchedbynature.com/',ship:'Prime ETA: usually 1–2 days • confirm on Amazon',details:'Affordable organic cotton sleeper option for frequent changes.'},
{name:"Burt's Bees Baby Organic Burp Cloths",cat:'Clothing',price:'About $18.95',source:'https://burtsbeesbaby.com/collections/burp-cloths-bibs',ship:'Prime ETA: usually 1–2 days • confirm on Amazon',details:'Absorbent organic cotton burp cloths for feeding and cleanup.'},
{name:'KeaBabies Organic Baby Bibs',cat:'Clothing',price:'About $15.96',source:'https://keababies.com/collections/baby-bibs',ship:'Prime ETA: usually 1–2 days • confirm on Amazon',details:'Soft cotton bib set for drool, feeding and daily outfit protection.'},

// BATH
{name:'Babo Botanicals Sensitive Baby Fragrance Free Wash',cat:'Bath',price:'About $16.50',source:'https://www.babobotanicals.com/products/sensitive-baby-fragrance-free-newborn-foam-wash',ship:'Prime ETA: usually 1–2 days • confirm on Amazon',details:'Fragrance-free baby wash formulated for sensitive skin.'},
{name:'ATTITUDE Baby Leaves 2-in-1 Shampoo & Body Wash Unscented',cat:'Bath',price:'About $14.95',source:'https://attitudeliving.com/products/baby-leaves-2-in-1-shampoo-body-wash',ship:'Prime ETA: usually 1–2 days • confirm on Amazon',details:'Unscented shampoo and body wash designed for a simple bath routine.'},
{name:'Earth Mama Simply Non-Scents Baby Wash',cat:'Bath',price:'About $14.99',source:'https://earthmamaorganics.com/products/simply-non-scents-baby-wash',ship:'Prime ETA: usually 1–2 days • confirm on Amazon',details:'Unscented castile-style foaming wash with no synthetic fragrance.'},
{name:"Burt's Bees Baby Organic Hooded Towel",cat:'Bath',price:'About $21.95',source:'https://burtsbeesbaby.com/collections/bath',ship:'Prime ETA: usually 1–2 days • confirm on Amazon',details:'Organic cotton hooded towel sized for babies and toddlers.'},
{name:'KeaBabies Organic Baby Washcloths',cat:'Bath',price:'About $15.96',source:'https://keababies.com/collections/bath',ship:'Prime ETA: usually 1–2 days • confirm on Amazon',details:'Soft organic cotton washcloth set for baths and face cleanup.'},

// HEALTH
{name:'Frida Baby 3-in-1 True Temp Thermometer',cat:'Health',price:'$19.99',source:'https://frida.com/products/3-in-1-true-temp-thermometer',ship:'Prime ETA: usually 1–2 days • confirm on Amazon',details:'Digital thermometer designed for rectal, oral and underarm readings.'},
{name:'Braun ThermoScan 7 Ear Thermometer',cat:'Health',price:'About $59.99',source:'https://us.braunhealthcare.com/product/thermoscan-7/',ship:'Prime ETA: usually 1–2 days • confirm on Amazon',details:'Fast in-ear thermometer with age-adjustable fever guidance.'},
{name:'FridaBaby NoseFrida Nasal Aspirator',cat:'Health',price:'$14.99',source:'https://frida.com/products/nosefrida',ship:'Prime ETA: usually 1–2 days • confirm on Amazon',details:'Manual nasal aspirator with disposable hygiene filters.'},
{name:'Little Remedies Saline Spray + Drops',cat:'Health',price:'About $7.99',source:'https://www.littleremedies.com/remedies/nose-remedies/saline-spray-drops',ship:'Prime ETA: usually 1–2 days • confirm on Amazon',details:'Drug-free saline for loosening mucus before suctioning.'},
{name:'Frida Baby Electric Nail Buffer',cat:'Health',price:'About $34.99',source:'https://frida.com/products/electric-nail-buffer',ship:'Prime ETA: usually 1–2 days • confirm on Amazon',details:'Electric nail file with baby-safe filing pads for different ages.'},

// GEAR
{name:'Chicco KeyFit 35 ClearTex Infant Car Seat',cat:'Gear',price:'$249.99',source:'https://www.chiccousa.com/shop-our-products/car-seats/infant/keyfit-35-cleartex-infant-car-seat/79737.html',ship:'Prime ETA: usually 1–2 days • confirm on Amazon',details:'GREENGUARD Gold infant seat with ClearTex flame-retardant-free materials.'},
{name:'Baby Jogger City Mini GT2 Stroller',cat:'Gear',price:'About $399.99',source:'https://www.babyjogger.com/strollers/city-mini-gt2/',ship:'Prime ETA: usually 1–2 days • confirm on Amazon',details:'All-terrain everyday stroller with one-hand fold and adjustable handlebar.'},
{name:'Ergobaby Embrace Newborn Carrier',cat:'Gear',price:'About $99.00',source:'https://ergobaby.com/baby-carrier/embrace/embrace-newborn-carrier',ship:'Prime ETA: usually 1–2 days • confirm on Amazon',details:'Soft structured carrier designed specifically for newborn positioning.'},
{name:'Tula Free-to-Grow Baby Carrier',cat:'Gear',price:'About $179.00',source:'https://babytula.com/collections/free-to-grow-baby-carriers',ship:'Prime ETA: usually 1–2 days • confirm on Amazon',details:'Adjustable soft structured carrier intended to grow from newborn through toddler use.'},
{name:'RUVALINO Diaper Bag Backpack',cat:'Gear',price:'About $39.99',source:'https://ruvalino.com/',ship:'Prime ETA: usually 1–2 days • confirm on Amazon',details:'Large-capacity diaper backpack with insulated bottle pockets and stroller straps.'}
];

const CATS=['All','Nursery','Sleep','Diapering','Feeding','Clothing','Bath','Health','Gear'];
const icons={Nursery:'⌂',Sleep:'☾',Diapering:'◒',Feeding:'◇',Clothing:'♧',Bath:'○',Health:'＋',Gear:'☆'};
const cache=JSON.parse(localStorage.getItem('wlaModernPhotosV2')||'{}');
const saved=new Set(JSON.parse(localStorage.getItem('wlaModernSaved')||'[]'));
let active='All',query='';
const amazon=n=>'https://www.amazon.com/s?k='+encodeURIComponent(n);
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c]));

async function photo(p){
  if(cache[p.name])return cache[p.name];
  try{
    const r=await fetch('https://api.microlink.io?url='+encodeURIComponent(p.source)+'&filter=image.url',{cache:'force-cache'});
    const j=await r.json();
    const u=j?.data?.image?.url;
    if(u){cache[p.name]=u;localStorage.setItem('wlaModernPhotosV2',JSON.stringify(cache));return u}
  }catch(e){}
  return 'https://tse1.mm.bing.net/th?q='+encodeURIComponent(p.name+' product')+'&w=700&h=700&c=7&rs=1&p=0';
}

function card(p){
  const isSaved=saved.has(p.name);
  return `<article class="card" data-product="${esc(p.name)}">
    <a class="photo" href="${amazon(p.name)}" aria-label="View ${esc(p.name)} on Amazon">
      <span class="fallback">${icons[p.cat]||'♡'}</span>
      <button class="heart" data-save="${esc(p.name)}" type="button">${isSaved?'♥':'♡'}</button>
    </a>
    <div class="card-body">
      <div class="kicker">${p.cat}</div>
      <h3>${esc(p.name)}</h3>
      <p class="product-details">${esc(p.details)}</p>
      <div class="meta"><span class="price">${p.price}</span><a class="amazon" href="${amazon(p.name)}">Amazon ↗</a></div>
      <div class="shipping">${p.ship}</div>
    </div>
  </article>`
}

function draw(){
  const filtered=PRODUCTS.filter(p=>(active==='All'||p.cat===active)&&(!query||(p.name+' '+p.details+' '+p.cat).toLowerCase().includes(query)));
  document.querySelector('.results-head h2').textContent=active==='All'?'Top picks':active+' picks';
  document.getElementById('resultCount').textContent=filtered.length+' products';
  document.getElementById('grid').innerHTML=filtered.length?filtered.map(card).join(''):'<div class="empty">No products match this filter.</div>';
  bindCards();
  hydrate(filtered);
}

async function hydrate(list){
  for(const p of list){
    const u=await photo(p);
    if(!u)continue;
    const el=[...document.querySelectorAll('.card')].find(x=>x.dataset.product===p.name);
    if(!el)continue;
    const box=el.querySelector('.photo');
    const heart=box.querySelector('.heart');
    box.innerHTML=`<img src="${u}" alt="${esc(p.name)}" loading="lazy" referrerpolicy="no-referrer">`;
    box.appendChild(heart);
  }
}

function bindCards(){
  document.querySelectorAll('[data-save]').forEach(b=>b.onclick=e=>{
    e.preventDefault();e.stopPropagation();
    const n=b.dataset.save;
    saved.has(n)?saved.delete(n):saved.add(n);
    localStorage.setItem('wlaModernSaved',JSON.stringify([...saved]));
    b.textContent=saved.has(n)?'♥':'♡';
  });
  document.querySelectorAll('.photo,.amazon').forEach(a=>a.onclick=e=>{
    e.preventDefault();
    location.href=a.href;
  });
}

function init(){
  const cats=document.getElementById('categories');
  cats.innerHTML=CATS.map(c=>`<button class="cat ${c==='All'?'active':''}" data-cat="${c}">${c}</button>`).join('');
  cats.querySelectorAll('.cat').forEach(b=>b.onclick=()=>{
    active=b.dataset.cat;
    cats.querySelectorAll('.cat').forEach(x=>x.classList.toggle('active',x===b));
    draw();
  });
  document.getElementById('search').oninput=e=>{query=e.target.value.trim().toLowerCase();draw()};
  document.getElementById('scrollCue').onclick=()=>document.getElementById('shop').scrollIntoView({behavior:'smooth'});
  draw();
  if('serviceWorker'in navigator)addEventListener('load',()=>navigator.serviceWorker.register('service-worker.js'));
}

init();