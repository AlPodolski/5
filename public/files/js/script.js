!function (e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
        if (e.document) return t(e);
        throw new Error("jQuery requires a window with a document")
    } : t(e)
}("undefined" != typeof window ? window : this, function (T, O) {
    "use strict";

    function y(e) {
        return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item
    }

    function g(e) {
        return null != e && e === e.window
    }

    var t = [], I = Object.getPrototypeOf, a = t.slice, N = t.flat ? function (e) {
            return t.flat.call(e)
        } : function (e) {
            return t.concat.apply([], e)
        }, z = t.push, F = t.indexOf, R = {}, _ = R.toString, W = R.hasOwnProperty, B = W.toString, X = B.call(Object),
        m = {}, S = T.document, Y = {type: !0, src: !0, nonce: !0, noModule: !0};

    function U(e, t, n) {
        var o, i, s = (n = n || S).createElement("script");
        if (s.text = e, t) for (o in Y) (i = t[o] || t.getAttribute && t.getAttribute(o)) && s.setAttribute(o, i);
        n.head.appendChild(s).parentNode.removeChild(s)
    }

    function h(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? R[_.call(e)] || "object" : typeof e
    }

    var e = "3.6.3", C = function (e, t) {
        return new C.fn.init(e, t)
    };

    function V(e) {
        var t = !!e && "length" in e && e.length, n = h(e);
        return !y(e) && !g(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }

    C.fn = C.prototype = {
        jquery: e, constructor: C, length: 0, toArray: function () {
            return a.call(this)
        }, get: function (e) {
            return null == e ? a.call(this) : e < 0 ? this[e + this.length] : this[e]
        }, pushStack: function (e) {
            e = C.merge(this.constructor(), e);
            return e.prevObject = this, e
        }, each: function (e) {
            return C.each(this, e)
        }, map: function (n) {
            return this.pushStack(C.map(this, function (e, t) {
                return n.call(e, t, e)
            }))
        }, slice: function () {
            return this.pushStack(a.apply(this, arguments))
        }, first: function () {
            return this.eq(0)
        }, last: function () {
            return this.eq(-1)
        }, even: function () {
            return this.pushStack(C.grep(this, function (e, t) {
                return (t + 1) % 2
            }))
        }, odd: function () {
            return this.pushStack(C.grep(this, function (e, t) {
                return t % 2
            }))
        }, eq: function (e) {
            var t = this.length, e = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= e && e < t ? [this[e]] : [])
        }, end: function () {
            return this.prevObject || this.constructor()
        }, push: z, sort: t.sort, splice: t.splice
    }, C.extend = C.fn.extend = function () {
        var e, t, n, o, i, s = arguments[0] || {}, r = 1, a = arguments.length, l = !1;
        for ("boolean" == typeof s && (l = s, s = arguments[r] || {}, r++), "object" == typeof s || y(s) || (s = {}), r === a && (s = this, r--); r < a; r++) if (null != (e = arguments[r])) for (t in e) n = e[t], "__proto__" !== t && s !== n && (l && n && (C.isPlainObject(n) || (o = Array.isArray(n))) ? (i = s[t], i = o && !Array.isArray(i) ? [] : o || C.isPlainObject(i) ? i : {}, o = !1, s[t] = C.extend(l, i, n)) : void 0 !== n && (s[t] = n));
        return s
    }, C.extend({
        expando: "jQuery" + (e + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (e) {
            throw new Error(e)
        }, noop: function () {
        }, isPlainObject: function (e) {
            return !(!e || "[object Object]" !== _.call(e) || (e = I(e)) && ("function" != typeof (e = W.call(e, "constructor") && e.constructor) || B.call(e) !== X))
        }, isEmptyObject: function (e) {
            for (var t in e) return !1;
            return !0
        }, globalEval: function (e, t, n) {
            U(e, {nonce: t && t.nonce}, n)
        }, each: function (e, t) {
            var n, o = 0;
            if (V(e)) for (n = e.length; o < n && !1 !== t.call(e[o], o, e[o]); o++) ; else for (o in e) if (!1 === t.call(e[o], o, e[o])) break;
            return e
        }, makeArray: function (e, t) {
            t = t || [];
            return null != e && (V(Object(e)) ? C.merge(t, "string" == typeof e ? [e] : e) : z.call(t, e)), t
        }, inArray: function (e, t, n) {
            return null == t ? -1 : F.call(t, e, n)
        }, merge: function (e, t) {
            for (var n = +t.length, o = 0, i = e.length; o < n; o++) e[i++] = t[o];
            return e.length = i, e
        }, grep: function (e, t, n) {
            for (var o = [], i = 0, s = e.length, r = !n; i < s; i++) !t(e[i], i) != r && o.push(e[i]);
            return o
        }, map: function (e, t, n) {
            var o, i, s = 0, r = [];
            if (V(e)) for (o = e.length; s < o; s++) null != (i = t(e[s], s, n)) && r.push(i); else for (s in e) null != (i = t(e[s], s, n)) && r.push(i);
            return N(r)
        }, guid: 1, support: m
    }), "function" == typeof Symbol && (C.fn[Symbol.iterator] = t[Symbol.iterator]), C.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
        R["[object " + t + "]"] = t.toLowerCase()
    });

    function o(e, t, n) {
        for (var o = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType;) if (1 === e.nodeType) {
            if (i && C(e).is(n)) break;
            o.push(e)
        }
        return o
    }

    function Q(e, t) {
        for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
        return n
    }

    var e = function (O) {
            function u(e, t) {
                return e = "0x" + e.slice(1) - 65536, t || (e < 0 ? String.fromCharCode(65536 + e) : String.fromCharCode(e >> 10 | 55296, 1023 & e | 56320))
            }

            function I(e, t) {
                return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            }

            function N() {
                T()
            }

            var e, p, x, s, z, f, F, R, w, l, c, T, S, n, C, h, o, i, g, k = "sizzle" + +new Date, d = O.document, $ = 0,
                _ = 0, W = D(), B = D(), X = D(), m = D(), Y = function (e, t) {
                    return e === t && (c = !0), 0
                }, U = {}.hasOwnProperty, t = [], V = t.pop, Q = t.push, A = t.push, Z = t.slice, y = function (e, t) {
                    for (var n = 0, o = e.length; n < o; n++) if (e[n] === t) return n;
                    return -1
                },
                G = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                r = "[\\x20\\t\\r\\n\\f]", a = "(?:\\\\[\\da-fA-F]{1,6}" + r + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
                K = "\\[" + r + "*(" + a + ")(?:" + r + "*([*^$|!~]?=)" + r + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + a + "))|)" + r + "*\\]",
                J = ":(" + a + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + K + ")*)|.*)\\)|)",
                ee = new RegExp(r + "+", "g"), v = new RegExp("^" + r + "+|((?:^|[^\\\\])(?:\\\\.)*)" + r + "+$", "g"),
                te = new RegExp("^" + r + "*," + r + "*"), ne = new RegExp("^" + r + "*([>+~]|" + r + ")" + r + "*"),
                oe = new RegExp(r + "|>"), ie = new RegExp(J), se = new RegExp("^" + a + "$"), b = {
                    ID: new RegExp("^#(" + a + ")"),
                    CLASS: new RegExp("^\\.(" + a + ")"),
                    TAG: new RegExp("^(" + a + "|[*])"),
                    ATTR: new RegExp("^" + K),
                    PSEUDO: new RegExp("^" + J),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + r + "*(even|odd|(([+-]|)(\\d*)n|)" + r + "*(?:([+-]|)" + r + "*(\\d+)|))" + r + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + G + ")$", "i"),
                    needsContext: new RegExp("^" + r + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + r + "*((?:-\\d)?\\d*)" + r + "*\\)|)(?=[^-]|$)", "i")
                }, re = /HTML$/i, ae = /^(?:input|select|textarea|button)$/i, le = /^h\d$/i, E = /^[^{]+\{\s*\[native \w/,
                ce = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, de = /[+~]/,
                P = new RegExp("\\\\[\\da-fA-F]{1,6}" + r + "?|\\\\([^\\r\\n\\f])", "g"),
                ue = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, pe = ye(function (e) {
                    return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
                }, {dir: "parentNode", next: "legend"});
            try {
                A.apply(t = Z.call(d.childNodes), d.childNodes), t[d.childNodes.length].nodeType
            } catch (e) {
                A = {
                    apply: t.length ? function (e, t) {
                        Q.apply(e, Z.call(t))
                    } : function (e, t) {
                        for (var n = e.length, o = 0; e[n++] = t[o++];) ;
                        e.length = n - 1
                    }
                }
            }

            function L(e, t, n, o) {
                var i, s, r, a, l, c, d = t && t.ownerDocument, u = t ? t.nodeType : 9;
                if (n = n || [], "string" != typeof e || !e || 1 !== u && 9 !== u && 11 !== u) return n;
                if (!o && (T(t), t = t || S, C)) {
                    if (11 !== u && (a = ce.exec(e))) if (i = a[1]) {
                        if (9 === u) {
                            if (!(c = t.getElementById(i))) return n;
                            if (c.id === i) return n.push(c), n
                        } else if (d && (c = d.getElementById(i)) && g(t, c) && c.id === i) return n.push(c), n
                    } else {
                        if (a[2]) return A.apply(n, t.getElementsByTagName(e)), n;
                        if ((i = a[3]) && p.getElementsByClassName && t.getElementsByClassName) return A.apply(n, t.getElementsByClassName(i)), n
                    }
                    if (p.qsa && !m[e + " "] && (!h || !h.test(e)) && (1 !== u || "object" !== t.nodeName.toLowerCase())) {
                        if (c = e, d = t, 1 === u && (oe.test(e) || ne.test(e))) {
                            for ((d = de.test(e) && me(t.parentNode) || t) === t && p.scope || ((r = t.getAttribute("id")) ? r = r.replace(ue, I) : t.setAttribute("id", r = k)), s = (l = f(e)).length; s--;) l[s] = (r ? "#" + r : ":scope") + " " + q(l[s]);
                            c = l.join(",")
                        }
                        try {
                            if (p.cssSupportsSelector && !CSS.supports("selector(:is(" + c + "))")) throw new Error;
                            return A.apply(n, d.querySelectorAll(c)), n
                        } catch (t) {
                            m(e, !0)
                        } finally {
                            r === k && t.removeAttribute("id")
                        }
                    }
                }
                return R(e.replace(v, "$1"), t, n, o)
            }

            function D() {
                var o = [];
                return function e(t, n) {
                    return o.push(t + " ") > x.cacheLength && delete e[o.shift()], e[t + " "] = n
                }
            }

            function j(e) {
                return e[k] = !0, e
            }

            function H(e) {
                var t = S.createElement("fieldset");
                try {
                    return !!e(t)
                } catch (e) {
                    return !1
                } finally {
                    t.parentNode && t.parentNode.removeChild(t)
                }
            }

            function fe(e, t) {
                for (var n = e.split("|"), o = n.length; o--;) x.attrHandle[n[o]] = t
            }

            function he(e, t) {
                var n = t && e, o = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
                if (o) return o;
                if (n) for (; n = n.nextSibling;) if (n === t) return -1;
                return e ? 1 : -1
            }

            function ge(t) {
                return function (e) {
                    return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && pe(e) === t : e.disabled === t : "label" in e && e.disabled === t
                }
            }

            function M(r) {
                return j(function (s) {
                    return s = +s, j(function (e, t) {
                        for (var n, o = r([], e.length, s), i = o.length; i--;) e[n = o[i]] && (e[n] = !(t[n] = e[n]))
                    })
                })
            }

            function me(e) {
                return e && void 0 !== e.getElementsByTagName && e
            }

            for (e in p = L.support = {}, z = L.isXML = function (e) {
                var t = e && e.namespaceURI, e = e && (e.ownerDocument || e).documentElement;
                return !re.test(t || e && e.nodeName || "HTML")
            }, T = L.setDocument = function (e) {
                var e = e ? e.ownerDocument || e : d;
                return e != S && 9 === e.nodeType && e.documentElement && (n = (S = e).documentElement, C = !z(S), d != S && (e = S.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", N, !1) : e.attachEvent && e.attachEvent("onunload", N)), p.scope = H(function (e) {
                    return n.appendChild(e).appendChild(S.createElement("div")), void 0 !== e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length
                }), p.cssSupportsSelector = H(function () {
                    return CSS.supports("selector(*)") && S.querySelectorAll(":is(:jqfake)") && !CSS.supports("selector(:is(*,:jqfake))")
                }), p.attributes = H(function (e) {
                    return e.className = "i", !e.getAttribute("className")
                }), p.getElementsByTagName = H(function (e) {
                    return e.appendChild(S.createComment("")), !e.getElementsByTagName("*").length
                }), p.getElementsByClassName = E.test(S.getElementsByClassName), p.getById = H(function (e) {
                    return n.appendChild(e).id = k, !S.getElementsByName || !S.getElementsByName(k).length
                }), p.getById ? (x.filter.ID = function (e) {
                    var t = e.replace(P, u);
                    return function (e) {
                        return e.getAttribute("id") === t
                    }
                }, x.find.ID = function (e, t) {
                    if (void 0 !== t.getElementById && C) return (t = t.getElementById(e)) ? [t] : []
                }) : (x.filter.ID = function (e) {
                    var t = e.replace(P, u);
                    return function (e) {
                        e = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                        return e && e.value === t
                    }
                }, x.find.ID = function (e, t) {
                    if (void 0 !== t.getElementById && C) {
                        var n, o, i, s = t.getElementById(e);
                        if (s) {
                            if ((n = s.getAttributeNode("id")) && n.value === e) return [s];
                            for (i = t.getElementsByName(e), o = 0; s = i[o++];) if ((n = s.getAttributeNode("id")) && n.value === e) return [s]
                        }
                        return []
                    }
                }), x.find.TAG = p.getElementsByTagName ? function (e, t) {
                    return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : p.qsa ? t.querySelectorAll(e) : void 0
                } : function (e, t) {
                    var n, o = [], i = 0, s = t.getElementsByTagName(e);
                    if ("*" !== e) return s;
                    for (; n = s[i++];) 1 === n.nodeType && o.push(n);
                    return o
                }, x.find.CLASS = p.getElementsByClassName && function (e, t) {
                    if (void 0 !== t.getElementsByClassName && C) return t.getElementsByClassName(e)
                }, o = [], h = [], (p.qsa = E.test(S.querySelectorAll)) && (H(function (e) {
                    var t;
                    n.appendChild(e).innerHTML = "<a id='" + k + "'></a><select id='" + k + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && h.push("[*^$]=" + r + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || h.push("\\[" + r + "*(?:value|" + G + ")"), e.querySelectorAll("[id~=" + k + "-]").length || h.push("~="), (t = S.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || h.push("\\[" + r + "*name" + r + "*=" + r + "*(?:''|\"\")"), e.querySelectorAll(":checked").length || h.push(":checked"), e.querySelectorAll("a#" + k + "+*").length || h.push(".#.+[+~]"), e.querySelectorAll("\\\f"), h.push("[\\r\\n\\f]")
                }), H(function (e) {
                    e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var t = S.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && h.push("name" + r + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && h.push(":enabled", ":disabled"), n.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && h.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), h.push(",.*:")
                })), (p.matchesSelector = E.test(i = n.matches || n.webkitMatchesSelector || n.mozMatchesSelector || n.oMatchesSelector || n.msMatchesSelector)) && H(function (e) {
                    p.disconnectedMatch = i.call(e, "*"), i.call(e, "[s!='']:x"), o.push("!=", J)
                }), p.cssSupportsSelector || h.push(":has"), h = h.length && new RegExp(h.join("|")), o = o.length && new RegExp(o.join("|")), e = E.test(n.compareDocumentPosition), g = e || E.test(n.contains) ? function (e, t) {
                    var n = 9 === e.nodeType && e.documentElement || e, t = t && t.parentNode;
                    return e === t || !(!t || 1 !== t.nodeType || !(n.contains ? n.contains(t) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(t)))
                } : function (e, t) {
                    if (t) for (; t = t.parentNode;) if (t === e) return !0;
                    return !1
                }, Y = e ? function (e, t) {
                    var n;
                    return e === t ? (c = !0, 0) : !e.compareDocumentPosition - !t.compareDocumentPosition || (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !p.sortDetached && t.compareDocumentPosition(e) === n ? e == S || e.ownerDocument == d && g(d, e) ? -1 : t == S || t.ownerDocument == d && g(d, t) ? 1 : l ? y(l, e) - y(l, t) : 0 : 4 & n ? -1 : 1)
                } : function (e, t) {
                    if (e === t) return c = !0, 0;
                    var n, o = 0, i = e.parentNode, s = t.parentNode, r = [e], a = [t];
                    if (!i || !s) return e == S ? -1 : t == S ? 1 : i ? -1 : s ? 1 : l ? y(l, e) - y(l, t) : 0;
                    if (i === s) return he(e, t);
                    for (n = e; n = n.parentNode;) r.unshift(n);
                    for (n = t; n = n.parentNode;) a.unshift(n);
                    for (; r[o] === a[o];) o++;
                    return o ? he(r[o], a[o]) : r[o] == d ? -1 : a[o] == d ? 1 : 0
                }), S
            }, L.matches = function (e, t) {
                return L(e, null, null, t)
            }, L.matchesSelector = function (e, t) {
                if (T(e), p.matchesSelector && C && !m[t + " "] && (!o || !o.test(t)) && (!h || !h.test(t))) try {
                    var n = i.call(e, t);
                    if (n || p.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
                } catch (e) {
                    m(t, !0)
                }
                return 0 < L(t, S, null, [e]).length
            }, L.contains = function (e, t) {
                return (e.ownerDocument || e) != S && T(e), g(e, t)
            }, L.attr = function (e, t) {
                (e.ownerDocument || e) != S && T(e);
                var n = x.attrHandle[t.toLowerCase()],
                    n = n && U.call(x.attrHandle, t.toLowerCase()) ? n(e, t, !C) : void 0;
                return void 0 !== n ? n : p.attributes || !C ? e.getAttribute(t) : (n = e.getAttributeNode(t)) && n.specified ? n.value : null
            }, L.escape = function (e) {
                return (e + "").replace(ue, I)
            }, L.error = function (e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, L.uniqueSort = function (e) {
                var t, n = [], o = 0, i = 0;
                if (c = !p.detectDuplicates, l = !p.sortStable && e.slice(0), e.sort(Y), c) {
                    for (; t = e[i++];) t === e[i] && (o = n.push(i));
                    for (; o--;) e.splice(n[o], 1)
                }
                return l = null, e
            }, s = L.getText = function (e) {
                var t, n = "", o = 0, i = e.nodeType;
                if (i) {
                    if (1 === i || 9 === i || 11 === i) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += s(e)
                    } else if (3 === i || 4 === i) return e.nodeValue
                } else for (; t = e[o++];) n += s(t);
                return n
            }, (x = L.selectors = {
                cacheLength: 50,
                createPseudo: j,
                match: b,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {dir: "parentNode", first: !0},
                    " ": {dir: "parentNode"},
                    "+": {dir: "previousSibling", first: !0},
                    "~": {dir: "previousSibling"}
                },
                preFilter: {
                    ATTR: function (e) {
                        return e[1] = e[1].replace(P, u), e[3] = (e[3] || e[4] || e[5] || "").replace(P, u), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    }, CHILD: function (e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || L.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && L.error(e[0]), e
                    }, PSEUDO: function (e) {
                        var t, n = !e[6] && e[2];
                        return b.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && ie.test(n) && (t = (t = f(n, !0)) && n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function (e) {
                        var t = e.replace(P, u).toLowerCase();
                        return "*" === e ? function () {
                            return !0
                        } : function (e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    }, CLASS: function (e) {
                        var t = W[e + " "];
                        return t || (t = new RegExp("(^|" + r + ")" + e + "(" + r + "|$)")) && W(e, function (e) {
                            return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                        })
                    }, ATTR: function (t, n, o) {
                        return function (e) {
                            e = L.attr(e, t);
                            return null == e ? "!=" === n : !n || (e += "", "=" === n ? e === o : "!=" === n ? e !== o : "^=" === n ? o && 0 === e.indexOf(o) : "*=" === n ? o && -1 < e.indexOf(o) : "$=" === n ? o && e.slice(-o.length) === o : "~=" === n ? -1 < (" " + e.replace(ee, " ") + " ").indexOf(o) : "|=" === n && (e === o || e.slice(0, o.length + 1) === o + "-"))
                        }
                    }, CHILD: function (h, e, t, g, m) {
                        var v = "nth" !== h.slice(0, 3), y = "last" !== h.slice(-4), b = "of-type" === e;
                        return 1 === g && 0 === m ? function (e) {
                            return !!e.parentNode
                        } : function (e, t, n) {
                            var o, i, s, r, a, l, c = v != y ? "nextSibling" : "previousSibling", d = e.parentNode,
                                u = b && e.nodeName.toLowerCase(), p = !n && !b, f = !1;
                            if (d) {
                                if (v) {
                                    for (; c;) {
                                        for (r = e; r = r[c];) if (b ? r.nodeName.toLowerCase() === u : 1 === r.nodeType) return !1;
                                        l = c = "only" === h && !l && "nextSibling"
                                    }
                                    return !0
                                }
                                if (l = [y ? d.firstChild : d.lastChild], y && p) {
                                    for (f = (a = (o = (i = (s = (r = d)[k] || (r[k] = {}))[r.uniqueID] || (s[r.uniqueID] = {}))[h] || [])[0] === $ && o[1]) && o[2], r = a && d.childNodes[a]; r = ++a && r && r[c] || (f = a = 0, l.pop());) if (1 === r.nodeType && ++f && r === e) {
                                        i[h] = [$, a, f];
                                        break
                                    }
                                } else if (!1 === (f = p ? a = (o = (i = (s = (r = e)[k] || (r[k] = {}))[r.uniqueID] || (s[r.uniqueID] = {}))[h] || [])[0] === $ && o[1] : f)) for (; (r = ++a && r && r[c] || (f = a = 0, l.pop())) && ((b ? r.nodeName.toLowerCase() !== u : 1 !== r.nodeType) || !++f || (p && ((i = (s = r[k] || (r[k] = {}))[r.uniqueID] || (s[r.uniqueID] = {}))[h] = [$, f]), r !== e));) ;
                                return (f -= m) === g || f % g == 0 && 0 <= f / g
                            }
                        }
                    }, PSEUDO: function (e, s) {
                        var t, r = x.pseudos[e] || x.setFilters[e.toLowerCase()] || L.error("unsupported pseudo: " + e);
                        return r[k] ? r(s) : 1 < r.length ? (t = [e, e, "", s], x.setFilters.hasOwnProperty(e.toLowerCase()) ? j(function (e, t) {
                            for (var n, o = r(e, s), i = o.length; i--;) e[n = y(e, o[i])] = !(t[n] = o[i])
                        }) : function (e) {
                            return r(e, 0, t)
                        }) : r
                    }
                },
                pseudos: {
                    not: j(function (e) {
                        var o = [], i = [], a = F(e.replace(v, "$1"));
                        return a[k] ? j(function (e, t, n, o) {
                            for (var i, s = a(e, null, o, []), r = e.length; r--;) (i = s[r]) && (e[r] = !(t[r] = i))
                        }) : function (e, t, n) {
                            return o[0] = e, a(o, null, n, i), o[0] = null, !i.pop()
                        }
                    }), has: j(function (t) {
                        return function (e) {
                            return 0 < L(t, e).length
                        }
                    }), contains: j(function (t) {
                        return t = t.replace(P, u), function (e) {
                            return -1 < (e.textContent || s(e)).indexOf(t)
                        }
                    }), lang: j(function (n) {
                        return se.test(n || "") || L.error("unsupported lang: " + n), n = n.replace(P, u).toLowerCase(), function (e) {
                            var t;
                            do {
                                if (t = C ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                            } while ((e = e.parentNode) && 1 === e.nodeType);
                            return !1
                        }
                    }), target: function (e) {
                        var t = O.location && O.location.hash;
                        return t && t.slice(1) === e.id
                    }, root: function (e) {
                        return e === n
                    }, focus: function (e) {
                        return e === S.activeElement && (!S.hasFocus || S.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    }, enabled: ge(!1), disabled: ge(!0), checked: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    }, selected: function (e) {
                        return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                    }, empty: function (e) {
                        for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
                        return !0
                    }, parent: function (e) {
                        return !x.pseudos.empty(e)
                    }, header: function (e) {
                        return le.test(e.nodeName)
                    }, input: function (e) {
                        return ae.test(e.nodeName)
                    }, button: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    }, text: function (e) {
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (e = e.getAttribute("type")) || "text" === e.toLowerCase())
                    }, first: M(function () {
                        return [0]
                    }), last: M(function (e, t) {
                        return [t - 1]
                    }), eq: M(function (e, t, n) {
                        return [n < 0 ? n + t : n]
                    }), even: M(function (e, t) {
                        for (var n = 0; n < t; n += 2) e.push(n);
                        return e
                    }), odd: M(function (e, t) {
                        for (var n = 1; n < t; n += 2) e.push(n);
                        return e
                    }), lt: M(function (e, t, n) {
                        for (var o = n < 0 ? n + t : t < n ? t : n; 0 <= --o;) e.push(o);
                        return e
                    }), gt: M(function (e, t, n) {
                        for (var o = n < 0 ? n + t : n; ++o < t;) e.push(o);
                        return e
                    })
                }
            }).pseudos.nth = x.pseudos.eq, {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) x.pseudos[e] = function (t) {
                return function (e) {
                    return "input" === e.nodeName.toLowerCase() && e.type === t
                }
            }(e);
            for (e in {submit: !0, reset: !0}) x.pseudos[e] = function (n) {
                return function (e) {
                    var t = e.nodeName.toLowerCase();
                    return ("input" === t || "button" === t) && e.type === n
                }
            }(e);

            function ve() {
            }

            function q(e) {
                for (var t = 0, n = e.length, o = ""; t < n; t++) o += e[t].value;
                return o
            }

            function ye(r, e, t) {
                var a = e.dir, l = e.next, c = l || a, d = t && "parentNode" === c, u = _++;
                return e.first ? function (e, t, n) {
                    for (; e = e[a];) if (1 === e.nodeType || d) return r(e, t, n);
                    return !1
                } : function (e, t, n) {
                    var o, i, s = [$, u];
                    if (n) {
                        for (; e = e[a];) if ((1 === e.nodeType || d) && r(e, t, n)) return !0
                    } else for (; e = e[a];) if (1 === e.nodeType || d) if (i = (i = e[k] || (e[k] = {}))[e.uniqueID] || (i[e.uniqueID] = {}), l && l === e.nodeName.toLowerCase()) e = e[a] || e; else {
                        if ((o = i[c]) && o[0] === $ && o[1] === u) return s[2] = o[2];
                        if ((i[c] = s)[2] = r(e, t, n)) return !0
                    }
                    return !1
                }
            }

            function be(i) {
                return 1 < i.length ? function (e, t, n) {
                    for (var o = i.length; o--;) if (!i[o](e, t, n)) return !1;
                    return !0
                } : i[0]
            }

            function xe(e, t, n, o, i) {
                for (var s, r = [], a = 0, l = e.length, c = null != t; a < l; a++) !(s = e[a]) || n && !n(s, o, i) || (r.push(s), c && t.push(a));
                return r
            }

            function we(e) {
                for (var o, t, n, i = e.length, s = x.relative[e[0].type], r = s || x.relative[" "], a = s ? 1 : 0, l = ye(function (e) {
                    return e === o
                }, r, !0), c = ye(function (e) {
                    return -1 < y(o, e)
                }, r, !0), d = [function (e, t, n) {
                    e = !s && (n || t !== w) || ((o = t).nodeType ? l : c)(e, t, n);
                    return o = null, e
                }]; a < i; a++) if (t = x.relative[e[a].type]) d = [ye(be(d), t)]; else {
                    if ((t = x.filter[e[a].type].apply(null, e[a].matches))[k]) {
                        for (n = ++a; n < i && !x.relative[e[n].type]; n++) ;
                        return function e(f, h, g, m, v, t) {
                            return m && !m[k] && (m = e(m)), v && !v[k] && (v = e(v, t)), j(function (e, t, n, o) {
                                var i, s, r, a = [], l = [], c = t.length, d = e || function (e, t, n) {
                                        for (var o = 0, i = t.length; o < i; o++) L(e, t[o], n);
                                        return n
                                    }(h || "*", n.nodeType ? [n] : n, []), u = !f || !e && h ? d : xe(d, a, f, n, o),
                                    p = g ? v || (e ? f : c || m) ? [] : t : u;
                                if (g && g(u, p, n, o), m) for (i = xe(p, l), m(i, [], n, o), s = i.length; s--;) (r = i[s]) && (p[l[s]] = !(u[l[s]] = r));
                                if (e) {
                                    if (v || f) {
                                        if (v) {
                                            for (i = [], s = p.length; s--;) (r = p[s]) && i.push(u[s] = r);
                                            v(null, p = [], i, o)
                                        }
                                        for (s = p.length; s--;) (r = p[s]) && -1 < (i = v ? y(e, r) : a[s]) && (e[i] = !(t[i] = r))
                                    }
                                } else p = xe(p === t ? p.splice(c, p.length) : p), v ? v(null, t, p, o) : A.apply(t, p)
                            })
                        }(1 < a && be(d), 1 < a && q(e.slice(0, a - 1).concat({value: " " === e[a - 2].type ? "*" : ""})).replace(v, "$1"), t, a < n && we(e.slice(a, n)), n < i && we(e = e.slice(n)), n < i && q(e))
                    }
                    d.push(t)
                }
                return be(d)
            }

            return ve.prototype = x.filters = x.pseudos, x.setFilters = new ve, f = L.tokenize = function (e, t) {
                var n, o, i, s, r, a, l, c = B[e + " "];
                if (c) return t ? 0 : c.slice(0);
                for (r = e, a = [], l = x.preFilter; r;) {
                    for (s in n && !(o = te.exec(r)) || (o && (r = r.slice(o[0].length) || r), a.push(i = [])), n = !1, (o = ne.exec(r)) && (n = o.shift(), i.push({
                        value: n,
                        type: o[0].replace(v, " ")
                    }), r = r.slice(n.length)), x.filter) !(o = b[s].exec(r)) || l[s] && !(o = l[s](o)) || (n = o.shift(), i.push({
                        value: n,
                        type: s,
                        matches: o
                    }), r = r.slice(n.length));
                    if (!n) break
                }
                return t ? r.length : r ? L.error(e) : B(e, a).slice(0)
            }, F = L.compile = function (e, t) {
                var n, m, v, y, b, o, i = [], s = [], r = X[e + " "];
                if (!r) {
                    for (n = (t = t || f(e)).length; n--;) ((r = we(t[n]))[k] ? i : s).push(r);
                    (r = X(e, (y = 0 < (v = i).length, b = 0 < (m = s).length, o = function (e, t, n, o, i) {
                        var s, r, a, l = 0, c = "0", d = e && [], u = [], p = w, f = e || b && x.find.TAG("*", i),
                            h = $ += null == p ? 1 : Math.random() || .1, g = f.length;
                        for (i && (w = t == S || t || i); c !== g && null != (s = f[c]); c++) {
                            if (b && s) {
                                for (r = 0, t || s.ownerDocument == S || (T(s), n = !C); a = m[r++];) if (a(s, t || S, n)) {
                                    o.push(s);
                                    break
                                }
                                i && ($ = h)
                            }
                            y && ((s = !a && s) && l--, e) && d.push(s)
                        }
                        if (l += c, y && c !== l) {
                            for (r = 0; a = v[r++];) a(d, u, t, n);
                            if (e) {
                                if (0 < l) for (; c--;) d[c] || u[c] || (u[c] = V.call(o));
                                u = xe(u)
                            }
                            A.apply(o, u), i && !e && 0 < u.length && 1 < l + v.length && L.uniqueSort(o)
                        }
                        return i && ($ = h, w = p), d
                    }, y ? j(o) : o))).selector = e
                }
                return r
            }, R = L.select = function (e, t, n, o) {
                var i, s, r, a, l, c = "function" == typeof e && e, d = !o && f(e = c.selector || e);
                if (n = n || [], 1 === d.length) {
                    if (2 < (s = d[0] = d[0].slice(0)).length && "ID" === (r = s[0]).type && 9 === t.nodeType && C && x.relative[s[1].type]) {
                        if (!(t = (x.find.ID(r.matches[0].replace(P, u), t) || [])[0])) return n;
                        c && (t = t.parentNode), e = e.slice(s.shift().value.length)
                    }
                    for (i = b.needsContext.test(e) ? 0 : s.length; i-- && (r = s[i], !x.relative[a = r.type]);) if ((l = x.find[a]) && (o = l(r.matches[0].replace(P, u), de.test(s[0].type) && me(t.parentNode) || t))) {
                        if (s.splice(i, 1), e = o.length && q(s)) break;
                        return A.apply(n, o), n
                    }
                }
                return (c || F(e, d))(o, t, !C, n, !t || de.test(e) && me(t.parentNode) || t), n
            }, p.sortStable = k.split("").sort(Y).join("") === k, p.detectDuplicates = !!c, T(), p.sortDetached = H(function (e) {
                return 1 & e.compareDocumentPosition(S.createElement("fieldset"))
            }), H(function (e) {
                return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
            }) || fe("type|href|height|width", function (e, t, n) {
                if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
            }), p.attributes && H(function (e) {
                return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
            }) || fe("value", function (e, t, n) {
                if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
            }), H(function (e) {
                return null == e.getAttribute("disabled")
            }) || fe(G, function (e, t, n) {
                if (!n) return !0 === e[t] ? t.toLowerCase() : (n = e.getAttributeNode(t)) && n.specified ? n.value : null
            }), L
        }(T),
        Z = (C.find = e, C.expr = e.selectors, C.expr[":"] = C.expr.pseudos, C.uniqueSort = C.unique = e.uniqueSort, C.text = e.getText, C.isXMLDoc = e.isXML, C.contains = e.contains, C.escapeSelector = e.escape, C.expr.match.needsContext);

    function l(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }

    var G = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function K(e, n, o) {
        return y(n) ? C.grep(e, function (e, t) {
            return !!n.call(e, t, e) !== o
        }) : n.nodeType ? C.grep(e, function (e) {
            return e === n !== o
        }) : "string" != typeof n ? C.grep(e, function (e) {
            return -1 < F.call(n, e) !== o
        }) : C.filter(n, e, o)
    }

    C.filter = function (e, t, n) {
        var o = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === o.nodeType ? C.find.matchesSelector(o, e) ? [o] : [] : C.find.matches(e, C.grep(t, function (e) {
            return 1 === e.nodeType
        }))
    }, C.fn.extend({
        find: function (e) {
            var t, n, o = this.length, i = this;
            if ("string" != typeof e) return this.pushStack(C(e).filter(function () {
                for (t = 0; t < o; t++) if (C.contains(i[t], this)) return !0
            }));
            for (n = this.pushStack([]), t = 0; t < o; t++) C.find(e, i[t], n);
            return 1 < o ? C.uniqueSort(n) : n
        }, filter: function (e) {
            return this.pushStack(K(this, e || [], !1))
        }, not: function (e) {
            return this.pushStack(K(this, e || [], !0))
        }, is: function (e) {
            return !!K(this, "string" == typeof e && Z.test(e) ? C(e) : e || [], !1).length
        }
    });
    var J, ee = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/, te = ((C.fn.init = function (e, t, n) {
            if (e) {
                if (n = n || J, "string" != typeof e) return e.nodeType ? (this[0] = e, this.length = 1, this) : y(e) ? void 0 !== n.ready ? n.ready(e) : e(C) : C.makeArray(e, this);
                if (!(o = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : ee.exec(e)) || !o[1] && t) return (!t || t.jquery ? t || n : this.constructor(t)).find(e);
                if (o[1]) {
                    if (t = t instanceof C ? t[0] : t, C.merge(this, C.parseHTML(o[1], t && t.nodeType ? t.ownerDocument || t : S, !0)), G.test(o[1]) && C.isPlainObject(t)) for (var o in t) y(this[o]) ? this[o](t[o]) : this.attr(o, t[o])
                } else (n = S.getElementById(o[2])) && (this[0] = n, this.length = 1)
            }
            return this
        }).prototype = C.fn, J = C(S), /^(?:parents|prev(?:Until|All))/),
        ne = {children: !0, contents: !0, next: !0, prev: !0};

    function oe(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType;) ;
        return e
    }

    C.fn.extend({
        has: function (e) {
            var t = C(e, this), n = t.length;
            return this.filter(function () {
                for (var e = 0; e < n; e++) if (C.contains(this, t[e])) return !0
            })
        }, closest: function (e, t) {
            var n, o = 0, i = this.length, s = [], r = "string" != typeof e && C(e);
            if (!Z.test(e)) for (; o < i; o++) for (n = this[o]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (r ? -1 < r.index(n) : 1 === n.nodeType && C.find.matchesSelector(n, e))) {
                s.push(n);
                break
            }
            return this.pushStack(1 < s.length ? C.uniqueSort(s) : s)
        }, index: function (e) {
            return e ? "string" == typeof e ? F.call(C(e), this[0]) : F.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        }, add: function (e, t) {
            return this.pushStack(C.uniqueSort(C.merge(this.get(), C(e, t))))
        }, addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), C.each({
        parent: function (e) {
            e = e.parentNode;
            return e && 11 !== e.nodeType ? e : null
        }, parents: function (e) {
            return o(e, "parentNode")
        }, parentsUntil: function (e, t, n) {
            return o(e, "parentNode", n)
        }, next: function (e) {
            return oe(e, "nextSibling")
        }, prev: function (e) {
            return oe(e, "previousSibling")
        }, nextAll: function (e) {
            return o(e, "nextSibling")
        }, prevAll: function (e) {
            return o(e, "previousSibling")
        }, nextUntil: function (e, t, n) {
            return o(e, "nextSibling", n)
        }, prevUntil: function (e, t, n) {
            return o(e, "previousSibling", n)
        }, siblings: function (e) {
            return Q((e.parentNode || {}).firstChild, e)
        }, children: function (e) {
            return Q(e.firstChild)
        }, contents: function (e) {
            return null != e.contentDocument && I(e.contentDocument) ? e.contentDocument : (l(e, "template") && (e = e.content || e), C.merge([], e.childNodes))
        }
    }, function (o, i) {
        C.fn[o] = function (e, t) {
            var n = C.map(this, i, e);
            return (t = "Until" !== o.slice(-5) ? e : t) && "string" == typeof t && (n = C.filter(t, n)), 1 < this.length && (ne[o] || C.uniqueSort(n), te.test(o)) && n.reverse(), this.pushStack(n)
        }
    });
    var k = /[^\x20\t\r\n\f]+/g;

    function d(e) {
        return e
    }

    function ie(e) {
        throw e
    }

    function se(e, t, n, o) {
        var i;
        try {
            e && y(i = e.promise) ? i.call(e).done(t).fail(n) : e && y(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(o))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }

    C.Callbacks = function (o) {
        var e, n;
        o = "string" == typeof o ? (e = o, n = {}, C.each(e.match(k) || [], function (e, t) {
            n[t] = !0
        }), n) : C.extend({}, o);

        function i() {
            for (a = a || o.once, r = s = !0; c.length; d = -1) for (t = c.shift(); ++d < l.length;) !1 === l[d].apply(t[0], t[1]) && o.stopOnFalse && (d = l.length, t = !1);
            o.memory || (t = !1), s = !1, a && (l = t ? [] : "")
        }

        var s, t, r, a, l = [], c = [], d = -1, u = {
            add: function () {
                return l && (t && !s && (d = l.length - 1, c.push(t)), function n(e) {
                    C.each(e, function (e, t) {
                        y(t) ? o.unique && u.has(t) || l.push(t) : t && t.length && "string" !== h(t) && n(t)
                    })
                }(arguments), t) && !s && i(), this
            }, remove: function () {
                return C.each(arguments, function (e, t) {
                    for (var n; -1 < (n = C.inArray(t, l, n));) l.splice(n, 1), n <= d && d--
                }), this
            }, has: function (e) {
                return e ? -1 < C.inArray(e, l) : 0 < l.length
            }, empty: function () {
                return l = l && [], this
            }, disable: function () {
                return a = c = [], l = t = "", this
            }, disabled: function () {
                return !l
            }, lock: function () {
                return a = c = [], t || s || (l = t = ""), this
            }, locked: function () {
                return !!a
            }, fireWith: function (e, t) {
                return a || (t = [e, (t = t || []).slice ? t.slice() : t], c.push(t), s) || i(), this
            }, fire: function () {
                return u.fireWith(this, arguments), this
            }, fired: function () {
                return !!r
            }
        };
        return u
    }, C.extend({
        Deferred: function (e) {
            var s = [["notify", "progress", C.Callbacks("memory"), C.Callbacks("memory"), 2], ["resolve", "done", C.Callbacks("once memory"), C.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", C.Callbacks("once memory"), C.Callbacks("once memory"), 1, "rejected"]],
                i = "pending", r = {
                    state: function () {
                        return i
                    }, always: function () {
                        return a.done(arguments).fail(arguments), this
                    }, catch: function (e) {
                        return r.then(null, e)
                    }, pipe: function () {
                        var i = arguments;
                        return C.Deferred(function (o) {
                            C.each(s, function (e, t) {
                                var n = y(i[t[4]]) && i[t[4]];
                                a[t[1]](function () {
                                    var e = n && n.apply(this, arguments);
                                    e && y(e.promise) ? e.promise().progress(o.notify).done(o.resolve).fail(o.reject) : o[t[0] + "With"](this, n ? [e] : arguments)
                                })
                            }), i = null
                        }).promise()
                    }, then: function (t, n, o) {
                        var l = 0;

                        function c(i, s, r, a) {
                            return function () {
                                function e() {
                                    var e, t;
                                    if (!(i < l)) {
                                        if ((e = r.apply(n, o)) === s.promise()) throw new TypeError("Thenable self-resolution");
                                        t = e && ("object" == typeof e || "function" == typeof e) && e.then, y(t) ? a ? t.call(e, c(l, s, d, a), c(l, s, ie, a)) : (l++, t.call(e, c(l, s, d, a), c(l, s, ie, a), c(l, s, d, s.notifyWith))) : (r !== d && (n = void 0, o = [e]), (a || s.resolveWith)(n, o))
                                    }
                                }

                                var n = this, o = arguments, t = a ? e : function () {
                                    try {
                                        e()
                                    } catch (e) {
                                        C.Deferred.exceptionHook && C.Deferred.exceptionHook(e, t.stackTrace), l <= i + 1 && (r !== ie && (n = void 0, o = [e]), s.rejectWith(n, o))
                                    }
                                };
                                i ? t() : (C.Deferred.getStackHook && (t.stackTrace = C.Deferred.getStackHook()), T.setTimeout(t))
                            }
                        }

                        return C.Deferred(function (e) {
                            s[0][3].add(c(0, e, y(o) ? o : d, e.notifyWith)), s[1][3].add(c(0, e, y(t) ? t : d)), s[2][3].add(c(0, e, y(n) ? n : ie))
                        }).promise()
                    }, promise: function (e) {
                        return null != e ? C.extend(e, r) : r
                    }
                }, a = {};
            return C.each(s, function (e, t) {
                var n = t[2], o = t[5];
                r[t[1]] = n.add, o && n.add(function () {
                    i = o
                }, s[3 - e][2].disable, s[3 - e][3].disable, s[0][2].lock, s[0][3].lock), n.add(t[3].fire), a[t[0]] = function () {
                    return a[t[0] + "With"](this === a ? void 0 : this, arguments), this
                }, a[t[0] + "With"] = n.fireWith
            }), r.promise(a), e && e.call(a, a), a
        }, when: function (e) {
            function t(t) {
                return function (e) {
                    i[t] = this, s[t] = 1 < arguments.length ? a.call(arguments) : e, --n || r.resolveWith(i, s)
                }
            }

            var n = arguments.length, o = n, i = Array(o), s = a.call(arguments), r = C.Deferred();
            if (n <= 1 && (se(e, r.done(t(o)).resolve, r.reject, !n), "pending" === r.state() || y(s[o] && s[o].then))) return r.then();
            for (; o--;) se(s[o], t(o), r.reject);
            return r.promise()
        }
    });
    var re = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/,
        ae = (C.Deferred.exceptionHook = function (e, t) {
            T.console && T.console.warn && e && re.test(e.name) && T.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
        }, C.readyException = function (e) {
            T.setTimeout(function () {
                throw e
            })
        }, C.Deferred());

    function le() {
        S.removeEventListener("DOMContentLoaded", le), T.removeEventListener("load", le), C.ready()
    }

    C.fn.ready = function (e) {
        return ae.then(e).catch(function (e) {
            C.readyException(e)
        }), this
    }, C.extend({
        isReady: !1, readyWait: 1, ready: function (e) {
            (!0 === e ? --C.readyWait : C.isReady) || (C.isReady = !0) !== e && 0 < --C.readyWait || ae.resolveWith(S, [C])
        }
    }), C.ready.then = ae.then, "complete" === S.readyState || "loading" !== S.readyState && !S.documentElement.doScroll ? T.setTimeout(C.ready) : (S.addEventListener("DOMContentLoaded", le), T.addEventListener("load", le));

    function u(e, t, n, o, i, s, r) {
        var a = 0, l = e.length, c = null == n;
        if ("object" === h(n)) for (a in i = !0, n) u(e, t, a, n[a], !0, s, r); else if (void 0 !== o && (i = !0, y(o) || (r = !0), t = c ? r ? (t.call(e, o), null) : (c = t, function (e, t, n) {
            return c.call(C(e), n)
        }) : t)) for (; a < l; a++) t(e[a], n, r ? o : o.call(e[a], a, t(e[a], n)));
        return i ? e : c ? t.call(e) : l ? t(e[0], n) : s
    }

    var ce = /^-ms-/, de = /-([a-z])/g;

    function ue(e, t) {
        return t.toUpperCase()
    }

    function b(e) {
        return e.replace(ce, "ms-").replace(de, ue)
    }

    function v(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    }

    function pe() {
        this.expando = C.expando + pe.uid++
    }

    pe.uid = 1, pe.prototype = {
        cache: function (e) {
            var t = e[this.expando];
            return t || (t = {}, v(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        }, set: function (e, t, n) {
            var o, i = this.cache(e);
            if ("string" == typeof t) i[b(t)] = n; else for (o in t) i[b(o)] = t[o];
            return i
        }, get: function (e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][b(t)]
        }, access: function (e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
        }, remove: function (e, t) {
            var n, o = e[this.expando];
            if (void 0 !== o) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(b) : (t = b(t)) in o ? [t] : t.match(k) || []).length;
                    for (; n--;) delete o[t[n]]
                }
                void 0 !== t && !C.isEmptyObject(o) || (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        }, hasData: function (e) {
            e = e[this.expando];
            return void 0 !== e && !C.isEmptyObject(e)
        }
    };
    var x = new pe, c = new pe, fe = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, he = /[A-Z]/g;

    function ge(e, t, n) {
        var o, i;
        if (void 0 === n && 1 === e.nodeType) if (o = "data-" + t.replace(he, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(o))) {
            try {
                n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : fe.test(i) ? JSON.parse(i) : i)
            } catch (e) {
            }
            c.set(e, t, n)
        } else n = void 0;
        return n
    }

    C.extend({
        hasData: function (e) {
            return c.hasData(e) || x.hasData(e)
        }, data: function (e, t, n) {
            return c.access(e, t, n)
        }, removeData: function (e, t) {
            c.remove(e, t)
        }, _data: function (e, t, n) {
            return x.access(e, t, n)
        }, _removeData: function (e, t) {
            x.remove(e, t)
        }
    }), C.fn.extend({
        data: function (n, e) {
            var t, o, i, s = this[0], r = s && s.attributes;
            if (void 0 !== n) return "object" == typeof n ? this.each(function () {
                c.set(this, n)
            }) : u(this, function (e) {
                var t;
                if (s && void 0 === e) return void 0 !== (t = c.get(s, n)) || void 0 !== (t = ge(s, n)) ? t : void 0;
                this.each(function () {
                    c.set(this, n, e)
                })
            }, null, e, 1 < arguments.length, null, !0);
            if (this.length && (i = c.get(s), 1 === s.nodeType) && !x.get(s, "hasDataAttrs")) {
                for (t = r.length; t--;) r[t] && 0 === (o = r[t].name).indexOf("data-") && (o = b(o.slice(5)), ge(s, o, i[o]));
                x.set(s, "hasDataAttrs", !0)
            }
            return i
        }, removeData: function (e) {
            return this.each(function () {
                c.remove(this, e)
            })
        }
    }), C.extend({
        queue: function (e, t, n) {
            var o;
            if (e) return o = x.get(e, t = (t || "fx") + "queue"), n && (!o || Array.isArray(n) ? o = x.access(e, t, C.makeArray(n)) : o.push(n)), o || []
        }, dequeue: function (e, t) {
            t = t || "fx";
            var n = C.queue(e, t), o = n.length, i = n.shift(), s = C._queueHooks(e, t);
            "inprogress" === i && (i = n.shift(), o--), i && ("fx" === t && n.unshift("inprogress"), delete s.stop, i.call(e, function () {
                C.dequeue(e, t)
            }, s)), !o && s && s.empty.fire()
        }, _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return x.get(e, n) || x.access(e, n, {
                empty: C.Callbacks("once memory").add(function () {
                    x.remove(e, [t + "queue", n])
                })
            })
        }
    }), C.fn.extend({
        queue: function (t, n) {
            var e = 2;
            return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? C.queue(this[0], t) : void 0 === n ? this : this.each(function () {
                var e = C.queue(this, t, n);
                C._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && C.dequeue(this, t)
            })
        }, dequeue: function (e) {
            return this.each(function () {
                C.dequeue(this, e)
            })
        }, clearQueue: function (e) {
            return this.queue(e || "fx", [])
        }, promise: function (e, t) {
            function n() {
                --i || s.resolveWith(r, [r])
            }

            var o, i = 1, s = C.Deferred(), r = this, a = this.length;
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;) (o = x.get(r[a], e + "queueHooks")) && o.empty && (i++, o.empty.add(n));
            return n(), s.promise(t)
        }
    });

    function me(e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && $(e) && "none" === C.css(e, "display")
    }

    var e = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, ve = new RegExp("^(?:([+-])=|)(" + e + ")([a-z%]*)$", "i"),
        p = ["Top", "Right", "Bottom", "Left"], w = S.documentElement, $ = function (e) {
            return C.contains(e.ownerDocument, e)
        }, ye = {composed: !0};
    w.getRootNode && ($ = function (e) {
        return C.contains(e.ownerDocument, e) || e.getRootNode(ye) === e.ownerDocument
    });

    function be(e, t, n, o) {
        var i, s, r = 20, a = o ? function () {
                return o.cur()
            } : function () {
                return C.css(e, t, "")
            }, l = a(), c = n && n[3] || (C.cssNumber[t] ? "" : "px"),
            d = e.nodeType && (C.cssNumber[t] || "px" !== c && +l) && ve.exec(C.css(e, t));
        if (d && d[3] !== c) {
            for (c = c || d[3], d = +(l /= 2) || 1; r--;) C.style(e, t, d + c), (1 - s) * (1 - (s = a() / l || .5)) <= 0 && (r = 0), d /= s;
            C.style(e, t, (d *= 2) + c), n = n || []
        }
        return n && (d = +d || +l || 0, i = n[1] ? d + (n[1] + 1) * n[2] : +n[2], o) && (o.unit = c, o.start = d, o.end = i), i
    }

    var xe = {};

    function A(e, t) {
        for (var n, o, i, s, r, a, l = [], c = 0, d = e.length; c < d; c++) (o = e[c]).style && (n = o.style.display, t ? ("none" === n && (l[c] = x.get(o, "display") || null, l[c] || (o.style.display = "")), "" === o.style.display && me(o) && (l[c] = (a = s = i = void 0, s = o.ownerDocument, r = o.nodeName, (a = xe[r]) || (i = s.body.appendChild(s.createElement(r)), a = C.css(i, "display"), i.parentNode.removeChild(i), xe[r] = a = "none" === a ? "block" : a)))) : "none" !== n && (l[c] = "none", x.set(o, "display", n)));
        for (c = 0; c < d; c++) null != l[c] && (e[c].style.display = l[c]);
        return e
    }

    C.fn.extend({
        show: function () {
            return A(this, !0)
        }, hide: function () {
            return A(this)
        }, toggle: function (e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                me(this) ? C(this).show() : C(this).hide()
            })
        }
    });
    var we = /^(?:checkbox|radio)$/i, Te = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i, Se = /^$|^module$|\/(?:java|ecma)script/i,
        n = S.createDocumentFragment().appendChild(S.createElement("div")),
        E = ((s = S.createElement("input")).setAttribute("type", "radio"), s.setAttribute("checked", "checked"), s.setAttribute("name", "t"), n.appendChild(s), m.checkClone = n.cloneNode(!0).cloneNode(!0).lastChild.checked, n.innerHTML = "<textarea>x</textarea>", m.noCloneChecked = !!n.cloneNode(!0).lastChild.defaultValue, n.innerHTML = "<option></option>", m.option = !!n.lastChild, {
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        });

    function P(e, t) {
        var n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
        return void 0 === t || t && l(e, t) ? C.merge([e], n) : n
    }

    function Ce(e, t) {
        for (var n = 0, o = e.length; n < o; n++) x.set(e[n], "globalEval", !t || x.get(t[n], "globalEval"))
    }

    E.tbody = E.tfoot = E.colgroup = E.caption = E.thead, E.th = E.td, m.option || (E.optgroup = E.option = [1, "<select multiple='multiple'>", "</select>"]);
    var ke = /<|&#?\w+;/;

    function $e(e, t, n, o, i) {
        for (var s, r, a, l, c, d = t.createDocumentFragment(), u = [], p = 0, f = e.length; p < f; p++) if ((s = e[p]) || 0 === s) if ("object" === h(s)) C.merge(u, s.nodeType ? [s] : s); else if (ke.test(s)) {
            for (r = r || d.appendChild(t.createElement("div")), a = (Te.exec(s) || ["", ""])[1].toLowerCase(), a = E[a] || E._default, r.innerHTML = a[1] + C.htmlPrefilter(s) + a[2], c = a[0]; c--;) r = r.lastChild;
            C.merge(u, r.childNodes), (r = d.firstChild).textContent = ""
        } else u.push(t.createTextNode(s));
        for (d.textContent = "", p = 0; s = u[p++];) if (o && -1 < C.inArray(s, o)) i && i.push(s); else if (l = $(s), r = P(d.appendChild(s), "script"), l && Ce(r), n) for (c = 0; s = r[c++];) Se.test(s.type || "") && n.push(s);
        return d
    }

    var Ae = /^([^.]*)(?:\.(.+)|)/;

    function r() {
        return !0
    }

    function f() {
        return !1
    }

    function Ee(e, t) {
        return e === function () {
            try {
                return S.activeElement
            } catch (e) {
            }
        }() == ("focus" === t)
    }

    function Pe(e, t, n, o, i, s) {
        var r, a;
        if ("object" == typeof t) {
            for (a in "string" != typeof n && (o = o || n, n = void 0), t) Pe(e, a, n, o, t[a], s);
            return e
        }
        if (null == o && null == i ? (i = n, o = n = void 0) : null == i && ("string" == typeof n ? (i = o, o = void 0) : (i = o, o = n, n = void 0)), !1 === i) i = f; else if (!i) return e;
        return 1 === s && (r = i, (i = function (e) {
            return C().off(e), r.apply(this, arguments)
        }).guid = r.guid || (r.guid = C.guid++)), e.each(function () {
            C.event.add(this, t, i, o, n)
        })
    }

    function Le(e, i, s) {
        s ? (x.set(e, i, !1), C.event.add(e, i, {
            namespace: !1, handler: function (e) {
                var t, n, o = x.get(this, i);
                if (1 & e.isTrigger && this[i]) {
                    if (o.length) (C.event.special[i] || {}).delegateType && e.stopPropagation(); else if (o = a.call(arguments), x.set(this, i, o), t = s(this, i), this[i](), o !== (n = x.get(this, i)) || t ? x.set(this, i, !1) : n = {}, o !== n) return e.stopImmediatePropagation(), e.preventDefault(), n && n.value
                } else o.length && (x.set(this, i, {value: C.event.trigger(C.extend(o[0], C.Event.prototype), o.slice(1), this)}), e.stopImmediatePropagation())
            }
        })) : void 0 === x.get(e, i) && C.event.add(e, i, r)
    }

    C.event = {
        global: {}, add: function (t, e, n, o, i) {
            var s, r, a, l, c, d, u, p, f, h = x.get(t);
            if (v(t)) for (n.handler && (n = (s = n).handler, i = s.selector), i && C.find.matchesSelector(w, i), n.guid || (n.guid = C.guid++), a = (a = h.events) || (h.events = Object.create(null)), r = (r = h.handle) || (h.handle = function (e) {
                return void 0 !== C && C.event.triggered !== e.type ? C.event.dispatch.apply(t, arguments) : void 0
            }), l = (e = (e || "").match(k) || [""]).length; l--;) u = f = (p = Ae.exec(e[l]) || [])[1], p = (p[2] || "").split(".").sort(), u && (c = C.event.special[u] || {}, u = (i ? c.delegateType : c.bindType) || u, c = C.event.special[u] || {}, f = C.extend({
                type: u,
                origType: f,
                data: o,
                handler: n,
                guid: n.guid,
                selector: i,
                needsContext: i && C.expr.match.needsContext.test(i),
                namespace: p.join(".")
            }, s), (d = a[u]) || ((d = a[u] = []).delegateCount = 0, c.setup && !1 !== c.setup.call(t, o, p, r)) || t.addEventListener && t.addEventListener(u, r), c.add && (c.add.call(t, f), f.handler.guid || (f.handler.guid = n.guid)), i ? d.splice(d.delegateCount++, 0, f) : d.push(f), C.event.global[u] = !0)
        }, remove: function (e, t, n, o, i) {
            var s, r, a, l, c, d, u, p, f, h, g, m = x.hasData(e) && x.get(e);
            if (m && (l = m.events)) {
                for (c = (t = (t || "").match(k) || [""]).length; c--;) if (f = g = (a = Ae.exec(t[c]) || [])[1], h = (a[2] || "").split(".").sort(), f) {
                    for (u = C.event.special[f] || {}, p = l[f = (o ? u.delegateType : u.bindType) || f] || [], a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), r = s = p.length; s--;) d = p[s], !i && g !== d.origType || n && n.guid !== d.guid || a && !a.test(d.namespace) || o && o !== d.selector && ("**" !== o || !d.selector) || (p.splice(s, 1), d.selector && p.delegateCount--, u.remove && u.remove.call(e, d));
                    r && !p.length && (u.teardown && !1 !== u.teardown.call(e, h, m.handle) || C.removeEvent(e, f, m.handle), delete l[f])
                } else for (f in l) C.event.remove(e, f + t[c], n, o, !0);
                C.isEmptyObject(l) && x.remove(e, "handle events")
            }
        }, dispatch: function (e) {
            var t, n, o, i, s, r = new Array(arguments.length), a = C.event.fix(e),
                e = (x.get(this, "events") || Object.create(null))[a.type] || [], l = C.event.special[a.type] || {};
            for (r[0] = a, t = 1; t < arguments.length; t++) r[t] = arguments[t];
            if (a.delegateTarget = this, !l.preDispatch || !1 !== l.preDispatch.call(this, a)) {
                for (s = C.event.handlers.call(this, a, e), t = 0; (o = s[t++]) && !a.isPropagationStopped();) for (a.currentTarget = o.elem, n = 0; (i = o.handlers[n++]) && !a.isImmediatePropagationStopped();) a.rnamespace && !1 !== i.namespace && !a.rnamespace.test(i.namespace) || (a.handleObj = i, a.data = i.data, void 0 !== (i = ((C.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, r)) && !1 === (a.result = i) && (a.preventDefault(), a.stopPropagation()));
                return l.postDispatch && l.postDispatch.call(this, a), a.result
            }
        }, handlers: function (e, t) {
            var n, o, i, s, r, a = [], l = t.delegateCount, c = e.target;
            if (l && c.nodeType && !("click" === e.type && 1 <= e.button)) for (; c !== this; c = c.parentNode || this) if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
                for (s = [], r = {}, n = 0; n < l; n++) void 0 === r[i = (o = t[n]).selector + " "] && (r[i] = o.needsContext ? -1 < C(i, this).index(c) : C.find(i, this, null, [c]).length), r[i] && s.push(o);
                s.length && a.push({elem: c, handlers: s})
            }
            return c = this, l < t.length && a.push({elem: c, handlers: t.slice(l)}), a
        }, addProp: function (t, e) {
            Object.defineProperty(C.Event.prototype, t, {
                enumerable: !0, configurable: !0, get: y(e) ? function () {
                    if (this.originalEvent) return e(this.originalEvent)
                } : function () {
                    if (this.originalEvent) return this.originalEvent[t]
                }, set: function (e) {
                    Object.defineProperty(this, t, {enumerable: !0, configurable: !0, writable: !0, value: e})
                }
            })
        }, fix: function (e) {
            return e[C.expando] ? e : new C.Event(e)
        }, special: {
            load: {noBubble: !0}, click: {
                setup: function (e) {
                    e = this || e;
                    return we.test(e.type) && e.click && l(e, "input") && Le(e, "click", r), !1
                }, trigger: function (e) {
                    e = this || e;
                    return we.test(e.type) && e.click && l(e, "input") && Le(e, "click"), !0
                }, _default: function (e) {
                    e = e.target;
                    return we.test(e.type) && e.click && l(e, "input") && x.get(e, "click") || l(e, "a")
                }
            }, beforeunload: {
                postDispatch: function (e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, C.removeEvent = function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, C.Event = function (e, t) {
        if (!(this instanceof C.Event)) return new C.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? r : f, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && C.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[C.expando] = !0
    }, C.Event.prototype = {
        constructor: C.Event,
        isDefaultPrevented: f,
        isPropagationStopped: f,
        isImmediatePropagationStopped: f,
        isSimulated: !1,
        preventDefault: function () {
            var e = this.originalEvent;
            this.isDefaultPrevented = r, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function () {
            var e = this.originalEvent;
            this.isPropagationStopped = r, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function () {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = r, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, C.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: !0
    }, C.event.addProp), C.each({focus: "focusin", blur: "focusout"}, function (t, e) {
        C.event.special[t] = {
            setup: function () {
                return Le(this, t, Ee), !1
            }, trigger: function () {
                return Le(this, t), !0
            }, _default: function (e) {
                return x.get(e.target, t)
            }, delegateType: e
        }
    }), C.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (e, i) {
        C.event.special[e] = {
            delegateType: i, bindType: i, handle: function (e) {
                var t, n = e.relatedTarget, o = e.handleObj;
                return n && (n === this || C.contains(this, n)) || (e.type = o.origType, t = o.handler.apply(this, arguments), e.type = i), t
            }
        }
    }), C.fn.extend({
        on: function (e, t, n, o) {
            return Pe(this, e, t, n, o)
        }, one: function (e, t, n, o) {
            return Pe(this, e, t, n, o, 1)
        }, off: function (e, t, n) {
            var o, i;
            if (e && e.preventDefault && e.handleObj) o = e.handleObj, C(e.delegateTarget).off(o.namespace ? o.origType + "." + o.namespace : o.origType, o.selector, o.handler); else {
                if ("object" != typeof e) return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = f), this.each(function () {
                    C.event.remove(this, e, n, t)
                });
                for (i in e) this.off(i, t, e[i])
            }
            return this
        }
    });
    var De = /<script|<style|<link/i, je = /checked\s*(?:[^=]|=\s*.checked.)/i, He = /^\s*<!\[CDATA\[|\]\]>\s*$/g;

    function Me(e, t) {
        return l(e, "table") && l(11 !== t.nodeType ? t : t.firstChild, "tr") && C(e).children("tbody")[0] || e
    }

    function qe(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function Oe(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
    }

    function Ie(e, t) {
        var n, o, i, s;
        if (1 === t.nodeType) {
            if (x.hasData(e) && (s = x.get(e).events)) for (i in x.remove(t, "handle events"), s) for (n = 0, o = s[i].length; n < o; n++) C.event.add(t, i, s[i][n]);
            c.hasData(e) && (e = c.access(e), e = C.extend({}, e), c.set(t, e))
        }
    }

    function L(n, o, i, s) {
        o = N(o);
        var e, t, r, a, l, c, d = 0, u = n.length, p = u - 1, f = o[0], h = y(f);
        if (h || 1 < u && "string" == typeof f && !m.checkClone && je.test(f)) return n.each(function (e) {
            var t = n.eq(e);
            h && (o[0] = f.call(this, e, t.html())), L(t, o, i, s)
        });
        if (u && (t = (e = $e(o, n[0].ownerDocument, !1, n, s)).firstChild, 1 === e.childNodes.length && (e = t), t || s)) {
            for (a = (r = C.map(P(e, "script"), qe)).length; d < u; d++) l = e, d !== p && (l = C.clone(l, !0, !0), a) && C.merge(r, P(l, "script")), i.call(n[d], l, d);
            if (a) for (c = r[r.length - 1].ownerDocument, C.map(r, Oe), d = 0; d < a; d++) l = r[d], Se.test(l.type || "") && !x.access(l, "globalEval") && C.contains(c, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? C._evalUrl && !l.noModule && C._evalUrl(l.src, {nonce: l.nonce || l.getAttribute("nonce")}, c) : U(l.textContent.replace(He, ""), l, c))
        }
        return n
    }

    function Ne(e, t, n) {
        for (var o, i = t ? C.filter(t, e) : e, s = 0; null != (o = i[s]); s++) n || 1 !== o.nodeType || C.cleanData(P(o)), o.parentNode && (n && $(o) && Ce(P(o, "script")), o.parentNode.removeChild(o));
        return e
    }

    C.extend({
        htmlPrefilter: function (e) {
            return e
        }, clone: function (e, t, n) {
            var o, i, s, r, a, l, c, d = e.cloneNode(!0), u = $(e);
            if (!(m.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || C.isXMLDoc(e))) for (r = P(d), o = 0, i = (s = P(e)).length; o < i; o++) a = s[o], "input" === (c = (l = r[o]).nodeName.toLowerCase()) && we.test(a.type) ? l.checked = a.checked : "input" !== c && "textarea" !== c || (l.defaultValue = a.defaultValue);
            if (t) if (n) for (s = s || P(e), r = r || P(d), o = 0, i = s.length; o < i; o++) Ie(s[o], r[o]); else Ie(e, d);
            return 0 < (r = P(d, "script")).length && Ce(r, !u && P(e, "script")), d
        }, cleanData: function (e) {
            for (var t, n, o, i = C.event.special, s = 0; void 0 !== (n = e[s]); s++) if (v(n)) {
                if (t = n[x.expando]) {
                    if (t.events) for (o in t.events) i[o] ? C.event.remove(n, o) : C.removeEvent(n, o, t.handle);
                    n[x.expando] = void 0
                }
                n[c.expando] && (n[c.expando] = void 0)
            }
        }
    }), C.fn.extend({
        detach: function (e) {
            return Ne(this, e, !0)
        }, remove: function (e) {
            return Ne(this, e)
        }, text: function (e) {
            return u(this, function (e) {
                return void 0 === e ? C.text(this) : this.empty().each(function () {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        }, append: function () {
            return L(this, arguments, function (e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Me(this, e).appendChild(e)
            })
        }, prepend: function () {
            return L(this, arguments, function (e) {
                var t;
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (t = Me(this, e)).insertBefore(e, t.firstChild)
            })
        }, before: function () {
            return L(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        }, after: function () {
            return L(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        }, empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (C.cleanData(P(e, !1)), e.textContent = "");
            return this
        }, clone: function (e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function () {
                return C.clone(this, e, t)
            })
        }, html: function (e) {
            return u(this, function (e) {
                var t = this[0] || {}, n = 0, o = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !De.test(e) && !E[(Te.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = C.htmlPrefilter(e);
                    try {
                        for (; n < o; n++) 1 === (t = this[n] || {}).nodeType && (C.cleanData(P(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {
                    }
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        }, replaceWith: function () {
            var n = [];
            return L(this, arguments, function (e) {
                var t = this.parentNode;
                C.inArray(this, n) < 0 && (C.cleanData(P(this)), t) && t.replaceChild(e, this)
            }, n)
        }
    }), C.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (e, r) {
        C.fn[e] = function (e) {
            for (var t, n = [], o = C(e), i = o.length - 1, s = 0; s <= i; s++) t = s === i ? this : this.clone(!0), C(o[s])[r](t), z.apply(n, t.get());
            return this.pushStack(n)
        }
    });

    function ze(e) {
        var t = e.ownerDocument.defaultView;
        return (t = t && t.opener ? t : T).getComputedStyle(e)
    }

    function Fe(e, t, n) {
        var o, i = {};
        for (o in t) i[o] = e.style[o], e.style[o] = t[o];
        for (o in n = n.call(e), t) e.style[o] = i[o];
        return n
    }

    var Re, _e, We, Be, Xe, Ye, Ue, i, Ve = new RegExp("^(" + e + ")(?!px)[a-z%]+$", "i"), Qe = /^--/,
        Ze = new RegExp(p.join("|"), "i"), s = "[\\x20\\t\\r\\n\\f]",
        Ge = new RegExp("^" + s + "+|((?:^|[^\\\\])(?:\\\\.)*)" + s + "+$", "g");

    function Ke(e, t, n) {
        var o, i = Qe.test(t), s = e.style;
        return (n = n || ze(e)) && (o = n.getPropertyValue(t) || n[t], "" !== (o = i ? o && (o.replace(Ge, "$1") || void 0) : o) || $(e) || (o = C.style(e, t)), !m.pixelBoxStyles()) && Ve.test(o) && Ze.test(t) && (i = s.width, e = s.minWidth, t = s.maxWidth, s.minWidth = s.maxWidth = s.width = o, o = n.width, s.width = i, s.minWidth = e, s.maxWidth = t), void 0 !== o ? o + "" : o
    }

    function Je(e, t) {
        return {
            get: function () {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }

    function et() {
        var e;
        i && (Ue.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", i.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", w.appendChild(Ue).appendChild(i), e = T.getComputedStyle(i), Re = "1%" !== e.top, Ye = 12 === tt(e.marginLeft), i.style.right = "60%", Be = 36 === tt(e.right), _e = 36 === tt(e.width), i.style.position = "absolute", We = 12 === tt(i.offsetWidth / 3), w.removeChild(Ue), i = null)
    }

    function tt(e) {
        return Math.round(parseFloat(e))
    }

    Ue = S.createElement("div"), (i = S.createElement("div")).style && (i.style.backgroundClip = "content-box", i.cloneNode(!0).style.backgroundClip = "", m.clearCloneStyle = "content-box" === i.style.backgroundClip, C.extend(m, {
        boxSizingReliable: function () {
            return et(), _e
        }, pixelBoxStyles: function () {
            return et(), Be
        }, pixelPosition: function () {
            return et(), Re
        }, reliableMarginLeft: function () {
            return et(), Ye
        }, scrollboxSize: function () {
            return et(), We
        }, reliableTrDimensions: function () {
            var e, t, n;
            return null == Xe && (e = S.createElement("table"), t = S.createElement("tr"), n = S.createElement("div"), e.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", t.style.cssText = "border:1px solid", t.style.height = "1px", n.style.height = "9px", n.style.display = "block", w.appendChild(e).appendChild(t).appendChild(n), n = T.getComputedStyle(t), Xe = parseInt(n.height, 10) + parseInt(n.borderTopWidth, 10) + parseInt(n.borderBottomWidth, 10) === t.offsetHeight, w.removeChild(e)), Xe
        }
    }));
    var nt = ["Webkit", "Moz", "ms"], ot = S.createElement("div").style, it = {};

    function st(e) {
        return C.cssProps[e] || it[e] || (e in ot ? e : it[e] = function (e) {
            for (var t = e[0].toUpperCase() + e.slice(1), n = nt.length; n--;) if ((e = nt[n] + t) in ot) return e
        }(e) || e)
    }

    var rt = /^(none|table(?!-c[ea]).+)/, at = {position: "absolute", visibility: "hidden", display: "block"},
        lt = {letterSpacing: "0", fontWeight: "400"};

    function ct(e, t, n) {
        var o = ve.exec(t);
        return o ? Math.max(0, o[2] - (n || 0)) + (o[3] || "px") : t
    }

    function dt(e, t, n, o, i, s) {
        var r = "width" === t ? 1 : 0, a = 0, l = 0;
        if (n === (o ? "border" : "content")) return 0;
        for (; r < 4; r += 2) "margin" === n && (l += C.css(e, n + p[r], !0, i)), o ? ("content" === n && (l -= C.css(e, "padding" + p[r], !0, i)), "margin" !== n && (l -= C.css(e, "border" + p[r] + "Width", !0, i))) : (l += C.css(e, "padding" + p[r], !0, i), "padding" !== n ? l += C.css(e, "border" + p[r] + "Width", !0, i) : a += C.css(e, "border" + p[r] + "Width", !0, i));
        return !o && 0 <= s && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - s - l - a - .5)) || 0), l
    }

    function ut(e, t, n) {
        var o = ze(e), i = (!m.boxSizingReliable() || n) && "border-box" === C.css(e, "boxSizing", !1, o), s = i,
            r = Ke(e, t, o), a = "offset" + t[0].toUpperCase() + t.slice(1);
        if (Ve.test(r)) {
            if (!n) return r;
            r = "auto"
        }
        return (!m.boxSizingReliable() && i || !m.reliableTrDimensions() && l(e, "tr") || "auto" === r || !parseFloat(r) && "inline" === C.css(e, "display", !1, o)) && e.getClientRects().length && (i = "border-box" === C.css(e, "boxSizing", !1, o), s = a in e) && (r = e[a]), (r = parseFloat(r) || 0) + dt(e, t, n || (i ? "border" : "content"), s, o, r) + "px"
    }

    function D(e, t, n, o, i) {
        return new D.prototype.init(e, t, n, o, i)
    }

    C.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) return "" === (t = Ke(e, "opacity")) ? "1" : t
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function (e, t, n, o) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, s, r, a = b(t), l = Qe.test(t), c = e.style;
                if (l || (t = st(a)), r = C.cssHooks[t] || C.cssHooks[a], void 0 === n) return r && "get" in r && void 0 !== (i = r.get(e, !1, o)) ? i : c[t];
                "string" == (s = typeof n) && (i = ve.exec(n)) && i[1] && (n = be(e, t, i), s = "number"), null != n && n == n && ("number" !== s || l || (n += i && i[3] || (C.cssNumber[a] ? "" : "px")), m.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"), r && "set" in r && void 0 === (n = r.set(e, n, o)) || (l ? c.setProperty(t, n) : c[t] = n))
            }
        },
        css: function (e, t, n, o) {
            var i, s = b(t);
            return Qe.test(t) || (t = st(s)), "normal" === (i = void 0 === (i = (s = C.cssHooks[t] || C.cssHooks[s]) && "get" in s ? s.get(e, !0, n) : i) ? Ke(e, t, o) : i) && t in lt && (i = lt[t]), ("" === n || n) && (s = parseFloat(i), !0 === n || isFinite(s)) ? s || 0 : i
        }
    }), C.each(["height", "width"], function (e, r) {
        C.cssHooks[r] = {
            get: function (e, t, n) {
                if (t) return !rt.test(C.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? ut(e, r, n) : Fe(e, at, function () {
                    return ut(e, r, n)
                })
            }, set: function (e, t, n) {
                var o = ze(e), i = !m.scrollboxSize() && "absolute" === o.position,
                    s = (i || n) && "border-box" === C.css(e, "boxSizing", !1, o), n = n ? dt(e, r, n, s, o) : 0;
                return s && i && (n -= Math.ceil(e["offset" + r[0].toUpperCase() + r.slice(1)] - parseFloat(o[r]) - dt(e, r, "border", !1, o) - .5)), n && (s = ve.exec(t)) && "px" !== (s[3] || "px") && (e.style[r] = t, t = C.css(e, r)), ct(0, t, n)
            }
        }
    }), C.cssHooks.marginLeft = Je(m.reliableMarginLeft, function (e, t) {
        if (t) return (parseFloat(Ke(e, "marginLeft")) || e.getBoundingClientRect().left - Fe(e, {marginLeft: 0}, function () {
            return e.getBoundingClientRect().left
        })) + "px"
    }), C.each({margin: "", padding: "", border: "Width"}, function (i, s) {
        C.cssHooks[i + s] = {
            expand: function (e) {
                for (var t = 0, n = {}, o = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[i + p[t] + s] = o[t] || o[t - 2] || o[0];
                return n
            }
        }, "margin" !== i && (C.cssHooks[i + s].set = ct)
    }), C.fn.extend({
        css: function (e, t) {
            return u(this, function (e, t, n) {
                var o, i, s = {}, r = 0;
                if (Array.isArray(t)) {
                    for (o = ze(e), i = t.length; r < i; r++) s[t[r]] = C.css(e, t[r], !1, o);
                    return s
                }
                return void 0 !== n ? C.style(e, t, n) : C.css(e, t)
            }, e, t, 1 < arguments.length)
        }
    }), ((C.Tween = D).prototype = {
        constructor: D, init: function (e, t, n, o, i, s) {
            this.elem = e, this.prop = n, this.easing = i || C.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = o, this.unit = s || (C.cssNumber[n] ? "" : "px")
        }, cur: function () {
            var e = D.propHooks[this.prop];
            return (e && e.get ? e : D.propHooks._default).get(this)
        }, run: function (e) {
            var t, n = D.propHooks[this.prop];
            return this.options.duration ? this.pos = t = C.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), (n && n.set ? n : D.propHooks._default).set(this), this
        }
    }).init.prototype = D.prototype, (D.propHooks = {
        _default: {
            get: function (e) {
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (e = C.css(e.elem, e.prop, "")) && "auto" !== e ? e : 0
            }, set: function (e) {
                C.fx.step[e.prop] ? C.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !C.cssHooks[e.prop] && null == e.elem.style[st(e.prop)] ? e.elem[e.prop] = e.now : C.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }).scrollTop = D.propHooks.scrollLeft = {
        set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, C.easing = {
        linear: function (e) {
            return e
        }, swing: function (e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }, _default: "swing"
    }, C.fx = D.prototype.init, C.fx.step = {};
    var j, pt, ft = /^(?:toggle|show|hide)$/, ht = /queueHooks$/;

    function gt() {
        pt && (!1 === S.hidden && T.requestAnimationFrame ? T.requestAnimationFrame(gt) : T.setTimeout(gt, C.fx.interval), C.fx.tick())
    }

    function mt() {
        return T.setTimeout(function () {
            j = void 0
        }), j = Date.now()
    }

    function vt(e, t) {
        var n, o = 0, i = {height: e};
        for (t = t ? 1 : 0; o < 4; o += 2 - t) i["margin" + (n = p[o])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }

    function yt(e, t, n) {
        for (var o, i = (H.tweeners[t] || []).concat(H.tweeners["*"]), s = 0, r = i.length; s < r; s++) if (o = i[s].call(n, t, e)) return o
    }

    function H(i, e, t) {
        var n, s, o, r, a, l, c, d = 0, u = H.prefilters.length, p = C.Deferred().always(function () {
            delete f.elem
        }), f = function () {
            if (s) return !1;
            for (var e = j || mt(), e = Math.max(0, h.startTime + h.duration - e), t = 1 - (e / h.duration || 0), n = 0, o = h.tweens.length; n < o; n++) h.tweens[n].run(t);
            return p.notifyWith(i, [h, t, e]), t < 1 && o ? e : (o || p.notifyWith(i, [h, 1, 0]), p.resolveWith(i, [h]), !1)
        }, h = p.promise({
            elem: i,
            props: C.extend({}, e),
            opts: C.extend(!0, {specialEasing: {}, easing: C.easing._default}, t),
            originalProperties: e,
            originalOptions: t,
            startTime: j || mt(),
            duration: t.duration,
            tweens: [],
            createTween: function (e, t) {
                t = C.Tween(i, h.opts, e, t, h.opts.specialEasing[e] || h.opts.easing);
                return h.tweens.push(t), t
            },
            stop: function (e) {
                var t = 0, n = e ? h.tweens.length : 0;
                if (!s) {
                    for (s = !0; t < n; t++) h.tweens[t].run(1);
                    e ? (p.notifyWith(i, [h, 1, 0]), p.resolveWith(i, [h, e])) : p.rejectWith(i, [h, e])
                }
                return this
            }
        }), g = h.props, m = g, v = h.opts.specialEasing;
        for (o in m) if (a = v[r = b(o)], l = m[o], Array.isArray(l) && (a = l[1], l = m[o] = l[0]), o !== r && (m[r] = l, delete m[o]), (c = C.cssHooks[r]) && "expand" in c) for (o in l = c.expand(l), delete m[r], l) o in m || (m[o] = l[o], v[o] = a); else v[r] = a;
        for (; d < u; d++) if (n = H.prefilters[d].call(h, i, g, h.opts)) return y(n.stop) && (C._queueHooks(h.elem, h.opts.queue).stop = n.stop.bind(n)), n;
        return C.map(g, yt, h), y(h.opts.start) && h.opts.start.call(i, h), h.progress(h.opts.progress).done(h.opts.done, h.opts.complete).fail(h.opts.fail).always(h.opts.always), C.fx.timer(C.extend(f, {
            elem: i,
            anim: h,
            queue: h.opts.queue
        })), h
    }

    C.Animation = C.extend(H, {
        tweeners: {
            "*": [function (e, t) {
                var n = this.createTween(e, t);
                return be(n.elem, e, ve.exec(t), n), n
            }]
        }, tweener: function (e, t) {
            for (var n, o = 0, i = (e = y(e) ? (t = e, ["*"]) : e.match(k)).length; o < i; o++) n = e[o], H.tweeners[n] = H.tweeners[n] || [], H.tweeners[n].unshift(t)
        }, prefilters: [function (e, t, n) {
            var o, i, s, r, a, l, c, d = "width" in t || "height" in t, u = this, p = {}, f = e.style,
                h = e.nodeType && me(e), g = x.get(e, "fxshow");
            for (o in n.queue || (null == (r = C._queueHooks(e, "fx")).unqueued && (r.unqueued = 0, a = r.empty.fire, r.empty.fire = function () {
                r.unqueued || a()
            }), r.unqueued++, u.always(function () {
                u.always(function () {
                    r.unqueued--, C.queue(e, "fx").length || r.empty.fire()
                })
            })), t) if (i = t[o], ft.test(i)) {
                if (delete t[o], s = s || "toggle" === i, i === (h ? "hide" : "show")) {
                    if ("show" !== i || !g || void 0 === g[o]) continue;
                    h = !0
                }
                p[o] = g && g[o] || C.style(e, o)
            }
            if ((l = !C.isEmptyObject(t)) || !C.isEmptyObject(p)) for (o in d && 1 === e.nodeType && (n.overflow = [f.overflow, f.overflowX, f.overflowY], null == (c = g && g.display) && (c = x.get(e, "display")), "none" === (d = C.css(e, "display")) && (c ? d = c : (A([e], !0), c = e.style.display || c, d = C.css(e, "display"), A([e]))), "inline" === d || "inline-block" === d && null != c) && "none" === C.css(e, "float") && (l || (u.done(function () {
                f.display = c
            }), null == c && (d = f.display, c = "none" === d ? "" : d)), f.display = "inline-block"), n.overflow && (f.overflow = "hidden", u.always(function () {
                f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2]
            })), l = !1, p) l || (g ? "hidden" in g && (h = g.hidden) : g = x.access(e, "fxshow", {display: c}), s && (g.hidden = !h), h && A([e], !0), u.done(function () {
                for (o in h || A([e]), x.remove(e, "fxshow"), p) C.style(e, o, p[o])
            })), l = yt(h ? g[o] : 0, o, u), o in g || (g[o] = l.start, h && (l.end = l.start, l.start = 0))
        }], prefilter: function (e, t) {
            t ? H.prefilters.unshift(e) : H.prefilters.push(e)
        }
    }), C.speed = function (e, t, n) {
        var o = e && "object" == typeof e ? C.extend({}, e) : {
            complete: n || !n && t || y(e) && e,
            duration: e,
            easing: n && t || t && !y(t) && t
        };
        return C.fx.off ? o.duration = 0 : "number" != typeof o.duration && (o.duration in C.fx.speeds ? o.duration = C.fx.speeds[o.duration] : o.duration = C.fx.speeds._default), null != o.queue && !0 !== o.queue || (o.queue = "fx"), o.old = o.complete, o.complete = function () {
            y(o.old) && o.old.call(this), o.queue && C.dequeue(this, o.queue)
        }, o
    }, C.fn.extend({
        fadeTo: function (e, t, n, o) {
            return this.filter(me).css("opacity", 0).show().end().animate({opacity: t}, e, n, o)
        }, animate: function (t, e, n, o) {
            function i() {
                var e = H(this, C.extend({}, t), r);
                (s || x.get(this, "finish")) && e.stop(!0)
            }

            var s = C.isEmptyObject(t), r = C.speed(e, n, o);
            return i.finish = i, s || !1 === r.queue ? this.each(i) : this.queue(r.queue, i)
        }, stop: function (i, e, s) {
            function r(e) {
                var t = e.stop;
                delete e.stop, t(s)
            }

            return "string" != typeof i && (s = e, e = i, i = void 0), e && this.queue(i || "fx", []), this.each(function () {
                var e = !0, t = null != i && i + "queueHooks", n = C.timers, o = x.get(this);
                if (t) o[t] && o[t].stop && r(o[t]); else for (t in o) o[t] && o[t].stop && ht.test(t) && r(o[t]);
                for (t = n.length; t--;) n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(s), e = !1, n.splice(t, 1));
                !e && s || C.dequeue(this, i)
            })
        }, finish: function (r) {
            return !1 !== r && (r = r || "fx"), this.each(function () {
                var e, t = x.get(this), n = t[r + "queue"], o = t[r + "queueHooks"], i = C.timers, s = n ? n.length : 0;
                for (t.finish = !0, C.queue(this, r, []), o && o.stop && o.stop.call(this, !0), e = i.length; e--;) i[e].elem === this && i[e].queue === r && (i[e].anim.stop(!0), i.splice(e, 1));
                for (e = 0; e < s; e++) n[e] && n[e].finish && n[e].finish.call(this);
                delete t.finish
            })
        }
    }), C.each(["toggle", "show", "hide"], function (e, o) {
        var i = C.fn[o];
        C.fn[o] = function (e, t, n) {
            return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(vt(o, !0), e, t, n)
        }
    }), C.each({
        slideDown: vt("show"),
        slideUp: vt("hide"),
        slideToggle: vt("toggle"),
        fadeIn: {opacity: "show"},
        fadeOut: {opacity: "hide"},
        fadeToggle: {opacity: "toggle"}
    }, function (e, o) {
        C.fn[e] = function (e, t, n) {
            return this.animate(o, e, t, n)
        }
    }), C.timers = [], C.fx.tick = function () {
        var e, t = 0, n = C.timers;
        for (j = Date.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || C.fx.stop(), j = void 0
    }, C.fx.timer = function (e) {
        C.timers.push(e), C.fx.start()
    }, C.fx.interval = 13, C.fx.start = function () {
        pt || (pt = !0, gt())
    }, C.fx.stop = function () {
        pt = null
    }, C.fx.speeds = {slow: 600, fast: 200, _default: 400}, C.fn.delay = function (o, e) {
        return o = C.fx && C.fx.speeds[o] || o, this.queue(e = e || "fx", function (e, t) {
            var n = T.setTimeout(e, o);
            t.stop = function () {
                T.clearTimeout(n)
            }
        })
    }, n = S.createElement("input"), e = S.createElement("select").appendChild(S.createElement("option")), n.type = "checkbox", m.checkOn = "" !== n.value, m.optSelected = e.selected, (n = S.createElement("input")).value = "t", n.type = "radio", m.radioValue = "t" === n.value;
    var bt, xt = C.expr.attrHandle, wt = (C.fn.extend({
        attr: function (e, t) {
            return u(this, C.attr, e, t, 1 < arguments.length)
        }, removeAttr: function (e) {
            return this.each(function () {
                C.removeAttr(this, e)
            })
        }
    }), C.extend({
        attr: function (e, t, n) {
            var o, i, s = e.nodeType;
            if (3 !== s && 8 !== s && 2 !== s) return void 0 === e.getAttribute ? C.prop(e, t, n) : (1 === s && C.isXMLDoc(e) || (i = C.attrHooks[t.toLowerCase()] || (C.expr.match.bool.test(t) ? bt : void 0)), void 0 !== n ? null === n ? void C.removeAttr(e, t) : i && "set" in i && void 0 !== (o = i.set(e, n, t)) ? o : (e.setAttribute(t, n + ""), n) : !(i && "get" in i && null !== (o = i.get(e, t))) && null == (o = C.find.attr(e, t)) ? void 0 : o)
        }, attrHooks: {
            type: {
                set: function (e, t) {
                    var n;
                    if (!m.radioValue && "radio" === t && l(e, "input")) return n = e.value, e.setAttribute("type", t), n && (e.value = n), t
                }
            }
        }, removeAttr: function (e, t) {
            var n, o = 0, i = t && t.match(k);
            if (i && 1 === e.nodeType) for (; n = i[o++];) e.removeAttribute(n)
        }
    }), bt = {
        set: function (e, t, n) {
            return !1 === t ? C.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, C.each(C.expr.match.bool.source.match(/\w+/g), function (e, t) {
        var r = xt[t] || C.find.attr;
        xt[t] = function (e, t, n) {
            var o, i, s = t.toLowerCase();
            return n || (i = xt[s], xt[s] = o, o = null != r(e, t, n) ? s : null, xt[s] = i), o
        }
    }), /^(?:input|select|textarea|button)$/i), Tt = /^(?:a|area)$/i;

    function M(e) {
        return (e.match(k) || []).join(" ")
    }

    function q(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function St(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(k) || []
    }

    C.fn.extend({
        prop: function (e, t) {
            return u(this, C.prop, e, t, 1 < arguments.length)
        }, removeProp: function (e) {
            return this.each(function () {
                delete this[C.propFix[e] || e]
            })
        }
    }), C.extend({
        prop: function (e, t, n) {
            var o, i, s = e.nodeType;
            if (3 !== s && 8 !== s && 2 !== s) return 1 === s && C.isXMLDoc(e) || (t = C.propFix[t] || t, i = C.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (o = i.set(e, n, t)) ? o : e[t] = n : i && "get" in i && null !== (o = i.get(e, t)) ? o : e[t]
        }, propHooks: {
            tabIndex: {
                get: function (e) {
                    var t = C.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : wt.test(e.nodeName) || Tt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        }, propFix: {for: "htmlFor", class: "className"}
    }), m.optSelected || (C.propHooks.selected = {
        get: function (e) {
            e = e.parentNode;
            return e && e.parentNode && e.parentNode.selectedIndex, null
        }, set: function (e) {
            e = e.parentNode;
            e && (e.selectedIndex, e.parentNode) && e.parentNode.selectedIndex
        }
    }), C.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        C.propFix[this.toLowerCase()] = this
    }), C.fn.extend({
        addClass: function (t) {
            var e, n, o, i, s, r;
            return y(t) ? this.each(function (e) {
                C(this).addClass(t.call(this, e, q(this)))
            }) : (e = St(t)).length ? this.each(function () {
                if (o = q(this), n = 1 === this.nodeType && " " + M(o) + " ") {
                    for (s = 0; s < e.length; s++) i = e[s], n.indexOf(" " + i + " ") < 0 && (n += i + " ");
                    r = M(n), o !== r && this.setAttribute("class", r)
                }
            }) : this
        }, removeClass: function (t) {
            var e, n, o, i, s, r;
            return y(t) ? this.each(function (e) {
                C(this).removeClass(t.call(this, e, q(this)))
            }) : arguments.length ? (e = St(t)).length ? this.each(function () {
                if (o = q(this), n = 1 === this.nodeType && " " + M(o) + " ") {
                    for (s = 0; s < e.length; s++) for (i = e[s]; -1 < n.indexOf(" " + i + " ");) n = n.replace(" " + i + " ", " ");
                    r = M(n), o !== r && this.setAttribute("class", r)
                }
            }) : this : this.attr("class", "")
        }, toggleClass: function (t, n) {
            var e, o, i, s, r = typeof t, a = "string" == r || Array.isArray(t);
            return y(t) ? this.each(function (e) {
                C(this).toggleClass(t.call(this, e, q(this), n), n)
            }) : "boolean" == typeof n && a ? n ? this.addClass(t) : this.removeClass(t) : (e = St(t), this.each(function () {
                if (a) for (s = C(this), i = 0; i < e.length; i++) o = e[i], s.hasClass(o) ? s.removeClass(o) : s.addClass(o); else void 0 !== t && "boolean" != r || ((o = q(this)) && x.set(this, "__className__", o), this.setAttribute && this.setAttribute("class", !o && !1 !== t && x.get(this, "__className__") || ""))
            }))
        }, hasClass: function (e) {
            for (var t, n = 0, o = " " + e + " "; t = this[n++];) if (1 === t.nodeType && -1 < (" " + M(q(t)) + " ").indexOf(o)) return !0;
            return !1
        }
    });

    function Ct(e) {
        e.stopPropagation()
    }

    var kt = /\r/g, $t = (C.fn.extend({
        val: function (t) {
            var n, e, o, i = this[0];
            return arguments.length ? (o = y(t), this.each(function (e) {
                1 === this.nodeType && (null == (e = o ? t.call(this, e, C(this).val()) : t) ? e = "" : "number" == typeof e ? e += "" : Array.isArray(e) && (e = C.map(e, function (e) {
                    return null == e ? "" : e + ""
                })), (n = C.valHooks[this.type] || C.valHooks[this.nodeName.toLowerCase()]) && "set" in n && void 0 !== n.set(this, e, "value") || (this.value = e))
            })) : i ? (n = C.valHooks[i.type] || C.valHooks[i.nodeName.toLowerCase()]) && "get" in n && void 0 !== (e = n.get(i, "value")) ? e : "string" == typeof (e = i.value) ? e.replace(kt, "") : null == e ? "" : e : void 0
        }
    }), C.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = C.find.attr(e, "value");
                    return null != t ? t : M(C.text(e))
                }
            }, select: {
                get: function (e) {
                    for (var t, n = e.options, o = e.selectedIndex, i = "select-one" === e.type, s = i ? null : [], r = i ? o + 1 : n.length, a = o < 0 ? r : i ? o : 0; a < r; a++) if (((t = n[a]).selected || a === o) && !t.disabled && (!t.parentNode.disabled || !l(t.parentNode, "optgroup"))) {
                        if (t = C(t).val(), i) return t;
                        s.push(t)
                    }
                    return s
                }, set: function (e, t) {
                    for (var n, o, i = e.options, s = C.makeArray(t), r = i.length; r--;) ((o = i[r]).selected = -1 < C.inArray(C.valHooks.option.get(o), s)) && (n = !0);
                    return n || (e.selectedIndex = -1), s
                }
            }
        }
    }), C.each(["radio", "checkbox"], function () {
        C.valHooks[this] = {
            set: function (e, t) {
                if (Array.isArray(t)) return e.checked = -1 < C.inArray(C(e).val(), t)
            }
        }, m.checkOn || (C.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    }), m.focusin = "onfocusin" in T, /^(?:focusinfocus|focusoutblur)$/), At = (C.extend(C.event, {
        trigger: function (e, t, n, o) {
            var i, s, r, a, l, c, d, u = [n || S], p = W.call(e, "type") ? e.type : e,
                f = W.call(e, "namespace") ? e.namespace.split(".") : [], h = d = s = n = n || S;
            if (3 !== n.nodeType && 8 !== n.nodeType && !$t.test(p + C.event.triggered) && (-1 < p.indexOf(".") && (p = (f = p.split(".")).shift(), f.sort()), a = p.indexOf(":") < 0 && "on" + p, (e = e[C.expando] ? e : new C.Event(p, "object" == typeof e && e)).isTrigger = o ? 2 : 3, e.namespace = f.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : C.makeArray(t, [e]), c = C.event.special[p] || {}, o || !c.trigger || !1 !== c.trigger.apply(n, t))) {
                if (!o && !c.noBubble && !g(n)) {
                    for (r = c.delegateType || p, $t.test(r + p) || (h = h.parentNode); h; h = h.parentNode) u.push(h), s = h;
                    s === (n.ownerDocument || S) && u.push(s.defaultView || s.parentWindow || T)
                }
                for (i = 0; (h = u[i++]) && !e.isPropagationStopped();) d = h, e.type = 1 < i ? r : c.bindType || p, (l = (x.get(h, "events") || Object.create(null))[e.type] && x.get(h, "handle")) && l.apply(h, t), (l = a && h[a]) && l.apply && v(h) && (e.result = l.apply(h, t), !1 === e.result) && e.preventDefault();
                return e.type = p, o || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(u.pop(), t) || !v(n) || a && y(n[p]) && !g(n) && ((s = n[a]) && (n[a] = null), C.event.triggered = p, e.isPropagationStopped() && d.addEventListener(p, Ct), n[p](), e.isPropagationStopped() && d.removeEventListener(p, Ct), C.event.triggered = void 0, s) && (n[a] = s), e.result
            }
        }, simulate: function (e, t, n) {
            n = C.extend(new C.Event, n, {type: e, isSimulated: !0});
            C.event.trigger(n, null, t)
        }
    }), C.fn.extend({
        trigger: function (e, t) {
            return this.each(function () {
                C.event.trigger(e, t, this)
            })
        }, triggerHandler: function (e, t) {
            var n = this[0];
            if (n) return C.event.trigger(e, t, n, !0)
        }
    }), m.focusin || C.each({focus: "focusin", blur: "focusout"}, function (n, o) {
        function i(e) {
            C.event.simulate(o, e.target, C.event.fix(e))
        }

        C.event.special[o] = {
            setup: function () {
                var e = this.ownerDocument || this.document || this, t = x.access(e, o);
                t || e.addEventListener(n, i, !0), x.access(e, o, (t || 0) + 1)
            }, teardown: function () {
                var e = this.ownerDocument || this.document || this, t = x.access(e, o) - 1;
                t ? x.access(e, o, t) : (e.removeEventListener(n, i, !0), x.remove(e, o))
            }
        }
    }), T.location), Et = {guid: Date.now()}, Pt = /\?/, Lt = (C.parseXML = function (e) {
        var t, n;
        if (!e || "string" != typeof e) return null;
        try {
            t = (new T.DOMParser).parseFromString(e, "text/xml")
        } catch (e) {
        }
        return n = t && t.getElementsByTagName("parsererror")[0], t && !n || C.error("Invalid XML: " + (n ? C.map(n.childNodes, function (e) {
            return e.textContent
        }).join("\n") : e)), t
    }, /\[\]$/), Dt = /\r?\n/g, jt = /^(?:submit|button|image|reset|file)$/i, Ht = /^(?:input|select|textarea|keygen)/i;
    C.param = function (e, t) {
        function n(e, t) {
            t = y(t) ? t() : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == t ? "" : t)
        }

        var o, i = [];
        if (null == e) return "";
        if (Array.isArray(e) || e.jquery && !C.isPlainObject(e)) C.each(e, function () {
            n(this.name, this.value)
        }); else for (o in e) !function n(o, e, i, s) {
            if (Array.isArray(e)) C.each(e, function (e, t) {
                i || Lt.test(o) ? s(o, t) : n(o + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, i, s)
            }); else if (i || "object" !== h(e)) s(o, e); else for (var t in e) n(o + "[" + t + "]", e[t], i, s)
        }(o, e[o], t, n);
        return i.join("&")
    }, C.fn.extend({
        serialize: function () {
            return C.param(this.serializeArray())
        }, serializeArray: function () {
            return this.map(function () {
                var e = C.prop(this, "elements");
                return e ? C.makeArray(e) : this
            }).filter(function () {
                var e = this.type;
                return this.name && !C(this).is(":disabled") && Ht.test(this.nodeName) && !jt.test(e) && (this.checked || !we.test(e))
            }).map(function (e, t) {
                var n = C(this).val();
                return null == n ? null : Array.isArray(n) ? C.map(n, function (e) {
                    return {name: t.name, value: e.replace(Dt, "\r\n")}
                }) : {name: t.name, value: n.replace(Dt, "\r\n")}
            }).get()
        }
    });
    var Mt = /%20/g, qt = /#.*$/, Ot = /([?&])_=[^&]*/, It = /^(.*?):[ \t]*([^\r\n]*)$/gm, Nt = /^(?:GET|HEAD)$/,
        zt = /^\/\//, Ft = {}, Rt = {}, _t = "*/".concat("*"), Wt = S.createElement("a");

    function Bt(s) {
        return function (e, t) {
            "string" != typeof e && (t = e, e = "*");
            var n, o = 0, i = e.toLowerCase().match(k) || [];
            if (y(t)) for (; n = i[o++];) "+" === n[0] ? (n = n.slice(1) || "*", (s[n] = s[n] || []).unshift(t)) : (s[n] = s[n] || []).push(t)
        }
    }

    function Xt(t, o, i, s) {
        var r = {}, a = t === Rt;

        function l(e) {
            var n;
            return r[e] = !0, C.each(t[e] || [], function (e, t) {
                t = t(o, i, s);
                return "string" != typeof t || a || r[t] ? a ? !(n = t) : void 0 : (o.dataTypes.unshift(t), l(t), !1)
            }), n
        }

        return l(o.dataTypes[0]) || !r["*"] && l("*")
    }

    function Yt(e, t) {
        var n, o, i = C.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((i[n] ? e : o = o || {})[n] = t[n]);
        return o && C.extend(!0, e, o), e
    }

    Wt.href = At.href, C.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: At.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(At.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": _t,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/},
            responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
            converters: {"* text": String, "text html": !0, "text json": JSON.parse, "text xml": C.parseXML},
            flatOptions: {url: !0, context: !0}
        },
        ajaxSetup: function (e, t) {
            return t ? Yt(Yt(e, C.ajaxSettings), t) : Yt(C.ajaxSettings, e)
        },
        ajaxPrefilter: Bt(Ft),
        ajaxTransport: Bt(Rt),
        ajax: function (e, t) {
            "object" == typeof e && (t = e, e = void 0);
            var l, c, d, n, u, p, f, o, i, h = C.ajaxSetup({}, t = t || {}), g = h.context || h,
                m = h.context && (g.nodeType || g.jquery) ? C(g) : C.event, v = C.Deferred(),
                y = C.Callbacks("once memory"), b = h.statusCode || {}, s = {}, r = {}, a = "canceled", x = {
                    readyState: 0, getResponseHeader: function (e) {
                        var t;
                        if (p) {
                            if (!n) for (n = {}; t = It.exec(d);) n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2]);
                            t = n[e.toLowerCase() + " "]
                        }
                        return null == t ? null : t.join(", ")
                    }, getAllResponseHeaders: function () {
                        return p ? d : null
                    }, setRequestHeader: function (e, t) {
                        return null == p && (e = r[e.toLowerCase()] = r[e.toLowerCase()] || e, s[e] = t), this
                    }, overrideMimeType: function (e) {
                        return null == p && (h.mimeType = e), this
                    }, statusCode: function (e) {
                        if (e) if (p) x.always(e[x.status]); else for (var t in e) b[t] = [b[t], e[t]];
                        return this
                    }, abort: function (e) {
                        e = e || a;
                        return l && l.abort(e), w(0, e), this
                    }
                };
            if (v.promise(x), h.url = ((e || h.url || At.href) + "").replace(zt, At.protocol + "//"), h.type = t.method || t.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(k) || [""], null == h.crossDomain) {
                i = S.createElement("a");
                try {
                    i.href = h.url, i.href = i.href, h.crossDomain = Wt.protocol + "//" + Wt.host != i.protocol + "//" + i.host
                } catch (e) {
                    h.crossDomain = !0
                }
            }
            if (h.data && h.processData && "string" != typeof h.data && (h.data = C.param(h.data, h.traditional)), Xt(Ft, h, t, x), !p) {
                for (o in (f = C.event && h.global) && 0 == C.active++ && C.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !Nt.test(h.type), c = h.url.replace(qt, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(Mt, "+")) : (i = h.url.slice(c.length), h.data && (h.processData || "string" == typeof h.data) && (c += (Pt.test(c) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (c = c.replace(Ot, "$1"), i = (Pt.test(c) ? "&" : "?") + "_=" + Et.guid++ + i), h.url = c + i), h.ifModified && (C.lastModified[c] && x.setRequestHeader("If-Modified-Since", C.lastModified[c]), C.etag[c]) && x.setRequestHeader("If-None-Match", C.etag[c]), (h.data && h.hasContent && !1 !== h.contentType || t.contentType) && x.setRequestHeader("Content-Type", h.contentType), x.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + _t + "; q=0.01" : "") : h.accepts["*"]), h.headers) x.setRequestHeader(o, h.headers[o]);
                if (h.beforeSend && (!1 === h.beforeSend.call(g, x, h) || p)) return x.abort();
                if (a = "abort", y.add(h.complete), x.done(h.success), x.fail(h.error), l = Xt(Rt, h, t, x)) {
                    if (x.readyState = 1, f && m.trigger("ajaxSend", [x, h]), p) return x;
                    h.async && 0 < h.timeout && (u = T.setTimeout(function () {
                        x.abort("timeout")
                    }, h.timeout));
                    try {
                        p = !1, l.send(s, w)
                    } catch (e) {
                        if (p) throw e;
                        w(-1, e)
                    }
                } else w(-1, "No Transport")
            }
            return x;

            function w(e, t, n, o) {
                var i, s, r, a = t;
                p || (p = !0, u && T.clearTimeout(u), l = void 0, d = o || "", x.readyState = 0 < e ? 4 : 0, o = 200 <= e && e < 300 || 304 === e, n && (r = function (e, t, n) {
                    for (var o, i, s, r, a = e.contents, l = e.dataTypes; "*" === l[0];) l.shift(), void 0 === o && (o = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (o) for (i in a) if (a[i] && a[i].test(o)) {
                        l.unshift(i);
                        break
                    }
                    if (l[0] in n) s = l[0]; else {
                        for (i in n) {
                            if (!l[0] || e.converters[i + " " + l[0]]) {
                                s = i;
                                break
                            }
                            r = r || i
                        }
                        s = s || r
                    }
                    if (s) return s !== l[0] && l.unshift(s), n[s]
                }(h, x, n)), !o && -1 < C.inArray("script", h.dataTypes) && C.inArray("json", h.dataTypes) < 0 && (h.converters["text script"] = function () {
                }), r = function (e, t, n, o) {
                    var i, s, r, a, l, c = {}, d = e.dataTypes.slice();
                    if (d[1]) for (r in e.converters) c[r.toLowerCase()] = e.converters[r];
                    for (s = d.shift(); s;) if (e.responseFields[s] && (n[e.responseFields[s]] = t), !l && o && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = s, s = d.shift()) if ("*" === s) s = l; else if ("*" !== l && l !== s) {
                        if (!(r = c[l + " " + s] || c["* " + s])) for (i in c) if ((a = i.split(" "))[1] === s && (r = c[l + " " + a[0]] || c["* " + a[0]])) {
                            !0 === r ? r = c[i] : !0 !== c[i] && (s = a[0], d.unshift(a[1]));
                            break
                        }
                        if (!0 !== r) if (r && e.throws) t = r(t); else try {
                            t = r(t)
                        } catch (e) {
                            return {state: "parsererror", error: r ? e : "No conversion from " + l + " to " + s}
                        }
                    }
                    return {state: "success", data: t}
                }(h, r, x, o), o ? (h.ifModified && ((n = x.getResponseHeader("Last-Modified")) && (C.lastModified[c] = n), n = x.getResponseHeader("etag")) && (C.etag[c] = n), 204 === e || "HEAD" === h.type ? a = "nocontent" : 304 === e ? a = "notmodified" : (a = r.state, i = r.data, o = !(s = r.error))) : (s = a, !e && a || (a = "error", e < 0 && (e = 0))), x.status = e, x.statusText = (t || a) + "", o ? v.resolveWith(g, [i, a, x]) : v.rejectWith(g, [x, a, s]), x.statusCode(b), b = void 0, f && m.trigger(o ? "ajaxSuccess" : "ajaxError", [x, h, o ? i : s]), y.fireWith(g, [x, a]), f && (m.trigger("ajaxComplete", [x, h]), --C.active || C.event.trigger("ajaxStop")))
            }
        },
        getJSON: function (e, t, n) {
            return C.get(e, t, n, "json")
        },
        getScript: function (e, t) {
            return C.get(e, void 0, t, "script")
        }
    }), C.each(["get", "post"], function (e, i) {
        C[i] = function (e, t, n, o) {
            return y(t) && (o = o || n, n = t, t = void 0), C.ajax(C.extend({
                url: e,
                type: i,
                dataType: o,
                data: t,
                success: n
            }, C.isPlainObject(e) && e))
        }
    }), C.ajaxPrefilter(function (e) {
        for (var t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
    }), C._evalUrl = function (e, t, n) {
        return C.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: {
                "text script": function () {
                }
            },
            dataFilter: function (e) {
                C.globalEval(e, t, n)
            }
        })
    }, C.fn.extend({
        wrapAll: function (e) {
            return this[0] && (y(e) && (e = e.call(this[0])), e = C(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function () {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this
        }, wrapInner: function (n) {
            return y(n) ? this.each(function (e) {
                C(this).wrapInner(n.call(this, e))
            }) : this.each(function () {
                var e = C(this), t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n)
            })
        }, wrap: function (t) {
            var n = y(t);
            return this.each(function (e) {
                C(this).wrapAll(n ? t.call(this, e) : t)
            })
        }, unwrap: function (e) {
            return this.parent(e).not("body").each(function () {
                C(this).replaceWith(this.childNodes)
            }), this
        }
    }), C.expr.pseudos.hidden = function (e) {
        return !C.expr.pseudos.visible(e)
    }, C.expr.pseudos.visible = function (e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, C.ajaxSettings.xhr = function () {
        try {
            return new T.XMLHttpRequest
        } catch (e) {
        }
    };
    var Ut = {0: 200, 1223: 204}, Vt = C.ajaxSettings.xhr();
    m.cors = !!Vt && "withCredentials" in Vt, m.ajax = Vt = !!Vt, C.ajaxTransport(function (i) {
        var s, r;
        if (m.cors || Vt && !i.crossDomain) return {
            send: function (e, t) {
                var n, o = i.xhr();
                if (o.open(i.type, i.url, i.async, i.username, i.password), i.xhrFields) for (n in i.xhrFields) o[n] = i.xhrFields[n];
                for (n in i.mimeType && o.overrideMimeType && o.overrideMimeType(i.mimeType), i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) o.setRequestHeader(n, e[n]);
                s = function (e) {
                    return function () {
                        s && (s = r = o.onload = o.onerror = o.onabort = o.ontimeout = o.onreadystatechange = null, "abort" === e ? o.abort() : "error" === e ? "number" != typeof o.status ? t(0, "error") : t(o.status, o.statusText) : t(Ut[o.status] || o.status, o.statusText, "text" !== (o.responseType || "text") || "string" != typeof o.responseText ? {binary: o.response} : {text: o.responseText}, o.getAllResponseHeaders()))
                    }
                }, o.onload = s(), r = o.onerror = o.ontimeout = s("error"), void 0 !== o.onabort ? o.onabort = r : o.onreadystatechange = function () {
                    4 === o.readyState && T.setTimeout(function () {
                        s && r()
                    })
                }, s = s("abort");
                try {
                    o.send(i.hasContent && i.data || null)
                } catch (e) {
                    if (s) throw e
                }
            }, abort: function () {
                s && s()
            }
        }
    }), C.ajaxPrefilter(function (e) {
        e.crossDomain && (e.contents.script = !1)
    }), C.ajaxSetup({
        accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
        contents: {script: /\b(?:java|ecma)script\b/},
        converters: {
            "text script": function (e) {
                return C.globalEval(e), e
            }
        }
    }), C.ajaxPrefilter("script", function (e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), C.ajaxTransport("script", function (n) {
        var o, i;
        if (n.crossDomain || n.scriptAttrs) return {
            send: function (e, t) {
                o = C("<script>").attr(n.scriptAttrs || {}).prop({
                    charset: n.scriptCharset,
                    src: n.url
                }).on("load error", i = function (e) {
                    o.remove(), i = null, e && t("error" === e.type ? 404 : 200, e.type)
                }), S.head.appendChild(o[0])
            }, abort: function () {
                i && i()
            }
        }
    });
    var Qt = [], Zt = /(=)\?(?=&|$)|\?\?/, Gt = (C.ajaxSetup({
        jsonp: "callback", jsonpCallback: function () {
            var e = Qt.pop() || C.expando + "_" + Et.guid++;
            return this[e] = !0, e
        }
    }), C.ajaxPrefilter("json jsonp", function (e, t, n) {
        var o, i, s,
            r = !1 !== e.jsonp && (Zt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Zt.test(e.data) && "data");
        if (r || "jsonp" === e.dataTypes[0]) return o = e.jsonpCallback = y(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, r ? e[r] = e[r].replace(Zt, "$1" + o) : !1 !== e.jsonp && (e.url += (Pt.test(e.url) ? "&" : "?") + e.jsonp + "=" + o), e.converters["script json"] = function () {
            return s || C.error(o + " was not called"), s[0]
        }, e.dataTypes[0] = "json", i = T[o], T[o] = function () {
            s = arguments
        }, n.always(function () {
            void 0 === i ? C(T).removeProp(o) : T[o] = i, e[o] && (e.jsonpCallback = t.jsonpCallback, Qt.push(o)), s && y(i) && i(s[0]), s = i = void 0
        }), "script"
    }), m.createHTMLDocument = ((s = S.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === s.childNodes.length), C.parseHTML = function (e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (m.createHTMLDocument ? ((o = (t = S.implementation.createHTMLDocument("")).createElement("base")).href = S.location.href, t.head.appendChild(o)) : t = S), o = !n && [], (n = G.exec(e)) ? [t.createElement(n[1])] : (n = $e([e], t, o), o && o.length && C(o).remove(), C.merge([], n.childNodes)));
        var o
    }, C.fn.load = function (e, t, n) {
        var o, i, s, r = this, a = e.indexOf(" ");
        return -1 < a && (o = M(e.slice(a)), e = e.slice(0, a)), y(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), 0 < r.length && C.ajax({
            url: e,
            type: i || "GET",
            dataType: "html",
            data: t
        }).done(function (e) {
            s = arguments, r.html(o ? C("<div>").append(C.parseHTML(e)).find(o) : e)
        }).always(n && function (e, t) {
            r.each(function () {
                n.apply(this, s || [e.responseText, t, e])
            })
        }), this
    }, C.expr.pseudos.animated = function (t) {
        return C.grep(C.timers, function (e) {
            return t === e.elem
        }).length
    }, C.offset = {
        setOffset: function (e, t, n) {
            var o, i, s, r, a = C.css(e, "position"), l = C(e), c = {};
            "static" === a && (e.style.position = "relative"), s = l.offset(), o = C.css(e, "top"), r = C.css(e, "left"), a = ("absolute" === a || "fixed" === a) && -1 < (o + r).indexOf("auto") ? (i = (a = l.position()).top, a.left) : (i = parseFloat(o) || 0, parseFloat(r) || 0), null != (t = y(t) ? t.call(e, n, C.extend({}, s)) : t).top && (c.top = t.top - s.top + i), null != t.left && (c.left = t.left - s.left + a), "using" in t ? t.using.call(e, c) : l.css(c)
        }
    }, C.fn.extend({
        offset: function (t) {
            var e, n;
            return arguments.length ? void 0 === t ? this : this.each(function (e) {
                C.offset.setOffset(this, t, e)
            }) : (n = this[0]) ? n.getClientRects().length ? (e = n.getBoundingClientRect(), n = n.ownerDocument.defaultView, {
                top: e.top + n.pageYOffset,
                left: e.left + n.pageXOffset
            }) : {top: 0, left: 0} : void 0
        }, position: function () {
            if (this[0]) {
                var e, t, n, o = this[0], i = {top: 0, left: 0};
                if ("fixed" === C.css(o, "position")) t = o.getBoundingClientRect(); else {
                    for (t = this.offset(), n = o.ownerDocument, e = o.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === C.css(e, "position");) e = e.parentNode;
                    e && e !== o && 1 === e.nodeType && ((i = C(e).offset()).top += C.css(e, "borderTopWidth", !0), i.left += C.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - i.top - C.css(o, "marginTop", !0),
                    left: t.left - i.left - C.css(o, "marginLeft", !0)
                }
            }
        }, offsetParent: function () {
            return this.map(function () {
                for (var e = this.offsetParent; e && "static" === C.css(e, "position");) e = e.offsetParent;
                return e || w
            })
        }
    }), C.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (t, i) {
        var s = "pageYOffset" === i;
        C.fn[t] = function (e) {
            return u(this, function (e, t, n) {
                var o;
                if (g(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === n) return o ? o[i] : e[t];
                o ? o.scrollTo(s ? o.pageXOffset : n, s ? n : o.pageYOffset) : e[t] = n
            }, t, e, arguments.length)
        }
    }), C.each(["top", "left"], function (e, n) {
        C.cssHooks[n] = Je(m.pixelPosition, function (e, t) {
            if (t) return t = Ke(e, n), Ve.test(t) ? C(e).position()[n] + "px" : t
        })
    }), C.each({Height: "height", Width: "width"}, function (r, a) {
        C.each({padding: "inner" + r, content: a, "": "outer" + r}, function (o, s) {
            C.fn[s] = function (e, t) {
                var n = arguments.length && (o || "boolean" != typeof e),
                    i = o || (!0 === e || !0 === t ? "margin" : "border");
                return u(this, function (e, t, n) {
                    var o;
                    return g(e) ? 0 === s.indexOf("outer") ? e["inner" + r] : e.document.documentElement["client" + r] : 9 === e.nodeType ? (o = e.documentElement, Math.max(e.body["scroll" + r], o["scroll" + r], e.body["offset" + r], o["offset" + r], o["client" + r])) : void 0 === n ? C.css(e, t, i) : C.style(e, t, n, i)
                }, a, n ? e : void 0, n)
            }
        })
    }), C.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
        C.fn[t] = function (e) {
            return this.on(t, e)
        }
    }), C.fn.extend({
        bind: function (e, t, n) {
            return this.on(e, null, t, n)
        }, unbind: function (e, t) {
            return this.off(e, null, t)
        }, delegate: function (e, t, n, o) {
            return this.on(t, e, n, o)
        }, undelegate: function (e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }, hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), C.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, n) {
        C.fn[n] = function (e, t) {
            return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
        }
    }), /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g), Kt = (C.proxy = function (e, t) {
        var n, o;
        if ("string" == typeof t && (o = e[t], t = e, e = o), y(e)) return n = a.call(arguments, 2), (o = function () {
            return e.apply(t || this, n.concat(a.call(arguments)))
        }).guid = e.guid = e.guid || C.guid++, o
    }, C.holdReady = function (e) {
        e ? C.readyWait++ : C.ready(!0)
    }, C.isArray = Array.isArray, C.parseJSON = JSON.parse, C.nodeName = l, C.isFunction = y, C.isWindow = g, C.camelCase = b, C.type = h, C.now = Date.now, C.isNumeric = function (e) {
        var t = C.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }, C.trim = function (e) {
        return null == e ? "" : (e + "").replace(Gt, "$1")
    }, "function" == typeof define && define.amd && define("jquery", [], function () {
        return C
    }), T.jQuery), Jt = T.$;
    return C.noConflict = function (e) {
        return T.$ === C && (T.$ = Jt), e && T.jQuery === C && (T.jQuery = Kt), C
    }, void 0 === O && (T.jQuery = T.$ = C), C
}), function (e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
}(function (c) {
    "use strict";
    var o, r = window.Slick || {};
    o = 0, (r = function (e, t) {
        var n = this;
        n.defaults = {
            accessibility: !0,
            adaptiveHeight: !1,
            appendArrows: c(e),
            appendDots: c(e),
            arrows: !0,
            asNavFor: null,
            prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
            nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
            autoplay: !1,
            autoplaySpeed: 3e3,
            centerMode: !1,
            centerPadding: "50px",
            cssEase: "ease",
            customPaging: function (e, t) {
                return c('<button type="button" />').text(t + 1)
            },
            dots: !1,
            dotsClass: "slick-dots",
            draggable: !0,
            easing: "linear",
            edgeFriction: .35,
            fade: !1,
            focusOnSelect: !1,
            focusOnChange: !1,
            infinite: !0,
            initialSlide: 0,
            lazyLoad: "ondemand",
            mobileFirst: !1,
            pauseOnHover: !0,
            pauseOnFocus: !0,
            pauseOnDotsHover: !1,
            respondTo: "window",
            responsive: null,
            rows: 1,
            rtl: !1,
            slide: "",
            slidesPerRow: 1,
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 500,
            swipe: !0,
            swipeToSlide: !1,
            touchMove: !0,
            touchThreshold: 5,
            useCSS: !0,
            useTransform: !0,
            variableWidth: !1,
            vertical: !1,
            verticalSwiping: !1,
            waitForAnimate: !0,
            zIndex: 1e3
        }, n.initials = {
            animating: !1,
            dragging: !1,
            autoPlayTimer: null,
            currentDirection: 0,
            currentLeft: null,
            currentSlide: 0,
            direction: 1,
            $dots: null,
            listWidth: null,
            listHeight: null,
            loadIndex: 0,
            $nextArrow: null,
            $prevArrow: null,
            scrolling: !1,
            slideCount: null,
            slideWidth: null,
            $slideTrack: null,
            $slides: null,
            sliding: !1,
            slideOffset: 0,
            swipeLeft: null,
            swiping: !1,
            $list: null,
            touchObject: {},
            transformsEnabled: !1,
            unslicked: !1
        }, c.extend(n, n.initials), n.activeBreakpoint = null, n.animType = null, n.animProp = null, n.breakpoints = [], n.breakpointSettings = [], n.cssTransitions = !1, n.focussed = !1, n.interrupted = !1, n.hidden = "hidden", n.paused = !0, n.positionProp = null, n.respondTo = null, n.rowCount = 1, n.shouldClick = !0, n.$slider = c(e), n.$slidesCache = null, n.transformType = null, n.transitionType = null, n.visibilityChange = "visibilitychange", n.windowWidth = 0, n.windowTimer = null, e = c(e).data("slick") || {}, n.options = c.extend({}, n.defaults, t, e), n.currentSlide = n.options.initialSlide, n.originalSettings = n.options, void 0 !== document.mozHidden ? (n.hidden = "mozHidden", n.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (n.hidden = "webkitHidden", n.visibilityChange = "webkitvisibilitychange"), n.autoPlay = c.proxy(n.autoPlay, n), n.autoPlayClear = c.proxy(n.autoPlayClear, n), n.autoPlayIterator = c.proxy(n.autoPlayIterator, n), n.changeSlide = c.proxy(n.changeSlide, n), n.clickHandler = c.proxy(n.clickHandler, n), n.selectHandler = c.proxy(n.selectHandler, n), n.setPosition = c.proxy(n.setPosition, n), n.swipeHandler = c.proxy(n.swipeHandler, n), n.dragHandler = c.proxy(n.dragHandler, n), n.keyHandler = c.proxy(n.keyHandler, n), n.instanceUid = o++, n.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, n.registerBreakpoints(), n.init(!0)
    }).prototype.activateADA = function () {
        this.$slideTrack.find(".slick-active").attr({"aria-hidden": "false"}).find("a, input, button, select").attr({tabindex: "0"})
    }, r.prototype.addSlide = r.prototype.slickAdd = function (e, t, n) {
        var o = this;
        if ("boolean" == typeof t) n = t, t = null; else if (t < 0 || t >= o.slideCount) return !1;
        o.unload(), "number" == typeof t ? 0 === t && 0 === o.$slides.length ? c(e).appendTo(o.$slideTrack) : n ? c(e).insertBefore(o.$slides.eq(t)) : c(e).insertAfter(o.$slides.eq(t)) : !0 === n ? c(e).prependTo(o.$slideTrack) : c(e).appendTo(o.$slideTrack), o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(), o.$slideTrack.append(o.$slides), o.$slides.each(function (e, t) {
            c(t).attr("data-slick-index", e)
        }), o.$slidesCache = o.$slides, o.reinit()
    }, r.prototype.animateHeight = function () {
        var e, t = this;
        1 === t.options.slidesToShow && !0 === t.options.adaptiveHeight && !1 === t.options.vertical && (e = t.$slides.eq(t.currentSlide).outerHeight(!0), t.$list.animate({height: e}, t.options.speed))
    }, r.prototype.animateSlide = function (e, t) {
        var n = {}, o = this;
        o.animateHeight(), !0 === o.options.rtl && !1 === o.options.vertical && (e = -e), !1 === o.transformsEnabled ? !1 === o.options.vertical ? o.$slideTrack.animate({left: e}, o.options.speed, o.options.easing, t) : o.$slideTrack.animate({top: e}, o.options.speed, o.options.easing, t) : !1 === o.cssTransitions ? (!0 === o.options.rtl && (o.currentLeft = -o.currentLeft), c({animStart: o.currentLeft}).animate({animStart: e}, {
            duration: o.options.speed,
            easing: o.options.easing,
            step: function (e) {
                e = Math.ceil(e), !1 === o.options.vertical ? n[o.animType] = "translate(" + e + "px, 0px)" : n[o.animType] = "translate(0px," + e + "px)", o.$slideTrack.css(n)
            },
            complete: function () {
                t && t.call()
            }
        })) : (o.applyTransition(), e = Math.ceil(e), !1 === o.options.vertical ? n[o.animType] = "translate3d(" + e + "px, 0px, 0px)" : n[o.animType] = "translate3d(0px," + e + "px, 0px)", o.$slideTrack.css(n), t && setTimeout(function () {
            o.disableTransition(), t.call()
        }, o.options.speed))
    }, r.prototype.getNavTarget = function () {
        var e = this.options.asNavFor;
        return e = e && null !== e ? c(e).not(this.$slider) : e
    }, r.prototype.asNavFor = function (t) {
        var e = this.getNavTarget();
        null !== e && "object" == typeof e && e.each(function () {
            var e = c(this).slick("getSlick");
            e.unslicked || e.slideHandler(t, !0)
        })
    }, r.prototype.applyTransition = function (e) {
        var t = this, n = {};
        !1 === t.options.fade ? n[t.transitionType] = t.transformType + " " + t.options.speed + "ms " + t.options.cssEase : n[t.transitionType] = "opacity " + t.options.speed + "ms " + t.options.cssEase, (!1 === t.options.fade ? t.$slideTrack : t.$slides.eq(e)).css(n)
    }, r.prototype.autoPlay = function () {
        var e = this;
        e.autoPlayClear(), e.slideCount > e.options.slidesToShow && (e.autoPlayTimer = setInterval(e.autoPlayIterator, e.options.autoplaySpeed))
    }, r.prototype.autoPlayClear = function () {
        this.autoPlayTimer && clearInterval(this.autoPlayTimer)
    }, r.prototype.autoPlayIterator = function () {
        var e = this, t = e.currentSlide + e.options.slidesToScroll;
        e.paused || e.interrupted || e.focussed || (!1 === e.options.infinite && (1 === e.direction && e.currentSlide + 1 === e.slideCount - 1 ? e.direction = 0 : 0 === e.direction && (t = e.currentSlide - e.options.slidesToScroll, e.currentSlide - 1 == 0) && (e.direction = 1)), e.slideHandler(t))
    }, r.prototype.buildArrows = function () {
        var e = this;
        !0 === e.options.arrows && (e.$prevArrow = c(e.options.prevArrow).addClass("slick-arrow"), e.$nextArrow = c(e.options.nextArrow).addClass("slick-arrow"), e.slideCount > e.options.slidesToShow ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows), e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows), !0 !== e.options.infinite && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({
            "aria-disabled": "true",
            tabindex: "-1"
        }))
    }, r.prototype.buildDots = function () {
        var e, t, n = this;
        if (!0 === n.options.dots) {
            for (n.$slider.addClass("slick-dotted"), t = c("<ul />").addClass(n.options.dotsClass), e = 0; e <= n.getDotCount(); e += 1) t.append(c("<li />").append(n.options.customPaging.call(this, n, e)));
            n.$dots = t.appendTo(n.options.appendDots), n.$dots.find("li").first().addClass("slick-active")
        }
    }, r.prototype.buildOut = function () {
        var e = this;
        e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), e.slideCount = e.$slides.length, e.$slides.each(function (e, t) {
            c(t).attr("data-slick-index", e).data("originalStyling", c(t).attr("style") || "")
        }), e.$slider.addClass("slick-slider"), e.$slideTrack = 0 === e.slideCount ? c('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(), e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent(), e.$slideTrack.css("opacity", 0), !0 !== e.options.centerMode && !0 !== e.options.swipeToSlide || (e.options.slidesToScroll = 1), c("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"), e.setupInfinite(), e.buildArrows(), e.buildDots(), e.updateDots(), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), !0 === e.options.draggable && e.$list.addClass("draggable")
    }, r.prototype.buildRows = function () {
        var e, t, n, o = this, i = document.createDocumentFragment(), s = o.$slider.children();
        if (1 < o.options.rows) {
            for (n = o.options.slidesPerRow * o.options.rows, t = Math.ceil(s.length / n), e = 0; e < t; e++) {
                for (var r = document.createElement("div"), a = 0; a < o.options.rows; a++) {
                    for (var l = document.createElement("div"), c = 0; c < o.options.slidesPerRow; c++) {
                        var d = e * n + (a * o.options.slidesPerRow + c);
                        s.get(d) && l.appendChild(s.get(d))
                    }
                    r.appendChild(l)
                }
                i.appendChild(r)
            }
            o.$slider.empty().append(i), o.$slider.children().children().children().css({
                width: 100 / o.options.slidesPerRow + "%",
                display: "inline-block"
            })
        }
    }, r.prototype.checkResponsive = function (e, t) {
        var n, o, i, s = this, r = !1, a = s.$slider.width(), l = window.innerWidth || c(window).width();
        if ("window" === s.respondTo ? i = l : "slider" === s.respondTo ? i = a : "min" === s.respondTo && (i = Math.min(l, a)), s.options.responsive && s.options.responsive.length && null !== s.options.responsive) {
            for (n in o = null, s.breakpoints) s.breakpoints.hasOwnProperty(n) && (!1 === s.originalSettings.mobileFirst ? i < s.breakpoints[n] && (o = s.breakpoints[n]) : i > s.breakpoints[n] && (o = s.breakpoints[n]));
            null !== o ? null !== s.activeBreakpoint && o === s.activeBreakpoint && !t || (s.activeBreakpoint = o, "unslick" === s.breakpointSettings[o] ? s.unslick(o) : (s.options = c.extend({}, s.originalSettings, s.breakpointSettings[o]), !0 === e && (s.currentSlide = s.options.initialSlide), s.refresh(e)), r = o) : null !== s.activeBreakpoint && (s.activeBreakpoint = null, s.options = s.originalSettings, !0 === e && (s.currentSlide = s.options.initialSlide), s.refresh(e), r = o), e || !1 === r || s.$slider.trigger("breakpoint", [s, r])
        }
    }, r.prototype.changeSlide = function (e, t) {
        var n, o = this, i = c(e.currentTarget);
        switch (i.is("a") && e.preventDefault(), i.is("li") || (i = i.closest("li")), n = o.slideCount % o.options.slidesToScroll != 0 ? 0 : (o.slideCount - o.currentSlide) % o.options.slidesToScroll, e.data.message) {
            case"previous":
                s = 0 == n ? o.options.slidesToScroll : o.options.slidesToShow - n, o.slideCount > o.options.slidesToShow && o.slideHandler(o.currentSlide - s, !1, t);
                break;
            case"next":
                s = 0 == n ? o.options.slidesToScroll : n, o.slideCount > o.options.slidesToShow && o.slideHandler(o.currentSlide + s, !1, t);
                break;
            case"index":
                var s = 0 === e.data.index ? 0 : e.data.index || i.index() * o.options.slidesToScroll;
                o.slideHandler(o.checkNavigable(s), !1, t), i.children().trigger("focus");
                break;
            default:
                return
        }
    }, r.prototype.checkNavigable = function (e) {
        var t = this.getNavigableIndexes(), n = 0;
        if (e > t[t.length - 1]) e = t[t.length - 1]; else for (var o in t) {
            if (e < t[o]) {
                e = n;
                break
            }
            n = t[o]
        }
        return e
    }, r.prototype.cleanUpEvents = function () {
        var e = this;
        e.options.dots && null !== e.$dots && (c("li", e.$dots).off("click.slick", e.changeSlide).off("mouseenter.slick", c.proxy(e.interrupt, e, !0)).off("mouseleave.slick", c.proxy(e.interrupt, e, !1)), !0 === e.options.accessibility) && e.$dots.off("keydown.slick", e.keyHandler), e.$slider.off("focus.slick blur.slick"), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide), e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide), !0 === e.options.accessibility) && (e.$prevArrow && e.$prevArrow.off("keydown.slick", e.keyHandler), e.$nextArrow) && e.$nextArrow.off("keydown.slick", e.keyHandler), e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler), e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler), e.$list.off("touchend.slick mouseup.slick", e.swipeHandler), e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler), e.$list.off("click.slick", e.clickHandler), c(document).off(e.visibilityChange, e.visibility), e.cleanUpSlideEvents(), !0 === e.options.accessibility && e.$list.off("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && c(e.$slideTrack).children().off("click.slick", e.selectHandler), c(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange), c(window).off("resize.slick.slick-" + e.instanceUid, e.resize), c("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault), c(window).off("load.slick.slick-" + e.instanceUid, e.setPosition)
    }, r.prototype.cleanUpSlideEvents = function () {
        var e = this;
        e.$list.off("mouseenter.slick", c.proxy(e.interrupt, e, !0)), e.$list.off("mouseleave.slick", c.proxy(e.interrupt, e, !1))
    }, r.prototype.cleanUpRows = function () {
        var e;
        1 < this.options.rows && ((e = this.$slides.children().children()).removeAttr("style"), this.$slider.empty().append(e))
    }, r.prototype.clickHandler = function (e) {
        !1 === this.shouldClick && (e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault())
    }, r.prototype.destroy = function (e) {
        var t = this;
        t.autoPlayClear(), t.touchObject = {}, t.cleanUpEvents(), c(".slick-cloned", t.$slider).detach(), t.$dots && t.$dots.remove(), t.$prevArrow && t.$prevArrow.length && (t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.prevArrow)) && t.$prevArrow.remove(), t.$nextArrow && t.$nextArrow.length && (t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.nextArrow)) && t.$nextArrow.remove(), t.$slides && (t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function () {
            c(this).attr("style", c(this).data("originalStyling"))
        }), t.$slideTrack.children(this.options.slide).detach(), t.$slideTrack.detach(), t.$list.detach(), t.$slider.append(t.$slides)), t.cleanUpRows(), t.$slider.removeClass("slick-slider"), t.$slider.removeClass("slick-initialized"), t.$slider.removeClass("slick-dotted"), t.unslicked = !0, e || t.$slider.trigger("destroy", [t])
    }, r.prototype.disableTransition = function (e) {
        var t = {};
        t[this.transitionType] = "", (!1 === this.options.fade ? this.$slideTrack : this.$slides.eq(e)).css(t)
    }, r.prototype.fadeSlide = function (e, t) {
        var n = this;
        !1 === n.cssTransitions ? (n.$slides.eq(e).css({zIndex: n.options.zIndex}), n.$slides.eq(e).animate({opacity: 1}, n.options.speed, n.options.easing, t)) : (n.applyTransition(e), n.$slides.eq(e).css({
            opacity: 1,
            zIndex: n.options.zIndex
        }), t && setTimeout(function () {
            n.disableTransition(e), t.call()
        }, n.options.speed))
    }, r.prototype.fadeSlideOut = function (e) {
        var t = this;
        !1 === t.cssTransitions ? t.$slides.eq(e).animate({
            opacity: 0,
            zIndex: t.options.zIndex - 2
        }, t.options.speed, t.options.easing) : (t.applyTransition(e), t.$slides.eq(e).css({
            opacity: 0,
            zIndex: t.options.zIndex - 2
        }))
    }, r.prototype.filterSlides = r.prototype.slickFilter = function (e) {
        var t = this;
        null !== e && (t.$slidesCache = t.$slides, t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.filter(e).appendTo(t.$slideTrack), t.reinit())
    }, r.prototype.focusHandler = function () {
        var n = this;
        n.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", function (e) {
            e.stopImmediatePropagation();
            var t = c(this);
            setTimeout(function () {
                n.options.pauseOnFocus && (n.focussed = t.is(":focus"), n.autoPlay())
            }, 0)
        })
    }, r.prototype.getCurrent = r.prototype.slickCurrentSlide = function () {
        return this.currentSlide
    }, r.prototype.getDotCount = function () {
        var e = this, t = 0, n = 0, o = 0;
        if (!0 === e.options.infinite) if (e.slideCount <= e.options.slidesToShow) ++o; else for (; t < e.slideCount;) ++o, t = n + e.options.slidesToScroll, n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow; else if (!0 === e.options.centerMode) o = e.slideCount; else if (e.options.asNavFor) for (; t < e.slideCount;) ++o, t = n + e.options.slidesToScroll, n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow; else o = 1 + Math.ceil((e.slideCount - e.options.slidesToShow) / e.options.slidesToScroll);
        return o - 1
    }, r.prototype.getLeft = function (e) {
        var t, n, o = this, i = 0;
        return o.slideOffset = 0, t = o.$slides.first().outerHeight(!0), !0 === o.options.infinite ? (o.slideCount > o.options.slidesToShow && (o.slideOffset = o.slideWidth * o.options.slidesToShow * -1, n = -1, !0 === o.options.vertical && !0 === o.options.centerMode && (2 === o.options.slidesToShow ? n = -1.5 : 1 === o.options.slidesToShow && (n = -2)), i = t * o.options.slidesToShow * n), o.slideCount % o.options.slidesToScroll != 0 && e + o.options.slidesToScroll > o.slideCount && o.slideCount > o.options.slidesToShow && (i = e > o.slideCount ? (o.slideOffset = (o.options.slidesToShow - (e - o.slideCount)) * o.slideWidth * -1, (o.options.slidesToShow - (e - o.slideCount)) * t * -1) : (o.slideOffset = o.slideCount % o.options.slidesToScroll * o.slideWidth * -1, o.slideCount % o.options.slidesToScroll * t * -1))) : e + o.options.slidesToShow > o.slideCount && (o.slideOffset = (e + o.options.slidesToShow - o.slideCount) * o.slideWidth, i = (e + o.options.slidesToShow - o.slideCount) * t), o.slideCount <= o.options.slidesToShow && (i = o.slideOffset = 0), !0 === o.options.centerMode && o.slideCount <= o.options.slidesToShow ? o.slideOffset = o.slideWidth * Math.floor(o.options.slidesToShow) / 2 - o.slideWidth * o.slideCount / 2 : !0 === o.options.centerMode && !0 === o.options.infinite ? o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2) - o.slideWidth : !0 === o.options.centerMode && (o.slideOffset = 0, o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2)), n = !1 === o.options.vertical ? e * o.slideWidth * -1 + o.slideOffset : e * t * -1 + i, !0 === o.options.variableWidth && (t = o.slideCount <= o.options.slidesToShow || !1 === o.options.infinite ? o.$slideTrack.children(".slick-slide").eq(e) : o.$slideTrack.children(".slick-slide").eq(e + o.options.slidesToShow), n = !0 === o.options.rtl ? t[0] ? -1 * (o.$slideTrack.width() - t[0].offsetLeft - t.width()) : 0 : t[0] ? -1 * t[0].offsetLeft : 0, !0 === o.options.centerMode) && (t = o.slideCount <= o.options.slidesToShow || !1 === o.options.infinite ? o.$slideTrack.children(".slick-slide").eq(e) : o.$slideTrack.children(".slick-slide").eq(e + o.options.slidesToShow + 1), n = !0 === o.options.rtl ? t[0] ? -1 * (o.$slideTrack.width() - t[0].offsetLeft - t.width()) : 0 : t[0] ? -1 * t[0].offsetLeft : 0, n += (o.$list.width() - t.outerWidth()) / 2), n
    }, r.prototype.getOption = r.prototype.slickGetOption = function (e) {
        return this.options[e]
    }, r.prototype.getNavigableIndexes = function () {
        for (var e = this, t = 0, n = 0, o = [], i = !1 === e.options.infinite ? e.slideCount : (t = -1 * e.options.slidesToScroll, n = -1 * e.options.slidesToScroll, 2 * e.slideCount); t < i;) o.push(t), t = n + e.options.slidesToScroll, n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
        return o
    }, r.prototype.getSlick = function () {
        return this
    }, r.prototype.getSlideCount = function () {
        var n, o = this, i = !0 === o.options.centerMode ? o.slideWidth * Math.floor(o.options.slidesToShow / 2) : 0;
        return !0 === o.options.swipeToSlide ? (o.$slideTrack.find(".slick-slide").each(function (e, t) {
            if (t.offsetLeft - i + c(t).outerWidth() / 2 > -1 * o.swipeLeft) return n = t, !1
        }), Math.abs(c(n).attr("data-slick-index") - o.currentSlide) || 1) : o.options.slidesToScroll
    }, r.prototype.goTo = r.prototype.slickGoTo = function (e, t) {
        this.changeSlide({data: {message: "index", index: parseInt(e)}}, t)
    }, r.prototype.init = function (e) {
        var t = this;
        c(t.$slider).hasClass("slick-initialized") || (c(t.$slider).addClass("slick-initialized"), t.buildRows(), t.buildOut(), t.setProps(), t.startLoad(), t.loadSlider(), t.initializeEvents(), t.updateArrows(), t.updateDots(), t.checkResponsive(!0), t.focusHandler()), e && t.$slider.trigger("init", [t]), !0 === t.options.accessibility && t.initADA(), t.options.autoplay && (t.paused = !1, t.autoPlay())
    }, r.prototype.initADA = function () {
        var n = this, o = Math.ceil(n.slideCount / n.options.slidesToShow),
            i = n.getNavigableIndexes().filter(function (e) {
                return 0 <= e && e < n.slideCount
            });
        n.$slides.add(n.$slideTrack.find(".slick-cloned")).attr({
            "aria-hidden": "true",
            tabindex: "-1"
        }).find("a, input, button, select").attr({tabindex: "-1"}), null !== n.$dots && (n.$slides.not(n.$slideTrack.find(".slick-cloned")).each(function (e) {
            var t = i.indexOf(e);
            c(this).attr({
                role: "tabpanel",
                id: "slick-slide" + n.instanceUid + e,
                tabindex: -1
            }), -1 !== t && c(this).attr({"aria-describedby": "slick-slide-control" + n.instanceUid + t})
        }), n.$dots.attr("role", "tablist").find("li").each(function (e) {
            var t = i[e];
            c(this).attr({role: "presentation"}), c(this).find("button").first().attr({
                role: "tab",
                id: "slick-slide-control" + n.instanceUid + e,
                "aria-controls": "slick-slide" + n.instanceUid + t,
                "aria-label": e + 1 + " of " + o,
                "aria-selected": null,
                tabindex: "-1"
            })
        }).eq(n.currentSlide).find("button").attr({"aria-selected": "true", tabindex: "0"}).end());
        for (var e = n.currentSlide, t = e + n.options.slidesToShow; e < t; e++) n.$slides.eq(e).attr("tabindex", 0);
        n.activateADA()
    }, r.prototype.initArrowEvents = function () {
        var e = this;
        !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.off("click.slick").on("click.slick", {message: "previous"}, e.changeSlide), e.$nextArrow.off("click.slick").on("click.slick", {message: "next"}, e.changeSlide), !0 === e.options.accessibility) && (e.$prevArrow.on("keydown.slick", e.keyHandler), e.$nextArrow.on("keydown.slick", e.keyHandler))
    }, r.prototype.initDotEvents = function () {
        var e = this;
        !0 === e.options.dots && (c("li", e.$dots).on("click.slick", {message: "index"}, e.changeSlide), !0 === e.options.accessibility) && e.$dots.on("keydown.slick", e.keyHandler), !0 === e.options.dots && !0 === e.options.pauseOnDotsHover && c("li", e.$dots).on("mouseenter.slick", c.proxy(e.interrupt, e, !0)).on("mouseleave.slick", c.proxy(e.interrupt, e, !1))
    }, r.prototype.initSlideEvents = function () {
        var e = this;
        e.options.pauseOnHover && (e.$list.on("mouseenter.slick", c.proxy(e.interrupt, e, !0)), e.$list.on("mouseleave.slick", c.proxy(e.interrupt, e, !1)))
    }, r.prototype.initializeEvents = function () {
        var e = this;
        e.initArrowEvents(), e.initDotEvents(), e.initSlideEvents(), e.$list.on("touchstart.slick mousedown.slick", {action: "start"}, e.swipeHandler), e.$list.on("touchmove.slick mousemove.slick", {action: "move"}, e.swipeHandler), e.$list.on("touchend.slick mouseup.slick", {action: "end"}, e.swipeHandler), e.$list.on("touchcancel.slick mouseleave.slick", {action: "end"}, e.swipeHandler), e.$list.on("click.slick", e.clickHandler), c(document).on(e.visibilityChange, c.proxy(e.visibility, e)), !0 === e.options.accessibility && e.$list.on("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && c(e.$slideTrack).children().on("click.slick", e.selectHandler), c(window).on("orientationchange.slick.slick-" + e.instanceUid, c.proxy(e.orientationChange, e)), c(window).on("resize.slick.slick-" + e.instanceUid, c.proxy(e.resize, e)), c("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault), c(window).on("load.slick.slick-" + e.instanceUid, e.setPosition), c(e.setPosition)
    }, r.prototype.initUI = function () {
        var e = this;
        !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.show(), e.$nextArrow.show()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.show()
    }, r.prototype.keyHandler = function (e) {
        var t = this;
        e.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === e.keyCode && !0 === t.options.accessibility ? t.changeSlide({data: {message: !0 === t.options.rtl ? "next" : "previous"}}) : 39 === e.keyCode && !0 === t.options.accessibility && t.changeSlide({data: {message: !0 === t.options.rtl ? "previous" : "next"}}))
    }, r.prototype.lazyLoad = function () {
        function e(e) {
            c("img[data-lazy]", e).each(function () {
                var e = c(this), t = c(this).attr("data-lazy"), n = c(this).attr("data-srcset"),
                    o = c(this).attr("data-sizes") || s.$slider.attr("data-sizes"), i = document.createElement("img");
                i.onload = function () {
                    e.animate({opacity: 0}, 100, function () {
                        n && (e.attr("srcset", n), o) && e.attr("sizes", o), e.attr("src", t).animate({opacity: 1}, 200, function () {
                            e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")
                        }), s.$slider.trigger("lazyLoaded", [s, e, t])
                    })
                }, i.onerror = function () {
                    e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), s.$slider.trigger("lazyLoadError", [s, e, t])
                }, i.src = t
            })
        }

        var t, n, o, s = this;
        if (!0 === s.options.centerMode ? o = !0 === s.options.infinite ? (n = s.currentSlide + (s.options.slidesToShow / 2 + 1)) + s.options.slidesToShow + 2 : (n = Math.max(0, s.currentSlide - (s.options.slidesToShow / 2 + 1)), s.options.slidesToShow / 2 + 1 + 2 + s.currentSlide) : (n = s.options.infinite ? s.options.slidesToShow + s.currentSlide : s.currentSlide, o = Math.ceil(n + s.options.slidesToShow), !0 === s.options.fade && (0 < n && n--, o <= s.slideCount) && o++), t = s.$slider.find(".slick-slide").slice(n, o), "anticipated" === s.options.lazyLoad) for (var i = n - 1, r = o, a = s.$slider.find(".slick-slide"), l = 0; l < s.options.slidesToScroll; l++) i < 0 && (i = s.slideCount - 1), t = (t = t.add(a.eq(i))).add(a.eq(r)), i--, r++;
        e(t), s.slideCount <= s.options.slidesToShow ? e(s.$slider.find(".slick-slide")) : s.currentSlide >= s.slideCount - s.options.slidesToShow ? e(s.$slider.find(".slick-cloned").slice(0, s.options.slidesToShow)) : 0 === s.currentSlide && e(s.$slider.find(".slick-cloned").slice(-1 * s.options.slidesToShow))
    }, r.prototype.loadSlider = function () {
        var e = this;
        e.setPosition(), e.$slideTrack.css({opacity: 1}), e.$slider.removeClass("slick-loading"), e.initUI(), "progressive" === e.options.lazyLoad && e.progressiveLazyLoad()
    }, r.prototype.next = r.prototype.slickNext = function () {
        this.changeSlide({data: {message: "next"}})
    }, r.prototype.orientationChange = function () {
        this.checkResponsive(), this.setPosition()
    }, r.prototype.pause = r.prototype.slickPause = function () {
        this.autoPlayClear(), this.paused = !0
    }, r.prototype.play = r.prototype.slickPlay = function () {
        var e = this;
        e.autoPlay(), e.options.autoplay = !0, e.paused = !1, e.focussed = !1, e.interrupted = !1
    }, r.prototype.postSlide = function (e) {
        var t = this;
        t.unslicked || (t.$slider.trigger("afterChange", [t, e]), t.animating = !1, t.slideCount > t.options.slidesToShow && t.setPosition(), t.swipeLeft = null, t.options.autoplay && t.autoPlay(), !0 === t.options.accessibility && (t.initADA(), t.options.focusOnChange) && c(t.$slides.get(t.currentSlide)).attr("tabindex", 0).focus())
    }, r.prototype.prev = r.prototype.slickPrev = function () {
        this.changeSlide({data: {message: "previous"}})
    }, r.prototype.preventDefault = function (e) {
        e.preventDefault()
    }, r.prototype.progressiveLazyLoad = function (e) {
        e = e || 1;
        var t, n, o, i, s = this, r = c("img[data-lazy]", s.$slider);
        r.length ? (t = r.first(), n = t.attr("data-lazy"), o = t.attr("data-srcset"), i = t.attr("data-sizes") || s.$slider.attr("data-sizes"), (r = document.createElement("img")).onload = function () {
            o && (t.attr("srcset", o), i) && t.attr("sizes", i), t.attr("src", n).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"), !0 === s.options.adaptiveHeight && s.setPosition(), s.$slider.trigger("lazyLoaded", [s, t, n]), s.progressiveLazyLoad()
        }, r.onerror = function () {
            e < 3 ? setTimeout(function () {
                s.progressiveLazyLoad(e + 1)
            }, 500) : (t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), s.$slider.trigger("lazyLoadError", [s, t, n]), s.progressiveLazyLoad())
        }, r.src = n) : s.$slider.trigger("allImagesLoaded", [s])
    }, r.prototype.refresh = function (e) {
        var t = this, n = t.slideCount - t.options.slidesToShow;
        !t.options.infinite && t.currentSlide > n && (t.currentSlide = n), t.slideCount <= t.options.slidesToShow && (t.currentSlide = 0), n = t.currentSlide, t.destroy(!0), c.extend(t, t.initials, {currentSlide: n}), t.init(), e || t.changeSlide({
            data: {
                message: "index",
                index: n
            }
        }, !1)
    }, r.prototype.registerBreakpoints = function () {
        var e, t, n, o = this, i = o.options.responsive || null;
        if ("array" === c.type(i) && i.length) {
            for (e in o.respondTo = o.options.respondTo || "window", i) if (n = o.breakpoints.length - 1, i.hasOwnProperty(e)) {
                for (t = i[e].breakpoint; 0 <= n;) o.breakpoints[n] && o.breakpoints[n] === t && o.breakpoints.splice(n, 1), n--;
                o.breakpoints.push(t), o.breakpointSettings[t] = i[e].settings
            }
            o.breakpoints.sort(function (e, t) {
                return o.options.mobileFirst ? e - t : t - e
            })
        }
    }, r.prototype.reinit = function () {
        var e = this;
        e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"), e.slideCount = e.$slides.length, e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll), e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0), e.registerBreakpoints(), e.setProps(), e.setupInfinite(), e.buildArrows(), e.updateArrows(), e.initArrowEvents(), e.buildDots(), e.updateDots(), e.initDotEvents(), e.cleanUpSlideEvents(), e.initSlideEvents(), e.checkResponsive(!1, !0), !0 === e.options.focusOnSelect && c(e.$slideTrack).children().on("click.slick", e.selectHandler), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), e.setPosition(), e.focusHandler(), e.paused = !e.options.autoplay, e.autoPlay(), e.$slider.trigger("reInit", [e])
    }, r.prototype.resize = function () {
        var e = this;
        c(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay), e.windowDelay = window.setTimeout(function () {
            e.windowWidth = c(window).width(), e.checkResponsive(), e.unslicked || e.setPosition()
        }, 50))
    }, r.prototype.removeSlide = r.prototype.slickRemove = function (e, t, n) {
        var o = this;
        if (e = "boolean" == typeof e ? !0 === (t = e) ? 0 : o.slideCount - 1 : !0 === t ? --e : e, o.slideCount < 1 || e < 0 || e > o.slideCount - 1) return !1;
        o.unload(), (!0 === n ? o.$slideTrack.children() : o.$slideTrack.children(this.options.slide).eq(e)).remove(), o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(), o.$slideTrack.append(o.$slides), o.$slidesCache = o.$slides, o.reinit()
    }, r.prototype.setCSS = function (e) {
        var t, n, o = this, i = {};
        !0 === o.options.rtl && (e = -e), t = "left" == o.positionProp ? Math.ceil(e) + "px" : "0px", n = "top" == o.positionProp ? Math.ceil(e) + "px" : "0px", i[o.positionProp] = e, !1 !== o.transformsEnabled && (!(i = {}) === o.cssTransitions ? i[o.animType] = "translate(" + t + ", " + n + ")" : i[o.animType] = "translate3d(" + t + ", " + n + ", 0px)"), o.$slideTrack.css(i)
    }, r.prototype.setDimensions = function () {
        var e = this,
            t = (!1 === e.options.vertical ? !0 === e.options.centerMode && e.$list.css({padding: "0px " + e.options.centerPadding}) : (e.$list.height(e.$slides.first().outerHeight(!0) * e.options.slidesToShow), !0 === e.options.centerMode && e.$list.css({padding: e.options.centerPadding + " 0px"})), e.listWidth = e.$list.width(), e.listHeight = e.$list.height(), !1 === e.options.vertical && !1 === e.options.variableWidth ? (e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow), e.$slideTrack.width(Math.ceil(e.slideWidth * e.$slideTrack.children(".slick-slide").length))) : !0 === e.options.variableWidth ? e.$slideTrack.width(5e3 * e.slideCount) : (e.slideWidth = Math.ceil(e.listWidth), e.$slideTrack.height(Math.ceil(e.$slides.first().outerHeight(!0) * e.$slideTrack.children(".slick-slide").length))), e.$slides.first().outerWidth(!0) - e.$slides.first().width());
        !1 === e.options.variableWidth && e.$slideTrack.children(".slick-slide").width(e.slideWidth - t)
    }, r.prototype.setFade = function () {
        var n, o = this;
        o.$slides.each(function (e, t) {
            n = o.slideWidth * e * -1, !0 === o.options.rtl ? c(t).css({
                position: "relative",
                right: n,
                top: 0,
                zIndex: o.options.zIndex - 2,
                opacity: 0
            }) : c(t).css({position: "relative", left: n, top: 0, zIndex: o.options.zIndex - 2, opacity: 0})
        }), o.$slides.eq(o.currentSlide).css({zIndex: o.options.zIndex - 1, opacity: 1})
    }, r.prototype.setHeight = function () {
        var e, t = this;
        1 === t.options.slidesToShow && !0 === t.options.adaptiveHeight && !1 === t.options.vertical && (e = t.$slides.eq(t.currentSlide).outerHeight(!0), t.$list.css("height", e))
    }, r.prototype.setOption = r.prototype.slickSetOption = function () {
        var e, t, n, o, i, s = this, r = !1;
        if ("object" === c.type(arguments[0]) ? (n = arguments[0], r = arguments[1], i = "multiple") : "string" === c.type(arguments[0]) && (n = arguments[0], o = arguments[1], r = arguments[2], "responsive" === arguments[0] && "array" === c.type(arguments[1]) ? i = "responsive" : void 0 !== arguments[1] && (i = "single")), "single" === i) s.options[n] = o; else if ("multiple" === i) c.each(n, function (e, t) {
            s.options[e] = t
        }); else if ("responsive" === i) for (t in o) if ("array" !== c.type(s.options.responsive)) s.options.responsive = [o[t]]; else {
            for (e = s.options.responsive.length - 1; 0 <= e;) s.options.responsive[e].breakpoint === o[t].breakpoint && s.options.responsive.splice(e, 1), e--;
            s.options.responsive.push(o[t])
        }
        r && (s.unload(), s.reinit())
    }, r.prototype.setPosition = function () {
        var e = this;
        e.setDimensions(), e.setHeight(), !1 === e.options.fade ? e.setCSS(e.getLeft(e.currentSlide)) : e.setFade(), e.$slider.trigger("setPosition", [e])
    }, r.prototype.setProps = function () {
        var e = this, t = document.body.style;
        e.positionProp = !0 === e.options.vertical ? "top" : "left", "top" === e.positionProp ? e.$slider.addClass("slick-vertical") : e.$slider.removeClass("slick-vertical"), void 0 === t.WebkitTransition && void 0 === t.MozTransition && void 0 === t.msTransition || !0 === e.options.useCSS && (e.cssTransitions = !0), e.options.fade && ("number" == typeof e.options.zIndex ? e.options.zIndex < 3 && (e.options.zIndex = 3) : e.options.zIndex = e.defaults.zIndex), void 0 !== t.OTransform && (e.animType = "OTransform", e.transformType = "-o-transform", e.transitionType = "OTransition", void 0 === t.perspectiveProperty) && void 0 === t.webkitPerspective && (e.animType = !1), void 0 !== t.MozTransform && (e.animType = "MozTransform", e.transformType = "-moz-transform", e.transitionType = "MozTransition", void 0 === t.perspectiveProperty) && void 0 === t.MozPerspective && (e.animType = !1), void 0 !== t.webkitTransform && (e.animType = "webkitTransform", e.transformType = "-webkit-transform", e.transitionType = "webkitTransition", void 0 === t.perspectiveProperty) && void 0 === t.webkitPerspective && (e.animType = !1), void 0 !== t.msTransform && (e.animType = "msTransform", e.transformType = "-ms-transform", e.transitionType = "msTransition", void 0 === t.msTransform) && (e.animType = !1), void 0 !== t.transform && !1 !== e.animType && (e.animType = "transform", e.transformType = "transform", e.transitionType = "transition"), e.transformsEnabled = e.options.useTransform && null !== e.animType && !1 !== e.animType
    }, r.prototype.setSlideClasses = function (e) {
        var t, n, o, i = this,
            s = i.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true");
        i.$slides.eq(e).addClass("slick-current"), !0 === i.options.centerMode ? (n = i.options.slidesToShow % 2 == 0 ? 1 : 0, o = Math.floor(i.options.slidesToShow / 2), !0 === i.options.infinite && ((o <= e && e <= i.slideCount - 1 - o ? i.$slides.slice(e - o + n, e + o + 1) : (t = i.options.slidesToShow + e, s.slice(t - o + 1 + n, t + o + 2))).addClass("slick-active").attr("aria-hidden", "false"), 0 === e ? s.eq(s.length - 1 - i.options.slidesToShow).addClass("slick-center") : e === i.slideCount - 1 && s.eq(i.options.slidesToShow).addClass("slick-center")), i.$slides.eq(e).addClass("slick-center")) : (0 <= e && e <= i.slideCount - i.options.slidesToShow ? i.$slides.slice(e, e + i.options.slidesToShow) : s.length <= i.options.slidesToShow ? s : (n = i.slideCount % i.options.slidesToShow, t = !0 === i.options.infinite ? i.options.slidesToShow + e : e, i.options.slidesToShow == i.options.slidesToScroll && i.slideCount - e < i.options.slidesToShow ? s.slice(t - (i.options.slidesToShow - n), t + n) : s.slice(t, t + i.options.slidesToShow))).addClass("slick-active").attr("aria-hidden", "false"), "ondemand" !== i.options.lazyLoad && "anticipated" !== i.options.lazyLoad || i.lazyLoad()
    }, r.prototype.setupInfinite = function () {
        var e, t, n, o = this;
        if (!0 === o.options.fade && (o.options.centerMode = !1), !0 === o.options.infinite && !1 === o.options.fade && (t = null, o.slideCount > o.options.slidesToShow)) {
            for (n = !0 === o.options.centerMode ? o.options.slidesToShow + 1 : o.options.slidesToShow, e = o.slideCount; e > o.slideCount - n; --e) c(o.$slides[t = e - 1]).clone(!0).attr("id", "").attr("data-slick-index", t - o.slideCount).prependTo(o.$slideTrack).addClass("slick-cloned");
            for (e = 0; e < n + o.slideCount; e += 1) t = e, c(o.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t + o.slideCount).appendTo(o.$slideTrack).addClass("slick-cloned");
            o.$slideTrack.find(".slick-cloned").find("[id]").each(function () {
                c(this).attr("id", "")
            })
        }
    }, r.prototype.interrupt = function (e) {
        e || this.autoPlay(), this.interrupted = e
    }, r.prototype.selectHandler = function (e) {
        e = c(e.target).is(".slick-slide") ? c(e.target) : c(e.target).parents(".slick-slide"), e = (e = parseInt(e.attr("data-slick-index"))) || 0;
        this.slideCount <= this.options.slidesToShow ? this.slideHandler(e, !1, !0) : this.slideHandler(e)
    }, r.prototype.slideHandler = function (e, t, n) {
        var o, i, s, r = this;
        t = t || !1, !0 === r.animating && !0 === r.options.waitForAnimate || !0 === r.options.fade && r.currentSlide === e || (!1 === t && r.asNavFor(e), o = e, t = r.getLeft(o), s = r.getLeft(r.currentSlide), r.currentLeft = null === r.swipeLeft ? s : r.swipeLeft, !1 === r.options.infinite && !1 === r.options.centerMode && (e < 0 || e > r.getDotCount() * r.options.slidesToScroll) || !1 === r.options.infinite && !0 === r.options.centerMode && (e < 0 || e > r.slideCount - r.options.slidesToScroll) ? !1 === r.options.fade && (o = r.currentSlide, !0 !== n ? r.animateSlide(s, function () {
            r.postSlide(o)
        }) : r.postSlide(o)) : (r.options.autoplay && clearInterval(r.autoPlayTimer), i = o < 0 ? r.slideCount % r.options.slidesToScroll != 0 ? r.slideCount - r.slideCount % r.options.slidesToScroll : r.slideCount + o : o >= r.slideCount ? r.slideCount % r.options.slidesToScroll != 0 ? 0 : o - r.slideCount : o, r.animating = !0, r.$slider.trigger("beforeChange", [r, r.currentSlide, i]), e = r.currentSlide, r.currentSlide = i, r.setSlideClasses(r.currentSlide), r.options.asNavFor && (s = (s = r.getNavTarget()).slick("getSlick")).slideCount <= s.options.slidesToShow && s.setSlideClasses(r.currentSlide), r.updateDots(), r.updateArrows(), !0 === r.options.fade ? (!0 !== n ? (r.fadeSlideOut(e), r.fadeSlide(i, function () {
            r.postSlide(i)
        })) : r.postSlide(i), r.animateHeight()) : !0 !== n ? r.animateSlide(t, function () {
            r.postSlide(i)
        }) : r.postSlide(i)))
    }, r.prototype.startLoad = function () {
        var e = this;
        !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.hide(), e.$nextArrow.hide()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.hide(), e.$slider.addClass("slick-loading")
    }, r.prototype.swipeDirection = function () {
        var e = this, t = e.touchObject.startX - e.touchObject.curX, n = e.touchObject.startY - e.touchObject.curY,
            n = Math.atan2(n, t);
        return (t = (t = Math.round(180 * n / Math.PI)) < 0 ? 360 - Math.abs(t) : t) <= 45 && 0 <= t || t <= 360 && 315 <= t ? !1 === e.options.rtl ? "left" : "right" : 135 <= t && t <= 225 ? !1 === e.options.rtl ? "right" : "left" : !0 === e.options.verticalSwiping ? 35 <= t && t <= 135 ? "down" : "up" : "vertical"
    }, r.prototype.swipeEnd = function (e) {
        var t, n, o = this;
        if (o.dragging = !1, o.swiping = !1, o.scrolling) return o.scrolling = !1;
        if (o.interrupted = !1, o.shouldClick = !(10 < o.touchObject.swipeLength), void 0 === o.touchObject.curX) return !1;
        if (!0 === o.touchObject.edgeHit && o.$slider.trigger("edge", [o, o.swipeDirection()]), o.touchObject.swipeLength >= o.touchObject.minSwipe) {
            switch (n = o.swipeDirection()) {
                case"left":
                case"down":
                    t = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide + o.getSlideCount()) : o.currentSlide + o.getSlideCount(), o.currentDirection = 0;
                    break;
                case"right":
                case"up":
                    t = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide - o.getSlideCount()) : o.currentSlide - o.getSlideCount(), o.currentDirection = 1
            }
            "vertical" != n && (o.slideHandler(t), o.touchObject = {}, o.$slider.trigger("swipe", [o, n]))
        } else o.touchObject.startX !== o.touchObject.curX && (o.slideHandler(o.currentSlide), o.touchObject = {})
    }, r.prototype.swipeHandler = function (e) {
        var t = this;
        if (!(!1 === t.options.swipe || "ontouchend" in document && !1 === t.options.swipe || !1 === t.options.draggable && -1 !== e.type.indexOf("mouse"))) switch (t.touchObject.fingerCount = e.originalEvent && void 0 !== e.originalEvent.touches ? e.originalEvent.touches.length : 1, t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold, !0 === t.options.verticalSwiping && (t.touchObject.minSwipe = t.listHeight / t.options.touchThreshold), e.data.action) {
            case"start":
                t.swipeStart(e);
                break;
            case"move":
                t.swipeMove(e);
                break;
            case"end":
                t.swipeEnd(e)
        }
    }, r.prototype.swipeMove = function (e) {
        var t, n, o = this, i = void 0 !== e.originalEvent ? e.originalEvent.touches : null;
        return !(!o.dragging || o.scrolling || i && 1 !== i.length) && (t = o.getLeft(o.currentSlide), o.touchObject.curX = void 0 !== i ? i[0].pageX : e.clientX, o.touchObject.curY = void 0 !== i ? i[0].pageY : e.clientY, o.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(o.touchObject.curX - o.touchObject.startX, 2))), i = Math.round(Math.sqrt(Math.pow(o.touchObject.curY - o.touchObject.startY, 2))), !o.options.verticalSwiping && !o.swiping && 4 < i ? !(o.scrolling = !0) : (!0 === o.options.verticalSwiping && (o.touchObject.swipeLength = i), i = o.swipeDirection(), void 0 !== e.originalEvent && 4 < o.touchObject.swipeLength && (o.swiping = !0, e.preventDefault()), e = (!1 === o.options.rtl ? 1 : -1) * (o.touchObject.curX > o.touchObject.startX ? 1 : -1), !0 === o.options.verticalSwiping && (e = o.touchObject.curY > o.touchObject.startY ? 1 : -1), n = o.touchObject.swipeLength, (o.touchObject.edgeHit = !1) === o.options.infinite && (0 === o.currentSlide && "right" === i || o.currentSlide >= o.getDotCount() && "left" === i) && (n = o.touchObject.swipeLength * o.options.edgeFriction, o.touchObject.edgeHit = !0), !1 === o.options.vertical ? o.swipeLeft = t + n * e : o.swipeLeft = t + n * (o.$list.height() / o.listWidth) * e, !0 === o.options.verticalSwiping && (o.swipeLeft = t + n * e), !0 !== o.options.fade && !1 !== o.options.touchMove && (!0 === o.animating ? (o.swipeLeft = null, !1) : void o.setCSS(o.swipeLeft))))
    }, r.prototype.swipeStart = function (e) {
        var t, n = this;
        if (n.interrupted = !0, 1 !== n.touchObject.fingerCount || n.slideCount <= n.options.slidesToShow) return !(n.touchObject = {});
        void 0 !== e.originalEvent && void 0 !== e.originalEvent.touches && (t = e.originalEvent.touches[0]), n.touchObject.startX = n.touchObject.curX = void 0 !== t ? t.pageX : e.clientX, n.touchObject.startY = n.touchObject.curY = void 0 !== t ? t.pageY : e.clientY, n.dragging = !0
    }, r.prototype.unfilterSlides = r.prototype.slickUnfilter = function () {
        var e = this;
        null !== e.$slidesCache && (e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.appendTo(e.$slideTrack), e.reinit())
    }, r.prototype.unload = function () {
        var e = this;
        c(".slick-cloned", e.$slider).remove(), e.$dots && e.$dots.remove(), e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(), e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(), e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
    }, r.prototype.unslick = function (e) {
        this.$slider.trigger("unslick", [this, e]), this.destroy()
    }, r.prototype.updateArrows = function () {
        var e = this;
        Math.floor(e.options.slidesToShow / 2), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && !e.options.infinite && (e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === e.currentSlide ? (e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : (e.currentSlide >= e.slideCount - e.options.slidesToShow && !1 === e.options.centerMode || e.currentSlide >= e.slideCount - 1 && !0 === e.options.centerMode) && (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
    }, r.prototype.updateDots = function () {
        var e = this;
        null !== e.$dots && (e.$dots.find("li").removeClass("slick-active").end(), e.$dots.find("li").eq(Math.floor(e.currentSlide / e.options.slidesToScroll)).addClass("slick-active"))
    }, r.prototype.visibility = function () {
        this.options.autoplay && (document[this.hidden] ? this.interrupted = !0 : this.interrupted = !1)
    }, c.fn.slick = function () {
        for (var e, t = this, n = arguments[0], o = Array.prototype.slice.call(arguments, 1), i = t.length, s = 0; s < i; s++) if ("object" == typeof n || void 0 === n ? t[s].slick = new r(t[s], n) : e = t[s].slick[n].apply(t[s].slick, o), void 0 !== e) return e;
        return t
    }
}), function (l, r, h) {
    "use strict";

    function n(e, t) {
        var n, o, i, s = [], r = 0;
        e && e.isDefaultPrevented() || (e.preventDefault(), t = t || {}, n = (t = e && e.data ? u(e.data.options, t) : t).$target || h(e.currentTarget).trigger("blur"), (i = h.fancybox.getInstance()) && i.$trigger && i.$trigger.is(n)) || (s = t.selector ? h(t.selector) : (o = n.attr("data-fancybox") || "") ? (s = e.data ? e.data.items : []).length ? s.filter('[data-fancybox="' + o + '"]') : h('[data-fancybox="' + o + '"]') : [n], r = h(s).index(n), (i = h.fancybox.open(s, t, r = r < 0 ? 0 : r)).$trigger = n)
    }

    if (l.console = l.console || {
        info: function (e) {
        }
    }, h) {
        if (h.fn.fancybox) return console.info("fancyBox already initialized");
        var e = {
                closeExisting: !1,
                loop: !1,
                gutter: 50,
                keyboard: !0,
                preventCaptionOverlap: !0,
                arrows: !0,
                infobar: !0,
                smallBtn: "auto",
                toolbar: "auto",
                buttons: ["zoom", "slideShow", "thumbs", "close"],
                idleTime: 3,
                protect: !1,
                modal: !1,
                image: {preload: !1},
                ajax: {settings: {data: {fancybox: !0}}},
                iframe: {
                    tpl: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" allowfullscreen="allowfullscreen" allow="autoplay; fullscreen" src=""></iframe>',
                    preload: !0,
                    css: {},
                    attr: {scrolling: "auto"}
                },
                video: {
                    tpl: '<video class="fancybox-video" controls controlsList="nodownload" poster="{{poster}}"><source src="{{src}}" type="{{format}}" />Sorry, your browser doesn\'t support embedded videos, <a href="{{src}}">download</a> and watch with your favorite video player!</video>',
                    format: "",
                    autoStart: !0
                },
                defaultType: "image",
                animationEffect: "zoom",
                animationDuration: 366,
                zoomOpacity: "auto",
                transitionEffect: "fade",
                transitionDuration: 366,
                slideClass: "",
                baseClass: "",
                baseTpl: '<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-inner"><div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div><div class="fancybox-toolbar">{{buttons}}</div><div class="fancybox-navigation">{{arrows}}</div><div class="fancybox-stage"></div><div class="fancybox-caption"><div class="fancybox-caption__body"></div></div></div></div>',
                spinnerTpl: '<div class="fancybox-loading"></div>',
                errorTpl: '<div class="fancybox-error"><p>{{ERROR}}</p></div>',
                btnTpl: {
                    download: '<a download data-fancybox-download class="fancybox-button fancybox-button--download" title="{{DOWNLOAD}}" href="javascript:;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.62 17.09V19H5.38v-1.91zm-2.97-6.96L17 11.45l-5 4.87-5-4.87 1.36-1.32 2.68 2.64V5h1.92v7.77z"/></svg></a>',
                    zoom: '<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.7 17.3l-3-3a5.9 5.9 0 0 0-.6-7.6 5.9 5.9 0 0 0-8.4 0 5.9 5.9 0 0 0 0 8.4 5.9 5.9 0 0 0 7.7.7l3 3a1 1 0 0 0 1.3 0c.4-.5.4-1 0-1.5zM8.1 13.8a4 4 0 0 1 0-5.7 4 4 0 0 1 5.7 0 4 4 0 0 1 0 5.7 4 4 0 0 1-5.7 0z"/></svg></button>',
                    close: '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 10.6L6.6 5.2 5.2 6.6l5.4 5.4-5.4 5.4 1.4 1.4 5.4-5.4 5.4 5.4 1.4-1.4-5.4-5.4 5.4-5.4-1.4-1.4-5.4 5.4z"/></svg></button>',
                    arrowLeft: '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.28 15.7l-1.34 1.37L5 12l4.94-5.07 1.34 1.38-2.68 2.72H19v1.94H8.6z"/></svg></div></button>',
                    arrowRight: '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.4 12.97l-2.68 2.72 1.34 1.38L19 12l-4.94-5.07-1.34 1.38 2.68 2.72H5v1.94z"/></svg></div></button>',
                    smallBtn: '<button type="button" data-fancybox-close class="fancybox-button fancybox-close-small" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 24 24"><path d="M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z"/></svg></button>'
                },
                parentEl: "body",
                hideScrollbar: !0,
                autoFocus: !0,
                backFocus: !0,
                trapFocus: !0,
                fullScreen: {autoStart: !1},
                touch: {vertical: !0, momentum: !0},
                hash: null,
                media: {},
                slideShow: {autoStart: !1, speed: 3e3},
                thumbs: {autoStart: !1, hideOnClose: !0, parentEl: ".fancybox-container", axis: "y"},
                wheel: "auto",
                onInit: h.noop,
                beforeLoad: h.noop,
                afterLoad: h.noop,
                beforeShow: h.noop,
                afterShow: h.noop,
                beforeClose: h.noop,
                afterClose: h.noop,
                onActivate: h.noop,
                onDeactivate: h.noop,
                clickContent: function (e, t) {
                    return "image" === e.type && "zoom"
                },
                clickSlide: "close",
                clickOutside: "close",
                dblclickContent: !1,
                dblclickSlide: !1,
                dblclickOutside: !1,
                mobile: {
                    preventCaptionOverlap: !1, idleTime: !1, clickContent: function (e, t) {
                        return "image" === e.type && "toggleControls"
                    }, clickSlide: function (e, t) {
                        return "image" === e.type ? "toggleControls" : "close"
                    }, dblclickContent: function (e, t) {
                        return "image" === e.type && "zoom"
                    }, dblclickSlide: function (e, t) {
                        return "image" === e.type && "zoom"
                    }
                },
                lang: "en",
                i18n: {
                    en: {
                        CLOSE: "Close",
                        NEXT: "Next",
                        PREV: "Previous",
                        ERROR: "The requested content cannot be loaded. <br/> Please try again later.",
                        PLAY_START: "Start slideshow",
                        PLAY_STOP: "Pause slideshow",
                        FULL_SCREEN: "Full screen",
                        THUMBS: "Thumbnails",
                        DOWNLOAD: "Download",
                        SHARE: "Share",
                        ZOOM: "Zoom"
                    },
                    de: {
                        CLOSE: "Schlie&szlig;en",
                        NEXT: "Weiter",
                        PREV: "Zur&uuml;ck",
                        ERROR: "Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es sp&auml;ter nochmal.",
                        PLAY_START: "Diaschau starten",
                        PLAY_STOP: "Diaschau beenden",
                        FULL_SCREEN: "Vollbild",
                        THUMBS: "Vorschaubilder",
                        DOWNLOAD: "Herunterladen",
                        SHARE: "Teilen",
                        ZOOM: "Vergr&ouml;&szlig;ern"
                    }
                }
            }, i = h(l), s = h(r), a = 0,
            d = l.requestAnimationFrame || l.webkitRequestAnimationFrame || l.mozRequestAnimationFrame || l.oRequestAnimationFrame || function (e) {
                return l.setTimeout(e, 1e3 / 60)
            },
            t = l.cancelAnimationFrame || l.webkitCancelAnimationFrame || l.mozCancelAnimationFrame || l.oCancelAnimationFrame || function (e) {
                l.clearTimeout(e)
            }, c = function () {
                var e, t = r.createElement("fakeelement"), n = {
                    transition: "transitionend",
                    OTransition: "oTransitionEnd",
                    MozTransition: "transitionend",
                    WebkitTransition: "webkitTransitionEnd"
                };
                for (e in n) if (void 0 !== t.style[e]) return n[e];
                return "transitionend"
            }(), p = function (e) {
                return e && e.length && e[0].offsetHeight
            }, u = function (e, t) {
                var n = h.extend(!0, {}, e, t);
                return h.each(t, function (e, t) {
                    h.isArray(t) && (n[e] = t)
                }), n
            }, o = function (e, t, n) {
                var o = this;
                o.opts = u({index: n}, h.fancybox.defaults), h.isPlainObject(t) && (o.opts = u(o.opts, t)), h.fancybox.isMobile && (o.opts = u(o.opts, o.opts.mobile)), o.id = o.opts.id || ++a, o.currIndex = parseInt(o.opts.index, 10) || 0, o.prevIndex = null, o.prevPos = null, o.currPos = 0, o.firstRun = !0, o.group = [], o.slides = {}, o.addContent(e), o.group.length && o.init()
            };
        h.extend(o.prototype, {
            init: function () {
                var t, n, o = this, i = o.group[o.currIndex].opts;
                i.closeExisting && h.fancybox.close(!0), h("body").addClass("fancybox-active"), !h.fancybox.getInstance() && !1 !== i.hideScrollbar && !h.fancybox.isMobile && r.body.scrollHeight > l.innerHeight && (h("head").append('<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar{margin-right:' + (l.innerWidth - r.documentElement.clientWidth) + "px;}</style>"), h("body").addClass("compensate-for-scrollbar")), n = "", h.each(i.buttons, function (e, t) {
                    n += i.btnTpl[t] || ""
                }), t = h(o.translate(o, i.baseTpl.replace("{{buttons}}", n).replace("{{arrows}}", i.btnTpl.arrowLeft + i.btnTpl.arrowRight))).attr("id", "fancybox-container-" + o.id).addClass(i.baseClass).data("FancyBox", o).appendTo(i.parentEl), o.$refs = {container: t}, ["bg", "inner", "infobar", "toolbar", "stage", "caption", "navigation"].forEach(function (e) {
                    o.$refs[e] = t.find(".fancybox-" + e)
                }), o.trigger("onInit"), o.activate(), o.jumpTo(o.currIndex)
            }, translate: function (e, t) {
                var n = e.opts.i18n[e.opts.lang] || e.opts.i18n.en;
                return t.replace(/\{\{(\w+)\}\}/g, function (e, t) {
                    return void 0 === n[t] ? e : n[t]
                })
            }, addContent: function (e) {
                var r = this, e = h.makeArray(e);
                h.each(e, function (e, t) {
                    var n, o, i = {}, s = {};
                    h.isPlainObject(t) ? s = (i = t).opts || t : "object" === h.type(t) && h(t).length ? (s = (n = h(t)).data() || {}, (s = h.extend(!0, {}, s, s.options)).$orig = n, i.src = r.opts.src || s.src || n.attr("href"), i.type || i.src || (i.type = "inline", i.src = t)) : i = {
                        type: "html",
                        src: t + ""
                    }, i.opts = h.extend(!0, {}, r.opts, s), h.isArray(s.buttons) && (i.opts.buttons = s.buttons), h.fancybox.isMobile && i.opts.mobile && (i.opts = u(i.opts, i.opts.mobile)), n = i.type || i.opts.type, s = i.src || "", !n && s && ((o = s.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i)) ? (n = "video", i.opts.video.format || (i.opts.video.format = "video/" + ("ogv" === o[1] ? "ogg" : o[1]))) : s.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i) ? n = "image" : s.match(/\.(pdf)((\?|#).*)?$/i) ? i = h.extend(!0, i, {
                        contentType: "pdf",
                        opts: {iframe: {preload: !(n = "iframe")}}
                    }) : "#" === s.charAt(0) && (n = "inline")), n ? i.type = n : r.trigger("objectNeedsType", i), i.contentType || (i.contentType = -1 < h.inArray(i.type, ["html", "inline", "ajax"]) ? "html" : i.type), i.index = r.group.length, "auto" == i.opts.smallBtn && (i.opts.smallBtn = -1 < h.inArray(i.type, ["html", "inline", "ajax"])), "auto" === i.opts.toolbar && (i.opts.toolbar = !i.opts.smallBtn), i.$thumb = i.opts.$thumb || null, i.opts.$trigger && i.index === r.opts.index && (i.$thumb = i.opts.$trigger.find("img:first"), i.$thumb.length) && (i.opts.$orig = i.opts.$trigger), i.$thumb && i.$thumb.length || !i.opts.$orig || (i.$thumb = i.opts.$orig.find("img:first")), i.$thumb && !i.$thumb.length && (i.$thumb = null), i.thumb = i.opts.thumb || (i.$thumb ? i.$thumb[0].src : null), "function" === h.type(i.opts.caption) && (i.opts.caption = i.opts.caption.apply(t, [r, i])), "function" === h.type(r.opts.caption) && (i.opts.caption = r.opts.caption.apply(t, [r, i])), i.opts.caption instanceof h || (i.opts.caption = void 0 === i.opts.caption ? "" : i.opts.caption + ""), "ajax" === i.type && 1 < (o = s.split(/\s+/, 2)).length && (i.src = o.shift(), i.opts.filter = o.shift()), i.opts.modal && (i.opts = h.extend(!0, i.opts, {
                        trapFocus: !0,
                        infobar: 0,
                        toolbar: 0,
                        smallBtn: 0,
                        keyboard: 0,
                        slideShow: 0,
                        fullScreen: 0,
                        thumbs: 0,
                        touch: 0,
                        clickContent: !1,
                        clickSlide: !1,
                        clickOutside: !1,
                        dblclickContent: !1,
                        dblclickSlide: !1,
                        dblclickOutside: !1
                    })), r.group.push(i)
                }), Object.keys(r.slides).length && (r.updateControls(), e = r.Thumbs) && e.isActive && (e.create(), e.focus())
            }, addEvents: function () {
                var o = this;
                o.removeEvents(), o.$refs.container.on("click.fb-close", "[data-fancybox-close]", function (e) {
                    e.stopPropagation(), e.preventDefault(), o.close(e)
                }).on("touchstart.fb-prev click.fb-prev", "[data-fancybox-prev]", function (e) {
                    e.stopPropagation(), e.preventDefault(), o.previous()
                }).on("touchstart.fb-next click.fb-next", "[data-fancybox-next]", function (e) {
                    e.stopPropagation(), e.preventDefault(), o.next()
                }).on("click.fb", "[data-fancybox-zoom]", function (e) {
                    o[o.isScaledDown() ? "scaleToActual" : "scaleToFit"]()
                }), i.on("orientationchange.fb resize.fb", function (e) {
                    e && e.originalEvent && "resize" === e.originalEvent.type ? (o.requestId && t(o.requestId), o.requestId = d(function () {
                        o.update(e)
                    })) : (o.current && "iframe" === o.current.type && o.$refs.stage.hide(), setTimeout(function () {
                        o.$refs.stage.show(), o.update(e)
                    }, h.fancybox.isMobile ? 600 : 250))
                }), s.on("keydown.fb", function (e) {
                    var t = (h.fancybox ? h.fancybox.getInstance() : null).current, n = e.keyCode || e.which;
                    if (9 != n) return !t.opts.keyboard || e.ctrlKey || e.altKey || e.shiftKey || h(e.target).is("input,textarea,video,audio,select") ? void 0 : 8 === n || 27 === n ? (e.preventDefault(), void o.close(e)) : 37 === n || 38 === n ? (e.preventDefault(), void o.previous()) : 39 === n || 40 === n ? (e.preventDefault(), void o.next()) : void o.trigger("afterKeydown", e, n);
                    t.opts.trapFocus && o.focus(e)
                }), o.group[o.currIndex].opts.idleTime && (o.idleSecondsCounter = 0, s.on("mousemove.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle", function (e) {
                    o.idleSecondsCounter = 0, o.isIdle && o.showControls(), o.isIdle = !1
                }), o.idleInterval = l.setInterval(function () {
                    ++o.idleSecondsCounter >= o.group[o.currIndex].opts.idleTime && !o.isDragging && (o.isIdle = !0, o.idleSecondsCounter = 0, o.hideControls())
                }, 1e3))
            }, removeEvents: function () {
                i.off("orientationchange.fb resize.fb"), s.off("keydown.fb .fb-idle"), this.$refs.container.off(".fb-close .fb-prev .fb-next"), this.idleInterval && (l.clearInterval(this.idleInterval), this.idleInterval = null)
            }, previous: function (e) {
                return this.jumpTo(this.currPos - 1, e)
            }, next: function (e) {
                return this.jumpTo(this.currPos + 1, e)
            }, jumpTo: function (e, o) {
                var t, n, i, s, r, a, l, c, d = this, u = d.group.length;
                if (!(d.isDragging || d.isClosing || d.isAnimating && d.firstRun)) {
                    if (e = parseInt(e, 10), !(n = (d.current || d).opts.loop) && (e < 0 || u <= e)) return !1;
                    (t = d.firstRun = !Object.keys(d.slides).length, s = d.current, d.prevIndex = d.currIndex, d.prevPos = d.currPos, i = d.createSlide(e), 1 < u && ((n || i.index < u - 1) && d.createSlide(e + 1), n || 0 < i.index) && d.createSlide(e - 1), d.current = i, d.currIndex = i.index, d.currPos = i.pos, d.trigger("beforeShow", t), d.updateControls(), i.forcedDuration = void 0, h.isNumeric(o) ? i.forcedDuration = o : o = i.opts[t ? "animationDuration" : "transitionDuration"], o = parseInt(o, 10), u = d.isMoved(i), i.$slide.addClass("fancybox-slide--current"), t) ? (i.opts.animationEffect && o && d.$refs.container.css("transition-duration", o + "ms"), d.$refs.container.addClass("fancybox-is-open").trigger("focus"), d.loadSlide(i), d.preload("image")) : (r = h.fancybox.getTranslate(s.$slide), a = h.fancybox.getTranslate(d.$refs.stage), h.each(d.slides, function (e, t) {
                        h.fancybox.stop(t.$slide, !0)
                    }), s.pos !== i.pos && (s.isComplete = !1), s.$slide.removeClass("fancybox-slide--complete fancybox-slide--current"), u ? (c = r.left - (s.pos * r.width + s.pos * s.opts.gutter), h.each(d.slides, function (e, t) {
                        t.$slide.removeClass("fancybox-animated").removeClass(function (e, t) {
                            return (t.match(/(^|\s)fancybox-fx-\S+/g) || []).join(" ")
                        });
                        var n = t.pos * r.width + t.pos * t.opts.gutter;
                        h.fancybox.setTranslate(t.$slide, {
                            top: 0,
                            left: n - a.left + c
                        }), t.pos !== i.pos && t.$slide.addClass("fancybox-slide--" + (t.pos > i.pos ? "next" : "previous")), p(t.$slide), h.fancybox.animate(t.$slide, {
                            top: 0,
                            left: (t.pos - i.pos) * r.width + (t.pos - i.pos) * t.opts.gutter
                        }, o, function () {
                            t.$slide.css({
                                transform: "",
                                opacity: ""
                            }).removeClass("fancybox-slide--next fancybox-slide--previous"), t.pos === d.currPos && d.complete()
                        })
                    })) : o && i.opts.transitionEffect && (l = "fancybox-animated fancybox-fx-" + i.opts.transitionEffect, s.$slide.addClass("fancybox-slide--" + (s.pos > i.pos ? "next" : "previous")), h.fancybox.animate(s.$slide, l, o, function () {
                        s.$slide.removeClass(l).removeClass("fancybox-slide--next fancybox-slide--previous")
                    }, !1)), i.isLoaded ? d.revealContent(i) : d.loadSlide(i), d.preload("image"))
                }
            }, createSlide: function (e) {
                var t, n = this, o = e % n.group.length;
                return o = o < 0 ? n.group.length + o : o, !n.slides[e] && n.group[o] && (t = h('<div class="fancybox-slide"></div>').appendTo(n.$refs.stage), n.slides[e] = h.extend(!0, {}, n.group[o], {
                    pos: e,
                    $slide: t,
                    isLoaded: !1
                }), n.updateSlide(n.slides[e])), n.slides[e]
            }, scaleToActual: function (e, t, n) {
                var o, i, s, r, a = this, l = a.current, c = l.$content, d = h.fancybox.getTranslate(l.$slide).width,
                    u = h.fancybox.getTranslate(l.$slide).height, p = l.width, f = l.height;
                a.isAnimating || a.isMoved() || !c || "image" != l.type || !l.isLoaded || l.hasError || (a.isAnimating = !0, h.fancybox.stop(c), e = void 0 === e ? .5 * d : e, t = void 0 === t ? .5 * u : t, (o = h.fancybox.getTranslate(c)).top -= h.fancybox.getTranslate(l.$slide).top, o.left -= h.fancybox.getTranslate(l.$slide).left, l = p / o.width, r = f / o.height, i = .5 * d - .5 * p, s = .5 * u - .5 * f, d < p && (i = 0 < (i = o.left * l - (e * l - e)) ? 0 : i) < d - p && (i = d - p), u < f && (s = 0 < (s = o.top * r - (t * r - t)) ? 0 : s) < u - f && (s = u - f), a.updateCursor(p, f), h.fancybox.animate(c, {
                    top: s,
                    left: i,
                    scaleX: l,
                    scaleY: r
                }, n || 366, function () {
                    a.isAnimating = !1
                }), a.SlideShow && a.SlideShow.isActive && a.SlideShow.stop())
            }, scaleToFit: function (e) {
                var t = this, n = t.current, o = n.$content;
                t.isAnimating || t.isMoved() || !o || "image" != n.type || !n.isLoaded || n.hasError || (t.isAnimating = !0, h.fancybox.stop(o), n = t.getFitPos(n), t.updateCursor(n.width, n.height), h.fancybox.animate(o, {
                    top: n.top,
                    left: n.left,
                    scaleX: n.width / o.width(),
                    scaleY: n.height / o.height()
                }, e || 366, function () {
                    t.isAnimating = !1
                }))
            }, getFitPos: function (e) {
                var t, n, o = e.$content, i = e.$slide, s = e.width || e.opts.width, r = e.height || e.opts.height,
                    a = {};
                return !!(e.isLoaded && o && o.length) && (t = h.fancybox.getTranslate(this.$refs.stage).width, n = h.fancybox.getTranslate(this.$refs.stage).height, t -= parseFloat(i.css("paddingLeft")) + parseFloat(i.css("paddingRight")) + parseFloat(o.css("marginLeft")) + parseFloat(o.css("marginRight")), n -= parseFloat(i.css("paddingTop")) + parseFloat(i.css("paddingBottom")) + parseFloat(o.css("marginTop")) + parseFloat(o.css("marginBottom")), s && r || (s = t, r = n), t - .5 < (s *= o = Math.min(1, t / s, n / r)) && (s = t), n - .5 < (r *= o) && (r = n), "image" === e.type ? (a.top = Math.floor(.5 * (n - r)) + parseFloat(i.css("paddingTop")), a.left = Math.floor(.5 * (t - s)) + parseFloat(i.css("paddingLeft"))) : "video" === e.contentType && (s / (o = e.opts.width && e.opts.height ? s / r : e.opts.ratio || 16 / 9) < r ? r = s / o : r * o < s && (s = r * o)), a.width = s, a.height = r, a)
            }, update: function (n) {
                var o = this;
                h.each(o.slides, function (e, t) {
                    o.updateSlide(t, n)
                })
            }, updateSlide: function (e, t) {
                var n = this, o = e && e.$content, i = e.width || e.opts.width, s = e.height || e.opts.height,
                    r = e.$slide;
                n.adjustCaption(e), o && (i || s || "video" === e.contentType) && !e.hasError && (h.fancybox.stop(o), h.fancybox.setTranslate(o, n.getFitPos(e)), e.pos === n.currPos) && (n.isAnimating = !1, n.updateCursor()), n.adjustLayout(e), r.length && (r.trigger("refresh"), e.pos === n.currPos) && n.$refs.toolbar.add(n.$refs.navigation.find(".fancybox-button--arrow_right")).toggleClass("compensate-for-scrollbar", r.get(0).scrollHeight > r.get(0).clientHeight), n.trigger("onUpdate", e, t)
            }, centerSlide: function (e) {
                var t = this, n = t.current, o = n.$slide;
                !t.isClosing && n && (o.siblings().css({
                    transform: "",
                    opacity: ""
                }), o.parent().children().removeClass("fancybox-slide--previous fancybox-slide--next"), h.fancybox.animate(o, {
                    top: 0,
                    left: 0,
                    opacity: 1
                }, void 0 === e ? 0 : e, function () {
                    o.css({transform: "", opacity: ""}), n.isComplete || t.complete()
                }, !1))
            }, isMoved: function (e) {
                var t, n, e = e || this.current;
                return !!e && (n = h.fancybox.getTranslate(this.$refs.stage), t = h.fancybox.getTranslate(e.$slide), !e.$slide.hasClass("fancybox-animated")) && (.5 < Math.abs(t.top - n.top) || .5 < Math.abs(t.left - n.left))
            }, updateCursor: function (e, t) {
                var n = this, o = n.current, i = n.$refs.container;
                o && !n.isClosing && n.Guestures && (i.removeClass("fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-zoomOut fancybox-can-swipe fancybox-can-pan"), t = !!(e = n.canPan(e, t)) || n.isZoomable(), i.toggleClass("fancybox-is-zoomable", t), h("[data-fancybox-zoom]").prop("disabled", !t), e ? i.addClass("fancybox-can-pan") : t && ("zoom" === o.opts.clickContent || h.isFunction(o.opts.clickContent) && "zoom" == o.opts.clickContent(o)) ? i.addClass("fancybox-can-zoomIn") : o.opts.touch && (o.opts.touch.vertical || 1 < n.group.length) && "video" !== o.contentType && i.addClass("fancybox-can-swipe"))
            }, isZoomable: function () {
                var e, t = this.current;
                if (t && !this.isClosing && "image" === t.type && !t.hasError) {
                    if (!t.isLoaded) return !0;
                    if ((e = this.getFitPos(t)) && (t.width > e.width || t.height > e.height)) return !0
                }
                return !1
            }, isScaledDown: function (e, t) {
                var n = !1, o = this.current, i = o.$content;
                return void 0 !== e && void 0 !== t ? n = e < o.width && t < o.height : i && (n = (n = h.fancybox.getTranslate(i)).width < o.width && n.height < o.height), n
            }, canPan: function (e, t) {
                var n = this.current, o = null, i = !1;
                return i = "image" === n.type && (n.isComplete || e && t) && !n.hasError && (i = this.getFitPos(n), void 0 !== e && void 0 !== t ? o = {
                    width: e,
                    height: t
                } : n.isComplete && (o = h.fancybox.getTranslate(n.$content)), o) ? i && (1.5 < Math.abs(o.width - i.width) || 1.5 < Math.abs(o.height - i.height)) : i
            }, loadSlide: function (n) {
                var e, t, o, i = this;
                if (!n.isLoading && !n.isLoaded) {
                    if (!(n.isLoading = !0) === i.trigger("beforeLoad", n)) return n.isLoading = !1;
                    switch (e = n.type, (t = n.$slide).off("refresh").trigger("onReset").addClass(n.opts.slideClass), e) {
                        case"image":
                            i.setImage(n);
                            break;
                        case"iframe":
                            i.setIframe(n);
                            break;
                        case"html":
                            i.setContent(n, n.src || n.content);
                            break;
                        case"video":
                            i.setContent(n, n.opts.video.tpl.replace(/\{\{src\}\}/gi, n.src).replace("{{format}}", n.opts.videoFormat || n.opts.video.format || "").replace("{{poster}}", n.thumb || ""));
                            break;
                        case"inline":
                            h(n.src).length ? i.setContent(n, h(n.src)) : i.setError(n);
                            break;
                        case"ajax":
                            i.showLoading(n), o = h.ajax(h.extend({}, n.opts.ajax.settings, {
                                url: n.src,
                                success: function (e, t) {
                                    "success" === t && i.setContent(n, e)
                                },
                                error: function (e, t) {
                                    e && "abort" !== t && i.setError(n)
                                }
                            })), t.one("onReset", function () {
                                o.abort()
                            });
                            break;
                        default:
                            i.setError(n)
                    }
                    return !0
                }
            }, setImage: function (t) {
                var e, n = this;
                setTimeout(function () {
                    var e = t.$image;
                    n.isClosing || !t.isLoading || e && e.length && e[0].complete || t.hasError || n.showLoading(t)
                }, 50), n.checkSrcset(t), t.$content = h('<div class="fancybox-content"></div>').addClass("fancybox-is-hidden").appendTo(t.$slide.addClass("fancybox-slide--image")), !1 !== t.opts.preload && t.opts.width && t.opts.height && t.thumb && (t.width = t.opts.width, t.height = t.opts.height, (e = r.createElement("img")).onerror = function () {
                    h(this).remove(), t.$ghost = null
                }, e.onload = function () {
                    n.afterLoad(t)
                }, t.$ghost = h(e).addClass("fancybox-image").appendTo(t.$content).attr("src", t.thumb)), n.setBigImage(t)
            }, checkSrcset: function (e) {
                var t, n, o, i, s = e.opts.srcset || e.opts.image.srcset;
                if (s) {
                    o = l.devicePixelRatio || 1, i = l.innerWidth * o, (n = s.split(",").map(function (e) {
                        var o = {};
                        return e.trim().split(/\s+/).forEach(function (e, t) {
                            var n = parseInt(e.substring(0, e.length - 1), 10);
                            if (0 === t) return o.url = e;
                            n && (o.value = n, o.postfix = e[e.length - 1])
                        }), o
                    })).sort(function (e, t) {
                        return e.value - t.value
                    });
                    for (var r = 0; r < n.length; r++) {
                        var a = n[r];
                        if ("w" === a.postfix && a.value >= i || "x" === a.postfix && a.value >= o) {
                            t = a;
                            break
                        }
                    }
                    (t = !t && n.length ? n[n.length - 1] : t) && (e.src = t.url, e.width && e.height && "w" == t.postfix && (e.height = e.width / e.height * t.value, e.width = t.value), e.opts.srcset = s)
                }
            }, setBigImage: function (t) {
                var n = this, e = r.createElement("img"), o = h(e);
                t.$image = o.one("error", function () {
                    n.setError(t)
                }).one("load", function () {
                    var e;
                    t.$ghost || (n.resolveImageSlideSize(t, this.naturalWidth, this.naturalHeight), n.afterLoad(t)), n.isClosing || (t.opts.srcset && ((e = t.opts.sizes) && "auto" !== e || (e = (1 < t.width / t.height && 1 < i.width() / i.height() ? "100" : Math.round(t.width / t.height * 100)) + "vw"), o.attr("sizes", e).attr("srcset", t.opts.srcset)), t.$ghost && setTimeout(function () {
                        t.$ghost && !n.isClosing && t.$ghost.hide()
                    }, Math.min(300, Math.max(1e3, t.height / 1600))), n.hideLoading(t))
                }).addClass("fancybox-image").attr("src", t.src).appendTo(t.$content), (e.complete || "complete" == e.readyState) && o.naturalWidth && o.naturalHeight ? o.trigger("load") : e.error && o.trigger("error")
            }, resolveImageSlideSize: function (e, t, n) {
                var o = parseInt(e.opts.width, 10), i = parseInt(e.opts.height, 10);
                e.width = t, e.height = n, 0 < o && (e.width = o, e.height = Math.floor(o * n / t)), 0 < i && (e.width = Math.floor(i * t / n), e.height = i)
            }, setIframe: function (i) {
                var s, t = this, r = i.opts.iframe, a = i.$slide;
                i.$content = h('<div class="fancybox-content' + (r.preload ? " fancybox-is-hidden" : "") + '"></div>').css(r.css).appendTo(a), a.addClass("fancybox-slide--" + i.contentType), i.$iframe = s = h(r.tpl.replace(/\{rnd\}/g, (new Date).getTime())).attr(r.attr).appendTo(i.$content), r.preload ? (t.showLoading(i), s.on("load.fb error.fb", function (e) {
                    this.isReady = 1, i.$slide.trigger("refresh"), t.afterLoad(i)
                }), a.on("refresh.fb", function () {
                    var e, t = i.$content, n = r.css.width, o = r.css.height;
                    if (1 === s[0].isReady) {
                        try {
                            e = s.contents().find("body")
                        } catch (e) {
                        }
                        e && e.length && e.children().length && (a.css("overflow", "visible"), t.css({
                            width: "100%",
                            "max-width": "100%",
                            height: "9999px"
                        }), void 0 === n && (n = Math.ceil(Math.max(e[0].clientWidth, e.outerWidth(!0)))), t.css("width", n || "").css("max-width", ""), void 0 === o && (o = Math.ceil(Math.max(e[0].clientHeight, e.outerHeight(!0)))), t.css("height", o || ""), a.css("overflow", "auto")), t.removeClass("fancybox-is-hidden")
                    }
                })) : t.afterLoad(i), s.attr("src", i.src), a.one("onReset", function () {
                    try {
                        h(this).find("iframe").hide().unbind().attr("src", "//about:blank")
                    } catch (e) {
                    }
                    h(this).off("refresh.fb").empty(), i.isLoaded = !1, i.isRevealed = !1
                })
            }, setContent: function (e, t) {
                var n;
                this.isClosing || (this.hideLoading(e), e.$content && h.fancybox.stop(e.$content), e.$slide.empty(), (n = t) && n.hasOwnProperty && n instanceof h && t.parent().length ? ((t.hasClass("fancybox-content") || t.parent().hasClass("fancybox-content")) && t.parents(".fancybox-slide").trigger("onReset"), e.$placeholder = h("<div>").hide().insertAfter(t), t.css("display", "inline-block")) : e.hasError || ("string" === h.type(t) && (t = h("<div>").append(h.trim(t)).contents()), e.opts.filter && (t = h("<div>").html(t).find(e.opts.filter))), e.$slide.one("onReset", function () {
                    h(this).find("video,audio").trigger("pause"), e.$placeholder && (e.$placeholder.after(t.removeClass("fancybox-content").hide()).remove(), e.$placeholder = null), e.$smallBtn && (e.$smallBtn.remove(), e.$smallBtn = null), e.hasError || (h(this).empty(), e.isLoaded = !1, e.isRevealed = !1)
                }), h(t).appendTo(e.$slide), h(t).is("video,audio") && (h(t).addClass("fancybox-video"), h(t).wrap("<div></div>"), e.contentType = "video", e.opts.width = e.opts.width || h(t).attr("width"), e.opts.height = e.opts.height || h(t).attr("height")), e.$content = e.$slide.children().filter("div,form,main,video,audio,article,.fancybox-content").first(), e.$content.siblings().hide(), e.$content.length || (e.$content = e.$slide.wrapInner("<div></div>").children().first()), e.$content.addClass("fancybox-content"), e.$slide.addClass("fancybox-slide--" + e.contentType), this.afterLoad(e))
            }, setError: function (e) {
                e.hasError = !0, e.$slide.trigger("onReset").removeClass("fancybox-slide--" + e.contentType).addClass("fancybox-slide--error"), e.contentType = "html", this.setContent(e, this.translate(e, e.opts.errorTpl)), e.pos === this.currPos && (this.isAnimating = !1)
            }, showLoading: function (e) {
                (e = e || this.current) && !e.$spinner && (e.$spinner = h(this.translate(this, this.opts.spinnerTpl)).appendTo(e.$slide).hide().fadeIn("fast"))
            }, hideLoading: function (e) {
                (e = e || this.current) && e.$spinner && (e.$spinner.stop().remove(), delete e.$spinner)
            }, afterLoad: function (e) {
                var t = this;
                t.isClosing || (e.isLoading = !1, e.isLoaded = !0, t.trigger("afterLoad", e), t.hideLoading(e), !e.opts.smallBtn || e.$smallBtn && e.$smallBtn.length || (e.$smallBtn = h(t.translate(e, e.opts.btnTpl.smallBtn)).appendTo(e.$content)), e.opts.protect && e.$content && !e.hasError && (e.$content.on("contextmenu.fb", function (e) {
                    return 2 == e.button && e.preventDefault(), !0
                }), "image" === e.type) && h('<div class="fancybox-spaceball"></div>').appendTo(e.$content), t.adjustCaption(e), t.adjustLayout(e), e.pos === t.currPos && t.updateCursor(), t.revealContent(e))
            }, adjustCaption: function (e) {
                var t = this, e = e || t.current, n = e.opts.caption, o = e.opts.preventCaptionOverlap,
                    i = t.$refs.caption, s = !1;
                i.toggleClass("fancybox-caption--separate", o), o && n && n.length && (e.pos !== t.currPos ? ((o = i.clone().appendTo(i.parent())).children().eq(0).empty().html(n), s = o.outerHeight(!0), o.empty().remove()) : t.$caption && (s = t.$caption.outerHeight(!0)), e.$slide.css("padding-bottom", s || ""))
            }, adjustLayout: function (e) {
                var t, n, o, i, e = e || this.current;
                e.isLoaded && !0 !== e.opts.disableLayoutFix && (e.$content.css("margin-bottom", ""), e.$content.outerHeight() > e.$slide.height() + .5 && (o = e.$slide[0].style["padding-bottom"], i = e.$slide.css("padding-bottom"), 0 < parseFloat(i)) && (t = e.$slide[0].scrollHeight, e.$slide.css("padding-bottom", 0), Math.abs(t - e.$slide[0].scrollHeight) < 1 && (n = i), e.$slide.css("padding-bottom", o)), e.$content.css("margin-bottom", n))
            }, revealContent: function (e) {
                var t, n, o, i, s = this, r = e.$slide, a = !1, l = !1, c = s.isMoved(e), d = e.isRevealed;
                return e.isRevealed = !0, t = e.opts[s.firstRun ? "animationEffect" : "transitionEffect"], o = e.opts[s.firstRun ? "animationDuration" : "transitionDuration"], o = parseInt(void 0 === e.forcedDuration ? o : e.forcedDuration, 10), "zoom" === (t = !c && e.pos === s.currPos && o ? t : !1) && (e.pos === s.currPos && o && "image" === e.type && !e.hasError && (l = s.getThumbPos(e)) ? a = s.getFitPos(e) : t = "fade"), "zoom" === t ? (s.isAnimating = !0, a.scaleX = a.width / l.width, a.scaleY = a.height / l.height, (i = "auto" == (i = e.opts.zoomOpacity) ? .1 < Math.abs(e.width / e.height - l.width / l.height) : i) && (l.opacity = .1, a.opacity = 1), h.fancybox.setTranslate(e.$content.removeClass("fancybox-is-hidden"), l), p(e.$content), void h.fancybox.animate(e.$content, a, o, function () {
                    s.isAnimating = !1, s.complete()
                })) : (s.updateSlide(e), t ? (h.fancybox.stop(r), n = "fancybox-slide--" + (e.pos >= s.prevPos ? "next" : "previous") + " fancybox-animated fancybox-fx-" + t, r.addClass(n).removeClass("fancybox-slide--current"), e.$content.removeClass("fancybox-is-hidden"), p(r), "image" !== e.type && e.$content.hide().show(0), void h.fancybox.animate(r, "fancybox-slide--current", o, function () {
                    r.removeClass(n).css({transform: "", opacity: ""}), e.pos === s.currPos && s.complete()
                }, !0)) : (e.$content.removeClass("fancybox-is-hidden"), d || !c || "image" !== e.type || e.hasError || e.$content.hide().fadeIn("fast"), void (e.pos === s.currPos && s.complete())))
            }, getThumbPos: function (e) {
                var t, n, o, i, e = e.$thumb;
                return !(!e || !(o = e[0]) || o.ownerDocument !== r || (h(".fancybox-container").css("pointer-events", "none"), i = {
                    x: o.getBoundingClientRect().left + o.offsetWidth / 2,
                    y: o.getBoundingClientRect().top + o.offsetHeight / 2
                }, i = r.elementFromPoint(i.x, i.y) === o, h(".fancybox-container").css("pointer-events", ""), !i)) && (o = h.fancybox.getTranslate(e), i = parseFloat(e.css("border-top-width") || 0), n = parseFloat(e.css("border-right-width") || 0), t = parseFloat(e.css("border-bottom-width") || 0), e = parseFloat(e.css("border-left-width") || 0), n = {
                    top: o.top + i,
                    left: o.left + e,
                    width: o.width - n - e,
                    height: o.height - i - t,
                    scaleX: 1,
                    scaleY: 1
                }, 0 < o.width) && 0 < o.height && n
            }, complete: function () {
                var e, n = this, t = n.current, o = {};
                !n.isMoved() && t.isLoaded && (t.isComplete || (t.isComplete = !0, t.$slide.siblings().trigger("onReset"), n.preload("inline"), p(t.$slide), t.$slide.addClass("fancybox-slide--complete"), h.each(n.slides, function (e, t) {
                    t.pos >= n.currPos - 1 && t.pos <= n.currPos + 1 ? o[t.pos] = t : t && (h.fancybox.stop(t.$slide), t.$slide.off().remove())
                }), n.slides = o), n.isAnimating = !1, n.updateCursor(), n.trigger("afterShow"), t.opts.video.autoStart && t.$slide.find("video,audio").filter(":visible:first").trigger("play").one("ended", function () {
                    Document.exitFullscreen ? Document.exitFullscreen() : this.webkitExitFullscreen && this.webkitExitFullscreen(), n.next()
                }), t.opts.autoFocus && "html" === t.contentType && ((e = t.$content.find("input[autofocus]:enabled:visible:first")).length ? e.trigger("focus") : n.focus(null, !0)), t.$slide.scrollTop(0).scrollLeft(0))
            }, preload: function (e) {
                var t, n, o = this;
                o.group.length < 2 || (n = o.slides[o.currPos + 1], (t = o.slides[o.currPos - 1]) && t.type === e && o.loadSlide(t), n && n.type === e && o.loadSlide(n))
            }, focus: function (e, t) {
                var n = this,
                    o = ["a[href]", "area[href]", 'input:not([disabled]):not([type="hidden"]):not([aria-hidden])', "select:not([disabled]):not([aria-hidden])", "textarea:not([disabled]):not([aria-hidden])", "button:not([disabled]):not([aria-hidden])", "iframe", "object", "embed", "video", "audio", "[contenteditable]", '[tabindex]:not([tabindex^="-"])'].join(",");
                n.isClosing || ((t = (t = !e && n.current && n.current.isComplete ? n.current.$slide.find("*:visible" + (t ? ":not(.fancybox-close-small)" : "")) : n.$refs.container.find("*:visible")).filter(o).filter(function () {
                    return "hidden" !== h(this).css("visibility") && !h(this).hasClass("disabled")
                })).length ? (o = t.index(r.activeElement), e && e.shiftKey ? (o < 0 || 0 == o) && (e.preventDefault(), t.eq(t.length - 1).trigger("focus")) : (o < 0 || o == t.length - 1) && (e && e.preventDefault(), t.eq(0).trigger("focus"))) : n.$refs.container.trigger("focus"))
            }, activate: function () {
                var t = this;
                h(".fancybox-container").each(function () {
                    var e = h(this).data("FancyBox");
                    e && e.id !== t.id && !e.isClosing && (e.trigger("onDeactivate"), e.removeEvents(), e.isVisible = !1)
                }), t.isVisible = !0, (t.current || t.isIdle) && (t.update(), t.updateControls()), t.trigger("onActivate"), t.addEvents()
            }, close: function (e, t) {
                function n() {
                    l.cleanUp(e)
                }

                var o, i, s, r, a, l = this, c = l.current;
                return !l.isClosing && (!(l.isClosing = !0) === l.trigger("beforeClose", e) ? (l.isClosing = !1, d(function () {
                    l.update()
                }), !1) : (l.removeEvents(), i = c.$content, o = c.opts.animationEffect, t = h.isNumeric(t) ? t : o ? c.opts.animationDuration : 0, c.$slide.removeClass("fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated"), !0 !== e ? h.fancybox.stop(c.$slide) : o = !1, c.$slide.siblings().trigger("onReset").remove(), t && l.$refs.container.removeClass("fancybox-is-open").addClass("fancybox-is-closing").css("transition-duration", t + "ms"), l.hideLoading(c), l.hideControls(!0), l.updateCursor(), "zoom" === (o = "zoom" !== o || i && t && "image" === c.type && !l.isMoved() && !c.hasError && (a = l.getThumbPos(c)) ? o : "fade") ? (h.fancybox.stop(i), r = {
                    top: (r = h.fancybox.getTranslate(i)).top,
                    left: r.left,
                    scaleX: r.width / a.width,
                    scaleY: r.height / a.height,
                    width: a.width,
                    height: a.height
                }, (s = "auto" == (s = c.opts.zoomOpacity) ? .1 < Math.abs(c.width / c.height - a.width / a.height) : s) && (a.opacity = 0), h.fancybox.setTranslate(i, r), p(i), h.fancybox.animate(i, a, t, n)) : o && t ? h.fancybox.animate(c.$slide.addClass("fancybox-slide--previous").removeClass("fancybox-slide--current"), "fancybox-animated fancybox-fx-" + o, t, n) : !0 === e ? setTimeout(n, t) : n(), !0))
            }, cleanUp: function (e) {
                var t, n = this, o = n.current.opts.$orig;
                n.current.$slide.trigger("onReset"), n.$refs.container.empty().remove(), n.trigger("afterClose", e), n.current.opts.backFocus && (o = o && o.length && o.is(":visible") ? o : n.$trigger) && o.length && (e = l.scrollX, t = l.scrollY, o.trigger("focus"), h("html, body").scrollTop(t).scrollLeft(e)), n.current = null, (o = h.fancybox.getInstance()) ? o.activate() : (h("body").removeClass("fancybox-active compensate-for-scrollbar"), h("#fancybox-style-noscroll").remove())
            }, trigger: function (e, t) {
                var n, o = Array.prototype.slice.call(arguments, 1), i = this, t = t && t.opts ? t : i.current;
                if (t ? o.unshift(t) : t = i, o.unshift(i), !1 === (n = h.isFunction(t.opts[e]) ? t.opts[e].apply(t, o) : n)) return n;
                ("afterClose" !== e && i.$refs ? i.$refs.container : s).trigger(e + ".fb", o)
            }, updateControls: function () {
                var e = this, t = e.current, n = t.index, o = e.$refs.container, i = e.$refs.caption,
                    s = t.opts.caption;
                t.$slide.trigger("refresh"), s && s.length ? (e.$caption = i).children().eq(0).html(s) : e.$caption = null, e.hasHiddenControls || e.isIdle || e.showControls(), o.find("[data-fancybox-count]").html(e.group.length), o.find("[data-fancybox-index]").html(n + 1), o.find("[data-fancybox-prev]").prop("disabled", !t.opts.loop && n <= 0), o.find("[data-fancybox-next]").prop("disabled", !t.opts.loop && n >= e.group.length - 1), "image" === t.type ? o.find("[data-fancybox-zoom]").show().end().find("[data-fancybox-download]").attr("href", t.opts.image.src || t.src).show() : t.opts.toolbar && o.find("[data-fancybox-download],[data-fancybox-zoom]").hide(), h(r.activeElement).is(":hidden,[disabled]") && e.$refs.container.trigger("focus")
            }, hideControls: function (e) {
                var t = ["infobar", "toolbar", "nav"];
                !e && this.current.opts.preventCaptionOverlap || t.push("caption"), this.$refs.container.removeClass(t.map(function (e) {
                    return "fancybox-show-" + e
                }).join(" ")), this.hasHiddenControls = !0
            }, showControls: function () {
                var e = this, t = (e.current || e).opts, n = e.$refs.container;
                e.hasHiddenControls = !1, e.idleSecondsCounter = 0, n.toggleClass("fancybox-show-toolbar", !(!t.toolbar || !t.buttons)).toggleClass("fancybox-show-infobar", !!(t.infobar && 1 < e.group.length)).toggleClass("fancybox-show-caption", !!e.$caption).toggleClass("fancybox-show-nav", !!(t.arrows && 1 < e.group.length)).toggleClass("fancybox-is-modal", !!t.modal)
            }, toggleControls: function () {
                this.hasHiddenControls ? this.showControls() : this.hideControls()
            }
        }), h.fancybox = {
            version: "3.5.7",
            defaults: e,
            getInstance: function (e) {
                var t = h('.fancybox-container:not(".fancybox-is-closing"):last').data("FancyBox"),
                    n = Array.prototype.slice.call(arguments, 1);
                return t instanceof o && ("string" === h.type(e) ? t[e].apply(t, n) : "function" === h.type(e) && e.apply(t, n), t)
            },
            open: function (e, t, n) {
                return new o(e, t, n)
            },
            close: function (e) {
                var t = this.getInstance();
                t && (t.close(), !0 === e) && this.close(e)
            },
            destroy: function () {
                this.close(!0), s.add("body").off("click.fb-start", "**")
            },
            isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
            use3d: (e = r.createElement("div"), l.getComputedStyle && l.getComputedStyle(e) && l.getComputedStyle(e).getPropertyValue("transform") && !(r.documentMode && r.documentMode < 11)),
            getTranslate: function (e) {
                var t;
                return !(!e || !e.length) && {
                    top: (t = e[0].getBoundingClientRect()).top || 0,
                    left: t.left || 0,
                    width: t.width,
                    height: t.height,
                    opacity: parseFloat(e.css("opacity"))
                }
            },
            setTranslate: function (e, t) {
                var n = "", o = {};
                if (e && t) return void 0 === t.left && void 0 === t.top || (n = (void 0 === t.left ? e.position() : t).left + "px, " + (void 0 === t.top ? e.position() : t).top + "px", n = this.use3d ? "translate3d(" + n + ", 0px)" : "translate(" + n + ")"), void 0 !== t.scaleX && void 0 !== t.scaleY ? n += " scale(" + t.scaleX + ", " + t.scaleY + ")" : void 0 !== t.scaleX && (n += " scaleX(" + t.scaleX + ")"), n.length && (o.transform = n), void 0 !== t.opacity && (o.opacity = t.opacity), void 0 !== t.width && (o.width = t.width), void 0 !== t.height && (o.height = t.height), e.css(o)
            },
            animate: function (t, n, o, i, s) {
                var r, a = this;
                h.isFunction(o) && (i = o, o = null), a.stop(t), r = a.getTranslate(t), t.on(c, function (e) {
                    (!e || !e.originalEvent || t.is(e.originalEvent.target) && "z-index" != e.originalEvent.propertyName) && (a.stop(t), h.isNumeric(o) && t.css("transition-duration", ""), h.isPlainObject(n) ? void 0 !== n.scaleX && void 0 !== n.scaleY && a.setTranslate(t, {
                        top: n.top,
                        left: n.left,
                        width: r.width * n.scaleX,
                        height: r.height * n.scaleY,
                        scaleX: 1,
                        scaleY: 1
                    }) : !0 !== s && t.removeClass(n), h.isFunction(i)) && i(e)
                }), h.isNumeric(o) && t.css("transition-duration", o + "ms"), h.isPlainObject(n) ? (void 0 !== n.scaleX && void 0 !== n.scaleY && (delete n.width, delete n.height, t.parent().hasClass("fancybox-slide--image")) && t.parent().addClass("fancybox-is-scaling"), h.fancybox.setTranslate(t, n)) : t.addClass(n), t.data("timer", setTimeout(function () {
                    t.trigger(c)
                }, o + 33))
            },
            stop: function (e, t) {
                e && e.length && (clearTimeout(e.data("timer")), t && e.trigger(c), e.off(c).css("transition-duration", ""), e.parent().removeClass("fancybox-is-scaling"))
            }
        }, h.fn.fancybox = function (e) {
            var t;
            return (t = (e = e || {}).selector || !1) ? h("body").off("click.fb-start", t).on("click.fb-start", t, {options: e}, n) : this.off("click.fb-start").on("click.fb-start", {
                items: this,
                options: e
            }, n), this
        }, s.on("click.fb-start", "[data-fancybox]", n), s.on("click.fb-start", "[data-fancybox-trigger]", function (e) {
            h('[data-fancybox="' + h(this).attr("data-fancybox-trigger") + '"]').eq(h(this).attr("data-fancybox-index") || 0).trigger("click.fb-start", {$trigger: h(this)})
        }), f = null, s.on("mousedown mouseup focus blur", ".fancybox-button", function (e) {
            switch (e.type) {
                case"mousedown":
                    f = h(this);
                    break;
                case"mouseup":
                    f = null;
                    break;
                case"focusin":
                    h(".fancybox-button").removeClass("fancybox-focus"), h(this).is(f) || h(this).is("[disabled]") || h(this).addClass("fancybox-focus");
                    break;
                case"focusout":
                    h(".fancybox-button").removeClass("fancybox-focus")
            }
        })
    }
    var f
}(window, document, jQuery), function (f) {
    "use strict";

    function h(n, e, t) {
        if (n) return "object" === f.type(t = t || "") && (t = f.param(t, !0)), f.each(e, function (e, t) {
            n = n.replace("$" + e, t || "")
        }), t.length && (n += (0 < n.indexOf("?") ? "&" : "?") + t), n
    }

    var o = {
        youtube: {
            matcher: /(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,
            params: {autoplay: 1, autohide: 1, fs: 1, rel: 0, hd: 1, wmode: "transparent", enablejsapi: 1, html5: 1},
            paramPlace: 8,
            type: "iframe",
            url: "https://www.youtube-nocookie.com/embed/$4",
            thumb: "https://img.youtube.com/vi/$4/hqdefault.jpg"
        },
        vimeo: {
            matcher: /^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,
            params: {autoplay: 1, hd: 1, show_title: 1, show_byline: 1, show_portrait: 0, fullscreen: 1},
            paramPlace: 3,
            type: "iframe",
            url: "//player.vimeo.com/video/$2"
        },
        instagram: {
            matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,
            type: "image",
            url: "//$1/p/$2/media/?size=l"
        },
        gmap_place: {
            matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,
            type: "iframe",
            url: function (e) {
                return "//maps.google." + e[2] + "/?ll=" + (e[9] ? e[9] + "&z=" + Math.floor(e[10]) + (e[12] ? e[12].replace(/^\//, "&") : "") : e[12] + "").replace(/\?/, "&") + "&output=" + (e[12] && 0 < e[12].indexOf("layer=c") ? "svembed" : "embed")
            }
        },
        gmap_search: {
            matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,
            type: "iframe",
            url: function (e) {
                return "//maps.google." + e[2] + "/maps?q=" + e[5].replace("query=", "q=").replace("api=1", "") + "&output=embed"
            }
        }
    }, i = (f(document).on("objectNeedsType.fb", function (e, t, i) {
        var s, r, a, l, c, d, u = i.src || "", p = !1, n = f.extend(!0, {}, o, i.opts.media);
        f.each(n, function (e, t) {
            if (r = u.match(t.matcher)) {
                if (p = t.type, d = e, c = {}, t.paramPlace && r[t.paramPlace]) {
                    l = (l = "?" == (l = r[t.paramPlace])[0] ? l.substring(1) : l).split("&");
                    for (var n = 0; n < l.length; ++n) {
                        var o = l[n].split("=", 2);
                        2 == o.length && (c[o[0]] = decodeURIComponent(o[1].replace(/\+/g, " ")))
                    }
                }
                return a = f.extend(!0, {}, t.params, i.opts[e], c), u = "function" === f.type(t.url) ? t.url.call(this, r, a, i) : h(t.url, r, a), s = "function" === f.type(t.thumb) ? t.thumb.call(this, r, a, i) : h(t.thumb, r), "youtube" === e ? u = u.replace(/&t=((\d+)m)?(\d+)s/, function (e, t, n, o) {
                    return "&start=" + ((n ? 60 * parseInt(n, 10) : 0) + parseInt(o, 10))
                }) : "vimeo" === e && (u = u.replace("&%23", "#")), !1
            }
        }), p ? (i.opts.thumb || i.opts.$thumb && i.opts.$thumb.length || (i.opts.thumb = s), "iframe" === p && (i.opts = f.extend(!0, i.opts, {
            iframe: {
                preload: !1,
                attr: {scrolling: "no"}
            }
        })), f.extend(i, {
            type: p,
            src: u,
            origSrc: i.src,
            contentSource: d,
            contentType: "image" === p ? "image" : "gmap_place" == d || "gmap_search" == d ? "map" : "video"
        })) : u && (i.type = i.opts.defaultType)
    }), {
        youtube: {src: "https://www.youtube.com/iframe_api", class: "YT", loading: !1, loaded: !1},
        vimeo: {src: "https://player.vimeo.com/api/player.js", class: "Vimeo", loading: !1, loaded: !1},
        load: function (e) {
            var t, n = this;
            this[e].loaded ? setTimeout(function () {
                n.done(e)
            }) : this[e].loading || (this[e].loading = !0, (t = document.createElement("script")).type = "text/javascript", t.src = this[e].src, "youtube" === e ? window.onYouTubeIframeAPIReady = function () {
                n[e].loaded = !0, n.done(e)
            } : t.onload = function () {
                n[e].loaded = !0, n.done(e)
            }, document.body.appendChild(t))
        },
        done: function (e) {
            var t, n;
            "youtube" === e && delete window.onYouTubeIframeAPIReady, (t = f.fancybox.getInstance()) && (n = t.current.$content.find("iframe"), "youtube" === e && void 0 !== YT && YT ? new YT.Player(n.attr("id"), {
                events: {
                    onStateChange: function (e) {
                        0 == e.data && t.next()
                    }
                }
            }) : "vimeo" === e && void 0 !== Vimeo && Vimeo && new Vimeo.Player(n).on("ended", function () {
                t.next()
            }))
        }
    });
    f(document).on({
        "afterShow.fb": function (e, t, n) {
            1 < t.group.length && ("youtube" === n.contentSource || "vimeo" === n.contentSource) && i.load(n.contentSource)
        }
    })
}(jQuery), function (d, l, u) {
    "use strict";

    function p(e) {
        var t, n = [];
        for (t in e = (e = e.originalEvent || e || d.e).touches && e.touches.length ? e.touches : e.changedTouches && e.changedTouches.length ? e.changedTouches : [e]) e[t].pageX ? n.push({
            x: e[t].pageX,
            y: e[t].pageY
        }) : e[t].clientX && n.push({x: e[t].clientX, y: e[t].clientY});
        return n
    }

    function f(e, t, n) {
        return t && e ? "x" === n ? e.x - t.x : "y" === n ? e.y - t.y : Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2)) : 0
    }

    function c(e) {
        if (e.is('a,area,button,[role="button"],input,label,select,summary,textarea,video,audio,iframe') || u.isFunction(e.get(0).onclick) || e.data("selectable")) return 1;
        for (var t = 0, n = e[0].attributes, o = n.length; t < o; t++) if ("data-fancybox-" === n[t].nodeName.substr(0, 14)) return 1
    }

    function h(e) {
        for (var t, n, o, i = !1; (t = e.get(0), o = n = o = n = void 0, n = d.getComputedStyle(t)["overflow-y"], o = d.getComputedStyle(t)["overflow-x"], n = ("scroll" === n || "auto" === n) && t.scrollHeight > t.clientHeight, o = ("scroll" === o || "auto" === o) && t.scrollWidth > t.clientWidth, !(i = n || o)) && ((e = e.parent()).length && !e.hasClass("fancybox-stage") && !e.is("body"));) ;
        return i
    }

    function n(e) {
        var t = this;
        t.instance = e, t.$bg = e.$refs.bg, t.$stage = e.$refs.stage, t.$container = e.$refs.container, t.destroy(), t.$container.on("touchstart.fb.touch mousedown.fb.touch", u.proxy(t, "ontouchstart"))
    }

    var g = d.requestAnimationFrame || d.webkitRequestAnimationFrame || d.mozRequestAnimationFrame || d.oRequestAnimationFrame || function (e) {
            return d.setTimeout(e, 1e3 / 60)
        },
        m = d.cancelAnimationFrame || d.webkitCancelAnimationFrame || d.mozCancelAnimationFrame || d.oCancelAnimationFrame || function (e) {
            d.clearTimeout(e)
        };
    n.prototype.destroy = function () {
        var e = this;
        e.$container.off(".fb.touch"), u(l).off(".fb.touch"), e.requestId && (m(e.requestId), e.requestId = null), e.tapped && (clearTimeout(e.tapped), e.tapped = null)
    }, n.prototype.ontouchstart = function (e) {
        var t = this, n = u(e.target), o = t.instance, i = o.current, s = i.$slide, r = i.$content,
            a = "touchstart" == e.type;
        a && t.$container.off("mousedown.fb.touch"), e.originalEvent && 2 == e.originalEvent.button || !s.length || !n.length || c(n) || c(n.parent()) || !n.is("img") && e.originalEvent.clientX > n[0].clientWidth + n.offset().left || (!i || o.isAnimating || i.$slide.hasClass("fancybox-animated") ? (e.stopPropagation(), e.preventDefault()) : (t.realPoints = t.startPoints = p(e), t.startPoints.length && (i.touch && e.stopPropagation(), t.startEvent = e, t.canTap = !0, t.$target = n, t.$content = r, t.opts = i.opts.touch, t.isPanning = !1, t.isSwiping = !1, t.isZooming = !1, t.isScrolling = !1, t.canPan = o.canPan(), t.startTime = (new Date).getTime(), t.distanceX = t.distanceY = t.distance = 0, t.canvasWidth = Math.round(s[0].clientWidth), t.canvasHeight = Math.round(s[0].clientHeight), t.contentLastPos = null, t.contentStartPos = u.fancybox.getTranslate(t.$content) || {
            top: 0,
            left: 0
        }, t.sliderStartPos = u.fancybox.getTranslate(s), t.stagePos = u.fancybox.getTranslate(o.$refs.stage), t.sliderStartPos.top -= t.stagePos.top, t.sliderStartPos.left -= t.stagePos.left, t.contentStartPos.top -= t.stagePos.top, t.contentStartPos.left -= t.stagePos.left, u(l).off(".fb.touch").on(a ? "touchend.fb.touch touchcancel.fb.touch" : "mouseup.fb.touch mouseleave.fb.touch", u.proxy(t, "ontouchend")).on(a ? "touchmove.fb.touch" : "mousemove.fb.touch", u.proxy(t, "ontouchmove")), u.fancybox.isMobile && l.addEventListener("scroll", t.onscroll, !0), (t.opts || t.canPan) && (n.is(t.$stage) || t.$stage.find(n).length) || (n.is(".fancybox-image") && e.preventDefault(), u.fancybox.isMobile && n.parents(".fancybox-caption").length)) && (t.isScrollable = h(n) || h(n.parent()), u.fancybox.isMobile && t.isScrollable || e.preventDefault(), 1 !== t.startPoints.length && !i.hasError || (t.canPan ? (u.fancybox.stop(t.$content), t.isPanning = !0) : t.isSwiping = !0, t.$container.addClass("fancybox-is-grabbing")), 2 === t.startPoints.length) && "image" === i.type && (i.isLoaded || i.$ghost) && (t.canTap = !1, t.isSwiping = !1, t.isPanning = !1, t.isZooming = !0, u.fancybox.stop(t.$content), t.centerPointStartX = .5 * (t.startPoints[0].x + t.startPoints[1].x) - u(d).scrollLeft(), t.centerPointStartY = .5 * (t.startPoints[0].y + t.startPoints[1].y) - u(d).scrollTop(), t.percentageOfImageAtPinchPointX = (t.centerPointStartX - t.contentStartPos.left) / t.contentStartPos.width, t.percentageOfImageAtPinchPointY = (t.centerPointStartY - t.contentStartPos.top) / t.contentStartPos.height, t.startDistanceBetweenFingers = f(t.startPoints[0], t.startPoints[1]))))
    }, n.prototype.onscroll = function (e) {
        this.isScrolling = !0, l.removeEventListener("scroll", this.onscroll, !0)
    }, n.prototype.ontouchmove = function (e) {
        var t = this;
        return void 0 !== e.originalEvent.buttons && 0 === e.originalEvent.buttons ? void t.ontouchend(e) : t.isScrolling ? void (t.canTap = !1) : (t.newPoints = p(e), void ((t.opts || t.canPan) && t.newPoints.length && t.newPoints.length && (t.isSwiping && !0 === t.isSwiping || e.preventDefault(), t.distanceX = f(t.newPoints[0], t.startPoints[0], "x"), t.distanceY = f(t.newPoints[0], t.startPoints[0], "y"), t.distance = f(t.newPoints[0], t.startPoints[0]), 0 < t.distance) && (t.isSwiping ? t.onSwipe(e) : t.isPanning ? t.onPan() : t.isZooming && t.onZoom())))
    }, n.prototype.onSwipe = function (e) {
        var i = this, s = i.instance, t = i.isSwiping, n = i.sliderStartPos.left || 0;
        !0 !== t ? ("x" == t && (0 < i.distanceX && (i.instance.group.length < 2 || 0 === i.instance.current.index && !i.instance.current.opts.loop) ? n += Math.pow(i.distanceX, .8) : i.distanceX < 0 && (i.instance.group.length < 2 || i.instance.current.index === i.instance.group.length - 1 && !i.instance.current.opts.loop) ? n -= Math.pow(-i.distanceX, .8) : n += i.distanceX), i.sliderLastPos = {
            top: "x" == t ? 0 : i.sliderStartPos.top + i.distanceY,
            left: n
        }, i.requestId && (m(i.requestId), i.requestId = null), i.requestId = g(function () {
            i.sliderLastPos && (u.each(i.instance.slides, function (e, t) {
                var n = t.pos - i.instance.currPos;
                u.fancybox.setTranslate(t.$slide, {
                    top: i.sliderLastPos.top,
                    left: i.sliderLastPos.left + n * i.canvasWidth + n * t.opts.gutter
                })
            }), i.$container.addClass("fancybox-is-sliding"))
        })) : 10 < Math.abs(i.distance) && (i.canTap = !1, s.group.length < 2 && i.opts.vertical ? i.isSwiping = "y" : s.isDragging || !1 === i.opts.vertical || "auto" === i.opts.vertical && 800 < u(d).width() ? i.isSwiping = "x" : (t = Math.abs(180 * Math.atan2(i.distanceY, i.distanceX) / Math.PI), i.isSwiping = 45 < t && t < 135 ? "y" : "x"), "y" === i.isSwiping && u.fancybox.isMobile && i.isScrollable ? i.isScrolling = !0 : (s.isDragging = i.isSwiping, i.startPoints = i.newPoints, u.each(s.slides, function (e, t) {
            var n, o;
            u.fancybox.stop(t.$slide), n = u.fancybox.getTranslate(t.$slide), o = u.fancybox.getTranslate(s.$refs.stage), t.$slide.css({
                transform: "",
                opacity: "",
                "transition-duration": ""
            }).removeClass("fancybox-animated").removeClass(function (e, t) {
                return (t.match(/(^|\s)fancybox-fx-\S+/g) || []).join(" ")
            }), t.pos === s.current.pos && (i.sliderStartPos.top = n.top - o.top, i.sliderStartPos.left = n.left - o.left), u.fancybox.setTranslate(t.$slide, {
                top: n.top - o.top,
                left: n.left - o.left
            })
        }), s.SlideShow && s.SlideShow.isActive && s.SlideShow.stop()))
    }, n.prototype.onPan = function () {
        var e = this;
        f(e.newPoints[0], e.realPoints[0]) < (u.fancybox.isMobile ? 10 : 5) ? e.startPoints = e.newPoints : (e.canTap = !1, e.contentLastPos = e.limitMovement(), e.requestId && m(e.requestId), e.requestId = g(function () {
            u.fancybox.setTranslate(e.$content, e.contentLastPos)
        }))
    }, n.prototype.limitMovement = function () {
        var e = this, t = e.canvasWidth, n = e.canvasHeight, o = e.distanceX, i = e.distanceY, e = e.contentStartPos,
            s = e.left, r = e.top, a = e.width, e = e.height, l = t < a ? s + o : s, c = r + i,
            d = Math.max(0, .5 * t - .5 * a), u = Math.max(0, .5 * n - .5 * e), t = Math.min(t - a, .5 * t - .5 * a),
            a = Math.min(n - e, .5 * n - .5 * e);
        return 0 < o && d < l && (l = d - 1 + Math.pow(-d + s + o, .8) || 0), o < 0 && l < t && (l = t + 1 - Math.pow(t - s - o, .8) || 0), 0 < i && u < c && (c = u - 1 + Math.pow(-u + r + i, .8) || 0), {
            top: c = i < 0 && c < a ? a + 1 - Math.pow(a - r - i, .8) || 0 : c,
            left: l
        }
    }, n.prototype.limitPosition = function (e, t, n, o) {
        var i = this.canvasWidth, s = this.canvasHeight;
        return e = i < n ? (e = 0 < e ? 0 : e) < i - n ? i - n : e : Math.max(0, i / 2 - n / 2), {
            top: t = s < o ? (t = 0 < t ? 0 : t) < s - o ? s - o : t : Math.max(0, s / 2 - o / 2),
            left: e
        }
    }, n.prototype.onZoom = function () {
        var e = this, t = e.contentStartPos, n = t.width, o = t.height, i = t.left, t = t.top,
            s = f(e.newPoints[0], e.newPoints[1]) / e.startDistanceBetweenFingers, r = Math.floor(n * s),
            a = Math.floor(o * s), n = (n - r) * e.percentageOfImageAtPinchPointX,
            o = (o - a) * e.percentageOfImageAtPinchPointY,
            l = (e.newPoints[0].x + e.newPoints[1].x) / 2 - u(d).scrollLeft(),
            c = (e.newPoints[0].y + e.newPoints[1].y) / 2 - u(d).scrollTop(), l = l - e.centerPointStartX,
            t = {top: t + (o + (c - e.centerPointStartY)), left: i + (n + l), scaleX: s, scaleY: s};
        e.canTap = !1, e.newWidth = r, e.newHeight = a, e.contentLastPos = t, e.requestId && m(e.requestId), e.requestId = g(function () {
            u.fancybox.setTranslate(e.$content, e.contentLastPos)
        })
    }, n.prototype.ontouchend = function (e) {
        var t = this, n = t.isSwiping, o = t.isPanning, i = t.isZooming, s = t.isScrolling;
        if (t.endPoints = p(e), t.dMs = Math.max((new Date).getTime() - t.startTime, 1), t.$container.removeClass("fancybox-is-grabbing"), u(l).off(".fb.touch"), l.removeEventListener("scroll", t.onscroll, !0), t.requestId && (m(t.requestId), t.requestId = null), t.isSwiping = !1, t.isPanning = !1, t.isZooming = !1, t.isScrolling = !1, t.instance.isDragging = !1, t.canTap) return t.onTap(e);
        t.speed = 100, t.velocityX = t.distanceX / t.dMs * .5, t.velocityY = t.distanceY / t.dMs * .5, o ? t.endPanning() : i ? t.endZooming() : t.endSwiping(n, s)
    }, n.prototype.endSwiping = function (e, t) {
        var n = this, o = !1, i = n.instance.group.length, s = Math.abs(n.distanceX),
            i = "x" == e && 1 < i && (130 < n.dMs && 10 < s || 50 < s);
        n.sliderLastPos = null, "y" == e && !t && 50 < Math.abs(n.distanceY) ? (u.fancybox.animate(n.instance.current.$slide, {
            top: n.sliderStartPos.top + n.distanceY + 150 * n.velocityY,
            opacity: 0
        }, 200), o = n.instance.close(!0, 250)) : i && 0 < n.distanceX ? o = n.instance.previous(300) : i && n.distanceX < 0 && (o = n.instance.next(300)), !1 !== o || "x" != e && "y" != e || n.instance.centerSlide(200), n.$container.removeClass("fancybox-is-sliding")
    }, n.prototype.endPanning = function () {
        var e, t, n = this;
        n.contentLastPos && (e = !1 === n.opts.momentum || 350 < n.dMs ? (t = n.contentLastPos.left, n.contentLastPos.top) : (t = n.contentLastPos.left + 500 * n.velocityX, n.contentLastPos.top + 500 * n.velocityY), (t = n.limitPosition(t, e, n.contentStartPos.width, n.contentStartPos.height)).width = n.contentStartPos.width, t.height = n.contentStartPos.height, u.fancybox.animate(n.$content, t, 366))
    }, n.prototype.endZooming = function () {
        var e, t, n = this, o = n.instance.current, i = n.newWidth, s = n.newHeight;
        n.contentLastPos && (e = n.contentLastPos.left, t = n.contentLastPos.top, u.fancybox.setTranslate(n.$content, {
            top: t,
            left: e,
            width: i,
            height: s,
            scaleX: 1,
            scaleY: 1
        }), i < n.canvasWidth && s < n.canvasHeight ? n.instance.scaleToFit(150) : i > o.width || s > o.height ? n.instance.scaleToActual(n.centerPointStartX, n.centerPointStartY, 150) : (o = n.limitPosition(e, t, i, s), u.fancybox.animate(n.$content, o, 150)))
    }, n.prototype.onTap = function (t) {
        function e(e) {
            if (e = r.opts[e], e = u.isFunction(e) ? e.apply(s, [r, t]) : e) switch (e) {
                case"close":
                    s.close(o.startEvent);
                    break;
                case"toggleControls":
                    s.toggleControls();
                    break;
                case"next":
                    s.next();
                    break;
                case"nextOrClose":
                    1 < s.group.length ? s.next() : s.close(o.startEvent);
                    break;
                case"zoom":
                    "image" == r.type && (r.isLoaded || r.$ghost) && (s.canPan() ? s.scaleToFit() : s.isScaledDown() ? s.scaleToActual(l, c) : s.group.length < 2 && s.close(o.startEvent))
            }
        }

        var n, o = this, i = u(t.target), s = o.instance, r = s.current, a = t && p(t) || o.startPoints,
            l = a[0] ? a[0].x - u(d).scrollLeft() - o.stagePos.left : 0,
            c = a[0] ? a[0].y - u(d).scrollTop() - o.stagePos.top : 0;
        if ((!t.originalEvent || 2 != t.originalEvent.button) && (i.is("img") || !(l > i[0].clientWidth + i.offset().left))) {
            if (i.is(".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container")) n = "Outside"; else if (i.is(".fancybox-slide")) n = "Slide"; else {
                if (!s.current.$content || !s.current.$content.find(i).addBack().filter(i).length) return;
                n = "Content"
            }
            if (o.tapped) {
                if (clearTimeout(o.tapped), o.tapped = null, 50 < Math.abs(l - o.tapX) || 50 < Math.abs(c - o.tapY)) return this;
                e("dblclick" + n)
            } else o.tapX = l, o.tapY = c, r.opts["dblclick" + n] && r.opts["dblclick" + n] !== r.opts["click" + n] ? o.tapped = setTimeout(function () {
                o.tapped = null, s.isAnimating || e("click" + n)
            }, 500) : e("click" + n);
            return this
        }
    }, u(l).on("onActivate.fb", function (e, t) {
        t && !t.Guestures && (t.Guestures = new n(t))
    }).on("beforeClose.fb", function (e, t) {
        t && t.Guestures && t.Guestures.destroy()
    })
}(window, document, jQuery), function (s, r) {
    "use strict";
    r.extend(!0, r.fancybox.defaults, {
        btnTpl: {slideShow: '<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6.5 5.4v13.2l11-6.6z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.33 5.75h2.2v12.5h-2.2V5.75zm5.15 0h2.2v12.5h-2.2V5.75z"/></svg></button>'},
        slideShow: {autoStart: !1, speed: 3e3, progress: !0}
    });

    function n(e) {
        this.instance = e, this.init()
    }

    r.extend(n.prototype, {
        timer: null, isActive: !1, $button: null, init: function () {
            var e = this, t = e.instance, n = t.group[t.currIndex].opts.slideShow;
            e.$button = t.$refs.toolbar.find("[data-fancybox-play]").on("click", function () {
                e.toggle()
            }), t.group.length < 2 || !n ? e.$button.hide() : n.progress && (e.$progress = r('<div class="fancybox-progress"></div>').appendTo(t.$refs.inner))
        }, set: function (e) {
            var t = this, n = t.instance, o = n.current;
            o && (!0 === e || o.opts.loop || n.currIndex < n.group.length - 1) ? t.isActive && "video" !== o.contentType && (t.$progress && r.fancybox.animate(t.$progress.show(), {scaleX: 1}, o.opts.slideShow.speed), t.timer = setTimeout(function () {
                n.current.opts.loop || n.current.index != n.group.length - 1 ? n.next() : n.jumpTo(0)
            }, o.opts.slideShow.speed)) : (t.stop(), n.idleSecondsCounter = 0, n.showControls())
        }, clear: function () {
            clearTimeout(this.timer), this.timer = null, this.$progress && this.$progress.removeAttr("style").hide()
        }, start: function () {
            var e = this, t = e.instance.current;
            t && (e.$button.attr("title", (t.opts.i18n[t.opts.lang] || t.opts.i18n.en).PLAY_STOP).removeClass("fancybox-button--play").addClass("fancybox-button--pause"), e.isActive = !0, t.isComplete && e.set(!0), e.instance.trigger("onSlideShowChange", !0))
        }, stop: function () {
            var e = this, t = e.instance.current;
            e.clear(), e.$button.attr("title", (t.opts.i18n[t.opts.lang] || t.opts.i18n.en).PLAY_START).removeClass("fancybox-button--pause").addClass("fancybox-button--play"), e.isActive = !1, e.instance.trigger("onSlideShowChange", !1), e.$progress && e.$progress.removeAttr("style").hide()
        }, toggle: function () {
            this.isActive ? this.stop() : this.start()
        }
    }), r(s).on({
        "onInit.fb": function (e, t) {
            t && !t.SlideShow && (t.SlideShow = new n(t))
        }, "beforeShow.fb": function (e, t, n, o) {
            t = t && t.SlideShow;
            o ? t && n.opts.slideShow.autoStart && t.start() : t && t.isActive && t.clear()
        }, "afterShow.fb": function (e, t, n) {
            t = t && t.SlideShow;
            t && t.isActive && t.set()
        }, "afterKeydown.fb": function (e, t, n, o, i) {
            t = t && t.SlideShow;
            !t || !n.opts.slideShow || 80 !== i && 32 !== i || r(s.activeElement).is("button,a,input") || (o.preventDefault(), t.toggle())
        }, "beforeClose.fb onDeactivate.fb": function (e, t) {
            t = t && t.SlideShow;
            t && t.stop()
        }
    }), r(s).on("visibilitychange", function () {
        var e = r.fancybox.getInstance(), e = e && e.SlideShow;
        e && e.isActive && (s.hidden ? e.clear() : e.set())
    })
}(document, jQuery), function (s, n) {
    "use strict";
    var o, i = function () {
        for (var e = [["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"], ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"], ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"], ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"], ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]], t = {}, n = 0; n < e.length; n++) {
            var o = e[n];
            if (o && o[1] in s) {
                for (var i = 0; i < o.length; i++) t[e[0][i]] = o[i];
                return t
            }
        }
        return !1
    }();
    i && (o = {
        request: function (e) {
            (e = e || s.documentElement)[i.requestFullscreen](e.ALLOW_KEYBOARD_INPUT)
        }, exit: function () {
            s[i.exitFullscreen]()
        }, toggle: function (e) {
            e = e || s.documentElement, this.isFullscreen() ? this.exit() : this.request(e)
        }, isFullscreen: function () {
            return Boolean(s[i.fullscreenElement])
        }, enabled: function () {
            return Boolean(s[i.fullscreenEnabled])
        }
    }, n.extend(!0, n.fancybox.defaults, {
        btnTpl: {fullScreen: '<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fsenter" title="{{FULL_SCREEN}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 16h3v3h2v-5H5zm3-8H5v2h5V5H8zm6 11h2v-3h3v-2h-5zm2-11V5h-2v5h5V8z"/></svg></button>'},
        fullScreen: {autoStart: !1}
    }), n(s).on(i.fullscreenchange, function () {
        var e = o.isFullscreen(), t = n.fancybox.getInstance();
        t && (t.current && "image" === t.current.type && t.isAnimating && (t.isAnimating = !1, t.update(!0, !0, 0), t.isComplete || t.complete()), t.trigger("onFullscreenChange", e), t.$refs.container.toggleClass("fancybox-is-fullscreen", e), t.$refs.toolbar.find("[data-fancybox-fullscreen]").toggleClass("fancybox-button--fsenter", !e).toggleClass("fancybox-button--fsexit", e))
    })), n(s).on({
        "onInit.fb": function (e, t) {
            i ? t && t.group[t.currIndex].opts.fullScreen ? (t.$refs.container.on("click.fb-fullscreen", "[data-fancybox-fullscreen]", function (e) {
                e.stopPropagation(), e.preventDefault(), o.toggle()
            }), t.opts.fullScreen && !0 === t.opts.fullScreen.autoStart && o.request(), t.FullScreen = o) : t && t.$refs.toolbar.find("[data-fancybox-fullscreen]").hide() : t.$refs.toolbar.find("[data-fancybox-fullscreen]").remove()
        }, "afterKeydown.fb": function (e, t, n, o, i) {
            t && t.FullScreen && 70 === i && (o.preventDefault(), t.FullScreen.toggle())
        }, "beforeClose.fb": function (e, t) {
            t && t.FullScreen && t.$refs.container.hasClass("fancybox-is-fullscreen") && o.exit()
        }
    })
}(document, jQuery), function (e, s) {
    "use strict";

    function n(e) {
        this.init(e)
    }

    var r = "fancybox-thumbs";
    s.fancybox.defaults = s.extend(!0, {
        btnTpl: {thumbs: '<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14.59 14.59h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76H5.65V5.65z"/></svg></button>'},
        thumbs: {autoStart: !1, hideOnClose: !0, parentEl: ".fancybox-container", axis: "y"}
    }, s.fancybox.defaults);
    s.extend(n.prototype, {
        $button: null, $grid: null, $list: null, isVisible: !1, isActive: !1, init: function (e) {
            var t = this, n = e.group, o = 0;
            t.instance = e, t.opts = n[e.currIndex].opts.thumbs, (e.Thumbs = t).$button = e.$refs.toolbar.find("[data-fancybox-thumbs]");
            for (var i = 0, s = n.length; i < s && (n[i].thumb && o++, !(1 < o)); i++) ;
            1 < o && t.opts ? (t.$button.removeAttr("style").on("click", function () {
                t.toggle()
            }), t.isActive = !0) : t.$button.hide()
        }, create: function () {
            var n, e = this, t = e.instance, o = e.opts.parentEl, i = [];
            e.$grid || (e.$grid = s('<div class="' + r + " " + r + "-" + e.opts.axis + '"></div>').appendTo(t.$refs.container.find(o).addBack().filter(o)), e.$grid.on("click", "a", function () {
                t.jumpTo(s(this).attr("data-index"))
            })), e.$list || (e.$list = s('<div class="' + r + '__list">').appendTo(e.$grid)), s.each(t.group, function (e, t) {
                (n = t.thumb) || "image" !== t.type || (n = t.src), i.push('<a href="javascript:;" tabindex="0" data-index="' + e + '"' + (n && n.length ? ' style="background-image:url(' + n + ')"' : 'class="fancybox-thumbs-missing"') + "></a>")
            }), e.$list[0].innerHTML = i.join(""), "x" === e.opts.axis && e.$list.width(parseInt(e.$grid.css("padding-right"), 10) + t.group.length * e.$list.children().eq(0).outerWidth(!0))
        }, focus: function (e) {
            var t, n, o = this, i = o.$list, s = o.$grid;
            o.instance.current && (n = (t = i.children().removeClass("fancybox-thumbs-active").filter('[data-index="' + o.instance.current.index + '"]').addClass("fancybox-thumbs-active")).position(), "y" === o.opts.axis && (n.top < 0 || n.top > i.height() - t.outerHeight()) ? i.stop().animate({scrollTop: i.scrollTop() + n.top}, e) : "x" === o.opts.axis && (n.left < s.scrollLeft() || n.left > s.scrollLeft() + (s.width() - t.outerWidth())) && i.parent().stop().animate({scrollLeft: n.left}, e))
        }, update: function () {
            var e = this;
            e.instance.$refs.container.toggleClass("fancybox-show-thumbs", this.isVisible), e.isVisible ? (e.$grid || e.create(), e.instance.trigger("onThumbsShow"), e.focus(0)) : e.$grid && e.instance.trigger("onThumbsHide"), e.instance.update()
        }, hide: function () {
            this.isVisible = !1, this.update()
        }, show: function () {
            this.isVisible = !0, this.update()
        }, toggle: function () {
            this.isVisible = !this.isVisible, this.update()
        }
    }), s(e).on({
        "onInit.fb": function (e, t) {
            t && !t.Thumbs && (t = new n(t)).isActive && !0 === t.opts.autoStart && t.show()
        }, "beforeShow.fb": function (e, t, n, o) {
            t = t && t.Thumbs;
            t && t.isVisible && t.focus(o ? 0 : 250)
        }, "afterKeydown.fb": function (e, t, n, o, i) {
            t = t && t.Thumbs;
            t && t.isActive && 71 === i && (o.preventDefault(), t.toggle())
        }, "beforeClose.fb": function (e, t) {
            t = t && t.Thumbs;
            t && t.isVisible && !1 !== t.opts.hideOnClose && t.$grid.hide()
        }
    })
}(document, jQuery), function (e, i) {
    "use strict";
    i.extend(!0, i.fancybox.defaults, {
        btnTpl: {share: '<button data-fancybox-share class="fancybox-button fancybox-button--share" title="{{SHARE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M2.55 19c1.4-8.4 9.1-9.8 11.9-9.8V5l7 7-7 6.3v-3.5c-2.8 0-10.5 2.1-11.9 4.2z"/></svg></button>'},
        share: {
            url: function (e, t) {
                return !e.currentHash && "inline" !== t.type && "html" !== t.type && (t.origSrc || t.src) || window.location
            },
            tpl: '<div class="fancybox-share"><h1>{{SHARE}}</h1><p><a class="fancybox-share__button fancybox-share__button--fb" href="https://www.facebook.com/sharer/sharer.php?u={{url}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m287 456v-299c0-21 6-35 35-35h38v-63c-7-1-29-3-55-3-54 0-91 33-91 94v306m143-254h-205v72h196" /></svg><span>Facebook</span></a><a class="fancybox-share__button fancybox-share__button--tw" href="https://twitter.com/intent/tweet?url={{url}}&text={{descr}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m456 133c-14 7-31 11-47 13 17-10 30-27 37-46-15 10-34 16-52 20-61-62-157-7-141 75-68-3-129-35-169-85-22 37-11 86 26 109-13 0-26-4-37-9 0 39 28 72 65 80-12 3-25 4-37 2 10 33 41 57 77 57-42 30-77 38-122 34 170 111 378-32 359-208 16-11 30-25 41-42z" /></svg><span>Twitter</span></a><a class="fancybox-share__button fancybox-share__button--pt" href="https://www.pinterest.com/pin/create/button/?url={{url}}&description={{descr}}&media={{media}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m265 56c-109 0-164 78-164 144 0 39 15 74 47 87 5 2 10 0 12-5l4-19c2-6 1-8-3-13-9-11-15-25-15-45 0-58 43-110 113-110 62 0 96 38 96 88 0 67-30 122-73 122-24 0-42-19-36-44 6-29 20-60 20-81 0-19-10-35-31-35-25 0-44 26-44 60 0 21 7 36 7 36l-30 125c-8 37-1 83 0 87 0 3 4 4 5 2 2-3 32-39 42-75l16-64c8 16 31 29 56 29 74 0 124-67 124-157 0-69-58-132-146-132z" fill="#fff"/></svg><span>Pinterest</span></a></p><p><input class="fancybox-share__input" type="text" value="{{url_raw}}" onclick="select()" /></p></div>'
        }
    }), i(e).on("click", "[data-fancybox-share]", function () {
        var e, t, n = i.fancybox.getInstance(), o = n.current || null;
        o && ("function" === i.type(o.opts.share.url) && (e = o.opts.share.url.apply(o, [n, o])), o = o.opts.share.tpl.replace(/\{\{media\}\}/g, "image" === o.type ? encodeURIComponent(o.src) : "").replace(/\{\{url\}\}/g, encodeURIComponent(e)).replace(/\{\{url_raw\}\}/g, (t = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;",
            "/": "&#x2F;",
            "`": "&#x60;",
            "=": "&#x3D;"
        }, String(e).replace(/[&<>"'`=\/]/g, function (e) {
            return t[e]
        }))).replace(/\{\{descr\}\}/g, n.$caption ? encodeURIComponent(n.$caption.text()) : ""), i.fancybox.open({
            src: n.translate(n, o),
            type: "html",
            opts: {
                touch: !1, animationEffect: !1, afterLoad: function (e, t) {
                    n.$refs.container.one("beforeClose.fb", function () {
                        e.close(null, 0)
                    }), t.$content.find(".fancybox-share__button").click(function () {
                        return window.open(this.href, "Share", "width=550, height=450"), !1
                    })
                }, mobile: {autoFocus: !1}
            }
        }))
    })
}(document, jQuery), function (s, r, o) {
    "use strict";

    function i() {
        var e = s.location.hash.substr(1), t = e.split("-"),
            n = 1 < t.length && /^\+?\d+$/.test(t[t.length - 1]) && parseInt(t.pop(-1), 10) || 1;
        return {hash: e, index: n < 1 ? 1 : n, gallery: t.join("-")}
    }

    function t(e) {
        "" !== e.gallery && o("[data-fancybox='" + o.escapeSelector(e.gallery) + "']").eq(e.index - 1).focus().trigger("click.fb-start")
    }

    function a(e) {
        return !!e && "" !== (e = (e = (e.current || e).opts).hash || (e.$orig ? e.$orig.data("fancybox") || e.$orig.data("fancybox-trigger") : "")) && e
    }

    o.escapeSelector || (o.escapeSelector = function (e) {
        return (e + "").replace(/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g, function (e, t) {
            return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
        })
    }), o(function () {
        !1 !== o.fancybox.defaults.hash && (o(r).on({
            "onInit.fb": function (e, t) {
                var n, o;
                !1 !== t.group[t.currIndex].opts.hash && (n = i(), o = a(t)) && n.gallery && o == n.gallery && (t.currIndex = n.index - 1)
            }, "beforeShow.fb": function (e, t, n, o) {
                var i;
                n && !1 !== n.opts.hash && (i = a(t)) && (t.currentHash = i + (1 < t.group.length ? "-" + (n.index + 1) : ""), s.location.hash !== "#" + t.currentHash) && (o && !t.origHash && (t.origHash = s.location.hash), t.hashTimer && clearTimeout(t.hashTimer), t.hashTimer = setTimeout(function () {
                    "replaceState" in s.history ? (s.history[o ? "pushState" : "replaceState"]({}, r.title, s.location.pathname + s.location.search + "#" + t.currentHash), o && (t.hasCreatedHistory = !0)) : s.location.hash = t.currentHash, t.hashTimer = null
                }, 300))
            }, "beforeClose.fb": function (e, t, n) {
                n && !1 !== n.opts.hash && (clearTimeout(t.hashTimer), t.currentHash && t.hasCreatedHistory ? s.history.back() : t.currentHash && ("replaceState" in s.history ? s.history.replaceState({}, r.title, s.location.pathname + s.location.search + (t.origHash || "")) : s.location.hash = t.origHash), t.currentHash = null)
            }
        }), o(s).on("hashchange.fb", function () {
            var e = i(), n = null;
            o.each(o(".fancybox-container").get().reverse(), function (e, t) {
                t = o(t).data("FancyBox");
                if (t && t.currentHash) return n = t, !1
            }), n ? n.currentHash === e.gallery + "-" + e.index || 1 === e.index && n.currentHash == e.gallery || (n.currentHash = null, n.close()) : "" !== e.gallery && t(e)
        }), setTimeout(function () {
            o.fancybox.getInstance() || t(i())
        }, 50))
    })
}(window, document, jQuery), function (e, t) {
    "use strict";
    var i = (new Date).getTime();
    t(e).on({
        "onInit.fb": function (e, o, t) {
            o.$refs.stage.on("mousewheel DOMMouseScroll wheel MozMousePixelScroll", function (e) {
                var t = o.current, n = (new Date).getTime();
                o.group.length < 2 || !1 === t.opts.wheel || "auto" === t.opts.wheel && "image" !== t.type || (e.preventDefault(), e.stopPropagation(), t.$slide.hasClass("fancybox-animated")) || (e = e.originalEvent || e, n - i < 250) || (i = n, o[(-e.deltaY || -e.deltaX || e.wheelDelta || -e.detail) < 0 ? "next" : "previous"]())
            })
        }
    })
}(document, jQuery), document.addEventListener("DOMContentLoaded", function () {
    function e(e) {
        return document.body.clientWidth <= e
    }

    function t(e, o, i, s) {
        document.querySelectorAll(e).forEach((e, t) => {
            let n = document.createElement("div");
            n.classList.add("mobile-menu"), n.innerHTML = `
            <div class="mobile-menu__header">
                <div class="mobile-menu__back" id="back${t}">
                    <svg class="mobile-menu__back-icon">
                        <use xlink:href='/svg/dest/stack/sprite.svg#arrow'></use>
                    </svg>
                </div>
                <div class="mobile-menu__title">${e.querySelector(i).innerText || e.querySelector(i).textContent}</div>
            </div>
            `, n.append(e.querySelector(o)), console.log(e), e.querySelector(s).addEventListener("click", () => {
                n.classList.toggle("active")
            }), n.querySelector(".mobile-menu__back").addEventListener("click", () => {
                n.classList.toggle("active")
            }), document.querySelector("html").append(n)
        })
    }

    var n = new class {
            constructor() {
                this.menu = document.querySelector("[data-menu]"), this.body = document.body, this.menuBtn = document.querySelectorAll("[data-menu-btn]")
            }

            openMenu = e => {
                this.menu.classList.add("active"), this.body.classList.add("lock"), this.menuBtn[e].classList.add("active")
            };
            closeMenu = e => {
                this.menu.classList.remove("active"), this.body.classList.remove("lock"), this.menuBtn[e].classList.remove("active")
            };

            render() {
                this.menuBtn.forEach((e, t) => {
                    e.addEventListener("click", e => {
                        this.menu.classList.contains("active") ? this.closeMenu(t) : this.openMenu(t)
                    })
                })
            }
        }, o = (n.render(), document.querySelector(".header__location")), i = document.querySelector(".sidebar"),
        s = document.querySelector(".main-top-menu__list");
    if (document.querySelector(".profile-main-info__slider") && $(".profile-main-info__slider-main").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: !0,
        arrows: !1,
        customPaging: function (e, t) {
            var n = $(e.$slides[t]).find(".profile-main-info__slider-main-img").attr("src");
            return console.log($(e.$slides[t])), `<img src="${n}" alt="" /> `
        }
    }), document.querySelector(".profile-main-nav") && 680 <= document.body.clientWidth && window.addEventListener("scroll", () => {
        document.querySelectorAll(".profile-main__block").forEach((e, t) => {
            e.offsetTop - 30 <= window.scrollY && (document.querySelectorAll(".profile-main-nav__item").forEach(e => {
                e.classList.contains("active") && e.classList.remove("active")
            }), document.querySelectorAll(".profile-main-nav__item")[t].classList.add("active"))
        })
    }), document.querySelector(".profile__modal-form")) {
        var r = document.querySelectorAll(".profile__modal-form-radio");
        const l = document.querySelector(".profile__modal-form-raiting-stars-rect");
        var a = document.querySelectorAll(".profile__modal-toggle");
        const c = document.querySelector(".profile__modal-bg");
        r.forEach((e, t) => {
            e.addEventListener("mouseover", () => {
                console.log("ok");
                var e = t + 1;
                l.setAttribute("x", e / .005 / 20 + "%")
            }), e.isChecked && l.setAttribute("x", index / .005 / 20 + "%")
        }), a.forEach(e => {
            e.addEventListener("click", () => {
                document.querySelector("html").classList.toggle("lock"), document.querySelector(".wrapper").classList.toggle("lock"), c.classList.toggle("active")
            })
        })
    }

    e(860) && (n.menu.append(i), t(".sidebar-tags__item", ".sidebar-tags__item-list", ".sidebar-tags-item__title", ".sidebar-tags-item__title")), e(440) && n.menu.prepend(s)
});

function call(object) {

    var id = $(object).attr('data-id');
    var city = $(object).attr('data-city');
    var phone = $(object).attr('data-phone');

    if (phone) {

        window.location.href = 'tel:+' + phone;
    } else {

        $.ajax({
            type: 'POST',
            url: "/phone", //Путь к обработчику
            data: 'id=' + id + '&city=' + city,
            response: 'text',
            dataType: "html",
            cache: false,
            headers: {
                'X-CSRF-TOKEN': $('meta[name = "csrf-token"]').attr('content')
            },
            success: function (data) {

                $(object).html(formatPhone(data));
                $(object).attr('data-phone', data);
                window.location.href = 'tel:+' + data;

            }
        })

    }

}

function formatPhone(phone) {

    var lenPhone = phone.length;
    var tt = phone.split('');
    if (lenPhone == 11) {
        tt.splice(0, "", "+");
        tt.splice(2, "", "(");
        tt.splice(6, "", ")");
        tt.splice(10, "", "-");
        tt.splice(13, "", "-");

    } else if (lenPhone == 12) {
        tt.splice(2, "", "(");
        tt.splice(6, "", ")");
        tt.splice(10, "", "-");
        tt.splice(13, "", "-");
    } else if (lenPhone == 10) {
        tt.splice(0, "", "+7(");
        tt.splice(4, "", ")");
        tt.splice(8, "", "-");
        tt.splice(11, "", "-");
    }

    phone = tt.join('');

    console.log(phone);

    return phone;

}

function add_to_favorite(object) {

    var id = $(object).attr('data-id');

    $.ajax({
        type: 'POST',
        url: "/favorite/add", //Путь к обработчику
        data: 'id=' + id,
        response: 'text',
        dataType: "html",
        cache: false,
        headers: {
            'X-CSRF-TOKEN': $('meta[name = "csrf-token"]').attr('content')
        },
        success: function (data) {

            $(object).toggleClass('catalog-item__favorite_add');

        }
    })

}

function init_metro(map_name, x, y) {

    var myMap = new ymaps.Map(map_name, {
        center: [x, y],
        zoom: 13,
    });

    // Все виды меток
    // https://tech.yandex.ru/maps/doc/jsapi/2.1/ref/reference/option.presetStorage-docpage/


    // Собственное изображение для метки с контентом
    var placemark4 = new ymaps.Placemark([x, y], {
        // hintContent: 'Собственный значок метки с контентом',
    }, {
        // Опции.
        preset: "twirl#redClusterIcons", gridSize: 100
    });

    myMap.geoObjects.add(placemark4);

}

function show_metro_map() {

    $.getScript("https://api-maps.yandex.ru/2.1/?lang=ru_RU", function (data, textStatus, jqxhr) {
        ymaps.ready(function () {

            var x = $('#map').attr('data-x')
            var y = $('#map').attr('data-y')

            init_metro('map', x, y)

            $('.metro-map').remove();
            $('#map').removeClass('d-none');

        })
    });

}

function close_city_check() {

    $('.check_city_block ').addClass('d-none');

    let date = new Date(Date.now() + (86400e3 * 31));
    date = date.toUTCString();
    document.cookie = "city=close; expires=" + date;

}

function close_city_list() {

    $('.header__location-list__sub_city').toggleClass('open-location');

}

function open_city_select() {

    $('.header__location-list__sub_city').addClass('open-location');
    close_city_check()

}

$(document).ready(function () {

    $('.city-search-input').bind("input", function () {

        var city = this.value;

        if (city.length > 1) {

            $.ajax({
                type: 'POST',
                url: "/city/search", //Путь к обработчику
                data: 'city=' + city,
                response: 'text',
                dataType: "html",
                headers: {
                    'X-CSRF-TOKEN': $('meta[name = "csrf-token"]').attr('content')
                },
                cache: false,
                success: function (data) {
                    $(".city-list").html(data).fadeIn(); //Выводим полученые данные в списке
                }
            })

        }

    });

});

function init_map_metro(map_name, x, y) {

    var myMap = new ymaps.Map(map_name, {
        center: [x, y],
        zoom: 13,
    });

    // Все виды меток
    // https://tech.yandex.ru/maps/doc/jsapi/2.1/ref/reference/option.presetStorage-docpage/


    // Собственное изображение для метки с контентом
    var placemark4 = new ymaps.Placemark([x, y], {
        // hintContent: 'Собственный значок метки с контентом',
    }, {
        // Опции.

        // Необходимо указать данный тип макета.
        iconLayout: 'default#image',

        // Своё изображение иконки метки.
        iconImageHref: '/img/map.svg',
        // Размеры метки.
        iconImageSize: [131, 62],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-72, -62],
    });

    myMap.geoObjects.add(placemark4);

}

function openMenu(object) {
    console.log(object);
    $(object).closest('.sidebar-filters__item').toggleClass('show-item');
}

window.addEventListener('scroll', function () {
    mobilePhone.hidden = ((pageYOffset - 300) < document.documentElement.clientHeight);
});


function modal(object) {

    var target = $(object).attr('data-target');

    document.querySelector("html").classList.toggle("lock");
    document.querySelector(".wrapper").classList.toggle("lock");
    $('.' + target).closest('.profile__modal-bg').toggleClass("active");

}

function getMorePosts(object) {

    var url = $(object).attr('data-url');

    $.ajax({
        type: 'POST',
        url: url, //Путь к обработчику
        response: 'text',
        dataType: "html",
        headers: {
            'X-CSRF-TOKEN': $('meta[name = "csrf-token"]').attr('content')
        },
        cache: false,
        success: function (data) {

            data = JSON.parse(data)

            if (data) {

                window.history.pushState('', document.title, url);

                if (data.posts) $('.posts').append(data.posts);

                if (data.next_page) $(object).attr('data-url', data.next_page);
                else $(object).remove();

            }

        }
    })

}

var slider = document.getElementById('age');

noUiSlider.create(slider, {
    start: [18, 80],
    connect: true,
    step: 1,
    format: wNumb({
        decimals: 0
    }),
    range: {
        'min': 18,
        'max': 80
    }
});

slider.noUiSlider.on('update', function (values, handle) {
    console.log(values);
    var age_from = document.getElementById('age-from')
    var age_to = document.getElementById('age-to')
    age_from.value = values[0];
    age_to.value = values[1];
});


var sliderVes = document.getElementById('ves');

noUiSlider.create(sliderVes, {
    start: [40, 100],
    connect: true,
    step: 1,
    format: wNumb({
        decimals: 0
    }),
    range: {
        'min': 40,
        'max': 100
    }
});

sliderVes.noUiSlider.on('update', function (values, handle) {
    console.log(values);
    var from = document.getElementById('ves-from')
    var to = document.getElementById('ves-to')
    from.value = values[0];
    to.value = values[1];
});

var sliderGrud = document.getElementById('grud');

noUiSlider.create(sliderGrud, {
    start: [0, 8],
    connect: true,
    step: 1,
    format: wNumb({
        decimals: 0
    }),
    range: {
        'min': 0,
        'max': 8
    }
});

sliderGrud.noUiSlider.on('update', function (values, handle) {
    console.log(values);
    var from = document.getElementById('grud-from')
    var to = document.getElementById('grud-to')
    from.value = values[0];
    to.value = values[1];
});


var sliderPrice = document.getElementById('price');

noUiSlider.create(sliderPrice, {
    start: [1500, 50000],
    connect: true,
    step: 100,
    format: wNumb({
        decimals: 0
    }),
    range: {
        'min': 1500,
        'max': 50000
    }
});

sliderPrice.noUiSlider.on('update', function (values, handle) {
    console.log(values);
    var from = document.getElementById('price-from')
    var to = document.getElementById('price-to')
    from.value = values[0];
    to.value = values[1];
});

function showFilter() {
    document.getElementById('filter').classList.toggle('show-filter')
}

var header = $('.header'),
    scrollPrev = 0;

$(window).scroll(function () {
    var scrolled = $(window).scrollTop();

    if (scrolled > 100 && scrolled > scrollPrev) {
        header.addClass('out');
    } else {
        header.removeClass('out');
    }
    scrollPrev = scrolled;
});

function openPost (object){
    var href = $(object).attr('data-url');
    window.location.href = href;
}
