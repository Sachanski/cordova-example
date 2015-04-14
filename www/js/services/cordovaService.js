app.service('CordovaService', function() {
	this.watchPosition = function(positionChanged) {
		if (typeof cordova === 'undefined') {
			console.log('cordova not found');
			return;
		}
		navigator.geolocation.watchPosition(positionChanged, function(e) {
			console.log(JSON.stringify(e));
		}, {
			enableHighAccuracy: true,
			timeout: 10000
		});
	};

	this.takePicture = function(callback, fromGallery) {
		if (typeof cordova === 'undefined') {
			console.log('cordova not found');
			return;
		}
		navigator.camera.getPicture(callback, function(e) {
			console.log(JSON.stringify(e));
		}, {
			destinationType: Camera.DestinationType.DATA_URL,
			sourceType: Camera.PictureSourceType[fromGallery ? 'PHOTOLIBRARY' : 'CAMERA'],
			saveToPhotoAlbum: true
		});
	};

	this.getContacts = function(callback) {
		if (typeof cordova === 'undefined') {
			console.log('cordova not found');
			return;
		}
		var options = new ContactFindOptions();
		options.filter = '';
		options.multiple = true;
		var filter = ['*'];
		navigator.contacts.find(filter, callback, function(e) {
			console.log(JSON.stringify(e));
		}, options);
	};

	this.getAllFiles = function(callback) {
		if (typeof cordova === 'undefined') {
			console.log('cordova not found');
			return;
		}
		window.resolveLocalFileSystemURL(cordova.file.dataDirectory, function(dir) {
			var dirReader = dir.createReader(),
				res = [];
  			dirReader.readEntries(function(entries) {
    			for(var i = 0; i < entries.length; i++) {
      				var entry = entries[i];
      				if (entry.isFile) {
        				console.log('File: ' + JSON.stringify(entry));
      					res.push({
      						name: entry.name,
      						uri: entry.nativeURL
      					});
      				}
    			}
    			callback(res);
  			}, function(e) {
  				console.log(JSON.stringify(e));
  			});
		});
	};

	this.saveFile = function(name, contents, callback) {
		if (typeof cordova === 'undefined') {
			console.log('cordova not found');
			return;
		}
		window.resolveLocalFileSystemURL(cordova.file.dataDirectory, function(dir) {
			dir.getFile(name, {create:true}, function(file) {
				file.createWriter(function(fileWriter) {
					fileWriter.seek(fileWriter.length);
					var blob = new Blob([contents], { type:'text/plain' });
					fileWriter.write(blob);
					callback(file);
				}, function(e) {
					console.log(JSON.stringify(e));
				});
			});
		});
	};

	this.removeFile = function(title, callback) {
		if (typeof cordova === 'undefined') {
			console.log('cordova not found');
			return;
		}
		window.resolveLocalFileSystemURL(cordova.file.dataDirectory, function(dir) {
	  		dir.getFile(title, {create: false}, function(fileEntry) {
	    		fileEntry.remove(function() {
	      			callback();
	    		}, function(e) {
					console.log(JSON.stringify(e));
				});
	  		}, function(e) {
				console.log(JSON.stringify(e));
			});
		});
	};

	this.getStatuses = function(callback) {
		if (typeof cordova === 'undefined') {
			console.log('cordova not found');
			setTimeout(function() {
				callback([]);
			}, 10);
			return;
		}
		var statuses = [
			{
				name: 'Cordova version',
				value: device.cordova
			},
			{
				name: 'Device Model',
				value: device.model
			},
			{
				name: 'Platform',
				value: device.platform
			},
			{
				name: 'Device ID',
				value: device.uuid
			},
			{
				name: 'OS version',
				value: device.version
			}
		];
		setTimeout(function() {
			callback(statuses);
		}, 10);
	};

	this.watchHeading = function(callback) {
		if (typeof cordova === 'undefined') {
			console.log('cordova not found');
			return;
		}
		navigator.compass.watchHeading(callback);
	};

	this.watchAcceleration = function(callback) {
		if (typeof cordova === 'undefined') {
			console.log('cordova not found');
			return;
		}
		navigator.accelerometer.watchAcceleration(callback);
	};
});