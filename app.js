var express = require('express');
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');


var routes = require('./routes/index');
var aboutme = require('./routes/aboutme');
var contact = require('./routes/contact');
// var indexController = require('./controllers/index.js');
// var contactController = require('./controllers/contact.js')

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));


//pages
app.use('/', routes);
app.use('/aboutme', aboutme)
app.use('/contact', contact);

// app.get('/', indexController.index);
// app.get('/contact', indexController.contact);
// app.get('/aboutme', indexController.aboutme);



var server = app.listen(process.env.PORT || 8370, function() {
	console.log('Express server listening on port ' + server.address().port);
});
