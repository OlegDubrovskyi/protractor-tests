import {$, $$, by, element, ElementArrayFinder, ElementFinder} from "protractor";
import {BaseComponent} from "./base.component";

export class ProfilePo extends BaseComponent{
    btnAddSkills: ElementFinder = $('[fltrackinglabel="UserProfileEmptySkillsAddSkills"]');
    btnEditSkills: ElementFinder = $('[fltrackinglabel="TopSkillsEditLink"]');
    inputSearchSkills: ElementFinder = $('input[placeholder="Search skills"]');
    searchResult = (skillName: string) => element(by.cssContainingText('[fltrackinglabel="SkillEditModalSkillSelection"] .CheckboxLabel', skillName));
    checkBoxSearchResult: ElementFinder = $('[fltrackinglabel="SkillEditModalSkillSelection"] .CheckboxLabel');
    selectedSkills: ElementArrayFinder = $$('.SelectedSkillsContainer span');
    btnSave: ElementFinder = $('[fltrackinglabel="SaveSkillsButton"]');
    selectedSkillsByName = (skillName: string) => element.all(by.cssContainingText('.SelectedSkillsContainer span', skillName));
    removeSelectedSkills: ElementArrayFinder = $$('fl-picture.CloseIcon');
}
