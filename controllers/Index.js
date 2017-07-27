const BaseController = require('./Base');
const View = require('../views/Base');

module.exports = BaseController.extend({
	name: "Home",
	run: function(req, res, next) {
		var view = new View(res, 'index');
		view.render({ title: "test" });
	}
})

