document.getElementById("error").addEventListener("click", function () {
    const inputEmail = prompt("من فضلك أدخل الإيميل:");
    const savedEmail = localStorage.getItem("userEmail");
    const savedPassword = localStorage.getItem("userPass");

    if (!inputEmail) {
      alert("لم يتم إدخال إيميل.");
      return;
    }

    if (inputEmail === savedEmail) {
      alert("كلمة السر هي: " + savedPassword);
    } else {
      alert("الإيميل غير مطابق أو غير موجود.");
    }
  });