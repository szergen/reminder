angular.
    module('mainPageRo').
        component('mainPageRo', {
            templateUrl: 'scripts/main-page-ro/main-page-ro.template.html',
            controller: ['$http', function mainPageRoController($http) {
                var self = this;
                self.test = "traklalalalala";
                
                /*   
                $http.get('phones/phones.json').then(function(response) {
                    self.phones = response.data;
                }); 
                */
            }]
});