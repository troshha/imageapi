angular.module('navbar').component('navbar', {
  templateUrl: 'app/navbar/navbar.template.html',
  controller: [
    '$routeParams',
    function NavbarController($routeParams) {
      const self = this;
    }
  ]
});
