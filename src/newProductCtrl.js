app.controller('newProductCtrl', newProductCtrl);


function newProductCtrl($scope, productSvc) {
  $scope.onSave = function () {
    var product = {
      brand: $scope.brand,
      model: $scope.model,
      price: $scope.price,
      inStock: $scope.inStock
    };

    productSvc.save(product)
      .then(function (res) {
        console.log("Success");
      })
      .catch(function (err) {
        console.log(err);
      })

  }
}