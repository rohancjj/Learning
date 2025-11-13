const mongoose = require('mongoose')

const connectDb = async()=>{
    try {
        const coonect =await mongoose.connect(process.env.CONNECTION_STRING)
        console.log("database conected",
           
        );
        
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}
module.exports = connectDb