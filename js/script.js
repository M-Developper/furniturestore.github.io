let searchForm = document.querySelector('.search-form'),
    userForm = document.querySelector('.user-form'),
    navbarLinks = document.querySelector('.navbar-links'),
    slides = document.querySelectorAll('.home .slides-container .slide'),
    productsDetails = document.querySelector('.products-details'),
    detailBox = document.querySelectorAll('.products-details .detail'),
    products = document.querySelectorAll('.products .box-container .box'),
    sections = document.querySelectorAll('section'),
    hyperLinks = document.querySelectorAll('.header .navbar-links a');
// Buttons Variables
let searchButton = document.getElementById('search-button'),
    userButton = document.getElementById('user-button'),
    navbarButton = document.getElementById('navbar-button'),
    loginForm = document.querySelector('.user-form .login'),
    createAcc = document.querySelector('.user-form .create-account'),
    slideNextButton = document.getElementById('slide-next'),
    slidePrevButton = document.getElementById('slide-prev'),
    closeProDetails = document.querySelectorAll('.products-details .detail .fa-times');
// User Form Button
let userFormCloser = document.querySelector('.user-form #closer'),
    searchFormCloser = document.querySelector('.search-form #closer'),
    goToCreateAcc = document.getElementById('create-acc'),
    backToLogin = document.getElementById('back-to-login');
// Display Search Form
searchButton.addEventListener('click', () => {
    searchForm.classList.add('is-displayed');
    userForm.classList.remove('is-displayed');
    navbarLinks.classList.remove('is-displayed');
});
// Display User Form
userButton.addEventListener('click', () => {
    userForm.classList.add('is-displayed');
    searchForm.classList.remove('is-displayed');
    navbarLinks.classList.remove('is-displayed');
});
// Display Create Account Form
goToCreateAcc.addEventListener('click', () => {
    createAcc.classList.add('is-displayed');
    loginForm.classList.remove('is-displayed');
});
// Display Login Form
backToLogin.addEventListener('click', () => {
    createAcc.classList.remove('is-displayed');
    loginForm.classList.add('is-displayed');
});
// Display Navbar Links
navbarButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('is-displayed');
    searchForm.classList.remove('is-displayed');
    userForm.classList.remove('is-displayed');
});
// User Form Closer
userFormCloser.addEventListener('click', () => {
    userForm.classList.remove('is-displayed');
});
// Search Form Closer
searchFormCloser.addEventListener('click', () => {
    searchForm.classList.remove('is-displayed');
});
// Home Slider
let index = 0;
slideNextButton.addEventListener('click', () => {
    slides[index].classList.remove('is-displayed');
    index = (index + 1) % slides.length;
    slides[index].classList.add('is-displayed');
});
slidePrevButton.addEventListener('click', () => {
    slides[index].classList.remove('is-displayed');
    index = (index - 1 + slides.length) % slides.length;
    console.log(index);
    slides[index].classList.add('is-displayed');
});
// Products Details
document.querySelectorAll('.products .box-container .box .icons .fa-eye').forEach(eye => {
    eye.onclick = () => {
        productsDetails.style.display = 'flex';
        let name = eye.getAttribute('data-name');
        detailBox.forEach(detail => {
            let target = detail.getAttribute('data-target');
            if (name == target) detail.classList.add('is-displayed');
        });
    }
});
// Products Details Closer
detailBox.forEach(detail => {
    detail.querySelector('.fa-times').onclick = () => {
        detail.classList.remove('is-displayed');
        productsDetails.style.display = 'none';
    }
});

window.addEventListener('scroll', () => {
    searchForm.classList.remove('is-displayed');
    navbarLinks.classList.remove('is-displayed');
    // Sections Switcher
    sections.forEach(section => {
        let top = window.scrollY;
        let height = section.offsetHeight;
        let offset = section.offsetTop - 200;
        let id = section.getAttribute('id');
        if (top > offset && top < offset + height) {
            hyperLinks.forEach(link => {
                link.classList.remove('is-displayed');
                document.querySelector('.header .navbar-links a[href*='+id+']').classList.add('is-displayed');
            });
        }
    });
});


