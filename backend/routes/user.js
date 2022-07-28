const User = require("../models/User");
const {Router} = require("express");
const userRouter = Router();

userRouter.get("/:userId", async(req, res)=>{
    const {userId} = req.params;
    const user = await User.findById(userId);
    if(user){
        res.send(user)
    }
    else{
        res.status(401).send({message: "User Not Found"})
    }
})
module.exports = userRouter