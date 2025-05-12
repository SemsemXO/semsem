const email1 = document.getElementById("email");
const email2 = document.getElementById("email1");
const pass1 = document.getElementById("pass");
const pass2 = document.getElementById("pass1");
const btn = document.getElementById("btn"); // غيّر الـ ID حسب الموجود عندك

function checkInputs() {
  if (email1.value === email2.value && pass1.value === pass2.value) {
    btn.style.display = "inline";
  } else {
    btn.style.display = "none";
  }
}

email1.addEventListener("input", checkInputs);
email2.addEventListener("input", checkInputs);
pass1.addEventListener("input", checkInputs);
pass2.addEventListener("input", checkInputs);
