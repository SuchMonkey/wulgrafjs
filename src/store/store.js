import _ from 'lodash'

export default function(name, storeTemplate, eventManager) {

  storeTemplate.data = storeTemplate.data || {}
  storeTemplate.init = storeTemplate.init || function () {

  }

  storeTemplate.on = function(signatureString, callback) {
    eventManager.on(`${name}:${signatureString}`, callback)
  }

  storeTemplate.once = function(signatureString, callback) {
    eventManager.once(`${name}:${signatureString}`, callback)
  }

  storeTemplate.trigger = function(signaturePattern, ...params) {
    eventManager.trigger(`${name}:${signaturePattern}`, ...params)
  }

  storeTemplate.commit = function() {
    storeTemplate.trigger('commit', _.cloneDeep(this.data))
  }

  // Make sure the template has the latest data for further subscribtions
  storeTemplate.on('commit', (data) => {
    storeTemplate.data = data
  })

  return function() {
    let newStore = _.cloneDeep(storeTemplate)

    newStore.on('commit', (data) => {
      newStore.data = data
    })

    return newStore
  }
}
