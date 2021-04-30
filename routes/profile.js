const express = require("express")
const router = express.Router()


router.get('/', (req, res) => {
    res.render('profile', {
        layout: 'profile',
    })
})

module.exports = router