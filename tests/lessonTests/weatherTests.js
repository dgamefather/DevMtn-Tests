var weatherPage = {}
var city = require('../../testAssets/lessonTestAssets/city');
module.exports = {
    beforeEach: browser => {
        weatherPage = browser.page.weatherman()
        weatherPage
            .navigate();
    },
    after: browser => {
        weatherPage
            .end();
    },
    'Search Weather': browser => {
        city.forEach(cityZip => {
            weatherPage
                .enterCity(cityZip)
           });
    }
}