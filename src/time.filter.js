function time() {

  return function (date) {
    return moment(date).fromNow();
  }
}

shared.filter('time', time);