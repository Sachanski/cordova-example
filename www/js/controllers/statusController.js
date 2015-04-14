app.controller('StatusController', function($scope, statuses, CordovaService) {
	$scope.statuses = statuses;
	CordovaService.watchHeading(function(heading) {
		$scope.$apply(function() {
			$scope.heading = heading;
		});
	});
	CordovaService.watchAcceleration(function(acceleration) {
		$scope.$apply(function() {
			$scope.acceleration = acceleration;
		});
	});
});
