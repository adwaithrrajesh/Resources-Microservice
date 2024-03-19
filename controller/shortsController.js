const shortsModel = require('../database/model/shortsModel')

module.exports = {
    insertShorts:async(req,res)=>{
        try {
            const shorts = req.body
            const newShort = new shortsModel(shorts)
            const insertShort = await newShort.save()
            if(!insertShort) return res.status(400).json({message:"Unable to insert shorts"})
            return res.status(200).json({message:"Shorts created successfully"})
        } catch (error) {
            return res.status(500).json({message:"Internal Server Error"})
        }
    },
    updateShorts: async(req,res)=>{
        try {
            const shorts = req.body
            const shortId = req.body.shortId
            if(!shortId) return res.status(400).json({message:"Short Id doesnot found"})
            delete shorts.shortId
            const updateShort = await shortsModel.findOneAndUpdate({_id:shortId},{$set:shorts})
            if(!updateShort) return res.status(400).json({message:"Unable to update the shorts"})
            return res.status(200).json({message:"Shorts Updated successfully"})
        } catch (error) {
            return res.status(500).json({message:"Internal server error"})
        }
    },
    deleteShorts: async(req,res)=>{
        try {
            const {shortId,secretKey} = req.body
            if(!shortId) return res.status(400).json({message:"Short Id not found"})
            if(!secretKey) return res.status(400).json({message:"Secret key not found"})
            if(secretKey !== process.env.SECRET_KEY) return res.status(400).json({message:"Secret key is not matching"})

            const deleteShort = await shortsModel.findOneAndDelete({_id:shortId})
            if(!deleteShort) return res.status(400).json({message:"Unable to delete the shorts"})
            return res.status(200).json({message:"Shorts deleted successfully"}) 
        } catch (error) {
            return res.status(500).json({message:"Internal Server Error"})
        }
    },
    getAllShorts:async(req,res)=>{
        try {
            const allShorts = await shortsModel.find()
            return res.status(200).json({allShorts,message:"All shorts fetched successfully"})
        } catch (error) {
            return res.status(500).json({message:"Internal server error"})
        }
    },
    fetchShort:async(req,res)=>{
        try {
            const {shortId} = req.params
            if(!shortId) return res.status(400).json({message:"Short Id doesn't present in this request"})
            const shorts = await shortsModel.findOne({_id:shortId})
            if(!shorts)return res.status(400).json({message:"Unable to find the shorts"})
            return res.status(200).json({shorts,message:"Short Details fetched successfully"})
        } catch (error) {
            return res.status(500).json({message:"Internal server error"})
        }
    },
    getAllShortCategories:async(req,res)=>{
        try {
            const shorts = await shortsModel.find()
            const filteredShorts = shorts.map(item=>{
               return {
                category:item.category
               }
            })
            const categories = Array.from(new Set(filteredShorts.map(JSON.stringify))).map(JSON.parse)
            return res.status(200).json({categories,message:"Categories fetched successfully"})
        } catch (error) {
            return res.status(500).json({message:"Internal server error"})
        }
    }
}