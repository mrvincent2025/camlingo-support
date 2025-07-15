// CamLingo website language detection to set html lang attribute
(function () {
  const supported = [
    "zh-CN","zh-TW","en-US","en-GB","es-ES","es-MX","pt-PT","pt-BR","fr-FR","fr-CA","ja","ko","de","ru","it","nl","ar","hi","th","vi","tr","pl"
  ];
  const userLang = navigator.language || navigator.userLanguage || "en-US";
  let finalLang = "en-US";
  for (const code of supported) {
    if (userLang.toLowerCase().startsWith(code.toLowerCase().split("-")[0])) {
      finalLang = code;
      break;
    }
  }
  document.documentElement.setAttribute("lang", finalLang);
})(); 