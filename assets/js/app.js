'use strict';
// Fetching Dom Elements
const form = document.querySelector('#main-form');
const shippingName = document.querySelector('#shippingName');
const shippingEmail = document.querySelector('#shippingEmail');
const shippingCountry = document.querySelector('#shippingCountry');
const shippingZip = document.querySelector('#shippingZip');
const password = document.querySelector('#password');
const cPassword = document.querySelector('#cPassword');
const billingName = document.querySelector('#billingName');
const billingZip = document.querySelector('#billingZip');
const checkbox = document.querySelector('#checkbox');
const shippingInfo = document.querySelector('#shippingInfo');

// Submit Form
form.addEventListener('submit', function (e) {
    e.preventDefault();
    stringValidation(shippingName, shippingName.value.trim());
    shippingEmailValidation(shippingEmail, shippingEmail.value.trim());
    stringValidation(shippingCountry, shippingCountry.value.trim());
    shippingZipValidation(shippingZip, shippingZip.value.trim());
    passwordValidation(password, password.value.trim());
    cPasswordValidation(password, cPassword);
});

// Display Error 
function displayError(element, message) {
    element.parentNode.className = 'form-floating mb-3 form-error';
    const feedback = element.parentNode.querySelector('.invalid-feedback');
    feedback.innerText = message;
    feedback.className = 'invalid-feedback d-block';
}

// Display Success
function displaySuccess(element) {
    element.parentNode.className = 'form-floating mb-3 form-success';
    element.parentNode.querySelector('.invalid-feedback').innerText = '';
    element.parentNode.querySelector('.invalid-feedback').className = 'invalid-feedback d-none';
}

// Shipping Name, Country Validation
function stringValidation(name, value) {
    if (value == "") {
        displayError(name, `Enter your ${name.placeholder.toLowerCase()}`);
    } else if (!value.match(/[A-Za-z]/)) {
        displayError(name, `Enter your valid ${name.placeholder.toLowerCase()}`);
    } else {
        displaySuccess(name);
    }
}

// Email Validation
function shippingEmailValidation(email, value) {
    if (value == "") {
        displayError(email, `Enter an email id`);
    } else if (!value.match(/\S+@\S+\.\S/)) {
        displayError(email, `Enter valid email id`);
    } else {
        displaySuccess(email);
    }
}

// Shipping Zip Validation
function shippingZipValidation(zip, value) {
    if (value == "") {
        displayError(zip, `Enter your zip code`);
    } else if (!value.match(/[0-9]/)) {
        displayError(zip, `Enter valid zip code`);
    } else if (value.length != 5) {
        displayError(zip, `Must be 5 digit`);
    } else {
        displaySuccess(zip)
    }
}

// Password Validation
function passwordValidation(password, value) {
    if (value == "") {
        displayError(password, `Enter your password`);
    } else if (!value.match(/^(?=.*[A-Z])/)) {
        displayError(password, `One uppercase letter is required`);
    } else if (!value.match(/^(?=.*\d)/)) {
        displayError(password, `One digit is required`);
    } else if (!value.match(/^(?=.*[@$!%*?&])/)) {
        displayError(password, `One special character is required`);
    } else if (!value.match(/.{8,}/)) {
        displayError(password, `At least 8 characters long`);
    } else {
        displaySuccess(password);
    }
}

// Confirm Password Validation
function cPasswordValidation(password, cPassword) {
    if (cPassword.value == "") {
        displayError(cPassword, `Re-enter your password`);
    } else if (password.value != cPassword.value) {
        displayError(cPassword, `Passwords aren't matched`);
    } else {
        displaySuccess(cPassword);
    }
}

// Billing Function
function billingFunction() {
    const checkboxStatus = checkbox.checked;
    if (checkboxStatus) {
        if (shippingName.value == "") {
            stringValidation(shippingName, shippingName.value.trim());
            shippingName.addEventListener('input', function (e) {
                billingName.value = shippingName.value;
            });
        }
        if (shippingZip.value == "") {
            shippingZipValidation(shippingZip, shippingZip.value.trim());
            shippingZip.addEventListener('input', function (e) {
                billingZip.value = shippingZip.value;
            });
        }
        if (shippingName.value != "" && shippingZip.value != "") {
            shippingInfo.disabled = true;
            billingName.value = shippingName.value;
            billingZip.value = shippingZip.value;
        }
    } else {
        shippingInfo.disabled = false;
        billingName.value = "";
        billingZip.value = "";
    }
}