import Popup from "./Popup.js";
export default class PopupWithRemoval extends Popup {
    constructor(popup, { submitCallback }) {
        super(popup);
        this._submitCallback = submitCallback;
        this._form = popup.querySelector('.popup__form');
    }

    open(idCard, cardElement) {
        super.open();
        this.id = idCard;
        this.card = cardElement;
    }

    setEventListeners(){
        super.setEventListeners();
        this._form.addEventListener('submit', (evt)=> {
            evt.preventDefault();
            this._submitCallback(this.id, this.card)
        })
    }
}