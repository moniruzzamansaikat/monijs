const r = {
  html: function(t) {
    return t ? (this.each(function(e) {
      e.innerHTML = t;
    }), this) : this[0] ? this[0].innerHTML : void 0;
  },
  each: function(t) {
    return Array.prototype.forEach.call(this, function(e, n) {
      t.call(e, e, n);
    }), this;
  },
  remove: function() {
    return this.each(function(t) {
      t.parentNode && t.parentNode.removeChild(t);
    }), this;
  },
  attr: function(t, e) {
    return e ? (this.each(function(n) {
      n.setAttribute(t, e);
    }), this) : this[0] ? this[0].getAttribute(t) : void 0;
  },
  data: function(t, e) {
    return e ? (this.each(function(n) {
      n.dataset[t] = e;
    }), this) : this[0] ? this[0].dataset[t] : void 0;
  },
  add: function(t, e) {
    if (typeof t == "string")
      if (t.includes("<")) {
        e = e || 1;
        const n = document.createDocumentFragment();
        for (let i = 0; i < e; i++) {
          const s = document.createElement("div");
          for (s.innerHTML = t; s.firstChild; )
            n.appendChild(s.firstChild);
        }
        this.each(function(i) {
          i.appendChild(n.cloneNode(!0));
        });
      } else
        e = e || 1, this.each(function(n) {
          for (let i = 0; i < e; i++) {
            const s = document.createElement(t);
            n.appendChild(s);
          }
        });
    return this;
  },
  val: function(t) {
    return t === void 0 ? this[0] ? this[0].value : void 0 : (this.each(function(e) {
      (e.tagName === "SELECT" || e.tagName === "INPUT" || e.tagName === "TEXTAREA") && (e.value = t);
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
  },
  values: function() {
    const t = {}, e = this[0].elements;
    return Array.prototype.forEach.call(e, function(n) {
      if (n.name && !n.disabled)
        if (n.type === "checkbox" || n.type === "radio")
          n.checked && (t[n.name] = n.value);
        else if (n.tagName === "SELECT" && n.multiple) {
          const i = [];
          Array.prototype.forEach.call(n.options, function(s) {
            s.selected && i.push(s.value);
          }), t[n.name] = i;
        } else n.type === "file" ? t[n.name] = n.files.length > 1 ? n.files : n.files[0] : t[n.name] = n.value;
    }), t;
  }
}, o = {
  on: function(t, e) {
    return this.each(function(n) {
      n.addEventListener(t, e);
    }), this;
  }
}, u = {
  css: function(t, e) {
    return e ? this.each(function(n) {
      n.style[t] = e;
    }) : this[0] ? getComputedStyle(this[0])[t] : void 0;
  },
  classes: function() {
    const t = this[0] ? this[0].classList : void 0, e = {
      has: function(n) {
        return t ? t.contains(n) : !1;
      },
      add: function(n) {
        return t && t.add(n), this;
      },
      remove: function(n) {
        return t && t.remove(n), this;
      },
      toggle: function(n) {
        return t && t.toggle(n), this;
      },
      toArray: function() {
        return t ? Array.from(t) : [];
      }
    };
    return Object.assign(Object.create(this.constructor.fn), e, this);
  }
};
(function(t) {
  const e = function(n) {
    return new e.fn.init(n);
  };
  e.fn = e.prototype = {
    constructor: e,
    length: 0,
    init: function(n) {
      if (!n) return this;
      if (typeof n == "string")
        if (n[0] === "#")
          this[0] = document.getElementById(n.slice(1)), this.length = 1;
        else {
          const i = document.querySelectorAll(n);
          Array.prototype.push.apply(this, i);
        }
      else n.nodeType && (this[0] = n, this.length = 1);
      return this;
    }
  }, Object.assign(e.fn, r, o, u), e.loaded = function(n) {
    document.readyState !== "loading" ? n() : document.addEventListener("DOMContentLoaded", n);
  }, e.fn.init.prototype = e.fn, t.moni = e;
})(window);
