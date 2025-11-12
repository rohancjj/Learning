const express = require('express')
const contactRoutes = require('./routes/contactRoutes')
const errorHandler = require('./middleware/errorhandler')
const dotenv = require('dotenv').config()
const errorhandler = require('./middleware/errorhandler')
const app = express()
const PORT = process.env.PORT || 5000
app.use(express.json())

app.use("/api/contacts",contactRoutes)
app.use(errorhandler)

app.listen(PORT,()=>{
    console.log(`server is running on PORT ${PORT}`);
    
})
