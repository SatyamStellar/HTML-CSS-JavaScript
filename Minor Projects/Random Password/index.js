let genBtn = document.querySelector("#gen-btn");
let passBox = document.getElementById("pass-box");
let copyBtn = document.querySelector("#copy-btn");
let charset = "QWERTYUIOPASDFGHJKLZXCVBNM1234567890!@#$%^&*()_-+=<>?";
const passLength = 16;

function genranpass(length) {
    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    return password;
}

genBtn.addEventListener("click", function(){
    const rampass = genranpass(passLength);
    passBox.value = rampass;
});
copyBtn.addEventListener("click",function(){
    passBox.select();
    document.execCommand("copy");
})