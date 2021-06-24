export default class UserInfo {
    constructor({ nameSelector, infoSelector }) {
        this._name = document.querySelector(nameSelector);
        this._info = document.querySelector(infoSelector);
    }

    setUserInfo(inputs) {
        this._name.textContent = inputs.name;
        this._info.textContent = inputs.info;
    }
    //добавление на страницу полученных данных

    getUserInfo() {
        this._userInfo = { name: this._name, info: this._info }
        return this._userInfo;
    }
    //получение и возврат данных пользователя
}