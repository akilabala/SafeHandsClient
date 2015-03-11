/**
 * Created by abalasubramanian on 3/10/15.
 */

var backboneSync = Backbone.sync;

Backbone.sync = function(method, model, options) {

    var token = window.localStorage.getItem('token');
    if (token) {
        options.headers = {
            'x-access-token': token
        }
    }
    backboneSync(method, model, options);
}