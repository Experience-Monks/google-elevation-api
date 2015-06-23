# google-elevation-api

[![experimental](http://badges.github.io/stability-badges/dist/experimental.svg)](http://github.com/badges/stability-badges)

This module will help reading the Google Maps Elevation API.

## Example
```javascript
var elevationApi = require('google-elevation-api');

elevationApi({
    key: 'API KEY',
    locations: locations
}, function(err, locations) {
    if(err) {
        console.log(err);
        return;
    }

    console.log(locations);
});
```


## Usage

[![NPM](https://nodei.co/npm/google-elevation-api.png)](https://www.npmjs.com/package/google-elevation-api)

#### `require('google-elevation-api')(options, callback)`;

This module exports a function you pass `options` and a `callback` to. `options` should have your Google Maps API key in a variable called `key`. And an array of `locations`.

For example:
```javascript
{
    key: 'some google maps api key',
    locations: [
        [43.669662, -79.282848],
        [62.794543, 22.827826]
    ]
}
```

`locations` are formed are `[lay, lng]` arrays.

The `callback` should be a node style callback and returns an `Error` or `null` as the first argument and an `Array` of elevation/location info as the second argument.

Each item in the `Array` of returned locations contains the following:
```javascript
{
  elevation: 74.84200286865234, // in meters
  location: [
    43.66966, // lat
    -79.28285 // lng
  ],
  resolution: 152.7032318115234 // resolution of the sample
  // for more info on resolution checkout
  // https://developers.google.com/maps/documentation/elevation/
}
```


## License

MIT, see [LICENSE.md](http://github.com/Jam3/google-elevation-api/blob/master/LICENSE.md) for details.
