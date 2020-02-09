import {$, $$, by, element, ElementArrayFinder, ElementFinder} from "protractor";
import {BaseComponent} from "./base.component";

export class HeaderPo extends BaseComponent{
   userSettings: ElementFinder =  $('[fltrackinglabel="UserSettings"] button');
   menuViewProfile: ElementFinder =  $('[fltrackinglabel="Account-ViewProfile"]');
   btnUpdates: ElementFinder = $$('//div[cogitntains(text(),"Updates")]').get(1);
   btnFilters: ElementFinder = $('[fltrackinglabel="Updates-Options"]');
   checkBoxItems = (skillName: string) => element.all(by.cssContainingText('.CheckboxLabel span', skillName));
}