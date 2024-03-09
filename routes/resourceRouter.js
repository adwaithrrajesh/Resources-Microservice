const express = require('express')
const router  = express.Router()
const {insertResource} = require('../controller/resourceController')

router.post('/demo',insertResource)

module.exports = router