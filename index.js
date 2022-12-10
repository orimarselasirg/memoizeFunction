const express = require('express');
const app = express()
const routing = require('./router')


const PORT = 8081

app.listen(PORT, ()=> {
    console.log('server on port ' + PORT);
})

app.use('/', routing)



