
const pickUpItem = (item) => {
  return {
    type: "PICKUP_ITEM",
    payload: item
  }
}

export {
  pickUpItem
}
