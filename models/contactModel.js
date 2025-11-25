const mongoose = require('mongoose')

const contactSchema = mongoose.Schema({
    user_id:{
        typr:mongoose.Schema.Types.ObjectId,
        required: true,
        ref:"User"
    },
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