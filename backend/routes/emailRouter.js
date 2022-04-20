const router = require('express').Router();
const sendEmail = require('../controller/sendEmail')

router.get('/', (req, res,) =>{res.json("Use me")})
router.post('/sendemail', (req, res) => {
  sendEmail.sendEmail(req.body, res)
})


module.exports = router
