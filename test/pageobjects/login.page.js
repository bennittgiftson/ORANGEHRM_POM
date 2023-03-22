import Page from './page.js';

class LoginPage extends Page {
    
    get inputUsername () { return $("input[class='oxd-input oxd-input--focus']")}
    get inputPassword () { return $("input[class='oxd-input oxd-input--active']")}
    get btnSubmit () { return $("button[class='oxd-button oxd-button--medium oxd-button--main orangehrm-login-button']")}

    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }
}

export default new LoginPage();