export class FormValidator {
    constructor(config, formElement){
        this._formElement = formElement;
        this._submitButtonSelector = config.submitButtonSelector;
        this._inputSelector = config.inputSelector;
        this._inactiveButtonClass = config.inactiveButtonClass;
        this._inputErrorClass = config.inputErrorClass;
        this._errorClass = config.errorClass;
    }

    _showInputError = (inputElement, errorMessage) => {
        const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.add(this._inputErrorClass);
        errorElement.textContent = errorMessage;
        errorElement.classList.add(this._errorClass);
    }
    
    _hideInputError = (inputElement) => {
        const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.remove(this._inputErrorClass);
        errorElement.textContent = '';
        errorElement.classList.remove(this._errorClass);
    }
    
    _checkInputValidity = (inputElement) => {
        if (!inputElement.validity.valid) {
            this._showInputError(inputElement, inputElement.validationMessage);
        } else {
            this._hideInputError(inputElement);
        }
    }
    
    _setEventListeners = () => {
        this._inputsList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
        this._buttonElement = this._formElement.querySelector(this._submitButtonSelector);
        this._changeSubmitButtonState();
        this._inputsList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._checkInputValidity(inputElement);
                this._changeSubmitButtonState();
            })
        });
    };
    
    enableValidation = () => {
       this._formElement.addEventListener('submit', (evt) => {
        evt.preventDefault();
       })
       this._setEventListeners();
    };
    
    _hasInvalidInput = () => {
        return this._inputsList.some((inputElement) => {
            return !inputElement.validity.valid;
        });
    };
    
    _changeSubmitButtonState = () => {
        if (this._hasInvalidInput()) {
            this._disableButton ();
        } else {
            this._enableButton ();
        }
    }
    _disableButton = () => {
        this._buttonElement.classList.add(this._inactiveButtonClass);
        this._buttonElement.setAttribute('disabled', true);
    };
    
    _enableButton = () => {
        this._buttonElement.classList.remove(this._inactiveButtonClass);
        this._buttonElement.removeAttribute('disabled');
    };

}