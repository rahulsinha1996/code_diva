const { Schema, model } = require("mongoose")

const UserSchema = new Schema({
    name: {type: String , min : 3}, 
    username : String,
    email : String,
    password: String,
    mobile: Number,
})

const User = model("User", UserSchema);

module.exports = User;