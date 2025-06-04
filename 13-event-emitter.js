const EventEmitter = require('events')

const customEmitter = new EventEmitter()

customEmitter.on('response', (name, id) => {
  console.log(`Data received, Name: ${name} ID: ${id}`)
})
customEmitter.on('response', () => {
  console.log(`Different data received`)
})

customEmitter.emit('response', 'John', 34)