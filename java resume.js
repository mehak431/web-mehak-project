document.addEventListener("DOMContentLoaded", () => {
    // Smooth scrolling for navigation links
    const links = document.querySelectorAll("nav ul li a");
    links.forEach(link => {
        link.addEventListener("click", e => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute("href"));
            target.scrollIntoView({ behavior: "smooth" });
        });
    });

    // Animate skill bars
    const skills = document.querySelectorAll(".progress");
    skills.forEach(skill => {
        const width = skill.style.width;
        skill.style.width = "0%";
        setTimeout(() => (skill.style.width = width), 300);
    });

    // Highlight table rows on click
    const rows = document.querySelectorAll("table tbody tr");
    rows.forEach(row => {
        row.addEventListener("click", () => {
            row.classList.toggle("highlight");
        });
    });
});