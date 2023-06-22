import { handleOpenPopup } from "./index.js";

export class Card {
    constructor(data, templateSelector) {
        this._caption = data.name;
        this._src = data.link;
        this._templateSelector = templateSelector;
    }

    _getTemplate() {
        return document
            .querySelector(this._templateSelector)
            .content
            .querySelector('.cards__item')
            .cloneNode(true);
    }

    generateCard() {
        this._element = this._getTemplate();
        this._likeButton = this._element.querySelector('.cards__button-like')
        this._setEventListeners();

        this._element.querySelector('.cards__pic').src = this._src;
        this._element.querySelector('.cards__pic').alt = this._caption;
        this._element.querySelector('.cards__text').textContent = this._caption;

        return this._element;
    }

    _setEventListeners() {
        this._element.querySelector('.cards__pic').addEventListener('click', () => {
            handleOpenPopup(this._src, this._caption)
        });

        this._likeButton.addEventListener('click', () => {
            this._toggleLike();
        })

        this._element.querySelector('.cards__button-delete').addEventListener('click', () => {
            this._deleteCard();
        })
    }

    _toggleLike() {
        this._likeButton.classList.toggle('cards__button-like_active');
    }

    _deleteCard() {
        this._element.remove();
    }

}

