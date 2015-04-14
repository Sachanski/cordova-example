app.controller('GPSController', function($scope, CordovaService) {
	CordovaService.watchPosition(function(pos) {
		$scope.$apply(function() {
			$scope.position = pos;
		});
	});
});