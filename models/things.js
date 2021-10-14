const mongoose = require('mongoose')

const thingSchema = mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, reauired: true },
    imageUrl: { type: String, reauired: true },
    userId: { type: String, required: true },
    price: { type: Number, required: true }
})

module.exports = mongoose.model('Thing', thingSchema);