const express = require('express')
const router  = express.Router()
const {insertResource, getAllArticle, getArticleUsingId} = require('../controller/resourceController')
const {validateArticle} = require('../middleware/resourceValidator')

router.post('/insertResource',validateArticle,insertResource)
router.get('/getAllArticles',getAllArticle)
router.get('/getArticleUsingId/:_id',getArticleUsingId)

module.exports = router