var app = require('express')()
// var app = express();

app.get('/users', function (req, res) {
  res.send('zé');
});

app.listen(5000, function () {
  console.log('Example app listening on port 5000!');
});
