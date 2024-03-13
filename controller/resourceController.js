const articleModel = require('../database/model/articleModel')
const FaqModel = require('../database/model/FaqModel')


module.exports={
    insertResource: async(req,res)=>{
        try {
            const article = req.body
            const insertArticle = new articleModel(article)
            const articleSaved = await insertArticle.save()
            if(!articleSaved) return res.status(400).json({message:"Unable to upload article"})
            return res.status(200).json({message:"Article Upload Successfully"})
        } catch (error) {
            return res.status(500).json({message:"Internal Server Error From Resource Microservice"})
        }
    },
    getAllArticle:async(req,res)=>{
        try {
            const allArticle = await articleModel.find()
            return res.status(200).json({allArticle})
        } catch (error) {
            return res.status(500).json({message:"Internal Server Error From Resource Microservice"})
        }
    },
    getArticleUsingId:async(req,res)=>{
        try {
            const {_id} = req.params
            const article = await articleModel.findOne({_id:_id})
            if(!article) return res.status(400).json({message:"Article Not found"})
            return res.status(200).json({article})
        } catch (error) {
            console.log(error)
            return res.status(500).json({message:"Internal Server Error"})
        }
    },
    updateArticle:async(req,res)=>{
        try {
            const article = req.body
            const articleId = req.body._id
            delete article._id
            // Update Article Details
            const updateArticle = await articleModel.findOneAndUpdate({_id:articleId},{$set:article},{new:true})
            if(!updateArticle) return res.status(400).json({message:"Unable to update article"})
            return res.status(200).json({updateArticle,message:"Article Updated Successfully"})
        } catch (error) {
            return res.status(500).json({message:"Internal Server Error"})
        }
    },

    // UPDATE FAQ
    insertFAQ: async(req,res)=>{
        try {
            const FAQ = req.body
            const insertFAQ = new FaqModel(FAQ)
            const inserted = await insertFAQ.save()
            if(!inserted) return res.status(400).json({message:"Unable to insert FAQ"}) 
            return res.status(200).json({message:"FAQ inserted successfully"})
        } catch (error) {
            return res.status(500).json({message:"Internal Server Error"})
        }
    },
    getAllFaq: async(req,res)=>{
        try {
            const faq = await FaqModel.find()
            return res.status(200).json({faq,message:"FAQ fetched successfully"}) 
        } catch (error) {
            return res.status(500).json({message:"Internal Server Error"}) 
        }
    },
    getFaqById:async(req,res)=>{
        try {
            const {_id} = req.params
            const getFAQ = await FaqModel.findOne({_id:_id})
            if(!getFAQ) return res.status(400).json({message:"Unable to fetch the FAQ"})
            return res.status(200).json({FAQ:getFAQ,message:"FAQ Fetched Successfully"})
        } catch (error) {
            return res.status(500).json({message:"Internal server error"})
        }
    },
    updateFAQ:async(req,res)=>{
        try {
            const faq = req.body
            const faqId = req.body._id
            delete faq._id
            // UPDATE FAQ
            const updateFaq = await FaqModel.findOneAndUpdate({_id:faqId},{$set:faq},{new:true})
            if(!updateFaq) return res.status(400).json({message:"Unable to update the faq"})
            return res.status(200).json({updateFaq,message:"FAQ updated successfully"})
        } catch (error) {
            return res.status(500).json({message:"Internal server error"})
        }
    }
}