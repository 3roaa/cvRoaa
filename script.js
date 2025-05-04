// Language content data
const content = {
  ar: {
    name: "رؤى القرني",
    title: "مبرمجة حديثة التخرج | مطورة فل ستاك",
    contactTitle: "معلومات التواصل",
    educationTitle: "التعليم",
    education: "دبلوم برمجة - جامعة الأميرة نورة (2023-2025)",
    trainingTitle: "التدريب التعاوني",
    training: "متدربة فل ستاك – مدينة الملك فهد الطبية",
    trainingItems: [
      "برمجة تطبيقات ويب باستخدام ASP.NET Web Forms و MVC",
      "تصميم قواعد بيانات SQL Server وتنفيذ عمليات CRUD",
      "استخدام ADO.NET وEntity Framework و Visual Studio"
    ],
    experienceTitle: "الخبرات العملية",
    experienceItems: [
      "موظفة استقبال – مركز ألوها",
      "أخصائية تقنية (عن بعد) – Smartcat",
      "متدربة تطوير ويب – مشاريع حقيقية"
    ],
    projectsTitle: "مشاريع",
    projects: [
      {
        title: "نظام إدارة الإخلاء والتصاريح - مدينة الملك فهد الطبية",
        description: "نظام متكامل لإدارة طلبات الإخلاء الطبي والتصاريح",
        features: [
          "سير عمل أوتوماتيكي للموافقة أو الرفض مع إشعارات",
          "لوحة تحكم إدارية لمراقبة جميع المعاملات",
          "تقارير قابلة للتصدير وتتبع للحالات",
          "واجهة مستخدم سهلة للموظفين والمدراء"
        ],
        tech: "التقنيات المستخدمة: ASP.NET MVC, SQL Server, Entity Framework, JavaScript"
      },
      {
        title: "النظام العائلي الذكي - مشروع شخصي",
        description: "مشروع تطوير ويب عائلي شامل باختياري الشخصي",
        features: [
          "تقويم عائلي مشترك لمشاركة الأحداث والمناسبات",
          "نظام إدارة مالية مع تتبع المصروفات والدخل",
          "تحديد الأهداف العائلية السنوية مع متابعة الإنجاز",
          "لوحة تحكم تفاعلية مع إحصائيات مرئية"
        ],
        tech: "التقنيات المستخدمة: ASP.NET Core, SQL Server, Entity Framework, JavaScript + jQuery"
      }
    ],
    skillsTitle: "المهارات الفنية",
    skills: ["C#, Java, Python, JavaScript, HTML, CSS, PHP", "ASP.NET, Entity Framework, SQL Server"],
    languagesTitle: "اللغات",
    languages: ["العربية (اللغة الأم)", "الإنجليزية (متوسطة)"],
    downloadBtn: "⬇️ تحميل السيرة الذاتية"
  },
  en: {
    name: "Roaa Alqarni",
    title: "Fresh Graduate Programmer | Full Stack Developer",
    contactTitle: "Contact Information",
    educationTitle: "Education",
    education: "Diploma in Programming - Princess Nourah University (2023-2025)",
    trainingTitle: "Cooperative Training",
    training: "Full Stack Trainee - King Fahad Medical City",
    trainingItems: [
      "Web application development using ASP.NET Web Forms and MVC",
      "Designing SQL Server databases and implementing CRUD operations",
      "Using ADO.NET, Entity Framework and Visual Studio"
    ],
    experienceTitle: "Work Experience",
    experienceItems: [
      "Receptionist – Aloha Center",
      "Remote Technical Specialist – Smartcat",
      "Web Development Trainee – Real Projects"
    ],
    projectsTitle: "Projects",
    projects: [
      {
        title: "Clearance & Permits Management System - King Fahad Medical City",
        description: "Integrated system for managing medical clearance and permit requests",
        features: [
          "Automated workflow for approval/rejection with notifications",
          "Admin dashboard for monitoring all transactions",
          "Exportable reports and case tracking",
          "User-friendly interface for staff and managers"
        ],
        tech: "Technologies used: ASP.NET MVC, SQL Server, Entity Framework, JavaScript"
      },
      {
        title: "Smart Family System - Personal Project",
        description: "A comprehensive family web project developed by personal initiative",
        features: [
          "Shared family calendar for events and occasions",
          "Financial management with expense/income tracking",
          "Annual family goals with progress tracking",
          "Interactive dashboard with visual statistics"
        ],
        tech: "Technologies used: ASP.NET Core, SQL Server, Entity Framework, JavaScript + jQuery"
      }
    ],
    skillsTitle: "Technical Skills",
    skills: ["C#, Java, Python, JavaScript, HTML, CSS, PHP", "ASP.NET, Entity Framework, SQL Server"],
    languagesTitle: "Languages",
    languages: ["Arabic (Native)", "English (Intermediate)"],
    downloadBtn: "⬇️ Download Resume"
  }
};

// DOM elements
const elements = {
  name: document.getElementById('name'),
  title: document.getElementById('title'),
  contactTitle: document.getElementById('contact-title'),
  educationTitle: document.getElementById('education-title'),
  education: document.querySelector('.education p'),
  trainingTitle: document.getElementById('training-title'),
  training: document.querySelector('.training p'),
  trainingItems: document.querySelectorAll('.training li'),
  experienceTitle: document.getElementById('experience-title'),
  experienceItems: document.querySelectorAll('.experience li'),
  projectsTitle: document.getElementById('projects-title'),
  projectTitles: document.querySelectorAll('.project h3'),
  projectDescriptions: document.querySelectorAll('.project-details p'),
  projectFeatures: document.querySelectorAll('.project ul li'),
  techUsed: document.querySelectorAll('.tech-used'),
  skillsTitle: document.getElementById('skills-title'),
  skillsItems: document.querySelectorAll('.skills li'),
  languagesTitle: document.getElementById('languages-title'),
  languagesItems: document.querySelectorAll('.languages li'),
  downloadBtn: document.querySelector('.download-btn')
};

// Current language
let currentLang = 'ar';

// Switch language function
function switchLang(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  
  // Update all elements
  elements.name.textContent = content[lang].name;
  elements.title.textContent = content[lang].title;
  elements.contactTitle.textContent = content[lang].contactTitle;
  elements.educationTitle.textContent = content[lang].educationTitle;
  elements.education.textContent = content[lang].education;
  elements.trainingTitle.textContent = content[lang].trainingTitle;
  elements.training.textContent = content[lang].training;
  
  // Update training items
  content[lang].trainingItems.forEach((item, i) => {
    if (elements.trainingItems[i]) {
      elements.trainingItems[i].textContent = item;
    }
  });
  
  // Update experience items
  content[lang].experienceItems.forEach((item, i) => {
    if (elements.experienceItems[i]) {
      elements.experienceItems[i].textContent = item;
    }
  });
  
  // Update projects
  elements.projectsTitle.textContent = content[lang].projectsTitle;
  content[lang].projects.forEach((project, i) => {
    if (elements.projectTitles[i]) {
      elements.projectTitles[i].textContent = project.title;
    }
    if (elements.projectDescriptions[i]) {
      elements.projectDescriptions[i].textContent = project.description;
    }
    if (elements.techUsed[i]) {
      elements.techUsed[i].textContent = project.tech;
    }
    
    // Update project features
    const featureElements = document.querySelectorAll(`.project:nth-child(${i+1}) ul li`);
    project.features.forEach((feature, j) => {
      if (featureElements[j]) {
        featureElements[j].textContent = feature;
      }
    });
  });
  
  // Update skills
  elements.skillsTitle.textContent = content[lang].skillsTitle;
  content[lang].skills.forEach((skill, i) => {
    if (elements.skillsItems[i]) {
      elements.skillsItems[i].textContent = skill;
    }
  });
  
  // Update languages
  elements.languagesTitle.textContent = content[lang].languagesTitle;
  content[lang].languages.forEach((language, i) => {
    if (elements.languagesItems[i]) {
      elements.languagesItems[i].textContent = language;
    }
  });
  
  // Update download button
  elements.downloadBtn.textContent = content[lang].downloadBtn;
}

// Initialize with Arabic
switchLang('ar');

// Language toggle event listeners
document.querySelectorAll('.lang-toggle button').forEach(button => {
  button.addEventListener('click', function() {
    const lang = this.getAttribute('onclick').match(/'(\w+)'/)[1];
    switchLang(lang);
  });
});
