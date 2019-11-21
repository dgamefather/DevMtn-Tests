var edit = require('../../testAssets/lessonTestAssets/employee-edit');
var employee = {};
module.exports = {
    beforeEach: browser => {

        // Info
        browser.psych = {
            name: 'Shawn Spencer',
            phone: '8015556789',
            title: 'Ive heard it both ways.'
        };

        employee = browser.page.employeePage();
        employee
            .navigate();
    },
    after: browser => {
        browser
            .end();
    },
    'Add New Employee': browser => {
        edit(employee, 'Bernice Ortiz',
            {
                name: `${browser.psych.name}`,
                phone: `${browser.psych.phone}`,
                title: `${browser.psych.title}`
            },
            'Phillip Weaver');
    }
}