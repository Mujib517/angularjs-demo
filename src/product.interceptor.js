app.factory('productInterceptor', function () {

  return {
    request: function (req) {
      req.headers.customHeader = "abc";
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