
export default class Card {
    constructor(data, templateSelector, handleCardClick) {
        this._caption = data.name;
        this._src = data.link;
        this._templateSelector = templateSelector;
        this._handleCardClick = handleCardClick;
    }

    _getTemplate() {
        return this._templateSelector.cloneNode(true);
    }

    generateCard() {
        this._element = this._getTemplate();
        this._likeButton = this._element.querySelector('.cards__button-like');
        const placeImage = this._element.querySelector('.cards__pic');
        const placeName = this._element.querySelector('.cards__text');
        this._setEventListeners(placeImage, placeName);

        placeImage.src = this._src;
        placeImage.alt = this._caption;
        placeName.textContent = this._caption;

        return this._element;
    }

    _setEventListeners(placeImage, placeName) {
        this._element.querySelector('.cards__pic').addEventListener('click', () => {
            this._handleCardClick(placeImage, placeName);
        })

        this._likeButton.addEventListener('click', () => {
            this._toggleLike();
        })

        this._element.querySelector('.cards__button-delete').addEventListener('click', (evt) => {
            this._deleteCard(evt)
        })
    }

    _toggleLike() {
        this._likeButton.classList.toggle('cards__button-like_active');
    }

    _deleteCard(evt) {
        evt.target.closest('.cards__item').remove()
    }

}

