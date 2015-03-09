/**
 * Created by abalasubramanian on 3/8/15.
 */

var app = app || {};

app.id = 0

app.getId = function() {
    return app.id++;
}

app.Appointment = Backbone.Model.extend({

    urlRoot: 'http://localhost:9090/api/appointments'

});


