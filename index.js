module.exports = function(sails) {

	var sunPos = require('./lib/sun/position.js');
	var moonPos = require('./lib/moon/position.js');
	var moonIllu = require('./lib/moon/illumination.js');

	return {
		sun : {
			position : sunPos
		},
		moon : {
			position : moonPos,
			illumination : moonIllu
		}
	};
};