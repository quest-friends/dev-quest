

module.exports = {

  RabbitHole:  {
      type: "rabbithole",
      triggered: false,
      messageOnTrigger: 'Triggering a rabbithole wastes hours => charge -= 10'
    },

  InfiniteLoop: {
    type: "infiniteloop",
    triggered: false,
    messageOnTrigger: "Browser crashes because you coded an infinite loop => well-being -= 5"
  },

  PushedToMaster: {
    type: "pushedtomaster",
    triggered: false,
    messageOnTrigger: "Rookie git push to master causes merge conflict => attack strength - -"
  }

}
