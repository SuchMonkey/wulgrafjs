import eventManager from './event/manager.js'
import storeManager from './store/manager.js'
import componentManager from './component/manager.js'


function wulgraf() {
  const _eventManager = eventManager()

  return {
    stores: storeManager(_eventManager),
    components: componentManager(_eventManager),
    on: _eventManager.on,
    once: _eventManager.once,
    trigger: _eventManager.trigger
  }
}

export default wulgraf
/*

let wg = wulgraf()








wg.stores.register('storeName', {
  init() {
      console.log('storeName initialized')
  },
  data: [
      {name: 'joe', age: 21}
  ]
})

let astore = wg.stores.subscribe('storeName')
let bstore = wg.stores.subscribe('storeName')

astore.data[0].name = 'astore'
bstore.data[0].name = 'bstore'

console.log(1, astore.data[0], bstore.data[0])
astore.commit()
console.log(2, astore.data[0], bstore.data[0])
bstore.data[0].name = 'bstore'
bstore.commit()
console.log(3, astore.data[0], bstore.data[0])

let cstore = wg.stores.subscribe('storeName')
console.log(4, astore.data[0], bstore.data[0], cstore.data[0])
cstore.data[0].name = 'cstore'
console.log(5, astore.data[0], bstore.data[0], cstore.data[0])
cstore.commit()
console.log(6, astore.data[0], bstore.data[0], cstore.data[0])
*/
