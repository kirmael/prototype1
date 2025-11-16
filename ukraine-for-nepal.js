// ukraine-for-nepal.js

// i18n dictionary for Ukraine for Nepal page
const DICT = {
  ru: {
    nepal_title: "Украина для Непала",
    title: "Украина",
    nav_contact: "Контакты",
    brand: "Украина",
    nav_ukraine: "Украина",
    nav_features: "Преимущества",
    nav_decision: "Решения",
    nav_nepal: "Украина для Непала",
    nepal_hero_title: "Украина для непальцев",
    nepal_hero_sub: "Украина открывает новые возможности для граждан Непала: богатая земля, сильная культура и перспективное будущее.",
    farming_title: "Сильное сельское хозяйство",
    farming_body: "Украина известна своими плодородными землями и огромным сельским хозяйством. Это страна, где выращиваются зерновые, кукуруза и подсолнечник в масштабах, которые впечатляют весь мир.",
    farming_imgcap: "Украинское сельское хозяйство",
    passport_title: "Легкий путь к паспорту",
    passport_body: "Получить украинский паспорт проще, чем во многих странах. С ним вы сможете путешествовать по Европе без визы. В будущем правила станут строже, ведь Украина стремится в ЕС, а значит паспорт и экономика будут ещё мощнее.",
    passport_imgcap: "Украинский паспорт",
    language_title: "Украинский язык",
    language_body: "Украинский язык красив и уникален. Освоив его, вы сможете понимать почти все славянские языки — от польского до русского и белорусского.",
    language_imgcap: "Украинский язык и культура",
    people_title: "Дружелюбные люди",
    people_body: "Украинцы — открытые и добрые люди. Они ценят дружбу, уважают трудолюбие и всегда готовы помочь соседям и новым друзьям.",
    people_imgcap: "Украинцы — хорошие люди",
    future_title: "Сильное будущее",
    future_body: "Украина готовится к вступлению в Европейский Союз. Это значит, что её экономика станет ещё мощнее, а паспорт — одним из самых ценных в регионе.",
    future_imgcap: "Будущее Украины",
    nav_contact: "Контакты",

    footer: "© Украина — будущее и возможности. Все права защищены."
  },
  ne: {
    nepal_title: "नेपालका लागि युक्रेन",
    nav_contact: "सम्पर्क",
    title: "युक्रेन",
    brand: "युक्रेन",
    nav_ukraine: "युक्रेन",
    nav_features: "विशेषताहरू",
    nav_decision: "निर्णय",
    nav_nepal: "नेपलका लागि युक्रेन",

    nepal_hero_title: "नेपालका लागि युक्रेन",
    nepal_hero_sub: "युक्रेनले नेपालका नागरिकहरूलाई नयाँ अवसरहरू खोल्छ: उर्वर भूमि, बलियो संस्कृति र उज्ज्वल भविष्य।",
    farming_title: "शक्तिशाली कृषि",
    farming_body: "युक्रेन आफ्नो उर्वर भूमिहरू र विशाल कृषि उत्पादनका लागि प्रसिद्ध छ। यहाँ अन्न, मकै र सूर्यमुखी विश्वलाई प्रभावित गर्ने स्तरमा उत्पादन हुन्छ।",
    farming_imgcap: "युक्रेनको कृषि",
    passport_title: "पासपोर्टको सजिलो बाटो",
    passport_body: "युक्रेनी पासपोर्ट प्राप्त गर्न धेरै देशहरू भन्दा सजिलो छ। यससँग तपाईं युरोपमा भिसा बिना यात्रा गर्न सक्नुहुन्छ। भविष्यमा नियमहरू कडा हुनेछन्, किनभने युक्रेन युरोपेली संघमा प्रवेश गर्न चाहन्छ, जसले पासपोर्ट र अर्थतन्त्रलाई अझ शक्तिशाली बनाउनेछ।",
    passport_imgcap: "युक्रेनी पासपोर्ट",
    language_title: "युक्रेनी भाषा",
    language_body: "युक्रेनी भाषा सुन्दर र अद्वितीय छ। यसलाई सिकेपछि तपाईंले पोलिसदेखि रूसी र बेलारुसीसम्मका अधिकांश स्लाभिक भाषाहरू बुझ्न सक्नुहुन्छ।",
    language_imgcap: "युक्रेनी भाषा र संस्कृति",
    people_title: "मैत्रीपूर्ण मानिसहरू",
    people_body: "युक्रेनीहरू खुला र दयालु हुन्छन्। उनीहरूले मित्रतालाई महत्व दिन्छन्, मेहनतलाई सम्मान गर्छन् र सधैं छिमेकी तथा नयाँ साथीहरूलाई मद्दत गर्न तयार हुन्छन्।",
    people_imgcap: "युक्रेनीहरू — राम्रो मानिसहरू",
    future_title: "शक्तिशाली भविष्य",
    future_body: "युक्रेन युरोपेली संघमा प्रवेश गर्न तयारी गर्दैछ। यसको अर्थ यसको अर्थतन्त्र अझ बलियो हुनेछ र पासपोर्ट क्षेत्रका सबैभन्दा मूल्यवानमध्ये एक हुनेछ।",
    future_imgcap: "युक्रेनको भविष्य",
    footer: "© युक्रेन — भविष्य र अवसरहरू। सबै अधिकार सुरक्षित।"
  }
};

// Apply language to all [data-i18n] elements
function applyLanguage(lang) {
  const dict = DICT[lang] || DICT.ru;
  document.documentElement.lang = lang;

  // Title translation
  const titleEl = document.querySelector("title[data-i18n]");
  if (titleEl) {
    const tKey = titleEl.getAttribute("data-i18n");
    if (dict[tKey]) document.title = dict[tKey];
  }

  // Body translations
  document.querySelectorAll("[data-i18n]").forEach(el => {
    if (el.tagName.toLowerCase() === "title") return; // already handled
    const key = el.getAttribute("data-i18n");
    const val = dict[key];
    if (typeof val === "string") {
      el.textContent = val;
    }
  });

  // update active state
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });

  // persist selection
  try {
    localStorage.setItem("lang_nepal", lang);
  } catch (e) {}
}

// Safe init after DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  const saved =
    (typeof localStorage !== "undefined" &&
      localStorage.getItem("lang_nepal")) ||
    "ru";
  applyLanguage(saved);

  // Language switcher
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.addEventListener("click", () => applyLanguage(btn.dataset.lang));
  });

  // Reveal on scroll using IntersectionObserver
  const revealEls = Array.from(document.querySelectorAll(".reveal"));
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -10% 0px", threshold: 0.1 }
  );

  revealEls.forEach(el => observer.observe(el));
});
