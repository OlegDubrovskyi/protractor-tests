import {LoginPo} from "../support/login.po";
import {HeaderPo} from "../support/header.po";
import {ProfilePo} from "../support/profile.po";
import {$, $$, browser, by, element, ExpectedConditions} from "protractor";

describe('Tests for login', async () => {
    const loginPage = new LoginPo();
    const headerComponent = new HeaderPo();
    const profilePage = new ProfilePo();

    beforeAll( async () => {
        await loginPage.navigateTo();
         loginPage.inputEmail.sendKeys('anton.olkhovskyi@valor-software.com');
         loginPage.inputPassword.sendKeys('bc?+c6QW@Cpv6u&');
         loginPage.btnLogin.click();
         await loginPage.waitForUrlContains('/dashboard');
    });

    it('login', async () => {
        let arr = ['node.js', 'Typescript', 'Angular.js'];
        headerComponent.userSettings.click();
        await headerComponent.waitForClickable(headerComponent.menuViewProfile);
        headerComponent.menuViewProfile.click();
        await profilePage.waitForClickable(profilePage.btnEditSkills);
        profilePage.btnEditSkills.click();
        await profilePage.waitForClickable(profilePage.inputSearchSkills);
        await arr.forEach((el =>{
            profilePage.inputSearchSkills.clear();
            profilePage.inputSearchSkills.sendKeys(el);
            profilePage.waitForClickable(profilePage.searchResult(el));
            //expect(profilePage.checkBoxSearchResult.getText()).toContain(el);
             profilePage.searchResult(el).click();
             profilePage.waitForClickable(profilePage.selectedSkills.get(0));
            expect(profilePage.selectedSkillsByName(el).count()).toBeGreaterThan(0);
        }));
        browser.sleep(3000);
        profilePage.btnSave.click();
        await profilePage.waitForClickable(profilePage.btnEditSkills);
        profilePage.btnEditSkills.click();
        browser.sleep(3000);
        await arr.forEach((el => {
            expect(profilePage.selectedSkillsByName(el).count()).toBeGreaterThan(0);
        }));
    });

    fit('login', async () => {
        let arr = ['SEO', 'MySQL', 'HTML5'];
        headerComponent.userSettings.click();
        await headerComponent.waitForClickable(headerComponent.menuViewProfile);
        headerComponent.menuViewProfile.click();
        await profilePage.waitForClickable(profilePage.btnEditSkills);
        profilePage.btnEditSkills.click();
        await profilePage.waitForClickable(profilePage.inputSearchSkills);
        await arr.forEach((el =>{
            profilePage.inputSearchSkills.clear();
            profilePage.inputSearchSkills.sendKeys(el);
            profilePage.waitForClickable(profilePage.searchResult(el));
            profilePage.searchResult(el).click();
            profilePage.waitForClickable(profilePage.selectedSkills.get(0));
        }));
        browser.sleep(3000);
        await profilePage.btnSave.click();
        browser.sleep(3000);
        //await profilePage.waitForVisible(headerComponent.btnUpdates);
        headerComponent.btnUpdates.click();
        profilePage.waitForClickable(headerComponent.btnFilters);
        headerComponent.btnFilters.click();
        browser.sleep(3000);
        await arr.forEach((el => {
            expect(headerComponent.checkBoxItems(el).isDisplayed).toBeTruthy();
        }));
    });
    // afterAll(async () => {
    //     await browser.wait(ExpectedConditions.elementToBeClickable($$('.InputContainer .NativeElementContainer input').get(1)), 5000);
    //     await arr.forEach((el, index) =>{
    //         if(element.all(by.cssContainingText('.SelectedSkillsContainer span', el)).isDisplayed()){
    //             $$('fl-picture.CloseIcon').get(index).click();
    //         }
    //     });
    //     await $('[fltrackinglabel="SaveSkillsButton"]').click();
    // });
});