import http from 'http'
import fs from 'fs'
import path from 'path'
import { host, PORT } from './config.js'

const server = http.createServer( (req, res) => {
	if(req.url == '/' && req.method == 'GET') {
		res.writeHead(200, { 'Content-Type': 'text/html' })
		res.write(
			fs.readFileSync( path.join( process.cwd(), 'src', 'views', 'index.html' ) )
		)
		return res.end()
	} else if(req.url == '/js/main.js' && req.method == 'GET') {
		res.writeHead(200, { 'Content-Type': 'application/js' })
		res.write(
			fs.readFileSync( path.join( process.cwd(), 'src', 'assets', 'js', 'main.js' ) )
		)
		return res.end()
	} else {
		return res.end('Not found!')
	}
} )


server.listen( PORT,  () => console.log('*' + PORT))