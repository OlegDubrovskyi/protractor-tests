import {$, $$, by, element, ElementArrayFinder, ElementFinder} from "protractor";
import {BaseComponent} from "./base.component";

export class ProfilePo extends BaseComponent{
    btnEditSkills: ElementFinder = $('[fltrackinglabel="TopSkillsEditLink"]');
    inputSearchSkills: ElementFinder = $$('.InputContainer .NativeElementContainer input').get(1);
    searchResult = (skillName: string) => element(by.cssContainingText('[fltrackinglabel="SkillEditModalSkillSelection"] .CheckboxLabel', skillName));
    checkBoxSearchResult: ElementFinder = $('[fltrackinglabel="SkillEditModalSkillSelection"] .CheckboxLabel');
    selectedSkills: ElementArrayFinder = $$('.SelectedSkillsContainer span');
    btnSave: ElementFinder = $('[fltrackinglabel="SaveSkillsButton"]');
    selectedSkillsByName = (skillName: string) => element.all(by.cssContainingText('.SelectedSkillsContainer span', skillName));
}