app.controller('ContactsController', function($scope, CordovaService) {
	CordovaService.getContacts(function(contacts) {
		console.log(JSON.stringify(contacts));
		$scope.$apply(function() {
			$scope.contacts = contacts;
		});
	});
});