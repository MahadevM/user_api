import mongoose from 'mongoose';
 

//Schema
const userSchema = new mongoose.Schema({

    name: {
     type: String,
     required: true,
     unique: true,
     lowercase: true
   },
   email: {
     type: String,
     trim: true,
     lowercase: true,
     unique: true,
     required: true
   },
   profile_image:{
     type:String
   },
  
   Communication_Address:[{
       House_Number:{
        type: Number,
     required: true
     
       },
       Phone_Number:{
        type: Number,
        required: true
         
       },
       Locality:{
        type: String,
        required: true
       },
       City:{
        type: String,
        required: true
       },
       Pin:{
        type: Number,
        required: true
       },
       State:{
        type: String,
        required: true
       }
   }]
}, { timestamps: {} })
 

//Model
const User = mongoose.model('user', userSchema);

 


//Export Model
module.exports =  {User} ;