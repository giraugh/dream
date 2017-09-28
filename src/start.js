module.exports = (loop) => {
  let f = (time) => {
    loop(time)
    window.requestAnimationFrame(f)
  }

  f()
}
