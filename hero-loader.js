(() => {
  const hero = document.querySelector('.hero img');
  if (!hero) return;

  const VERSION = 'hd1';
  const PARTS = 13;

  async function loadHDHero() {
    try {
      const responses = await Promise.all(
        Array.from({ length: PARTS }, (_, i) =>
          fetch(`hero-q20/part${i}.txt?v=${VERSION}`, { cache: 'force-cache' })
        )
      );
      if (responses.some(r => !r.ok)) throw new Error('Hero part unavailable');

      const chunks = await Promise.all(responses.map(r => r.text()));
      const base64 = chunks.join('').replace(/\s+/g, '');
      const binary = atob(base64);
      const bytes = new Uint8Array(binary.length);
      for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);

      const blob = new Blob([bytes], { type: 'image/avif' });
      const url = URL.createObjectURL(blob);
      const preload = new Image();
      preload.decoding = 'async';
      preload.onload = () => {
        hero.src = url;
        hero.classList.add('hd-ready');
      };
      preload.onerror = () => URL.revokeObjectURL(url);
      preload.src = url;
    } catch (err) {
      console.warn('HD hero could not be loaded; using fallback.', err);
    }
  }

  loadHDHero();
})();
