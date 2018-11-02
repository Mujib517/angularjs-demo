app.directive('myProduct', function () {

  return {
    template: ` <div class="card">
    <a href="#!/products/{{product._id}}">
      <div class="card-header">{{product.brand | uppercase}} {{product.model | lowercase}}</div>
      <div class="card-body">
        <div>{{product.price | currency}}</div>
        <div><input type="checkbox" ng-disabled="true" ng-checked="product.inStock" /> InStock</div>
      </div>
    </a>
    <div class="card-footer">
      {{product.lastUpdated | date:'MM-dd-yyyy hh:mm:ss'}}
      ( {{product.lastUpdated | time}} )
      <button class="btn btn-danger btn-sm" ng-click="onDelete(product._id)">Delete</button>
    </div>
  </div>
  <br />`,
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
      }

    }
  }
})