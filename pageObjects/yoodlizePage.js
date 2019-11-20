module.exports = {
    url: 'https://alpha.yoodlize.com/',
    elements: {
        pageItself: {
            selector: '(//div[@class="sc-bwzfXH sc-iQNlJl cuvCCm sc-bdVaJa isrEgr"])',
            locateStrategy: 'xpath'
        },
        seeAll: {
            selector: '(//div[text()="See all"])',
            locateStrategy: 'xpath'
        },
        catX: {
            selector: '(//div[contains(text(), "ELECTRONICS")])[2]',
            locateStrategy: 'xpath'
        },
        catY: {
            selector: '(//div[contains(text(), "DVDS")])',
            locateStrategy: 'xpath'
        },
        catZ: {
            selector: '(//div[contains(text(), "TOYS")])[2]',
            locateStrategy: 'xpath'
        },
        searchBard: {
            selector: '(//input)',
            locateStrategy: 'xpath'
        },
        filterPlz: '.sc-jKVCRD'
    }
}