/**
 * Created by domenicovacchiano on 10/05/15.
 */

app.config(function($routeProvider) {
    $routeProvider
        .when('/',
        {
            templateUrl: 'app/views/main.html',
            controller: 'MainController'
        })
        .when('/layout/:id', {
            templateUrl: function(rp){
                return 'app/views/layout.html';
            },
            controller: 'LayoutController'
        })
        .otherwise({
            templateUrl: 'app/views/not_found.html'
        });

});