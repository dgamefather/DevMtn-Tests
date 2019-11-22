var slackCommands = {
    login: function (data) {
        this
            .waitForElementPresent('@pass')
            .setValue('@email', data.user)
            .setValue('@pass', data.password)
            .click('@signIn');
        return this;
    },
}
module.exports = {
    url: 'https://devmtn.slack.com/',
    commands: [slackCommands],
    elements: {
        // Login
        'email': ('#email'),
        'pass': ('#password'),
        'signIn': ('#signin_btn'),

        // Locations
        mars: {
            selector: '//span[@data-qa="channel_sidebar_name_marohn-howard"]',
            locateStrategy: 'xpath'
        },
        drey: {
            selector: '//span[@data-qa="channel_sidebar_name_andrew-smith"]',
            locateStrategy: 'xpath'
        },
        test: {
            selector: '//span[@data-qa="channel_sidebar_name_brennan-litster"]',
            locateStrategy: 'xpath'
        },
        sam: {
            selector: '//span[@data-qa="channel_sidebar_name_sam-thompson"]',
            locateStrategy: 'xpath'
        },

        // Text Field
        'text': ('#undefined')
    }
}