window.DefaultView = Backbone.View.extend({
    initialize: function() {
        console.log('Initializing DefaultView');
    },

    events: {
        "click .example": "defaultChangeEvent"
    },

    defaultChangeEvent: function() {
        alert("... clicked the example button.");
    },

    render: function() {
        // Provide the path to our JSON data file.
        var url = "";

        // Use RESTful practice to retrieve our JSON.
        $.getJSON(url, function(data) {
            // Open a place to dump some HTML.
            var hw = "hellow world";
            var output = '<div>';


            output += '<span>' + hw + '</span>';

            // Close the table.
            output += '</div>';

            // Now that we have something, stuff it into our view.
            $("#content-pane").html(output);
        });

        $(this.el).html(this.template());
        return this;
    }
});