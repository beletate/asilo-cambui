const lex = document.querySelectorAll('.js-menu a[href^="#"]');

function scrollToSection(event) {
    event.preventDefault();
    const href = this.getAttribute('href');
    const section = document.querySelector(href);

    section.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

lex.forEach ((link)=>{
    link.addEventListener('click', scrollToSection);
})