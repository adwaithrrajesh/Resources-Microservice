const mongoose = require('mongoose');
const { Schema } = mongoose;

const articleSchema = new Schema({
    category:String,
    image:String,
    title: String,
    article: String,
    createdAt: {
        type: Date,
        default: Date.now
      }
});

module.exports = mongoose.model('Article', articleSchema);