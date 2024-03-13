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
    }
}