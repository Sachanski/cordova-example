app.controller('CameraController', function($scope, CordovaService) {
	$scope.getPicture = function(browse) {
		CordovaService.takePicture(function(res) {
			$scope.src = 'data:image/jpeg;base64,' + res;
		}, browse);
	};
});