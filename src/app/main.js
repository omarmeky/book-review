(function() {
  'use strict';
  angular.module('book-review', ['ui.router'])
    .config(['$stateProvider', function($stateProvider) {
      $stateProvider
        .state('home', {
          url: '/',
          templateUrl: 'home/home.html',
          controller: 'HomeController'
        })
        .state('home.new', {
          url: 'new',
          templateUrl: 'home.new/home.new.html',
          controller: 'NewController'
        });
    }]);
})();
