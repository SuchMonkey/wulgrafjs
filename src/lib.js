import eventManager from './event/manager.js'
import storeManager from './store/manager.js'
//import componentManager from './component/manager.js'


function wulgraf() {
  const _eventManager = eventManager()

  return {
    stores: storeManager(_eventManager),
    //components: componentManager(_eventManager),
    on: _eventManager.on,
    once: _eventManager.once,
    trigger: _eventManager.trigger
  }
}

export default wulgraf

console.log('start')
let wg = wulgraf()

wg.stores.register('storeName', {
  data: {
    name: 'nothing'
  }
})

let astore = wg.stores.subscribe('storeName')
let bstore = wg.stores.subscribe('storeName')

astore.data.name = 'astore'
bstore.data.name = 'bstore'

console.log(1, astore.data, bstore.data)
astore.commit()
console.log(2, astore.data, bstore.data)
bstore.data.name = 'bstore'
bstore.commit()
console.log(3, astore.data, bstore.data)

let cstore = wg.stores.subscribe('storeName')
console.log(4, astore.data, bstore.data, cstore.data)
cstore.data.name = 'cstore'
console.log(5, astore.data, bstore.data, cstore.data)
cstore.commit()
console.log(6, astore.data, bstore.data, cstore.data)
