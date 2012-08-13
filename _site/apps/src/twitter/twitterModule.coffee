define [
  'jquery',
  'underscore',
  'backbone',
  'bronson',
  'apps/lib/twitter/views/tweetsView',
  'apps/lib/twitter/collection/tweetsCollection'
], ($, _, Backbone, Bronson, TweetsView, TweetsCollection) ->
  class TwitterModule extends Bronson.Module
    constructor: (parameters={}) ->
      @el = parameters.el
      #super

    load: ->
      tweetsCollection = new TweetsCollection()

      tweetView = new TweetsView 
        collection: tweetsCollection

      tweetsCollection.fetch
        data:
          geocode: "35.689488,139.691706,1mi"
          rpp: 4
        silent: true
        success: =>
          $(@el).append tweetView.render().el

      Bronson.Core.subscribe 'TwitterModule', 'geoUpdate', (data) ->
        tweetsCollection.fetch
          data: 
            geocode: "#{data.latitude},#{data.longitude},1mi"

    start: ->

    stop: ->
      
    unload: ->