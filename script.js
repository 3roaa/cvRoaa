function switchLang(lang) {
  const elements = document.querySelectorAll('[data-en], [data-ar]');
  elements.forEach(el => {
    if (lang === 'en') {
      el.textContent = el.getAttribute('data-en');
    } else {
      el.textContent = el.getAttribute('data-ar');
    }
  });

  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
}
