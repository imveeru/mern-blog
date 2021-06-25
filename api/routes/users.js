const router=require('express').Router();
const User=require('../models/User');
const bcrypt = require('bcrypt');

//update

router.put('/:id',async(req,res)=>{

    if(req.body.userId === req.params.id){
        if(req.body.password){
            const salt = await bcrypt.genSalt(10);
            req.body.password=await bcrypt.hash(req.body.password,salt)
        }
        try{
            const updatedUser = await User.findByIdAndUpdate(req.params.id,{
                $set:req.body
            },{new:true}); // send the updated user as response
            res.status(200).json(updatedUser)
        } catch(err){
            res.status.json(err)
        }
    }else{
        res.status(401).json('You can only update your account!');
    }
    
});

//delete

module.exports=router;