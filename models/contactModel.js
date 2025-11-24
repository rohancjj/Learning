const mongoose = require('mongoose')

const contactSchema = mongoose.Schema({
    name:{
        type: String,
        required: [true,"please add the contact name"]

    },
    email:{
        type: String,
        required: [true,"please add the contact name"]
    },
    phone:{
        type: String,
        require:[true,"please add the contact email address"]
    }
},{
    timestamps:true,
})
module.exports = mongoose.model("Contact",contactSchema)