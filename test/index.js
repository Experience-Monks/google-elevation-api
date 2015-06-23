var elevationApi = require('./..');
var tape = require('tape');

tape('get location', function(t) {
  var locations = [
    [43.669662, -79.282848],
    [62.794543, 22.827826]
  ];

  elevationApi({
    key: process.env.GOOGLE_API_KEY,
    locations: locations
  }, function(err, locations) {

    if(err) {
      t.fail('Error ' + err);
      t.end();
      return;
    }

    t.equal(locations.length, 2, 'received one location');

    locations.forEach(function(location) {

      t.ok(typeof location.elevation === 'number', 'received an elevation');
      t.ok(typeof location.resolution === 'number', 'received a resolution');
      t.ok(location.location, 'received a location');
      t.ok(location.location[ 0 ], 'received a lat');
      t.ok(location.location[ 1 ], 'received a lng');
    });

    t.end();
  });
});