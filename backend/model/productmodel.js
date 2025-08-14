const mongoose = require('mongoose')
const productSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: String,
    status: String, 
    imageurl:String,
});
module.exports = mongoose.model('products', productSchema)
