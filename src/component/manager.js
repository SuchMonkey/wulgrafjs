import component from './component.js'

export default function(eventManager) {
  let _components = {}

  return {
    register(name, componentContent) {
      _components[name] = store(name, componentContent, eventManager)
    },
    new(name) {
      return if(_components[name]) _components[name]()
    }
  }
}
