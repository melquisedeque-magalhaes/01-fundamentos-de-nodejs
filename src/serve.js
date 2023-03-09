import http from 'node:http'

const server = http.createServer((req, res) => {
  res.end("Hello Melqui!")
})

server.listen(3333, () => {
  console.log("server run 🚀")
})