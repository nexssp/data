const assert = require('assert')
const validDataTypes = require('../lib/valid-datatypes').valid
const { inspect } = require('util')

const { is, type } = require('../') // will be loaded like @nexssp/os/legacy to keep 1.x versions functionality

console.time('test')

for (const dataType in validDataTypes) {
  const dataToCheck = validDataTypes[dataType]()
  const { length } = dataToCheck
  if (length > 0) {
    for (const data of dataToCheck) {
      console.log(`${dataType}: ${type(data)}`)
      assert.deepStrictEqual(is(dataType, data), true, `${inspect(data, true, 0)} is ${dataType}`)
    }
  } else {
    console.log(`No tests for ${dataType}`)
  }
}

console.timeEnd('test')
// assert.strictEqual(
//   type(() => 1),
//   'function'
// )
