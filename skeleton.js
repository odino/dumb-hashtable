class DumbMap {
  get(x) {
    console.log(`get ${x}`)
  }

  set(x, y) {
    console.log(`set ${x} to ${y}`)
  }
}

let m = new DumbMap()

m.set('a', 1)
m.get('a')
