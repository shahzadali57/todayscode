const mongoose = require("mongoose")

const postSchema = mongoose.Schema(
    {
        name:String,
        class:String,
    }
)

const postModel = mongoose.model("posts", postSchema)
module.exports = postModel;