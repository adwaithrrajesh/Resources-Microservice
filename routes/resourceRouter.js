const express = require('express')
const router  = express.Router()
const {insertResource, getAllArticle, getArticleUsingId, updateArticle, insertFAQ, getAllFaq, getFaqById, updateFAQ} = require('../controller/resourceController')
const {validateArticle, validateFAQ} = require('../middleware/resourceValidator')

router.post('/insertResource',validateArticle,insertResource)
router.get('/getAllArticles',getAllArticle)
router.get('/getArticleUsingId/:_id',getArticleUsingId)
router.patch('/updateArticle',validateArticle,updateArticle)

// FAQ
router.post('/insertFAQ',validateFAQ,insertFAQ)
router.get('/getAllFAQ',getAllFaq)
router.get('/getFAQbyID/:_id',getFaqById)
router.patch('/updateFAQ',validateFAQ,updateFAQ)


module.exports = router