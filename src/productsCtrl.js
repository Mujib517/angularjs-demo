app.controller('productsCtrl', function ($scope, productSvc) {

  function init() {
    $scope.loading = true;
    productSvc.get()
      .then(function (res) {
        $scope.products = res.data.data;
      })
      .catch(function (err) {
      })
      .finally(function () {
        $scope.loading = false;
      });
  }

  $scope.onDelete = function (id) {
    productSvc.delete(id)
      .then(function (res) {
        init();
      })
      .catch(function (err) {
        console.log(err);
      });
  }

  init();
});