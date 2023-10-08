var main = document.querySelector("#main-div");
var crsr = document.querySelector(".crser");

main.addEventListener("mousemove",(dets)=>{
    crsr.style.left = dets.x + "px";
    crsr.style.top = dets.y + "px";
})  