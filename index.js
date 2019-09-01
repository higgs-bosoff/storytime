var $ = require('jquery');
var Vue = require('vue').default;

$(document).ready(function() {
    var app = new Vue({
        el: '#app',
        data: {
        message: 'Hello Vue!'
        }
    });

    console.log(app);
});
