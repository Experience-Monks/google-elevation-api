var mapsAPI = require('google-maps-api');

module.exports = function elevationAPI(options, callback) {

  var key = options.key;
  var locations = options.locations;

  if(key === undefined) {
    callback(new Error('please pass an api key through options.key'));
    return;
  }

  if(locations === undefined) {
    callback(new Error('please pass an api key through options.locations as [[lat, lng], [lat, lng]... ]'));
    return;
  }

  mapsAPI(key)()
  .then(function(maps) {
    
    var elevator = new maps.ElevationService();
    var req = {
      locations: locations.map( function(location) {

        return new google.maps.LatLng(location[ 0 ], location[ 1 ]);
      })
    };

    // Initiate the location request
    elevator.getElevationForLocations(req, function(results, status) {

      if (status == google.maps.ElevationStatus.OK) {
        // Retrieve the first result
        if (results.length) {

          results = results.map( function(result) {

            result.location = {
              lat: result.location.lat(),
              lng: result.location.lng()
            };

            return result;
          });

          callback(null, results);
        } else {
          callback(new Error('No elevation results for this location'));
        }
      } else {
        callback(new Error('Failed cause: ' + status));
      }
    });
  })
  .catch(function(error) {

    callback(error);
  });
};