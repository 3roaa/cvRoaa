function switchLang(lang) {
  const elements = document.querySelectorAll('[data-en], [data-ar]');
  elements.forEach(element => {
    const text = lang === 'en' ? element.getAttribute('data-en') : element.getAttribute('data-ar');
    if (text) {
      element.textContent = text;
    }
  });
}
