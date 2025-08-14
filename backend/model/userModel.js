const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    user:{ type: String, required: true },
    email: String,
    password: String, 
});
module.exports = mongoose.model('users', userSchema)
