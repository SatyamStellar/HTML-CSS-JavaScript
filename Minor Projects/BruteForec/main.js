const srtBtn = document.querySelector('.srtBtn');
const pass = document.querySelector('.password');

async function srtBtruteForce() {
  const passVal = pass.value;
  if (!passVal) {
    alert("Please enter the pin");
    return;
  }

  const passLength = passVal.length;
  const res = document.querySelector('.res');
  const atts = document.querySelector('.atts');
  const attspos = document.querySelector('.attsdiv')
  res.textContent = "Finding...";
  atts.textContent = "";

  let found = false;
  let attempt = '0'.repeat(passLength);

  while (!found) {
    atts.textContent += attempt + "\n";
    attspos.scrollTop = attspos.scrollHeight;

    if (attempt === passVal) {
      res.textContent = `${attempt}`;
      found = true;
    } else {
      attempt = (parseInt(attempt, 10) + 1).toString().padStart(passLength, '0');

      if (attempt.length > passLength) {
        res.textContent = "Not Found";
        found = true;
      }
    }

    await new Promise(resolve => setTimeout(resolve, 10));
  }
}

srtBtn.addEventListener('click', srtBtruteForce);
