const mongoose = require('mongoose')

URI = process.env.MONGODB_URI ? process.env.MONGODB_URI : console.log('no db founded')

mongoose.connect(URI)

const connection = mongoose.connection

connection.once('open', ()=>{
    console.log('db is connected')
})