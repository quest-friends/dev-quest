

module.exports = {
  RabbitHole: {
    type: "rabbithole",
    triggered: false,
    messageOnTrigger: "You've fallen into a rabbit hole and wasted hours in the blink of an eye."
  },

  InfinteLoop: {
    type: "infiniteloop",
    triggered: false,
    messageOnTrigger: "Oh no! An infinite loop crashed your browser."
  },

  PushedToMaster: {
    type: "pushedtomaster",
    triggered: false,
    messageOnTrigger: "You rookie, you've pushed straight to master and caused a merge conflict."
  }
}
