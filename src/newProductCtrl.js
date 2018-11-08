app.controller('newProductCtrl', newProductCtrl);


function newProductCtrl($scope, productSvc) {

  $scope.product = {};

  $scope.onSave = function () {
    productSvc.save($scope.product)
      .then(function (res) {
        $scope.success = true;
        $scope.failed = false;
        $scope.product = {};
      })
      .catch(function (err) {
        $scope.failed = true;
        $scope.success = false;
      });

  };
}