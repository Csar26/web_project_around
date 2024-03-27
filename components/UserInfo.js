export default class UserInfo {
    constructor(selectorName, selectorAbout){
        this._nodeName = document.querySelector(selectorName);
        this._nodeAbout = document.querySelector(selectorAbout);
    }

    getUserInfo() {
        return {
            name: this._nodeName.textContent,
            about: this._nodeAbout.textContent
        }
    }

    setUserInfo(name, about) {
        this._nodeName.textContent = name;
        this._nodeAbout.textContent = about;
    }
}