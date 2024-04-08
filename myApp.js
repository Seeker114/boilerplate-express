require('dotenv').config();
let express = require('express');
let app = express();



let path = __dirname + "/public"
app.use("/public", express.static(__dirname + "/public"));

app.get("/json", function(req, res) {
  var response = "Hello json"
  if (process.env.MESSAGE_STYLE == "uppercase") {
    response = response.toUpperCase();
  } 
  res.json({ message: response });
});





































 module.exports = app;
