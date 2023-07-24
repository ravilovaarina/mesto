(()=>{"use strict";var t={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__input-error"};function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(t)}function n(t,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,i=function(t,n){if("object"!==e(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,"string");if("object"!==e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===e(i)?i:String(i)),o)}var i}var r=function(){function t(e){var n=e.data,r=e.userId,o=e.templateSelector,i=e.handleCardClick,u=e.handleCardDelete,a=e.handleCardLike,c=e.handleCardDeleteLike;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._userId=r,this._name=n.name,this._link=n.link,this._dataLikes=n.likes,this.idCard=n._id,this.cardData=n,this._idUserCard=n.owner._id,this._likesCounter=n.likes.length,this._templateSelector=o,this._handleCardClick=i,this._handleCardDelete=u,this._handleCardLike=a,this._handleCardDeleteLike=c}var e,r;return e=t,(r=[{key:"_getTemplate",value:function(){return this._templateSelector.querySelector(".cards__item").cloneNode(!0)}},{key:"generateCard",value:function(){this._element=this._getTemplate(),this._likeButton=this._element.querySelector(".cards__button-like");var t=this._element.querySelector(".cards__pic"),e=this._element.querySelector(".cards__text");return this._deleteButton=this._element.querySelector(".cards__button-delete"),this._likesCount=this._element.querySelector(".cards__like-count"),this._setEventListeners(t,e),t.src=this._link,t.alt=this._name,e.textContent=this._name,this.renderCardLike(this.cardData),this._idUserCard!==this._userId&&this._deleteButton.remove(),this._element}},{key:"_likedCard",value:function(){var t=this;return this._dataLikes.some((function(e){return e._id===t._userId}))}},{key:"_setEventListeners",value:function(){var t=this;this._element.querySelector(".cards__pic").addEventListener("click",(function(){return t._handleCardClick()})),this._likeButton.addEventListener("click",(function(){return t._toggleLike()})),this._element.querySelector(".cards__button-delete").addEventListener("click",(function(){return t._handleCardDelete(t.idCard,t)}))}},{key:"_toggleLike",value:function(){this._likedCard()?this._handleCardDeleteLike(this.idCard):this._handleCardLike(this.idCard)}},{key:"renderCardLike",value:function(t){this._dataLikes=t.likes,0===this._dataLikes.length?this._likesCount.textContent="0":this._likesCount.textContent=this._dataLikes.length,this._likedCard()?this._likeButton.classList.add("cards__button-like_active"):this._likeButton.classList.remove("cards__button-like_active")}},{key:"deleteCard",value:function(){this._element.remove(),this._element=null}}])&&n(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,c(r.key),r)}}function u(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function a(t,e,n){return(e=c(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function c(t){var e=function(t,e){if("object"!==o(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==o(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===o(e)?e:String(e)}var l=u((function t(e,n){var r=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),a(this,"_showInputError",(function(t,e){var n=r._formElement.querySelector(".".concat(t.id,"-error"));t.classList.add(r._inputErrorClass),n.textContent=e,n.classList.add(r._errorClass)})),a(this,"_hideInputError",(function(t){var e=r._formElement.querySelector(".".concat(t.id,"-error"));t.classList.remove(r._inputErrorClass),e.textContent="",e.classList.remove(r._errorClass)})),a(this,"_checkInputValidity",(function(t){t.validity.valid?r._hideInputError(t):r._showInputError(t,t.validationMessage)})),a(this,"_setEventListeners",(function(){r._inputsList=Array.from(r._formElement.querySelectorAll(r._inputSelector)),r._buttonElement=r._formElement.querySelector(r._submitButtonSelector),r._changeSubmitButtonState(),r._formElement.addEventListener("submit",(function(t){t.preventDefault()})),r._inputsList.forEach((function(t){t.addEventListener("input",(function(){r._checkInputValidity(t),r._changeSubmitButtonState()}))}))})),a(this,"enableValidation",(function(){r._setEventListeners()})),a(this,"_hasInvalidInput",(function(){return r._inputsList.some((function(t){return!t.validity.valid}))})),a(this,"_changeSubmitButtonState",(function(){r._hasInvalidInput()?r.disableButton():r._enableButton()})),a(this,"disableButton",(function(){r._buttonElement.classList.add(r._inactiveButtonClass),r._buttonElement.setAttribute("disabled",!0)})),a(this,"_enableButton",(function(){r._buttonElement.classList.remove(r._inactiveButtonClass),r._buttonElement.removeAttribute("disabled")})),this._formElement=n,this._submitButtonSelector=e.submitButtonSelector,this._inputSelector=e.inputSelector,this._inactiveButtonClass=e.inactiveButtonClass,this._inputErrorClass=e.inputErrorClass,this._errorClass=e.errorClass}));function s(t){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(t)}function f(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==s(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==s(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===s(o)?o:String(o)),r)}var o}var p=function(){function t(e,n){var r=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._renderer=r,this._container=n}var e,n;return e=t,n=[{key:"append",value:function(t){this._container.append(t)}},{key:"prepend",value:function(t){this._container.prepend(t)}},{key:"renderItems",value:function(t,e){var n=this;t.forEach((function(t){n._renderer(t,e)}))}}],n&&f(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function y(t){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},y(t)}function d(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==y(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==y(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===y(o)?o:String(o)),r)}var o}var h=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._popup=e,this._handleEscClose=this._handleEscClose.bind(this),this._submitButton=this._popup.querySelector(".popup__button")}var e,n;return e=t,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keyup",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keyup",this._handleEscClose)}},{key:"_handleEscClose",value:function(t){"Escape"===t.key&&this.close()}},{key:"setEventListeners",value:function(){var t=this;this._closeButton=this._popup.querySelector(".popup__button-closed"),this._closeButton.addEventListener("click",(function(){t.close()})),this._popup.addEventListener("click",(function(e){e.target===e.currentTarget&&t.close()}))}},{key:"renderLoading",value:function(t,e){t?(this._defaultText=this._submitButton.textContent,this._submitButton.textContent=e):this._submitButton.textContent=this._defaultText}}])&&d(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function b(t){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},b(t)}function v(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==b(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==b(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===b(o)?o:String(o)),r)}var o}function m(){return m="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=S(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},m.apply(this,arguments)}function _(t,e){return _=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},_(t,e)}function S(t){return S=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},S(t)}var g=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&_(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=S(r);if(o){var n=S(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===b(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._image=document.querySelector(".popup-image__pic"),e._caption=document.querySelector(".popup-image__caption"),e}return e=u,(n=[{key:"open",value:function(t){m(S(u.prototype),"open",this).call(this),this._image.src=t.link,this._caption.textContent=t.name,this._image.alt=t.name}}])&&v(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(h);function k(t){return k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},k(t)}function w(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==k(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==k(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===k(o)?o:String(o)),r)}var o}function C(){return C="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=j(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},C.apply(this,arguments)}function E(t,e){return E=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},E(t,e)}function j(t){return j=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},j(t)}var O=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&E(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=j(r);if(o){var n=j(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===k(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t))._sumbitHandler=e,n._form=t.querySelector(".popup__form"),n._submitButton=n._form.querySelector(".popup__button"),n._defaultText=n._submitButton.textContent,n}return e=u,(n=[{key:"_getInputValues",value:function(){var t=this;return this._inputList=this._form.querySelectorAll(".popup__input"),this._formValues={},this._inputList.forEach((function(e){t._formValues[e.name]=e.value})),this._formValues}},{key:"setEventListeners",value:function(){var t=this;C(j(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(e){e.preventDefault(),t._sumbitHandler(t._getInputValues()),t.close()}))}},{key:"close",value:function(){C(j(u.prototype),"close",this).call(this),this._form.reset()}}])&&w(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(h);function L(t){return L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},L(t)}function P(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==L(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==L(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===L(o)?o:String(o)),r)}var o}var B=function(){function t(e){var n=e.nameSelector,r=e.bioSelector,o=e.avatarSelector;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=n,this._bio=r,this._profileAvatar=document.querySelector(o)}var e,n;return e=t,(n=[{key:"getUserInfo",value:function(){return{name:this._name.textContent,about:this._bio.textContent}}},{key:"setUserInfo",value:function(t){var e=t.name,n=t.about;this._name.textContent=e,this._bio.textContent=n}},{key:"setUserAvatar",value:function(t){this._profileAvatar.src=t.avatar}}])&&P(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function q(t){return q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},q(t)}function T(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==q(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==q(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===q(o)?o:String(o)),r)}var o}var R=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._url=e.url,this._headers=e.headers,this._authorization=e.headers.authorization}var e,n;return e=t,(n=[{key:"_checkResponse",value:function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}},{key:"getInfo",value:function(){var t=this;return fetch("".concat(this._url,"/users/me"),{headers:{authorization:this._authorization}}).then((function(e){return t._checkResponse(e)}))}},{key:"getInitialCards",value:function(){var t=this;return fetch("".concat(this._url,"/cards"),{headers:{authorization:this._authorization}}).then((function(e){return t._checkResponse(e)}))}},{key:"editProfile",value:function(t){var e=this;return fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:t.name,about:t.bio})}).then((function(t){return e._checkResponse(t)}))}},{key:"addNewCard",value:function(t){var e=this;return fetch("".concat(this._url,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:t.name,link:t.link})}).then((function(t){return e._checkResponse(t)}))}},{key:"setUserAvatar",value:function(t){var e=this;return fetch("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:t.link})}).then((function(t){return e._checkResponse(t)}))}},{key:"deleteCard",value:function(t){var e=this;return fetch("".concat(this._url,"/cards/").concat(t),{method:"DELETE",headers:this._headers}).then((function(t){return e._checkResponse(t)}))}},{key:"putCardLike",value:function(t){var e=this;return fetch("".concat(this._url,"/cards/").concat(t,"/likes"),{method:"PUT",headers:this._headers}).then((function(t){return e._checkResponse(t)}))}},{key:"deleteCardLike",value:function(t){var e=this;return fetch("".concat(this._url,"/cards/").concat(t,"/likes"),{method:"DELETE",headers:this._headers}).then((function(t){return e._checkResponse(t)}))}}])&&T(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function I(t){return I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},I(t)}function x(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==I(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==I(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===I(o)?o:String(o)),r)}var o}function D(){return D="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=U(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},D.apply(this,arguments)}function A(t,e){return A=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},A(t,e)}function U(t){return U=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},U(t)}var V=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&A(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=U(r);if(o){var n=U(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===I(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e){var n,r=e.submitCallback;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t))._submitCallback=r,n._form=t.querySelector(".popup__form"),n}return e=u,(n=[{key:"open",value:function(t,e){D(U(u.prototype),"open",this).call(this),this.id=t,this.card=e}},{key:"setEventListeners",value:function(){var t=this;D(U(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(e){e.preventDefault(),t._submitCallback(t.id,t.card)}))}}])&&x(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(h);function z(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var N,H=document.querySelector(".profile__edit-button"),J=document.querySelector(".popup_type_edit"),M=document.querySelector(".profile__name"),$=document.querySelector(".profile__bio"),F=(document.querySelector(".profile__avatar"),document.querySelector("#name")),G=document.querySelector("#bio"),K=document.querySelector(".profile__add-button"),Q=document.querySelector(".popup_type_add"),W=(document.querySelector("#place"),document.querySelector("#url"),document.querySelector(".cards")),X=document.querySelector("#cards__item").content,Y=document.querySelector(".popup_type_avatar"),Z=document.querySelector(".popup-image"),tt=new l(t,J),et=new l(t,Q),nt=new l(t,Y);nt.enableValidation(),tt.enableValidation(),et.enableValidation();var rt=document.querySelector(".popup_type_delete"),ot=document.querySelector(".profile__avatar-group"),it=new B({nameSelector:M,bioSelector:$,avatarSelector:".profile__avatar"}),ut=new R({url:"https://mesto.nomoreparties.co/v1/cohort-71",headers:{"Content-Type":"application/json",authorization:"92008ab3-754f-431d-a509-e0b0dada1049"}});Promise.all([ut.getInfo(),ut.getInitialCards()]).then((function(t){var e,n,r=(n=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i,u,a=[],c=!0,l=!1;try{if(i=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=i.call(n)).done)&&(a.push(r.value),a.length!==e);c=!0);}catch(t){l=!0,o=t}finally{try{if(!c&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(l)throw o}}return a}}(e,n)||function(t,e){if(t){if("string"==typeof t)return z(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?z(t,e):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];N=o._id,it.setUserInfo(o),it.setUserAvatar(o),lt.renderItems(i,N)}));var at=new g(Z);function ct(t,e){var n=new r({data:t,userId:e,templateSelector:X,handleCardClick:function(){at.open(t)},handleCardDelete:function(t,e){pt.open(t,e)},handleCardLike:function(t){ut.putCardLike(t).then((function(t){n.renderCardLike(t)}))},handleCardDeleteLike:function(t){ut.deleteCardLike(t).then((function(t){n.renderCardLike(t)})).catch((function(t){return alert(t)}))}});return n.generateCard()}at.setEventListeners();var lt=new p({renderer:function(t,e){lt.append(ct(t,e))}},W),st=new O(Q,(function(t){st.renderLoading(!0,"Сохранение..."),ut.addNewCard(t).then((function(t){lt.prepend(ct(t,N)),st.close()})).catch((function(t){return alert(t)})).finally((function(){st.renderLoading(!1)}))}));st.setEventListeners(),K.addEventListener("click",(function(){st.open(),et.disableButton()}));var ft=new O(J,(function(t){ft.renderLoading(!0,"Сохранение..."),ut.editProfile(t).then((function(t){it.setUserInfo(t),ft.close()})).catch((function(t){return alert(t)})).finally((function(){ft.renderLoading(!1)}))}));H.addEventListener("click",(function(){var t=it.getUserInfo();F.value=t.name,G.value=t.about,ft.open(),tt.disableButton()})),ft.setEventListeners();var pt=new V(rt,{submitCallback:function(t,e){pt.renderLoading(!0,"Удаление..."),ut.deleteCard(t).then((function(){e.deleteCard(),pt.close()})).catch((function(t){return alert(t)})).finally((function(){pt.renderLoading(!1)}))}});pt.setEventListeners();var yt=new O(Y,(function(t){yt.renderLoading(!0,"Загрузка..."),ut.setUserAvatar(t).then((function(t){it.setUserAvatar(t),yt.close()})).catch((function(t){return alert(t)})).finally((function(){yt.renderLoading(!1)}))}));yt.setEventListeners(),ot.addEventListener("click",(function(){yt.open(),nt.disableButton()}))})();