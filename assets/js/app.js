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
    const sName = stringValidation(shippingName, shippingName.value.trim());
    const sEmail = shippingEmailValidation(shippingEmail, shippingEmail.value.trim());
    const sCountry = stringValidation(shippingCountry, shippingCountry.value.trim());
    const sZip = shippingZipValidation(shippingZip, shippingZip.value.trim());
    const sPw = passwordValidation(password, password.value.trim());
    const sCpw = cPasswordValidation(password, cPassword);
    const bName = stringValidation(billingName, billingName.value.trim());
    const bZip = shippingZipValidation(billingZip, billingZip.value.trim());
    if (sName && sEmail && sCountry && sZip && sPw && sCpw && bName && bZip) {
        alert('Form Successfully Submitted');
    }
});

// Display Error 
function displayError(element, message) {
    element.parentNode.className = 'form-floating mb-3 form-error';
    const feedback = element.parentNode.querySelector('.invalid-feedback');
    feedback.innerText = message;
    feedback.className = 'invalid-feedback d-block';
    return false;
}

// Display Success
function displaySuccess(element) {
    element.parentNode.className = 'form-floating mb-3 form-success';
    element.parentNode.querySelector('.invalid-feedback').innerText = '';
    element.parentNode.querySelector('.invalid-feedback').className = 'invalid-feedback d-none';
    return true;
}

// Shipping Name, Country Validation
function stringValidation(name, value) {
    if (value == "") {
        return displayError(name, `Enter your ${name.placeholder.toLowerCase()}`);
    } else if (!value.match(/[A-Za-z]/)) {
        return displayError(name, `Enter your valid ${name.placeholder.toLowerCase()}`);
    } else {
        return displaySuccess(name);
    }
}

// Email Validation
function shippingEmailValidation(email, value) {
    if (value == "") {
        return displayError(email, `Enter an email id`);
    } else if (!value.match(/\S+@\S+\.\S/)) {
        return displayError(email, `Enter valid email id`);
    } else {
        return displaySuccess(email);
    }
}

// Shipping Zip Validation
function shippingZipValidation(zip, value) {
    if (value == "") {
        return displayError(zip, `Enter your zip code`);
    } else if (!value.match(/[0-9]/)) {
        return displayError(zip, `Enter valid zip code`);
    } else if (value.length != 5) {
        return displayError(zip, `Must be 5 digit`);
    } else {
        return displaySuccess(zip)
    }
}

// Password Validation
function passwordValidation(password, value) {
    if (value == "") {
        return displayError(password, `Enter your password`);
    } else if (!value.match(/^(?=.*[A-Z])/)) {
        return displayError(password, `One uppercase letter is required`);
    } else if (!value.match(/^(?=.*\d)/)) {
        return displayError(password, `One digit is required`);
    } else if (!value.match(/^(?=.*[@$!%*?&])/)) {
        return displayError(password, `One special character is required`);
    } else if (!value.match(/.{8,}/)) {
        return displayError(password, `At least 8 characters long`);
    } else {
        return displaySuccess(password);
    }
}

// Confirm Password Validation
function cPasswordValidation(password, cPassword) {
    if (cPassword.value == "") {
        return displayError(cPassword, `Re-enter your password`);
    } else if (password.value != cPassword.value) {
        return displayError(cPassword, `Passwords aren't matched`);
    } else {
        return displaySuccess(cPassword);
    }
}

// Billing Function
function billingFunction() {
    const checkboxStatus = checkbox.checked;
    if (checkboxStatus) {
        shippingInfo.disabled = true;
        billingName.value = shippingName.value;
        billingZip.value = shippingZip.value;
    } else {
        shippingInfo.disabled = false;
        billingName.value = "";
        billingZip.value = "";
    }
}