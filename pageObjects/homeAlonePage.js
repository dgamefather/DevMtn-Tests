var homeCommands = {
    app: function (data) {
        this
            .waitForElementPresent('@page')
            .click('@start')
            .waitForElementPresent(`#loanTypes option[value="${data.loan}"]`)
            .click(`#loanTypes option[value="${data.loan}"]`)
            .waitForElementPresent(`#propertyTypes option[value="${data.prop}"]`)
            .click(`#propertyTypes option[value="${data.prop}"]`)
            .click('@next')
            .setValue('@city', data.city)
            .click('@next')
            .click('@prime')
            .click('@no')
            .click('@yes')
            .setValue('@price', data.price)
            .setValue('@down', data.price)
            .click('@next')
            .click(`@${data.credit}`)
            .click(`@${data.bank}`)
            .setValue('@street', data.street)
            .setValue('@zip', data.zip)
            .click('@next')
            .setValue('@first', data.firstName)
            .setValue('@last', data.lastName)
            .setValue('@email', data.email)
            .click('@next')
            .verify.containsText('@nameForm', data.firstName)
            .click('@redo');
        return this;
    },
}

module.exports = {
    url: 'http://localhost:3000',
    commands: [homeCommands],
    elements: {
        // Page
        'page': ('.home-text'),

        // Buttons
        'start': ('.home-btn'),
        'next': ('[name="nextButton"]'),
        'redo': ('[name="restartButton"]'),
        'send': ('[name="sendButton"]'),
        'prime': ('[value="Primary Home"]'),
        'rent': ('[value="Rental Property"]'),
        'second': ('[value="Secondary Home"]'),
        'yes': ('[name="yesButton"]'),
        'no': ('[name="noButton"]'),
        'excel': ('[value="excellent"]'),
        'good': ('[value="good"]'),
        'fair': ('[value="fair"]'),
        'poor': ('[value="poor"]'),
        'never': ('[value="Has never been in bankruptcy"]'),
        'bank': ('[value="Has had bankruptcy before"]'),
        'fore': ('[value="Has had a foreclosure before"]'),
        'both': ('[value="Has had both a foreclosure and a bankruptcy"]'),

        // Fields
        'city': ('[name="city"]'),
        'price': ('[name="price"]'),
        'down': ('[name="down"]'),
        'street': ('#addressOne'),
        'street2': ('#addressTwo'),
        'zip': ('#addressThree'),
        'first': ('#first'),
        'last': ('#last'),
        'email': ('#email'),

        // Verification
        'nameForm': ('.name'),
    }
}