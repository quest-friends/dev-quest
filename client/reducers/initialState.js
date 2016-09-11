const initialState = {
  tileGrid: [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
    [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
    [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
    [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0],
    [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
    [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
    [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
    [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
    [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
    [0,1,3,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
  ],
  player: {
    position: {
      x: 1,
      y: 6
    },
    health: 10,
    xp: 0
  },
  enemies: [
    { position: { x: 1, y: 4 },
      health: 2,
      type: "ie6",
      messages: {
        enemyDetected: "OMG it's ie6 - are people really still using it?",
        enemyAttacks: "ie6 doesn't support stuff and your code gets smushed and you lose 1 health point",
        playerAttacks: "You write backwards compatible code - take that, ie6!" ,
        enemyDefeated: "The world is now safe from ie6 and other outdated Microsoft products..."
      }
    },

    { position: { x: 12, y: 6 },
      health: 1,
      type: "chrome",
      messages: {
        enemyDetected: "It's Chrome: the tentacles of Google are everywhere...",
        enemyAttacks: "Chrome tries to take over the world",
        playerAttacks: "You decide to install an open source browser instead of Google Chrome",
        enemyDefeated: "Chrome is gone, your next challenge is to start using Duck Duck Go search engine"
      }
    },

    { position: { x: 4, y: 7 },
      health: 1,
      type: "firefox",
      messages: {
        detected: "It's Firefox!",
        enemyAttacks: "Unhelpful Firefox developer tools slow you down",
        playerAttacks: "Player does something to Firefox",
        enemyDefeated: "Bye-bye cute Firefox logo"
      }
    },

    { position: { x: 2, y: 5 },
      health: 1,
      type: "opera",
      messages: {
        detected: "It's an Opera!",
        enemyAttacks: "In an as yet undefined way Opera browser does damage...",
        playerAttacks: "Player does something to Opera",
        enemyDefeated: "Bye-bye Opera"
      }
    }
  ],
  display: "start",
  currentLevel: 1,
  loggedMessages: [ "Hello World!" ],
  enemyCount: 4,
  items: [
    { position: { x: 1, y: 7},
     type: "coffee"
   },
   { position: { x: 5, y: 12},
    type: "codeRed"
  }
  ]
}

module.exports = initialState
