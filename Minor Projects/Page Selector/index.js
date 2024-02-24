const StartBtn = document.querySelector("#srt-Btn"),
    PreviewBtn = document.querySelector("#pre-Btn"),
    NextBtn = document.querySelector("#nxt-Btn"),
    EndBtn = document.querySelector("#end-Btn"),
    NumBtns = document.querySelectorAll(".numbers");

let countSteps = 0;

NumBtns.forEach((number, numberIndex)=>{
    number.addEventListener("click",()=>{
        countSteps = numberIndex;
        console.log(countSteps); 
        document.querySelector(".active").classList.remove("active");
        number.classList.add("active");
    });
});