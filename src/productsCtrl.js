app.controller('productsCtrl', function ($scope, $http) {

  $http.get('http://exp-rest-api.herokuapp.com/api/products/0/100')
    .then(function (res) {
      $scope.products = res.data.data;
      console.log(res.data.data);
    })
    .catch(function (err) { console.log(err) });
});