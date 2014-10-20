var Mongoose = require('mongoose'),
	Schema = Mongoose.Schema,
	ObjectId = Mongoose.Types.ObjectId;

var schema = new Schema({
	name: { type: String, required: true, uniqueness: true },
	health: { type: Number, default: 0, max: 50, min: -100 },
	appendages: [{ type: String, default: ['Torso', 'Head', 'Arms', 'Legs']}],
	attackLevel: { type: Number, max: 10, min: 1, default: 1 },
	kills: { type: Number, default: 0 }
});

module.exports = Mongoose.model('Zombie', schema);