const stream = require('stream')
const path = require('path')
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
  // Exists: () => [`${__dirname}/guard.js`, `${__dirname}/../datatype`],
  // async *[Symbol.asyncIterator]() {}
}
