var express = require('express');
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');



var indexController = require('./controllers/index.js');
var contactController = require('./controllers/contact.js')

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));


//pages
app.get('/', indexController.index);
app.get('/contact', indexController.contact);
app.get('/contactemail', indexController.contactemail);
app.get('/birth', indexController.birth);
app.get('/psychk', indexController.psychk);
app.get('/essentialoils', indexController.essentialoils);
app.get('/aboutme', indexController.aboutme);


//contact form



var server = app.listen(process.env.PORT || 8379, function() {
	console.log('Express server listening on port ' + server.address().port);
});
