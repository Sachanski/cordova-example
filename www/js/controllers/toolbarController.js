app.controller('ToolbarController', function($scope, $location) {
	$scope.buttons = [
		{
			title: 'GPS',
			id: 'gps'
		},
		{
			title: 'Camera',
			id: 'camera'
		},
		{
			title: 'Contacts',
			id: 'contacts'
		},
		{
			title: 'Files',
			id: 'files'
		},
		{
			title: 'Status',
			id: 'status'
		}
	];

	$scope.open = function(route) {
		$scope.active = route;
		$location.path(route);
	};
});