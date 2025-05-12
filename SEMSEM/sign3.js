document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const pass = document.getElementById("pass").value.trim();

 
  localStorage.setItem("userEmail", email);
  localStorage.setItem("userPass", pass);

  alert("تم إنشاء الحساب بنجاح! الآن يمكنك تسجيل الدخول.");
  window.location.href = "login.html"; 
});