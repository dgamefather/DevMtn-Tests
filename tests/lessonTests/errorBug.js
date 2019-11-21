module.exports = {
    beforeEach: browser => browser.url('https://devmountain-qa.github.io/employee-manager/1.0_Version/index.html'),
    after: browser => browser.end(),
    'Problem 1': browser => { // BUG ITSELF
        browser
            .click('[name="employee7"]')
            .clearValue('[name="nameEntry"]')
            .setValue('[name="nameEntry"]', 'Billy Bob')
            .click('[name="employee9"]')
            .verify.value('[name="nameEntry"]', 'Eve Sparks')
            .click('[name="employee7"]')
            .verify.value('[name="nameEntry"]', 'Ruby Estrada')
    },
    'Problem 2': browser => {
        browser.click('name="employee5"') // Missing []
            .clearValue('[name="titleEntry"]')
            .setValue('[name="titleEntry"]', 'Best Manager Ever')
            .clearValue('[name="phoneEntry"]')
            .setValue('[name="phoneEntry"]', '1234567890')
            .click('#saveBtn')
            .click('[name="employee8"]')
            .expect.element('[name="titleEntry"]').value.not.to.equal('Best Manager Ever')
            .click('[name="employee5"]') // missing browser after .expect
            .expect.element('name="phoneEntry"').text.to.equal('1234567890') // Missing [] & should be .value
            .expect.element('[name="titleEntry"]').text.to.equal('Best Manager Ever') // missing browser after .expect & should be .value
    },
    'Problem 3': browser => {
        browser
            .click('[name="employee1"]')
            .waitForElementPresent('[name="nameEntry"]')
            .setValue('[name="nameEntry"]', 'New Person') // Forgot .clearValue('[name="nameEntry"]')
            .click('#saveBtn')
            .click('[name="employee2"]')
            .expect.element('[name="nameEntry"]').value.not.to.equal('New Person').before(2000)
        browser
            .click('[name="employee1"]')
            .expect.element('[name="nameEntry"]').value.to.equal('New Person').before(2000)
    },
    'Problem 4': browser => { // BUG ITSELF
        browser
            .click('[name="employee5"]')
            .clearValue('[name="nameEntry"]')
            .click('#saveBtn')
            .assert.containsText('.errorCard', 'The name field must be between 1 and 30 characters long.')
            .assert.value('[name="nameEntry"]', 'Dollie Berry')
    },
    'Problem 5': browser => { // BUG ITSELF
        browser
            .click('[name="employee4"') // Missing ] and should be employee-4
            .clearValue('[name="phoneEntry"]')
            .setValue('8015551234') // Mission Selector
            .click('#cancelBtn') // [name="cancel"]
            .click('[name="employee5"]')
            .click('[name="employee4"]') // Should be employee-4
            .expect.element('name="phoneEntry"]').value.not.to.equal('8015551234')
    }
}