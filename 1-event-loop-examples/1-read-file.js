const { readFile } = require('fs')

console.log('Started first task')
// CHECK FILE PATH!!!!
readFile('./content/first.txt', 'utf8', (err, result) => {
  if(err) {
    console.log(err)
    return
  }
  console.log(result)
  console.log('First task completed')
})

console.log('Starting second task')