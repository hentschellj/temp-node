const http = require('http')

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Welcome to my home page!')
  } else if (req.url === '/about') {
    res.end('My name is Jack. This is the about page.')
  } else {
    res.end(`
      <h1>Oops!</h1>
      <p>This page does not exist.</p>
      <a href="/">Back to Home</a>
    `)
  }
  // Can use if/else if/else or return at the end of each req
})

server.listen(8000)