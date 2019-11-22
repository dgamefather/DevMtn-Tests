var databaseCommands = {
    searchSelf: function (data) {
        this
            .click('@clear')
            .click('@search')
            .setValue('@search', `${data.oldName}`);
        return this;
    },
    clickSelf: function (data) {
        this
            .api.useXpath();
        this
            .click(`//li[text()="${data.oldName}"]`);
        this
            .api.useCss();
        return this;
    },
    editSelf: function (data) {
        this
            .clearValue('@name')
            .setValue('@name', data.name)
            .clearValue('@phone')
            .setValue('@phone', data.phone)
            .clearValue('@email')
            .setValue('@email', data.email)
            .clearValue('@title')
            .setValue('@title', data.title)
            .click('@save')
        return this;
    },
    verifySelf: function (data) {
        this
            .verify.containsText('@titleCard', data.name)
    }
}
module.exports = {
    url: 'https://devmountain-qa.github.io/employee-manager-v2/build/index.html',
    commands: [databaseCommands],
    elements: {
        search: '[name="searchBox"]',
        employee: '[name="employee360"]',
        titleCard: '#employeeTitle',
        name: '[name="nameEntry"]',
        phone: '[name="phoneEntry"]',
        email: '[name="emailEntry"]',
        title: '[name="titleEntry"]',
        save: '#saveBtn',
        clear: '[name="clearSearch"]'
    }
}