// const express= require('express');
const Contact=require('../models/contact')
const asyncHandler= require('express-async-handler')
// const router=express.Router();

const getContacts= asyncHandler(async (req, res)=>{
    const contact=await Contact.find({user_id:req.user.id});
    // console.log(res)
    res.status(200).send(contact)
});

const createContact=asyncHandler(async(req, res)=>{
    const{name, email, phone}=req.body;
    if(!name || !email||!phone){
        res.status(404)
        throw new Error('all the fields are mandatory')
    }
    const contact= await Contact.create({
        user_id:req.user.id,
        name,
        email,
        phone,
    });

    res.status(201).send(contact)
})
const getsinglecontact=asyncHandler(async(req, res)=>{
    const contact= await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error('contact not found')
    }
    res.status(200).json(contact);
})
const updateContact=asyncHandler(async(req, res)=>{
    const contact= await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error('contact not found')
    }
    if(contact.user_id.toString()!== req.user.id){
        res.status(403);
        throw new Error("Can't update")
    }
    const updatedContact= await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
            new:true
        }
    );
    res.status(200).json(updatedContact);
})
const deleteContacts=asyncHandler(async(req, res)=>{
    const contact= await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error('contact not found')
    }
    if(contact.user_id.toString()!== req.user.id){
        res.status(403);
        throw new Error("Can't update")
    }
    await Contact.deleteOne({_id:req.params.id});
    res.status(200).send(contact)
});

module.exports = {
    getContacts,
    createContact,
    getsinglecontact,
    updateContact,
    deleteContacts,
  };