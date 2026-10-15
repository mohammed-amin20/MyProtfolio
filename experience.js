(() => {
  const root = document.documentElement;
  const translations = {
    'Certificates':'الشهادات',
    '03 / CERTIFICATES':'٠٣ / الشهادات',
    'Always building. Always learning.':'أبني باستمرار. وأتعلم باستمرار.',
    'More knowledge.':'معرفة أوسع.',
    'More possibilities.':'وإمكانيات أكبر.',
    'Continuing to grow beyond the code, from professional identity to smarter workflows and independent work.':'أواصل تطوير مهاراتي إلى جانب البرمجة، من الهوية المهنية إلى سير العمل الذكي والعمل المستقل.',
    'Learning, documented.':'رحلة تعلم موثقة.',
    'Certificates of attendance · Avatar':'شهادات حضور دورات تدريبية · أفاتار',
    'certificates':'شهادات',
    'training hours':'ساعات تدريبية',
    'Career foundations':'أسس المسار المهني',
    'Smarter workflows':'سير عمل أذكى',
    'Independent work':'العمل المستقل',
    'Professional identity & positioning':'الهوية المهنية والتموضع المهني',
    'AI-powered productivity':'الإنتاجية بالذكاء الاصطناعي',
    'Freelancing & remote work':'العمل الحر والعمل عن بُعد',
    'Introduction to professional identity and positioning.':'مقدمة في الهوية المهنية والتموضع المهني.',
    'Introduction to AI-powered productivity, automation & digital workflows.':'مقدمة في تعزيز الإنتاجية باستخدام الذكاء الاصطناعي وأتمتة المهام وسير العمل الرقمي.',
    'Freelancing & remote work enablement.':'تأهيل وتمكين المستقلين للعمل الحر والعمل عن بُعد.',
    'Avatar':'أفاتار',
    'Issued October 2026':'صدرت في أكتوبر ٢٠٢٦',
    'View certificate':'عرض الشهادة',
    'Verify credential':'التحقق من الشهادة',
    'Certificate':'شهادة',
    'Close certificate viewer':'إغلاق عارض الشهادات',
    'Work':'الأعمال', 'Services':'الخدمات', 'About':'عنّي', "Let's talk":'لنتحدث', 'Menu':'القائمة',
    'Mohammed Ghazal':'محمد غزال', 'Mohammed Amen Ghazal':'محمد أمين غزال', 'MOBILE DEVELOPER':'مطور تطبيقات الهاتف',
    'Skip to content':'انتقل إلى المحتوى', 'INDEPENDENT DEVELOPER / GAZA, PALESTINE':'مطور مستقل / غزة، فلسطين',
    'Android & Flutter Developer':'مطور أندرويد وFlutter', 'Android & Flutter Developer · Gaza, Palestine':'مطور أندرويد وFlutter · غزة، فلسطين',
    'Good ideas deserve':'الأفكار المميزة تستحق', 'great mobile apps.':'تطبيقات استثنائية.',
    "I'm Mohammed, an Android & Flutter developer. I build thoughtful interfaces and reliable mobile experiences — from the first sketch to the next release.":'أنا محمد، مطور أندرويد وFlutter. أبني واجهات مدروسة وتجارب موثوقة، من أول فكرة إلى الإصدار القادم.',
    'Explore my work':'استكشف أعمالي', 'Discuss your project':'لنناقش مشروعك', 'Download my CV':'تحميل سيرتي الذاتية',
    'Thoughtful UI. Maintainable code.':'واجهات مدروسة. كود قابل للتطوير.', 'years of experience':'سنوات من الخبرة', 'projects worked on':'مشاريع عملت عليها', 'mobile development stacks':'تقنيات لتطوير التطبيقات',
    'The app collection':'مجموعة التطبيقات', 'Real apps.':'تطبيقات حقيقية.', 'Every screen tells a story.':'كل شاشة تروي قصة.',
    'From developer communities to everyday tools. Explore the interfaces, interactions, and details behind my work.':'من مجتمعات المطورين إلى أدوات الحياة اليومية. اكتشف الواجهات والتفاعلات والتفاصيل في أعمالي.',
    'All work':'كل الأعمال', 'Community':'المجتمع', 'Productivity':'الإنتاجية', 'Reference':'المراجع', 'Entertainment':'الترفيه', 'Business':'الأعمال',
    'Developer community':'مجتمع المطورين', 'A place to ask.':'مساحة للسؤال.', 'A community to grow.':'ومجتمع للنمو.',
    'A developer Q&A community with coding questions, profiles, company job postings, and moderation tools.':'مجتمع للأسئلة والأجوبة البرمجية، مع ملفات شخصية وفرص عمل للشركات وأدوات للإشراف.',
    'Questions & answers':'أسئلة وأجوبة', 'Jobs & companies':'وظائف وشركات', 'Admin tools':'أدوات الإدارة', 'Behind the build':'خلف الكواليس',
    'Android frontend · Graduation project':'واجهات أندرويد · مشروع تخرج',
    'Implemented Android interfaces and frontend state with Clean Architecture and MVI, across community, company, and admin experiences.':'طورت واجهات أندرويد وإدارة الحالة باستخدام Clean Architecture وMVI، لتجارب المجتمع والشركات والإدارة.',
    'View source':'عرض الكود', 'Every detail, in both themes.':'كل التفاصيل، بالمظهرين.', 'All':'الكل', 'Dark':'داكن', 'Light':'فاتح',
    'Screens rendered from the actual Compose UI using automated screenshot tests.':'صور مولدة من واجهات Compose الفعلية باستخدام اختبارات لقطات شاشة آلية.',
    'Offline notes':'ملاحظات دون إنترنت', 'Small thoughts.':'أفكار صغيرة.', 'Room for big ideas.':'ومساحة لأفكار كبيرة.',
    'An on-device notes app with search, categories, pinned notes, and a PIN-protected hidden notes area.':'تطبيق ملاحظات محلي مع البحث والتصنيفات وتثبيت الملاحظات ومساحة مخفية محمية برمز سري.',
    'Search & categories':'بحث وتصنيفات', 'Hidden notes':'ملاحظات مخفية', 'Android application':'تطبيق أندرويد',
    'Local note management with Room, reactive Compose interfaces, bilingual layouts, and light and dark themes.':'إدارة محلية للملاحظات باستخدام Room وواجهات Compose تفاعلية، مع دعم لغتين ومظهر فاتح وداكن.',
    'Compose preview renders of the actual UI, including editor, vault, and account states.':'معاينات Compose للواجهات الفعلية، بما فيها المحرر والخزنة وحالات الحساب.',
    'Dictionary':'القاموس', 'Language & learning':'اللغة والتعلم', 'Find the word.':'ابحث عن الكلمة.', 'Understand the meaning.':'واكتشف معناها.',
    'English word lookup with definitions, phonetics, pronunciation audio, and Arabic translation in a focused reading interface.':'البحث عن الكلمات الإنجليزية مع التعريفات والصوتيات والنطق والترجمة العربية، في واجهة قراءة واضحة.',
    'Word definitions':'تعريفات الكلمات', 'Audio pronunciation':'النطق الصوتي', 'Arabic translation':'ترجمة عربية',
    'A Kotlin and Compose app with an MVI presentation layer, API integration, and clear loading and connectivity states.':'تطبيق Kotlin وCompose مع طبقة عرض MVI وربط بواجهات API، وحالات واضحة للتحميل والاتصال.',
    'Supplied app captures showing lookup, results, loading, and connectivity states.':'لقطات من التطبيق تعرض البحث والنتائج وحالات التحميل والاتصال.',
    'Character explorer':'مستكشف الشخصيات', 'One app.':'تطبيق واحد.', 'A whole multiverse.':'وعوالم بلا حدود.',
    'A character explorer with cinematic cards, live search, detailed profiles, and playful loading and empty states.':'مستكشف للشخصيات ببطاقات سينمائية وبحث مباشر وملفات مفصلة وحالات تحميل وفراغ مبتكرة.',
    'Character search':'البحث عن الشخصيات', 'Rich profiles':'ملفات تفصيلية', 'Offline cache':'تخزين دون إنترنت',
    'Clean Architecture and MVI with API-backed character browsing, Room caching, and shared-element navigation.':'Clean Architecture وMVI لتصفح الشخصيات عبر API، مع تخزين Room وتنقل بعناصر مشتركة.',
    'Supplied device captures in both themes, including character and network states.':'لقطات من الجهاز بالمظهرين، تشمل حالات الشخصيات والشبكة.',
    'Accounting application':'تطبيق محاسبة', 'Flutter · Supabase · In development':'Flutter · Supabase · قيد التطوير', 'Business software':'برمجيات الأعمال',
    'Sole developer of a company accounting application. Core functionality is completed; offline support, customer messaging, and reports remain in development.':'المطور الوحيد لتطبيق محاسبة لشركة. اكتملت الوظائف الأساسية، ويجري تطوير العمل دون إنترنت ومراسلة العملاء والتقارير.',
    'In development since September 2026':'قيد التطوير منذ سبتمبر ٢٠٢٦', 'More on GitHub':'المزيد على GitHub',
    'What I can help with':'كيف أستطيع مساعدتك', 'From the first screen':'من أول شاشة', 'to the next release.':'إلى الإصدار القادم.',
    'A new app, a new feature, or a problem that needs a careful fix.':'تطبيق جديد، أو ميزة جديدة، أو مشكلة تحتاج إلى حل مدروس.',
    'Mobile development':'تطوير التطبيقات', 'Native Android apps with Kotlin and Jetpack Compose, and Android and iOS apps with Flutter.':'تطبيقات أندرويد أصلية باستخدام Kotlin وJetpack Compose، وتطبيقات أندرويد وiOS باستخدام Flutter.',
    'Interfaces & integrations':'واجهات وتكاملات', 'Turn Figma designs into responsive interfaces and connect your app to Firebase, Supabase, and REST APIs.':'أحول تصاميم Figma إلى واجهات متجاوبة، وأربط تطبيقك بـFirebase وSupabase وواجهات REST API.',
    'Fixes & improvements':'إصلاحات وتحسينات', 'Resolve bugs, add features, and improve code organization so your app is easier to maintain and extend.':'أحل الأخطاء وأضيف الميزات وأحسن تنظيم الكود لتسهيل صيانة تطبيقك وتطويره.',
    'A little about me':'نبذة عنّي', 'I care about how':'أهتم بكيفية', 'your app works.':'عمل تطبيقك.', 'And how it grows.':'وكيف ينمو.',
    'A friendly robot building a mobile app':'روبوت لطيف يبني تطبيقاً للهاتف',
    'A little creativity. A lot of care.':'لمسة من الإبداع. والكثير من الاهتمام.',
    "I'm Mohammed Amen Ghazal, an Android and Flutter developer based in Gaza, Palestine. I have more than three years of experience across over six projects, with a focus on responsive interfaces and maintainable code.":'أنا محمد أمين غزال، مطور أندرويد وFlutter من غزة، فلسطين. لدي أكثر من ثلاث سنوات من الخبرة في أكثر من ستة مشاريع، مع التركيز على واجهات متجاوبة وكود قابل للصيانة.',
    'I use Clean Architecture and Clean Code principles to keep projects understandable and ready for future changes. I also value clear requirements and regular communication throughout development.':'أطبق مبادئ Clean Architecture وClean Code لتبقى المشاريع واضحة وجاهزة للتطوير. وأحرص على وضوح المتطلبات والتواصل المنتظم خلال العمل.',
    'I collaborated with Bright Code from August to October 2025 on an Android app using Kotlin and Jetpack Compose, contributing interfaces and assigned development tasks.':'تعاونت مع Bright Code من أغسطس إلى أكتوبر ٢٠٢٥ في تطوير تطبيق أندرويد باستخدام Kotlin وJetpack Compose، وساهمت في بناء الواجهات وتنفيذ مهام التطوير.',
    'My academic background is in Mobile Computing and Smart Device Applications at the Islamic University of Gaza, Faculty of Information Technology.':'خلفيتي الأكاديمية في الحوسبة المتنقلة وتطبيقات الأجهزة الذكية، بكلية تكنولوجيا المعلومات في الجامعة الإسلامية بغزة.',
    'Understand the goal':'فهم الهدف', 'Review your idea, existing app, or design and agree on the scope.':'نراجع فكرتك أو تطبيقك أو تصميمك، ونتفق على نطاق العمل.',
    'Build with feedback':'التطوير مع ملاحظاتك', 'Develop in clear stages and keep you involved as the work progresses.':'أطور المشروع على مراحل واضحة، وأطلعك على التقدم أولاً بأول.',
    'Review and hand over':'المراجعة والتسليم', 'Check the agreed functionality and prepare the deliverables for you.':'أراجع الوظائف المتفق عليها، وأجهز المشروع للتسليم.',
    'Prefer to work through a freelance platform? Find my profiles here.':'تفضل العمل عبر منصة للعمل الحر؟ تجد حساباتي هنا.',
    'Work your way':'اختر طريقتك للعمل', 'Your platform.':'منصتك المفضلة.', 'Our next project.':'ومشروعنا القادم.',
    'App development':'تطوير التطبيقات', 'Complete projects':'مشاريع متكاملة', 'Features & improvements':'ميزات وتحسينات',
    'Development projects':'مشاريع برمجية', 'View my profile':'عرض ملفي الشخصي',
    "Let's build something useful":'لنبنِ شيئاً مفيداً', 'Have an app in mind?':'لديك فكرة تطبيق؟',
    'Get in touch':'لنتواصل', 'Beyond the inbox':'تواصل بطريقتك', 'Find me on your favorite platform.':'تجدني على منصتك المفضلة.',
    'Facebook':'فيسبوك', 'Instagram':'إنستغرام', 'Connect with me':'تواصل معي',
    "Tell me what you want to build, improve, or fix. Let's work out the scope and the next step together.":'حدثني عما تريد بناءه أو تحسينه أو إصلاحه. لنحدد نطاق العمل والخطوة القادمة معاً.',
    'Chat on WhatsApp':'تواصل عبر واتساب', 'Thoughtful interfaces. Reliable mobile apps.':'واجهات مدروسة. تطبيقات موثوقة.', '© 2026 Mohammed Ghazal.':'© ٢٠٢٦ محمد غزال.',
    'Email':'البريد الإلكتروني', 'Back to top':'العودة للأعلى', 'App screenshot':'لقطة من التطبيق', 'Close':'إغلاق', 'Previous':'السابق', 'Next':'التالي',
    'Feed':'الرئيسية', 'Question details':'تفاصيل السؤال', 'Profile':'الملف الشخصي', 'Home':'الرئيسية', 'Details':'التفاصيل', 'Output':'النتائج', 'No internet':'لا يوجد اتصال',
    'Add edit note':'إضافة وتعديل ملاحظة', 'Add edit question':'إضافة وتعديل سؤال', 'Admin dashboard':'لوحة الإدارة', 'Admin profile':'ملف المدير', 'Banned':'الحسابات المحظورة',
    'Company dashboard':'لوحة الشركة', 'Company job detail':'تفاصيل وظيفة الشركة', 'Company profile':'ملف الشركة', 'Edit company profile':'تعديل ملف الشركة', 'Edit profile':'تعديل الملف الشخصي',
    'Hidden notes empty':'لا توجد ملاحظات مخفية', 'Hidden notes list':'قائمة الملاحظات المخفية', 'Hidden notes select mode':'تحديد الملاحظات المخفية', 'Job detail':'تفاصيل الوظيفة',
    'Loading':'جارٍ التحميل', 'Login':'تسجيل الدخول', 'Manage announcements':'إدارة الإعلانات', 'Manage answers':'إدارة الإجابات', 'Manage companies':'إدارة الشركات', 'Manage jobs':'إدارة الوظائف',
    'Manage questions':'إدارة الأسئلة', 'Manage reports':'إدارة البلاغات', 'Manage users':'إدارة المستخدمين', 'No notes':'لا توجد ملاحظات', 'Notes':'الملاحظات', 'Notifications':'الإشعارات',
    'Onboarding':'الترحيب', 'Pending approval':'بانتظار الموافقة', 'Pin setup':'إعداد الرمز السري', 'Pin setup confirm':'تأكيد الرمز السري', 'Pin setup mismatch':'عدم تطابق الرمز',
    'Pin verify':'التحقق من الرمز', 'Pin verify forget dialog':'نسيان الرمز السري', 'Pin verify locked':'القفل المؤقت', 'Post job':'نشر وظيفة', 'Search':'البحث', 'Search loading':'تحميل البحث',
    'Selected':'الملاحظات المحددة', 'Settings':'الإعدادات', 'Settings logout dialog':'تأكيد تسجيل الخروج', 'Settings narrow':'الإعدادات على شاشة صغيرة', 'Signup':'إنشاء حساب',
    'Splash':'شاشة البداية', 'Failed notfound':'لا توجد نتائج', 'Whatsapp image 2026 10 12 at 12.25.00 pm':'لقطة من التطبيق',
    'Main navigation':'التنقل الرئيسي', 'Display preferences':'تفضيلات العرض', 'Filter projects':'تصفية المشاريع', 'Experience':'الخبرة', 'Close image viewer':'إغلاق عارض الصور', 'Mohammed Ghazal home':'محمد غزال — الرئيسية',
    'Mohammed Amen Ghazal, Android and Flutter developer':'محمد أمين غزال، مطور أندرويد وFlutter', '02 / EXPERTISE':'٠٢ / الخبرات', '01 / PROJECTS':'٠١ / المشاريع'
  };
  const translate = text => {
    if (root.lang !== 'ar') return text;
    if (translations[text]) return translations[text];
    const gallery = text.match(/^Explore all (\d+) app screens$/);
    if (gallery) return `استكشف جميع الشاشات (${gallery[1]})`;
    return text;
  };
  window.portfolioText = translate;
  window.portfolioResults = count => root.lang === 'ar' ? `${count} مشاريع` : `${count} project${count === 1 ? '' : 's'}`;
  const textNodes = [];
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode: node => node.parentElement.closest('script,style,noscript,.preferences,#project-results,#viewer-count,#viewer-title') || !node.textContent.trim() ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT
  });
  while (walker.nextNode()) textNodes.push([walker.currentNode, walker.currentNode.textContent]);
  const attributes = [];
  document.querySelectorAll('[aria-label],img[alt],[data-section]').forEach(element => {
    ['aria-label', 'alt', 'data-section'].forEach(name => {
      if (element.hasAttribute(name)) attributes.push([element, name, element.getAttribute(name)]);
    });
  });
  const store = (key, value) => { try { localStorage.setItem(key, value); } catch {} };
  const themeButton = document.getElementById('theme-toggle');
  const languageButton = document.getElementById('language-toggle');
  const applyTheme = theme => {
    root.dataset.theme = theme;
    const isLight = theme === 'light';
    const label = root.lang === 'ar' ? (isLight ? 'تفعيل المظهر الداكن' : 'تفعيل المظهر الفاتح') : (isLight ? 'Switch to dark theme' : 'Switch to light theme');
    themeButton.setAttribute('aria-label', label); themeButton.title = label;
    themeButton.setAttribute('aria-pressed', String(isLight));
    document.querySelector('meta[name="theme-color"]').content = isLight ? '#f7f6fc' : '#101019';
    const logoPath = isLight ? 'assets/mg-mark-light.svg' : 'assets/mg-mark.svg';
    document.querySelectorAll('.brand-mark,.footer-mark').forEach(image => { image.src = logoPath; });
    document.querySelector('link[rel="icon"]').href = logoPath;
  };
  const applyLanguage = language => {
    root.lang = language; root.dir = language === 'ar' ? 'rtl' : 'ltr';
    textNodes.forEach(([node, original]) => { node.textContent = original.replace(original.trim(), translate(original.trim())); });
    attributes.forEach(([element, name, original]) => {
      let value = translate(original);
      if (language === 'ar' && element.matches('.screenshot-link')) value = `تكبير ${element.dataset.project} — ${translate(element.dataset.caption)}`;
      if (language === 'ar' && element.matches('.screen img')) {
        const link = element.closest('.screenshot-link');
        value = `${link.dataset.project} — ${translate(link.dataset.caption)} — ${translate(link.dataset.theme === 'light' ? 'Light' : link.dataset.theme === 'dark' ? 'Dark' : 'All')}`;
      }
      if (language === 'ar' && original.endsWith(' screenshot theme')) value = 'مظهر لقطات التطبيق';
      element.setAttribute(name, value);
    });
    languageButton.querySelector('span').textContent = language === 'ar' ? 'EN' : 'العربية';
    languageButton.setAttribute('aria-label', language === 'ar' ? 'Switch to English' : 'التبديل إلى العربية');
    languageButton.title = languageButton.getAttribute('aria-label');
    languageButton.setAttribute('lang', language === 'ar' ? 'en' : 'ar');
    document.getElementById('project-results').textContent = window.portfolioResults([...document.querySelectorAll('.project-card')].filter(card => !card.hidden).length);
    document.title = language === 'ar' ? 'محمد غزال — مطور أندرويد وFlutter' : 'Mohammed Ghazal — Android & Flutter Developer';
    document.querySelector('meta[name="description"]').content = language === 'ar' ? 'محمد غزال، مطور أندرويد وFlutter. تطبيقات موثوقة وواجهات مدروسة باستخدام Kotlin وJetpack Compose.' : 'Mohammed Ghazal is an Android and Flutter developer building practical mobile apps with Kotlin, Jetpack Compose, and clean architecture.';
    document.getElementById('viewer-title').textContent = translate('App screenshot');
    applyTheme(root.dataset.theme);
    document.dispatchEvent(new Event('portfolio-language-change'));
  };
  themeButton.addEventListener('click', () => { const theme = root.dataset.theme === 'light' ? 'dark' : 'light'; applyTheme(theme); store('portfolio-theme', theme); });
  languageButton.addEventListener('click', () => { const language = root.lang === 'ar' ? 'en' : 'ar'; applyLanguage(language); store('portfolio-language', language); });
  applyLanguage(root.lang === 'ar' ? 'ar' : 'en');
  document.querySelectorAll('.platform-wordmark img').forEach(image => {
    const updateLogo = () => image.parentElement.classList.toggle('has-logo', image.complete && image.naturalWidth > 0);
    image.addEventListener('load', updateLogo);
    image.addEventListener('error', updateLogo);
    updateLogo();
  });
  const motion = matchMedia('(prefers-reduced-motion: reduce)');
  const finePointer = matchMedia('(hover: hover) and (pointer: fine)');
  document.querySelectorAll('.platform-card,.social-card,.certificate-card').forEach(card => {
    let frame = 0;
    let pointerX = 50, pointerY = 30;
    card.addEventListener('pointermove', event => {
      if (!finePointer.matches || motion.matches) return;
      const bounds = card.getBoundingClientRect();
      pointerX = ((event.clientX - bounds.left) / bounds.width) * 100;
      pointerY = ((event.clientY - bounds.top) / bounds.height) * 100;
      if (!frame) frame = requestAnimationFrame(() => {
        card.style.setProperty('--pointer-x', `${pointerX}%`);
        card.style.setProperty('--pointer-y', `${pointerY}%`);
        frame = 0;
      });
    });
    card.addEventListener('pointerleave', () => {
      cancelAnimationFrame(frame); frame = 0;
      card.style.removeProperty('--pointer-x'); card.style.removeProperty('--pointer-y');
    });
  });
  document.querySelectorAll('.hero-sculpture,.background-orbit,.about-character').forEach(sculpture => {
    let sculptureVisible = true;
    const updateSculpture = () => sculpture.classList.toggle('is-active', sculptureVisible && !document.hidden && !motion.matches);
    if ('IntersectionObserver' in window) {
      const sculptureObserver = new IntersectionObserver(entries => {
        sculptureVisible = entries[0].isIntersecting;
        updateSculpture();
      });
      sculptureObserver.observe(sculpture);
    }
    document.addEventListener('visibilitychange', updateSculpture);
    motion.addEventListener('change', updateSculpture);
    updateSculpture();
  });
  if ('IntersectionObserver' in window) {
    const elements = document.querySelectorAll('.certificate-summary,.certificate-card,.sectionhead,.project-intro,.business-project,.service,.about > div,.about-character,.step,.platforms,.platform-card,.contact,.social-card,.project-gallery .screen');
    const reveals = new IntersectionObserver(entries => entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-revealed');
      reveals.unobserve(entry.target);
    }), { threshold:.06, rootMargin:'0px 0px -35px 0px' });
    elements.forEach(element => {
      const siblings = [...element.parentElement.children];
      const stagger = element.matches('.certificate-card,.service,.platform-card,.social-card,.step,.screen') ? Math.min(siblings.indexOf(element) % 5, 3) * 85 : 0;
      element.style.setProperty('--reveal-delay', `${stagger}ms`);
      element.classList.add('scroll-reveal');
      const bounds = element.getBoundingClientRect();
      if (motion.matches || (bounds.height > 0 && bounds.top < innerHeight && bounds.bottom > 0)) element.classList.add('is-revealed');
      reveals.observe(element);
    });
    motion.addEventListener('change', event => {
      if (event.matches) elements.forEach(element => element.classList.add('is-revealed'));
    });
    // Bring focusable controls into view immediately for keyboard navigation.
    document.addEventListener('focusin', event => {
      let element = event.target.closest('.scroll-reveal');
      while (element) {
        element.classList.add('is-revealed');
        element = element.parentElement.closest('.scroll-reveal');
      }
    });
  }
  const progress = document.querySelector('.scroll-progress');
  let pending = false;
  const updateProgress = () => {
    const height = root.scrollHeight - root.clientHeight;
    progress.style.transform = `scaleX(${height > 0 ? Math.min(1, Math.max(0, scrollY / height)) : 0})`;
    pending = false;
  };
  addEventListener('scroll', () => { if (!pending) { pending = true; requestAnimationFrame(updateProgress); } }, { passive:true });
  addEventListener('resize', updateProgress); updateProgress();
})();
