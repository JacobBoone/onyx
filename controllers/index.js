var indexController = {
	index: function(req, res) {
		res.render('index');
	},
	contact: function(req, res) {
		res.render('contact');
	},
	contactemail: function(req, res) {
		res.render('contactemail');
	}
};

module.exports = indexController;