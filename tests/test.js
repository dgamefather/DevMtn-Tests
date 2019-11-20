module.exports = {
    beforeEach: browser => {
        browser.url("http://localhost:3000")
            .waitForElementPresent("#root")
    },
    after: browser => {
        browser.end()
    },
    'Check the home page': browser => {
        browser
            .verify.visible('.bm-burger-button')
            .verify.containsText('.titleBar', 'Wanted Queries')
            .verify.containsText('#welcomeScreen', 'Welcome to "Wanted Queries".')
            .verify.containsText('#welcomeScreen', 'Enter Wanted')
            .verify.containsText('#welcomeScreen', 'Modify Wanted')
            .verify.containsText('#welcomeScreen', 'Cancel Wanted')
            .verify.visible('.required')
            .verify.visible('.error')
    },
    'Check required fields on warrant': browser => {
        browser
            .url('http://localhost:3000/#/enter')
            .waitForElementVisible('[name="hdrInput"]')
            .verify.attributeContains('[name="hdrInput"]', 'class', 'required')
            .verify.attributeContains('[name="mkeInput"]', 'class', 'required')
            .verify.attributeContains('[name="oriInput"]', 'class', 'required')
            .verify.attributeContains('[name="namInput"]', 'class', 'required')
            .verify.attributeContains('[name="sexInput"]', 'class', 'required')
            .verify.attributeContains('[name="racInput"]', 'class', 'required')
            .verify.attributeContains('[name="hgtInput"]', 'class', 'required')
            .verify.attributeContains('[name="wgtInput"]', 'class', 'required')
            .verify.attributeContains('[name="haiInput"]', 'class', 'required')
            .verify.attributeContains('[name="offInput"]', 'class', 'required')
            .verify.attributeContains('[name="dowInput"]', 'class', 'required')
        browser.getAttribute('[name="olnInput"]', 'class', result => {
            browser.verify.ok(result.value.indexOf('required') === -1, 'Field not required.')
        })
        browser.getAttribute('[name="olsInput"]', 'class', result => {
            browser.verify.ok(result.value.indexOf('required') === -1, 'Field not required.')
        })
        browser.getAttribute('[name="oldInput"]', 'class', result => {
            browser.verify.ok(result.value.indexOf('required') === -1, 'Field not required.')
        })
        browser.getAttribute('[name="licInput"]', 'class', result => {
            browser.verify.ok(result.value.indexOf('required') === -1, 'Field not required.')
        })
        browser.getAttribute('[name="lisInput"]', 'class', result => {
            browser.verify.ok(result.value.indexOf('required') === -1, 'Field not required.')
        })
        browser.getAttribute('[name="lidInput"]', 'class', result => {
            browser.verify.ok(result.value.indexOf('required') === -1, 'Field not required.')
        })
    }
}