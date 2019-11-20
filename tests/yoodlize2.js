var yolo = {};
module.exports = {
    beforeEach: browser => {
        yolo = browser.page.yoodlizePage()
        yolo
            .navigate();
    },
    after: browser => {
        yolo
            .end();
    },
    'Navigation: See All': browser => {
        for (var x = 0; x <= 14; x++) {
            yolo
                .waitForElementPresent('@pageItself')
                .click({ selector: '@seeAll', index: x })
                .verify.visible('@filterPlz')
                .api.back();
        }
    },
    // 'Navigation: Category X': browser => {
    //     yolo
    //         .waitForElementPresent('@pageItself')
    //         .click('@catX')
    //         .verify.visible('@filterPlz');
    // },
    // 'Navigation: Category Y': browser => {
    //     yolo
    //         .waitForElementPresent('@pageItself')
    //         .click('@catY')
    //         .verify.visible('@filterPlz');
    // },
    // 'Navigation: Category Z': browser => {
    //     yolo
    //         .waitForElementPresent('@pageItself')
    //         .click('@catZ')
    //         .verify.visible('@filterPlz');
    // },
    // 'Search Item': browser => {
    //     yolo
    //         .waitForElementPresent('@pageItself')
    //         .setValue('@searchBard', ['Steam Controller', browser.Keys.ENTER])
    //         .verify.visible('@filterPlz');
    // },
}