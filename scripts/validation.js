const showInputError = (formElement, inputElement, errorMessage, config) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(config.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(config.errorClass);
}

const hideInputError = (formElement, inputElement, config) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(config.inputErrorClass);
    errorElement.textContent = '';
    errorElement.classList.remove(config.errorClass);
}

const checkInputValidity = (formElement, inputElement, config) => {
    if (!inputElement.validity.valid) {
        showInputError(formElement, inputElement, inputElement.validationMessage, config);
    } else {
        hideInputError(formElement, inputElement, config);
    }
};

const setEventListeners = (formElement, config) => {
    const inputsList = Array.from(formElement.querySelectorAll(config.inputSelector));
    const buttonElement = formElement.querySelector(config.submitButtonSelector);
    changeSubmitButtonState(inputsList, buttonElement, config);
    formElement.addEventListener('submit', function (evt) {
        evt.preventDefault();
    });
    inputsList.forEach((inputElement) => {
        inputElement.addEventListener('input', function () {
            checkInputValidity(formElement, inputElement, config);
            changeSubmitButtonState(inputsList, buttonElement, config);
        });
    });
};

const enableValidation = (config) => {
    const formsList = Array.from(document.querySelectorAll(config.formSelector));
    formsList.forEach((formElement) => {
        setEventListeners(formElement, config);
    });
};

enableValidation(config);

function hasInvalidInput(inputsList) {
    return inputsList.some((inputElement) => {
        return !inputElement.validity.valid;
    });
};

function changeSubmitButtonState(inputsList, buttonElement, config) {
    if (hasInvalidInput(inputsList)) {
        disableButton (buttonElement, config);
    } else {
        enableButton (buttonElement, config);
    }
}
function disableButton (buttonElement, config) {
    buttonElement.classList.add(config.inactiveButtonClass);
    buttonElement.setAttribute("disabled", true);
};

function enableButton (buttonElement, config) {
    buttonElement.classList.remove(config.inactiveButtonClass);
    buttonElement.removeAttribute('disabled');
};