// ملف script.js

// دالة لتبديل اللغة
function switchLang(language) {
  // تغيير اللغة في الـ body
  document.body.setAttribute('lang', language);

  // تغيير النصوص في العناصر التي تحتوي على data-en و data-ar
  const elements = document.querySelectorAll('.translatable');

  elements.forEach(function(element) {
    const enText = element.getAttribute('data-en');
    const arText = element.getAttribute('data-ar');

    if (language === 'ar') {
      element.innerHTML = arText;
    } else {
      element.innerHTML = enText;
    }
  });
}
