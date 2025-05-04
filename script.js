// Function to switch between languages
function switchLang(lang) {
  const elements = document.querySelectorAll('[data-en], [data-ar]');
  elements.forEach(element => {
    const textEn = element.getAttribute('data-en');
    const textAr = element.getAttribute('data-ar');
    if (lang === 'en') {
      element.textContent = textEn;
    } else if (lang === 'ar') {
      element.textContent = textAr;
    }
  });
}
