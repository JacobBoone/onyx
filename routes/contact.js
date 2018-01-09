var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* GET contact page. */
router.get('/', function(req, res, next) {
  res.render('contact', { title: 'Request an Appointment' });
});


router.post('/send', function(req, res, next){
	var transporter = nodemailer.createTransport({
		service: 'Gmail',
		auth: {
			user: 'onyxholisticservices@gmail.com',
			pass: 'xjbjxjvtbtitwmtt'
		}
	})

    var mailOptions = {
        from: '<onyxholisticservices@gmail.com>',
        to: 'onyxholisticservices@gmail.com',
        subject: 'Contact Form',
        text: 'Name: ' + req.body.name + '\n' + 'Email: ' + req.body.email + '\n' + 'Reason for Contact: ' + req.body.reason + '\n' + 'Phone Number: ' + req.body.callme  + '\n' + 'Message: ' + req.body.message
    };

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            res.render('contact', {
                title: 'Contact Error',
                msg: 'Error occured, message not sent.',
                err: true,
                page: 'contact'
            });
        } else {
            res.render('contact', {
                title: 'Contact Sent...',
                msg: 'Message sent! Thank you.',
                err: false,
                page: 'contact'
            });
        }
    });
});


module.exports = router;