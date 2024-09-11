const f = {
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
    else t instanceof s && this.each(function(n) {
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
    }) : t instanceof s && this.each(function(e) {
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
    }) : t instanceof s && this.each(function(e) {
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
    }), s(t);
  },
  val: function(t) {
    return t === void 0 ? this[0] ? this[0].value : void 0 : (this.each(function(e) {
      (e.tagName === "SELECT" || e.tagName === "INPUT" || e.tagName === "TEXTAREA") && (e.value = t);
    }), this);
  },
  first: function() {
    const t = this[0];
    return t ? s(t) : null;
  },
  last: function() {
    const t = this[this.length - 1];
    return t ? s(t) : null;
  },
  at: function(t) {
    return t < this.length ? s(this[t]) : null;
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
    }), s(t);
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
    }), s(e);
  },
  search: function(t) {
    const e = [];
    return typeof t == "string" ? this.each(function(n) {
      const i = n.querySelectorAll(t);
      Array.prototype.push.apply(e, i);
    }) : t instanceof s && this.each(function(n) {
      t.each(function(i) {
        n.contains(i) && e.push(i);
      });
    }), s(e);
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
        } else if (i.some((a) => o.tagName.toLowerCase() === a)) {
          e.push(o);
          break;
        }
        o = o.parentElement;
      }
    }), s(e);
  }
}, u = {
  on: function(t, e) {
    return this.each(function(n) {
      n.addEventListener(t, e);
    }), this;
  }
}, d = {
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
class l {
  constructor() {
    this.url = "", this.method = "GET", this.headers = {}, this.data = null, this.callbacks = {
      loading: () => {
      },
      failed: () => {
      },
      success: () => {
      },
      end: () => {
      }
    };
  }
  request(e) {
    return this.url = e, this;
  }
  type(e) {
    return this.method = e.toUpperCase(), this;
  }
  header(e) {
    return this.headers = {
      ...this.headers,
      ...e
    }, this;
  }
  send(e) {
    if (this.headers["Content-Type"] && this.headers["Content-Type"] === "application/json")
      this.data = JSON.stringify(e);
    else if (e instanceof FormData)
      this.data = e;
    else {
      const n = new FormData();
      for (let i in e)
        e.hasOwnProperty(i) && n.append(i, e[i]);
      this.data = n;
    }
    return this;
  }
  loading(e) {
    return this.callbacks.loading = e, this;
  }
  failed(e) {
    return this.callbacks.failed = e, this;
  }
  success(e) {
    return this.callbacks.success = e, this;
  }
  end(e) {
    return this.callbacks.end = e, this;
  }
  async execute() {
    const {
      url: e,
      method: n,
      headers: i,
      data: r,
      callbacks: o
    } = this;
    o.loading();
    try {
      const a = {
        method: n,
        headers: {
          ...i
        },
        body: r
      }, c = await fetch(e, a);
      if (!c.ok)
        throw new Error(`HTTP error! status: ${c.status} - ${c.statusText}`);
      const h = await c.json();
      o.success(h);
    } catch (a) {
      a.message === "Failed to fetch" ? o.failed({
        type: "Network Error",
        message: "The request could not reach the server. Please check your URL or internet connection.",
        originalError: a
      }) : o.failed({
        type: "HTTP Error",
        message: a.message,
        originalError: a
      });
    } finally {
      o.end();
    }
  }
}
function p() {
  return new l();
}
const s = function(t) {
  return new s.fn.init(t);
};
s.fn = s.prototype = {
  constructor: s,
  length: 0,
  init: function(t) {
    if (!t) return this;
    if (t instanceof s) return t;
    if (typeof t == "string")
      if (t[0] === "#")
        this[0] = document.getElementById(t.slice(1)), this.length = 1;
      else {
        const e = document.querySelectorAll(t);
        Array.prototype.push.apply(this, e);
      }
    else t.nodeType ? (this[0] = t, this.length = 1) : Array.isArray(t) && Array.prototype.push.apply(this, t);
    return this;
  },
  ajax: function() {
    return p();
  }
};
Object.assign(s.fn, f, u, d);
s.loaded = function(t) {
  document.readyState !== "loading" ? t() : document.addEventListener("DOMContentLoaded", t);
};
s.fn.init.prototype = s.fn;
export {
  s as default
};
