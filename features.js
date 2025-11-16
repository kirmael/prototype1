// features.js

// Simple i18n dictionary: Russian (ru) and Nepali (ne)
const DICT = {
  ru: {
    title: "Украина",
    nav_contact: "Контакты",
    brand: "Украина",
    nav_ukraine: "Украина",
    nav_features: "Преимущества",
    nav_decision: "Решения",
    nav_nepal: "Украина для Непала",
    features_title: "Преимущества Украины",
    nav_contact: "Контакты",
    brand: "Украина",
    nav_ukraine: "Украина",
    nav_features: "Преимущества",
    nav_decision: "Решения",
    nav_nepal: "Украина для Непала",
    hero_title: "Почему стоит выбрать Украину",
    hero_sub: "Страна возможностей, будущего и открытых дверей для инвесторов и граждан мира.",
    economy_title: "Экономическое будущее",
    economy_body: "Украина активно модернизирует инфраструктуру, развивает цифровую экономику и открывает новые рынки.",
    economy_imgcap: "Экономика Украины",
    investment_title: "Инвестиции в города",
    city_kyiv_title: "Киев",
    city_kyiv_body: "Центр технологий, финансов и стартапов.",
    city_lviv_title: "Львов",
    city_lviv_body: "Туризм, культура и IT-услуги.",
    city_odessa_title: "Одесса",
    city_odessa_body: "Портовый бизнес и морская торговля.",
    city_kharkiv_title: "Харьков",
    city_kharkiv_body: "Инженерия, образование и промышленность.",
    passport_title: "Преимущества паспорта",
    passport_body: "Украинский паспорт открывает двери в Европу и мир. Более 140 стран доступны без визы.",
    passport_imgcap: "Украинский паспорт",
    visa_title: "Страны без визы",
    visa_intro: "С украинским паспортом вы можете путешествовать в более чем 140 стран мира без визы.",
    footer: "© Украина — будущее и возможности. Все права защищены.",
    continent_europe: "Европа",
    continent_asia: "Азия",
    continent_america: "Америка",
    continent_africa: "Африка",
    continent_oceania: "Океания",
    // Europe
    visa_eu: "Европейский Союз (27 стран)",
    visa_albania: "Албания",
    visa_bosnia: "Босния и Герцеговина",
    visa_montenegro: "Черногория",
    visa_serbia: "Сербия",
    visa_north_macedonia: "Северная Македония",
    visa_moldova: "Молдова",
    visa_georgia: "Грузия",
    visa_iceland: "Исландия",
    visa_norway: "Норвегия",
    visa_switzerland: "Швейцария",
    // Asia
    visa_turkey: "Турция",
    visa_israel: "Израиль",
    visa_uae: "ОАЭ",
    visa_qatar: "Катар",
    visa_bahrain: "Бахрейн",
    visa_kuwait: "Кувейт",
    visa_japan: "Япония",
    visa_korea: "Южная Корея",
    visa_singapore: "Сингапур",
    visa_malaysia: "Малайзия",
    visa_indonesia: "Индонезия",
    visa_thailand: "Таиланд",
    visa_hongkong: "Гонконг",
    visa_macau: "Макао",
    visa_philippines: "Филиппины",
    visa_vietnam: "Вьетнам",
    visa_srilanka: "Шри-Ланка",
    visa_nepal: "Непал",
    // Americas
    visa_brazil: "Бразилия",
    visa_argentina: "Аргентина",
    visa_chile: "Чили",
    visa_peru: "Перу",
    visa_mexico: "Мексика",
    visa_colombia: "Колумбия",
    visa_panama: "Панама",
    visa_costa_rica: "Коста-Рика",
    visa_uruguay: "Уругвай",
    visa_paraguay: "Парагвай",
    visa_ecuador: "Эквадор",
    visa_guatemala: "Гватемала",
    visa_honduras: "Гондурас",
    visa_nicaragua: "Никарагуа",
    visa_el_salvador: "Сальвадор",
    visa_dominican: "Доминиканская Республика",
    visa_jamaica: "Ямайка",
    visa_trinidad: "Тринидад и Тобаго",
    // Africa
    visa_south_africa: "ЮАР",
    visa_mauritius: "Маврикий",
    visa_seychelles: "Сейшелы",
    visa_tunisia: "Тунис",
    visa_morocco: "Марокко",
    visa_kenya: "Кения",
    visa_tanzania: "Танзания",
    visa_namibia: "Намибия",
    visa_botswana: "Ботсвана",
    visa_zambia: "Замбия",
    visa_zimbabwe: "Зимбабве",
    visa_cape_verde: "Кабо-Верде",
    visa_senegal: "Сенегал",
    visa_ghana: "Гана",
    // Oceania
    visa_australia: "Австралия",
    visa_new_zealand: "Новая Зеландия",
    visa_fiji: "Фиджи",
    visa_samoa: "Самоа",
    visa_tonga: "Тонга",
    visa_vanuatu: "Вануату",
    visa_micronesia: "Микронезия",
    visa_palau: "Палау",
    visa_marshall: "Маршалловы Острова"
  },
  ne: {
    title: "युक्रेन",
    brand: "युक्रेन",
    nav_ukraine: "युक्रेन",
    nav_features: "विशेषताहरू",
    nav_decision: "निर्णय",
    nav_nepal: "नेपलका लागि युक्रेन",
    features_title: "युक्रेनका फाइदाहरू",
    brand: "युक्रेन",
    nav_ukraine: "युक्रेन",
    nav_features: "विशेषताहरू",
    nav_decision: "निर्णय",
    nav_nepal: "नेपालका लागि युक्रेन",
    hero_title: "किन युक्रेन रोज्ने",
    hero_sub: "अवसर, भविष्य र लगानीकर्ताहरूका लागि खुला ढोकाको देश।",
    economy_title: "आर्थिक भविष्य",
    economy_body: "युक्रेनले पूर्वाधारलाई आधुनिक बनाउँदैछ, डिजिटल अर्थतन्त्र विकास गर्दैछ र नयाँ बजारहरू खोल्दैछ।",
    economy_imgcap: "युक्रेनको अर्थतन्त्र",
    investment_title: "शहरहरूमा लगानी",
    city_kyiv_title: "किभ",
    city_kyiv_body: "प्रविधि, वित्त र स्टार्टअपहरूको केन्द्र।",
    city_lviv_title: "ल्भिभ",
    city_lviv_body: "पर्यटन, संस्कृति र आईटी सेवा।",
    city_odessa_title: "ओडेस्सा",
    city_odessa_body: "बन्दरगाह व्यवसाय र समुद्री व्यापार।",
    city_kharkiv_title: "खार्किभ",
    city_kharkiv_body: "इन्जिनियरिङ, शिक्षा र उद्योग।",
    passport_title: "पासपोर्टका फाइदाहरू",
    passport_body: "युक्रेनी पासपोर्टले युरोप र विश्वका ढोकाहरू खोल्छ। १४० भन्दा बढी देशहरू भिसा बिना उपलब्ध छन्।",
    passport_imgcap: "युक्रेनी पासपोर्ट",
    visa_title: "भिसा-रहित देशहरू",
    visa_intro: "युक्रेनी पासपोर्टसँग तपाईं १४० भन्दा बढी देशहरूमा भिसा बिना यात्रा गर्न सक्नुहुन्छ।",
    footer: "© युक्रेन — भविष्य र अवसरहरू। सबै अधिकार सुरक्षित।",
    continent_europe: "युरोप",
    continent_asia: "एसिया",
    continent_america: "अमेरिका",
    nav_contact: "सम्पर्क",

    continent_africa: "अफ्रिका",
    continent_oceania: "ओसियाना",
    // Europe
    visa_eu: "युरोपेली संघ (२७ देशहरू)",
    visa_albania: "अल्बानिया",
    visa_bosnia: "बोस्निया र हर्जेगोभिना",
    visa_montenegro: "मोन्टेनेग्रो",
    visa_serbia: "सर्बिया",
    visa_north_macedonia: "उत्तर म्यासेडोनिया",
    visa_moldova: "मोल्डोवा",
    visa_georgia: "जर्जिया",
    visa_iceland: "आइसल्यान्ड",
    visa_norway: "नर्वे",
    visa_switzerland: "स्विजरल्याण्ड",
        // Asia
    visa_turkey: "टर्की",
    visa_israel: "इजरायल",
    visa_uae: "संयुक्त अरब इमिरेट्स",
    visa_qatar: "कतार",
    visa_bahrain: "बहराइन",
    visa_kuwait: "कुवेत",
    visa_japan: "जापान",
    visa_korea: "दक्षिण कोरिया",
    visa_singapore: "सिंगापुर",
    visa_malaysia: "मलेसिया",
    visa_indonesia: "इन्डोनेसिया",
    visa_thailand: "थाइल्याण्ड",
    visa_hongkong: "हङकङ",
    visa_macau: "मकाउ",
    visa_philippines: "फिलिपिन्स",
    visa_vietnam: "भियतनाम",
    visa_srilanka: "श्रीलङ्का",
    visa_nepal: "नेपाल",

    // Americas
    visa_brazil: "ब्राजिल",
    visa_argentina: "अर्जेन्टिना",
    visa_chile: "चिली",
    visa_peru: "पेरु",
    visa_mexico: "मेक्सिको",
    visa_colombia: "कोलम्बिया",
    visa_panama: "पनामा",
    visa_costa_rica: "कोस्टा रिका",
    visa_uruguay: "उरुग्वे",
    visa_paraguay: "पाराग्वे",
    visa_ecuador: "इक्वेडर",
    visa_guatemala: "ग्वाटेमाला",
    visa_honduras: "हन्डुरास",
    visa_nicaragua: "निकारागुवा",
    visa_el_salvador: "एल साल्भाडोर",
    visa_dominican: "डोमिनिकन गणराज्य",
    visa_jamaica: "जमैका",
    visa_trinidad: "ट्रिनिडाड र टोबागो",

    // Africa
    visa_south_africa: "दक्षिण अफ्रिका",
    visa_mauritius: "मौरिसस",
    visa_seychelles: "सेशेल्स",
    visa_tunisia: "ट्युनिसिया",
    visa_morocco: "मोरोक्को",
    visa_kenya: "केन्या",
    visa_tanzania: "तान्जानिया",
    visa_namibia: "नामिबिया",
    visa_botswana: "बोट्स्वाना",
    visa_zambia: "जाम्बिया",
    visa_zimbabwe: "जिम्बाब्वे",
    visa_cape_verde: "केप भर्डे",
    visa_senegal: "सेनेगल",
    visa_ghana: "घाना",

    // Oceania
    visa_australia: "अष्ट्रेलिया",
    visa_new_zealand: "न्युजिल्यान्ड",
    visa_fiji: "फिजी",
    visa_samoa: "सामोआ",
    visa_tonga: "टोंगा",
    visa_vanuatu: "भानुआतु",
    visa_micronesia: "माइक्रोनेसिया",
    visa_palau: "पालाउ",
    visa_marshall: "मार्शल टापु"
  }
};
// features.js

// Apply language to all [data-i18n] elements
function applyLanguage(lang) {
  // Очікується, що DICT буде оголошений у іншому файлі
  const dict = DICT[lang] || DICT["ru"];
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
    localStorage.setItem("lang_features", lang);
  } catch (e) {}
}

// Safe init after DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  const saved =
    (typeof localStorage !== "undefined" &&
      localStorage.getItem("lang_features")) ||
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
