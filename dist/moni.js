const c = {
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
          const r = document.createElement("div");
          for (r.innerHTML = t; r.firstChild; )
            n.appendChild(r.firstChild);
        }
        this.each(function(i) {
          i.appendChild(n.cloneNode(!0));
        });
      } else
        e = e || 1, this.each(function(n) {
          for (let i = 0; i < e; i++) {
            const r = document.createElement(t);
            n.appendChild(r);
          }
        });
    else t instanceof moni && this.each(function(n) {
      t.each(function(i) {
        n.appendChild(i.cloneNode(!0));
      });
    });
    return this;
  },
  addPrevious: function(t) {
    return typeof t == "string" ? this.each(function(e) {
      const n = document.createDocumentFragment(), i = document.createElement("div");
      for (i.innerHTML = t; i.firstChild; )
        n.appendChild(i.firstChild);
      e.parentNode.insertBefore(n, e);
    }) : t instanceof moni && this.each(function(e) {
      t.each(function(n) {
        e.parentNode.insertBefore(n.cloneNode(!0), e);
      });
    }), this;
  },
  addBehind: function(t) {
    return typeof t == "string" ? this.each(function(e) {
      const n = document.createDocumentFragment(), i = document.createElement("div");
      for (i.innerHTML = t; i.firstChild; )
        n.appendChild(i.firstChild);
      e.nextSibling ? e.parentNode.insertBefore(n, e.nextSibling) : e.parentNode.appendChild(n);
    }) : t instanceof moni && this.each(function(e) {
      t.each(function(n) {
        e.nextSibling ? e.parentNode.insertBefore(n.cloneNode(!0), e.nextSibling) : e.parentNode.appendChild(n.cloneNode(!0));
      });
    }), this;
  },
  siblings: function() {
    const t = [];
    return this.each(function(e) {
      Array.prototype.forEach.call(e.parentNode.children, function(n) {
        n !== e && t.push(n);
      });
    }), moni(t);
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
          Array.prototype.forEach.call(n.options, function(r) {
            r.selected && i.push(r.value);
          }), t[n.name] = i;
        } else n.type === "file" ? t[n.name] = n.files.length > 1 ? n.files : n.files[0] : t[n.name] = n.value;
    }), t;
  },
  after: function(t) {
    return this.each(function(e) {
      e.insertAdjacentHTML("afterend", t);
    }), this;
  },
  before: function(t) {
    return this.each(function(e) {
      e.insertAdjacentHTML("beforebegin", t);
    }), this;
  },
  children: function() {
    const t = [];
    return this.each(function(e) {
      Array.prototype.push.apply(t, e.children);
    }), moni(t);
  },
  empty: function() {
    return this.each(function(t) {
      t.innerHTML = "";
    }), this;
  },
  clone: function(t = !0) {
    const e = [];
    return this.each(function(n) {
      e.push(n.cloneNode(t || !1));
    }), moni(e);
  },
  search: function(t) {
    const e = [];
    return typeof t == "string" ? this.each(function(n) {
      const i = n.querySelectorAll(t);
      Array.prototype.push.apply(e, i);
    }) : t instanceof moni && this.each(function(n) {
      t.each(function(i) {
        n.contains(i) && e.push(i);
      });
    }), moni(e);
  },
  near: function(t) {
    const e = [], n = typeof t == "string";
    let i;
    return n ? i = [t] : i = Array.isArray(t) ? t.map((r) => r.nodeType ? r.tagName.toLowerCase() : null).filter(Boolean) : Array.from(t).map((r) => r.nodeType ? r.tagName.toLowerCase() : null).filter(Boolean), this.each(function(r) {
      let o = r;
      for (; o && o !== document; ) {
        if (n) {
          if (o.matches(t)) {
            e.push(o);
            break;
          }
        } else if (i.some((s) => o.tagName.toLowerCase() === s)) {
          e.push(o);
          break;
        }
        o = o.parentElement;
      }
    }), moni(e);
  }
}, f = {
  on: function(t, e) {
    return this.each(function(n) {
      n.addEventListener(t, e);
    }), this;
  }
}, a = {
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
      else n.nodeType ? (this[0] = n, this.length = 1) : Array.isArray(n) && Array.prototype.push.apply(this, n);
      return this;
    }
  }, Object.assign(e.fn, c, f, a), e.loaded = function(n) {
    document.readyState !== "loading" ? n() : document.addEventListener("DOMContentLoaded", n);
  }, e.fn.init.prototype = e.fn, t.moni = e;
})(window);
