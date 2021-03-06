(function() {

  require(['underscore', 'backbone', 'bronson'], function(_, Backbone, Bronson) {
    Bronson.Api.createModule('apps/lib/instagram/instagramModule', {
      el: '#modules'
    }, function() {});
    Bronson.Api.createModule('apps/lib/twitter/twitterModule', {
      el: '#modules'
    }, function() {});
    Bronson.Api.createModule('apps/lib/weather/weatherModule', {
      el: '#modules'
    }, function() {});
    Bronson.Api.createModule('apps/lib/maps/mapsModule', {
      el: '#modules'
    }, function() {});
    Bronson.Api.createModule('apps/lib/foursquare/foursquareModule', {
      el: '#modules'
    }, function() {});
    $('#btnAddFourSquare').click(function() {
      return Bronson.Api.createModule('apps/lib/foursquare/foursquareModule', {
        el: '#modules'
      }, function() {});
    });
    $('#btnAddInstagram').click(function() {
      return Bronson.Api.createModule('apps/lib/instagram/instagramModule', {
        el: '#modules'
      }, function() {});
    });
    $('#btnAddTwitter').click(function() {
      return Bronson.Api.createModule('apps/lib/twitter/twitterModule', {
        el: '#modules'
      }, function() {});
    });
    $('#btnAddWeather').click(function() {
      return Bronson.Api.createModule('apps/lib/weather/weatherModule', {
        el: '#modules'
      }, function() {});
    });
    $('#btnAddMaps').click(function() {
      return Bronson.Api.createModule('apps/lib/maps/mapsModule', {
        el: '#modules'
      }, function() {});
    });
    $('#btnAddFourSquare').click(function() {
      return Bronson.Api.createModule('apps/lib/foursquare/foursquareModule', {
        el: '#modules'
      }, function() {});
    });
    $('#btnGetCurrentPosition').click(function() {
      if (navigator && navigator.geolocation) {
        return navigator.geolocation.getCurrentPosition(function(geo) {
          return Bronson.Api.publish('geoUpdate', geo.coords);
        }, function(error) {
          return console.log('failure');
        });
      } else {
        return console.log('geolocation not supported');
      }
    });
    $('#btnSetPositionToTokyo').click(function() {
      var coords;
      coords = {
        latitude: '35.689488',
        longitude: '139.691706'
      };
      return Bronson.Api.publish('geoUpdate', coords);
    });
    $('#btnSetPositionToLondon').click(function() {
      var coords;
      coords = {
        latitude: '51.500152',
        longitude: '-0.126236'
      };
      return Bronson.Api.publish('geoUpdate', coords);
    });
    return $('#btnRemoveModules').click(function() {
      return Bronson.Api.stopAllModules();
    });
  });

}).call(this);
