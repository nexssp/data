# @nexssp/data

Just library for datatypes.

## Note

This library/module is the effect of the refactoring the Nexss Programmer **@nexssp/cli** which development has been started in 2018.

## Examples

```js
const { is, type } = require('@nexssp/data')
console.log(type(new Map())) // map
const Stream = require('stream')
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
```

## Functions

- **type (value)** -> return one of the datatype: **object, string, array, number, boolean, undefined, function, null, map, set, generatorfunction, promise, stream, url, json**
- **is (type, value)** -> check for the types + **is('directory',v)**, **is('dir',v)**, **is('file',v), **is('url',v), , **is('json',v)**
- **compare (v1, v2)** -> compares 2 values. If any of them is function, it will run first and then compare
- **isEmpty (value)** -> check if anything is empty like array, object, string.

## Valid Datatypes

```js
exports.valid = {
  object: () => [{}, { x: 1 }, { x: 1, y: { nested: true } }],
  string: () => ['', 'mystring'],
  array: () => [[0], [1, 2]],
  number: () => [1, 1234, 36936936936936936936936936936936936936936936936936],
  boolean: () => [true, false],
  undefined: () => [undefined],
  function: () => [() => {}, function () {}, () => 'somestring'],
  asyncfunction: () => [async () => {}, async function () {}],
  null: () => [null],
  map: () => [
    new Map(),
    new Map([
      ['key1', 'value1'],
      ['key2', 'value2'],
    ]),
  ],
  set: () => [
    new Set(),
    new Set([
      ['key1', 'value1'],
      ['key2', 'value2'],
    ]),
  ],
  generatorfunction: () => [function* x() {}],
  promise: () => [Promise.resolve() /*, Promise.reject()*/],
  stream: () => [
    new stream.Readable(),
    new stream.Writable(),
    new stream.Transform(),
    new stream.Stream(),
    new stream.Duplex(),
    new stream.PassThrough(),
  ],
  file: () => [path.resolve(`lib/data.js`)],
  directory: () => [path.resolve(`lib`)],
  dir: () => [path.resolve(`lib`)],
  url: () => ['https://abc.ce', 'https://abc.de'],
  json: () => ['{"x":1}', '{"val":{"nested":5}}'],
  regexp: () => [new RegExp(/x/)],
}
```
