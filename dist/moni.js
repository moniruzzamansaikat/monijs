const s = {
  html: function(i) {
    return i ? (this.each(function(n) {
      n.innerHTML = i;
    }), this) : this[0] ? this[0].innerHTML : void 0;
  },
  each: function(i) {
    return Array.prototype.forEach.call(this, function(n, t) {
      i.call(n, n, t);
    }), this;
  }
}, o = {
  on: function(i, n) {
    return this.each(function(t) {
      t.addEventListener(i, n);
    }), this;
  }
}, r = {
  css: function(i, n) {
    return n ? this.each(function(t) {
      t.style[i] = n;
    }) : this[0] ? getComputedStyle(this[0])[i] : void 0;
  },
  classes: function() {
    const i = this[0] ? this[0].classList : void 0, n = {
      has: function(t) {
        return i ? i.contains(t) : !1;
      },
      add: function(t) {
        return i && i.add(t), this;
      },
      remove: function(t) {
        return i && i.remove(t), this;
      },
      toArray: function() {
        return i ? Array.from(i) : [];
      }
    };
    return Object.assign(Object.create(this.constructor.fn), n, this);
  }
};
(function(i) {
  const n = function(t) {
    return new n.fn.init(t);
  };
  n.fn = n.prototype = {
    constructor: n,
    length: 0,
    init: function(t) {
      if (!t) return this;
      if (typeof t == "string")
        if (t[0] === "#")
          this[0] = document.getElementById(t.slice(1)), this.length = 1;
        else {
          const e = document.querySelectorAll(t);
          Array.prototype.push.apply(this, e);
        }
      else t.nodeType && (this[0] = t, this.length = 1);
      return this;
    }
  }, Object.assign(n.fn, s, o, r), n.loaded = function(t) {
    document.readyState !== "loading" ? t() : document.addEventListener("DOMContentLoaded", t);
  }, n.fn.init.prototype = n.fn, i.moni = n;
})(window);
