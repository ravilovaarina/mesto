import Popup from './Popup.js'

export default class PopupWithImage extends Popup {
    constructor(popup, imageInPopup, nameOfImageInPopup) {
        super(popup);
        this._image = imageInPopup;
        this._caption = nameOfImageInPopup;
    }

    open(placeImage, placeName){
        super.open()
        this._image.src = placeImage.src;
        this._caption.textContent = placeName.textContent;
        this._image.alt = placeImage.alt;
    }
}