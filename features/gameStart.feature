Feature: gameStart


  @watch
  Scenario: Navigate Start Screen
    Given I am viewing the start screen
    When I hit enter on the enter game button
    Then I am showen the game board
