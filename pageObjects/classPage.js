var slackCommands = {
    login: function (data) {
        this
            .waitForElementPresent('@login')
            .click('@login')
            .waitForElementPresent('@pass')
            .setValue('@user', data.user)
            .setValue('@pass', data.password)
            .click('@signIn')
            .waitForElementPresent('@messanger');
        return this;
    },
}
module.exports = {
    url: 'https://game.classcraft.com/',
    commands: [slackCommands],
    elements: {
        // Login
        'login': ('.Login__toggle-button-wrap'),
        'user': ('[name="username"]'),
        'pass': ('[name="password"]'),
        signIn: {
            selector: '//button[contains(text(), "Log In")]',
            locateStrategy: 'xpath'
        },

        // Navigation
        messanger: {
            selector: '//button[@class="TippyButton sidebarItem-general-comments"]',
            locateStrategy: 'xpath'
        },

        // Locations
        guard: { // BROKEN
            selector: '//div[contains(text(), "Mr. Gardner Gardner")',
            locateStrategy: 'xpath'
        },
        
        // Text Field
        'text': ('[name="newComment"]')
    }
}