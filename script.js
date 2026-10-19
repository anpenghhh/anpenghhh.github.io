// 主题切换 + 滚动入场。没有依赖。
(function () {
  const root = document.documentElement;
  const toggle = document.getElementById('themeToggle');

  toggle.addEventListener('click', () => {
    const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
    root.dataset.theme = next;
    try {
      localStorage.setItem('theme', next);
    } catch (e) {
      // 隐私模式下 localStorage 不可用，忽略
    }
  });

  const items = [...document.querySelectorAll('[data-reveal]')];

  // 在对比页的 iframe 里时直接显示，不等滚动触发
  if (window.self !== window.top) {
    items.forEach((el) => el.classList.add('is-in'));
    return;
  }

  if (!('IntersectionObserver' in window)) {
    items.forEach((el) => el.classList.add('is-in'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-in');
        observer.unobserve(entry.target);
      });
    },
    { rootMargin: '0px 0px -12% 0px' }
  );

  items.forEach((el) => observer.observe(el));
})();
