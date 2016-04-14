import _ from 'lodash'
import shaven from 'shaven'

export default function(name, template, eventManager) {

  template.update = template.update || function() {
    let html = shaven(this.render())
    this.references = html.references
    return html.rootElement
  }
  template.init = template.init || function() {}

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

  return function() {
    let component = _.cloneDeep(template)

    component.init()

    return component
  }
}
