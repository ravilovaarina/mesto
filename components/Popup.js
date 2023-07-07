export default class Popup {
    constructor(popup) {
        this._popup = popup;
    }

    open() {
        this._popup.classList.add('popup_opened');

        document.addEventListener('keyup', (evt) => {
            this._handleEscClose(evt)
        })
    }

    close() {
        this._popup.classList.remove('popup_opened');

        document.removeEventListener('keyup', (evt) => {
            this._handleEscClose(evt)
        })
    }

    _handleEscClose(evt) {
        if (evt.key === 'Escape') {
            this.close();
        };
    }

    setEventListeners() {
        this._closeButton = this._popup.querySelector('.popup__button-closed');
        this._closeButton.addEventListener('click', () => {
            this.close();
        })

        this._popup.addEventListener('click', (evt) => {
            if (evt.target === evt.currentTarget) {
                this.close();
            };
        })
    }
}