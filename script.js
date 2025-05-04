function switchLang(lang) {
  const elements = document.querySelectorAll('[data-en]');
  elements.forEach(el => {
    el.textContent = el.getAttribute(`data-${lang}`);
  });

  // تغيير الاتجاه إذا كانت اللغة عربية
  document.documentElement.dir = (lang === 'ar') ? 'rtl' : 'ltr';
  document.body.style.textAlign = (lang === 'ar') ? 'right' : 'left';
}

