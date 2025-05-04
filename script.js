function switchLang(lang) {
  const langElements = document.querySelectorAll('[id]');
  
  const langData = {
    ar: {
      'contact-title': 'معلومات التواصل',
      'education-title': 'التعليم',
      'training-title': 'التدريب التعاوني',
      'experience-title': 'الخبرات العملية',
      'projects-title': 'مشاريع',
      'skills-title': 'المهارات الفنية',
      'soft-skills-title': 'المهارات الشخصية',
      'languages-title': 'اللغات',
    },
    en: {
      'contact-title': 'Contact Information',
      'education-title': 'Education',
      'training-title': 'Internship',
      'experience-title': 'Work Experience',
      'projects-title': 'Projects',
      'skills-title': 'Technical Skills',
      'soft-skills-title': 'Soft Skills',
      'languages-title': 'Languages',
    }
  };

  langElements.forEach(element => {
    const id = element.id;
    if (langData[lang][id]) {
      element.innerText = langData[lang][id];
    }
  });

  document.documentElement.lang = lang;
  document.body.dir = lang === 'ar' ? 'rtl' : 'ltr';
}
