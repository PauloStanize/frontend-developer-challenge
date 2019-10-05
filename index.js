const express = require('express')
const next = require('next')
const envConfig = require('./envConfig')

const port = envConfig['port']
const dev =  envConfig['env']
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()

  server.get("/:page", (req, res) => {
    return app.render(req, res, "/", { page: req.params.page })
  })

  server.all('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})