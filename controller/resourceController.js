const articleModel = require('../database/model/articleModel')

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
    }
}