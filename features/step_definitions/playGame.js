const assert = require('cucumber-assert')

module.exports = function () {

  this.Given(/^I am viewing the start screen$/, () => {
    browser.url('localhost:4000')
  })


  this.When('I click the start gaaaaaame button, i am directed to the game', () => {
    browser.waitForExist(".startGame")
    client.scroll(".startGame")
    client.click(".startGame")
  })

  this.Then('I am shown the game board', () => {
    expect(browser.waitForExist(".grid"))
  })

   this.Then('I can navigate the maze and go to the next level', () => {
     browser.keys('\uE014');
   })

}
