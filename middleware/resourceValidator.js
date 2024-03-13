module.exports = {
    validateArticle:(req,res,next)=>{
        const {title,image,category,article,secretKey} = req.body
        if(!title) return res.status(400).json({message:"No title found"})
        if(!image) return res.status(400).json({message:"No image found"})
        if(!category) return res.status(400).json({message:"No category Found"})
        if(!article) return res.status(400).json({message:"No Article Description found"})
        if(!secretKey) return res.status(400).json({message:"No Secret Key Found"})

        const realSecretKey = process.env.SECRET_KEY
        if(realSecretKey !== secretKey) return res.status(400).json({message:"Secret Key Doesnot Match"})
        delete req.body.secretKey
        next()
    },
    validateFAQ:(req,res,next)=>{
        const {category,question,answer} = req.body
        if(!category) return res.status(400).json({message:"No category Found"})
        if(!question) return res.status(400).json({message:"No Question Found"})
        if(!answer) return res.status(400).json({message:"No Answer Found"})
        next()
    }
}