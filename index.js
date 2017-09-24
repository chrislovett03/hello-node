const express = require('express')
const app = express()

app.set('views', __dirname + '/views')
app.set('view engine', 'jade')
app.use(express.static(__dirname + '/public'))


//Define request response in root URL (/)
app.get('/', function(req, res) {
    res.render('home');
});


// app.get('/', function(req, res) {
//   res.send('Watch out for Irma!')
// })

// Launch listenting server on port 8081
app.listen(8081, function() {
  console.log('app listening on port 8081!')
})
