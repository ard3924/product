const express = require('express');
const router = express.Router();
const userModel = require('../model/userModel');
router.use(express.json());
router.use(express.urlencoded({ extended: true }));
//post data
router.post('/login', async (req, res) => {
    try {
        const user = await userModel.findOne({ email: req.body.email });
        if (!user) {
            return res.status(404).send({ message: "User not found" })
        }
        if(user.password===req.body.password){
            return res.status(200).send({message:"Login Successfull"})
        }
        else {
            return res.status(401).send({ message: "Invalid Password" })
        }
    } 
    catch (error) {
        console.error(error)
        res.status(500).send({message:"error"});
    }
})
module.exports = router;



