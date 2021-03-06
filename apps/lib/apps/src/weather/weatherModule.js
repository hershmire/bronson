(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['jquery', 'underscore', 'backbone', 'bronson', 'apps/lib/weather/models/weatherModel', 'apps/lib/weather/views/weatherView'], function($, _, Backbone, Bronson, WeatherModel, WeatherView) {
    var WeatherModule;
    return WeatherModule = (function(_super) {

      __extends(WeatherModule, _super);

      function WeatherModule(parameters) {
        if (parameters == null) {
          parameters = {};
        }
        this.el = parameters.el;
        WeatherModule.__super__.constructor.apply(this, arguments);
      }

      WeatherModule.prototype.load = function() {
        var weatherModel,
          _this = this;
        weatherModel = new WeatherModel();
        this.weatherView = new WeatherView({
          model: weatherModel
        });
        weatherModel.url = 'http://api.wunderground.com/api/2d04094a0883bebf/forecast/geolookup/conditions/q/Japan/Tokyo.json?callback=?';
        weatherModel.fetch({
          silent: true,
          success: function() {
            return $(_this.el).append(_this.weatherView.render().el);
          }
        });
        return Bronson.Core.subscribe('WeatherModule', 'geoUpdate', function(data) {
          weatherModel.url = "http://api.wunderground.com/api/2d04094a0883bebf/forecast/geolookup/conditions/q/" + data.latitude + "," + data.longitude + ".json?callback=?";
          return weatherModel.fetch();
        });
      };

      WeatherModule.prototype.start = function() {};

      WeatherModule.prototype.stop = function() {};

      WeatherModule.prototype.unload = function() {};

      return WeatherModule;

    })(Bronson.Module);
  });

}).call(this);
