function time() {

  return function (date) {
    return moment(date).fromNow();
  }
}

app.filter('time', time);