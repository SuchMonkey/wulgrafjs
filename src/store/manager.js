import store from './store.js'

export default function(eventManager) {
  let _stores = {}

  return {
    register(name, storeContent) {
      _stores[name] = store(name, storeContent, eventManager)
    },
    subscribe(name) {
      return _stores[name]()
    }
  }
}
