module.exports.sendEmail = (body, res) =>
{
  const emailConfig = require('../environment/emailConfig');
  const smtpServer = emailConfig.smtpServer;
  const emailSender = emailConfig.emailSender;
  const emailReceiver = emailConfig.emailReceiver;

  var nodemailer = require('nodemailer');
  var transporter = nodemailer.createTransport({
    host: smtpServer,
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: emailSender, // your domain email address
      pass: 'edite_this' // your password
    }
  });
  var mailOptions = {
    from: emailSender,
    to: emailReceiver,
    subject: "New message from " + body.name + " " + body.surnames,
    text: body.message
  };


  transporter.sendMail(mailOptions, function (error, info)
  {
    let result = 0;
    if (error)
    {
      result = error;
    } else
    {
      result = info;
    }
res.send(result);
  });


};
