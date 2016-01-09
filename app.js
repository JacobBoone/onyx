var express = require('express');
var bodyParser = require('body-parser');

// var nodemailer = require('nodemailer');

// var smtpTransport = nodemailer.createTransport("SMTP",{
//    service: "Gmail",  // sets automatically host, port and connection security settings
//    auth: {
//        user: "example@example.com",
//        pass: "example"
//    }
// });


// smtpTransport.sendMail({  //email options
//    from: "Sender Name <email@gmail.com>", // sender address.  Must be the same as authenticated user if using GMail. ME- so can i make this the user who submitted the form?
//    to: "Receiver Name <receiver@email.com>", // receiver
//    subject: "Emailing with nodemailer", // subject
//    text: "Email Example with nodemailer" // body
// }, function(error, response){  //callback
//    if(error){
//        console.log(error);
//    }else{
//        console.log("Message sent: " + response.message);
//    }
   
//    smtpTransport.close(); // shut down the connection pool, no more messages.  Comment this line out to continue sending emails.
// });





var indexController = require('./controllers/index.js');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', indexController.index);
app.get('/contact', indexController.contact);
app.get('/contactemail', indexController.contactemail);
app.get('/birth', indexController.birth);
app.get('/psychk', indexController.psychk);
app.get('/essentialoils', indexController.essentialoils);
app.get('/aboutme', indexController.aboutme);



var server = app.listen(8379, function() {
	console.log('Express server listening on port ' + server.address().port);
});
