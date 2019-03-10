let event,
  client
const PERSPECTIVE = 'perspective(100px)'
const TRANSLATIONS = [
  {
    pm: 'pmRotatex',
    translateFunc: 'rotateX',
    unit: 'deg'
  },
  {
    pm: 'pmRotatey',
    translateFunc: 'rotateY',
    unit: 'deg'
  },
  {
    pm: 'pmTranslatex',
    translateFunc: 'translateX',
    unit: 'px'
  },
  {
    pm: 'pmTranslatey',
    translateFunc: 'translateY',
    unit: 'px'
  }
]

function listener(e, $elements, clientInfo, options) {
  event = e
  client = clientInfo
  for (let element of $elements) {
    let tf = element.style.transform
    const dataset = element.dataset
    tf = updateTransformStyle(tf, dataset, options)
    element.style.transform = tf
  }
}

function updateTransformStyle(tf, dataset, options) {
  TRANSLATIONS.forEach(translation => {
    if (dataset.hasOwnProperty(translation.pm)) {
      tf = filterTransform(tf, translation.translateFunc)
      // Assemble the new transform string
      const offset = dataset[translation.pm] ? dataset[translation.pm] : options[translation.pm]
      tf = `${PERSPECTIVE} ${tf} ${translation.translateFunc}(${_calculator[translation.translateFunc](offset)}${translation.unit})`
    }
  })
  return tf
}

function filterTransform(tf, translateFunc) {
  return tf.split(' ').filter(transform => !transform.includes(translateFunc) && !transform.includes('perspective')).join(' ').trim()
}

const _calculator = {
  // When weight > 0, the translate direction is the same with the cursor moving direction,
  // When weight < 0, the directions are opposite.
  rotateX(weight = 1) {
    return (client.y - event.clientY) / client.y * weight
  },
  rotateY(weight = 1) {
    return (event.clientX - client.x) / client.x * weight
  },
  translateX(weight = 1) {
    return (event.clientX - client.x) / client.x * weight
  },
  translateY(weight = 1) {
    return (event.clientY - client.y) / client.y * weight
  }
}

module.exports = listener
