module.exports = function(sails) {
	var install = require('./lib/install.js');
	var sunPos = require('./lib/sun/position.js');
	var moonPos = require('./lib/moon/position.js');
	var moonIllu = require('./lib/moon/illumination.js');

	return {
		install : install,
		sun : {
			position : sunPos
		},
		moon : {
			position : moonPos,
			illumination : moonIllu
		}
	};
};