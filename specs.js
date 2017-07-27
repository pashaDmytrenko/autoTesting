var assert = require('assert');
describe('test dev', function() {
    it('script', function () {
        browser.url('https://dev.autumnapp.com');
        browser.element(".organization").setValue("PashasBigCompany");
        browser.element(".username").setValue('pasha@gmail.com');
        browser.element(".password").setValue('11111111');
        browser.element(".ladda-button").click();
        browser.element(".menu__handle").waitForVisible();
        browser.element(".menu__handle").click();
        browser.element("#propertiesMenuItem").click();
        browser.element('=Add a location').click();
        browser.element("#id_name").waitForVisible();
        browser.element("#id_name").setValue("Location123");
        browser.element("#id_description").setValue("Location123 is consist of 22 sensors");
        browser.element('.ladda-button').click();
    });

});
