var app = angular.module('app', ['ngRoute', 'shared']);

app.controller('homeCtrl', function ($scope) {
  $scope.addr = {
    address1: '1234 Greenspoint parkway',
    address2: 'Hoffman Estates',
    city: 'Chicago',
    zip: 60169
  };

  $scope.addr2 = {
    address1: '7845 Greenspoint parkway',
    address2: 'Hoffman Estates',
    city: 'Chicago',
    zip: 60169
  };

  $scope.onAddrSaveClick = function () {
    console.log("Home Ctrl", "Save Clicked");
  };

});

app.config(function ($routeProvider,$httpProvider) {

  $httpProvider.interceptors.push('productInterceptor');

  $routeProvider
    .when('/', {
      template: '<h1>Home Page</h1>',
      controller: 'homeCtrl'
    })
    .when('/about', {
      template: '<h1>About Page</h1>'
    })
    .when('/contact', {
      template: '<h1>Contact Page</h1>'
    })
    .when('/users', {
      templateUrl: '/src/templates/users.html',
      controller: 'userCtrl'
    })
    .when('/products', {
      templateUrl: '/src/templates/products.html',
      controller: 'productsCtrl'
    })
    .when('/products/new', {
      templateUrl: '/src/templates/new-product.html',
      controller: 'newProductCtrl'
    })
    .when('/products/:id', {
      templateUrl: '/src/templates/product-detail.html',
      controller: 'productDetailCtrl'
    })
    .otherwise({ redirectTo: '/' });
});