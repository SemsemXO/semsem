document.getElementById("btn").addEventListener("click", function (e) {
  e.preventDefault(); 

  const inputEmail = document.getElementById("email1").value.trim();
  const inputPass = document.getElementById("pass1").value.trim();

  const storedEmail = localStorage.getItem("userEmail");
  const storedPass = localStorage.getItem("userPass");

  if (inputEmail === storedEmail && inputPass === storedPass) {
    alert("تم تسجيل الدخول بنجاح!");
    window.location.href = "index.html"; 
  } else {
    alert("البريد الإلكتروني أو كلمة المرور غير صحيحة.");
  }
});