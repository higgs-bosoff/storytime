$(document).ready(function() {
    var app = new Vue({
        el: '#app',
        data: {
        message: 'Hello Vue!'
        }
    });

    var app2 = new Vue({
        el: '#app-2',
        data: {
          message: 'You loaded this page on ' + new Date().toLocaleString(),
          myclass: 'lolno',
          isticked: true
        },
        methods: {
            changeClass: function() {
                if (this.myclass == 'lolno') {
                    this.myclass = '';
                }
                else {
                    this.myclass = 'lolno';
                }
            }
        }
    });

    var app3 = new Vue({
        el: '#app-3',
        data: {
            zoom: 10,
            segments: [{'w': 10}, {'w': 5}, {'w': 3}],
        }
    })

    window.app = app;
});


