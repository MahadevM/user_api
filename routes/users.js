
import {createuser} from '../controllers/users';
 
 
const express = require("express");
const router = express.Router();
const multer = require('multer');



var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
      console.log(file);
      cb(null, file.originalname)
    }
  })
   
  var upload = multer({ storage: storage })

router.route("/user/create").post( upload.single('myFile'),createuser);

 

module.exports = router;