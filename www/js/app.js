var app = angular.module('cordova-example', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider.when('/gps', {
		templateUrl: 'views/gps.html',
		controller: 'GPSController'
	})
	.when('/camera', {
		templateUrl: 'views/camera.html',
		controller: 'CameraController'
	})
	.when('/contacts', {
		templateUrl: 'views/contacts.html',
		controller: 'ContactsController'
	})
	.when('/files', {
		templateUrl: 'views/files.html',
		controller: 'FilesController'
	})
	.when('/status', {
		templateUrl: 'views/status.html',
		controller: 'StatusController',
		resolve: {
			statuses: function($q, CordovaService) {
				var deferred = $q.defer();
				CordovaService.getStatuses(function(statuses) {
					deferred.resolve(statuses);
				});
  				return deferred.promise;
			}
		}
	})
	.otherwise({
		redirectTo: '/'
	});
});