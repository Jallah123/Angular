module.exports = function() {
	return {	
		restrict: 'E',
		templateUrl: 'tileTemplate.html',
		scope: {
			tile: '=',
			onSelect: '=?'
		},
		link: function(scope, element, attrs, controller){
			// Controller undefined??
			scope.selectTile = function(){
				console.log("link function");
				console.log(controller);
				//controller.selectTile2();
			}
		}
	};
};