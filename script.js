   // وضع النهار/الليل
    function toggleTheme() {
      const body = document.body;
      const themeBtn = document.getElementById('themeBtn');
      
      if (body.getAttribute('data-theme') === 'dark') {
        body.removeAttribute('data-theme');
        themeBtn.innerHTML = '<i class="fas fa-moon"></i> الوضع الليلي';
        localStorage.setItem('theme', 'light');
      } else {
        body.setAttribute('data-theme', 'dark');
        themeBtn.innerHTML = '<i class="fas fa-sun"></i> الوضع النهاري';
        localStorage.setItem('theme', 'dark');
      }
    }
    
    // التحقق من وضع الألوان المحفوظ
    if (localStorage.getItem('theme') === 'dark') {
      document.body.setAttribute('data-theme', 'dark');
      document.getElementById('themeBtn').innerHTML = '<i class="fas fa-sun"></i> الوضع النهاري';
    }
    
    // تبديل اللغة
    function switchLang(lang) {
      if (lang === 'en') {
        // هنا يمكنك إضافة الترجمة الإنجليزية
        alert('English version will be available soon');
      }
    }
    
    // إنشاء ملف PDF عند النقر على زر التحميل
    document.querySelector('.download-btn').addEventListener('click', function() {
      // يمكنك إضافة كود لإنشاء PDF هنا أو استخدام خدمة خارجية
      // هذا مثال بسيط للتنزيل
      this.setAttribute('href', 'data:application/pdf;base64,...');
    });
