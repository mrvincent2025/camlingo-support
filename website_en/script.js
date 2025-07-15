// CamLingo website intelligent language detection and switching
(function () {
  // Supported languages mapping
  const supportedLanguages = {
    "zh-CN": "zh-CN", "zh-TW": "zh-TW", "en-US": "en-US", "en-GB": "en-GB",
    "es-ES": "es-ES", "es-MX": "es-MX", "pt-PT": "pt-PT", "pt-BR": "pt-BR",
    "fr-FR": "fr-FR", "fr-CA": "fr-CA", "ja": "ja", "ko": "ko", "de": "de",
    "ru": "ru", "it": "it", "nl": "nl", "ar": "ar", "hi": "hi", "th": "th",
    "vi": "vi", "tr": "tr", "pl": "pl"
  };

  // Language detection priority order
  function detectLanguage() {
    let detectedLang = "en-US"; // Default fallback

    // 1. Check URL parameters first (highest priority)
    const urlParams = new URLSearchParams(window.location.search);
    const urlLang = urlParams.get('lang') || urlParams.get('l');
    if (urlLang && supportedLanguages[urlLang]) {
      detectedLang = urlLang;
      console.log("Language detected from URL parameter:", detectedLang);
      return detectedLang;
    }

    // 2. Check referrer for search engine language
    const referrer = document.referrer;
    if (referrer) {
      const searchEngineLang = detectSearchEngineLanguage(referrer);
      if (searchEngineLang && supportedLanguages[searchEngineLang]) {
        detectedLang = searchEngineLang;
        console.log("Language detected from search engine:", detectedLang);
        return detectedLang;
      }
    }

    // 3. Check browser language
    const browserLang = navigator.language || navigator.userLanguage || "en-US";
    for (const [code, value] of Object.entries(supportedLanguages)) {
      if (browserLang.toLowerCase().startsWith(code.toLowerCase().split("-")[0])) {
        detectedLang = value;
        console.log("Language detected from browser:", detectedLang);
        break;
      }
    }

    // 4. Check localStorage for user preference
    const savedLang = localStorage.getItem('camlingo-language');
    if (savedLang && supportedLanguages[savedLang]) {
      detectedLang = savedLang;
      console.log("Language loaded from localStorage:", detectedLang);
    }

    return detectedLang;
  }

  // Detect search engine language from referrer
  function detectSearchEngineLanguage(referrer) {
    const url = new URL(referrer);
    const hostname = url.hostname.toLowerCase();
    
    // Google search language detection
    if (hostname.includes('google')) {
      const gl = url.searchParams.get('gl'); // Country code
      const hl = url.searchParams.get('hl'); // Language code
      const lr = url.searchParams.get('lr'); // Language restriction
      
      if (hl) {
        return mapGoogleLanguageToSupported(hl);
      }
      if (lr) {
        return mapGoogleLanguageToSupported(lr);
      }
      if (gl) {
        return mapCountryToLanguage(gl);
      }
    }
    
    // Bing search language detection
    if (hostname.includes('bing')) {
      const setlang = url.searchParams.get('setlang');
      if (setlang) {
        return mapBingLanguageToSupported(setlang);
      }
    }
    
    // Baidu search language detection
    if (hostname.includes('baidu')) {
      const tn = url.searchParams.get('tn');
      if (tn && tn.includes('zh')) {
        return 'zh-CN';
      }
    }
    
    // Yandex search language detection
    if (hostname.includes('yandex')) {
      const lr = url.searchParams.get('lr');
      if (lr) {
        return mapYandexLanguageToSupported(lr);
      }
    }

    return null;
  }

  // Map Google language codes to supported languages
  function mapGoogleLanguageToSupported(googleLang) {
    const languageMap = {
      'zh': 'zh-CN', 'zh-CN': 'zh-CN', 'zh-TW': 'zh-TW',
      'en': 'en-US', 'en-US': 'en-US', 'en-GB': 'en-GB',
      'es': 'es-ES', 'es-ES': 'es-ES', 'es-MX': 'es-MX',
      'pt': 'pt-PT', 'pt-PT': 'pt-PT', 'pt-BR': 'pt-BR',
      'fr': 'fr-FR', 'fr-FR': 'fr-FR', 'fr-CA': 'fr-CA',
      'ja': 'ja', 'ko': 'ko', 'de': 'de', 'ru': 'ru',
      'it': 'it', 'nl': 'nl', 'ar': 'ar', 'hi': 'hi',
      'th': 'th', 'vi': 'vi', 'tr': 'tr', 'pl': 'pl'
    };
    return languageMap[googleLang] || null;
  }

  // Map Bing language codes to supported languages
  function mapBingLanguageToSupported(bingLang) {
    const languageMap = {
      'zh-CN': 'zh-CN', 'zh-TW': 'zh-TW',
      'en-US': 'en-US', 'en-GB': 'en-GB',
      'es-ES': 'es-ES', 'es-MX': 'es-MX',
      'pt-PT': 'pt-PT', 'pt-BR': 'pt-BR',
      'fr-FR': 'fr-FR', 'fr-CA': 'fr-CA',
      'ja': 'ja', 'ko': 'ko', 'de': 'de', 'ru': 'ru',
      'it': 'it', 'nl': 'nl', 'ar': 'ar', 'hi': 'hi',
      'th': 'th', 'vi': 'vi', 'tr': 'tr', 'pl': 'pl'
    };
    return languageMap[bingLang] || null;
  }

  // Map Yandex language codes to supported languages
  function mapYandexLanguageToSupported(yandexLang) {
    const languageMap = {
      '1031': 'de', '1033': 'en-US', '1034': 'es-ES',
      '1036': 'fr-FR', '1040': 'it', '1041': 'ja',
      '1042': 'ko', '1043': 'nl', '1045': 'pl',
      '1049': 'ru', '1055': 'tr', '1060': 'sl',
      '1081': 'hi', '1086': 'vi', '1087': 'kk',
      '1089': 'sw', '1090': 'uz', '1091': 'ky',
      '1092': 'tg', '1093': 'ta', '1094': 'bn',
      '1095': 'gu', '1096': 'kn', '1097': 'ml',
      '1098': 'te', '1099': 'pa', '1100': 'mr',
      '1101': 'ne', '1102': 'or', '1103': 'as',
      '1104': 'my', '1105': 'km', '1106': 'lo',
      '1107': 'gl', '1108': 'cy', '1109': 'ga',
      '1110': 'mt', '1111': 'yi', '1112': 'so',
      '1113': 'xh', '1114': 'zu', '1115': 'af',
      '1116': 'ka', '1117': 'fo', '1118': 'hi',
      '1119': 'ms', '1120': 'kk', '1121': 'ky',
      '1122': 'sw', '1123': 'tk', '1124': 'uz',
      '1125': 'tt', '1126': 'bn', '1127': 'pa',
      '1128': 'gu', '1129': 'or', '1130': 'ta',
      '1131': 'te', '1132': 'kn', '1133': 'ml',
      '1134': 'as', '1135': 'mr', '1136': 'sa',
      '1137': 'mn', '1138': 'bo', '1139': 'cy',
      '1140': 'km', '1141': 'lo', '1142': 'my',
      '1143': 'gl', '1144': 'kok', '1145': 'mni',
      '1146': 'sd', '1147': 'syr', '1148': 'si',
      '1149': 'chr', '1150': 'iu', '1151': 'am',
      '1152': 'tzm', '1153': 'ks', '1154': 'ne',
      '1155': 'fy', '1156': 'ps', '1157': 'fil',
      '1158': 'dv', '1159': 'bin', '1160': 'ff',
      '1161': 'ha', '1162': 'ibb', '1163': 'yo',
      '1164': 'quz', '1165': 'nso', '1166': 'ba',
      '1167': 'lb', '1168': 'kl', '1169': 'ig',
      '1170': 'ii', '1171': 'arn', '1172': 'moh',
      '1173': 'br', '1174': 'ug', '1175': 'mi',
      '1176': 'oc', '1177': 'co', '1178': 'gsw',
      '1179': 'sah', '1180': 'qut', '1181': 'rw',
      '1182': 'wo', '1183': 'prs', '1184': 'gd',
      '1185': 'ku', '1186': 'quc', '1187': 'ar-SA',
      '1188': 'bg-BG', '1189': 'ca-ES', '1190': 'zh-TW',
      '1191': 'cs-CZ', '1192': 'da-DK', '1193': 'de-AT',
      '1194': 'de-CH', '1195': 'de-DE', '1196': 'de-LI',
      '1197': 'de-LU', '1198': 'el-GR', '1199': 'en-AU',
      '1200': 'en-BZ', '1201': 'en-CA', '1202': 'en-CB',
      '1203': 'en-GB', '1204': 'en-IE', '1205': 'en-JM',
      '1206': 'en-NZ', '1207': 'en-PH', '1208': 'en-TT',
      '1209': 'en-US', '1210': 'en-ZA', '1211': 'en-ZW',
      '1212': 'es-AR', '1213': 'es-BO', '1214': 'es-CL',
      '1215': 'es-CO', '1216': 'es-CR', '1217': 'es-DO',
      '1218': 'es-EC', '1219': 'es-ES', '1220': 'es-GT',
      '1221': 'es-HN', '1222': 'es-MX', '1223': 'es-NI',
      '1224': 'es-PA', '1225': 'es-PE', '1226': 'es-PR',
      '1227': 'es-PY', '1228': 'es-SV', '1229': 'es-UY',
      '1230': 'es-VE', '1231': 'et-EE', '1232': 'eu-ES',
      '1233': 'fa-IR', '1234': 'fi-FI', '1235': 'fo-FO',
      '1236': 'fr-BE', '1237': 'fr-CA', '1238': 'fr-CH',
      '1239': 'fr-FR', '1240': 'fr-LU', '1241': 'fr-MC',
      '1242': 'gl-ES', '1243': 'gu-IN', '1244': 'he-IL',
      '1245': 'hi-IN', '1246': 'hr-BA', '1247': 'hr-HR',
      '1248': 'hu-HU', '1249': 'hy-AM', '1250': 'id-ID',
      '1251': 'is-IS', '1252': 'it-CH', '1253': 'it-IT',
      '1254': 'ja-JP', '1255': 'ka-GE', '1256': 'kk-KZ',
      '1257': 'kn-IN', '1258': 'ko-KR', '1259': 'ky-KG',
      '1260': 'lt-LT', '1261': 'lv-LV', '1262': 'mk-MK',
      '1263': 'ml-IN', '1264': 'mn-MN', '1265': 'mr-IN',
      '1266': 'ms-BN', '1267': 'ms-MY', '1268': 'nb-NO',
      '1269': 'nl-BE', '1270': 'nl-NL', '1271': 'nn-NO',
      '1272': 'pa-IN', '1273': 'pl-PL', '1274': 'pt-BR',
      '1275': 'pt-PT', '1276': 'ro-RO', '1277': 'ru-RU',
      '1278': 'sa-IN', '1279': 'sk-SK', '1280': 'sl-SI',
      '1281': 'sq-AL', '1282': 'sr-BA', '1283': 'sr-SP',
      '1284': 'sv-FI', '1285': 'sv-SE', '1286': 'sw-KE',
      '1287': 'ta-IN', '1288': 'te-IN', '1289': 'th-TH',
      '1290': 'tr-TR', '1291': 'uk-UA', '1292': 'ur-PK',
      '1293': 'uz-UZ', '1294': 'vi-VN', '1295': 'zh-CN',
      '1296': 'zh-HK', '1297': 'zh-MO', '1298': 'zh-SG'
    };
    return languageMap[yandexLang] || null;
  }

  // Map country codes to languages
  function mapCountryToLanguage(countryCode) {
    const countryLanguageMap = {
      'CN': 'zh-CN', 'TW': 'zh-TW', 'HK': 'zh-CN', 'MO': 'zh-CN', 'SG': 'zh-CN',
      'US': 'en-US', 'GB': 'en-GB', 'CA': 'en-US', 'AU': 'en-US', 'NZ': 'en-US',
      'ES': 'es-ES', 'MX': 'es-MX', 'AR': 'es-ES', 'CO': 'es-ES', 'PE': 'es-ES',
      'PT': 'pt-PT', 'BR': 'pt-BR', 'AO': 'pt-PT', 'MZ': 'pt-PT',
      'FR': 'fr-FR', 'CA': 'fr-CA', 'BE': 'fr-FR', 'CH': 'fr-FR', 'LU': 'fr-FR',
      'JP': 'ja', 'KR': 'ko', 'DE': 'de', 'AT': 'de', 'CH': 'de', 'LI': 'de', 'LU': 'de',
      'RU': 'ru', 'IT': 'it', 'CH': 'it', 'NL': 'nl', 'BE': 'nl',
      'SA': 'ar', 'AE': 'ar', 'EG': 'ar', 'IN': 'hi', 'TH': 'th', 'VN': 'vi', 'TR': 'tr', 'PL': 'pl'
    };
    return countryLanguageMap[countryCode] || null;
  }

  // Set language and update UI
  function setLanguage(lang) {
    if (!supportedLanguages[lang]) {
      console.warn("Unsupported language:", lang);
      return;
    }

    // Set HTML lang attribute
    document.documentElement.setAttribute("lang", lang);
    
    // Save to localStorage
    localStorage.setItem('camlingo-language', lang);
    
    // Update language selector display
    updateLanguageSelector(lang);

    // Update page content if i18n is loaded
    if (typeof changeLanguage === 'function') {
      changeLanguage(lang);
    }

    console.log("Language set to:", lang);
  }

  // Initialize language detection
  function initLanguageDetection() {
    const detectedLang = detectLanguage();
    setLanguage(detectedLang);
    
    // Log detection results for debugging
    console.log("Language detection results:", {
      browser: navigator.language || navigator.userLanguage,
      referrer: document.referrer,
      detected: detectedLang,
      supported: Object.keys(supportedLanguages)
    });
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLanguageDetection);
  } else {
    initLanguageDetection();
  }

  // Mobile menu functionality
  function initMobileMenu() {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navLinks = document.getElementById('navLinks');
    
    if (mobileMenuToggle && navLinks) {
      mobileMenuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        mobileMenuToggle.classList.toggle('active');
      });
      
      // Close menu when clicking on a link
      const navLinksItems = navLinks.querySelectorAll('a');
      navLinksItems.forEach(link => {
        link.addEventListener('click', function() {
          navLinks.classList.remove('active');
          mobileMenuToggle.classList.remove('active');
        });
      });
      
      // Close menu when clicking outside
      document.addEventListener('click', function(event) {
        if (!mobileMenuToggle.contains(event.target) && !navLinks.contains(event.target)) {
          navLinks.classList.remove('active');
          mobileMenuToggle.classList.remove('active');
        }
      });
    }
  }

  // Smooth scrolling for anchor links
  function initSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          const offsetTop = targetElement.offsetTop - 80; // Account for fixed header
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        }
      });
    });
  }

  // Initialize language selector functionality
  function initLanguageSelector() {
    const languageBtn = document.getElementById('languageBtn');
    const languageDropdown = document.getElementById('languageDropdown');
    const languageBtnText = document.getElementById('languageBtnText');
    const languageSearch = document.getElementById('languageSearch');
    const languageOptions = document.querySelectorAll('.language-option');
    
    if (!languageBtn || !languageDropdown) return;
    
    // Toggle dropdown
    languageBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      const isExpanded = languageBtn.getAttribute('aria-expanded') === 'true';
      languageBtn.setAttribute('aria-expanded', !isExpanded);
      languageDropdown.classList.toggle('active');
      
      if (!isExpanded) {
        languageSearch.focus();
      }
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
      if (!languageBtn.contains(e.target) && !languageDropdown.contains(e.target)) {
        languageBtn.setAttribute('aria-expanded', 'false');
        languageDropdown.classList.remove('active');
      }
    });
    
    // Handle language selection
    languageOptions.forEach(option => {
      option.addEventListener('click', function() {
        const value = this.getAttribute('data-value');
        const nativeName = this.getAttribute('data-native');
        
        // Update button text
        languageBtnText.textContent = nativeName;
        
        // Update selected state
        languageOptions.forEach(opt => opt.classList.remove('selected'));
        this.classList.add('selected');
        
        // Close dropdown
        languageBtn.setAttribute('aria-expanded', 'false');
        languageDropdown.classList.remove('active');
        
        // Change language
        setLanguage(value);
      });
    });
    
    // Handle search functionality
    languageSearch.addEventListener('input', function() {
      const searchTerm = this.value.toLowerCase();
      
      languageOptions.forEach(option => {
        const text = option.textContent.toLowerCase();
        const nativeName = option.getAttribute('data-native').toLowerCase();
        
        if (text.includes(searchTerm) || nativeName.includes(searchTerm)) {
          option.classList.remove('hidden');
        } else {
          option.classList.add('hidden');
        }
      });
    });
    
    // Handle keyboard navigation
    languageSearch.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
        languageBtn.setAttribute('aria-expanded', 'false');
        languageDropdown.classList.remove('active');
        languageBtn.focus();
      }
    });
  }
  
  // Update language selector display
  function updateLanguageSelector(lang) {
    const languageBtnText = document.getElementById('languageBtnText');
    const languageOptions = document.querySelectorAll('.language-option');
    const languageSearch = document.getElementById('languageSearch');
    
    if (languageBtnText) {
      const selectedOption = document.querySelector(`[data-value="${lang}"]`);
      if (selectedOption) {
        languageBtnText.textContent = selectedOption.getAttribute('data-native');
        
        // Update selected state
        languageOptions.forEach(opt => opt.classList.remove('selected'));
        selectedOption.classList.add('selected');
      }
    }
    
    // Update search placeholder
    if (languageSearch && typeof i18n !== 'undefined' && i18n[lang] && i18n[lang].language) {
      languageSearch.placeholder = i18n[lang].language.search || 'Search language...';
    }
  }

  // Initialize all functionality when DOM is loaded
  function initAll() {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initAll);
      return;
    }

    initLanguageDetection();
    initLanguageSelector();
    initMobileMenu();
    initSmoothScrolling();
  }

  // Expose functions globally for external use
  window.CamLingoLanguage = {
    detectLanguage,
    setLanguage,
    supportedLanguages
  };

  // Start initialization
  initAll();
})(); 
