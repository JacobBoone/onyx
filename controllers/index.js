var indexController = {
	index: function(req, res) {
		res.render('index');
	},
	contact: function(req, res) {
		res.render('contact');
	},
	contactemail: function(req, res) {
		res.render('contactemail');
	},
	birth: function(req, res) {
		res.render('birth');
	},
	psychk: function(req, res) {
		res.render('psychk');
	},
	essentialoils: function(req, res) {
		res.render('essentialoils');
	},
	aboutme: function(req, res) {
		res.render('aboutme');
	},
	test: function(req, res) {
		res.render('test');
	},
	

};

module.exports = indexController;