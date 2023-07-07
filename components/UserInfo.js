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
    }

    setUserInfo(nameValue, bioValue){
        this._name.textContent = nameValue.value;
        this._bio.textContent = bioValue.value;
    }
}