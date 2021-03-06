var path = require('path')

var chai = require('chai')
var chaiString = require('chai-string')
var chaiAsPromised = require('chai-as-promised')

exports.config = {
    specs: [path.join(__dirname, '/specs/throws.spec.js')],
    capabilities: [{
        browserName: 'phantomjs'
    }],
    mochaOpts: {
        compilers: ['js:babel-register'],
        timeout: 60000
    },
    before: function () {
        chai.should()
        chai.use(chaiString)
        chai.use(chaiAsPromised)
        global.assert = chai.assert
        global.expect = chai.expect
    },
    onError: function (e) {
        browser.lastError = e
        return new Promise(function (resolve) {
            setTimeout(resolve, 2000)
        })
    }
}
