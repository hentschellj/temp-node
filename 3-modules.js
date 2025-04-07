// CommonJS, every file is a module (by default)
// Modules - Encapsulated Code (only share minimum)
const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternate-syntax')
require('./7-mind-grenade')

sayHi(names.jack)
sayHi(names.jill)