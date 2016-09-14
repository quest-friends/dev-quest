module.exports = {

  Chrome: {
    type: "chrome",
    health: 1,
    attack: 5,
    messages: {
      enemyAttacks: "Google wants to rule the world => health--",
      playerAttacks: "Installing an open source browser to replace Chrome",
    }
  },

  Firefox: {
    type: "firefox",
    health: 1,
    attack: 5,
    messages: {
      enemyAttacks: "Unhelpful Firefox developer tools => health--",
      playerAttacks: "Replacing Firefox with another browser solves problem",
    }
  },

  Ie6: {
    type: "ie6",
    health: 4,
    attack: 2,
    messages: {
      enemyAttacks: "Internet Explorer makes itself the default browser => health--",
      playerAttacks: "Uninstalling Internet Exploder fixes issue (eventually)",
    }
  },

  Safari: {
    type: "safari",
    health: 1,
    attack: 5,
    messages: {
      enemyAttacks: "Perfect Apple product doesn't support plug-ins => health--",
      playerAttacks: "Abandoning Apple for Linux gives you nerd cred",
    }
  },

  Var: {
    type: "var",
    health: 1,
    attack: 5,
    messages: {
      enemyAttacks: "Confusion over variable scope of var => health--",
      playerAttacks: "Learning to use scope correctly improves code",
    }
  },

  Const: {
    type: "const",
    health: 1,
    attack: 5,
    messages: {
      enemyAttacks: "Confusion over constant variables, health--",
      playerAttacks: "Learning that variable != varying helps",
    }
  },

  Let: {
    type: "let",
    health: 1,
    attack: 5,
    messages: {
      enemyAttacks: "Confusion over scope of let => health--",
      playerAttacks: "Learning to use scope correctly improves code",
      }
  },

  Bracket: {
    type: "bracket",
    health: 1,
    attack: 5,
    messages: {
      enemyAttacks: "Syntax error: misplaced bracket => health--",
      playerAttacks: "Neat indentation helps you pair brackets",
      }
  },

  Comma: {
    type: "comma",
    health: 1,
    attack: 5,
    messages: {
      enemyAttacks: "Syntax error: missing comma in array => health--",
      playerAttacks: "Losing will to live, but all commas are now correct",
    }
  },

  Emeny: {
    type: "emeny",
    health: 1,
    attack: 5,
    messages: {
      enemyAttacks: "Syntax error: emeny breaks program => health--",
      playerAttacks: "Using autocomplete in code editor improves accuracy",
    }
  },

  Promise: {
    type: "promise",
    health: 1,
    attack: 5,
    messages: {
      enemyAttacks: "Promises chain ties code in knots => health--",
      playerAttacks: "Executing the promise just returns a new promise!",
    }
  },

  Async: {
    type: "async",
    health: 1,
    attack: 5,
    messages: {
      enemyAttacks: "Async code sends you to Callback Hell => health--",
      playerAttacks: "Callback calls another callback calls another callback..."
    }
  }

}
