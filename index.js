var express = require('express'),
	Mongoose = require('mongoose'),
	port = 9009,
	app = express();

Mongoose.connect('mongodb://localhost/ninjaZombies');

var Ninja = require('./lib/ninja');
var Zombie = require('./lib/zombie');

var alfredBrains = new Zombie({
	name: 'Two-Leg Tony',
	kills: 2,
	appendages: ['Legs']
});
alfredBrains.save(function(err){
	if(err) throw err;
	console.log('Zombie Saved!');
});

var bumKicka = new Ninja({
	name: 'ChampyCan',
	weapon: 'Rhodesian fighting sticks',
	abilities: 'Round-house kick',
	kills: 99
});
bumKicka.save(function(err){
	if(err) throw err;
	console.log('Ninja Saved!');
})

app.get('/zombies', function(req, res){
	Zombie.find().exec(function(err, data){
		if(err) throw err;
		res.send(data);
	});
});
app.get('/zombies/:name', function(req, res){
	Zombie.find({name: req.params.name}).exec(function(err, data){
		if(err) throw err;
		res.send(data);
	});
});
app.get('/ninjas', function(req, res){
	Ninja.find().exec(function(err, data){
		if(err) throw err;
		res.send(data);
	});
});
app.get('/ninjas/:name', function(req, res){
	Ninja.find({name: req.params.name}).exec(function(err, data){
		if(err) throw err;
		res.send(data);
	});
});

app.listen(port, function(){
	console.log('Now listening on port ' + port);
});