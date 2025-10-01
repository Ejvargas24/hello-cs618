import { createServer } from 'node:http'
import { readFileSync } from 'node:fs'
//create the Nodejs server
const server = createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.end(readFileSync('backend/users.json'))
})

//start the Nodejs server
const host = 'localhost'
const port = 3000
server.listen(port, host, () => {
  console.log(`Server listening on http://${host}:${port}`)
})
