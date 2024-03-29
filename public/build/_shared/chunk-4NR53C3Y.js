import {
  FaCheckSquare
} from "/build/_shared/chunk-P4P35UP3.js";
import {
  GenIcon
} from "/build/_shared/chunk-KTTHBX2X.js";
import {
  t
} from "/build/_shared/chunk-FSLR7CSD.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-JR7JHID7.js";
import {
  __toESM
} from "/build/_shared/chunk-4D7IJTTE.js";

// src/domain/filter/filter.ts
var sorts = ["date", "priority"];
var DEFAULT_SORT = "date";
var sortDict = {
  date: "Date",
  priority: "Priority"
};
var sortList = Object.entries(sortDict).map(
  ([key, value]) => ({
    id: key,
    label: value
  })
);
var isValidSort = (sort) => sorts.includes(sort);

// node_modules/@jspm/core/nodelibs/browser/chunk-4bd36a8f.js
var e;
var t2;
var n = "object" == typeof Reflect ? Reflect : null;
var r = n && "function" == typeof n.apply ? n.apply : function(e2, t3, n2) {
  return Function.prototype.apply.call(e2, t3, n2);
};
t2 = n && "function" == typeof n.ownKeys ? n.ownKeys : Object.getOwnPropertySymbols ? function(e2) {
  return Object.getOwnPropertyNames(e2).concat(Object.getOwnPropertySymbols(e2));
} : function(e2) {
  return Object.getOwnPropertyNames(e2);
};
var i = Number.isNaN || function(e2) {
  return e2 != e2;
};
function o() {
  o.init.call(this);
}
e = o, o.EventEmitter = o, o.prototype._events = void 0, o.prototype._eventsCount = 0, o.prototype._maxListeners = void 0;
var s = 10;
function u(e2) {
  if ("function" != typeof e2)
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e2);
}
function f(e2) {
  return void 0 === e2._maxListeners ? o.defaultMaxListeners : e2._maxListeners;
}
function v(e2, t3, n2, r2) {
  var i2, o2, s2, v2;
  if (u(n2), void 0 === (o2 = e2._events) ? (o2 = e2._events = /* @__PURE__ */ Object.create(null), e2._eventsCount = 0) : (void 0 !== o2.newListener && (e2.emit("newListener", t3, n2.listener ? n2.listener : n2), o2 = e2._events), s2 = o2[t3]), void 0 === s2)
    s2 = o2[t3] = n2, ++e2._eventsCount;
  else if ("function" == typeof s2 ? s2 = o2[t3] = r2 ? [n2, s2] : [s2, n2] : r2 ? s2.unshift(n2) : s2.push(n2), (i2 = f(e2)) > 0 && s2.length > i2 && !s2.warned) {
    s2.warned = true;
    var a2 = new Error("Possible EventEmitter memory leak detected. " + s2.length + " " + String(t3) + " listeners added. Use emitter.setMaxListeners() to increase limit");
    a2.name = "MaxListenersExceededWarning", a2.emitter = e2, a2.type = t3, a2.count = s2.length, v2 = a2, console && console.warn && console.warn(v2);
  }
  return e2;
}
function a() {
  if (!this.fired)
    return this.target.removeListener(this.type, this.wrapFn), this.fired = true, 0 === arguments.length ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
}
function l(e2, t3, n2) {
  var r2 = { fired: false, wrapFn: void 0, target: e2, type: t3, listener: n2 }, i2 = a.bind(r2);
  return i2.listener = n2, r2.wrapFn = i2, i2;
}
function h(e2, t3, n2) {
  var r2 = e2._events;
  if (void 0 === r2)
    return [];
  var i2 = r2[t3];
  return void 0 === i2 ? [] : "function" == typeof i2 ? n2 ? [i2.listener || i2] : [i2] : n2 ? function(e3) {
    for (var t4 = new Array(e3.length), n3 = 0; n3 < t4.length; ++n3)
      t4[n3] = e3[n3].listener || e3[n3];
    return t4;
  }(i2) : c(i2, i2.length);
}
function p(e2) {
  var t3 = this._events;
  if (void 0 !== t3) {
    var n2 = t3[e2];
    if ("function" == typeof n2)
      return 1;
    if (void 0 !== n2)
      return n2.length;
  }
  return 0;
}
function c(e2, t3) {
  for (var n2 = new Array(t3), r2 = 0; r2 < t3; ++r2)
    n2[r2] = e2[r2];
  return n2;
}
Object.defineProperty(o, "defaultMaxListeners", { enumerable: true, get: function() {
  return s;
}, set: function(e2) {
  if ("number" != typeof e2 || e2 < 0 || i(e2))
    throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e2 + ".");
  s = e2;
} }), o.init = function() {
  void 0 !== this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
}, o.prototype.setMaxListeners = function(e2) {
  if ("number" != typeof e2 || e2 < 0 || i(e2))
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e2 + ".");
  return this._maxListeners = e2, this;
}, o.prototype.getMaxListeners = function() {
  return f(this);
}, o.prototype.emit = function(e2) {
  for (var t3 = [], n2 = 1; n2 < arguments.length; n2++)
    t3.push(arguments[n2]);
  var i2 = "error" === e2, o2 = this._events;
  if (void 0 !== o2)
    i2 = i2 && void 0 === o2.error;
  else if (!i2)
    return false;
  if (i2) {
    var s2;
    if (t3.length > 0 && (s2 = t3[0]), s2 instanceof Error)
      throw s2;
    var u2 = new Error("Unhandled error." + (s2 ? " (" + s2.message + ")" : ""));
    throw u2.context = s2, u2;
  }
  var f2 = o2[e2];
  if (void 0 === f2)
    return false;
  if ("function" == typeof f2)
    r(f2, this, t3);
  else {
    var v2 = f2.length, a2 = c(f2, v2);
    for (n2 = 0; n2 < v2; ++n2)
      r(a2[n2], this, t3);
  }
  return true;
}, o.prototype.addListener = function(e2, t3) {
  return v(this, e2, t3, false);
}, o.prototype.on = o.prototype.addListener, o.prototype.prependListener = function(e2, t3) {
  return v(this, e2, t3, true);
}, o.prototype.once = function(e2, t3) {
  return u(t3), this.on(e2, l(this, e2, t3)), this;
}, o.prototype.prependOnceListener = function(e2, t3) {
  return u(t3), this.prependListener(e2, l(this, e2, t3)), this;
}, o.prototype.removeListener = function(e2, t3) {
  var n2, r2, i2, o2, s2;
  if (u(t3), void 0 === (r2 = this._events))
    return this;
  if (void 0 === (n2 = r2[e2]))
    return this;
  if (n2 === t3 || n2.listener === t3)
    0 == --this._eventsCount ? this._events = /* @__PURE__ */ Object.create(null) : (delete r2[e2], r2.removeListener && this.emit("removeListener", e2, n2.listener || t3));
  else if ("function" != typeof n2) {
    for (i2 = -1, o2 = n2.length - 1; o2 >= 0; o2--)
      if (n2[o2] === t3 || n2[o2].listener === t3) {
        s2 = n2[o2].listener, i2 = o2;
        break;
      }
    if (i2 < 0)
      return this;
    0 === i2 ? n2.shift() : !function(e3, t4) {
      for (; t4 + 1 < e3.length; t4++)
        e3[t4] = e3[t4 + 1];
      e3.pop();
    }(n2, i2), 1 === n2.length && (r2[e2] = n2[0]), void 0 !== r2.removeListener && this.emit("removeListener", e2, s2 || t3);
  }
  return this;
}, o.prototype.off = o.prototype.removeListener, o.prototype.removeAllListeners = function(e2) {
  var t3, n2, r2;
  if (void 0 === (n2 = this._events))
    return this;
  if (void 0 === n2.removeListener)
    return 0 === arguments.length ? (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0) : void 0 !== n2[e2] && (0 == --this._eventsCount ? this._events = /* @__PURE__ */ Object.create(null) : delete n2[e2]), this;
  if (0 === arguments.length) {
    var i2, o2 = Object.keys(n2);
    for (r2 = 0; r2 < o2.length; ++r2)
      "removeListener" !== (i2 = o2[r2]) && this.removeAllListeners(i2);
    return this.removeAllListeners("removeListener"), this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0, this;
  }
  if ("function" == typeof (t3 = n2[e2]))
    this.removeListener(e2, t3);
  else if (void 0 !== t3)
    for (r2 = t3.length - 1; r2 >= 0; r2--)
      this.removeListener(e2, t3[r2]);
  return this;
}, o.prototype.listeners = function(e2) {
  return h(this, e2, true);
}, o.prototype.rawListeners = function(e2) {
  return h(this, e2, false);
}, o.listenerCount = function(e2, t3) {
  return "function" == typeof e2.listenerCount ? e2.listenerCount(t3) : p.call(e2, t3);
}, o.prototype.listenerCount = p, o.prototype.eventNames = function() {
  return this._eventsCount > 0 ? t2(this._events) : [];
};
var y = e;
y.EventEmitter;
y.defaultMaxListeners;
y.init;
y.listenerCount;
y.EventEmitter;
y.defaultMaxListeners;
y.init;
y.listenerCount;

// node-modules-polyfills:events
y.once = function(emitter2, event) {
  return new Promise((resolve, reject) => {
    function eventListener(...args) {
      if (errorListener !== void 0) {
        emitter2.removeListener("error", errorListener);
      }
      resolve(args);
    }
    let errorListener;
    if (event !== "error") {
      errorListener = (err) => {
        emitter2.removeListener(name, eventListener);
        reject(err);
      };
      emitter2.once("error", errorListener);
    }
    emitter2.once(event, eventListener);
  });
};
y.on = function(emitter2, event) {
  const unconsumedEventValues = [];
  const unconsumedPromises = [];
  let error = null;
  let finished = false;
  const iterator = {
    async next() {
      const value = unconsumedEventValues.shift();
      if (value) {
        return createIterResult(value, false);
      }
      if (error) {
        const p2 = Promise.reject(error);
        error = null;
        return p2;
      }
      if (finished) {
        return createIterResult(void 0, true);
      }
      return new Promise((resolve, reject) => unconsumedPromises.push({ resolve, reject }));
    },
    async return() {
      emitter2.removeListener(event, eventHandler);
      emitter2.removeListener("error", errorHandler);
      finished = true;
      for (const promise of unconsumedPromises) {
        promise.resolve(createIterResult(void 0, true));
      }
      return createIterResult(void 0, true);
    },
    throw(err) {
      error = err;
      emitter2.removeListener(event, eventHandler);
      emitter2.removeListener("error", errorHandler);
    },
    [Symbol.asyncIterator]() {
      return this;
    }
  };
  emitter2.on(event, eventHandler);
  emitter2.on("error", errorHandler);
  return iterator;
  function eventHandler(...args) {
    const promise = unconsumedPromises.shift();
    if (promise) {
      promise.resolve(createIterResult(args, false));
    } else {
      unconsumedEventValues.push(args);
    }
  }
  function errorHandler(err) {
    finished = true;
    const toError = unconsumedPromises.shift();
    if (toError) {
      toError.reject(err);
    } else {
      error = err;
    }
    iterator.return();
  }
};
var {
  EventEmitter,
  defaultMaxListeners,
  init,
  listenerCount,
  on,
  once
} = y;

// src/app/events/events.ts
var EVENTS = {
  ISSUE_CHANGED: "issue-changed",
  ISSUE_CREATED: "issue-created",
  ISSUE_DELETED: "issue-deleted"
};
var emitter = new EventEmitter();

// src/app/ui/main/project/project.store.tsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var ProjectContext = (0, import_react.createContext)(void 0);
var ProjectContextProvider = ({
  project,
  children
}) => {
  const [search, setSearch] = (0, import_react.useState)("");
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ProjectContext.Provider, { value: { project, search, setSearch }, children }, void 0, false, {
    fileName: "src/app/ui/main/project/project.store.tsx",
    lineNumber: 28,
    columnNumber: 5
  }, this);
};
var useProjectStore = () => {
  const projectStore = (0, import_react.useContext)(ProjectContext);
  if (!projectStore) {
    throw new Error("Project context not found");
  }
  return projectStore;
};

// node_modules/react-icons/hi/index.esm.js
function HiExclamation(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z", "clipRule": "evenodd" } }] })(props);
}
function HiFlag(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z", "clipRule": "evenodd" } }] })(props);
}

// src/app/components/icons.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
var TaskIcon = ({
  size = 24,
  className = ""
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "relative flex items-center before:absolute before:inset-1/2 before:h-3/4 before:w-3/4 before:-translate-x-1/2 before:-translate-y-1/2 before:bg-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
  FaCheckSquare,
  {
    fill: "#4BADE8",
    className: t("relative", className),
    size
  },
  void 0,
  false,
  {
    fileName: "src/app/components/icons.tsx",
    lineNumber: 9,
    columnNumber: 5
  },
  this
) }, void 0, false, {
  fileName: "src/app/components/icons.tsx",
  lineNumber: 8,
  columnNumber: 3
}, this);

// src/app/components/priority-icon.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
var PriorityIcon = ({
  priority,
  size = 18
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
  "span",
  {
    className: t(
      "flex",
      priority === "low" && "text-success-main",
      priority === "medium" && "text-warn-main",
      priority === "high" && "text-error-main"
    ),
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(HiExclamation, { size }, void 0, false, {
      fileName: "src/app/components/priority-icon.tsx",
      lineNumber: 18,
      columnNumber: 5
    }, this)
  },
  void 0,
  false,
  {
    fileName: "src/app/components/priority-icon.tsx",
    lineNumber: 10,
    columnNumber: 3
  },
  this
);

export {
  ProjectContextProvider,
  useProjectStore,
  DEFAULT_SORT,
  sortList,
  isValidSort,
  HiFlag,
  TaskIcon,
  PriorityIcon,
  EVENTS
};
//# sourceMappingURL=/build/_shared/chunk-4NR53C3Y.js.map
