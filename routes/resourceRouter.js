const express = require('express')
const router  = express.Router()
const {insertResource, getAllArticle} = require('../controller/resourceController')
const {validateArticle} = require('../middleware/resourceValidator')

router.post('/insertResource',validateArticle,insertResource)
router.get('/getAllArticles',getAllArticle)

module.exports = router