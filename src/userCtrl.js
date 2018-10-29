function userCtrl($scope, $http) {
  $scope.name = "User List";

  (function () {
    get();
  })();

  function get() {
    $http.get('https://api.github.com/users')
      .then(function (res) {
        $scope.users = res.data;
        console.log("Users", $scope.users);
      })
      .catch(function (err) {
        console.log(err);
      });
  }

  $scope.reload = function () {
    get();
  }
}


app.controller('userCtrl', userCtrl);