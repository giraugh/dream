const {EntityManager} = require('simple-ecs')
const core = require('dream-core')

const canvas = require('./src/canvas.js')
const events = require('./src/events.js')
const start = require('./src/start.js')

module.exports = Object.assign({},
  core,
  EntityManager,

  canvas,
  events,
  start
)
