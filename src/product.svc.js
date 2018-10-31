app.service('productSvc', ProductSvc);

function ProductSvc($http) {

  this.get = function () {
    return $http.get('http://exp-rest-api.herokuapp.com/api/products')
  }

  this.getById = function (id) {
    return $http.get('http://exp-rest-api.herokuapp.com/api/products/' + id);
  }

}