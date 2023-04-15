const express = require('express');
const cors = require("cors")
const app = express();
const port = process.env.PORT || 8080;
require('dotenv').config()
require('./db/associations')

// Allows CORS-enabled for all http origins
app.use(cors())

// // Cors configuration
// const whitelist = [
//   "http://localhost:3000", "http://localhost:8080", 
//   "http://tripplanner-client.herokuapp.com", "http://tripplanner-server.herokuapp.com", 
//   "https://tripplanner-client.herokuapp.com", "https://tripplanner-server.herokuapp.com", 
//   "http://wanderbranch.herokuapp.com", "http://wanderbranch-api.herokuapp.com", 
//   "https://wanderbranch.herokuapp.com", "https://wanderbranch-api.herokuapp.com", 
// ]

// const cors_options = {
//   origin: (origin, callback)=> {
//     if (whitelist.includes(origin)) {
//       callback(null, true)
//     } else {
//       callback(new Error("Not allowed by CORS"))
//     }
//   },
//   credentials: true,
// }

// app.use(cors(cors_options))


// Parses incoming requests (eg POST body)
app.use(express.urlencoded({extended: true}))

// API endpoints directory
app.use('/', require('./api'))


// Connect Server
app.listen(port, ()=> {
  console.log(`A server session has been created on port ${port}. \nAccessible via http://localhost:${port}`)
});