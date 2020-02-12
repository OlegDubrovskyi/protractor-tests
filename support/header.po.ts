import {$, $$, by, element, ElementArrayFinder, ElementFinder} from "protractor";
import {BaseComponent} from "./base.component";

export class HeaderPo extends BaseComponent{

   pageUrl = '/dashboard';

   userSettings: ElementFinder =  $('[fltrackinglabel="UserSettings"] button');
   menuViewProfile: ElementFinder =  $('[fltrackinglabel="Account-ViewProfile"]');
   btnUpdates: ElementFinder = $$('.NavigationItemInner').get(3);
   btnFilters: ElementFinder = $('[fltrackinglabel="Updates-Options"]');
   checkBoxItems = (skillName: string) => element.all(by.cssContainingText('.CheckboxLabel', skillName));
   btnLogOut: ElementFinder = $('[fltrackinglabel="Account-Logout"]');
}
