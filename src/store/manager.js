import store from './store.js'

export default function(eventManager) {
  let _stores = {}

  return {
    register(name, template) {
      _stores[name] = store(name, template, eventManager)
    },
    subscribe(name) {
      return _stores[name]()
    }
  }
}
