export default class UserInfo {
    constructor({ nameSelector, infoSelector, avatarSelector }) {
        this._name = document.querySelector(nameSelector);
        this._about = document.querySelector(infoSelector);
        this._avatar = document.querySelector(avatarSelector);
    }

    //получение и возврат данных пользователя
    getUserInfo() {
        this._userInfo = { 
            name: this._name.textContent, 
            about: this._about.textContent
        }
        return this._userInfo;
    }

    //добавление на страницу полученных данных
    setUserInfo(inputs) {
        this._name.textContent = inputs.name;
        this._about.textContent = inputs.about;
    }

    //установить аватарку
    setAvatar(avatar) {
        this._avatar.src = avatar,
        this._avatar.alt = this._name.textContent
    }
}