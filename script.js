function switchLang(lang) {
    document.body.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.querySelectorAll('[data-en]').forEach(el => {
      el.textContent = lang === 'ar' ? el.getAttribute('data-ar') : el.getAttribute('data-en');
    });
  }
  
  function shareSite() {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => {
      alert("تم نسخ رابط السيرة الذاتية! 📋");
    });
  }
  