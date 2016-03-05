(function() {
  'use strict';
  angular.module('book-review')
    .directive('menu', function() {
      return {
        template: '<div class="menu col-sm-12">\
                    <div class="col-sm-4">\
                      <a>El Pooch</a>\
                    </div>\
                    <div class="col-sm-4">\
                      <a>The Flight</a>\
                    </div>\
                    <div class="col-sm-4">\
                      <a>Top 10 Australian Beaches</a>\
                    </div>\
                  </div>'
      }
    });
})();
