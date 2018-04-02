function divide(int) {
  int = Math.round(int / 2)

  if (int > 10) {
    return divide(int)
  }

  return int
}

function hash(key) {
  let h = require('string-hash')(key)
  return divide(h)
}

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

module.exports = {DumbMap}
