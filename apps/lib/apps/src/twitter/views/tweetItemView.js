(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['jquery', 'underscore', 'backbone', 'bronson', 'text!apps/src/twitter/templates/tweetTemplate.html'], function($, _, Backbone, Bronson, TweetItemTemplate) {
    var TweetItemView;
    return TweetItemView = (function(_super) {

      __extends(TweetItemView, _super);

      function TweetItemView() {
        return TweetItemView.__super__.constructor.apply(this, arguments);
      }

      TweetItemView.prototype.events = {
        "click": 'notify'
      };

      TweetItemView.prototype.initialize = function() {};

      TweetItemView.prototype.notify = function() {
        var coords;
        if (this.model.get('geo') != null) {
          coords = {
            title: this.model.get('from_user'),
            latitude: this.model.get('geo').coordinates[0],
            longitude: this.model.get('geo').coordinates[1]
          };
          return Bronson.Api.publish('addMarker', coords);
        }
      };

      TweetItemView.prototype.render = function() {
        $(this.el).html(_.template(TweetItemTemplate, this.model.toJSON()));
        return this;
      };

      return TweetItemView;

    })(Backbone.View);
  });

}).call(this);
