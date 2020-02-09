import {browser, ElementFinder, ExpectedConditions} from "protractor";

export abstract class BaseComponent {

    abstract pageUrl: string;

    async navigateTo() {
        await browser.get(this.pageUrl);
    }

    static getTitle() {
        return browser.getCurrentUrl();
    }

    async waitForClickable(element: ElementFinder) {
        await browser.wait(ExpectedConditions.elementToBeClickable(element), 8000);
    }

    async waitForVisible(element: ElementFinder) {
        await browser.wait(ExpectedConditions.visibilityOf(element), 8000);
    }

    async waitForUrlContains(url: string) {
        await browser.wait(ExpectedConditions.urlContains(url), 8000);
    }
}