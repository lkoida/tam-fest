async function switchLanguage(lang) {
    const response = await fetch(`${lang}.json`);
    const translations = await response.json();

    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[key]) {
            element.innerHTML = translations[key];
        }
    });

    // Optional: save user preference to localStorage
    localStorage.setItem('userLang', lang);
    // Update the page's main language attribute
    document.documentElement.lang = lang;
}

// Call on page load (e.g., check for saved preference or browser language)
document.addEventListener('DOMContentLoaded', async () => {
    const userPreferredLang = localStorage.getItem('userLang') || navigator.language.substring(0, 2) || 'en';
    await switchLanguage(userPreferredLang);
});
