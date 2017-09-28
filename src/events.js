module.exports = ({init, draw, update}) => {
  // Initialize
  init()

  // Call update and draw while measuring delta time and passing to update
  let prevTime
  return (time) => {
    time = time || window.performance.now()
    if (!prevTime) { prevTime = time }
    let dt = time - prevTime

    update(dt)
    draw()

    prevTime = time
  }
}
