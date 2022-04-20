const express = require('express');
const cors = require('cors')
const app = express()
app.use(cors())
app.use(express.json())

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:4200");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(require('./routes/emailRouter'))

app.listen(3000, () =>{
  console.log("Connected")
})
