export default class UserInfo {
    constructor({ nameSelector, bioSelector }) {
        this._name = nameSelector;
        this._bio = bioSelector;
    }

    getUserInfo() {
        const userData = {
            name: this._name.textContent,
            bio: this._bio.textContent,
        }

        return userData
    }

    setUserInfo(info){
        this._name.textContent = info.name;
        this._bio.textContent = info.bio;
    }
}