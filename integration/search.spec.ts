import {LoginPo} from "../support/login.po";
import {HeaderPo} from "../support/header.po";
import {ProfilePo} from "../support/profile.po";
import {browser} from "protractor";

describe('Tests for login', async () => {
    const loginPage = new LoginPo();
    const headerComponent = new HeaderPo();
    const profilePage = new ProfilePo();

    beforeAll(async () => {
        await loginPage.logIn();
    });

    beforeEach(async () => {
        await headerComponent.navigateTo();
        await headerComponent.userSettings.click();
        await headerComponent.waitForClickable(headerComponent.menuViewProfile);
        await headerComponent.menuViewProfile.click();
        await profilePage.waitForVisible(profilePage.btnAddSkills);
        await profilePage.btnAddSkills.click();
        await profilePage.waitForVisible(profilePage.inputSearchSkills);

    });

    it('Test Case #4', async () => {
        let skills = ['node.js', 'Typescript', 'Angular.js'];
        skills.forEach(await (el => {
            profilePage.inputSearchSkills.clear();
            profilePage.inputSearchSkills.sendKeys(el);
            profilePage.waitForClickable(profilePage.searchResult(el));
            expect( profilePage.checkBoxSearchResult.getText()).toContain(el);
            profilePage.searchResult(el).click();
            profilePage.waitForClickable(profilePage.selectedSkills.get(0));
            expect( profilePage.selectedSkillsByName(el).count()).toBeGreaterThan(0);
        }));
        await profilePage.btnSave.click();
        await profilePage.waitForClickable(profilePage.btnEditSkills);
        profilePage.btnEditSkills.click();
        await profilePage.waitForVisible(profilePage.removeSelectedSkills.get(0));
        skills.forEach(await (async el => {
            expect(await profilePage.selectedSkillsByName(el).count()).toBeGreaterThan(0);
        }));
    });

    it('Test Case #5', async () => {
        let skills = ['SEO', 'MySQL', 'HTML5'];
        skills.forEach(await (async el => {
            profilePage.inputSearchSkills.clear();
            profilePage.inputSearchSkills.sendKeys(el);
            await profilePage.waitForClickable(profilePage.searchResult(el));
            profilePage.searchResult(el).click();
            await profilePage.waitForClickable(profilePage.selectedSkills.get(0));
        }));
        await profilePage.btnSave.click();
        await profilePage.waitForVisible(headerComponent.btnUpdates);
        headerComponent.btnUpdates.click();
        await profilePage.waitForClickable(headerComponent.btnFilters);
        headerComponent.btnFilters.click();
        await headerComponent.waitForInvisible(headerComponent.btnFilters);
        skills.forEach(await (async el => {
            expect(await headerComponent.checkBoxItems(el).isDisplayed()).toContain(true);
        }));
    });

    afterEach(async () => {
        await browser.refresh();
        await headerComponent.userSettings.click();
        await headerComponent.waitForClickable(headerComponent.menuViewProfile);
        headerComponent.menuViewProfile.click();
        if (profilePage.btnEditSkills.isDisplayed()) {
            await profilePage.btnEditSkills.click();
            await profilePage.waitForVisible(profilePage.removeSelectedSkills.get(0));
            await profilePage.removeSelectedSkills.each((async el => {
                await el.click();
            }));
            await profilePage.btnSave.click();
            await browser.refresh();
        }
    });

    afterAll(async () => {
        await browser.refresh();
        await headerComponent.userSettings.click();
        await headerComponent.waitForClickable(headerComponent.btnLogOut);
        await headerComponent.btnLogOut.click();
    });
});
