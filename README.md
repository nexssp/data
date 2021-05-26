# @nexssp/data

Just library for datatypes.

## Note

This library/module is the effect of the refactoring the Nexss Programmer **@nexssp/cli** which development has been started in 2018.

## Functions

- **type (value)** -> return one of the datatype: **object, string, array, number, boolean, undefined, function, null, map, set, generatorfunction, promise, stream**
- **is (type, value)** -> check for the
- **compare (v1, v2)** -> compares 2 values. If any of them is function, it will run first and then compare
- **isEmpty (value)** -> check if anything is empty like array, object, string.

## Valid Datatypes

```js
exports.valid = {
  Object: () => [{}, { x: 1 }, { x: 1, y: { nested: true } }],
  String: () => ['', 'mystring'],
  Array: () => [[0], [1, 2]],
  Number: () => [1, 1234, 36936936936936936936936936936936936936936936936936],
  Boolean: () => [true, false],
  Undefined: () => [undefined],
  Function: () => [() => {}, function () {}, () => 'somestring'],
  Null: () => [null],
  Map: () => [
    new Map(),
    new Map([
      ['key1', 'value1'],
      ['key2', 'value2'],
    ]),
  ],
  Set: () => [
    new Set(),
    new Set([
      ['key1', 'value1'],
      ['key2', 'value2'],
    ]),
  ],
  GeneratorFunction: () => [function* x() {}],
  Promise: () => [Promise.resolve() /*, Promise.reject()*/],
  Stream: () => [
    new stream.Readable(),
    new stream.Writable(),
    new stream.Transform(),
    new stream.Stream(),
    new stream.Duplex(),
    new stream.PassThrough(),
  ],
}
```
