const PRODUCTS=[
{name:'Chicco KeyFit 35 ClearTex',cat:'Gear',price:'$249.99',source:'https://www.chiccousa.com/shop-our-products/car-seats/infant/keyfit-35-cleartex-infant-car-seat/79737.html',ship:'Check Amazon for current delivery'},
{name:'UPPAbaby Cruz',cat:'Gear',price:'$439.99–$463.99',source:'https://uppababy.com/strollers/full-size/cruz-v2/',ship:'Check Amazon for current delivery'},
{name:'Ergobaby Embrace',cat:'Gear',price:'$74.00 sale',source:'https://ergobaby.com/en-us/products/embrace-newborn-carrier',ship:'Check Amazon for current delivery'},
{name:'Naturepedic Organic Crib Mattress',cat:'Sleep',price:'From $279.00',source:'https://www.naturepedic.com/products/organic-cotton-classic-seamless-baby-crib-mattress-buy',ship:'Brand: about 3–5 business days'},
{name:'ergoPouch Organic Cocoon',cat:'Sleep',price:'$49.95',source:'https://www.ergopouch.com/collections/newborn-swaddles',ship:'Check Amazon for current delivery'},
{name:'HALO Organic SleepSack',cat:'Sleep',price:'$34.99',source:'https://www.halosleep.com/products/sleepsack-wearable-blanket-100-organic-cotton',ship:'Check Amazon for current delivery'},
{name:'HealthyBaby Diapers',cat:'Diapering',price:'$105.00 / box',source:'https://healthybaby.com/products/our-diaper-1-pack',ship:'Check Amazon for current delivery'},
{name:'Pura Wipes',cat:'Diapering',price:'$18.89 / 5×60',source:'https://us.mypura.com/products/baby-wipes',ship:'Check Amazon for current delivery'},
{name:'Earth Mama Organic Diaper Balm',cat:'Diapering',price:'$13.99',source:'https://earthmamaorganics.com/products/organic-diaper-balm',ship:'Check Amazon for current delivery'},
{name:'Philips Avent Natural Response Glass',cat:'Feeding',price:'$10.39 / 4 oz',source:'https://www.usa.philips.com/c-p/SCY910_04/natural-response-baby-bottle',ship:'Check Amazon for current delivery'},
{name:'OXO Tot Bottle Brush',cat:'Feeding',price:'$7.19',source:'https://www.oxo.com/oxo-tot-bottle-brush.html',ship:'Check Amazon for current delivery'},
{name:'Boon Lawn Drying Rack',cat:'Feeding',price:'$21.99',source:'https://booninc.com/lawn-green/',ship:'Check Amazon for current delivery'},
{name:"Burt's Bees Baby Organic Sleepers",cat:'Clothing',price:'$18.95',source:'https://burtsbeesbaby.com/products/burts-truck-organic-cotton-sleeper',ship:'Check Amazon for current delivery'},
{name:"Burt's Bees Baby Organic Bodysuits",cat:'Clothing',price:'$24.95 / 5-pack',source:'https://burtsbeesbaby.com/organic-baby-clothes/baby-boy-clothing/bodysuits-and-tops',ship:'Check Amazon for current delivery'},
{name:'Babo Sensitive Fragrance Free',cat:'Bath',price:'$16.50',source:'https://www.babobotanicals.com/products/sensitive-baby-fragrance-free-newborn-foam-wash',ship:'Check Amazon for current delivery'},
{name:'Babo Sensitive Baby Lotion',cat:'Bath',price:'$18.50',source:'https://www.babobotanicals.com/products/sensitive-baby-fragrance-free-daily-hydra-lotion',ship:'Check Amazon for current delivery'},
{name:'Frida Baby True Temp',cat:'Health',price:'$19.99',source:'https://frida.com/products/3-in-1-true-temp-thermometer',ship:'Check Amazon for current delivery'},
{name:'FridaBaby NoseFrida',cat:'Health',price:'$14.99',source:'https://frida.com/products/nosefrida',ship:'Check Amazon for current delivery'},
{name:'Infant Optics DXR-8 Pro',cat:'Nursery',price:'$199.99',source:'https://www.infantoptics.com/dxr-8-pro/',ship:'Check Amazon for current delivery'},
{name:'Ubbi Steel Diaper Pail',cat:'Nursery',price:'$69.99',source:'https://ubbiworld.com/products/ubbi-diaper-pail',ship:'Check Amazon for current delivery'}
];
const CATS=['All','Nursery','Sleep','Diapering','Feeding','Clothing','Bath','Health','Gear'];
const icons={Nursery:'⌂',Sleep:'☾',Diapering:'◒',Feeding:'◇',Clothing:'♧',Bath:'○',Health:'＋',Gear:'☆'};
const cache=JSON.parse(localStorage.getItem('wlaModernPhotos')||'{}');
const saved=new Set(JSON.parse(localStorage.getItem('wlaModernSaved')||'[]'));
let active='All',query='';
const amazon=n=>'https://www.amazon.com/s?k='+encodeURIComponent(n);
const esc=s=>s.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c]));
async function photo(p){if(cache[p.name])return cache[p.name];try{const r=await fetch('https://api.microlink.io?url='+encodeURIComponent(p.source)+'&filter=image.url',{cache:'force-cache'});const j=await r.json();const u=j?.data?.image?.url;if(u){cache[p.name]=u;localStorage.setItem('wlaModernPhotos',JSON.stringify(cache));return u}}catch(e){}return''}
function card(p){const isSaved=saved.has(p.name);return `<article class="card" data-product="${esc(p.name)}"><a class="photo" href="${amazon(p.name)}"><span class="fallback">${icons[p.cat]||'♡'}</span><button class="heart" data-save="${esc(p.name)}" type="button">${isSaved?'♥':'♡'}</button></a><div class="card-body"><div class="kicker">${p.cat}</div><h3>${esc(p.name)}</h3><div class="meta"><span class="price">${p.price}</span><a class="amazon" href="${amazon(p.name)}">Amazon ↗</a></div><div class="shipping">${p.ship}</div></div></article>`}
function draw(){const filtered=PRODUCTS.filter(p=>(active==='All'||p.cat===active)&&(!query||p.name.toLowerCase().includes(query)));document.getElementById('resultCount').textContent=filtered.length+' picks';document.getElementById('grid').innerHTML=filtered.length?filtered.map(card).join(''):'<div class="empty">No products match this filter.</div>';bindCards();hydrate(filtered)}
async function hydrate(list){for(const p of list){const u=await photo(p);if(!u)continue;const el=[...document.querySelectorAll('.card')].find(x=>x.dataset.product===p.name);if(!el)continue;const box=el.querySelector('.photo');const heart=box.querySelector('.heart');box.innerHTML=`<img src="${u}" alt="${esc(p.name)}" loading="lazy" referrerpolicy="no-referrer">`;box.appendChild(heart)}}
function bindCards(){document.querySelectorAll('[data-save]').forEach(b=>b.onclick=e=>{e.preventDefault();e.stopPropagation();const n=b.dataset.save;saved.has(n)?saved.delete(n):saved.add(n);localStorage.setItem('wlaModernSaved',JSON.stringify([...saved]));b.textContent=saved.has(n)?'♥':'♡'});document.querySelectorAll('.photo,.amazon').forEach(a=>a.onclick=e=>{e.preventDefault();location.href=a.href})}
function init(){const cats=document.getElementById('categories');cats.innerHTML=CATS.map(c=>`<button class="cat ${c==='All'?'active':''}" data-cat="${c}">${c}</button>`).join('');cats.querySelectorAll('.cat').forEach(b=>b.onclick=()=>{active=b.dataset.cat;cats.querySelectorAll('.cat').forEach(x=>x.classList.toggle('active',x===b));draw()});document.getElementById('search').oninput=e=>{query=e.target.value.trim().toLowerCase();draw()};document.getElementById('scrollCue').onclick=()=>document.getElementById('shop').scrollIntoView({behavior:'smooth'});draw();if('serviceWorker'in navigator)addEventListener('load',()=>navigator.serviceWorker.register('service-worker.js'))}
init();