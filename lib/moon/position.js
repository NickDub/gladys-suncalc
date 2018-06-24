const Promise = require('bluebird');
const SunCalc = require('suncalc');

module.exports = function position(options) {
	if (options === null) {
		return Promise.reject(new Error(`NO_OPTIONS_DEFINED`));
	}

	var dataToReturn = {};

	//get position of the moon (altitude and azimuth)
	var moonPos = SunCalc.getMoonPosition(new Date(), options.latitude, options.longitude);

	//get moon altitude in degrees (0 at the horizon and 90 at the zenith)
	dataToReturn.altitude = Math.round(moonPos.altitude * 180 / Math.PI * 100) / 100;

	//get moon azimuth in degrees (0 is north and 135 is southeast)
	dataToReturn.azimuth = Math.round((moonPos.azimuth + Math.PI) * 180 / Math.PI % 360 * 100) / 100;

	//get moon distance (in kilometers)
	dataToReturn.distance = moonPos.distance;

	//get moon parallacticAngle (parallactic angle of the moon)
	dataToReturn.parallacticAngle = Math.round(moonPos.parallacticAngle * 180 / Math.PI * 100) / 100;

	return Promise.resolve(dataToReturn);
};