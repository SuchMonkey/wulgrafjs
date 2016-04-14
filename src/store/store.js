import _ from 'lodash'

export default function(name, template, eventManager) {

  template.init = template.init || function() {}
  template.data = template.data || {}

  // Add event handling to the store template
  template.on = function(signatureString, callback) {
    eventManager.on(`${name}:${signatureString}`, callback)
  }

  template.once = function(signatureString, callback) {
    eventManager.once(`${name}:${signatureString}`, callback)
  }

  template.trigger = function(signaturePattern, ...params) {
    eventManager.trigger(`${name}:${signaturePattern}`, ...params)
  }

  template.commit = function() {
    this.trigger('commit', this.data)
  }

  template.on('commit', newData => template.data = newData)

  return function() {
    let store = _.cloneDeep(template)

    store.on('commit', newData => store.data = _.cloneDeep(newData))

    store.init()

    return store
  }
}
