window.defaultModel = Backbone.Model.extend({
    initialize: function() {
        this.on('all', function(e) { console.log(this.get('name') + " event: " + e); });
    },
    defaults: {
        modelStringFieldOne: "undefined",
		modelIntFieldTwo: 0,
	}
});

window.DefaultCollection = Backbone.Collection.extend({
    initialize: function() {
        this.on('all', function(e) { console.log("People event: " + e); });
    },
    model: defaultModel
});