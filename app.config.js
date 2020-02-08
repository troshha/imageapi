angular.module('imageApp').config([
  '$routeProvider',
  function config($routeProvider) {
    $routeProvider
      .when('/images', {
        template: '<image-list></image-list>'
      })
      .when('/images/:imageId/info', {
        template: '<image-detail></image-detail>'
      })
      .when('/images/liked', {
        template: '<liked-image></liked-image>'
      })
      .otherwise('/images');
  }
]);
