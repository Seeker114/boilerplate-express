require('dotenv').config();
let express = require('express');
let app = express();
var bodyParser = require('body-parser')


app.use(function(req, res, next) {
  console.log(req.method + " " + req.path + " - " + req.ip);
  next();
})

let path = __dirname + "/public"
app.use("/public", express.static(__dirname + "/public"));

app.use("/name", bodyParser.urlencoded({extended: true}))

app.get("/now",function(req, res, next ) {
req.time = new Date().toString();
next()
},(req, res) => {
res.send({time: req.time})
});

app.route("/name").get((req, res) => {
  let firstname = req.query.first;
  let lastname = req.query.last;
  res.json({name : firstname +' '+ lastname });
}).post ((req, res) => {
  let firstname = req.body.first;
  let lastname = req.body.last;
  res.json({name : firstname +' '+ lastname });
});


app.get("/", function(req, res) {
  res.send("Hello World")
})

app.get("/json", function(req, res) {
  var response = "Hello json"
  if (process.env.MESSAGE_STYLE == "uppercase") {
    response = response.toUpperCase();
  } 
  res.json({ message: response });
});







































 module.exports = app;
