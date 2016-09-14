
const triggerGotcha = (gotcha) => {
  return {
    type: "TRIGGER_GOTCHA",
    payload: gotcha
  }
}

export {
  triggerGotcha
}
