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
        "click .title": "playSound"
    },

    render: function () {
        $(this.el).html(this.template());
        return this;
    },

    clickBio: function () {
        $('#bio').toggle('slow');
        $('#contact').hide('slow');
        $('#about').hide('slow');
        $('#hero').hide('slow');
    },

    clickContact: function () {
        $('#contact').toggle('slow');
        $('#bio').hide('slow');
        $('#about').hide('slow');
        $('#hero').hide('slow');
    },

    clickAbout: function () {
        $('#about').toggle('slow');
        $('#bio').hide('slow');
        $('#contact').hide('slow');
        $('#hero').hide('slow');
    },

    clickHero: function () {
        $('#hero').toggle('slow');
        $('#bio').hide('slow');
        $('#about').hide('slow');
        $('#contact').hide('slow');
    },

    comingSoon: function () {
        alert("Note: These features are still being implemented.")
    },

    playSound: function () {
        // alert("play sound");
        $.playSound('cameraClick.mp3');
    }
});