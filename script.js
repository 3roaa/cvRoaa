function switchLang(lang) {
  document.querySelectorAll('[data-en]').forEach(el => {
    el.textContent = el.getAttribute(`data-${lang}`);
  });
  document.body.dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.documentElement.lang = lang;
}
