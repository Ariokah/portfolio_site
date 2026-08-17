// ==========================================================================
// 採用SNS運用代行サービス LP - script.js
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {

  /* ------------------------------------------------------------------------
     スクロールアニメーション（.fade-in を監視して .visible を付与）
     ------------------------------------------------------------------------ */
  const fadeInElements = document.querySelectorAll('.fade-in');

  if ('IntersectionObserver' in window && fadeInElements.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.15
    });

    fadeInElements.forEach((el) => observer.observe(el));
  } else {
    // IntersectionObserver 非対応環境ではそのまま表示
    fadeInElements.forEach((el) => el.classList.add('visible'));
  }

  /* ------------------------------------------------------------------------
     スムーススクロール（ページ内リンク用）
     ------------------------------------------------------------------------ */
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (targetId === '#' || targetId.length <= 1) return;

      const targetEl = document.querySelector(targetId);
      if (!targetEl) return;

      e.preventDefault();
      targetEl.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  });

});
