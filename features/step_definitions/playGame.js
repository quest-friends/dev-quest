const assert = require('cucumber-assert')
const Url = require('url')
const extend = require('xtend')

module.exports = function () {

  this.Given(/^I am viewing the start screen$/, function () {
    browser.url('localhost:4000')
  })


  this.When('I hit enter on the enter game button', () => {
    browser.waitForExist(".startGame")
    client.scroll(".startGame")
    client.click(".startGame")
  })

  this.Then('I am showen the game board', () => {
    expect(browser.waitForExist(".grid"))
  })

}
