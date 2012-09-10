window.HeaderView = Backbone.View.extend({
    initialize: function () {
        // No initialize necessary.
    },

    render: function () {
        $(this.el).html(this.template());
        return this;
    },

    events: {
        // Place future events here.
    }
});