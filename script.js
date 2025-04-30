function switchLang(lang) {
  // تغيير اتجاه الصفحة
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

  // تغيير النصوص باستخدام data attributes
  const elements = document.querySelectorAll('[data-en][data-ar]');
  elements.forEach(el => {
    el.textContent = el.getAttribute(`data-${lang}`);
  });
}
