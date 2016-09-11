
const playerItemPickup = (item) => {
  return {
    type: "PLAYER_ITEM_PICKUP",
    payload: item
  }
}

export {
  playerItemPickup
}
