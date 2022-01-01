'use strict';

const form = document.querySelector('#main-form');
const sName = document.querySelector('#sName');
const bName = document.querySelector('#bName');
const sEmail = document.querySelector('#sEmail');
const sAddress = document.querySelector('#sAddress');
const bAddress = document.querySelector('#bAddress');
const sCity = document.querySelector('#sCity');
const bCity = document.querySelector('#bCity');
const sZip = document.querySelector('#sZip');
const sPhn = document.querySelector('#sPhn');
const bPhn = document.querySelector('#bPhn');
const password = document.querySelector('#password');
const cPassword = document.querySelector('#cPassword');
const modal = document.querySelector('.modal');

// Form Submit
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const sNameV = nameValidation(sName, sName.value.trim());
    const bNameV = nameValidation(bName, bName.value.trim());
    const sEmailV = checkEmpty(sEmail, sEmail.value.trim());
    const sAddressV = checkEmpty(sAddress, sAddress.value);
    const bAddressV = checkEmpty(bAddress, bAddress.value);
    const sCityV = checkEmpty(sCity, sCity.value);
    const bCityV = checkEmpty(bCity, bCity.value);
    const sZipV = zipValidation(sZip, sZip.value.trim());
    const sPhnV = phnValidation(sPhn, sPhn.value);
    const bPhnV = phnValidation(bPhn, bPhn.value);
    const pwV = pwValidation(password, password.value);
    const cpwV = cPwValidation(cPassword, cPassword.value);

    if (sNameV && bNameV && sEmailV && sAddressV && bAddressV && sCityV && bCityV && sZipV && sPhnV && bPhnV && pwV && cpwV) {
        modal.style.display = 'block';
    } else {
        modal.style.display = 'none';
    }
});

// Name Validation
const nameValidation = (element, value) => {
    if (checkEmpty(element, value)) {
        if (!value.match(/[A-Za-z]\s*$/)) {
            return displayError(element, `Only alphabets`);
        } else {
            return true;
        }
    } else {
        return false;
    }
}

// Zip code Validation
const zipValidation = (element, value) => {
    if (checkEmpty(element, value)) {
        if (!value.match(/^\d{4,4}$/)) {
            return displayError(element, `Only digits & length should be 4`);
        } else {
            return true;
        }
    } else {
        return false;
    }
}

// Phone Validation
const phnValidation = (element, value) => {
    if (checkEmpty(element, value)) {
        if (value.length != 18) {
            return displayError(element, `Enter 12 digits mobile no`);
        } else {
            return true;
        }
    } else {
        return false;
    }
}

// Password Validation
const pwValidation = (element, value) => {
    if (checkEmpty(element, value)) {
        if ((!value.match(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,20}$/))) {
            return displayError(element, `Password should have at least one letter, one number, one special character & length should be within 8 to 20 characters`);
        } else {
            return true;
        }
    } else {
        return false;
    }
}

// Confirm Password Validation
const cPwValidation = (element, value) => {
    if (checkEmpty(element, value)) {
        if (value != password.value) {
            return displayError(element, `Password didn't match`);
        } else {
            return true;
        }
    } else {
        return false;
    }
}

// Check Empty input
const checkEmpty = (element, value) => {
    if (value == "") {
        return displayError(element, `Enter your ${element.name}`);
    } else {
        return displaySuccess(element);
    }
}

// Display Error 
const displayError = (element, message) => {
    feedbackMessage(element, message, `form-floating mb-3 form-error`, `invalid-feedback d-block`);
    return false;
}

// Display Success
const displaySuccess = (element) => {
    feedbackMessage(element, '', `form-floating mb-3 form-success`, `invalid-feedback d-none`);
    return true;
}

// Feedback
const feedbackMessage = (element, message, feedbackParentClass, feedbackClass) => {
    element.parentNode.className = feedbackParentClass;
    const feedback = element.parentNode.querySelector('.invalid-feedback');
    feedback.innerText = message;
    feedback.className = feedbackClass;
}

// Billing Function
const billingFunction = () => {
    const checkStatus = checkbox.checked;
    if (checkStatus) {
        shippingInfo.disabled = true;
        bName.disabled = true;
        bAddress.disabled = true;
        bCity.disabled = true;
        bPhn.disabled = true;
        bName.value = sName.value;
        bAddress.value = sAddress.value;
        bCity.value = sCity.value;
        bPhn.value = sPhn.value;
    } else {
        shippingInfo.disabled = false;
        bName.disabled = false;
        bAddress.disabled = false;
        bCity.disabled = false;
        bPhn.disabled = false;
        bName.value = "";
        bAddress.value = "";
        bCity.value = "";
        bPhn.value = "";
    }
}