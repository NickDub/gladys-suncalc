const Promise = require('bluebird');
const SunCalc = require('suncalc');

module.exports = function illumination() {
	var dataToReturn = {};

	//get position of the moon (altitude and azimuth)
	var moonIllu = SunCalc.getMoonIllumination(new Date());

	//get moon fraction (illuminated fraction of the moon; varies from 0.0 (new moon) to 1.0 (full moon))
	dataToReturn.fraction = moonIllu.fraction;

	//get moon phase (moon phase; varies from 0.0 to 1.0, described below)
	dataToReturn.phase = moonIllu.phase;

	//get moon angle (midpoint angle in radians of the illuminated limb of the moon reckoned eastward from the north point of the disk; the moon is waxing if the angle is negative, and waning if positive)
	dataToReturn.angle = Math.round(moonIllu.angle * 180 / Math.PI * 100) / 100;

	return Promise.resolve(dataToReturn);
};