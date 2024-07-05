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
});
