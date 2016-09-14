module.exports = {

  Chrome: {
    type: "chrome",
    health: 1,
    attack: 5,
    messages: {
      enemyAttacks: "Google asserts world dominance, well-being--",
      playerAttacks: "Installing an open source browser instead of Chrome",
      // enemyDefeated: "Chrome gone, next step: use Duck Duck Go search engine!"
    }
  },

  Firefox: {
    type: "firefox",
    health: 1,
    attack: 5,
    messages: {
      enemyAttacks: "Unhelpful Firefox developer tools => well-being - -",
      playerAttacks: "Uninstalling Firefox, bye-bye cute logo",
      // enemyDefeated: "You've been blooded!"
    }
  },

  Ie6: {
    type: "ie6",
    health: 2,
    attack: 5,
    messages: {
      enemyAttacks: "Internet Explorer now default browser => well-being - -",
      playerAttacks: "Uninstalling Internet Exploder",
      // enemyDefeated: "Outdated Microsoft product dies!"
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
      enemyAttacks: "Scope ambiguity with var catches you out...",
      playerAttacks: "Using const and let makes var redundant...",
      enemyDefeated: "Your code is safe from ambiguously mutable variables!"
    }
  },

  Const: {
    type: "const",
    health: 1,
    attack: 5,
    messages: {
      enemyAttacks: "Trying to reassign a Const variable breaks your function...",
      playerAttacks: "Changing the const to let works...",
      enemyDefeated: "Hurrah - no more 'constant' variable weirdness!"
    }
  },

  Let: {
    type: "let",
    health: 1,
    attack: 5,
    messages: {
      enemyAttacks: "The let variable isn't accessible outside its block...",
      playerAttacks: "You figure out how scope actually works...",
      enemyDefeated: "Revert to var - who needs ES6?"
    }
  },

  Bracket: {
    type: "bracket",
    health: 1,
    attack: 5,
    messages: {
      enemyAttacks: "Syntax error: misplaced bracket...",
      playerAttacks: "Hours spent matching brackets pay off...",
      enemyDefeated: "A place for every bracket, and every bracket in its place!"
    }
  },

  Comma: {
    type: "comma",
    health: 1,
    attack: 5,
    messages: {
      enemyAttacks: "Syntax error: missing comma in array or object...",
      playerAttacks: "Scanning for commas, losing will to live...",
      enemyDefeated: "All items now separated by commas!",
    }
  },

  Emeny: {
    type: "emeny",
    health: 1,
    attack: 5,
    messages: {
      enemyAttacks: "Syntax error: typo breaks the program entirely...",
      playerAttacks: "Autocomplete in text editor is your new best friend...",
      enemyDefeated: "Code is now word perfect!"
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
