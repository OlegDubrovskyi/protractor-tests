import {BaseComponent} from "./base.component";
import {$, ElementFinder} from "protractor";

export class LoginPo extends BaseComponent{
    pageUrl = '/login';
    inputEmail: ElementFinder = $('#username');
    inputPassword: ElementFinder = $('#password');
    btnLogin: ElementFinder = $('#login_btn');
}