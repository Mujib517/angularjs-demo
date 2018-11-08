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

  $scope.onNotificationReceived = function () {
    console.log("Notification received");
    init();
  };

  init();
});