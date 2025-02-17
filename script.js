document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section");

    function revealSections() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < window.innerHeight - 50) {
                section.style.opacity = 1;
                section.style.transform = "translateY(0)";
            }
        });
    }

    window.addEventListener("scroll", revealSections);
    revealSections(); // Initial call

    // Google Analytics Integration
    let script = document.createElement("script");
    script.setAttribute("async", "");
    script.setAttribute("src", "https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX");
    document.head.appendChild(script);

    script.onload = function() {
        window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments); }
        gtag('js', new Date());
        gtag('config', 'G-XXXXXXX');
    };
});
