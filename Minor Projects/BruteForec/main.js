const srtBtn = document.getElementById('srtBtn');
const passVal = document.getElementById('pinval');

async function srtBtruteForce() {
  const pass = passVal.value;
  if (!pass) {
    alert("Please enter the pin");
    return;
  }

  const passLength = pass.length;
  const result = document.getElementById('result');
  const attempts = document.getElementById('combinations');
  result.textContent = "Finding...";
  attempts.textContent = "";

  let found = false;
  let attempt = '0'.repeat(passLength);

  while (!found) {
    attempts.textContent += attempt + "\n";
    attempts.scrollTop = attempts.scrollHeight;

    if (attempt === pass) {
      result.textContent = `${attempt}`;
      found = true;
    } else {
      attempt = (parseInt(attempt, 10) + 1).toString().padStart(passLength, '0');

      if (attempt.length > passLength) {
        result.textContent = "Not Found";
        found = true;
      }
    }

    await new Promise(resolve => setTimeout(resolve, 10));
  }
}

srtBtn.addEventListener('click', srtBtruteForce);