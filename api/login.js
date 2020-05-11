var express = require("express");
var nodemailer = require("nodemailer");

var router = express.Router();
var jwt = require("jsonwebtoken");
var User = require("../Model/user");
var config = require("../db/jwtkey");

async function sendMail(email) {
   console.log(email)
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "muhammadhamaddogar@gmail.com", // generated ethereal user
      pass: "muhammadhamaddogar234", // generated ethereal password
    },
  });

  // send mail with defined transport object
  await transporter.sendMail({
    from: '"onlineEnrollmentSystem 👻" <foo@example.com>', // sender address
    to: email, // list of receivers
    subject:'Welcome to OES Technologies -  Augmented Reality Workshop',
                    text:'Welcome to Online Enrollment  Technologies. We offers  best best courses expertise in the latest Technalogy, Augmented Reality and Virtual Reality for Android, iOS, Google Cardboard, GearVR and more.',
                    html:'<div style="margin:0;padding:0;background-color:#F8F8F8;border:1px solid #ddd">   <img src="cid:image1@johnson.com" width="100%">   <div style="height:1%;"></div>   <div style="border-radius:5px;text-align:justify;padding:15px;box-shadow: 0px 0px 10px 1px #888888;background-color:#FFF;margin:0 auto;font:16px Helvetica,Arial,sans-serif;line-height:1.5;color:#848484;"> <b>Hello , Conguratualtion  Successfully  You have Enrollemnt our course  please login and  learn more with us</b> <br> Your Email :courseujoin@gmail.com<br> Password:2351!$!@$<br/>get your All course     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Welcome to OES Technologies.   We offers market-leading expertise in the latest 3D, Augmented Reality and Virtual Reality for Android, iOS, Google Cardboard, GearVR and more..      <br><br>      <table border="0" cellspacing="0" cellpadding="0" style="margin:0 auto;border-bottom:1px solid #cee3ed;padding:0;background-color:rgba(236,240,241,0.3);">  <caption style="font-size:20px;color:#005999;font-weight:bold;background:rgba(236,240,241,0.3);border-top:1px solid #cee3ed;">How to use</caption>         <tbody>            <tr>               <td width="60"></td>               <td width="160" valign="middle">                  <div style="padding:0 0 0.5em;color:#699bbf;font:bold 16px Helvetica,Arial,sans-serif"><img style="border: 1px solid #cee3ed" src="cid:image2@johnson.com" width="130px"></div>               </td>               <td width="16"></td>               <td width="364" valign="top" style="padding:1.5em 0">                  <table cellpadding="0" cellspacing="0" border="0" style="margin:0;border:0;padding:0;color:#8d9ba6;font:15px Helvetica,Arial,sans-serif;line-height:1.5">                     <tbody>                        <tr>                           <td width="24" valign="top" style="margin:0;padding:4px 0 0;font-weight:bold;color:#005999">1.</td>                           <td valign="top" style="margin:0;padding:0 0 1.25em">                              <span style="font-weight:bold;color:#005999" target="_blank"> Download Android app from google play store</span><br>                              <span style="font-size:13px"><a href="#" style="color:inherit;">Play store link</a></span>                           </td>                        </tr>                        <tr>                           <td width="24" valign="top" style="margin:0;padding:4px 0 0;font-weight:bold;color:#005999">2.</td>                           <td valign="top" style="margin:0;padding:0">                              <span style="font-weight:bold;color:#005999" target="_blank">Download and Print</span><br>                              <span style="font-size:13px">Download and print adjacent image on A4 paper (Either Color/Black & White print).</span>                           </td>                        </tr>                        <tr>                           <td width="24" valign="top" style="margin:0;padding:4px 0 0;font-weight:bold;color:#005999">3.</td>                           <td valign="top" style="margin:0;padding:0">                              <span style="font-weight:bold;color:#005999" target="_blank">Place the Marker</span><br>                              <span style="font-size:13px">Place the printed image on the Floor</span>                           </td>                        </tr>          <tr>                           <td width="24" valign="top" style="margin:0;padding:4px 0 0;font-weight:bold;color:#005999">4.</td>                           <td valign="top" style="margin:0;padding:0">                              <span style="font-weight:bold;color:#005999" target="_blank">Transform your space to luxury</span><br>                              <span style="font-size:13px">Open Johnson Tiles AR app and go to "Transform your space to luxury".</span>                           </td>                        </tr>           <tr>                           <td width="24" valign="top" style="margin:0;padding:4px 0 0;font-weight:bold;color:#005999">5.</td>                           <td valign="top" style="margin:0;padding:0">                              <span style="font-weight:bold;color:#005999" target="_blank">Scan the Marker</span><br>                              <span style="font-size:13px">As camera feed opens in the app, scan the printed image and it will show tiles on top of it. </span>                           </td>                        </tr>          <tr>                           <td width="24" valign="top" style="margin:0;padding:4px 0 0;font-weight:bold;color:#005999">6.</td>                           <td valign="top" style="margin:0;padding:0">                              <span style="font-weight:bold;color:#005999" target="_blank">Select tiles from the catalogue</span><br>                              <span style="font-size:13px"> Use other features from the right panel for a complete experience.</span>                           </td>                        </tr>                     </tbody>                  </table>               </td>               <td width="60"></td>            </tr>         </tbody>      </table>   </div>   <hr>   <div style="height:3%;"></div>   <div>      <div style="height:90px;margin:0 auto;text-align:center;">         <span style="margin:0;border:0;padding:0;color:#8d9ba6;font:20px Helvetica,Arial,sans-serif;line-height:1.5;margin-right:50px;">Follow us on</span>         <a href="http://www.youtube.com/hrjohnsonindia1" target="_blank"><img width="28px" src="cid:image3@johnson.com"></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://twitter.com/Hrjohnsonindia" target="_blank"><img width="28px" src="cid:image4@johnson.com"></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://www.facebook.com/HRJIndia" target="_blank"><img width="28px" src="cid:image5@johnson.com"></a><br>         <div style="height:15px;"></div>         <a style="color:#E42C33;padding:5px;background:#F8F8F8;" href="http://www.hrjohnsonindia.com/" target="_blank">http://www.hrjohnsonindia.com/</a>      </div>   </div></div>',
                   // html body
                   
  });
}

router.post("/signin", function (req, res) {
  User.findOne({
    email: req.body.email,
    password: req.body.password,
  }).then((user) => {
    if (user) {
      jwt.sign({ user }, config.secretKey, (err, token) => {
        res.json({ success: true, data: "Bearer " + token });
      });
    } else {
      return res.json({ success: false, data: "User  is not Found" });
    }
  });
});

router.get("/get-all", function (req, res) {
  User.find()
    .then((data) => res.json({ success: true, data: data }))
    .catch((err) => res.json({ success: false, data: err }));
});

router.get("/confirm-user", function (req, res) {
  User.findById(req.query.userId, function (err, doc) {
    if (err) {
      console.log(err);
      return res.status(500).json({ success: false, data: err });
    }
    sendMail(doc.email);
    doc.isConfirmedByAdmin = true;
    doc
      .save()
      .then(() => res.json({ success: true }))
      .catch((err) => {
        console.log(err);
        res.status(500).json({ success: false, data: err });
      });
  });
});

module.exports = router;
