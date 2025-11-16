// script.js

// Simple i18n dictionary: Russian (ru) and Nepalese (ne)
const DICT = {
  ru: {
    title: "Украина",
    nav_contact: "Контакты",
    brand: "Украина",
    nav_ukraine: "Украина",
    nav_features: "Преимущества",
    nav_decision: "Решения",
    nav_nepal: "Украина для Непала",
    hero_title: "Украина — сердце Восточной Европы",
    hero_sub: "Страна глубоких традиций, сильного характера и городов с уникальной атмосферой.",
    about_title: "О стране",
    about_body: "Украина — большая европейская страна с богатой историей, разнообразной культурой и современными городами. От Карпатских гор до Черного моря — ландшафты, которые вдохновляют.",
    about_imgcap: "Пейзаж Украины",
    traditions_title: "Традиции",
    traditions_body: "Вышиванки, обряды, народные песни и танцы — бережно сохраняемые элементы идентичности. Праздники объединяют семьи и целые общины.",
    traditions_imgcap: "Украинские традиции",
    language_title: "Язык",
    language_body: "Украинский язык — мелодичный и выразительный. Знание украинского облегчает понимание других славянских языков и открывает двери в местное сообщество.",
    language_imgcap: "Украинский язык",
    people_title: "Люди",
    people_body: "Украинцы — трудолюбивые, гостеприимные и стойкие. Местные сообщества поддерживают инициативы и помогают адаптироваться.",
    people_imgcap: "Украинцы",
    cuisine_title: "Кухня",
    cuisine_body: "Борщ, вареники, деруны — сытная и вкусная кухня, которая объединяет за общим столом.",
    cuisine_imgcap: "Украинская кухня",
    cities_title: "Города",
    city_odessa_title: "Одесса",
    city_odessa_body: "Морской дух, уникальная архитектура и культурное наследие.",
    city_kyiv_title: "Киев",
    city_kyiv_body: "Столица с древними храмами и современным ритмом жизни.",
    city_kharkiv_title: "Харьков",
    city_kharkiv_body: "Студенческий центр с мощной инженерной традицией.",
    city_lviv_title: "Львов",
    city_lviv_body: "Кофейная столица с европейским шармом и историей.",
    city_yaremche_title: "Яремче",
    city_yaremche_body: "Карпатская природа, водопады и отдых круглый год.",
    footer: "© Украина — традиции, люди, культура. Все права защищены."
  },
  ne: {
    title: "युक्रेन",
    brand: "युक्रेन",
    nav_ukraine: "युक्रेन",
    nav_features: "विशेषताहरू",
    nav_decision: "निर्णय",
    nav_nepal: "नेपलका लागि युक्रेन",
    hero_title: "युक्रेन — पूर्वी युरोपको हृदय",
    hero_sub: "गहिरा परम्परा, मजबूत स्वभाव र अद्वितीय वातावरण भएका शहरहरूको देश।",
    about_title: "देशबारे",
    about_body: "युक्रेन ठूलो युरोपेली देश हो जसमा समृद्ध इतिहास, विविध संस्कृति र आधुनिक शहरहरू छन्। कार्पाथियन पहाडदेखि कालो समुद्रसम्म — प्रेरक भूपरिदृश्यहरू।",
    about_imgcap: "युक्रेनको दृश्य",
    traditions_title: "परम्परा",
    traditions_body: "भिसिवान्की, संस्कार, लोकगीत र नृत्य — पहिचानका सावधानीपूर्वक जोगाइएका तत्वहरू। पर्वहरूले परिवार र समुदायलाई एकताबद्ध गर्छन्।",
    traditions_imgcap: "युक्रेनी परम्परा",
    language_title: "भाषा",
    language_body: "युक्रेनी भाषा मधुर र अभिव्यक्तिपूर्ण छ। युक्रेनी जान्दा अन्य स्लाभिक भाषाहरू बुझ्न सजिलो हुन्छ र स्थानीय समुदायमा ढोका खोल्छ।",
    language_imgcap: "युक्रेनी भाषा",
    people_title: "मानिस",
    people_body: "युक्रेनीहरू मेहनती, आतिथ्यशील र दृढ छन्। स्थानीय समुदायले पहललाई समर्थन गर्छ र अभ्यस्त हुन मद्दत गर्छ।",
    people_imgcap: "युक्रेनीहरू",
    cuisine_title: "खाना",
    cuisine_body: "बोर्श्च, भारेनिकि, डेरुनी — पौष्टिक र स्वादिष्ट खाना जसले एउटै टेबलमा जोड्छ।",
    cuisine_imgcap: "युक्रेनी खाना",
    cities_title: "शहरहरू",
    city_odessa_title: "ओडेस्सा",
    city_odessa_body: "समुद्री आत्मा, अद्वितीय वास्तुकला र सांस्कृतिक सम्पदा।",
    city_kyiv_title: "किभ",
    city_kyiv_body: "प्राचीन मन्दिर र आधुनिक जीवनको ताल भएको राजधानी।",
    city_kharkiv_title: "खार्किभ",
    city_kharkiv_body: "बलियो इन्जिनियरिङ परम्परा भएको विद्यार्थी केन्द्र।",
    city_lviv_title: "ल्भिभ",
    city_lviv_body: "युरोपेली आकर्षण र इतिहास भएको कफी राजधानी।",
    city_yaremche_title: "यारेम्चे",
    nav_contact: "सम्पर्क",

    city_yaremche_body: "कार्पाथियन प्रकृति, जलप्रपात र वर्षभरि विश्राम।",
    footer: "© युक्रेन — परम्परा, मानिस, संस्कृति। सबै अधिकार सुरक्षित।"
  }
};

// Apply language to all [data-i18n] elements
function applyLanguage(lang) {
  const dict = DICT[lang] || DICT.ru;
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) {
      if (el.tagName.toLowerCase() === "title") {
        document.title = dict[key];
      } else {
        el.textContent = dict[key];
      }
    }
  });
  // update active state
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });
  // persist selection
  localStorage.setItem("lang", lang);
}

// Init language from storage or default to RU
const saved = localStorage.getItem("lang") || "ru";
applyLanguage(saved);

// Language switcher
document.querySelectorAll(".lang-btn").forEach(btn => {
  btn.addEventListener("click", () => applyLanguage(btn.dataset.lang));
});

// Reveal on scroll using IntersectionObserver
const revealEls = Array.from(document.querySelectorAll(".reveal"));
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("in-view");
      observer.unobserve(entry.target);
    }
  });
}, { rootMargin: "0px 0px -10% 0px", threshold: 0.1 });

revealEls.forEach(el => observer.observe(el));
