// تغيير الوضع الليلي/النهاري
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

// تغيير اللغة
function switchLang(lang) {
  if (lang === 'en') {
    window.location.href = 'index-en.html'; // ملف منفصل للغة الإنجليزية
  } else {
    window.location.href = 'index.html'; // ملف اللغة العربية
  }
}

// تحميل التفضيلات المحفوظة
function loadPreferences() {
  // تحميل تفضيلات الوضع الليلي
  const savedTheme = localStorage.getItem('theme');
  const themeBtn = document.getElementById('themeBtn');
  
  if (savedTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    themeBtn.innerHTML = '<i class="fas fa-sun"></i> الوضع النهاري';
  }
  
  // إضافة active للزر المحدد
  const currentLang = document.documentElement.getAttribute('lang');
  const langButtons = document.querySelectorAll('.lang-toggle button');
  
  langButtons.forEach(btn => {
    if (btn.textContent === (currentLang === 'ar' ? 'العربية' : 'English')) {
      btn.classList.add('active');
    }
  });
}

// تهيئة الصفحة عند التحميل
document.addEventListener('DOMContentLoaded', () => {
  loadPreferences();
  
  // إضافة تأثيرات للعناصر عند التمرير
  const sections = document.querySelectorAll('section');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });
  
  sections.forEach(section => {
    section.style.opacity = 0;
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(section);
  });
  
  // إضافة تاريخ التحديث تلقائياً
  const updateDate = new Date().toLocaleDateString('ar-SA');
  const dateElement = document.createElement('p');
  dateElement.style.textAlign = 'center';
  dateElement.style.marginTop = '1rem';
  dateElement.style.fontSize = '0.8rem';
  dateElement.style.opacity = '0.7';
  dateElement.textContent = `آخر تحديث: ${updateDate}`;
  document.querySelector('main').appendChild(dateElement);
});
