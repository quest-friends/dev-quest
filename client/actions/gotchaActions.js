
const triggerGotcha = (gotcha) => {
  return {
    type: "STEP_ON_GOTCHA",
    payload: gotcha
  }
}

export {
  triggerGotcha
}
