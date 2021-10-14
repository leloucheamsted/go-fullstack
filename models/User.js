const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')
const userSchema = mongoose.userSchema({
    email: { type: String, required: true, unique: true }, // unaque pour empecher l'inscription plusierus fois avec la meme addresse
    password: { type: String, required: true },
})
userSchema.plugin(uniqueValidator);
module.exports = mongoose.model('User', userSchema);