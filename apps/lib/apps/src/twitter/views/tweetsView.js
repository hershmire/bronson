(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['jquery', 'underscore', 'backbone', 'bronson', 'apps/lib/twitter/views/tweetItemView', 'text!apps/src/twitter/templates/tweetsTemplate.html'], function($, _, Backbone, Bronson, TweetItemView, TweetsTemplate) {
    var TweetsView;
    return TweetsView = (function(_super) {

      __extends(TweetsView, _super);

      function TweetsView() {
        return TweetsView.__super__.constructor.apply(this, arguments);
      }

      TweetsView.prototype.tagName = 'li';

      TweetsView.prototype.className = 'module twitter';

      TweetsView.prototype.events = function() {
        return {
          'click .icon-remove-sign': 'dispose'
        };
      };

      TweetsView.prototype.initialize = function() {
        this.id = Math.random().toString(36).substring(7);
        _.bindAll(this, 'render');
        return this.collection.bind('reset', this.render);
      };

      TweetsView.prototype.render = function() {
        $(this.el).html(_.template(TweetsTemplate));
        _.each(this.collection.models, (function(item) {
          return this.renderItem(item);
        }), this);
        return this;
      };

      TweetsView.prototype.renderItem = function(item) {
        var tweetItemView;
        tweetItemView = new TweetItemView({
          model: item
        });
        return $(this.el).append(tweetItemView.render().el);
      };

      TweetsView.prototype.dispose = function() {
        this.collection.unbind('change');
        this.collection.dispose();
        return $(this.el).remove();
      };

      return TweetsView;

    })(Backbone.View);
  });

}).call(this);
