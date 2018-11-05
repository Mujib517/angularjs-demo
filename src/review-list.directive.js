app.directive('reviewList', function () {

  return {
    template: `<div>
    <h3 ng-if="product.reviews && product.reviews.length>0">Reviews</h3>
    <h3 ng-if="!product.reviews || product.reviews.length===0">Be the first one to review</h3>
    <div ng-repeat="review in product.reviews">
      <h3>{{review.name}}</h3>
      <b>{{review.subject}} <span class="badge badge-success">{{review.rating}} *</span></b>
      <p>{{review.message}}</p>
      <div>{{review.lastUpdated | time}}</div>
      <hr />
    </div>
  </div>`,
    restrict: 'E', //AECM
    scope: {
      product: '='
    }
  }
});