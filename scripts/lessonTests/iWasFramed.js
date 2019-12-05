module.exports = {
    'Get into the frame, check for the uneditable body': browser => {
        browser.url('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_iframe')
            .waitForElementVisible('#tryhome')
            .expect.element('body[contenteditable="false"]').not.to.be.present;

        // swap your context here!
        browser
            .frame('iframeResult');

        browser
            .expect.element('body[contenteditable="false"]').to.be.present.before(5000);
    },
    'Open in a new window': browser => {
        browser.url('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_link_target')
            .waitForElementPresent('#tryhome')
            .verify.urlEquals('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_link_target', 'On original window')
            .frame('iframeResult')
            .click('a')
            .windowHandles(results => {
                browser
                    .switchWindow(results.value[1])
                    .verify.urlEquals('https://www.w3schools.com/', 'In new one')
                    .switchWindow(results.value[0])
                    .verify.urlEquals('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_link_target', 'Back to old')
                    .closeWindow()
                    .windowHandles(results => {
                        var handles = results.value
                        browser.verify.ok(handles.length === 1, "there is only one window open.")
                        .switchWindow(handles[0])
                        .verify.urlEquals('https://www.w3schools.com/', 'And it is the new one')
                    })
                    .end();
            });
    },
    // API Testing
}