window.Router = Backbone.Router.extend({
    // Once we're inside our initial page view (Header), this are our available routes.
    routes: {
        "": "home",
        "defaultView": "defaultView"
    },

    initialize: function () {
        this.headerView = new HeaderView();
        $('.header').html(this.headerView.render().el);
    },

    home: function () {
        // Since the home view never changes, we instantiate it and render it only once
        if (!this.homeView) {
            this.homeView = new HomeView();
            this.homeView.render();
        } else {
            this.homeView.delegateEvents(); // delegate events when the view is recycled
        }
        $("#content").append(this.homeView.el);

        $('#contact').hide();
        $('#about').hide();
        $('#hero').hide();
        $('#work').hide();
        $('.ct2020-screen').hide();
        $('.sg-screen').hide();
        $('.sr-screen').hide();
        $('.sm-screen').hide();
        $('.o-screen').hide();

        
    },

    defaultView: function () {
        this.defaultView = new DefaultView();
        this.defaultView.render();
        $("#content").html(this.defaultView.el);
    }
});

templateLoader.load(["HeaderView", "HomeView", "DefaultView"], function () {
    app = new Router();
    Backbone.history.start();
});