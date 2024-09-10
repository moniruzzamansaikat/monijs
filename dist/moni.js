const f = {
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
    else t instanceof moni && this.each(function(e) {
      t.each(function(i) {
        e.appendChild(i.cloneNode(!0));
      });
    });
    return this;
  },
  addPrevious: function(t) {
    return typeof t == "string" ? this.each(function(n) {
      const e = document.createDocumentFragment(), i = document.createElement("div");
      for (i.innerHTML = t; i.firstChild; )
        e.appendChild(i.firstChild);
      n.parentNode.insertBefore(e, n);
    }) : t instanceof moni && this.each(function(n) {
      t.each(function(e) {
        n.parentNode.insertBefore(e.cloneNode(!0), n);
      });
    }), this;
  },
  addBehind: function(t) {
    return typeof t == "string" ? this.each(function(n) {
      const e = document.createDocumentFragment(), i = document.createElement("div");
      for (i.innerHTML = t; i.firstChild; )
        e.appendChild(i.firstChild);
      n.nextSibling ? n.parentNode.insertBefore(e, n.nextSibling) : n.parentNode.appendChild(e);
    }) : t instanceof moni && this.each(function(n) {
      t.each(function(e) {
        n.nextSibling ? n.parentNode.insertBefore(e.cloneNode(!0), n.nextSibling) : n.parentNode.appendChild(e.cloneNode(!0));
      });
    }), this;
  },
  siblings: function() {
    const t = [];
    return this.each(function(n) {
      Array.prototype.forEach.call(n.parentNode.children, function(e) {
        e !== n && t.push(e);
      });
    }), moni(t);
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
  },
  values: function() {
    const t = {}, n = this[0].elements;
    return Array.prototype.forEach.call(n, function(e) {
      if (e.name && !e.disabled)
        if (e.type === "checkbox" || e.type === "radio")
          e.checked && (t[e.name] = e.value);
        else if (e.tagName === "SELECT" && e.multiple) {
          const i = [];
          Array.prototype.forEach.call(e.options, function(r) {
            r.selected && i.push(r.value);
          }), t[e.name] = i;
        } else e.type === "file" ? t[e.name] = e.files.length > 1 ? e.files : e.files[0] : t[e.name] = e.value;
    }), t;
  },
  after: function(t) {
    return this.each(function(n) {
      n.insertAdjacentHTML("afterend", t);
    }), this;
  },
  before: function(t) {
    return this.each(function(n) {
      n.insertAdjacentHTML("beforebegin", t);
    }), this;
  },
  children: function() {
    const t = [];
    return this.each(function(n) {
      Array.prototype.push.apply(t, n.children);
    }), moni(t);
  },
  empty: function() {
    return this.each(function(t) {
      t.innerHTML = "";
    }), this;
  },
  clone: function(t = !0) {
    const n = [];
    return this.each(function(e) {
      n.push(e.cloneNode(t || !1));
    }), moni(n);
  },
  search: function(t) {
    const n = [];
    return typeof t == "string" ? this.each(function(e) {
      const i = e.querySelectorAll(t);
      Array.prototype.push.apply(n, i);
    }) : t instanceof moni && this.each(function(e) {
      t.each(function(i) {
        e.contains(i) && n.push(i);
      });
    }), moni(n);
  },
  near: function(t) {
    const n = [], e = typeof t == "string";
    let i;
    return e ? i = [t] : i = Array.isArray(t) ? t.map((r) => r.nodeType ? r.tagName.toLowerCase() : null).filter(Boolean) : Array.from(t).map((r) => r.nodeType ? r.tagName.toLowerCase() : null).filter(Boolean), this.each(function(r) {
      let s = r;
      for (; s && s !== document; ) {
        if (e) {
          if (s.matches(t)) {
            n.push(s);
            break;
          }
        } else if (i.some((c) => s.tagName.toLowerCase() === c)) {
          n.push(s);
          break;
        }
        s = s.parentElement;
      }
    }), moni(n);
  }
}, a = {
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
}, o = function(t) {
  return new o.fn.init(t);
};
o.fn = o.prototype = {
  constructor: o,
  length: 0,
  init: function(t) {
    if (!t) return this;
    if (t instanceof o) return t;
    if (typeof t == "string")
      if (t[0] === "#")
        this[0] = document.getElementById(t.slice(1)), this.length = 1;
      else {
        const n = document.querySelectorAll(t);
        Array.prototype.push.apply(this, n);
      }
    else t.nodeType ? (this[0] = t, this.length = 1) : Array.isArray(t) && Array.prototype.push.apply(this, t);
    return this;
  }
};
Object.assign(o.fn, f, a, u);
o.loaded = function(t) {
  document.readyState !== "loading" ? t() : document.addEventListener("DOMContentLoaded", t);
};
o.fn.init.prototype = o.fn;
export {
  o as default
};
