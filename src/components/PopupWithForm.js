import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor(popup, submitHandler) {
        super(popup);
        this._sumbitHandler = submitHandler;
        this._form = popup.querySelector('.popup__form');
        this._submitButton = this._form.querySelector('.popup__button');
        this._defaultText = this._submitButton.textContent;
    }

    _getInputValues() {
        this._inputList = this._form.querySelectorAll('.popup__input');
        this._formValues = {}
        this._inputList.forEach(input => {
            this._formValues[input.name] = input.value;
        })
        return this._formValues;
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._sumbitHandler(this._getInputValues());
        }
        )
    }

    close() {
        super.close();
        this._form.reset();
    }


}