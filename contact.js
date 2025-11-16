// contact.js

const DICT = {
  ru: {
    contact_title: "Связаться с нами",
    title: "Украина",
    nav_contact: "Контакты",
    brand: "Украина",
    nav_ukraine: "Украина",
    nav_features: "Преимущества",
    nav_decision: "Решения",
    nav_nepal: "Украина для Непала",
    nav_contact: "Контакты",
    contact_hero_title: "Свяжитесь с нами",
    contact_hero_sub: "Мы всегда рады новым друзьям и партнёрам. Вот как можно легко выйти на связь:",
    contact_info_title: "Наши контакты",
    contact_email_label: "Email:",
    contact_phone_label: "Телефон:",
    contact_address_label: "Адрес:",
    contact_imgcap: "Мы всегда на связи",
    footer: "© Украина — будущее и возможности. Все права защищены."
  },
  ne: {
    contact_title: "हामीलाई सम्पर्क गर्नुहोस्",
    title: "युक्रेन",
    brand: "युक्रेन",
    nav_ukraine: "युक्रेन",
    nav_features: "विशेषताहरू",
    nav_decision: "निर्णय",
    nav_nepal: "नेपलका लागि युक्रेन",
    nav_contact: "सम्पर्क",
    contact_hero_title: "हामीलाई सम्पर्क गर्नुहोस्",
    contact_hero_sub: "हामी सधैं नयाँ साथीहरू र साझेदारहरूलाई स्वागत गर्छौं। यसरी सजिलै सम्पर्क गर्न सकिन्छ:",
    contact_info_title: "हाम्रो सम्पर्क",
    contact_email_label: "इमेल:",
    contact_phone_label: "फोन:",
    contact_address_label: "ठेगाना:",
    contact_imgcap: "हामी सधैं सम्पर्कमा छौं",
    footer: "© युक्रेन — भविष्य र अवसरहरू। सबै अधिकार सुरक्षित।"
  }
};

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
    if (el.tagName.toLowerCase() === "title") return;
    const key = el.getAttribute("data-i18n");
    if (dict[key]) el.textContent = dict[key];
  });

  // update active state
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });

  // persist selection
  try {
    localStorage.setItem("lang_contact", lang);
  } catch (e) {}
}

document.addEventListener("DOMContentLoaded", () => {
  const saved =
    (typeof localStorage !== "undefined" &&
      localStorage.getItem("lang_contact")) ||
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
