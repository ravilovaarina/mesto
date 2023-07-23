export default class UserInfo {
    constructor({ nameSelector, bioSelector, avatarSelector}) {
        this._name = nameSelector;
        this._bio = bioSelector;
        this._profileAvatar = document.querySelector(avatarSelector);
    }

    getUserInfo() {
        const userData = {
            name: this._name.textContent,
            about: this._bio.textContent,
        }

        return userData
    }

    setUserInfo({name, about}){
        this._name.textContent = name;
        this._bio.textContent = about;
    }

    setUserAvatar(resUser) {
        this._profileAvatar.src = resUser.avatar;
    }
}