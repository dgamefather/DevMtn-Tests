// Page Object
var home = {}

var traps = [
    // Gus
    {
        loan: 'Home Purchase',
        prop: 'Single Family Home',
        city: 'Santa Barbara',
        price: '$1000.00',
        credit: 'excel',
        bank: 'never',
        street: '5555 S Pandoras Box',
        zip: '12345',
        firstName: 'Burton',
        lastName: 'Guster',
        email: 'a_player_named_gus@gmail.com',
    },

    // Shawn
    {
        loan: 'Home Purchase',
        prop: 'Condo',
        city: 'Santa Barbara',
        price: '69',
        credit: 'fair',
        bank: 'bank',
        street: '5555 S Pandoras Box',
        zip: 'Santa Barbara, CA 12345',
        firstName: 'Shawn',
        lastName: 'Spencer',
        email: 'pyschic101@gmail.com',
    },
];

var app = (obj, data) => {
    obj
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
}

module.exports = {
    beforeEach: browser => {
        home = browser.page.homeAlonePage();
        // browser
        //     .url('http://localhost:3000');
        home
            .navigate();
    },
    after: browser => {
        browser
            .end();
    },
    'Loan Application': browser => {
        // console.dir(home);
        traps.forEach(trapItem => {
            app(home, trapItem);
            console.log(trapItem);
        });
    },
}