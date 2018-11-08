app.directive('reviewList', function () {

  return {
    templateUrl:'/src/templates/review-list.html',
    restrict: 'E', //AECM
    scope: {
      reviews: '='
    }
  };
});