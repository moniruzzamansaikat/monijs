export default {
  html: function (value) {
    if (!value) {
      return this[0] ? this[0].innerHTML : undefined;
    }

    this.each(function (el) {
      el.innerHTML = value;
    });

    return this;
  },

  each: function (callback) {
    Array.prototype.forEach.call(this, function (el, index) {
      callback.call(el, el, index);
    });

    return this;
  },

  remove: function () {
    this.each(function (el) {
      if (el.parentNode) {
        el.parentNode.removeChild(el);
      }
    });

    return this;
  },

  attr: function (name, value) {
    if (!value) {
      return this[0] ? this[0].getAttribute(name) : undefined;
    } else {
      this.each(function (el) {
        el.setAttribute(name, value);
      });

      return this;
    }
  },

  data: function (name, value) {
    if (!value) {
      return this[0] ? this[0].dataset[name] : undefined;
    } else {
      this.each(function (el) {
        el.dataset[name] = value;
      });
      
      return this;
    }
  }

};