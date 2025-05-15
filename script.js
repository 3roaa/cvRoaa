// تحميل التفضيلات عند بدء التشغيل
document.addEventListener('DOMContentLoaded', function() {
  loadThemePreference();
  setupEventListeners();
  updateLastModifiedDate();
});

// إعداد مستمعي الأحداث
function setupEventListeners() {
  // زر الوضع الليلي
  document.getElementById('themeBtn').addEventListener('click', toggleTheme);
  
  // زر التنزيل
  document.getElementById('downloadBtn').addEventListener('click', downloadCV);
}

// تبديل الوضع الليلي/النهاري
function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const themeBtn = document.getElementById('themeBtn');
  const themeText = document.getElementById('themeText');
  
  if (currentTheme === 'dark') {
    document.documentElement.removeAttribute('data-theme');
    themeText.textContent = 'الوضع الليلي';
    themeBtn.innerHTML = '<i class="fas fa-moon"></i> <span id="themeText">الوضع الليلي</span>';
    localStorage.setItem('theme', 'light');
  } else {
    document.documentElement.setAttribute('data-theme', 'dark');
    themeText.textContent = 'الوضع النهاري';
    themeBtn.innerHTML = '<i class="fas fa-sun"></i> <span id="themeText">الوضع النهاري</span>';
    localStorage.setItem('theme', 'dark');
  }
}

// تحميل تفضيلات الوضع الليلي
function loadThemePreference() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    document.getElementById('themeBtn').innerHTML = '<i class="fas fa-sun"></i> <span id="themeText">الوضع النهاري</span>';
  }
}

// تنزيل السيرة الذاتية
function downloadCV() {
  // يمكنك تغيير الرابط حسب اسم ملفك
  const link = document.createElement('a');
  link.href = 'RoaaAlqarni.pdf';
  link.download = 'السيرة_الذاتية_رؤى_القرني.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  
  // أو استخدام هذا البديل إذا واجهت مشاكل
  // window.open('RoaaAlqarni.pdf', '_blank');
}

// تبديل اللغة (مثال توضيحي)
function switchLang(lang) {
  if (lang === 'en') {
    // هنا يمكنك تحويل المستخدم لصغة الإنجليزية
    alert('سيتم تحويلك للنسخة الإنجليزية');
    // window.location.href = 'en.html';
  } else {
    // الصفحة الحالية هي العربية
    alert('أنت بالفعل في النسخة العربية');
  }
}

// تحديث تاريخ آخر تعديل
function updateLastModifiedDate() {
  const updateDate = new Date().toLocaleDateString('ar-SA');
  const dateElement = document.createElement('p');
  dateElement.textContent = `آخر تحديث: ${updateDate}`;
  dateElement.style.textAlign = 'center';
  dateElement.style.marginTop = '1rem';
  dateElement.style.opacity = '0.7';
  document.querySelector('main').appendChild(dateElement);
}
