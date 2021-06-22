export default class UserInfo {
    constructor({ nameSelector, infoSelector }) {
        this._userName = document.querySelector(nameSelector);
        this._userInfo = document.querySelector(infoSelector);
    }
    
    getUserInfo() {
        return {
            profileName: this._userName.textContent,
            profileAbout: this._userInfo.textContent
        }
    }
    //получение и возврат данных пользователя
    
    setUserInfo({name, info}) {
        this._userName.textContent = name;
        this._userInfo.textContent = info;
    }
    //добавление на страницу полученных данных
}