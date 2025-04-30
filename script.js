function switchLang(lang) {
    document.body.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.querySelectorAll('[data-en]').forEach(el => {
      el.textContent = lang === 'ar' ? el.getAttribute('data-ar') : el.getAttribute('data-en');
    });
  }
  function switchLang(language) {
  const elements = document.querySelectorAll('[data-en], [data-ar]');
  
  elements.forEach(element => {
    if (language === 'en') {
      element.innerText = element.getAttribute('data-en');
    } else if (language === 'ar') {
      element.innerText = element.getAttribute('data-ar');
    }
  });
}

  function shareSite() {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => {
      alert("تم نسخ رابط السيرة الذاتية! 📋");
    });
  }
  
