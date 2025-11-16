// decision.js

// i18n dictionary for Decision page
const DICT = {
  ru: {
    decision_title: "Решения Украины",
    title: "Украина",
    nav_contact: "Контакты",
    brand: "Украина",
    nav_ukraine: "Украина",
    nav_features: "Преимущества",
    nav_decision: "Решения",
    nav_nepal: "Украина для Непала",
    decision_hero_title: "Сельское хозяйство Украины",
    decision_hero_sub: "Украина — одна из крупнейших аграрных стран Европы. Огромные поля, плодородные земли и миллионы рабочих мест делают её сельское хозяйство стратегическим сектором экономики.",
    agriculture_title: "Аграрное лидерство",
    agriculture_body: "Украина входит в топ‑5 мировых экспортеров зерновых культур. Она является крупнейшим производителем подсолнечного масла и одним из лидеров по экспорту кукурузы. Сельское хозяйство обеспечивает более 15% ВВП страны.",
    agriculture_imgcap: "Плодородные поля Украины",
    facts_title: "Факты и цифры",
    facts_imgcap: "Статистика аграрного сектора",
    fact_grain: "Украина производит около 3% мирового объёма зерна.",
    fact_sunflower: "Более 50% мирового экспорта подсолнечного масла приходится на Украину.",
    fact_jobs: "Сельское хозяйство обеспечивает работу более чем 2,5 миллионам человек.",
    jobs_title: "Рабочие места и возможности",
    jobs_body: "Сельское хозяйство Украины — это миллионы рабочих мест: от фермеров и инженеров до специалистов по экспорту и логистике. Этот сектор обеспечивает стабильный доход для семей и открывает перспективы для инвестиций.",
    jobs_imgcap: "Работники аграрного сектора",
    footer: "© Украина — будущее и возможности. Все права защищены.",
    nav_contact: "Контакты"

  },
  ne: {
    decision_title: "युक्रेनका निर्णयहरू",
    nav_contact: "सम्पर्क",
    title: "युक्रेन",
    brand: "युक्रेन",
    nav_ukraine: "युक्रेन",
    nav_features: "विशेषताहरू",
    nav_decision: "निर्णय",
    nav_nepal: "नेपलका लागि युक्रेन",

    decision_hero_title: "युक्रेनको कृषि",
    decision_hero_sub: "युक्रेन युरोपका सबैभन्दा ठूलो कृषि राष्ट्रहरूमध्ये एक हो। विशाल खेत, उर्वर भूमि र लाखौं रोजगारीहरूले यसलाई अर्थतन्त्रको रणनीतिक क्षेत्र बनाउँछ।",
    agriculture_title: "कृषि नेतृत्व",
    agriculture_body: "युक्रेन विश्वका शीर्ष ५ अन्न निर्यातकर्तामध्ये एक हो। यो सूर्यमुखी तेलको सबैभन्दा ठूलो उत्पादक हो र मकै निर्यातमा अग्रणी हो। कृषिले देशको करिब १५% जीडीपी योगदान गर्छ।",
    agriculture_imgcap: "युक्रेनका उर्वर खेतहरू",
    facts_title: "तथ्य र आँकडा",
    facts_imgcap: "कृषि क्षेत्रको तथ्याङ्क",
    fact_grain: "युक्रेनले विश्वको करिब ३% अन्न उत्पादन गर्छ।",
    fact_sunflower: "विश्वको ५०% भन्दा बढी सूर्यमुखी तेल निर्यात युक्रेनबाट हुन्छ।",
    fact_jobs: "कृषिले करिब २५ लाख मानिसलाई रोजगारी दिन्छ।",
    jobs_title: "रोजगारी र अवसरहरू",
    jobs_body: "युक्रेनको कृषि क्षेत्रमा लाखौं रोजगारी छन्: किसानदेखि इन्जिनियरसम्म, निर्यात र लगानी विशेषज्ञसम्म। यसले परिवारहरूलाई स्थिर आय दिन्छ र लगानीका लागि अवसरहरू खोल्छ।",
    jobs_imgcap: "कृषि क्षेत्रमा काम गर्नेहरू",
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
    localStorage.setItem("lang_decision", lang);
  } catch (e) {}
}

// Safe init after DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  const saved =
    (typeof localStorage !== "undefined" &&
      localStorage.getItem("lang_decision")) ||
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
