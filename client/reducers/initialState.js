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
      health: 1,
      type: "ie6",
      messages: [
        {type: "detected",
          content: "OMG it's ie6 - are people really still using it?"},
        {type: "enemy attacks",
          content: "ie6 doesn't support, well, any interesting JS - your code gets smushed and you lose 1 health point"},
        {type: "player attacks",
          content: "You write backwards compatible code - take that, ie6!" },
        {type: "defeated",
          content: "The world is now safe from outdated Microsoft products..."}
      ]
    },
    { position: { x: 12, y: 12 },
      health: 1,
      type: "chrome",
      messages: [
      {type: "detected",
        content: "It's Chrome: the tentacles of Google are everywhere..."},
      {type: "enemy attacks",
        content: "Chrome tries to take over the world"},
      {type: "player attacks",
        content: "You decide to install an open source browser" },
      {type: "defeated",
        content: "Chrome is gone, now start using Duck Duck Go!"}
      ]
    },
    { position: { x: 4, y: 14 },
      health: 1,
      type: "firefox",
      messages: [
      {type: "detected",
        content: "It's Firefox!"},
      {type: "enemy attacks",
        content: "Unhelpful developer tools slow you down"},
      {type: "player attacks",
        content: "You switch back to Chrome" },
      {type: "defeated",
        content: "Bye-bye cute fox logo"}
      ]
    },
    { position: { x: 2, y: 5 },
      health: 1,
      type: "opera",
      messages: [
      {type: "detected",
        content: "It's an Opera!"},
      {type: "enemy attacks",
        content: "Somehow Opera browser does damage..."},
      {type: "player attacks",
        content: "Player does something to Opera" },
      {type: "defeated",
        content: "Bye-bye Opera"}
      ]
    }
  ],
  display: "start",
  currentLevel: 1,
  loggedMessages: [
    { type: "start",
      content: "Hello World!"}
  ]
}

module.exports = initialState
