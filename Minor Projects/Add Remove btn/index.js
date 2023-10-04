let currentStatus = document.querySelector("h5");
let Btn = document.querySelector("#btn");
let check = 0;

Btn.addEventListener("click",function(){
    if(check == 0){
        currentStatus.innerHTML="Friend";
        currentStatus.style.color="green";
        Btn.innerHTML="Remove Friend"
        check = 1;
    }else{
        currentStatus.innerHTML="Stranger";
        currentStatus.style.color="red";
        Btn.innerHTML="Add Friend"
        check = 0;
    }
});
