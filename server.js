let express = require('express')
let app= express()

let body = `
<h1> TEST 

UPDATED SERVER</h1>
`

app.get('/', (req,res) => {
    res.send(body);
})

app.listen(3040, x => {
    console.log("Listening on 3040")
})