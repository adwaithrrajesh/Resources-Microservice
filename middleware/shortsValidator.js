module.exports = {
    shortsValidator:(req,res,next)=>{
        const {title,video,category,secretKey} = req.body
        if(!title) return res.status(400).json({message:"Title not found"})
        if(!video) return res.status(400).json({message:"Video not found"})
        if(!category) return res.status(400).json({message:"Category not found"})
        if(!secretKey) return res.status(400).json({message:"Secret Key not found"})
        const realSecretKey = process.env.SECRET_KEY
        if(realSecretKey !== secretKey) return res.status(400).json({message:"Secret Key Doesnot Match"})
        delete req.body.secretKey
        next()
    }
}