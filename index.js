const informations = require('./information.js');

var cowsay = require("cowsay");

console.log(cowsay.say({
	text : `Hi my name is ${informations.name} from ${informations.campus} Campus!`,
}));