const itemPickup = (item) => {
  return {
    type: "ITEM_PICKUP",
    payload: item
  }
}

export {
  itemPickup
}
