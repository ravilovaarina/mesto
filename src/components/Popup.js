export default class Popup {
    constructor(popup) {
        this._popup = popup;
        this._handleEscClose = this._handleEscClose.bind(this);
        this._submitButton = this._popup.querySelector('.popup__button')
    }

    open() {
        this._popup.classList.add('popup_opened');

        document.addEventListener('keyup', this._handleEscClose)
    }

    close() {
        this._popup.classList.remove('popup_opened');

        document.removeEventListener('keyup', this._handleEscClose)
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

    renderLoading(isLoading, displayText){
        if(isLoading){
          this._submitButton.textContent = displayText;
        }else{
            console.log()
            this._submitButton.textContent = this._defaultText;
        }
      }
}