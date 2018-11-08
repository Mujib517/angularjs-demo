app.directive('myAddress', addressDir);

function addressDir() {
  return {
    templateUrl: '/src/templates/address.html',
    scope: {
      address: '=',
      onAddrSave: '&'
    },
    controller: function ($scope) {

      $scope.onSave = function () {
        console.log("Inside Directive", "Save button clicked");
        $scope.onAddrSave(); //notify
      };
    }
  };
}
