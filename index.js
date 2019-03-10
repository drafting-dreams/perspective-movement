// pm stands for perspective movement
const _debounce = require('lodash.debounce')
const _throttle = require('lodash.throttle')

const listener = require('./MovementListener')

let throttledMovement,
  debouncedGetClient

let $pmElements = []
let standard = {
  x: 0,
  y: 0
}
let global_options

const init = function(options) {
  // initialize variables
  global_options = options
  throttledMovement = _throttle(movementListener)
  debouncedGetClient = _debounce(getClientInfo)
  $pmElements = document.querySelectorAll('[data-pm]')
  getClientInfo()
  window.addEventListener('mousemove', throttledMovement)
  window.addEventListener('resize', debouncedGetClient)
}

function movementListener(e) {
  listener(e, $pmElements, standard, global_options)
}

function getClientInfo() {
  standard.x = window.innerWidth / 2
  standard.y = window.innerHeight / 2
}

function clearPM() {
  window.removeEventListener('mousemove', throttledMovement)
  window.removeEventListener('resize', debouncedGetClient)
}

module.exports =  { init, clear: clearPM }
