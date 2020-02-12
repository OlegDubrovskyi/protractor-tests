import {BaseComponent} from "./base.component";
import {$, browser, ElementFinder} from "protractor";
import {HeaderPo} from "./header.po";

const headerComponent = new HeaderPo();

export class LoginPo extends BaseComponent{
    pageUrl = '/login';
    inputEmail: ElementFinder = $('#username');
    inputPassword: ElementFinder = $('#password');
    btnLogin: ElementFinder = $('#login_btn');

    async logIn() {
        await this.navigateTo();
        await this.inputEmail.sendKeys('anton.olkhovskyi@valor-software.com');
        await this.inputPassword.sendKeys('bc?+c6QW@Cpv6u&');
        await browser.sleep(500);
        await this.btnLogin.click();
        await this.waitForUrlContains('/new-freelancer#/skillSelect');
    }
}
