import shaven from 'shaven'

export default function(name, component) {
  return function() {
    return {
      on(signatureString, callback) {
        eventManager.on(`${name}:${signatureString}`, callback)
      },
      once(signatureString, callback) {
        eventManager.once(`${name}:${signatureString}`, callback)
      },
      trigger(signaturePattern) {
        eventManager.trigger(`${name}:${signaturePattern}`)
      }
    }
  }
}
