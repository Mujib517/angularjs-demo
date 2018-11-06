app.factory('productInterceptor', function () {

  var url = "http://exp-rest-api.herokuapp.com/";

  return {
    request: function (req) {
      req.headers.customHeader = "abc";
      if (req.url.indexOf("api") > -1)
        req.url = url + req.url;
      return req;
    },

    response: function (res) {
      res.extraInformation = { name: "xyz" };
      return res;
    },

    requestError: function (err) {
      console.log("Request error");
      return err;
    },

    responseError: function (err) {
      return err.statusText;
    }
  }
});