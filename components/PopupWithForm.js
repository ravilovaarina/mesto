import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor(popup, submitHandler) {
        super(popup);
        this._sumbitHandler = submitHandler;
        this._form = popup.querySelector('.popup__form')
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
        const submitButton = this._form.querySelector('.popup__button');
        console.log(this._form)
        this._form.addEventListener('sumbit', (evt) => {
            console.log('k')
            if (submitButton.classList.containes('popup__button_disabled')) {return false}
            else {
                evt.preventDefault();
                this._sumbitHandler(this._getInputValues);
                this.close();
            }
        }
        )
    }

    close(){
        super.close();
        this._form.reset();
    }
}