let DumbMap = require('./dumbhash.js').DumbMap

let m = new DumbMap()

for (x = 0; x < 1000000; x++) {
  m.set(`element${x}`, x)
}

console.log(m.get('element0'))
console.log(m.get('element1'))
console.log(m.get('element1000'))
