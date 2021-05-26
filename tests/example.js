const { is, type } = require('../')
const Stream = require('stream')
console.log(type(new Map())) // map
console.log(type(new Stream.Readable())) // stream
console.log(type({})) // object
console.log(type(() => {})) // function
console.log(type(Promise.resolve(1))) // promise
console.log(is('object', {})) // true
console.log(is('array', [])) // true
console.log(is('array', '[]')) // false
console.log(is('file', 'example.js')) // true
console.log(is('directory', 'example.js')) // false
console.log(is('directory', '../tests')) // true

// object, string, array, number, boolean, undefined, function, null,
// map, set, generatorfunction, promise, stream, file, directory
