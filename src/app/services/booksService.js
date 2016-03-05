(function() {
  'use strict';
  angular.module('book-review')
    .factory('BooksService', ['$q', function($q) {
      var cache = {
        books: []
      };
      return {
        getBooks: function() {
          return $q.when(cache.books);
        },
        addBook: function(book) {
          cache.books.push(book);
        }
      }
    }]);
})();
