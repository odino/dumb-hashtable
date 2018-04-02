let DumbMap = require('./dumbhash.js').DumbMap

let m = new DumbMap()
m.set('x', 1)
m.set('y', 2)

console.time('with very few records in the map')
m.get('I_DONT_EXIST')
console.timeEnd('with very few records in the map')

m = new DumbMap()

for (x = 0; x < 1000000; x++) {
  m.set(`element${x}`, x)
}

console.time('with lots of records in the map')
m.get('I_DONT_EXIST')
console.timeEnd('with lots of records in the map')
