const express = require("express");
const router = express.Router();
const db = require("../config/db");
const User = require("../models/user");

router.get('/', (req,res)=>{
     User.findAll()
     .then(users => console.log(users))
     .catch((err)=>{
         console.log(err.message);
     })
});

module.exports = router;