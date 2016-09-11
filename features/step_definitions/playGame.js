const assert = require('cucumber-assert')
const Url = require('url')
const extend = require('xtend')

module.exports = function () {

  this.Given(/^I am viewing the start screen$/, function () {
    browser.url('http://eda-quest.herokuapp.com/')
  })


  this.When('I hit enter on the enter game button', () => {
    browser.waitForExist('.startGame')
    browser.keys(['Tab'])
    browser.keys(['Enter'])
  })

  this.Then('I am showen the game board', () => {
    expect(browser.getText('h2')).toEqual('Dev Quest 2.0')
  })

}
