const express = require('express');

const app = express();

app.get('/', (req, res)=> {
    res.send('Hello World!')
})

app.listen(4500, ()=> {
    console.log('Server running on port 4500')
})