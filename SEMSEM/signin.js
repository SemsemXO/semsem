let email = document.getElementById("email");
let pass = document.getElementById("pass");
let btn = document.getElementById("btn");
let user = document.getElementById("user");
let birthday = document.getElementById("birthday");
email.focus();

email.addEventListener("input", function () {
  if (email.value.endsWith("@gmail.com")) {
    email.style.border = "3px solid green";
    email.style.color = "rgb(6, 27, 98)";
    btn.style.display = "inline";
  } else {
    email.style.border = "3px solid red";
    email.style.color = "rgb(6, 27, 98)";
    btn.style.display = "none";
  }
});
pass.addEventListener("input", function () {
  if (pass.value.length > 8) {
    pass.style.border = "3px solid green";
    pass.style.color = "rgb(6, 27, 98)";
    btn.style.display = "inline";
  } else {
    pass.style.border = "3px solid red";
    pass.style.color = "rgb(6, 27, 98)";
    btn.style.display = "none";
  }
});
user.addEventListener("input", function () {
  if (user.value.length > 10) {
    user.style.border = "3px solid green";
    user.style.color = "rgb(6, 27, 98)";
    btn.style.display = "inline";
  } else {
    user.style.border = "3px solid red";
    user.style.color = "rgb(6, 27, 98)";
    btn.style.display = "none";
  }
});
birthday.addEventListener("input", function () {
  if (birthday.value.length > 8) {
    birthday.style.border = "3px solid green";
    birthday.style.color = "rgb(6, 27, 98)";
    btn.style.display = "inline";
  } else {
    birthday.style.border = "3px solid red";
    birthday.style.color = "rgb(6, 27, 98)";
    btn.style.display = "none";
  }
});
