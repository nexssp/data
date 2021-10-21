const _log = require('@nexssp/logdebug')
const { inspect } = require('util')

const compare = (val1, val2, optionalMessages) => {
  if (typeof val2 === 'boolean' && val2 === true) {
    if (val1 && val1.length === 0) {
      return false
    }
  }

  if (is('function', val1)) {
    val1 = val1()
    _log.di('Result of function: @compare val1', inspect(val1))
    // console.log("result function of val1: ", val1, optionalMessages);
    if (optionalMessages) {
      console.log(optionalMessages)
    }
  }

  if (is('function', val2)) {
    val2 = val2()
    _log.di('Result of function: @compare val2', inspect(val2))
    // console.log("result function of val2: ", val2, optionalMessages);
    if (optionalMessages) {
      console.log(optionalMessages)
    }
  }

  if (val2 instanceof RegExp) {
    return val2.test(val1)
    // process.exit(1);
  } else if (Object.prototype.toString.call(val2) !== '[object String]') {
    return JSON.stringify(val1) === JSON.stringify(val2)
  } else if (val1 === val2) {
    return true
  }
}

function type(v) {
  const t = {}.toString.call(v).slice(8, -1).toLowerCase()
  if (t === 'object' && typeof v.pipe === 'function') {
    return 'stream'
  }

  return t
}

const isEmpty = (v) => {
  if (v === null || v === undefined) {
    return true
  }
  switch (type(v)) {
    case 'object':
      return Object.keys(v).length === 0
    case 'array':
      return v.length === 0
    case 'string':
      return v === ''
    default:
      break
  }
}

const { lstatSync } = require('fs')
const isDirectory = (v) => {
  const stat = lstatSync(v)
  return stat.isDirectory(v)
}

// Maybe there is better function, this works for us.
function isJson(item) {
  item = typeof item !== 'string' ? JSON.stringify(item) : item

  try {
    item = JSON.parse(item)
  } catch (e) {
    return false
  }

  if (typeof item === 'object' && item !== null) {
    return true
  }

  return false
}

const isFile = (v) => {
  const stat = lstatSync(v)
  return stat.isFile(v)
}

const validDataTypes = require('./valid-datatypes').valid

function is(what, v) {
  what = what.toLowerCase()

  if (!validDataTypes[what]) {
    throw new Error(
      `@nexssp/data module not allow for ${what} datatype.\nValid datatypes: ${Object.keys(
        validDataTypes
      )}`
    )
  }

  switch (what) {
    case 'file':
      return isFile(v)
    case 'directory':
    case 'dir':
      return isDirectory(v)
    case 'url':
      // TODO: make it better later..
      if (!v.startsWith) return false
      return v.startsWith('http://') || v.startsWith('https://')
    case 'json':
      return isJson(v)
    default:
      break
  }

  const typeV = type(v)
  return typeV && !what ? typeV : typeV === what
}

module.exports = {
  is,
  type,
  isDirectory,
  isFile,
  isEmpty,
  compare,
}
