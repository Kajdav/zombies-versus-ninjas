var Mongoose = require('mongoose'),
	Schema = Mongoose.Schema,
	ObjectId = Mongoose.Types.ObjectId;

var schema = new Schema({
	name: { type: String, required: true, uniqueness: true },
	health: { type: Number, default: 100, max: 150, min: 0 },
	weapon: { type: String, enum: ['Rhodesian fighting sticks', 'Nunchuck', 'Star', 'Dagger'], default: 'Dagger'},
	skills: [{ type: String, default: 'Skill-less' }],
	abilities: [{ type: String, default: 'Ability-less'}],
	kills: { type: Number, default: 0}
});

module.exports = Mongoose.model('Ninja', schema);