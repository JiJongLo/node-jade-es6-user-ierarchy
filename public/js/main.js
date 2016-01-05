webpackJsonp([1], [function (t, e, n) {
	"use strict";
	function r(t) {
		return t && t.__esModule ? t : {"default": t}
	}

	n(270);
	var o = n(35), i = r(o), a = n(448), u = r(a), s = n(90), c = n(273), l = r(c), f = n(276), h = r(f);
	n(394);
	var p = (0, h["default"])();
	u["default"].render(i["default"].createElement(s.Provider, {store: p}, i["default"].createElement(l["default"], null)), document.getElementById("main"))
}, , function (t, e, n) {
	var r = n(11), o = n(32), i = n(27), a = n(22), u = n(25), s = "prototype", c = function (t, e, n) {
		var l, f, h, p, d = t & c.F, g = t & c.G, v = t & c.S, m = t & c.P, y = t & c.B, b = g ? r : v ? r[e] || (r[e] = {}) : (r[e] || {})[s], x = g ? o : o[e] || (o[e] = {}), w = x[s] || (x[s] = {});
		g && (n = e);
		for (l in n)f = !d && b && l in b, h = (f ? b : n)[l], p = y && f ? u(h, r) : m && "function" == typeof h ? u(Function.call, h) : h, b && !f && a(b, l, h), x[l] != h && i(x, l, p), m && w[l] != h && (w[l] = h)
	};
	r.core = o, c.F = 1, c.G = 2, c.S = 4, c.P = 8, c.B = 16, c.W = 32, t.exports = c
}, , , function (t, e) {
	var n = Object;
	t.exports = {
		create: n.create,
		getProto: n.getPrototypeOf,
		isEnum: {}.propertyIsEnumerable,
		getDesc: n.getOwnPropertyDescriptor,
		setDesc: n.defineProperty,
		setDescs: n.defineProperties,
		getKeys: n.keys,
		getNames: n.getOwnPropertyNames,
		getSymbols: n.getOwnPropertySymbols,
		each: [].forEach
	}
}, , , function (t, e) {
	t.exports = function (t) {
		return "object" == typeof t ? null !== t : "function" == typeof t
	}
}, function (t, e, n) {
	var r = n(8);
	t.exports = function (t) {
		if (!r(t))throw TypeError(t + " is not an object!");
		return t
	}
}, function (t, e, n) {
	var r = n(129)("wks"), o = n(42), i = n(11).Symbol;
	t.exports = function (t) {
		return r[t] || (r[t] = i && i[t] || (i || o)("Symbol." + t))
	}
}, function (t, e) {
	var n = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
	"number" == typeof __g && (__g = n)
}, , function (t, e) {
	t.exports = function (t) {
		try {
			return !!t()
		} catch (e) {
			return !0
		}
	}
}, , , , function (t, e) {
	var n = {}.hasOwnProperty;
	t.exports = function (t, e) {
		return n.call(t, e)
	}
}, function (t, e, n) {
	var r = n(49), o = Math.min;
	t.exports = function (t) {
		return t > 0 ? o(r(t), 9007199254740991) : 0
	}
}, , function (t, e, n) {
	t.exports = !n(13)(function () {
		return 7 != Object.defineProperty({}, "a", {
					get: function () {
						return 7
					}
				}).a
	})
}, function (t, e, n) {
	var r = n(2), o = n(32), i = n(13);
	t.exports = function (t, e) {
		var n = (o.Object || {})[t] || Object[t], a = {};
		a[t] = e(n), r(r.S + r.F * i(function () {
					n(1)
				}), "Object", a)
	}
}, function (t, e, n) {
	var r = n(11), o = n(27), i = n(42)("src"), a = "toString", u = Function[a], s = ("" + u).split(a);
	n(32).inspectSource = function (t) {
		return u.call(t)
	}, (t.exports = function (t, e, n, a) {
		"function" == typeof n && (n.hasOwnProperty(i) || o(n, i, t[e] ? "" + t[e] : s.join(String(e))), n.hasOwnProperty("name") || o(n, "name", e)), t === r ? t[e] = n : (a || delete t[e], o(t, e, n))
	})(Function.prototype, a, function () {
		return "function" == typeof this && this[i] || u.call(this)
	})
}, function (t, e, n) {
	var r = n(60), o = n(26);
	t.exports = function (t) {
		return r(o(t))
	}
}, , function (t, e, n) {
	var r = n(40);
	t.exports = function (t, e, n) {
		if (r(t), void 0 === e)return t;
		switch (n) {
			case 1:
				return function (n) {
					return t.call(e, n)
				};
			case 2:
				return function (n, r) {
					return t.call(e, n, r)
				};
			case 3:
				return function (n, r, o) {
					return t.call(e, n, r, o)
				}
		}
		return function () {
			return t.apply(e, arguments)
		}
	}
}, function (t, e) {
	t.exports = function (t) {
		if (void 0 == t)throw TypeError("Can't call method on  " + t);
		return t
	}
}, function (t, e, n) {
	var r = n(5), o = n(36);
	t.exports = n(20) ? function (t, e, n) {
		return r.setDesc(t, e, o(1, n))
	} : function (t, e, n) {
		return t[e] = n, t
	}
}, , , , function (t, e) {
	var n = {}.toString;
	t.exports = function (t) {
		return n.call(t).slice(8, -1)
	}
}, function (t, e) {
	var n = t.exports = {version: "1.2.6"};
	"number" == typeof __e && (__e = n)
}, function (t, e, n) {
	var r = n(26);
	t.exports = function (t) {
		return Object(r(t))
	}
}, , , function (t, e) {
	t.exports = function (t, e) {
		return {enumerable: !(1 & t), configurable: !(2 & t), writable: !(4 & t), value: e}
	}
}, , , , function (t, e) {
	t.exports = function (t) {
		if ("function" != typeof t)throw TypeError(t + " is not a function!");
		return t
	}
}, function (t, e, n) {
	var r = n(10)("unscopables"), o = Array.prototype;
	void 0 == o[r] && n(27)(o, r, {}), t.exports = function (t) {
		o[r][t] = !0
	}
}, function (t, e) {
	var n = 0, r = Math.random();
	t.exports = function (t) {
		return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++n + r).toString(36))
	}
}, function (t, e) {
	"use strict";
	Object.defineProperty(e, "__esModule", {value: !0}), e["default"] = {
		red50: "#ffebee",
		red100: "#ffcdd2",
		red200: "#ef9a9a",
		red300: "#e57373",
		red400: "#ef5350",
		red500: "#f44336",
		red600: "#e53935",
		red700: "#d32f2f",
		red800: "#c62828",
		red900: "#b71c1c",
		redA100: "#ff8a80",
		redA200: "#ff5252",
		redA400: "#ff1744",
		redA700: "#d50000",
		pink50: "#fce4ec",
		pink100: "#f8bbd0",
		pink200: "#f48fb1",
		pink300: "#f06292",
		pink400: "#ec407a",
		pink500: "#e91e63",
		pink600: "#d81b60",
		pink700: "#c2185b",
		pink800: "#ad1457",
		pink900: "#880e4f",
		pinkA100: "#ff80ab",
		pinkA200: "#ff4081",
		pinkA400: "#f50057",
		pinkA700: "#c51162",
		purple50: "#f3e5f5",
		purple100: "#e1bee7",
		purple200: "#ce93d8",
		purple300: "#ba68c8",
		purple400: "#ab47bc",
		purple500: "#9c27b0",
		purple600: "#8e24aa",
		purple700: "#7b1fa2",
		purple800: "#6a1b9a",
		purple900: "#4a148c",
		purpleA100: "#ea80fc",
		purpleA200: "#e040fb",
		purpleA400: "#d500f9",
		purpleA700: "#aa00ff",
		deepPurple50: "#ede7f6",
		deepPurple100: "#d1c4e9",
		deepPurple200: "#b39ddb",
		deepPurple300: "#9575cd",
		deepPurple400: "#7e57c2",
		deepPurple500: "#673ab7",
		deepPurple600: "#5e35b1",
		deepPurple700: "#512da8",
		deepPurple800: "#4527a0",
		deepPurple900: "#311b92",
		deepPurpleA100: "#b388ff",
		deepPurpleA200: "#7c4dff",
		deepPurpleA400: "#651fff",
		deepPurpleA700: "#6200ea",
		indigo50: "#e8eaf6",
		indigo100: "#c5cae9",
		indigo200: "#9fa8da",
		indigo300: "#7986cb",
		indigo400: "#5c6bc0",
		indigo500: "#3f51b5",
		indigo600: "#3949ab",
		indigo700: "#303f9f",
		indigo800: "#283593",
		indigo900: "#1a237e",
		indigoA100: "#8c9eff",
		indigoA200: "#536dfe",
		indigoA400: "#3d5afe",
		indigoA700: "#304ffe",
		blue50: "#e3f2fd",
		blue100: "#bbdefb",
		blue200: "#90caf9",
		blue300: "#64b5f6",
		blue400: "#42a5f5",
		blue500: "#2196f3",
		blue600: "#1e88e5",
		blue700: "#1976d2",
		blue800: "#1565c0",
		blue900: "#0d47a1",
		blueA100: "#82b1ff",
		blueA200: "#448aff",
		blueA400: "#2979ff",
		blueA700: "#2962ff",
		lightBlue50: "#e1f5fe",
		lightBlue100: "#b3e5fc",
		lightBlue200: "#81d4fa",
		lightBlue300: "#4fc3f7",
		lightBlue400: "#29b6f6",
		lightBlue500: "#03a9f4",
		lightBlue600: "#039be5",
		lightBlue700: "#0288d1",
		lightBlue800: "#0277bd",
		lightBlue900: "#01579b",
		lightBlueA100: "#80d8ff",
		lightBlueA200: "#40c4ff",
		lightBlueA400: "#00b0ff",
		lightBlueA700: "#0091ea",
		cyan50: "#e0f7fa",
		cyan100: "#b2ebf2",
		cyan200: "#80deea",
		cyan300: "#4dd0e1",
		cyan400: "#26c6da",
		cyan500: "#00bcd4",
		cyan600: "#00acc1",
		cyan700: "#0097a7",
		cyan800: "#00838f",
		cyan900: "#006064",
		cyanA100: "#84ffff",
		cyanA200: "#18ffff",
		cyanA400: "#00e5ff",
		cyanA700: "#00b8d4",
		teal50: "#e0f2f1",
		teal100: "#b2dfdb",
		teal200: "#80cbc4",
		teal300: "#4db6ac",
		teal400: "#26a69a",
		teal500: "#009688",
		teal600: "#00897b",
		teal700: "#00796b",
		teal800: "#00695c",
		teal900: "#004d40",
		tealA100: "#a7ffeb",
		tealA200: "#64ffda",
		tealA400: "#1de9b6",
		tealA700: "#00bfa5",
		green50: "#e8f5e9",
		green100: "#c8e6c9",
		green200: "#a5d6a7",
		green300: "#81c784",
		green400: "#66bb6a",
		green500: "#4caf50",
		green600: "#43a047",
		green700: "#388e3c",
		green800: "#2e7d32",
		green900: "#1b5e20",
		greenA100: "#b9f6ca",
		greenA200: "#69f0ae",
		greenA400: "#00e676",
		greenA700: "#00c853",
		lightGreen50: "#f1f8e9",
		lightGreen100: "#dcedc8",
		lightGreen200: "#c5e1a5",
		lightGreen300: "#aed581",
		lightGreen400: "#9ccc65",
		lightGreen500: "#8bc34a",
		lightGreen600: "#7cb342",
		lightGreen700: "#689f38",
		lightGreen800: "#558b2f",
		lightGreen900: "#33691e",
		lightGreenA100: "#ccff90",
		lightGreenA200: "#b2ff59",
		lightGreenA400: "#76ff03",
		lightGreenA700: "#64dd17",
		lime50: "#f9fbe7",
		lime100: "#f0f4c3",
		lime200: "#e6ee9c",
		lime300: "#dce775",
		lime400: "#d4e157",
		lime500: "#cddc39",
		lime600: "#c0ca33",
		lime700: "#afb42b",
		lime800: "#9e9d24",
		lime900: "#827717",
		limeA100: "#f4ff81",
		limeA200: "#eeff41",
		limeA400: "#c6ff00",
		limeA700: "#aeea00",
		yellow50: "#fffde7",
		yellow100: "#fff9c4",
		yellow200: "#fff59d",
		yellow300: "#fff176",
		yellow400: "#ffee58",
		yellow500: "#ffeb3b",
		yellow600: "#fdd835",
		yellow700: "#fbc02d",
		yellow800: "#f9a825",
		yellow900: "#f57f17",
		yellowA100: "#ffff8d",
		yellowA200: "#ffff00",
		yellowA400: "#ffea00",
		yellowA700: "#ffd600",
		amber50: "#fff8e1",
		amber100: "#ffecb3",
		amber200: "#ffe082",
		amber300: "#ffd54f",
		amber400: "#ffca28",
		amber500: "#ffc107",
		amber600: "#ffb300",
		amber700: "#ffa000",
		amber800: "#ff8f00",
		amber900: "#ff6f00",
		amberA100: "#ffe57f",
		amberA200: "#ffd740",
		amberA400: "#ffc400",
		amberA700: "#ffab00",
		orange50: "#fff3e0",
		orange100: "#ffe0b2",
		orange200: "#ffcc80",
		orange300: "#ffb74d",
		orange400: "#ffa726",
		orange500: "#ff9800",
		orange600: "#fb8c00",
		orange700: "#f57c00",
		orange800: "#ef6c00",
		orange900: "#e65100",
		orangeA100: "#ffd180",
		orangeA200: "#ffab40",
		orangeA400: "#ff9100",
		orangeA700: "#ff6d00",
		deepOrange50: "#fbe9e7",
		deepOrange100: "#ffccbc",
		deepOrange200: "#ffab91",
		deepOrange300: "#ff8a65",
		deepOrange400: "#ff7043",
		deepOrange500: "#ff5722",
		deepOrange600: "#f4511e",
		deepOrange700: "#e64a19",
		deepOrange800: "#d84315",
		deepOrange900: "#bf360c",
		deepOrangeA100: "#ff9e80",
		deepOrangeA200: "#ff6e40",
		deepOrangeA400: "#ff3d00",
		deepOrangeA700: "#dd2c00",
		brown50: "#efebe9",
		brown100: "#d7ccc8",
		brown200: "#bcaaa4",
		brown300: "#a1887f",
		brown400: "#8d6e63",
		brown500: "#795548",
		brown600: "#6d4c41",
		brown700: "#5d4037",
		brown800: "#4e342e",
		brown900: "#3e2723",
		blueGrey50: "#eceff1",
		blueGrey100: "#cfd8dc",
		blueGrey200: "#b0bec5",
		blueGrey300: "#90a4ae",
		blueGrey400: "#78909c",
		blueGrey500: "#607d8b",
		blueGrey600: "#546e7a",
		blueGrey700: "#455a64",
		blueGrey800: "#37474f",
		blueGrey900: "#263238",
		grey50: "#fafafa",
		grey100: "#f5f5f5",
		grey200: "#eeeeee",
		grey300: "#e0e0e0",
		grey400: "#bdbdbd",
		grey500: "#9e9e9e",
		grey600: "#757575",
		grey700: "#616161",
		grey800: "#424242",
		grey900: "#212121",
		black: "#000000",
		white: "#ffffff",
		transparent: "rgba(0, 0, 0, 0)",
		fullBlack: "rgba(0, 0, 0, 1)",
		darkBlack: "rgba(0, 0, 0, 0.87)",
		lightBlack: "rgba(0, 0, 0, 0.54)",
		minBlack: "rgba(0, 0, 0, 0.26)",
		faintBlack: "rgba(0, 0, 0, 0.12)",
		fullWhite: "rgba(255, 255, 255, 1)",
		darkWhite: "rgba(255, 255, 255, 0.87)",
		lightWhite: "rgba(255, 255, 255, 0.54)"
	}, t.exports = e["default"]
}, , function (t, e, n) {
	var r = n(25), o = n(122), i = n(119), a = n(9), u = n(18), s = n(133);
	t.exports = function (t, e, n, c) {
		var l, f, h, p = s(t), d = r(n, c, e ? 2 : 1), g = 0;
		if ("function" != typeof p)throw TypeError(t + " is not iterable!");
		if (i(p))for (l = u(t.length); l > g; g++)e ? d(a(f = t[g])[0], f[1]) : d(t[g]); else for (h = p.call(t); !(f = h.next()).done;)o(h, d, f.value, e)
	}
}, function (t, e) {
	t.exports = {}
}, function (t, e, n) {
	var r = n(5).setDesc, o = n(17), i = n(10)("toStringTag");
	t.exports = function (t, e, n) {
		t && !o(t = n ? t : t.prototype, i) && r(t, i, {configurable: !0, value: e})
	}
}, function (t, e, n) {
	var r = n(49), o = Math.max, i = Math.min;
	t.exports = function (t, e) {
		return t = r(t), 0 > t ? o(t + e, 0) : i(t, e)
	}
}, function (t, e) {
	var n = Math.ceil, r = Math.floor;
	t.exports = function (t) {
		return isNaN(t = +t) ? 0 : (t > 0 ? r : n)(t)
	}
}, , , , , , function (t, e, n) {
	var r = n(25), o = n(60), i = n(33), a = n(18), u = n(280);
	t.exports = function (t) {
		var e = 1 == t, n = 2 == t, s = 3 == t, c = 4 == t, l = 6 == t, f = 5 == t || l;
		return function (h, p, d) {
			for (var g, v, m = i(h), y = o(m), b = r(p, d, 3), x = a(y.length), w = 0, M = e ? u(h, x) : n ? u(h, 0) : void 0; x > w; w++)if ((f || w in y) && (g = y[w], v = b(g, w, m), t))if (e)M[w] = v; else if (v)switch (t) {
				case 3:
					return !0;
				case 5:
					return g;
				case 6:
					return w;
				case 2:
					M.push(g)
			} else if (c)return !1;
			return l ? -1 : s || c ? c : M
		}
	}
}, function (t, e, n) {
	var r = n(31), o = n(10)("toStringTag"), i = "Arguments" == r(function () {
				return arguments
			}());
	t.exports = function (t) {
		var e, n, a;
		return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof(n = (e = Object(t))[o]) ? n : i ? r(e) : "Object" == (a = r(e)) && "function" == typeof e.callee ? "Arguments" : a
	}
}, function (t, e, n) {
	"use strict";
	var r = n(11), o = n(2), i = n(22), a = n(61), u = n(45), s = n(63), c = n(8), l = n(13), f = n(79), h = n(47);
	t.exports = function (t, e, n, p, d, g) {
		var v = r[t], m = v, y = d ? "set" : "add", b = m && m.prototype, x = {}, w = function (t) {
			var e = b[t];
			i(b, t, "delete" == t ? function (t) {
				return g && !c(t) ? !1 : e.call(this, 0 === t ? 0 : t)
			} : "has" == t ? function (t) {
				return g && !c(t) ? !1 : e.call(this, 0 === t ? 0 : t)
			} : "get" == t ? function (t) {
				return g && !c(t) ? void 0 : e.call(this, 0 === t ? 0 : t)
			} : "add" == t ? function (t) {
				return e.call(this, 0 === t ? 0 : t), this
			} : function (t, n) {
				return e.call(this, 0 === t ? 0 : t, n), this
			})
		};
		if ("function" == typeof m && (g || b.forEach && !l(function () {
					(new m).entries().next()
				}))) {
			var M, k = new m, C = k[y](g ? {} : -0, 1) != k, S = l(function () {
				k.has(1)
			}), _ = f(function (t) {
				new m(t)
			});
			_ || (m = e(function (e, n) {
				s(e, m, t);
				var r = new v;
				return void 0 != n && u(n, d, r[y], r), r
			}), m.prototype = b, b.constructor = m), g || k.forEach(function (t, e) {
				M = 1 / e === -(1 / 0)
			}), (S || M) && (w("delete"), w("has"), d && w("get")), (M || C) && w(y), g && b.clear && delete b.clear
		} else m = p.getConstructor(e, t, d, y), a(m.prototype, n);
		return h(m, t), x[t] = m, o(o.G + o.W + o.F * (m != v), x), g || p.setStrong(m, t, d), m
	}
}, function (t, e, n) {
	"use strict";
	var r = n(27), o = n(22), i = n(13), a = n(26), u = n(10);
	t.exports = function (t, e, n) {
		var s = u(t), c = ""[t];
		i(function () {
			var e = {};
			return e[s] = function () {
				return 7
			}, 7 != ""[t](e)
		}) && (o(String.prototype, t, n(a, s, c)), r(RegExp.prototype, s, 2 == e ? function (t, e) {
			return c.call(t, this, e)
		} : function (t) {
			return c.call(t, this)
		}))
	}
}, function (t, e) {
	t.exports = function (t, e, n) {
		var r = void 0 === n;
		switch (e.length) {
			case 0:
				return r ? t() : t.call(n);
			case 1:
				return r ? t(e[0]) : t.call(n, e[0]);
			case 2:
				return r ? t(e[0], e[1]) : t.call(n, e[0], e[1]);
			case 3:
				return r ? t(e[0], e[1], e[2]) : t.call(n, e[0], e[1], e[2]);
			case 4:
				return r ? t(e[0], e[1], e[2], e[3]) : t.call(n, e[0], e[1], e[2], e[3])
		}
		return t.apply(n, e)
	}
}, function (t, e, n) {
	var r = n(31);
	t.exports = Object("z").propertyIsEnumerable(0) ? Object : function (t) {
		return "String" == r(t) ? t.split("") : Object(t)
	}
}, function (t, e, n) {
	var r = n(22);
	t.exports = function (t, e) {
		for (var n in e)r(t, n, e[n]);
		return t
	}
}, function (t, e, n) {
	"use strict";
	var r = n(11), o = n(5), i = n(20), a = n(10)("species");
	t.exports = function (t) {
		var e = r[t];
		i && e && !e[a] && o.setDesc(e, a, {
			configurable: !0, get: function () {
				return this
			}
		})
	}
}, function (t, e) {
	t.exports = function (t, e, n) {
		if (!(t instanceof e))throw TypeError(n + ": use the 'new' operator!");
		return t
	}
}, function (t, e, n) {
	var r = n(2), o = n(26), i = n(13), a = "	\n\x0B\f\r   ᠎             　\u2028\u2029\ufeff", u = "[" + a + "]", s = "​", c = RegExp("^" + u + u + "*"), l = RegExp(u + u + "*$"), f = function (t, e) {
		var n = {};
		n[t] = e(h), r(r.P + r.F * i(function () {
					return !!a[t]() || s[t]() != s
				}), "String", n)
	}, h = f.trim = function (t, e) {
		return t = String(o(t)), 1 & e && (t = t.replace(c, "")), 2 & e && (t = t.replace(l, "")), t
	};
	t.exports = f
}, , function (t, e) {
	function n(t) {
		return !!t && "object" == typeof t
	}

	function r(t) {
		return function (e) {
			return null == e ? void 0 : e[t]
		}
	}

	function o(t) {
		return null != t && i(f(t))
	}

	function i(t) {
		return "number" == typeof t && t > -1 && t % 1 == 0 && l >= t
	}

	function a(t) {
		return n(t) && o(t) && s.call(t, "callee") && !c.call(t, "callee")
	}

	var u = Object.prototype, s = u.hasOwnProperty, c = u.propertyIsEnumerable, l = 9007199254740991, f = r("length");
	t.exports = a
}, , , , , , , , , , function (t, e, n) {
	var r = n(10)("match");
	t.exports = function (t) {
		var e = /./;
		try {
			"/./"[t](e)
		} catch (n) {
			try {
				return e[r] = !1, !"/./"[t](e)
			} catch (o) {
			}
		}
		return !0
	}
}, function (t, e, n) {
	var r = n(31);
	t.exports = Array.isArray || function (t) {
				return "Array" == r(t)
			}
}, function (t, e, n) {
	"use strict";
	var r = n(80), o = n(2), i = n(22), a = n(27), u = n(17), s = n(46), c = n(123), l = n(47), f = n(5).getProto, h = n(10)("iterator"), p = !([].keys && "next" in [].keys()), d = "@@iterator", g = "keys", v = "values", m = function () {
		return this
	};
	t.exports = function (t, e, n, y, b, x, w) {
		c(n, e, y);
		var M, k, C = function (t) {
			if (!p && t in T)return T[t];
			switch (t) {
				case g:
					return function () {
						return new n(this, t)
					};
				case v:
					return function () {
						return new n(this, t)
					}
			}
			return function () {
				return new n(this, t)
			}
		}, S = e + " Iterator", _ = b == v, E = !1, T = t.prototype, A = T[h] || T[d] || b && T[b], O = A || C(b);
		if (A) {
			var N = f(O.call(new t));
			l(N, S, !0), !r && u(T, d) && a(N, h, m), _ && A.name !== v && (E = !0, O = function () {
				return A.call(this)
			})
		}
		if (r && !w || !p && !E && T[h] || a(T, h, O), s[e] = O, s[S] = m, b)if (M = {
					values: _ ? O : C(v),
					keys: x ? O : C(g),
					entries: _ ? C("entries") : O
				}, w)for (k in M)k in T || i(T, k, M[k]); else o(o.P + o.F * (p || E), e, M);
		return M
	}
}, function (t, e, n) {
	var r = n(10)("iterator"), o = !1;
	try {
		var i = [7][r]();
		i["return"] = function () {
			o = !0
		}, Array.from(i, function () {
			throw 2
		})
	} catch (a) {
	}
	t.exports = function (t, e) {
		if (!e && !o)return !1;
		var n = !1;
		try {
			var i = [7], a = i[r]();
			a.next = function () {
				n = !0
			}, i[r] = function () {
				return a
			}, t(i)
		} catch (u) {
		}
		return n
	}
}, function (t, e) {
	t.exports = !1
}, function (t, e) {
	t.exports = Math.expm1 || function (t) {
				return 0 == (t = +t) ? t : t > -1e-6 && 1e-6 > t ? t + t * t / 2 : Math.exp(t) - 1
			}
}, function (t, e) {
	t.exports = Math.sign || function (t) {
				return 0 == (t = +t) || t != t ? t : 0 > t ? -1 : 1
			}
}, function (t, e, n) {
	var r = n(5).getDesc, o = n(8), i = n(9), a = function (t, e) {
		if (i(t), !o(e) && null !== e)throw TypeError(e + ": can't set as prototype!")
	};
	t.exports = {
		set: Object.setPrototypeOf || ("__proto__" in {} ? function (t, e, o) {
			try {
				o = n(25)(Function.call, r(Object.prototype, "__proto__").set, 2), o(t, []), e = !(t instanceof Array)
			} catch (i) {
				e = !0
			}
			return function (t, n) {
				return a(t, n), e ? t.__proto__ = n : o(t, n), t
			}
		}({}, !1) : void 0), check: a
	}
}, function (t, e, n) {
	var r = n(49), o = n(26);
	t.exports = function (t) {
		return function (e, n) {
			var i, a, u = String(o(e)), s = r(n), c = u.length;
			return 0 > s || s >= c ? t ? "" : void 0 : (i = u.charCodeAt(s), 55296 > i || i > 56319 || s + 1 === c || (a = u.charCodeAt(s + 1)) < 56320 || a > 57343 ? t ? u.charAt(s) : i : t ? u.slice(s, s + 2) : (i - 55296 << 10) + (a - 56320) + 65536)
		}
	}
}, function (t, e, n) {
	var r = n(121), o = n(26);
	t.exports = function (t, e, n) {
		if (r(e))throw TypeError("String#" + n + " doesn't accept regex!");
		return String(o(t))
	}
}, function (t, e) {
	function n(t) {
		return !!t && "object" == typeof t
	}

	function r(t, e) {
		var n = null == t ? void 0 : t[e];
		return u(n) ? n : void 0
	}

	function o(t) {
		return "number" == typeof t && t > -1 && t % 1 == 0 && m >= t
	}

	function i(t) {
		return a(t) && d.call(t) == c
	}

	function a(t) {
		var e = typeof t;
		return !!t && ("object" == e || "function" == e)
	}

	function u(t) {
		return null == t ? !1 : i(t) ? g.test(h.call(t)) : n(t) && l.test(t)
	}

	var s = "[object Array]", c = "[object Function]", l = /^\[object .+?Constructor\]$/, f = Object.prototype, h = Function.prototype.toString, p = f.hasOwnProperty, d = f.toString, g = RegExp("^" + h.call(p).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"), v = r(Array, "isArray"), m = 9007199254740991, y = v || function (t) {
				return n(t) && o(t.length) && d.call(t) == s
			};
	t.exports = y
}, function (t, e, n) {
	"use strict";
	function r(t) {
		return t && t.__esModule ? t : {"default": t}
	}

	Object.defineProperty(e, "__esModule", {value: !0});
	var o = n(43), i = r(o), a = n(89), u = r(a), s = n(88), c = r(s);
	e["default"] = {
		spacing: c["default"],
		fontFamily: "Roboto, sans-serif",
		palette: {
			primary1Color: i["default"].cyan500,
			primary2Color: i["default"].cyan700,
			primary3Color: i["default"].grey400,
			accent1Color: i["default"].pinkA200,
			accent2Color: i["default"].grey100,
			accent3Color: i["default"].grey500,
			textColor: i["default"].darkBlack,
			alternateTextColor: i["default"].white,
			canvasColor: i["default"].white,
			borderColor: i["default"].grey300,
			disabledColor: u["default"].fade(i["default"].darkBlack, .3),
			pickerHeaderColor: i["default"].cyan500,
			clockCircleColor: u["default"].fade(i["default"].darkBlack, .07)
		}
	}, t.exports = e["default"]
}, function (t, e) {
	"use strict";
	Object.defineProperty(e, "__esModule", {value: !0}), e["default"] = {
		iconSize: 24,
		desktopGutter: 24,
		desktopGutterMore: 32,
		desktopGutterLess: 16,
		desktopGutterMini: 8,
		desktopKeylineIncrement: 64,
		desktopDropDownMenuItemHeight: 32,
		desktopDropDownMenuFontSize: 15,
		desktopLeftNavMenuItemHeight: 48,
		desktopSubheaderHeight: 48,
		desktopToolbarHeight: 56
	}, t.exports = e["default"]
}, function (t, e) {
	"use strict";
	Object.defineProperty(e, "__esModule", {value: !0}), e["default"] = {
		_luminance: function (t) {
			if (t = this._decomposeColor(t), t.type.indexOf("rgb") > -1) {
				var e = t.values.map(function (t) {
					return t /= 255, .03928 >= t ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4)
				});
				return .2126 * e[0] + .7152 * e[1] + .0722 * e[2]
			}
			var n = "Calculating the relative luminance is not available for HSL and HSLA.";
			return console.error(n), -1
		}, _convertColorToString: function (t, e) {
			var n = t.type + "(" + parseInt(t.values[0]) + "," + parseInt(t.values[1]) + "," + parseInt(t.values[2]);
			return n += void 0 !== e ? "," + e + ")" : 4 === t.values.length ? "," + t.values[3] + ")" : ")"
		}, _convertHexToRGB: function (t) {
			if (4 === t.length) {
				for (var e = "#", n = 1; n < t.length; n++)e += t.charAt(n) + t.charAt(n);
				t = e
			}
			var r = {r: parseInt(t.substr(1, 2), 16), g: parseInt(t.substr(3, 2), 16), b: parseInt(t.substr(5, 2), 16)};
			return "rgb(" + r.r + "," + r.g + "," + r.b + ")"
		}, _decomposeColor: function (t) {
			if ("#" === t.charAt(0))return this._decomposeColor(this._convertHexToRGB(t));
			var e = t.indexOf("("), n = t.substring(0, e), r = t.substring(e + 1, t.length - 1).split(",");
			return {type: n, values: r}
		}, fade: function (t, e) {
			return t = this._decomposeColor(t), ("rgb" === t.type || "hsl" === t.type) && (t.type += "a"), this._convertColorToString(t, e)
		}, lighten: function (t, e) {
			if (t = this._decomposeColor(t), t.type.indexOf("hsl") > -1)return t.values[2] += e, this._decomposeColor(this._convertColorToString(t));
			if (t.type.indexOf("rgb") > -1)for (var n = 0; 3 > n; n++)t.values[n] *= 1 + e, t.values[n] > 255 && (t.values[n] = 255);
			return t.type.indexOf("a") <= -1 && (t.type += "a"), this._convertColorToString(t, "0.15")
		}, darken: function (t, e) {
			if (t = this._decomposeColor(t), t.type.indexOf("hsl") > -1)return t.values[2] += e, this._decomposeColor(this._convertColorToString(t));
			if (t.type.indexOf("rgb") > -1)for (var n = 0; 3 > n; n++)t.values[n] *= 1 - e, t.values[n] < 0 && (t.values[n] = 0);
			return this._convertColorToString(t)
		}, contrastRatio: function (t, e) {
			var n = this._luminance(t), r = this._luminance(e);
			return n >= r ? ((n + .05) / (r + .05)).toFixed(2) : ((r + .05) / (n + .05)).toFixed(2)
		}, contrastRatioLevel: function (t, e) {
			var n = {
				fail: {range: [0, 3], color: "hsl(0, 100%, 40%)"},
				"aa-large": {range: [3, 4.5], color: "hsl(40, 100%, 45%)"},
				aa: {range: [4.5, 7], color: "hsl(80, 60%, 45%)"},
				aaa: {range: [7, 22], color: "hsl(95, 60%, 41%)"}
			}, r = this.contrastRatio(t, e);
			for (var o in n) {
				var i = n[o].range;
				if (r >= i[0] && r <= i[1])return o
			}
		}
	}, t.exports = e["default"]
}, function (t, e, n) {
	"use strict";
	function r(t) {
		return t && t.__esModule ? t : {"default": t}
	}

	e.__esModule = !0;
	var o = n(35), i = r(o), a = n(449), u = r(a), s = u["default"](i["default"]), c = s.Provider, l = s.connect;
	e.Provider = c, e.connect = l
}, , , , , , , , , , , , , , , , , , , , function (t, e) {
	"use strict";
	Object.defineProperty(e, "__esModule", {value: !0});
	var n = "RECEIVE_USER";
	e.RECEIVE_USERS = n;
	var r = "REQUEST_SONGS";
	e.REQUEST_USERS = r
}, function (t, e, n) {
	var r = n(23), o = n(18), i = n(48);
	t.exports = function (t) {
		return function (e, n, a) {
			var u, s = r(e), c = o(s.length), l = i(a, c);
			if (t && n != n) {
				for (; c > l;)if (u = s[l++], u != u)return !0
			} else for (; c > l; l++)if ((t || l in s) && s[l] === n)return t || l;
			return !t && -1
		}
	}
}, function (t, e, n) {
	"use strict";
	var r = n(5), o = n(27), i = n(61), a = n(25), u = n(63), s = n(26), c = n(45), l = n(78), f = n(124), h = n(42)("id"), p = n(17), d = n(8), g = n(62), v = n(20), m = Object.isExtensible || d, y = v ? "_s" : "size", b = 0, x = function (t, e) {
		if (!d(t))return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t;
		if (!p(t, h)) {
			if (!m(t))return "F";
			if (!e)return "E";
			o(t, h, ++b)
		}
		return "O" + t[h]
	}, w = function (t, e) {
		var n, r = x(e);
		if ("F" !== r)return t._i[r];
		for (n = t._f; n; n = n.n)if (n.k == e)return n
	};
	t.exports = {
		getConstructor: function (t, e, n, o) {
			var l = t(function (t, i) {
				u(t, l, e), t._i = r.create(null), t._f = void 0, t._l = void 0, t[y] = 0, void 0 != i && c(i, n, t[o], t)
			});
			return i(l.prototype, {
				clear: function () {
					for (var t = this, e = t._i, n = t._f; n; n = n.n)n.r = !0, n.p && (n.p = n.p.n = void 0), delete e[n.i];
					t._f = t._l = void 0, t[y] = 0
				}, "delete": function (t) {
					var e = this, n = w(e, t);
					if (n) {
						var r = n.n, o = n.p;
						delete e._i[n.i], n.r = !0, o && (o.n = r), r && (r.p = o), e._f == n && (e._f = r), e._l == n && (e._l = o), e[y]--
					}
					return !!n
				}, forEach: function (t) {
					for (var e, n = a(t, arguments.length > 1 ? arguments[1] : void 0, 3); e = e ? e.n : this._f;)for (n(e.v, e.k, this); e && e.r;)e = e.p
				}, has: function (t) {
					return !!w(this, t)
				}
			}), v && r.setDesc(l.prototype, "size", {
				get: function () {
					return s(this[y])
				}
			}), l
		}, def: function (t, e, n) {
			var r, o, i = w(t, e);
			return i ? i.v = n : (t._l = i = {
				i: o = x(e, !0),
				k: e,
				v: n,
				p: r = t._l,
				n: void 0,
				r: !1
			}, t._f || (t._f = i), r && (r.n = i), t[y]++, "F" !== o && (t._i[o] = i)), t
		}, getEntry: w, setStrong: function (t, e, n) {
			l(t, e, function (t, e) {
				this._t = t, this._k = e, this._l = void 0
			}, function () {
				for (var t = this, e = t._k, n = t._l; n && n.r;)n = n.p;
				return t._t && (t._l = n = n ? n.n : t._t._f) ? "keys" == e ? f(0, n.k) : "values" == e ? f(0, n.v) : f(0, [n.k, n.v]) : (t._t = void 0, f(1))
			}, n ? "entries" : "values", !n, !0), g(e)
		}
	}
}, function (t, e, n) {
	var r = n(45), o = n(56);
	t.exports = function (t) {
		return function () {
			if (o(this) != t)throw TypeError(t + "#toJSON isn't generic");
			var e = [];
			return r(this, !1, e.push, e), e
		}
	}
}, function (t, e, n) {
	"use strict";
	var r = n(27), o = n(61), i = n(9), a = n(8), u = n(63), s = n(45), c = n(55), l = n(17), f = n(42)("weak"), h = Object.isExtensible || a, p = c(5), d = c(6), g = 0, v = function (t) {
		return t._l || (t._l = new m)
	}, m = function () {
		this.a = []
	}, y = function (t, e) {
		return p(t.a, function (t) {
			return t[0] === e
		})
	};
	m.prototype = {
		get: function (t) {
			var e = y(this, t);
			return e ? e[1] : void 0
		}, has: function (t) {
			return !!y(this, t)
		}, set: function (t, e) {
			var n = y(this, t);
			n ? n[1] = e : this.a.push([t, e])
		}, "delete": function (t) {
			var e = d(this.a, function (e) {
				return e[0] === t
			});
			return ~e && this.a.splice(e, 1), !!~e
		}
	}, t.exports = {
		getConstructor: function (t, e, n, r) {
			var i = t(function (t, o) {
				u(t, i, e), t._i = g++, t._l = void 0, void 0 != o && s(o, n, t[r], t)
			});
			return o(i.prototype, {
				"delete": function (t) {
					return a(t) ? h(t) ? l(t, f) && l(t[f], this._i) && delete t[f][this._i] : v(this)["delete"](t) : !1
				}, has: function (t) {
					return a(t) ? h(t) ? l(t, f) && l(t[f], this._i) : v(this).has(t) : !1
				}
			}), i
		}, def: function (t, e, n) {
			return h(i(e)) ? (l(e, f) || r(e, f, {}), e[f][t._i] = n) : v(t).set(e, n), t
		}, frozenStore: v, WEAK: f
	}
}, function (t, e, n) {
	var r = n(8), o = n(11).document, i = r(o) && r(o.createElement);
	t.exports = function (t) {
		return i ? o.createElement(t) : {}
	}
}, function (t, e, n) {
	"use strict";
	var r = n(9);
	t.exports = function () {
		var t = r(this), e = "";
		return t.global && (e += "g"), t.ignoreCase && (e += "i"), t.multiline && (e += "m"), t.unicode && (e += "u"), t.sticky && (e += "y"), e
	}
}, function (t, e, n) {
	var r = n(23), o = n(5).getNames, i = {}.toString, a = "object" == typeof window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [], u = function (t) {
		try {
			return o(t)
		} catch (e) {
			return a.slice()
		}
	};
	t.exports.get = function (t) {
		return a && "[object Window]" == i.call(t) ? u(t) : o(r(t))
	}
}, function (t, e, n) {
	t.exports = n(11).document && document.documentElement
}, function (t, e, n) {
	var r = n(46), o = n(10)("iterator"), i = Array.prototype;
	t.exports = function (t) {
		return void 0 !== t && (r.Array === t || i[o] === t)
	}
}, function (t, e, n) {
	var r = n(8), o = Math.floor;
	t.exports = function (t) {
		return !r(t) && isFinite(t) && o(t) === t
	}
}, function (t, e, n) {
	var r = n(8), o = n(31), i = n(10)("match");
	t.exports = function (t) {
		var e;
		return r(t) && (void 0 !== (e = t[i]) ? !!e : "RegExp" == o(t))
	}
}, function (t, e, n) {
	var r = n(9);
	t.exports = function (t, e, n, o) {
		try {
			return o ? e(r(n)[0], n[1]) : e(n)
		} catch (i) {
			var a = t["return"];
			throw void 0 !== a && r(a.call(t)), i
		}
	}
}, function (t, e, n) {
	"use strict";
	var r = n(5), o = n(36), i = n(47), a = {};
	n(27)(a, n(10)("iterator"), function () {
		return this
	}), t.exports = function (t, e, n) {
		t.prototype = r.create(a, {next: o(1, n)}), i(t, e + " Iterator")
	}
}, function (t, e) {
	t.exports = function (t, e) {
		return {value: e, done: !!t}
	}
}, function (t, e) {
	t.exports = Math.log1p || function (t) {
				return (t = +t) > -1e-8 && 1e-8 > t ? t - t * t / 2 : Math.log(1 + t)
			}
}, function (t, e, n) {
	var r = n(5), o = n(23), i = r.isEnum;
	t.exports = function (t) {
		return function (e) {
			for (var n, a = o(e), u = r.getKeys(a), s = u.length, c = 0, l = []; s > c;)i.call(a, n = u[c++]) && l.push(t ? [n, a[n]] : a[n]);
			return l
		}
	}
}, function (t, e, n) {
	var r = n(5), o = n(9), i = n(11).Reflect;
	t.exports = i && i.ownKeys || function (t) {
				var e = r.getNames(o(t)), n = r.getSymbols;
				return n ? e.concat(n(t)) : e
			}
}, function (t, e) {
	t.exports = Object.is || function (t, e) {
				return t === e ? 0 !== t || 1 / t === 1 / e : t != t && e != e
			}
}, function (t, e, n) {
	var r = n(11), o = "__core-js_shared__", i = r[o] || (r[o] = {});
	t.exports = function (t) {
		return i[t] || (i[t] = {})
	}
}, function (t, e, n) {
	var r = n(18), o = n(131), i = n(26);
	t.exports = function (t, e, n, a) {
		var u = String(i(t)), s = u.length, c = void 0 === n ? " " : String(n), l = r(e);
		if (s >= l)return u;
		"" == c && (c = " ");
		var f = l - s, h = o.call(c, Math.ceil(f / c.length));
		return h.length > f && (h = h.slice(0, f)), a ? h + u : u + h
	}
}, function (t, e, n) {
	"use strict";
	var r = n(49), o = n(26);
	t.exports = function (t) {
		var e = String(o(this)), n = "", i = r(t);
		if (0 > i || i == 1 / 0)throw RangeError("Count can't be negative");
		for (; i > 0; (i >>>= 1) && (e += e))1 & i && (n += e);
		return n
	}
}, function (t, e, n) {
	var r, o, i, a = n(25), u = n(59), s = n(118), c = n(115), l = n(11), f = l.process, h = l.setImmediate, p = l.clearImmediate, d = l.MessageChannel, g = 0, v = {}, m = "onreadystatechange", y = function () {
		var t = +this;
		if (v.hasOwnProperty(t)) {
			var e = v[t];
			delete v[t], e()
		}
	}, b = function (t) {
		y.call(t.data)
	};
	h && p || (h = function (t) {
		for (var e = [], n = 1; arguments.length > n;)e.push(arguments[n++]);
		return v[++g] = function () {
			u("function" == typeof t ? t : Function(t), e)
		}, r(g), g
	}, p = function (t) {
		delete v[t]
	}, "process" == n(31)(f) ? r = function (t) {
		f.nextTick(a(y, t, 1))
	} : d ? (o = new d, i = o.port2, o.port1.onmessage = b, r = a(i.postMessage, i, 1)) : l.addEventListener && "function" == typeof postMessage && !l.importScripts ? (r = function (t) {
		l.postMessage(t + "", "*")
	}, l.addEventListener("message", b, !1)) : r = m in c("script") ? function (t) {
		s.appendChild(c("script"))[m] = function () {
			s.removeChild(this), y.call(t)
		}
	} : function (t) {
		setTimeout(a(y, t, 1), 0)
	}), t.exports = {set: h, clear: p}
}, function (t, e, n) {
	var r = n(56), o = n(10)("iterator"), i = n(46);
	t.exports = n(32).getIteratorMethod = function (t) {
		return void 0 != t ? t[o] || t["@@iterator"] || i[r(t)] : void 0
	}
}, function (t, e, n) {
	"use strict";
	var r = n(41), o = n(124), i = n(46), a = n(23);
	t.exports = n(78)(Array, "Array", function (t, e) {
		this._t = a(t), this._i = 0, this._k = e
	}, function () {
		var t = this._t, e = this._k, n = this._i++;
		return !t || n >= t.length ? (this._t = void 0, o(1)) : "keys" == e ? o(0, n) : "values" == e ? o(0, t[n]) : o(0, [n, t[n]])
	}, "values"), i.Arguments = i.Array, r("keys"), r("values"), r("entries")
}, , , , , , , function (t, e, n) {
	function r(t, e) {
		return t = "number" == typeof t || c.test(t) ? +t : -1, e = null == e ? h : e, t > -1 && t % 1 == 0 && e > t
	}

	function o(t) {
		return "number" == typeof t && t > -1 && t % 1 == 0 && h >= t
	}

	function i(t) {
		var e = typeof t;
		return !!t && ("object" == e || "function" == e)
	}

	function a(t) {
		if (null == t)return [];
		i(t) || (t = Object(t));
		var e = t.length;
		e = e && o(e) && (s(t) || u(t)) && e || 0;
		for (var n = t.constructor, a = -1, c = "function" == typeof n && n.prototype === t, l = Array(e), h = e > 0; ++a < e;)l[a] = a + "";
		for (var p in t)h && r(p, e) || "constructor" == p && (c || !f.call(t, p)) || l.push(p);
		return l
	}

	var u = n(66), s = n(86), c = /^\d+$/, l = Object.prototype, f = l.hasOwnProperty, h = 9007199254740991;
	t.exports = a
}, , function (t, e, n) {
	"use strict";
	function r(t) {
		return t && t.__esModule ? t : {"default": t}
	}

	Object.defineProperty(e, "__esModule", {value: !0});
	var o = n(410), i = r(o), a = {};
	e["default"] = {
		getPrefixer: function () {
			if ("undefined" == typeof navigator)return console.warn("Material-UI expects the global navigator.userAgent to be defined\nfor server-side rendering. Set this property when receiving the request headers."), null;
			var t = navigator.userAgent, e = a[t];
			return e || (e = new i["default"](t), a[t] = e), e
		}, all: function (t) {
			if (!t)return {};
			var e = this.getPrefixer();
			return e ? e.prefix(t) : i["default"].prefixAll(t)
		}, set: function (t, e, n) {
			t[e] = n;
			var r = this.getPrefixer();
			t = r ? r.prefix(t) : i["default"].prefixAll(t)
		}, getPrefix: function (t) {
			var e = {};
			e[t] = !0;
			var n = this.getPrefixer(), r = void 0;
			return r = n ? Object.keys(n.prefix(e)) : Object.keys(i["default"].prefixAll(e)), r ? r[0] : t
		}
	}, t.exports = e["default"]
}, function (t, e, n) {
	"use strict";
	function r(t) {
		return t && t.__esModule ? t : {"default": t}
	}

	Object.defineProperty(e, "__esModule", {value: !0});
	var o = n(43), i = r(o), a = n(89), u = r(a), s = n(88), c = r(s);
	e["default"] = {
		spacing: c["default"],
		fontFamily: "Roboto, sans-serif",
		palette: {
			primary1Color: i["default"].cyan700,
			primary2Color: i["default"].cyan700,
			primary3Color: i["default"].grey600,
			accent1Color: i["default"].pinkA200,
			accent2Color: i["default"].pinkA400,
			accent3Color: i["default"].pinkA100,
			textColor: i["default"].fullWhite,
			alternateTextColor: "#303030",
			canvasColor: "#303030",
			borderColor: u["default"].fade(i["default"].fullWhite, .3),
			disabledColor: u["default"].fade(i["default"].fullWhite, .3),
			pickerHeaderColor: u["default"].fade(i["default"].fullWhite, .12),
			clockCircleColor: u["default"].fade(i["default"].fullWhite, .12)
		}
	}, t.exports = e["default"]
}, function (t, e, n) {
	"use strict";
	function r(t) {
		return t && t.__esModule ? t["default"] : t
	}

	Object.defineProperty(e, "__esModule", {value: !0});
	var o = n(87);
	e["default"] = r(o), t.exports = e["default"]
}, function (t, e, n) {
	"use strict";
	function r(t) {
		return t && t.__esModule ? t : {"default": t}
	}

	Object.defineProperty(e, "__esModule", {value: !0});
	var o = n(234), i = r(o), a = n(445), u = r(a), s = n(439), c = r(s);
	e["default"] = {
		getMuiTheme: c["default"], modifyRawThemeSpacing: function (t, e) {
			return (0, c["default"])((0, i["default"])(t.baseTheme, {spacing: {$set: e}}))
		}, modifyRawThemePalette: function (t, e) {
			var n = (0, u["default"])(t.baseTheme.palette, e);
			return (0, c["default"])((0, i["default"])(t.baseTheme, {palette: {$set: n}}))
		}, modifyRawThemeFontFamily: function (t, e) {
			return (0, c["default"])((0, i["default"])(t.baseTheme, {fontFamily: {$set: e}}))
		}
	}, t.exports = e["default"]
}, function (t, e) {
	"use strict";
	Object.defineProperty(e, "__esModule", {value: !0}), e["default"] = {
		menu: 1e3,
		appBar: 1100,
		leftNavOverlay: 1200,
		leftNav: 1300,
		dialogOverlay: 1400,
		dialog: 1500,
		layer: 2e3,
		popover: 2100,
		snackbar: 2900,
		tooltip: 3e3
	}, t.exports = e["default"]
}, function (t, e, n) {
	"use strict";
	function r(t) {
		return t && t.__esModule ? t : {"default": t}
	}

	function o(t, e) {
		return t ? e ? (0, a["default"])(t, {$merge: e}) : t : e
	}

	Object.defineProperty(e, "__esModule", {value: !0});
	var i = n(234), a = r(i);
	e["default"] = {
		merge: function () {
			for (var t = Array.prototype.slice.call(arguments, 0), e = t[0], n = 1; n < t.length; n++)t[n] && (e = o(e, t[n]));
			return e
		}, mergeItem: function (t, e, n) {
			var r = {};
			return r[e] = {$merge: n}, (0, a["default"])(t, r)
		}, push: function (t, e) {
			var n = Array.isArray(e) ? e : [e];
			return (0, a["default"])(t, {$push: n})
		}, shift: function (t) {
			return (0, a["default"])(t, {$splice: [[0, 1]]})
		}
	}, t.exports = e["default"]
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function (t, e, n) {
	t.exports = n(512)
}, function (t, e) {
	"use strict";
	function n(t) {
		return t.shape({subscribe: t.func.isRequired, dispatch: t.func.isRequired, getState: t.func.isRequired})
	}

	e.__esModule = !0, e["default"] = n, t.exports = e["default"]
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function (t, e, n) {
	(function (t) {
		"use strict";
		if (n(392), n(518), t._babelPolyfill)throw new Error("only one instance of babel/polyfill is allowed");
		t._babelPolyfill = !0
	}).call(e, function () {
		return this
	}())
}, function (t, e, n) {
	t.exports = n(269)
}, function (t, e, n) {
	"use strict";
	function r(t) {
		return t && t.__esModule ? t : {"default": t}
	}

	function o(t) {
		if (t && t.__esModule)return t;
		var e = {};
		if (null != t)for (var n in t)Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
		return e["default"] = t, e
	}

	function i(t) {
		return function (e, n) {
			return e(u(t)), (0, f["default"])(t).then(function (t) {
				return t.json()
			}).then(function (t) {
				e(a(t))
			})["catch"](function (t) {
				throw t
			})
		}
	}

	function a(t) {
		return {type: c.RECEIVE_USERS, users: t}
	}

	function u(t) {
		return {type: c.REQUEST_USERS, url: t}
	}

	Object.defineProperty(e, "__esModule", {value: !0}), e.fetchUsers = i, e.receiveUsers = a;
	var s = n(110), c = o(s), l = n(421), f = r(l)
}, function (t, e, n) {
	"use strict";
	function r(t) {
		return t && t.__esModule ? t : {"default": t}
	}

	function o(t) {
		if (null == t)throw new TypeError("Cannot destructure undefined")
	}

	function i(t, e) {
		if (!(t instanceof e))throw new TypeError("Cannot call a class as a function")
	}

	function a(t, e) {
		if ("function" != typeof e && null !== e)throw new TypeError("Super expression must either be null or a function, not " + typeof e);
		t.prototype = Object.create(e && e.prototype, {
			constructor: {
				value: t,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
	}

	function u(t) {
		return o(t), {}
	}

	Object.defineProperty(e, "__esModule", {value: !0});
	var s = function () {
		function t(t, e) {
			for (var n = 0; n < e.length; n++) {
				var r = e[n];
				r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
			}
		}

		return function (e, n, r) {
			return n && t(e.prototype, n), r && t(e, r), e
		}
	}(), c = function (t, e, n) {
		for (var r = !0; r;) {
			var o = t, i = e, a = n;
			r = !1, null === o && (o = Function.prototype);
			var u = Object.getOwnPropertyDescriptor(o, i);
			if (void 0 !== u) {
				if ("value" in u)return u.value;
				var s = u.get;
				if (void 0 === s)return;
				return s.call(a)
			}
			var c = Object.getPrototypeOf(o);
			if (null === c)return;
			t = c, e = i, n = a, r = !0, u = c = void 0
		}
	}, l = n(35), f = r(l), h = n(142), p = r(h), d = n(90), g = n(437), v = (r(g), n(422)), m = r(v), y = n(440), b = r(y), x = n(393), w = (b["default"].Colors, function (t) {
		function e() {
			i(this, e), c(Object.getPrototypeOf(e.prototype), "constructor", this).apply(this, arguments)
		}

		return a(e, t), s(e, [{
			key: "componentDidMount", value: function () {
				this.props.dispatch
			}
		}, {
			key: "generateRow", value: function (t) {
				function e(t, n, r) {
					if (t) {
						n(t);
						var o = r(t);
						if (o)for (var i = o.length, a = 0; i > a; a++)e(o[a], n, r)
					}
				}

				function n(t, e) {
					var r = L;
					E && (clearTimeout(E), O = x.transform(X.attr("transform")), "left" == e || "right" == e ? (S = "left" == e ? O.translate[0] + r : O.translate[0] - r, A = O.translate[1]) : ("up" == e || "down" == e) && (S = O.translate[0], A = "up" == e ? O.translate[1] + r : O.translate[1] - r), p = O.scale[0], d = O.scale[1], k = U.scale(), X.transition().attr("transform", "translate(" + S + "," + A + ")scale(" + k + ")"), x.select(t).select("g.node").attr("transform", "translate(" + S + "," + A + ")"), U.scale(U.scale()), U.translate([S, A]), E = setTimeout(function () {
						n(t, r, e)
					}, 50))
				}

				function r() {
					X.attr("transform", "translate(" + x.event.translate + ")scale(" + x.event.scale + ")")
				}

				function o(t, e) {
					F = t, x.select(e).select(".ghostCircle").attr("pointer-events", "none"), x.selectAll(".ghostCircle").attr("class", "ghostCircle show"), x.select(e).attr("class", "node activeDrag");
					var n = x.select(e).data()[0], r = n.parent.position;
					x.selectAll(".ghostCircle").filter(function (t, e) {
						return t.position === r
					}).style("fill", "green"), X.selectAll("g.node").sort(function (t, e) {
						return t.id != F.id ? 1 : -1
					}), h.length > 1 && (g = H.links(h), T = X.selectAll("path.link").data(g, function (t) {
						return t.target.id
					}).remove(), v = X.selectAll("g.node").data(h, function (t) {
						return t.id
					}).filter(function (t, e) {
						return t.id == F.id ? !1 : !0
					}).remove()), f = H.links(H.nodes(F.parent)), X.selectAll("path.link").filter(function (t, e) {
						return t.target.id == F.id ? !0 : !1
					}).remove(), C = null
				}

				function i(t, e) {
					function n() {
						var n = !1, r = x.selectAll(".ghostCircle").filter(function (t, n) {
							return t.position === e.position
						}).filter(function (e, n) {
							return e.position === t.parent.position
						}).data();
						return r.length && (n = !0), n
					}

					R = null, e && n() ? fetch("rest/update", {
						method: "post",
						headers: {Accept: "application/json", "Content-Type": "application/json"},
						body: JSON.stringify({drag: t.id, select: e.id})
					}).then(function (t) {
						return t.json()
					}).then(function (t) {
						N = t, N.x0 = B / 2 - 150, N.y0 = z / 2, c(N)
					})["catch"](function (t) {
						c(N)
					}) : c(N), x.selectAll(".ghostCircle").attr("class", "ghostCircle"), x.select(M).attr("class", "node"), x.select(M).select(".ghostCircle").attr("pointer-events", ""), Y(), null !== F && (a(F), F = null)
				}

				function a(t) {
					k = U.scale(), y = -t.x0, b = t.y0, y = B / 12 - 100, b = z / 4, x.select("g").transition().duration(q).attr("transform", "translate(" + y + "," + b + ")scale(" + k + ")"), U.scale(k), U.translate([y, b])
				}

				function u(t) {
					return t.children ? (t._children = t.children, t.children = null) : t._children && (t.children = t._children, t._children = null), t
				}

				function s(t) {
					x.event.defaultPrevented || (t = u(t), c(t), a(t))
				}

				function c(t) {
					var e = [1], n = function h(t, n) {
						n.children && n.children.length > 0 && (e.length <= t + 1 && e.push(0), e[t + 1] += n.children.length, n.children.forEach(function (e) {
							h(t + 1, e)
						}))
					};
					n(0, N);
					var r = 25 * x.max(e);
					H = H.size([B - 150, r - 150]);
					var o = H.nodes(N).reverse(), i = H.links(o);
					o.forEach(function (t) {
						t.y = t.depth * (10 * D)
					}), _ = X.selectAll("g.node").data(o, function (t) {
						return t.id
					});
					var a = _.enter().append("g").call(l).attr("class", "node").attr("transform", function (e) {
						return "translate(" + t.x0 + "," + t.y0 + ")"
					}).on("click", s);
					a.append("circle").attr("class", "nodeCircle").attr("r", 0).style("fill", function (t) {
						return t._children ? "lightsteelblue" : "#fff"
					}), a.append("text").attr("x", function (t) {
						return t.children || t._children ? -10 : 10
					}).attr("dy", ".35em").attr("class", "nodeText").attr("text-anchor", function (t) {
						return t.children || t._children ? "end" : "start"
					}).text(function (t) {
						return t.name
					}).style("fill-opacity", 0), a.append("circle").attr("class", "ghostCircle").attr("r", 30).attr("opacity", .2).style("fill", "red").attr("pointer-events", "mouseover").on("mouseover", function (t) {
						G(t)
					}).on("mouseout", function (t) {
						V(t)
					}), _.select("text").attr("x", function (t) {
						return t.children || t._children ? -10 : 10
					}).attr("text-anchor", function (t) {
						return t.children || t._children ? "end" : "start"
					}).text(function (t) {
						return t.name
					}), _.select("circle.nodeCircle").attr("r", 4.5).style("fill", function (t) {
						return t._children ? "lightsteelblue" : "#fff"
					});
					var u = _.transition().duration(q).attr("transform", function (t) {
						return "translate(" + t.x + "," + t.y + ")"
					});
					u.select("text").style("fill-opacity", 1);
					var c = _.exit().transition().duration(q).attr("transform", function (e) {
						return "translate(" + t.x + "," + t.y + ")"
					}).remove();
					c.select("circle").attr("r", 0), c.select("text").style("fill-opacity", 0);
					var f = X.selectAll("path.link").data(i, function (t) {
						return t.target.id
					});
					f.enter().insert("path", "g").attr("class", "link").attr("d", function (e) {
						var n = {x: t.x0, y: t.y0};
						return W({source: n, target: n})
					}), f.transition().duration(q).attr("d", W), f.exit().transition().duration(q).attr("d", function (e) {
						var n = {x: t.x, y: t.y};
						return W({source: n, target: n})
					}).remove(), o.forEach(function (t) {
						t.x0 = t.x, t.y0 = t.y
					})
				}

				var l, f, h, p, d, g, v, y, b, w, M, k, C, S, _, E, T, A, O, N, j = t, P = 0, D = 0, R = null, F = null, L = 200, I = 20, q = 750, B = window.innerWidth, z = window.innerHeight, H = x.layout.tree().size([B, z]), W = x.svg.diagonal().projection(function (t) {
					return [t.x, t.y]
				});
				e(j, function (t) {
					P++, D = Math.max(t.name.length, D)
				}, function (t) {
					return t.children && t.children.length > 0 ? t.children : null
				});
				var U = x.behavior.zoom().scaleExtent([.1, 3]).on("zoom", r), $ = x.select(".rootTableElement").append("svg").attr("width", B).attr("height", z).attr("class", "overlay").call(U);
				l = x.behavior.drag().on("dragstart", function (t) {
					t != N && (C = !0, h = H.nodes(t), x.event.sourceEvent.stopPropagation())
				}).on("drag", function (t) {
					if (t != N) {
						if (C && (M = this, o(t, M)), w = x.mouse((0, m["default"])("svg").get(0)), w[0] < I)E = !0, n(this, "left"); else if (w[0] > (0, m["default"])("svg").width() - I)E = !0, n(this, "right"); else if (w[1] < I)E = !0, n(this, "up"); else if (w[1] > (0, m["default"])("svg").height() - I)E = !0, n(this, "down"); else try {
							clearTimeout(E)
						} catch (e) {
						}
						t.x0 += x.event.dx, t.y0 += x.event.dy;
						var r = x.select(this);
						r.attr("transform", "translate(" + t.x0 + "," + t.y0 + ")"), Y()
					}
				}).on("dragend", function (t) {
					if (t != N)if (M = this, R) {
						var e = F.parent.children.indexOf(F);
						e > -1 && F.parent.children.splice(e, 1), i(F, R)
					} else i(F, R)
				});
				var G = function (t) {
					R = t, Y()
				}, V = function (t) {
					R = null, Y()
				}, Y = function () {
					var t = [];
					null !== F && null !== R && (t = [{source: {x: R.x0, y: R.y0}, target: {x: F.x0, y: F.y0}}]);
					var e = X.selectAll(".templink").data(t);
					e.enter().append("path").attr("class", "templink").attr("d", x.svg.diagonal()).attr("pointer-events", "none"), e.attr("d", x.svg.diagonal()), e.exit().remove()
				}, X = $.append("g");
				N = j, N.x0 = B / 2 - 150, N.y0 = z / 2, c(N), a(N)
			}
		}, {
			key: "generateTable", value: function () {
				var t = this.props.users;
				p["default"].isEmpty(t) || this.generateRow(t)
			}
		}, {
			key: "render", value: function () {
				return f["default"].createElement("div", {className: "rootTableElement"}, this.generateTable())
			}
		}]), e
	}(l.Component));
	w.propTypes = {dispatch: l.PropTypes.func.isRequired}, e["default"] = (0, d.connect)(u)(w), t.exports = e["default"]
}, function (t, e, n) {
	"use strict";
	function r(t) {
		return t && t.__esModule ? t : {"default": t}
	}

	function o(t, e) {
		if (!(t instanceof e))throw new TypeError("Cannot call a class as a function")
	}

	function i(t, e) {
		if ("function" != typeof e && null !== e)throw new TypeError("Super expression must either be null or a function, not " + typeof e);
		t.prototype = Object.create(e && e.prototype, {
			constructor: {
				value: t,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
	}

	function a(t) {
		var e = t.users;
		return {users: e}
	}

	Object.defineProperty(e, "__esModule", {value: !0});
	var u = function () {
		function t(t, e) {
			for (var n = 0; n < e.length; n++) {
				var r = e[n];
				r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
			}
		}

		return function (e, n, r) {
			return n && t(e.prototype, n), r && t(e, r), e
		}
	}(), s = function (t, e, n) {
		for (var r = !0; r;) {
			var o = t, i = e, a = n;
			r = !1, null === o && (o = Function.prototype);
			var u = Object.getOwnPropertyDescriptor(o, i);
			if (void 0 !== u) {
				if ("value" in u)return u.value;
				var s = u.get;
				if (void 0 === s)return;
				return s.call(a)
			}
			var c = Object.getPrototypeOf(o);
			if (null === c)return;
			t = c, e = i, n = a, r = !0, u = c = void 0
		}
	}, c = n(35), l = r(c), f = n(90), h = n(271), p = n(272), d = r(p), g = function (t) {
		function e() {
			o(this, e), s(Object.getPrototypeOf(e.prototype), "constructor", this).apply(this, arguments)
		}

		return i(e, t), u(e, [{
			key: "componentDidMount", value: function () {
				var t = this.props.dispatch;
				t((0, h.fetchUsers)("users.json"))
			}
		}, {
			key: "componentWillReceiveProps", value: function (t) {
				var e = this.props;
				e.dispatch, e.users
			}
		}, {
			key: "render", value: function () {
				var t = this.props.users;
				return l["default"].createElement("div", null, l["default"].createElement(d["default"], {users: t}))
			}
		}]), e
	}(c.Component);
	g.propTypes = {dispatch: c.PropTypes.func.isRequired}, e["default"] = (0, f.connect)(a)(g), t.exports = e["default"]
}, function (t, e, n) {
	"use strict";
	function r(t) {
		return t && t.__esModule ? t : {"default": t}
	}

	Object.defineProperty(e, "__esModule", {value: !0});
	var o = n(75), i = n(275), a = r(i), u = (0, o.combineReducers)({users: a["default"]});
	e["default"] = u, t.exports = e["default"]
}, function (t, e, n) {
	"use strict";
	function r(t) {
		if (t && t.__esModule)return t;
		var e = {};
		if (null != t)for (var n in t)Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
		return e["default"] = t, e
	}

	function o(t, e) {
		switch (void 0 === t && (t = null), e.type) {
			case a.RECEIVE_USERS:
				return Object.assign({}, e.users);
			case a.REQUEST_USERS:
				return t;
			default:
				return t
		}
	}

	Object.defineProperty(e, "__esModule", {value: !0}), e["default"] = o;
	var i = n(110), a = r(i);
	t.exports = e["default"]
}, function (t, e, n) {
	"use strict";
	function r(t) {
		return t && t.__esModule ? t : {"default": t}
	}

	function o(t) {
		var e = l(c["default"], t);
		return e
	}

	Object.defineProperty(e, "__esModule", {value: !0}), e["default"] = o;
	var i = n(75), a = n(513), u = r(a), s = n(274), c = r(s), l = (0, i.applyMiddleware)(u["default"])(i.createStore);
	t.exports = e["default"]
}, function (t, e, n) {
	var r, o;
	/*!
	  * Bowser - a browser detector
	  * https://github.com/ded/bowser
	  * MIT License | (c) Dustin Diaz 2015
	  */
	!function (i, a) {
		"undefined" != typeof t && t.exports ? t.exports = a() : (r = a, o = "function" == typeof r ? r.call(e, n, e, t) : r, !(void 0 !== o && (t.exports = o)))
	}("bowser", function () {
		function t(t) {
			function n(e) {
				var n = t.match(e);
				return n && n.length > 1 && n[1] || ""
			}

			function r(e) {
				var n = t.match(e);
				return n && n.length > 1 && n[2] || ""
			}

			var o, i = n(/(ipod|iphone|ipad)/i).toLowerCase(), a = /like android/i.test(t), u = !a && /android/i.test(t), s = /CrOS/.test(t), c = n(/edge\/(\d+(\.\d+)?)/i), l = n(/version\/(\d+(\.\d+)?)/i), f = /tablet/i.test(t), h = !f && /[^-]mobi/i.test(t);
			/opera|opr/i.test(t) ? o = {
				name: "Opera",
				opera: e,
				version: l || n(/(?:opera|opr)[\s\/](\d+(\.\d+)?)/i)
			} : /yabrowser/i.test(t) ? o = {
				name: "Yandex Browser",
				yandexbrowser: e,
				version: l || n(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
			} : /windows phone/i.test(t) ? (o = {
				name: "Windows Phone",
				windowsphone: e
			}, c ? (o.msedge = e, o.version = c) : (o.msie = e, o.version = n(/iemobile\/(\d+(\.\d+)?)/i))) : /msie|trident/i.test(t) ? o = {
				name: "Internet Explorer",
				msie: e,
				version: n(/(?:msie |rv:)(\d+(\.\d+)?)/i)
			} : s ? o = {
				name: "Chrome",
				chromeBook: e,
				chrome: e,
				version: n(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
			} : /chrome.+? edge/i.test(t) ? o = {
				name: "Microsoft Edge",
				msedge: e,
				version: c
			} : /chrome|crios|crmo/i.test(t) ? o = {
				name: "Chrome",
				chrome: e,
				version: n(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
			} : i ? (o = {name: "iphone" == i ? "iPhone" : "ipad" == i ? "iPad" : "iPod"}, l && (o.version = l)) : /sailfish/i.test(t) ? o = {
				name: "Sailfish",
				sailfish: e,
				version: n(/sailfish\s?browser\/(\d+(\.\d+)?)/i)
			} : /seamonkey\//i.test(t) ? o = {
				name: "SeaMonkey",
				seamonkey: e,
				version: n(/seamonkey\/(\d+(\.\d+)?)/i)
			} : /firefox|iceweasel/i.test(t) ? (o = {
				name: "Firefox",
				firefox: e,
				version: n(/(?:firefox|iceweasel)[ \/](\d+(\.\d+)?)/i)
			}, /\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(t) && (o.firefoxos = e)) : /silk/i.test(t) ? o = {
				name: "Amazon Silk",
				silk: e,
				version: n(/silk\/(\d+(\.\d+)?)/i)
			} : u ? o = {name: "Android", version: l} : /phantom/i.test(t) ? o = {
				name: "PhantomJS",
				phantom: e,
				version: n(/phantomjs\/(\d+(\.\d+)?)/i)
			} : /blackberry|\bbb\d+/i.test(t) || /rim\stablet/i.test(t) ? o = {
				name: "BlackBerry",
				blackberry: e,
				version: l || n(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
			} : /(web|hpw)os/i.test(t) ? (o = {
				name: "WebOS",
				webos: e,
				version: l || n(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
			}, /touchpad\//i.test(t) && (o.touchpad = e)) : o = /bada/i.test(t) ? {
				name: "Bada",
				bada: e,
				version: n(/dolfin\/(\d+(\.\d+)?)/i)
			} : /tizen/i.test(t) ? {
				name: "Tizen",
				tizen: e,
				version: n(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || l
			} : /safari/i.test(t) ? {name: "Safari", safari: e, version: l} : {
				name: n(/^(.*)\/(.*) /),
				version: r(/^(.*)\/(.*) /)
			}, !o.msedge && /(apple)?webkit/i.test(t) ? (o.name = o.name || "Webkit", o.webkit = e, !o.version && l && (o.version = l)) : !o.opera && /gecko\//i.test(t) && (o.name = o.name || "Gecko", o.gecko = e, o.version = o.version || n(/gecko\/(\d+(\.\d+)?)/i)), o.msedge || !u && !o.silk ? i && (o[i] = e, o.ios = e) : o.android = e;
			var p = "";
			o.windowsphone ? p = n(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i) : i ? (p = n(/os (\d+([_\s]\d+)*) like mac os x/i), p = p.replace(/[_\s]/g, ".")) : u ? p = n(/android[ \/-](\d+(\.\d+)*)/i) : o.webos ? p = n(/(?:web|hpw)os\/(\d+(\.\d+)*)/i) : o.blackberry ? p = n(/rim\stablet\sos\s(\d+(\.\d+)*)/i) : o.bada ? p = n(/bada\/(\d+(\.\d+)*)/i) : o.tizen && (p = n(/tizen[\/\s](\d+(\.\d+)*)/i)), p && (o.osversion = p);
			var d = p.split(".")[0];
			return f || "ipad" == i || u && (3 == d || 4 == d && !h) || o.silk ? o.tablet = e : (h || "iphone" == i || "ipod" == i || u || o.blackberry || o.webos || o.bada) && (o.mobile = e), o.msedge || o.msie && o.version >= 10 || o.yandexbrowser && o.version >= 15 || o.chrome && o.version >= 20 || o.firefox && o.version >= 20 || o.safari && o.version >= 6 || o.opera && o.version >= 10 || o.ios && o.osversion && o.osversion.split(".")[0] >= 6 || o.blackberry && o.version >= 10.1 ? o.a = e : o.msie && o.version < 10 || o.chrome && o.version < 20 || o.firefox && o.version < 20 || o.safari && o.version < 6 || o.opera && o.version < 10 || o.ios && o.osversion && o.osversion.split(".")[0] < 6 ? o.c = e : o.x = e, o
		}

		var e = !0, n = t("undefined" != typeof navigator ? navigator.userAgent : "");
		return n.test = function (t) {
			for (var e = 0; e < t.length; ++e) {
				var r = t[e];
				if ("string" == typeof r && r in n)return !0
			}
			return !1
		}, n._detect = t, n
	})
}, function (t, e, n) {
	"use strict";
	var r = n(33), o = n(48), i = n(18);
	t.exports = [].copyWithin || function (t, e) {
				var n = r(this), a = i(n.length), u = o(t, a), s = o(e, a), c = arguments, l = c.length > 2 ? c[2] : void 0, f = Math.min((void 0 === l ? a : o(l, a)) - s, a - u), h = 1;
				for (u > s && s + f > u && (h = -1, s += f - 1, u += f - 1); f-- > 0;)s in n ? n[u] = n[s] : delete n[u], u += h, s += h;
				return n
			}
}, function (t, e, n) {
	"use strict";
	var r = n(33), o = n(48), i = n(18);
	t.exports = [].fill || function (t) {
				for (var e = r(this), n = i(e.length), a = arguments, u = a.length, s = o(u > 1 ? a[1] : void 0, n), c = u > 2 ? a[2] : void 0, l = void 0 === c ? n : o(c, n); l > s;)e[s++] = t;
				return e
			}
}, function (t, e, n) {
	var r = n(8), o = n(77), i = n(10)("species");
	t.exports = function (t, e) {
		var n;
		return o(t) && (n = t.constructor, "function" != typeof n || n !== Array && !o(n.prototype) || (n = void 0), r(n) && (n = n[i], null === n && (n = void 0))), new (void 0 === n ? Array : n)(e)
	}
}, function (t, e, n) {
	var r = n(5);
	t.exports = function (t) {
		var e = r.getKeys(t), n = r.getSymbols;
		if (n)for (var o, i = n(t), a = r.isEnum, u = 0; i.length > u;)a.call(t, o = i[u++]) && e.push(o);
		return e
	}
}, function (t, e, n) {
	var r = n(5), o = n(23);
	t.exports = function (t, e) {
		for (var n, i = o(t), a = r.getKeys(i), u = a.length, s = 0; u > s;)if (i[n = a[s++]] === e)return n
	}
}, function (t, e, n) {
	var r, o, i, a = n(11), u = n(132).set, s = a.MutationObserver || a.WebKitMutationObserver, c = a.process, l = a.Promise, f = "process" == n(31)(c), h = function () {
		var t, e, n;
		for (f && (t = c.domain) && (c.domain = null, t.exit()); r;)e = r.domain, n = r.fn, e && e.enter(), n(), e && e.exit(), r = r.next;
		o = void 0, t && t.enter()
	};
	if (f)i = function () {
		c.nextTick(h)
	}; else if (s) {
		var p = 1, d = document.createTextNode("");
		new s(h).observe(d, {characterData: !0}), i = function () {
			d.data = p = -p
		}
	} else i = l && l.resolve ? function () {
		l.resolve().then(h)
	} : function () {
		u.call(a, h)
	};
	t.exports = function (t) {
		var e = {fn: t, next: void 0, domain: f && c.domain};
		o && (o.next = e), r || (r = e, i()), o = e
	}
}, function (t, e, n) {
	var r = n(5), o = n(33), i = n(60);
	t.exports = n(13)(function () {
		var t = Object.assign, e = {}, n = {}, r = Symbol(), o = "abcdefghijklmnopqrst";
		return e[r] = 7, o.split("").forEach(function (t) {
			n[t] = t
		}), 7 != t({}, e)[r] || Object.keys(t({}, n)).join("") != o
	}) ? function (t, e) {
		for (var n = o(t), a = arguments, u = a.length, s = 1, c = r.getKeys, l = r.getSymbols, f = r.isEnum; u > s;)for (var h, p = i(a[s++]), d = l ? c(p).concat(l(p)) : c(p), g = d.length, v = 0; g > v;)f.call(p, h = d[v++]) && (n[h] = p[h]);
		return n
	} : Object.assign
}, function (t, e, n) {
	"use strict";
	var r = n(286), o = n(59), i = n(40);
	t.exports = function () {
		for (var t = i(this), e = arguments.length, n = Array(e), a = 0, u = r._, s = !1; e > a;)(n[a] = arguments[a++]) === u && (s = !0);
		return function () {
			var r, i = this, a = arguments, c = a.length, l = 0, f = 0;
			if (!s && !c)return o(t, n, i);
			if (r = n.slice(), s)for (; e > l; l++)r[l] === u && (r[l] = a[f++]);
			for (; c > f;)r.push(a[f++]);
			return o(t, r, i)
		}
	}
}, function (t, e, n) {
	t.exports = n(11)
}, function (t, e) {
	t.exports = function (t, e) {
		var n = e === Object(e) ? function (t) {
			return e[t]
		} : e;
		return function (e) {
			return String(e).replace(t, n)
		}
	}
}, function (t, e, n) {
	var r = n(9), o = n(40), i = n(10)("species");
	t.exports = function (t, e) {
		var n, a = r(t).constructor;
		return void 0 === a || void 0 == (n = r(a)[i]) ? e : o(n)
	}
}, function (t, e, n) {
	var r = n(8);
	t.exports = function (t, e) {
		if (!r(t))return t;
		var n, o;
		if (e && "function" == typeof(n = t.toString) && !r(o = n.call(t)))return o;
		if ("function" == typeof(n = t.valueOf) && !r(o = n.call(t)))return o;
		if (!e && "function" == typeof(n = t.toString) && !r(o = n.call(t)))return o;
		throw TypeError("Can't convert object to primitive value")
	}
}, function (t, e, n) {
	"use strict";
	var r, o = n(5), i = n(2), a = n(20), u = n(36), s = n(118), c = n(115), l = n(17), f = n(31), h = n(59), p = n(13), d = n(9), g = n(40), v = n(8), m = n(33), y = n(23), b = n(49), x = n(48), w = n(18), M = n(60), k = n(42)("__proto__"), C = n(55), S = n(111)(!1), _ = Object.prototype, E = Array.prototype, T = E.slice, A = E.join, O = o.setDesc, N = o.getDesc, j = o.setDescs, P = {};
	a || (r = !p(function () {
		return 7 != O(c("div"), "a", {
					get: function () {
						return 7
					}
				}).a
	}), o.setDesc = function (t, e, n) {
		if (r)try {
			return O(t, e, n)
		} catch (o) {
		}
		if ("get" in n || "set" in n)throw TypeError("Accessors not supported!");
		return "value" in n && (d(t)[e] = n.value), t
	}, o.getDesc = function (t, e) {
		if (r)try {
			return N(t, e)
		} catch (n) {
		}
		return l(t, e) ? u(!_.propertyIsEnumerable.call(t, e), t[e]) : void 0
	}, o.setDescs = j = function (t, e) {
		d(t);
		for (var n, r = o.getKeys(e), i = r.length, a = 0; i > a;)o.setDesc(t, n = r[a++], e[n]);
		return t
	}), i(i.S + i.F * !a, "Object", {
		getOwnPropertyDescriptor: o.getDesc,
		defineProperty: o.setDesc,
		defineProperties: j
	});
	var D = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(","), R = D.concat("length", "prototype"), F = D.length, L = function () {
		var t, e = c("iframe"), n = F, r = ">";
		for (e.style.display = "none", s.appendChild(e), e.src = "javascript:", t = e.contentWindow.document, t.open(), t.write("<script>document.F=Object</script" + r), t.close(), L = t.F; n--;)delete L.prototype[D[n]];
		return L()
	}, I = function (t, e) {
		return function (n) {
			var r, o = y(n), i = 0, a = [];
			for (r in o)r != k && l(o, r) && a.push(r);
			for (; e > i;)l(o, r = t[i++]) && (~S(a, r) || a.push(r));
			return a
		}
	}, q = function () {
	};
	i(i.S, "Object", {
		getPrototypeOf: o.getProto = o.getProto || function (t) {
					return t = m(t), l(t, k) ? t[k] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? _ : null
				},
		getOwnPropertyNames: o.getNames = o.getNames || I(R, R.length, !0),
		create: o.create = o.create || function (t, e) {
					var n;
					return null !== t ? (q.prototype = d(t), n = new q, q.prototype = null, n[k] = t) : n = L(), void 0 === e ? n : j(n, e)
				},
		keys: o.getKeys = o.getKeys || I(D, F, !1)
	});
	var B = function (t, e, n) {
		if (!(e in P)) {
			for (var r = [], o = 0; e > o; o++)r[o] = "a[" + o + "]";
			P[e] = Function("F,a", "return new F(" + r.join(",") + ")")
		}
		return P[e](t, n)
	};
	i(i.P, "Function", {
		bind: function (t) {
			var e = g(this), n = T.call(arguments, 1), r = function () {
				var o = n.concat(T.call(arguments));
				return this instanceof r ? B(e, o.length, o) : h(e, o, t)
			};
			return v(e.prototype) && (r.prototype = e.prototype), r
		}
	}), i(i.P + i.F * p(function () {
				s && T.call(s)
			}), "Array", {
		slice: function (t, e) {
			var n = w(this.length), r = f(this);
			if (e = void 0 === e ? n : e, "Array" == r)return T.call(this, t, e);
			for (var o = x(t, n), i = x(e, n), a = w(i - o), u = Array(a), s = 0; a > s; s++)u[s] = "String" == r ? this.charAt(o + s) : this[o + s];
			return u
		}
	}), i(i.P + i.F * (M != Object), "Array", {
		join: function (t) {
			return A.call(M(this), void 0 === t ? "," : t)
		}
	}), i(i.S, "Array", {isArray: n(77)});
	var z = function (t) {
		return function (e, n) {
			g(e);
			var r = M(this), o = w(r.length), i = t ? o - 1 : 0, a = t ? -1 : 1;
			if (arguments.length < 2)for (; ;) {
				if (i in r) {
					n = r[i], i += a;
					break
				}
				if (i += a, t ? 0 > i : i >= o)throw TypeError("Reduce of empty array with no initial value")
			}
			for (; t ? i >= 0 : o > i; i += a)i in r && (n = e(n, r[i], i, this));
			return n
		}
	}, H = function (t) {
		return function (e) {
			return t(this, e, arguments[1])
		}
	};
	i(i.P, "Array", {
		forEach: o.each = o.each || H(C(0)),
		map: H(C(1)),
		filter: H(C(2)),
		some: H(C(3)),
		every: H(C(4)),
		reduce: z(!1),
		reduceRight: z(!0),
		indexOf: H(S),
		lastIndexOf: function (t, e) {
			var n = y(this), r = w(n.length), o = r - 1;
			for (arguments.length > 1 && (o = Math.min(o, b(e))), 0 > o && (o = w(r + o)); o >= 0; o--)if (o in n && n[o] === t)return o;
			return -1
		}
	}), i(i.S, "Date", {
		now: function () {
			return +new Date
		}
	});
	var W = function (t) {
		return t > 9 ? t : "0" + t
	};
	i(i.P + i.F * (p(function () {
				return "0385-07-25T07:06:39.999Z" != new Date(-5e13 - 1).toISOString()
			}) || !p(function () {
				new Date(NaN).toISOString()
			})), "Date", {
		toISOString: function () {
			if (!isFinite(this))throw RangeError("Invalid time value");
			var t = this, e = t.getUTCFullYear(), n = t.getUTCMilliseconds(), r = 0 > e ? "-" : e > 9999 ? "+" : "";
			return r + ("00000" + Math.abs(e)).slice(r ? -6 : -4) + "-" + W(t.getUTCMonth() + 1) + "-" + W(t.getUTCDate()) + "T" + W(t.getUTCHours()) + ":" + W(t.getUTCMinutes()) + ":" + W(t.getUTCSeconds()) + "." + (n > 99 ? n : "0" + W(n)) + "Z"
		}
	})
}, function (t, e, n) {
	var r = n(2);
	r(r.P, "Array", {copyWithin: n(278)}), n(41)("copyWithin")
}, function (t, e, n) {
	var r = n(2);
	r(r.P, "Array", {fill: n(279)}), n(41)("fill")
}, function (t, e, n) {
	"use strict";
	var r = n(2), o = n(55)(6), i = "findIndex", a = !0;
	i in [] && Array(1)[i](function () {
		a = !1
	}), r(r.P + r.F * a, "Array", {
		findIndex: function (t) {
			return o(this, t, arguments.length > 1 ? arguments[1] : void 0)
		}
	}), n(41)(i)
}, function (t, e, n) {
	"use strict";
	var r = n(2), o = n(55)(5), i = "find", a = !0;
	i in [] && Array(1)[i](function () {
		a = !1
	}), r(r.P + r.F * a, "Array", {
		find: function (t) {
			return o(this, t, arguments.length > 1 ? arguments[1] : void 0)
		}
	}), n(41)(i)
}, function (t, e, n) {
	"use strict";
	var r = n(25), o = n(2), i = n(33), a = n(122), u = n(119), s = n(18), c = n(133);
	o(o.S + o.F * !n(79)(function (t) {
				Array.from(t)
			}), "Array", {
		from: function (t) {
			var e, n, o, l, f = i(t), h = "function" == typeof this ? this : Array, p = arguments, d = p.length, g = d > 1 ? p[1] : void 0, v = void 0 !== g, m = 0, y = c(f);
			if (v && (g = r(g, d > 2 ? p[2] : void 0, 2)), void 0 == y || h == Array && u(y))for (e = s(f.length), n = new h(e); e > m; m++)n[m] = v ? g(f[m], m) : f[m]; else for (l = y.call(f), n = new h; !(o = l.next()).done; m++)n[m] = v ? a(l, g, [o.value, m], !0) : o.value;
			return n.length = m, n
		}
	})
}, function (t, e, n) {
	"use strict";
	var r = n(2);
	r(r.S + r.F * n(13)(function () {
				function t() {
				}

				return !(Array.of.call(t) instanceof t)
			}), "Array", {
		of: function () {
			for (var t = 0, e = arguments, n = e.length, r = new ("function" == typeof this ? this : Array)(n); n > t;)r[t] = e[t++];
			return r.length = n, r
		}
	})
}, function (t, e, n) {
	n(62)("Array")
}, function (t, e, n) {
	"use strict";
	var r = n(5), o = n(8), i = n(10)("hasInstance"), a = Function.prototype;
	i in a || r.setDesc(a, i, {
		value: function (t) {
			if ("function" != typeof this || !o(t))return !1;
			if (!o(this.prototype))return t instanceof this;
			for (; t = r.getProto(t);)if (this.prototype === t)return !0;
			return !1
		}
	})
}, function (t, e, n) {
	var r = n(5).setDesc, o = n(36), i = n(17), a = Function.prototype, u = /^\s*function ([^ (]*)/, s = "name";
	s in a || n(20) && r(a, s, {
		configurable: !0, get: function () {
			var t = ("" + this).match(u), e = t ? t[1] : "";
			return i(this, s) || r(this, s, o(5, e)), e
		}
	})
}, function (t, e, n) {
	"use strict";
	var r = n(112);
	n(57)("Map", function (t) {
		return function () {
			return t(this, arguments.length > 0 ? arguments[0] : void 0)
		}
	}, {
		get: function (t) {
			var e = r.getEntry(this, t);
			return e && e.v
		}, set: function (t, e) {
			return r.def(this, 0 === t ? 0 : t, e)
		}
	}, r, !0)
}, function (t, e, n) {
	var r = n(2), o = n(125), i = Math.sqrt, a = Math.acosh;
	r(r.S + r.F * !(a && 710 == Math.floor(a(Number.MAX_VALUE))), "Math", {
		acosh: function (t) {
			return (t = +t) < 1 ? NaN : t > 94906265.62425156 ? Math.log(t) + Math.LN2 : o(t - 1 + i(t - 1) * i(t + 1))
		}
	})
}, function (t, e, n) {
	function r(t) {
		return isFinite(t = +t) && 0 != t ? 0 > t ? -r(-t) : Math.log(t + Math.sqrt(t * t + 1)) : t
	}

	var o = n(2);
	o(o.S, "Math", {asinh: r})
}, function (t, e, n) {
	var r = n(2);
	r(r.S, "Math", {
		atanh: function (t) {
			return 0 == (t = +t) ? t : Math.log((1 + t) / (1 - t)) / 2
		}
	})
}, function (t, e, n) {
	var r = n(2), o = n(82);
	r(r.S, "Math", {
		cbrt: function (t) {
			return o(t = +t) * Math.pow(Math.abs(t), 1 / 3)
		}
	})
}, function (t, e, n) {
	var r = n(2);
	r(r.S, "Math", {
		clz32: function (t) {
			return (t >>>= 0) ? 31 - Math.floor(Math.log(t + .5) * Math.LOG2E) : 32
		}
	})
}, function (t, e, n) {
	var r = n(2), o = Math.exp;
	r(r.S, "Math", {
		cosh: function (t) {
			return (o(t = +t) + o(-t)) / 2
		}
	})
}, function (t, e, n) {
	var r = n(2);
	r(r.S, "Math", {expm1: n(81)})
}, function (t, e, n) {
	var r = n(2), o = n(82), i = Math.pow, a = i(2, -52), u = i(2, -23), s = i(2, 127) * (2 - u), c = i(2, -126), l = function (t) {
		return t + 1 / a - 1 / a
	};
	r(r.S, "Math", {
		fround: function (t) {
			var e, n, r = Math.abs(t), i = o(t);
			return c > r ? i * l(r / c / u) * c * u : (e = (1 + u / a) * r, n = e - (e - r), n > s || n != n ? i * (1 / 0) : i * n)
		}
	})
}, function (t, e, n) {
	var r = n(2), o = Math.abs;
	r(r.S, "Math", {
		hypot: function (t, e) {
			for (var n, r, i = 0, a = 0, u = arguments, s = u.length, c = 0; s > a;)n = o(u[a++]), n > c ? (r = c / n, i = i * r * r + 1, c = n) : n > 0 ? (r = n / c, i += r * r) : i += n;
			return c === 1 / 0 ? 1 / 0 : c * Math.sqrt(i)
		}
	})
}, function (t, e, n) {
	var r = n(2), o = Math.imul;
	r(r.S + r.F * n(13)(function () {
				return -5 != o(4294967295, 5) || 2 != o.length
			}), "Math", {
		imul: function (t, e) {
			var n = 65535, r = +t, o = +e, i = n & r, a = n & o;
			return 0 | i * a + ((n & r >>> 16) * a + i * (n & o >>> 16) << 16 >>> 0)
		}
	})
}, function (t, e, n) {
	var r = n(2);
	r(r.S, "Math", {
		log10: function (t) {
			return Math.log(t) / Math.LN10
		}
	})
}, function (t, e, n) {
	var r = n(2);
	r(r.S, "Math", {log1p: n(125)})
}, function (t, e, n) {
	var r = n(2);
	r(r.S, "Math", {
		log2: function (t) {
			return Math.log(t) / Math.LN2
		}
	})
}, function (t, e, n) {
	var r = n(2);
	r(r.S, "Math", {sign: n(82)})
}, function (t, e, n) {
	var r = n(2), o = n(81), i = Math.exp;
	r(r.S + r.F * n(13)(function () {
				return -2e-17 != !Math.sinh(-2e-17)
			}), "Math", {
		sinh: function (t) {
			return Math.abs(t = +t) < 1 ? (o(t) - o(-t)) / 2 : (i(t - 1) - i(-t - 1)) * (Math.E / 2)
		}
	})
}, function (t, e, n) {
	var r = n(2), o = n(81), i = Math.exp;
	r(r.S, "Math", {
		tanh: function (t) {
			var e = o(t = +t), n = o(-t);
			return e == 1 / 0 ? 1 : n == 1 / 0 ? -1 : (e - n) / (i(t) + i(-t))
		}
	})
}, function (t, e, n) {
	var r = n(2);
	r(r.S, "Math", {
		trunc: function (t) {
			return (t > 0 ? Math.floor : Math.ceil)(t)
		}
	})
}, function (t, e, n) {
	"use strict";
	var r = n(5), o = n(11), i = n(17), a = n(31), u = n(289), s = n(13), c = n(64).trim, l = "Number", f = o[l], h = f, p = f.prototype, d = a(r.create(p)) == l, g = "trim" in String.prototype, v = function (t) {
		var e = u(t, !1);
		if ("string" == typeof e && e.length > 2) {
			e = g ? e.trim() : c(e, 3);
			var n, r, o, i = e.charCodeAt(0);
			if (43 === i || 45 === i) {
				if (n = e.charCodeAt(2), 88 === n || 120 === n)return NaN
			} else if (48 === i) {
				switch (e.charCodeAt(1)) {
					case 66:
					case 98:
						r = 2, o = 49;
						break;
					case 79:
					case 111:
						r = 8, o = 55;
						break;
					default:
						return +e
				}
				for (var a, s = e.slice(2), l = 0, f = s.length; f > l; l++)if (a = s.charCodeAt(l), 48 > a || a > o)return NaN;
				return parseInt(s, r)
			}
		}
		return +e
	};
	f(" 0o1") && f("0b1") && !f("+0x1") || (f = function (t) {
		var e = arguments.length < 1 ? 0 : t, n = this;
		return n instanceof f && (d ? s(function () {
			p.valueOf.call(n)
		}) : a(n) != l) ? new h(v(e)) : v(e)
	}, r.each.call(n(20) ? r.getNames(h) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","), function (t) {
		i(h, t) && !i(f, t) && r.setDesc(f, t, r.getDesc(h, t))
	}), f.prototype = p, p.constructor = f, n(22)(o, l, f))
}, function (t, e, n) {
	var r = n(2);
	r(r.S, "Number", {EPSILON: Math.pow(2, -52)})
}, function (t, e, n) {
	var r = n(2), o = n(11).isFinite;
	r(r.S, "Number", {
		isFinite: function (t) {
			return "number" == typeof t && o(t)
		}
	})
}, function (t, e, n) {
	var r = n(2);
	r(r.S, "Number", {isInteger: n(120)})
}, function (t, e, n) {
	var r = n(2);
	r(r.S, "Number", {
		isNaN: function (t) {
			return t != t
		}
	})
}, function (t, e, n) {
	var r = n(2), o = n(120), i = Math.abs;
	r(r.S, "Number", {
		isSafeInteger: function (t) {
			return o(t) && i(t) <= 9007199254740991
		}
	})
}, function (t, e, n) {
	var r = n(2);
	r(r.S, "Number", {MAX_SAFE_INTEGER: 9007199254740991})
}, function (t, e, n) {
	var r = n(2);
	r(r.S, "Number", {MIN_SAFE_INTEGER: -9007199254740991})
}, function (t, e, n) {
	var r = n(2);
	r(r.S, "Number", {parseFloat: parseFloat})
}, function (t, e, n) {
	var r = n(2);
	r(r.S, "Number", {parseInt: parseInt})
}, function (t, e, n) {
	var r = n(2);
	r(r.S + r.F, "Object", {assign: n(284)})
}, function (t, e, n) {
	var r = n(8);
	n(21)("freeze", function (t) {
		return function (e) {
			return t && r(e) ? t(e) : e
		}
	})
}, function (t, e, n) {
	var r = n(23);
	n(21)("getOwnPropertyDescriptor", function (t) {
		return function (e, n) {
			return t(r(e), n)
		}
	})
}, function (t, e, n) {
	n(21)("getOwnPropertyNames", function () {
		return n(117).get
	})
}, function (t, e, n) {
	var r = n(33);
	n(21)("getPrototypeOf", function (t) {
		return function (e) {
			return t(r(e))
		}
	})
}, function (t, e, n) {
	var r = n(8);
	n(21)("isExtensible", function (t) {
		return function (e) {
			return r(e) ? t ? t(e) : !0 : !1
		}
	})
}, function (t, e, n) {
	var r = n(8);
	n(21)("isFrozen", function (t) {
		return function (e) {
			return r(e) ? t ? t(e) : !1 : !0
		}
	})
}, function (t, e, n) {
	var r = n(8);
	n(21)("isSealed", function (t) {
		return function (e) {
			return r(e) ? t ? t(e) : !1 : !0
		}
	})
}, function (t, e, n) {
	var r = n(2);
	r(r.S, "Object", {is: n(128)})
}, function (t, e, n) {
	var r = n(33);
	n(21)("keys", function (t) {
		return function (e) {
			return t(r(e))
		}
	})
}, function (t, e, n) {
	var r = n(8);
	n(21)("preventExtensions", function (t) {
		return function (e) {
			return t && r(e) ? t(e) : e
		}
	})
}, function (t, e, n) {
	var r = n(8);
	n(21)("seal", function (t) {
		return function (e) {
			return t && r(e) ? t(e) : e
		}
	})
}, function (t, e, n) {
	var r = n(2);
	r(r.S, "Object", {setPrototypeOf: n(83).set})
}, function (t, e, n) {
	"use strict";
	var r = n(56), o = {};
	o[n(10)("toStringTag")] = "z", o + "" != "[object z]" && n(22)(Object.prototype, "toString", function () {
		return "[object " + r(this) + "]"
	}, !0)
}, function (t, e, n) {
	"use strict";
	var r, o = n(5), i = n(80), a = n(11), u = n(25), s = n(56), c = n(2), l = n(8), f = n(9), h = n(40), p = n(63), d = n(45), g = n(83).set, v = n(128), m = n(10)("species"), y = n(288), b = n(283), x = "Promise", w = a.process, M = "process" == s(w), k = a[x], C = function (t) {
		var e = new k(function () {
		});
		return t && (e.constructor = Object), k.resolve(e) === e
	}, S = function () {
		function t(e) {
			var n = new k(e);
			return g(n, t.prototype), n
		}

		var e = !1;
		try {
			if (e = k && k.resolve && C(), g(t, k), t.prototype = o.create(k.prototype, {constructor: {value: t}}), t.resolve(5).then(function () {
					}) instanceof t || (e = !1), e && n(20)) {
				var r = !1;
				k.resolve(o.setDesc({}, "then", {
					get: function () {
						r = !0
					}
				})), e = r
			}
		} catch (i) {
			e = !1
		}
		return e
	}(), _ = function (t, e) {
		return i && t === k && e === r ? !0 : v(t, e)
	}, E = function (t) {
		var e = f(t)[m];
		return void 0 != e ? e : t
	}, T = function (t) {
		var e;
		return l(t) && "function" == typeof(e = t.then) ? e : !1
	}, A = function (t) {
		var e, n;
		this.promise = new t(function (t, r) {
			if (void 0 !== e || void 0 !== n)throw TypeError("Bad Promise constructor");
			e = t, n = r
		}), this.resolve = h(e), this.reject = h(n)
	}, O = function (t) {
		try {
			t()
		} catch (e) {
			return {error: e}
		}
	}, N = function (t, e) {
		if (!t.n) {
			t.n = !0;
			var n = t.c;
			b(function () {
				for (var r = t.v, o = 1 == t.s, i = 0, u = function (e) {
					var n, i, a = o ? e.ok : e.fail, u = e.resolve, s = e.reject;
					try {
						a ? (o || (t.h = !0), n = a === !0 ? r : a(r), n === e.promise ? s(TypeError("Promise-chain cycle")) : (i = T(n)) ? i.call(n, u, s) : u(n)) : s(r)
					} catch (c) {
						s(c)
					}
				}; n.length > i;)u(n[i++]);
				n.length = 0, t.n = !1, e && setTimeout(function () {
					var e, n, o = t.p;
					j(o) && (M ? w.emit("unhandledRejection", r, o) : (e = a.onunhandledrejection) ? e({
						promise: o,
						reason: r
					}) : (n = a.console) && n.error && n.error("Unhandled promise rejection", r)), t.a = void 0
				}, 1)
			})
		}
	}, j = function (t) {
		var e, n = t._d, r = n.a || n.c, o = 0;
		if (n.h)return !1;
		for (; r.length > o;)if (e = r[o++], e.fail || !j(e.promise))return !1;
		return !0
	}, P = function (t) {
		var e = this;
		e.d || (e.d = !0, e = e.r || e, e.v = t, e.s = 2, e.a = e.c.slice(), N(e, !0))
	}, D = function (t) {
		var e, n = this;
		if (!n.d) {
			n.d = !0, n = n.r || n;
			try {
				if (n.p === t)throw TypeError("Promise can't be resolved itself");
				(e = T(t)) ? b(function () {
					var r = {r: n, d: !1};
					try {
						e.call(t, u(D, r, 1), u(P, r, 1))
					} catch (o) {
						P.call(r, o)
					}
				}) : (n.v = t, n.s = 1, N(n, !1))
			} catch (r) {
				P.call({r: n, d: !1}, r)
			}
		}
	};
	S || (k = function (t) {
		h(t);
		var e = this._d = {p: p(this, k, x), c: [], a: void 0, s: 0, d: !1, v: void 0, h: !1, n: !1};
		try {
			t(u(D, e, 1), u(P, e, 1))
		} catch (n) {
			P.call(e, n)
		}
	}, n(61)(k.prototype, {
		then: function (t, e) {
			var n = new A(y(this, k)), r = n.promise, o = this._d;
			return n.ok = "function" == typeof t ? t : !0, n.fail = "function" == typeof e && e, o.c.push(n), o.a && o.a.push(n), o.s && N(o, !1), r
		}, "catch": function (t) {
			return this.then(void 0, t)
		}
	})), c(c.G + c.W + c.F * !S, {Promise: k}), n(47)(k, x), n(62)(x), r = n(32)[x], c(c.S + c.F * !S, x, {
		reject: function (t) {
			var e = new A(this), n = e.reject;
			return n(t), e.promise
		}
	}), c(c.S + c.F * (!S || C(!0)), x, {
		resolve: function (t) {
			if (t instanceof k && _(t.constructor, this))return t;
			var e = new A(this), n = e.resolve;
			return n(t), e.promise
		}
	}), c(c.S + c.F * !(S && n(79)(function (t) {
				k.all(t)["catch"](function () {
				})
			})), x, {
		all: function (t) {
			var e = E(this), n = new A(e), r = n.resolve, i = n.reject, a = [], u = O(function () {
				d(t, !1, a.push, a);
				var n = a.length, u = Array(n);
				n ? o.each.call(a, function (t, o) {
					var a = !1;
					e.resolve(t).then(function (t) {
						a || (a = !0, u[o] = t, --n || r(u))
					}, i)
				}) : r(u)
			});
			return u && i(u.error), n.promise
		}, race: function (t) {
			var e = E(this), n = new A(e), r = n.reject, o = O(function () {
				d(t, !1, function (t) {
					e.resolve(t).then(n.resolve, r)
				})
			});
			return o && r(o.error), n.promise
		}
	})
}, function (t, e, n) {
	var r = n(2), o = Function.apply;
	r(r.S, "Reflect", {
		apply: function (t, e, n) {
			return o.call(t, e, n)
		}
	})
}, function (t, e, n) {
	var r = n(5), o = n(2), i = n(40), a = n(9), u = n(8), s = Function.bind || n(32).Function.prototype.bind;
	o(o.S + o.F * n(13)(function () {
				function t() {
				}

				return !(Reflect.construct(function () {
				}, [], t) instanceof t)
			}), "Reflect", {
		construct: function (t, e) {
			i(t);
			var n = arguments.length < 3 ? t : i(arguments[2]);
			if (t == n) {
				if (void 0 != e)switch (a(e).length) {
					case 0:
						return new t;
					case 1:
						return new t(e[0]);
					case 2:
						return new t(e[0], e[1]);
					case 3:
						return new t(e[0], e[1], e[2]);
					case 4:
						return new t(e[0], e[1], e[2], e[3])
				}
				var o = [null];
				return o.push.apply(o, e), new (s.apply(t, o))
			}
			var c = n.prototype, l = r.create(u(c) ? c : Object.prototype), f = Function.apply.call(t, l, e);
			return u(f) ? f : l
		}
	})
}, function (t, e, n) {
	var r = n(5), o = n(2), i = n(9);
	o(o.S + o.F * n(13)(function () {
				Reflect.defineProperty(r.setDesc({}, 1, {value: 1}), 1, {value: 2})
			}), "Reflect", {
		defineProperty: function (t, e, n) {
			i(t);
			try {
				return r.setDesc(t, e, n), !0
			} catch (o) {
				return !1
			}
		}
	})
}, function (t, e, n) {
	var r = n(2), o = n(5).getDesc, i = n(9);
	r(r.S, "Reflect", {
		deleteProperty: function (t, e) {
			var n = o(i(t), e);
			return n && !n.configurable ? !1 : delete t[e]
		}
	})
}, function (t, e, n) {
	"use strict";
	var r = n(2), o = n(9), i = function (t) {
		this._t = o(t), this._i = 0;
		var e, n = this._k = [];
		for (e in t)n.push(e)
	};
	n(123)(i, "Object", function () {
		var t, e = this, n = e._k;
		do if (e._i >= n.length)return {value: void 0, done: !0}; while (!((t = n[e._i++]) in e._t));
		return {value: t, done: !1}
	}), r(r.S, "Reflect", {
		enumerate: function (t) {
			return new i(t)
		}
	})
}, function (t, e, n) {
	var r = n(5), o = n(2), i = n(9);
	o(o.S, "Reflect", {
		getOwnPropertyDescriptor: function (t, e) {
			return r.getDesc(i(t), e)
		}
	})
}, function (t, e, n) {
	var r = n(2), o = n(5).getProto, i = n(9);
	r(r.S, "Reflect", {
		getPrototypeOf: function (t) {
			return o(i(t))
		}
	})
}, function (t, e, n) {
	function r(t, e) {
		var n, a, c = arguments.length < 3 ? t : arguments[2];
		return s(t) === c ? t[e] : (n = o.getDesc(t, e)) ? i(n, "value") ? n.value : void 0 !== n.get ? n.get.call(c) : void 0 : u(a = o.getProto(t)) ? r(a, e, c) : void 0
	}

	var o = n(5), i = n(17), a = n(2), u = n(8), s = n(9);
	a(a.S, "Reflect", {get: r})
}, function (t, e, n) {
	var r = n(2);
	r(r.S, "Reflect", {
		has: function (t, e) {
			return e in t
		}
	})
}, function (t, e, n) {
	var r = n(2), o = n(9), i = Object.isExtensible;
	r(r.S, "Reflect", {
		isExtensible: function (t) {
			return o(t), i ? i(t) : !0
		}
	})
}, function (t, e, n) {
	var r = n(2);
	r(r.S, "Reflect", {ownKeys: n(127)})
}, function (t, e, n) {
	var r = n(2), o = n(9), i = Object.preventExtensions;
	r(r.S, "Reflect", {
		preventExtensions: function (t) {
			o(t);
			try {
				return i && i(t), !0
			} catch (e) {
				return !1
			}
		}
	})
}, function (t, e, n) {
	var r = n(2), o = n(83);
	o && r(r.S, "Reflect", {
		setPrototypeOf: function (t, e) {
			o.check(t, e);
			try {
				return o.set(t, e), !0
			} catch (n) {
				return !1
			}
		}
	})
}, function (t, e, n) {
	function r(t, e, n) {
		var a, l, f = arguments.length < 4 ? t : arguments[3], h = o.getDesc(s(t), e);
		if (!h) {
			if (c(l = o.getProto(t)))return r(l, e, n, f);
			h = u(0)
		}
		return i(h, "value") ? h.writable !== !1 && c(f) ? (a = o.getDesc(f, e) || u(0), a.value = n, o.setDesc(f, e, a), !0) : !1 : void 0 === h.set ? !1 : (h.set.call(f, n), !0)
	}

	var o = n(5), i = n(17), a = n(2), u = n(36), s = n(9), c = n(8);
	a(a.S, "Reflect", {set: r})
}, function (t, e, n) {
	var r = n(5), o = n(11), i = n(121), a = n(116), u = o.RegExp, s = u, c = u.prototype, l = /a/g, f = /a/g, h = new u(l) !== l;
	!n(20) || h && !n(13)(function () {
		return f[n(10)("match")] = !1, u(l) != l || u(f) == f || "/a/i" != u(l, "i")
	}) || (u = function (t, e) {
		var n = i(t), r = void 0 === e;
		return this instanceof u || !n || t.constructor !== u || !r ? h ? new s(n && !r ? t.source : t, e) : s((n = t instanceof u) ? t.source : t, n && r ? a.call(t) : e) : t
	}, r.each.call(r.getNames(s), function (t) {
		t in u || r.setDesc(u, t, {
			configurable: !0, get: function () {
				return s[t]
			}, set: function (e) {
				s[t] = e
			}
		})
	}), c.constructor = u, u.prototype = c, n(22)(o, "RegExp", u)), n(62)("RegExp")
}, function (t, e, n) {
	var r = n(5);
	n(20) && "g" != /./g.flags && r.setDesc(RegExp.prototype, "flags", {configurable: !0, get: n(116)})
}, function (t, e, n) {
	n(58)("match", 1, function (t, e) {
		return function (n) {
			"use strict";
			var r = t(this), o = void 0 == n ? void 0 : n[e];
			return void 0 !== o ? o.call(n, r) : new RegExp(n)[e](String(r))
		}
	})
}, function (t, e, n) {
	n(58)("replace", 2, function (t, e, n) {
		return function (r, o) {
			"use strict";
			var i = t(this), a = void 0 == r ? void 0 : r[e];
			return void 0 !== a ? a.call(r, i, o) : n.call(String(i), r, o)
		}
	})
}, function (t, e, n) {
	n(58)("search", 1, function (t, e) {
		return function (n) {
			"use strict";
			var r = t(this), o = void 0 == n ? void 0 : n[e];
			return void 0 !== o ? o.call(n, r) : new RegExp(n)[e](String(r))
		}
	})
}, function (t, e, n) {
	n(58)("split", 2, function (t, e, n) {
		return function (r, o) {
			"use strict";
			var i = t(this), a = void 0 == r ? void 0 : r[e];
			return void 0 !== a ? a.call(r, i, o) : n.call(String(i), r, o)
		}
	})
}, function (t, e, n) {
	"use strict";
	var r = n(112);
	n(57)("Set", function (t) {
		return function () {
			return t(this, arguments.length > 0 ? arguments[0] : void 0)
		}
	}, {
		add: function (t) {
			return r.def(this, t = 0 === t ? 0 : t, t)
		}
	}, r)
}, function (t, e, n) {
	"use strict";
	var r = n(2), o = n(84)(!1);
	r(r.P, "String", {
		codePointAt: function (t) {
			return o(this, t)
		}
	})
}, function (t, e, n) {
	"use strict";
	var r = n(2), o = n(18), i = n(85), a = "endsWith", u = ""[a];
	r(r.P + r.F * n(76)(a), "String", {
		endsWith: function (t) {
			var e = i(this, t, a), n = arguments, r = n.length > 1 ? n[1] : void 0, s = o(e.length), c = void 0 === r ? s : Math.min(o(r), s), l = String(t);
			return u ? u.call(e, l, c) : e.slice(c - l.length, c) === l
		}
	})
}, function (t, e, n) {
	var r = n(2), o = n(48), i = String.fromCharCode, a = String.fromCodePoint;
	r(r.S + r.F * (!!a && 1 != a.length), "String", {
		fromCodePoint: function (t) {
			for (var e, n = [], r = arguments, a = r.length, u = 0; a > u;) {
				if (e = +r[u++], o(e, 1114111) !== e)throw RangeError(e + " is not a valid code point");
				n.push(65536 > e ? i(e) : i(((e -= 65536) >> 10) + 55296, e % 1024 + 56320))
			}
			return n.join("")
		}
	})
}, function (t, e, n) {
	"use strict";
	var r = n(2), o = n(85), i = "includes";
	r(r.P + r.F * n(76)(i), "String", {
		includes: function (t) {
			return !!~o(this, t, i).indexOf(t, arguments.length > 1 ? arguments[1] : void 0)
		}
	})
}, function (t, e, n) {
	"use strict";
	var r = n(84)(!0);
	n(78)(String, "String", function (t) {
		this._t = String(t), this._i = 0
	}, function () {
		var t, e = this._t, n = this._i;
		return n >= e.length ? {value: void 0, done: !0} : (t = r(e, n), this._i += t.length, {value: t, done: !1})
	})
}, function (t, e, n) {
	var r = n(2), o = n(23), i = n(18);
	r(r.S, "String", {
		raw: function (t) {
			for (var e = o(t.raw), n = i(e.length), r = arguments, a = r.length, u = [], s = 0; n > s;)u.push(String(e[s++])), a > s && u.push(String(r[s]));
			return u.join("")
		}
	})
}, function (t, e, n) {
	var r = n(2);
	r(r.P, "String", {repeat: n(131)})
}, function (t, e, n) {
	"use strict";
	var r = n(2), o = n(18), i = n(85), a = "startsWith", u = ""[a];
	r(r.P + r.F * n(76)(a), "String", {
		startsWith: function (t) {
			var e = i(this, t, a), n = arguments, r = o(Math.min(n.length > 1 ? n[1] : void 0, e.length)), s = String(t);
			return u ? u.call(e, s, r) : e.slice(r, r + s.length) === s
		}
	})
}, function (t, e, n) {
	"use strict";
	n(64)("trim", function (t) {
		return function () {
			return t(this, 3)
		}
	})
}, function (t, e, n) {
	"use strict";
	var r = n(5), o = n(11), i = n(17), a = n(20), u = n(2), s = n(22), c = n(13), l = n(129), f = n(47), h = n(42), p = n(10), d = n(282), g = n(117), v = n(281), m = n(77), y = n(9), b = n(23), x = n(36), w = r.getDesc, M = r.setDesc, k = r.create, C = g.get, S = o.Symbol, _ = o.JSON, E = _ && _.stringify, T = !1, A = p("_hidden"), O = r.isEnum, N = l("symbol-registry"), j = l("symbols"), P = "function" == typeof S, D = Object.prototype, R = a && c(function () {
		return 7 != k(M({}, "a", {
					get: function () {
						return M(this, "a", {value: 7}).a
					}
				})).a
	}) ? function (t, e, n) {
		var r = w(D, e);
		r && delete D[e], M(t, e, n), r && t !== D && M(D, e, r)
	} : M, F = function (t) {
		var e = j[t] = k(S.prototype);
		return e._k = t, a && T && R(D, t, {
			configurable: !0, set: function (e) {
				i(this, A) && i(this[A], t) && (this[A][t] = !1), R(this, t, x(1, e))
			}
		}), e
	}, L = function (t) {
		return "symbol" == typeof t
	}, I = function (t, e, n) {
		return n && i(j, e) ? (n.enumerable ? (i(t, A) && t[A][e] && (t[A][e] = !1), n = k(n, {enumerable: x(0, !1)})) : (i(t, A) || M(t, A, x(1, {})), t[A][e] = !0), R(t, e, n)) : M(t, e, n)
	}, q = function (t, e) {
		y(t);
		for (var n, r = v(e = b(e)), o = 0, i = r.length; i > o;)I(t, n = r[o++], e[n]);
		return t
	}, B = function (t, e) {
		return void 0 === e ? k(t) : q(k(t), e)
	}, z = function (t) {
		var e = O.call(this, t);
		return e || !i(this, t) || !i(j, t) || i(this, A) && this[A][t] ? e : !0
	}, H = function (t, e) {
		var n = w(t = b(t), e);
		return !n || !i(j, e) || i(t, A) && t[A][e] || (n.enumerable = !0), n
	}, W = function (t) {
		for (var e, n = C(b(t)), r = [], o = 0; n.length > o;)i(j, e = n[o++]) || e == A || r.push(e);
		return r
	}, U = function (t) {
		for (var e, n = C(b(t)), r = [], o = 0; n.length > o;)i(j, e = n[o++]) && r.push(j[e]);
		return r
	}, $ = function (t) {
		if (void 0 !== t && !L(t)) {
			for (var e, n, r = [t], o = 1, i = arguments; i.length > o;)r.push(i[o++]);
			return e = r[1], "function" == typeof e && (n = e), (n || !m(e)) && (e = function (t, e) {
				return n && (e = n.call(this, t, e)), L(e) ? void 0 : e
			}), r[1] = e, E.apply(_, r)
		}
	}, G = c(function () {
		var t = S();
		return "[null]" != E([t]) || "{}" != E({a: t}) || "{}" != E(Object(t))
	});
	P || (S = function () {
		if (L(this))throw TypeError("Symbol is not a constructor");
		return F(h(arguments.length > 0 ? arguments[0] : void 0))
	}, s(S.prototype, "toString", function () {
		return this._k
	}), L = function (t) {
		return t instanceof S
	}, r.create = B, r.isEnum = z, r.getDesc = H, r.setDesc = I, r.setDescs = q, r.getNames = g.get = W, r.getSymbols = U, a && !n(80) && s(D, "propertyIsEnumerable", z, !0));
	var V = {
		"for": function (t) {
			return i(N, t += "") ? N[t] : N[t] = S(t)
		}, keyFor: function (t) {
			return d(N, t)
		}, useSetter: function () {
			T = !0
		}, useSimple: function () {
			T = !1
		}
	};
	r.each.call("hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), function (t) {
		var e = p(t);
		V[t] = P ? e : F(e)
	}), T = !0, u(u.G + u.W, {Symbol: S}), u(u.S, "Symbol", V), u(u.S + u.F * !P, "Object", {
		create: B,
		defineProperty: I,
		defineProperties: q,
		getOwnPropertyDescriptor: H,
		getOwnPropertyNames: W,
		getOwnPropertySymbols: U
	}), _ && u(u.S + u.F * (!P || G), "JSON", {stringify: $}), f(S, "Symbol"), f(Math, "Math", !0), f(o.JSON, "JSON", !0)
}, function (t, e, n) {
	"use strict";
	var r = n(5), o = n(22), i = n(114), a = n(8), u = n(17), s = i.frozenStore, c = i.WEAK, l = Object.isExtensible || a, f = {}, h = n(57)("WeakMap", function (t) {
		return function () {
			return t(this, arguments.length > 0 ? arguments[0] : void 0)
		}
	}, {
		get: function (t) {
			if (a(t)) {
				if (!l(t))return s(this).get(t);
				if (u(t, c))return t[c][this._i]
			}
		}, set: function (t, e) {
			return i.def(this, t, e)
		}
	}, i, !0, !0);
	7 != (new h).set((Object.freeze || Object)(f), 7).get(f) && r.each.call(["delete", "has", "get", "set"], function (t) {
		var e = h.prototype, n = e[t];
		o(e, t, function (e, r) {
			if (a(e) && !l(e)) {
				var o = s(this)[t](e, r);
				return "set" == t ? this : o
			}
			return n.call(this, e, r)
		})
	})
}, function (t, e, n) {
	"use strict";
	var r = n(114);
	n(57)("WeakSet", function (t) {
		return function () {
			return t(this, arguments.length > 0 ? arguments[0] : void 0)
		}
	}, {
		add: function (t) {
			return r.def(this, t, !0)
		}
	}, r, !1, !0)
}, function (t, e, n) {
	"use strict";
	var r = n(2), o = n(111)(!0);
	r(r.P, "Array", {
		includes: function (t) {
			return o(this, t, arguments.length > 1 ? arguments[1] : void 0)
		}
	}), n(41)("includes")
}, function (t, e, n) {
	var r = n(2);
	r(r.P, "Map", {toJSON: n(113)("Map")})
}, function (t, e, n) {
	var r = n(2), o = n(126)(!0);
	r(r.S, "Object", {
		entries: function (t) {
			return o(t)
		}
	})
}, function (t, e, n) {
	var r = n(5), o = n(2), i = n(127), a = n(23), u = n(36);
	o(o.S, "Object", {
		getOwnPropertyDescriptors: function (t) {
			for (var e, n, o = a(t), s = r.setDesc, c = r.getDesc, l = i(o), f = {}, h = 0; l.length > h;)n = c(o, e = l[h++]), e in f ? s(f, e, u(0, n)) : f[e] = n;
			return f
		}
	})
}, function (t, e, n) {
	var r = n(2), o = n(126)(!1);
	r(r.S, "Object", {
		values: function (t) {
			return o(t)
		}
	})
}, function (t, e, n) {
	var r = n(2), o = n(287)(/[\\^$*+?.()|[\]{}]/g, "\\$&");
	r(r.S, "RegExp", {
		escape: function (t) {
			return o(t)
		}
	})
}, function (t, e, n) {
	var r = n(2);
	r(r.P, "Set", {toJSON: n(113)("Set")})
}, function (t, e, n) {
	"use strict";
	var r = n(2), o = n(84)(!0);
	r(r.P, "String", {
		at: function (t) {
			return o(this, t)
		}
	})
}, function (t, e, n) {
	"use strict";
	var r = n(2), o = n(130);
	r(r.P, "String", {
		padLeft: function (t) {
			return o(this, t, arguments.length > 1 ? arguments[1] : void 0, !0)
		}
	})
}, function (t, e, n) {
	"use strict";
	var r = n(2), o = n(130);
	r(r.P, "String", {
		padRight: function (t) {
			return o(this, t, arguments.length > 1 ? arguments[1] : void 0, !1)
		}
	})
}, function (t, e, n) {
	"use strict";
	n(64)("trimLeft", function (t) {
		return function () {
			return t(this, 1)
		}
	})
}, function (t, e, n) {
	"use strict";
	n(64)("trimRight", function (t) {
		return function () {
			return t(this, 2)
		}
	})
}, function (t, e, n) {
	var r = n(5), o = n(2), i = n(25), a = n(32).Array || Array, u = {}, s = function (t, e) {
		r.each.call(t.split(","), function (t) {
			void 0 == e && t in a ? u[t] = a[t] : t in [] && (u[t] = i(Function.call, [][t], e))
		})
	};
	s("pop,reverse,shift,keys,values,entries", 1), s("indexOf,every,some,forEach,map,filter,find,findIndex,includes", 3), s("join,slice,concat,push,splice,unshift,sort,lastIndexOf,reduce,reduceRight,copyWithin,fill"), o(o.S, "Array", u)
}, function (t, e, n) {
	n(134);
	var r = n(11), o = n(27), i = n(46), a = n(10)("iterator"), u = r.NodeList, s = r.HTMLCollection, c = u && u.prototype, l = s && s.prototype, f = i.NodeList = i.HTMLCollection = i.Array;
	c && !c[a] && o(c, a, f), l && !l[a] && o(l, a, f)
}, function (t, e, n) {
	var r = n(2), o = n(132);
	r(r.G + r.B, {setImmediate: o.set, clearImmediate: o.clear})
}, function (t, e, n) {
	var r = n(11), o = n(2), i = n(59), a = n(285), u = r.navigator, s = !!u && /MSIE .\./.test(u.userAgent), c = function (t) {
		return s ? function (e, n) {
			return t(i(a, [].slice.call(arguments, 2), "function" == typeof e ? e : Function(e)), n)
		} : t
	};
	o(o.G + o.B + o.F * s, {setTimeout: c(r.setTimeout), setInterval: c(r.setInterval)})
}, function (t, e, n) {
	n(290), n(373), n(328), n(336), n(340), n(341), n(329), n(339), n(338), n(334), n(335), n(333), n(330), n(332), n(337), n(331), n(299), n(298), n(318), n(319), n(320), n(321), n(322), n(323), n(324), n(325), n(326), n(327), n(301), n(302), n(303), n(304), n(305), n(306), n(307), n(308), n(309), n(310), n(311), n(312), n(313), n(314), n(315), n(316), n(317), n(366), n(369), n(372), n(368), n(364), n(365), n(367), n(370), n(371), n(295), n(296), n(134), n(297), n(291), n(292), n(294), n(293), n(357), n(358), n(359), n(360), n(361), n(362), n(342), n(300), n(363), n(374), n(375), n(343), n(344), n(345), n(346), n(347), n(350), n(348), n(349), n(351), n(352), n(353), n(354), n(356), n(355), n(376), n(383), n(384), n(385), n(386), n(387), n(381), n(379), n(380), n(378), n(377), n(382), n(388), n(391),n(390),n(389),t.exports = n(32)
}, function (t, e, n) {
	var r, o;
	!function () {
		function i(t) {
			return t && (t.ownerDocument || t.document || t).documentElement
		}

		function a(t) {
			return t && (t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView)
		}

		function u(t, e) {
			return e > t ? -1 : t > e ? 1 : t >= e ? 0 : NaN
		}

		function s(t) {
			return null === t ? NaN : +t
		}

		function c(t) {
			return !isNaN(t)
		}

		function l(t) {
			return {
				left: function (e, n, r, o) {
					for (arguments.length < 3 && (r = 0), arguments.length < 4 && (o = e.length); o > r;) {
						var i = r + o >>> 1;
						t(e[i], n) < 0 ? r = i + 1 : o = i
					}
					return r
				}, right: function (e, n, r, o) {
					for (arguments.length < 3 && (r = 0), arguments.length < 4 && (o = e.length); o > r;) {
						var i = r + o >>> 1;
						t(e[i], n) > 0 ? o = i : r = i + 1
					}
					return r
				}
			}
		}

		function f(t) {
			return t.length
		}

		function h(t) {
			for (var e = 1; t * e % 1;)e *= 10;
			return e
		}

		function p(t, e) {
			for (var n in e)Object.defineProperty(t.prototype, n, {value: e[n], enumerable: !1})
		}

		function d() {
			this._ = Object.create(null)
		}

		function g(t) {
			return (t += "") === _a || t[0] === Ea ? Ea + t : t
		}

		function v(t) {
			return (t += "")[0] === Ea ? t.slice(1) : t
		}

		function m(t) {
			return g(t) in this._
		}

		function y(t) {
			return (t = g(t)) in this._ && delete this._[t]
		}

		function b() {
			var t = [];
			for (var e in this._)t.push(v(e));
			return t
		}

		function x() {
			var t = 0;
			for (var e in this._)++t;
			return t
		}

		function w() {
			for (var t in this._)return !1;
			return !0
		}

		function M() {
			this._ = Object.create(null)
		}

		function k(t) {
			return t
		}

		function C(t, e, n) {
			return function () {
				var r = n.apply(e, arguments);
				return r === e ? t : r
			}
		}

		function S(t, e) {
			if (e in t)return e;
			e = e.charAt(0).toUpperCase() + e.slice(1);
			for (var n = 0, r = Ta.length; r > n; ++n) {
				var o = Ta[n] + e;
				if (o in t)return o
			}
		}

		function _() {
		}

		function E() {
		}

		function T(t) {
			function e() {
				for (var e, r = n, o = -1, i = r.length; ++o < i;)(e = r[o].on) && e.apply(this, arguments);
				return t
			}

			var n = [], r = new d;
			return e.on = function (e, o) {
				var i, a = r.get(e);
				return arguments.length < 2 ? a && a.on : (a && (a.on = null, n = n.slice(0, i = n.indexOf(a)).concat(n.slice(i + 1)), r.remove(e)), o && n.push(r.set(e, {on: o})), t)
			}, e
		}

		function A() {
			pa.event.preventDefault()
		}

		function O() {
			for (var t, e = pa.event; t = e.sourceEvent;)e = t;
			return e
		}

		function N(t) {
			for (var e = new E, n = 0, r = arguments.length; ++n < r;)e[arguments[n]] = T(e);
			return e.of = function (n, r) {
				return function (o) {
					try {
						var i = o.sourceEvent = pa.event;
						o.target = t, pa.event = o, e[o.type].apply(n, r)
					} finally {
						pa.event = i
					}
				}
			}, e
		}

		function j(t) {
			return Oa(t, Da), t
		}

		function P(t) {
			return "function" == typeof t ? t : function () {
				return Na(t, this)
			}
		}

		function D(t) {
			return "function" == typeof t ? t : function () {
				return ja(t, this)
			}
		}

		function R(t, e) {
			function n() {
				this.removeAttribute(t)
			}

			function r() {
				this.removeAttributeNS(t.space, t.local)
			}

			function o() {
				this.setAttribute(t, e)
			}

			function i() {
				this.setAttributeNS(t.space, t.local, e)
			}

			function a() {
				var n = e.apply(this, arguments);
				null == n ? this.removeAttribute(t) : this.setAttribute(t, n)
			}

			function u() {
				var n = e.apply(this, arguments);
				null == n ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, n)
			}

			return t = pa.ns.qualify(t), null == e ? t.local ? r : n : "function" == typeof e ? t.local ? u : a : t.local ? i : o
		}

		function F(t) {
			return t.trim().replace(/\s+/g, " ")
		}

		function L(t) {
			return new RegExp("(?:^|\\s+)" + pa.requote(t) + "(?:\\s+|$)", "g")
		}

		function I(t) {
			return (t + "").trim().split(/^|\s+/)
		}

		function q(t, e) {
			function n() {
				for (var n = -1; ++n < o;)t[n](this, e)
			}

			function r() {
				for (var n = -1, r = e.apply(this, arguments); ++n < o;)t[n](this, r)
			}

			t = I(t).map(B);
			var o = t.length;
			return "function" == typeof e ? r : n
		}

		function B(t) {
			var e = L(t);
			return function (n, r) {
				if (o = n.classList)return r ? o.add(t) : o.remove(t);
				var o = n.getAttribute("class") || "";
				r ? (e.lastIndex = 0, e.test(o) || n.setAttribute("class", F(o + " " + t))) : n.setAttribute("class", F(o.replace(e, " ")))
			}
		}

		function z(t, e, n) {
			function r() {
				this.style.removeProperty(t)
			}

			function o() {
				this.style.setProperty(t, e, n)
			}

			function i() {
				var r = e.apply(this, arguments);
				null == r ? this.style.removeProperty(t) : this.style.setProperty(t, r, n)
			}

			return null == e ? r : "function" == typeof e ? i : o
		}

		function H(t, e) {
			function n() {
				delete this[t]
			}

			function r() {
				this[t] = e
			}

			function o() {
				var n = e.apply(this, arguments);
				null == n ? delete this[t] : this[t] = n
			}

			return null == e ? n : "function" == typeof e ? o : r
		}

		function W(t) {
			function e() {
				var e = this.ownerDocument, n = this.namespaceURI;
				return n ? e.createElementNS(n, t) : e.createElement(t)
			}

			function n() {
				return this.ownerDocument.createElementNS(t.space, t.local)
			}

			return "function" == typeof t ? t : (t = pa.ns.qualify(t)).local ? n : e
		}

		function U() {
			var t = this.parentNode;
			t && t.removeChild(this)
		}

		function $(t) {
			return {__data__: t}
		}

		function G(t) {
			return function () {
				return Pa(this, t)
			}
		}

		function V(t) {
			return arguments.length || (t = u), function (e, n) {
				return e && n ? t(e.__data__, n.__data__) : !e - !n
			}
		}

		function Y(t, e) {
			for (var n = 0, r = t.length; r > n; n++)for (var o, i = t[n], a = 0, u = i.length; u > a; a++)(o = i[a]) && e(o, a, n);
			return t
		}

		function X(t) {
			return Oa(t, Fa), t
		}

		function Z(t) {
			var e, n;
			return function (r, o, i) {
				var a, u = t[i].update, s = u.length;
				for (i != n && (n = i, e = 0), o >= e && (e = o + 1); !(a = u[e]) && ++e < s;);
				return a
			}
		}

		function K(t, e, n) {
			function r() {
				var e = this[a];
				e && (this.removeEventListener(t, e, e.$), delete this[a])
			}

			function o() {
				var o = s(e, ga(arguments));
				r.call(this), this.addEventListener(t, this[a] = o, o.$ = n), o._ = e
			}

			function i() {
				var e, n = new RegExp("^__on([^.]+)" + pa.requote(t) + "$");
				for (var r in this)if (e = r.match(n)) {
					var o = this[r];
					this.removeEventListener(e[1], o, o.$), delete this[r]
				}
			}

			var a = "__on" + t, u = t.indexOf("."), s = J;
			u > 0 && (t = t.slice(0, u));
			var c = La.get(t);
			return c && (t = c, s = Q), u ? e ? o : r : e ? _ : i
		}

		function J(t, e) {
			return function (n) {
				var r = pa.event;
				pa.event = n, e[0] = this.__data__;
				try {
					t.apply(this, e)
				} finally {
					pa.event = r
				}
			}
		}

		function Q(t, e) {
			var n = J(t, e);
			return function (t) {
				var e = this, r = t.relatedTarget;
				r && (r === e || 8 & r.compareDocumentPosition(e)) || n.call(e, t)
			}
		}

		function tt(t) {
			var e = ".dragsuppress-" + ++qa, n = "click" + e, r = pa.select(a(t)).on("touchmove" + e, A).on("dragstart" + e, A).on("selectstart" + e, A);
			if (null == Ia && (Ia = "onselectstart" in t ? !1 : S(t.style, "userSelect")), Ia) {
				var o = i(t).style, u = o[Ia];
				o[Ia] = "none"
			}
			return function (t) {
				if (r.on(e, null), Ia && (o[Ia] = u), t) {
					var i = function () {
						r.on(n, null)
					};
					r.on(n, function () {
						A(), i()
					}, !0), setTimeout(i, 0)
				}
			}
		}

		function et(t, e) {
			e.changedTouches && (e = e.changedTouches[0]);
			var n = t.ownerSVGElement || t;
			if (n.createSVGPoint) {
				var r = n.createSVGPoint();
				if (0 > Ba) {
					var o = a(t);
					if (o.scrollX || o.scrollY) {
						n = pa.select("body").append("svg").style({
							position: "absolute",
							top: 0,
							left: 0,
							margin: 0,
							padding: 0,
							border: "none"
						}, "important");
						var i = n[0][0].getScreenCTM();
						Ba = !(i.f || i.e), n.remove()
					}
				}
				return Ba ? (r.x = e.pageX, r.y = e.pageY) : (r.x = e.clientX, r.y = e.clientY), r = r.matrixTransform(t.getScreenCTM().inverse()), [r.x, r.y]
			}
			var u = t.getBoundingClientRect();
			return [e.clientX - u.left - t.clientLeft, e.clientY - u.top - t.clientTop]
		}

		function nt() {
			return pa.event.changedTouches[0].identifier
		}

		function rt(t) {
			return t > 0 ? 1 : 0 > t ? -1 : 0
		}

		function ot(t, e, n) {
			return (e[0] - t[0]) * (n[1] - t[1]) - (e[1] - t[1]) * (n[0] - t[0])
		}

		function it(t) {
			return t > 1 ? 0 : -1 > t ? Wa : Math.acos(t)
		}

		function at(t) {
			return t > 1 ? Ga : -1 > t ? -Ga : Math.asin(t)
		}

		function ut(t) {
			return ((t = Math.exp(t)) - 1 / t) / 2
		}

		function st(t) {
			return ((t = Math.exp(t)) + 1 / t) / 2
		}

		function ct(t) {
			return ((t = Math.exp(2 * t)) - 1) / (t + 1)
		}

		function lt(t) {
			return (t = Math.sin(t / 2)) * t
		}

		function ft() {
		}

		function ht(t, e, n) {
			return this instanceof ht ? (this.h = +t, this.s = +e, void(this.l = +n)) : arguments.length < 2 ? t instanceof ht ? new ht(t.h, t.s, t.l) : _t("" + t, Et, ht) : new ht(t, e, n)
		}

		function pt(t, e, n) {
			function r(t) {
				return t > 360 ? t -= 360 : 0 > t && (t += 360), 60 > t ? i + (a - i) * t / 60 : 180 > t ? a : 240 > t ? i + (a - i) * (240 - t) / 60 : i
			}

			function o(t) {
				return Math.round(255 * r(t))
			}

			var i, a;
			return t = isNaN(t) ? 0 : (t %= 360) < 0 ? t + 360 : t, e = isNaN(e) ? 0 : 0 > e ? 0 : e > 1 ? 1 : e, n = 0 > n ? 0 : n > 1 ? 1 : n, a = .5 >= n ? n * (1 + e) : n + e - n * e, i = 2 * n - a, new Mt(o(t + 120), o(t), o(t - 120))
		}

		function dt(t, e, n) {
			return this instanceof dt ? (this.h = +t, this.c = +e, void(this.l = +n)) : arguments.length < 2 ? t instanceof dt ? new dt(t.h, t.c, t.l) : t instanceof vt ? yt(t.l, t.a, t.b) : yt((t = Tt((t = pa.rgb(t)).r, t.g, t.b)).l, t.a, t.b) : new dt(t, e, n)
		}

		function gt(t, e, n) {
			return isNaN(t) && (t = 0), isNaN(e) && (e = 0), new vt(n, Math.cos(t *= Va) * e, Math.sin(t) * e)
		}

		function vt(t, e, n) {
			return this instanceof vt ? (this.l = +t, this.a = +e, void(this.b = +n)) : arguments.length < 2 ? t instanceof vt ? new vt(t.l, t.a, t.b) : t instanceof dt ? gt(t.h, t.c, t.l) : Tt((t = Mt(t)).r, t.g, t.b) : new vt(t, e, n)
		}

		function mt(t, e, n) {
			var r = (t + 16) / 116, o = r + e / 500, i = r - n / 200;
			return o = bt(o) * ou, r = bt(r) * iu, i = bt(i) * au, new Mt(wt(3.2404542 * o - 1.5371385 * r - .4985314 * i), wt(-.969266 * o + 1.8760108 * r + .041556 * i), wt(.0556434 * o - .2040259 * r + 1.0572252 * i))
		}

		function yt(t, e, n) {
			return t > 0 ? new dt(Math.atan2(n, e) * Ya, Math.sqrt(e * e + n * n), t) : new dt(NaN, NaN, t)
		}

		function bt(t) {
			return t > .206893034 ? t * t * t : (t - 4 / 29) / 7.787037
		}

		function xt(t) {
			return t > .008856 ? Math.pow(t, 1 / 3) : 7.787037 * t + 4 / 29
		}

		function wt(t) {
			return Math.round(255 * (.00304 >= t ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - .055))
		}

		function Mt(t, e, n) {
			return this instanceof Mt ? (this.r = ~~t, this.g = ~~e, void(this.b = ~~n)) : arguments.length < 2 ? t instanceof Mt ? new Mt(t.r, t.g, t.b) : _t("" + t, Mt, pt) : new Mt(t, e, n)
		}

		function kt(t) {
			return new Mt(t >> 16, t >> 8 & 255, 255 & t)
		}

		function Ct(t) {
			return kt(t) + ""
		}

		function St(t) {
			return 16 > t ? "0" + Math.max(0, t).toString(16) : Math.min(255, t).toString(16)
		}

		function _t(t, e, n) {
			var r, o, i, a = 0, u = 0, s = 0;
			if (r = /([a-z]+)\((.*)\)/.exec(t = t.toLowerCase()))switch (o = r[2].split(","), r[1]) {
				case"hsl":
					return n(parseFloat(o[0]), parseFloat(o[1]) / 100, parseFloat(o[2]) / 100);
				case"rgb":
					return e(Ot(o[0]), Ot(o[1]), Ot(o[2]))
			}
			return (i = cu.get(t)) ? e(i.r, i.g, i.b) : (null == t || "#" !== t.charAt(0) || isNaN(i = parseInt(t.slice(1), 16)) || (4 === t.length ? (a = (3840 & i) >> 4, a = a >> 4 | a, u = 240 & i, u = u >> 4 | u, s = 15 & i, s = s << 4 | s) : 7 === t.length && (a = (16711680 & i) >> 16, u = (65280 & i) >> 8, s = 255 & i)), e(a, u, s))
		}

		function Et(t, e, n) {
			var r, o, i = Math.min(t /= 255, e /= 255, n /= 255), a = Math.max(t, e, n), u = a - i, s = (a + i) / 2;
			return u ? (o = .5 > s ? u / (a + i) : u / (2 - a - i), r = t == a ? (e - n) / u + (n > e ? 6 : 0) : e == a ? (n - t) / u + 2 : (t - e) / u + 4, r *= 60) : (r = NaN, o = s > 0 && 1 > s ? 0 : r), new ht(r, o, s)
		}

		function Tt(t, e, n) {
			t = At(t), e = At(e), n = At(n);
			var r = xt((.4124564 * t + .3575761 * e + .1804375 * n) / ou), o = xt((.2126729 * t + .7151522 * e + .072175 * n) / iu), i = xt((.0193339 * t + .119192 * e + .9503041 * n) / au);
			return vt(116 * o - 16, 500 * (r - o), 200 * (o - i))
		}

		function At(t) {
			return (t /= 255) <= .04045 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4)
		}

		function Ot(t) {
			var e = parseFloat(t);
			return "%" === t.charAt(t.length - 1) ? Math.round(2.55 * e) : e
		}

		function Nt(t) {
			return "function" == typeof t ? t : function () {
				return t
			}
		}

		function jt(t) {
			return function (e, n, r) {
				return 2 === arguments.length && "function" == typeof n && (r = n, n = null), Pt(e, n, t, r)
			}
		}

		function Pt(t, e, n, r) {
			function o() {
				var t, e = s.status;
				if (!e && Rt(s) || e >= 200 && 300 > e || 304 === e) {
					try {
						t = n.call(i, s)
					} catch (r) {
						return void a.error.call(i, r)
					}
					a.load.call(i, t)
				} else a.error.call(i, s)
			}

			var i = {}, a = pa.dispatch("beforesend", "progress", "load", "error"), u = {}, s = new XMLHttpRequest, c = null;
			return !this.XDomainRequest || "withCredentials" in s || !/^(http(s)?:)?\/\//.test(t) || (s = new XDomainRequest), "onload" in s ? s.onload = s.onerror = o : s.onreadystatechange = function () {
				s.readyState > 3 && o()
			}, s.onprogress = function (t) {
				var e = pa.event;
				pa.event = t;
				try {
					a.progress.call(i, s)
				} finally {
					pa.event = e
				}
			}, i.header = function (t, e) {
				return t = (t + "").toLowerCase(), arguments.length < 2 ? u[t] : (null == e ? delete u[t] : u[t] = e + "", i)
			}, i.mimeType = function (t) {
				return arguments.length ? (e = null == t ? null : t + "", i) : e
			}, i.responseType = function (t) {
				return arguments.length ? (c = t, i) : c
			}, i.response = function (t) {
				return n = t, i
			}, ["get", "post"].forEach(function (t) {
				i[t] = function () {
					return i.send.apply(i, [t].concat(ga(arguments)))
				}
			}), i.send = function (n, r, o) {
				if (2 === arguments.length && "function" == typeof r && (o = r, r = null), s.open(n, t, !0), null == e || "accept" in u || (u.accept = e + ",*/*"), s.setRequestHeader)for (var l in u)s.setRequestHeader(l, u[l]);
				return null != e && s.overrideMimeType && s.overrideMimeType(e), null != c && (s.responseType = c), null != o && i.on("error", o).on("load", function (t) {
					o(null, t)
				}), a.beforesend.call(i, s), s.send(null == r ? null : r), i
			}, i.abort = function () {
				return s.abort(), i
			}, pa.rebind(i, a, "on"), null == r ? i : i.get(Dt(r))
		}

		function Dt(t) {
			return 1 === t.length ? function (e, n) {
				t(null == e ? n : null)
			} : t
		}

		function Rt(t) {
			var e = t.responseType;
			return e && "text" !== e ? t.response : t.responseText
		}

		function Ft(t, e, n) {
			var r = arguments.length;
			2 > r && (e = 0), 3 > r && (n = Date.now());
			var o = n + e, i = {c: t, t: o, n: null};
			return fu ? fu.n = i : lu = i, fu = i, hu || (pu = clearTimeout(pu), hu = 1, du(Lt)), i
		}

		function Lt() {
			var t = It(), e = qt() - t;
			e > 24 ? (isFinite(e) && (clearTimeout(pu), pu = setTimeout(Lt, e)), hu = 0) : (hu = 1, du(Lt))
		}

		function It() {
			for (var t = Date.now(), e = lu; e;)t >= e.t && e.c(t - e.t) && (e.c = null), e = e.n;
			return t
		}

		function qt() {
			for (var t, e = lu, n = 1 / 0; e;)e.c ? (e.t < n && (n = e.t), e = (t = e).n) : e = t ? t.n = e.n : lu = e.n;
			return fu = t, n
		}

		function Bt(t, e) {
			return e - (t ? Math.ceil(Math.log(t) / Math.LN10) : 1)
		}

		function zt(t, e) {
			var n = Math.pow(10, 3 * Sa(8 - e));
			return {
				scale: e > 8 ? function (t) {
					return t / n
				} : function (t) {
					return t * n
				}, symbol: t
			}
		}

		function Ht(t) {
			var e = t.decimal, n = t.thousands, r = t.grouping, o = t.currency, i = r && n ? function (t, e) {
				for (var o = t.length, i = [], a = 0, u = r[0], s = 0; o > 0 && u > 0 && (s + u + 1 > e && (u = Math.max(1, e - s)), i.push(t.substring(o -= u, o + u)), !((s += u + 1) > e));)u = r[a = (a + 1) % r.length];
				return i.reverse().join(n)
			} : k;
			return function (t) {
				var n = vu.exec(t), r = n[1] || " ", a = n[2] || ">", u = n[3] || "-", s = n[4] || "", c = n[5], l = +n[6], f = n[7], h = n[8], p = n[9], d = 1, g = "", v = "", m = !1, y = !0;
				switch (h && (h = +h.substring(1)), (c || "0" === r && "=" === a) && (c = r = "0", a = "="), p) {
					case"n":
						f = !0, p = "g";
						break;
					case"%":
						d = 100, v = "%", p = "f";
						break;
					case"p":
						d = 100, v = "%", p = "r";
						break;
					case"b":
					case"o":
					case"x":
					case"X":
						"#" === s && (g = "0" + p.toLowerCase());
					case"c":
						y = !1;
					case"d":
						m = !0, h = 0;
						break;
					case"s":
						d = -1, p = "r"
				}
				"$" === s && (g = o[0], v = o[1]), "r" != p || h || (p = "g"), null != h && ("g" == p ? h = Math.max(1, Math.min(21, h)) : ("e" == p || "f" == p) && (h = Math.max(0, Math.min(20, h)))), p = mu.get(p) || Wt;
				var b = c && f;
				return function (t) {
					var n = v;
					if (m && t % 1)return "";
					var o = 0 > t || 0 === t && 0 > 1 / t ? (t = -t, "-") : "-" === u ? "" : u;
					if (0 > d) {
						var s = pa.formatPrefix(t, h);
						t = s.scale(t), n = s.symbol + v
					} else t *= d;
					t = p(t, h);
					var x, w, M = t.lastIndexOf(".");
					if (0 > M) {
						var k = y ? t.lastIndexOf("e") : -1;
						0 > k ? (x = t, w = "") : (x = t.substring(0, k), w = t.substring(k))
					} else x = t.substring(0, M), w = e + t.substring(M + 1);
					!c && f && (x = i(x, 1 / 0));
					var C = g.length + x.length + w.length + (b ? 0 : o.length), S = l > C ? new Array(C = l - C + 1).join(r) : "";
					return b && (x = i(S + x, S.length ? l - w.length : 1 / 0)), o += g, t = x + w, ("<" === a ? o + t + S : ">" === a ? S + o + t : "^" === a ? S.substring(0, C >>= 1) + o + t + S.substring(C) : o + (b ? t : S + t)) + n
				}
			}
		}

		function Wt(t) {
			return t + ""
		}

		function Ut() {
			this._ = new Date(arguments.length > 1 ? Date.UTC.apply(this, arguments) : arguments[0])
		}

		function $t(t, e, n) {
			function r(e) {
				var n = t(e), r = i(n, 1);
				return r - e > e - n ? n : r
			}

			function o(n) {
				return e(n = t(new bu(n - 1)), 1), n
			}

			function i(t, n) {
				return e(t = new bu(+t), n), t
			}

			function a(t, r, i) {
				var a = o(t), u = [];
				if (i > 1)for (; r > a;)n(a) % i || u.push(new Date(+a)), e(a, 1); else for (; r > a;)u.push(new Date(+a)), e(a, 1);
				return u
			}

			function u(t, e, n) {
				try {
					bu = Ut;
					var r = new Ut;
					return r._ = t, a(r, e, n)
				} finally {
					bu = Date
				}
			}

			t.floor = t, t.round = r, t.ceil = o, t.offset = i, t.range = a;
			var s = t.utc = Gt(t);
			return s.floor = s, s.round = Gt(r), s.ceil = Gt(o), s.offset = Gt(i), s.range = u, t
		}

		function Gt(t) {
			return function (e, n) {
				try {
					bu = Ut;
					var r = new Ut;
					return r._ = e, t(r, n)._
				} finally {
					bu = Date
				}
			}
		}

		function Vt(t) {
			function e(t) {
				function e(e) {
					for (var n, o, i, a = [], u = -1, s = 0; ++u < r;)37 === t.charCodeAt(u) && (a.push(t.slice(s, u)), null != (o = wu[n = t.charAt(++u)]) && (n = t.charAt(++u)), (i = T[n]) && (n = i(e, null == o ? "e" === n ? " " : "0" : o)), a.push(n), s = u + 1);
					return a.push(t.slice(s, u)), a.join("")
				}

				var r = t.length;
				return e.parse = function (e) {
					var r = {y: 1900, m: 0, d: 1, H: 0, M: 0, S: 0, L: 0, Z: null}, o = n(r, t, e, 0);
					if (o != e.length)return null;
					"p" in r && (r.H = r.H % 12 + 12 * r.p);
					var i = null != r.Z && bu !== Ut, a = new (i ? Ut : bu);
					return "j" in r ? a.setFullYear(r.y, 0, r.j) : "W" in r || "U" in r ? ("w" in r || (r.w = "W" in r ? 1 : 0), a.setFullYear(r.y, 0, 1), a.setFullYear(r.y, 0, "W" in r ? (r.w + 6) % 7 + 7 * r.W - (a.getDay() + 5) % 7 : r.w + 7 * r.U - (a.getDay() + 6) % 7)) : a.setFullYear(r.y, r.m, r.d), a.setHours(r.H + (r.Z / 100 | 0), r.M + r.Z % 100, r.S, r.L), i ? a._ : a
				}, e.toString = function () {
					return t
				}, e
			}

			function n(t, e, n, r) {
				for (var o, i, a, u = 0, s = e.length, c = n.length; s > u;) {
					if (r >= c)return -1;
					if (o = e.charCodeAt(u++), 37 === o) {
						if (a = e.charAt(u++), i = A[a in wu ? e.charAt(u++) : a], !i || (r = i(t, n, r)) < 0)return -1
					} else if (o != n.charCodeAt(r++))return -1
				}
				return r
			}

			function r(t, e, n) {
				M.lastIndex = 0;
				var r = M.exec(e.slice(n));
				return r ? (t.w = k.get(r[0].toLowerCase()), n + r[0].length) : -1
			}

			function o(t, e, n) {
				x.lastIndex = 0;
				var r = x.exec(e.slice(n));
				return r ? (t.w = w.get(r[0].toLowerCase()), n + r[0].length) : -1
			}

			function i(t, e, n) {
				_.lastIndex = 0;
				var r = _.exec(e.slice(n));
				return r ? (t.m = E.get(r[0].toLowerCase()), n + r[0].length) : -1
			}

			function a(t, e, n) {
				C.lastIndex = 0;
				var r = C.exec(e.slice(n));
				return r ? (t.m = S.get(r[0].toLowerCase()), n + r[0].length) : -1
			}

			function u(t, e, r) {
				return n(t, T.c.toString(), e, r)
			}

			function s(t, e, r) {
				return n(t, T.x.toString(), e, r)
			}

			function c(t, e, r) {
				return n(t, T.X.toString(), e, r)
			}

			function l(t, e, n) {
				var r = b.get(e.slice(n, n += 2).toLowerCase());
				return null == r ? -1 : (t.p = r, n)
			}

			var f = t.dateTime, h = t.date, p = t.time, d = t.periods, g = t.days, v = t.shortDays, m = t.months, y = t.shortMonths;
			e.utc = function (t) {
				function n(t) {
					try {
						bu = Ut;
						var e = new bu;
						return e._ = t, r(e)
					} finally {
						bu = Date
					}
				}

				var r = e(t);
				return n.parse = function (t) {
					try {
						bu = Ut;
						var e = r.parse(t);
						return e && e._
					} finally {
						bu = Date
					}
				}, n.toString = r.toString, n
			}, e.multi = e.utc.multi = pe;
			var b = pa.map(), x = Xt(g), w = Zt(g), M = Xt(v), k = Zt(v), C = Xt(m), S = Zt(m), _ = Xt(y), E = Zt(y);
			d.forEach(function (t, e) {
				b.set(t.toLowerCase(), e)
			});
			var T = {
				a: function (t) {
					return v[t.getDay()]
				}, A: function (t) {
					return g[t.getDay()]
				}, b: function (t) {
					return y[t.getMonth()]
				}, B: function (t) {
					return m[t.getMonth()]
				}, c: e(f), d: function (t, e) {
					return Yt(t.getDate(), e, 2)
				}, e: function (t, e) {
					return Yt(t.getDate(), e, 2)
				}, H: function (t, e) {
					return Yt(t.getHours(), e, 2)
				}, I: function (t, e) {
					return Yt(t.getHours() % 12 || 12, e, 2)
				}, j: function (t, e) {
					return Yt(1 + yu.dayOfYear(t), e, 3)
				}, L: function (t, e) {
					return Yt(t.getMilliseconds(), e, 3)
				}, m: function (t, e) {
					return Yt(t.getMonth() + 1, e, 2)
				}, M: function (t, e) {
					return Yt(t.getMinutes(), e, 2)
				}, p: function (t) {
					return d[+(t.getHours() >= 12)]
				}, S: function (t, e) {
					return Yt(t.getSeconds(), e, 2)
				}, U: function (t, e) {
					return Yt(yu.sundayOfYear(t), e, 2)
				}, w: function (t) {
					return t.getDay()
				}, W: function (t, e) {
					return Yt(yu.mondayOfYear(t), e, 2)
				}, x: e(h), X: e(p), y: function (t, e) {
					return Yt(t.getFullYear() % 100, e, 2)
				}, Y: function (t, e) {
					return Yt(t.getFullYear() % 1e4, e, 4)
				}, Z: fe, "%": function () {
					return "%"
				}
			}, A = {
				a: r,
				A: o,
				b: i,
				B: a,
				c: u,
				d: ie,
				e: ie,
				H: ue,
				I: ue,
				j: ae,
				L: le,
				m: oe,
				M: se,
				p: l,
				S: ce,
				U: Jt,
				w: Kt,
				W: Qt,
				x: s,
				X: c,
				y: ee,
				Y: te,
				Z: ne,
				"%": he
			};
			return e
		}

		function Yt(t, e, n) {
			var r = 0 > t ? "-" : "", o = (r ? -t : t) + "", i = o.length;
			return r + (n > i ? new Array(n - i + 1).join(e) + o : o)
		}

		function Xt(t) {
			return new RegExp("^(?:" + t.map(pa.requote).join("|") + ")", "i")
		}

		function Zt(t) {
			for (var e = new d, n = -1, r = t.length; ++n < r;)e.set(t[n].toLowerCase(), n);
			return e
		}

		function Kt(t, e, n) {
			Mu.lastIndex = 0;
			var r = Mu.exec(e.slice(n, n + 1));
			return r ? (t.w = +r[0], n + r[0].length) : -1
		}

		function Jt(t, e, n) {
			Mu.lastIndex = 0;
			var r = Mu.exec(e.slice(n));
			return r ? (t.U = +r[0], n + r[0].length) : -1
		}

		function Qt(t, e, n) {
			Mu.lastIndex = 0;
			var r = Mu.exec(e.slice(n));
			return r ? (t.W = +r[0], n + r[0].length) : -1
		}

		function te(t, e, n) {
			Mu.lastIndex = 0;
			var r = Mu.exec(e.slice(n, n + 4));
			return r ? (t.y = +r[0], n + r[0].length) : -1
		}

		function ee(t, e, n) {
			Mu.lastIndex = 0;
			var r = Mu.exec(e.slice(n, n + 2));
			return r ? (t.y = re(+r[0]), n + r[0].length) : -1
		}

		function ne(t, e, n) {
			return /^[+-]\d{4}$/.test(e = e.slice(n, n + 5)) ? (t.Z = -e, n + 5) : -1
		}

		function re(t) {
			return t + (t > 68 ? 1900 : 2e3)
		}

		function oe(t, e, n) {
			Mu.lastIndex = 0;
			var r = Mu.exec(e.slice(n, n + 2));
			return r ? (t.m = r[0] - 1, n + r[0].length) : -1
		}

		function ie(t, e, n) {
			Mu.lastIndex = 0;
			var r = Mu.exec(e.slice(n, n + 2));
			return r ? (t.d = +r[0], n + r[0].length) : -1
		}

		function ae(t, e, n) {
			Mu.lastIndex = 0;
			var r = Mu.exec(e.slice(n, n + 3));
			return r ? (t.j = +r[0], n + r[0].length) : -1
		}

		function ue(t, e, n) {
			Mu.lastIndex = 0;
			var r = Mu.exec(e.slice(n, n + 2));
			return r ? (t.H = +r[0], n + r[0].length) : -1
		}

		function se(t, e, n) {
			Mu.lastIndex = 0;
			var r = Mu.exec(e.slice(n, n + 2));
			return r ? (t.M = +r[0], n + r[0].length) : -1
		}

		function ce(t, e, n) {
			Mu.lastIndex = 0;
			var r = Mu.exec(e.slice(n, n + 2));
			return r ? (t.S = +r[0], n + r[0].length) : -1
		}

		function le(t, e, n) {
			Mu.lastIndex = 0;
			var r = Mu.exec(e.slice(n, n + 3));
			return r ? (t.L = +r[0], n + r[0].length) : -1
		}

		function fe(t) {
			var e = t.getTimezoneOffset(), n = e > 0 ? "-" : "+", r = Sa(e) / 60 | 0, o = Sa(e) % 60;
			return n + Yt(r, "0", 2) + Yt(o, "0", 2)
		}

		function he(t, e, n) {
			ku.lastIndex = 0;
			var r = ku.exec(e.slice(n, n + 1));
			return r ? n + r[0].length : -1
		}

		function pe(t) {
			for (var e = t.length, n = -1; ++n < e;)t[n][0] = this(t[n][0]);
			return function (e) {
				for (var n = 0, r = t[n]; !r[1](e);)r = t[++n];
				return r[0](e)
			}
		}

		function de() {
		}

		function ge(t, e, n) {
			var r = n.s = t + e, o = r - t, i = r - o;
			n.t = t - i + (e - o)
		}

		function ve(t, e) {
			t && Eu.hasOwnProperty(t.type) && Eu[t.type](t, e)
		}

		function me(t, e, n) {
			var r, o = -1, i = t.length - n;
			for (e.lineStart(); ++o < i;)r = t[o], e.point(r[0], r[1], r[2]);
			e.lineEnd()
		}

		function ye(t, e) {
			var n = -1, r = t.length;
			for (e.polygonStart(); ++n < r;)me(t[n], e, 1);
			e.polygonEnd()
		}

		function be() {
			function t(t, e) {
				t *= Va, e = e * Va / 2 + Wa / 4;
				var n = t - r, a = n >= 0 ? 1 : -1, u = a * n, s = Math.cos(e), c = Math.sin(e), l = i * c, f = o * s + l * Math.cos(u), h = l * a * Math.sin(u);
				Au.add(Math.atan2(h, f)), r = t, o = s, i = c
			}

			var e, n, r, o, i;
			Ou.point = function (a, u) {
				Ou.point = t, r = (e = a) * Va, o = Math.cos(u = (n = u) * Va / 2 + Wa / 4), i = Math.sin(u)
			}, Ou.lineEnd = function () {
				t(e, n)
			}
		}

		function xe(t) {
			var e = t[0], n = t[1], r = Math.cos(n);
			return [r * Math.cos(e), r * Math.sin(e), Math.sin(n)]
		}

		function we(t, e) {
			return t[0] * e[0] + t[1] * e[1] + t[2] * e[2]
		}

		function Me(t, e) {
			return [t[1] * e[2] - t[2] * e[1], t[2] * e[0] - t[0] * e[2], t[0] * e[1] - t[1] * e[0]]
		}

		function ke(t, e) {
			t[0] += e[0], t[1] += e[1], t[2] += e[2]
		}

		function Ce(t, e) {
			return [t[0] * e, t[1] * e, t[2] * e]
		}

		function Se(t) {
			var e = Math.sqrt(t[0] * t[0] + t[1] * t[1] + t[2] * t[2]);
			t[0] /= e, t[1] /= e, t[2] /= e
		}

		function _e(t) {
			return [Math.atan2(t[1], t[0]), at(t[2])]
		}

		function Ee(t, e) {
			return Sa(t[0] - e[0]) < za && Sa(t[1] - e[1]) < za
		}

		function Te(t, e) {
			t *= Va;
			var n = Math.cos(e *= Va);
			Ae(n * Math.cos(t), n * Math.sin(t), Math.sin(e))
		}

		function Ae(t, e, n) {
			++Nu, Pu += (t - Pu) / Nu, Du += (e - Du) / Nu, Ru += (n - Ru) / Nu
		}

		function Oe() {
			function t(t, o) {
				t *= Va;
				var i = Math.cos(o *= Va), a = i * Math.cos(t), u = i * Math.sin(t), s = Math.sin(o), c = Math.atan2(Math.sqrt((c = n * s - r * u) * c + (c = r * a - e * s) * c + (c = e * u - n * a) * c), e * a + n * u + r * s);
				ju += c, Fu += c * (e + (e = a)), Lu += c * (n + (n = u)), Iu += c * (r + (r = s)), Ae(e, n, r)
			}

			var e, n, r;
			Hu.point = function (o, i) {
				o *= Va;
				var a = Math.cos(i *= Va);
				e = a * Math.cos(o), n = a * Math.sin(o), r = Math.sin(i), Hu.point = t, Ae(e, n, r)
			}
		}

		function Ne() {
			Hu.point = Te
		}

		function je() {
			function t(t, e) {
				t *= Va;
				var n = Math.cos(e *= Va), a = n * Math.cos(t), u = n * Math.sin(t), s = Math.sin(e), c = o * s - i * u, l = i * a - r * s, f = r * u - o * a, h = Math.sqrt(c * c + l * l + f * f), p = r * a + o * u + i * s, d = h && -it(p) / h, g = Math.atan2(h, p);
				qu += d * c, Bu += d * l, zu += d * f, ju += g, Fu += g * (r + (r = a)), Lu += g * (o + (o = u)), Iu += g * (i + (i = s)), Ae(r, o, i)
			}

			var e, n, r, o, i;
			Hu.point = function (a, u) {
				e = a, n = u, Hu.point = t, a *= Va;
				var s = Math.cos(u *= Va);
				r = s * Math.cos(a), o = s * Math.sin(a), i = Math.sin(u), Ae(r, o, i)
			}, Hu.lineEnd = function () {
				t(e, n), Hu.lineEnd = Ne, Hu.point = Te
			}
		}

		function Pe(t, e) {
			function n(n, r) {
				return n = t(n, r), e(n[0], n[1])
			}

			return t.invert && e.invert && (n.invert = function (n, r) {
				return n = e.invert(n, r), n && t.invert(n[0], n[1])
			}), n
		}

		function De() {
			return !0
		}

		function Re(t, e, n, r, o) {
			var i = [], a = [];
			if (t.forEach(function (t) {
						if (!((e = t.length - 1) <= 0)) {
							var e, n = t[0], r = t[e];
							if (Ee(n, r)) {
								o.lineStart();
								for (var u = 0; e > u; ++u)o.point((n = t[u])[0], n[1]);
								return void o.lineEnd()
							}
							var s = new Le(n, t, null, !0), c = new Le(n, null, s, !1);
							s.o = c, i.push(s), a.push(c), s = new Le(r, t, null, !1), c = new Le(r, null, s, !0), s.o = c, i.push(s), a.push(c)
						}
					}), a.sort(e), Fe(i), Fe(a), i.length) {
				for (var u = 0, s = n, c = a.length; c > u; ++u)a[u].e = s = !s;
				for (var l, f, h = i[0]; ;) {
					for (var p = h, d = !0; p.v;)if ((p = p.n) === h)return;
					l = p.z, o.lineStart();
					do {
						if (p.v = p.o.v = !0, p.e) {
							if (d)for (var u = 0, c = l.length; c > u; ++u)o.point((f = l[u])[0], f[1]); else r(p.x, p.n.x, 1, o);
							p = p.n
						} else {
							if (d) {
								l = p.p.z;
								for (var u = l.length - 1; u >= 0; --u)o.point((f = l[u])[0], f[1])
							} else r(p.x, p.p.x, -1, o);
							p = p.p
						}
						p = p.o, l = p.z, d = !d
					} while (!p.v);
					o.lineEnd()
				}
			}
		}

		function Fe(t) {
			if (e = t.length) {
				for (var e, n, r = 0, o = t[0]; ++r < e;)o.n = n = t[r], n.p = o, o = n;
				o.n = n = t[0], n.p = o
			}
		}

		function Le(t, e, n, r) {
			this.x = t, this.z = e, this.o = n, this.e = r, this.v = !1, this.n = this.p = null
		}

		function Ie(t, e, n, r) {
			return function (o, i) {
				function a(e, n) {
					var r = o(e, n);
					t(e = r[0], n = r[1]) && i.point(e, n)
				}

				function u(t, e) {
					var n = o(t, e);
					v.point(n[0], n[1])
				}

				function s() {
					y.point = u, v.lineStart()
				}

				function c() {
					y.point = a, v.lineEnd()
				}

				function l(t, e) {
					g.push([t, e]);
					var n = o(t, e);
					x.point(n[0], n[1])
				}

				function f() {
					x.lineStart(), g = []
				}

				function h() {
					l(g[0][0], g[0][1]), x.lineEnd();
					var t, e = x.clean(), n = b.buffer(), r = n.length;
					if (g.pop(), d.push(g), g = null, r)if (1 & e) {
						t = n[0];
						var o, r = t.length - 1, a = -1;
						if (r > 0) {
							for (w || (i.polygonStart(), w = !0), i.lineStart(); ++a < r;)i.point((o = t[a])[0], o[1]);
							i.lineEnd()
						}
					} else r > 1 && 2 & e && n.push(n.pop().concat(n.shift())), p.push(n.filter(qe))
				}

				var p, d, g, v = e(i), m = o.invert(r[0], r[1]), y = {
					point: a,
					lineStart: s,
					lineEnd: c,
					polygonStart: function () {
						y.point = l, y.lineStart = f, y.lineEnd = h, p = [], d = []
					},
					polygonEnd: function () {
						y.point = a, y.lineStart = s, y.lineEnd = c, p = pa.merge(p);
						var t = $e(m, d);
						p.length ? (w || (i.polygonStart(), w = !0), Re(p, ze, t, n, i)) : t && (w || (i.polygonStart(), w = !0), i.lineStart(), n(null, null, 1, i), i.lineEnd()), w && (i.polygonEnd(), w = !1), p = d = null
					},
					sphere: function () {
						i.polygonStart(), i.lineStart(), n(null, null, 1, i), i.lineEnd(), i.polygonEnd()
					}
				}, b = Be(), x = e(b), w = !1;
				return y
			}
		}

		function qe(t) {
			return t.length > 1
		}

		function Be() {
			var t, e = [];
			return {
				lineStart: function () {
					e.push(t = [])
				}, point: function (e, n) {
					t.push([e, n])
				}, lineEnd: _, buffer: function () {
					var n = e;
					return e = [], t = null, n
				}, rejoin: function () {
					e.length > 1 && e.push(e.pop().concat(e.shift()))
				}
			}
		}

		function ze(t, e) {
			return ((t = t.x)[0] < 0 ? t[1] - Ga - za : Ga - t[1]) - ((e = e.x)[0] < 0 ? e[1] - Ga - za : Ga - e[1])
		}

		function He(t) {
			var e, n = NaN, r = NaN, o = NaN;
			return {
				lineStart: function () {
					t.lineStart(), e = 1
				}, point: function (i, a) {
					var u = i > 0 ? Wa : -Wa, s = Sa(i - n);
					Sa(s - Wa) < za ? (t.point(n, r = (r + a) / 2 > 0 ? Ga : -Ga), t.point(o, r), t.lineEnd(), t.lineStart(), t.point(u, r), t.point(i, r), e = 0) : o !== u && s >= Wa && (Sa(n - o) < za && (n -= o * za), Sa(i - u) < za && (i -= u * za), r = We(n, r, i, a), t.point(o, r), t.lineEnd(), t.lineStart(), t.point(u, r), e = 0), t.point(n = i, r = a), o = u
				}, lineEnd: function () {
					t.lineEnd(), n = r = NaN
				}, clean: function () {
					return 2 - e
				}
			}
		}

		function We(t, e, n, r) {
			var o, i, a = Math.sin(t - n);
			return Sa(a) > za ? Math.atan((Math.sin(e) * (i = Math.cos(r)) * Math.sin(n) - Math.sin(r) * (o = Math.cos(e)) * Math.sin(t)) / (o * i * a)) : (e + r) / 2
		}

		function Ue(t, e, n, r) {
			var o;
			if (null == t)o = n * Ga, r.point(-Wa, o), r.point(0, o), r.point(Wa, o), r.point(Wa, 0), r.point(Wa, -o), r.point(0, -o), r.point(-Wa, -o), r.point(-Wa, 0), r.point(-Wa, o); else if (Sa(t[0] - e[0]) > za) {
				var i = t[0] < e[0] ? Wa : -Wa;
				o = n * i / 2, r.point(-i, o), r.point(0, o), r.point(i, o)
			} else r.point(e[0], e[1])
		}

		function $e(t, e) {
			var n = t[0], r = t[1], o = [Math.sin(n), -Math.cos(n), 0], i = 0, a = 0;
			Au.reset();
			for (var u = 0, s = e.length; s > u; ++u) {
				var c = e[u], l = c.length;
				if (l)for (var f = c[0], h = f[0], p = f[1] / 2 + Wa / 4, d = Math.sin(p), g = Math.cos(p), v = 1; ;) {
					v === l && (v = 0), t = c[v];
					var m = t[0], y = t[1] / 2 + Wa / 4, b = Math.sin(y), x = Math.cos(y), w = m - h, M = w >= 0 ? 1 : -1, k = M * w, C = k > Wa, S = d * b;
					if (Au.add(Math.atan2(S * M * Math.sin(k), g * x + S * Math.cos(k))), i += C ? w + M * Ua : w, C ^ h >= n ^ m >= n) {
						var _ = Me(xe(f), xe(t));
						Se(_);
						var E = Me(o, _);
						Se(E);
						var T = (C ^ w >= 0 ? -1 : 1) * at(E[2]);
						(r > T || r === T && (_[0] || _[1])) && (a += C ^ w >= 0 ? 1 : -1)
					}
					if (!v++)break;
					h = m, d = b, g = x, f = t
				}
			}
			return (-za > i || za > i && 0 > Au) ^ 1 & a
		}

		function Ge(t) {
			function e(t, e) {
				return Math.cos(t) * Math.cos(e) > i
			}

			function n(t) {
				var n, i, s, c, l;
				return {
					lineStart: function () {
						c = s = !1, l = 1
					}, point: function (f, h) {
						var p, d = [f, h], g = e(f, h), v = a ? g ? 0 : o(f, h) : g ? o(f + (0 > f ? Wa : -Wa), h) : 0;
						if (!n && (c = s = g) && t.lineStart(), g !== s && (p = r(n, d), (Ee(n, p) || Ee(d, p)) && (d[0] += za, d[1] += za, g = e(d[0], d[1]))), g !== s)l = 0, g ? (t.lineStart(), p = r(d, n), t.point(p[0], p[1])) : (p = r(n, d), t.point(p[0], p[1]), t.lineEnd()), n = p; else if (u && n && a ^ g) {
							var m;
							v & i || !(m = r(d, n, !0)) || (l = 0, a ? (t.lineStart(), t.point(m[0][0], m[0][1]), t.point(m[1][0], m[1][1]), t.lineEnd()) : (t.point(m[1][0], m[1][1]), t.lineEnd(), t.lineStart(), t.point(m[0][0], m[0][1])))
						}
						!g || n && Ee(n, d) || t.point(d[0], d[1]), n = d, s = g, i = v
					}, lineEnd: function () {
						s && t.lineEnd(), n = null
					}, clean: function () {
						return l | (c && s) << 1
					}
				}
			}

			function r(t, e, n) {
				var r = xe(t), o = xe(e), a = [1, 0, 0], u = Me(r, o), s = we(u, u), c = u[0], l = s - c * c;
				if (!l)return !n && t;
				var f = i * s / l, h = -i * c / l, p = Me(a, u), d = Ce(a, f), g = Ce(u, h);
				ke(d, g);
				var v = p, m = we(d, v), y = we(v, v), b = m * m - y * (we(d, d) - 1);
				if (!(0 > b)) {
					var x = Math.sqrt(b), w = Ce(v, (-m - x) / y);
					if (ke(w, d), w = _e(w), !n)return w;
					var M, k = t[0], C = e[0], S = t[1], _ = e[1];
					k > C && (M = k, k = C, C = M);
					var E = C - k, T = Sa(E - Wa) < za, A = T || za > E;
					if (!T && S > _ && (M = S, S = _, _ = M), A ? T ? S + _ > 0 ^ w[1] < (Sa(w[0] - k) < za ? S : _) : S <= w[1] && w[1] <= _ : E > Wa ^ (k <= w[0] && w[0] <= C)) {
						var O = Ce(v, (-m + x) / y);
						return ke(O, d), [w, _e(O)]
					}
				}
			}

			function o(e, n) {
				var r = a ? t : Wa - t, o = 0;
				return -r > e ? o |= 1 : e > r && (o |= 2), -r > n ? o |= 4 : n > r && (o |= 8), o
			}

			var i = Math.cos(t), a = i > 0, u = Sa(i) > za, s = xn(t, 6 * Va);
			return Ie(e, n, s, a ? [0, -t] : [-Wa, t - Wa])
		}

		function Ve(t, e, n, r) {
			return function (o) {
				var i, a = o.a, u = o.b, s = a.x, c = a.y, l = u.x, f = u.y, h = 0, p = 1, d = l - s, g = f - c;
				if (i = t - s, d || !(i > 0)) {
					if (i /= d, 0 > d) {
						if (h > i)return;
						p > i && (p = i)
					} else if (d > 0) {
						if (i > p)return;
						i > h && (h = i)
					}
					if (i = n - s, d || !(0 > i)) {
						if (i /= d, 0 > d) {
							if (i > p)return;
							i > h && (h = i)
						} else if (d > 0) {
							if (h > i)return;
							p > i && (p = i)
						}
						if (i = e - c, g || !(i > 0)) {
							if (i /= g, 0 > g) {
								if (h > i)return;
								p > i && (p = i)
							} else if (g > 0) {
								if (i > p)return;
								i > h && (h = i)
							}
							if (i = r - c, g || !(0 > i)) {
								if (i /= g, 0 > g) {
									if (i > p)return;
									i > h && (h = i)
								} else if (g > 0) {
									if (h > i)return;
									p > i && (p = i)
								}
								return h > 0 && (o.a = {x: s + h * d, y: c + h * g}), 1 > p && (o.b = {
									x: s + p * d,
									y: c + p * g
								}), o
							}
						}
					}
				}
			}
		}

		function Ye(t, e, n, r) {
			function o(r, o) {
				return Sa(r[0] - t) < za ? o > 0 ? 0 : 3 : Sa(r[0] - n) < za ? o > 0 ? 2 : 1 : Sa(r[1] - e) < za ? o > 0 ? 1 : 0 : o > 0 ? 3 : 2
			}

			function i(t, e) {
				return a(t.x, e.x)
			}

			function a(t, e) {
				var n = o(t, 1), r = o(e, 1);
				return n !== r ? n - r : 0 === n ? e[1] - t[1] : 1 === n ? t[0] - e[0] : 2 === n ? t[1] - e[1] : e[0] - t[0]
			}

			return function (u) {
				function s(t) {
					for (var e = 0, n = v.length, r = t[1], o = 0; n > o; ++o)for (var i, a = 1, u = v[o], s = u.length, c = u[0]; s > a; ++a)i = u[a], c[1] <= r ? i[1] > r && ot(c, i, t) > 0 && ++e : i[1] <= r && ot(c, i, t) < 0 && --e, c = i;
					return 0 !== e
				}

				function c(i, u, s, c) {
					var l = 0, f = 0;
					if (null == i || (l = o(i, s)) !== (f = o(u, s)) || a(i, u) < 0 ^ s > 0) {
						do c.point(0 === l || 3 === l ? t : n, l > 1 ? r : e); while ((l = (l + s + 4) % 4) !== f)
					} else c.point(u[0], u[1])
				}

				function l(o, i) {
					return o >= t && n >= o && i >= e && r >= i
				}

				function f(t, e) {
					l(t, e) && u.point(t, e)
				}

				function h() {
					A.point = d, v && v.push(m = []), C = !0, k = !1, w = M = NaN
				}

				function p() {
					g && (d(y, b), x && k && E.rejoin(), g.push(E.buffer())), A.point = f, k && u.lineEnd()
				}

				function d(t, e) {
					t = Math.max(-Uu, Math.min(Uu, t)), e = Math.max(-Uu, Math.min(Uu, e));
					var n = l(t, e);
					if (v && m.push([t, e]),
C)y=t,b=e,x=n,C=!1,n&&(u.lineStart(),u.point(t,e));else if(n&&k)u.point(t,e);else{var r={a:{x:w,y:M},b:{x:t,y:e}};T(r)?(k||(u.lineStart(),u.point(r.a.x,r.a.y)),u.point(r.b.x,r.b.y),n||u.lineEnd(),S=!1):n&&(u.lineStart(),u.point(t,e),S=!1)}w=t,M=e,k=n}var g,v,m,y,b,x,w,M,k,C,S,_=u,E=Be(),T=Ve(t,e,n,r),A={point:f,lineStart:h,lineEnd:p,polygonStart:function(){u=E,g=[],v=[],S=!0},polygonEnd:function(){u=_,g=pa.merge(g);var e=s([t,r]),n=S&&e,o=g.length;(n||o)&&(u.polygonStart(),n&&(u.lineStart(),c(null,null,1,u),u.lineEnd()),o&&Re(g,i,e,c,u),u.polygonEnd()),g=v=m=null}};return A}}function Xe(t){var e=0,n=Wa/3,r=hn(t),o=r(e,n);return o.parallels=function(t){return arguments.length?r(e=t[0]*Wa/180,n=t[1]*Wa/180):[e/Wa*180,n/Wa*180]},o}function Ze(t,e){function n(t,e){var n=Math.sqrt(i-2*o*Math.sin(e))/o;return[n*Math.sin(t*=o),a-n*Math.cos(t)]}var r=Math.sin(t),o=(r+Math.sin(e))/2,i=1+r*(2*o-r),a=Math.sqrt(i)/o;return n.invert=function(t,e){var n=a-e;return[Math.atan2(t,n)/o,at((i-(t*t+n*n)*o*o)/(2*o))]},n}function Ke(){function t(t,e){Gu+=o*t-r*e,r=t,o=e}var e,n,r,o;Ku.point=function(i,a){Ku.point=t,e=r=i,n=o=a},Ku.lineEnd=function(){t(e,n)}}function Je(t,e){Vu>t&&(Vu=t),t>Xu&&(Xu=t),Yu>e&&(Yu=e),e>Zu&&(Zu=e)}function Qe(){function t(t,e){a.push("M",t,",",e,i)}function e(t,e){a.push("M",t,",",e),u.point=n}function n(t,e){a.push("L",t,",",e)}function r(){u.point=t}function o(){a.push("Z")}var i=tn(4.5),a=[],u={point:t,lineStart:function(){u.point=e},lineEnd:r,polygonStart:function(){u.lineEnd=o},polygonEnd:function(){u.lineEnd=r,u.point=t},pointRadius:function(t){return i=tn(t),u},result:function(){if(a.length){var t=a.join("");return a=[],t}}};return u}function tn(t){return"m0,"+t+"a"+t+","+t+" 0 1,1 0,"+-2*t+"a"+t+","+t+" 0 1,1 0,"+2*t+"z"}function en(t,e){Pu+=t,Du+=e,++Ru}function nn(){function t(t,r){var o=t-e,i=r-n,a=Math.sqrt(o*o+i*i);Fu+=a*(e+t)/2,Lu+=a*(n+r)/2,Iu+=a,en(e=t,n=r)}var e,n;Qu.point=function(r,o){Qu.point=t,en(e=r,n=o)}}function rn(){Qu.point=en}function on(){function t(t,e){var n=t-r,i=e-o,a=Math.sqrt(n*n+i*i);Fu+=a*(r+t)/2,Lu+=a*(o+e)/2,Iu+=a,a=o*t-r*e,qu+=a*(r+t),Bu+=a*(o+e),zu+=3*a,en(r=t,o=e)}var e,n,r,o;Qu.point=function(i,a){Qu.point=t,en(e=r=i,n=o=a)},Qu.lineEnd=function(){t(e,n)}}function an(t){function e(e,n){t.moveTo(e+a,n),t.arc(e,n,a,0,Ua)}function n(e,n){t.moveTo(e,n),u.point=r}function r(e,n){t.lineTo(e,n)}function o(){u.point=e}function i(){t.closePath()}var a=4.5,u={point:e,lineStart:function(){u.point=n},lineEnd:o,polygonStart:function(){u.lineEnd=i},polygonEnd:function(){u.lineEnd=o,u.point=e},pointRadius:function(t){return a=t,u},result:_};return u}function un(t){function e(t){return(u?r:n)(t)}function n(e){return ln(e,function(n,r){n=t(n,r),e.point(n[0],n[1])})}function r(e){function n(n,r){n=t(n,r),e.point(n[0],n[1])}function r(){b=NaN,C.point=i,e.lineStart()}function i(n,r){var i=xe([n,r]),a=t(n,r);o(b,x,y,w,M,k,b=a[0],x=a[1],y=n,w=i[0],M=i[1],k=i[2],u,e),e.point(b,x)}function a(){C.point=n,e.lineEnd()}function s(){r(),C.point=c,C.lineEnd=l}function c(t,e){i(f=t,h=e),p=b,d=x,g=w,v=M,m=k,C.point=i}function l(){o(b,x,y,w,M,k,p,d,f,g,v,m,u,e),C.lineEnd=a,a()}var f,h,p,d,g,v,m,y,b,x,w,M,k,C={point:n,lineStart:r,lineEnd:a,polygonStart:function(){e.polygonStart(),C.lineStart=s},polygonEnd:function(){e.polygonEnd(),C.lineStart=r}};return C}function o(e,n,r,u,s,c,l,f,h,p,d,g,v,m){var y=l-e,b=f-n,x=y*y+b*b;if(x>4*i&&v--){var w=u+p,M=s+d,k=c+g,C=Math.sqrt(w*w+M*M+k*k),S=Math.asin(k/=C),_=Sa(Sa(k)-1)<za||Sa(r-h)<za?(r+h)/2:Math.atan2(M,w),E=t(_,S),T=E[0],A=E[1],O=T-e,N=A-n,j=b*O-y*N;(j*j/x>i||Sa((y*O+b*N)/x-.5)>.3||a>u*p+s*d+c*g)&&(o(e,n,r,u,s,c,T,A,_,w/=C,M/=C,k,v,m),m.point(T,A),o(T,A,_,w,M,k,l,f,h,p,d,g,v,m))}}var i=.5,a=Math.cos(30*Va),u=16;return e.precision=function(t){return arguments.length?(u=(i=t*t)>0&&16,e):Math.sqrt(i)},e}function sn(t){var e=un(function(e,n){return t([e*Ya,n*Ya])});return function(t){return pn(e(t))}}function cn(t){this.stream=t}function ln(t,e){return{point:e,sphere:function(){t.sphere()},lineStart:function(){t.lineStart()},lineEnd:function(){t.lineEnd()},polygonStart:function(){t.polygonStart()},polygonEnd:function(){t.polygonEnd()}}}function fn(t){return hn(function(){return t})()}function hn(t){function e(t){return t=u(t[0]*Va,t[1]*Va),[t[0]*h+s,c-t[1]*h]}function n(t){return t=u.invert((t[0]-s)/h,(c-t[1])/h),t&&[t[0]*Ya,t[1]*Ya]}function r(){u=Pe(a=vn(m,y,b),i);var t=i(g,v);return s=p-t[0]*h,c=d+t[1]*h,o()}function o(){return l&&(l.valid=!1,l=null),e}var i,a,u,s,c,l,f=un(function(t,e){return t=i(t,e),[t[0]*h+s,c-t[1]*h]}),h=150,p=480,d=250,g=0,v=0,m=0,y=0,b=0,x=Wu,w=k,M=null,C=null;return e.stream=function(t){return l&&(l.valid=!1),l=pn(x(a,f(w(t)))),l.valid=!0,l},e.clipAngle=function(t){return arguments.length?(x=null==t?(M=t,Wu):Ge((M=+t)*Va),o()):M},e.clipExtent=function(t){return arguments.length?(C=t,w=t?Ye(t[0][0],t[0][1],t[1][0],t[1][1]):k,o()):C},e.scale=function(t){return arguments.length?(h=+t,r()):h},e.translate=function(t){return arguments.length?(p=+t[0],d=+t[1],r()):[p,d]},e.center=function(t){return arguments.length?(g=t[0]%360*Va,v=t[1]%360*Va,r()):[g*Ya,v*Ya]},e.rotate=function(t){return arguments.length?(m=t[0]%360*Va,y=t[1]%360*Va,b=t.length>2?t[2]%360*Va:0,r()):[m*Ya,y*Ya,b*Ya]},pa.rebind(e,f,"precision"),function(){return i=t.apply(this,arguments),e.invert=i.invert&&n,r()}}function pn(t){return ln(t,function(e,n){t.point(e*Va,n*Va)})}function dn(t,e){return[t,e]}function gn(t,e){return[t>Wa?t-Ua:-Wa>t?t+Ua:t,e]}function vn(t,e,n){return t?e||n?Pe(yn(t),bn(e,n)):yn(t):e||n?bn(e,n):gn}function mn(t){return function(e,n){return e+=t,[e>Wa?e-Ua:-Wa>e?e+Ua:e,n]}}function yn(t){var e=mn(t);return e.invert=mn(-t),e}function bn(t,e){function n(t,e){var n=Math.cos(e),u=Math.cos(t)*n,s=Math.sin(t)*n,c=Math.sin(e),l=c*r+u*o;return[Math.atan2(s*i-l*a,u*r-c*o),at(l*i+s*a)]}var r=Math.cos(t),o=Math.sin(t),i=Math.cos(e),a=Math.sin(e);return n.invert=function(t,e){var n=Math.cos(e),u=Math.cos(t)*n,s=Math.sin(t)*n,c=Math.sin(e),l=c*i-s*a;return[Math.atan2(s*i+c*a,u*r+l*o),at(l*r-u*o)]},n}function xn(t,e){var n=Math.cos(t),r=Math.sin(t);return function(o,i,a,u){var s=a*e;null!=o?(o=wn(n,o),i=wn(n,i),(a>0?i>o:o>i)&&(o+=a*Ua)):(o=t+a*Ua,i=t-.5*s);for(var c,l=o;a>0?l>i:i>l;l-=s)u.point((c=_e([n,-r*Math.cos(l),-r*Math.sin(l)]))[0],c[1])}}function wn(t,e){var n=xe(e);n[0]-=t,Se(n);var r=it(-n[1]);return((-n[2]<0?-r:r)+2*Math.PI-za)%(2*Math.PI)}function Mn(t,e,n){var r=pa.range(t,e-za,n).concat(e);return function(t){return r.map(function(e){return[t,e]})}}function kn(t,e,n){var r=pa.range(t,e-za,n).concat(e);return function(t){return r.map(function(e){return[e,t]})}}function Cn(t){return t.source}function Sn(t){return t.target}function _n(t,e,n,r){var o=Math.cos(e),i=Math.sin(e),a=Math.cos(r),u=Math.sin(r),s=o*Math.cos(t),c=o*Math.sin(t),l=a*Math.cos(n),f=a*Math.sin(n),h=2*Math.asin(Math.sqrt(lt(r-e)+o*a*lt(n-t))),p=1/Math.sin(h),d=h?function(t){var e=Math.sin(t*=h)*p,n=Math.sin(h-t)*p,r=n*s+e*l,o=n*c+e*f,a=n*i+e*u;return[Math.atan2(o,r)*Ya,Math.atan2(a,Math.sqrt(r*r+o*o))*Ya]}:function(){return[t*Ya,e*Ya]};return d.distance=h,d}function En(){function t(t,o){var i=Math.sin(o*=Va),a=Math.cos(o),u=Sa((t*=Va)-e),s=Math.cos(u);ts+=Math.atan2(Math.sqrt((u=a*Math.sin(u))*u+(u=r*i-n*a*s)*u),n*i+r*a*s),e=t,n=i,r=a}var e,n,r;es.point=function(o,i){e=o*Va,n=Math.sin(i*=Va),r=Math.cos(i),es.point=t},es.lineEnd=function(){es.point=es.lineEnd=_}}function Tn(t,e){function n(e,n){var r=Math.cos(e),o=Math.cos(n),i=t(r*o);return[i*o*Math.sin(e),i*Math.sin(n)]}return n.invert=function(t,n){var r=Math.sqrt(t*t+n*n),o=e(r),i=Math.sin(o),a=Math.cos(o);return[Math.atan2(t*i,r*a),Math.asin(r&&n*i/r)]},n}function An(t,e){function n(t,e){a>0?-Ga+za>e&&(e=-Ga+za):e>Ga-za&&(e=Ga-za);var n=a/Math.pow(o(e),i);return[n*Math.sin(i*t),a-n*Math.cos(i*t)]}var r=Math.cos(t),o=function(t){return Math.tan(Wa/4+t/2)},i=t===e?Math.sin(t):Math.log(r/Math.cos(e))/Math.log(o(e)/o(t)),a=r*Math.pow(o(t),i)/i;return i?(n.invert=function(t,e){var n=a-e,r=rt(i)*Math.sqrt(t*t+n*n);return[Math.atan2(t,n)/i,2*Math.atan(Math.pow(a/r,1/i))-Ga]},n):Nn}function On(t,e){function n(t,e){var n=i-e;return[n*Math.sin(o*t),i-n*Math.cos(o*t)]}var r=Math.cos(t),o=t===e?Math.sin(t):(r-Math.cos(e))/(e-t),i=r/o+t;return Sa(o)<za?dn:(n.invert=function(t,e){var n=i-e;return[Math.atan2(t,n)/o,i-rt(o)*Math.sqrt(t*t+n*n)]},n)}function Nn(t,e){return[t,Math.log(Math.tan(Wa/4+e/2))]}function jn(t){var e,n=fn(t),r=n.scale,o=n.translate,i=n.clipExtent;return n.scale=function(){var t=r.apply(n,arguments);return t===n?e?n.clipExtent(null):n:t},n.translate=function(){var t=o.apply(n,arguments);return t===n?e?n.clipExtent(null):n:t},n.clipExtent=function(t){var a=i.apply(n,arguments);if(a===n){if(e=null==t){var u=Wa*r(),s=o();i([[s[0]-u,s[1]-u],[s[0]+u,s[1]+u]])}}else e&&(a=null);return a},n.clipExtent(null)}function Pn(t,e){return[Math.log(Math.tan(Wa/4+e/2)),-t]}function Dn(t){return t[0]}function Rn(t){return t[1]}function Fn(t){for(var e=t.length,n=[0,1],r=2,o=2;e>o;o++){for(;r>1&&ot(t[n[r-2]],t[n[r-1]],t[o])<=0;)--r;n[r++]=o}return n.slice(0,r)}function Ln(t,e){return t[0]-e[0]||t[1]-e[1]}function In(t,e,n){return(n[0]-e[0])*(t[1]-e[1])<(n[1]-e[1])*(t[0]-e[0])}function qn(t,e,n,r){var o=t[0],i=n[0],a=e[0]-o,u=r[0]-i,s=t[1],c=n[1],l=e[1]-s,f=r[1]-c,h=(u*(s-c)-f*(o-i))/(f*a-u*l);return[o+h*a,s+h*l]}function Bn(t){var e=t[0],n=t[t.length-1];return!(e[0]-n[0]||e[1]-n[1])}function zn(){sr(this),this.edge=this.site=this.circle=null}function Hn(t){var e=ps.pop()||new zn;return e.site=t,e}function Wn(t){Qn(t),ls.remove(t),ps.push(t),sr(t)}function Un(t){var e=t.circle,n=e.x,r=e.cy,o={x:n,y:r},i=t.P,a=t.N,u=[t];Wn(t);for(var s=i;s.circle&&Sa(n-s.circle.x)<za&&Sa(r-s.circle.cy)<za;)i=s.P,u.unshift(s),Wn(s),s=i;u.unshift(s),Qn(s);for(var c=a;c.circle&&Sa(n-c.circle.x)<za&&Sa(r-c.circle.cy)<za;)a=c.N,u.push(c),Wn(c),c=a;u.push(c),Qn(c);var l,f=u.length;for(l=1;f>l;++l)c=u[l],s=u[l-1],ir(c.edge,s.site,c.site,o);s=u[0],c=u[f-1],c.edge=rr(s.site,c.site,null,o),Jn(s),Jn(c)}function $n(t){for(var e,n,r,o,i=t.x,a=t.y,u=ls._;u;)if(r=Gn(u,a)-i,r>za)u=u.L;else{if(o=i-Vn(u,a),!(o>za)){r>-za?(e=u.P,n=u):o>-za?(e=u,n=u.N):e=n=u;break}if(!u.R){e=u;break}u=u.R}var s=Hn(t);if(ls.insert(e,s),e||n){if(e===n)return Qn(e),n=Hn(e.site),ls.insert(s,n),s.edge=n.edge=rr(e.site,s.site),Jn(e),void Jn(n);if(!n)return void(s.edge=rr(e.site,s.site));Qn(e),Qn(n);var c=e.site,l=c.x,f=c.y,h=t.x-l,p=t.y-f,d=n.site,g=d.x-l,v=d.y-f,m=2*(h*v-p*g),y=h*h+p*p,b=g*g+v*v,x={x:(v*y-p*b)/m+l,y:(h*b-g*y)/m+f};ir(n.edge,c,d,x),s.edge=rr(c,t,null,x),n.edge=rr(t,d,null,x),Jn(e),Jn(n)}}function Gn(t,e){var n=t.site,r=n.x,o=n.y,i=o-e;if(!i)return r;var a=t.P;if(!a)return-(1/0);n=a.site;var u=n.x,s=n.y,c=s-e;if(!c)return u;var l=u-r,f=1/i-1/c,h=l/c;return f?(-h+Math.sqrt(h*h-2*f*(l*l/(-2*c)-s+c/2+o-i/2)))/f+r:(r+u)/2}function Vn(t,e){var n=t.N;if(n)return Gn(n,e);var r=t.site;return r.y===e?r.x:1/0}function Yn(t){this.site=t,this.edges=[]}function Xn(t){for(var e,n,r,o,i,a,u,s,c,l,f=t[0][0],h=t[1][0],p=t[0][1],d=t[1][1],g=cs,v=g.length;v--;)if(i=g[v],i&&i.prepare())for(u=i.edges,s=u.length,a=0;s>a;)l=u[a].end(),r=l.x,o=l.y,c=u[++a%s].start(),e=c.x,n=c.y,(Sa(r-e)>za||Sa(o-n)>za)&&(u.splice(a,0,new ar(or(i.site,l,Sa(r-f)<za&&d-o>za?{x:f,y:Sa(e-f)<za?n:d}:Sa(o-d)<za&&h-r>za?{x:Sa(n-d)<za?e:h,y:d}:Sa(r-h)<za&&o-p>za?{x:h,y:Sa(e-h)<za?n:p}:Sa(o-p)<za&&r-f>za?{x:Sa(n-p)<za?e:f,y:p}:null),i.site,null)),++s)}function Zn(t,e){return e.angle-t.angle}function Kn(){sr(this),this.x=this.y=this.arc=this.site=this.cy=null}function Jn(t){var e=t.P,n=t.N;if(e&&n){var r=e.site,o=t.site,i=n.site;if(r!==i){var a=o.x,u=o.y,s=r.x-a,c=r.y-u,l=i.x-a,f=i.y-u,h=2*(s*f-c*l);if(!(h>=-Ha)){var p=s*s+c*c,d=l*l+f*f,g=(f*p-c*d)/h,v=(s*d-l*p)/h,f=v+u,m=ds.pop()||new Kn;m.arc=t,m.site=o,m.x=g+a,m.y=f+Math.sqrt(g*g+v*v),m.cy=f,t.circle=m;for(var y=null,b=hs._;b;)if(m.y<b.y||m.y===b.y&&m.x<=b.x){if(!b.L){y=b.P;break}b=b.L}else{if(!b.R){y=b;break}b=b.R}hs.insert(y,m),y||(fs=m)}}}}function Qn(t){var e=t.circle;e&&(e.P||(fs=e.N),hs.remove(e),ds.push(e),sr(e),t.circle=null)}function tr(t){for(var e,n=ss,r=Ve(t[0][0],t[0][1],t[1][0],t[1][1]),o=n.length;o--;)e=n[o],(!er(e,t)||!r(e)||Sa(e.a.x-e.b.x)<za&&Sa(e.a.y-e.b.y)<za)&&(e.a=e.b=null,n.splice(o,1))}function er(t,e){var n=t.b;if(n)return!0;var r,o,i=t.a,a=e[0][0],u=e[1][0],s=e[0][1],c=e[1][1],l=t.l,f=t.r,h=l.x,p=l.y,d=f.x,g=f.y,v=(h+d)/2,m=(p+g)/2;if(g===p){if(a>v||v>=u)return;if(h>d){if(i){if(i.y>=c)return}else i={x:v,y:s};n={x:v,y:c}}else{if(i){if(i.y<s)return}else i={x:v,y:c};n={x:v,y:s}}}else if(r=(h-d)/(g-p),o=m-r*v,-1>r||r>1)if(h>d){if(i){if(i.y>=c)return}else i={x:(s-o)/r,y:s};n={x:(c-o)/r,y:c}}else{if(i){if(i.y<s)return}else i={x:(c-o)/r,y:c};n={x:(s-o)/r,y:s}}else if(g>p){if(i){if(i.x>=u)return}else i={x:a,y:r*a+o};n={x:u,y:r*u+o}}else{if(i){if(i.x<a)return}else i={x:u,y:r*u+o};n={x:a,y:r*a+o}}return t.a=i,t.b=n,!0}function nr(t,e){this.l=t,this.r=e,this.a=this.b=null}function rr(t,e,n,r){var o=new nr(t,e);return ss.push(o),n&&ir(o,t,e,n),r&&ir(o,e,t,r),cs[t.i].edges.push(new ar(o,t,e)),cs[e.i].edges.push(new ar(o,e,t)),o}function or(t,e,n){var r=new nr(t,null);return r.a=e,r.b=n,ss.push(r),r}function ir(t,e,n,r){t.a||t.b?t.l===n?t.b=r:t.a=r:(t.a=r,t.l=e,t.r=n)}function ar(t,e,n){var r=t.a,o=t.b;this.edge=t,this.site=e,this.angle=n?Math.atan2(n.y-e.y,n.x-e.x):t.l===e?Math.atan2(o.x-r.x,r.y-o.y):Math.atan2(r.x-o.x,o.y-r.y)}function ur(){this._=null}function sr(t){t.U=t.C=t.L=t.R=t.P=t.N=null}function cr(t,e){var n=e,r=e.R,o=n.U;o?o.L===n?o.L=r:o.R=r:t._=r,r.U=o,n.U=r,n.R=r.L,n.R&&(n.R.U=n),r.L=n}function lr(t,e){var n=e,r=e.L,o=n.U;o?o.L===n?o.L=r:o.R=r:t._=r,r.U=o,n.U=r,n.L=r.R,n.L&&(n.L.U=n),r.R=n}function fr(t){for(;t.L;)t=t.L;return t}function hr(t,e){var n,r,o,i=t.sort(pr).pop();for(ss=[],cs=new Array(t.length),ls=new ur,hs=new ur;;)if(o=fs,i&&(!o||i.y<o.y||i.y===o.y&&i.x<o.x))(i.x!==n||i.y!==r)&&(cs[i.i]=new Yn(i),$n(i),n=i.x,r=i.y),i=t.pop();else{if(!o)break;Un(o.arc)}e&&(tr(e),Xn(e));var a={cells:cs,edges:ss};return ls=hs=ss=cs=null,a}function pr(t,e){return e.y-t.y||e.x-t.x}function dr(t,e,n){return(t.x-n.x)*(e.y-t.y)-(t.x-e.x)*(n.y-t.y)}function gr(t){return t.x}function vr(t){return t.y}function mr(){return{leaf:!0,nodes:[],point:null,x:null,y:null}}function yr(t,e,n,r,o,i){if(!t(e,n,r,o,i)){var a=.5*(n+o),u=.5*(r+i),s=e.nodes;s[0]&&yr(t,s[0],n,r,a,u),s[1]&&yr(t,s[1],a,r,o,u),s[2]&&yr(t,s[2],n,u,a,i),s[3]&&yr(t,s[3],a,u,o,i)}}function br(t,e,n,r,o,i,a){var u,s=1/0;return function c(t,l,f,h,p){if(!(l>i||f>a||r>h||o>p)){if(d=t.point){var d,g=e-t.x,v=n-t.y,m=g*g+v*v;if(s>m){var y=Math.sqrt(s=m);r=e-y,o=n-y,i=e+y,a=n+y,u=d}}for(var b=t.nodes,x=.5*(l+h),w=.5*(f+p),M=e>=x,k=n>=w,C=k<<1|M,S=C+4;S>C;++C)if(t=b[3&C])switch(3&C){case 0:c(t,l,f,x,w);break;case 1:c(t,x,f,h,w);break;case 2:c(t,l,w,x,p);break;case 3:c(t,x,w,h,p)}}}(t,r,o,i,a),u}function xr(t,e){t=pa.rgb(t),e=pa.rgb(e);var n=t.r,r=t.g,o=t.b,i=e.r-n,a=e.g-r,u=e.b-o;return function(t){return"#"+St(Math.round(n+i*t))+St(Math.round(r+a*t))+St(Math.round(o+u*t))}}function wr(t,e){var n,r={},o={};for(n in t)n in e?r[n]=Cr(t[n],e[n]):o[n]=t[n];for(n in e)n in t||(o[n]=e[n]);return function(t){for(n in r)o[n]=r[n](t);return o}}function Mr(t,e){return t=+t,e=+e,function(n){return t*(1-n)+e*n}}function kr(t,e){var n,r,o,i=vs.lastIndex=ms.lastIndex=0,a=-1,u=[],s=[];for(t+="",e+="";(n=vs.exec(t))&&(r=ms.exec(e));)(o=r.index)>i&&(o=e.slice(i,o),u[a]?u[a]+=o:u[++a]=o),(n=n[0])===(r=r[0])?u[a]?u[a]+=r:u[++a]=r:(u[++a]=null,s.push({i:a,x:Mr(n,r)})),i=ms.lastIndex;return i<e.length&&(o=e.slice(i),u[a]?u[a]+=o:u[++a]=o),u.length<2?s[0]?(e=s[0].x,function(t){return e(t)+""}):function(){return e}:(e=s.length,function(t){for(var n,r=0;e>r;++r)u[(n=s[r]).i]=n.x(t);return u.join("")})}function Cr(t,e){for(var n,r=pa.interpolators.length;--r>=0&&!(n=pa.interpolators[r](t,e)););return n}function Sr(t,e){var n,r=[],o=[],i=t.length,a=e.length,u=Math.min(t.length,e.length);for(n=0;u>n;++n)r.push(Cr(t[n],e[n]));for(;i>n;++n)o[n]=t[n];for(;a>n;++n)o[n]=e[n];return function(t){for(n=0;u>n;++n)o[n]=r[n](t);return o}}function _r(t){return function(e){return 0>=e?0:e>=1?1:t(e)}}function Er(t){return function(e){return 1-t(1-e)}}function Tr(t){return function(e){return.5*(.5>e?t(2*e):2-t(2-2*e))}}function Ar(t){return t*t}function Or(t){return t*t*t}function Nr(t){if(0>=t)return 0;if(t>=1)return 1;var e=t*t,n=e*t;return 4*(.5>t?n:3*(t-e)+n-.75)}function jr(t){return function(e){return Math.pow(e,t)}}function Pr(t){return 1-Math.cos(t*Ga)}function Dr(t){return Math.pow(2,10*(t-1))}function Rr(t){return 1-Math.sqrt(1-t*t)}function Fr(t,e){var n;return arguments.length<2&&(e=.45),arguments.length?n=e/Ua*Math.asin(1/t):(t=1,n=e/4),function(r){return 1+t*Math.pow(2,-10*r)*Math.sin((r-n)*Ua/e)}}function Lr(t){return t||(t=1.70158),function(e){return e*e*((t+1)*e-t)}}function Ir(t){return 1/2.75>t?7.5625*t*t:2/2.75>t?7.5625*(t-=1.5/2.75)*t+.75:2.5/2.75>t?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375}function qr(t,e){t=pa.hcl(t),e=pa.hcl(e);var n=t.h,r=t.c,o=t.l,i=e.h-n,a=e.c-r,u=e.l-o;return isNaN(a)&&(a=0,r=isNaN(r)?e.c:r),isNaN(i)?(i=0,n=isNaN(n)?e.h:n):i>180?i-=360:-180>i&&(i+=360),function(t){return gt(n+i*t,r+a*t,o+u*t)+""}}function Br(t,e){t=pa.hsl(t),e=pa.hsl(e);var n=t.h,r=t.s,o=t.l,i=e.h-n,a=e.s-r,u=e.l-o;return isNaN(a)&&(a=0,r=isNaN(r)?e.s:r),isNaN(i)?(i=0,n=isNaN(n)?e.h:n):i>180?i-=360:-180>i&&(i+=360),function(t){return pt(n+i*t,r+a*t,o+u*t)+""}}function zr(t,e){t=pa.lab(t),e=pa.lab(e);var n=t.l,r=t.a,o=t.b,i=e.l-n,a=e.a-r,u=e.b-o;return function(t){return mt(n+i*t,r+a*t,o+u*t)+""}}function Hr(t,e){return e-=t,function(n){return Math.round(t+e*n)}}function Wr(t){var e=[t.a,t.b],n=[t.c,t.d],r=$r(e),o=Ur(e,n),i=$r(Gr(n,e,-o))||0;e[0]*n[1]<n[0]*e[1]&&(e[0]*=-1,e[1]*=-1,r*=-1,o*=-1),this.rotate=(r?Math.atan2(e[1],e[0]):Math.atan2(-n[0],n[1]))*Ya,this.translate=[t.e,t.f],this.scale=[r,i],this.skew=i?Math.atan2(o,i)*Ya:0}function Ur(t,e){return t[0]*e[0]+t[1]*e[1]}function $r(t){var e=Math.sqrt(Ur(t,t));return e&&(t[0]/=e,t[1]/=e),e}function Gr(t,e,n){return t[0]+=n*e[0],t[1]+=n*e[1],t}function Vr(t){return t.length?t.pop()+",":""}function Yr(t,e,n,r){if(t[0]!==e[0]||t[1]!==e[1]){var o=n.push("translate(",null,",",null,")");r.push({i:o-4,x:Mr(t[0],e[0])},{i:o-2,x:Mr(t[1],e[1])})}else(e[0]||e[1])&&n.push("translate("+e+")")}function Xr(t,e,n,r){t!==e?(t-e>180?e+=360:e-t>180&&(t+=360),r.push({i:n.push(Vr(n)+"rotate(",null,")")-2,x:Mr(t,e)})):e&&n.push(Vr(n)+"rotate("+e+")")}function Zr(t,e,n,r){t!==e?r.push({i:n.push(Vr(n)+"skewX(",null,")")-2,x:Mr(t,e)}):e&&n.push(Vr(n)+"skewX("+e+")")}function Kr(t,e,n,r){if(t[0]!==e[0]||t[1]!==e[1]){var o=n.push(Vr(n)+"scale(",null,",",null,")");r.push({i:o-4,x:Mr(t[0],e[0])},{i:o-2,x:Mr(t[1],e[1])})}else(1!==e[0]||1!==e[1])&&n.push(Vr(n)+"scale("+e+")")}function Jr(t,e){var n=[],r=[];return t=pa.transform(t),e=pa.transform(e),Yr(t.translate,e.translate,n,r),Xr(t.rotate,e.rotate,n,r),Zr(t.skew,e.skew,n,r),Kr(t.scale,e.scale,n,r),t=e=null,function(t){for(var e,o=-1,i=r.length;++o<i;)n[(e=r[o]).i]=e.x(t);return n.join("")}}function Qr(t,e){return e=(e-=t=+t)||1/e,function(n){return(n-t)/e}}function to(t,e){return e=(e-=t=+t)||1/e,function(n){return Math.max(0,Math.min(1,(n-t)/e))}}function eo(t){for(var e=t.source,n=t.target,r=ro(e,n),o=[e];e!==r;)e=e.parent,o.push(e);for(var i=o.length;n!==r;)o.splice(i,0,n),n=n.parent;return o}function no(t){for(var e=[],n=t.parent;null!=n;)e.push(t),t=n,n=n.parent;return e.push(t),e}function ro(t,e){if(t===e)return t;for(var n=no(t),r=no(e),o=n.pop(),i=r.pop(),a=null;o===i;)a=o,o=n.pop(),i=r.pop();return a}function oo(t){t.fixed|=2}function io(t){t.fixed&=-7}function ao(t){t.fixed|=4,t.px=t.x,t.py=t.y}function uo(t){t.fixed&=-5}function so(t,e,n){var r=0,o=0;if(t.charge=0,!t.leaf)for(var i,a=t.nodes,u=a.length,s=-1;++s<u;)i=a[s],null!=i&&(so(i,e,n),t.charge+=i.charge,r+=i.charge*i.cx,o+=i.charge*i.cy);if(t.point){t.leaf||(t.point.x+=Math.random()-.5,t.point.y+=Math.random()-.5);var c=e*n[t.point.index];t.charge+=t.pointCharge=c,r+=c*t.point.x,o+=c*t.point.y}t.cx=r/t.charge,t.cy=o/t.charge}function co(t,e){return pa.rebind(t,e,"sort","children","value"),t.nodes=t,t.links=vo,t}function lo(t,e){for(var n=[t];null!=(t=n.pop());)if(e(t),(o=t.children)&&(r=o.length))for(var r,o;--r>=0;)n.push(o[r])}function fo(t,e){for(var n=[t],r=[];null!=(t=n.pop());)if(r.push(t),(i=t.children)&&(o=i.length))for(var o,i,a=-1;++a<o;)n.push(i[a]);for(;null!=(t=r.pop());)e(t)}function ho(t){return t.children}function po(t){return t.value}function go(t,e){return e.value-t.value}function vo(t){return pa.merge(t.map(function(t){return(t.children||[]).map(function(e){return{source:t,target:e}})}))}function mo(t){return t.x}function yo(t){return t.y}function bo(t,e,n){t.y0=e,t.y=n}function xo(t){return pa.range(t.length)}function wo(t){for(var e=-1,n=t[0].length,r=[];++e<n;)r[e]=0;return r}function Mo(t){for(var e,n=1,r=0,o=t[0][1],i=t.length;i>n;++n)(e=t[n][1])>o&&(r=n,o=e);return r}function ko(t){return t.reduce(Co,0)}function Co(t,e){return t+e[1]}function So(t,e){return _o(t,Math.ceil(Math.log(e.length)/Math.LN2+1))}function _o(t,e){for(var n=-1,r=+t[0],o=(t[1]-r)/e,i=[];++n<=e;)i[n]=o*n+r;return i}function Eo(t){return[pa.min(t),pa.max(t)]}function To(t,e){return t.value-e.value}function Ao(t,e){var n=t._pack_next;t._pack_next=e,e._pack_prev=t,e._pack_next=n,n._pack_prev=e}function Oo(t,e){t._pack_next=e,e._pack_prev=t}function No(t,e){var n=e.x-t.x,r=e.y-t.y,o=t.r+e.r;return.999*o*o>n*n+r*r}function jo(t){function e(t){l=Math.min(t.x-t.r,l),f=Math.max(t.x+t.r,f),h=Math.min(t.y-t.r,h),p=Math.max(t.y+t.r,p)}if((n=t.children)&&(c=n.length)){var n,r,o,i,a,u,s,c,l=1/0,f=-(1/0),h=1/0,p=-(1/0);if(n.forEach(Po),r=n[0],r.x=-r.r,r.y=0,e(r),c>1&&(o=n[1],o.x=o.r,o.y=0,e(o),c>2))for(i=n[2],Fo(r,o,i),e(i),Ao(r,i),r._pack_prev=i,Ao(i,o),o=r._pack_next,a=3;c>a;a++){Fo(r,o,i=n[a]);var d=0,g=1,v=1;for(u=o._pack_next;u!==o;u=u._pack_next,g++)if(No(u,i)){d=1;break}if(1==d)for(s=r._pack_prev;s!==u._pack_prev&&!No(s,i);s=s._pack_prev,v++);d?(v>g||g==v&&o.r<r.r?Oo(r,o=u):Oo(r=s,o),a--):(Ao(r,i),o=i,e(i))}var m=(l+f)/2,y=(h+p)/2,b=0;for(a=0;c>a;a++)i=n[a],i.x-=m,i.y-=y,b=Math.max(b,i.r+Math.sqrt(i.x*i.x+i.y*i.y));t.r=b,n.forEach(Do)}}function Po(t){t._pack_next=t._pack_prev=t}function Do(t){delete t._pack_next,delete t._pack_prev}function Ro(t,e,n,r){var o=t.children;if(t.x=e+=r*t.x,t.y=n+=r*t.y,t.r*=r,o)for(var i=-1,a=o.length;++i<a;)Ro(o[i],e,n,r)}function Fo(t,e,n){var r=t.r+n.r,o=e.x-t.x,i=e.y-t.y;if(r&&(o||i)){var a=e.r+n.r,u=o*o+i*i;a*=a,r*=r;var s=.5+(r-a)/(2*u),c=Math.sqrt(Math.max(0,2*a*(r+u)-(r-=u)*r-a*a))/(2*u);n.x=t.x+s*o+c*i,n.y=t.y+s*i-c*o}else n.x=t.x+r,n.y=t.y}function Lo(t,e){return t.parent==e.parent?1:2}function Io(t){var e=t.children;return e.length?e[0]:t.t}function qo(t){var e,n=t.children;return(e=n.length)?n[e-1]:t.t}function Bo(t,e,n){var r=n/(e.i-t.i);e.c-=r,e.s+=n,t.c+=r,e.z+=n,e.m+=n}function zo(t){for(var e,n=0,r=0,o=t.children,i=o.length;--i>=0;)e=o[i],e.z+=n,e.m+=n,n+=e.s+(r+=e.c)}function Ho(t,e,n){return t.a.parent===e.parent?t.a:n}function Wo(t){return 1+pa.max(t,function(t){return t.y})}function Uo(t){return t.reduce(function(t,e){return t+e.x},0)/t.length}function $o(t){var e=t.children;return e&&e.length?$o(e[0]):t}function Go(t){var e,n=t.children;return n&&(e=n.length)?Go(n[e-1]):t}function Vo(t){return{x:t.x,y:t.y,dx:t.dx,dy:t.dy}}function Yo(t,e){var n=t.x+e[3],r=t.y+e[0],o=t.dx-e[1]-e[3],i=t.dy-e[0]-e[2];return 0>o&&(n+=o/2,o=0),0>i&&(r+=i/2,i=0),{x:n,y:r,dx:o,dy:i}}function Xo(t){var e=t[0],n=t[t.length-1];return n>e?[e,n]:[n,e]}function Zo(t){return t.rangeExtent?t.rangeExtent():Xo(t.range())}function Ko(t,e,n,r){var o=n(t[0],t[1]),i=r(e[0],e[1]);return function(t){return i(o(t))}}function Jo(t,e){var n,r=0,o=t.length-1,i=t[r],a=t[o];return i>a&&(n=r,r=o,o=n,n=i,i=a,a=n),t[r]=e.floor(i),t[o]=e.ceil(a),t}function Qo(t){return t?{floor:function(e){return Math.floor(e/t)*t},ceil:function(e){return Math.ceil(e/t)*t}}:Ts}function ti(t,e,n,r){var o=[],i=[],a=0,u=Math.min(t.length,e.length)-1;for(t[u]<t[0]&&(t=t.slice().reverse(),e=e.slice().reverse());++a<=u;)o.push(n(t[a-1],t[a])),i.push(r(e[a-1],e[a]));return function(e){var n=pa.bisect(t,e,1,u)-1;return i[n](o[n](e))}}function ei(t,e,n,r){function o(){var o=Math.min(t.length,e.length)>2?ti:Ko,s=r?to:Qr;return a=o(t,e,s,n),u=o(e,t,s,Cr),i}function i(t){return a(t)}var a,u;return i.invert=function(t){return u(t)},i.domain=function(e){return arguments.length?(t=e.map(Number),o()):t},i.range=function(t){return arguments.length?(e=t,o()):e},i.rangeRound=function(t){return i.range(t).interpolate(Hr)},i.clamp=function(t){return arguments.length?(r=t,o()):r},i.interpolate=function(t){return arguments.length?(n=t,o()):n},i.ticks=function(e){return ii(t,e)},i.tickFormat=function(e,n){return ai(t,e,n)},i.nice=function(e){return ri(t,e),o()},i.copy=function(){return ei(t,e,n,r)},o()}function ni(t,e){return pa.rebind(t,e,"range","rangeRound","interpolate","clamp")}function ri(t,e){return Jo(t,Qo(oi(t,e)[2])),Jo(t,Qo(oi(t,e)[2])),t}function oi(t,e){null==e&&(e=10);var n=Xo(t),r=n[1]-n[0],o=Math.pow(10,Math.floor(Math.log(r/e)/Math.LN10)),i=e/r*o;return.15>=i?o*=10:.35>=i?o*=5:.75>=i&&(o*=2),n[0]=Math.ceil(n[0]/o)*o,n[1]=Math.floor(n[1]/o)*o+.5*o,n[2]=o,n}function ii(t,e){return pa.range.apply(pa,oi(t,e))}function ai(t,e,n){var r=oi(t,e);if(n){var o=vu.exec(n);if(o.shift(),"s"===o[8]){var i=pa.formatPrefix(Math.max(Sa(r[0]),Sa(r[1])));return o[7]||(o[7]="."+ui(i.scale(r[2]))),o[8]="f",n=pa.format(o.join("")),function(t){return n(i.scale(t))+i.symbol}}o[7]||(o[7]="."+si(o[8],r)),n=o.join("")}else n=",."+ui(r[2])+"f";return pa.format(n)}function ui(t){return-Math.floor(Math.log(t)/Math.LN10+.01)}function si(t,e){var n=ui(e[2]);return t in As?Math.abs(n-ui(Math.max(Sa(e[0]),Sa(e[1]))))+ +("e"!==t):n-2*("%"===t)}function ci(t,e,n,r){function o(t){return(n?Math.log(0>t?0:t):-Math.log(t>0?0:-t))/Math.log(e)}function i(t){return n?Math.pow(e,t):-Math.pow(e,-t)}function a(e){return t(o(e))}return a.invert=function(e){return i(t.invert(e))},a.domain=function(e){return arguments.length?(n=e[0]>=0,t.domain((r=e.map(Number)).map(o)),a):r},a.base=function(n){return arguments.length?(e=+n,t.domain(r.map(o)),a):e},a.nice=function(){var e=Jo(r.map(o),n?Math:Ns);return t.domain(e),r=e.map(i),a},a.ticks=function(){var t=Xo(r),a=[],u=t[0],s=t[1],c=Math.floor(o(u)),l=Math.ceil(o(s)),f=e%1?2:e;if(isFinite(l-c)){if(n){for(;l>c;c++)for(var h=1;f>h;h++)a.push(i(c)*h);a.push(i(c))}else for(a.push(i(c));c++<l;)for(var h=f-1;h>0;h--)a.push(i(c)*h);for(c=0;a[c]<u;c++);for(l=a.length;a[l-1]>s;l--);a=a.slice(c,l)}return a},a.tickFormat=function(t,n){if(!arguments.length)return Os;arguments.length<2?n=Os:"function"!=typeof n&&(n=pa.format(n));var r=Math.max(1,e*t/a.ticks().length);return function(t){var a=t/i(Math.round(o(t)));return e-.5>a*e&&(a*=e),r>=a?n(t):""}},a.copy=function(){return ci(t.copy(),e,n,r)},ni(a,t)}function li(t,e,n){function r(e){return t(o(e))}var o=fi(e),i=fi(1/e);return r.invert=function(e){return i(t.invert(e))},r.domain=function(e){return arguments.length?(t.domain((n=e.map(Number)).map(o)),r):n},r.ticks=function(t){return ii(n,t)},r.tickFormat=function(t,e){return ai(n,t,e)},r.nice=function(t){return r.domain(ri(n,t))},r.exponent=function(a){return arguments.length?(o=fi(e=a),i=fi(1/e),t.domain(n.map(o)),r):e},r.copy=function(){return li(t.copy(),e,n)},ni(r,t)}function fi(t){return function(e){return 0>e?-Math.pow(-e,t):Math.pow(e,t)}}function hi(t,e){function n(n){return i[((o.get(n)||("range"===e.t?o.set(n,t.push(n)):NaN))-1)%i.length]}function r(e,n){return pa.range(t.length).map(function(t){return e+n*t})}var o,i,a;return n.domain=function(r){if(!arguments.length)return t;t=[],o=new d;for(var i,a=-1,u=r.length;++a<u;)o.has(i=r[a])||o.set(i,t.push(i));return n[e.t].apply(n,e.a)},n.range=function(t){return arguments.length?(i=t,a=0,e={t:"range",a:arguments},n):i},n.rangePoints=function(o,u){arguments.length<2&&(u=0);var s=o[0],c=o[1],l=t.length<2?(s=(s+c)/2,0):(c-s)/(t.length-1+u);return i=r(s+l*u/2,l),a=0,e={t:"rangePoints",a:arguments},n},n.rangeRoundPoints=function(o,u){arguments.length<2&&(u=0);var s=o[0],c=o[1],l=t.length<2?(s=c=Math.round((s+c)/2),0):(c-s)/(t.length-1+u)|0;return i=r(s+Math.round(l*u/2+(c-s-(t.length-1+u)*l)/2),l),a=0,e={t:"rangeRoundPoints",a:arguments},n},n.rangeBands=function(o,u,s){arguments.length<2&&(u=0),arguments.length<3&&(s=u);var c=o[1]<o[0],l=o[c-0],f=o[1-c],h=(f-l)/(t.length-u+2*s);return i=r(l+h*s,h),c&&i.reverse(),a=h*(1-u),e={t:"rangeBands",a:arguments},n},n.rangeRoundBands=function(o,u,s){arguments.length<2&&(u=0),arguments.length<3&&(s=u);var c=o[1]<o[0],l=o[c-0],f=o[1-c],h=Math.floor((f-l)/(t.length-u+2*s));return i=r(l+Math.round((f-l-(t.length-u)*h)/2),h),c&&i.reverse(),a=Math.round(h*(1-u)),e={t:"rangeRoundBands",a:arguments},n},n.rangeBand=function(){return a},n.rangeExtent=function(){return Xo(e.a[0])},n.copy=function(){return hi(t,e)},n.domain(t)}function pi(t,e){function n(){var n=0,i=e.length;for(o=[];++n<i;)o[n-1]=pa.quantile(t,n/i);return r}function r(t){return isNaN(t=+t)?void 0:e[pa.bisect(o,t)]}var o;return r.domain=function(e){return arguments.length?(t=e.map(s).filter(c).sort(u),n()):t},r.range=function(t){return arguments.length?(e=t,n()):e},r.quantiles=function(){return o},r.invertExtent=function(n){return n=e.indexOf(n),0>n?[NaN,NaN]:[n>0?o[n-1]:t[0],n<o.length?o[n]:t[t.length-1]]},r.copy=function(){return pi(t,e)},n()}function di(t,e,n){function r(e){return n[Math.max(0,Math.min(a,Math.floor(i*(e-t))))]}function o(){return i=n.length/(e-t),a=n.length-1,r}var i,a;return r.domain=function(n){return arguments.length?(t=+n[0],e=+n[n.length-1],o()):[t,e]},r.range=function(t){return arguments.length?(n=t,o()):n},r.invertExtent=function(e){return e=n.indexOf(e),e=0>e?NaN:e/i+t,[e,e+1/i]},r.copy=function(){return di(t,e,n)},o()}function gi(t,e){function n(n){return n>=n?e[pa.bisect(t,n)]:void 0}return n.domain=function(e){return arguments.length?(t=e,n):t},n.range=function(t){return arguments.length?(e=t,n):e},n.invertExtent=function(n){return n=e.indexOf(n),[t[n-1],t[n]]},n.copy=function(){return gi(t,e)},n}function vi(t){function e(t){return+t}return e.invert=e,e.domain=e.range=function(n){return arguments.length?(t=n.map(e),e):t},e.ticks=function(e){return ii(t,e)},e.tickFormat=function(e,n){return ai(t,e,n)},e.copy=function(){return vi(t)},e}function mi(){return 0}function yi(t){return t.innerRadius}function bi(t){return t.outerRadius}function xi(t){return t.startAngle}function wi(t){return t.endAngle}function Mi(t){return t&&t.padAngle}function ki(t,e,n,r){return(t-n)*e-(e-r)*t>0?0:1}function Ci(t,e,n,r,o){var i=t[0]-e[0],a=t[1]-e[1],u=(o?r:-r)/Math.sqrt(i*i+a*a),s=u*a,c=-u*i,l=t[0]+s,f=t[1]+c,h=e[0]+s,p=e[1]+c,d=(l+h)/2,g=(f+p)/2,v=h-l,m=p-f,y=v*v+m*m,b=n-r,x=l*p-h*f,w=(0>m?-1:1)*Math.sqrt(Math.max(0,b*b*y-x*x)),M=(x*m-v*w)/y,k=(-x*v-m*w)/y,C=(x*m+v*w)/y,S=(-x*v+m*w)/y,_=M-d,E=k-g,T=C-d,A=S-g;return _*_+E*E>T*T+A*A&&(M=C,k=S),[[M-s,k-c],[M*n/b,k*n/b]]}function Si(t){function e(e){function a(){c.push("M",i(t(l),u))}for(var s,c=[],l=[],f=-1,h=e.length,p=Nt(n),d=Nt(r);++f<h;)o.call(this,s=e[f],f)?l.push([+p.call(this,s,f),+d.call(this,s,f)]):l.length&&(a(),l=[]);return l.length&&a(),c.length?c.join(""):null}var n=Dn,r=Rn,o=De,i=_i,a=i.key,u=.7;return e.x=function(t){return arguments.length?(n=t,e):n},e.y=function(t){return arguments.length?(r=t,e):r},e.defined=function(t){return arguments.length?(o=t,e):o},e.interpolate=function(t){return arguments.length?(a="function"==typeof t?i=t:(i=Ls.get(t)||_i).key,e):a},e.tension=function(t){return arguments.length?(u=t,e):u},e}function _i(t){return t.length>1?t.join("L"):t+"Z"}function Ei(t){return t.join("L")+"Z"}function Ti(t){for(var e=0,n=t.length,r=t[0],o=[r[0],",",r[1]];++e<n;)o.push("H",(r[0]+(r=t[e])[0])/2,"V",r[1]);return n>1&&o.push("H",r[0]),o.join("")}function Ai(t){for(var e=0,n=t.length,r=t[0],o=[r[0],",",r[1]];++e<n;)o.push("V",(r=t[e])[1],"H",r[0]);
return o.join("")}function Oi(t){for(var e=0,n=t.length,r=t[0],o=[r[0],",",r[1]];++e<n;)o.push("H",(r=t[e])[0],"V",r[1]);return o.join("")}function Ni(t,e){return t.length<4?_i(t):t[1]+Di(t.slice(1,-1),Ri(t,e))}function ji(t,e){return t.length<3?Ei(t):t[0]+Di((t.push(t[0]),t),Ri([t[t.length-2]].concat(t,[t[1]]),e))}function Pi(t,e){return t.length<3?_i(t):t[0]+Di(t,Ri(t,e))}function Di(t,e){if(e.length<1||t.length!=e.length&&t.length!=e.length+2)return _i(t);var n=t.length!=e.length,r="",o=t[0],i=t[1],a=e[0],u=a,s=1;if(n&&(r+="Q"+(i[0]-2*a[0]/3)+","+(i[1]-2*a[1]/3)+","+i[0]+","+i[1],o=t[1],s=2),e.length>1){u=e[1],i=t[s],s++,r+="C"+(o[0]+a[0])+","+(o[1]+a[1])+","+(i[0]-u[0])+","+(i[1]-u[1])+","+i[0]+","+i[1];for(var c=2;c<e.length;c++,s++)i=t[s],u=e[c],r+="S"+(i[0]-u[0])+","+(i[1]-u[1])+","+i[0]+","+i[1]}if(n){var l=t[s];r+="Q"+(i[0]+2*u[0]/3)+","+(i[1]+2*u[1]/3)+","+l[0]+","+l[1]}return r}function Ri(t,e){for(var n,r=[],o=(1-e)/2,i=t[0],a=t[1],u=1,s=t.length;++u<s;)n=i,i=a,a=t[u],r.push([o*(a[0]-n[0]),o*(a[1]-n[1])]);return r}function Fi(t){if(t.length<3)return _i(t);var e=1,n=t.length,r=t[0],o=r[0],i=r[1],a=[o,o,o,(r=t[1])[0]],u=[i,i,i,r[1]],s=[o,",",i,"L",Bi(Bs,a),",",Bi(Bs,u)];for(t.push(t[n-1]);++e<=n;)r=t[e],a.shift(),a.push(r[0]),u.shift(),u.push(r[1]),zi(s,a,u);return t.pop(),s.push("L",r),s.join("")}function Li(t){if(t.length<4)return _i(t);for(var e,n=[],r=-1,o=t.length,i=[0],a=[0];++r<3;)e=t[r],i.push(e[0]),a.push(e[1]);for(n.push(Bi(Bs,i)+","+Bi(Bs,a)),--r;++r<o;)e=t[r],i.shift(),i.push(e[0]),a.shift(),a.push(e[1]),zi(n,i,a);return n.join("")}function Ii(t){for(var e,n,r=-1,o=t.length,i=o+4,a=[],u=[];++r<4;)n=t[r%o],a.push(n[0]),u.push(n[1]);for(e=[Bi(Bs,a),",",Bi(Bs,u)],--r;++r<i;)n=t[r%o],a.shift(),a.push(n[0]),u.shift(),u.push(n[1]),zi(e,a,u);return e.join("")}function qi(t,e){var n=t.length-1;if(n)for(var r,o,i=t[0][0],a=t[0][1],u=t[n][0]-i,s=t[n][1]-a,c=-1;++c<=n;)r=t[c],o=c/n,r[0]=e*r[0]+(1-e)*(i+o*u),r[1]=e*r[1]+(1-e)*(a+o*s);return Fi(t)}function Bi(t,e){return t[0]*e[0]+t[1]*e[1]+t[2]*e[2]+t[3]*e[3]}function zi(t,e,n){t.push("C",Bi(Is,e),",",Bi(Is,n),",",Bi(qs,e),",",Bi(qs,n),",",Bi(Bs,e),",",Bi(Bs,n))}function Hi(t,e){return(e[1]-t[1])/(e[0]-t[0])}function Wi(t){for(var e=0,n=t.length-1,r=[],o=t[0],i=t[1],a=r[0]=Hi(o,i);++e<n;)r[e]=(a+(a=Hi(o=i,i=t[e+1])))/2;return r[e]=a,r}function Ui(t){for(var e,n,r,o,i=[],a=Wi(t),u=-1,s=t.length-1;++u<s;)e=Hi(t[u],t[u+1]),Sa(e)<za?a[u]=a[u+1]=0:(n=a[u]/e,r=a[u+1]/e,o=n*n+r*r,o>9&&(o=3*e/Math.sqrt(o),a[u]=o*n,a[u+1]=o*r));for(u=-1;++u<=s;)o=(t[Math.min(s,u+1)][0]-t[Math.max(0,u-1)][0])/(6*(1+a[u]*a[u])),i.push([o||0,a[u]*o||0]);return i}function $i(t){return t.length<3?_i(t):t[0]+Di(t,Ui(t))}function Gi(t){for(var e,n,r,o=-1,i=t.length;++o<i;)e=t[o],n=e[0],r=e[1]-Ga,e[0]=n*Math.cos(r),e[1]=n*Math.sin(r);return t}function Vi(t){function e(e){function s(){g.push("M",u(t(m),f),l,c(t(v.reverse()),f),"Z")}for(var h,p,d,g=[],v=[],m=[],y=-1,b=e.length,x=Nt(n),w=Nt(o),M=n===r?function(){return p}:Nt(r),k=o===i?function(){return d}:Nt(i);++y<b;)a.call(this,h=e[y],y)?(v.push([p=+x.call(this,h,y),d=+w.call(this,h,y)]),m.push([+M.call(this,h,y),+k.call(this,h,y)])):v.length&&(s(),v=[],m=[]);return v.length&&s(),g.length?g.join(""):null}var n=Dn,r=Dn,o=0,i=Rn,a=De,u=_i,s=u.key,c=u,l="L",f=.7;return e.x=function(t){return arguments.length?(n=r=t,e):r},e.x0=function(t){return arguments.length?(n=t,e):n},e.x1=function(t){return arguments.length?(r=t,e):r},e.y=function(t){return arguments.length?(o=i=t,e):i},e.y0=function(t){return arguments.length?(o=t,e):o},e.y1=function(t){return arguments.length?(i=t,e):i},e.defined=function(t){return arguments.length?(a=t,e):a},e.interpolate=function(t){return arguments.length?(s="function"==typeof t?u=t:(u=Ls.get(t)||_i).key,c=u.reverse||u,l=u.closed?"M":"L",e):s},e.tension=function(t){return arguments.length?(f=t,e):f},e}function Yi(t){return t.radius}function Xi(t){return[t.x,t.y]}function Zi(t){return function(){var e=t.apply(this,arguments),n=e[0],r=e[1]-Ga;return[n*Math.cos(r),n*Math.sin(r)]}}function Ki(){return 64}function Ji(){return"circle"}function Qi(t){var e=Math.sqrt(t/Wa);return"M0,"+e+"A"+e+","+e+" 0 1,1 0,"+-e+"A"+e+","+e+" 0 1,1 0,"+e+"Z"}function ta(t){return function(){var e,n,r;(e=this[t])&&(r=e[n=e.active])&&(r.timer.c=null,r.timer.t=NaN,--e.count?delete e[n]:delete this[t],e.active+=.5,r.event&&r.event.interrupt.call(this,this.__data__,r.index))}}function ea(t,e,n){return Oa(t,Vs),t.namespace=e,t.id=n,t}function na(t,e,n,r){var o=t.id,i=t.namespace;return Y(t,"function"==typeof n?function(t,a,u){t[i][o].tween.set(e,r(n.call(t,t.__data__,a,u)))}:(n=r(n),function(t){t[i][o].tween.set(e,n)}))}function ra(t){return null==t&&(t=""),function(){this.textContent=t}}function oa(t){return null==t?"__transition__":"__transition_"+t+"__"}function ia(t,e,n,r,o){function i(t){var e=g.delay;return c.t=e+s,t>=e?a(t-e):void(c.c=a)}function a(n){var o=p.active,i=p[o];i&&(i.timer.c=null,i.timer.t=NaN,--p.count,delete p[o],i.event&&i.event.interrupt.call(t,t.__data__,i.index));for(var a in p)if(r>+a){var d=p[a];d.timer.c=null,d.timer.t=NaN,--p.count,delete p[a]}c.c=u,Ft(function(){return c.c&&u(n||1)&&(c.c=null,c.t=NaN),1},0,s),p.active=r,g.event&&g.event.start.call(t,t.__data__,e),h=[],g.tween.forEach(function(n,r){(r=r.call(t,t.__data__,e))&&h.push(r)}),f=g.ease,l=g.duration}function u(o){for(var i=o/l,a=f(i),u=h.length;u>0;)h[--u].call(t,a);return i>=1?(g.event&&g.event.end.call(t,t.__data__,e),--p.count?delete p[r]:delete t[n],1):void 0}var s,c,l,f,h,p=t[n]||(t[n]={active:0,count:0}),g=p[r];g||(s=o.time,c=Ft(i,0,s),g=p[r]={tween:new d,time:s,timer:c,delay:o.delay,duration:o.duration,ease:o.ease,index:e},o=null,++p.count)}function aa(t,e,n){t.attr("transform",function(t){var r=e(t);return"translate("+(isFinite(r)?r:n(t))+",0)"})}function ua(t,e,n){t.attr("transform",function(t){var r=e(t);return"translate(0,"+(isFinite(r)?r:n(t))+")"})}function sa(t){return t.toISOString()}function ca(t,e,n){function r(e){return t(e)}function o(t,n){var r=t[1]-t[0],o=r/n,i=pa.bisect(nc,o);return i==nc.length?[e.year,oi(t.map(function(t){return t/31536e6}),n)[2]]:i?e[o/nc[i-1]<nc[i]/o?i-1:i]:[ic,oi(t,n)[2]]}return r.invert=function(e){return la(t.invert(e))},r.domain=function(e){return arguments.length?(t.domain(e),r):t.domain().map(la)},r.nice=function(t,e){function n(n){return!isNaN(n)&&!t.range(n,la(+n+1),e).length}var i=r.domain(),a=Xo(i),u=null==t?o(a,10):"number"==typeof t&&o(a,t);return u&&(t=u[0],e=u[1]),r.domain(Jo(i,e>1?{floor:function(e){for(;n(e=t.floor(e));)e=la(e-1);return e},ceil:function(e){for(;n(e=t.ceil(e));)e=la(+e+1);return e}}:t))},r.ticks=function(t,e){var n=Xo(r.domain()),i=null==t?o(n,10):"number"==typeof t?o(n,t):!t.range&&[{range:t},e];return i&&(t=i[0],e=i[1]),t.range(n[0],la(+n[1]+1),1>e?1:e)},r.tickFormat=function(){return n},r.copy=function(){return ca(t.copy(),e,n)},ni(r,t)}function la(t){return new Date(t)}function fa(t){return JSON.parse(t.responseText)}function ha(t){var e=va.createRange();return e.selectNode(va.body),e.createContextualFragment(t.responseText)}var pa={version:"3.5.12"},da=[].slice,ga=function(t){return da.call(t)},va=this.document;if(va)try{ga(va.documentElement.childNodes)[0].nodeType}catch(ma){ga=function(t){for(var e=t.length,n=new Array(e);e--;)n[e]=t[e];return n}}if(Date.now||(Date.now=function(){return+new Date}),va)try{va.createElement("DIV").style.setProperty("opacity",0,"")}catch(ya){var ba=this.Element.prototype,xa=ba.setAttribute,wa=ba.setAttributeNS,Ma=this.CSSStyleDeclaration.prototype,ka=Ma.setProperty;ba.setAttribute=function(t,e){xa.call(this,t,e+"")},ba.setAttributeNS=function(t,e,n){wa.call(this,t,e,n+"")},Ma.setProperty=function(t,e,n){ka.call(this,t,e+"",n)}}pa.ascending=u,pa.descending=function(t,e){return t>e?-1:e>t?1:e>=t?0:NaN},pa.min=function(t,e){var n,r,o=-1,i=t.length;if(1===arguments.length){for(;++o<i;)if(null!=(r=t[o])&&r>=r){n=r;break}for(;++o<i;)null!=(r=t[o])&&n>r&&(n=r)}else{for(;++o<i;)if(null!=(r=e.call(t,t[o],o))&&r>=r){n=r;break}for(;++o<i;)null!=(r=e.call(t,t[o],o))&&n>r&&(n=r)}return n},pa.max=function(t,e){var n,r,o=-1,i=t.length;if(1===arguments.length){for(;++o<i;)if(null!=(r=t[o])&&r>=r){n=r;break}for(;++o<i;)null!=(r=t[o])&&r>n&&(n=r)}else{for(;++o<i;)if(null!=(r=e.call(t,t[o],o))&&r>=r){n=r;break}for(;++o<i;)null!=(r=e.call(t,t[o],o))&&r>n&&(n=r)}return n},pa.extent=function(t,e){var n,r,o,i=-1,a=t.length;if(1===arguments.length){for(;++i<a;)if(null!=(r=t[i])&&r>=r){n=o=r;break}for(;++i<a;)null!=(r=t[i])&&(n>r&&(n=r),r>o&&(o=r))}else{for(;++i<a;)if(null!=(r=e.call(t,t[i],i))&&r>=r){n=o=r;break}for(;++i<a;)null!=(r=e.call(t,t[i],i))&&(n>r&&(n=r),r>o&&(o=r))}return[n,o]},pa.sum=function(t,e){var n,r=0,o=t.length,i=-1;if(1===arguments.length)for(;++i<o;)c(n=+t[i])&&(r+=n);else for(;++i<o;)c(n=+e.call(t,t[i],i))&&(r+=n);return r},pa.mean=function(t,e){var n,r=0,o=t.length,i=-1,a=o;if(1===arguments.length)for(;++i<o;)c(n=s(t[i]))?r+=n:--a;else for(;++i<o;)c(n=s(e.call(t,t[i],i)))?r+=n:--a;return a?r/a:void 0},pa.quantile=function(t,e){var n=(t.length-1)*e+1,r=Math.floor(n),o=+t[r-1],i=n-r;return i?o+i*(t[r]-o):o},pa.median=function(t,e){var n,r=[],o=t.length,i=-1;if(1===arguments.length)for(;++i<o;)c(n=s(t[i]))&&r.push(n);else for(;++i<o;)c(n=s(e.call(t,t[i],i)))&&r.push(n);return r.length?pa.quantile(r.sort(u),.5):void 0},pa.variance=function(t,e){var n,r,o=t.length,i=0,a=0,u=-1,l=0;if(1===arguments.length)for(;++u<o;)c(n=s(t[u]))&&(r=n-i,i+=r/++l,a+=r*(n-i));else for(;++u<o;)c(n=s(e.call(t,t[u],u)))&&(r=n-i,i+=r/++l,a+=r*(n-i));return l>1?a/(l-1):void 0},pa.deviation=function(){var t=pa.variance.apply(this,arguments);return t?Math.sqrt(t):t};var Ca=l(u);pa.bisectLeft=Ca.left,pa.bisect=pa.bisectRight=Ca.right,pa.bisector=function(t){return l(1===t.length?function(e,n){return u(t(e),n)}:t)},pa.shuffle=function(t,e,n){(i=arguments.length)<3&&(n=t.length,2>i&&(e=0));for(var r,o,i=n-e;i;)o=Math.random()*i--|0,r=t[i+e],t[i+e]=t[o+e],t[o+e]=r;return t},pa.permute=function(t,e){for(var n=e.length,r=new Array(n);n--;)r[n]=t[e[n]];return r},pa.pairs=function(t){for(var e,n=0,r=t.length-1,o=t[0],i=new Array(0>r?0:r);r>n;)i[n]=[e=o,o=t[++n]];return i},pa.zip=function(){if(!(r=arguments.length))return[];for(var t=-1,e=pa.min(arguments,f),n=new Array(e);++t<e;)for(var r,o=-1,i=n[t]=new Array(r);++o<r;)i[o]=arguments[o][t];return n},pa.transpose=function(t){return pa.zip.apply(pa,t)},pa.keys=function(t){var e=[];for(var n in t)e.push(n);return e},pa.values=function(t){var e=[];for(var n in t)e.push(t[n]);return e},pa.entries=function(t){var e=[];for(var n in t)e.push({key:n,value:t[n]});return e},pa.merge=function(t){for(var e,n,r,o=t.length,i=-1,a=0;++i<o;)a+=t[i].length;for(n=new Array(a);--o>=0;)for(r=t[o],e=r.length;--e>=0;)n[--a]=r[e];return n};var Sa=Math.abs;pa.range=function(t,e,n){if(arguments.length<3&&(n=1,arguments.length<2&&(e=t,t=0)),(e-t)/n===1/0)throw new Error("infinite range");var r,o=[],i=h(Sa(n)),a=-1;if(t*=i,e*=i,n*=i,0>n)for(;(r=t+n*++a)>e;)o.push(r/i);else for(;(r=t+n*++a)<e;)o.push(r/i);return o},pa.map=function(t,e){var n=new d;if(t instanceof d)t.forEach(function(t,e){n.set(t,e)});else if(Array.isArray(t)){var r,o=-1,i=t.length;if(1===arguments.length)for(;++o<i;)n.set(o,t[o]);else for(;++o<i;)n.set(e.call(t,r=t[o],o),r)}else for(var a in t)n.set(a,t[a]);return n};var _a="__proto__",Ea="\x00";p(d,{has:m,get:function(t){return this._[g(t)]},set:function(t,e){return this._[g(t)]=e},remove:y,keys:b,values:function(){var t=[];for(var e in this._)t.push(this._[e]);return t},entries:function(){var t=[];for(var e in this._)t.push({key:v(e),value:this._[e]});return t},size:x,empty:w,forEach:function(t){for(var e in this._)t.call(this,v(e),this._[e])}}),pa.nest=function(){function t(e,a,u){if(u>=i.length)return r?r.call(o,a):n?a.sort(n):a;for(var s,c,l,f,h=-1,p=a.length,g=i[u++],v=new d;++h<p;)(f=v.get(s=g(c=a[h])))?f.push(c):v.set(s,[c]);return e?(c=e(),l=function(n,r){c.set(n,t(e,r,u))}):(c={},l=function(n,r){c[n]=t(e,r,u)}),v.forEach(l),c}function e(t,n){if(n>=i.length)return t;var r=[],o=a[n++];return t.forEach(function(t,o){r.push({key:t,values:e(o,n)})}),o?r.sort(function(t,e){return o(t.key,e.key)}):r}var n,r,o={},i=[],a=[];return o.map=function(e,n){return t(n,e,0)},o.entries=function(n){return e(t(pa.map,n,0),0)},o.key=function(t){return i.push(t),o},o.sortKeys=function(t){return a[i.length-1]=t,o},o.sortValues=function(t){return n=t,o},o.rollup=function(t){return r=t,o},o},pa.set=function(t){var e=new M;if(t)for(var n=0,r=t.length;r>n;++n)e.add(t[n]);return e},p(M,{has:m,add:function(t){return this._[g(t+="")]=!0,t},remove:y,values:b,size:x,empty:w,forEach:function(t){for(var e in this._)t.call(this,v(e))}}),pa.behavior={},pa.rebind=function(t,e){for(var n,r=1,o=arguments.length;++r<o;)t[n=arguments[r]]=C(t,e,e[n]);return t};var Ta=["webkit","ms","moz","Moz","o","O"];pa.dispatch=function(){for(var t=new E,e=-1,n=arguments.length;++e<n;)t[arguments[e]]=T(t);return t},E.prototype.on=function(t,e){var n=t.indexOf("."),r="";if(n>=0&&(r=t.slice(n+1),t=t.slice(0,n)),t)return arguments.length<2?this[t].on(r):this[t].on(r,e);if(2===arguments.length){if(null==e)for(t in this)this.hasOwnProperty(t)&&this[t].on(r,null);return this}},pa.event=null,pa.requote=function(t){return t.replace(Aa,"\\$&")};var Aa=/[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g,Oa={}.__proto__?function(t,e){t.__proto__=e}:function(t,e){for(var n in e)t[n]=e[n]},Na=function(t,e){return e.querySelector(t)},ja=function(t,e){return e.querySelectorAll(t)},Pa=function(t,e){var n=t.matches||t[S(t,"matchesSelector")];return(Pa=function(t,e){return n.call(t,e)})(t,e)};"function"==typeof Sizzle&&(Na=function(t,e){return Sizzle(t,e)[0]||null},ja=Sizzle,Pa=Sizzle.matchesSelector),pa.selection=function(){return pa.select(va.documentElement)};var Da=pa.selection.prototype=[];Da.select=function(t){var e,n,r,o,i=[];t=P(t);for(var a=-1,u=this.length;++a<u;){i.push(e=[]),e.parentNode=(r=this[a]).parentNode;for(var s=-1,c=r.length;++s<c;)(o=r[s])?(e.push(n=t.call(o,o.__data__,s,a)),n&&"__data__"in o&&(n.__data__=o.__data__)):e.push(null)}return j(i)},Da.selectAll=function(t){var e,n,r=[];t=D(t);for(var o=-1,i=this.length;++o<i;)for(var a=this[o],u=-1,s=a.length;++u<s;)(n=a[u])&&(r.push(e=ga(t.call(n,n.__data__,u,o))),e.parentNode=n);return j(r)};var Ra={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};pa.ns={prefix:Ra,qualify:function(t){var e=t.indexOf(":"),n=t;return e>=0&&"xmlns"!==(n=t.slice(0,e))&&(t=t.slice(e+1)),Ra.hasOwnProperty(n)?{space:Ra[n],local:t}:t}},Da.attr=function(t,e){if(arguments.length<2){if("string"==typeof t){var n=this.node();return t=pa.ns.qualify(t),t.local?n.getAttributeNS(t.space,t.local):n.getAttribute(t)}for(e in t)this.each(R(e,t[e]));return this}return this.each(R(t,e))},Da.classed=function(t,e){if(arguments.length<2){if("string"==typeof t){var n=this.node(),r=(t=I(t)).length,o=-1;if(e=n.classList){for(;++o<r;)if(!e.contains(t[o]))return!1}else for(e=n.getAttribute("class");++o<r;)if(!L(t[o]).test(e))return!1;return!0}for(e in t)this.each(q(e,t[e]));return this}return this.each(q(t,e))},Da.style=function(t,e,n){var r=arguments.length;if(3>r){if("string"!=typeof t){2>r&&(e="");for(n in t)this.each(z(n,t[n],e));return this}if(2>r){var o=this.node();return a(o).getComputedStyle(o,null).getPropertyValue(t)}n=""}return this.each(z(t,e,n))},Da.property=function(t,e){if(arguments.length<2){if("string"==typeof t)return this.node()[t];for(e in t)this.each(H(e,t[e]));return this}return this.each(H(t,e))},Da.text=function(t){return arguments.length?this.each("function"==typeof t?function(){var e=t.apply(this,arguments);this.textContent=null==e?"":e}:null==t?function(){this.textContent=""}:function(){this.textContent=t}):this.node().textContent},Da.html=function(t){return arguments.length?this.each("function"==typeof t?function(){var e=t.apply(this,arguments);this.innerHTML=null==e?"":e}:null==t?function(){this.innerHTML=""}:function(){this.innerHTML=t}):this.node().innerHTML},Da.append=function(t){return t=W(t),this.select(function(){return this.appendChild(t.apply(this,arguments))})},Da.insert=function(t,e){return t=W(t),e=P(e),this.select(function(){return this.insertBefore(t.apply(this,arguments),e.apply(this,arguments)||null)})},Da.remove=function(){return this.each(U)},Da.data=function(t,e){function n(t,n){var r,o,i,a=t.length,l=n.length,f=Math.min(a,l),h=new Array(l),p=new Array(l),g=new Array(a);if(e){var v,m=new d,y=new Array(a);for(r=-1;++r<a;)(o=t[r])&&(m.has(v=e.call(o,o.__data__,r))?g[r]=o:m.set(v,o),y[r]=v);for(r=-1;++r<l;)(o=m.get(v=e.call(n,i=n[r],r)))?o!==!0&&(h[r]=o,o.__data__=i):p[r]=$(i),m.set(v,!0);for(r=-1;++r<a;)r in y&&m.get(y[r])!==!0&&(g[r]=t[r])}else{for(r=-1;++r<f;)o=t[r],i=n[r],o?(o.__data__=i,h[r]=o):p[r]=$(i);for(;l>r;++r)p[r]=$(n[r]);for(;a>r;++r)g[r]=t[r]}p.update=h,p.parentNode=h.parentNode=g.parentNode=t.parentNode,u.push(p),s.push(h),c.push(g)}var r,o,i=-1,a=this.length;if(!arguments.length){for(t=new Array(a=(r=this[0]).length);++i<a;)(o=r[i])&&(t[i]=o.__data__);return t}var u=X([]),s=j([]),c=j([]);if("function"==typeof t)for(;++i<a;)n(r=this[i],t.call(r,r.parentNode.__data__,i));else for(;++i<a;)n(r=this[i],t);return s.enter=function(){return u},s.exit=function(){return c},s},Da.datum=function(t){return arguments.length?this.property("__data__",t):this.property("__data__")},Da.filter=function(t){var e,n,r,o=[];"function"!=typeof t&&(t=G(t));for(var i=0,a=this.length;a>i;i++){o.push(e=[]),e.parentNode=(n=this[i]).parentNode;for(var u=0,s=n.length;s>u;u++)(r=n[u])&&t.call(r,r.__data__,u,i)&&e.push(r)}return j(o)},Da.order=function(){for(var t=-1,e=this.length;++t<e;)for(var n,r=this[t],o=r.length-1,i=r[o];--o>=0;)(n=r[o])&&(i&&i!==n.nextSibling&&i.parentNode.insertBefore(n,i),i=n);return this},Da.sort=function(t){t=V.apply(this,arguments);for(var e=-1,n=this.length;++e<n;)this[e].sort(t);return this.order()},Da.each=function(t){return Y(this,function(e,n,r){t.call(e,e.__data__,n,r)})},Da.call=function(t){var e=ga(arguments);return t.apply(e[0]=this,e),this},Da.empty=function(){return!this.node()},Da.node=function(){for(var t=0,e=this.length;e>t;t++)for(var n=this[t],r=0,o=n.length;o>r;r++){var i=n[r];if(i)return i}return null},Da.size=function(){var t=0;return Y(this,function(){++t}),t};var Fa=[];pa.selection.enter=X,pa.selection.enter.prototype=Fa,Fa.append=Da.append,Fa.empty=Da.empty,Fa.node=Da.node,Fa.call=Da.call,Fa.size=Da.size,Fa.select=function(t){for(var e,n,r,o,i,a=[],u=-1,s=this.length;++u<s;){r=(o=this[u]).update,a.push(e=[]),e.parentNode=o.parentNode;for(var c=-1,l=o.length;++c<l;)(i=o[c])?(e.push(r[c]=n=t.call(o.parentNode,i.__data__,c,u)),n.__data__=i.__data__):e.push(null)}return j(a)},Fa.insert=function(t,e){return arguments.length<2&&(e=Z(this)),Da.insert.call(this,t,e)},pa.select=function(t){var e;return"string"==typeof t?(e=[Na(t,va)],e.parentNode=va.documentElement):(e=[t],e.parentNode=i(t)),j([e])},pa.selectAll=function(t){var e;return"string"==typeof t?(e=ga(ja(t,va)),e.parentNode=va.documentElement):(e=ga(t),e.parentNode=null),j([e])},Da.on=function(t,e,n){var r=arguments.length;if(3>r){if("string"!=typeof t){2>r&&(e=!1);for(n in t)this.each(K(n,t[n],e));return this}if(2>r)return(r=this.node()["__on"+t])&&r._;n=!1}return this.each(K(t,e,n))};var La=pa.map({mouseenter:"mouseover",mouseleave:"mouseout"});va&&La.forEach(function(t){"on"+t in va&&La.remove(t)});var Ia,qa=0;pa.mouse=function(t){return et(t,O())};var Ba=this.navigator&&/WebKit/.test(this.navigator.userAgent)?-1:0;pa.touch=function(t,e,n){if(arguments.length<3&&(n=e,e=O().changedTouches),e)for(var r,o=0,i=e.length;i>o;++o)if((r=e[o]).identifier===n)return et(t,r)},pa.behavior.drag=function(){function t(){this.on("mousedown.drag",o).on("touchstart.drag",i)}function e(t,e,o,i,a){return function(){function u(){var t,n,r=e(h,g);r&&(t=r[0]-b[0],n=r[1]-b[1],d|=t|n,b=r,p({type:"drag",x:r[0]+c[0],y:r[1]+c[1],dx:t,dy:n}))}function s(){e(h,g)&&(m.on(i+v,null).on(a+v,null),y(d),p({type:"dragend"}))}var c,l=this,f=pa.event.target,h=l.parentNode,p=n.of(l,arguments),d=0,g=t(),v=".drag"+(null==g?"":"-"+g),m=pa.select(o(f)).on(i+v,u).on(a+v,s),y=tt(f),b=e(h,g);r?(c=r.apply(l,arguments),c=[c.x-b[0],c.y-b[1]]):c=[0,0],p({type:"dragstart"})}}var n=N(t,"drag","dragstart","dragend"),r=null,o=e(_,pa.mouse,a,"mousemove","mouseup"),i=e(nt,pa.touch,k,"touchmove","touchend");return t.origin=function(e){return arguments.length?(r=e,t):r},pa.rebind(t,n,"on")},pa.touches=function(t,e){return arguments.length<2&&(e=O().touches),e?ga(e).map(function(e){var n=et(t,e);return n.identifier=e.identifier,n}):[]};var za=1e-6,Ha=za*za,Wa=Math.PI,Ua=2*Wa,$a=Ua-za,Ga=Wa/2,Va=Wa/180,Ya=180/Wa,Xa=Math.SQRT2,Za=2,Ka=4;pa.interpolateZoom=function(t,e){var n,r,o=t[0],i=t[1],a=t[2],u=e[0],s=e[1],c=e[2],l=u-o,f=s-i,h=l*l+f*f;if(Ha>h)r=Math.log(c/a)/Xa,n=function(t){return[o+t*l,i+t*f,a*Math.exp(Xa*t*r)]};else{var p=Math.sqrt(h),d=(c*c-a*a+Ka*h)/(2*a*Za*p),g=(c*c-a*a-Ka*h)/(2*c*Za*p),v=Math.log(Math.sqrt(d*d+1)-d),m=Math.log(Math.sqrt(g*g+1)-g);r=(m-v)/Xa,n=function(t){var e=t*r,n=st(v),u=a/(Za*p)*(n*ct(Xa*e+v)-ut(v));return[o+u*l,i+u*f,a*n/st(Xa*e+v)]}}return n.duration=1e3*r,n},pa.behavior.zoom=function(){function t(t){t.on(O,f).on(Qa+".zoom",p).on("dblclick.zoom",d).on(D,h)}function e(t){return[(t[0]-C.x)/C.k,(t[1]-C.y)/C.k]}function n(t){return[t[0]*C.k+C.x,t[1]*C.k+C.y]}function r(t){C.k=Math.max(_[0],Math.min(_[1],t))}function o(t,e){e=n(e),C.x+=t[0]-e[0],C.y+=t[1]-e[1]}function i(e,n,i,a){e.__chart__={x:C.x,y:C.y,k:C.k},r(Math.pow(2,a)),o(v=n,i),e=pa.select(e),E>0&&(e=e.transition().duration(E)),e.call(t.event)}function u(){w&&w.domain(x.range().map(function(t){return(t-C.x)/C.k}).map(x.invert)),k&&k.domain(M.range().map(function(t){return(t-C.y)/C.k}).map(M.invert))}function s(t){T++||t({type:"zoomstart"})}function c(t){u(),t({type:"zoom",scale:C.k,translate:[C.x,C.y]})}function l(t){--T||(t({type:"zoomend"}),v=null)}function f(){function t(){u=1,o(pa.mouse(r),h),c(i)}function n(){f.on(j,null).on(P,null),p(u),l(i)}var r=this,i=R.of(r,arguments),u=0,f=pa.select(a(r)).on(j,t).on(P,n),h=e(pa.mouse(r)),p=tt(r);Gs.call(r),s(i)}function h(){function t(){var t=pa.touches(d);return p=C.k,t.forEach(function(t){t.identifier in v&&(v[t.identifier]=e(t))}),t}function n(){var e=pa.event.target;pa.select(e).on(x,a).on(w,u),M.push(e);for(var n=pa.event.changedTouches,r=0,o=n.length;o>r;++r)v[n[r].identifier]=null;var s=t(),c=Date.now();if(1===s.length){if(500>c-b){var l=s[0];i(d,l,v[l.identifier],Math.floor(Math.log(C.k)/Math.LN2)+1),A()}b=c}else if(s.length>1){var l=s[0],f=s[1],h=l[0]-f[0],p=l[1]-f[1];m=h*h+p*p}}function a(){var t,e,n,i,a=pa.touches(d);Gs.call(d);for(var u=0,s=a.length;s>u;++u,i=null)if(n=a[u],i=v[n.identifier]){if(e)break;t=n,e=i}if(i){var l=(l=n[0]-t[0])*l+(l=n[1]-t[1])*l,f=m&&Math.sqrt(l/m);t=[(t[0]+n[0])/2,(t[1]+n[1])/2],e=[(e[0]+i[0])/2,(e[1]+i[1])/2],r(f*p)}b=null,o(t,e),c(g)}function u(){if(pa.event.touches.length){for(var e=pa.event.changedTouches,n=0,r=e.length;r>n;++n)delete v[e[n].identifier];for(var o in v)return void t()}pa.selectAll(M).on(y,null),k.on(O,f).on(D,h),S(),l(g)}var p,d=this,g=R.of(d,arguments),v={},m=0,y=".zoom-"+pa.event.changedTouches[0].identifier,x="touchmove"+y,w="touchend"+y,M=[],k=pa.select(d),S=tt(d);n(),s(g),k.on(O,null).on(D,n)}function p(){var t=R.of(this,arguments);y?clearTimeout(y):(Gs.call(this),g=e(v=m||pa.mouse(this)),s(t)),y=setTimeout(function(){y=null,l(t)},50),A(),r(Math.pow(2,.002*Ja())*C.k),o(v,g),c(t)}function d(){var t=pa.mouse(this),n=Math.log(C.k)/Math.LN2;i(this,t,e(t),pa.event.shiftKey?Math.ceil(n)-1:Math.floor(n)+1)}var g,v,m,y,b,x,w,M,k,C={x:0,y:0,k:1},S=[960,500],_=tu,E=250,T=0,O="mousedown.zoom",j="mousemove.zoom",P="mouseup.zoom",D="touchstart.zoom",R=N(t,"zoomstart","zoom","zoomend");return Qa||(Qa="onwheel"in va?(Ja=function(){return-pa.event.deltaY*(pa.event.deltaMode?120:1)},"wheel"):"onmousewheel"in va?(Ja=function(){return pa.event.wheelDelta},"mousewheel"):(Ja=function(){return-pa.event.detail},"MozMousePixelScroll")),t.event=function(t){t.each(function(){var t=R.of(this,arguments),e=C;Us?pa.select(this).transition().each("start.zoom",function(){C=this.__chart__||{x:0,y:0,k:1},s(t)}).tween("zoom:zoom",function(){var n=S[0],r=S[1],o=v?v[0]:n/2,i=v?v[1]:r/2,a=pa.interpolateZoom([(o-C.x)/C.k,(i-C.y)/C.k,n/C.k],[(o-e.x)/e.k,(i-e.y)/e.k,n/e.k]);return function(e){var r=a(e),u=n/r[2];this.__chart__=C={x:o-r[0]*u,y:i-r[1]*u,k:u},c(t)}}).each("interrupt.zoom",function(){l(t)}).each("end.zoom",function(){l(t)}):(this.__chart__=C,s(t),c(t),l(t))})},t.translate=function(e){return arguments.length?(C={x:+e[0],y:+e[1],k:C.k},u(),t):[C.x,C.y]},t.scale=function(e){return arguments.length?(C={x:C.x,y:C.y,k:null},r(+e),u(),t):C.k},t.scaleExtent=function(e){return arguments.length?(_=null==e?tu:[+e[0],+e[1]],t):_},t.center=function(e){return arguments.length?(m=e&&[+e[0],+e[1]],t):m},t.size=function(e){return arguments.length?(S=e&&[+e[0],+e[1]],t):S},t.duration=function(e){return arguments.length?(E=+e,t):E},t.x=function(e){return arguments.length?(w=e,x=e.copy(),C={x:0,y:0,k:1},t):w},t.y=function(e){return arguments.length?(k=e,M=e.copy(),C={x:0,y:0,k:1},t):k},pa.rebind(t,R,"on")};var Ja,Qa,tu=[0,1/0];pa.color=ft,ft.prototype.toString=function(){return this.rgb()+""},pa.hsl=ht;var eu=ht.prototype=new ft;eu.brighter=function(t){return t=Math.pow(.7,arguments.length?t:1),new ht(this.h,this.s,this.l/t)},eu.darker=function(t){return t=Math.pow(.7,arguments.length?t:1),new ht(this.h,this.s,t*this.l)},eu.rgb=function(){return pt(this.h,this.s,this.l)},pa.hcl=dt;var nu=dt.prototype=new ft;nu.brighter=function(t){return new dt(this.h,this.c,Math.min(100,this.l+ru*(arguments.length?t:1)))},nu.darker=function(t){return new dt(this.h,this.c,Math.max(0,this.l-ru*(arguments.length?t:1)))},nu.rgb=function(){return gt(this.h,this.c,this.l).rgb()},pa.lab=vt;var ru=18,ou=.95047,iu=1,au=1.08883,uu=vt.prototype=new ft;uu.brighter=function(t){return new vt(Math.min(100,this.l+ru*(arguments.length?t:1)),this.a,this.b)},uu.darker=function(t){return new vt(Math.max(0,this.l-ru*(arguments.length?t:1)),this.a,this.b)},uu.rgb=function(){return mt(this.l,this.a,this.b)},pa.rgb=Mt;var su=Mt.prototype=new ft;su.brighter=function(t){t=Math.pow(.7,arguments.length?t:1);var e=this.r,n=this.g,r=this.b,o=30;return e||n||r?(e&&o>e&&(e=o),n&&o>n&&(n=o),r&&o>r&&(r=o),new Mt(Math.min(255,e/t),Math.min(255,n/t),Math.min(255,r/t))):new Mt(o,o,o)},su.darker=function(t){return t=Math.pow(.7,arguments.length?t:1),new Mt(t*this.r,t*this.g,t*this.b)},su.hsl=function(){return Et(this.r,this.g,this.b)},su.toString=function(){return"#"+St(this.r)+St(this.g)+St(this.b)};var cu=pa.map({aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074});cu.forEach(function(t,e){cu.set(t,kt(e))}),pa.functor=Nt,pa.xhr=jt(k),pa.dsv=function(t,e){function n(t,n,i){arguments.length<3&&(i=n,n=null);var a=Pt(t,e,null==n?r:o(n),i);return a.row=function(t){return arguments.length?a.response(null==(n=t)?r:o(t)):n},a}function r(t){return n.parse(t.responseText)}function o(t){return function(e){return n.parse(e.responseText,t)}}function i(e){return e.map(a).join(t)}function a(t){return u.test(t)?'"'+t.replace(/\"/g,'""')+'"':t}var u=new RegExp('["'+t+"\n]"),s=t.charCodeAt(0);return n.parse=function(t,e){var r;return n.parseRows(t,function(t,n){if(r)return r(t,n-1);var o=new Function("d","return {"+t.map(function(t,e){return JSON.stringify(t)+": d["+e+"]"}).join(",")+"}");r=e?function(t,n){return e(o(t),n)}:o})},n.parseRows=function(t,e){function n(){if(l>=c)return a;if(o)return o=!1,i;var e=l;if(34===t.charCodeAt(e)){for(var n=e;n++<c;)if(34===t.charCodeAt(n)){if(34!==t.charCodeAt(n+1))break;++n}l=n+2;var r=t.charCodeAt(n+1);return 13===r?(o=!0,10===t.charCodeAt(n+2)&&++l):10===r&&(o=!0),t.slice(e+1,n).replace(/""/g,'"')}for(;c>l;){var r=t.charCodeAt(l++),u=1;if(10===r)o=!0;else if(13===r)o=!0,10===t.charCodeAt(l)&&(++l,++u);else if(r!==s)continue;return t.slice(e,l-u)}return t.slice(e)}for(var r,o,i={},a={},u=[],c=t.length,l=0,f=0;(r=n())!==a;){for(var h=[];r!==i&&r!==a;)h.push(r),r=n();e&&null==(h=e(h,f++))||u.push(h)}return u},n.format=function(e){if(Array.isArray(e[0]))return n.formatRows(e);var r=new M,o=[];return e.forEach(function(t){for(var e in t)r.has(e)||o.push(r.add(e))}),[o.map(a).join(t)].concat(e.map(function(e){return o.map(function(t){return a(e[t])}).join(t)})).join("\n")},n.formatRows=function(t){return t.map(i).join("\n")},n},pa.csv=pa.dsv(",","text/csv"),pa.tsv=pa.dsv("	","text/tab-separated-values");var lu,fu,hu,pu,du=this[S(this,"requestAnimationFrame")]||function(t){setTimeout(t,17)};pa.timer=function(){Ft.apply(this,arguments)},pa.timer.flush=function(){It(),qt()},pa.round=function(t,e){return e?Math.round(t*(e=Math.pow(10,e)))/e:Math.round(t)};var gu=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"].map(zt);pa.formatPrefix=function(t,e){var n=0;return(t=+t)&&(0>t&&(t*=-1),e&&(t=pa.round(t,Bt(t,e))),n=1+Math.floor(1e-12+Math.log(t)/Math.LN10),n=Math.max(-24,Math.min(24,3*Math.floor((n-1)/3)))),gu[8+n/3]};var vu=/(?:([^{])?([<>=^]))?([+\- ])?([$#])?(0)?(\d+)?(,)?(\.-?\d+)?([a-z%])?/i,mu=pa.map({b:function(t){return t.toString(2)},c:function(t){
return String.fromCharCode(t)},o:function(t){return t.toString(8)},x:function(t){return t.toString(16)},X:function(t){return t.toString(16).toUpperCase()},g:function(t,e){return t.toPrecision(e)},e:function(t,e){return t.toExponential(e)},f:function(t,e){return t.toFixed(e)},r:function(t,e){return(t=pa.round(t,Bt(t,e))).toFixed(Math.max(0,Math.min(20,Bt(t*(1+1e-15),e))))}}),yu=pa.time={},bu=Date;Ut.prototype={getDate:function(){return this._.getUTCDate()},getDay:function(){return this._.getUTCDay()},getFullYear:function(){return this._.getUTCFullYear()},getHours:function(){return this._.getUTCHours()},getMilliseconds:function(){return this._.getUTCMilliseconds()},getMinutes:function(){return this._.getUTCMinutes()},getMonth:function(){return this._.getUTCMonth()},getSeconds:function(){return this._.getUTCSeconds()},getTime:function(){return this._.getTime()},getTimezoneOffset:function(){return 0},valueOf:function(){return this._.valueOf()},setDate:function(){xu.setUTCDate.apply(this._,arguments)},setDay:function(){xu.setUTCDay.apply(this._,arguments)},setFullYear:function(){xu.setUTCFullYear.apply(this._,arguments)},setHours:function(){xu.setUTCHours.apply(this._,arguments)},setMilliseconds:function(){xu.setUTCMilliseconds.apply(this._,arguments)},setMinutes:function(){xu.setUTCMinutes.apply(this._,arguments)},setMonth:function(){xu.setUTCMonth.apply(this._,arguments)},setSeconds:function(){xu.setUTCSeconds.apply(this._,arguments)},setTime:function(){xu.setTime.apply(this._,arguments)}};var xu=Date.prototype;yu.year=$t(function(t){return t=yu.day(t),t.setMonth(0,1),t},function(t,e){t.setFullYear(t.getFullYear()+e)},function(t){return t.getFullYear()}),yu.years=yu.year.range,yu.years.utc=yu.year.utc.range,yu.day=$t(function(t){var e=new bu(2e3,0);return e.setFullYear(t.getFullYear(),t.getMonth(),t.getDate()),e},function(t,e){t.setDate(t.getDate()+e)},function(t){return t.getDate()-1}),yu.days=yu.day.range,yu.days.utc=yu.day.utc.range,yu.dayOfYear=function(t){var e=yu.year(t);return Math.floor((t-e-6e4*(t.getTimezoneOffset()-e.getTimezoneOffset()))/864e5)},["sunday","monday","tuesday","wednesday","thursday","friday","saturday"].forEach(function(t,e){e=7-e;var n=yu[t]=$t(function(t){return(t=yu.day(t)).setDate(t.getDate()-(t.getDay()+e)%7),t},function(t,e){t.setDate(t.getDate()+7*Math.floor(e))},function(t){var n=yu.year(t).getDay();return Math.floor((yu.dayOfYear(t)+(n+e)%7)/7)-(n!==e)});yu[t+"s"]=n.range,yu[t+"s"].utc=n.utc.range,yu[t+"OfYear"]=function(t){var n=yu.year(t).getDay();return Math.floor((yu.dayOfYear(t)+(n+e)%7)/7)}}),yu.week=yu.sunday,yu.weeks=yu.sunday.range,yu.weeks.utc=yu.sunday.utc.range,yu.weekOfYear=yu.sundayOfYear;var wu={"-":"",_:" ",0:"0"},Mu=/^\s*\d+/,ku=/^%/;pa.locale=function(t){return{numberFormat:Ht(t),timeFormat:Vt(t)}};var Cu=pa.locale({decimal:".",thousands:",",grouping:[3],currency:["$",""],dateTime:"%a %b %e %X %Y",date:"%m/%d/%Y",time:"%H:%M:%S",periods:["AM","PM"],days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]});pa.format=Cu.numberFormat,pa.geo={},de.prototype={s:0,t:0,add:function(t){ge(t,this.t,Su),ge(Su.s,this.s,this),this.s?this.t+=Su.t:this.s=Su.t},reset:function(){this.s=this.t=0},valueOf:function(){return this.s}};var Su=new de;pa.geo.stream=function(t,e){t&&_u.hasOwnProperty(t.type)?_u[t.type](t,e):ve(t,e)};var _u={Feature:function(t,e){ve(t.geometry,e)},FeatureCollection:function(t,e){for(var n=t.features,r=-1,o=n.length;++r<o;)ve(n[r].geometry,e)}},Eu={Sphere:function(t,e){e.sphere()},Point:function(t,e){t=t.coordinates,e.point(t[0],t[1],t[2])},MultiPoint:function(t,e){for(var n=t.coordinates,r=-1,o=n.length;++r<o;)t=n[r],e.point(t[0],t[1],t[2])},LineString:function(t,e){me(t.coordinates,e,0)},MultiLineString:function(t,e){for(var n=t.coordinates,r=-1,o=n.length;++r<o;)me(n[r],e,0)},Polygon:function(t,e){ye(t.coordinates,e)},MultiPolygon:function(t,e){for(var n=t.coordinates,r=-1,o=n.length;++r<o;)ye(n[r],e)},GeometryCollection:function(t,e){for(var n=t.geometries,r=-1,o=n.length;++r<o;)ve(n[r],e)}};pa.geo.area=function(t){return Tu=0,pa.geo.stream(t,Ou),Tu};var Tu,Au=new de,Ou={sphere:function(){Tu+=4*Wa},point:_,lineStart:_,lineEnd:_,polygonStart:function(){Au.reset(),Ou.lineStart=be},polygonEnd:function(){var t=2*Au;Tu+=0>t?4*Wa+t:t,Ou.lineStart=Ou.lineEnd=Ou.point=_}};pa.geo.bounds=function(){function t(t,e){b.push(x=[l=t,h=t]),f>e&&(f=e),e>p&&(p=e)}function e(e,n){var r=xe([e*Va,n*Va]);if(m){var o=Me(m,r),i=[o[1],-o[0],0],a=Me(i,o);Se(a),a=_e(a);var s=e-d,c=s>0?1:-1,g=a[0]*Ya*c,v=Sa(s)>180;if(v^(g>c*d&&c*e>g)){var y=a[1]*Ya;y>p&&(p=y)}else if(g=(g+360)%360-180,v^(g>c*d&&c*e>g)){var y=-a[1]*Ya;f>y&&(f=y)}else f>n&&(f=n),n>p&&(p=n);v?d>e?u(l,e)>u(l,h)&&(h=e):u(e,h)>u(l,h)&&(l=e):h>=l?(l>e&&(l=e),e>h&&(h=e)):e>d?u(l,e)>u(l,h)&&(h=e):u(e,h)>u(l,h)&&(l=e)}else t(e,n);m=r,d=e}function n(){w.point=e}function r(){x[0]=l,x[1]=h,w.point=t,m=null}function o(t,n){if(m){var r=t-d;y+=Sa(r)>180?r+(r>0?360:-360):r}else g=t,v=n;Ou.point(t,n),e(t,n)}function i(){Ou.lineStart()}function a(){o(g,v),Ou.lineEnd(),Sa(y)>za&&(l=-(h=180)),x[0]=l,x[1]=h,m=null}function u(t,e){return(e-=t)<0?e+360:e}function s(t,e){return t[0]-e[0]}function c(t,e){return e[0]<=e[1]?e[0]<=t&&t<=e[1]:t<e[0]||e[1]<t}var l,f,h,p,d,g,v,m,y,b,x,w={point:t,lineStart:n,lineEnd:r,polygonStart:function(){w.point=o,w.lineStart=i,w.lineEnd=a,y=0,Ou.polygonStart()},polygonEnd:function(){Ou.polygonEnd(),w.point=t,w.lineStart=n,w.lineEnd=r,0>Au?(l=-(h=180),f=-(p=90)):y>za?p=90:-za>y&&(f=-90),x[0]=l,x[1]=h}};return function(t){p=h=-(l=f=1/0),b=[],pa.geo.stream(t,w);var e=b.length;if(e){b.sort(s);for(var n,r=1,o=b[0],i=[o];e>r;++r)n=b[r],c(n[0],o)||c(n[1],o)?(u(o[0],n[1])>u(o[0],o[1])&&(o[1]=n[1]),u(n[0],o[1])>u(o[0],o[1])&&(o[0]=n[0])):i.push(o=n);for(var a,n,d=-(1/0),e=i.length-1,r=0,o=i[e];e>=r;o=n,++r)n=i[r],(a=u(o[1],n[0]))>d&&(d=a,l=n[0],h=o[1])}return b=x=null,l===1/0||f===1/0?[[NaN,NaN],[NaN,NaN]]:[[l,f],[h,p]]}}(),pa.geo.centroid=function(t){Nu=ju=Pu=Du=Ru=Fu=Lu=Iu=qu=Bu=zu=0,pa.geo.stream(t,Hu);var e=qu,n=Bu,r=zu,o=e*e+n*n+r*r;return Ha>o&&(e=Fu,n=Lu,r=Iu,za>ju&&(e=Pu,n=Du,r=Ru),o=e*e+n*n+r*r,Ha>o)?[NaN,NaN]:[Math.atan2(n,e)*Ya,at(r/Math.sqrt(o))*Ya]};var Nu,ju,Pu,Du,Ru,Fu,Lu,Iu,qu,Bu,zu,Hu={sphere:_,point:Te,lineStart:Oe,lineEnd:Ne,polygonStart:function(){Hu.lineStart=je},polygonEnd:function(){Hu.lineStart=Oe}},Wu=Ie(De,He,Ue,[-Wa,-Wa/2]),Uu=1e9;pa.geo.clipExtent=function(){var t,e,n,r,o,i,a={stream:function(t){return o&&(o.valid=!1),o=i(t),o.valid=!0,o},extent:function(u){return arguments.length?(i=Ye(t=+u[0][0],e=+u[0][1],n=+u[1][0],r=+u[1][1]),o&&(o.valid=!1,o=null),a):[[t,e],[n,r]]}};return a.extent([[0,0],[960,500]])},(pa.geo.conicEqualArea=function(){return Xe(Ze)}).raw=Ze,pa.geo.albers=function(){return pa.geo.conicEqualArea().rotate([96,0]).center([-.6,38.7]).parallels([29.5,45.5]).scale(1070)},pa.geo.albersUsa=function(){function t(t){var i=t[0],a=t[1];return e=null,n(i,a),e||(r(i,a),e)||o(i,a),e}var e,n,r,o,i=pa.geo.albers(),a=pa.geo.conicEqualArea().rotate([154,0]).center([-2,58.5]).parallels([55,65]),u=pa.geo.conicEqualArea().rotate([157,0]).center([-3,19.9]).parallels([8,18]),s={point:function(t,n){e=[t,n]}};return t.invert=function(t){var e=i.scale(),n=i.translate(),r=(t[0]-n[0])/e,o=(t[1]-n[1])/e;return(o>=.12&&.234>o&&r>=-.425&&-.214>r?a:o>=.166&&.234>o&&r>=-.214&&-.115>r?u:i).invert(t)},t.stream=function(t){var e=i.stream(t),n=a.stream(t),r=u.stream(t);return{point:function(t,o){e.point(t,o),n.point(t,o),r.point(t,o)},sphere:function(){e.sphere(),n.sphere(),r.sphere()},lineStart:function(){e.lineStart(),n.lineStart(),r.lineStart()},lineEnd:function(){e.lineEnd(),n.lineEnd(),r.lineEnd()},polygonStart:function(){e.polygonStart(),n.polygonStart(),r.polygonStart()},polygonEnd:function(){e.polygonEnd(),n.polygonEnd(),r.polygonEnd()}}},t.precision=function(e){return arguments.length?(i.precision(e),a.precision(e),u.precision(e),t):i.precision()},t.scale=function(e){return arguments.length?(i.scale(e),a.scale(.35*e),u.scale(e),t.translate(i.translate())):i.scale()},t.translate=function(e){if(!arguments.length)return i.translate();var c=i.scale(),l=+e[0],f=+e[1];return n=i.translate(e).clipExtent([[l-.455*c,f-.238*c],[l+.455*c,f+.238*c]]).stream(s).point,r=a.translate([l-.307*c,f+.201*c]).clipExtent([[l-.425*c+za,f+.12*c+za],[l-.214*c-za,f+.234*c-za]]).stream(s).point,o=u.translate([l-.205*c,f+.212*c]).clipExtent([[l-.214*c+za,f+.166*c+za],[l-.115*c-za,f+.234*c-za]]).stream(s).point,t},t.scale(1070)};var $u,Gu,Vu,Yu,Xu,Zu,Ku={point:_,lineStart:_,lineEnd:_,polygonStart:function(){Gu=0,Ku.lineStart=Ke},polygonEnd:function(){Ku.lineStart=Ku.lineEnd=Ku.point=_,$u+=Sa(Gu/2)}},Ju={point:Je,lineStart:_,lineEnd:_,polygonStart:_,polygonEnd:_},Qu={point:en,lineStart:nn,lineEnd:rn,polygonStart:function(){Qu.lineStart=on},polygonEnd:function(){Qu.point=en,Qu.lineStart=nn,Qu.lineEnd=rn}};pa.geo.path=function(){function t(t){return t&&("function"==typeof u&&i.pointRadius(+u.apply(this,arguments)),a&&a.valid||(a=o(i)),pa.geo.stream(t,a)),i.result()}function e(){return a=null,t}var n,r,o,i,a,u=4.5;return t.area=function(t){return $u=0,pa.geo.stream(t,o(Ku)),$u},t.centroid=function(t){return Pu=Du=Ru=Fu=Lu=Iu=qu=Bu=zu=0,pa.geo.stream(t,o(Qu)),zu?[qu/zu,Bu/zu]:Iu?[Fu/Iu,Lu/Iu]:Ru?[Pu/Ru,Du/Ru]:[NaN,NaN]},t.bounds=function(t){return Xu=Zu=-(Vu=Yu=1/0),pa.geo.stream(t,o(Ju)),[[Vu,Yu],[Xu,Zu]]},t.projection=function(t){return arguments.length?(o=(n=t)?t.stream||sn(t):k,e()):n},t.context=function(t){return arguments.length?(i=null==(r=t)?new Qe:new an(t),"function"!=typeof u&&i.pointRadius(u),e()):r},t.pointRadius=function(e){return arguments.length?(u="function"==typeof e?e:(i.pointRadius(+e),+e),t):u},t.projection(pa.geo.albersUsa()).context(null)},pa.geo.transform=function(t){return{stream:function(e){var n=new cn(e);for(var r in t)n[r]=t[r];return n}}},cn.prototype={point:function(t,e){this.stream.point(t,e)},sphere:function(){this.stream.sphere()},lineStart:function(){this.stream.lineStart()},lineEnd:function(){this.stream.lineEnd()},polygonStart:function(){this.stream.polygonStart()},polygonEnd:function(){this.stream.polygonEnd()}},pa.geo.projection=fn,pa.geo.projectionMutator=hn,(pa.geo.equirectangular=function(){return fn(dn)}).raw=dn.invert=dn,pa.geo.rotation=function(t){function e(e){return e=t(e[0]*Va,e[1]*Va),e[0]*=Ya,e[1]*=Ya,e}return t=vn(t[0]%360*Va,t[1]*Va,t.length>2?t[2]*Va:0),e.invert=function(e){return e=t.invert(e[0]*Va,e[1]*Va),e[0]*=Ya,e[1]*=Ya,e},e},gn.invert=dn,pa.geo.circle=function(){function t(){var t="function"==typeof r?r.apply(this,arguments):r,e=vn(-t[0]*Va,-t[1]*Va,0).invert,o=[];return n(null,null,1,{point:function(t,n){o.push(t=e(t,n)),t[0]*=Ya,t[1]*=Ya}}),{type:"Polygon",coordinates:[o]}}var e,n,r=[0,0],o=6;return t.origin=function(e){return arguments.length?(r=e,t):r},t.angle=function(r){return arguments.length?(n=xn((e=+r)*Va,o*Va),t):e},t.precision=function(r){return arguments.length?(n=xn(e*Va,(o=+r)*Va),t):o},t.angle(90)},pa.geo.distance=function(t,e){var n,r=(e[0]-t[0])*Va,o=t[1]*Va,i=e[1]*Va,a=Math.sin(r),u=Math.cos(r),s=Math.sin(o),c=Math.cos(o),l=Math.sin(i),f=Math.cos(i);return Math.atan2(Math.sqrt((n=f*a)*n+(n=c*l-s*f*u)*n),s*l+c*f*u)},pa.geo.graticule=function(){function t(){return{type:"MultiLineString",coordinates:e()}}function e(){return pa.range(Math.ceil(i/v)*v,o,v).map(h).concat(pa.range(Math.ceil(c/m)*m,s,m).map(p)).concat(pa.range(Math.ceil(r/d)*d,n,d).filter(function(t){return Sa(t%v)>za}).map(l)).concat(pa.range(Math.ceil(u/g)*g,a,g).filter(function(t){return Sa(t%m)>za}).map(f))}var n,r,o,i,a,u,s,c,l,f,h,p,d=10,g=d,v=90,m=360,y=2.5;return t.lines=function(){return e().map(function(t){return{type:"LineString",coordinates:t}})},t.outline=function(){return{type:"Polygon",coordinates:[h(i).concat(p(s).slice(1),h(o).reverse().slice(1),p(c).reverse().slice(1))]}},t.extent=function(e){return arguments.length?t.majorExtent(e).minorExtent(e):t.minorExtent()},t.majorExtent=function(e){return arguments.length?(i=+e[0][0],o=+e[1][0],c=+e[0][1],s=+e[1][1],i>o&&(e=i,i=o,o=e),c>s&&(e=c,c=s,s=e),t.precision(y)):[[i,c],[o,s]]},t.minorExtent=function(e){return arguments.length?(r=+e[0][0],n=+e[1][0],u=+e[0][1],a=+e[1][1],r>n&&(e=r,r=n,n=e),u>a&&(e=u,u=a,a=e),t.precision(y)):[[r,u],[n,a]]},t.step=function(e){return arguments.length?t.majorStep(e).minorStep(e):t.minorStep()},t.majorStep=function(e){return arguments.length?(v=+e[0],m=+e[1],t):[v,m]},t.minorStep=function(e){return arguments.length?(d=+e[0],g=+e[1],t):[d,g]},t.precision=function(e){return arguments.length?(y=+e,l=Mn(u,a,90),f=kn(r,n,y),h=Mn(c,s,90),p=kn(i,o,y),t):y},t.majorExtent([[-180,-90+za],[180,90-za]]).minorExtent([[-180,-80-za],[180,80+za]])},pa.geo.greatArc=function(){function t(){return{type:"LineString",coordinates:[e||r.apply(this,arguments),n||o.apply(this,arguments)]}}var e,n,r=Cn,o=Sn;return t.distance=function(){return pa.geo.distance(e||r.apply(this,arguments),n||o.apply(this,arguments))},t.source=function(n){return arguments.length?(r=n,e="function"==typeof n?null:n,t):r},t.target=function(e){return arguments.length?(o=e,n="function"==typeof e?null:e,t):o},t.precision=function(){return arguments.length?t:0},t},pa.geo.interpolate=function(t,e){return _n(t[0]*Va,t[1]*Va,e[0]*Va,e[1]*Va)},pa.geo.length=function(t){return ts=0,pa.geo.stream(t,es),ts};var ts,es={sphere:_,point:_,lineStart:En,lineEnd:_,polygonStart:_,polygonEnd:_},ns=Tn(function(t){return Math.sqrt(2/(1+t))},function(t){return 2*Math.asin(t/2)});(pa.geo.azimuthalEqualArea=function(){return fn(ns)}).raw=ns;var rs=Tn(function(t){var e=Math.acos(t);return e&&e/Math.sin(e)},k);(pa.geo.azimuthalEquidistant=function(){return fn(rs)}).raw=rs,(pa.geo.conicConformal=function(){return Xe(An)}).raw=An,(pa.geo.conicEquidistant=function(){return Xe(On)}).raw=On;var os=Tn(function(t){return 1/t},Math.atan);(pa.geo.gnomonic=function(){return fn(os)}).raw=os,Nn.invert=function(t,e){return[t,2*Math.atan(Math.exp(e))-Ga]},(pa.geo.mercator=function(){return jn(Nn)}).raw=Nn;var is=Tn(function(){return 1},Math.asin);(pa.geo.orthographic=function(){return fn(is)}).raw=is;var as=Tn(function(t){return 1/(1+t)},function(t){return 2*Math.atan(t)});(pa.geo.stereographic=function(){return fn(as)}).raw=as,Pn.invert=function(t,e){return[-e,2*Math.atan(Math.exp(t))-Ga]},(pa.geo.transverseMercator=function(){var t=jn(Pn),e=t.center,n=t.rotate;return t.center=function(t){return t?e([-t[1],t[0]]):(t=e(),[t[1],-t[0]])},t.rotate=function(t){return t?n([t[0],t[1],t.length>2?t[2]+90:90]):(t=n(),[t[0],t[1],t[2]-90])},n([0,0,90])}).raw=Pn,pa.geom={},pa.geom.hull=function(t){function e(t){if(t.length<3)return[];var e,o=Nt(n),i=Nt(r),a=t.length,u=[],s=[];for(e=0;a>e;e++)u.push([+o.call(this,t[e],e),+i.call(this,t[e],e),e]);for(u.sort(Ln),e=0;a>e;e++)s.push([u[e][0],-u[e][1]]);var c=Fn(u),l=Fn(s),f=l[0]===c[0],h=l[l.length-1]===c[c.length-1],p=[];for(e=c.length-1;e>=0;--e)p.push(t[u[c[e]][2]]);for(e=+f;e<l.length-h;++e)p.push(t[u[l[e]][2]]);return p}var n=Dn,r=Rn;return arguments.length?e(t):(e.x=function(t){return arguments.length?(n=t,e):n},e.y=function(t){return arguments.length?(r=t,e):r},e)},pa.geom.polygon=function(t){return Oa(t,us),t};var us=pa.geom.polygon.prototype=[];us.area=function(){for(var t,e=-1,n=this.length,r=this[n-1],o=0;++e<n;)t=r,r=this[e],o+=t[1]*r[0]-t[0]*r[1];return.5*o},us.centroid=function(t){var e,n,r=-1,o=this.length,i=0,a=0,u=this[o-1];for(arguments.length||(t=-1/(6*this.area()));++r<o;)e=u,u=this[r],n=e[0]*u[1]-u[0]*e[1],i+=(e[0]+u[0])*n,a+=(e[1]+u[1])*n;return[i*t,a*t]},us.clip=function(t){for(var e,n,r,o,i,a,u=Bn(t),s=-1,c=this.length-Bn(this),l=this[c-1];++s<c;){for(e=t.slice(),t.length=0,o=this[s],i=e[(r=e.length-u)-1],n=-1;++n<r;)a=e[n],In(a,l,o)?(In(i,l,o)||t.push(qn(i,a,l,o)),t.push(a)):In(i,l,o)&&t.push(qn(i,a,l,o)),i=a;u&&t.push(t[0]),l=o}return t};var ss,cs,ls,fs,hs,ps=[],ds=[];Yn.prototype.prepare=function(){for(var t,e=this.edges,n=e.length;n--;)t=e[n].edge,t.b&&t.a||e.splice(n,1);return e.sort(Zn),e.length},ar.prototype={start:function(){return this.edge.l===this.site?this.edge.a:this.edge.b},end:function(){return this.edge.l===this.site?this.edge.b:this.edge.a}},ur.prototype={insert:function(t,e){var n,r,o;if(t){if(e.P=t,e.N=t.N,t.N&&(t.N.P=e),t.N=e,t.R){for(t=t.R;t.L;)t=t.L;t.L=e}else t.R=e;n=t}else this._?(t=fr(this._),e.P=null,e.N=t,t.P=t.L=e,n=t):(e.P=e.N=null,this._=e,n=null);for(e.L=e.R=null,e.U=n,e.C=!0,t=e;n&&n.C;)r=n.U,n===r.L?(o=r.R,o&&o.C?(n.C=o.C=!1,r.C=!0,t=r):(t===n.R&&(cr(this,n),t=n,n=t.U),n.C=!1,r.C=!0,lr(this,r))):(o=r.L,o&&o.C?(n.C=o.C=!1,r.C=!0,t=r):(t===n.L&&(lr(this,n),t=n,n=t.U),n.C=!1,r.C=!0,cr(this,r))),n=t.U;this._.C=!1},remove:function(t){t.N&&(t.N.P=t.P),t.P&&(t.P.N=t.N),t.N=t.P=null;var e,n,r,o=t.U,i=t.L,a=t.R;if(n=i?a?fr(a):i:a,o?o.L===t?o.L=n:o.R=n:this._=n,i&&a?(r=n.C,n.C=t.C,n.L=i,i.U=n,n!==a?(o=n.U,n.U=t.U,t=n.R,o.L=t,n.R=a,a.U=n):(n.U=o,o=n,t=n.R)):(r=t.C,t=n),t&&(t.U=o),!r){if(t&&t.C)return void(t.C=!1);do{if(t===this._)break;if(t===o.L){if(e=o.R,e.C&&(e.C=!1,o.C=!0,cr(this,o),e=o.R),e.L&&e.L.C||e.R&&e.R.C){e.R&&e.R.C||(e.L.C=!1,e.C=!0,lr(this,e),e=o.R),e.C=o.C,o.C=e.R.C=!1,cr(this,o),t=this._;break}}else if(e=o.L,e.C&&(e.C=!1,o.C=!0,lr(this,o),e=o.L),e.L&&e.L.C||e.R&&e.R.C){e.L&&e.L.C||(e.R.C=!1,e.C=!0,cr(this,e),e=o.L),e.C=o.C,o.C=e.L.C=!1,lr(this,o),t=this._;break}e.C=!0,t=o,o=o.U}while(!t.C);t&&(t.C=!1)}}},pa.geom.voronoi=function(t){function e(t){var e=new Array(t.length),r=u[0][0],o=u[0][1],i=u[1][0],a=u[1][1];return hr(n(t),u).cells.forEach(function(n,u){var s=n.edges,c=n.site,l=e[u]=s.length?s.map(function(t){var e=t.start();return[e.x,e.y]}):c.x>=r&&c.x<=i&&c.y>=o&&c.y<=a?[[r,a],[i,a],[i,o],[r,o]]:[];l.point=t[u]}),e}function n(t){return t.map(function(t,e){return{x:Math.round(i(t,e)/za)*za,y:Math.round(a(t,e)/za)*za,i:e}})}var r=Dn,o=Rn,i=r,a=o,u=gs;return t?e(t):(e.links=function(t){return hr(n(t)).edges.filter(function(t){return t.l&&t.r}).map(function(e){return{source:t[e.l.i],target:t[e.r.i]}})},e.triangles=function(t){var e=[];return hr(n(t)).cells.forEach(function(n,r){for(var o,i,a=n.site,u=n.edges.sort(Zn),s=-1,c=u.length,l=u[c-1].edge,f=l.l===a?l.r:l.l;++s<c;)o=l,i=f,l=u[s].edge,f=l.l===a?l.r:l.l,r<i.i&&r<f.i&&dr(a,i,f)<0&&e.push([t[r],t[i.i],t[f.i]])}),e},e.x=function(t){return arguments.length?(i=Nt(r=t),e):r},e.y=function(t){return arguments.length?(a=Nt(o=t),e):o},e.clipExtent=function(t){return arguments.length?(u=null==t?gs:t,e):u===gs?null:u},e.size=function(t){return arguments.length?e.clipExtent(t&&[[0,0],t]):u===gs?null:u&&u[1]},e)};var gs=[[-1e6,-1e6],[1e6,1e6]];pa.geom.delaunay=function(t){return pa.geom.voronoi().triangles(t)},pa.geom.quadtree=function(t,e,n,r,o){function i(t){function i(t,e,n,r,o,i,a,u){if(!isNaN(n)&&!isNaN(r))if(t.leaf){var s=t.x,l=t.y;if(null!=s)if(Sa(s-n)+Sa(l-r)<.01)c(t,e,n,r,o,i,a,u);else{var f=t.point;t.x=t.y=t.point=null,c(t,f,s,l,o,i,a,u),c(t,e,n,r,o,i,a,u)}else t.x=n,t.y=r,t.point=e}else c(t,e,n,r,o,i,a,u)}function c(t,e,n,r,o,a,u,s){var c=.5*(o+u),l=.5*(a+s),f=n>=c,h=r>=l,p=h<<1|f;t.leaf=!1,t=t.nodes[p]||(t.nodes[p]=mr()),f?o=c:u=c,h?a=l:s=l,i(t,e,n,r,o,a,u,s)}var l,f,h,p,d,g,v,m,y,b=Nt(u),x=Nt(s);if(null!=e)g=e,v=n,m=r,y=o;else if(m=y=-(g=v=1/0),f=[],h=[],d=t.length,a)for(p=0;d>p;++p)l=t[p],l.x<g&&(g=l.x),l.y<v&&(v=l.y),l.x>m&&(m=l.x),l.y>y&&(y=l.y),f.push(l.x),h.push(l.y);else for(p=0;d>p;++p){var w=+b(l=t[p],p),M=+x(l,p);g>w&&(g=w),v>M&&(v=M),w>m&&(m=w),M>y&&(y=M),f.push(w),h.push(M)}var k=m-g,C=y-v;k>C?y=v+k:m=g+C;var S=mr();if(S.add=function(t){i(S,t,+b(t,++p),+x(t,p),g,v,m,y)},S.visit=function(t){yr(t,S,g,v,m,y)},S.find=function(t){return br(S,t[0],t[1],g,v,m,y)},p=-1,null==e){for(;++p<d;)i(S,t[p],f[p],h[p],g,v,m,y);--p}else t.forEach(S.add);return f=h=t=l=null,S}var a,u=Dn,s=Rn;return(a=arguments.length)?(u=gr,s=vr,3===a&&(o=n,r=e,n=e=0),i(t)):(i.x=function(t){return arguments.length?(u=t,i):u},i.y=function(t){return arguments.length?(s=t,i):s},i.extent=function(t){return arguments.length?(null==t?e=n=r=o=null:(e=+t[0][0],n=+t[0][1],r=+t[1][0],o=+t[1][1]),i):null==e?null:[[e,n],[r,o]]},i.size=function(t){return arguments.length?(null==t?e=n=r=o=null:(e=n=0,r=+t[0],o=+t[1]),i):null==e?null:[r-e,o-n]},i)},pa.interpolateRgb=xr,pa.interpolateObject=wr,pa.interpolateNumber=Mr,pa.interpolateString=kr;var vs=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,ms=new RegExp(vs.source,"g");pa.interpolate=Cr,pa.interpolators=[function(t,e){var n=typeof e;return("string"===n?cu.has(e.toLowerCase())||/^(#|rgb\(|hsl\()/i.test(e)?xr:kr:e instanceof ft?xr:Array.isArray(e)?Sr:"object"===n&&isNaN(e)?wr:Mr)(t,e)}],pa.interpolateArray=Sr;var ys=function(){return k},bs=pa.map({linear:ys,poly:jr,quad:function(){return Ar},cubic:function(){return Or},sin:function(){return Pr},exp:function(){return Dr},circle:function(){return Rr},elastic:Fr,back:Lr,bounce:function(){return Ir}}),xs=pa.map({"in":k,out:Er,"in-out":Tr,"out-in":function(t){return Tr(Er(t))}});pa.ease=function(t){var e=t.indexOf("-"),n=e>=0?t.slice(0,e):t,r=e>=0?t.slice(e+1):"in";return n=bs.get(n)||ys,r=xs.get(r)||k,_r(r(n.apply(null,da.call(arguments,1))))},pa.interpolateHcl=qr,pa.interpolateHsl=Br,pa.interpolateLab=zr,pa.interpolateRound=Hr,pa.transform=function(t){var e=va.createElementNS(pa.ns.prefix.svg,"g");return(pa.transform=function(t){if(null!=t){e.setAttribute("transform",t);var n=e.transform.baseVal.consolidate()}return new Wr(n?n.matrix:ws)})(t)},Wr.prototype.toString=function(){return"translate("+this.translate+")rotate("+this.rotate+")skewX("+this.skew+")scale("+this.scale+")"};var ws={a:1,b:0,c:0,d:1,e:0,f:0};pa.interpolateTransform=Jr,pa.layout={},pa.layout.bundle=function(){return function(t){for(var e=[],n=-1,r=t.length;++n<r;)e.push(eo(t[n]));return e}},pa.layout.chord=function(){function t(){var t,c,f,h,p,d={},g=[],v=pa.range(i),m=[];for(n=[],r=[],t=0,h=-1;++h<i;){for(c=0,p=-1;++p<i;)c+=o[h][p];g.push(c),m.push(pa.range(i)),t+=c}for(a&&v.sort(function(t,e){return a(g[t],g[e])}),u&&m.forEach(function(t,e){t.sort(function(t,n){return u(o[e][t],o[e][n])})}),t=(Ua-l*i)/t,c=0,h=-1;++h<i;){for(f=c,p=-1;++p<i;){var y=v[h],b=m[y][p],x=o[y][b],w=c,M=c+=x*t;d[y+"-"+b]={index:y,subindex:b,startAngle:w,endAngle:M,value:x}}r[y]={index:y,startAngle:f,endAngle:c,value:g[y]},c+=l}for(h=-1;++h<i;)for(p=h-1;++p<i;){var k=d[h+"-"+p],C=d[p+"-"+h];(k.value||C.value)&&n.push(k.value<C.value?{source:C,target:k}:{source:k,target:C})}s&&e()}function e(){n.sort(function(t,e){return s((t.source.value+t.target.value)/2,(e.source.value+e.target.value)/2)})}var n,r,o,i,a,u,s,c={},l=0;return c.matrix=function(t){return arguments.length?(i=(o=t)&&o.length,n=r=null,c):o},c.padding=function(t){return arguments.length?(l=t,n=r=null,c):l},c.sortGroups=function(t){return arguments.length?(a=t,n=r=null,c):a},c.sortSubgroups=function(t){return arguments.length?(u=t,n=null,c):u},c.sortChords=function(t){return arguments.length?(s=t,n&&e(),c):s},c.chords=function(){return n||t(),n},c.groups=function(){return r||t(),r},c},pa.layout.force=function(){function t(t){return function(e,n,r,o){if(e.point!==t){var i=e.cx-t.x,a=e.cy-t.y,u=o-n,s=i*i+a*a;if(s>u*u/m){if(g>s){var c=e.charge/s;t.px-=i*c,t.py-=a*c}return!0}if(e.point&&s&&g>s){var c=e.pointCharge/s;t.px-=i*c,t.py-=a*c}}return!e.charge}}function e(t){t.px=pa.event.x,t.py=pa.event.y,s.resume()}var n,r,o,i,a,u,s={},c=pa.dispatch("start","tick","end"),l=[1,1],f=.9,h=Ms,p=ks,d=-30,g=Cs,v=.1,m=.64,y=[],b=[];return s.tick=function(){if((o*=.99)<.005)return n=null,c.end({type:"end",alpha:o=0}),!0;var e,r,s,h,p,g,m,x,w,M=y.length,k=b.length;for(r=0;k>r;++r)s=b[r],h=s.source,p=s.target,x=p.x-h.x,w=p.y-h.y,(g=x*x+w*w)&&(g=o*a[r]*((g=Math.sqrt(g))-i[r])/g,x*=g,w*=g,p.x-=x*(m=h.weight+p.weight?h.weight/(h.weight+p.weight):.5),p.y-=w*m,h.x+=x*(m=1-m),h.y+=w*m);if((m=o*v)&&(x=l[0]/2,w=l[1]/2,r=-1,m))for(;++r<M;)s=y[r],s.x+=(x-s.x)*m,s.y+=(w-s.y)*m;if(d)for(so(e=pa.geom.quadtree(y),o,u),r=-1;++r<M;)(s=y[r]).fixed||e.visit(t(s));for(r=-1;++r<M;)s=y[r],s.fixed?(s.x=s.px,s.y=s.py):(s.x-=(s.px-(s.px=s.x))*f,s.y-=(s.py-(s.py=s.y))*f);c.tick({type:"tick",alpha:o})},s.nodes=function(t){return arguments.length?(y=t,s):y},s.links=function(t){return arguments.length?(b=t,s):b},s.size=function(t){return arguments.length?(l=t,s):l},s.linkDistance=function(t){return arguments.length?(h="function"==typeof t?t:+t,s):h},s.distance=s.linkDistance,s.linkStrength=function(t){return arguments.length?(p="function"==typeof t?t:+t,s):p},s.friction=function(t){return arguments.length?(f=+t,s):f},s.charge=function(t){return arguments.length?(d="function"==typeof t?t:+t,s):d},s.chargeDistance=function(t){return arguments.length?(g=t*t,s):Math.sqrt(g)},s.gravity=function(t){return arguments.length?(v=+t,s):v},s.theta=function(t){return arguments.length?(m=t*t,s):Math.sqrt(m)},s.alpha=function(t){return arguments.length?(t=+t,o?t>0?o=t:(n.c=null,n.t=NaN,n=null,c.end({type:"end",alpha:o=0})):t>0&&(c.start({type:"start",alpha:o=t}),n=Ft(s.tick)),s):o},s.start=function(){function t(t,r){if(!n){for(n=new Array(o),s=0;o>s;++s)n[s]=[];for(s=0;c>s;++s){var i=b[s];n[i.source.index].push(i.target),n[i.target.index].push(i.source)}}for(var a,u=n[e],s=-1,l=u.length;++s<l;)if(!isNaN(a=u[s][t]))return a;return Math.random()*r}var e,n,r,o=y.length,c=b.length,f=l[0],g=l[1];for(e=0;o>e;++e)(r=y[e]).index=e,r.weight=0;for(e=0;c>e;++e)r=b[e],"number"==typeof r.source&&(r.source=y[r.source]),"number"==typeof r.target&&(r.target=y[r.target]),++r.source.weight,++r.target.weight;for(e=0;o>e;++e)r=y[e],isNaN(r.x)&&(r.x=t("x",f)),isNaN(r.y)&&(r.y=t("y",g)),isNaN(r.px)&&(r.px=r.x),isNaN(r.py)&&(r.py=r.y);if(i=[],"function"==typeof h)for(e=0;c>e;++e)i[e]=+h.call(this,b[e],e);else for(e=0;c>e;++e)i[e]=h;if(a=[],"function"==typeof p)for(e=0;c>e;++e)a[e]=+p.call(this,b[e],e);else for(e=0;c>e;++e)a[e]=p;if(u=[],"function"==typeof d)for(e=0;o>e;++e)u[e]=+d.call(this,y[e],e);else for(e=0;o>e;++e)u[e]=d;return s.resume()},s.resume=function(){return s.alpha(.1)},s.stop=function(){return s.alpha(0)},s.drag=function(){return r||(r=pa.behavior.drag().origin(k).on("dragstart.force",oo).on("drag.force",e).on("dragend.force",io)),arguments.length?void this.on("mouseover.force",ao).on("mouseout.force",uo).call(r):r},pa.rebind(s,c,"on")};var Ms=20,ks=1,Cs=1/0;pa.layout.hierarchy=function(){function t(o){var i,a=[o],u=[];for(o.depth=0;null!=(i=a.pop());)if(u.push(i),(c=n.call(t,i,i.depth))&&(s=c.length)){for(var s,c,l;--s>=0;)a.push(l=c[s]),l.parent=i,l.depth=i.depth+1;r&&(i.value=0),i.children=c}else r&&(i.value=+r.call(t,i,i.depth)||0),delete i.children;return fo(o,function(t){var n,o;e&&(n=t.children)&&n.sort(e),r&&(o=t.parent)&&(o.value+=t.value)}),u}var e=go,n=ho,r=po;return t.sort=function(n){return arguments.length?(e=n,t):e},t.children=function(e){return arguments.length?(n=e,t):n},t.value=function(e){return arguments.length?(r=e,t):r},t.revalue=function(e){return r&&(lo(e,function(t){t.children&&(t.value=0)}),fo(e,function(e){var n;e.children||(e.value=+r.call(t,e,e.depth)||0),(n=e.parent)&&(n.value+=e.value)})),e},t},pa.layout.partition=function(){function t(e,n,r,o){var i=e.children;if(e.x=n,e.y=e.depth*o,e.dx=r,e.dy=o,i&&(a=i.length)){var a,u,s,c=-1;for(r=e.value?r/e.value:0;++c<a;)t(u=i[c],n,s=u.value*r,o),n+=s}}function e(t){var n=t.children,r=0;if(n&&(o=n.length))for(var o,i=-1;++i<o;)r=Math.max(r,e(n[i]));return 1+r}function n(n,i){var a=r.call(this,n,i);return t(a[0],0,o[0],o[1]/e(a[0])),a}var r=pa.layout.hierarchy(),o=[1,1];return n.size=function(t){return arguments.length?(o=t,n):o},co(n,r)},pa.layout.pie=function(){function t(a){var u,s=a.length,c=a.map(function(n,r){return+e.call(t,n,r)}),l=+("function"==typeof r?r.apply(this,arguments):r),f=("function"==typeof o?o.apply(this,arguments):o)-l,h=Math.min(Math.abs(f)/s,+("function"==typeof i?i.apply(this,arguments):i)),p=h*(0>f?-1:1),d=pa.sum(c),g=d?(f-s*p)/d:0,v=pa.range(s),m=[];return null!=n&&v.sort(n===Ss?function(t,e){return c[e]-c[t]}:function(t,e){return n(a[t],a[e])}),v.forEach(function(t){m[t]={data:a[t],value:u=c[t],startAngle:l,endAngle:l+=u*g+p,padAngle:h}}),m}var e=Number,n=Ss,r=0,o=Ua,i=0;return t.value=function(n){return arguments.length?(e=n,t):e},t.sort=function(e){return arguments.length?(n=e,t):n},t.startAngle=function(e){return arguments.length?(r=e,t):r},t.endAngle=function(e){return arguments.length?(o=e,t):o},t.padAngle=function(e){return arguments.length?(i=e,t):i},t};var Ss={};pa.layout.stack=function(){function t(u,s){if(!(h=u.length))return u;var c=u.map(function(n,r){return e.call(t,n,r)}),l=c.map(function(e){return e.map(function(e,n){return[i.call(t,e,n),a.call(t,e,n)]})}),f=n.call(t,l,s);c=pa.permute(c,f),l=pa.permute(l,f);var h,p,d,g,v=r.call(t,l,s),m=c[0].length;for(d=0;m>d;++d)for(o.call(t,c[0][d],g=v[d],l[0][d][1]),p=1;h>p;++p)o.call(t,c[p][d],g+=l[p-1][d][1],l[p][d][1]);return u}var e=k,n=xo,r=wo,o=bo,i=mo,a=yo;return t.values=function(n){return arguments.length?(e=n,t):e},t.order=function(e){return arguments.length?(n="function"==typeof e?e:_s.get(e)||xo,t):n},t.offset=function(e){return arguments.length?(r="function"==typeof e?e:Es.get(e)||wo,t):r},t.x=function(e){return arguments.length?(i=e,t):i},t.y=function(e){return arguments.length?(a=e,t):a},t.out=function(e){return arguments.length?(o=e,t):o},t};var _s=pa.map({"inside-out":function(t){var e,n,r=t.length,o=t.map(Mo),i=t.map(ko),a=pa.range(r).sort(function(t,e){return o[t]-o[e]}),u=0,s=0,c=[],l=[];for(e=0;r>e;++e)n=a[e],s>u?(u+=i[n],c.push(n)):(s+=i[n],l.push(n));return l.reverse().concat(c)},reverse:function(t){return pa.range(t.length).reverse()},"default":xo}),Es=pa.map({silhouette:function(t){var e,n,r,o=t.length,i=t[0].length,a=[],u=0,s=[];for(n=0;i>n;++n){for(e=0,r=0;o>e;e++)r+=t[e][n][1];r>u&&(u=r),a.push(r)}for(n=0;i>n;++n)s[n]=(u-a[n])/2;return s},wiggle:function(t){var e,n,r,o,i,a,u,s,c,l=t.length,f=t[0],h=f.length,p=[];for(p[0]=s=c=0,n=1;h>n;++n){for(e=0,o=0;l>e;++e)o+=t[e][n][1];for(e=0,i=0,u=f[n][0]-f[n-1][0];l>e;++e){for(r=0,a=(t[e][n][1]-t[e][n-1][1])/(2*u);e>r;++r)a+=(t[r][n][1]-t[r][n-1][1])/u;i+=a*t[e][n][1]}p[n]=s-=o?i/o*u:0,c>s&&(c=s)}for(n=0;h>n;++n)p[n]-=c;return p},expand:function(t){var e,n,r,o=t.length,i=t[0].length,a=1/o,u=[];for(n=0;i>n;++n){for(e=0,r=0;o>e;e++)r+=t[e][n][1];if(r)for(e=0;o>e;e++)t[e][n][1]/=r;else for(e=0;o>e;e++)t[e][n][1]=a}for(n=0;i>n;++n)u[n]=0;return u},zero:wo});pa.layout.histogram=function(){function t(t,i){for(var a,u,s=[],c=t.map(n,this),l=r.call(this,c,i),f=o.call(this,l,c,i),i=-1,h=c.length,p=f.length-1,d=e?1:1/h;++i<p;)a=s[i]=[],a.dx=f[i+1]-(a.x=f[i]),a.y=0;if(p>0)for(i=-1;++i<h;)u=c[i],u>=l[0]&&u<=l[1]&&(a=s[pa.bisect(f,u,1,p)-1],a.y+=d,a.push(t[i]));return s}var e=!0,n=Number,r=Eo,o=So;return t.value=function(e){return arguments.length?(n=e,t):n},t.range=function(e){return arguments.length?(r=Nt(e),t):r},t.bins=function(e){return arguments.length?(o="number"==typeof e?function(t){return _o(t,e)}:Nt(e),t):o},t.frequency=function(n){return arguments.length?(e=!!n,t):e},t},pa.layout.pack=function(){function t(t,i){var a=n.call(this,t,i),u=a[0],s=o[0],c=o[1],l=null==e?Math.sqrt:"function"==typeof e?e:function(){return e};if(u.x=u.y=0,fo(u,function(t){t.r=+l(t.value)}),fo(u,jo),r){var f=r*(e?1:Math.max(2*u.r/s,2*u.r/c))/2;fo(u,function(t){t.r+=f}),fo(u,jo),fo(u,function(t){t.r-=f})}return Ro(u,s/2,c/2,e?1:1/Math.max(2*u.r/s,2*u.r/c)),a}var e,n=pa.layout.hierarchy().sort(To),r=0,o=[1,1];return t.size=function(e){return arguments.length?(o=e,t):o},t.radius=function(n){return arguments.length?(e=null==n||"function"==typeof n?n:+n,t):e},t.padding=function(e){return arguments.length?(r=+e,t):r},co(t,n)},pa.layout.tree=function(){function t(t,o){var l=a.call(this,t,o),f=l[0],h=e(f);if(fo(h,n),h.parent.m=-h.z,lo(h,r),c)lo(f,i);else{var p=f,d=f,g=f;
			lo(f, function (t) {
				t.x < p.x && (p = t), t.x > d.x && (d = t), t.depth > g.depth && (g = t)
			});
			var v = u(p, d) / 2 - p.x, m = s[0] / (d.x + u(d, p) / 2 + v), y = s[1] / (g.depth || 1);
			lo(f, function (t) {
				t.x = (t.x + v) * m, t.y = t.depth * y
			})
		}
			return l
		}

			function e(t) {
				for (var e, n = {
					A: null,
					children: [t]
				}, r = [n]; null != (e = r.pop());)for (var o, i = e.children, a = 0, u = i.length; u > a; ++a)r.push((i[a] = o = {
					_: i[a],
					parent: e,
					children: (o = i[a].children) && o.slice() || [],
					A: null,
					a: null,
					z: 0,
					m: 0,
					c: 0,
					s: 0,
					t: null,
					i: a
				}).a = o);
				return n.children[0]
			}

			function n(t) {
				var e = t.children, n = t.parent.children, r = t.i ? n[t.i - 1] : null;
				if (e.length) {
					zo(t);
					var i = (e[0].z + e[e.length - 1].z) / 2;
					r ? (t.z = r.z + u(t._, r._), t.m = t.z - i) : t.z = i
				} else r && (t.z = r.z + u(t._, r._));
				t.parent.A = o(t, r, t.parent.A || n[0])
			}

			function r(t) {
				t._.x = t.z + t.parent.m, t.m += t.parent.m
			}

			function o(t, e, n) {
				if (e) {
					for (var r, o = t, i = t, a = e, s = o.parent.children[0], c = o.m, l = i.m, f = a.m, h = s.m; a = qo(a), o = Io(o), a && o;)s = Io(s), i = qo(i), i.a = t, r = a.z + f - o.z - c + u(a._, o._), r > 0 && (Bo(Ho(a, t, n), t, r), c += r, l += r), f += a.m, c += o.m, h += s.m, l += i.m;
					a && !qo(i) && (i.t = a, i.m += f - l), o && !Io(s) && (s.t = o, s.m += c - h, n = t)
				}
				return n
			}

			function i(t) {
				t.x *= s[0], t.y = t.depth * s[1]
			}

			var a = pa.layout.hierarchy().sort(null).value(null), u = Lo, s = [1, 1], c = null;
			return t.separation = function (e) {
				return arguments.length ? (u = e, t) : u
			}, t.size = function (e) {
				return arguments.length ? (c = null == (s = e) ? i : null, t) : c ? null : s
			}, t.nodeSize = function (e) {
				return arguments.length ? (c = null == (s = e) ? null : i, t) : c ? s : null
			}, co(t, a)
		}, pa.layout.cluster = function () {
			function t(t, i) {
				var a, u = e.call(this, t, i), s = u[0], c = 0;
				fo(s, function (t) {
					var e = t.children;
					e && e.length ? (t.x = Uo(e), t.y = Wo(e)) : (t.x = a ? c += n(t, a) : 0, t.y = 0, a = t)
				});
				var l = $o(s), f = Go(s), h = l.x - n(l, f) / 2, p = f.x + n(f, l) / 2;
				return fo(s, o ? function (t) {
					t.x = (t.x - s.x) * r[0], t.y = (s.y - t.y) * r[1]
				} : function (t) {
					t.x = (t.x - h) / (p - h) * r[0], t.y = (1 - (s.y ? t.y / s.y : 1)) * r[1]
				}), u
			}

			var e = pa.layout.hierarchy().sort(null).value(null), n = Lo, r = [1, 1], o = !1;
			return t.separation = function (e) {
				return arguments.length ? (n = e, t) : n
			}, t.size = function (e) {
				return arguments.length ? (o = null == (r = e), t) : o ? null : r
			}, t.nodeSize = function (e) {
				return arguments.length ? (o = null != (r = e), t) : o ? r : null
			}, co(t, e)
		}, pa.layout.treemap = function () {
			function t(t, e) {
				for (var n, r, o = -1, i = t.length; ++o < i;)r = (n = t[o]).value * (0 > e ? 0 : e), n.area = isNaN(r) || 0 >= r ? 0 : r
			}

			function e(n) {
				var i = n.children;
				if (i && i.length) {
					var a, u, s, c = f(n), l = [], h = i.slice(), d = 1 / 0, g = "slice" === p ? c.dx : "dice" === p ? c.dy : "slice-dice" === p ? 1 & n.depth ? c.dy : c.dx : Math.min(c.dx, c.dy);
					for (t(h, c.dx * c.dy / n.value), l.area = 0; (s = h.length) > 0;)l.push(a = h[s - 1]), l.area += a.area, "squarify" !== p || (u = r(l, g)) <= d ? (h.pop(), d = u) : (l.area -= l.pop().area, o(l, g, c, !1), g = Math.min(c.dx, c.dy), l.length = l.area = 0, d = 1 / 0);
					l.length && (o(l, g, c, !0), l.length = l.area = 0), i.forEach(e)
				}
			}

			function n(e) {
				var r = e.children;
				if (r && r.length) {
					var i, a = f(e), u = r.slice(), s = [];
					for (t(u, a.dx * a.dy / e.value), s.area = 0; i = u.pop();)s.push(i), s.area += i.area, null != i.z && (o(s, i.z ? a.dx : a.dy, a, !u.length), s.length = s.area = 0);
					r.forEach(n)
				}
			}

			function r(t, e) {
				for (var n, r = t.area, o = 0, i = 1 / 0, a = -1, u = t.length; ++a < u;)(n = t[a].area) && (i > n && (i = n), n > o && (o = n));
				return r *= r, e *= e, r ? Math.max(e * o * d / r, r / (e * i * d)) : 1 / 0
			}

			function o(t, e, n, r) {
				var o, i = -1, a = t.length, u = n.x, c = n.y, l = e ? s(t.area / e) : 0;
				if (e == n.dx) {
					for ((r || l > n.dy) && (l = n.dy); ++i < a;)o = t[i], o.x = u, o.y = c, o.dy = l, u += o.dx = Math.min(n.x + n.dx - u, l ? s(o.area / l) : 0);
					o.z = !0, o.dx += n.x + n.dx - u, n.y += l, n.dy -= l
				} else {
					for ((r || l > n.dx) && (l = n.dx); ++i < a;)o = t[i], o.x = u, o.y = c, o.dx = l, c += o.dy = Math.min(n.y + n.dy - c, l ? s(o.area / l) : 0);
					o.z = !1, o.dy += n.y + n.dy - c, n.x += l, n.dx -= l
				}
			}

			function i(r) {
				var o = a || u(r), i = o[0];
				return i.x = i.y = 0, i.value ? (i.dx = c[0], i.dy = c[1]) : i.dx = i.dy = 0, a && u.revalue(i), t([i], i.dx * i.dy / i.value), (a ? n : e)(i), h && (a = o), o
			}

			var a, u = pa.layout.hierarchy(), s = Math.round, c = [1, 1], l = null, f = Vo, h = !1, p = "squarify", d = .5 * (1 + Math.sqrt(5));
			return i.size = function (t) {
				return arguments.length ? (c = t, i) : c
			}, i.padding = function (t) {
				function e(e) {
					var n = t.call(i, e, e.depth);
					return null == n ? Vo(e) : Yo(e, "number" == typeof n ? [n, n, n, n] : n)
				}

				function n(e) {
					return Yo(e, t)
				}

				if (!arguments.length)return l;
				var r;
				return f = null == (l = t) ? Vo : "function" == (r = typeof t) ? e : "number" === r ? (t = [t, t, t, t], n) : n, i
			}, i.round = function (t) {
				return arguments.length ? (s = t ? Math.round : Number, i) : s != Number
			}, i.sticky = function (t) {
				return arguments.length ? (h = t, a = null, i) : h
			}, i.ratio = function (t) {
				return arguments.length ? (d = t, i) : d
			}, i.mode = function (t) {
				return arguments.length ? (p = t + "", i) : p
			}, co(i, u)
		}, pa.random = {
			normal: function (t, e) {
				var n = arguments.length;
				return 2 > n && (e = 1), 1 > n && (t = 0), function () {
					var n, r, o;
					do n = 2 * Math.random() - 1, r = 2 * Math.random() - 1, o = n * n + r * r; while (!o || o > 1);
					return t + e * n * Math.sqrt(-2 * Math.log(o) / o)
				}
			}, logNormal: function () {
				var t = pa.random.normal.apply(pa, arguments);
				return function () {
					return Math.exp(t())
				}
			}, bates: function (t) {
				var e = pa.random.irwinHall(t);
				return function () {
					return e() / t
				}
			}, irwinHall: function (t) {
				return function () {
					for (var e = 0, n = 0; t > n; n++)e += Math.random();
					return e
				}
			}
		}, pa.scale = {};
		var Ts = {floor: k, ceil: k};
		pa.scale.linear = function () {
			return ei([0, 1], [0, 1], Cr, !1)
		};
		var As = {s: 1, g: 1, p: 1, r: 1, e: 1};
		pa.scale.log = function () {
			return ci(pa.scale.linear().domain([0, 1]), 10, !0, [1, 10])
		};
		var Os = pa.format(".0e"), Ns = {
			floor: function (t) {
				return -Math.ceil(-t)
			}, ceil: function (t) {
				return -Math.floor(-t)
			}
		};
		pa.scale.pow = function () {
			return li(pa.scale.linear(), 1, [0, 1])
		}, pa.scale.sqrt = function () {
			return pa.scale.pow().exponent(.5)
		}, pa.scale.ordinal = function () {
			return hi([], {t: "range", a: [[]]})
		}, pa.scale.category10 = function () {
			return pa.scale.ordinal().range(js)
		}, pa.scale.category20 = function () {
			return pa.scale.ordinal().range(Ps)
		}, pa.scale.category20b = function () {
			return pa.scale.ordinal().range(Ds)
		}, pa.scale.category20c = function () {
			return pa.scale.ordinal().range(Rs)
		};
		var js = [2062260, 16744206, 2924588, 14034728, 9725885, 9197131, 14907330, 8355711, 12369186, 1556175].map(Ct), Ps = [2062260, 11454440, 16744206, 16759672, 2924588, 10018698, 14034728, 16750742, 9725885, 12955861, 9197131, 12885140, 14907330, 16234194, 8355711, 13092807, 12369186, 14408589, 1556175, 10410725].map(Ct), Ds = [3750777, 5395619, 7040719, 10264286, 6519097, 9216594, 11915115, 13556636, 9202993, 12426809, 15186514, 15190932, 8666169, 11356490, 14049643, 15177372, 8077683, 10834324, 13528509, 14589654].map(Ct), Rs = [3244733, 7057110, 10406625, 13032431, 15095053, 16616764, 16625259, 16634018, 3253076, 7652470, 10607003, 13101504, 7695281, 10394312, 12369372, 14342891, 6513507, 9868950, 12434877, 14277081].map(Ct);
		pa.scale.quantile = function () {
			return pi([], [])
		}, pa.scale.quantize = function () {
			return di(0, 1, [0, 1])
		}, pa.scale.threshold = function () {
			return gi([.5], [0, 1])
		}, pa.scale.identity = function () {
			return vi([0, 1])
		}, pa.svg = {}, pa.svg.arc = function () {
			function t() {
				var t = Math.max(0, +n.apply(this, arguments)), c = Math.max(0, +r.apply(this, arguments)), l = a.apply(this, arguments) - Ga, f = u.apply(this, arguments) - Ga, h = Math.abs(f - l), p = l > f ? 0 : 1;
				if (t > c && (d = c, c = t, t = d), h >= $a)return e(c, p) + (t ? e(t, 1 - p) : "") + "Z";
				var d, g, v, m, y, b, x, w, M, k, C, S, _ = 0, E = 0, T = [];
				if ((m = (+s.apply(this, arguments) || 0) / 2) && (v = i === Fs ? Math.sqrt(t * t + c * c) : +i.apply(this, arguments), p || (E *= -1), c && (E = at(v / c * Math.sin(m))), t && (_ = at(v / t * Math.sin(m)))), c) {
					y = c * Math.cos(l + E), b = c * Math.sin(l + E), x = c * Math.cos(f - E), w = c * Math.sin(f - E);
					var A = Math.abs(f - l - 2 * E) <= Wa ? 0 : 1;
					if (E && ki(y, b, x, w) === p ^ A) {
						var O = (l + f) / 2;
						y = c * Math.cos(O), b = c * Math.sin(O), x = w = null
					}
				} else y = b = 0;
				if (t) {
					M = t * Math.cos(f - _), k = t * Math.sin(f - _), C = t * Math.cos(l + _), S = t * Math.sin(l + _);
					var N = Math.abs(l - f + 2 * _) <= Wa ? 0 : 1;
					if (_ && ki(M, k, C, S) === 1 - p ^ N) {
						var j = (l + f) / 2;
						M = t * Math.cos(j), k = t * Math.sin(j), C = S = null
					}
				} else M = k = 0;
				if (h > za && (d = Math.min(Math.abs(c - t) / 2, +o.apply(this, arguments))) > .001) {
					g = c > t ^ p ? 0 : 1;
					var P = d, D = d;
					if (Wa > h) {
						var R = null == C ? [M, k] : null == x ? [y, b] : qn([y, b], [C, S], [x, w], [M, k]), F = y - R[0], L = b - R[1], I = x - R[0], q = w - R[1], B = 1 / Math.sin(Math.acos((F * I + L * q) / (Math.sqrt(F * F + L * L) * Math.sqrt(I * I + q * q))) / 2), z = Math.sqrt(R[0] * R[0] + R[1] * R[1]);
						D = Math.min(d, (t - z) / (B - 1)), P = Math.min(d, (c - z) / (B + 1))
					}
					if (null != x) {
						var H = Ci(null == C ? [M, k] : [C, S], [y, b], c, P, p), W = Ci([x, w], [M, k], c, P, p);
						d === P ? T.push("M", H[0], "A", P, ",", P, " 0 0,", g, " ", H[1], "A", c, ",", c, " 0 ", 1 - p ^ ki(H[1][0], H[1][1], W[1][0], W[1][1]), ",", p, " ", W[1], "A", P, ",", P, " 0 0,", g, " ", W[0]) : T.push("M", H[0], "A", P, ",", P, " 0 1,", g, " ", W[0])
					} else T.push("M", y, ",", b);
					if (null != C) {
						var U = Ci([y, b], [C, S], t, -D, p), $ = Ci([M, k], null == x ? [y, b] : [x, w], t, -D, p);
						d === D ? T.push("L", $[0], "A", D, ",", D, " 0 0,", g, " ", $[1], "A", t, ",", t, " 0 ", p ^ ki($[1][0], $[1][1], U[1][0], U[1][1]), ",", 1 - p, " ", U[1], "A", D, ",", D, " 0 0,", g, " ", U[0]) : T.push("L", $[0], "A", D, ",", D, " 0 0,", g, " ", U[0])
					} else T.push("L", M, ",", k)
				} else T.push("M", y, ",", b), null != x && T.push("A", c, ",", c, " 0 ", A, ",", p, " ", x, ",", w), T.push("L", M, ",", k), null != C && T.push("A", t, ",", t, " 0 ", N, ",", 1 - p, " ", C, ",", S);
				return T.push("Z"), T.join("")
			}

			function e(t, e) {
				return "M0," + t + "A" + t + "," + t + " 0 1," + e + " 0," + -t + "A" + t + "," + t + " 0 1," + e + " 0," + t
			}

			var n = yi, r = bi, o = mi, i = Fs, a = xi, u = wi, s = Mi;
			return t.innerRadius = function (e) {
				return arguments.length ? (n = Nt(e), t) : n
			}, t.outerRadius = function (e) {
				return arguments.length ? (r = Nt(e), t) : r
			}, t.cornerRadius = function (e) {
				return arguments.length ? (o = Nt(e), t) : o
			}, t.padRadius = function (e) {
				return arguments.length ? (i = e == Fs ? Fs : Nt(e), t) : i
			}, t.startAngle = function (e) {
				return arguments.length ? (a = Nt(e), t) : a
			}, t.endAngle = function (e) {
				return arguments.length ? (u = Nt(e), t) : u
			}, t.padAngle = function (e) {
				return arguments.length ? (s = Nt(e), t) : s
			}, t.centroid = function () {
				var t = (+n.apply(this, arguments) + +r.apply(this, arguments)) / 2, e = (+a.apply(this, arguments) + +u.apply(this, arguments)) / 2 - Ga;
				return [Math.cos(e) * t, Math.sin(e) * t]
			}, t
		};
		var Fs = "auto";
		pa.svg.line = function () {
			return Si(k)
		};
		var Ls = pa.map({
			linear: _i,
			"linear-closed": Ei,
			step: Ti,
			"step-before": Ai,
			"step-after": Oi,
			basis: Fi,
			"basis-open": Li,
			"basis-closed": Ii,
			bundle: qi,
			cardinal: Pi,
			"cardinal-open": Ni,
			"cardinal-closed": ji,
			monotone: $i
		});
		Ls.forEach(function (t, e) {
			e.key = t, e.closed = /-closed$/.test(t)
		});
		var Is = [0, 2 / 3, 1 / 3, 0], qs = [0, 1 / 3, 2 / 3, 0], Bs = [0, 1 / 6, 2 / 3, 1 / 6];
		pa.svg.line.radial = function () {
			var t = Si(Gi);
			return t.radius = t.x, delete t.x, t.angle = t.y, delete t.y, t
		}, Ai.reverse = Oi, Oi.reverse = Ai, pa.svg.area = function () {
			return Vi(k)
		}, pa.svg.area.radial = function () {
			var t = Vi(Gi);
			return t.radius = t.x, delete t.x, t.innerRadius = t.x0, delete t.x0, t.outerRadius = t.x1, delete t.x1, t.angle = t.y, delete t.y, t.startAngle = t.y0, delete t.y0, t.endAngle = t.y1, delete t.y1, t
		}, pa.svg.chord = function () {
			function t(t, u) {
				var s = e(this, i, t, u), c = e(this, a, t, u);
				return "M" + s.p0 + r(s.r, s.p1, s.a1 - s.a0) + (n(s, c) ? o(s.r, s.p1, s.r, s.p0) : o(s.r, s.p1, c.r, c.p0) + r(c.r, c.p1, c.a1 - c.a0) + o(c.r, c.p1, s.r, s.p0)) + "Z"
			}

			function e(t, e, n, r) {
				var o = e.call(t, n, r), i = u.call(t, o, r), a = s.call(t, o, r) - Ga, l = c.call(t, o, r) - Ga;
				return {
					r: i,
					a0: a,
					a1: l,
					p0: [i * Math.cos(a), i * Math.sin(a)],
					p1: [i * Math.cos(l), i * Math.sin(l)]
				}
			}

			function n(t, e) {
				return t.a0 == e.a0 && t.a1 == e.a1
			}

			function r(t, e, n) {
				return "A" + t + "," + t + " 0 " + +(n > Wa) + ",1 " + e
			}

			function o(t, e, n, r) {
				return "Q 0,0 " + r
			}

			var i = Cn, a = Sn, u = Yi, s = xi, c = wi;
			return t.radius = function (e) {
				return arguments.length ? (u = Nt(e), t) : u
			}, t.source = function (e) {
				return arguments.length ? (i = Nt(e), t) : i
			}, t.target = function (e) {
				return arguments.length ? (a = Nt(e), t) : a
			}, t.startAngle = function (e) {
				return arguments.length ? (s = Nt(e), t) : s
			}, t.endAngle = function (e) {
				return arguments.length ? (c = Nt(e), t) : c
			}, t
		}, pa.svg.diagonal = function () {
			function t(t, o) {
				var i = e.call(this, t, o), a = n.call(this, t, o), u = (i.y + a.y) / 2, s = [i, {
					x: i.x,
					y: u
				}, {x: a.x, y: u}, a];
				return s = s.map(r), "M" + s[0] + "C" + s[1] + " " + s[2] + " " + s[3]
			}

			var e = Cn, n = Sn, r = Xi;
			return t.source = function (n) {
				return arguments.length ? (e = Nt(n), t) : e
			}, t.target = function (e) {
				return arguments.length ? (n = Nt(e), t) : n
			}, t.projection = function (e) {
				return arguments.length ? (r = e, t) : r
			}, t
		}, pa.svg.diagonal.radial = function () {
			var t = pa.svg.diagonal(), e = Xi, n = t.projection;
			return t.projection = function (t) {
				return arguments.length ? n(Zi(e = t)) : e
			}, t
		}, pa.svg.symbol = function () {
			function t(t, r) {
				return (zs.get(e.call(this, t, r)) || Qi)(n.call(this, t, r))
			}

			var e = Ji, n = Ki;
			return t.type = function (n) {
				return arguments.length ? (e = Nt(n), t) : e
			}, t.size = function (e) {
				return arguments.length ? (n = Nt(e), t) : n
			}, t
		};
		var zs = pa.map({
			circle: Qi, cross: function (t) {
				var e = Math.sqrt(t / 5) / 2;
				return "M" + -3 * e + "," + -e + "H" + -e + "V" + -3 * e + "H" + e + "V" + -e + "H" + 3 * e + "V" + e + "H" + e + "V" + 3 * e + "H" + -e + "V" + e + "H" + -3 * e + "Z"
			}, diamond: function (t) {
				var e = Math.sqrt(t / (2 * Ws)), n = e * Ws;
				return "M0," + -e + "L" + n + ",0 0," + e + " " + -n + ",0Z"
			}, square: function (t) {
				var e = Math.sqrt(t) / 2;
				return "M" + -e + "," + -e + "L" + e + "," + -e + " " + e + "," + e + " " + -e + "," + e + "Z"
			}, "triangle-down": function (t) {
				var e = Math.sqrt(t / Hs), n = e * Hs / 2;
				return "M0," + n + "L" + e + "," + -n + " " + -e + "," + -n + "Z"
			}, "triangle-up": function (t) {
				var e = Math.sqrt(t / Hs), n = e * Hs / 2;
				return "M0," + -n + "L" + e + "," + n + " " + -e + "," + n + "Z"
			}
		});
		pa.svg.symbolTypes = zs.keys();
		var Hs = Math.sqrt(3), Ws = Math.tan(30 * Va);
		Da.transition = function (t) {
			for (var e, n, r = Us || ++Ys, o = oa(t), i = [], a = $s || {
						time: Date.now(),
						ease: Nr,
						delay: 0,
						duration: 250
					}, u = -1, s = this.length; ++u < s;) {
				i.push(e = []);
				for (var c = this[u], l = -1, f = c.length; ++l < f;)(n = c[l]) && ia(n, l, o, r, a), e.push(n)
			}
			return ea(i, o, r)
		}, Da.interrupt = function (t) {
			return this.each(null == t ? Gs : ta(oa(t)))
		};
		var Us, $s, Gs = ta(oa()), Vs = [], Ys = 0;
		Vs.call = Da.call, Vs.empty = Da.empty, Vs.node = Da.node, Vs.size = Da.size, pa.transition = function (t, e) {
			return t && t.transition ? Us ? t.transition(e) : t : pa.selection().transition(t)
		}, pa.transition.prototype = Vs, Vs.select = function (t) {
			var e, n, r, o = this.id, i = this.namespace, a = [];
			t = P(t);
			for (var u = -1, s = this.length; ++u < s;) {
				a.push(e = []);
				for (var c = this[u], l = -1, f = c.length; ++l < f;)(r = c[l]) && (n = t.call(r, r.__data__, l, u)) ? ("__data__" in r && (n.__data__ = r.__data__), ia(n, l, i, o, r[i][o]), e.push(n)) : e.push(null)
			}
			return ea(a, i, o)
		}, Vs.selectAll = function (t) {
			var e, n, r, o, i, a = this.id, u = this.namespace, s = [];
			t = D(t);
			for (var c = -1, l = this.length; ++c < l;)for (var f = this[c], h = -1, p = f.length; ++h < p;)if (r = f[h]) {
				i = r[u][a], n = t.call(r, r.__data__, h, c), s.push(e = []);
				for (var d = -1, g = n.length; ++d < g;)(o = n[d]) && ia(o, d, u, a, i), e.push(o)
			}
			return ea(s, u, a)
		}, Vs.filter = function (t) {
			var e, n, r, o = [];
			"function" != typeof t && (t = G(t));
			for (var i = 0, a = this.length; a > i; i++) {
				o.push(e = []);
				for (var n = this[i], u = 0, s = n.length; s > u; u++)(r = n[u]) && t.call(r, r.__data__, u, i) && e.push(r)
			}
			return ea(o, this.namespace, this.id)
		}, Vs.tween = function (t, e) {
			var n = this.id, r = this.namespace;
			return arguments.length < 2 ? this.node()[r][n].tween.get(t) : Y(this, null == e ? function (e) {
				e[r][n].tween.remove(t)
			} : function (o) {
				o[r][n].tween.set(t, e)
			})
		}, Vs.attr = function (t, e) {
			function n() {
				this.removeAttribute(u)
			}

			function r() {
				this.removeAttributeNS(u.space, u.local)
			}

			function o(t) {
				return null == t ? n : (t += "", function () {
					var e, n = this.getAttribute(u);
					return n !== t && (e = a(n, t), function (t) {
								this.setAttribute(u, e(t))
							})
				})
			}

			function i(t) {
				return null == t ? r : (t += "", function () {
					var e, n = this.getAttributeNS(u.space, u.local);
					return n !== t && (e = a(n, t), function (t) {
								this.setAttributeNS(u.space, u.local, e(t))
							})
				})
			}

			if (arguments.length < 2) {
				for (e in t)this.attr(e, t[e]);
				return this
			}
			var a = "transform" == t ? Jr : Cr, u = pa.ns.qualify(t);
			return na(this, "attr." + t, e, u.local ? i : o)
		}, Vs.attrTween = function (t, e) {
			function n(t, n) {
				var r = e.call(this, t, n, this.getAttribute(o));
				return r && function (t) {
							this.setAttribute(o, r(t))
						}
			}

			function r(t, n) {
				var r = e.call(this, t, n, this.getAttributeNS(o.space, o.local));
				return r && function (t) {
							this.setAttributeNS(o.space, o.local, r(t))
						}
			}

			var o = pa.ns.qualify(t);
			return this.tween("attr." + t, o.local ? r : n)
		}, Vs.style = function (t, e, n) {
			function r() {
				this.style.removeProperty(t)
			}

			function o(e) {
				return null == e ? r : (e += "", function () {
					var r, o = a(this).getComputedStyle(this, null).getPropertyValue(t);
					return o !== e && (r = Cr(o, e), function (e) {
								this.style.setProperty(t, r(e), n)
							})
				})
			}

			var i = arguments.length;
			if (3 > i) {
				if ("string" != typeof t) {
					2 > i && (e = "");
					for (n in t)this.style(n, t[n], e);
					return this
				}
				n = ""
			}
			return na(this, "style." + t, e, o)
		}, Vs.styleTween = function (t, e, n) {
			function r(r, o) {
				var i = e.call(this, r, o, a(this).getComputedStyle(this, null).getPropertyValue(t));
				return i && function (e) {
							this.style.setProperty(t, i(e), n)
						}
			}

			return arguments.length < 3 && (n = ""), this.tween("style." + t, r)
		}, Vs.text = function (t) {
			return na(this, "text", t, ra)
		}, Vs.remove = function () {
			var t = this.namespace;
			return this.each("end.transition", function () {
				var e;
				this[t].count < 2 && (e = this.parentNode) && e.removeChild(this)
			})
		}, Vs.ease = function (t) {
			var e = this.id, n = this.namespace;
			return arguments.length < 1 ? this.node()[n][e].ease : ("function" != typeof t && (t = pa.ease.apply(pa, arguments)), Y(this, function (r) {
				r[n][e].ease = t
			}))
		}, Vs.delay = function (t) {
			var e = this.id, n = this.namespace;
			return arguments.length < 1 ? this.node()[n][e].delay : Y(this, "function" == typeof t ? function (r, o, i) {
				r[n][e].delay = +t.call(r, r.__data__, o, i)
			} : (t = +t, function (r) {
				r[n][e].delay = t
			}))
		}, Vs.duration = function (t) {
			var e = this.id, n = this.namespace;
			return arguments.length < 1 ? this.node()[n][e].duration : Y(this, "function" == typeof t ? function (r, o, i) {
				r[n][e].duration = Math.max(1, t.call(r, r.__data__, o, i))
			} : (t = Math.max(1, t), function (r) {
				r[n][e].duration = t
			}))
		}, Vs.each = function (t, e) {
			var n = this.id, r = this.namespace;
			if (arguments.length < 2) {
				var o = $s, i = Us;
				try {
					Us = n, Y(this, function (e, o, i) {
						$s = e[r][n], t.call(e, e.__data__, o, i)
					})
				} finally {
					$s = o, Us = i
				}
			} else Y(this, function (o) {
				var i = o[r][n];
				(i.event || (i.event = pa.dispatch("start", "end", "interrupt"))).on(t, e)
			});
			return this
		}, Vs.transition = function () {
			for (var t, e, n, r, o = this.id, i = ++Ys, a = this.namespace, u = [], s = 0, c = this.length; c > s; s++) {
				u.push(t = []);
				for (var e = this[s], l = 0, f = e.length; f > l; l++)(n = e[l]) && (r = n[a][o], ia(n, l, a, i, {
					time: r.time,
					ease: r.ease,
					delay: r.delay + r.duration,
					duration: r.duration
				})), t.push(n)
			}
			return ea(u, a, i)
		}, pa.svg.axis = function () {
			function t(t) {
				t.each(function () {
					var t, c = pa.select(this), l = this.__chart__ || n, f = this.__chart__ = n.copy(), h = null == s ? f.ticks ? f.ticks.apply(f, u) : f.domain() : s, p = null == e ? f.tickFormat ? f.tickFormat.apply(f, u) : k : e, d = c.selectAll(".tick").data(h, f), g = d.enter().insert("g", ".domain").attr("class", "tick").style("opacity", za), v = pa.transition(d.exit()).style("opacity", za).remove(), m = pa.transition(d.order()).style("opacity", 1), y = Math.max(o, 0) + a, b = Zo(f), x = c.selectAll(".domain").data([0]), w = (x.enter().append("path").attr("class", "domain"), pa.transition(x));
					g.append("line"), g.append("text");
					var M, C, S, _, E = g.select("line"), T = m.select("line"), A = d.select("text").text(p), O = g.select("text"), N = m.select("text"), j = "top" === r || "left" === r ? -1 : 1;
					if ("bottom" === r || "top" === r ? (t = aa, M = "x", S = "y", C = "x2", _ = "y2", A.attr("dy", 0 > j ? "0em" : ".71em").style("text-anchor", "middle"), w.attr("d", "M" + b[0] + "," + j * i + "V0H" + b[1] + "V" + j * i)) : (t = ua, M = "y", S = "x", C = "y2", _ = "x2", A.attr("dy", ".32em").style("text-anchor", 0 > j ? "end" : "start"), w.attr("d", "M" + j * i + "," + b[0] + "H0V" + b[1] + "H" + j * i)), E.attr(_, j * o), O.attr(S, j * y), T.attr(C, 0).attr(_, j * o), N.attr(M, 0).attr(S, j * y), f.rangeBand) {
						var P = f, D = P.rangeBand() / 2;
						l = f = function (t) {
							return P(t) + D
						}
					} else l.rangeBand ? l = f : v.call(t, f, l);
					g.call(t, l, f), m.call(t, f, f)
				})
			}

			var e, n = pa.scale.linear(), r = Xs, o = 6, i = 6, a = 3, u = [10], s = null;
			return t.scale = function (e) {
				return arguments.length ? (n = e, t) : n
			}, t.orient = function (e) {
				return arguments.length ? (r = e in Zs ? e + "" : Xs, t) : r
			}, t.ticks = function () {
				return arguments.length ? (u = ga(arguments), t) : u
			}, t.tickValues = function (e) {
				return arguments.length ? (s = e, t) : s
			}, t.tickFormat = function (n) {
				return arguments.length ? (e = n, t) : e
			}, t.tickSize = function (e) {
				var n = arguments.length;
				return n ? (o = +e, i = +arguments[n - 1], t) : o
			}, t.innerTickSize = function (e) {
				return arguments.length ? (o = +e, t) : o
			}, t.outerTickSize = function (e) {
				return arguments.length ? (i = +e, t) : i
			}, t.tickPadding = function (e) {
				return arguments.length ? (a = +e, t) : a
			}, t.tickSubdivide = function () {
				return arguments.length && t
			}, t
		};
		var Xs = "bottom", Zs = {top: 1, right: 1, bottom: 1, left: 1};
		pa.svg.brush = function () {
			function t(i) {
				i.each(function () {
					var i = pa.select(this).style("pointer-events", "all").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)").on("mousedown.brush", o).on("touchstart.brush", o), a = i.selectAll(".background").data([0]);
					a.enter().append("rect").attr("class", "background").style("visibility", "hidden").style("cursor", "crosshair"), i.selectAll(".extent").data([0]).enter().append("rect").attr("class", "extent").style("cursor", "move");
					var u = i.selectAll(".resize").data(g, k);
					u.exit().remove(), u.enter().append("g").attr("class", function (t) {
						return "resize " + t
					}).style("cursor", function (t) {
						return Ks[t]
					}).append("rect").attr("x", function (t) {
						return /[ew]$/.test(t) ? -3 : null
					}).attr("y", function (t) {
						return /^[ns]/.test(t) ? -3 : null
					}).attr("width", 6).attr("height", 6).style("visibility", "hidden"), u.style("display", t.empty() ? "none" : null);
					var s, f = pa.transition(i), h = pa.transition(a);
					c && (s = Zo(c), h.attr("x", s[0]).attr("width", s[1] - s[0]), n(f)), l && (s = Zo(l), h.attr("y", s[0]).attr("height", s[1] - s[0]), r(f)), e(f)
				})
			}

			function e(t) {
				t.selectAll(".resize").attr("transform", function (t) {
					return "translate(" + f[+/e$/.test(t)] + "," + h[+/^s/.test(t)] + ")"
				})
			}

			function n(t) {
				t.select(".extent").attr("x", f[0]), t.selectAll(".extent,.n>rect,.s>rect").attr("width", f[1] - f[0])
			}

			function r(t) {
				t.select(".extent").attr("y", h[0]), t.selectAll(".extent,.e>rect,.w>rect").attr("height", h[1] - h[0])
			}

			function o() {
				function o() {
					32 == pa.event.keyCode && (T || (b = null, N[0] -= f[1], N[1] -= h[1], T = 2), A())
				}

				function g() {
					32 == pa.event.keyCode && 2 == T && (N[0] += f[1], N[1] += h[1], T = 0, A())
				}

				function v() {
					var t = pa.mouse(w), o = !1;
					x && (t[0] += x[0], t[1] += x[1]), T || (pa.event.altKey ? (b || (b = [(f[0] + f[1]) / 2, (h[0] + h[1]) / 2]), N[0] = f[+(t[0] < b[0])], N[1] = h[+(t[1] < b[1])]) : b = null), _ && m(t, c, 0) && (n(C), o = !0), E && m(t, l, 1) && (r(C), o = !0), o && (e(C), k({
						type: "brush",
						mode: T ? "move" : "resize"
					}))
				}

				function m(t, e, n) {
					var r, o, a = Zo(e), s = a[0], c = a[1], l = N[n], g = n ? h : f, v = g[1] - g[0];
					return T && (s -= l, c -= v + l), r = (n ? d : p) ? Math.max(s, Math.min(c, t[n])) : t[n], T ? o = (r += l) + v : (b && (l = Math.max(s, Math.min(c, 2 * b[n] - r))), r > l ? (o = r, r = l) : o = l), g[0] != r || g[1] != o ? (n ? u = null : i = null, g[0] = r, g[1] = o, !0) : void 0
				}

				function y() {
					v(), C.style("pointer-events", "all").selectAll(".resize").style("display", t.empty() ? "none" : null), pa.select("body").style("cursor", null), j.on("mousemove.brush", null).on("mouseup.brush", null).on("touchmove.brush", null).on("touchend.brush", null).on("keydown.brush", null).on("keyup.brush", null), O(), k({type: "brushend"})
				}

				var b, x, w = this, M = pa.select(pa.event.target), k = s.of(w, arguments), C = pa.select(w), S = M.datum(), _ = !/^(n|s)$/.test(S) && c, E = !/^(e|w)$/.test(S) && l, T = M.classed("extent"), O = tt(w), N = pa.mouse(w), j = pa.select(a(w)).on("keydown.brush", o).on("keyup.brush", g);
				if (pa.event.changedTouches ? j.on("touchmove.brush", v).on("touchend.brush", y) : j.on("mousemove.brush", v).on("mouseup.brush", y), C.interrupt().selectAll("*").interrupt(), T)N[0] = f[0] - N[0], N[1] = h[0] - N[1]; else if (S) {
					var P = +/w$/.test(S), D = +/^n/.test(S);
					x = [f[1 - P] - N[0], h[1 - D] - N[1]], N[0] = f[P], N[1] = h[D]
				} else pa.event.altKey && (b = N.slice());
				C.style("pointer-events", "none").selectAll(".resize").style("display", null), pa.select("body").style("cursor", M.style("cursor")), k({type: "brushstart"}), v()
			}

			var i, u, s = N(t, "brushstart", "brush", "brushend"), c = null, l = null, f = [0, 0], h = [0, 0], p = !0, d = !0, g = Js[0];
			return t.event = function (t) {
				t.each(function () {
					var t = s.of(this, arguments), e = {x: f, y: h, i: i, j: u}, n = this.__chart__ || e;
					this.__chart__ = e, Us ? pa.select(this).transition().each("start.brush", function () {
						i = n.i, u = n.j, f = n.x, h = n.y, t({type: "brushstart"})
					}).tween("brush:brush", function () {
						var n = Sr(f, e.x), r = Sr(h, e.y);
						return i = u = null, function (o) {
							f = e.x = n(o), h = e.y = r(o), t({type: "brush", mode: "resize"})
						}
					}).each("end.brush", function () {
						i = e.i, u = e.j, t({type: "brush", mode: "resize"}), t({type: "brushend"})
					}) : (t({type: "brushstart"}), t({type: "brush", mode: "resize"}), t({type: "brushend"}))
				})
			}, t.x = function (e) {
				return arguments.length ? (c = e, g = Js[!c << 1 | !l], t) : c
			}, t.y = function (e) {
				return arguments.length ? (l = e, g = Js[!c << 1 | !l], t) : l
			}, t.clamp = function (e) {
				return arguments.length ? (c && l ? (p = !!e[0], d = !!e[1]) : c ? p = !!e : l && (d = !!e), t) : c && l ? [p, d] : c ? p : l ? d : null
			}, t.extent = function (e) {
				var n, r, o, a, s;
				return arguments.length ? (c && (n = e[0], r = e[1], l && (n = n[0], r = r[0]), i = [n, r], c.invert && (n = c(n), r = c(r)), n > r && (s = n, n = r, r = s), (n != f[0] || r != f[1]) && (f = [n, r])), l && (o = e[0], a = e[1], c && (o = o[1], a = a[1]), u = [o, a], l.invert && (o = l(o), a = l(a)), o > a && (s = o, o = a, a = s), (o != h[0] || a != h[1]) && (h = [o, a])), t) : (c && (i ? (n = i[0], r = i[1]) : (n = f[0], r = f[1], c.invert && (n = c.invert(n), r = c.invert(r)), n > r && (s = n, n = r, r = s))), l && (u ? (o = u[0], a = u[1]) : (o = h[0], a = h[1], l.invert && (o = l.invert(o), a = l.invert(a)), o > a && (s = o, o = a, a = s))), c && l ? [[n, o], [r, a]] : c ? [n, r] : l && [o, a])
			}, t.clear = function () {
				return t.empty() || (f = [0, 0], h = [0, 0], i = u = null), t
			}, t.empty = function () {
				return !!c && f[0] == f[1] || !!l && h[0] == h[1]
			}, pa.rebind(t, s, "on")
		};
		var Ks = {
			n: "ns-resize",
			e: "ew-resize",
			s: "ns-resize",
			w: "ew-resize",
			nw: "nwse-resize",
			ne: "nesw-resize",
			se: "nwse-resize",
			sw: "nesw-resize"
		}, Js = [["n", "e", "s", "w", "nw", "ne", "se", "sw"], ["e", "w"], ["n", "s"], []], Qs = yu.format = Cu.timeFormat, tc = Qs.utc, ec = tc("%Y-%m-%dT%H:%M:%S.%LZ");
		Qs.iso = Date.prototype.toISOString && +new Date("2000-01-01T00:00:00.000Z") ? sa : ec, sa.parse = function (t) {
			var e = new Date(t);
			return isNaN(e) ? null : e
		}, sa.toString = ec.toString, yu.second = $t(function (t) {
			return new bu(1e3 * Math.floor(t / 1e3))
		}, function (t, e) {
			t.setTime(t.getTime() + 1e3 * Math.floor(e))
		}, function (t) {
			return t.getSeconds()
		}), yu.seconds = yu.second.range, yu.seconds.utc = yu.second.utc.range, yu.minute = $t(function (t) {
			return new bu(6e4 * Math.floor(t / 6e4))
		}, function (t, e) {
			t.setTime(t.getTime() + 6e4 * Math.floor(e))
		}, function (t) {
			return t.getMinutes()
		}), yu.minutes = yu.minute.range, yu.minutes.utc = yu.minute.utc.range, yu.hour = $t(function (t) {
			var e = t.getTimezoneOffset() / 60;
			return new bu(36e5 * (Math.floor(t / 36e5 - e) + e))
		}, function (t, e) {
			t.setTime(t.getTime() + 36e5 * Math.floor(e))
		}, function (t) {
			return t.getHours()
		}), yu.hours = yu.hour.range, yu.hours.utc = yu.hour.utc.range, yu.month = $t(function (t) {
			return t = yu.day(t), t.setDate(1), t
		}, function (t, e) {
			t.setMonth(t.getMonth() + e)
		}, function (t) {
			return t.getMonth()
		}), yu.months = yu.month.range, yu.months.utc = yu.month.utc.range;
		var nc = [1e3, 5e3, 15e3, 3e4, 6e4, 3e5, 9e5, 18e5, 36e5, 108e5, 216e5, 432e5, 864e5, 1728e5, 6048e5, 2592e6, 7776e6, 31536e6], rc = [[yu.second, 1], [yu.second, 5], [yu.second, 15], [yu.second, 30], [yu.minute, 1], [yu.minute, 5], [yu.minute, 15], [yu.minute, 30], [yu.hour, 1], [yu.hour, 3], [yu.hour, 6], [yu.hour, 12], [yu.day, 1], [yu.day, 2], [yu.week, 1], [yu.month, 1], [yu.month, 3], [yu.year, 1]], oc = Qs.multi([[".%L", function (t) {
			return t.getMilliseconds()
		}], [":%S", function (t) {
			return t.getSeconds()
		}], ["%I:%M", function (t) {
			return t.getMinutes()
		}], ["%I %p", function (t) {
			return t.getHours()
		}], ["%a %d", function (t) {
			return t.getDay() && 1 != t.getDate()
		}], ["%b %d", function (t) {
			return 1 != t.getDate()
		}], ["%B", function (t) {
			return t.getMonth()
		}], ["%Y", De]]), ic = {
			range: function (t, e, n) {
				return pa.range(Math.ceil(t / n) * n, +e, n).map(la)
			}, floor: k, ceil: k
		};
		rc.year = yu.year, yu.scale = function () {
			return ca(pa.scale.linear(), rc, oc)
		};
		var ac = rc.map(function (t) {
			return [t[0].utc, t[1]]
		}), uc = tc.multi([[".%L", function (t) {
			return t.getUTCMilliseconds()
		}], [":%S", function (t) {
			return t.getUTCSeconds()
		}], ["%I:%M", function (t) {
			return t.getUTCMinutes()
		}], ["%I %p", function (t) {
			return t.getUTCHours()
		}], ["%a %d", function (t) {
			return t.getUTCDay() && 1 != t.getUTCDate()
		}], ["%b %d", function (t) {
			return 1 != t.getUTCDate()
		}], ["%B", function (t) {
			return t.getUTCMonth()
		}], ["%Y", De]]);
		ac.year = yu.year.utc, yu.scale.utc = function () {
			return ca(pa.scale.linear(), ac, uc)
		}, pa.text = jt(function (t) {
			return t.responseText
		}), pa.json = function (t, e) {
			return Pt(t, "application/json", fa, e)
		}, pa.html = function (t, e) {
			return Pt(t, "text/html", ha, e)
		}, pa.xml = jt(function (t) {
			return t.responseXML
		}), this.d3 = pa, r = pa, o = "function" == typeof r ? r.call(e, n, e, t) : r, !(void 0 !== o && (t.exports = o))
	}()
}, function (t, e) {
}, , , , , , , , , , , , , , , function (t, e, n) {
	"use strict";
	function r(t) {
		return t && t.__esModule ? t : {"default": t}
	}

	Object.defineProperty(e, "__esModule", {value: !0});
	var o = n(414), i = r(o), a = n(415), u = r(a), s = n(419), c = r(s), l = n(418), f = r(l), h = n(416), p = r(h), d = n(417), g = r(d);
	e["default"] = [i["default"], u["default"], c["default"], f["default"], p["default"], g["default"]], t.exports = e["default"]
}, function (t, e, n) {
	(function (r) {
		"use strict";
		function o(t) {
			return t && t.__esModule ? t : {"default": t}
		}

		function i(t, e) {
			if (!(t instanceof e))throw new TypeError("Cannot call a class as a function")
		}

		Object.defineProperty(e, "__esModule", {value: !0});
		var a = function () {
			function t(t, e) {
				for (var n = 0; n < e.length; n++) {
					var r = e[n];
					r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
				}
			}

			return function (e, n, r) {
				return n && t(e.prototype, n), r && t(e, r), e
			}
		}(), u = n(412), s = o(u), c = n(413), l = o(c), f = n(411), h = o(f), p = n(409), d = o(p), g = "undefined" != typeof navigator ? navigator.userAgent : void 0, v = function () {
			"production" !== r.env.NODE_ENV && console.warn.apply(console, arguments)
		}, m = function (t) {
			return t.charAt(0).toUpperCase() + t.slice(1)
		}, y = function (t, e) {
			return e && Object.keys(e).forEach(function (n) {
				return t[n] = e[n]
			}), e
		}, b = function () {
			function t() {
				var e = this, n = arguments.length <= 0 || void 0 === arguments[0] ? g : arguments[0];
				if (i(this, t), this._userAgent = n, this._browserInfo = (0, s["default"])(n), !this._browserInfo || !this._browserInfo.prefix)return this._hasPropsRequiringPrefix = !1, v("Either the global navigator was undefined or an invalid userAgent was provided.", "Using a valid userAgent? Please let us know and create an issue at https://github.com/rofrischmann/inline-style-prefixer/issues"), !1;
				this.cssPrefix = this._browserInfo.prefix.CSS, this.jsPrefix = this._browserInfo.prefix.inline, this.prefixedKeyframes = (0, l["default"])(this._browserInfo);
				var r = this._browserInfo.browser && h["default"][this._browserInfo.browser];
				return r ? (this._requiresPrefix = Object.keys(r).filter(function (t) {
					return r[t] >= e._browserInfo.version
				}).reduce(function (t, e) {
					return t[e] = !0, t
				}, {}), void(this._hasPropsRequiringPrefix = Object.keys(this._requiresPrefix).length > 0)) : (this._hasPropsRequiringPrefix = !1, v("Your userAgent seems to be not supported by inline-style-prefixer. Feel free to open an issue."), !1)
			}

			return a(t, [{
				key: "prefix", value: function (t) {
					var e = this;
					return this._hasPropsRequiringPrefix ? (t = y({}, t), Object.keys(t).forEach(function (n) {
						var r = t[n];
						r instanceof Object ? t[n] = e.prefix(r) : (e._requiresPrefix[n] && (t[e.jsPrefix + m(n)] = r, delete t[n]), d["default"].forEach(function (o) {
							y(t, o(n, r, e._browserInfo, t, !1))
						}))
					}), t) : t
				}
			}], [{
				key: "prefixAll", value: function (e) {
					var n = {}, r = (0, s["default"])("*");
					return r.browsers.forEach(function (t) {
						var e = h["default"][t];
						e && y(n, e)
					}), !Object.keys(n).length > 0 ? e : (e = y({}, e), Object.keys(e).forEach(function (o) {
						var i = e[o];
						if (i instanceof Object)e[o] = t.prefixAll(i); else {
							var a = Object.keys(r.prefixes);
							a.forEach(function (t) {
								var a = r.prefixes[t];
								n[o] && (e[a.inline + m(o)] = i), d["default"].forEach(function (n) {
									var r = {name: t, prefix: a, version: 0};
									y(e, n(o, i, r, e, !0))
								})
							})
						}
					}), e)
				}
			}]), t
		}();
		e["default"] = b, t.exports = e["default"]
	}).call(e, n(3))
}, function (t, e) {
	var n = {
		chrome: {
			transform: 35,
			transformOrigin: 35,
			transformOriginX: 35,
			transformOriginY: 35,
			backfaceVisibility: 35,
			perspective: 35,
			perspectiveOrigin: 35,
			transformStyle: 35,
			transformOriginZ: 35,
			animation: 42,
			animationDelay: 42,
			animationDirection: 42,
			animationFillMode: 42,
			animationDuration: 42,
			animationIterationCount: 42,
			animationName: 42,
			animationPlayState: 42,
			animationTimingFunction: 42,
			appearance: 49,
			userSelect: 49,
			fontKerning: 32,
			textEmphasisPosition: 49,
			textEmphasis: 49,
			textEmphasisStyle: 49,
			textEmphasisColor: 49,
			boxDecorationBreak: 49,
			clipPath: 49,
			maskImage: 49,
			maskMode: 49,
			maskRepeat: 49,
			maskPosition: 49,
			maskClip: 49,
			maskOrigin: 49,
			maskSize: 49,
			maskComposite: 49,
			mask: 49,
			maskBorderSource: 49,
			maskBorderMode: 49,
			maskBorderSlice: 49,
			maskBorderWidth: 49,
			maskBorderOutset: 49,
			maskBorderRepeat: 49,
			maskBorder: 49,
			maskType: 49,
			textDecorationStyle: 49,
			textDecorationSkip: 49,
			textDecorationLine: 49,
			textDecorationColor: 49,
			filter: 49,
			fontFeatureSettings: 49,
			breakAfter: 49,
			breakBefore: 49,
			breakInside: 49,
			columnCount: 49,
			columnFill: 49,
			columnGap: 49,
			columnRule: 49,
			columnRuleColor: 49,
			columnRuleStyle: 49,
			columnRuleWidth: 49,
			columns: 49,
			columnSpan: 49,
			columnWidth: 49
		},
		safari: {
			flex: 8,
			flexBasis: 8,
			flexDirection: 8,
			flexGrow: 8,
			flexFlow: 8,
			flexShrink: 8,
			flexWrap: 8,
			alignContent: 8,
			alignItems: 8,
			alignSelf: 8,
			justifyContent: 8,
			order: 8,
			transition: 6,
			transitionDelay: 6,
			transitionDuration: 6,
			transitionProperty: 6,
			transitionTimingFunction: 6,
			transform: 8,
			transformOrigin: 8,
			transformOriginX: 8,
			transformOriginY: 8,
			backfaceVisibility: 8,
			perspective: 8,
			perspectiveOrigin: 8,
			transformStyle: 8,
			transformOriginZ: 8,
			animation: 8,
			animationDelay: 8,
			animationDirection: 8,
			animationFillMode: 8,
			animationDuration: 8,
			animationIterationCount: 8,
			animationName: 8,
			animationPlayState: 8,
			animationTimingFunction: 8,
			appearance: 9,
			userSelect: 9,
			backdropFilter: 9,
			fontKerning: 9,
			scrollSnapType: 9,
			scrollSnapPointsX: 9,
			scrollSnapPointsY: 9,
			scrollSnapDestination: 9,
			scrollSnapCoordinate: 9,
			textEmphasisPosition: 7,
			textEmphasis: 7,
			textEmphasisStyle: 7,
			textEmphasisColor: 7,
			boxDecorationBreak: 9,
			clipPath: 9,
			maskImage: 9,
			maskMode: 9,
			maskRepeat: 9,
			maskPosition: 9,
			maskClip: 9,
			maskOrigin: 9,
			maskSize: 9,
			maskComposite: 9,
			mask: 9,
			maskBorderSource: 9,
			maskBorderMode: 9,
			maskBorderSlice: 9,
			maskBorderWidth: 9,
			maskBorderOutset: 9,
			maskBorderRepeat: 9,
			maskBorder: 9,
			maskType: 9,
			textDecorationStyle: 9,
			textDecorationSkip: 9,
			textDecorationLine: 9,
			textDecorationColor: 9,
			shapeImageThreshold: 9,
			shapeImageMargin: 9,
			shapeImageOutside: 9,
			filter: 9,
			hyphens: 9,
			flowInto: 9,
			flowFrom: 9,
			breakBefore: 8,
			breakAfter: 8,
			breakInside: 8,
			regionFragment: 9,
			columnCount: 8,
			columnFill: 8,
			columnGap: 8,
			columnRule: 8,
			columnRuleColor: 8,
			columnRuleStyle: 8,
			columnRuleWidth: 8,
			columns: 8,
			columnSpan: 8,
			columnWidth: 8
		},
		firefox: {
			appearance: 45,
			userSelect: 45,
			boxSizing: 28,
			textAlignLast: 45,
			textDecorationStyle: 35,
			textDecorationSkip: 35,
			textDecorationLine: 35,
			textDecorationColor: 35,
			tabSize: 45,
			hyphens: 42,
			fontFeatureSettings: 33,
			breakAfter: 45,
			breakBefore: 45,
			breakInside: 45,
			columnCount: 45,
			columnFill: 45,
			columnGap: 45,
			columnRule: 45,
			columnRuleColor: 45,
			columnRuleStyle: 45,
			columnRuleWidth: 45,
			columns: 45,
			columnSpan: 45,
			columnWidth: 45
		},
		opera: {
			flex: 16,
			flexBasis: 16,
			flexDirection: 16,
			flexGrow: 16,
			flexFlow: 16,
			flexShrink: 16,
			flexWrap: 16,
			alignContent: 16,
			alignItems: 16,
			alignSelf: 16,
			justifyContent: 16,
			order: 16,
			transform: 22,
			transformOrigin: 22,
			transformOriginX: 22,
			transformOriginY: 22,
			backfaceVisibility: 22,
			perspective: 22,
			perspectiveOrigin: 22,
			transformStyle: 22,
			transformOriginZ: 22,
			animation: 29,
			animationDelay: 29,
			animationDirection: 29,
			animationFillMode: 29,
			animationDuration: 29,
			animationIterationCount: 29,
			animationName: 29,
			animationPlayState: 29,
			animationTimingFunction: 29,
			appearance: 35,
			userSelect: 35,
			fontKerning: 19,
			textEmphasisPosition: 35,
			textEmphasis: 35,
			textEmphasisStyle: 35,
			textEmphasisColor: 35,
			boxDecorationBreak: 35,
			clipPath: 35,
			maskImage: 35,
			maskMode: 35,
			maskRepeat: 35,
			maskPosition: 35,
			maskClip: 35,
			maskOrigin: 35,
			maskSize: 35,
			maskComposite: 35,
			mask: 35,
			maskBorderSource: 35,
			maskBorderMode: 35,
			maskBorderSlice: 35,
			maskBorderWidth: 35,
			maskBorderOutset: 35,
			maskBorderRepeat: 35,
			maskBorder: 35,
			maskType: 35,
			filter: 35,
			fontFeatureSettings: 35,
			breakAfter: 35,
			breakBefore: 35,
			breakInside: 35,
			columnCount: 35,
			columnFill: 35,
			columnGap: 35,
			columnRule: 35,
			columnRuleColor: 35,
			columnRuleStyle: 35,
			columnRuleWidth: 35,
			columns: 35,
			columnSpan: 35,
			columnWidth: 35
		},
		ie: {
			gridTemplateRows: 11,
			grid: 11,
			flowInto: 11,
			flexDirection: 10,
			touchAction: 10,
			gridRow: 11,
			scrollSnapPointsX: 11,
			wrapMargin: 11,
			breakBefore: 11,
			gridRowEnd: 11,
			gridRowStart: 11,
			breakInside: 11,
			transformOrigin: 9,
			scrollSnapType: 11,
			scrollSnapDestination: 11,
			gridTemplate: 11,
			flexWrap: 10,
			transformOriginX: 9,
			flowFrom: 11,
			gridColumnStart: 11,
			userSelect: 11,
			wrapFlow: 11,
			scrollSnapCoordinate: 11,
			gridGap: 11,
			gridAutoRows: 11,
			hyphens: 11,
			regionFragment: 11,
			flex: 10,
			columnGap: 11,
			wrapThrough: 11,
			transformOriginY: 9,
			breakAfter: 11,
			rowGap: 11,
			gridTemplateColumns: 11,
			gridArea: 11,
			transform: 9,
			gridAutoFlow: 11,
			flexFlow: 10,
			gridTemplateAreas: 11,
			gridColumn: 11,
			gridAutoColumns: 11,
			scrollSnapPointsY: 11,
			textSizeAdjust: 11
		},
		ios_saf: {
			flex: 8.1,
			flexBasis: 8.1,
			flexDirection: 8.1,
			flexGrow: 8.1,
			flexFlow: 8.1,
			flexShrink: 8.1,
			flexWrap: 8.1,
			alignContent: 8.1,
			alignItems: 8.1,
			alignSelf: 8.1,
			justifyContent: 8.1,
			order: 8.1,
			transition: 6,
			transitionDelay: 6,
			transitionDuration: 6,
			transitionProperty: 6,
			transitionTimingFunction: 6,
			transform: 8.1,
			transformOrigin: 8.1,
			transformOriginX: 8.1,
			transformOriginY: 8.1,
			backfaceVisibility: 8.1,
			perspective: 8.1,
			perspectiveOrigin: 8.1,
			transformStyle: 8.1,
			transformOriginZ: 8.1,
			animation: 8.1,
			animationDelay: 8.1,
			animationDirection: 8.1,
			animationFillMode: 8.1,
			animationDuration: 8.1,
			animationIterationCount: 8.1,
			animationName: 8.1,
			animationPlayState: 8.1,
			animationTimingFunction: 8.1,
			appearance: 9,
			userSelect: 9,
			backdropFilter: 9,
			fontKerning: 9,
			scrollSnapType: 9,
			scrollSnapPointsX: 9,
			scrollSnapPointsY: 9,
			scrollSnapDestination: 9,
			scrollSnapCoordinate: 9,
			boxDecorationBreak: 9,
			clipPath: 9,
			maskImage: 9,
			maskMode: 9,
			maskRepeat: 9,
			maskPosition: 9,
			maskClip: 9,
			maskOrigin: 9,
			maskSize: 9,
			maskComposite: 9,
			mask: 9,
			maskBorderSource: 9,
			maskBorderMode: 9,
			maskBorderSlice: 9,
			maskBorderWidth: 9,
			maskBorderOutset: 9,
			maskBorderRepeat: 9,
			maskBorder: 9,
			maskType: 9,
			textSizeAdjust: 9,
			textDecorationStyle: 9,
			textDecorationSkip: 9,
			textDecorationLine: 9,
			textDecorationColor: 9,
			shapeImageThreshold: 9,
			shapeImageMargin: 9,
			shapeImageOutside: 9,
			filter: 9,
			hyphens: 9,
			flowInto: 9,
			flowFrom: 9,
			breakBefore: 8.1,
			breakAfter: 8.1,
			breakInside: 8.1,
			regionFragment: 9,
			columnCount: 8.1,
			columnFill: 8.1,
			columnGap: 8.1,
			columnRule: 8.1,
			columnRuleColor: 8.1,
			columnRuleStyle: 8.1,
			columnRuleWidth: 8.1,
			columns: 8.1,
			columnSpan: 8.1,
			columnWidth: 8.1
		},
		android: {
			borderImage: 4.2,
			borderImageOutset: 4.2,
			borderImageRepeat: 4.2,
			borderImageSlice: 4.2,
			borderImageSource: 4.2,
			borderImageWidth: 4.2,
			flex: 4.2,
			flexBasis: 4.2,
			flexDirection: 4.2,
			flexGrow: 4.2,
			flexFlow: 4.2,
			flexShrink: 4.2,
			flexWrap: 4.2,
			alignContent: 4.2,
			alignItems: 4.2,
			alignSelf: 4.2,
			justifyContent: 4.2,
			order: 4.2,
			transition: 4.2,
			transitionDelay: 4.2,
			transitionDuration: 4.2,
			transitionProperty: 4.2,
			transitionTimingFunction: 4.2,
			transform: 4.4,
			transformOrigin: 4.4,
			transformOriginX: 4.4,
			transformOriginY: 4.4,
			backfaceVisibility: 4.4,
			perspective: 4.4,
			perspectiveOrigin: 4.4,
			transformStyle: 4.4,
			transformOriginZ: 4.4,
			animation: 4.4,
			animationDelay: 4.4,
			animationDirection: 4.4,
			animationFillMode: 4.4,
			animationDuration: 4.4,
			animationIterationCount: 4.4,
			animationName: 4.4,
			animationPlayState: 4.4,
			animationTimingFunction: 4.4,
			appearance: 44,
			userSelect: 44,
			fontKerning: 4.4,
			textEmphasisPosition: 44,
			textEmphasis: 44,
			textEmphasisStyle: 44,
			textEmphasisColor: 44,
			boxDecorationBreak: 44,
			clipPath: 44,
			maskImage: 44,
			maskMode: 44,
			maskRepeat: 44,
			maskPosition: 44,
			maskClip: 44,
			maskOrigin: 44,
			maskSize: 44,
			maskComposite: 44,
			mask: 44,
			maskBorderSource: 44,
			maskBorderMode: 44,
			maskBorderSlice: 44,
			maskBorderWidth: 44,
			maskBorderOutset: 44,
			maskBorderRepeat: 44,
			maskBorder: 44,
			maskType: 44,
			filter: 44,
			fontFeatureSettings: 44,
			breakAfter: 44,
			breakBefore: 44,
			breakInside: 44,
			columnCount: 44,
			columnFill: 44,
			columnGap: 44,
			columnRule: 44,
			columnRuleColor: 44,
			columnRuleStyle: 44,
			columnRuleWidth: 44,
			columns: 44,
			columnSpan: 44,
			columnWidth: 44
		},
		and_chr: {
			appearance: 46,
			userSelect: 46,
			textEmphasisPosition: 46,
			textEmphasis: 46,
			textEmphasisStyle: 46,
			textEmphasisColor: 46,
			boxDecorationBreak: 46,
			clipPath: 46,
			maskImage: 46,
			maskMode: 46,
			maskRepeat: 46,
			maskPosition: 46,
			maskClip: 46,
			maskOrigin: 46,
			maskSize: 46,
			maskComposite: 46,
			mask: 46,
			maskBorderSource: 46,
			maskBorderMode: 46,
			maskBorderSlice: 46,
			maskBorderWidth: 46,
			maskBorderOutset: 46,
			maskBorderRepeat: 46,
			maskBorder: 46,
			maskType: 46,
			textDecorationStyle: 46,
			textDecorationSkip: 46,
			textDecorationLine: 46,
			textDecorationColor: 46,
			filter: 46,
			fontFeatureSettings: 46,
			breakAfter: 46,
			breakBefore: 46,
			breakInside: 46,
			columnCount: 46,
			columnFill: 46,
			columnGap: 46,
			columnRule: 46,
			columnRuleColor: 46,
			columnRuleStyle: 46,
			columnRuleWidth: 46,
			columns: 46,
			columnSpan: 46,
			columnWidth: 46
		},
		and_uc: {
			flex: 9.9,
			flexBasis: 9.9,
			flexDirection: 9.9,
			flexGrow: 9.9,
			flexFlow: 9.9,
			flexShrink: 9.9,
			flexWrap: 9.9,
			alignContent: 9.9,
			alignItems: 9.9,
			alignSelf: 9.9,
			justifyContent: 9.9,
			order: 9.9,
			transition: 9.9,
			transitionDelay: 9.9,
			transitionDuration: 9.9,
			transitionProperty: 9.9,
			transitionTimingFunction: 9.9,
			transform: 9.9,
			transformOrigin: 9.9,
			transformOriginX: 9.9,
			transformOriginY: 9.9,
			backfaceVisibility: 9.9,
			perspective: 9.9,
			perspectiveOrigin: 9.9,
			transformStyle: 9.9,
			transformOriginZ: 9.9,
			animation: 9.9,
			animationDelay: 9.9,
			animationDirection: 9.9,
			animationFillMode: 9.9,
			animationDuration: 9.9,
			animationIterationCount: 9.9,
			animationName: 9.9,
			animationPlayState: 9.9,
			animationTimingFunction: 9.9,
			appearance: 9.9,
			userSelect: 9.9,
			fontKerning: 9.9,
			textEmphasisPosition: 9.9,
			textEmphasis: 9.9,
			textEmphasisStyle: 9.9,
			textEmphasisColor: 9.9,
			maskImage: 9.9,
			maskMode: 9.9,
			maskRepeat: 9.9,
			maskPosition: 9.9,
			maskClip: 9.9,
			maskOrigin: 9.9,
			maskSize: 9.9,
			maskComposite: 9.9,
			mask: 9.9,
			maskBorderSource: 9.9,
			maskBorderMode: 9.9,
			maskBorderSlice: 9.9,
			maskBorderWidth: 9.9,
			maskBorderOutset: 9.9,
			maskBorderRepeat: 9.9,
			maskBorder: 9.9,
			maskType: 9.9,
			textSizeAdjust: 9.9,
			filter: 9.9,
			hyphens: 9.9,
			flowInto: 9.9,
			flowFrom: 9.9,
			breakBefore: 9.9,
			breakAfter: 9.9,
			breakInside: 9.9,
			regionFragment: 9.9,
			fontFeatureSettings: 9.9,
			columnCount: 9.9,
			columnFill: 9.9,
			columnGap: 9.9,
			columnRule: 9.9,
			columnRuleColor: 9.9,
			columnRuleStyle: 9.9,
			columnRuleWidth: 9.9,
			columns: 9.9,
			columnSpan: 9.9,
			columnWidth: 9.9
		},
		op_mini: {
			borderImage: 5,
			borderImageOutset: 5,
			borderImageRepeat: 5,
			borderImageSlice: 5,
			borderImageSource: 5,
			borderImageWidth: 5,
			tabSize: 5,
			objectFit: 5,
			objectPosition: 5
		}
	};
	t.exports = n
}, function (t, e, n) {
	"use strict";
	function r(t) {
		return t && t.__esModule ? t : {"default": t}
	}

	Object.defineProperty(e, "__esModule", {value: !0});
	var o = n(277), i = r(o), a = {
		Webkit: ["chrome", "safari", "ios", "android", "phantom", "opera", "webos", "blackberry", "bada", "tizen"],
		Moz: ["firefox", "seamonkey", "sailfish"],
		ms: ["msie", "msedge"]
	}, u = {
		chrome: [["chrome"]],
		safari: [["safari"]],
		firefox: [["firefox"]],
		ie: [["msie"], ["msedge"]],
		opera: [["opera"]],
		ios_saf: [["ios", "mobile"], ["ios", "tablet"]],
		ie_mob: [["windowsphone", "mobile", "msie"], ["windowsphone", "tablet", "msie"], ["windowsphone", "mobile", "msedge"], ["windowsphone", "tablet", "msedge"]],
		op_mini: [["opera", "mobile"], ["opera", "tablet"]],
		and_chr: [["android", "chrome", "mobile"], ["android", "chrome", "tablet"]],
		and_uc: [["android", "mobile"], ["android", "tablet"]],
		android: [["android", "mobile"], ["android", "tablet"]]
	}, s = function (t) {
		var e = void 0, n = void 0, r = void 0, o = void 0, i = void 0, s = void 0;
		e = Object.keys(a);
		var c = !0, l = !1, f = void 0;
		try {
			for (var h, p = e[Symbol.iterator](); !(c = (h = p.next()).done); c = !0) {
				n = h.value, r = a[n], o = u[t];
				var d = !0, g = !1, v = void 0;
				try {
					for (var m, y = r[Symbol.iterator](); !(d = (m = y.next()).done); d = !0) {
						i = m.value;
						var b = !0, x = !1, w = void 0;
						try {
							for (var M, k = o[Symbol.iterator](); !(b = (M = k.next()).done); b = !0)if (s = M.value, -1 !== s.indexOf(i))return {
								inline: n,
								CSS: "-" + n.toLowerCase() + "-"
							}
						} catch (C) {
							x = !0, w = C
						} finally {
							try {
								!b && k["return"] && k["return"]()
							} finally {
								if (x)throw w
							}
						}
					}
				} catch (C) {
					g = !0, v = C
				} finally {
					try {
						!d && y["return"] && y["return"]()
					} finally {
						if (g)throw v
					}
				}
			}
		} catch (C) {
			l = !0, f = C
		} finally {
			try {
				!c && p["return"] && p["return"]()
			} finally {
				if (l)throw f
			}
		}
		return {inline: "", CSS: ""}
	};
	e["default"] = function (t) {
		if (!t)return !1;
		var e = {};
		if ("*" === t)return e.browsers = Object.keys(u), e.prefixes = {}, e.browsers.forEach(function (t) {
			e.prefixes[t] = s(t)
		}), e;
		e = i["default"]._detect(t), Object.keys(a).forEach(function (t) {
			a[t].forEach(function (n) {
				e[n] && (e.prefix = {inline: t, CSS: "-" + t.toLowerCase() + "-"})
			})
		});
		var n = "";
		return Object.keys(u).forEach(function (t) {
			u[t].forEach(function (r) {
				var o = 0;
				r.forEach(function (t) {
					e[t] && (o += 1)
				}), r.length === o && (n = t)
			})
		}), e.browser = n, e.version = parseFloat(e.version), e.osversion = parseFloat(e.osversion), "android" === n && e.osversion < 5 && (e.version = e.osversion), e
	}, t.exports = e["default"]
}, function (t, e) {
	"use strict";
	Object.defineProperty(e, "__esModule", {value: !0}), e["default"] = function (t) {
		var e = t.browser, n = t.version, r = t.prefix, o = "keyframes";
		return ("chrome" === e && 43 > n || ("safari" === e || "ios_saf" === e) && 9 > n || "opera" === e && 30 > n || "android" === e && 4.4 >= n || "and_uc" === e) && (o = r.CSS + o), o
	}, t.exports = e["default"]
}, function (t, e) {
	"use strict";
	function n(t, e, n) {
		return e in t ? Object.defineProperty(t, e, {
			value: n,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : t[e] = n, t
	}

	Object.defineProperty(e, "__esModule", {value: !0});
	var r = ["zoom-in", "zoom-out", "grab", "grabbing"];
	e["default"] = function (t, e, o) {
		var i = o.browser, a = o.version, u = o.prefix;
		return "cursor" === t && r.indexOf(e) > -1 && ("firefox" === i && 24 > a || "chrome" === i && 37 > a || "safari" === i && 9 > a || "opera" === i && 24 > a) ? n({}, t, u.CSS + e) : void 0
	}, t.exports = e["default"]
}, function (t, e) {
	"use strict";
	function n(t, e, n) {
		return e in t ? Object.defineProperty(t, e, {
			value: n,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : t[e] = n, t
	}

	Object.defineProperty(e, "__esModule", {value: !0});
	var r = ["flex", "inline-flex"];
	e["default"] = function (t, e, o) {
		var i = o.browser, a = o.version, u = o.prefix;
		return "display" === t && r.indexOf(e) > -1 && ("chrome" === i && (29 > a || a > 20) || ("safari" === i || "ios_saf" === i) && (9 > a || a > 6) || "opera" === i && (15 == a || 16 == a)) ? n({}, t, u.CSS + e) : void 0
	}, t.exports = e["default"]
}, function (t, e) {
	"use strict";
	function n(t, e, n) {
		return e in t ? Object.defineProperty(t, e, {
			value: n,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : t[e] = n, t
	}

	Object.defineProperty(e, "__esModule", {value: !0});
	var r = {
		"space-around": "distribute",
		"space-between": "justify",
		"flex-start": "start",
		"flex-end": "end",
		flex: "-ms-flexbox",
		"inline-flex": "-ms-inline-flexbox"
	}, o = {
		alignContent: "msFlexLinePack",
		alignSelf: "msFlexItemAlign",
		alignItems: "msFlexAlign",
		justifyContent: "msFlexPack",
		order: "msFlexOrder",
		flexGrow: "msFlexPositive",
		flexShrink: "msFlexNegative",
		flexBasis: "msPreferredSize"
	}, i = Object.keys(o).concat("display");
	e["default"] = function (t, e, a, u) {
		var s = a.browser, c = a.version;
		return i.indexOf(t) > -1 && ("ie_mob" === s || "ie" === s) && 10 == c ? (delete u[t], n({}, o[t] || t, r[e] || e)) : void 0
	}, t.exports = e["default"]
}, function (t, e) {
	"use strict";
	function n(t, e, n) {
		return e in t ? Object.defineProperty(t, e, {
			value: n,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : t[e] = n, t
	}

	Object.defineProperty(e, "__esModule", {value: !0});
	var r = {
		"space-around": "justify",
		"space-between": "justify",
		"flex-start": "start",
		"flex-end": "end",
		"wrap-reverse": "multiple",
		wrap: "multiple",
		flex: "box",
		"inline-flex": "inline-box"
	}, o = {
		alignItems: "WebkitBoxAlign",
		justifyContent: "WebkitBoxPack",
		flexWrap: "WebkitBoxLines"
	}, i = Object.keys(o).concat(["alignContent", "alignSelf", "display", "order", "flexGrow", "flexShrink", "flexBasis", "flexDirection"]);
	e["default"] = function (t, e, a) {
		var u = a.browser, s = a.version, c = a.prefix;
		return i.indexOf(t) > -1 && ("firefox" === u && 22 > s || "chrome" === u && 21 > s || ("safari" === u || "ios_saf" === u) && 6.1 >= s || "android" === u && 4.4 > s || "and_uc" === u) ? "flexDirection" === t ? {
			WebkitBoxOrient: e.indexOf("column") > -1 ? "vertical" : "horizontal",
			WebkitBoxDirection: e.indexOf("reverse") > -1 ? "reverse" : "normal"
		} : "display" === t && r[e] ? {display: c.CSS + r[e]} : n({}, o[t] || t, r[e] || e) : void 0
	}, t.exports = e["default"]
}, function (t, e) {
	"use strict";
	function n(t, e, n) {
		return e in t ? Object.defineProperty(t, e, {
			value: n,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : t[e] = n, t
	}

	Object.defineProperty(e, "__esModule", {value: !0});
	var r = ["background", "backgroundImage"], o = ["linear-gradient", "radial-gradient", "repeating-linear-gradient", "repeating-radial-gradient"];
	e["default"] = function (t, e, i) {
		var a = i.browser, u = i.version, s = i.prefix;
		return r.indexOf(t) > -1 && o.indexOf(e) > -1 && ("firefox" === a && 16 > u || "chrome" === a && 26 > u || ("safari" === a || "ios_saf" === a) && 7 > u || ("opera" === a || "op_mini" === a) && 12.1 > u || "android" === a && 4.4 > u || "and_uc" === a) ? n({}, t, s.CSS + e) : void 0
	}, t.exports = e["default"]
}, function (t, e) {
	"use strict";
	function n(t, e, n) {
		return e in t ? Object.defineProperty(t, e, {
			value: n,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : t[e] = n, t
	}

	Object.defineProperty(e, "__esModule", {value: !0});
	var r = ["maxHeight", "maxWidth", "width", "height", "columnWidth", "minWidth", "minHeight"], o = ["min-content", "max-content", "fill-available", "fit-content", "contain-floats"];
	e["default"] = function (t, e, i) {
		var a = i.prefix;
		return r.indexOf(t) > -1 && o.indexOf(e) > -1 ? n({}, t, a.CSS + e) : void 0
	}, t.exports = e["default"]
}, function (t, e, n) {
	(function (e) {
		"use strict";
		var n = function (t, n, r, o, i, a, u, s) {
			if ("production" !== e.env.NODE_ENV && void 0 === n)throw new Error("invariant requires an error message argument");
			if (!t) {
				var c;
				if (void 0 === n)c = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."); else {
					var l = [r, o, i, a, u, s], f = 0;
					c = new Error(n.replace(/%s/g, function () {
						return l[f++]
					})), c.name = "Invariant Violation"
				}
				throw c.framesToPop = 1, c
			}
		};
		t.exports = n
	}).call(e, n(3))
}, function (t, e, n) {
	n(519), t.exports = self.fetch.bind(self)
}, function (t, e, n) {
	var r, o;
	/*!
	 * jQuery JavaScript Library v2.1.4
	 * http://jquery.com/
	 *
	 * Includes Sizzle.js
	 * http://sizzlejs.com/
	 *
	 * Copyright 2005, 2014 jQuery Foundation, Inc. and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2015-04-28T16:01Z
	 */
!function(e,n){"object"==typeof t&&"object"==typeof t.exports?t.exports=e.document?n(e,!0):function(t){if(!t.document)throw new Error("jQuery requires a window with a document");return n(t)}:n(e)}("undefined"!=typeof window?window:this,function(n,i){function a(t){var e="length"in t&&t.length,n=rt.type(t);return"function"===n||rt.isWindow(t)?!1:1===t.nodeType&&e?!0:"array"===n||0===e||"number"==typeof e&&e>0&&e-1 in t}function u(t,e,n){if(rt.isFunction(e))return rt.grep(t,function(t,r){return!!e.call(t,r,t)!==n});if(e.nodeType)return rt.grep(t,function(t){return t===e!==n});if("string"==typeof e){if(ft.test(e))return rt.filter(e,t,n);e=rt.filter(e,t)}return rt.grep(t,function(t){return Z.call(e,t)>=0!==n})}function s(t,e){for(;(t=t[e])&&1!==t.nodeType;);return t}function c(t){var e=yt[t]={};return rt.each(t.match(mt)||[],function(t,n){e[n]=!0}),e}function l(){et.removeEventListener("DOMContentLoaded",l,!1),n.removeEventListener("load",l,!1),rt.ready()}function f(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=rt.expando+f.uid++}function h(t,e,n){var r;if(void 0===n&&1===t.nodeType)if(r="data-"+e.replace(Ct,"-$1").toLowerCase(),n=t.getAttribute(r),"string"==typeof n){try{n="true"===n?!0:"false"===n?!1:"null"===n?null:+n+""===n?+n:kt.test(n)?rt.parseJSON(n):n}catch(o){}Mt.set(t,e,n)}else n=void 0;return n}function p(){return!0}function d(){return!1}function g(){try{return et.activeElement}catch(t){}}function v(t,e){return rt.nodeName(t,"table")&&rt.nodeName(11!==e.nodeType?e:e.firstChild,"tr")?t.getElementsByTagName("tbody")[0]||t.appendChild(t.ownerDocument.createElement("tbody")):t}function m(t){return t.type=(null!==t.getAttribute("type"))+"/"+t.type,t}function y(t){var e=Bt.exec(t.type);return e?t.type=e[1]:t.removeAttribute("type"),t}function b(t,e){for(var n=0,r=t.length;r>n;n++)wt.set(t[n],"globalEval",!e||wt.get(e[n],"globalEval"))}function x(t,e){var n,r,o,i,a,u,s,c;if(1===e.nodeType){if(wt.hasData(t)&&(i=wt.access(t),a=wt.set(e,i),c=i.events)){delete a.handle,a.events={};for(o in c)for(n=0,r=c[o].length;r>n;n++)rt.event.add(e,o,c[o][n])}Mt.hasData(t)&&(u=Mt.access(t),s=rt.extend({},u),Mt.set(e,s))}}function w(t,e){var n=t.getElementsByTagName?t.getElementsByTagName(e||"*"):t.querySelectorAll?t.querySelectorAll(e||"*"):[];return void 0===e||e&&rt.nodeName(t,e)?rt.merge([t],n):n}function M(t,e){var n=e.nodeName.toLowerCase();"input"===n&&Tt.test(t.type)?e.checked=t.checked:("input"===n||"textarea"===n)&&(e.defaultValue=t.defaultValue)}function k(t,e){var r,o=rt(e.createElement(t)).appendTo(e.body),i=n.getDefaultComputedStyle&&(r=n.getDefaultComputedStyle(o[0]))?r.display:rt.css(o[0],"display");return o.detach(),i}function C(t){var e=et,n=Ut[t];return n||(n=k(t,e),"none"!==n&&n||(Wt=(Wt||rt("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement),e=Wt[0].contentDocument,e.write(),e.close(),n=k(t,e),Wt.detach()),Ut[t]=n),n}function S(t,e,n){var r,o,i,a,u=t.style;return n=n||Vt(t),n&&(a=n.getPropertyValue(e)||n[e]),n&&(""!==a||rt.contains(t.ownerDocument,t)||(a=rt.style(t,e)),Gt.test(a)&&$t.test(e)&&(r=u.width,o=u.minWidth,i=u.maxWidth,u.minWidth=u.maxWidth=u.width=a,a=n.width,u.width=r,u.minWidth=o,u.maxWidth=i)),void 0!==a?a+"":a}function _(t,e){return{get:function(){return t()?void delete this.get:(this.get=e).apply(this,arguments)}}}function E(t,e){if(e in t)return e;for(var n=e[0].toUpperCase()+e.slice(1),r=e,o=Qt.length;o--;)if(e=Qt[o]+n,e in t)return e;return r}function T(t,e,n){var r=Xt.exec(e);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):e}function A(t,e,n,r,o){for(var i=n===(r?"border":"content")?4:"width"===e?1:0,a=0;4>i;i+=2)"margin"===n&&(a+=rt.css(t,n+_t[i],!0,o)),r?("content"===n&&(a-=rt.css(t,"padding"+_t[i],!0,o)),"margin"!==n&&(a-=rt.css(t,"border"+_t[i]+"Width",!0,o))):(a+=rt.css(t,"padding"+_t[i],!0,o),"padding"!==n&&(a+=rt.css(t,"border"+_t[i]+"Width",!0,o)));return a}function O(t,e,n){var r=!0,o="width"===e?t.offsetWidth:t.offsetHeight,i=Vt(t),a="border-box"===rt.css(t,"boxSizing",!1,i);if(0>=o||null==o){if(o=S(t,e,i),(0>o||null==o)&&(o=t.style[e]),Gt.test(o))return o;r=a&&(tt.boxSizingReliable()||o===t.style[e]),o=parseFloat(o)||0}return o+A(t,e,n||(a?"border":"content"),r,i)+"px"}function N(t,e){for(var n,r,o,i=[],a=0,u=t.length;u>a;a++)r=t[a],r.style&&(i[a]=wt.get(r,"olddisplay"),n=r.style.display,e?(i[a]||"none"!==n||(r.style.display=""),""===r.style.display&&Et(r)&&(i[a]=wt.access(r,"olddisplay",C(r.nodeName)))):(o=Et(r),"none"===n&&o||wt.set(r,"olddisplay",o?n:rt.css(r,"display"))));for(a=0;u>a;a++)r=t[a],r.style&&(e&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=e?i[a]||"":"none"));return t}function j(t,e,n,r,o){return new j.prototype.init(t,e,n,r,o)}function P(){return setTimeout(function(){te=void 0}),te=rt.now()}function D(t,e){var n,r=0,o={height:t};for(e=e?1:0;4>r;r+=2-e)n=_t[r],o["margin"+n]=o["padding"+n]=t;return e&&(o.opacity=o.width=t),o}function R(t,e,n){for(var r,o=(ae[e]||[]).concat(ae["*"]),i=0,a=o.length;a>i;i++)if(r=o[i].call(n,e,t))return r}function F(t,e,n){var r,o,i,a,u,s,c,l,f=this,h={},p=t.style,d=t.nodeType&&Et(t),g=wt.get(t,"fxshow");n.queue||(u=rt._queueHooks(t,"fx"),null==u.unqueued&&(u.unqueued=0,s=u.empty.fire,u.empty.fire=function(){u.unqueued||s()}),u.unqueued++,f.always(function(){f.always(function(){u.unqueued--,rt.queue(t,"fx").length||u.empty.fire()})})),1===t.nodeType&&("height"in e||"width"in e)&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],c=rt.css(t,"display"),l="none"===c?wt.get(t,"olddisplay")||C(t.nodeName):c,"inline"===l&&"none"===rt.css(t,"float")&&(p.display="inline-block")),n.overflow&&(p.overflow="hidden",f.always(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]}));for(r in e)if(o=e[r],ne.exec(o)){if(delete e[r],i=i||"toggle"===o,o===(d?"hide":"show")){if("show"!==o||!g||void 0===g[r])continue;d=!0}h[r]=g&&g[r]||rt.style(t,r)}else c=void 0;if(rt.isEmptyObject(h))"inline"===("none"===c?C(t.nodeName):c)&&(p.display=c);else{g?"hidden"in g&&(d=g.hidden):g=wt.access(t,"fxshow",{}),i&&(g.hidden=!d),d?rt(t).show():f.done(function(){rt(t).hide()}),f.done(function(){var e;wt.remove(t,"fxshow");for(e in h)rt.style(t,e,h[e])});for(r in h)a=R(d?g[r]:0,r,f),r in g||(g[r]=a.start,d&&(a.end=a.start,a.start="width"===r||"height"===r?1:0))}}function L(t,e){var n,r,o,i,a;for(n in t)if(r=rt.camelCase(n),o=e[r],i=t[n],rt.isArray(i)&&(o=i[1],i=t[n]=i[0]),n!==r&&(t[r]=i,delete t[n]),a=rt.cssHooks[r],a&&"expand"in a){i=a.expand(i),delete t[r];for(n in i)n in t||(t[n]=i[n],e[n]=o)}else e[r]=o}function I(t,e,n){var r,o,i=0,a=ie.length,u=rt.Deferred().always(function(){delete s.elem}),s=function(){if(o)return!1;for(var e=te||P(),n=Math.max(0,c.startTime+c.duration-e),r=n/c.duration||0,i=1-r,a=0,s=c.tweens.length;s>a;a++)c.tweens[a].run(i);return u.notifyWith(t,[c,i,n]),1>i&&s?n:(u.resolveWith(t,[c]),!1)},c=u.promise({elem:t,props:rt.extend({},e),opts:rt.extend(!0,{specialEasing:{}},n),originalProperties:e,originalOptions:n,startTime:te||P(),duration:n.duration,tweens:[],createTween:function(e,n){var r=rt.Tween(t,c.opts,e,n,c.opts.specialEasing[e]||c.opts.easing);return c.tweens.push(r),r},stop:function(e){var n=0,r=e?c.tweens.length:0;if(o)return this;for(o=!0;r>n;n++)c.tweens[n].run(1);return e?u.resolveWith(t,[c,e]):u.rejectWith(t,[c,e]),this}}),l=c.props;for(L(l,c.opts.specialEasing);a>i;i++)if(r=ie[i].call(c,t,l,c.opts))return r;return rt.map(l,R,c),rt.isFunction(c.opts.start)&&c.opts.start.call(t,c),rt.fx.timer(rt.extend(s,{elem:t,anim:c,queue:c.opts.queue})),c.progress(c.opts.progress).done(c.opts.done,c.opts.complete).fail(c.opts.fail).always(c.opts.always)}function q(t){return function(e,n){"string"!=typeof e&&(n=e,e="*");var r,o=0,i=e.toLowerCase().match(mt)||[];if(rt.isFunction(n))for(;r=i[o++];)"+"===r[0]?(r=r.slice(1)||"*",(t[r]=t[r]||[]).unshift(n)):(t[r]=t[r]||[]).push(n)}}function B(t,e,n,r){function o(u){var s;return i[u]=!0,rt.each(t[u]||[],function(t,u){var c=u(e,n,r);return"string"!=typeof c||a||i[c]?a?!(s=c):void 0:(e.dataTypes.unshift(c),o(c),!1)}),s}var i={},a=t===ke;return o(e.dataTypes[0])||!i["*"]&&o("*")}function z(t,e){var n,r,o=rt.ajaxSettings.flatOptions||{};for(n in e)void 0!==e[n]&&((o[n]?t:r||(r={}))[n]=e[n]);return r&&rt.extend(!0,t,r),t}function H(t,e,n){for(var r,o,i,a,u=t.contents,s=t.dataTypes;"*"===s[0];)s.shift(),void 0===r&&(r=t.mimeType||e.getResponseHeader("Content-Type"));if(r)for(o in u)if(u[o]&&u[o].test(r)){s.unshift(o);break}if(s[0]in n)i=s[0];else{for(o in n){if(!s[0]||t.converters[o+" "+s[0]]){i=o;break}a||(a=o)}i=i||a}return i?(i!==s[0]&&s.unshift(i),n[i]):void 0}function W(t,e,n,r){var o,i,a,u,s,c={},l=t.dataTypes.slice();if(l[1])for(a in t.converters)c[a.toLowerCase()]=t.converters[a];for(i=l.shift();i;)if(t.responseFields[i]&&(n[t.responseFields[i]]=e),!s&&r&&t.dataFilter&&(e=t.dataFilter(e,t.dataType)),s=i,i=l.shift())if("*"===i)i=s;else if("*"!==s&&s!==i){if(a=c[s+" "+i]||c["* "+i],!a)for(o in c)if(u=o.split(" "),u[1]===i&&(a=c[s+" "+u[0]]||c["* "+u[0]])){a===!0?a=c[o]:c[o]!==!0&&(i=u[0],l.unshift(u[1]));break}if(a!==!0)if(a&&t["throws"])e=a(e);else try{e=a(e)}catch(f){return{state:"parsererror",error:a?f:"No conversion from "+s+" to "+i}}}return{state:"success",data:e}}function U(t,e,n,r){var o;if(rt.isArray(e))rt.each(e,function(e,o){n||Te.test(t)?r(t,o):U(t+"["+("object"==typeof o?e:"")+"]",o,n,r)});else if(n||"object"!==rt.type(e))r(t,e);else for(o in e)U(t+"["+o+"]",e[o],n,r)}function $(t){return rt.isWindow(t)?t:9===t.nodeType&&t.defaultView}var G=[],V=G.slice,Y=G.concat,X=G.push,Z=G.indexOf,K={},J=K.toString,Q=K.hasOwnProperty,tt={},et=n.document,nt="2.1.4",rt=function(t,e){return new rt.fn.init(t,e)},ot=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,it=/^-ms-/,at=/-([\da-z])/gi,ut=function(t,e){return e.toUpperCase()};rt.fn=rt.prototype={jquery:nt,constructor:rt,selector:"",length:0,toArray:function(){return V.call(this)},get:function(t){return null!=t?0>t?this[t+this.length]:this[t]:V.call(this)},pushStack:function(t){var e=rt.merge(this.constructor(),t);return e.prevObject=this,e.context=this.context,e},each:function(t,e){return rt.each(this,t,e)},map:function(t){return this.pushStack(rt.map(this,function(e,n){return t.call(e,n,e)}))},slice:function(){return this.pushStack(V.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(t){var e=this.length,n=+t+(0>t?e:0);return this.pushStack(n>=0&&e>n?[this[n]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:X,sort:G.sort,splice:G.splice},rt.extend=rt.fn.extend=function(){var t,e,n,r,o,i,a=arguments[0]||{},u=1,s=arguments.length,c=!1;for("boolean"==typeof a&&(c=a,a=arguments[u]||{},u++),"object"==typeof a||rt.isFunction(a)||(a={}),u===s&&(a=this,u--);s>u;u++)if(null!=(t=arguments[u]))for(e in t)n=a[e],r=t[e],a!==r&&(c&&r&&(rt.isPlainObject(r)||(o=rt.isArray(r)))?(o?(o=!1,i=n&&rt.isArray(n)?n:[]):i=n&&rt.isPlainObject(n)?n:{},a[e]=rt.extend(c,i,r)):void 0!==r&&(a[e]=r));return a},rt.extend({expando:"jQuery"+(nt+Math.random()).replace(/\D/g,""),isReady:!0,error:function(t){throw new Error(t)},noop:function(){},isFunction:function(t){return"function"===rt.type(t)},isArray:Array.isArray,isWindow:function(t){return null!=t&&t===t.window},isNumeric:function(t){return!rt.isArray(t)&&t-parseFloat(t)+1>=0},isPlainObject:function(t){return"object"!==rt.type(t)||t.nodeType||rt.isWindow(t)?!1:t.constructor&&!Q.call(t.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(t){var e;for(e in t)return!1;return!0},type:function(t){return null==t?t+"":"object"==typeof t||"function"==typeof t?K[J.call(t)]||"object":typeof t},globalEval:function(t){var e,n=eval;t=rt.trim(t),t&&(1===t.indexOf("use strict")?(e=et.createElement("script"),e.text=t,et.head.appendChild(e).parentNode.removeChild(e)):n(t))},camelCase:function(t){return t.replace(it,"ms-").replace(at,ut)},nodeName:function(t,e){return t.nodeName&&t.nodeName.toLowerCase()===e.toLowerCase()},each:function(t,e,n){var r,o=0,i=t.length,u=a(t);if(n){if(u)for(;i>o&&(r=e.apply(t[o],n),r!==!1);o++);else for(o in t)if(r=e.apply(t[o],n),r===!1)break}else if(u)for(;i>o&&(r=e.call(t[o],o,t[o]),r!==!1);o++);else for(o in t)if(r=e.call(t[o],o,t[o]),r===!1)break;return t},trim:function(t){return null==t?"":(t+"").replace(ot,"")},makeArray:function(t,e){var n=e||[];return null!=t&&(a(Object(t))?rt.merge(n,"string"==typeof t?[t]:t):X.call(n,t)),n},inArray:function(t,e,n){return null==e?-1:Z.call(e,t,n)},merge:function(t,e){for(var n=+e.length,r=0,o=t.length;n>r;r++)t[o++]=e[r];return t.length=o,t},grep:function(t,e,n){for(var r,o=[],i=0,a=t.length,u=!n;a>i;i++)r=!e(t[i],i),r!==u&&o.push(t[i]);return o},map:function(t,e,n){var r,o=0,i=t.length,u=a(t),s=[];if(u)for(;i>o;o++)r=e(t[o],o,n),null!=r&&s.push(r);else for(o in t)r=e(t[o],o,n),null!=r&&s.push(r);return Y.apply([],s)},guid:1,proxy:function(t,e){var n,r,o;return"string"==typeof e&&(n=t[e],e=t,t=n),rt.isFunction(t)?(r=V.call(arguments,2),o=function(){return t.apply(e||this,r.concat(V.call(arguments)))},o.guid=t.guid=t.guid||rt.guid++,o):void 0},now:Date.now,support:tt}),rt.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(t,e){K["[object "+e+"]"]=e.toLowerCase()});var st=/*!
	 * Sizzle CSS Selector Engine v2.2.0-pre
	 * http://sizzlejs.com/
	 *
	 * Copyright 2008, 2014 jQuery Foundation, Inc. and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2014-12-16
	 */
function(t){function e(t,e,n,r){var o,i,a,u,s,c,f,p,d,g;if((e?e.ownerDocument||e:B)!==j&&N(e),e=e||j,n=n||[],u=e.nodeType,"string"!=typeof t||!t||1!==u&&9!==u&&11!==u)return n;if(!r&&D){if(11!==u&&(o=yt.exec(t)))if(a=o[1]){if(9===u){if(i=e.getElementById(a),!i||!i.parentNode)return n;if(i.id===a)return n.push(i),n}else if(e.ownerDocument&&(i=e.ownerDocument.getElementById(a))&&I(e,i)&&i.id===a)return n.push(i),n}else{if(o[2])return J.apply(n,e.getElementsByTagName(t)),n;if((a=o[3])&&w.getElementsByClassName)return J.apply(n,e.getElementsByClassName(a)),n}if(w.qsa&&(!R||!R.test(t))){if(p=f=q,d=e,g=1!==u&&t,1===u&&"object"!==e.nodeName.toLowerCase()){for(c=S(t),(f=e.getAttribute("id"))?p=f.replace(xt,"\\$&"):e.setAttribute("id",p),p="[id='"+p+"'] ",s=c.length;s--;)c[s]=p+h(c[s]);d=bt.test(t)&&l(e.parentNode)||e,g=c.join(",")}if(g)try{return J.apply(n,d.querySelectorAll(g)),n}catch(v){}finally{f||e.removeAttribute("id")}}}return E(t.replace(st,"$1"),e,n,r)}function n(){function t(n,r){return e.push(n+" ")>M.cacheLength&&delete t[e.shift()],t[n+" "]=r}var e=[];return t}function r(t){return t[q]=!0,t}function o(t){var e=j.createElement("div");try{return!!t(e)}catch(n){return!1}finally{e.parentNode&&e.parentNode.removeChild(e),e=null}}function i(t,e){for(var n=t.split("|"),r=t.length;r--;)M.attrHandle[n[r]]=e}function a(t,e){var n=e&&t,r=n&&1===t.nodeType&&1===e.nodeType&&(~e.sourceIndex||V)-(~t.sourceIndex||V);if(r)return r;if(n)for(;n=n.nextSibling;)if(n===e)return-1;return t?1:-1}function u(t){return function(e){var n=e.nodeName.toLowerCase();return"input"===n&&e.type===t}}function s(t){return function(e){var n=e.nodeName.toLowerCase();return("input"===n||"button"===n)&&e.type===t}}function c(t){return r(function(e){return e=+e,r(function(n,r){for(var o,i=t([],n.length,e),a=i.length;a--;)n[o=i[a]]&&(n[o]=!(r[o]=n[o]))})})}function l(t){return t&&"undefined"!=typeof t.getElementsByTagName&&t}function f(){}function h(t){for(var e=0,n=t.length,r="";n>e;e++)r+=t[e].value;return r}function p(t,e,n){var r=e.dir,o=n&&"parentNode"===r,i=H++;return e.first?function(e,n,i){for(;e=e[r];)if(1===e.nodeType||o)return t(e,n,i)}:function(e,n,a){var u,s,c=[z,i];if(a){for(;e=e[r];)if((1===e.nodeType||o)&&t(e,n,a))return!0}else for(;e=e[r];)if(1===e.nodeType||o){if(s=e[q]||(e[q]={}),(u=s[r])&&u[0]===z&&u[1]===i)return c[2]=u[2];if(s[r]=c,c[2]=t(e,n,a))return!0}}}function d(t){return t.length>1?function(e,n,r){for(var o=t.length;o--;)if(!t[o](e,n,r))return!1;return!0}:t[0]}function g(t,n,r){for(var o=0,i=n.length;i>o;o++)e(t,n[o],r);return r}function v(t,e,n,r,o){for(var i,a=[],u=0,s=t.length,c=null!=e;s>u;u++)(i=t[u])&&(!n||n(i,r,o))&&(a.push(i),c&&e.push(u));return a}function m(t,e,n,o,i,a){return o&&!o[q]&&(o=m(o)),i&&!i[q]&&(i=m(i,a)),r(function(r,a,u,s){var c,l,f,h=[],p=[],d=a.length,m=r||g(e||"*",u.nodeType?[u]:u,[]),y=!t||!r&&e?m:v(m,h,t,u,s),b=n?i||(r?t:d||o)?[]:a:y;if(n&&n(y,b,u,s),o)for(c=v(b,p),o(c,[],u,s),l=c.length;l--;)(f=c[l])&&(b[p[l]]=!(y[p[l]]=f));if(r){if(i||t){if(i){for(c=[],l=b.length;l--;)(f=b[l])&&c.push(y[l]=f);i(null,b=[],c,s)}for(l=b.length;l--;)(f=b[l])&&(c=i?tt(r,f):h[l])>-1&&(r[c]=!(a[c]=f))}}else b=v(b===a?b.splice(d,b.length):b),i?i(null,a,b,s):J.apply(a,b)})}function y(t){for(var e,n,r,o=t.length,i=M.relative[t[0].type],a=i||M.relative[" "],u=i?1:0,s=p(function(t){return t===e},a,!0),c=p(function(t){return tt(e,t)>-1},a,!0),l=[function(t,n,r){var o=!i&&(r||n!==T)||((e=n).nodeType?s(t,n,r):c(t,n,r));return e=null,o}];o>u;u++)if(n=M.relative[t[u].type])l=[p(d(l),n)];else{if(n=M.filter[t[u].type].apply(null,t[u].matches),n[q]){for(r=++u;o>r&&!M.relative[t[r].type];r++);return m(u>1&&d(l),u>1&&h(t.slice(0,u-1).concat({value:" "===t[u-2].type?"*":""})).replace(st,"$1"),n,r>u&&y(t.slice(u,r)),o>r&&y(t=t.slice(r)),o>r&&h(t))}l.push(n)}return d(l)}function b(t,n){var o=n.length>0,i=t.length>0,a=function(r,a,u,s,c){var l,f,h,p=0,d="0",g=r&&[],m=[],y=T,b=r||i&&M.find.TAG("*",c),x=z+=null==y?1:Math.random()||.1,w=b.length;for(c&&(T=a!==j&&a);d!==w&&null!=(l=b[d]);d++){if(i&&l){for(f=0;h=t[f++];)if(h(l,a,u)){s.push(l);break}c&&(z=x)}o&&((l=!h&&l)&&p--,r&&g.push(l))}if(p+=d,o&&d!==p){for(f=0;h=n[f++];)h(g,m,a,u);if(r){if(p>0)for(;d--;)g[d]||m[d]||(m[d]=Z.call(s));m=v(m)}J.apply(s,m),c&&!r&&m.length>0&&p+n.length>1&&e.uniqueSort(s)}return c&&(z=x,T=y),g};return o?r(a):a}var x,w,M,k,C,S,_,E,T,A,O,N,j,P,D,R,F,L,I,q="sizzle"+1*new Date,B=t.document,z=0,H=0,W=n(),U=n(),$=n(),G=function(t,e){return t===e&&(O=!0),0},V=1<<31,Y={}.hasOwnProperty,X=[],Z=X.pop,K=X.push,J=X.push,Q=X.slice,tt=function(t,e){for(var n=0,r=t.length;r>n;n++)if(t[n]===e)return n;return-1},et="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",nt="[\\x20\\t\\r\\n\\f]",rt="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",ot=rt.replace("w","w#"),it="\\["+nt+"*("+rt+")(?:"+nt+"*([*^$|!~]?=)"+nt+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+ot+"))|)"+nt+"*\\]",at=":("+rt+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+it+")*)|.*)\\)|)",ut=new RegExp(nt+"+","g"),st=new RegExp("^"+nt+"+|((?:^|[^\\\\])(?:\\\\.)*)"+nt+"+$","g"),ct=new RegExp("^"+nt+"*,"+nt+"*"),lt=new RegExp("^"+nt+"*([>+~]|"+nt+")"+nt+"*"),ft=new RegExp("="+nt+"*([^\\]'\"]*?)"+nt+"*\\]","g"),ht=new RegExp(at),pt=new RegExp("^"+ot+"$"),dt={ID:new RegExp("^#("+rt+")"),CLASS:new RegExp("^\\.("+rt+")"),TAG:new RegExp("^("+rt.replace("w","w*")+")"),ATTR:new RegExp("^"+it),PSEUDO:new RegExp("^"+at),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+nt+"*(even|odd|(([+-]|)(\\d*)n|)"+nt+"*(?:([+-]|)"+nt+"*(\\d+)|))"+nt+"*\\)|)","i"),bool:new RegExp("^(?:"+et+")$","i"),needsContext:new RegExp("^"+nt+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+nt+"*((?:-\\d)?\\d*)"+nt+"*\\)|)(?=[^-]|$)","i")},gt=/^(?:input|select|textarea|button)$/i,vt=/^h\d$/i,mt=/^[^{]+\{\s*\[native \w/,yt=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,bt=/[+~]/,xt=/'|\\/g,wt=new RegExp("\\\\([\\da-f]{1,6}"+nt+"?|("+nt+")|.)","ig"),Mt=function(t,e,n){var r="0x"+e-65536;return r!==r||n?e:0>r?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},kt=function(){N()};try{J.apply(X=Q.call(B.childNodes),B.childNodes),X[B.childNodes.length].nodeType}catch(Ct){J={apply:X.length?function(t,e){K.apply(t,Q.call(e))}:function(t,e){for(var n=t.length,r=0;t[n++]=e[r++];);t.length=n-1}}}w=e.support={},C=e.isXML=function(t){var e=t&&(t.ownerDocument||t).documentElement;return e?"HTML"!==e.nodeName:!1},N=e.setDocument=function(t){var e,n,r=t?t.ownerDocument||t:B;return r!==j&&9===r.nodeType&&r.documentElement?(j=r,P=r.documentElement,n=r.defaultView,n&&n!==n.top&&(n.addEventListener?n.addEventListener("unload",kt,!1):n.attachEvent&&n.attachEvent("onunload",kt)),D=!C(r),w.attributes=o(function(t){return t.className="i",!t.getAttribute("className")}),w.getElementsByTagName=o(function(t){return t.appendChild(r.createComment("")),!t.getElementsByTagName("*").length}),w.getElementsByClassName=mt.test(r.getElementsByClassName),w.getById=o(function(t){return P.appendChild(t).id=q,!r.getElementsByName||!r.getElementsByName(q).length}),w.getById?(M.find.ID=function(t,e){if("undefined"!=typeof e.getElementById&&D){var n=e.getElementById(t);return n&&n.parentNode?[n]:[]}},M.filter.ID=function(t){var e=t.replace(wt,Mt);return function(t){return t.getAttribute("id")===e}}):(delete M.find.ID,M.filter.ID=function(t){var e=t.replace(wt,Mt);return function(t){var n="undefined"!=typeof t.getAttributeNode&&t.getAttributeNode("id");return n&&n.value===e}}),M.find.TAG=w.getElementsByTagName?function(t,e){return"undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t):w.qsa?e.querySelectorAll(t):void 0}:function(t,e){var n,r=[],o=0,i=e.getElementsByTagName(t);if("*"===t){for(;n=i[o++];)1===n.nodeType&&r.push(n);return r}return i},M.find.CLASS=w.getElementsByClassName&&function(t,e){return D?e.getElementsByClassName(t):void 0},F=[],R=[],(w.qsa=mt.test(r.querySelectorAll))&&(o(function(t){P.appendChild(t).innerHTML="<a id='"+q+"'></a><select id='"+q+"-\f]' msallowcapture=''><option selected=''></option></select>",t.querySelectorAll("[msallowcapture^='']").length&&R.push("[*^$]="+nt+"*(?:''|\"\")"),t.querySelectorAll("[selected]").length||R.push("\\["+nt+"*(?:value|"+et+")"),t.querySelectorAll("[id~="+q+"-]").length||R.push("~="),t.querySelectorAll(":checked").length||R.push(":checked"),t.querySelectorAll("a#"+q+"+*").length||R.push(".#.+[+~]")}),o(function(t){var e=r.createElement("input");e.setAttribute("type","hidden"),t.appendChild(e).setAttribute("name","D"),t.querySelectorAll("[name=d]").length&&R.push("name"+nt+"*[*^$|!~]?="),t.querySelectorAll(":enabled").length||R.push(":enabled",":disabled"),t.querySelectorAll("*,:x"),R.push(",.*:")})),(w.matchesSelector=mt.test(L=P.matches||P.webkitMatchesSelector||P.mozMatchesSelector||P.oMatchesSelector||P.msMatchesSelector))&&o(function(t){w.disconnectedMatch=L.call(t,"div"),L.call(t,"[s!='']:x"),F.push("!=",at)}),R=R.length&&new RegExp(R.join("|")),F=F.length&&new RegExp(F.join("|")),e=mt.test(P.compareDocumentPosition),I=e||mt.test(P.contains)?function(t,e){var n=9===t.nodeType?t.documentElement:t,r=e&&e.parentNode;return t===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):t.compareDocumentPosition&&16&t.compareDocumentPosition(r)))}:function(t,e){if(e)for(;e=e.parentNode;)if(e===t)return!0;return!1},G=e?function(t,e){if(t===e)return O=!0,0;var n=!t.compareDocumentPosition-!e.compareDocumentPosition;return n?n:(n=(t.ownerDocument||t)===(e.ownerDocument||e)?t.compareDocumentPosition(e):1,1&n||!w.sortDetached&&e.compareDocumentPosition(t)===n?t===r||t.ownerDocument===B&&I(B,t)?-1:e===r||e.ownerDocument===B&&I(B,e)?1:A?tt(A,t)-tt(A,e):0:4&n?-1:1)}:function(t,e){if(t===e)return O=!0,0;var n,o=0,i=t.parentNode,u=e.parentNode,s=[t],c=[e];if(!i||!u)return t===r?-1:e===r?1:i?-1:u?1:A?tt(A,t)-tt(A,e):0;if(i===u)return a(t,e);for(n=t;n=n.parentNode;)s.unshift(n);for(n=e;n=n.parentNode;)c.unshift(n);for(;s[o]===c[o];)o++;return o?a(s[o],c[o]):s[o]===B?-1:c[o]===B?1:0},r):j},e.matches=function(t,n){return e(t,null,null,n)},e.matchesSelector=function(t,n){if((t.ownerDocument||t)!==j&&N(t),n=n.replace(ft,"='$1']"),w.matchesSelector&&D&&(!F||!F.test(n))&&(!R||!R.test(n)))try{var r=L.call(t,n);if(r||w.disconnectedMatch||t.document&&11!==t.document.nodeType)return r}catch(o){}return e(n,j,null,[t]).length>0},e.contains=function(t,e){return(t.ownerDocument||t)!==j&&N(t),I(t,e)},e.attr=function(t,e){(t.ownerDocument||t)!==j&&N(t);var n=M.attrHandle[e.toLowerCase()],r=n&&Y.call(M.attrHandle,e.toLowerCase())?n(t,e,!D):void 0;return void 0!==r?r:w.attributes||!D?t.getAttribute(e):(r=t.getAttributeNode(e))&&r.specified?r.value:null},e.error=function(t){throw new Error("Syntax error, unrecognized expression: "+t)},e.uniqueSort=function(t){var e,n=[],r=0,o=0;if(O=!w.detectDuplicates,A=!w.sortStable&&t.slice(0),t.sort(G),O){for(;e=t[o++];)e===t[o]&&(r=n.push(o));for(;r--;)t.splice(n[r],1)}return A=null,t},k=e.getText=function(t){var e,n="",r=0,o=t.nodeType;if(o){if(1===o||9===o||11===o){if("string"==typeof t.textContent)return t.textContent;for(t=t.firstChild;t;t=t.nextSibling)n+=k(t)}else if(3===o||4===o)return t.nodeValue}else for(;e=t[r++];)n+=k(e);return n},M=e.selectors={cacheLength:50,createPseudo:r,match:dt,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(t){return t[1]=t[1].replace(wt,Mt),t[3]=(t[3]||t[4]||t[5]||"").replace(wt,Mt),"~="===t[2]&&(t[3]=" "+t[3]+" "),t.slice(0,4)},CHILD:function(t){return t[1]=t[1].toLowerCase(),"nth"===t[1].slice(0,3)?(t[3]||e.error(t[0]),t[4]=+(t[4]?t[5]+(t[6]||1):2*("even"===t[3]||"odd"===t[3])),t[5]=+(t[7]+t[8]||"odd"===t[3])):t[3]&&e.error(t[0]),t},PSEUDO:function(t){var e,n=!t[6]&&t[2];return dt.CHILD.test(t[0])?null:(t[3]?t[2]=t[4]||t[5]||"":n&&ht.test(n)&&(e=S(n,!0))&&(e=n.indexOf(")",n.length-e)-n.length)&&(t[0]=t[0].slice(0,e),t[2]=n.slice(0,e)),t.slice(0,3))}},filter:{TAG:function(t){var e=t.replace(wt,Mt).toLowerCase();return"*"===t?function(){return!0}:function(t){return t.nodeName&&t.nodeName.toLowerCase()===e}},CLASS:function(t){var e=W[t+" "];return e||(e=new RegExp("(^|"+nt+")"+t+"("+nt+"|$)"))&&W(t,function(t){return e.test("string"==typeof t.className&&t.className||"undefined"!=typeof t.getAttribute&&t.getAttribute("class")||"")})},ATTR:function(t,n,r){return function(o){var i=e.attr(o,t);return null==i?"!="===n:n?(i+="","="===n?i===r:"!="===n?i!==r:"^="===n?r&&0===i.indexOf(r):"*="===n?r&&i.indexOf(r)>-1:"$="===n?r&&i.slice(-r.length)===r:"~="===n?(" "+i.replace(ut," ")+" ").indexOf(r)>-1:"|="===n?i===r||i.slice(0,r.length+1)===r+"-":!1):!0}},CHILD:function(t,e,n,r,o){var i="nth"!==t.slice(0,3),a="last"!==t.slice(-4),u="of-type"===e;return 1===r&&0===o?function(t){return!!t.parentNode}:function(e,n,s){var c,l,f,h,p,d,g=i!==a?"nextSibling":"previousSibling",v=e.parentNode,m=u&&e.nodeName.toLowerCase(),y=!s&&!u;if(v){if(i){for(;g;){for(f=e;f=f[g];)if(u?f.nodeName.toLowerCase()===m:1===f.nodeType)return!1;d=g="only"===t&&!d&&"nextSibling"}return!0}if(d=[a?v.firstChild:v.lastChild],a&&y){for(l=v[q]||(v[q]={}),c=l[t]||[],p=c[0]===z&&c[1],h=c[0]===z&&c[2],f=p&&v.childNodes[p];f=++p&&f&&f[g]||(h=p=0)||d.pop();)if(1===f.nodeType&&++h&&f===e){l[t]=[z,p,h];break}}else if(y&&(c=(e[q]||(e[q]={}))[t])&&c[0]===z)h=c[1];else for(;(f=++p&&f&&f[g]||(h=p=0)||d.pop())&&((u?f.nodeName.toLowerCase()!==m:1!==f.nodeType)||!++h||(y&&((f[q]||(f[q]={}))[t]=[z,h]),f!==e)););return h-=o,h===r||h%r===0&&h/r>=0}}},PSEUDO:function(t,n){var o,i=M.pseudos[t]||M.setFilters[t.toLowerCase()]||e.error("unsupported pseudo: "+t);return i[q]?i(n):i.length>1?(o=[t,t,"",n],M.setFilters.hasOwnProperty(t.toLowerCase())?r(function(t,e){for(var r,o=i(t,n),a=o.length;a--;)r=tt(t,o[a]),t[r]=!(e[r]=o[a])}):function(t){return i(t,0,o)}):i}},pseudos:{not:r(function(t){var e=[],n=[],o=_(t.replace(st,"$1"));return o[q]?r(function(t,e,n,r){for(var i,a=o(t,null,r,[]),u=t.length;u--;)(i=a[u])&&(t[u]=!(e[u]=i))}):function(t,r,i){return e[0]=t,o(e,null,i,n),e[0]=null,!n.pop()}}),has:r(function(t){return function(n){return e(t,n).length>0}}),contains:r(function(t){return t=t.replace(wt,Mt),function(e){return(e.textContent||e.innerText||k(e)).indexOf(t)>-1}}),lang:r(function(t){return pt.test(t||"")||e.error("unsupported lang: "+t),t=t.replace(wt,Mt).toLowerCase(),function(e){var n;do if(n=D?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return n=n.toLowerCase(),n===t||0===n.indexOf(t+"-");while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var n=t.location&&t.location.hash;return n&&n.slice(1)===e.id},root:function(t){return t===P},focus:function(t){return t===j.activeElement&&(!j.hasFocus||j.hasFocus())&&!!(t.type||t.href||~t.tabIndex)},enabled:function(t){return t.disabled===!1},disabled:function(t){return t.disabled===!0},checked:function(t){var e=t.nodeName.toLowerCase();return"input"===e&&!!t.checked||"option"===e&&!!t.selected},selected:function(t){return t.parentNode&&t.parentNode.selectedIndex,t.selected===!0},empty:function(t){for(t=t.firstChild;t;t=t.nextSibling)if(t.nodeType<6)return!1;return!0},parent:function(t){return!M.pseudos.empty(t)},header:function(t){return vt.test(t.nodeName)},input:function(t){return gt.test(t.nodeName)},button:function(t){var e=t.nodeName.toLowerCase();return"input"===e&&"button"===t.type||"button"===e},text:function(t){var e;return"input"===t.nodeName.toLowerCase()&&"text"===t.type&&(null==(e=t.getAttribute("type"))||"text"===e.toLowerCase())},first:c(function(){return[0]}),last:c(function(t,e){return[e-1]}),eq:c(function(t,e,n){return[0>n?n+e:n]}),even:c(function(t,e){for(var n=0;e>n;n+=2)t.push(n);return t}),odd:c(function(t,e){for(var n=1;e>n;n+=2)t.push(n);return t}),lt:c(function(t,e,n){for(var r=0>n?n+e:n;--r>=0;)t.push(r);return t}),gt:c(function(t,e,n){for(var r=0>n?n+e:n;++r<e;)t.push(r);return t})}},M.pseudos.nth=M.pseudos.eq;for(x in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})M.pseudos[x]=u(x);for(x in{submit:!0,reset:!0})M.pseudos[x]=s(x);return f.prototype=M.filters=M.pseudos,M.setFilters=new f,S=e.tokenize=function(t,n){var r,o,i,a,u,s,c,l=U[t+" "];if(l)return n?0:l.slice(0);for(u=t,s=[],c=M.preFilter;u;){(!r||(o=ct.exec(u)))&&(o&&(u=u.slice(o[0].length)||u),s.push(i=[])),r=!1,(o=lt.exec(u))&&(r=o.shift(),i.push({value:r,type:o[0].replace(st," ")}),u=u.slice(r.length));for(a in M.filter)!(o=dt[a].exec(u))||c[a]&&!(o=c[a](o))||(r=o.shift(),i.push({value:r,type:a,matches:o}),u=u.slice(r.length));if(!r)break}return n?u.length:u?e.error(t):U(t,s).slice(0)},_=e.compile=function(t,e){var n,r=[],o=[],i=$[t+" "];if(!i){for(e||(e=S(t)),n=e.length;n--;)i=y(e[n]),i[q]?r.push(i):o.push(i);i=$(t,b(o,r)),i.selector=t}return i},E=e.select=function(t,e,n,r){var o,i,a,u,s,c="function"==typeof t&&t,f=!r&&S(t=c.selector||t);if(n=n||[],1===f.length){if(i=f[0]=f[0].slice(0),i.length>2&&"ID"===(a=i[0]).type&&w.getById&&9===e.nodeType&&D&&M.relative[i[1].type]){if(e=(M.find.ID(a.matches[0].replace(wt,Mt),e)||[])[0],!e)return n;c&&(e=e.parentNode),t=t.slice(i.shift().value.length)}for(o=dt.needsContext.test(t)?0:i.length;o--&&(a=i[o],!M.relative[u=a.type]);)if((s=M.find[u])&&(r=s(a.matches[0].replace(wt,Mt),bt.test(i[0].type)&&l(e.parentNode)||e))){if(i.splice(o,1),t=r.length&&h(i),!t)return J.apply(n,r),n;break}}return(c||_(t,f))(r,e,!D,n,bt.test(t)&&l(e.parentNode)||e),n},w.sortStable=q.split("").sort(G).join("")===q,w.detectDuplicates=!!O,N(),w.sortDetached=o(function(t){return 1&t.compareDocumentPosition(j.createElement("div"))}),o(function(t){return t.innerHTML="<a href='#'></a>","#"===t.firstChild.getAttribute("href")})||i("type|href|height|width",function(t,e,n){return n?void 0:t.getAttribute(e,"type"===e.toLowerCase()?1:2)}),w.attributes&&o(function(t){return t.innerHTML="<input/>",t.firstChild.setAttribute("value",""),""===t.firstChild.getAttribute("value")})||i("value",function(t,e,n){return n||"input"!==t.nodeName.toLowerCase()?void 0:t.defaultValue}),o(function(t){return null==t.getAttribute("disabled")})||i(et,function(t,e,n){var r;return n?void 0:t[e]===!0?e.toLowerCase():(r=t.getAttributeNode(e))&&r.specified?r.value:null}),e}(n);rt.find=st,rt.expr=st.selectors,rt.expr[":"]=rt.expr.pseudos,rt.unique=st.uniqueSort,rt.text=st.getText,rt.isXMLDoc=st.isXML,rt.contains=st.contains;var ct=rt.expr.match.needsContext,lt=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,ft=/^.[^:#\[\.,]*$/;rt.filter=function(t,e,n){var r=e[0];return n&&(t=":not("+t+")"),1===e.length&&1===r.nodeType?rt.find.matchesSelector(r,t)?[r]:[]:rt.find.matches(t,rt.grep(e,function(t){return 1===t.nodeType}))},rt.fn.extend({find:function(t){var e,n=this.length,r=[],o=this;if("string"!=typeof t)return this.pushStack(rt(t).filter(function(){for(e=0;n>e;e++)if(rt.contains(o[e],this))return!0}));for(e=0;n>e;e++)rt.find(t,o[e],r);return r=this.pushStack(n>1?rt.unique(r):r),r.selector=this.selector?this.selector+" "+t:t,r},filter:function(t){return this.pushStack(u(this,t||[],!1))},not:function(t){return this.pushStack(u(this,t||[],!0))},is:function(t){return!!u(this,"string"==typeof t&&ct.test(t)?rt(t):t||[],!1).length}});var ht,pt=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,dt=rt.fn.init=function(t,e){var n,r;if(!t)return this;if("string"==typeof t){if(n="<"===t[0]&&">"===t[t.length-1]&&t.length>=3?[null,t,null]:pt.exec(t),!n||!n[1]&&e)return!e||e.jquery?(e||ht).find(t):this.constructor(e).find(t);if(n[1]){if(e=e instanceof rt?e[0]:e,rt.merge(this,rt.parseHTML(n[1],e&&e.nodeType?e.ownerDocument||e:et,!0)),lt.test(n[1])&&rt.isPlainObject(e))for(n in e)rt.isFunction(this[n])?this[n](e[n]):this.attr(n,e[n]);return this}return r=et.getElementById(n[2]),r&&r.parentNode&&(this.length=1,this[0]=r),this.context=et,this.selector=t,this}return t.nodeType?(this.context=this[0]=t,this.length=1,this):rt.isFunction(t)?"undefined"!=typeof ht.ready?ht.ready(t):t(rt):(void 0!==t.selector&&(this.selector=t.selector,this.context=t.context),rt.makeArray(t,this))};dt.prototype=rt.fn,ht=rt(et);var gt=/^(?:parents|prev(?:Until|All))/,vt={children:!0,contents:!0,next:!0,prev:!0};rt.extend({dir:function(t,e,n){for(var r=[],o=void 0!==n;(t=t[e])&&9!==t.nodeType;)if(1===t.nodeType){if(o&&rt(t).is(n))break;r.push(t)}return r},sibling:function(t,e){for(var n=[];t;t=t.nextSibling)1===t.nodeType&&t!==e&&n.push(t);return n}}),rt.fn.extend({has:function(t){var e=rt(t,this),n=e.length;return this.filter(function(){for(var t=0;n>t;t++)if(rt.contains(this,e[t]))return!0})},closest:function(t,e){for(var n,r=0,o=this.length,i=[],a=ct.test(t)||"string"!=typeof t?rt(t,e||this.context):0;o>r;r++)for(n=this[r];n&&n!==e;n=n.parentNode)if(n.nodeType<11&&(a?a.index(n)>-1:1===n.nodeType&&rt.find.matchesSelector(n,t))){i.push(n);break}return this.pushStack(i.length>1?rt.unique(i):i)},index:function(t){return t?"string"==typeof t?Z.call(rt(t),this[0]):Z.call(this,t.jquery?t[0]:t):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(t,e){return this.pushStack(rt.unique(rt.merge(this.get(),rt(t,e))))},addBack:function(t){return this.add(null==t?this.prevObject:this.prevObject.filter(t))}}),rt.each({parent:function(t){var e=t.parentNode;return e&&11!==e.nodeType?e:null},parents:function(t){return rt.dir(t,"parentNode")},parentsUntil:function(t,e,n){return rt.dir(t,"parentNode",n)},next:function(t){return s(t,"nextSibling")},prev:function(t){return s(t,"previousSibling")},nextAll:function(t){return rt.dir(t,"nextSibling")},prevAll:function(t){return rt.dir(t,"previousSibling")},nextUntil:function(t,e,n){return rt.dir(t,"nextSibling",n)},prevUntil:function(t,e,n){return rt.dir(t,"previousSibling",n)},siblings:function(t){return rt.sibling((t.parentNode||{}).firstChild,t)},children:function(t){return rt.sibling(t.firstChild)},contents:function(t){return t.contentDocument||rt.merge([],t.childNodes)}},function(t,e){rt.fn[t]=function(n,r){var o=rt.map(this,e,n);return"Until"!==t.slice(-5)&&(r=n),r&&"string"==typeof r&&(o=rt.filter(r,o)),this.length>1&&(vt[t]||rt.unique(o),gt.test(t)&&o.reverse()),this.pushStack(o)}});var mt=/\S+/g,yt={};rt.Callbacks=function(t){t="string"==typeof t?yt[t]||c(t):rt.extend({},t);var e,n,r,o,i,a,u=[],s=!t.once&&[],l=function(c){for(e=t.memory&&c,n=!0,a=o||0,o=0,i=u.length,r=!0;u&&i>a;a++)if(u[a].apply(c[0],c[1])===!1&&t.stopOnFalse){e=!1;break}r=!1,u&&(s?s.length&&l(s.shift()):e?u=[]:f.disable())},f={add:function(){if(u){var n=u.length;!function a(e){rt.each(e,function(e,n){var r=rt.type(n);"function"===r?t.unique&&f.has(n)||u.push(n):n&&n.length&&"string"!==r&&a(n)})}(arguments),r?i=u.length:e&&(o=n,l(e))}return this},remove:function(){return u&&rt.each(arguments,function(t,e){for(var n;(n=rt.inArray(e,u,n))>-1;)u.splice(n,1),r&&(i>=n&&i--,a>=n&&a--)}),this},has:function(t){return t?rt.inArray(t,u)>-1:!(!u||!u.length)},empty:function(){return u=[],i=0,this},disable:function(){return u=s=e=void 0,this},disabled:function(){return!u},lock:function(){return s=void 0,e||f.disable(),this},locked:function(){return!s},fireWith:function(t,e){return!u||n&&!s||(e=e||[],e=[t,e.slice?e.slice():e],r?s.push(e):l(e)),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!n}};return f},rt.extend({Deferred:function(t){var e=[["resolve","done",rt.Callbacks("once memory"),"resolved"],["reject","fail",rt.Callbacks("once memory"),"rejected"],["notify","progress",rt.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return o.done(arguments).fail(arguments),this},then:function(){var t=arguments;return rt.Deferred(function(n){rt.each(e,function(e,i){var a=rt.isFunction(t[e])&&t[e];o[i[1]](function(){var t=a&&a.apply(this,arguments);t&&rt.isFunction(t.promise)?t.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[i[0]+"With"](this===r?n.promise():this,a?[t]:arguments)})}),t=null}).promise()},promise:function(t){return null!=t?rt.extend(t,r):r}},o={};return r.pipe=r.then,rt.each(e,function(t,i){var a=i[2],u=i[3];r[i[1]]=a.add,u&&a.add(function(){n=u},e[1^t][2].disable,e[2][2].lock),o[i[0]]=function(){return o[i[0]+"With"](this===o?r:this,arguments),this},o[i[0]+"With"]=a.fireWith}),r.promise(o),t&&t.call(o,o),o},when:function(t){var e,n,r,o=0,i=V.call(arguments),a=i.length,u=1!==a||t&&rt.isFunction(t.promise)?a:0,s=1===u?t:rt.Deferred(),c=function(t,n,r){return function(o){n[t]=this,r[t]=arguments.length>1?V.call(arguments):o,r===e?s.notifyWith(n,r):--u||s.resolveWith(n,r)}};if(a>1)for(e=new Array(a),n=new Array(a),r=new Array(a);a>o;o++)i[o]&&rt.isFunction(i[o].promise)?i[o].promise().done(c(o,r,i)).fail(s.reject).progress(c(o,n,e)):--u;return u||s.resolveWith(r,i),s.promise()}});var bt;rt.fn.ready=function(t){return rt.ready.promise().done(t),this},rt.extend({isReady:!1,readyWait:1,holdReady:function(t){t?rt.readyWait++:rt.ready(!0)},ready:function(t){(t===!0?--rt.readyWait:rt.isReady)||(rt.isReady=!0,t!==!0&&--rt.readyWait>0||(bt.resolveWith(et,[rt]),rt.fn.triggerHandler&&(rt(et).triggerHandler("ready"),rt(et).off("ready"))))}}),rt.ready.promise=function(t){return bt||(bt=rt.Deferred(),"complete"===et.readyState?setTimeout(rt.ready):(et.addEventListener("DOMContentLoaded",l,!1),n.addEventListener("load",l,!1))),bt.promise(t)},rt.ready.promise();var xt=rt.access=function(t,e,n,r,o,i,a){var u=0,s=t.length,c=null==n;if("object"===rt.type(n)){o=!0;for(u in n)rt.access(t,e,u,n[u],!0,i,a)}else if(void 0!==r&&(o=!0,rt.isFunction(r)||(a=!0),c&&(a?(e.call(t,r),e=null):(c=e,e=function(t,e,n){return c.call(rt(t),n)})),e))for(;s>u;u++)e(t[u],n,a?r:r.call(t[u],u,e(t[u],n)));return o?t:c?e.call(t):s?e(t[0],n):i};rt.acceptData=function(t){return 1===t.nodeType||9===t.nodeType||!+t.nodeType},f.uid=1,f.accepts=rt.acceptData,f.prototype={key:function(t){if(!f.accepts(t))return 0;var e={},n=t[this.expando];if(!n){n=f.uid++;try{e[this.expando]={value:n},Object.defineProperties(t,e)}catch(r){e[this.expando]=n,rt.extend(t,e)}}return this.cache[n]||(this.cache[n]={}),n},set:function(t,e,n){var r,o=this.key(t),i=this.cache[o];if("string"==typeof e)i[e]=n;else if(rt.isEmptyObject(i))rt.extend(this.cache[o],e);else for(r in e)i[r]=e[r];return i},get:function(t,e){var n=this.cache[this.key(t)];return void 0===e?n:n[e]},access:function(t,e,n){var r;return void 0===e||e&&"string"==typeof e&&void 0===n?(r=this.get(t,e),void 0!==r?r:this.get(t,rt.camelCase(e))):(this.set(t,e,n),void 0!==n?n:e)},remove:function(t,e){var n,r,o,i=this.key(t),a=this.cache[i];if(void 0===e)this.cache[i]={};else{rt.isArray(e)?r=e.concat(e.map(rt.camelCase)):(o=rt.camelCase(e),e in a?r=[e,o]:(r=o,r=r in a?[r]:r.match(mt)||[])),n=r.length;for(;n--;)delete a[r[n]]}},hasData:function(t){return!rt.isEmptyObject(this.cache[t[this.expando]]||{})},discard:function(t){t[this.expando]&&delete this.cache[t[this.expando]]}};var wt=new f,Mt=new f,kt=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Ct=/([A-Z])/g;rt.extend({hasData:function(t){return Mt.hasData(t)||wt.hasData(t)},data:function(t,e,n){return Mt.access(t,e,n)},removeData:function(t,e){Mt.remove(t,e)},_data:function(t,e,n){return wt.access(t,e,n)},_removeData:function(t,e){wt.remove(t,e)}}),rt.fn.extend({data:function(t,e){var n,r,o,i=this[0],a=i&&i.attributes;if(void 0===t){if(this.length&&(o=Mt.get(i),1===i.nodeType&&!wt.get(i,"hasDataAttrs"))){for(n=a.length;n--;)a[n]&&(r=a[n].name,0===r.indexOf("data-")&&(r=rt.camelCase(r.slice(5)),h(i,r,o[r])));wt.set(i,"hasDataAttrs",!0)}return o}return"object"==typeof t?this.each(function(){Mt.set(this,t)}):xt(this,function(e){var n,r=rt.camelCase(t);if(i&&void 0===e){if(n=Mt.get(i,t),void 0!==n)return n;if(n=Mt.get(i,r),void 0!==n)return n;if(n=h(i,r,void 0),void 0!==n)return n}else this.each(function(){var n=Mt.get(this,r);Mt.set(this,r,e),-1!==t.indexOf("-")&&void 0!==n&&Mt.set(this,t,e)})},null,e,arguments.length>1,null,!0)},removeData:function(t){return this.each(function(){Mt.remove(this,t)})}}),rt.extend({queue:function(t,e,n){var r;return t?(e=(e||"fx")+"queue",r=wt.get(t,e),n&&(!r||rt.isArray(n)?r=wt.access(t,e,rt.makeArray(n)):r.push(n)),r||[]):void 0},dequeue:function(t,e){e=e||"fx";var n=rt.queue(t,e),r=n.length,o=n.shift(),i=rt._queueHooks(t,e),a=function(){rt.dequeue(t,e)};"inprogress"===o&&(o=n.shift(),r--),o&&("fx"===e&&n.unshift("inprogress"),delete i.stop,o.call(t,a,i)),!r&&i&&i.empty.fire()},_queueHooks:function(t,e){var n=e+"queueHooks";return wt.get(t,n)||wt.access(t,n,{empty:rt.Callbacks("once memory").add(function(){wt.remove(t,[e+"queue",n])})})}}),rt.fn.extend({queue:function(t,e){var n=2;return"string"!=typeof t&&(e=t,t="fx",n--),arguments.length<n?rt.queue(this[0],t):void 0===e?this:this.each(function(){var n=rt.queue(this,t,e);rt._queueHooks(this,t),"fx"===t&&"inprogress"!==n[0]&&rt.dequeue(this,t)})},dequeue:function(t){return this.each(function(){rt.dequeue(this,t)})},clearQueue:function(t){return this.queue(t||"fx",[])},promise:function(t,e){var n,r=1,o=rt.Deferred(),i=this,a=this.length,u=function(){--r||o.resolveWith(i,[i])};for("string"!=typeof t&&(e=t,t=void 0),t=t||"fx";a--;)n=wt.get(i[a],t+"queueHooks"),n&&n.empty&&(r++,n.empty.add(u));return u(),o.promise(e)}});var St=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,_t=["Top","Right","Bottom","Left"],Et=function(t,e){return t=e||t,"none"===rt.css(t,"display")||!rt.contains(t.ownerDocument,t)},Tt=/^(?:checkbox|radio)$/i;!function(){var t=et.createDocumentFragment(),e=t.appendChild(et.createElement("div")),n=et.createElement("input");n.setAttribute("type","radio"),n.setAttribute("checked","checked"),n.setAttribute("name","t"),e.appendChild(n),tt.checkClone=e.cloneNode(!0).cloneNode(!0).lastChild.checked,e.innerHTML="<textarea>x</textarea>",tt.noCloneChecked=!!e.cloneNode(!0).lastChild.defaultValue}();var At="undefined";tt.focusinBubbles="onfocusin"in n;var Ot=/^key/,Nt=/^(?:mouse|pointer|contextmenu)|click/,jt=/^(?:focusinfocus|focusoutblur)$/,Pt=/^([^.]*)(?:\.(.+)|)$/;rt.event={global:{},add:function(t,e,n,r,o){var i,a,u,s,c,l,f,h,p,d,g,v=wt.get(t);if(v)for(n.handler&&(i=n,n=i.handler,o=i.selector),n.guid||(n.guid=rt.guid++),(s=v.events)||(s=v.events={}),(a=v.handle)||(a=v.handle=function(e){return typeof rt!==At&&rt.event.triggered!==e.type?rt.event.dispatch.apply(t,arguments):void 0}),e=(e||"").match(mt)||[""],c=e.length;c--;)u=Pt.exec(e[c])||[],p=g=u[1],d=(u[2]||"").split(".").sort(),p&&(f=rt.event.special[p]||{},p=(o?f.delegateType:f.bindType)||p,f=rt.event.special[p]||{},l=rt.extend({type:p,origType:g,data:r,handler:n,guid:n.guid,selector:o,needsContext:o&&rt.expr.match.needsContext.test(o),namespace:d.join(".")},i),(h=s[p])||(h=s[p]=[],h.delegateCount=0,f.setup&&f.setup.call(t,r,d,a)!==!1||t.addEventListener&&t.addEventListener(p,a,!1)),f.add&&(f.add.call(t,l),l.handler.guid||(l.handler.guid=n.guid)),o?h.splice(h.delegateCount++,0,l):h.push(l),rt.event.global[p]=!0)},remove:function(t,e,n,r,o){var i,a,u,s,c,l,f,h,p,d,g,v=wt.hasData(t)&&wt.get(t);if(v&&(s=v.events)){for(e=(e||"").match(mt)||[""],c=e.length;c--;)if(u=Pt.exec(e[c])||[],p=g=u[1],d=(u[2]||"").split(".").sort(),p){for(f=rt.event.special[p]||{},p=(r?f.delegateType:f.bindType)||p,h=s[p]||[],u=u[2]&&new RegExp("(^|\\.)"+d.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=i=h.length;i--;)l=h[i],!o&&g!==l.origType||n&&n.guid!==l.guid||u&&!u.test(l.namespace)||r&&r!==l.selector&&("**"!==r||!l.selector)||(h.splice(i,1),l.selector&&h.delegateCount--,f.remove&&f.remove.call(t,l));a&&!h.length&&(f.teardown&&f.teardown.call(t,d,v.handle)!==!1||rt.removeEvent(t,p,v.handle),delete s[p])}else for(p in s)rt.event.remove(t,p+e[c],n,r,!0);rt.isEmptyObject(s)&&(delete v.handle,wt.remove(t,"events"))}},trigger:function(t,e,r,o){var i,a,u,s,c,l,f,h=[r||et],p=Q.call(t,"type")?t.type:t,d=Q.call(t,"namespace")?t.namespace.split("."):[];if(a=u=r=r||et,3!==r.nodeType&&8!==r.nodeType&&!jt.test(p+rt.event.triggered)&&(p.indexOf(".")>=0&&(d=p.split("."),p=d.shift(),d.sort()),c=p.indexOf(":")<0&&"on"+p,t=t[rt.expando]?t:new rt.Event(p,"object"==typeof t&&t),
t.isTrigger=o?2:3,t.namespace=d.join("."),t.namespace_re=t.namespace?new RegExp("(^|\\.)"+d.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=r),e=null==e?[t]:rt.makeArray(e,[t]),f=rt.event.special[p]||{},o||!f.trigger||f.trigger.apply(r,e)!==!1)){if(!o&&!f.noBubble&&!rt.isWindow(r)){for(s=f.delegateType||p,jt.test(s+p)||(a=a.parentNode);a;a=a.parentNode)h.push(a),u=a;u===(r.ownerDocument||et)&&h.push(u.defaultView||u.parentWindow||n)}for(i=0;(a=h[i++])&&!t.isPropagationStopped();)t.type=i>1?s:f.bindType||p,l=(wt.get(a,"events")||{})[t.type]&&wt.get(a,"handle"),l&&l.apply(a,e),l=c&&a[c],l&&l.apply&&rt.acceptData(a)&&(t.result=l.apply(a,e),t.result===!1&&t.preventDefault());return t.type=p,o||t.isDefaultPrevented()||f._default&&f._default.apply(h.pop(),e)!==!1||!rt.acceptData(r)||c&&rt.isFunction(r[p])&&!rt.isWindow(r)&&(u=r[c],u&&(r[c]=null),rt.event.triggered=p,r[p](),rt.event.triggered=void 0,u&&(r[c]=u)),t.result}},dispatch:function(t){t=rt.event.fix(t);var e,n,r,o,i,a=[],u=V.call(arguments),s=(wt.get(this,"events")||{})[t.type]||[],c=rt.event.special[t.type]||{};if(u[0]=t,t.delegateTarget=this,!c.preDispatch||c.preDispatch.call(this,t)!==!1){for(a=rt.event.handlers.call(this,t,s),e=0;(o=a[e++])&&!t.isPropagationStopped();)for(t.currentTarget=o.elem,n=0;(i=o.handlers[n++])&&!t.isImmediatePropagationStopped();)(!t.namespace_re||t.namespace_re.test(i.namespace))&&(t.handleObj=i,t.data=i.data,r=((rt.event.special[i.origType]||{}).handle||i.handler).apply(o.elem,u),void 0!==r&&(t.result=r)===!1&&(t.preventDefault(),t.stopPropagation()));return c.postDispatch&&c.postDispatch.call(this,t),t.result}},handlers:function(t,e){var n,r,o,i,a=[],u=e.delegateCount,s=t.target;if(u&&s.nodeType&&(!t.button||"click"!==t.type))for(;s!==this;s=s.parentNode||this)if(s.disabled!==!0||"click"!==t.type){for(r=[],n=0;u>n;n++)i=e[n],o=i.selector+" ",void 0===r[o]&&(r[o]=i.needsContext?rt(o,this).index(s)>=0:rt.find(o,this,null,[s]).length),r[o]&&r.push(i);r.length&&a.push({elem:s,handlers:r})}return u<e.length&&a.push({elem:this,handlers:e.slice(u)}),a},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(t,e){return null==t.which&&(t.which=null!=e.charCode?e.charCode:e.keyCode),t}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(t,e){var n,r,o,i=e.button;return null==t.pageX&&null!=e.clientX&&(n=t.target.ownerDocument||et,r=n.documentElement,o=n.body,t.pageX=e.clientX+(r&&r.scrollLeft||o&&o.scrollLeft||0)-(r&&r.clientLeft||o&&o.clientLeft||0),t.pageY=e.clientY+(r&&r.scrollTop||o&&o.scrollTop||0)-(r&&r.clientTop||o&&o.clientTop||0)),t.which||void 0===i||(t.which=1&i?1:2&i?3:4&i?2:0),t}},fix:function(t){if(t[rt.expando])return t;var e,n,r,o=t.type,i=t,a=this.fixHooks[o];for(a||(this.fixHooks[o]=a=Nt.test(o)?this.mouseHooks:Ot.test(o)?this.keyHooks:{}),r=a.props?this.props.concat(a.props):this.props,t=new rt.Event(i),e=r.length;e--;)n=r[e],t[n]=i[n];return t.target||(t.target=et),3===t.target.nodeType&&(t.target=t.target.parentNode),a.filter?a.filter(t,i):t},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==g()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===g()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&rt.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(t){return rt.nodeName(t.target,"a")}},beforeunload:{postDispatch:function(t){void 0!==t.result&&t.originalEvent&&(t.originalEvent.returnValue=t.result)}}},simulate:function(t,e,n,r){var o=rt.extend(new rt.Event,n,{type:t,isSimulated:!0,originalEvent:{}});r?rt.event.trigger(o,null,e):rt.event.dispatch.call(e,o),o.isDefaultPrevented()&&n.preventDefault()}},rt.removeEvent=function(t,e,n){t.removeEventListener&&t.removeEventListener(e,n,!1)},rt.Event=function(t,e){return this instanceof rt.Event?(t&&t.type?(this.originalEvent=t,this.type=t.type,this.isDefaultPrevented=t.defaultPrevented||void 0===t.defaultPrevented&&t.returnValue===!1?p:d):this.type=t,e&&rt.extend(this,e),this.timeStamp=t&&t.timeStamp||rt.now(),void(this[rt.expando]=!0)):new rt.Event(t,e)},rt.Event.prototype={isDefaultPrevented:d,isPropagationStopped:d,isImmediatePropagationStopped:d,preventDefault:function(){var t=this.originalEvent;this.isDefaultPrevented=p,t&&t.preventDefault&&t.preventDefault()},stopPropagation:function(){var t=this.originalEvent;this.isPropagationStopped=p,t&&t.stopPropagation&&t.stopPropagation()},stopImmediatePropagation:function(){var t=this.originalEvent;this.isImmediatePropagationStopped=p,t&&t.stopImmediatePropagation&&t.stopImmediatePropagation(),this.stopPropagation()}},rt.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(t,e){rt.event.special[t]={delegateType:e,bindType:e,handle:function(t){var n,r=this,o=t.relatedTarget,i=t.handleObj;return(!o||o!==r&&!rt.contains(r,o))&&(t.type=i.origType,n=i.handler.apply(this,arguments),t.type=e),n}}}),tt.focusinBubbles||rt.each({focus:"focusin",blur:"focusout"},function(t,e){var n=function(t){rt.event.simulate(e,t.target,rt.event.fix(t),!0)};rt.event.special[e]={setup:function(){var r=this.ownerDocument||this,o=wt.access(r,e);o||r.addEventListener(t,n,!0),wt.access(r,e,(o||0)+1)},teardown:function(){var r=this.ownerDocument||this,o=wt.access(r,e)-1;o?wt.access(r,e,o):(r.removeEventListener(t,n,!0),wt.remove(r,e))}}}),rt.fn.extend({on:function(t,e,n,r,o){var i,a;if("object"==typeof t){"string"!=typeof e&&(n=n||e,e=void 0);for(a in t)this.on(a,e,n,t[a],o);return this}if(null==n&&null==r?(r=e,n=e=void 0):null==r&&("string"==typeof e?(r=n,n=void 0):(r=n,n=e,e=void 0)),r===!1)r=d;else if(!r)return this;return 1===o&&(i=r,r=function(t){return rt().off(t),i.apply(this,arguments)},r.guid=i.guid||(i.guid=rt.guid++)),this.each(function(){rt.event.add(this,t,r,n,e)})},one:function(t,e,n,r){return this.on(t,e,n,r,1)},off:function(t,e,n){var r,o;if(t&&t.preventDefault&&t.handleObj)return r=t.handleObj,rt(t.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof t){for(o in t)this.off(o,e,t[o]);return this}return(e===!1||"function"==typeof e)&&(n=e,e=void 0),n===!1&&(n=d),this.each(function(){rt.event.remove(this,t,n,e)})},trigger:function(t,e){return this.each(function(){rt.event.trigger(t,e,this)})},triggerHandler:function(t,e){var n=this[0];return n?rt.event.trigger(t,e,n,!0):void 0}});var Dt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,Rt=/<([\w:]+)/,Ft=/<|&#?\w+;/,Lt=/<(?:script|style|link)/i,It=/checked\s*(?:[^=]|=\s*.checked.)/i,qt=/^$|\/(?:java|ecma)script/i,Bt=/^true\/(.*)/,zt=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,Ht={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};Ht.optgroup=Ht.option,Ht.tbody=Ht.tfoot=Ht.colgroup=Ht.caption=Ht.thead,Ht.th=Ht.td,rt.extend({clone:function(t,e,n){var r,o,i,a,u=t.cloneNode(!0),s=rt.contains(t.ownerDocument,t);if(!(tt.noCloneChecked||1!==t.nodeType&&11!==t.nodeType||rt.isXMLDoc(t)))for(a=w(u),i=w(t),r=0,o=i.length;o>r;r++)M(i[r],a[r]);if(e)if(n)for(i=i||w(t),a=a||w(u),r=0,o=i.length;o>r;r++)x(i[r],a[r]);else x(t,u);return a=w(u,"script"),a.length>0&&b(a,!s&&w(t,"script")),u},buildFragment:function(t,e,n,r){for(var o,i,a,u,s,c,l=e.createDocumentFragment(),f=[],h=0,p=t.length;p>h;h++)if(o=t[h],o||0===o)if("object"===rt.type(o))rt.merge(f,o.nodeType?[o]:o);else if(Ft.test(o)){for(i=i||l.appendChild(e.createElement("div")),a=(Rt.exec(o)||["",""])[1].toLowerCase(),u=Ht[a]||Ht._default,i.innerHTML=u[1]+o.replace(Dt,"<$1></$2>")+u[2],c=u[0];c--;)i=i.lastChild;rt.merge(f,i.childNodes),i=l.firstChild,i.textContent=""}else f.push(e.createTextNode(o));for(l.textContent="",h=0;o=f[h++];)if((!r||-1===rt.inArray(o,r))&&(s=rt.contains(o.ownerDocument,o),i=w(l.appendChild(o),"script"),s&&b(i),n))for(c=0;o=i[c++];)qt.test(o.type||"")&&n.push(o);return l},cleanData:function(t){for(var e,n,r,o,i=rt.event.special,a=0;void 0!==(n=t[a]);a++){if(rt.acceptData(n)&&(o=n[wt.expando],o&&(e=wt.cache[o]))){if(e.events)for(r in e.events)i[r]?rt.event.remove(n,r):rt.removeEvent(n,r,e.handle);wt.cache[o]&&delete wt.cache[o]}delete Mt.cache[n[Mt.expando]]}}}),rt.fn.extend({text:function(t){return xt(this,function(t){return void 0===t?rt.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=t)})},null,t,arguments.length)},append:function(){return this.domManip(arguments,function(t){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var e=v(this,t);e.appendChild(t)}})},prepend:function(){return this.domManip(arguments,function(t){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var e=v(this,t);e.insertBefore(t,e.firstChild)}})},before:function(){return this.domManip(arguments,function(t){this.parentNode&&this.parentNode.insertBefore(t,this)})},after:function(){return this.domManip(arguments,function(t){this.parentNode&&this.parentNode.insertBefore(t,this.nextSibling)})},remove:function(t,e){for(var n,r=t?rt.filter(t,this):this,o=0;null!=(n=r[o]);o++)e||1!==n.nodeType||rt.cleanData(w(n)),n.parentNode&&(e&&rt.contains(n.ownerDocument,n)&&b(w(n,"script")),n.parentNode.removeChild(n));return this},empty:function(){for(var t,e=0;null!=(t=this[e]);e++)1===t.nodeType&&(rt.cleanData(w(t,!1)),t.textContent="");return this},clone:function(t,e){return t=null==t?!1:t,e=null==e?t:e,this.map(function(){return rt.clone(this,t,e)})},html:function(t){return xt(this,function(t){var e=this[0]||{},n=0,r=this.length;if(void 0===t&&1===e.nodeType)return e.innerHTML;if("string"==typeof t&&!Lt.test(t)&&!Ht[(Rt.exec(t)||["",""])[1].toLowerCase()]){t=t.replace(Dt,"<$1></$2>");try{for(;r>n;n++)e=this[n]||{},1===e.nodeType&&(rt.cleanData(w(e,!1)),e.innerHTML=t);e=0}catch(o){}}e&&this.empty().append(t)},null,t,arguments.length)},replaceWith:function(){var t=arguments[0];return this.domManip(arguments,function(e){t=this.parentNode,rt.cleanData(w(this)),t&&t.replaceChild(e,this)}),t&&(t.length||t.nodeType)?this:this.remove()},detach:function(t){return this.remove(t,!0)},domManip:function(t,e){t=Y.apply([],t);var n,r,o,i,a,u,s=0,c=this.length,l=this,f=c-1,h=t[0],p=rt.isFunction(h);if(p||c>1&&"string"==typeof h&&!tt.checkClone&&It.test(h))return this.each(function(n){var r=l.eq(n);p&&(t[0]=h.call(this,n,r.html())),r.domManip(t,e)});if(c&&(n=rt.buildFragment(t,this[0].ownerDocument,!1,this),r=n.firstChild,1===n.childNodes.length&&(n=r),r)){for(o=rt.map(w(n,"script"),m),i=o.length;c>s;s++)a=n,s!==f&&(a=rt.clone(a,!0,!0),i&&rt.merge(o,w(a,"script"))),e.call(this[s],a,s);if(i)for(u=o[o.length-1].ownerDocument,rt.map(o,y),s=0;i>s;s++)a=o[s],qt.test(a.type||"")&&!wt.access(a,"globalEval")&&rt.contains(u,a)&&(a.src?rt._evalUrl&&rt._evalUrl(a.src):rt.globalEval(a.textContent.replace(zt,"")))}return this}}),rt.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(t,e){rt.fn[t]=function(t){for(var n,r=[],o=rt(t),i=o.length-1,a=0;i>=a;a++)n=a===i?this:this.clone(!0),rt(o[a])[e](n),X.apply(r,n.get());return this.pushStack(r)}});var Wt,Ut={},$t=/^margin/,Gt=new RegExp("^("+St+")(?!px)[a-z%]+$","i"),Vt=function(t){return t.ownerDocument.defaultView.opener?t.ownerDocument.defaultView.getComputedStyle(t,null):n.getComputedStyle(t,null)};!function(){function t(){a.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",a.innerHTML="",o.appendChild(i);var t=n.getComputedStyle(a,null);e="1%"!==t.top,r="4px"===t.width,o.removeChild(i)}var e,r,o=et.documentElement,i=et.createElement("div"),a=et.createElement("div");a.style&&(a.style.backgroundClip="content-box",a.cloneNode(!0).style.backgroundClip="",tt.clearCloneStyle="content-box"===a.style.backgroundClip,i.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",i.appendChild(a),n.getComputedStyle&&rt.extend(tt,{pixelPosition:function(){return t(),e},boxSizingReliable:function(){return null==r&&t(),r},reliableMarginRight:function(){var t,e=a.appendChild(et.createElement("div"));return e.style.cssText=a.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",e.style.marginRight=e.style.width="0",a.style.width="1px",o.appendChild(i),t=!parseFloat(n.getComputedStyle(e,null).marginRight),o.removeChild(i),a.removeChild(e),t}}))}(),rt.swap=function(t,e,n,r){var o,i,a={};for(i in e)a[i]=t.style[i],t.style[i]=e[i];o=n.apply(t,r||[]);for(i in e)t.style[i]=a[i];return o};var Yt=/^(none|table(?!-c[ea]).+)/,Xt=new RegExp("^("+St+")(.*)$","i"),Zt=new RegExp("^([+-])=("+St+")","i"),Kt={position:"absolute",visibility:"hidden",display:"block"},Jt={letterSpacing:"0",fontWeight:"400"},Qt=["Webkit","O","Moz","ms"];rt.extend({cssHooks:{opacity:{get:function(t,e){if(e){var n=S(t,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(t,e,n,r){if(t&&3!==t.nodeType&&8!==t.nodeType&&t.style){var o,i,a,u=rt.camelCase(e),s=t.style;return e=rt.cssProps[u]||(rt.cssProps[u]=E(s,u)),a=rt.cssHooks[e]||rt.cssHooks[u],void 0===n?a&&"get"in a&&void 0!==(o=a.get(t,!1,r))?o:s[e]:(i=typeof n,"string"===i&&(o=Zt.exec(n))&&(n=(o[1]+1)*o[2]+parseFloat(rt.css(t,e)),i="number"),null!=n&&n===n&&("number"!==i||rt.cssNumber[u]||(n+="px"),tt.clearCloneStyle||""!==n||0!==e.indexOf("background")||(s[e]="inherit"),a&&"set"in a&&void 0===(n=a.set(t,n,r))||(s[e]=n)),void 0)}},css:function(t,e,n,r){var o,i,a,u=rt.camelCase(e);return e=rt.cssProps[u]||(rt.cssProps[u]=E(t.style,u)),a=rt.cssHooks[e]||rt.cssHooks[u],a&&"get"in a&&(o=a.get(t,!0,n)),void 0===o&&(o=S(t,e,r)),"normal"===o&&e in Jt&&(o=Jt[e]),""===n||n?(i=parseFloat(o),n===!0||rt.isNumeric(i)?i||0:o):o}}),rt.each(["height","width"],function(t,e){rt.cssHooks[e]={get:function(t,n,r){return n?Yt.test(rt.css(t,"display"))&&0===t.offsetWidth?rt.swap(t,Kt,function(){return O(t,e,r)}):O(t,e,r):void 0},set:function(t,n,r){var o=r&&Vt(t);return T(t,n,r?A(t,e,r,"border-box"===rt.css(t,"boxSizing",!1,o),o):0)}}}),rt.cssHooks.marginRight=_(tt.reliableMarginRight,function(t,e){return e?rt.swap(t,{display:"inline-block"},S,[t,"marginRight"]):void 0}),rt.each({margin:"",padding:"",border:"Width"},function(t,e){rt.cssHooks[t+e]={expand:function(n){for(var r=0,o={},i="string"==typeof n?n.split(" "):[n];4>r;r++)o[t+_t[r]+e]=i[r]||i[r-2]||i[0];return o}},$t.test(t)||(rt.cssHooks[t+e].set=T)}),rt.fn.extend({css:function(t,e){return xt(this,function(t,e,n){var r,o,i={},a=0;if(rt.isArray(e)){for(r=Vt(t),o=e.length;o>a;a++)i[e[a]]=rt.css(t,e[a],!1,r);return i}return void 0!==n?rt.style(t,e,n):rt.css(t,e)},t,e,arguments.length>1)},show:function(){return N(this,!0)},hide:function(){return N(this)},toggle:function(t){return"boolean"==typeof t?t?this.show():this.hide():this.each(function(){Et(this)?rt(this).show():rt(this).hide()})}}),rt.Tween=j,j.prototype={constructor:j,init:function(t,e,n,r,o,i){this.elem=t,this.prop=n,this.easing=o||"swing",this.options=e,this.start=this.now=this.cur(),this.end=r,this.unit=i||(rt.cssNumber[n]?"":"px")},cur:function(){var t=j.propHooks[this.prop];return t&&t.get?t.get(this):j.propHooks._default.get(this)},run:function(t){var e,n=j.propHooks[this.prop];return this.options.duration?this.pos=e=rt.easing[this.easing](t,this.options.duration*t,0,1,this.options.duration):this.pos=e=t,this.now=(this.end-this.start)*e+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):j.propHooks._default.set(this),this}},j.prototype.init.prototype=j.prototype,j.propHooks={_default:{get:function(t){var e;return null==t.elem[t.prop]||t.elem.style&&null!=t.elem.style[t.prop]?(e=rt.css(t.elem,t.prop,""),e&&"auto"!==e?e:0):t.elem[t.prop]},set:function(t){rt.fx.step[t.prop]?rt.fx.step[t.prop](t):t.elem.style&&(null!=t.elem.style[rt.cssProps[t.prop]]||rt.cssHooks[t.prop])?rt.style(t.elem,t.prop,t.now+t.unit):t.elem[t.prop]=t.now}}},j.propHooks.scrollTop=j.propHooks.scrollLeft={set:function(t){t.elem.nodeType&&t.elem.parentNode&&(t.elem[t.prop]=t.now)}},rt.easing={linear:function(t){return t},swing:function(t){return.5-Math.cos(t*Math.PI)/2}},rt.fx=j.prototype.init,rt.fx.step={};var te,ee,ne=/^(?:toggle|show|hide)$/,re=new RegExp("^(?:([+-])=|)("+St+")([a-z%]*)$","i"),oe=/queueHooks$/,ie=[F],ae={"*":[function(t,e){var n=this.createTween(t,e),r=n.cur(),o=re.exec(e),i=o&&o[3]||(rt.cssNumber[t]?"":"px"),a=(rt.cssNumber[t]||"px"!==i&&+r)&&re.exec(rt.css(n.elem,t)),u=1,s=20;if(a&&a[3]!==i){i=i||a[3],o=o||[],a=+r||1;do u=u||".5",a/=u,rt.style(n.elem,t,a+i);while(u!==(u=n.cur()/r)&&1!==u&&--s)}return o&&(a=n.start=+a||+r||0,n.unit=i,n.end=o[1]?a+(o[1]+1)*o[2]:+o[2]),n}]};rt.Animation=rt.extend(I,{tweener:function(t,e){rt.isFunction(t)?(e=t,t=["*"]):t=t.split(" ");for(var n,r=0,o=t.length;o>r;r++)n=t[r],ae[n]=ae[n]||[],ae[n].unshift(e)},prefilter:function(t,e){e?ie.unshift(t):ie.push(t)}}),rt.speed=function(t,e,n){var r=t&&"object"==typeof t?rt.extend({},t):{complete:n||!n&&e||rt.isFunction(t)&&t,duration:t,easing:n&&e||e&&!rt.isFunction(e)&&e};return r.duration=rt.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in rt.fx.speeds?rt.fx.speeds[r.duration]:rt.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){rt.isFunction(r.old)&&r.old.call(this),r.queue&&rt.dequeue(this,r.queue)},r},rt.fn.extend({fadeTo:function(t,e,n,r){return this.filter(Et).css("opacity",0).show().end().animate({opacity:e},t,n,r)},animate:function(t,e,n,r){var o=rt.isEmptyObject(t),i=rt.speed(e,n,r),a=function(){var e=I(this,rt.extend({},t),i);(o||wt.get(this,"finish"))&&e.stop(!0)};return a.finish=a,o||i.queue===!1?this.each(a):this.queue(i.queue,a)},stop:function(t,e,n){var r=function(t){var e=t.stop;delete t.stop,e(n)};return"string"!=typeof t&&(n=e,e=t,t=void 0),e&&t!==!1&&this.queue(t||"fx",[]),this.each(function(){var e=!0,o=null!=t&&t+"queueHooks",i=rt.timers,a=wt.get(this);if(o)a[o]&&a[o].stop&&r(a[o]);else for(o in a)a[o]&&a[o].stop&&oe.test(o)&&r(a[o]);for(o=i.length;o--;)i[o].elem!==this||null!=t&&i[o].queue!==t||(i[o].anim.stop(n),e=!1,i.splice(o,1));(e||!n)&&rt.dequeue(this,t)})},finish:function(t){return t!==!1&&(t=t||"fx"),this.each(function(){var e,n=wt.get(this),r=n[t+"queue"],o=n[t+"queueHooks"],i=rt.timers,a=r?r.length:0;for(n.finish=!0,rt.queue(this,t,[]),o&&o.stop&&o.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===t&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;a>e;e++)r[e]&&r[e].finish&&r[e].finish.call(this);delete n.finish})}}),rt.each(["toggle","show","hide"],function(t,e){var n=rt.fn[e];rt.fn[e]=function(t,r,o){return null==t||"boolean"==typeof t?n.apply(this,arguments):this.animate(D(e,!0),t,r,o)}}),rt.each({slideDown:D("show"),slideUp:D("hide"),slideToggle:D("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(t,e){rt.fn[t]=function(t,n,r){return this.animate(e,t,n,r)}}),rt.timers=[],rt.fx.tick=function(){var t,e=0,n=rt.timers;for(te=rt.now();e<n.length;e++)t=n[e],t()||n[e]!==t||n.splice(e--,1);n.length||rt.fx.stop(),te=void 0},rt.fx.timer=function(t){rt.timers.push(t),t()?rt.fx.start():rt.timers.pop()},rt.fx.interval=13,rt.fx.start=function(){ee||(ee=setInterval(rt.fx.tick,rt.fx.interval))},rt.fx.stop=function(){clearInterval(ee),ee=null},rt.fx.speeds={slow:600,fast:200,_default:400},rt.fn.delay=function(t,e){return t=rt.fx?rt.fx.speeds[t]||t:t,e=e||"fx",this.queue(e,function(e,n){var r=setTimeout(e,t);n.stop=function(){clearTimeout(r)}})},function(){var t=et.createElement("input"),e=et.createElement("select"),n=e.appendChild(et.createElement("option"));t.type="checkbox",tt.checkOn=""!==t.value,tt.optSelected=n.selected,e.disabled=!0,tt.optDisabled=!n.disabled,t=et.createElement("input"),t.value="t",t.type="radio",tt.radioValue="t"===t.value}();var ue,se,ce=rt.expr.attrHandle;rt.fn.extend({attr:function(t,e){return xt(this,rt.attr,t,e,arguments.length>1)},removeAttr:function(t){return this.each(function(){rt.removeAttr(this,t)})}}),rt.extend({attr:function(t,e,n){var r,o,i=t.nodeType;if(t&&3!==i&&8!==i&&2!==i)return typeof t.getAttribute===At?rt.prop(t,e,n):(1===i&&rt.isXMLDoc(t)||(e=e.toLowerCase(),r=rt.attrHooks[e]||(rt.expr.match.bool.test(e)?se:ue)),void 0===n?r&&"get"in r&&null!==(o=r.get(t,e))?o:(o=rt.find.attr(t,e),null==o?void 0:o):null!==n?r&&"set"in r&&void 0!==(o=r.set(t,n,e))?o:(t.setAttribute(e,n+""),n):void rt.removeAttr(t,e))},removeAttr:function(t,e){var n,r,o=0,i=e&&e.match(mt);if(i&&1===t.nodeType)for(;n=i[o++];)r=rt.propFix[n]||n,rt.expr.match.bool.test(n)&&(t[r]=!1),t.removeAttribute(n)},attrHooks:{type:{set:function(t,e){if(!tt.radioValue&&"radio"===e&&rt.nodeName(t,"input")){var n=t.value;return t.setAttribute("type",e),n&&(t.value=n),e}}}}}),se={set:function(t,e,n){return e===!1?rt.removeAttr(t,n):t.setAttribute(n,n),n}},rt.each(rt.expr.match.bool.source.match(/\w+/g),function(t,e){var n=ce[e]||rt.find.attr;ce[e]=function(t,e,r){var o,i;return r||(i=ce[e],ce[e]=o,o=null!=n(t,e,r)?e.toLowerCase():null,ce[e]=i),o}});var le=/^(?:input|select|textarea|button)$/i;rt.fn.extend({prop:function(t,e){return xt(this,rt.prop,t,e,arguments.length>1)},removeProp:function(t){return this.each(function(){delete this[rt.propFix[t]||t]})}}),rt.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(t,e,n){var r,o,i,a=t.nodeType;if(t&&3!==a&&8!==a&&2!==a)return i=1!==a||!rt.isXMLDoc(t),i&&(e=rt.propFix[e]||e,o=rt.propHooks[e]),void 0!==n?o&&"set"in o&&void 0!==(r=o.set(t,n,e))?r:t[e]=n:o&&"get"in o&&null!==(r=o.get(t,e))?r:t[e]},propHooks:{tabIndex:{get:function(t){return t.hasAttribute("tabindex")||le.test(t.nodeName)||t.href?t.tabIndex:-1}}}}),tt.optSelected||(rt.propHooks.selected={get:function(t){var e=t.parentNode;return e&&e.parentNode&&e.parentNode.selectedIndex,null}}),rt.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){rt.propFix[this.toLowerCase()]=this});var fe=/[\t\r\n\f]/g;rt.fn.extend({addClass:function(t){var e,n,r,o,i,a,u="string"==typeof t&&t,s=0,c=this.length;if(rt.isFunction(t))return this.each(function(e){rt(this).addClass(t.call(this,e,this.className))});if(u)for(e=(t||"").match(mt)||[];c>s;s++)if(n=this[s],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(fe," "):" ")){for(i=0;o=e[i++];)r.indexOf(" "+o+" ")<0&&(r+=o+" ");a=rt.trim(r),n.className!==a&&(n.className=a)}return this},removeClass:function(t){var e,n,r,o,i,a,u=0===arguments.length||"string"==typeof t&&t,s=0,c=this.length;if(rt.isFunction(t))return this.each(function(e){rt(this).removeClass(t.call(this,e,this.className))});if(u)for(e=(t||"").match(mt)||[];c>s;s++)if(n=this[s],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(fe," "):"")){for(i=0;o=e[i++];)for(;r.indexOf(" "+o+" ")>=0;)r=r.replace(" "+o+" "," ");a=t?rt.trim(r):"",n.className!==a&&(n.className=a)}return this},toggleClass:function(t,e){var n=typeof t;return"boolean"==typeof e&&"string"===n?e?this.addClass(t):this.removeClass(t):rt.isFunction(t)?this.each(function(n){rt(this).toggleClass(t.call(this,n,this.className,e),e)}):this.each(function(){if("string"===n)for(var e,r=0,o=rt(this),i=t.match(mt)||[];e=i[r++];)o.hasClass(e)?o.removeClass(e):o.addClass(e);else(n===At||"boolean"===n)&&(this.className&&wt.set(this,"__className__",this.className),this.className=this.className||t===!1?"":wt.get(this,"__className__")||"")})},hasClass:function(t){for(var e=" "+t+" ",n=0,r=this.length;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(fe," ").indexOf(e)>=0)return!0;return!1}});var he=/\r/g;rt.fn.extend({val:function(t){var e,n,r,o=this[0];{if(arguments.length)return r=rt.isFunction(t),this.each(function(n){var o;1===this.nodeType&&(o=r?t.call(this,n,rt(this).val()):t,null==o?o="":"number"==typeof o?o+="":rt.isArray(o)&&(o=rt.map(o,function(t){return null==t?"":t+""})),e=rt.valHooks[this.type]||rt.valHooks[this.nodeName.toLowerCase()],e&&"set"in e&&void 0!==e.set(this,o,"value")||(this.value=o))});if(o)return e=rt.valHooks[o.type]||rt.valHooks[o.nodeName.toLowerCase()],e&&"get"in e&&void 0!==(n=e.get(o,"value"))?n:(n=o.value,"string"==typeof n?n.replace(he,""):null==n?"":n)}}}),rt.extend({valHooks:{option:{get:function(t){var e=rt.find.attr(t,"value");return null!=e?e:rt.trim(rt.text(t))}},select:{get:function(t){for(var e,n,r=t.options,o=t.selectedIndex,i="select-one"===t.type||0>o,a=i?null:[],u=i?o+1:r.length,s=0>o?u:i?o:0;u>s;s++)if(n=r[s],(n.selected||s===o)&&(tt.optDisabled?!n.disabled:null===n.getAttribute("disabled"))&&(!n.parentNode.disabled||!rt.nodeName(n.parentNode,"optgroup"))){if(e=rt(n).val(),i)return e;a.push(e)}return a},set:function(t,e){for(var n,r,o=t.options,i=rt.makeArray(e),a=o.length;a--;)r=o[a],(r.selected=rt.inArray(r.value,i)>=0)&&(n=!0);return n||(t.selectedIndex=-1),i}}}}),rt.each(["radio","checkbox"],function(){rt.valHooks[this]={set:function(t,e){return rt.isArray(e)?t.checked=rt.inArray(rt(t).val(),e)>=0:void 0}},tt.checkOn||(rt.valHooks[this].get=function(t){return null===t.getAttribute("value")?"on":t.value})}),rt.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(t,e){rt.fn[e]=function(t,n){return arguments.length>0?this.on(e,null,t,n):this.trigger(e)}}),rt.fn.extend({hover:function(t,e){return this.mouseenter(t).mouseleave(e||t)},bind:function(t,e,n){return this.on(t,null,e,n)},unbind:function(t,e){return this.off(t,null,e)},delegate:function(t,e,n,r){return this.on(e,t,n,r)},undelegate:function(t,e,n){return 1===arguments.length?this.off(t,"**"):this.off(e,t||"**",n)}});var pe=rt.now(),de=/\?/;rt.parseJSON=function(t){return JSON.parse(t+"")},rt.parseXML=function(t){var e,n;if(!t||"string"!=typeof t)return null;try{n=new DOMParser,e=n.parseFromString(t,"text/xml")}catch(r){e=void 0}return(!e||e.getElementsByTagName("parsererror").length)&&rt.error("Invalid XML: "+t),e};var ge=/#.*$/,ve=/([?&])_=[^&]*/,me=/^(.*?):[ \t]*([^\r\n]*)$/gm,ye=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,be=/^(?:GET|HEAD)$/,xe=/^\/\//,we=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Me={},ke={},Ce="*/".concat("*"),Se=n.location.href,_e=we.exec(Se.toLowerCase())||[];rt.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Se,type:"GET",isLocal:ye.test(_e[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Ce,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":rt.parseJSON,"text xml":rt.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(t,e){return e?z(z(t,rt.ajaxSettings),e):z(rt.ajaxSettings,t)},ajaxPrefilter:q(Me),ajaxTransport:q(ke),ajax:function(t,e){function n(t,e,n,a){var s,l,m,y,x,M=e;2!==b&&(b=2,u&&clearTimeout(u),r=void 0,i=a||"",w.readyState=t>0?4:0,s=t>=200&&300>t||304===t,n&&(y=H(f,w,n)),y=W(f,y,w,s),s?(f.ifModified&&(x=w.getResponseHeader("Last-Modified"),x&&(rt.lastModified[o]=x),x=w.getResponseHeader("etag"),x&&(rt.etag[o]=x)),204===t||"HEAD"===f.type?M="nocontent":304===t?M="notmodified":(M=y.state,l=y.data,m=y.error,s=!m)):(m=M,(t||!M)&&(M="error",0>t&&(t=0))),w.status=t,w.statusText=(e||M)+"",s?d.resolveWith(h,[l,M,w]):d.rejectWith(h,[w,M,m]),w.statusCode(v),v=void 0,c&&p.trigger(s?"ajaxSuccess":"ajaxError",[w,f,s?l:m]),g.fireWith(h,[w,M]),c&&(p.trigger("ajaxComplete",[w,f]),--rt.active||rt.event.trigger("ajaxStop")))}"object"==typeof t&&(e=t,t=void 0),e=e||{};var r,o,i,a,u,s,c,l,f=rt.ajaxSetup({},e),h=f.context||f,p=f.context&&(h.nodeType||h.jquery)?rt(h):rt.event,d=rt.Deferred(),g=rt.Callbacks("once memory"),v=f.statusCode||{},m={},y={},b=0,x="canceled",w={readyState:0,getResponseHeader:function(t){var e;if(2===b){if(!a)for(a={};e=me.exec(i);)a[e[1].toLowerCase()]=e[2];e=a[t.toLowerCase()]}return null==e?null:e},getAllResponseHeaders:function(){return 2===b?i:null},setRequestHeader:function(t,e){var n=t.toLowerCase();return b||(t=y[n]=y[n]||t,m[t]=e),this},overrideMimeType:function(t){return b||(f.mimeType=t),this},statusCode:function(t){var e;if(t)if(2>b)for(e in t)v[e]=[v[e],t[e]];else w.always(t[w.status]);return this},abort:function(t){var e=t||x;return r&&r.abort(e),n(0,e),this}};if(d.promise(w).complete=g.add,w.success=w.done,w.error=w.fail,f.url=((t||f.url||Se)+"").replace(ge,"").replace(xe,_e[1]+"//"),f.type=e.method||e.type||f.method||f.type,f.dataTypes=rt.trim(f.dataType||"*").toLowerCase().match(mt)||[""],null==f.crossDomain&&(s=we.exec(f.url.toLowerCase()),f.crossDomain=!(!s||s[1]===_e[1]&&s[2]===_e[2]&&(s[3]||("http:"===s[1]?"80":"443"))===(_e[3]||("http:"===_e[1]?"80":"443")))),f.data&&f.processData&&"string"!=typeof f.data&&(f.data=rt.param(f.data,f.traditional)),B(Me,f,e,w),2===b)return w;c=rt.event&&f.global,c&&0===rt.active++&&rt.event.trigger("ajaxStart"),f.type=f.type.toUpperCase(),f.hasContent=!be.test(f.type),o=f.url,f.hasContent||(f.data&&(o=f.url+=(de.test(o)?"&":"?")+f.data,delete f.data),f.cache===!1&&(f.url=ve.test(o)?o.replace(ve,"$1_="+pe++):o+(de.test(o)?"&":"?")+"_="+pe++)),f.ifModified&&(rt.lastModified[o]&&w.setRequestHeader("If-Modified-Since",rt.lastModified[o]),rt.etag[o]&&w.setRequestHeader("If-None-Match",rt.etag[o])),(f.data&&f.hasContent&&f.contentType!==!1||e.contentType)&&w.setRequestHeader("Content-Type",f.contentType),w.setRequestHeader("Accept",f.dataTypes[0]&&f.accepts[f.dataTypes[0]]?f.accepts[f.dataTypes[0]]+("*"!==f.dataTypes[0]?", "+Ce+"; q=0.01":""):f.accepts["*"]);for(l in f.headers)w.setRequestHeader(l,f.headers[l]);if(f.beforeSend&&(f.beforeSend.call(h,w,f)===!1||2===b))return w.abort();x="abort";for(l in{success:1,error:1,complete:1})w[l](f[l]);if(r=B(ke,f,e,w)){w.readyState=1,c&&p.trigger("ajaxSend",[w,f]),f.async&&f.timeout>0&&(u=setTimeout(function(){w.abort("timeout")},f.timeout));try{b=1,r.send(m,n)}catch(M){if(!(2>b))throw M;n(-1,M)}}else n(-1,"No Transport");return w},getJSON:function(t,e,n){return rt.get(t,e,n,"json")},getScript:function(t,e){return rt.get(t,void 0,e,"script")}}),rt.each(["get","post"],function(t,e){rt[e]=function(t,n,r,o){return rt.isFunction(n)&&(o=o||r,r=n,n=void 0),rt.ajax({url:t,type:e,dataType:o,data:n,success:r})}}),rt._evalUrl=function(t){return rt.ajax({url:t,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},rt.fn.extend({wrapAll:function(t){var e;return rt.isFunction(t)?this.each(function(e){rt(this).wrapAll(t.call(this,e))}):(this[0]&&(e=rt(t,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&e.insertBefore(this[0]),e.map(function(){for(var t=this;t.firstElementChild;)t=t.firstElementChild;return t}).append(this)),this)},wrapInner:function(t){return rt.isFunction(t)?this.each(function(e){rt(this).wrapInner(t.call(this,e))}):this.each(function(){var e=rt(this),n=e.contents();n.length?n.wrapAll(t):e.append(t)})},wrap:function(t){var e=rt.isFunction(t);return this.each(function(n){rt(this).wrapAll(e?t.call(this,n):t);
})
},
	unwrap: function () {
		return this.parent().each(function () {
			rt.nodeName(this, "body") || rt(this).replaceWith(this.childNodes)
		}).end()
	}
}), rt.expr.filters.hidden = function (t) {
	return t.offsetWidth <= 0 && t.offsetHeight <= 0
}, rt.expr.filters.visible = function (t) {
	return !rt.expr.filters.hidden(t)
};
	var Ee = /%20/g, Te = /\[\]$/, Ae = /\r?\n/g, Oe = /^(?:submit|button|image|reset|file)$/i, Ne = /^(?:input|select|textarea|keygen)/i;
	rt.param = function (t, e) {
		var n, r = [], o = function (t, e) {
			e = rt.isFunction(e) ? e() : null == e ? "" : e, r[r.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
		};
		if (void 0 === e && (e = rt.ajaxSettings && rt.ajaxSettings.traditional), rt.isArray(t) || t.jquery && !rt.isPlainObject(t))rt.each(t, function () {
			o(this.name, this.value)
		}); else for (n in t)U(n, t[n], e, o);
		return r.join("&").replace(Ee, "+")
	}, rt.fn.extend({
		serialize: function () {
			return rt.param(this.serializeArray())
		}, serializeArray: function () {
			return this.map(function () {
				var t = rt.prop(this, "elements");
				return t ? rt.makeArray(t) : this
			}).filter(function () {
				var t = this.type;
				return this.name && !rt(this).is(":disabled") && Ne.test(this.nodeName) && !Oe.test(t) && (this.checked || !Tt.test(t))
			}).map(function (t, e) {
				var n = rt(this).val();
				return null == n ? null : rt.isArray(n) ? rt.map(n, function (t) {
					return {name: e.name, value: t.replace(Ae, "\r\n")}
				}) : {name: e.name, value: n.replace(Ae, "\r\n")}
			}).get()
		}
	}), rt.ajaxSettings.xhr = function () {
		try {
			return new XMLHttpRequest
		} catch (t) {
		}
	};
	var je = 0, Pe = {}, De = {0: 200, 1223: 204}, Re = rt.ajaxSettings.xhr();
	n.attachEvent && n.attachEvent("onunload", function () {
		for (var t in Pe)Pe[t]()
	}), tt.cors = !!Re && "withCredentials" in Re, tt.ajax = Re = !!Re, rt.ajaxTransport(function (t) {
		var e;
		return tt.cors || Re && !t.crossDomain ? {
			send: function (n, r) {
				var o, i = t.xhr(), a = ++je;
				if (i.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)for (o in t.xhrFields)i[o] = t.xhrFields[o];
				t.mimeType && i.overrideMimeType && i.overrideMimeType(t.mimeType), t.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
				for (o in n)i.setRequestHeader(o, n[o]);
				e = function (t) {
					return function () {
						e && (delete Pe[a], e = i.onload = i.onerror = null, "abort" === t ? i.abort() : "error" === t ? r(i.status, i.statusText) : r(De[i.status] || i.status, i.statusText, "string" == typeof i.responseText ? {text: i.responseText} : void 0, i.getAllResponseHeaders()))
					}
				}, i.onload = e(), i.onerror = e("error"), e = Pe[a] = e("abort");
				try {
					i.send(t.hasContent && t.data || null)
				} catch (u) {
					if (e)throw u
				}
			}, abort: function () {
				e && e()
			}
		} : void 0
	}), rt.ajaxSetup({
		accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
		contents: {script: /(?:java|ecma)script/},
		converters: {
			"text script": function (t) {
				return rt.globalEval(t), t
			}
		}
	}), rt.ajaxPrefilter("script", function (t) {
		void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
	}), rt.ajaxTransport("script", function (t) {
		if (t.crossDomain) {
			var e, n;
			return {
				send: function (r, o) {
					e = rt("<script>").prop({
						async: !0,
						charset: t.scriptCharset,
						src: t.url
					}).on("load error", n = function (t) {
						e.remove(), n = null, t && o("error" === t.type ? 404 : 200, t.type)
					}), et.head.appendChild(e[0])
				}, abort: function () {
					n && n()
				}
			}
		}
	});
	var Fe = [], Le = /(=)\?(?=&|$)|\?\?/;
	rt.ajaxSetup({
		jsonp: "callback", jsonpCallback: function () {
			var t = Fe.pop() || rt.expando + "_" + pe++;
			return this[t] = !0, t
		}
	}), rt.ajaxPrefilter("json jsonp", function (t, e, r) {
		var o, i, a, u = t.jsonp !== !1 && (Le.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && Le.test(t.data) && "data");
		return u || "jsonp" === t.dataTypes[0] ? (o = t.jsonpCallback = rt.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, u ? t[u] = t[u].replace(Le, "$1" + o) : t.jsonp !== !1 && (t.url += (de.test(t.url) ? "&" : "?") + t.jsonp + "=" + o), t.converters["script json"] = function () {
			return a || rt.error(o + " was not called"), a[0]
		}, t.dataTypes[0] = "json", i = n[o], n[o] = function () {
			a = arguments
		}, r.always(function () {
			n[o] = i, t[o] && (t.jsonpCallback = e.jsonpCallback, Fe.push(o)), a && rt.isFunction(i) && i(a[0]), a = i = void 0
		}), "script") : void 0
	}), rt.parseHTML = function (t, e, n) {
		if (!t || "string" != typeof t)return null;
		"boolean" == typeof e && (n = e, e = !1), e = e || et;
		var r = lt.exec(t), o = !n && [];
		return r ? [e.createElement(r[1])] : (r = rt.buildFragment([t], e, o), o && o.length && rt(o).remove(), rt.merge([], r.childNodes))
	};
	var Ie = rt.fn.load;
	rt.fn.load = function (t, e, n) {
		if ("string" != typeof t && Ie)return Ie.apply(this, arguments);
		var r, o, i, a = this, u = t.indexOf(" ");
		return u >= 0 && (r = rt.trim(t.slice(u)), t = t.slice(0, u)), rt.isFunction(e) ? (n = e, e = void 0) : e && "object" == typeof e && (o = "POST"), a.length > 0 && rt.ajax({
			url: t,
			type: o,
			dataType: "html",
			data: e
		}).done(function (t) {
			i = arguments, a.html(r ? rt("<div>").append(rt.parseHTML(t)).find(r) : t)
		}).complete(n && function (t, e) {
					a.each(n, i || [t.responseText, e, t])
				}), this
	}, rt.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (t, e) {
		rt.fn[e] = function (t) {
			return this.on(e, t)
		}
	}), rt.expr.filters.animated = function (t) {
		return rt.grep(rt.timers, function (e) {
			return t === e.elem
		}).length
	};
	var qe = n.document.documentElement;
	rt.offset = {
		setOffset: function (t, e, n) {
			var r, o, i, a, u, s, c, l = rt.css(t, "position"), f = rt(t), h = {};
			"static" === l && (t.style.position = "relative"), u = f.offset(), i = rt.css(t, "top"), s = rt.css(t, "left"), c = ("absolute" === l || "fixed" === l) && (i + s).indexOf("auto") > -1, c ? (r = f.position(), a = r.top, o = r.left) : (a = parseFloat(i) || 0, o = parseFloat(s) || 0), rt.isFunction(e) && (e = e.call(t, n, u)), null != e.top && (h.top = e.top - u.top + a), null != e.left && (h.left = e.left - u.left + o), "using" in e ? e.using.call(t, h) : f.css(h)
		}
	}, rt.fn.extend({
		offset: function (t) {
			if (arguments.length)return void 0 === t ? this : this.each(function (e) {
				rt.offset.setOffset(this, t, e)
			});
			var e, n, r = this[0], o = {top: 0, left: 0}, i = r && r.ownerDocument;
			if (i)return e = i.documentElement, rt.contains(e, r) ? (typeof r.getBoundingClientRect !== At && (o = r.getBoundingClientRect()), n = $(i), {
				top: o.top + n.pageYOffset - e.clientTop,
				left: o.left + n.pageXOffset - e.clientLeft
			}) : o
		}, position: function () {
			if (this[0]) {
				var t, e, n = this[0], r = {top: 0, left: 0};
				return "fixed" === rt.css(n, "position") ? e = n.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), rt.nodeName(t[0], "html") || (r = t.offset()), r.top += rt.css(t[0], "borderTopWidth", !0), r.left += rt.css(t[0], "borderLeftWidth", !0)), {
					top: e.top - r.top - rt.css(n, "marginTop", !0),
					left: e.left - r.left - rt.css(n, "marginLeft", !0)
				}
			}
		}, offsetParent: function () {
			return this.map(function () {
				for (var t = this.offsetParent || qe; t && !rt.nodeName(t, "html") && "static" === rt.css(t, "position");)t = t.offsetParent;
				return t || qe
			})
		}
	}), rt.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (t, e) {
		var r = "pageYOffset" === e;
		rt.fn[t] = function (o) {
			return xt(this, function (t, o, i) {
				var a = $(t);
				return void 0 === i ? a ? a[e] : t[o] : void(a ? a.scrollTo(r ? n.pageXOffset : i, r ? i : n.pageYOffset) : t[o] = i)
			}, t, o, arguments.length, null)
		}
	}), rt.each(["top", "left"], function (t, e) {
		rt.cssHooks[e] = _(tt.pixelPosition, function (t, n) {
			return n ? (n = S(t, e), Gt.test(n) ? rt(t).position()[e] + "px" : n) : void 0
		})
	}), rt.each({Height: "height", Width: "width"}, function (t, e) {
		rt.each({padding: "inner" + t, content: e, "": "outer" + t}, function (n, r) {
			rt.fn[r] = function (r, o) {
				var i = arguments.length && (n || "boolean" != typeof r), a = n || (r === !0 || o === !0 ? "margin" : "border");
				return xt(this, function (e, n, r) {
					var o;
					return rt.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (o = e.documentElement, Math.max(e.body["scroll" + t], o["scroll" + t], e.body["offset" + t], o["offset" + t], o["client" + t])) : void 0 === r ? rt.css(e, n, a) : rt.style(e, n, r, a)
				}, e, i ? r : void 0, i, null)
			}
		})
	}), rt.fn.size = function () {
		return this.length
	}, rt.fn.andSelf = rt.fn.addBack, r = [], o = function () {
		return rt
	}.apply(e, r), !(void 0 !== o && (t.exports = o));
	var Be = n.jQuery, ze = n.$;
	return rt.noConflict = function (t) {
		return n.$ === rt && (n.$ = ze), t && n.jQuery === rt && (n.jQuery = Be), rt
	}, typeof i === At && (n.jQuery = n.$ = rt), rt
})
}, function (t, e) {
	function n(t, e) {
		var n = -1, r = t.length;
		for (e || (e = Array(r)); ++n < r;)e[n] = t[n];
		return e
	}

	t.exports = n
}, function (t, e) {
	function n(t, e) {
		for (var n = -1, r = t.length; ++n < r && e(t[n], n, t) !== !1;);
		return t
	}

	t.exports = n
}, function (t, e) {
	function n(t, e, n) {
		n || (n = {});
		for (var r = -1, o = e.length; ++r < o;) {
			var i = e[r];
			n[i] = t[i]
		}
		return n
	}

	t.exports = n
}, function (t, e) {
	function n(t) {
		return function (e, n, o) {
			for (var i = r(e), a = o(e), u = a.length, s = t ? u : -1; t ? s-- : ++s < u;) {
				var c = a[s];
				if (n(i[c], c, i) === !1)break
			}
			return e
		}
	}

	function r(t) {
		return o(t) ? t : Object(t)
	}

	function o(t) {
		var e = typeof t;
		return !!t && ("object" == e || "function" == e)
	}

	var i = n();
	t.exports = i
}, function (t, e) {
	function n(t, e, n) {
		if ("function" != typeof t)return r;
		if (void 0 === e)return t;
		switch (n) {
			case 1:
				return function (n) {
					return t.call(e, n)
				};
			case 3:
				return function (n, r, o) {
					return t.call(e, n, r, o)
				};
			case 4:
				return function (n, r, o, i) {
					return t.call(e, n, r, o, i)
				};
			case 5:
				return function (n, r, o, i, a) {
					return t.call(e, n, r, o, i, a)
				}
		}
		return function () {
			return t.apply(e, arguments)
		}
	}

	function r(t) {
		return t
	}

	t.exports = n
}, function (t, e, n) {
	function r(t) {
		return a(function (e, n) {
			var r = -1, a = null == e ? 0 : n.length, u = a > 2 ? n[a - 2] : void 0, s = a > 2 ? n[2] : void 0, c = a > 1 ? n[a - 1] : void 0;
			for ("function" == typeof u ? (u = o(u, c, 5), a -= 2) : (u = "function" == typeof c ? c : void 0, a -= u ? 1 : 0), s && i(n[0], n[1], s) && (u = 3 > a ? void 0 : u, a = 1); ++r < a;) {
				var l = n[r];
				l && t(e, l, u)
			}
			return e
		})
	}

	var o = n(427), i = n(430), a = n(435);
	t.exports = r
}, function (t, e) {
	function n(t) {
		return !!t && "object" == typeof t
	}

	function r(t, e) {
		var n = null == t ? void 0 : t[e];
		return a(n) ? n : void 0
	}

	function o(t) {
		return i(t) && h.call(t) == u
	}

	function i(t) {
		var e = typeof t;
		return !!t && ("object" == e || "function" == e)
	}

	function a(t) {
		return null == t ? !1 : o(t) ? p.test(l.call(t)) : n(t) && s.test(t)
	}

	var u = "[object Function]", s = /^\[object .+?Constructor\]$/, c = Object.prototype, l = Function.prototype.toString, f = c.hasOwnProperty, h = c.toString, p = RegExp("^" + l.call(f).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
	t.exports = r
}, function (t, e) {
	function n(t) {
		return function (e) {
			return null == e ? void 0 : e[t]
		}
	}

	function r(t) {
		return null != t && a(l(t))
	}

	function o(t, e) {
		return t = "number" == typeof t || s.test(t) ? +t : -1, e = null == e ? c : e, t > -1 && t % 1 == 0 && e > t
	}

	function i(t, e, n) {
		if (!u(n))return !1;
		var i = typeof e;
		if ("number" == i ? r(n) && o(e, n.length) : "string" == i && e in n) {
			var a = n[e];
			return t === t ? t === a : a !== a
		}
		return !1
	}

	function a(t) {
		return "number" == typeof t && t > -1 && t % 1 == 0 && c >= t
	}

	function u(t) {
		var e = typeof t;
		return !!t && ("object" == e || "function" == e)
	}

	var s = /^\d+$/, c = 9007199254740991, l = n("length");
	t.exports = i
}, function (t, e, n) {
	function r(t) {
		return !!t && "object" == typeof t
	}

	function o(t, e) {
		return a(t, e, s)
	}

	function i(t) {
		var e;
		if (!r(t) || h.call(t) != c || u(t) || !f.call(t, "constructor") && (e = t.constructor, "function" == typeof e && !(e instanceof e)))return !1;
		var n;
		return o(t, function (t, e) {
			n = e
		}), void 0 === n || f.call(t, n)
	}

	var a = n(426), u = n(66), s = n(141), c = "[object Object]", l = Object.prototype, f = l.hasOwnProperty, h = l.toString;
	t.exports = i
}, function (t, e) {
	function n(t) {
		return !!t && "object" == typeof t
	}

	function r(t) {
		return "number" == typeof t && t > -1 && t % 1 == 0 && N >= t
	}

	function o(t) {
		return n(t) && r(t.length) && !!T[O.call(t)]
	}

	var i = "[object Arguments]", a = "[object Array]", u = "[object Boolean]", s = "[object Date]", c = "[object Error]", l = "[object Function]", f = "[object Map]", h = "[object Number]", p = "[object Object]", d = "[object RegExp]", g = "[object Set]", v = "[object String]", m = "[object WeakMap]", y = "[object ArrayBuffer]", b = "[object Float32Array]", x = "[object Float64Array]", w = "[object Int8Array]", M = "[object Int16Array]", k = "[object Int32Array]", C = "[object Uint8Array]", S = "[object Uint8ClampedArray]", _ = "[object Uint16Array]", E = "[object Uint32Array]", T = {};
	T[b] = T[x] = T[w] = T[M] = T[k] = T[C] = T[S] = T[_] = T[E] = !0, T[i] = T[a] = T[y] = T[u] = T[s] = T[c] = T[l] = T[f] = T[h] = T[p] = T[d] = T[g] = T[v] = T[m] = !1;
	var A = Object.prototype, O = A.toString, N = 9007199254740991;
	t.exports = o
}, function (t, e, n) {
	function r(t) {
		return function (e) {
			return null == e ? void 0 : e[t]
		}
	}

	function o(t) {
		return null != t && a(y(t))
	}

	function i(t, e) {
		return t = "number" == typeof t || p.test(t) ? +t : -1, e = null == e ? m : e, t > -1 && t % 1 == 0 && e > t
	}

	function a(t) {
		return "number" == typeof t && t > -1 && t % 1 == 0 && m >= t
	}

	function u(t) {
		for (var e = c(t), n = e.length, r = n && t.length, o = !!r && a(r) && (h(t) || f(t)), u = -1, s = []; ++u < n;) {
			var l = e[u];
			(o && i(l, r) || g.call(t, l)) && s.push(l)
		}
		return s
	}

	function s(t) {
		var e = typeof t;
		return !!t && ("object" == e || "function" == e)
	}

	function c(t) {
		if (null == t)return [];
		s(t) || (t = Object(t));
		var e = t.length;
		e = e && a(e) && (h(t) || f(t)) && e || 0;
		for (var n = t.constructor, r = -1, o = "function" == typeof n && n.prototype === t, u = Array(e), c = e > 0; ++r < e;)u[r] = r + "";
		for (var l in t)c && i(l, e) || "constructor" == l && (o || !g.call(t, l)) || u.push(l);
		return u
	}

	var l = n(429), f = n(66), h = n(86), p = /^\d+$/, d = Object.prototype, g = d.hasOwnProperty, v = l(Object, "keys"), m = 9007199254740991, y = r("length"), b = v ? function (t) {
		var e = null == t ? void 0 : t.constructor;
		return "function" == typeof e && e.prototype === t || "function" != typeof t && o(t) ? u(t) : s(t) ? v(t) : []
	} : u;
	t.exports = b
}, function (t, e, n) {
	function r(t) {
		return !!t && "object" == typeof t
	}

	function o(t, e, n, a, s) {
		if (!c(t))return t;
		var l = u(e) && (d(e) || v(e)), h = l ? void 0 : m(e);
		return f(h || e, function (u, c) {
			if (h && (c = u, u = e[c]), r(u))a || (a = []), s || (s = []), i(t, e, c, o, n, a, s); else {
				var f = t[c], p = n ? n(f, u, c, t, e) : void 0, d = void 0 === p;
				d && (p = u), void 0 === p && (!l || c in t) || !d && (p === p ? p === f : f !== f) || (t[c] = p)
			}
		}), t
	}

	function i(t, e, n, r, o, i, a) {
		for (var s = i.length, c = e[n]; s--;)if (i[s] == c)return void(t[n] = a[s]);
		var f = t[n], h = o ? o(f, c, n, t, e) : void 0, m = void 0 === h;
		m && (h = c, u(c) && (d(c) || v(c)) ? h = d(f) ? f : u(f) ? l(f) : [] : g(c) || p(c) ? h = p(f) ? y(f) : g(f) ? f : {} : m = !1), i.push(c), a.push(h), m ? t[n] = r(h, c, o, i, a) : (h === h ? h !== f : f === f) && (t[n] = h)
	}

	function a(t) {
		return function (e) {
			return null == e ? void 0 : e[t]
		}
	}

	function u(t) {
		return null != t && s(x(t))
	}

	function s(t) {
		return "number" == typeof t && t > -1 && t % 1 == 0 && b >= t
	}

	function c(t) {
		var e = typeof t;
		return !!t && ("object" == e || "function" == e)
	}

	var l = n(423), f = n(424), h = n(428), p = n(66), d = n(86), g = n(431), v = n(432), m = n(433), y = n(436), b = 9007199254740991, x = a("length"), w = h(o);
	t.exports = w
}, function (t, e) {
	function n(t, e) {
		if ("function" != typeof t)throw new TypeError(r);
		return e = o(void 0 === e ? t.length - 1 : +e || 0, 0), function () {
			for (var n = arguments, r = -1, i = o(n.length - e, 0), a = Array(i); ++r < i;)a[r] = n[e + r];
			switch (e) {
				case 0:
					return t.call(this, a);
				case 1:
					return t.call(this, n[0], a);
				case 2:
					return t.call(this, n[0], n[1], a)
			}
			var u = Array(e + 1);
			for (r = -1; ++r < e;)u[r] = n[r];
			return u[e] = a, t.apply(this, u)
		}
	}

	var r = "Expected a function", o = Math.max;
	t.exports = n
}, function (t, e, n) {
	function r(t) {
		return o(t, i(t))
	}

	var o = n(425), i = n(141);
	t.exports = r
}, function (t, e, n) {
	"use strict";
	function r(t) {
		return t && t.__esModule ? t : {"default": t}
	}

	function o(t, e) {
		var n = {};
		for (var r in t)e.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
		return n
	}

	Object.defineProperty(e, "__esModule", {value: !0});
	var i = Object.assign || function (t) {
				for (var e = 1; e < arguments.length; e++) {
					var n = arguments[e];
					for (var r in n)Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
				}
				return t
			}, a = n(35), u = r(a), s = n(438), c = r(s), l = n(43), f = r(l), h = n(145), p = r(h), d = n(146), g = r(d), v = u["default"].createClass({
		displayName: "Avatar",
		mixins: [c["default"]],
		contextTypes: {muiTheme: u["default"].PropTypes.object},
		childContextTypes: {muiTheme: u["default"].PropTypes.object},
		getChildContext: function () {
			return {muiTheme: this.state.muiTheme}
		},
		propTypes: {
			backgroundColor: u["default"].PropTypes.string,
			children: u["default"].PropTypes.node,
			className: u["default"].PropTypes.string,
			color: u["default"].PropTypes.string,
			icon: u["default"].PropTypes.element,
			size: u["default"].PropTypes.number,
			src: u["default"].PropTypes.string,
			style: u["default"].PropTypes.object
		},
		getInitialState: function () {
			return {muiTheme: this.context.muiTheme ? this.context.muiTheme : g["default"].getMuiTheme(p["default"])}
		},
		componentWillReceiveProps: function (t, e) {
			var n = e.muiTheme ? e.muiTheme : this.state.muiTheme;
			this.setState({muiTheme: n})
		},
		getDefaultProps: function () {
			return {backgroundColor: f["default"].grey400, color: f["default"].white, size: 40}
		},
		render: function () {
			var t = this.props, e = t.backgroundColor, n = t.color, r = t.icon, a = t.size, s = t.src, c = t.style, l = t.className, f = o(t, ["backgroundColor", "color", "icon", "size", "src", "style", "className"]), h = {
				root: {
					height: a,
					width: a,
					userSelect: "none",
					borderRadius: "50%",
					display: "inline-block"
				}
			};
			if (s) {
				var p = this.state.muiTheme.avatar.borderColor;
				return p && (h.root = this.mergeStyles(h.root, {
					height: a - 2,
					width: a - 2,
					border: "solid 1px " + p
				})), u["default"].createElement("img", i({}, f, {
					src: s,
					style: this.prepareStyles(h.root, c),
					className: l
				}))
			}
			h.root = this.mergeStyles(h.root, {
				backgroundColor: e,
				textAlign: "center",
				lineHeight: a + "px",
				fontSize: a / 2 + 4,
				color: n
			});
			var d = {margin: 8}, g = r ? u["default"].cloneElement(r, {
				color: n,
				style: this.mergeStyles(d, r.props.style)
			}) : null;
			return u["default"].createElement("div", i({}, f, {
				style: this.prepareStyles(h.root, c),
				className: l
			}), g, this.props.children)
		}
	});
	e["default"] = v, t.exports = e["default"]
}, function (t, e, n) {
	"use strict";
	function r(t) {
		return t && t.__esModule ? t : {"default": t}
	}

	Object.defineProperty(e, "__esModule", {value: !0});
	var o = n(35), i = r(o), a = n(148), u = r(a), s = n(446), c = r(s);
	e["default"] = {
		propTypes: {style: i["default"].PropTypes.object}, mergeStyles: function () {
			return u["default"].merge.apply(this, arguments)
		}, mergeAndPrefix: function () {
			return c["default"].mergeAndPrefix.apply(this, arguments)
		}, prepareStyles: function () {
			return c["default"].prepareStyles.apply(c["default"], [this.state && this.state.muiTheme || this.context.muiTheme].concat([].slice.apply(arguments)))
		}
	}, t.exports = e["default"]
}, function (t, e, n) {
	"use strict";
	function r(t) {
		return t && t.__esModule ? t : {"default": t}
	}

	function o(t, e) {
		t = (0, a["default"])({}, h["default"], t);
		var n = t, r = n.palette, o = n.spacing;
		return (0, a["default"])({
			isRtl: !1,
			zIndex: d["default"],
			baseTheme: t,
			rawTheme: t,
			appBar: {color: r.primary1Color, textColor: r.alternateTextColor, height: o.desktopKeylineIncrement},
			avatar: {borderColor: "rgba(0, 0, 0, 0.08)"},
			badge: {
				color: r.alternateTextColor,
				textColor: r.textColor,
				primaryColor: r.accent1Color,
				primaryTextColor: r.alternateTextColor,
				secondaryColor: r.primary1Color,
				secondaryTextColor: r.alternateTextColor
			},
			button: {height: 36, minWidth: 88, iconButtonSize: 2 * o.iconSize},
			cardText: {textColor: r.textColor},
			checkbox: {
				boxColor: r.textColor,
				checkedColor: r.primary1Color,
				requiredColor: r.primary1Color,
				disabledColor: r.disabledColor,
				labelColor: r.textColor,
				labelDisabledColor: r.disabledColor
			},
			datePicker: {
				color: r.primary1Color,
				textColor: r.alternateTextColor,
				calendarTextColor: r.textColor,
				selectColor: r.primary2Color,
				selectTextColor: r.alternateTextColor
			},
			dropDownMenu: {accentColor: r.borderColor},
			flatButton: {
				color: s["default"].transparent,
				buttonFilterColor: "#999999",
				disabledTextColor: l["default"].fade(r.textColor, .3),
				textColor: r.textColor,
				primaryTextColor: r.accent1Color,
				secondaryTextColor: r.primary1Color
			},
			floatingActionButton: {
				buttonSize: 56,
				miniSize: 40,
				color: r.accent1Color,
				iconColor: r.alternateTextColor,
				secondaryColor: r.primary1Color,
				secondaryIconColor: r.alternateTextColor,
				disabledTextColor: r.disabledColor
			},
			gridTile: {textColor: s["default"].white},
			inkBar: {backgroundColor: r.accent1Color},
			leftNav: {width: 4 * o.desktopKeylineIncrement, color: r.canvasColor},
			listItem: {nestedLevelDepth: 18},
			menu: {backgroundColor: r.canvasColor, containerBackgroundColor: r.canvasColor},
			menuItem: {
				dataHeight: 32,
				height: 48,
				hoverColor: "rgba(0, 0, 0, .035)",
				padding: o.desktopGutter,
				selectedTextColor: r.accent1Color
			},
			menuSubheader: {padding: o.desktopGutter, borderColor: r.borderColor, textColor: r.primary1Color},
			paper: {backgroundColor: r.canvasColor},
			radioButton: {
				borderColor: r.textColor,
				backgroundColor: r.alternateTextColor,
				checkedColor: r.primary1Color,
				requiredColor: r.primary1Color,
				disabledColor: r.disabledColor,
				size: 24,
				labelColor: r.textColor,
				labelDisabledColor: r.disabledColor
			},
			raisedButton: {
				color: r.alternateTextColor,
				textColor: r.textColor,
				primaryColor: r.accent1Color,
				primaryTextColor: r.alternateTextColor,
				secondaryColor: r.primary1Color,
				secondaryTextColor: r.alternateTextColor,
				disabledColor: l["default"].darken(r.alternateTextColor, .1),
				disabledTextColor: l["default"].fade(r.textColor, .3)
			},
			refreshIndicator: {strokeColor: r.borderColor, loadingStrokeColor: r.primary1Color},
			slider: {
				trackSize: 2,
				trackColor: r.primary3Color,
				trackColorSelected: r.accent3Color,
				handleSize: 12,
				handleSizeDisabled: 8,
				handleSizeActive: 18,
				handleColorZero: r.primary3Color,
				handleFillColor: r.alternateTextColor,
				selectionColor: r.primary1Color,
				rippleColor: r.primary1Color
			},
			snackbar: {textColor: r.alternateTextColor, backgroundColor: r.textColor, actionColor: r.accent1Color},
			table: {backgroundColor: r.canvasColor},
			tableHeader: {borderColor: r.borderColor},
			tableHeaderColumn: {textColor: r.accent3Color, height: 56, spacing: 24},
			tableFooter: {borderColor: r.borderColor, textColor: r.accent3Color},
			tableRow: {
				hoverColor: r.accent2Color,
				stripeColor: l["default"].lighten(r.primary1Color, .55),
				selectedColor: r.borderColor,
				textColor: r.textColor,
				borderColor: r.borderColor
			},
			tableRowColumn: {height: 48, spacing: 24},
			timePicker: {
				color: r.alternateTextColor,
				textColor: r.accent3Color,
				accentColor: r.primary1Color,
				clockColor: r.textColor,
				clockCircleColor: r.clockCircleColor,
				headerColor: r.pickerHeaderColor || r.primary1Color,
				selectColor: r.primary2Color,
				selectTextColor: r.alternateTextColor
			},
			toggle: {
				thumbOnColor: r.primary1Color,
				thumbOffColor: r.accent2Color,
				thumbDisabledColor: r.borderColor,
				thumbRequiredColor: r.primary1Color,
				trackOnColor: l["default"].fade(r.primary1Color, .5),
				trackOffColor: r.primary3Color,
				trackDisabledColor: r.primary3Color,
				labelColor: r.textColor,
				labelDisabledColor: r.disabledColor,
				trackRequiredColor: l["default"].fade(r.primary1Color, .5)
			},
			toolbar: {
				backgroundColor: l["default"].darken(r.accent2Color, .05),
				height: 56,
				titleFontSize: 20,
				iconColor: "rgba(0, 0, 0, .40)",
				separatorColor: "rgba(0, 0, 0, .175)",
				menuHoverColor: "rgba(0, 0, 0, .10)"
			},
			tabs: {
				backgroundColor: r.primary1Color,
				textColor: l["default"].fade(r.alternateTextColor, .6),
				selectedTextColor: r.alternateTextColor
			},
			textField: {
				textColor: r.textColor,
				hintColor: r.disabledColor,
				floatingLabelColor: r.textColor,
				disabledTextColor: r.disabledColor,
				errorColor: s["default"].red500,
				focusColor: r.primary1Color,
				backgroundColor: "transparent",
				borderColor: r.borderColor
			}
		}, e)
	}

	Object.defineProperty(e, "__esModule", {value: !0}), e["default"] = o;
	var i = n(434), a = r(i), u = n(43), s = r(u), c = n(89), l = r(c), f = n(87), h = r(f), p = n(147), d = r(p);
	t.exports = e["default"]
}, function (t, e, n) {
	"use strict";
	function r(t) {
		return t && t.__esModule ? t : {"default": t}
	}

	Object.defineProperty(e, "__esModule", {value: !0});
	var o = n(143), i = r(o), a = n(43), u = r(a), s = n(88), c = r(s), l = n(146), f = r(l), h = n(443), p = r(h), d = n(444), g = r(d), v = n(145), m = r(v), y = n(87), b = r(y), x = n(441), w = r(x), M = n(144), k = r(M), C = n(442), S = r(C), _ = n(147), E = r(_);
	e.AutoPrefix = i["default"], e.Colors = u["default"], e.Spacing = c["default"], e.ThemeManager = f["default"], e.Transitions = p["default"], e.Typography = g["default"], e.LightRawTheme = m["default"], e.DarkRawTheme = w["default"], e.ThemeDecorator = S["default"], e.ZIndex = E["default"], e["default"] = {
		AutoPrefix: i["default"],
		Colors: u["default"],
		Spacing: c["default"],
		ThemeManager: f["default"],
		Transitions: p["default"],
		Typography: g["default"],
		lightBaseTheme: b["default"],
		LightRawTheme: m["default"],
		darkBaseTheme: k["default"],
		DarkRawTheme: w["default"],
		ThemeDecorator: S["default"],
		ZIndex: E["default"]
	}
}, function (t, e, n) {
	"use strict";
	function r(t) {
		return t && t.__esModule ? t["default"] : t
	}

	Object.defineProperty(e, "__esModule", {value: !0});
	var o = n(144);
	e["default"] = r(o), t.exports = e["default"]
}, function (t, e, n) {
	"use strict";
	function r(t) {
		return t && t.__esModule ? t : {"default": t}
	}

	Object.defineProperty(e, "__esModule", {value: !0});
	var o = n(35), i = r(o);
	e["default"] = function (t) {
		return function (e) {
			return i["default"].createClass({
				childContextTypes: {muiTheme: i["default"].PropTypes.object},
				getChildContext: function () {
					return {muiTheme: t}
				},
				render: function () {
					return i["default"].createElement(e, this.props)
				}
			})
		}
	}, t.exports = e["default"]
}, function (t, e) {
	"use strict";
	Object.defineProperty(e, "__esModule", {value: !0}), e["default"] = {
		easeOutFunction: "cubic-bezier(0.23, 1, 0.32, 1)",
		easeInOutFunction: "cubic-bezier(0.445, 0.05, 0.55, 0.95)",
		easeOut: function (t, e, n, r) {
			if (r = r || this.easeOutFunction, e && "[object Array]" === Object.prototype.toString.call(e)) {
				for (var o = "", i = 0; i < e.length; i++)o && (o += ","), o += this.create(t, e[i], n, r);
				return o
			}
			return this.create(t, e, n, r)
		},
		create: function (t, e, n, r) {
			return t = t || "450ms", e = e || "all", n = n || "0ms", r = r || "linear", e + " " + t + " " + r + " " + n
		}
	}, t.exports = e["default"]
}, function (t, e, n) {
	"use strict";
	function r(t) {
		return t && t.__esModule ? t : {"default": t}
	}

	function o(t, e) {
		if (!(t instanceof e))throw new TypeError("Cannot call a class as a function")
	}

	Object.defineProperty(e, "__esModule", {value: !0});
	var i = n(43), a = r(i), u = function s() {
		o(this, s), this.textFullBlack = a["default"].fullBlack, this.textDarkBlack = a["default"].darkBlack, this.textLightBlack = a["default"].lightBlack, this.textMinBlack = a["default"].minBlack, this.textFullWhite = a["default"].fullWhite, this.textDarkWhite = a["default"].darkWhite, this.textLightWhite = a["default"].lightWhite, this.fontWeightLight = 300, this.fontWeightNormal = 400, this.fontWeightMedium = 500, this.fontStyleButtonFontSize = 14
	};
	e["default"] = new u, t.exports = e["default"]
}, function (t, e) {
	"use strict";
	function n(t) {
		return "object" == typeof t && null !== t
	}

	Object.defineProperty(e, "__esModule", {value: !0});
	var r = function o(t, e) {
		var r = {};
		return Object.keys(t).forEach(function (i) {
			var a = t[i], u = void 0;
			n(e) && (u = e[i]), r[i] = n(a) && !Array.isArray(a) ? o(a, u) : a
		}), n(e) && Object.keys(e).forEach(function (t) {
			var o = e[t];
			(!n(o) || Array.isArray(o)) && (r[t] = o)
		}), r
	};
	e["default"] = r, t.exports = e["default"]
}, function (t, e, n) {
	(function (r) {
		"use strict";
		function o(t) {
			return t && t.__esModule ? t : {"default": t}
		}

		Object.defineProperty(e, "__esModule", {value: !0});
		var i = n(143), a = o(i), u = n(148), s = o(u), c = /((^|\s)translate(3d|X)?\()(\-?[\d]+)/, l = /((^|\s)skew(x|y)?\()\s*(\-?[\d]+)(deg|rad|grad)(,\s*(\-?[\d]+)(deg|rad|grad))?/;
		e["default"] = {
			merge: function () {
				return s["default"].merge.apply(this, arguments)
			}, mergeAndPrefix: function () {
				var t = s["default"].merge.apply(this, arguments);
				return a["default"].all(t)
			}, ensureDirection: function (t, e) {
				if ("production" !== r.env.NODE_ENV && (e.didFlip && console.warn(new Error("You're calling `ensureDirection` on the same style object twice.")), e = s["default"].merge({didFlip: "true"}, e)), !t.isRtl)return e;
				var n = {
					right: "left",
					left: "right",
					marginRight: "marginLeft",
					marginLeft: "marginRight",
					paddingRight: "paddingLeft",
					paddingLeft: "paddingRight",
					borderRight: "borderLeft",
					borderLeft: "borderRight"
				}, o = {};
				return Object.keys(e).forEach(function (t) {
					var r = e[t], i = t;
					switch (n.hasOwnProperty(t) && (i = n[t]), t) {
						case"float":
						case"textAlign":
							"right" === r ? r = "left" : "left" === r && (r = "right");
							break;
						case"direction":
							"ltr" === r ? r = "rtl" : "rtl" === r && (r = "ltr");
							break;
						case"transform":
							var a = void 0;
							(a = r.match(c)) && (r = r.replace(a[0], a[1] + -parseFloat(a[4]))), (a = r.match(l)) && (r = r.replace(a[0], a[1] + -parseFloat(a[4]) + a[5] + a[6] ? "," + -parseFloat(a[7]) + a[8] : ""));
							break;
						case"transformOrigin":
							r.indexOf("right") > -1 ? r = r.replace("right", "left") : r.indexOf("left") > -1 && (r = r.replace("left", "right"))
					}
					o[i] = r
				}), o
			}, prepareStyles: function (t) {
				for (var e = arguments.length, n = Array(e > 1 ? e - 1 : 0), r = 1; e > r; r++)n[r - 1] = arguments[r];
				n = n.length > 1 ? s["default"].merge.apply(this, n) : n[0] || {};
				var o = this.ensureDirection(t, n);
				return a["default"].all(o)
			}
		}, t.exports = e["default"]
	}).call(e, n(3))
}, , function (t, e, n) {
	"use strict";
	t.exports = n(242)
}, function (t, e, n) {
	"use strict";
	function r(t) {
		return t && t.__esModule ? t : {"default": t}
	}

	function o(t) {
		var e = a["default"](t), n = s["default"](t);
		return {Provider: e, connect: n}
	}

	e.__esModule = !0, e["default"] = o;
	var i = n(451), a = r(i), u = n(450), s = r(u);
	t.exports = e["default"]
}, function (t, e, n) {
	(function (r) {
		"use strict";
		function o(t) {
			return t && t.__esModule ? t : {"default": t}
		}

		function i(t, e) {
			if (!(t instanceof e))throw new TypeError("Cannot call a class as a function")
		}

		function a(t, e) {
			if ("function" != typeof e && null !== e)throw new TypeError("Super expression must either be null or a function, not " + typeof e);
			t.prototype = Object.create(e && e.prototype, {
				constructor: {
					value: t,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
		}

		function u(t) {
			return t.displayName || t.name || "Component"
		}

		function s(t) {
			var e = t.Component, n = t.PropTypes, o = h["default"](n);
			return function (n, s, f) {
				function h(t, e) {
					var n = t.getState(), r = T ? S(n, e) : S(n);
					return x["default"](v["default"](r), "`mapStateToProps` must return an object. Instead received %s.", r), r
				}

				function p(t, e) {
					var n = t.dispatch, r = A ? _(n, e) : _(n);
					return x["default"](v["default"](r), "`mapDispatchToProps` must return an object. Instead received %s.", r), r
				}

				function g(t, e, n) {
					var r = E(t, e, n);
					return x["default"](v["default"](r), "`mergeProps` must return an object. Instead received %s.", r), r
				}

				var m = arguments.length <= 3 || void 0 === arguments[3] ? {} : arguments[3], b = Boolean(n), S = n || w, _ = v["default"](s) ? y["default"](s) : s || M, E = f || k, T = S.length > 1, A = _.length > 1, O = m.pure, N = void 0 === O ? !0 : O, j = C++;
				return function (n) {
					var s = function (e) {
						function r(t, n) {
							i(this, r), e.call(this, t, n), this.version = j, this.store = t.store || n.store, x["default"](this.store, 'Could not find "store" in either the context or ' + ('props of "' + this.constructor.displayName + '". ') + "Either wrap the root component in a <Provider>, " + ('or explicitly pass "store" as a prop to "' + this.constructor.displayName + '".')), this.stateProps = h(this.store, t), this.dispatchProps = p(this.store, t), this.state = {props: this.computeNextState()}
						}

						return a(r, e), r.prototype.shouldComponentUpdate = function (t, e) {
							return !N || !d["default"](this.state.props, e.props)
						}, c(r, null, [{
							key: "displayName",
							value: "Connect(" + u(n) + ")",
							enumerable: !0
						}, {key: "WrappedComponent", value: n, enumerable: !0}, {
							key: "contextTypes",
							value: {store: o},
							enumerable: !0
						}, {
							key: "propTypes",
							value: {store: o},
							enumerable: !0
						}]), r.prototype.computeNextState = function () {
							var t = arguments.length <= 0 || void 0 === arguments[0] ? this.props : arguments[0];
							return g(this.stateProps, this.dispatchProps, t)
						}, r.prototype.updateStateProps = function () {
							var t = arguments.length <= 0 || void 0 === arguments[0] ? this.props : arguments[0], e = h(this.store, t);
							return d["default"](e, this.stateProps) ? !1 : (this.stateProps = e, !0)
						}, r.prototype.updateDispatchProps = function () {
							var t = arguments.length <= 0 || void 0 === arguments[0] ? this.props : arguments[0], e = p(this.store, t);
							return d["default"](e, this.dispatchProps) ? !1 : (this.dispatchProps = e, !0)
						}, r.prototype.updateState = function () {
							var t = arguments.length <= 0 || void 0 === arguments[0] ? this.props : arguments[0], e = this.computeNextState(t);
							d["default"](e, this.state.props) || this.setState({props: e})
						}, r.prototype.isSubscribed = function () {
							return "function" == typeof this.unsubscribe
						}, r.prototype.trySubscribe = function () {
							b && !this.unsubscribe && (this.unsubscribe = this.store.subscribe(this.handleChange.bind(this)), this.handleChange())
						}, r.prototype.tryUnsubscribe = function () {
							this.unsubscribe && (this.unsubscribe(), this.unsubscribe = null)
						}, r.prototype.componentDidMount = function () {
							this.trySubscribe()
						}, r.prototype.componentWillReceiveProps = function (t) {
							d["default"](t, this.props) || (T && this.updateStateProps(t), A && this.updateDispatchProps(t), this.updateState(t))
						}, r.prototype.componentWillUnmount = function () {
							this.tryUnsubscribe()
						}, r.prototype.handleChange = function () {
							this.unsubscribe && this.updateStateProps() && this.updateState()
						}, r.prototype.getWrappedInstance = function () {
							return this.refs.wrappedInstance
						}, r.prototype.render = function () {
							return t.createElement(n, l({ref: "wrappedInstance"}, this.state.props))
						}, r
					}(e);
					return "production" !== r.env.NODE_ENV && (s.prototype.componentWillUpdate = function () {
						this.version !== j && (this.version = j, this.trySubscribe(), this.updateStateProps(), this.updateDispatchProps(), this.updateState())
					}), s
				}
			}
		}

		e.__esModule = !0;
		var c = function () {
			function t(t, e) {
				for (var n = 0; n < e.length; n++) {
					var r = e[n];
					r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
				}
			}

			return function (e, n, r) {
				return n && t(e.prototype, n), r && t(e, r), e
			}
		}(), l = Object.assign || function (t) {
					for (var e = 1; e < arguments.length; e++) {
						var n = arguments[e];
						for (var r in n)Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
					}
					return t
				};
		e["default"] = s;
		var f = n(235), h = o(f), p = n(453), d = o(p), g = n(452), v = o(g), m = n(454), y = o(m), b = n(420), x = o(b), w = function () {
			return {}
		}, M = function (t) {
			return {dispatch: t}
		}, k = function (t, e, n) {
			return l({}, n, t, e)
		}, C = 0;
		t.exports = e["default"]
	}).call(e, n(3))
}, function (t, e, n) {
	"use strict";
	function r(t) {
		return t && t.__esModule ? t : {"default": t}
	}

	function o(t, e) {
		if (!(t instanceof e))throw new TypeError("Cannot call a class as a function")
	}

	function i(t, e) {
		if ("function" != typeof e && null !== e)throw new TypeError("Super expression must either be null or a function, not " + typeof e);
		t.prototype = Object.create(e && e.prototype, {
			constructor: {
				value: t,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
	}

	function a(t) {
		var e = t.version;
		if ("string" != typeof e)return !0;
		var n = e.split("."), r = parseInt(n[0], 10), o = parseInt(n[1], 10);
		return 0 === r && 13 === o
	}

	function u(t) {
		function e() {
			d || p || (d = !0, console.error("With React 0.14 and later versions, you no longer need to wrap <Provider> child into a function."))
		}

		function n() {
			!d && p && (d = !0, console.error("With React 0.13, you need to wrap <Provider> child into a function. This restriction will be removed with React 0.14."))
		}

		function r() {
			g || (g = !0, console.error("<Provider> does not support changing `store` on the fly. It is most likely that you see this error because you updated to Redux 2.x and React Redux 2.x which no longer hot reload reducers automatically. See https://github.com/rackt/react-redux/releases/tag/v2.0.0 for the migration instructions."))
		}

		var u = t.Component, c = t.PropTypes, f = t.Children, h = l["default"](c), p = a(t), d = !1, g = !1;
		return function (t) {
			function a(e, n) {
				o(this, a), t.call(this, e, n), this.store = e.store
			}

			return i(a, t), a.prototype.getChildContext = function () {
				return {store: this.store}
			}, s(a, null, [{key: "childContextTypes", value: {store: h.isRequired}, enumerable: !0}, {
				key: "propTypes",
				value: {store: h.isRequired, children: (p ? c.func : c.element).isRequired},
				enumerable: !0
			}]), a.prototype.componentWillReceiveProps = function (t) {
				var e = this.store, n = t.store;
				e !== n && r()
			}, a.prototype.render = function () {
				var t = this.props.children;
				return "function" == typeof t ? (e(), t = t()) : n(), f.only(t)
			}, a
		}(u)
	}

	e.__esModule = !0;
	var s = function () {
		function t(t, e) {
			for (var n = 0; n < e.length; n++) {
				var r = e[n];
				r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
			}
		}

		return function (e, n, r) {
			return n && t(e.prototype, n), r && t(e, r), e
		}
	}();
	e["default"] = u;
	var c = n(235), l = r(c);
	t.exports = e["default"]
}, function (t, e) {
	"use strict";
	function n(t) {
		if (!t || "object" != typeof t)return !1;
		var e = "function" == typeof t.constructor ? Object.getPrototypeOf(t) : Object.prototype;
		if (null === e)return !0;
		var n = e.constructor;
		return "function" == typeof n && n instanceof n && r(n) === r(Object)
	}

	e.__esModule = !0, e["default"] = n;
	var r = function (t) {
		return Function.prototype.toString.call(t)
	};
	t.exports = e["default"]
}, function (t, e) {
	"use strict";
	function n(t, e) {
		if (t === e)return !0;
		var n = Object.keys(t), r = Object.keys(e);
		if (n.length !== r.length)return !1;
		for (var o = Object.prototype.hasOwnProperty, i = 0; i < n.length; i++)if (!o.call(e, n[i]) || t[n[i]] !== e[n[i]])return !1;
		return !0
	}

	e.__esModule = !0, e["default"] = n, t.exports = e["default"]
}, function (t, e, n) {
	"use strict";
	function r(t) {
		return function (e) {
			return o.bindActionCreators(t, e)
		}
	}

	e.__esModule = !0, e["default"] = r;
	var o = n(75);
	t.exports = e["default"]
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function (t, e, n) {
	(function (e) {
		"use strict";
		function r(t) {
			return Array.isArray(t) ? t.concat() : t && "object" == typeof t ? a(new t.constructor, t) : t
		}

		function o(t, n, r) {
			Array.isArray(t) ? void 0 : "production" !== e.env.NODE_ENV ? s(!1, "update(): expected target of %s to be an array; got %s.", r, t) : s(!1);
			var o = n[r];
			Array.isArray(o) ? void 0 : "production" !== e.env.NODE_ENV ? s(!1, "update(): expected spec of %s to be an array; got %s. Did you forget to wrap your parameter in an array?", r, o) : s(!1)
		}

		function i(t, n) {
			if ("object" != typeof n ? "production" !== e.env.NODE_ENV ? s(!1, "update(): You provided a key path to update() that did not contain one of %s. Did you forget to include {%s: ...}?", v.join(", "), p) : s(!1) : void 0, c.call(n, p))return 1 !== Object.keys(n).length ? "production" !== e.env.NODE_ENV ? s(!1, "Cannot have more than one key in an object with %s", p) : s(!1) : void 0, n[p];
			var u = r(t);
			if (c.call(n, d)) {
				var y = n[d];
				y && "object" == typeof y ? void 0 : "production" !== e.env.NODE_ENV ? s(!1, "update(): %s expects a spec of type 'object'; got %s", d, y) : s(!1), u && "object" == typeof u ? void 0 : "production" !== e.env.NODE_ENV ? s(!1, "update(): %s expects a target of type 'object'; got %s", d, u) : s(!1), a(u, n[d])
			}
			c.call(n, l) && (o(t, n, l), n[l].forEach(function (t) {
				u.push(t)
			})), c.call(n, f) && (o(t, n, f), n[f].forEach(function (t) {
				u.unshift(t)
			})), c.call(n, h) && (Array.isArray(t) ? void 0 : "production" !== e.env.NODE_ENV ? s(!1, "Expected %s target to be an array; got %s", h, t) : s(!1), Array.isArray(n[h]) ? void 0 : "production" !== e.env.NODE_ENV ? s(!1, "update(): expected spec of %s to be an array of arrays; got %s. Did you forget to wrap your parameters in an array?", h, n[h]) : s(!1), n[h].forEach(function (t) {
				Array.isArray(t) ? void 0 : "production" !== e.env.NODE_ENV ? s(!1, "update(): expected spec of %s to be an array of arrays; got %s. Did you forget to wrap your parameters in an array?", h, n[h]) : s(!1), u.splice.apply(u, t)
			})), c.call(n, g) && ("function" != typeof n[g] ? "production" !== e.env.NODE_ENV ? s(!1, "update(): expected spec of %s to be a function; got %s.", g, n[g]) : s(!1) : void 0, u = n[g](u));
			for (var b in n)m.hasOwnProperty(b) && m[b] || (u[b] = i(t[b], n[b]));
			return u
		}

		var a = n(6), u = n(28), s = n(4), c = {}.hasOwnProperty, l = u({$push: null}), f = u({$unshift: null}), h = u({$splice: null}), p = u({$set: null}), d = u({$merge: null}), g = u({$apply: null}), v = [l, f, h, p, d, g], m = {};
		v.forEach(function (t) {
			m[t] = !0
		}), t.exports = i
	}).call(e, n(3))
}, function (t, e) {
	"use strict";
	function n(t) {
		var e = t.dispatch, n = t.getState;
		return function (t) {
			return function (r) {
				return "function" == typeof r ? r(e, n) : t(r)
			}
		}
	}

	t.exports = n
}, , , , , function (t, e, n) {
	(function (e, n) {
		!function (e) {
			"use strict";
			function r(t, e, n, r) {
				var o = Object.create((e || i).prototype), a = new d(r || []);
				return o._invoke = f(t, n, a), o
			}

			function o(t, e, n) {
				try {
					return {type: "normal", arg: t.call(e, n)}
				} catch (r) {
					return {type: "throw", arg: r}
				}
			}

			function i() {
			}

			function a() {
			}

			function u() {
			}

			function s(t) {
				["next", "throw", "return"].forEach(function (e) {
					t[e] = function (t) {
						return this._invoke(e, t)
					}
				})
			}

			function c(t) {
				this.arg = t
			}

			function l(t) {
				function e(e, n) {
					var r = t[e](n), o = r.value;
					return o instanceof c ? Promise.resolve(o.arg).then(i, a) : Promise.resolve(o).then(function (t) {
						return r.value = t, r
					})
				}

				function r(t, n) {
					function r() {
						return e(t, n)
					}

					return o = o ? o.then(r, r) : new Promise(function (t) {
						t(r())
					})
				}

				"object" == typeof n && n.domain && (e = n.domain.bind(e));
				var o, i = e.bind(t, "next"), a = e.bind(t, "throw");
				e.bind(t, "return");
				this._invoke = r
			}

			function f(t, e, n) {
				var r = M;
				return function (i, a) {
					if (r === C)throw new Error("Generator is already running");
					if (r === S) {
						if ("throw" === i)throw a;
						return v()
					}
					for (; ;) {
						var u = n.delegate;
						if (u) {
							if ("return" === i || "throw" === i && u.iterator[i] === m) {
								n.delegate = null;
								var s = u.iterator["return"];
								if (s) {
									var c = o(s, u.iterator, a);
									if ("throw" === c.type) {
										i = "throw", a = c.arg;
										continue
									}
								}
								if ("return" === i)continue
							}
							var c = o(u.iterator[i], u.iterator, a);
							if ("throw" === c.type) {
								n.delegate = null, i = "throw", a = c.arg;
								continue
							}
							i = "next", a = m;
							var l = c.arg;
							if (!l.done)return r = k, l;
							n[u.resultName] = l.value, n.next = u.nextLoc, n.delegate = null
						}
						if ("next" === i)r === k ? n.sent = a : n.sent = m; else if ("throw" === i) {
							if (r === M)throw r = S, a;
							n.dispatchException(a) && (i = "next", a = m)
						} else"return" === i && n.abrupt("return", a);
						r = C;
						var c = o(t, e, n);
						if ("normal" === c.type) {
							r = n.done ? S : k;
							var l = {value: c.arg, done: n.done};
							if (c.arg !== _)return l;
							n.delegate && "next" === i && (a = m)
						} else"throw" === c.type && (r = S, i = "throw", a = c.arg)
					}
				}
			}

			function h(t) {
				var e = {tryLoc: t[0]};
				1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
			}

			function p(t) {
				var e = t.completion || {};
				e.type = "normal", delete e.arg, t.completion = e
			}

			function d(t) {
				this.tryEntries = [{tryLoc: "root"}], t.forEach(h, this), this.reset(!0)
			}

			function g(t) {
				if (t) {
					var e = t[b];
					if (e)return e.call(t);
					if ("function" == typeof t.next)return t;
					if (!isNaN(t.length)) {
						var n = -1, r = function o() {
							for (; ++n < t.length;)if (y.call(t, n))return o.value = t[n], o.done = !1, o;
							return o.value = m, o.done = !0, o
						};
						return r.next = r
					}
				}
				return {next: v}
			}

			function v() {
				return {value: m, done: !0}
			}

			var m, y = Object.prototype.hasOwnProperty, b = "function" == typeof Symbol && Symbol.iterator || "@@iterator", x = "object" == typeof t, w = e.regeneratorRuntime;
			if (w)return void(x && (t.exports = w));
			w = e.regeneratorRuntime = x ? t.exports : {}, w.wrap = r;
			var M = "suspendedStart", k = "suspendedYield", C = "executing", S = "completed", _ = {}, E = u.prototype = i.prototype;
			a.prototype = E.constructor = u, u.constructor = a, a.displayName = "GeneratorFunction", w.isGeneratorFunction = function (t) {
				var e = "function" == typeof t && t.constructor;
				return e ? e === a || "GeneratorFunction" === (e.displayName || e.name) : !1
			}, w.mark = function (t) {
				return Object.setPrototypeOf ? Object.setPrototypeOf(t, u) : t.__proto__ = u, t.prototype = Object.create(E), t
			}, w.awrap = function (t) {
				return new c(t)
			}, s(l.prototype), w.async = function (t, e, n, o) {
				var i = new l(r(t, e, n, o));
				return w.isGeneratorFunction(e) ? i : i.next().then(function (t) {
					return t.done ? t.value : i.next()
				})
			}, s(E), E[b] = function () {
				return this
			}, E.toString = function () {
				return "[object Generator]"
			}, w.keys = function (t) {
				var e = [];
				for (var n in t)e.push(n);
				return e.reverse(), function r() {
					for (; e.length;) {
						var n = e.pop();
						if (n in t)return r.value = n, r.done = !1, r
					}
					return r.done = !0, r
				}
			}, w.values = g, d.prototype = {
				constructor: d, reset: function (t) {
					if (this.prev = 0, this.next = 0, this.sent = m, this.done = !1, this.delegate = null, this.tryEntries.forEach(p), !t)for (var e in this)"t" === e.charAt(0) && y.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = m)
				}, stop: function () {
					this.done = !0;
					var t = this.tryEntries[0], e = t.completion;
					if ("throw" === e.type)throw e.arg;
					return this.rval
				}, dispatchException: function (t) {
					function e(e, r) {
						return i.type = "throw", i.arg = t, n.next = e, !!r
					}

					if (this.done)throw t;
					for (var n = this, r = this.tryEntries.length - 1; r >= 0; --r) {
						var o = this.tryEntries[r], i = o.completion;
						if ("root" === o.tryLoc)return e("end");
						if (o.tryLoc <= this.prev) {
							var a = y.call(o, "catchLoc"), u = y.call(o, "finallyLoc");
							if (a && u) {
								if (this.prev < o.catchLoc)return e(o.catchLoc, !0);
								if (this.prev < o.finallyLoc)return e(o.finallyLoc)
							} else if (a) {
								if (this.prev < o.catchLoc)return e(o.catchLoc, !0)
							} else {
								if (!u)throw new Error("try statement without catch or finally");
								if (this.prev < o.finallyLoc)return e(o.finallyLoc)
							}
						}
					}
				}, abrupt: function (t, e) {
					for (var n = this.tryEntries.length - 1; n >= 0; --n) {
						var r = this.tryEntries[n];
						if (r.tryLoc <= this.prev && y.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
							var o = r;
							break
						}
					}
					o && ("break" === t || "continue" === t) && o.tryLoc <= e && e <= o.finallyLoc && (o = null);
					var i = o ? o.completion : {};
					return i.type = t, i.arg = e, o ? this.next = o.finallyLoc : this.complete(i), _
				}, complete: function (t, e) {
					if ("throw" === t.type)throw t.arg;
					"break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = t.arg, this.next = "end") : "normal" === t.type && e && (this.next = e)
				}, finish: function (t) {
					for (var e = this.tryEntries.length - 1; e >= 0; --e) {
						var n = this.tryEntries[e];
						if (n.finallyLoc === t)return this.complete(n.completion, n.afterLoc), p(n), _
					}
				}, "catch": function (t) {
					for (var e = this.tryEntries.length - 1; e >= 0; --e) {
						var n = this.tryEntries[e];
						if (n.tryLoc === t) {
							var r = n.completion;
							if ("throw" === r.type) {
								var o = r.arg;
								p(n)
							}
							return o
						}
					}
					throw new Error("illegal catch attempt")
				}, delegateYield: function (t, e, n) {
					return this.delegate = {iterator: g(t), resultName: e, nextLoc: n}, _
				}
			}
		}("object" == typeof e ? e : "object" == typeof window ? window : "object" == typeof self ? self : this)
	}).call(e, function () {
		return this
	}(), n(3))
}, function (t, e) {
	!function () {
		"use strict";
		function t(t) {
			if ("string" != typeof t && (t = String(t)), /[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(t))throw new TypeError("Invalid character in header field name");
			return t.toLowerCase()
		}

		function e(t) {
			return "string" != typeof t && (t = String(t)), t
		}

		function n(t) {
			this.map = {}, t instanceof n ? t.forEach(function (t, e) {
				this.append(e, t)
			}, this) : t && Object.getOwnPropertyNames(t).forEach(function (e) {
				this.append(e, t[e])
			}, this)
		}

		function r(t) {
			return t.bodyUsed ? Promise.reject(new TypeError("Already read")) : void(t.bodyUsed = !0)
		}

		function o(t) {
			return new Promise(function (e, n) {
				t.onload = function () {
					e(t.result)
				}, t.onerror = function () {
					n(t.error)
				}
			})
		}

		function i(t) {
			var e = new FileReader;
			return e.readAsArrayBuffer(t), o(e)
		}

		function a(t) {
			var e = new FileReader;
			return e.readAsText(t), o(e)
		}

		function u() {
			return this.bodyUsed = !1, this._initBody = function (t) {
				if (this._bodyInit = t, "string" == typeof t)this._bodyText = t; else if (p.blob && Blob.prototype.isPrototypeOf(t))this._bodyBlob = t; else if (p.formData && FormData.prototype.isPrototypeOf(t))this._bodyFormData = t; else if (t) {
					if (!p.arrayBuffer || !ArrayBuffer.prototype.isPrototypeOf(t))throw new Error("unsupported BodyInit type")
				} else this._bodyText = ""
			}, p.blob ? (this.blob = function () {
				var t = r(this);
				if (t)return t;
				if (this._bodyBlob)return Promise.resolve(this._bodyBlob);
				if (this._bodyFormData)throw new Error("could not read FormData body as blob");
				return Promise.resolve(new Blob([this._bodyText]))
			}, this.arrayBuffer = function () {
				return this.blob().then(i)
			}, this.text = function () {
				var t = r(this);
				if (t)return t;
				if (this._bodyBlob)return a(this._bodyBlob);
				if (this._bodyFormData)throw new Error("could not read FormData body as text");
				return Promise.resolve(this._bodyText)
			}) : this.text = function () {
				var t = r(this);
				return t ? t : Promise.resolve(this._bodyText)
			}, p.formData && (this.formData = function () {
				return this.text().then(l)
			}), this.json = function () {
				return this.text().then(JSON.parse)
			}, this
		}

		function s(t) {
			var e = t.toUpperCase();
			return d.indexOf(e) > -1 ? e : t
		}

		function c(t, e) {
			e = e || {};
			var r = e.body;
			if (c.prototype.isPrototypeOf(t)) {
				if (t.bodyUsed)throw new TypeError("Already read");
				this.url = t.url, this.credentials = t.credentials, e.headers || (this.headers = new n(t.headers)), this.method = t.method, this.mode = t.mode, r || (r = t._bodyInit, t.bodyUsed = !0)
			} else this.url = t;
			if (this.credentials = e.credentials || this.credentials || "omit", (e.headers || !this.headers) && (this.headers = new n(e.headers)), this.method = s(e.method || this.method || "GET"), this.mode = e.mode || this.mode || null, this.referrer = null, ("GET" === this.method || "HEAD" === this.method) && r)throw new TypeError("Body not allowed for GET or HEAD requests");
			this._initBody(r)
		}

		function l(t) {
			var e = new FormData;
			return t.trim().split("&").forEach(function (t) {
				if (t) {
					var n = t.split("="), r = n.shift().replace(/\+/g, " "), o = n.join("=").replace(/\+/g, " ");
					e.append(decodeURIComponent(r), decodeURIComponent(o))
				}
			}), e
		}

		function f(t) {
			var e = new n, r = t.getAllResponseHeaders().trim().split("\n");
			return r.forEach(function (t) {
				var n = t.trim().split(":"), r = n.shift().trim(), o = n.join(":").trim();
				e.append(r, o)
			}), e
		}

		function h(t, e) {
			e || (e = {}), this._initBody(t), this.type = "default", this.status = e.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = e.statusText, this.headers = e.headers instanceof n ? e.headers : new n(e.headers), this.url = e.url || ""
		}

		if (!self.fetch) {
			n.prototype.append = function (n, r) {
				n = t(n), r = e(r);
				var o = this.map[n];
				o || (o = [], this.map[n] = o), o.push(r)
			}, n.prototype["delete"] = function (e) {
				delete this.map[t(e)]
			}, n.prototype.get = function (e) {
				var n = this.map[t(e)];
				return n ? n[0] : null
			}, n.prototype.getAll = function (e) {
				return this.map[t(e)] || []
			}, n.prototype.has = function (e) {
				return this.map.hasOwnProperty(t(e))
			}, n.prototype.set = function (n, r) {
				this.map[t(n)] = [e(r)]
			}, n.prototype.forEach = function (t, e) {
				Object.getOwnPropertyNames(this.map).forEach(function (n) {
					this.map[n].forEach(function (r) {
						t.call(e, r, n, this)
					}, this)
				}, this)
			};
			var p = {
				blob: "FileReader" in self && "Blob" in self && function () {
					try {
						return new Blob, !0
					} catch (t) {
						return !1
					}
				}(), formData: "FormData" in self, arrayBuffer: "ArrayBuffer" in self
			}, d = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
			c.prototype.clone = function () {
				return new c(this)
			}, u.call(c.prototype), u.call(h.prototype), h.prototype.clone = function () {
				return new h(this._bodyInit, {
					status: this.status,
					statusText: this.statusText,
					headers: new n(this.headers),
					url: this.url
				})
			}, h.error = function () {
				var t = new h(null, {status: 0, statusText: ""});
				return t.type = "error", t
			};
			var g = [301, 302, 303, 307, 308];
			h.redirect = function (t, e) {
				if (-1 === g.indexOf(e))throw new RangeError("Invalid status code");
				return new h(null, {status: e, headers: {location: t}})
			}, self.Headers = n, self.Request = c, self.Response = h, self.fetch = function (t, e) {
				return new Promise(function (n, r) {
					function o() {
						return "responseURL" in a ? a.responseURL : /^X-Request-URL:/m.test(a.getAllResponseHeaders()) ? a.getResponseHeader("X-Request-URL") : void 0
					}

					var i;
					i = c.prototype.isPrototypeOf(t) && !e ? t : new c(t, e);
					var a = new XMLHttpRequest;
					a.onload = function () {
						var t = 1223 === a.status ? 204 : a.status;
						if (100 > t || t > 599)return void r(new TypeError("Network request failed"));
						var e = {
							status: t,
							statusText: a.statusText,
							headers: f(a),
							url: o()
						}, i = "response" in a ? a.response : a.responseText;
						n(new h(i, e))
					}, a.onerror = function () {
						r(new TypeError("Network request failed"))
					}, a.open(i.method, i.url, !0), "include" === i.credentials && (a.withCredentials = !0), "responseType" in a && p.blob && (a.responseType = "blob"), i.headers.forEach(function (t, e) {
						a.setRequestHeader(e, t)
					}), a.send("undefined" == typeof i._bodyInit ? null : i._bodyInit)
				})
			}, self.fetch.polyfill = !0
		}
	}()
}]);