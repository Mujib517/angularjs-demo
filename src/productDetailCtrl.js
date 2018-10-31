app.controller('productDetailCtrl', productCtrl);

function productCtrl($scope, $routeParams, productSvc) {

  var id = $routeParams.id;
  productSvc.getById(id)
    .then(function (res) {
      $scope.product = res.data;
    })
    .catch(function (err) {
      console.log(err);
    });
}