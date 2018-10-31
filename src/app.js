var app = angular.module('app', ['ngRoute']);

app.config(function ($routeProvider) {

  $routeProvider
    .when('/', {
      template: '<h1>Home Page</h1>'
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