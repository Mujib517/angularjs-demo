shared.service('productSvc', ProductSvc);

function ProductSvc($http) {

  this.get = function () {
    return $http.get('api/products');
  };

  this.getById = function (id) {
    return $http.get('api/products/' + id);
  };

  this.save = function (product) {
    return $http.post('api/products', product);
  };

  this.delete = function (id) {
    return $http.delete('api/products/' + id);
  };
}