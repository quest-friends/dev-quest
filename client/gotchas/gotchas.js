

module.exports = {

  RabbitHole:  {
      type: "rabbithole",
      triggered: false,
      messageOnTrigger: 'Triggering a rabbithole wastes hours...'
    },

  InfiniteLoop: {
    type: "infiniteloop",
    triggered: false,
    messageOnTrigger: "Browser crashes because you coded an infinite loop"
  },

  PushedToMaster: {
    type: "pushedtomaster",
    triggered: false,
    messageOnTrigger: "Rookie push to master => merge conflict + team grumpiness"
  }

}
