import component from './component.js'

export default function(eventManager) {
  let _components = {}

  return {
    register(name, template) {
      _components[name] = component(name, template, eventManager)
      document.registerElement(name, {
        prototype: Object.create(HTMLElement.prototype, _components[name]())
      })
    },
    new(name) {
      return _components[name]()
    },
    get(name) {
      return _components[name]
    }
  }
}
