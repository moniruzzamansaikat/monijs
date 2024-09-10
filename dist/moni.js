const s = {
  html: function(t) {
    return t ? (this.each(function(n) {
      n.innerHTML = t;
    }), this) : this[0] ? this[0].innerHTML : void 0;
  },
  each: function(t) {
    return Array.prototype.forEach.call(this, function(n, e) {
      t.call(n, n, e);
    }), this;
  },
  remove: function() {
    return this.each(function(t) {
      t.parentNode && t.parentNode.removeChild(t);
    }), this;
  },
  attr: function(t, n) {
    return n ? (this.each(function(e) {
      e.setAttribute(t, n);
    }), this) : this[0] ? this[0].getAttribute(t) : void 0;
  },
  data: function(t, n) {
    return n ? (this.each(function(e) {
      e.dataset[t] = n;
    }), this) : this[0] ? this[0].dataset[t] : void 0;
  },
  add: function(t, n) {
    if (typeof t == "string")
      if (t.includes("<")) {
        n = n || 1;
        const e = document.createDocumentFragment();
        for (let i = 0; i < n; i++) {
          const r = document.createElement("div");
          for (r.innerHTML = t; r.firstChild; )
            e.appendChild(r.firstChild);
        }
        this.each(function(i) {
          i.appendChild(e.cloneNode(!0));
        });
      } else
        n = n || 1, this.each(function(e) {
          for (let i = 0; i < n; i++) {
            const r = document.createElement(t);
            e.appendChild(r);
          }
        });
    return this;
  },
  val: function(t) {
    return t === void 0 ? this[0] ? this[0].value : void 0 : (this.each(function(n) {
      (n.tagName === "SELECT" || n.tagName === "INPUT" || n.tagName === "TEXTAREA") && (n.value = t);
    }), this);
  },
  first: function() {
    const t = this[0];
    return t ? moni(t) : null;
  },
  last: function() {
    const t = this[this.length - 1];
    return t ? moni(t) : null;
  },
  at: function(t) {
    return t < this.length ? moni(this[t]) : null;
  }
}, o = {
  on: function(t, n) {
    return this.each(function(e) {
      e.addEventListener(t, n);
    }), this;
  }
}, u = {
  css: function(t, n) {
    return n ? this.each(function(e) {
      e.style[t] = n;
    }) : this[0] ? getComputedStyle(this[0])[t] : void 0;
  },
  classes: function() {
    const t = this[0] ? this[0].classList : void 0, n = {
      has: function(e) {
        return t ? t.contains(e) : !1;
      },
      add: function(e) {
        return t && t.add(e), this;
      },
      remove: function(e) {
        return t && t.remove(e), this;
      },
      toggle: function(e) {
        return t && t.toggle(e), this;
      },
      toArray: function() {
        return t ? Array.from(t) : [];
      }
    };
    return Object.assign(Object.create(this.constructor.fn), n, this);
  }
};
(function(t) {
  const n = function(e) {
    return new n.fn.init(e);
  };
  n.fn = n.prototype = {
    constructor: n,
    length: 0,
    init: function(e) {
      if (!e) return this;
      if (typeof e == "string")
        if (e[0] === "#")
          this[0] = document.getElementById(e.slice(1)), this.length = 1;
        else {
          const i = document.querySelectorAll(e);
          Array.prototype.push.apply(this, i);
        }
      else e.nodeType && (this[0] = e, this.length = 1);
      return this;
    }
  }, Object.assign(n.fn, s, o, u), n.loaded = function(e) {
    document.readyState !== "loading" ? e() : document.addEventListener("DOMContentLoaded", e);
  }, n.fn.init.prototype = n.fn, t.moni = n;
})(window);
