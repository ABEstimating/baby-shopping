(() => {
  const amazonSearch = q => 'https://www.amazon.com/s?k=' + encodeURIComponent(q);

  function fixCard(card) {
    const title = card.querySelector('.shop-title');
    const name = title?.textContent?.trim();
    if (!name) return;
    const url = amazonSearch(name);
    card.querySelectorAll('a.shop-image, .shop-actions a').forEach(a => {
      a.href = url;
      a.removeAttribute('target');
      a.removeAttribute('rel');
      a.dataset.amazonDirect = '1';
    });
  }

  function fixDetail() {
    const name = document.querySelector('.detail-title')?.textContent?.trim();
    if (!name) return;
    const url = amazonSearch(name);
    document.querySelectorAll('.detail-photo, .primary-link').forEach(a => {
      a.href = url;
      a.removeAttribute('target');
      a.removeAttribute('rel');
      a.dataset.amazonDirect = '1';
    });
  }

  function fixAll() {
    document.querySelectorAll('.shop-card').forEach(fixCard);
    fixDetail();
  }

  document.addEventListener('click', e => {
    const link = e.target.closest('a[data-amazon-direct="1"]');
    if (!link) return;
    e.preventDefault();
    window.location.assign(link.href);
  }, true);

  const observer = new MutationObserver(fixAll);
  observer.observe(document.body, { childList: true, subtree: true });
  addEventListener('DOMContentLoaded', fixAll);
  setTimeout(fixAll, 250);
})();