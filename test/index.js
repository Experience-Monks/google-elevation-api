var elevationApi = require('./..');

var locations = [
  [43.669662, -79.282848]
];

elevationApi({
  key: require('./apiKey'),
  locations: locations
}, function(err, locations) {

  if(err) {
    console.log(err);
    return;
  }
});