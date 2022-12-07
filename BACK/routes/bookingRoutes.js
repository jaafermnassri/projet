const express = require('express')
const router = express.Router()
const Booking = require('../models/Booking')
const Foyer = require('../models/Foyer')


// apply a new booking 

router.post('/:idFoyer',isAuth(), async (req,res)=>{
    if(req.user.role === 'student'){
    try {
        const existUser = await Booking.findOne({ user: req.user._id });
        if (existUser) {
          return res.status(400).send({ msg: "User booked already" });
        }
        const newBooking = new Booking({...req.body,user:req.user._id,foyer:req.params.idFoyer})
        
        const bookedFoyer = await Foyer.findOneAndUpdate({_id:req.params.idFoyer},{ $inc:{maxCapacity:-1}},{ new: true}).populate("fullname","adresse")
        await bookedFoyer.save() // ,user:req.user._id,foyer:req.foyer._id
        await newBooking.save()
        res.send({...newBooking,bookedFoyer})
    } catch (error) {
        res.status(400).send(error); 
    }
}
else{res.status(401).send({msg:"Only students are allowed to book for a dorm"});}
})


// get bookings list 
router.get("/",isAuth(), async (req,res)=> {
    if(req.user.role === 'admin' || 'director'){
    try {
        const booksList = await Booking.find({})
        res.send(booksList)
    } catch (error) {
        res.status(400).send(error);
    }
}
else{res.status(401).send({msg:"You are not an Admin , go back !"});}
})

module.exports = router;