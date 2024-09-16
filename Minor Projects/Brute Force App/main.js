const srtBtn = document.getElementById('srtBtn');
const Pin = document.getElementById('pinval');




async function srtBtruteForce() {
    const Pinval = Pin.value;
    if(Pinval == ""){
        alert("Please enter the pin");
        return;
    }

    const pinLength = Pinval.length;
    const result = document.getElementById('result');
    const combinations = document.getElementById('combinaitons');
    result.textContent = "Finding...../";
    combinations.textContent = "";

    let found = false;
    let attempt = '0'.repeat(pinLength);

    while(!found){
        combinations.textContent += attempt + "\n";
        combinations.scrollTop = combinations.scrollHeight;
        if(attempt === Pinval){
            result.textContent = attempt;
            found = true;
    } else {
        attempt = (parseInt(attempt, 10) + 1).toString().padStart(pinLength, '0');
        if (attempt.length > pinLength) {
            result.textContent = "Not Found";
            found = true;
        }
    }
    await new Promise(resolve => setTimeout(resolve, 10));
}
}

srtBtn.addEventListener('click', srtBtruteForce)