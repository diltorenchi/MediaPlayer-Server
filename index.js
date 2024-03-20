//import json-server library
//jsonserver is the name of json libray
const jsonServer = require('json-server')

//create server using create function
//mediaplayerserver is the server name
const mediaPlayerServer = jsonServer.create()


//create path for db.json file [database file]
const router = jsonServer.router('db.json')

//create  middleware to convert js into json

const middleware = jsonServer.defaults()

//connect
//always place middleware first then router
mediaPlayerServer.use(middleware)
mediaPlayerServer.use(router)


//setup port for the server

const port = 4000 || process.env.PORT  //process.env.PORT is used to if 4000 is not available use any other available port

//run the server

mediaPlayerServer.listen(port,()=>{
    console.log('MediaPlayer Server Running Succesfully');
})