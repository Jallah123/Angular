module.exports = function() {
	return function(input, state) {
		return input.state == state;
	};
};