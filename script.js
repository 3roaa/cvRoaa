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
// 🌙 الوضع الليلي
const themeBtn = document.getElementById('themeBtn');
const themeText = document.getElementById('themeText');

themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  if (document.body.classList.contains('dark-mode')) {
    themeText.textContent = 'الوضع النهاري';
  } else {
    themeText.textContent = 'الوضع الليلي';
  }
});

// 🌍 تبديل اللغة
function switchLang(lang) {
  const html = document.documentElement;

  if (lang === 'en') {
    html.lang = 'en';
    html.dir = 'ltr';
    document.getElementById('mainTitle').textContent = 'Roaa Alqarni';
    document.getElementById('jobTitle').textContent = 'Web Developer | ASP.NET & SQL Experience';
    document.getElementById('contact-title').innerHTML = '<i class="fas fa-id-card"></i> Contact Information';
    document.getElementById('education-title').innerHTML = '<i class="fas fa-graduation-cap"></i> Education';
    document.getElementById('training-title').innerHTML = '<i class="fas fa-laptop-code"></i> Internship';
    document.getElementById('experience-title').innerHTML = '<i class="fas fa-briefcase"></i> Work Experience';
    document.getElementById('projects-title').innerHTML = '<i class="fas fa-project-diagram"></i> Projects';
    document.getElementById('skills-title').innerHTML = '<i class="fas fa-code"></i> Technical Skills';
    document.getElementById('languages-title').innerHTML = '<i class="fas fa-language"></i> Languages';
    document.getElementById('downloadBtn').innerHTML = '<i class="fas fa-download"></i> Download Resume';

    document.querySelectorAll('.lang-toggle button').forEach(btn => btn.classList.remove('active'));
    document.querySelector(".lang-toggle button[onclick=\"switchLang('en')\"]").classList.add('active');
  } else {
    html.lang = 'ar';
    html.dir = 'rtl';
    document.getElementById('mainTitle').textContent = 'رؤى القرني';
    document.getElementById('jobTitle').textContent = 'مبرمجة وتطوير ويب | خبرة في ASP.NET و SQL';
    document.getElementById('contact-title').innerHTML = '<i class="fas fa-id-card"></i> معلومات التواصل';
    document.getElementById('education-title').innerHTML = '<i class="fas fa-graduation-cap"></i> التعليم';
    document.getElementById('training-title').innerHTML = '<i class="fas fa-laptop-code"></i> التدريب التعاوني';
    document.getElementById('experience-title').innerHTML = '<i class="fas fa-briefcase"></i> الخبرات العملية';
    document.getElementById('projects-title').innerHTML = '<i class="fas fa-project-diagram"></i> المشاريع';
    document.getElementById('skills-title').innerHTML = '<i class="fas fa-code"></i> المهارات الفنية';
    document.getElementById('languages-title').innerHTML = '<i class="fas fa-language"></i> اللغات';
    document.getElementById('downloadBtn').innerHTML = '<i class="fas fa-download"></i> تحميل السيرة الذاتية';

    document.querySelectorAll('.lang-toggle button').forEach(btn => btn.classList.remove('active'));
    document.querySelector(".lang-toggle button[onclick=\"switchLang('ar')\"]").classList.add('active');
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
