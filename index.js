var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.json({ data: [1, 2, 3, 4] });
});

app.listen(3000, function() {
  console.log("Running on port 3000");
})
