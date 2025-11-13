const asyncHandler = require("express-async-handler")

const getContacts = asyncHandler(async (req,res)=>{
    res.status(200).json({message: "get all contacts"})
})


const createContact = asyncHandler(async (req,res)=>{
    console.log("the request body is :",req.body);

    const {name,email,phone} = req.body
    if(!name || !email || !phone){
        res.status(400);
        throw new Error("all filed are mandatory ")
    }
    
    res.status(201).json({message: "Create contacts"})
})
const getContact = asyncHandler(async (req,res)=>{
    res.status(201).json({message: `get contacts for ${req.params.id}`})
})
const updateContact = asyncHandler(async (req,res)=>{
    res.status(201).json({message: `update contacts for ${req.params.id}`})
})
const deleteContact = asyncHandler(async (req,res)=>{
    res.status(201).json({message: `delete contacts for ${req.params.id}`})
})

module.exports = {getContacts,getContact,createContact,updateContact,deleteContact}