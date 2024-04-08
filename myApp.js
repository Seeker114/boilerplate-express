let express = require('express');
let app = express();


let path = __dirname + "/public"
app.use("/public", express.static(__dirname + "/public"));

app.get("/json", function(req, res) {
  res.json({ message: "Hello json" });
});



































 module.exports = app;
