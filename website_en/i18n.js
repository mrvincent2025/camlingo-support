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