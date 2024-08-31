const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) =>{
    const a = 1;
    const b =2
    const c = a + b;
    return res.send('hello word');
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))