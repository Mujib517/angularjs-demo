function myCtrlFun($scope) {

  $scope.name = "Hello Angular!!";

  $scope.sayHello = function (val) {
    alert("Hi " + val);
  };

  $scope.arr = ["one","two","abc","xyz"];
}

app.controller('myCtrl', myCtrlFun);