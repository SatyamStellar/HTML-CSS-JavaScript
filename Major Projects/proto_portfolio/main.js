var typed = new Typed('#element', {
    strings: ['"Web Developer"', '"Logo Designer"','"Web Designer"','"Video Editor"'],
    typeSpeed: 50,
    backSpeed: 70,
    loop: true
});

const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link =>{
    link.addEventListener('click',()=>{
        navLinks.forEach(nav => nav.classList.remove('active'));
        link.classList.add('active');
    })
})