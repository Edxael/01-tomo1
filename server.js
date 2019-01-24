// ===[ DEPENDENCIES ]===============================
const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const app = express()
 
 
 
// ===[ MIDDLEWARE ]=================================
app.use(express.static(path.join(__dirname, 'build')))
 
 
 
// ===[ ROUTES ]=====================================
app.get('/ping', function (req, res) {  // Just to test server
 return res.send('pong');
})
 
app.get('/', function (req, res) {      // Route to serve build React-App.
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})
 
 
 
// === [ SERVER LISTENER ]===========================
app.listen((process.env.PORT || 8080), (err) => {
    if(err){ throw err }
    console.log("Server Listening on port: 8080 ....")
})