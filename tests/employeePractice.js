var clickByText = (browser, text) => {
    browser
        .useXpath()
        .click(`//*[text()="${text}"]`)
        .useCss()
};
var form = (browser, name, phone, title) => {
    browser
        .waitForElementVisible('[name="nameEntry"]')

        // Name
        .clearValue('[name="nameEntry"]')
        .setValue('[name="nameEntry"]', name)
        .verify.value('[name="nameEntry"]', name, `${name} is set`)

        // Phone
        .clearValue('[name="phoneEntry"]')
        .setValue('[name="phoneEntry"]', phone)
        .verify.value('[name="phoneEntry"]', phone, `${phone} is set`)
        
        // Title
        .clearValue('[name="titleEntry"]')
        .setValue('[name="titleEntry"]', title)
        .verify.value('[name="titleEntry"]', title, `${title} is set`)
}

function veryFine(obj) {
    obj
        .getText('#employeeID', function (result) {
            let idNumber = Number(result.value.slice(3))
            obj
                .verify.ok(idNumber > 0, `The ID (${idNumber}) is a positive number.`)
                .verify.ok(idNumber % 1 === 0, `The ID (${idNumber}) is a whole number.`)
        });
};
module.exports = {
    before: browser => {

        // Info
        browser.psych = {
            name: 'Shawn Spencer',
            phone: '8015556789',
            title: 'Ive heard it both ways.'
        };

        browser
            .url('https://devmountain-qa.github.io/employee-manager/1.2_Version/index.html');
            // .url('https://devmountain-qa.github.io/employee-manager/1.0_Version/index.html');
    },
    after: browser => {
        browser
            .end();
    },

    // Function Practice
    'Function Practice.jpg': browser => {
        browser
        clickByText(browser, "Bernice Ortiz");
    },

    // Navigate App
    'Navigation': browser => {
        for (var x = 1; x <= 10; x++) {
            browser
                .click(`[name="employee${x}"]`);
        };
        browser
            .click('[name="addEmployee"]')
            .verify.containsText('[name="employee11"]', 'New Employee', ':D')
            .click('[name="employee1"]');
    },

    // Save Edits
    'Edit/Save Employees': browser => {
        browser
            .click('[name="employee1"]');

        form(browser, browser.psych.name, browser.psych.phone, browser.psych.title);

        browser
            .click('#saveBtn')
            .pause(1000)
            .verify.containsText('[name="employee1"]', browser.psych.name, ':D');
    },

    // Works on both 1.2 and 1.0
    'Verify Psychic': browser => {
        browser
            .useXpath()
            .click(`//li[text()="${browser.psych.name}"]`)
            .useCss()
            .expect.element('#employeeTitle').text.to.equal(browser.psych.name).before(500);
        veryFine(browser);
    },

    // Undo Mistakes
    'Edit/Cancel Employees': browser => {
        browser
            .click('[name="employee2"]');

            form(browser, browser.psych.name, browser.psych.phone, browser.psych.title);

        browser
            .click('.neutralButton')
            .pause(1000)
            .verify.containsText('[name="employee2"]', 'Marnie Barnett', ':D');
    },

    // Employee 11
    'Add New Employees': browser => {
        browser
            .click('[name="employee11"]');

            form(browser, browser.psych.name, browser.psych.phone, browser.psych.title);

        browser
            .click('#saveBtn')
            .pause(1000)
            .verify.containsText('[name="employee11"]', browser.psych.name, ':D');
    },

    // Invalid Forms
    'Red Underline': browser => {
        browser
            // Make invalid saves
            .click('[name="addEmployee"]')
            .click('[name="employee12"]');


        form(browser, '123123141231wd1d1d1d1wd1wd1wd1wd1w1w1d1wd11wd', 'wdWdadsadadawdasdadwdwdDWSDDADWASDWASDAWSDwDWASDWAD', 'wdasdawd121231412314123dwwdasdq12dwd1wd')

        browser
            .click('#saveBtn')
            .pause(1000)
            .verify.visible('.errorCard', 'Errors found.');

        // Navigate
        for (var x = 1; x <= 10; x++) {
            browser
                .click(`[name="employee${x}"]`)
                .verify.visible('.errorCard', ':(');
        };
    },
}