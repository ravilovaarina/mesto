
export default class Card {
    constructor({ data, userId, templateSelector, handleCardClick, handleCardDelete, handleCardLike, handleCardDeleteLike }) {
        this._userId = userId;
        this._name = data.name;
        this._link = data.link;
        this._dataLikes = data.likes;
        this.idCard = data._id;
        this.cardData = data;
        this._idUserCard = data.owner._id;
        this._likesCounter = data.likes.length;
        this._templateSelector = templateSelector;
        this._handleCardClick = handleCardClick;
        this._handleCardDelete = handleCardDelete;
        this._handleCardLike = handleCardLike;
        this._handleCardDeleteLike = handleCardDeleteLike;
    }

    _getTemplate() {
        return this._templateSelector.cloneNode(true);
    }

    generateCard() {
        this._element = this._getTemplate();
        this._likeButton = this._element.querySelector('.cards__button-like');
        const placeImage = this._element.querySelector('.cards__pic');
        const placeName = this._element.querySelector('.cards__text');
        this._deleteButton = this._element.querySelector('.cards__button-delete');
        this._likesCount = this._element.querySelector('.cards__like-count')
        this._setEventListeners(placeImage, placeName);

        placeImage.src = this._link;
        placeImage.alt = this._name;
        placeName.textContent = this._name;
        this.renderCardLike(this.cardData);

        if (this._idUserCard !== this._userId) {
            this._deleteButton.remove();
        }

        return this._element;
    }

    _likedCard() {
        return this._dataLikes.some(like => like._id === this._userId)
    }

    _setEventListeners() {
        this._element.querySelector('.cards__pic').addEventListener('click', () => this._handleCardClick())

        this._likeButton.addEventListener('click', () => this._toggleLike())

        this._element.querySelector('.cards__button-delete').addEventListener('click', () => this._handleCardDelete(this.idCard, this))
    }

    _toggleLike() {
        if (this._likedCard()) {
            this._handleCardDeleteLike(this.idCard);
        } else {
            this._handleCardLike(this.idCard);
        }
    }
    

    renderCardLike(card) {
        this._dataLikes = card.likes;
        if (this._dataLikes.length === 0) {
            this._likesCount.textContent = '0';
        } else {
            this._likesCount.textContent = this._dataLikes.length;
        }

        if(this._likedCard()){
            this._likeButton.classList.add('cards__button-like_active');
        }else{
            this._likeButton.classList.remove('cards__button-like_active');
        }
    }

}

