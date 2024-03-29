const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render("contact");
})

router.get('/new', (req, res) => {
    res.send('User New Form')
})

router.post('/', (req, res) => {
    res.send('Create User')
})

router.get('/:id', (req, res) => {
    res.send(`Get User With ID ${req.params.id}`)
})


module.exports = router