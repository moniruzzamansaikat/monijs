export default {
  on: function (event, callback) {
    this.each(function (el) {
      el.addEventListener(event, callback);
    });

    return this;
  }
};
