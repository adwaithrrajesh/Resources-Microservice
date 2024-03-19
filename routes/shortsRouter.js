const express = require('express')
const router  = express.Router()
const {insertShorts,getAllShorts,updateShorts, deleteShorts, fetchShort, getAllShortCategories} = require('../controller/shortsController')
const {shortsValidator} = require('../middleware/shortsValidator')


router.post('/insertShorts',shortsValidator,insertShorts)
router.patch('/updateShorts',shortsValidator,updateShorts)
router.delete('/deleteShorts',deleteShorts)

// Get 
router.get('/getAllShorts',getAllShorts)
router.get('/fetchShort/:shortId',fetchShort)
router.get('/getAllcategories',getAllShortCategories)




module.exports = router