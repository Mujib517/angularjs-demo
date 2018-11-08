app.directive('myProduct', function () {

  return {
    templateUrl: '/src/templates/product.html',
    scope: {
      product: '=',
      onNotifyDelete: '&'
    },
    controller: function ($scope, productSvc) {

      $scope.onDelete = function (id) {
        productSvc.delete(id)
          .then(function (res) {
            console.log("Successfully deleted");
            $scope.onNotifyDelete();
          })
          .catch(function (err) {
            console.log(err);
          });
      };

    }
  };
});