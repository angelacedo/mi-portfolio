const router = require('express').Router();
const sendEmail = require('../controller/sendEmail')

router.post('/sendemail', (req, res) => {
  sendEmail.sendEmail(req.body, res)
})


module.exports = router
