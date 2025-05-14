// دالة تبديل الثيم
function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const themeBtn = document.getElementById('themeBtn');
  
  if (currentTheme === 'dark') {
    document.documentElement.removeAttribute('data-theme');
    themeBtn.innerHTML = '<i class="fas fa-moon"></i> الوضع الليلي';
    localStorage.setItem('theme', 'light');
  } else {
    document.documentElement.setAttribute('data-theme', 'dark');
    themeBtn.innerHTML = '<i class="fas fa-sun"></i> الوضع النهاري';
    localStorage.setItem('theme', 'dark');
  }
}

// تحميل الثيم المحفوظ
function loadTheme() {
  const savedTheme = localStorage.getItem('theme');
  const themeBtn = document.getElementById('themeBtn');
  
  if (savedTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    themeBtn.innerHTML = '<i class="fas fa-sun"></i> الوضع النهاري';
  }
}

// دالة تبديل اللغة
function switchLang(lang) {
  // يمكنك إضافة منطق تبديل اللغة هنا
  alert('سيتم تبديل اللغة إلى ' + (lang === 'en' ? 'الإنجليزية' : 'العربية'));
}

// تحميل الثيم عند بدء التشغيل
window.addEventListener('DOMContentLoaded', function() {
  loadTheme();
  
  // يمكنك إضافة أي كود آخر تحتاج تنفيذه عند تحميل الصفحة هنا
});
