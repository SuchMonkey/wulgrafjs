import event from './event.js'

export default function() {
  let _events = []
  let _onceEvents = []

  return {
    on(signatureString, callback) {
      _events.push(event(signatureString, callback))
    },
    once(signatureString, callback) {
      _onceEvents.push(event(signatureString, callback))
    },
    trigger(signaturePattern, ...params) {
      // Try to fire each once event and filter them out if successful
      _onceEvents = _onceEvents.filter(e => !e.fireIf(signaturePattern, ...params))
      // Try to fire each event
      _events.forEach(e => e.fireIf(signaturePattern, ...params))
    }
  }
}
