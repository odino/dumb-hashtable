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
    let i = hash(x)

    if (!this.list[i]) {
      return undefined
    }

    let result

    this.list[i].forEach(pairs => {
      if (pairs[0] === x) {
        result = pairs[1]
      }
    })

    return result
  }

  set(x, y) {
    let i = hash(x)

    if (!this.list[i]) {
      this.list[i] = []
    }

    this.list[i].push([x, y])
  }
}

module.exports = {DumbMap}
