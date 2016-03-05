(function() {
  'use strict';
  angular.module('book-review')
    .controller('NewController', ['$scope', 'BooksService', '$state', function($scope, BooksService, $state) {
      $scope.book = {};
      $scope.addBook = function() {
        BooksService.addBook($scope.book);
        $state.go('home');
      };
    }]);
})();
