// /**
//  * returns the numbers added together
//  * @param {number} num1 first number
//  * @param {number} num2 second number
//  */
// var add= (num1, num2) => {
//     return num1 + num2
// }

// /**
//  * returns the remainder of the first number minus the first
//  * @param {number} num1 first number
//  * @param {number} num2 second number
//  */
// var subtract= (num1, num2) => {
//     return num1 - num2
// }

// /**
//  * returns the quotient of the first number / the second
//  * @param {number} num1 first number
//  * @param {number} num2 second number
//  */
// var divide= (num1, num2) => {
//     return num1 / num2
// }

// /**
//  * returns the product of the first number * the second
//  * @param {number} num1 first number
//  * @param {number} num2 second number
//  */
// var multiply= (num1, num2) => {
//     return num1 * num2
// }

var meth = {
    add: function (num1, num2) {
        return num1 + num2;
    },
    sub: function (num3, num4) {
        return num3 - num4;
    },
    div: function (num5, num6) {
        return num5 / num6;
    },
    mul: function (num7, num8) {
        return num7 * num8;
    },
    mathTest: function (obj, search, results) {
        obj
            .setValue('input[type="text"]', [search, obj.Keys.ENTER])
            .waitForElementPresent('#cwos', 2000)
            .expect.element('#cwos').text.to.contain(results)
    },
};
module.exports = {
    beforeEach: browser => {
        browser.url('http://www.google.com')
    },
    'check addition': browser => {
        meth
            .mathTest(browser, '1+2', meth.add(1, 2))
    },
    'check subtraction': browser => {
        browser
            .mathTest(browser, '32-5', meth.sub(32, 5))
    },
    'check division': browser => {
        browser
            .mathTest(browser, '8/2', meth.div(8, 2))
    },
    'check multiplication': browser => {
        browser
            .mathTest(browser, '2345.3333*2', meth.mul(2345.3333, 2))
    },
    after: browser => browser.end()
}