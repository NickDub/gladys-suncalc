var Promise = require('bluebird');
var SunCalc = require('suncalc');

module.exports = function position(options) {
	if (options === null) {
		return Promise.reject(new Error(`NO_OPTIONS_DEFINED`));
	}

	var dataToReturn = {};

	//get position of the sun (altitude and azimuth)
	var sunPos = SunCalc.getPosition(new Date(), options.latitude, options.longitude);

	//get sun altitude in degrees (0 at the horizon and 90 at the zenith)
	dataToReturn.altitude = Math.round(sunPos.altitude * 180 / Math.PI * 100) / 100;

	//get sun azimuth in degrees (0 is north and 135 is southeast)
	dataToReturn.azimuth = Math.round((sunPos.azimuth + Math.PI) * 180 / Math.PI % 360 * 100) / 100;

	return Promise.resolve(dataToReturn);
};