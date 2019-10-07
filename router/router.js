module.exports = function (app) {

	var express = require("express");
	var router = express.Router();

	const users = require('../controller/controller.js');

	var path = __basedir + '/views/';

	router.use(function (req, res, next) {
		console.log("/" + req.method);
		next();
	});

	app.get('/', (req, res) => {
		res.sendFile(path + "index.html");
	});

	// Save a User to MongoDB


	app.get("/item/retrieve/:item", (req, res) => {
		if (req.params.item != "all") {
			// Retrieve  Item
			users.findId(res, req.params.item)
		}
		else {
			// Retrieve all Item
			users.findAll(res)
		}

	})
	app.post('/item/create', (req, res) => {
		users.save(req.body, res)

	});

	app.get('/item/delete/:id', (req, res) => {
		users.delete(req.params.id, res)
	});

	app.get('/item/update/:id', (req, res) => {
		users.update(req.params.id, res)
	});

}