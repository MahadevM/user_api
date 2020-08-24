import { User } from '../models/Users';
 

const nodemailer = require("nodemailer");


const createuser = async (req, res, next) => {


  async function main() {
        let testAccount = await nodemailer.createTestAccount();
        let transporter = nodemailer.createTransport({
          host: "smtp.ethereal.email",
          port: 587,
          secure: false, 
         auth: {
            user: testAccount.user,
            pass: testAccount.pass, 
          },
        });
        let info = await transporter.sendMail({
          from: "mahadevmirasdar@gmail.com", 
          to: "mahadevmirasdar123@gmail.com", 
          subject: "Hello ✔", 
          text: "Hello world?",
        });
         console.log("Message sent: %s", info);
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
      }

     


  
      
     

    try {
    let { name, email, Communication_Address } = req.body;
   
       const payload = {
             name:name,
             email:email,
             Communication_Address:Communication_Address,
             profile_image:req.file.path
        }
        const newregister = new User(payload);
        await newregister.save();

        main().catch(console.error);
  
        return res.send({
            status: 200,
            success: true,
            data: newregister,
            message: "new created Added"
        })

    } catch (err) {
        console.log("err", err);
        return res.status(500).json({
            success: false,
            message: "server error"
        });
    }
};





module.exports = { createuser };