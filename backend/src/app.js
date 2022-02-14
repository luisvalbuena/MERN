const express = require('express');
const cors = require('cors');
const app = express()

//settings
app.set('port', process.env.PORT || 4000)

//middlewares
function corsValidation(){
    try {
        app.use(cors())
    } catch (error){
        console.log(error)
    }
}
corsValidation()
app.use(express.json())

//routes
app.use('/api/notes', require('./routes/notes'))
app.use('/api/users', require('./routes/users'))
module.exports = app;