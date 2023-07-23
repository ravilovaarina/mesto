import Popup from './Popup.js'

export default class PopupWithImage extends Popup {
    constructor(popup) {
        super(popup);
        this._image = document.querySelector(".popup-image__pic");
        this._caption = document.querySelector(".popup-image__caption");;
    }

    open(data){
        super.open()
        this._image.src = data.link;
        this._caption.textContent = data.name;
        this._image.alt = data.name;
    }
}