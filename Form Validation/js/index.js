"use strict";

window.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#form");
  const userName = document.querySelector("#username");
  const lastName = document.querySelector("#lastname");
  const email = document.querySelector("#email");
  const password = document.querySelector("#password");
  const PasswordEye = document.querySelector(".bi-eye");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    FormValidation();
  });

  function FormValidation() {
    let userNameValue = userName.value.trim();
    let lastNameValue = lastName.value.trim();
    let emailValue = email.value.trim();
    let passwordValue = password.value.trim();

    if (userName.value != "" && lastName.value != "" && email.value != "" && password.value != "") {
      setTimeout(() => {
        alert(
          `Username: ${userNameValue}
Lastname: ${lastNameValue}
Email: ${emailValue}
Password: ${passwordValue}
        `);
      }, 1500);
      userName.value = null;
      lastName.value = null;
      email.value = null;
      password.value = null;
    }

    if (userNameValue == "") {
      FormErrorValidation(userName);
    } else {
      FormSuccessValidation(userName);
    }

    if (lastNameValue == "") {
      FormErrorValidation(lastName);
    } else {
      FormSuccessValidation(lastName);
    }

    if (emailValue == "") {
      FormErrorValidation(email);
    } else {
      FormSuccessValidation(email);
    }

    if (passwordValue == "") {
      FormErrorValidation(password);
    } else {
      FormSuccessValidation(password);
    }

  }

  function FormErrorValidation(input) {
    const FormControl = input.parentElement;
    FormControl.setAttribute("class", "fs-5 error");
  }

  function FormSuccessValidation(input) {
    const FormControl = input.parentElement;
    FormControl.setAttribute("class", "fs-5 success");
    setTimeout(() => {
      FormControl.setAttribute("class", "fs-5");
    }, 1000);
  }

  password.addEventListener("keyup", (e) => {
    if (e.target.value.trim().length >= 1) {
      PasswordEye.setAttribute("class", "bi bi-eye eye");
    } else {
      PasswordEye.setAttribute("class", "bi bi-eye");
    }

  });

  PasswordEye.addEventListener("click", (e) => {
    if (e.target.getAttribute("class") == "bi bi-eye eye") {
      e.target.setAttribute("class", "bi-eye-slash");
      password.setAttribute("type", "text");
    } else {
      e.target.setAttribute("class", "bi bi-eye eye");
      password.setAttribute("type", "password");
    }
  });

});