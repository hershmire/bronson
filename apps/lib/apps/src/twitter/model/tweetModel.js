(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['underscore', 'backbone'], function(_, Backbone) {
    var TweetModel;
    return TweetModel = (function(_super) {

      __extends(TweetModel, _super);

      function TweetModel() {
        return TweetModel.__super__.constructor.apply(this, arguments);
      }

      return TweetModel;

    })(Backbone.Model);
  });

}).call(this);
