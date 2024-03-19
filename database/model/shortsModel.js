const mongoose = require('mongoose');
const { Schema } = mongoose;

const shortsSchema = new Schema({
    category:String,
    video:String,
    title:String,
    createdAt: {
        type: Date,
        default: Date.now
      }
});

module.exports = mongoose.model('Shorts', shortsSchema);