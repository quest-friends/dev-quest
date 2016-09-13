module.exports = {

  Chrome: {
    type: "chrome",
    health: 1,
    messages: {
      enemyAttacks: "Google Chrome is trying to take over the world...",
      playerAttacks: "Installing an open source browser to replace Google Chrome...",
      enemyDefeated: "Chrome is gone, now start using Duck Duck Go search engine!"
    }
  },
    Firefox: {
    type: "firefox",
    health: 1,
    messages: {
      enemyAttacks: "Unhelpful Firefox developer tools slow you down...",
      playerAttacks: "Abandoning Firefox to go back to Chrome...",
      enemyDefeated: "Bye-bye cute fox logo!"
    }
  },
  Ie6: {
    type: "ie6",
    health: 2,
    messages: {
      enemyAttacks: "Your code is smushed by Internet Explorer v1-8...",
      playerAttacks: "Writing backwards compatible code to deal to Internet Explorer...",
      enemyDefeated: "Outdated Microsoft product dies!"
    }
  },

  Safari: {
      type: "safari",
      health: 1,
      messages: {
        enemyAttacks: "Safari doesn't support the plug-in you need - why would you want to add anything to an already perfect Apple product?",
        playerAttacks: "Hating on an Apple product gives you nerd cred...",
        enemyDefeated: "There's only a core left of that apple!"
      }
    },

  Promise: {
      type: "promise",
      health: 1,
      messages: {
        enemyAttacks: "promise-y attack",
        playerAttacks: "You attack the promise, but it just returns a new promise!",
        enemyDefeated: "promise died...?"
      }
    }
  }
