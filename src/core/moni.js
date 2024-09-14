(function (global, factory) {
  if (typeof module === "object" && typeof module.exports === "object") {
    module.exports = factory(global);
  } else {
    global.moni = factory(global);
  }
}(typeof window !== "undefined" ? window : this, function (window) {
  const dom      = require('./dom');
  const events   = require('./events');
  const css      = require('./css');
  const moniAjax = require('./ajax');

  const moniJs = function (selector) {
    return new moniJs.fn.init(selector);
  };

  moniJs.fn = moniJs.prototype = {
    constructor: moniJs,
    length: 0,

    init: function (selector) {
      if (!selector) return this;

      if (selector instanceof moniJs) return selector;

      if (typeof selector === 'string') {
        if (selector[0] === '#') {
          this[0] = document.getElementById(selector.slice(1));
          this.length = 1;
        } else {
          const nodeList = document.querySelectorAll(selector);
          Array.prototype.push.apply(this, nodeList);
        }
      } else if (selector.nodeType) {
        this[0] = selector;
        this.length = 1;
      } else if (Array.isArray(selector)) {
        Array.prototype.push.apply(this, selector);
      }

      return this;
    },

    ajax: function () {
      return moniAjax();
    }
  };

  Object.assign(moniJs.fn, dom, events, css);

  moniJs.loaded = function (callback) {
    if (document.readyState !== 'loading') {
      callback();
    } else {
      document.addEventListener('DOMContentLoaded', callback);
    }
  };

  moniJs.fn.init.prototype = moniJs.fn;

  return moniJs;
}));