// 国际化配置模板
const i18n = {
  'en-US': {
    nav: { features: 'Features', pricing: 'Pricing', faq: 'FAQ', download: 'Download' },
    intro: { title: 'Learn Any Language from <span class="accent">Pictures</span>', subtitle: 'Snap a photo, tap a word and see instant translations, examples and pronunciation – powered by AI.', button: 'Get the App' },
    features: { title: 'Key Features' },
    pricing: { title: 'Pricing' },
    faq: { title: 'Frequently Asked Questions' },
    download: { title: 'Download CamLingo' },
    footer: { privacy: 'Privacy Policy', terms: 'Terms of Use', contact: 'Contact Support' },
    links: { support: 'https://mrvincent2025.github.io/camlingo-support/', privacy: 'https://mrvincent2025.github.io/camlingo-support/privacy.html' }
  },
  'en-GB': {
    nav: { features: 'Features', pricing: 'Pricing', faq: 'FAQ', download: 'Download' },
    intro: { title: 'Learn Any Language from <span class="accent">Pictures</span>', subtitle: 'Snap a photo, tap a word and see instant translations, examples and pronunciation – powered by AI.', button: 'Get the App' },
    features: { title: 'Key Features' },
    pricing: { title: 'Pricing' },
    faq: { title: 'Frequently Asked Questions' },
    download: { title: 'Download CamLingo' },
    footer: { privacy: 'Privacy Policy', terms: 'Terms of Use', contact: 'Contact Support' },
    links: { support: 'https://mrvincent2025.github.io/camlingo-support/index-en-uk.html', privacy: 'https://mrvincent2025.github.io/camlingo-support/privacy-en-gb.html' }
  },
  'zh-CN': {
    nav: { features: '功能特色', pricing: '价格', faq: '常见问题', download: '下载' },
    intro: { title: '从<span class="accent">图片</span>学习任何语言', subtitle: '拍照、点击单词，立即获得翻译、例句和发音 – 由AI驱动。', button: '获取应用' },
    features: { title: '核心功能' },
    pricing: { title: '价格' },
    faq: { title: '常见问题' },
    download: { title: '下载CamLingo' },
    footer: { privacy: '隐私政策', terms: '使用条款', contact: '联系支持' },
    links: { support: 'https://mrvincent2025.github.io/camlingo-support/index-zh-cn.html', privacy: 'https://mrvincent2025.github.io/camlingo-support/privacy-zh-cn.html' }
  },
  'zh-TW': {
    nav: { features: '功能特色', pricing: '價格', faq: '常見問題', download: '下載' },
    intro: { title: '從<span class="accent">圖片</span>學習任何語言', subtitle: '拍照、點擊單詞，立即獲得翻譯、例句和發音 – 由AI驅動。', button: '獲取應用' },
    features: { title: '核心功能' },
    pricing: { title: '價格' },
    faq: { title: '常見問題' },
    download: { title: '下載CamLingo' },
    footer: { privacy: '隱私政策', terms: '使用條款', contact: '聯繫支持' },
    links: { support: 'https://mrvincent2025.github.io/camlingo-support/index-zh-tw.html', privacy: 'https://mrvincent2025.github.io/camlingo-support/privacy-zh-tw.html' }
  },
  'es-ES': {
    nav: { features: 'Características', pricing: 'Precios', faq: 'Preguntas frecuentes', download: 'Descargar' },
    intro: { title: 'Aprende idiomas desde <span class="accent">imágenes</span>', subtitle: 'Toma una foto, toca una palabra y obtén traducciones, ejemplos y pronunciación instantáneamente – impulsado por IA.', button: 'Obtener la app' },
    features: { title: 'Características principales' },
    pricing: { title: 'Precios' },
    faq: { title: 'Preguntas frecuentes' },
    download: { title: 'Descargar CamLingo' },
    footer: { privacy: 'Política de privacidad', terms: 'Términos de uso', contact: 'Contactar soporte' },
    links: { support: 'https://mrvincent2025.github.io/camlingo-support/index-es-mx.html', privacy: 'https://mrvincent2025.github.io/camlingo-support/privacy-es-mx.html' },
    links: { support: 'https://mrvincent2025.github.io/camlingo-support/index-es-es.html', privacy: 'https://mrvincent2025.github.io/camlingo-support/privacy-es-es.html' }
  },
  'es-MX': {
    nav: { features: 'Características', pricing: 'Precios', faq: 'Preguntas frecuentes', download: 'Descargar' },
    intro: { title: 'Aprende idiomas desde <span class="accent">imágenes</span>', subtitle: 'Toma una foto, toca una palabra y obtén traducciones, ejemplos y pronunciación instantáneamente – impulsado por IA.', button: 'Obtener la app' },
    features: { title: 'Características principales' },
    pricing: { title: 'Precios' },
    faq: { title: 'Preguntas frecuentes' },
    download: { title: 'Descargar CamLingo' },
    footer: { privacy: 'Política de privacidad', terms: 'Términos de uso', contact: 'Contactar soporte' }
  },
  'fr-FR': {
    nav: { features: 'Fonctionnalités', pricing: 'Tarifs', faq: 'FAQ', download: 'Télécharger' },
    intro: { title: 'Apprendre les langues à partir d\'<span class="accent">images</span>', subtitle: 'Prenez une photo, tapez sur un mot et obtenez instantanément des traductions, des exemples et la prononciation – alimenté par l\'IA.', button: 'Obtenir l\'app' },
    features: { title: 'Fonctionnalités principales' },
    pricing: { title: 'Tarifs' },
    faq: { title: 'Questions fréquemment posées' },
    download: { title: 'Télécharger CamLingo' },
    footer: { privacy: 'Politique de confidentialité', terms: 'Conditions d\'utilisation', contact: 'Contacter le support' },
    links: { support: 'https://mrvincent2025.github.io/camlingo-support/index-fr-fr.html', privacy: 'https://mrvincent2025.github.io/camlingo-support/privacy-fr-fr.html' }
  },
  'fr-CA': {
    nav: { features: 'Fonctionnalités', pricing: 'Tarifs', faq: 'FAQ', download: 'Télécharger' },
    intro: { title: 'Apprendre les langues à partir d\'<span class="accent">images</span>', subtitle: 'Prenez une photo, tapez sur un mot et obtenez instantanément des traductions, des exemples et la prononciation – alimenté par l\'IA.', button: 'Obtenir l\'app' },
    features: { title: 'Fonctionnalités principales' },
    pricing: { title: 'Tarifs' },
    faq: { title: 'Questions fréquemment posées' },
    download: { title: 'Télécharger CamLingo' },
    footer: { privacy: 'Politique de confidentialité', terms: 'Conditions d\'utilisation', contact: 'Contacter le support' }
  },
  'pt-PT': {
    nav: { features: 'Características', pricing: 'Preços', faq: 'Perguntas frequentes', download: 'Transferir' },
    intro: { title: 'Aprenda idiomas a partir de <span class="accent">imagens</span>', subtitle: 'Tire uma foto, toque numa palavra e obtenha traduções, exemplos e pronúncia instantâneos – alimentado por IA.', button: 'Obter a app' },
    features: { title: 'Características principais' },
    pricing: { title: 'Preços' },
    faq: { title: 'Perguntas frequentes' },
    download: { title: 'Transferir CamLingo' },
    footer: { privacy: 'Política de privacidade', terms: 'Termos de utilização', contact: 'Contactar suporte' },
    links: { support: 'https://mrvincent2025.github.io/camlingo-support/index-pt-pt.html', privacy: 'https://mrvincent2025.github.io/camlingo-support/privacy-pt-pt.html' }
  },
  'pt-BR': {
    nav: { features: 'Recursos', pricing: 'Preços', faq: 'Perguntas frequentes', download: 'Baixar' },
    intro: { title: 'Aprenda idiomas a partir de <span class="accent">imagens</span>', subtitle: 'Tire uma foto, toque em uma palavra e obtenha traduções, exemplos e pronúncia instantâneos – alimentado por IA.', button: 'Obter o app' },
    features: { title: 'Recursos principais' },
    pricing: { title: 'Preços' },
    faq: { title: 'Perguntas frequentes' },
    download: { title: 'Baixar CamLingo' },
    footer: { privacy: 'Política de privacidade', terms: 'Termos de uso', contact: 'Contatar suporte' },
    links: { support: 'https://mrvincent2025.github.io/camlingo-support/index-pt-br.html', privacy: 'https://mrvincent2025.github.io/camlingo-support/privacy-pt-br.html' }
  },
  'ja': {
    nav: { features: '機能', pricing: '料金', faq: 'よくある質問', download: 'ダウンロード' },
    intro: { title: '<span class="accent">画像</span>から言語を学ぶ', subtitle: '写真を撮り、単語をタップして、翻訳、例文、発音を即座に取得 – AI搭載。', button: 'アプリを入手' },
    features: { title: '主要機能' },
    pricing: { title: '料金' },
    faq: { title: 'よくある質問' },
    download: { title: 'CamLingoをダウンロード' },
    footer: { privacy: 'プライバシーポリシー', terms: '利用規約', contact: 'サポートに連絡' },
    links: { support: 'https://mrvincent2025.github.io/camlingo-support/index-ja.html', privacy: 'https://mrvincent2025.github.io/camlingo-support/privacy-ja.html' }
  },
  'ko': {
    nav: { features: '기능', pricing: '가격', faq: '자주 묻는 질문', download: '다운로드' },
    intro: { title: '<span class="accent">이미지</span>에서 언어 학습하기', subtitle: '사진을 찍고, 단어를 탭하여 즉시 번역, 예문, 발음을 얻으세요 – AI 기반.', button: '앱 받기' },
    features: { title: '주요 기능' },
    pricing: { title: '가격' },
    faq: { title: '자주 묻는 질문' },
    download: { title: 'CamLingo 다운로드' },
    footer: { privacy: '개인정보 처리방침', terms: '이용약관', contact: '지원팀 문의' },
    links: { support: 'https://mrvincent2025.github.io/camlingo-support/index-ko.html', privacy: 'https://mrvincent2025.github.io/camlingo-support/privacy-ko.html' }
  },
  'de': {
    nav: { features: 'Funktionen', pricing: 'Preise', faq: 'FAQ', download: 'Herunterladen' },
    intro: { title: 'Sprachen aus <span class="accent">Bildern</span> lernen', subtitle: 'Machen Sie ein Foto, tippen Sie auf ein Wort und erhalten Sie sofort Übersetzungen, Beispiele und Aussprache – KI-gestützt.', button: 'App herunterladen' },
    features: { title: 'Hauptfunktionen' },
    pricing: { title: 'Preise' },
    faq: { title: 'Häufig gestellte Fragen' },
    download: { title: 'CamLingo herunterladen' },
    footer: { privacy: 'Datenschutzrichtlinie', terms: 'Nutzungsbedingungen', contact: 'Support kontaktieren' },
    links: { support: 'https://mrvincent2025.github.io/camlingo-support/index-de.html', privacy: 'https://mrvincent2025.github.io/camlingo-support/privacy-de.html' }
  },
  'ru': {
    nav: { features: 'Функции', pricing: 'Цены', faq: 'FAQ', download: 'Скачать' },
    intro: { title: 'Изучайте языки по <span class="accent">изображениям</span>', subtitle: 'Сделайте фото, нажмите на слово и получите мгновенные переводы, примеры и произношение – на базе ИИ.', button: 'Скачать приложение' },
    features: { title: 'Основные функции' },
    pricing: { title: 'Цены' },
    faq: { title: 'Часто задаваемые вопросы' },
    download: { title: 'Скачать CamLingo' },
    footer: { privacy: 'Политика конфиденциальности', terms: 'Условия использования', contact: 'Связаться с поддержкой' },
    links: { support: 'https://mrvincent2025.github.io/camlingo-support/index-ru.html', privacy: 'https://mrvincent2025.github.io/camlingo-support/privacy-ru.html' }
  },
  'it': {
    nav: { features: 'Funzionalità', pricing: 'Prezzi', faq: 'FAQ', download: 'Scarica' },
    intro: { title: 'Impara le lingue dalle <span class="accent">immagini</span>', subtitle: 'Scatta una foto, tocca una parola e ottieni traduzioni, esempi e pronuncia istantanei – alimentato dall\'IA.', button: 'Scarica l\'app' },
    features: { title: 'Funzionalità principali' },
    pricing: { title: 'Prezzi' },
    faq: { title: 'Domande frequenti' },
    download: { title: 'Scarica CamLingo' },
    footer: { privacy: 'Informativa sulla privacy', terms: 'Termini di utilizzo', contact: 'Contatta il supporto' },
    links: { support: 'https://mrvincent2025.github.io/camlingo-support/index-it.html', privacy: 'https://mrvincent2025.github.io/camlingo-support/privacy-it.html' }
  },
  'nl': {
    nav: { features: 'Functies', pricing: 'Prijzen', faq: 'FAQ', download: 'Downloaden' },
    intro: { title: 'Leer talen uit <span class="accent">afbeeldingen</span>', subtitle: 'Maak een foto, tik op een woord en krijg direct vertalingen, voorbeelden en uitspraak – aangedreven door AI.', button: 'App downloaden' },
    features: { title: 'Hoofdfuncties' },
    pricing: { title: 'Prijzen' },
    faq: { title: 'Veelgestelde vragen' },
    download: { title: 'CamLingo downloaden' },
    footer: { privacy: 'Privacybeleid', terms: 'Gebruiksvoorwaarden', contact: 'Support contacten' },
    links: { support: 'https://mrvincent2025.github.io/camlingo-support/index-nl.html', privacy: 'https://mrvincent2025.github.io/camlingo-support/privacy-nl.html' }
  },
  'ar': {
    nav: { features: 'الميزات', pricing: 'الأسعار', faq: 'الأسئلة الشائعة', download: 'تحميل' },
    intro: { title: 'تعلم اللغات من <span class="accent">الصور</span>', subtitle: 'التقط صورة، اضغط على كلمة واحصل على الترجمات والأمثلة والنطق فوراً – مدعوم بالذكاء الاصطناعي.', button: 'احصل على التطبيق' },
    features: { title: 'الميزات الرئيسية' },
    pricing: { title: 'الأسعار' },
    faq: { title: 'الأسئلة الشائعة' },
    download: { title: 'تحميل CamLingo' },
    footer: { privacy: 'سياسة الخصوصية', terms: 'شروط الاستخدام', contact: 'اتصل بالدعم' },
    links: { support: 'https://mrvincent2025.github.io/camlingo-support/index-ar.html', privacy: 'https://mrvincent2025.github.io/camlingo-support/privacy-ar.html' }
  },
  'hi': {
    nav: { features: 'सुविधाएं', pricing: 'मूल्य', faq: 'सामान्य प्रश्न', download: 'डाउनलोड' },
    intro: { title: '<span class="accent">छवियों</span> से भाषाएं सीखें', subtitle: 'फोटो लें, शब्द पर टैप करें और तुरंत अनुवाद, उदाहरण और उच्चारण प्राप्त करें – AI द्वारा संचालित।', button: 'ऐप प्राप्त करें' },
    features: { title: 'मुख्य सुविधाएं' },
    pricing: { title: 'मूल्य' },
    faq: { title: 'सामान्य प्रश्न' },
    download: { title: 'CamLingo डाउनलोड करें' },
    footer: { privacy: 'गोपनीयता नीति', terms: 'उपयोग की शर्तें', contact: 'सहायता से संपर्क करें' },
    links: { support: 'https://mrvincent2025.github.io/camlingo-support/index-hi.html', privacy: 'https://mrvincent2025.github.io/camlingo-support/privacy-hi.html' }
  },
  'th': {
    nav: { features: 'คุณสมบัติ', pricing: 'ราคา', faq: 'คำถามที่พบบ่อย', download: 'ดาวน์โหลด' },
    intro: { title: 'เรียนรู้ภาษาจาก<span class="accent">รูปภาพ</span>', subtitle: 'ถ่ายภาพ แตะคำ และรับการแปล ตัวอย่าง และการออกเสียงทันที – ขับเคลื่อนด้วย AI', button: 'รับแอป' },
    features: { title: 'คุณสมบัติหลัก' },
    pricing: { title: 'ราคา' },
    faq: { title: 'คำถามที่พบบ่อย' },
    download: { title: 'ดาวน์โหลด CamLingo' },
    footer: { privacy: 'นโยบายความเป็นส่วนตัว', terms: 'ข้อกำหนดการใช้งาน', contact: 'ติดต่อฝ่ายสนับสนุน' },
    links: { support: 'https://mrvincent2025.github.io/camlingo-support/index-th.html', privacy: 'https://mrvincent2025.github.io/camlingo-support/privacy-th.html' }
  },
  'vi': {
    nav: { features: 'Tính năng', pricing: 'Giá cả', faq: 'Câu hỏi thường gặp', download: 'Tải xuống' },
    intro: { title: 'Học ngôn ngữ từ <span class="accent">hình ảnh</span>', subtitle: 'Chụp ảnh, chạm vào từ và nhận bản dịch, ví dụ và phát âm ngay lập tức – được hỗ trợ bởi AI.', button: 'Tải ứng dụng' },
    features: { title: 'Tính năng chính' },
    pricing: { title: 'Giá cả' },
    faq: { title: 'Câu hỏi thường gặp' },
    download: { title: 'Tải xuống CamLingo' },
    footer: { privacy: 'Chính sách bảo mật', terms: 'Điều khoản sử dụng', contact: 'Liên hệ hỗ trợ' },
    links: { support: 'https://mrvincent2025.github.io/camlingo-support/index-vi.html', privacy: 'https://mrvincent2025.github.io/camlingo-support/privacy-vi.html' }
  },
  'tr': {
    nav: { features: 'Özellikler', pricing: 'Fiyatlandırma', faq: 'SSS', download: 'İndir' },
    intro: { title: '<span class="accent">Görsellerden</span> dil öğrenin', subtitle: 'Fotoğraf çekin, kelimeye dokunun ve anında çeviri, örnekler ve telaffuz alın – AI destekli.', button: 'Uygulamayı al' },
    features: { title: 'Ana özellikler' },
    pricing: { title: 'Fiyatlandırma' },
    faq: { title: 'Sık sorulan sorular' },
    download: { title: 'CamLingo indir' },
    footer: { privacy: 'Gizlilik politikası', terms: 'Kullanım şartları', contact: 'Destek ile iletişim' },
    links: { support: 'https://mrvincent2025.github.io/camlingo-support/index-tr.html', privacy: 'https://mrvincent2025.github.io/camlingo-support/privacy-tr.html' }
  },
  'pl': {
    nav: { features: 'Funkcje', pricing: 'Cennik', faq: 'FAQ', download: 'Pobierz' },
    intro: { title: 'Ucz się języków z <span class="accent">obrazów</span>', subtitle: 'Zrób zdjęcie, dotknij słowo i otrzymaj natychmiastowe tłumaczenia, przykłady i wymowę – napędzane AI.', button: 'Pobierz aplikację' },
    features: { title: 'Główne funkcje' },
    pricing: { title: 'Cennik' },
    faq: { title: 'Często zadawane pytania' },
    download: { title: 'Pobierz CamLingo' },
    footer: { privacy: 'Polityka prywatności', terms: 'Warunki użytkowania', contact: 'Skontaktuj się z pomocą techniczną' },
    links: { support: 'https://mrvincent2025.github.io/camlingo-support/index-pl.html', privacy: 'https://mrvincent2025.github.io/camlingo-support/privacy-pl.html' }
  }
};

// 当前语言
let currentLanguage = 'en-US';

// 获取嵌套对象的值
function getNestedValue(obj, path) {
  return path.split('.').reduce((current, key) => {
    return current && current[key] !== undefined ? current[key] : null;
  }, obj);
}

// 更新页面文本
function updatePageText(lang) {
  const config = i18n[lang];
  if (!config) return;

  // 更新所有带有 data-i18n 属性的元素
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    const value = getNestedValue(config, key);
    
    if (value !== null) {
      if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
        element.placeholder = value;
      } else {
        element.innerHTML = value;
      }
    }
    
    // 更新动态链接
    const linkType = element.getAttribute('data-link');
    if (linkType && config.links && config.links[linkType]) {
      element.href = config.links[linkType];
    }
  });

  // 更新页面标题
  document.title = config.title || 'CamLingo';
  
  // 更新 HTML lang 属性
  document.documentElement.lang = lang;
  
  // 更新SEO meta标签
  updateSEOMetaTags(lang, config);
}

// 切换语言
function changeLanguage(lang) {
  currentLanguage = lang;
  updatePageText(lang);
  
  // 保存语言偏好到 localStorage
  localStorage.setItem('preferredLanguage', lang);
  
  // 更新语言选择器
  const select = document.getElementById('languageSelect');
  if (select) {
    select.value = lang;
  }
}

// 更新SEO meta标签
function updateSEOMetaTags(lang, config) {
  // 为每种语言设置SEO配置
  const seoConfigs = {
    'en-US': {
      title: 'CamLingo – Learn Any Language from Pictures | AI-Powered Translation App',
      description: 'Snap a photo, tap a word and see instant translations, examples and pronunciation. Learn 22 languages with AI-powered visual translation. Download CamLingo for iPhone and iPad.',
      keywords: 'language learning, translation app, AI translation, visual translation, photo translation, language app, multilingual, OCR translation, camera translation, learn languages, foreign language, language tutor, translation tool, mobile language learning, iOS language app, picture translation, text recognition, language dictionary, pronunciation guide, vocabulary builder',
      ogTitle: 'CamLingo – Learn Any Language from Pictures | AI-Powered Translation App',
      ogDescription: 'Snap a photo, tap a word and see instant translations, examples and pronunciation. Learn 22 languages with AI-powered visual translation.',
      ogLocale: 'en_US',
      twitterTitle: 'CamLingo – Learn Any Language from Pictures | AI-Powered Translation App',
      twitterDescription: 'Snap a photo, tap a word and see instant translations, examples and pronunciation. Learn 22 languages with AI-powered visual translation.',
      canonicalUrl: 'https://mrvincent2025.github.io/camlingo-support/website_en/'
    },
    'en-GB': {
      title: 'CamLingo – Learn Any Language from Pictures | AI-Powered Translation App',
      description: 'Snap a photo, tap a word and see instant translations, examples and pronunciation. Learn 22 languages with AI-powered visual translation. Download CamLingo for iPhone and iPad.',
      keywords: 'language learning, translation app, AI translation, visual translation, photo translation, language app, multilingual, OCR translation, camera translation, learn languages, foreign language, language tutor, translation tool, mobile language learning, iOS language app, picture translation, text recognition, language dictionary, pronunciation guide, vocabulary builder',
      ogTitle: 'CamLingo – Learn Any Language from Pictures | AI-Powered Translation App',
      ogDescription: 'Snap a photo, tap a word and see instant translations, examples and pronunciation. Learn 22 languages with AI-powered visual translation.',
      ogLocale: 'en_GB',
      twitterTitle: 'CamLingo – Learn Any Language from Pictures | AI-Powered Translation App',
      twitterDescription: 'Snap a photo, tap a word and see instant translations, examples and pronunciation. Learn 22 languages with AI-powered visual translation.',
      canonicalUrl: 'https://mrvincent2025.github.io/camlingo-support/index-en-uk.html'
    },
    'zh-CN': {
      title: 'CamLingo – 从图片学习任何语言 | AI驱动的翻译应用',
      description: '拍照、点击单词，立即获得翻译、例句和发音。使用AI驱动的视觉翻译技术学习22种语言。下载CamLingo，支持iPhone和iPad。',
      keywords: '语言学习,翻译应用,AI翻译,视觉翻译,拍照翻译,语言应用,多语言,OCR翻译,相机翻译,学习语言,外语,语言导师,翻译工具,移动语言学习,iOS语言应用,图片翻译,文字识别,语言词典,发音指南,词汇构建',
      ogTitle: 'CamLingo – 从图片学习任何语言 | AI驱动的翻译应用',
      ogDescription: '拍照、点击单词，立即获得翻译、例句和发音。使用AI驱动的视觉翻译技术学习22种语言。',
      ogLocale: 'zh_CN',
      twitterTitle: 'CamLingo – 从图片学习任何语言 | AI驱动的翻译应用',
      twitterDescription: '拍照、点击单词，立即获得翻译、例句和发音。使用AI驱动的视觉翻译技术学习22种语言。',
      canonicalUrl: 'https://mrvincent2025.github.io/camlingo-support/index-zh-cn.html'
    },
    'zh-TW': {
      title: 'CamLingo – 從圖片學習任何語言 | AI驅動的翻譯應用',
      description: '拍照、點擊單詞，立即獲得翻譯、例句和發音。使用AI驅動的視覺翻譯技術學習22種語言。下載CamLingo，支援iPhone和iPad。',
      keywords: '語言學習,翻譯應用,AI翻譯,視覺翻譯,拍照翻譯,語言應用,多語言,OCR翻譯,相機翻譯,學習語言,外語,語言導師,翻譯工具,移動語言學習,iOS語言應用,圖片翻譯,文字識別,語言詞典,發音指南,詞彙構建',
      ogTitle: 'CamLingo – 從圖片學習任何語言 | AI驅動的翻譯應用',
      ogDescription: '拍照、點擊單詞，立即獲得翻譯、例句和發音。使用AI驅動的視覺翻譯技術學習22種語言。',
      ogLocale: 'zh_TW',
      twitterTitle: 'CamLingo – 從圖片學習任何語言 | AI驅動的翻譯應用',
      twitterDescription: '拍照、點擊單詞，立即獲得翻譯、例句和發音。使用AI驅動的視覺翻譯技術學習22種語言。',
      canonicalUrl: 'https://mrvincent2025.github.io/camlingo-support/index-zh-tw.html'
    },
    'es-ES': {
      title: 'CamLingo – Aprende idiomas desde imágenes | App de traducción con IA',
      description: 'Toma una foto, toca una palabra y obtén traducciones, ejemplos y pronunciación instantáneamente. Aprende 22 idiomas con traducción visual impulsada por IA. Descarga CamLingo para iPhone e iPad.',
      keywords: 'aprendizaje de idiomas, aplicación de traducción, traducción con IA, traducción visual, traducción de fotos, aplicación de idiomas, multilingüe, traducción OCR, traducción de cámara, aprender idiomas, idioma extranjero, tutor de idiomas, herramienta de traducción, aprendizaje de idiomas móvil, aplicación de idiomas iOS, traducción de imágenes, reconocimiento de texto, diccionario de idiomas, guía de pronunciación, constructor de vocabulario',
      ogTitle: 'CamLingo – Aprende idiomas desde imágenes | App de traducción con IA',
      ogDescription: 'Toma una foto, toca una palabra y obtén traducciones, ejemplos y pronunciación instantáneamente. Aprende 22 idiomas con traducción visual impulsada por IA.',
      ogLocale: 'es_ES',
      twitterTitle: 'CamLingo – Aprende idiomas desde imágenes | App de traducción con IA',
      twitterDescription: 'Toma una foto, toca una palabra y obtén traducciones, ejemplos y pronunciación instantáneamente. Aprende 22 idiomas con traducción visual impulsada por IA.',
      canonicalUrl: 'https://mrvincent2025.github.io/camlingo-support/index-es-es.html'
    },
    'es-MX': {
      title: 'CamLingo – Aprende idiomas desde imágenes | App de traducción con IA',
      description: 'Toma una foto, toca una palabra y obtén traducciones, ejemplos y pronunciación instantáneamente. Aprende 22 idiomas con traducción visual impulsada por IA. Descarga CamLingo para iPhone e iPad.',
      keywords: 'aprendizaje de idiomas, aplicación de traducción, traducción con IA, traducción visual, traducción de fotos, aplicación de idiomas, multilingüe, traducción OCR, traducción de cámara, aprender idiomas, idioma extranjero, tutor de idiomas, herramienta de traducción, aprendizaje de idiomas móvil, aplicación de idiomas iOS, traducción de imágenes, reconocimiento de texto, diccionario de idiomas, guía de pronunciación, constructor de vocabulario',
      ogTitle: 'CamLingo – Aprende idiomas desde imágenes | App de traducción con IA',
      ogDescription: 'Toma una foto, toca una palabra y obtén traducciones, ejemplos y pronunciación instantáneamente. Aprende 22 idiomas con traducción visual impulsada por IA.',
      ogLocale: 'es_MX',
      twitterTitle: 'CamLingo – Aprende idiomas desde imágenes | App de traducción con IA',
      twitterDescription: 'Toma una foto, toca una palabra y obtén traducciones, ejemplos y pronunciación instantáneamente. Aprende 22 idiomas con traducción visual impulsada por IA.',
      canonicalUrl: 'https://mrvincent2025.github.io/camlingo-support/index-es-mx.html'
    },
    'fr-FR': {
      title: 'CamLingo – Apprenez les langues à partir d\'images | App de traduction IA',
      description: 'Prenez une photo, tapez sur un mot et obtenez instantanément des traductions, des exemples et la prononciation. Apprenez 22 langues avec la traduction visuelle alimentée par l\'IA. Téléchargez CamLingo pour iPhone et iPad.',
      keywords: 'apprentissage des langues, application de traduction, traduction IA, traduction visuelle, traduction de photos, application de langues, multilingue, traduction OCR, traduction de caméra, apprendre les langues, langue étrangère, tuteur de langues, outil de traduction, apprentissage des langues mobiles, application de langues iOS, traduction d\'images, reconnaissance de texte, dictionnaire de langues, guide de prononciation, constructeur de vocabulaire',
      ogTitle: 'CamLingo – Apprenez les langues à partir d\'images | App de traduction IA',
      ogDescription: 'Prenez une photo, tapez sur un mot et obtenez instantanément des traductions, des exemples et la prononciation. Apprenez 22 langues avec la traduction visuelle alimentée par l\'IA.',
      ogLocale: 'fr_FR',
      twitterTitle: 'CamLingo – Apprenez les langues à partir d\'images | App de traduction IA',
      twitterDescription: 'Prenez une photo, tapez sur un mot et obtenez instantanément des traductions, des exemples et la prononciation. Apprenez 22 langues avec la traduction visuelle alimentée par l\'IA.',
      canonicalUrl: 'https://mrvincent2025.github.io/camlingo-support/index-fr-fr.html'
    },
    'fr-CA': {
      title: 'CamLingo – Apprenez les langues à partir d\'images | App de traduction IA',
      description: 'Prenez une photo, tapez sur un mot et obtenez instantanément des traductions, des exemples et la prononciation. Apprenez 22 langues avec la traduction visuelle alimentée par l\'IA. Téléchargez CamLingo pour iPhone et iPad.',
      keywords: 'apprentissage des langues, application de traduction, traduction IA, traduction visuelle, traduction de photos, application de langues, multilingue, traduction OCR, traduction de caméra, apprendre les langues, langue étrangère, tuteur de langues, outil de traduction, apprentissage des langues mobiles, application de langues iOS, traduction d\'images, reconnaissance de texte, dictionnaire de langues, guide de prononciation, constructeur de vocabulaire',
      ogTitle: 'CamLingo – Apprenez les langues à partir d\'images | App de traduction IA',
      ogDescription: 'Prenez une photo, tapez sur un mot et obtenez instantanément des traductions, des exemples et la prononciation. Apprenez 22 langues avec la traduction visuelle alimentée par l\'IA.',
      ogLocale: 'fr_CA',
      twitterTitle: 'CamLingo – Apprenez les langues à partir d\'images | App de traduction IA',
      twitterDescription: 'Prenez une photo, tapez sur un mot et obtenez instantanément des traductions, des exemples et la prononciation. Apprenez 22 langues avec la traduction visuelle alimentée par l\'IA.',
      canonicalUrl: 'https://mrvincent2025.github.io/camlingo-support/index-fr-ca.html'
    },
    'pt-PT': {
      title: 'CamLingo – Aprenda idiomas a partir de imagens | App de tradução com IA',
      description: 'Tire uma foto, toque numa palavra e obtenha traduções, exemplos e pronúncia instantâneos. Aprenda 22 idiomas com tradução visual alimentada por IA. Transfira CamLingo para iPhone e iPad.',
      keywords: 'aprendizagem de idiomas, aplicação de tradução, tradução com IA, tradução visual, tradução de fotos, aplicação de idiomas, multilingue, tradução OCR, tradução de câmara, aprender idiomas, idioma estrangeiro, tutor de idiomas, ferramenta de tradução, aprendizagem de idiomas móvel, aplicação de idiomas iOS, tradução de imagens, reconhecimento de texto, dicionário de idiomas, guia de pronúncia, construtor de vocabulário',
      ogTitle: 'CamLingo – Aprenda idiomas a partir de imagens | App de tradução com IA',
      ogDescription: 'Tire uma foto, toque numa palavra e obtenha traduções, exemplos e pronúncia instantâneos. Aprenda 22 idiomas com tradução visual alimentada por IA.',
      ogLocale: 'pt_PT',
      twitterTitle: 'CamLingo – Aprenda idiomas a partir de imagens | App de tradução com IA',
      twitterDescription: 'Tire uma foto, toque numa palavra e obtenha traduções, exemplos e pronúncia instantâneos. Aprenda 22 idiomas com tradução visual alimentada por IA.',
      canonicalUrl: 'https://mrvincent2025.github.io/camlingo-support/index-pt-pt.html'
    },
    'pt-BR': {
      title: 'CamLingo – Aprenda idiomas a partir de imagens | App de tradução com IA',
      description: 'Tire uma foto, toque em uma palavra e obtenha traduções, exemplos e pronúncia instantâneos. Aprenda 22 idiomas com tradução visual alimentada por IA. Baixe CamLingo para iPhone e iPad.',
      keywords: 'aprendizado de idiomas, aplicativo de tradução, tradução com IA, tradução visual, tradução de fotos, aplicativo de idiomas, multilíngue, tradução OCR, tradução de câmera, aprender idiomas, idioma estrangeiro, tutor de idiomas, ferramenta de tradução, aprendizado de idiomas móvel, aplicativo de idiomas iOS, tradução de imagens, reconhecimento de texto, dicionário de idiomas, guia de pronúncia, construtor de vocabulário',
      ogTitle: 'CamLingo – Aprenda idiomas a partir de imagens | App de tradução com IA',
      ogDescription: 'Tire uma foto, toque em uma palavra e obtenha traduções, exemplos e pronúncia instantâneos. Aprenda 22 idiomas com tradução visual alimentada por IA.',
      ogLocale: 'pt_BR',
      twitterTitle: 'CamLingo – Aprenda idiomas a partir de imagens | App de tradução com IA',
      twitterDescription: 'Tire uma foto, toque em uma palavra e obtenha traduções, exemplos e pronúncia instantâneos. Aprenda 22 idiomas com tradução visual alimentada por IA.',
      canonicalUrl: 'https://mrvincent2025.github.io/camlingo-support/index-pt-br.html'
    },
    'ja': {
      title: 'CamLingo – 画像から言語を学ぶ | AI搭載翻訳アプリ',
      description: '写真を撮り、単語をタップして、翻訳、例文、発音を即座に取得。AI搭載の視覚翻訳技術で22言語を学習。iPhoneとiPad用CamLingoをダウンロード。',
      keywords: '言語学習,翻訳アプリ,AI翻訳,視覚翻訳,写真翻訳,言語アプリ,多言語,OCR翻訳,カメラ翻訳,言語学習,外国語,言語チューター,翻訳ツール,モバイル言語学習,iOS言語アプリ,画像翻訳,テキスト認識,言語辞書,発音ガイド,語彙構築',
      ogTitle: 'CamLingo – 画像から言語を学ぶ | AI搭載翻訳アプリ',
      ogDescription: '写真を撮り、単語をタップして、翻訳、例文、発音を即座に取得。AI搭載の視覚翻訳技術で22言語を学習。',
      ogLocale: 'ja_JP',
      twitterTitle: 'CamLingo – 画像から言語を学ぶ | AI搭載翻訳アプリ',
      twitterDescription: '写真を撮り、単語をタップして、翻訳、例文、発音を即座に取得。AI搭載の視覚翻訳技術で22言語を学習。',
      canonicalUrl: 'https://mrvincent2025.github.io/camlingo-support/index-ja.html'
    },
    'ko': {
      title: 'CamLingo – 이미지에서 언어 학습하기 | AI 기반 번역 앱',
      description: '사진을 찍고, 단어를 탭하여 즉시 번역, 예문, 발음을 얻으세요. AI 기반 시각 번역 기술로 22개 언어를 학습하세요. iPhone과 iPad용 CamLingo를 다운로드하세요.',
      keywords: '언어 학습,번역 앱,AI 번역,시각 번역,사진 번역,언어 앱,다국어,OCR 번역,카메라 번역,언어 학습,외국어,언어 튜터,번역 도구,모바일 언어 학습,iOS 언어 앱,이미지 번역,텍스트 인식,언어 사전,발음 가이드,어휘 구축',
      ogTitle: 'CamLingo – 이미지에서 언어 학습하기 | AI 기반 번역 앱',
      ogDescription: '사진을 찍고, 단어를 탭하여 즉시 번역, 예문, 발음을 얻으세요. AI 기반 시각 번역 기술로 22개 언어를 학습하세요.',
      ogLocale: 'ko_KR',
      twitterTitle: 'CamLingo – 이미지에서 언어 학습하기 | AI 기반 번역 앱',
      twitterDescription: '사진을 찍고, 단어를 탭하여 즉시 번역, 예문, 발음을 얻으세요. AI 기반 시각 번역 기술로 22개 언어를 학습하세요.',
      canonicalUrl: 'https://mrvincent2025.github.io/camlingo-support/index-ko.html'
    },
    'de': {
      title: 'CamLingo – Sprachen aus Bildern lernen | KI-gestützte Übersetzungs-App',
      description: 'Machen Sie ein Foto, tippen Sie auf ein Wort und erhalten Sie sofort Übersetzungen, Beispiele und Aussprache. Lernen Sie 22 Sprachen mit KI-gestützter visueller Übersetzung. Laden Sie CamLingo für iPhone und iPad herunter.',
      keywords: 'Sprachlernen, Übersetzungs-App, KI-Übersetzung, visuelle Übersetzung, Foto-Übersetzung, Sprach-App, mehrsprachig, OCR-Übersetzung, Kamera-Übersetzung, Sprachen lernen, Fremdsprache, Sprachlehrer, Übersetzungstool, mobiles Sprachlernen, iOS-Sprach-App, Bildübersetzung, Texterkennung, Sprachwörterbuch, Ausspracheführer, Vokabeltrainer',
      ogTitle: 'CamLingo – Sprachen aus Bildern lernen | KI-gestützte Übersetzungs-App',
      ogDescription: 'Machen Sie ein Foto, tippen Sie auf ein Wort und erhalten Sie sofort Übersetzungen, Beispiele und Aussprache. Lernen Sie 22 Sprachen mit KI-gestützter visueller Übersetzung.',
      ogLocale: 'de_DE',
      twitterTitle: 'CamLingo – Sprachen aus Bildern lernen | KI-gestützte Übersetzungs-App',
      twitterDescription: 'Machen Sie ein Foto, tippen Sie auf ein Wort und erhalten Sie sofort Übersetzungen, Beispiele und Aussprache. Lernen Sie 22 Sprachen mit KI-gestützter visueller Übersetzung.',
      canonicalUrl: 'https://mrvincent2025.github.io/camlingo-support/index-de.html'
    },
    'ru': {
      title: 'CamLingo – Изучайте языки по изображениям | Приложение для перевода с ИИ',
      description: 'Сделайте фото, нажмите на слово и получите мгновенные переводы, примеры и произношение. Изучайте 22 языка с помощью визуального перевода на базе ИИ. Скачайте CamLingo для iPhone и iPad.',
      keywords: 'изучение языков, приложение для перевода, перевод с ИИ, визуальный перевод, перевод фотографий, языковое приложение, многоязычный, OCR перевод, перевод камеры, изучение языков, иностранный язык, языковой репетитор, инструмент перевода, мобильное изучение языков, языковое приложение iOS, перевод изображений, распознавание текста, языковой словарь, руководство по произношению, построитель словаря',
      ogTitle: 'CamLingo – Изучайте языки по изображениям | Приложение для перевода с ИИ',
      ogDescription: 'Сделайте фото, нажмите на слово и получите мгновенные переводы, примеры и произношение. Изучайте 22 языка с помощью визуального перевода на базе ИИ.',
      ogLocale: 'ru_RU',
      twitterTitle: 'CamLingo – Изучайте языки по изображениям | Приложение для перевода с ИИ',
      twitterDescription: 'Сделайте фото, нажмите на слово и получите мгновенные переводы, примеры и произношение. Изучайте 22 языка с помощью визуального перевода на базе ИИ.',
      canonicalUrl: 'https://mrvincent2025.github.io/camlingo-support/index-ru.html'
    },
    'it': {
      title: 'CamLingo – Impara le lingue dalle immagini | App di traduzione con IA',
      description: 'Scatta una foto, tocca una parola e ottieni traduzioni, esempi e pronuncia istantanei. Impara 22 lingue con traduzione visiva alimentata dall\'IA. Scarica CamLingo per iPhone e iPad.',
      keywords: 'apprendimento delle lingue, app di traduzione, traduzione IA, traduzione visiva, traduzione di foto, app di lingue, multilingue, traduzione OCR, traduzione fotocamera, imparare le lingue, lingua straniera, tutor di lingue, strumento di traduzione, apprendimento delle lingue mobile, app di lingue iOS, traduzione di immagini, riconoscimento del testo, dizionario delle lingue, guida alla pronuncia, costruttore di vocabolario',
      ogTitle: 'CamLingo – Impara le lingue dalle immagini | App di traduzione con IA',
      ogDescription: 'Scatta una foto, tocca una parola e ottieni traduzioni, esempi e pronuncia istantanei. Impara 22 lingue con traduzione visiva alimentata dall\'IA.',
      ogLocale: 'it_IT',
      twitterTitle: 'CamLingo – Impara le lingue dalle immagini | App di traduzione con IA',
      twitterDescription: 'Scatta una foto, tocca una parola e ottieni traduzioni, esempi e pronuncia istantanei. Impara 22 lingue con traduzione visiva alimentata dall\'IA.',
      canonicalUrl: 'https://mrvincent2025.github.io/camlingo-support/index-it.html'
    },
    'nl': {
      title: 'CamLingo – Leer talen uit afbeeldingen | AI-aangedreven vertaal-app',
      description: 'Maak een foto, tik op een woord en krijg direct vertalingen, voorbeelden en uitspraak. Leer 22 talen met AI-aangedreven visuele vertaling. Download CamLingo voor iPhone en iPad.',
      keywords: 'taal leren, vertaal-app, AI-vertaling, visuele vertaling, foto-vertaling, taal-app, meertalig, OCR-vertaling, camera-vertaling, talen leren, vreemde taal, taaltutor, vertaal-tool, mobiel taal leren, iOS taal-app, afbeelding-vertaling, tekstherkenning, taalwoordenboek, uitspraakgids, vocabulaire-bouwer',
      ogTitle: 'CamLingo – Leer talen uit afbeeldingen | AI-aangedreven vertaal-app',
      ogDescription: 'Maak een foto, tik op een woord en krijg direct vertalingen, voorbeelden en uitspraak. Leer 22 talen met AI-aangedreven visuele vertaling.',
      ogLocale: 'nl_NL',
      twitterTitle: 'CamLingo – Leer talen uit afbeeldingen | AI-aangedreven vertaal-app',
      twitterDescription: 'Maak een foto, tik op een woord en krijg direct vertalingen, voorbeelden en uitspraak. Leer 22 talen met AI-aangedreven visuele vertaling.',
      canonicalUrl: 'https://mrvincent2025.github.io/camlingo-support/index-nl.html'
    },
    'ar': {
      title: 'CamLingo – تعلم اللغات من الصور | تطبيق الترجمة بالذكاء الاصطناعي',
      description: 'التقط صورة، اضغط على كلمة واحصل على الترجمات والأمثلة والنطق فوراً. تعلم 22 لغة مع الترجمة البصرية المدعومة بالذكاء الاصطناعي. حمل CamLingo للآيفون والآيباد.',
      keywords: 'تعلم اللغات,تطبيق الترجمة,الترجمة بالذكاء الاصطناعي,الترجمة البصرية,ترجمة الصور,تطبيق اللغات,متعدد اللغات,ترجمة OCR,ترجمة الكاميرا,تعلم اللغات,اللغة الأجنبية,معلم اللغات,أداة الترجمة,تعلم اللغات المحمول,تطبيق اللغات iOS,ترجمة الصور,التعرف على النص,قاموس اللغات,دليل النطق,منشئ المفردات',
      ogTitle: 'CamLingo – تعلم اللغات من الصور | تطبيق الترجمة بالذكاء الاصطناعي',
      ogDescription: 'التقط صورة، اضغط على كلمة واحصل على الترجمات والأمثلة والنطق فوراً. تعلم 22 لغة مع الترجمة البصرية المدعومة بالذكاء الاصطناعي.',
      ogLocale: 'ar_SA',
      twitterTitle: 'CamLingo – تعلم اللغات من الصور | تطبيق الترجمة بالذكاء الاصطناعي',
      twitterDescription: 'التقط صورة، اضغط على كلمة واحصل على الترجمات والأمثلة والنطق فوراً. تعلم 22 لغة مع الترجمة البصرية المدعومة بالذكاء الاصطناعي.',
      canonicalUrl: 'https://mrvincent2025.github.io/camlingo-support/index-ar.html'
    },
    'hi': {
      title: 'CamLingo – छवियों से भाषाएं सीखें | AI-संचालित अनुवाद ऐप',
      description: 'फोटो लें, शब्द पर टैप करें और तुरंत अनुवाद, उदाहरण और उच्चारण प्राप्त करें। AI-संचालित दृश्य अनुवाद के साथ 22 भाषाएं सीखें। iPhone और iPad के लिए CamLingo डाउनलोड करें।',
      keywords: 'भाषा सीखना,अनुवाद ऐप,AI अनुवाद,दृश्य अनुवाद,फोटो अनुवाद,भाषा ऐप,बहुभाषी,OCR अनुवाद,कैमरा अनुवाद,भाषाएं सीखना,विदेशी भाषा,भाषा शिक्षक,अनुवाद उपकरण,मोबाइल भाषा सीखना,iOS भाषा ऐप,छवि अनुवाद,पाठ पहचान,भाषा शब्दकोश,उच्चारण गाइड,शब्दावली निर्माता',
      ogTitle: 'CamLingo – छवियों से भाषाएं सीखें | AI-संचालित अनुवाद ऐप',
      ogDescription: 'फोटो लें, शब्द पर टैप करें और तुरंत अनुवाद, उदाहरण और उच्चारण प्राप्त करें। AI-संचालित दृश्य अनुवाद के साथ 22 भाषाएं सीखें।',
      ogLocale: 'hi_IN',
      twitterTitle: 'CamLingo – छवियों से भाषाएं सीखें | AI-संचालित अनुवाद ऐप',
      twitterDescription: 'फोटो लें, शब्द पर टैप करें और तुरंत अनुवाद, उदाहरण और उच्चारण प्राप्त करें। AI-संचालित दृश्य अनुवाद के साथ 22 भाषाएं सीखें।',
      canonicalUrl: 'https://mrvincent2025.github.io/camlingo-support/index-hi.html'
    },
    'th': {
      title: 'CamLingo – เรียนรู้ภาษาจากรูปภาพ | แอปแปลภาษาอัจฉริยะ',
      description: 'ถ่ายภาพ แตะคำ และรับการแปล ตัวอย่าง และการออกเสียงทันที เรียนรู้ 22 ภาษาด้วยเทคโนโลยีการแปลภาพที่ขับเคลื่อนด้วย AI ดาวน์โหลด CamLingo สำหรับ iPhone และ iPad',
      keywords: 'การเรียนรู้ภาษา,แอปแปลภาษา,การแปลด้วย AI,การแปลภาพ,การแปลรูปภาพ,แอปภาษา,หลายภาษา,การแปล OCR,การแปลกล้อง,การเรียนรู้ภาษา,ภาษาต่างประเทศ,ครูสอนภาษา,เครื่องมือแปล,การเรียนรู้ภาษาบนมือถือ,แอปภาษา iOS,การแปลภาพ,การจดจำข้อความ,พจนานุกรมภาษา,คู่มือการออกเสียง,ตัวสร้างคำศัพท์',
      ogTitle: 'CamLingo – เรียนรู้ภาษาจากรูปภาพ | แอปแปลภาษาอัจฉริยะ',
      ogDescription: 'ถ่ายภาพ แตะคำ และรับการแปล ตัวอย่าง และการออกเสียงทันที เรียนรู้ 22 ภาษาด้วยเทคโนโลยีการแปลภาพที่ขับเคลื่อนด้วย AI',
      ogLocale: 'th_TH',
      twitterTitle: 'CamLingo – เรียนรู้ภาษาจากรูปภาพ | แอปแปลภาษาอัจฉริยะ',
      twitterDescription: 'ถ่ายภาพ แตะคำ และรับการแปล ตัวอย่าง และการออกเสียงทันที เรียนรู้ 22 ภาษาด้วยเทคโนโลยีการแปลภาพที่ขับเคลื่อนด้วย AI',
      canonicalUrl: 'https://mrvincent2025.github.io/camlingo-support/index-th.html'
    },
    'vi': {
      title: 'CamLingo – Học ngôn ngữ từ hình ảnh | Ứng dụng dịch thuật AI',
      description: 'Chụp ảnh, chạm vào từ và nhận bản dịch, ví dụ và phát âm ngay lập tức. Học 22 ngôn ngữ với công nghệ dịch thuật hình ảnh được hỗ trợ bởi AI. Tải xuống CamLingo cho iPhone và iPad.',
      keywords: 'học ngôn ngữ,ứng dụng dịch thuật,dịch thuật AI,dịch thuật hình ảnh,dịch thuật ảnh,ứng dụng ngôn ngữ,đa ngôn ngữ,dịch thuật OCR,dịch thuật camera,học ngôn ngữ,ngoại ngữ,gia sư ngôn ngữ,công cụ dịch thuật,học ngôn ngữ di động,ứng dụng ngôn ngữ iOS,dịch thuật hình ảnh,nhận dạng văn bản,từ điển ngôn ngữ,hướng dẫn phát âm,người xây dựng từ vựng',
      ogTitle: 'CamLingo – Học ngôn ngữ từ hình ảnh | Ứng dụng dịch thuật AI',
      ogDescription: 'Chụp ảnh, chạm vào từ và nhận bản dịch, ví dụ và phát âm ngay lập tức. Học 22 ngôn ngữ với công nghệ dịch thuật hình ảnh được hỗ trợ bởi AI.',
      ogLocale: 'vi_VN',
      twitterTitle: 'CamLingo – Học ngôn ngữ từ hình ảnh | Ứng dụng dịch thuật AI',
      twitterDescription: 'Chụp ảnh, chạm vào từ và nhận bản dịch, ví dụ và phát âm ngay lập tức. Học 22 ngôn ngữ với công nghệ dịch thuật hình ảnh được hỗ trợ bởi AI.',
      canonicalUrl: 'https://mrvincent2025.github.io/camlingo-support/index-vi.html'
    },
    'tr': {
      title: 'CamLingo – Görsellerden dil öğrenin | AI destekli çeviri uygulaması',
      description: 'Fotoğraf çekin, kelimeye dokunun ve anında çeviri, örnekler ve telaffuz alın. AI destekli görsel çeviri teknolojisi ile 22 dil öğrenin. iPhone ve iPad için CamLingo\'yu indirin.',
      keywords: 'dil öğrenme,çeviri uygulaması,AI çeviri,görsel çeviri,fotoğraf çeviri,dil uygulaması,çok dilli,OCR çeviri,kamera çeviri,dil öğrenme,yabancı dil,dil öğretmeni,çeviri aracı,mobil dil öğrenme,iOS dil uygulaması,görsel çeviri,metin tanıma,dil sözlüğü,telaffuz rehberi,kelime hazinesi oluşturucu',
      ogTitle: 'CamLingo – Görsellerden dil öğrenin | AI destekli çeviri uygulaması',
      ogDescription: 'Fotoğraf çekin, kelimeye dokunun ve anında çeviri, örnekler ve telaffuz alın. AI destekli görsel çeviri teknolojisi ile 22 dil öğrenin.',
      ogLocale: 'tr_TR',
      twitterTitle: 'CamLingo – Görsellerden dil öğrenin | AI destekli çeviri uygulaması',
      twitterDescription: 'Fotoğraf çekin, kelimeye dokunun ve anında çeviri, örnekler ve telaffuz alın. AI destekli görsel çeviri teknolojisi ile 22 dil öğrenin.',
      canonicalUrl: 'https://mrvincent2025.github.io/camlingo-support/index-tr.html'
    },
    'pl': {
      title: 'CamLingo – Ucz się języków z obrazów | Aplikacja do tłumaczenia z AI',
      description: 'Zrób zdjęcie, dotknij słowo i otrzymaj natychmiastowe tłumaczenia, przykłady i wymowę. Ucz się 22 języków z technologią tłumaczenia wizualnego napędzaną AI. Pobierz CamLingo dla iPhone i iPad.',
      keywords: 'nauka języków,aplikacja do tłumaczenia,tłumaczenie AI,tłumaczenie wizualne,tłumaczenie zdjęć,aplikacja językowa,wielojęzyczny,tłumaczenie OCR,tłumaczenie kamery,nauka języków,język obcy,korepetytor językowy,narzędzie do tłumaczenia,mobilna nauka języków,aplikacja językowa iOS,tłumaczenie obrazów,rozpoznawanie tekstu,słownik językowy,przewodnik wymowy,konstruktor słownictwa',
      ogTitle: 'CamLingo – Ucz się języków z obrazów | Aplikacja do tłumaczenia z AI',
      ogDescription: 'Zrób zdjęcie, dotknij słowo i otrzymaj natychmiastowe tłumaczenia, przykłady i wymowę. Ucz się 22 języków z technologią tłumaczenia wizualnego napędzaną AI.',
      ogLocale: 'pl_PL',
      twitterTitle: 'CamLingo – Ucz się języków z obrazów | Aplikacja do tłumaczenia z AI',
      twitterDescription: 'Zrób zdjęcie, dotknij słowo i otrzymaj natychmiastowe tłumaczenia, przykłady i wymowę. Ucz się 22 języków z technologią tłumaczenia wizualnego napędzaną AI.',
      canonicalUrl: 'https://mrvincent2025.github.io/camlingo-support/index-pl.html'
    }
  };

  const seoConfig = seoConfigs[lang];
  if (!seoConfig) return;

  // 更新页面标题
  document.title = seoConfig.title;

  // 更新meta description
  let metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) {
    metaDesc.setAttribute('content', seoConfig.description);
  }

  // 更新meta keywords
  let metaKeywords = document.querySelector('meta[name="keywords"]');
  if (metaKeywords) {
    metaKeywords.setAttribute('content', seoConfig.keywords);
  }

  // 更新Open Graph标签
  let ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) {
    ogTitle.setAttribute('content', seoConfig.ogTitle);
  }

  let ogDesc = document.querySelector('meta[property="og:description"]');
  if (ogDesc) {
    ogDesc.setAttribute('content', seoConfig.ogDescription);
  }

  let ogLocale = document.querySelector('meta[property="og:locale"]');
  if (ogLocale) {
    ogLocale.setAttribute('content', seoConfig.ogLocale);
  }

  // 更新Twitter标签
  let twitterTitle = document.querySelector('meta[property="twitter:title"]');
  if (twitterTitle) {
    twitterTitle.setAttribute('content', seoConfig.twitterTitle);
  }

  let twitterDesc = document.querySelector('meta[property="twitter:description"]');
  if (twitterDesc) {
    twitterDesc.setAttribute('content', seoConfig.twitterDescription);
  }

  // 更新canonical URL
  let canonical = document.querySelector('link[rel="canonical"]');
  if (canonical && seoConfig.canonicalUrl) {
    canonical.setAttribute('href', seoConfig.canonicalUrl);
  }
}

// 初始化
document.addEventListener('DOMContentLoaded', function() {
  // 从 localStorage 获取语言偏好
  const savedLanguage = localStorage.getItem('preferredLanguage');
  
  // 确定初始语言 - 默认使用英文
  let initialLanguage = 'en-US';
  
  // 如果有保存的语言偏好且该语言存在，则使用保存的语言
  if (savedLanguage && i18n[savedLanguage]) {
    initialLanguage = savedLanguage;
  }
  
  // 设置初始语言
  changeLanguage(initialLanguage);
});
