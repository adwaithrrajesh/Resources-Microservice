const mongoose = require('mongoose');
const { Schema } = mongoose;

const faqSchema = new Schema({
    category:String,
    question:String,
    answer:String,
    createdAt: {
        type: Date,
        default: Date.now
      }
});

module.exports = mongoose.model('FAQ', faqSchema);