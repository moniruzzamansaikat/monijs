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
  },

  add: function (content, times) {
    if (typeof content === 'string') {
      if (content.includes('<')) {
        times = times || 1;
        const fragment = document.createDocumentFragment();

        for (let i = 0; i < times; i++) {
          const tempDiv = document.createElement('div');
          tempDiv.innerHTML = content;

          while (tempDiv.firstChild) {
            fragment.appendChild(tempDiv.firstChild);
          }
        }

        this.each(function (el) {
          el.appendChild(fragment.cloneNode(true));
        });
      } else {
        times = times || 1;

        this.each(function (el) {
          for (let i = 0; i < times; i++) {
            const newElement = document.createElement(content);
            el.appendChild(newElement);
          }
        });
      }
    }

    return this;
  }

};