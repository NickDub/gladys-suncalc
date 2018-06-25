module.exports = function() {
	var type = {
		name : 'Suncalc',
		service : 'suncalc'
	};

	return gladys.notification.install(type);
};