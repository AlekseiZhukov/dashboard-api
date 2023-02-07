//import http from 'http'
import express, {Request, Response, NextFunction } from 'express'
import { userRouter } from "./users/users.js";
//const host = '127.0.0.1'
const port = 8000
// http server -----------------------------------------------
/*const server = http.createServer((req, res) => {
  switch (req.method) {
    case 'GET':
      switch (req.url) {
        case '/' :
          res.statusCode = 200
          res.setHeader('Content-type', 'text/plain; charset=utf-8')
          res.end('Привет!')
          break
      }
    break
  }

})

server.listen(port, host, () => {
  console.log(`Server starting on ${host}:${port}`)
})*/
//-------------------------------------------------------------

const app = express()

/*app.all('/hello', (req, res, next ) => {
  console.log("all")
  next()
})

const cb = (req, res, next) => {
  console.log('CB')
  next()
}*/

app.use((req, res, next) => {
  console.log('Time', Date.now())
  next()
})

app.get('/hello', (req, res ) => {
  throw new Error('Error!!!')

})
app.get('/', (req, res) => {
  throw new Error('BROKEN')
})

app.use('/users', userRouter)

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.log(err.message)
  res.status(401).send(err.message)
})



app.listen(port, () => {
  console.log(`Server starting on http://localhost:${port}`)
})