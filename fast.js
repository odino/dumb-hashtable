let hash = require('string-hash')

class DumbMap {
  constructor() {
    this.list = []
  }

  get(x) {
    return this.list[hash(x)]
  }

  set(x, y) {
    this.list[hash(x)] = y
  }
}

// let m = new DumbMap()
//
// m.set('a', 1)
// console.log(m.get('a'))
// console.log(m.get('I_DONT_EXIST'))
module.exports = {DumbMap}
