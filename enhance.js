(() => {
  const CHECKED = 'Sep 11, 2026';
  const A = q => 'https://www.amazon.com/s?k=' + encodeURIComponent(q);
  const CATALOG = {
    'Chicco KeyFit 35 ClearTex': {price:'$249.99', source:'https://www.chiccousa.com/shop-our-products/car-seats/infant/keyfit-35-cleartex-infant-car-seat/79737.html', ship:'Current retail snapshot • Amazon delivery shown after tap'},
    'Babyletto Hudson Crib': {price:'$399.00', source:'https://babyletto.com/collections/hudson', ship:'Current retail snapshot • Amazon delivery shown after tap'},
    'Naturepedic Organic Crib Mattress': {price:'From $279.00', source:'https://www.naturepedic.com/products/organic-cotton-classic-seamless-baby-crib-mattress-buy', ship:'Brand shipping: about 3–5 business days • Amazon may differ'},
    "Burt's Bees Baby Organic Sheets": {price:'$21.95', source:'https://burtsbeesbaby.com/products/baby-solid-organic-cotton-beesnugtm-fitted-crib-sheet-hm10008', ship:'Current retail snapshot • Amazon delivery shown after tap'},
    'Naturepedic Protector Pad': {price:'$69.00', source:'https://www.naturepedic.com/products/organic-waterproof-baby-crib-protector-pad', ship:'Brand shipping: about 3–5 business days • Amazon may differ'},
    'HealthyBaby Diapers': {price:'$105.00 / box', source:'https://healthybaby.com/products/our-diaper-1-pack', ship:'Current retail snapshot • Amazon delivery shown after tap'},
    'HealthyBaby Diapers Size 1': {price:'$105.00 / box', source:'https://healthybaby.com/products/our-diaper-1-pack', ship:'Current retail snapshot • Amazon delivery shown after tap'},
    'Pura Wipes': {price:'$18.89 / 5×60', source:'https://us.mypura.com/products/baby-wipes', ship:'In stock at brand when checked • Amazon delivery shown after tap'},
    'Earth Mama Organic Diaper Balm': {price:'$13.99', source:'https://earthmamaorganics.com/products/organic-diaper-balm', ship:'Current retail snapshot • Amazon delivery shown after tap'},
    'Keekaroo Peanut Changer': {price:'$149.95 sale', source:'https://www.keekaroo.com/peanut-changer.html', ship:'Brand: ships in about 5–7 business days • Amazon may differ'},
    'Philips Avent Natural Response Glass': {price:'$10.39 / 4 oz', source:'https://www.target.com/p/-/A-83273604', ship:'In stock when checked • Amazon delivery shown after tap'},
    'Philips Avent Natural Response Flow 1': {price:'See current price', source:'https://www.usa.philips.com/c-m-mo/baby-bottles-nipples/nipples', ship:'Amazon delivery shown after tap'},
    'OXO Tot Bottle Brush': {price:'$7.19', source:'https://www.oxo.com/oxo-tot-bottle-brush.html', ship:'Current retail snapshot • Amazon delivery shown after tap'},
    'Boon Lawn Drying Rack': {price:'$21.99', source:'https://booninc.com/lawn-green/', ship:'Brand free shipping over $50 • Amazon delivery shown after tap'},
    "Burt's Bees Organic Burp Cloths": {price:'$28.95 / 5-pack', source:'https://burtsbeesbaby.com/organic-baby-clothes/baby-essentials/organic-burp-cloths-bibs', ship:'Current retail snapshot • Amazon delivery shown after tap'},
    "Burt's Bees Baby Organic Bibs": {price:'From $24.95', source:'https://burtsbeesbaby.com/organic-baby-clothes/baby-essentials/organic-burp-cloths-bibs', ship:'Current retail snapshot • Amazon delivery shown after tap'},
    "Burt's Bees Baby Organic Sleepers": {price:'$18.95', source:'https://burtsbeesbaby.com/products/burts-truck-organic-cotton-sleeper', ship:'Brand processing about 1–3 business days • Amazon may differ'},
    "Burt's Bees Baby Organic Bodysuits": {price:'$24.95 / 5-pack', source:'https://burtsbeesbaby.com/organic-baby-clothes/baby-boy-clothing/bodysuits-and-tops', ship:'Current retail snapshot • Amazon delivery shown after tap'},
    "Burt's Bees Baby Organic Pants": {price:'$22.46 sale / 3-pack', source:'https://burtsbeesbaby.com/products/solid-organic-cotton-baby-pants-3-pack-midnight', ship:'Current retail snapshot • Amazon delivery shown after tap'},
    "Burt's Bees Baby Socks": {price:'See current price', source:'https://burtsbeesbaby.com/search?q=baby+socks&type=product', ship:'Amazon delivery shown after tap'},
    'ergoPouch Organic Cocoon': {price:'$49.95', source:'https://www.ergopouch.com/collections/newborn-swaddles', ship:'Current retail snapshot • Amazon delivery shown after tap'},
    'HALO Organic SleepSack': {price:'$34.99', source:'https://www.halosleep.com/products/sleepsack-wearable-blanket-100-organic-cotton', ship:'Current retail snapshot • Amazon delivery shown after tap'},
    "Burt's Bees Organic Hooded Towel": {price:'See current price', source:'https://burtsbeesbaby.com/search?q=hooded+towel&type=product', ship:'Amazon delivery shown after tap'},
    "Burt's Bees Organic Washcloths": {price:'See current price', source:'https://burtsbeesbaby.com/search?q=washcloth&type=product', ship:'Amazon delivery shown after tap'},
    'Babo Sensitive Fragrance Free': {price:'$16.50 newborn wash', source:'https://www.babobotanicals.com/products/sensitive-baby-fragrance-free-newborn-foam-wash', ship:'Current retail snapshot • Amazon delivery shown after tap'},
    'Babo Sensitive Baby Lotion': {price:'$18.50', source:'https://www.babobotanicals.com/products/sensitive-baby-fragrance-free-daily-hydra-lotion', ship:'Current retail snapshot • Amazon delivery shown after tap'},
    'Frida Baby True Temp': {price:'$19.99', source:'https://frida.com/products/3-in-1-true-temp-thermometer', ship:'Current retail snapshot • Amazon delivery shown after tap'},
    'FridaBaby NoseFrida': {price:'$14.99', source:'https://frida.com/products/nosefrida', ship:'Current retail snapshot • Amazon delivery shown after tap'},
    'Little Remedies Saline': {price:'$3.99', source:'https://www.target.com/p/-/A-52654995', ship:'In stock when checked • Amazon delivery shown after tap'},
    'Frida Baby Electric Nail Buffer': {price:'$39.99', source:'https://frida.com/products/electric-nail-buffer', ship:'Current retail snapshot • Amazon delivery shown after tap'},
    'Natursutten Natural Rubber Pacifier': {price:'See current price', source:'https://natursutten.com/collections/pacifiers', ship:'Amazon delivery shown after tap'},
    'ATTITUDE Baby Unscented Laundry': {price:'$16.95 / 35 loads', source:'https://attitudeliving.com/products/baby-laundry-detergent', ship:'Brand free shipping over $74 • Amazon delivery shown after tap'},
    'Ubbi Steel Diaper Pail': {price:'$69.99', source:'https://ubbiworld.com/products/ubbi-diaper-pail?country=US', ship:'Current retail snapshot • Amazon delivery shown after tap'},
    'Parker Baby Diaper Caddy': {price:'$23.00', source:'https://www.parkerbaby.com/collections/diaper-caddy', ship:'Current retail snapshot • Amazon delivery shown after tap'},
    'Infant Optics DXR-8 Pro': {price:'$199.99', source:'https://www.target.com/p/-/A-80641472', ship:'In stock when checked • Amazon delivery shown after tap'},
    'UPPAbaby Cruz': {price:'$439.99–$463.99', source:'https://uppababyweb.uppababy.com/product/cruz-stroller/', ship:'Current retail snapshot • Amazon delivery shown after tap'},
    'Ergobaby Embrace': {price:'$74.00 sale', source:'https://ergobaby.com/en-us/products/embrace-newborn-carrier', ship:'Brand offers free shipping • Amazon delivery shown after tap'},
    'Dagne Dover Indi': {price:'From $188 sale', source:'https://www.dagnedover.com/collections/indi-diaper-backpack', ship:'Current retail snapshot • Amazon delivery shown after tap'}
  };

  const cacheKey = 'wlaProductPhotoCacheV1';
  const quotaKey = 'wlaPhotoQuotaV1';
  const cache = JSON.parse(localStorage.getItem(cacheKey) || '{}');
  let quota = JSON.parse(localStorage.getItem(quotaKey) || '{}');
  const today = new Date().toISOString().slice(0,10);
  if (quota.day !== today) quota = {day:today,count:0};
  const seen = new Set();

  const save = () => {
    localStorage.setItem(cacheKey, JSON.stringify(cache));
    localStorage.setItem(quotaKey, JSON.stringify(quota));
  };

  async function getPhoto(name, source) {
    if (cache[name]) return cache[name];
    if (!source || quota.count >= 18 || seen.has(name)) return '';
    seen.add(name);
    quota.count++;
    save();
    try {
      const endpoint = 'https://api.microlink.io?url=' + encodeURIComponent(source) + '&filter=image.url';
      const r = await fetch(endpoint, {cache:'force-cache'});
      if (!r.ok) return '';
      const j = await r.json();
      const url = j?.data?.image?.url || '';
      if (url) { cache[name] = url; save(); }
      return url;
    } catch (_) { return ''; }
  }

  function amazonUrl(name) { return A(name); }

  async function enhanceCard(card) {
    const titleEl = card.querySelector('.shop-title');
    if (!titleEl) return;
    const name = titleEl.textContent.trim();
    const data = CATALOG[name];
    if (!data) return;

    const url = amazonUrl(name);
    card.querySelectorAll('a').forEach(a => { a.href = url; a.removeAttribute('target'); });
    const price = card.querySelector('.price-line strong');
    if (price) price.textContent = data.price;
    const delivery = card.querySelector('.delivery-line');
    if (delivery) delivery.textContent = data.ship;

    if (!card.querySelector('.checked-line')) {
      const line = document.createElement('div');
      line.className = 'checked-line';
      line.textContent = 'Price checked ' + CHECKED;
      delivery?.after(line);
    }

    const imageBox = card.querySelector('.shop-image');
    const existing = imageBox?.querySelector('img');
    if (existing && existing.src && !existing.src.includes('amazon.com/images/I/71b8xgM2dHL')) return;
    const photo = await getPhoto(name, data.source);
    if (photo && imageBox && document.contains(card)) {
      imageBox.innerHTML = `<img src="${photo}" alt="${name}" loading="lazy" referrerpolicy="no-referrer">`;
    }
  }

  function enhanceDetail() {
    const h = document.querySelector('#detailContent .detail-title');
    if (!h) return;
    const name = h.textContent.trim();
    const data = CATALOG[name];
    if (!data) return;
    const box = document.querySelector('#detailContent .amazon-status');
    if (box) box.innerHTML = `<strong>${data.price}</strong><span>${data.ship}<br>Price snapshot checked ${CHECKED}.</span>`;
    const link = document.querySelector('#detailContent .primary-link');
    if (link) { link.href = amazonUrl(name); link.removeAttribute('target'); }
    const photoLink = document.querySelector('#detailContent .detail-photo');
    if (photoLink) { photoLink.href = amazonUrl(name); photoLink.removeAttribute('target'); }
    const cached = cache[name];
    if (cached && photoLink) photoLink.innerHTML = `<img src="${cached}" alt="${name}" referrerpolicy="no-referrer">`;
    else if (data.source && photoLink) getPhoto(name,data.source).then(photo=>{ if(photo && document.contains(photoLink)) photoLink.innerHTML=`<img src="${photo}" alt="${name}" referrerpolicy="no-referrer">`; });
  }

  function run() {
    document.querySelectorAll('.shop-card').forEach(enhanceCard);
    enhanceDetail();
  }

  const obs = new MutationObserver(() => requestAnimationFrame(run));
  obs.observe(document.documentElement, {subtree:true, childList:true});
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', run); else run();
})();
