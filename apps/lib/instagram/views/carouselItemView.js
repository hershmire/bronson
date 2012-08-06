// Generated by CoffeeScript 1.3.1
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  define(['jquery', 'underscore', 'backbone', 'bronson', 'text!apps/src/instagram/templates/carouselItemTemplate.html'], function($, _, Backbone, Bronson, CarouselItemTemplate) {
    var CarouselItemView;
    return CarouselItemView = (function(_super) {

      __extends(CarouselItemView, _super);

      CarouselItemView.name = 'CarouselItemView';

      function CarouselItemView() {
        return CarouselItemView.__super__.constructor.apply(this, arguments);
      }

      CarouselItemView.prototype.className = 'item';

      CarouselItemView.prototype.events = {
        "click": 'notify'
      };

      CarouselItemView.prototype.initialize = function() {};

      CarouselItemView.prototype.notify = function() {
        return Bronson.Api.publish('addMarker', this.model.toJSON());
      };

      CarouselItemView.prototype.render = function() {
        $(this.el).html(_.template(CarouselItemTemplate, this.model.toJSON()));
        return this;
      };

      return CarouselItemView;

    })(Backbone.View);
  });

}).call(this);
