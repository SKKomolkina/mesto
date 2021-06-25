export default class UserInfo {
    constructor({ nameSelector, infoSelector }) {
        this._name = document.querySelector(nameSelector);
        this._about = document.querySelector(infoSelector);
    }

    setUserInfo(inputs) {
        this._name.textContent = inputs.name;
        this._about.textContent = inputs.about;
    }
    //добавление на страницу полученных данных

    getUserInfo() {
        this._userInfo = { 
            name: this._name.textContent, 
            about: this._about.textContent
        }
        return this._userInfo;
    }
    //получение и возврат данных пользователя
}