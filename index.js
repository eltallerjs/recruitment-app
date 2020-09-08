const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true })) 
app.use(bodyParser.json()) 

app.get('/', function (req, res) {
  res.send('Follow the white Rabbit. We can only give you one word: "Avocado" and a URL: http://www.asf.com/blue. Maybe you find something if you send it as a `key`...')
})

app.post('/blue', function(req, res, next) {
  // console.log(req.body);
  var secretKey = JSON.stringify(req.body.key);
  console.log(secretKey);
  console.log(typeof(secretKey));
  if (secretKey !== "Avocado") {
    res.send('You shall not pass!');
  }
  else {
    res.end('LUuzUsj44HHGqgsffr3VYwjoyYIk2PgUDxXzEDFSaaQ pw: Eureka');
  }
})

app.listen(3000)
console.log('Running');
