(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['underscore', 'backbone', 'apps/lib/twitter/model/tweetModel'], function(_, Backbone, TweetModel) {
    var TweetsCollection;
    return TweetsCollection = (function(_super) {

      __extends(TweetsCollection, _super);

      function TweetsCollection() {
        return TweetsCollection.__super__.constructor.apply(this, arguments);
      }

      TweetsCollection.prototype.model = TweetModel;

      TweetsCollection.prototype.url = "http://search.twitter.com/search.json?callback=?";

      TweetsCollection.prototype.parse = function(response) {
        return response.results;
      };

      TweetsCollection.prototype.dispose = function() {
        this.reset([], {
          silent: true
        });
        this.off();
        return typeof Object.freeze === "function" ? Object.freeze(this) : void 0;
      };

      return TweetsCollection;

    })(Backbone.Collection);
  });

}).call(this);
