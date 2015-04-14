app.controller('FilesController', function($scope, CordovaService) {
	$scope.files = [];
	CordovaService.getAllFiles(function(files) {
		$scope.$apply(function() {
			$scope.files = files;
		});
	});

	$scope.saveFile = function() {
		CordovaService.saveFile($scope.filename, $scope.contents, function(file) {
			$scope.$apply(function() {
				$scope.files.push({
					name: file.name,
					uri: file.nativeURL
				});
			});
		});
		$scope.filename = '';
		$scope.contents = '';
	};

	$scope.deleteFile = function(file) {
		CordovaService.removeFile(file.name, function() {
			var ind = $scope.files.indexOf(file);
			$scope.$apply(function() {
				$scope.files.splice(ind, 1);
			});
		});
	};
});