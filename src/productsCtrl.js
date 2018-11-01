app.controller('productsCtrl', function ($scope, productSvc) {

  function init() {
    productSvc.get()
      .then(function (res) {
        $scope.products = res.data.data;
      })
      .catch(function (err) { console.log(err) });
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