angular.module('imageDetail').component('imageDetail', {
  templateUrl: 'app/image-detail/image-detail.template.html',
  controller: [
    '$http',
    '$routeParams',
    function ImageDetailController($http, $routeParams) {
      const self = this;

      $http
        .get('https://picsum.photos/id/' + $routeParams.imageId + '/info')
        .then(function(response) {
          self.image = response.data;
        })
        .catch(err => console.log(err));
    }
  ]
});
