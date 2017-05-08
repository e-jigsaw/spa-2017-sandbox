import {createServer} from 'http'
import {parse} from 'url'
const {PORT} = process.env

const script = filename => `<script src="//localhost:9998/${filename}"></script>`

createServer((req, res) => {
  try {
    const url = parse(req.url)
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    res.end(
      `<div id="app"></div>${script('manifest.js')}${script('common.js')}${script('index.js')}`
    )
  } catch (err) {
    console.error(err)
    res.statusCode = 500
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(err))
  }
}).listen(PORT, () => console.log(`Listeining at: ${PORT}`))
