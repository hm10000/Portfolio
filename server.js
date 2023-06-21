const express = require('express')
const app = express()

app.get('/', (req, res) => {
    console.log('Here')
    res.json({message: "Error"})
})

app.get('/users', (req, res) => {
    res.send('User List')
})

app.get('/users/new', (req, res) => {
    res.send('User New Form')
})


app.listen(3000)


