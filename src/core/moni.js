import dom from './dom';
import events from './events';
import css from './css';

(function (global) {
  const moniJs = function (selector) {
    return new moniJs.fn.init(selector);
  };

  moniJs.fn = moniJs.prototype = {
    constructor: moniJs,
    length: 0,

    init: function (selector) {
      if (!selector) return this;

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
      }

      return this;
    },
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

  global.moni = moniJs;

})(window);