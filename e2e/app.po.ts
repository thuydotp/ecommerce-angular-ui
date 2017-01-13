import { browser, element, by } from 'protractor';

export class EcommerceUiPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ec-root h1')).getText();
  }
}
