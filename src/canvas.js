module.exports = (width, height, canvas) => {
  // Create canvas?
  if (!canvas) {
    canvas = document.createElement('canvas')
    document.body.appendChild(canvas)
  }

  // Set size
  canvas.width = width
  canvas.height = height

  // Get context
  let ctx = canvas.getContext('2d')
  return ctx
}
