module.exports = {

  Chrome: {
    type: "chrome",
    health: 1,
    attack: 5,
    messages: {
      enemyAttacks: "Google Chrome is trying to take over the world...",
      playerAttacks: "Installing an open source browser to replace Google Chrome...",
      enemyDefeated: "Chrome gone, next step: use Duck Duck Go search engine!"
    }
  },

  Firefox: {
    type: "firefox",
    health: 1,
    attack: 5,
    messages: {
      enemyAttacks: "Unhelpful Firefox developer tools slow you down...",
      playerAttacks: "Abandoning Firefox to go back to Chrome...",
      enemyDefeated: "Bye-bye cute fox logo!"
    }
  },

  Ie6: {
    type: "ie6",
    health: 2,
    attack: 5,
    messages: {
      enemyAttacks: "Your code is smushed by old versions of Internet Explorer...",
      playerAttacks: "Writing backwards compatible code to deal to Internet Exploder...",
      enemyDefeated: "Outdated Microsoft product dies!"
    }
  },

  Safari: {
    type: "safari",
    health: 1,
    attack: 5,
    messages: {
      enemyAttacks: "Safari doesn't support the plug-in you need - why would you want to add anything to an already perfect Apple product?",
      playerAttacks: "Hating on an Apple product gives you nerd cred...",
      enemyDefeated: "There's only a core left of that apple!"
    }
  },

  Var: {
    type: "var",
    health: 1,
    attack: 5,
    messages: {
      enemyAttacks: "var attack",
      playerAttacks: "You attack the var, but it just returns a new var!",
      enemyDefeated: "var died"
    }
  },

  Const: {
    type: "const",
    health: 1,
    attack: 5,
    messages: {
      enemyAttacks: "const attack",
      playerAttacks: "You attack the const, but it just returns a new const!",
      enemyDefeated: "const died"
    }
  },

  Let: {
    type: "let",
    health: 1,
    attack: 5,
    messages: {
      enemyAttacks: "let attack",
      playerAttacks: "You attack the let, but it just returns a new let!",
      enemyDefeated: "let died"
    }
  },

  Bracket: {
    type: "bracket",
    health: 1,
    attack: 5,
    messages: {
      enemyAttacks: "bracket attack",
      playerAttacks: "You attack the bracket, but it just returns a new bracket!",
      enemyDefeated: "bracket died"
    }
  },

  Comma: {
    type: "comma",
    health: 1,
    attack: 5,
    messages: {
      enemyAttacks: "comma-y attack",
      playerAttacks: "You attack the comma, but it just returns a new comma!",
      enemyDefeated: "comma died"
    }
  },

  Emeny: {
    type: "emeny",
    health: 1,
    attack: 5,
    messages: {
      enemyAttacks: "emeny attack",
      playerAttacks: "You attack the emeny, but it just returns a new emeny!",
      enemyDefeated: "emeny died"
    }
  },

  Promise: {
    type: "promise",
    health: 1,
    attack: 5,
    messages: {
      enemyAttacks: "Promises ensnare you in a chain of thens and whens...",
      playerAttacks: "Executing the promise just returns a new promise...",
      enemyDefeated: "Promises never die!"
    }
  },

  Async: {
    type: "async",
    health: 1,
    attack: 5,
    messages: {
      enemyAttacks: "Trying to write asynchronous code sends you to Callback Hell",
      playerAttacks: "Modularising your code helps, but callbacks keep popping up...",
      enemyDefeated: "Callback Hell is infinite!"
    }
  }

}
