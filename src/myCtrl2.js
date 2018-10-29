function myCtrl2($scope) {
  $scope.user = {
    "login": "mojombo", //truthy
    "id": 1,
    "avatar_url": "https://avatars0.githubusercontent.com/u/1?v=4"
  };
}

app.controller('myCtrl2', myCtrl2);
