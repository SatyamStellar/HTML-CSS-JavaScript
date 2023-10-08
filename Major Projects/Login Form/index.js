const wapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const regLink = document.querySelector('.register-link');

regLink.addEventListener("click", ()=>{
    wapper.classList.add("active");
});  
loginLink.addEventListener("click", ()=>{
    wapper.classList.remove("active")
});