app.controller('productsCtrl', function ($scope, productSvc) {

  productSvc.get()
    .then(function (res) {
      $scope.products = res.data.data;
    })
    .catch(function (err) { console.log(err) });
});