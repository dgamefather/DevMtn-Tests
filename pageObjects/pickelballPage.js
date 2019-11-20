module.exports = {
    url: 'https://www.livepickleball.com/',
    elements: {
        user: {
            selector: '//input[@placeholder="email"]',
            locateStrategy: 'xpath'
        },
        password: {
            selector: '//input[@placeholder="password"]',
            locateStrategy: 'xpath'
        },
    }
}