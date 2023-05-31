import express from "express";
import user from "../models/userSchema.js";

const router = express.Router();

router.post("/create", async (req, res) => {
    const { firstname, email, lastname, date, salary, status } = req.body.data;
    
    if (!firstname || !email || !lastname || !date || !salary || !status) {
      return res.status(402).json({ msg: "Please fill all field" });
    }

  try {
    const users = await user.findOne({ email: email });

    if (users) {
      res.status(422).json({ msg: "user already exist" });
    } 
    else {
      const NewUser = new user({
        firstname,
        email,
        lastname,
        date,
        salary,
        status,
      });

      await NewUser.save();
      res.status(201).json({ msg: "succesfull" });

    }
  } catch (e) {
    console.log(e);
    return res.status(500).json({ msg: 'Server error' });
  }
});

router.delete('/:userId', async (req, res) => {
    const userId = req.params.userId;
  
    try {
      const deletedUser = await user.findByIdAndDelete(userId);
  
      if (!deletedUser) {
        return res.status(404).json({ msg: 'User not found' });
      }
  
      return res.json({ msg: 'User deleted successfully' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ msg: 'Server error' });
    }
  });

 

  router.get('/',async(req,res)=>{
    try {
        const getUsers = await user.find({})
        res.send(getUsers)
    } catch (e) {
        console.log(e);
        return res.status(500).json({ msg: 'server error '})
    }
  })

export default router;
