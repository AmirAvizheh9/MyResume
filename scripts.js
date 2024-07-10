document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("a");
    links.forEach(link => {
        link.addEventListener("click", (event) => {
            if (link.getAttribute("href").startsWith("mailto:")) {
                event.preventDefault();
                window.location.href = link.getAttribute("href");
            }
        });
    });

    const languageSwitch = document.getElementById("language-switch");
    languageSwitch.addEventListener("click", () => {
        const currentLanguage = document.documentElement.lang;
        const textElements = document.querySelectorAll("[data-en], [data-fa]");

        if (currentLanguage === "en") {
            document.documentElement.lang = "fa";
            languageSwitch.textContent = "English";
            textElements.forEach(el => {
                el.textContent = el.getAttribute("data-fa");
            });
        } else {
            document.documentElement.lang = "en";
            languageSwitch.textContent = "فارسی";
            textElements.forEach(el => {
                el.textContent = el.getAttribute("data-en");
            });
        }
    });
});
