const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const regLink = document.querySelector('.register-link');
const loginBtn = document.querySelector('.login-btn');
const clossBtn = document.querySelector('.close-btn');

regLink.addEventListener("click", () => {
    wrapper.classList.add('active');
}); 

loginLink.addEventListener("click", () => {
    wrapper.classList.remove('active');
}); 

loginBtn.addEventListener("click", () => {
    wrapper.classList.add('active-login-form');
});

clossBtn.addEventListener("click", () => {
    wrapper.classList.remove('active-login-form');
})