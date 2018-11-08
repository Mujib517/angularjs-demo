app.directive('productReview', function () {

  return {
    templateUrl:'/src/templates/product-review.html',
    restrict:'E',
    scope:{
      review:'='
    }
  };

});