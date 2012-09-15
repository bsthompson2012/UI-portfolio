window.HomeView = Backbone.View.extend({
    initialize: function () {
        console.log('Initializing Home View w Accordion');
    },

    events: {
        "click .bio": "clickBio",
        "click .contact": "clickContact",
        "click .about": "clickAbout",
        "click .hero": "clickHero",
        "click .comingSoon": "comingSoon",
        "click .work": "clickWork",
        "click #ct2020": "clickCt2020",
        "click #sg": "clickSG",
        "click #sr": "clickSR",
        "click #sm": "clickSM",
        "click #o": "clickO"
    },

    render: function () {
        $(this.el).html(this.template());
        /* $('#content').html(this.template()); */
        /* $('.inner').append(this.template()); */
        return this;
    },

    clickBio: function () {
        this.hideAccordian();
        this.hideScreens();
        $('#bio').toggle('slow');
    },

    clickContact: function () {
        this.hideAccordian();
        this.hideScreens();
        $('#contact').toggle('slow');
    },

    clickAbout: function () {
        this.hideAccordian();
        this.hideScreens();
        $('#about').toggle('slow');
    },

    clickWork: function () {
        this.hideAccordian();
        this.hideScreens();
        $('#work').toggle('slow');
    },

    clickHero: function () {
        this.hideAccordian();
        this.hideScreens();
        $('#hero').toggle('slow');
    },

    clickCt2020: function () {
        this.hideScreens();
        $('.ct2020-screen').toggle('slow');
    },

    clickSG: function () {
        this.hideScreens();
        $('.sg-screen').toggle('slow');
    },

    clickSR: function () {
        this.hideScreens();
        $('.sr-screen').toggle('slow');
    },

    clickSM: function () {
        this.hideScreens();
        $('.sm-screen').toggle('slow');
    },

    clickO: function () {
        this.hideScreens();
        $('.o-screen').toggle('slow');
    },

    comingSoon: function () {
        alert("Note: These features are still being implemented.")
    },

    hideScreens: function () {
        $('.ct2020-screen').hide('slow');
        $('.sg-screen').hide('slow');
        $('.sr-screen').hide('slow');
        $('.o-screen').hide('slow');
        $('.sm-screen').hide('slow');
    },

    hideAccordian: function () {
        $('#bio').hide('slow');
        $('#about').hide('slow');
        $('#contact').hide('slow');
        $('#work').hide('slow');
        $('#hero').hide('slow');
    }
});