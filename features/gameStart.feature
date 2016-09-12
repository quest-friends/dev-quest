Feature: gameStart


  @watch
  Scenario: Navigate Start Screen
    Given I am viewing the start screen
    When I click the start gaaaaaame button, i am directed to the game
    Then I am shown the game board
    Then I can navigate the maze and go to the next level
