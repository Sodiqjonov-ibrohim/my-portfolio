// Konsolga salomlashuv chiqarish (Yaponiya kompaniyasi dasturchilari kodni tekshirganda ko'rishadi)
console.log("Welcome to my portfolio! Built with pure HTML, CSS, and JS.");

// Smooth scroll (Smooth harakat) JS orqali qo'shimcha nazorat uchun
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if(target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});