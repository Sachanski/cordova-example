app.directive('googleMap', function() {
	return {
		scope: {
			pos: '='
		},
		link: function($scope, el) {
  			var mapOptions = {
	    			zoom: 8,
	    			center: new google.maps.LatLng(-34.397, 150.644)
	  			},
  				map = new google.maps.Map(el[0], mapOptions),
  				marker;
  			$scope.$watch('pos', function(val) {
  				if (val) {
  					if (marker) {
  						marker.setMap(null);
  					}
  					var latLng = new google.maps.LatLng(val.latitude, val.longitude);
  					marker = new google.maps.Marker({
      					position: latLng,
      					map: map,
      					title: 'Hello World!'
  					});
  					map.setCenter(latLng);
  				}
  			}, true)
		}
	}
});