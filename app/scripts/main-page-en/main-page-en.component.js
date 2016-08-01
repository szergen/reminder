angular.
    module('mainPageEn').
        component('mainPageEn', {
            templateUrl: 'scripts/main-page-en/main-page-en.template.html',
            controller: ['$http', function mainPageRoController($http) {
                var self = this;
                self.test = "traklalalalala but in english";
                
                /*   
                $http.get('phones/phones.json').then(function(response) {
                    self.phones = response.data;
                }); 
                */
            }]
});