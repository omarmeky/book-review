(function() {
  'use strict';
  angular.module('book-review')
    .controller('HomeController', ['$scope', 'BooksService', function($scope, BooksService) {
      BooksService.getBooks().then(function(books) {
        $scope.books = books;
      });
    }]);
})();
