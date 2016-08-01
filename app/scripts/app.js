'use strict';

/**
 * @ngdoc overview
 * @name reMinderApp
 * @description
 * # reMinderApp
 *
 * Main module of the application.
 */
angular
  .module('reMinderApp', [
    'ngAnimate',
    'ngResource',
    'ngRoute',
    'ngTouch',
    'mainPageRo',
    'mainPageEn'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        template: '<main-page-ro></main-page-ro>'
      })
      .when('/en', {
        template: '<main-page-en></main-page-en>'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
