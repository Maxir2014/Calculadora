const mongoose = require('mongoose')

const resultSchema = new mongoose.Schema(
    {
        value : Number,
    },
    {
        timestamps:{
            createdAt: "created_ad",
            updatedAt: "updated_ad"
        }
    }
)

module.exports = mongoose.model("result", resultSchema)