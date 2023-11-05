/*!
 * Foliodot
 * Website a la photo book
 * FILE:     folio.min.js
 * VERSION:  0.6.2
 * DATE:     2018-02-27
 * URL:      https://foliodot.com
 * LICENSE:  Copyright 2018. Progressivered doo. All rights reserved. This work is subject to the terms at https://foliodot.com/legal/eula
 * AUTHOR:   Stefan Kovac <stef@progressivered.com> (http://progressivered.com/)
 **/

/*!
 * VERSION: 0.14.3
 * DATE: 2015-12-19
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * Requires TweenLite and CSSPlugin version 1.17.0 or later (TweenMax contains both TweenLite and CSSPlugin). ThrowPropsPlugin is required for momentum-based continuation of movement after the mouse/touch is released (ThrowPropsPlugin is a membership benefit of Club GreenSock - http://greensock.com/club/).
 *
 * @license Copyright (c) 2008-2016, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */

/*!
 * VERSION: 0.14.6
 * DATE: 2016-04-26
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * Requires TweenLite and CSSPlugin version 1.17.0 or later (TweenMax contains both TweenLite and CSSPlugin). ThrowPropsPlugin is required for momentum-based continuation of movement after the mouse/touch is released (ThrowPropsPlugin is a membership benefit of Club GreenSock - http://greensock.com/club/).
 *
 * @license Copyright (c) 2008-2016, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */

/*!
 * Mousetrap is a simple keyboard shortcut library for Javascript with
 * no external dependencies
 * Copyright 2013 Craig Campbell
 * @version 1.4.6
 * @url craig.is/killing/mice
 */

/*!
 * https://github.com/laktek/extract-values
 * by Lakshan Perera <lakshan@web2media.net> (http://laktek.com)
 * Copyright (c) 2012 Lakshan Perera
 * Licensed under the MIT license.
 */

/*!
 * Copyright (c) 2010,2011,2012,2013,2014 Morgan Roderick http://roderick.dk
 * License: MIT - http://mrgnrdrck.mit-license.org
 * https://github.com/mroderick/PubSubJS
*/

/*!
 * Grapnel.js
 * https://github.com/EngineeringMode/Grapnel.js
 *
 * @author Greg Sabia Tucker <greg@artificer.io>
 * @link http://artificer.io
 * @version 0.5.8
 *
 * Released under MIT License. See LICENSE.txt or http://opensource.org/licenses/MIT
*/

/*!
 * enquire.js v2.1.1 - Awesome Media Queries in JavaScript
 * Copyright (c) 2014 Nick Williams - http://wicky.nillia.ms/enquire.js
 * License: MIT (http://www.opensource.org/licenses/mit-license.php)
 */

/*!https://github.com/d4nyll/lethargy
 *  Distinguish between scroll events initiated by the user, and those by inertial scrolling
 * /

/*!
 * lazysizes - v0.4 -  Licensed MIT
 */
var _gsScope;
!function(t, e, i, n) {
    ("visibilityState"in e || "webkitVisibilityState"in e || "mozVisibilityState"in e) && "?fallback" !== t.location.search || function() {
        var t = function() {};
        console.error || (console.error = t);
        e.body.className += " fallback on-ready";
        var n = e.head;
        n.querySelectorAll('meta[name="viewport"]').length || n.insertAdjacentHTML("afterbegin", '<meta charset="utf-8"> <meta http-equiv="X-UA-Compatible" content="IE=edge">  <meta name="HandheldFriendly" content="True">  <meta name="MobileOptimized" content="0"> <meta name="viewport" content="user-scalable=no, width=device-width, initial-scale=1, maximum-scale=1"> ');
        for (var s = e.querySelectorAll("img"), r = 0; r < s.length; r++) {
            var o = s[r]
              , a = o.getAttribute("data-src");
            a && (o.src = a,
            o.removeAttribute("data-src"))
        }
        for (var l = e.querySelectorAll("[hash]"), u = 0; u < l.length; u++) {
            var h = l[u];
            h.hasAttribute("id") || (h.setAttribute("id", "/" + h.getAttribute("hash")),
            h.removeAttribute("hash"))
        }
        var c = e.querySelector("aside > header");
        throw c && e.body.insertAdjacentHTML("afterbegin", c.outerHTML),
        i.init = t,
        e.body.style.opacity = 1,
        new Error("Browser not supported! Displaying basic fallback version.")
    }()
}(window, document, window.FOLIO = window.FOLIO || {}),
Object.create || (Object.create = function(t) {
    if (arguments.length > 1)
        throw new Error("Object.create implementation only accepts the first parameter.");
    function e() {}
    return e.prototype = t,
    new e
}
),
function(t, e, i) {
    function n(t, e, i) {
        t.addEventListener ? t.addEventListener(e, i, !1) : t.attachEvent("on" + e, i)
    }
    function s(t) {
        if ("keypress" == t.type) {
            var e = String.fromCharCode(t.which);
            return t.shiftKey || (e = e.toLowerCase()),
            e
        }
        return d[t.which] ? d[t.which] : g[t.which] ? g[t.which] : String.fromCharCode(t.which).toLowerCase()
    }
    function r(t) {
        t = t || {};
        var e, i = !1;
        for (e in b)
            t[e] ? i = !0 : b[e] = 0;
        i || (T = !1)
    }
    function o(t, e, i, n, s, r) {
        var o, a, l = [], h = i.type;
        if (!v[t])
            return [];
        for ("keyup" == h && u(t) && (e = [t]),
        o = 0; o < v[t].length; ++o)
            if (a = v[t][o],
            !(!n && a.seq && b[a.seq] != a.level || h != a.action || ("keypress" != h || i.metaKey || i.ctrlKey) && e.sort().join(",") !== a.modifiers.sort().join(","))) {
                var c = n && a.seq == n && a.level == r;
                (!n && a.combo == s || c) && v[t].splice(o, 1),
                l.push(a)
            }
        return l
    }
    function a(t, e, i, n) {
        P.stopCallback(e, e.target || e.srcElement, i, n) || !1 !== t(e, i) || (e.preventDefault ? e.preventDefault() : e.returnValue = !1,
        e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0)
    }
    function l(t) {
        "number" != typeof t.which && (t.which = t.keyCode);
        var e, i, n = s(t);
        n && ("keyup" == t.type && w === n ? w = !1 : P.handleKey(n, (i = [],
        (e = t).shiftKey && i.push("shift"),
        e.altKey && i.push("alt"),
        e.ctrlKey && i.push("ctrl"),
        e.metaKey && i.push("meta"),
        i), t))
    }
    function u(t) {
        return "shift" == t || "ctrl" == t || "alt" == t || "meta" == t
    }
    function h(t, e) {
        var i, n, s, r = [];
        for (i = "+" === t ? ["+"] : t.split("+"),
        s = 0; s < i.length; ++s)
            n = i[s],
            _[n] && (n = _[n]),
            e && "keypress" != e && m[n] && (n = m[n],
            r.push("shift")),
            u(n) && r.push(n);
        if (i = n,
        !(s = e)) {
            if (!p)
                for (var o in p = {},
                d)
                    95 < o && 112 > o || d.hasOwnProperty(o) && (p[d[o]] = o);
            s = p[i] ? "keydown" : "keypress"
        }
        return "keypress" == s && r.length && (s = "keydown"),
        {
            key: n,
            modifiers: r,
            action: s
        }
    }
    function c(t, e, i, n, l) {
        y[t + ":" + i] = e;
        var u = (t = t.replace(/\s+/g, " ")).split(" ");
        1 < u.length ? function(t, e, i, n) {
            function o(e) {
                return function() {
                    T = e,
                    ++b[t],
                    clearTimeout(f),
                    f = setTimeout(r, 1e3)
                }
            }
            function l(e) {
                a(i, e, t),
                "keyup" !== n && (w = s(e)),
                setTimeout(r, 10)
            }
            for (var u = b[t] = 0; u < e.length; ++u) {
                var p = u + 1 === e.length ? l : o(n || h(e[u + 1]).action);
                c(e[u], p, n, t, u)
            }
        }(t, u, e, i) : (i = h(t, i),
        v[i.key] = v[i.key] || [],
        o(i.key, i.modifiers, {
            type: i.action
        }, n, t, l),
        v[i.key][n ? "unshift" : "push"]({
            callback: e,
            modifiers: i.modifiers,
            action: i.action,
            seq: n,
            level: l,
            combo: t
        }))
    }
    var p, f, d = {
        8: "backspace",
        9: "tab",
        13: "enter",
        16: "shift",
        17: "ctrl",
        18: "alt",
        20: "capslock",
        27: "esc",
        32: "space",
        33: "pageup",
        34: "pagedown",
        35: "end",
        36: "home",
        37: "left",
        38: "up",
        39: "right",
        40: "down",
        45: "ins",
        46: "del",
        91: "meta",
        93: "meta",
        224: "meta"
    }, g = {
        106: "*",
        107: "+",
        109: "-",
        110: ".",
        111: "/",
        186: ";",
        187: "=",
        188: ",",
        189: "-",
        190: ".",
        191: "/",
        192: "`",
        219: "[",
        220: "\\",
        221: "]",
        222: "'"
    }, m = {
        "~": "`",
        "!": "1",
        "@": "2",
        "#": "3",
        $: "4",
        "%": "5",
        "^": "6",
        "&": "7",
        "*": "8",
        "(": "9",
        ")": "0",
        _: "-",
        "+": "=",
        ":": ";",
        '"': "'",
        "<": ",",
        ">": ".",
        "?": "/",
        "|": "\\"
    }, _ = {
        option: "alt",
        command: "meta",
        return: "enter",
        escape: "esc",
        mod: /Mac|iPod|iPhone|iPad/.test(navigator.platform) ? "meta" : "ctrl"
    }, v = {}, y = {}, b = {}, w = !1, x = !1, T = !1;
    for (i = 1; 20 > i; ++i)
        d[111 + i] = "f" + i;
    for (i = 0; 9 >= i; ++i)
        d[i + 96] = i;
    n(e, "keypress", l),
    n(e, "keydown", l),
    n(e, "keyup", l);
    var P = {
        bind: function(t, e, i) {
            t = t instanceof Array ? t : [t];
            for (var n = 0; n < t.length; ++n)
                c(t[n], e, i);
            return this
        },
        unbind: function(t, e) {
            return P.bind(t, function() {}, e)
        },
        trigger: function(t, e) {
            return y[t + ":" + e] && y[t + ":" + e]({}, t),
            this
        },
        reset: function() {
            return v = {},
            y = {},
            this
        },
        stopCallback: function(t, e) {
            return !(-1 < (" " + e.className + " ").indexOf(" mousetrap ")) && ("INPUT" == e.tagName || "SELECT" == e.tagName || "TEXTAREA" == e.tagName || e.isContentEditable)
        },
        handleKey: function(t, e, i) {
            var n, s = o(t, e, i);
            e = {};
            var l = 0
              , h = !1;
            for (n = 0; n < s.length; ++n)
                s[n].seq && (l = Math.max(l, s[n].level));
            for (n = 0; n < s.length; ++n)
                s[n].seq ? s[n].level == l && (h = !0,
                e[s[n].seq] = 1,
                a(s[n].callback, i, s[n].combo, s[n].seq)) : h || a(s[n].callback, i, s[n].combo);
            s = "keypress" == i.type && x,
            i.type != T || u(t) || s || r(e),
            x = h && "keydown" == i.type
        }
    };
    t.Mousetrap = P,
    "function" == typeof define && define.amd && define(P)
}(window, document),
function(t, e) {
    "use strict";
    if ("function" == typeof define && define.amd)
        define(["exports"], e);
    else if ("object" == typeof exports)
        e(exports);
    else {
        var i = {};
        t.PubSub = i,
        e(i)
    }
}("object" == typeof window && window || this, function(t) {
    "use strict";
    var e = {}
      , i = -1;
    function n(t) {
        var e;
        for (e in t)
            if (t.hasOwnProperty(e))
                return !0;
        return !1
    }
    function s(t, e, i) {
        try {
            t(e, i)
        } catch (t) {
            setTimeout((n = t,
            function() {
                throw n
            }
            ), 0)
        }
        var n
    }
    function r(t, e, i) {
        t(e, i)
    }
    function o(t, i, n, o) {
        var a, l = e[i], u = o ? r : s;
        if (e.hasOwnProperty(i))
            for (a in l)
                l.hasOwnProperty(a) && u(l[a], t, n)
    }
    function a(t, i, s, r) {
        var a, l, u, h = (a = t,
        l = i,
        u = r,
        function() {
            var t = String(a)
              , e = t.lastIndexOf(".");
            for (o(a, a, l, u); -1 !== e; )
                e = (t = t.substr(0, e)).lastIndexOf("."),
                o(a, t, l, u)
        }
        );
        return !!function(t) {
            for (var i = String(t), s = Boolean(e.hasOwnProperty(i) && n(e[i])), r = i.lastIndexOf("."); !s && -1 !== r; )
                r = (i = i.substr(0, r)).lastIndexOf("."),
                s = Boolean(e.hasOwnProperty(i) && n(e[i]));
            return s
        }(t) && (!0 === s ? h() : setTimeout(h, 0),
        !0)
    }
    t.publish = function(e, i) {
        return a(e, i, !1, t.immediateExceptions)
    }
    ,
    t.publishSync = function(e, i) {
        return a(e, i, !0, t.immediateExceptions)
    }
    ,
    t.subscribe = function(t, n) {
        if ("function" != typeof n)
            return !1;
        e.hasOwnProperty(t) || (e[t] = {});
        var s = "uid_" + String(++i);
        return e[t][s] = n,
        s
    }
    ,
    t.clearAllSubscriptions = function() {
        e = {}
    }
    ,
    t.clearSubscriptions = function(t) {
        var i;
        for (i in e)
            e.hasOwnProperty(i) && 0 === i.indexOf(t) && delete e[i]
    }
    ,
    t.unsubscribe = function(t) {
        var i, n, s, r = "string" == typeof t && e.hasOwnProperty(t), o = !r && "string" == typeof t, a = "function" == typeof t, l = !1;
        if (!r) {
            for (i in e)
                if (e.hasOwnProperty(i)) {
                    if (n = e[i],
                    o && n[t]) {
                        delete n[t],
                        l = t;
                        break
                    }
                    if (a)
                        for (s in n)
                            n.hasOwnProperty(s) && n[s] === t && (delete n[s],
                            l = !0)
                }
            return l
        }
        delete e[t]
    }
}),
((_gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window)._gsQueue || (_gsScope._gsQueue = [])).push(function() {
    "use strict";
    var t, e, i, n, s, r, o, a, l, u, h, c, p, f, d, g, m;
    _gsScope._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(t, e, i) {
        var n = function(t) {
            var e, i = [], n = t.length;
            for (e = 0; e !== n; i.push(t[e++]))
                ;
            return i
        }
          , s = function(t, e, i) {
            var n, s, r = t.cycle;
            for (n in r)
                s = r[n],
                t[n] = "function" == typeof s ? s.call(e[i], i) : s[i % s.length];
            delete t.cycle
        }
          , r = function(t, e, n) {
            i.call(this, t, e, n),
            this._cycle = 0,
            this._yoyo = !0 === this.vars.yoyo,
            this._repeat = this.vars.repeat || 0,
            this._repeatDelay = this.vars.repeatDelay || 0,
            this._dirty = !0,
            this.render = r.prototype.render
        }
          , o = 1e-10
          , a = i._internals
          , l = a.isSelector
          , u = a.isArray
          , h = r.prototype = i.to({}, .1, {})
          , c = [];
        r.version = "1.18.4",
        h.constructor = r,
        h.kill()._gc = !1,
        r.killTweensOf = r.killDelayedCallsTo = i.killTweensOf,
        r.getTweensOf = i.getTweensOf,
        r.lagSmoothing = i.lagSmoothing,
        r.ticker = i.ticker,
        r.render = i.render,
        h.invalidate = function() {
            return this._yoyo = !0 === this.vars.yoyo,
            this._repeat = this.vars.repeat || 0,
            this._repeatDelay = this.vars.repeatDelay || 0,
            this._uncache(!0),
            i.prototype.invalidate.call(this)
        }
        ,
        h.updateTo = function(t, e) {
            var n, s = this.ratio, r = this.vars.immediateRender || t.immediateRender;
            for (n in e && this._startTime < this._timeline._time && (this._startTime = this._timeline._time,
            this._uncache(!1),
            this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay)),
            t)
                this.vars[n] = t[n];
            if (this._initted || r)
                if (e)
                    this._initted = !1,
                    r && this.render(0, !0, !0);
                else if (this._gc && this._enabled(!0, !1),
                this._notifyPluginsOfEnabled && this._firstPT && i._onPluginEvent("_onDisable", this),
                this._time / this._duration > .998) {
                    var o = this._totalTime;
                    this.render(0, !0, !1),
                    this._initted = !1,
                    this.render(o, !0, !1)
                } else if (this._initted = !1,
                this._init(),
                this._time > 0 || r)
                    for (var a, l = 1 / (1 - s), u = this._firstPT; u; )
                        a = u.s + u.c,
                        u.c *= l,
                        u.s = a - u.c,
                        u = u._next;
            return this
        }
        ,
        h.render = function(t, e, i) {
            this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
            var n, s, r, l, u, h, c, p, f = this._dirty ? this.totalDuration() : this._totalDuration, d = this._time, g = this._totalTime, m = this._cycle, _ = this._duration, v = this._rawPrevTime;
            if (t >= f - 1e-7 ? (this._totalTime = f,
            this._cycle = this._repeat,
            this._yoyo && 0 != (1 & this._cycle) ? (this._time = 0,
            this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = _,
            this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1),
            this._reversed || (n = !0,
            s = "onComplete",
            i = i || this._timeline.autoRemoveChildren),
            0 === _ && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0),
            (0 > v || 0 >= t && t >= -1e-7 || v === o && "isPause" !== this.data) && v !== t && (i = !0,
            v > o && (s = "onReverseComplete")),
            this._rawPrevTime = p = !e || t || v === t ? t : o)) : 1e-7 > t ? (this._totalTime = this._time = this._cycle = 0,
            this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0,
            (0 !== g || 0 === _ && v > 0) && (s = "onReverseComplete",
            n = this._reversed),
            0 > t && (this._active = !1,
            0 === _ && (this._initted || !this.vars.lazy || i) && (v >= 0 && (i = !0),
            this._rawPrevTime = p = !e || t || v === t ? t : o)),
            this._initted || (i = !0)) : (this._totalTime = this._time = t,
            0 !== this._repeat && (l = _ + this._repeatDelay,
            this._cycle = this._totalTime / l >> 0,
            0 !== this._cycle && this._cycle === this._totalTime / l && t >= g && this._cycle--,
            this._time = this._totalTime - this._cycle * l,
            this._yoyo && 0 != (1 & this._cycle) && (this._time = _ - this._time),
            this._time > _ ? this._time = _ : this._time < 0 && (this._time = 0)),
            this._easeType ? (u = this._time / _,
            (1 === (h = this._easeType) || 3 === h && u >= .5) && (u = 1 - u),
            3 === h && (u *= 2),
            1 === (c = this._easePower) ? u *= u : 2 === c ? u *= u * u : 3 === c ? u *= u * u * u : 4 === c && (u *= u * u * u * u),
            1 === h ? this.ratio = 1 - u : 2 === h ? this.ratio = u : this._time / _ < .5 ? this.ratio = u / 2 : this.ratio = 1 - u / 2) : this.ratio = this._ease.getRatio(this._time / _)),
            d !== this._time || i || m !== this._cycle) {
                if (!this._initted) {
                    if (this._init(),
                    !this._initted || this._gc)
                        return;
                    if (!i && this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration))
                        return this._time = d,
                        this._totalTime = g,
                        this._rawPrevTime = v,
                        this._cycle = m,
                        a.lazyTweens.push(this),
                        void (this._lazy = [t, e]);
                    this._time && !n ? this.ratio = this._ease.getRatio(this._time / _) : n && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                }
                for (!1 !== this._lazy && (this._lazy = !1),
                this._active || !this._paused && this._time !== d && t >= 0 && (this._active = !0),
                0 === g && (2 === this._initted && t > 0 && this._init(),
                this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : s || (s = "_dummyGS")),
                this.vars.onStart && (0 !== this._totalTime || 0 === _) && (e || this._callback("onStart"))),
                r = this._firstPT; r; )
                    r.f ? r.t[r.p](r.c * this.ratio + r.s) : r.t[r.p] = r.c * this.ratio + r.s,
                    r = r._next;
                this._onUpdate && (0 > t && this._startAt && this._startTime && this._startAt.render(t, e, i),
                e || (this._totalTime !== g || s) && this._callback("onUpdate")),
                this._cycle !== m && (e || this._gc || this.vars.onRepeat && this._callback("onRepeat")),
                s && (!this._gc || i) && (0 > t && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(t, e, i),
                n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1),
                this._active = !1),
                !e && this.vars[s] && this._callback(s),
                0 === _ && this._rawPrevTime === o && p !== o && (this._rawPrevTime = 0))
            } else
                g !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate"))
        }
        ,
        r.to = function(t, e, i) {
            return new r(t,e,i)
        }
        ,
        r.from = function(t, e, i) {
            return i.runBackwards = !0,
            i.immediateRender = 0 != i.immediateRender,
            new r(t,e,i)
        }
        ,
        r.fromTo = function(t, e, i, n) {
            return n.startAt = i,
            n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender,
            new r(t,e,n)
        }
        ,
        r.staggerTo = r.allTo = function(t, e, o, a, h, p, f) {
            a = a || 0;
            var d, g, m, _, v = 0, y = [], b = function() {
                o.onComplete && o.onComplete.apply(o.onCompleteScope || this, arguments),
                h.apply(f || o.callbackScope || this, p || c)
            }, w = o.cycle, x = o.startAt && o.startAt.cycle;
            for (u(t) || ("string" == typeof t && (t = i.selector(t) || t),
            l(t) && (t = n(t))),
            t = t || [],
            0 > a && ((t = n(t)).reverse(),
            a *= -1),
            d = t.length - 1,
            m = 0; d >= m; m++) {
                for (_ in g = {},
                o)
                    g[_] = o[_];
                if (w && s(g, t, m),
                x) {
                    for (_ in x = g.startAt = {},
                    o.startAt)
                        x[_] = o.startAt[_];
                    s(g.startAt, t, m)
                }
                g.delay = v + (g.delay || 0),
                m === d && h && (g.onComplete = b),
                y[m] = new r(t[m],e,g),
                v += a
            }
            return y
        }
        ,
        r.staggerFrom = r.allFrom = function(t, e, i, n, s, o, a) {
            return i.runBackwards = !0,
            i.immediateRender = 0 != i.immediateRender,
            r.staggerTo(t, e, i, n, s, o, a)
        }
        ,
        r.staggerFromTo = r.allFromTo = function(t, e, i, n, s, o, a, l) {
            return n.startAt = i,
            n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender,
            r.staggerTo(t, e, n, s, o, a, l)
        }
        ,
        r.delayedCall = function(t, e, i, n, s) {
            return new r(e,0,{
                delay: t,
                onComplete: e,
                onCompleteParams: i,
                callbackScope: n,
                onReverseComplete: e,
                onReverseCompleteParams: i,
                immediateRender: !1,
                useFrames: s,
                overwrite: 0
            })
        }
        ,
        r.set = function(t, e) {
            return new r(t,0,e)
        }
        ,
        r.isTweening = function(t) {
            return i.getTweensOf(t, !0).length > 0
        }
        ;
        var p = function(t, e) {
            for (var n = [], s = 0, r = t._first; r; )
                r instanceof i ? n[s++] = r : (e && (n[s++] = r),
                s = (n = n.concat(p(r, e))).length),
                r = r._next;
            return n
        }
          , f = r.getAllTweens = function(e) {
            return p(t._rootTimeline, e).concat(p(t._rootFramesTimeline, e))
        }
        ;
        r.killAll = function(t, i, n, s) {
            null == i && (i = !0),
            null == n && (n = !0);
            var r, o, a, l = f(0 != s), u = l.length, h = i && n && s;
            for (a = 0; u > a; a++)
                o = l[a],
                (h || o instanceof e || (r = o.target === o.vars.onComplete) && n || i && !r) && (t ? o.totalTime(o._reversed ? 0 : o.totalDuration()) : o._enabled(!1, !1))
        }
        ,
        r.killChildTweensOf = function(t, e) {
            if (null != t) {
                var s, o, h, c, p, f = a.tweenLookup;
                if ("string" == typeof t && (t = i.selector(t) || t),
                l(t) && (t = n(t)),
                u(t))
                    for (c = t.length; --c > -1; )
                        r.killChildTweensOf(t[c], e);
                else {
                    for (h in s = [],
                    f)
                        for (o = f[h].target.parentNode; o; )
                            o === t && (s = s.concat(f[h].tweens)),
                            o = o.parentNode;
                    for (p = s.length,
                    c = 0; p > c; c++)
                        e && s[c].totalTime(s[c].totalDuration()),
                        s[c]._enabled(!1, !1)
                }
            }
        }
        ;
        var d = function(t, i, n, s) {
            i = !1 !== i,
            n = !1 !== n;
            for (var r, o, a = f(s = !1 !== s), l = i && n && s, u = a.length; --u > -1; )
                o = a[u],
                (l || o instanceof e || (r = o.target === o.vars.onComplete) && n || i && !r) && o.paused(t)
        };
        return r.pauseAll = function(t, e, i) {
            d(!0, t, e, i)
        }
        ,
        r.resumeAll = function(t, e, i) {
            d(!1, t, e, i)
        }
        ,
        r.globalTimeScale = function(e) {
            var n = t._rootTimeline
              , s = i.ticker.time;
            return arguments.length ? (e = e || o,
            n._startTime = s - (s - n._startTime) * n._timeScale / e,
            n = t._rootFramesTimeline,
            s = i.ticker.frame,
            n._startTime = s - (s - n._startTime) * n._timeScale / e,
            n._timeScale = t._rootTimeline._timeScale = e,
            e) : n._timeScale
        }
        ,
        h.progress = function(t, e) {
            return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration()
        }
        ,
        h.totalProgress = function(t, e) {
            return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration()
        }
        ,
        h.time = function(t, e) {
            return arguments.length ? (this._dirty && this.totalDuration(),
            t > this._duration && (t = this._duration),
            this._yoyo && 0 != (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)),
            this.totalTime(t, e)) : this._time
        }
        ,
        h.duration = function(e) {
            return arguments.length ? t.prototype.duration.call(this, e) : this._duration
        }
        ,
        h.totalDuration = function(t) {
            return arguments.length ? -1 === this._repeat ? this : this.duration((t - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat,
            this._dirty = !1),
            this._totalDuration)
        }
        ,
        h.repeat = function(t) {
            return arguments.length ? (this._repeat = t,
            this._uncache(!0)) : this._repeat
        }
        ,
        h.repeatDelay = function(t) {
            return arguments.length ? (this._repeatDelay = t,
            this._uncache(!0)) : this._repeatDelay
        }
        ,
        h.yoyo = function(t) {
            return arguments.length ? (this._yoyo = t,
            this) : this._yoyo
        }
        ,
        r
    }, !0),
    _gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(t, e, i) {
        var n = function(t) {
            e.call(this, t),
            this._labels = {},
            this.autoRemoveChildren = !0 === this.vars.autoRemoveChildren,
            this.smoothChildTiming = !0 === this.vars.smoothChildTiming,
            this._sortChildren = !0,
            this._onUpdate = this.vars.onUpdate;
            var i, n, s = this.vars;
            for (n in s)
                i = s[n],
                l(i) && -1 !== i.join("").indexOf("{self}") && (s[n] = this._swapSelfInParams(i));
            l(s.tweens) && this.add(s.tweens, 0, s.align, s.stagger)
        }
          , s = 1e-10
          , r = i._internals
          , o = n._internals = {}
          , a = r.isSelector
          , l = r.isArray
          , u = r.lazyTweens
          , h = r.lazyRender
          , c = _gsScope._gsDefine.globals
          , p = function(t) {
            var e, i = {};
            for (e in t)
                i[e] = t[e];
            return i
        }
          , f = function(t, e, i) {
            var n, s, r = t.cycle;
            for (n in r)
                s = r[n],
                t[n] = "function" == typeof s ? s.call(e[i], i) : s[i % s.length];
            delete t.cycle
        }
          , d = o.pauseCallback = function() {}
          , g = function(t) {
            var e, i = [], n = t.length;
            for (e = 0; e !== n; i.push(t[e++]))
                ;
            return i
        }
          , m = n.prototype = new e;
        return n.version = "1.18.4",
        m.constructor = n,
        m.kill()._gc = m._forcingPlayhead = m._hasPause = !1,
        m.to = function(t, e, n, s) {
            var r = n.repeat && c.TweenMax || i;
            return e ? this.add(new r(t,e,n), s) : this.set(t, n, s)
        }
        ,
        m.from = function(t, e, n, s) {
            return this.add((n.repeat && c.TweenMax || i).from(t, e, n), s)
        }
        ,
        m.fromTo = function(t, e, n, s, r) {
            var o = s.repeat && c.TweenMax || i;
            return e ? this.add(o.fromTo(t, e, n, s), r) : this.set(t, s, r)
        }
        ,
        m.staggerTo = function(t, e, s, r, o, l, u, h) {
            var c, d, m = new n({
                onComplete: l,
                onCompleteParams: u,
                callbackScope: h,
                smoothChildTiming: this.smoothChildTiming
            }), _ = s.cycle;
            for ("string" == typeof t && (t = i.selector(t) || t),
            a(t = t || []) && (t = g(t)),
            0 > (r = r || 0) && ((t = g(t)).reverse(),
            r *= -1),
            d = 0; d < t.length; d++)
                (c = p(s)).startAt && (c.startAt = p(c.startAt),
                c.startAt.cycle && f(c.startAt, t, d)),
                _ && f(c, t, d),
                m.to(t[d], e, c, d * r);
            return this.add(m, o)
        }
        ,
        m.staggerFrom = function(t, e, i, n, s, r, o, a) {
            return i.immediateRender = 0 != i.immediateRender,
            i.runBackwards = !0,
            this.staggerTo(t, e, i, n, s, r, o, a)
        }
        ,
        m.staggerFromTo = function(t, e, i, n, s, r, o, a, l) {
            return n.startAt = i,
            n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender,
            this.staggerTo(t, e, n, s, r, o, a, l)
        }
        ,
        m.call = function(t, e, n, s) {
            return this.add(i.delayedCall(0, t, e, n), s)
        }
        ,
        m.set = function(t, e, n) {
            return n = this._parseTimeOrLabel(n, 0, !0),
            null == e.immediateRender && (e.immediateRender = n === this._time && !this._paused),
            this.add(new i(t,0,e), n)
        }
        ,
        n.exportRoot = function(t, e) {
            null == (t = t || {}).smoothChildTiming && (t.smoothChildTiming = !0);
            var s, r, o = new n(t), a = o._timeline;
            for (null == e && (e = !0),
            a._remove(o, !0),
            o._startTime = 0,
            o._rawPrevTime = o._time = o._totalTime = a._time,
            s = a._first; s; )
                r = s._next,
                e && s instanceof i && s.target === s.vars.onComplete || o.add(s, s._startTime - s._delay),
                s = r;
            return a.add(o, 0),
            o
        }
        ,
        m.add = function(s, r, o, a) {
            var u, h, c, p, f, d;
            if ("number" != typeof r && (r = this._parseTimeOrLabel(r, 0, !0, s)),
            !(s instanceof t)) {
                if (s instanceof Array || s && s.push && l(s)) {
                    for (o = o || "normal",
                    a = a || 0,
                    u = r,
                    h = s.length,
                    c = 0; h > c; c++)
                        l(p = s[c]) && (p = new n({
                            tweens: p
                        })),
                        this.add(p, u),
                        "string" != typeof p && "function" != typeof p && ("sequence" === o ? u = p._startTime + p.totalDuration() / p._timeScale : "start" === o && (p._startTime -= p.delay())),
                        u += a;
                    return this._uncache(!0)
                }
                if ("string" == typeof s)
                    return this.addLabel(s, r);
                if ("function" != typeof s)
                    throw "Cannot add " + s + " into the timeline; it is not a tween, timeline, function, or string.";
                s = i.delayedCall(0, s)
            }
            if (e.prototype.add.call(this, s, r),
            (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration())
                for (d = (f = this).rawTime() > s._startTime; f._timeline; )
                    d && f._timeline.smoothChildTiming ? f.totalTime(f._totalTime, !0) : f._gc && f._enabled(!0, !1),
                    f = f._timeline;
            return this
        }
        ,
        m.remove = function(e) {
            if (e instanceof t) {
                this._remove(e, !1);
                var i = e._timeline = e.vars.useFrames ? t._rootFramesTimeline : t._rootTimeline;
                return e._startTime = (e._paused ? e._pauseTime : i._time) - (e._reversed ? e.totalDuration() - e._totalTime : e._totalTime) / e._timeScale,
                this
            }
            if (e instanceof Array || e && e.push && l(e)) {
                for (var n = e.length; --n > -1; )
                    this.remove(e[n]);
                return this
            }
            return "string" == typeof e ? this.removeLabel(e) : this.kill(null, e)
        }
        ,
        m._remove = function(t, i) {
            e.prototype._remove.call(this, t, i);
            var n = this._last;
            return n ? this._time > n._startTime + n._totalDuration / n._timeScale && (this._time = this.duration(),
            this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0,
            this
        }
        ,
        m.append = function(t, e) {
            return this.add(t, this._parseTimeOrLabel(null, e, !0, t))
        }
        ,
        m.insert = m.insertMultiple = function(t, e, i, n) {
            return this.add(t, e || 0, i, n)
        }
        ,
        m.appendMultiple = function(t, e, i, n) {
            return this.add(t, this._parseTimeOrLabel(null, e, !0, t), i, n)
        }
        ,
        m.addLabel = function(t, e) {
            return this._labels[t] = this._parseTimeOrLabel(e),
            this
        }
        ,
        m.addPause = function(t, e, n, s) {
            var r = i.delayedCall(0, d, n, s || this);
            return r.vars.onComplete = r.vars.onReverseComplete = e,
            r.data = "isPause",
            this._hasPause = !0,
            this.add(r, t)
        }
        ,
        m.removeLabel = function(t) {
            return delete this._labels[t],
            this
        }
        ,
        m.getLabelTime = function(t) {
            return null != this._labels[t] ? this._labels[t] : -1
        }
        ,
        m._parseTimeOrLabel = function(e, i, n, s) {
            var r;
            if (s instanceof t && s.timeline === this)
                this.remove(s);
            else if (s && (s instanceof Array || s.push && l(s)))
                for (r = s.length; --r > -1; )
                    s[r]instanceof t && s[r].timeline === this && this.remove(s[r]);
            if ("string" == typeof i)
                return this._parseTimeOrLabel(i, n && "number" == typeof e && null == this._labels[i] ? e - this.duration() : 0, n);
            if (i = i || 0,
            "string" != typeof e || !isNaN(e) && null == this._labels[e])
                null == e && (e = this.duration());
            else {
                if (-1 === (r = e.indexOf("=")))
                    return null == this._labels[e] ? n ? this._labels[e] = this.duration() + i : i : this._labels[e] + i;
                i = parseInt(e.charAt(r - 1) + "1", 10) * Number(e.substr(r + 1)),
                e = r > 1 ? this._parseTimeOrLabel(e.substr(0, r - 1), 0, n) : this.duration()
            }
            return Number(e) + i
        }
        ,
        m.seek = function(t, e) {
            return this.totalTime("number" == typeof t ? t : this._parseTimeOrLabel(t), !1 !== e)
        }
        ,
        m.stop = function() {
            return this.paused(!0)
        }
        ,
        m.gotoAndPlay = function(t, e) {
            return this.play(t, e)
        }
        ,
        m.gotoAndStop = function(t, e) {
            return this.pause(t, e)
        }
        ,
        m.render = function(t, e, i) {
            this._gc && this._enabled(!0, !1);
            var n, r, o, a, l, c, p, f = this._dirty ? this.totalDuration() : this._totalDuration, d = this._time, g = this._startTime, m = this._timeScale, _ = this._paused;
            if (t >= f - 1e-7)
                this._totalTime = this._time = f,
                this._reversed || this._hasPausedChild() || (r = !0,
                a = "onComplete",
                l = !!this._timeline.autoRemoveChildren,
                0 === this._duration && (0 >= t && t >= -1e-7 || this._rawPrevTime < 0 || this._rawPrevTime === s) && this._rawPrevTime !== t && this._first && (l = !0,
                this._rawPrevTime > s && (a = "onReverseComplete"))),
                this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : s,
                t = f + 1e-4;
            else if (1e-7 > t)
                if (this._totalTime = this._time = 0,
                (0 !== d || 0 === this._duration && this._rawPrevTime !== s && (this._rawPrevTime > 0 || 0 > t && this._rawPrevTime >= 0)) && (a = "onReverseComplete",
                r = this._reversed),
                0 > t)
                    this._active = !1,
                    this._timeline.autoRemoveChildren && this._reversed ? (l = r = !0,
                    a = "onReverseComplete") : this._rawPrevTime >= 0 && this._first && (l = !0),
                    this._rawPrevTime = t;
                else {
                    if (this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : s,
                    0 === t && r)
                        for (n = this._first; n && 0 === n._startTime; )
                            n._duration || (r = !1),
                            n = n._next;
                    t = 0,
                    this._initted || (l = !0)
                }
            else {
                if (this._hasPause && !this._forcingPlayhead && !e) {
                    if (t >= d)
                        for (n = this._first; n && n._startTime <= t && !c; )
                            n._duration || "isPause" !== n.data || n.ratio || 0 === n._startTime && 0 === this._rawPrevTime || (c = n),
                            n = n._next;
                    else
                        for (n = this._last; n && n._startTime >= t && !c; )
                            n._duration || "isPause" === n.data && n._rawPrevTime > 0 && (c = n),
                            n = n._prev;
                    c && (this._time = t = c._startTime,
                    this._totalTime = t + this._cycle * (this._totalDuration + this._repeatDelay))
                }
                this._totalTime = this._time = this._rawPrevTime = t
            }
            if (this._time !== d && this._first || i || l || c) {
                if (this._initted || (this._initted = !0),
                this._active || !this._paused && this._time !== d && t > 0 && (this._active = !0),
                0 === d && this.vars.onStart && 0 !== this._time && (e || this._callback("onStart")),
                (p = this._time) >= d)
                    for (n = this._first; n && (o = n._next,
                    p === this._time && (!this._paused || _)); )
                        (n._active || n._startTime <= p && !n._paused && !n._gc) && (c === n && this.pause(),
                        n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)),
                        n = o;
                else
                    for (n = this._last; n && (o = n._prev,
                    p === this._time && (!this._paused || _)); ) {
                        if (n._active || n._startTime <= d && !n._paused && !n._gc) {
                            if (c === n) {
                                for (c = n._prev; c && c.endTime() > this._time; )
                                    c.render(c._reversed ? c.totalDuration() - (t - c._startTime) * c._timeScale : (t - c._startTime) * c._timeScale, e, i),
                                    c = c._prev;
                                c = null,
                                this.pause()
                            }
                            n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)
                        }
                        n = o
                    }
                this._onUpdate && (e || (u.length && h(),
                this._callback("onUpdate"))),
                a && (this._gc || (g === this._startTime || m !== this._timeScale) && (0 === this._time || f >= this.totalDuration()) && (r && (u.length && h(),
                this._timeline.autoRemoveChildren && this._enabled(!1, !1),
                this._active = !1),
                !e && this.vars[a] && this._callback(a)))
            }
        }
        ,
        m._hasPausedChild = function() {
            for (var t = this._first; t; ) {
                if (t._paused || t instanceof n && t._hasPausedChild())
                    return !0;
                t = t._next
            }
            return !1
        }
        ,
        m.getChildren = function(t, e, n, s) {
            s = s || -9999999999;
            for (var r = [], o = this._first, a = 0; o; )
                o._startTime < s || (o instanceof i ? !1 !== e && (r[a++] = o) : (!1 !== n && (r[a++] = o),
                !1 !== t && (a = (r = r.concat(o.getChildren(!0, e, n))).length))),
                o = o._next;
            return r
        }
        ,
        m.getTweensOf = function(t, e) {
            var n, s, r = this._gc, o = [], a = 0;
            for (r && this._enabled(!0, !0),
            s = (n = i.getTweensOf(t)).length; --s > -1; )
                (n[s].timeline === this || e && this._contains(n[s])) && (o[a++] = n[s]);
            return r && this._enabled(!1, !0),
            o
        }
        ,
        m.recent = function() {
            return this._recent
        }
        ,
        m._contains = function(t) {
            for (var e = t.timeline; e; ) {
                if (e === this)
                    return !0;
                e = e.timeline
            }
            return !1
        }
        ,
        m.shiftChildren = function(t, e, i) {
            i = i || 0;
            for (var n, s = this._first, r = this._labels; s; )
                s._startTime >= i && (s._startTime += t),
                s = s._next;
            if (e)
                for (n in r)
                    r[n] >= i && (r[n] += t);
            return this._uncache(!0)
        }
        ,
        m._kill = function(t, e) {
            if (!t && !e)
                return this._enabled(!1, !1);
            for (var i = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1), n = i.length, s = !1; --n > -1; )
                i[n]._kill(t, e) && (s = !0);
            return s
        }
        ,
        m.clear = function(t) {
            var e = this.getChildren(!1, !0, !0)
              , i = e.length;
            for (this._time = this._totalTime = 0; --i > -1; )
                e[i]._enabled(!1, !1);
            return !1 !== t && (this._labels = {}),
            this._uncache(!0)
        }
        ,
        m.invalidate = function() {
            for (var e = this._first; e; )
                e.invalidate(),
                e = e._next;
            return t.prototype.invalidate.call(this)
        }
        ,
        m._enabled = function(t, i) {
            if (t === this._gc)
                for (var n = this._first; n; )
                    n._enabled(t, !0),
                    n = n._next;
            return e.prototype._enabled.call(this, t, i)
        }
        ,
        m.totalTime = function(e, i, n) {
            this._forcingPlayhead = !0;
            var s = t.prototype.totalTime.apply(this, arguments);
            return this._forcingPlayhead = !1,
            s
        }
        ,
        m.duration = function(t) {
            return arguments.length ? (0 !== this.duration() && 0 !== t && this.timeScale(this._duration / t),
            this) : (this._dirty && this.totalDuration(),
            this._duration)
        }
        ,
        m.totalDuration = function(t) {
            if (!arguments.length) {
                if (this._dirty) {
                    for (var e, i, n = 0, s = this._last, r = 999999999999; s; )
                        e = s._prev,
                        s._dirty && s.totalDuration(),
                        s._startTime > r && this._sortChildren && !s._paused ? this.add(s, s._startTime - s._delay) : r = s._startTime,
                        s._startTime < 0 && !s._paused && (n -= s._startTime,
                        this._timeline.smoothChildTiming && (this._startTime += s._startTime / this._timeScale),
                        this.shiftChildren(-s._startTime, !1, -9999999999),
                        r = 0),
                        (i = s._startTime + s._totalDuration / s._timeScale) > n && (n = i),
                        s = e;
                    this._duration = this._totalDuration = n,
                    this._dirty = !1
                }
                return this._totalDuration
            }
            return t && this.totalDuration() ? this.timeScale(this._totalDuration / t) : this
        }
        ,
        m.paused = function(e) {
            if (!e)
                for (var i = this._first, n = this._time; i; )
                    i._startTime === n && "isPause" === i.data && (i._rawPrevTime = 0),
                    i = i._next;
            return t.prototype.paused.apply(this, arguments)
        }
        ,
        m.usesFrames = function() {
            for (var e = this._timeline; e._timeline; )
                e = e._timeline;
            return e === t._rootFramesTimeline
        }
        ,
        m.rawTime = function() {
            return this._paused ? this._totalTime : (this._timeline.rawTime() - this._startTime) * this._timeScale
        }
        ,
        n
    }, !0),
    _gsScope._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function(t, e, i) {
        var n = function(e) {
            t.call(this, e),
            this._repeat = this.vars.repeat || 0,
            this._repeatDelay = this.vars.repeatDelay || 0,
            this._cycle = 0,
            this._yoyo = !0 === this.vars.yoyo,
            this._dirty = !0
        }
          , s = 1e-10
          , r = e._internals
          , o = r.lazyTweens
          , a = r.lazyRender
          , l = new i(null,null,1,0)
          , u = n.prototype = new t;
        return u.constructor = n,
        u.kill()._gc = !1,
        n.version = "1.18.4",
        u.invalidate = function() {
            return this._yoyo = !0 === this.vars.yoyo,
            this._repeat = this.vars.repeat || 0,
            this._repeatDelay = this.vars.repeatDelay || 0,
            this._uncache(!0),
            t.prototype.invalidate.call(this)
        }
        ,
        u.addCallback = function(t, i, n, s) {
            return this.add(e.delayedCall(0, t, n, s), i)
        }
        ,
        u.removeCallback = function(t, e) {
            if (t)
                if (null == e)
                    this._kill(null, t);
                else
                    for (var i = this.getTweensOf(t, !1), n = i.length, s = this._parseTimeOrLabel(e); --n > -1; )
                        i[n]._startTime === s && i[n]._enabled(!1, !1);
            return this
        }
        ,
        u.removePause = function(e) {
            return this.removeCallback(t._internals.pauseCallback, e)
        }
        ,
        u.tweenTo = function(t, i) {
            i = i || {};
            var n, s, r, o = {
                ease: l,
                useFrames: this.usesFrames(),
                immediateRender: !1
            };
            for (s in i)
                o[s] = i[s];
            return o.time = this._parseTimeOrLabel(t),
            n = Math.abs(Number(o.time) - this._time) / this._timeScale || .001,
            r = new e(this,n,o),
            o.onStart = function() {
                r.target.paused(!0),
                r.vars.time !== r.target.time() && n === r.duration() && r.duration(Math.abs(r.vars.time - r.target.time()) / r.target._timeScale),
                i.onStart && r._callback("onStart")
            }
            ,
            r
        }
        ,
        u.tweenFromTo = function(t, e, i) {
            i = i || {},
            t = this._parseTimeOrLabel(t),
            i.startAt = {
                onComplete: this.seek,
                onCompleteParams: [t],
                callbackScope: this
            },
            i.immediateRender = !1 !== i.immediateRender;
            var n = this.tweenTo(e, i);
            return n.duration(Math.abs(n.vars.time - t) / this._timeScale || .001)
        }
        ,
        u.render = function(t, e, i) {
            this._gc && this._enabled(!0, !1);
            var n, r, l, u, h, c, p, f, d = this._dirty ? this.totalDuration() : this._totalDuration, g = this._duration, m = this._time, _ = this._totalTime, v = this._startTime, y = this._timeScale, b = this._rawPrevTime, w = this._paused, x = this._cycle;
            if (t >= d - 1e-7)
                this._locked || (this._totalTime = d,
                this._cycle = this._repeat),
                this._reversed || this._hasPausedChild() || (r = !0,
                u = "onComplete",
                h = !!this._timeline.autoRemoveChildren,
                0 === this._duration && (0 >= t && t >= -1e-7 || 0 > b || b === s) && b !== t && this._first && (h = !0,
                b > s && (u = "onReverseComplete"))),
                this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : s,
                this._yoyo && 0 != (1 & this._cycle) ? this._time = t = 0 : (this._time = g,
                t = g + 1e-4);
            else if (1e-7 > t)
                if (this._locked || (this._totalTime = this._cycle = 0),
                this._time = 0,
                (0 !== m || 0 === g && b !== s && (b > 0 || 0 > t && b >= 0) && !this._locked) && (u = "onReverseComplete",
                r = this._reversed),
                0 > t)
                    this._active = !1,
                    this._timeline.autoRemoveChildren && this._reversed ? (h = r = !0,
                    u = "onReverseComplete") : b >= 0 && this._first && (h = !0),
                    this._rawPrevTime = t;
                else {
                    if (this._rawPrevTime = g || !e || t || this._rawPrevTime === t ? t : s,
                    0 === t && r)
                        for (n = this._first; n && 0 === n._startTime; )
                            n._duration || (r = !1),
                            n = n._next;
                    t = 0,
                    this._initted || (h = !0)
                }
            else if (0 === g && 0 > b && (h = !0),
            this._time = this._rawPrevTime = t,
            this._locked || (this._totalTime = t,
            0 !== this._repeat && (c = g + this._repeatDelay,
            this._cycle = this._totalTime / c >> 0,
            0 !== this._cycle && this._cycle === this._totalTime / c && t >= _ && this._cycle--,
            this._time = this._totalTime - this._cycle * c,
            this._yoyo && 0 != (1 & this._cycle) && (this._time = g - this._time),
            this._time > g ? (this._time = g,
            t = g + 1e-4) : this._time < 0 ? this._time = t = 0 : t = this._time)),
            this._hasPause && !this._forcingPlayhead && !e) {
                if ((t = this._time) >= m)
                    for (n = this._first; n && n._startTime <= t && !p; )
                        n._duration || "isPause" !== n.data || n.ratio || 0 === n._startTime && 0 === this._rawPrevTime || (p = n),
                        n = n._next;
                else
                    for (n = this._last; n && n._startTime >= t && !p; )
                        n._duration || "isPause" === n.data && n._rawPrevTime > 0 && (p = n),
                        n = n._prev;
                p && (this._time = t = p._startTime,
                this._totalTime = t + this._cycle * (this._totalDuration + this._repeatDelay))
            }
            if (this._cycle !== x && !this._locked) {
                var T = this._yoyo && 0 != (1 & x)
                  , P = T === (this._yoyo && 0 != (1 & this._cycle))
                  , S = this._totalTime
                  , C = this._cycle
                  , A = this._rawPrevTime
                  , O = this._time;
                if (this._totalTime = x * g,
                this._cycle < x ? T = !T : this._totalTime += g,
                this._time = m,
                this._rawPrevTime = 0 === g ? b - 1e-4 : b,
                this._cycle = x,
                this._locked = !0,
                m = T ? 0 : g,
                this.render(m, e, 0 === g),
                e || this._gc || this.vars.onRepeat && this._callback("onRepeat"),
                m !== this._time)
                    return;
                if (P && (m = T ? g + 1e-4 : -1e-4,
                this.render(m, !0, !1)),
                this._locked = !1,
                this._paused && !w)
                    return;
                this._time = O,
                this._totalTime = S,
                this._cycle = C,
                this._rawPrevTime = A
            }
            if (this._time !== m && this._first || i || h || p) {
                if (this._initted || (this._initted = !0),
                this._active || !this._paused && this._totalTime !== _ && t > 0 && (this._active = !0),
                0 === _ && this.vars.onStart && 0 !== this._totalTime && (e || this._callback("onStart")),
                (f = this._time) >= m)
                    for (n = this._first; n && (l = n._next,
                    f === this._time && (!this._paused || w)); )
                        (n._active || n._startTime <= this._time && !n._paused && !n._gc) && (p === n && this.pause(),
                        n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)),
                        n = l;
                else
                    for (n = this._last; n && (l = n._prev,
                    f === this._time && (!this._paused || w)); ) {
                        if (n._active || n._startTime <= m && !n._paused && !n._gc) {
                            if (p === n) {
                                for (p = n._prev; p && p.endTime() > this._time; )
                                    p.render(p._reversed ? p.totalDuration() - (t - p._startTime) * p._timeScale : (t - p._startTime) * p._timeScale, e, i),
                                    p = p._prev;
                                p = null,
                                this.pause()
                            }
                            n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)
                        }
                        n = l
                    }
                this._onUpdate && (e || (o.length && a(),
                this._callback("onUpdate"))),
                u && (this._locked || this._gc || (v === this._startTime || y !== this._timeScale) && (0 === this._time || d >= this.totalDuration()) && (r && (o.length && a(),
                this._timeline.autoRemoveChildren && this._enabled(!1, !1),
                this._active = !1),
                !e && this.vars[u] && this._callback(u)))
            } else
                _ !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate"))
        }
        ,
        u.getActive = function(t, e, i) {
            null == t && (t = !0),
            null == e && (e = !0),
            null == i && (i = !1);
            var n, s, r = [], o = this.getChildren(t, e, i), a = 0, l = o.length;
            for (n = 0; l > n; n++)
                (s = o[n]).isActive() && (r[a++] = s);
            return r
        }
        ,
        u.getLabelAfter = function(t) {
            t || 0 !== t && (t = this._time);
            var e, i = this.getLabelsArray(), n = i.length;
            for (e = 0; n > e; e++)
                if (i[e].time > t)
                    return i[e].name;
            return null
        }
        ,
        u.getLabelBefore = function(t) {
            null == t && (t = this._time);
            for (var e = this.getLabelsArray(), i = e.length; --i > -1; )
                if (e[i].time < t)
                    return e[i].name;
            return null
        }
        ,
        u.getLabelsArray = function() {
            var t, e = [], i = 0;
            for (t in this._labels)
                e[i++] = {
                    time: this._labels[t],
                    name: t
                };
            return e.sort(function(t, e) {
                return t.time - e.time
            }),
            e
        }
        ,
        u.progress = function(t, e) {
            return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration()
        }
        ,
        u.totalProgress = function(t, e) {
            return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration()
        }
        ,
        u.totalDuration = function(e) {
            return arguments.length ? -1 !== this._repeat && e ? this.timeScale(this.totalDuration() / e) : this : (this._dirty && (t.prototype.totalDuration.call(this),
            this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat),
            this._totalDuration)
        }
        ,
        u.time = function(t, e) {
            return arguments.length ? (this._dirty && this.totalDuration(),
            t > this._duration && (t = this._duration),
            this._yoyo && 0 != (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)),
            this.totalTime(t, e)) : this._time
        }
        ,
        u.repeat = function(t) {
            return arguments.length ? (this._repeat = t,
            this._uncache(!0)) : this._repeat
        }
        ,
        u.repeatDelay = function(t) {
            return arguments.length ? (this._repeatDelay = t,
            this._uncache(!0)) : this._repeatDelay
        }
        ,
        u.yoyo = function(t) {
            return arguments.length ? (this._yoyo = t,
            this) : this._yoyo
        }
        ,
        u.currentLabel = function(t) {
            return arguments.length ? this.seek(t, !0) : this.getLabelBefore(this._time + 1e-8)
        }
        ,
        n
    }, !0),
    n = 180 / Math.PI,
    s = [],
    r = [],
    o = [],
    a = {},
    l = _gsScope._gsDefine.globals,
    u = function(t, e, i, n) {
        this.a = t,
        this.b = e,
        this.c = i,
        this.d = n,
        this.da = n - t,
        this.ca = i - t,
        this.ba = e - t
    }
    ,
    h = function(t, e, i, n) {
        var s = {
            a: t
        }
          , r = {}
          , o = {}
          , a = {
            c: n
        }
          , l = (t + e) / 2
          , u = (e + i) / 2
          , h = (i + n) / 2
          , c = (l + u) / 2
          , p = (u + h) / 2
          , f = (p - c) / 8;
        return s.b = l + (t - l) / 4,
        r.b = c + f,
        s.c = r.a = (s.b + r.b) / 2,
        r.c = o.a = (c + p) / 2,
        o.b = p - f,
        a.b = h + (n - h) / 4,
        o.c = a.a = (o.b + a.b) / 2,
        [s, r, o, a]
    }
    ,
    c = function(t, e, i, n, a) {
        var l, u, c, p, f, d, g, m, _, v, y, b, w, x = t.length - 1, T = 0, P = t[0].a;
        for (l = 0; x > l; l++)
            u = (f = t[T]).a,
            c = f.d,
            p = t[T + 1].d,
            a ? (y = s[l],
            w = ((b = r[l]) + y) * e * .25 / (n ? .5 : o[l] || .5),
            m = c - ((d = c - (c - u) * (n ? .5 * e : 0 !== y ? w / y : 0)) + (((g = c + (p - c) * (n ? .5 * e : 0 !== b ? w / b : 0)) - d) * (3 * y / (y + b) + .5) / 4 || 0))) : m = c - ((d = c - (c - u) * e * .5) + (g = c + (p - c) * e * .5)) / 2,
            d += m,
            g += m,
            f.c = _ = d,
            f.b = 0 !== l ? P : P = f.a + .6 * (f.c - f.a),
            f.da = c - u,
            f.ca = _ - u,
            f.ba = P - u,
            i ? (v = h(u, P, _, c),
            t.splice(T, 1, v[0], v[1], v[2], v[3]),
            T += 4) : T++,
            P = g;
        (f = t[T]).b = P,
        f.c = P + .4 * (f.d - P),
        f.da = f.d - f.a,
        f.ca = f.c - f.a,
        f.ba = P - f.a,
        i && (v = h(f.a, P, f.c, f.d),
        t.splice(T, 1, v[0], v[1], v[2], v[3]))
    }
    ,
    p = function(t, e, i, n) {
        var o, a, l, h, c, p, f = [];
        if (n)
            for (a = (t = [n].concat(t)).length; --a > -1; )
                "string" == typeof (p = t[a][e]) && "=" === p.charAt(1) && (t[a][e] = n[e] + Number(p.charAt(0) + p.substr(2)));
        if (0 > (o = t.length - 2))
            return f[0] = new u(t[0][e],0,0,t[-1 > o ? 0 : 1][e]),
            f;
        for (a = 0; o > a; a++)
            l = t[a][e],
            h = t[a + 1][e],
            f[a] = new u(l,0,0,h),
            i && (c = t[a + 2][e],
            s[a] = (s[a] || 0) + (h - l) * (h - l),
            r[a] = (r[a] || 0) + (c - h) * (c - h));
        return f[a] = new u(t[a][e],0,0,t[a + 1][e]),
        f
    }
    ,
    f = function(t, e, i, n, l, u) {
        var h, f, d, g, m, _, v, y, b = {}, w = [], x = u || t[0];
        for (f in l = "string" == typeof l ? "," + l + "," : ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",
        null == e && (e = 1),
        t[0])
            w.push(f);
        if (t.length > 1) {
            for (y = t[t.length - 1],
            v = !0,
            h = w.length; --h > -1; )
                if (f = w[h],
                Math.abs(x[f] - y[f]) > .05) {
                    v = !1;
                    break
                }
            v && (t = t.concat(),
            u && t.unshift(u),
            t.push(t[1]),
            u = t[t.length - 3])
        }
        for (s.length = r.length = o.length = 0,
        h = w.length; --h > -1; )
            f = w[h],
            a[f] = -1 !== l.indexOf("," + f + ","),
            b[f] = p(t, f, a[f], u);
        for (h = s.length; --h > -1; )
            s[h] = Math.sqrt(s[h]),
            r[h] = Math.sqrt(r[h]);
        if (!n) {
            for (h = w.length; --h > -1; )
                if (a[f])
                    for (_ = (d = b[w[h]]).length - 1,
                    g = 0; _ > g; g++)
                        m = d[g + 1].da / r[g] + d[g].da / s[g] || 0,
                        o[g] = (o[g] || 0) + m * m;
            for (h = o.length; --h > -1; )
                o[h] = Math.sqrt(o[h])
        }
        for (h = w.length,
        g = i ? 4 : 1; --h > -1; )
            d = b[f = w[h]],
            c(d, e, i, n, a[f]),
            v && (d.splice(0, g),
            d.splice(d.length - g, g));
        return b
    }
    ,
    d = function(t, e, i) {
        for (var n, s, r, o, a, l, u, h, c, p, f, d = 1 / i, g = t.length; --g > -1; )
            for (r = (p = t[g]).a,
            o = p.d - r,
            a = p.c - r,
            l = p.b - r,
            n = s = 0,
            h = 1; i >= h; h++)
                n = s - (s = ((u = d * h) * u * o + 3 * (c = 1 - u) * (u * a + c * l)) * u),
                e[f = g * i + h - 1] = (e[f] || 0) + n * n
    }
    ,
    g = _gsScope._gsDefine.plugin({
        propName: "bezier",
        priority: -1,
        version: "1.3.5",
        API: 2,
        global: !0,
        init: function(t, e, i) {
            this._target = t,
            e instanceof Array && (e = {
                values: e
            }),
            this._func = {},
            this._round = {},
            this._props = [],
            this._timeRes = null == e.timeResolution ? 6 : parseInt(e.timeResolution, 10);
            var n, s, r, o, a, l = e.values || [], h = {}, c = l[0], p = e.autoRotate || i.vars.orientToBezier;
            for (n in this._autoRotate = p ? p instanceof Array ? p : [["x", "y", "rotation", !0 === p ? 0 : Number(p) || 0]] : null,
            c)
                this._props.push(n);
            for (r = this._props.length; --r > -1; )
                n = this._props[r],
                this._overwriteProps.push(n),
                s = this._func[n] = "function" == typeof t[n],
                h[n] = s ? t[n.indexOf("set") || "function" != typeof t["get" + n.substr(3)] ? n : "get" + n.substr(3)]() : parseFloat(t[n]),
                a || h[n] !== l[0][n] && (a = h);
            if (this._beziers = "cubic" !== e.type && "quadratic" !== e.type && "soft" !== e.type ? f(l, isNaN(e.curviness) ? 1 : e.curviness, !1, "thruBasic" === e.type, e.correlate, a) : function(t, e, i) {
                var n, s, r, o, a, l, h, c, p, f, d, g = {}, m = "cubic" === (e = e || "soft") ? 3 : 2, _ = "soft" === e, v = [];
                if (_ && i && (t = [i].concat(t)),
                null == t || t.length < m + 1)
                    throw "invalid Bezier data";
                for (p in t[0])
                    v.push(p);
                for (l = v.length; --l > -1; ) {
                    for (g[p = v[l]] = a = [],
                    f = 0,
                    c = t.length,
                    h = 0; c > h; h++)
                        n = null == i ? t[h][p] : "string" == typeof (d = t[h][p]) && "=" === d.charAt(1) ? i[p] + Number(d.charAt(0) + d.substr(2)) : Number(d),
                        _ && h > 1 && c - 1 > h && (a[f++] = (n + a[f - 2]) / 2),
                        a[f++] = n;
                    for (c = f - m + 1,
                    f = 0,
                    h = 0; c > h; h += m)
                        n = a[h],
                        s = a[h + 1],
                        r = a[h + 2],
                        o = 2 === m ? 0 : a[h + 3],
                        a[f++] = d = 3 === m ? new u(n,s,r,o) : new u(n,(2 * s + n) / 3,(2 * s + r) / 3,r);
                    a.length = f
                }
                return g
            }(l, e.type, h),
            this._segCount = this._beziers[n].length,
            this._timeRes) {
                var g = function(t, e) {
                    var i, n, s, r, o = [], a = [], l = 0, u = 0, h = (e = e >> 0 || 6) - 1, c = [], p = [];
                    for (i in t)
                        d(t[i], o, e);
                    for (s = o.length,
                    n = 0; s > n; n++)
                        l += Math.sqrt(o[n]),
                        p[r = n % e] = l,
                        r === h && (u += l,
                        c[r = n / e >> 0] = p,
                        a[r] = u,
                        l = 0,
                        p = []);
                    return {
                        length: u,
                        lengths: a,
                        segments: c
                    }
                }(this._beziers, this._timeRes);
                this._length = g.length,
                this._lengths = g.lengths,
                this._segments = g.segments,
                this._l1 = this._li = this._s1 = this._si = 0,
                this._l2 = this._lengths[0],
                this._curSeg = this._segments[0],
                this._s2 = this._curSeg[0],
                this._prec = 1 / this._curSeg.length
            }
            if (p = this._autoRotate)
                for (this._initialRotations = [],
                p[0]instanceof Array || (this._autoRotate = p = [p]),
                r = p.length; --r > -1; ) {
                    for (o = 0; 3 > o; o++)
                        n = p[r][o],
                        this._func[n] = "function" == typeof t[n] && t[n.indexOf("set") || "function" != typeof t["get" + n.substr(3)] ? n : "get" + n.substr(3)];
                    n = p[r][2],
                    this._initialRotations[r] = (this._func[n] ? this._func[n].call(this._target) : this._target[n]) || 0
                }
            return this._startRatio = i.vars.runBackwards ? 1 : 0,
            !0
        },
        set: function(t) {
            var e, i, s, r, o, a, l, u, h, c, p = this._segCount, f = this._func, d = this._target, g = t !== this._startRatio;
            if (this._timeRes) {
                if (h = this._lengths,
                c = this._curSeg,
                t *= this._length,
                s = this._li,
                t > this._l2 && p - 1 > s) {
                    for (u = p - 1; u > s && (this._l2 = h[++s]) <= t; )
                        ;
                    this._l1 = h[s - 1],
                    this._li = s,
                    this._curSeg = c = this._segments[s],
                    this._s2 = c[this._s1 = this._si = 0]
                } else if (t < this._l1 && s > 0) {
                    for (; s > 0 && (this._l1 = h[--s]) >= t; )
                        ;
                    0 === s && t < this._l1 ? this._l1 = 0 : s++,
                    this._l2 = h[s],
                    this._li = s,
                    this._curSeg = c = this._segments[s],
                    this._s1 = c[(this._si = c.length - 1) - 1] || 0,
                    this._s2 = c[this._si]
                }
                if (e = s,
                t -= this._l1,
                s = this._si,
                t > this._s2 && s < c.length - 1) {
                    for (u = c.length - 1; u > s && (this._s2 = c[++s]) <= t; )
                        ;
                    this._s1 = c[s - 1],
                    this._si = s
                } else if (t < this._s1 && s > 0) {
                    for (; s > 0 && (this._s1 = c[--s]) >= t; )
                        ;
                    0 === s && t < this._s1 ? this._s1 = 0 : s++,
                    this._s2 = c[s],
                    this._si = s
                }
                a = (s + (t - this._s1) / (this._s2 - this._s1)) * this._prec || 0
            } else
                a = (t - (e = 0 > t ? 0 : t >= 1 ? p - 1 : p * t >> 0) * (1 / p)) * p;
            for (i = 1 - a,
            s = this._props.length; --s > -1; )
                r = this._props[s],
                l = (a * a * (o = this._beziers[r][e]).da + 3 * i * (a * o.ca + i * o.ba)) * a + o.a,
                this._round[r] && (l = Math.round(l)),
                f[r] ? d[r](l) : d[r] = l;
            if (this._autoRotate) {
                var m, _, v, y, b, w, x, T = this._autoRotate;
                for (s = T.length; --s > -1; )
                    r = T[s][2],
                    w = T[s][3] || 0,
                    x = !0 === T[s][4] ? 1 : n,
                    o = this._beziers[T[s][0]],
                    m = this._beziers[T[s][1]],
                    o && m && (o = o[e],
                    m = m[e],
                    _ = o.a + (o.b - o.a) * a,
                    _ += ((y = o.b + (o.c - o.b) * a) - _) * a,
                    y += (o.c + (o.d - o.c) * a - y) * a,
                    v = m.a + (m.b - m.a) * a,
                    v += ((b = m.b + (m.c - m.b) * a) - v) * a,
                    b += (m.c + (m.d - m.c) * a - b) * a,
                    l = g ? Math.atan2(b - v, y - _) * x + w : this._initialRotations[s],
                    f[r] ? d[r](l) : d[r] = l)
            }
        }
    }),
    m = g.prototype,
    g.bezierThrough = f,
    g.cubicToQuadratic = h,
    g._autoCSS = !0,
    g.quadraticToCubic = function(t, e, i) {
        return new u(t,(2 * e + t) / 3,(2 * e + i) / 3,i)
    }
    ,
    g._cssRegister = function() {
        var t = l.CSSPlugin;
        if (t) {
            var e = t._internals
              , i = e._parseToProxy
              , n = e._setPluginRatio
              , s = e.CSSPropTween;
            e._registerComplexSpecialProp("bezier", {
                parser: function(t, e, r, o, a, l) {
                    e instanceof Array && (e = {
                        values: e
                    }),
                    l = new g;
                    var u, h, c, p = e.values, f = p.length - 1, d = [], m = {};
                    if (0 > f)
                        return a;
                    for (u = 0; f >= u; u++)
                        c = i(t, p[u], o, a, l, f !== u),
                        d[u] = c.end;
                    for (h in e)
                        m[h] = e[h];
                    return m.values = d,
                    (a = new s(t,"bezier",0,0,c.pt,2)).data = c,
                    a.plugin = l,
                    a.setRatio = n,
                    0 === m.autoRotate && (m.autoRotate = !0),
                    !m.autoRotate || m.autoRotate instanceof Array || (u = !0 === m.autoRotate ? 0 : Number(m.autoRotate),
                    m.autoRotate = null != c.end.left ? [["left", "top", "rotation", u, !1]] : null != c.end.x && [["x", "y", "rotation", u, !1]]),
                    m.autoRotate && (o._transform || o._enableTransforms(!1),
                    c.autoRotate = o._target._gsTransform),
                    l._onInitTween(c.proxy, m, o._tween),
                    a
                }
            })
        }
    }
    ,
    m._roundProps = function(t, e) {
        for (var i = this._overwriteProps, n = i.length; --n > -1; )
            (t[i[n]] || t.bezier || t.bezierThrough) && (this._round[i[n]] = e)
    }
    ,
    m._kill = function(t) {
        var e, i, n = this._props;
        for (e in this._beziers)
            if (e in t)
                for (delete this._beziers[e],
                delete this._func[e],
                i = n.length; --i > -1; )
                    n[i] === e && n.splice(i, 1);
        return this._super._kill.call(this, t)
    }
    ,
    _gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function(t, e) {
        var i, n, s, r, o = function() {
            t.call(this, "css"),
            this._overwriteProps.length = 0,
            this.setRatio = o.prototype.setRatio
        }, a = _gsScope._gsDefine.globals, l = {}, u = o.prototype = new t("css");
        u.constructor = o,
        o.version = "1.18.4",
        o.API = 2,
        o.defaultTransformPerspective = 0,
        o.defaultSkewType = "compensated",
        o.defaultSmoothOrigin = !0,
        u = "px",
        o.suffixMap = {
            top: u,
            right: u,
            bottom: u,
            left: u,
            width: u,
            height: u,
            fontSize: u,
            padding: u,
            margin: u,
            perspective: u,
            lineHeight: ""
        };
        var h, c, p, f, d, g, m, _, v = /(?:\-|\.|\b)(\d|\.|e\-)+/g, y = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g, b = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi, w = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g, x = /(?:\d|\-|\+|=|#|\.)*/g, T = /opacity *= *([^)]*)/i, P = /opacity:([^;]*)/i, S = /alpha\(opacity *=.+?\)/i, C = /^(rgb|hsl)/, A = /([A-Z])/g, O = /-([a-z])/gi, E = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi, k = function(t, e) {
            return e.toUpperCase()
        }, L = /(?:Left|Right|Width)/i, R = /(M11|M12|M21|M22)=[\d\-\.e]+/gi, M = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i, D = /,(?=[^\)]*(?:\(|$))/gi, I = /[\s,\(]/i, N = Math.PI / 180, z = 180 / Math.PI, F = {}, B = document, X = function(t) {
            return B.createElementNS ? B.createElementNS("http://www.w3.org/1999/xhtml", t) : B.createElement(t)
        }, Y = X("div"), j = X("img"), H = o._internals = {
            _specialProps: l
        }, q = navigator.userAgent, V = (m = q.indexOf("Android"),
        _ = X("a"),
        p = -1 !== q.indexOf("Safari") && -1 === q.indexOf("Chrome") && (-1 === m || Number(q.substr(m + 8, 1)) > 3),
        d = p && Number(q.substr(q.indexOf("Version/") + 8, 1)) < 6,
        f = -1 !== q.indexOf("Firefox"),
        (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(q) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(q)) && (g = parseFloat(RegExp.$1)),
        !!_ && (_.style.cssText = "top:1px;opacity:.55;",
        /^0.55/.test(_.style.opacity))), U = function(t) {
            return T.test("string" == typeof t ? t : (t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
        }, G = function(t) {
            window.console
        }, W = "", $ = "", Z = function(t, e) {
            var i, n, s = (e = e || Y).style;
            if (void 0 !== s[t])
                return t;
            for (t = t.charAt(0).toUpperCase() + t.substr(1),
            i = ["O", "Moz", "ms", "Ms", "Webkit"],
            n = 5; --n > -1 && void 0 === s[i[n] + t]; )
                ;
            return n >= 0 ? (W = "-" + ($ = 3 === n ? "ms" : i[n]).toLowerCase() + "-",
            $ + t) : null
        }, Q = B.defaultView ? B.defaultView.getComputedStyle : function() {}
        , K = o.getStyle = function(t, e, i, n, s) {
            var r;
            return V || "opacity" !== e ? (!n && t.style[e] ? r = t.style[e] : (i = i || Q(t)) ? r = i[e] || i.getPropertyValue(e) || i.getPropertyValue(e.replace(A, "-$1").toLowerCase()) : t.currentStyle && (r = t.currentStyle[e]),
            null == s || r && "none" !== r && "auto" !== r && "auto auto" !== r ? r : s) : U(t)
        }
        , J = H.convertToPixels = function(t, i, n, s, r) {
            if ("px" === s || !s)
                return n;
            if ("auto" === s || !n)
                return 0;
            var a, l, u, h = L.test(i), c = t, p = Y.style, f = 0 > n;
            if (f && (n = -n),
            "%" === s && -1 !== i.indexOf("border"))
                a = n / 100 * (h ? t.clientWidth : t.clientHeight);
            else {
                if (p.cssText = "border:0 solid red;position:" + K(t, "position") + ";line-height:0;",
                "%" !== s && c.appendChild && "v" !== s.charAt(0) && "rem" !== s)
                    p[h ? "borderLeftWidth" : "borderTopWidth"] = n + s;
                else {
                    if (l = (c = t.parentNode || B.body)._gsCache,
                    u = e.ticker.frame,
                    l && h && l.time === u)
                        return l.width * n / 100;
                    p[h ? "width" : "height"] = n + s
                }
                c.appendChild(Y),
                a = parseFloat(Y[h ? "offsetWidth" : "offsetHeight"]),
                c.removeChild(Y),
                h && "%" === s && !1 !== o.cacheWidths && ((l = c._gsCache = c._gsCache || {}).time = u,
                l.width = a / n * 100),
                0 !== a || r || (a = J(t, i, n, s, !0))
            }
            return f ? -a : a
        }
        , tt = H.calculateOffset = function(t, e, i) {
            if ("absolute" !== K(t, "position", i))
                return 0;
            var n = "left" === e ? "Left" : "Top"
              , s = K(t, "margin" + n, i);
            return t["offset" + n] - (J(t, e, parseFloat(s), s.replace(x, "")) || 0)
        }
        , et = function(t, e) {
            var i, n, s, r = {};
            if (e = e || Q(t, null))
                if (i = e.length)
                    for (; --i > -1; )
                        (-1 === (s = e[i]).indexOf("-transform") || Rt === s) && (r[s.replace(O, k)] = e.getPropertyValue(s));
                else
                    for (i in e)
                        (-1 === i.indexOf("Transform") || Lt === i) && (r[i] = e[i]);
            else if (e = t.currentStyle || t.style)
                for (i in e)
                    "string" == typeof i && void 0 === r[i] && (r[i.replace(O, k)] = e[i]);
            return V || (r.opacity = U(t)),
            n = qt(t, e, !1),
            r.rotation = n.rotation,
            r.skewX = n.skewX,
            r.scaleX = n.scaleX,
            r.scaleY = n.scaleY,
            r.x = n.x,
            r.y = n.y,
            Dt && (r.z = n.z,
            r.rotationX = n.rotationX,
            r.rotationY = n.rotationY,
            r.scaleZ = n.scaleZ),
            r.filters && delete r.filters,
            r
        }, it = function(t, e, i, n, s) {
            var r, o, a, l = {}, u = t.style;
            for (o in i)
                "cssText" !== o && "length" !== o && isNaN(o) && (e[o] !== (r = i[o]) || s && s[o]) && -1 === o.indexOf("Origin") && ("number" == typeof r || "string" == typeof r) && (l[o] = "auto" !== r || "left" !== o && "top" !== o ? "" !== r && "auto" !== r && "none" !== r || "string" != typeof e[o] || "" === e[o].replace(w, "") ? r : 0 : tt(t, o),
                void 0 !== u[o] && (a = new _t(u,o,u[o],a)));
            if (n)
                for (o in n)
                    "className" !== o && (l[o] = n[o]);
            return {
                difs: l,
                firstMPT: a
            }
        }, nt = {
            width: ["Left", "Right"],
            height: ["Top", "Bottom"]
        }, st = ["marginLeft", "marginRight", "marginTop", "marginBottom"], rt = function(t, e, i) {
            if ("svg" === (t.nodeName + "").toLowerCase())
                return (i || Q(t))[e] || 0;
            if (t.getBBox && Yt(t))
                return t.getBBox()[e] || 0;
            var n = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight)
              , s = nt[e]
              , r = s.length;
            for (i = i || Q(t, null); --r > -1; )
                n -= parseFloat(K(t, "padding" + s[r], i, !0)) || 0,
                n -= parseFloat(K(t, "border" + s[r] + "Width", i, !0)) || 0;
            return n
        }, ot = function(t, e) {
            if ("contain" === t || "auto" === t || "auto auto" === t)
                return t + " ";
            (null == t || "" === t) && (t = "0 0");
            var i, n = t.split(" "), s = -1 !== t.indexOf("left") ? "0%" : -1 !== t.indexOf("right") ? "100%" : n[0], r = -1 !== t.indexOf("top") ? "0%" : -1 !== t.indexOf("bottom") ? "100%" : n[1];
            if (n.length > 3 && !e) {
                for (n = t.split(", ").join(",").split(","),
                t = [],
                i = 0; i < n.length; i++)
                    t.push(ot(n[i]));
                return t.join(",")
            }
            return null == r ? r = "center" === s ? "50%" : "0" : "center" === r && (r = "50%"),
            ("center" === s || isNaN(parseFloat(s)) && -1 === (s + "").indexOf("=")) && (s = "50%"),
            t = s + " " + r + (n.length > 2 ? " " + n[2] : ""),
            e && (e.oxp = -1 !== s.indexOf("%"),
            e.oyp = -1 !== r.indexOf("%"),
            e.oxr = "=" === s.charAt(1),
            e.oyr = "=" === r.charAt(1),
            e.ox = parseFloat(s.replace(w, "")),
            e.oy = parseFloat(r.replace(w, "")),
            e.v = t),
            e || t
        }, at = function(t, e) {
            return "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) : parseFloat(t) - parseFloat(e) || 0
        }, lt = function(t, e) {
            return null == t ? e : "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) + e : parseFloat(t) || 0
        }, ut = function(t, e, i, n) {
            var s, r, o, a, l;
            return null == t ? a = e : "number" == typeof t ? a = t : (s = 360,
            r = t.split("_"),
            o = ((l = "=" === t.charAt(1)) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(r[0].substr(2)) : parseFloat(r[0])) * (-1 === t.indexOf("rad") ? 1 : z) - (l ? 0 : e),
            r.length && (n && (n[i] = e + o),
            -1 !== t.indexOf("short") && ((o %= s) !== o % 180 && (o = 0 > o ? o + s : o - s)),
            -1 !== t.indexOf("_cw") && 0 > o ? o = (o + 3599999999640) % s - (o / s | 0) * s : -1 !== t.indexOf("ccw") && o > 0 && (o = (o - 3599999999640) % s - (o / s | 0) * s)),
            a = e + o),
            1e-6 > a && a > -1e-6 && (a = 0),
            a
        }, ht = {
            aqua: [0, 255, 255],
            lime: [0, 255, 0],
            silver: [192, 192, 192],
            black: [0, 0, 0],
            maroon: [128, 0, 0],
            teal: [0, 128, 128],
            blue: [0, 0, 255],
            navy: [0, 0, 128],
            white: [255, 255, 255],
            fuchsia: [255, 0, 255],
            olive: [128, 128, 0],
            yellow: [255, 255, 0],
            orange: [255, 165, 0],
            gray: [128, 128, 128],
            purple: [128, 0, 128],
            green: [0, 128, 0],
            red: [255, 0, 0],
            pink: [255, 192, 203],
            cyan: [0, 255, 255],
            transparent: [255, 255, 255, 0]
        }, ct = function(t, e, i) {
            return 255 * (1 > 6 * (t = 0 > t ? t + 1 : t > 1 ? t - 1 : t) ? e + (i - e) * t * 6 : .5 > t ? i : 2 > 3 * t ? e + (i - e) * (2 / 3 - t) * 6 : e) + .5 | 0
        }, pt = o.parseColor = function(t, e) {
            var i, n, s, r, o, a, l, u, h, c, p;
            if (t)
                if ("number" == typeof t)
                    i = [t >> 16, t >> 8 & 255, 255 & t];
                else {
                    if ("," === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)),
                    ht[t])
                        i = ht[t];
                    else if ("#" === t.charAt(0))
                        4 === t.length && (t = "#" + (n = t.charAt(1)) + n + (s = t.charAt(2)) + s + (r = t.charAt(3)) + r),
                        i = [(t = parseInt(t.substr(1), 16)) >> 16, t >> 8 & 255, 255 & t];
                    else if ("hsl" === t.substr(0, 3))
                        if (i = p = t.match(v),
                        e) {
                            if (-1 !== t.indexOf("="))
                                return t.match(y)
                        } else
                            o = Number(i[0]) % 360 / 360,
                            a = Number(i[1]) / 100,
                            n = 2 * (l = Number(i[2]) / 100) - (s = .5 >= l ? l * (a + 1) : l + a - l * a),
                            i.length > 3 && (i[3] = Number(t[3])),
                            i[0] = ct(o + 1 / 3, n, s),
                            i[1] = ct(o, n, s),
                            i[2] = ct(o - 1 / 3, n, s);
                    else
                        i = t.match(v) || ht.transparent;
                    i[0] = Number(i[0]),
                    i[1] = Number(i[1]),
                    i[2] = Number(i[2]),
                    i.length > 3 && (i[3] = Number(i[3]))
                }
            else
                i = ht.black;
            return e && !p && (n = i[0] / 255,
            s = i[1] / 255,
            r = i[2] / 255,
            l = ((u = Math.max(n, s, r)) + (h = Math.min(n, s, r))) / 2,
            u === h ? o = a = 0 : (c = u - h,
            a = l > .5 ? c / (2 - u - h) : c / (u + h),
            o = u === n ? (s - r) / c + (r > s ? 6 : 0) : u === s ? (r - n) / c + 2 : (n - s) / c + 4,
            o *= 60),
            i[0] = o + .5 | 0,
            i[1] = 100 * a + .5 | 0,
            i[2] = 100 * l + .5 | 0),
            i
        }
        , ft = function(t, e) {
            var i, n, s, r = t.match(dt) || [], o = 0, a = r.length ? "" : t;
            for (i = 0; i < r.length; i++)
                n = r[i],
                o += (s = t.substr(o, t.indexOf(n, o) - o)).length + n.length,
                3 === (n = pt(n, e)).length && n.push(1),
                a += s + (e ? "hsla(" + n[0] + "," + n[1] + "%," + n[2] + "%," + n[3] : "rgba(" + n.join(",")) + ")";
            return a + t.substr(o)
        }, dt = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
        for (u in ht)
            dt += "|" + u + "\\b";
        dt = new RegExp(dt + ")","gi"),
        o.colorStringFilter = function(t) {
            var e, i = t[0] + t[1];
            dt.test(i) && (e = -1 !== i.indexOf("hsl(") || -1 !== i.indexOf("hsla("),
            t[0] = ft(t[0], e),
            t[1] = ft(t[1], e)),
            dt.lastIndex = 0
        }
        ,
        e.defaultStringFilter || (e.defaultStringFilter = o.colorStringFilter);
        var gt = function(t, e, i, n) {
            if (null == t)
                return function(t) {
                    return t
                }
                ;
            var s, r = e ? (t.match(dt) || [""])[0] : "", o = t.split(r).join("").match(b) || [], a = t.substr(0, t.indexOf(o[0])), l = ")" === t.charAt(t.length - 1) ? ")" : "", u = -1 !== t.indexOf(" ") ? " " : ",", h = o.length, c = h > 0 ? o[0].replace(v, "") : "";
            return h ? s = e ? function(t) {
                var e, p, f, d;
                if ("number" == typeof t)
                    t += c;
                else if (n && D.test(t)) {
                    for (d = t.replace(D, "|").split("|"),
                    f = 0; f < d.length; f++)
                        d[f] = s(d[f]);
                    return d.join(",")
                }
                if (e = (t.match(dt) || [r])[0],
                f = (p = t.split(e).join("").match(b) || []).length,
                h > f--)
                    for (; ++f < h; )
                        p[f] = i ? p[(f - 1) / 2 | 0] : o[f];
                return a + p.join(u) + u + e + l + (-1 !== t.indexOf("inset") ? " inset" : "")
            }
            : function(t) {
                var e, r, p;
                if ("number" == typeof t)
                    t += c;
                else if (n && D.test(t)) {
                    for (r = t.replace(D, "|").split("|"),
                    p = 0; p < r.length; p++)
                        r[p] = s(r[p]);
                    return r.join(",")
                }
                if (p = (e = t.match(b) || []).length,
                h > p--)
                    for (; ++p < h; )
                        e[p] = i ? e[(p - 1) / 2 | 0] : o[p];
                return a + e.join(u) + l
            }
            : function(t) {
                return t
            }
        }
          , mt = function(t) {
            return t = t.split(","),
            function(e, i, n, s, r, o, a) {
                var l, u = (i + "").split(" ");
                for (a = {},
                l = 0; 4 > l; l++)
                    a[t[l]] = u[l] = u[l] || u[(l - 1) / 2 >> 0];
                return s.parse(e, a, r, o)
            }
        }
          , _t = (H._setPluginRatio = function(t) {
            this.plugin.setRatio(t);
            for (var e, i, n, s, r, o = this.data, a = o.proxy, l = o.firstMPT; l; )
                e = a[l.v],
                l.r ? e = Math.round(e) : 1e-6 > e && e > -1e-6 && (e = 0),
                l.t[l.p] = e,
                l = l._next;
            if (o.autoRotate && (o.autoRotate.rotation = a.rotation),
            1 === t || 0 === t)
                for (l = o.firstMPT,
                r = 1 === t ? "e" : "b"; l; ) {
                    if ((i = l.t).type) {
                        if (1 === i.type) {
                            for (s = i.xs0 + i.s + i.xs1,
                            n = 1; n < i.l; n++)
                                s += i["xn" + n] + i["xs" + (n + 1)];
                            i[r] = s
                        }
                    } else
                        i[r] = i.s + i.xs0;
                    l = l._next
                }
        }
        ,
        function(t, e, i, n, s) {
            this.t = t,
            this.p = e,
            this.v = i,
            this.r = s,
            n && (n._prev = this,
            this._next = n)
        }
        )
          , vt = (H._parseToProxy = function(t, e, i, n, s, r) {
            var o, a, l, u, h, c = n, p = {}, f = {}, d = i._transform, g = F;
            for (i._transform = null,
            F = e,
            n = h = i.parse(t, e, n, s),
            F = g,
            r && (i._transform = d,
            c && (c._prev = null,
            c._prev && (c._prev._next = null))); n && n !== c; ) {
                if (n.type <= 1 && (f[a = n.p] = n.s + n.c,
                p[a] = n.s,
                r || (u = new _t(n,"s",a,u,n.r),
                n.c = 0),
                1 === n.type))
                    for (o = n.l; --o > 0; )
                        l = "xn" + o,
                        f[a = n.p + "_" + l] = n.data[l],
                        p[a] = n[l],
                        r || (u = new _t(n,l,a,u,n.rxp[l]));
                n = n._next
            }
            return {
                proxy: p,
                end: f,
                firstMPT: u,
                pt: h
            }
        }
        ,
        H.CSSPropTween = function(t, e, n, s, o, a, l, u, h, c, p) {
            this.t = t,
            this.p = e,
            this.s = n,
            this.c = s,
            this.n = l || e,
            t instanceof vt || r.push(this.n),
            this.r = u,
            this.type = a || 0,
            h && (this.pr = h,
            i = !0),
            this.b = void 0 === c ? n : c,
            this.e = void 0 === p ? n + s : p,
            o && (this._next = o,
            o._prev = this)
        }
        )
          , yt = function(t, e, i, n, s, r) {
            var o = new vt(t,e,i,n - i,s,-1,r);
            return o.b = i,
            o.e = o.xs0 = n,
            o
        }
          , bt = o.parseComplex = function(t, e, i, n, s, r, a, l, u, c) {
            a = new vt(t,e,0,0,a,c ? 2 : 1,null,!1,l,i = i || r || "",n),
            n += "",
            s && dt.test(n + i) && (n = [i, n],
            o.colorStringFilter(n),
            i = n[0],
            n = n[1]);
            var p, f, d, g, m, _, b, w, x, T, P, S, C, A = i.split(", ").join(",").split(" "), O = n.split(", ").join(",").split(" "), E = A.length, k = !1 !== h;
            for ((-1 !== n.indexOf(",") || -1 !== i.indexOf(",")) && (A = A.join(" ").replace(D, ", ").split(" "),
            O = O.join(" ").replace(D, ", ").split(" "),
            E = A.length),
            E !== O.length && (E = (A = (r || "").split(" ")).length),
            a.plugin = u,
            a.setRatio = c,
            dt.lastIndex = 0,
            p = 0; E > p; p++)
                if (g = A[p],
                m = O[p],
                (w = parseFloat(g)) || 0 === w)
                    a.appendXtra("", w, at(m, w), m.replace(y, ""), k && -1 !== m.indexOf("px"), !0);
                else if (s && dt.test(g))
                    S = ")" + ((S = m.indexOf(")") + 1) ? m.substr(S) : ""),
                    C = -1 !== m.indexOf("hsl") && V,
                    g = pt(g, C),
                    m = pt(m, C),
                    (x = g.length + m.length > 6) && !V && 0 === m[3] ? (a["xs" + a.l] += a.l ? " transparent" : "transparent",
                    a.e = a.e.split(O[p]).join("transparent")) : (V || (x = !1),
                    C ? a.appendXtra(x ? "hsla(" : "hsl(", g[0], at(m[0], g[0]), ",", !1, !0).appendXtra("", g[1], at(m[1], g[1]), "%,", !1).appendXtra("", g[2], at(m[2], g[2]), x ? "%," : "%" + S, !1) : a.appendXtra(x ? "rgba(" : "rgb(", g[0], m[0] - g[0], ",", !0, !0).appendXtra("", g[1], m[1] - g[1], ",", !0).appendXtra("", g[2], m[2] - g[2], x ? "," : S, !0),
                    x && (g = g.length < 4 ? 1 : g[3],
                    a.appendXtra("", g, (m.length < 4 ? 1 : m[3]) - g, S, !1))),
                    dt.lastIndex = 0;
                else if (_ = g.match(v)) {
                    if (!(b = m.match(y)) || b.length !== _.length)
                        return a;
                    for (d = 0,
                    f = 0; f < _.length; f++)
                        P = _[f],
                        T = g.indexOf(P, d),
                        a.appendXtra(g.substr(d, T - d), Number(P), at(b[f], P), "", k && "px" === g.substr(T + P.length, 2), 0 === f),
                        d = T + P.length;
                    a["xs" + a.l] += g.substr(d)
                } else
                    a["xs" + a.l] += a.l || a["xs" + a.l] ? " " + m : m;
            if (-1 !== n.indexOf("=") && a.data) {
                for (S = a.xs0 + a.data.s,
                p = 1; p < a.l; p++)
                    S += a["xs" + p] + a.data["xn" + p];
                a.e = S + a["xs" + p]
            }
            return a.l || (a.type = -1,
            a.xs0 = a.e),
            a.xfirst || a
        }
          , wt = 9;
        for ((u = vt.prototype).l = u.pr = 0; --wt > 0; )
            u["xn" + wt] = 0,
            u["xs" + wt] = "";
        u.xs0 = "",
        u._next = u._prev = u.xfirst = u.data = u.plugin = u.setRatio = u.rxp = null,
        u.appendXtra = function(t, e, i, n, s, r) {
            var o = this
              , a = o.l;
            return o["xs" + a] += r && (a || o["xs" + a]) ? " " + t : t || "",
            i || 0 === a || o.plugin ? (o.l++,
            o.type = o.setRatio ? 2 : 1,
            o["xs" + o.l] = n || "",
            a > 0 ? (o.data["xn" + a] = e + i,
            o.rxp["xn" + a] = s,
            o["xn" + a] = e,
            o.plugin || (o.xfirst = new vt(o,"xn" + a,e,i,o.xfirst || o,0,o.n,s,o.pr),
            o.xfirst.xs0 = 0),
            o) : (o.data = {
                s: e + i
            },
            o.rxp = {},
            o.s = e,
            o.c = i,
            o.r = s,
            o)) : (o["xs" + a] += e + (n || ""),
            o)
        }
        ;
        var xt = function(t, e) {
            e = e || {},
            this.p = e.prefix && Z(t) || t,
            l[t] = l[this.p] = this,
            this.format = e.formatter || gt(e.defaultValue, e.color, e.collapsible, e.multi),
            e.parser && (this.parse = e.parser),
            this.clrs = e.color,
            this.multi = e.multi,
            this.keyword = e.keyword,
            this.dflt = e.defaultValue,
            this.pr = e.priority || 0
        }
          , Tt = H._registerComplexSpecialProp = function(t, e, i) {
            "object" != typeof e && (e = {
                parser: i
            });
            var n, s = t.split(","), r = e.defaultValue;
            for (i = i || [r],
            n = 0; n < s.length; n++)
                e.prefix = 0 === n && e.prefix,
                e.defaultValue = i[n] || r,
                new xt(s[n],e)
        }
          , Pt = function(t) {
            if (!l[t]) {
                var e = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
                Tt(t, {
                    parser: function(t, i, n, s, r, o, u) {
                        var h = a.com.greensock.plugins[e];
                        return h ? (h._cssRegister(),
                        l[n].parse(t, i, n, s, r, o, u)) : (G(),
                        r)
                    }
                })
            }
        };
        (u = xt.prototype).parseComplex = function(t, e, i, n, s, r) {
            var o, a, l, u, h, c, p = this.keyword;
            if (this.multi && (D.test(i) || D.test(e) ? (a = e.replace(D, "|").split("|"),
            l = i.replace(D, "|").split("|")) : p && (a = [e],
            l = [i])),
            l) {
                for (u = l.length > a.length ? l.length : a.length,
                o = 0; u > o; o++)
                    e = a[o] = a[o] || this.dflt,
                    i = l[o] = l[o] || this.dflt,
                    p && ((h = e.indexOf(p)) !== (c = i.indexOf(p)) && (-1 === c ? a[o] = a[o].split(p).join("") : -1 === h && (a[o] += " " + p)));
                e = a.join(", "),
                i = l.join(", ")
            }
            return bt(t, this.p, e, i, this.clrs, this.dflt, n, this.pr, s, r)
        }
        ,
        u.parse = function(t, e, i, n, r, o, a) {
            return this.parseComplex(t.style, this.format(K(t, this.p, s, !1, this.dflt)), this.format(e), r, o)
        }
        ,
        o.registerSpecialProp = function(t, e, i) {
            Tt(t, {
                parser: function(t, n, s, r, o, a, l) {
                    var u = new vt(t,s,0,0,o,2,s,!1,i);
                    return u.plugin = a,
                    u.setRatio = e(t, n, r._tween, s),
                    u
                },
                priority: i
            })
        }
        ,
        o.useSVGTransformAttr = p || f;
        var St, Ct, At, Ot, Et, kt = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","), Lt = Z("transform"), Rt = W + "transform", Mt = Z("transformOrigin"), Dt = null !== Z("perspective"), It = H.Transform = function() {
            this.perspective = parseFloat(o.defaultTransformPerspective) || 0,
            this.force3D = !(!1 === o.defaultForce3D || !Dt) && (o.defaultForce3D || "auto")
        }
        , Nt = window.SVGElement, zt = function(t, e, i) {
            var n, s = B.createElementNS("http://www.w3.org/2000/svg", t), r = /([a-z])([A-Z])/g;
            for (n in i)
                s.setAttributeNS(null, n.replace(r, "$1-$2").toLowerCase(), i[n]);
            return e.appendChild(s),
            s
        }, Ft = B.documentElement, Bt = (Et = g || /Android/i.test(q) && !window.chrome,
        B.createElementNS && !Et && (Ct = zt("svg", Ft),
        Ot = (At = zt("rect", Ct, {
            width: 100,
            height: 50,
            x: 100
        })).getBoundingClientRect().width,
        At.style[Mt] = "50% 50%",
        At.style[Lt] = "scaleX(0.5)",
        Et = Ot === At.getBoundingClientRect().width && !(f && Dt),
        Ft.removeChild(Ct)),
        Et), Xt = function(t, e, i, n, s, r) {
            var a, l, u, h, c, p, f, d, g, m, _, v, y, b, w = t._gsTransform, x = Ht(t, !0);
            w && (y = w.xOrigin,
            b = w.yOrigin),
            (!n || (a = n.split(" ")).length < 2) && (f = t.getBBox(),
            a = [(-1 !== (e = ot(e).split(" "))[0].indexOf("%") ? parseFloat(e[0]) / 100 * f.width : parseFloat(e[0])) + f.x, (-1 !== e[1].indexOf("%") ? parseFloat(e[1]) / 100 * f.height : parseFloat(e[1])) + f.y]),
            i.xOrigin = h = parseFloat(a[0]),
            i.yOrigin = c = parseFloat(a[1]),
            n && x !== jt && (p = x[0],
            f = x[1],
            d = x[2],
            g = x[3],
            m = x[4],
            l = h * (g / (v = p * g - f * d)) + c * (-d / v) + (d * (_ = x[5]) - g * m) / v,
            u = h * (-f / v) + c * (p / v) - (p * _ - f * m) / v,
            h = i.xOrigin = a[0] = l,
            c = i.yOrigin = a[1] = u),
            w && (r && (i.xOffset = w.xOffset,
            i.yOffset = w.yOffset,
            w = i),
            s || !1 !== s && !1 !== o.defaultSmoothOrigin ? (l = h - y,
            u = c - b,
            w.xOffset += l * x[0] + u * x[2] - l,
            w.yOffset += l * x[1] + u * x[3] - u) : w.xOffset = w.yOffset = 0),
            r || t.setAttribute("data-svg-origin", a.join(" "))
        }, Yt = function(t) {
            return !!(Nt && t.getBBox && t.getCTM && function(t) {
                try {
                    return t.getBBox()
                } catch (t) {}
            }(t) && (!t.parentNode || t.parentNode.getBBox && t.parentNode.getCTM))
        }, jt = [1, 0, 0, 1, 0, 0], Ht = function(t, e) {
            var i, n, s, r, o, a = t._gsTransform || new It;
            if (Lt ? n = K(t, Rt, null, !0) : t.currentStyle && (n = (n = t.currentStyle.filter.match(R)) && 4 === n.length ? [n[0].substr(4), Number(n[2].substr(4)), Number(n[1].substr(4)), n[3].substr(4), a.x || 0, a.y || 0].join(",") : ""),
            i = !n || "none" === n || "matrix(1, 0, 0, 1, 0, 0)" === n,
            (a.svg || t.getBBox && Yt(t)) && (i && -1 !== (t.style[Lt] + "").indexOf("matrix") && (n = t.style[Lt],
            i = 0),
            s = t.getAttribute("transform"),
            i && s && (-1 !== s.indexOf("matrix") ? (n = s,
            i = 0) : -1 !== s.indexOf("translate") && (n = "matrix(1,0,0,1," + s.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",") + ")",
            i = 0))),
            i)
                return jt;
            for (s = (n || "").match(v) || [],
            wt = s.length; --wt > -1; )
                r = Number(s[wt]),
                s[wt] = (o = r - (r |= 0)) ? (1e5 * o + (0 > o ? -.5 : .5) | 0) / 1e5 + r : r;
            return e && s.length > 6 ? [s[0], s[1], s[4], s[5], s[12], s[13]] : s
        }, qt = H.getTransform = function(t, i, n, r) {
            if (t._gsTransform && n && !r)
                return t._gsTransform;
            var a, l, u, h, c, p, f = n && t._gsTransform || new It, d = f.scaleX < 0, g = Dt && (parseFloat(K(t, Mt, i, !1, "0 0 0").split(" ")[2]) || f.zOrigin) || 0, m = parseFloat(o.defaultTransformPerspective) || 0;
            if (f.svg = !(!t.getBBox || !Yt(t)),
            f.svg && (Xt(t, K(t, Mt, s, !1, "50% 50%") + "", f, t.getAttribute("data-svg-origin")),
            St = o.useSVGTransformAttr || Bt),
            (a = Ht(t)) !== jt) {
                if (16 === a.length) {
                    var _, v, y, b, w, x = a[0], T = a[1], P = a[2], S = a[3], C = a[4], A = a[5], O = a[6], E = a[7], k = a[8], L = a[9], R = a[10], M = a[12], D = a[13], I = a[14], N = a[11], F = Math.atan2(O, R);
                    f.zOrigin && (M = k * (I = -f.zOrigin) - a[12],
                    D = L * I - a[13],
                    I = R * I + f.zOrigin - a[14]),
                    f.rotationX = F * z,
                    F && (_ = C * (b = Math.cos(-F)) + k * (w = Math.sin(-F)),
                    v = A * b + L * w,
                    y = O * b + R * w,
                    k = C * -w + k * b,
                    L = A * -w + L * b,
                    R = O * -w + R * b,
                    N = E * -w + N * b,
                    C = _,
                    A = v,
                    O = y),
                    F = Math.atan2(-P, R),
                    f.rotationY = F * z,
                    F && (v = T * (b = Math.cos(-F)) - L * (w = Math.sin(-F)),
                    y = P * b - R * w,
                    L = T * w + L * b,
                    R = P * w + R * b,
                    N = S * w + N * b,
                    x = _ = x * b - k * w,
                    T = v,
                    P = y),
                    F = Math.atan2(T, x),
                    f.rotation = F * z,
                    F && (x = x * (b = Math.cos(-F)) + C * (w = Math.sin(-F)),
                    v = T * b + A * w,
                    A = T * -w + A * b,
                    O = P * -w + O * b,
                    T = v),
                    f.rotationX && Math.abs(f.rotationX) + Math.abs(f.rotation) > 359.9 && (f.rotationX = f.rotation = 0,
                    f.rotationY = 180 - f.rotationY),
                    f.scaleX = (1e5 * Math.sqrt(x * x + T * T) + .5 | 0) / 1e5,
                    f.scaleY = (1e5 * Math.sqrt(A * A + L * L) + .5 | 0) / 1e5,
                    f.scaleZ = (1e5 * Math.sqrt(O * O + R * R) + .5 | 0) / 1e5,
                    f.skewX = C || A ? Math.atan2(C, A) * z + f.rotation : f.skewX || 0,
                    Math.abs(f.skewX) > 90 && Math.abs(f.skewX) < 270 && (d ? (f.scaleX *= -1,
                    f.skewX += f.rotation <= 0 ? 180 : -180,
                    f.rotation += f.rotation <= 0 ? 180 : -180) : (f.scaleY *= -1,
                    f.skewX += f.skewX <= 0 ? 180 : -180)),
                    f.perspective = N ? 1 / (0 > N ? -N : N) : 0,
                    f.x = M,
                    f.y = D,
                    f.z = I,
                    f.svg && (f.x -= f.xOrigin - (f.xOrigin * x - f.yOrigin * C),
                    f.y -= f.yOrigin - (f.yOrigin * T - f.xOrigin * A))
                } else if ((!Dt || r || !a.length || f.x !== a[4] || f.y !== a[5] || !f.rotationX && !f.rotationY) && (void 0 === f.x || "none" !== K(t, "display", i))) {
                    var B = a.length >= 6
                      , X = B ? a[0] : 1
                      , Y = a[1] || 0
                      , j = a[2] || 0
                      , H = B ? a[3] : 1;
                    f.x = a[4] || 0,
                    f.y = a[5] || 0,
                    u = Math.sqrt(X * X + Y * Y),
                    h = Math.sqrt(H * H + j * j),
                    c = X || Y ? Math.atan2(Y, X) * z : f.rotation || 0,
                    p = j || H ? Math.atan2(j, H) * z + c : f.skewX || 0,
                    Math.abs(p) > 90 && Math.abs(p) < 270 && (d ? (u *= -1,
                    p += 0 >= c ? 180 : -180,
                    c += 0 >= c ? 180 : -180) : (h *= -1,
                    p += 0 >= p ? 180 : -180)),
                    f.scaleX = u,
                    f.scaleY = h,
                    f.rotation = c,
                    f.skewX = p,
                    Dt && (f.rotationX = f.rotationY = f.z = 0,
                    f.perspective = m,
                    f.scaleZ = 1),
                    f.svg && (f.x -= f.xOrigin - (f.xOrigin * X + f.yOrigin * j),
                    f.y -= f.yOrigin - (f.xOrigin * Y + f.yOrigin * H))
                }
                for (l in f.zOrigin = g,
                f)
                    f[l] < 2e-5 && f[l] > -2e-5 && (f[l] = 0)
            }
            return n && (t._gsTransform = f,
            f.svg && (St && t.style[Lt] ? e.delayedCall(.001, function() {
                Wt(t.style, Lt)
            }) : !St && t.getAttribute("transform") && e.delayedCall(.001, function() {
                t.removeAttribute("transform")
            }))),
            f
        }
        , Vt = function(t) {
            var e, i, n = this.data, s = -n.rotation * N, r = s + n.skewX * N, o = 1e5, a = (Math.cos(s) * n.scaleX * o | 0) / o, l = (Math.sin(s) * n.scaleX * o | 0) / o, u = (Math.sin(r) * -n.scaleY * o | 0) / o, h = (Math.cos(r) * n.scaleY * o | 0) / o, c = this.t.style, p = this.t.currentStyle;
            if (p) {
                i = l,
                l = -u,
                u = -i,
                e = p.filter,
                c.filter = "";
                var f, d, m = this.t.offsetWidth, _ = this.t.offsetHeight, v = "absolute" !== p.position, y = "progid:DXImageTransform.Microsoft.Matrix(M11=" + a + ", M12=" + l + ", M21=" + u + ", M22=" + h, b = n.x + m * n.xPercent / 100, w = n.y + _ * n.yPercent / 100;
                if (null != n.ox && (b += (f = (n.oxp ? m * n.ox * .01 : n.ox) - m / 2) - (f * a + (d = (n.oyp ? _ * n.oy * .01 : n.oy) - _ / 2) * l),
                w += d - (f * u + d * h)),
                v ? y += ", Dx=" + ((f = m / 2) - (f * a + (d = _ / 2) * l) + b) + ", Dy=" + (d - (f * u + d * h) + w) + ")" : y += ", sizingMethod='auto expand')",
                -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(") ? c.filter = e.replace(M, y) : c.filter = y + " " + e,
                (0 === t || 1 === t) && 1 === a && 0 === l && 0 === u && 1 === h && (v && -1 === y.indexOf("Dx=0, Dy=0") || T.test(e) && 100 !== parseFloat(RegExp.$1) || -1 === e.indexOf(e.indexOf("Alpha")) && c.removeAttribute("filter")),
                !v) {
                    var P, S, C, A = 8 > g ? 1 : -1;
                    for (f = n.ieOffsetX || 0,
                    d = n.ieOffsetY || 0,
                    n.ieOffsetX = Math.round((m - ((0 > a ? -a : a) * m + (0 > l ? -l : l) * _)) / 2 + b),
                    n.ieOffsetY = Math.round((_ - ((0 > h ? -h : h) * _ + (0 > u ? -u : u) * m)) / 2 + w),
                    wt = 0; 4 > wt; wt++)
                        C = (i = -1 !== (P = p[S = st[wt]]).indexOf("px") ? parseFloat(P) : J(this.t, S, parseFloat(P), P.replace(x, "")) || 0) !== n[S] ? 2 > wt ? -n.ieOffsetX : -n.ieOffsetY : 2 > wt ? f - n.ieOffsetX : d - n.ieOffsetY,
                        c[S] = (n[S] = Math.round(i - C * (0 === wt || 2 === wt ? 1 : A))) + "px"
                }
            }
        }, Ut = H.set3DTransformRatio = H.setTransformRatio = function(t) {
            var e, i, n, s, r, o, a, l, u, h, c, p, d, g, m, _, v, y, b, w, x, T, P, S = this.data, C = this.t.style, A = S.rotation, O = S.rotationX, E = S.rotationY, k = S.scaleX, L = S.scaleY, R = S.scaleZ, M = S.x, D = S.y, I = S.z, z = S.svg, F = S.perspective, B = S.force3D;
            if (!((1 !== t && 0 !== t || "auto" !== B || this.tween._totalTime !== this.tween._totalDuration && this.tween._totalTime) && B || I || F || E || O || 1 !== R) || St && z || !Dt)
                A || S.skewX || z ? (A *= N,
                T = S.skewX * N,
                P = 1e5,
                e = Math.cos(A) * k,
                s = Math.sin(A) * k,
                i = Math.sin(A - T) * -L,
                r = Math.cos(A - T) * L,
                T && "simple" === S.skewType && (v = Math.tan(T),
                i *= v = Math.sqrt(1 + v * v),
                r *= v,
                S.skewY && (e *= v,
                s *= v)),
                z && (M += S.xOrigin - (S.xOrigin * e + S.yOrigin * i) + S.xOffset,
                D += S.yOrigin - (S.xOrigin * s + S.yOrigin * r) + S.yOffset,
                St && (S.xPercent || S.yPercent) && (g = this.t.getBBox(),
                M += .01 * S.xPercent * g.width,
                D += .01 * S.yPercent * g.height),
                (g = 1e-6) > M && M > -g && (M = 0),
                g > D && D > -g && (D = 0)),
                b = (e * P | 0) / P + "," + (s * P | 0) / P + "," + (i * P | 0) / P + "," + (r * P | 0) / P + "," + M + "," + D + ")",
                z && St ? this.t.setAttribute("transform", "matrix(" + b) : C[Lt] = (S.xPercent || S.yPercent ? "translate(" + S.xPercent + "%," + S.yPercent + "%) matrix(" : "matrix(") + b) : C[Lt] = (S.xPercent || S.yPercent ? "translate(" + S.xPercent + "%," + S.yPercent + "%) matrix(" : "matrix(") + k + ",0,0," + L + "," + M + "," + D + ")";
            else {
                if (f && ((g = 1e-4) > k && k > -g && (k = R = 2e-5),
                g > L && L > -g && (L = R = 2e-5),
                !F || S.z || S.rotationX || S.rotationY || (F = 0)),
                A || S.skewX)
                    A *= N,
                    m = e = Math.cos(A),
                    _ = s = Math.sin(A),
                    S.skewX && (A -= S.skewX * N,
                    m = Math.cos(A),
                    _ = Math.sin(A),
                    "simple" === S.skewType && (v = Math.tan(S.skewX * N),
                    m *= v = Math.sqrt(1 + v * v),
                    _ *= v,
                    S.skewY && (e *= v,
                    s *= v))),
                    i = -_,
                    r = m;
                else {
                    if (!(E || O || 1 !== R || F || z))
                        return void (C[Lt] = (S.xPercent || S.yPercent ? "translate(" + S.xPercent + "%," + S.yPercent + "%) translate3d(" : "translate3d(") + M + "px," + D + "px," + I + "px)" + (1 !== k || 1 !== L ? " scale(" + k + "," + L + ")" : ""));
                    e = r = 1,
                    i = s = 0
                }
                u = 1,
                n = o = a = l = h = c = 0,
                p = F ? -1 / F : 0,
                d = S.zOrigin,
                g = 1e-6,
                w = ",",
                x = "0",
                (A = E * N) && (m = Math.cos(A),
                a = -(_ = Math.sin(A)),
                h = p * -_,
                n = e * _,
                o = s * _,
                u = m,
                p *= m,
                e *= m,
                s *= m),
                (A = O * N) && (v = i * (m = Math.cos(A)) + n * (_ = Math.sin(A)),
                y = r * m + o * _,
                l = u * _,
                c = p * _,
                n = i * -_ + n * m,
                o = r * -_ + o * m,
                u *= m,
                p *= m,
                i = v,
                r = y),
                1 !== R && (n *= R,
                o *= R,
                u *= R,
                p *= R),
                1 !== L && (i *= L,
                r *= L,
                l *= L,
                c *= L),
                1 !== k && (e *= k,
                s *= k,
                a *= k,
                h *= k),
                (d || z) && (d && (M += n * -d,
                D += o * -d,
                I += u * -d + d),
                z && (M += S.xOrigin - (S.xOrigin * e + S.yOrigin * i) + S.xOffset,
                D += S.yOrigin - (S.xOrigin * s + S.yOrigin * r) + S.yOffset),
                g > M && M > -g && (M = x),
                g > D && D > -g && (D = x),
                g > I && I > -g && (I = 0)),
                b = S.xPercent || S.yPercent ? "translate(" + S.xPercent + "%," + S.yPercent + "%) matrix3d(" : "matrix3d(",
                b += (g > e && e > -g ? x : e) + w + (g > s && s > -g ? x : s) + w + (g > a && a > -g ? x : a),
                b += w + (g > h && h > -g ? x : h) + w + (g > i && i > -g ? x : i) + w + (g > r && r > -g ? x : r),
                O || E || 1 !== R ? (b += w + (g > l && l > -g ? x : l) + w + (g > c && c > -g ? x : c) + w + (g > n && n > -g ? x : n),
                b += w + (g > o && o > -g ? x : o) + w + (g > u && u > -g ? x : u) + w + (g > p && p > -g ? x : p) + w) : b += ",0,0,0,0,1,0,",
                b += M + w + D + w + I + w + (F ? 1 + -I / F : 1) + ")",
                C[Lt] = b
            }
        }
        ;
        (u = It.prototype).x = u.y = u.z = u.skewX = u.skewY = u.rotation = u.rotationX = u.rotationY = u.zOrigin = u.xPercent = u.yPercent = u.xOffset = u.yOffset = 0,
        u.scaleX = u.scaleY = u.scaleZ = 1,
        Tt("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
            parser: function(t, e, i, n, r, a, l) {
                if (n._lastParsedTransform === l)
                    return r;
                n._lastParsedTransform = l;
                var u, h, c, p, f, d, g, m, _, v, y = t._gsTransform, b = t.style, w = kt.length, x = l, T = {}, P = "transformOrigin";
                if (l.display ? (c = K(t, "display"),
                b.display = "block",
                u = qt(t, s, !0, l.parseTransform),
                b.display = c) : u = qt(t, s, !0, l.parseTransform),
                n._transform = u,
                "string" == typeof x.transform && Lt)
                    (c = Y.style)[Lt] = x.transform,
                    c.display = "block",
                    c.position = "absolute",
                    B.body.appendChild(Y),
                    h = qt(Y, null, !1),
                    u.svg && (m = u.xOrigin,
                    _ = u.yOrigin,
                    h.x -= u.xOffset,
                    h.y -= u.yOffset,
                    (x.transformOrigin || x.svgOrigin) && (p = {},
                    Xt(t, ot(x.transformOrigin), p, x.svgOrigin, x.smoothOrigin, !0),
                    m = p.xOrigin,
                    _ = p.yOrigin,
                    h.x -= p.xOffset - u.xOffset,
                    h.y -= p.yOffset - u.yOffset),
                    (m || _) && (v = Ht(Y),
                    h.x -= m - (m * v[0] + _ * v[2]),
                    h.y -= _ - (m * v[1] + _ * v[3]))),
                    B.body.removeChild(Y),
                    h.perspective || (h.perspective = u.perspective),
                    null != x.xPercent && (h.xPercent = lt(x.xPercent, u.xPercent)),
                    null != x.yPercent && (h.yPercent = lt(x.yPercent, u.yPercent));
                else if ("object" == typeof x) {
                    if (h = {
                        scaleX: lt(null != x.scaleX ? x.scaleX : x.scale, u.scaleX),
                        scaleY: lt(null != x.scaleY ? x.scaleY : x.scale, u.scaleY),
                        scaleZ: lt(x.scaleZ, u.scaleZ),
                        x: lt(x.x, u.x),
                        y: lt(x.y, u.y),
                        z: lt(x.z, u.z),
                        xPercent: lt(x.xPercent, u.xPercent),
                        yPercent: lt(x.yPercent, u.yPercent),
                        perspective: lt(x.transformPerspective, u.perspective)
                    },
                    null != (g = x.directionalRotation))
                        if ("object" == typeof g)
                            for (c in g)
                                x[c] = g[c];
                        else
                            x.rotation = g;
                    "string" == typeof x.x && -1 !== x.x.indexOf("%") && (h.x = 0,
                    h.xPercent = lt(x.x, u.xPercent)),
                    "string" == typeof x.y && -1 !== x.y.indexOf("%") && (h.y = 0,
                    h.yPercent = lt(x.y, u.yPercent)),
                    h.rotation = ut("rotation"in x ? x.rotation : "shortRotation"in x ? x.shortRotation + "_short" : "rotationZ"in x ? x.rotationZ : u.rotation - u.skewY, u.rotation - u.skewY, "rotation", T),
                    Dt && (h.rotationX = ut("rotationX"in x ? x.rotationX : "shortRotationX"in x ? x.shortRotationX + "_short" : u.rotationX || 0, u.rotationX, "rotationX", T),
                    h.rotationY = ut("rotationY"in x ? x.rotationY : "shortRotationY"in x ? x.shortRotationY + "_short" : u.rotationY || 0, u.rotationY, "rotationY", T)),
                    h.skewX = ut(x.skewX, u.skewX - u.skewY),
                    (h.skewY = ut(x.skewY, u.skewY)) && (h.skewX += h.skewY,
                    h.rotation += h.skewY)
                }
                for (Dt && null != x.force3D && (u.force3D = x.force3D,
                d = !0),
                u.skewType = x.skewType || u.skewType || o.defaultSkewType,
                (f = u.force3D || u.z || u.rotationX || u.rotationY || h.z || h.rotationX || h.rotationY || h.perspective) || null == x.scale || (h.scaleZ = 1); --w > -1; )
                    ((p = h[i = kt[w]] - u[i]) > 1e-6 || -1e-6 > p || null != x[i] || null != F[i]) && (d = !0,
                    r = new vt(u,i,u[i],p,r),
                    i in T && (r.e = T[i]),
                    r.xs0 = 0,
                    r.plugin = a,
                    n._overwriteProps.push(r.n));
                return p = x.transformOrigin,
                u.svg && (p || x.svgOrigin) && (m = u.xOffset,
                _ = u.yOffset,
                Xt(t, ot(p), h, x.svgOrigin, x.smoothOrigin),
                r = yt(u, "xOrigin", (y ? u : h).xOrigin, h.xOrigin, r, P),
                r = yt(u, "yOrigin", (y ? u : h).yOrigin, h.yOrigin, r, P),
                (m !== u.xOffset || _ !== u.yOffset) && (r = yt(u, "xOffset", y ? m : u.xOffset, u.xOffset, r, P),
                r = yt(u, "yOffset", y ? _ : u.yOffset, u.yOffset, r, P)),
                p = St ? null : "0px 0px"),
                (p || Dt && f && u.zOrigin) && (Lt ? (d = !0,
                i = Mt,
                p = (p || K(t, i, s, !1, "50% 50%")) + "",
                (r = new vt(b,i,0,0,r,-1,P)).b = b[i],
                r.plugin = a,
                Dt ? (c = u.zOrigin,
                p = p.split(" "),
                u.zOrigin = (p.length > 2 && (0 === c || "0px" !== p[2]) ? parseFloat(p[2]) : c) || 0,
                r.xs0 = r.e = p[0] + " " + (p[1] || "50%") + " 0px",
                (r = new vt(u,"zOrigin",0,0,r,-1,r.n)).b = c,
                r.xs0 = r.e = u.zOrigin) : r.xs0 = r.e = p) : ot(p + "", u)),
                d && (n._transformType = u.svg && St || !f && 3 !== this._transformType ? 2 : 3),
                r
            },
            prefix: !0
        }),
        Tt("boxShadow", {
            defaultValue: "0px 0px 0px 0px #999",
            prefix: !0,
            color: !0,
            multi: !0,
            keyword: "inset"
        }),
        Tt("borderRadius", {
            defaultValue: "0px",
            parser: function(t, e, i, r, o, a) {
                e = this.format(e);
                var l, u, h, c, p, f, d, g, m, _, v, y, b, w, x, T, P = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"], S = t.style;
                for (m = parseFloat(t.offsetWidth),
                _ = parseFloat(t.offsetHeight),
                l = e.split(" "),
                u = 0; u < P.length; u++)
                    this.p.indexOf("border") && (P[u] = Z(P[u])),
                    -1 !== (p = c = K(t, P[u], s, !1, "0px")).indexOf(" ") && (p = (c = p.split(" "))[0],
                    c = c[1]),
                    f = h = l[u],
                    d = parseFloat(p),
                    y = p.substr((d + "").length),
                    (b = "=" === f.charAt(1)) ? (g = parseInt(f.charAt(0) + "1", 10),
                    f = f.substr(2),
                    g *= parseFloat(f),
                    v = f.substr((g + "").length - (0 > g ? 1 : 0)) || "") : (g = parseFloat(f),
                    v = f.substr((g + "").length)),
                    "" === v && (v = n[i] || y),
                    v !== y && (w = J(t, "borderLeft", d, y),
                    x = J(t, "borderTop", d, y),
                    "%" === v ? (p = w / m * 100 + "%",
                    c = x / _ * 100 + "%") : "em" === v ? (p = w / (T = J(t, "borderLeft", 1, "em")) + "em",
                    c = x / T + "em") : (p = w + "px",
                    c = x + "px"),
                    b && (f = parseFloat(p) + g + v,
                    h = parseFloat(c) + g + v)),
                    o = bt(S, P[u], p + " " + c, f + " " + h, !1, "0px", o);
                return o
            },
            prefix: !0,
            formatter: gt("0px 0px 0px 0px", !1, !0)
        }),
        Tt("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius", {
            defaultValue: "0px",
            parser: function(t, e, i, n, r, o) {
                return bt(t.style, i, this.format(K(t, i, s, !1, "0px 0px")), this.format(e), !1, "0px", r)
            },
            prefix: !0,
            formatter: gt("0px 0px", !1, !0)
        }),
        Tt("backgroundPosition", {
            defaultValue: "0 0",
            parser: function(t, e, i, n, r, o) {
                var a, l, u, h, c, p, f = "background-position", d = s || Q(t, null), m = this.format((d ? g ? d.getPropertyValue(f + "-x") + " " + d.getPropertyValue(f + "-y") : d.getPropertyValue(f) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"), _ = this.format(e);
                if (-1 !== m.indexOf("%") != (-1 !== _.indexOf("%")) && _.split(",").length < 2 && ((p = K(t, "backgroundImage").replace(E, "")) && "none" !== p)) {
                    for (a = m.split(" "),
                    l = _.split(" "),
                    j.setAttribute("src", p),
                    u = 2; --u > -1; )
                        (h = -1 !== (m = a[u]).indexOf("%")) !== (-1 !== l[u].indexOf("%")) && (c = 0 === u ? t.offsetWidth - j.width : t.offsetHeight - j.height,
                        a[u] = h ? parseFloat(m) / 100 * c + "px" : parseFloat(m) / c * 100 + "%");
                    m = a.join(" ")
                }
                return this.parseComplex(t.style, m, _, r, o)
            },
            formatter: ot
        }),
        Tt("backgroundSize", {
            defaultValue: "0 0",
            formatter: ot
        }),
        Tt("perspective", {
            defaultValue: "0px",
            prefix: !0
        }),
        Tt("perspectiveOrigin", {
            defaultValue: "50% 50%",
            prefix: !0
        }),
        Tt("transformStyle", {
            prefix: !0
        }),
        Tt("backfaceVisibility", {
            prefix: !0
        }),
        Tt("userSelect", {
            prefix: !0
        }),
        Tt("margin", {
            parser: mt("marginTop,marginRight,marginBottom,marginLeft")
        }),
        Tt("padding", {
            parser: mt("paddingTop,paddingRight,paddingBottom,paddingLeft")
        }),
        Tt("clip", {
            defaultValue: "rect(0px,0px,0px,0px)",
            parser: function(t, e, i, n, r, o) {
                var a, l, u;
                return 9 > g ? (l = t.currentStyle,
                u = 8 > g ? " " : ",",
                a = "rect(" + l.clipTop + u + l.clipRight + u + l.clipBottom + u + l.clipLeft + ")",
                e = this.format(e).split(",").join(u)) : (a = this.format(K(t, this.p, s, !1, this.dflt)),
                e = this.format(e)),
                this.parseComplex(t.style, a, e, r, o)
            }
        }),
        Tt("textShadow", {
            defaultValue: "0px 0px 0px #999",
            color: !0,
            multi: !0
        }),
        Tt("autoRound,strictUnits", {
            parser: function(t, e, i, n, s) {
                return s
            }
        }),
        Tt("border", {
            defaultValue: "0px solid #000",
            parser: function(t, e, i, n, r, o) {
                return this.parseComplex(t.style, this.format(K(t, "borderTopWidth", s, !1, "0px") + " " + K(t, "borderTopStyle", s, !1, "solid") + " " + K(t, "borderTopColor", s, !1, "#000")), this.format(e), r, o)
            },
            color: !0,
            formatter: function(t) {
                var e = t.split(" ");
                return e[0] + " " + (e[1] || "solid") + " " + (t.match(dt) || ["#000"])[0]
            }
        }),
        Tt("borderWidth", {
            parser: mt("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
        }),
        Tt("float,cssFloat,styleFloat", {
            parser: function(t, e, i, n, s, r) {
                var o = t.style
                  , a = "cssFloat"in o ? "cssFloat" : "styleFloat";
                return new vt(o,a,0,0,s,-1,i,!1,0,o[a],e)
            }
        });
        var Gt = function(t) {
            var e, i = this.t, n = i.filter || K(this.data, "filter") || "", s = this.s + this.c * t | 0;
            100 === s && (-1 === n.indexOf("atrix(") && -1 === n.indexOf("radient(") && -1 === n.indexOf("oader(") ? (i.removeAttribute("filter"),
            e = !K(this.data, "filter")) : (i.filter = n.replace(S, ""),
            e = !0)),
            e || (this.xn1 && (i.filter = n = n || "alpha(opacity=" + s + ")"),
            -1 === n.indexOf("pacity") ? 0 === s && this.xn1 || (i.filter = n + " alpha(opacity=" + s + ")") : i.filter = n.replace(T, "opacity=" + s))
        };
        Tt("opacity,alpha,autoAlpha", {
            defaultValue: "1",
            parser: function(t, e, i, n, r, o) {
                var a = parseFloat(K(t, "opacity", s, !1, "1"))
                  , l = t.style
                  , u = "autoAlpha" === i;
                return "string" == typeof e && "=" === e.charAt(1) && (e = ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + a),
                u && 1 === a && "hidden" === K(t, "visibility", s) && 0 !== e && (a = 0),
                V ? r = new vt(l,"opacity",a,e - a,r) : ((r = new vt(l,"opacity",100 * a,100 * (e - a),r)).xn1 = u ? 1 : 0,
                l.zoom = 1,
                r.type = 2,
                r.b = "alpha(opacity=" + r.s + ")",
                r.e = "alpha(opacity=" + (r.s + r.c) + ")",
                r.data = t,
                r.plugin = o,
                r.setRatio = Gt),
                u && ((r = new vt(l,"visibility",0,0,r,-1,null,!1,0,0 !== a ? "inherit" : "hidden",0 === e ? "hidden" : "inherit")).xs0 = "inherit",
                n._overwriteProps.push(r.n),
                n._overwriteProps.push(i)),
                r
            }
        });
        var Wt = function(t, e) {
            e && (t.removeProperty ? (("ms" === e.substr(0, 2) || "webkit" === e.substr(0, 6)) && (e = "-" + e),
            t.removeProperty(e.replace(A, "-$1").toLowerCase())) : t.removeAttribute(e))
        }
          , $t = function(t) {
            if (this.t._gsClassPT = this,
            1 === t || 0 === t) {
                this.t.setAttribute("class", 0 === t ? this.b : this.e);
                for (var e = this.data, i = this.t.style; e; )
                    e.v ? i[e.p] = e.v : Wt(i, e.p),
                    e = e._next;
                1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null)
            } else
                this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
        };
        Tt("className", {
            parser: function(t, e, n, r, o, a, l) {
                var u, h, c, p, f, d = t.getAttribute("class") || "", g = t.style.cssText;
                if ((o = r._classNamePT = new vt(t,n,0,0,o,2)).setRatio = $t,
                o.pr = -11,
                i = !0,
                o.b = d,
                h = et(t, s),
                c = t._gsClassPT) {
                    for (p = {},
                    f = c.data; f; )
                        p[f.p] = 1,
                        f = f._next;
                    c.setRatio(1)
                }
                return t._gsClassPT = o,
                o.e = "=" !== e.charAt(1) ? e : d.replace(new RegExp("(?:\\s|^)" + e.substr(2) + "(?![\\w-])"), "") + ("+" === e.charAt(0) ? " " + e.substr(2) : ""),
                t.setAttribute("class", o.e),
                u = it(t, h, et(t), l, p),
                t.setAttribute("class", d),
                o.data = u.firstMPT,
                t.style.cssText = g,
                o.xfirst = r.parse(t, u.difs, o, a)
            }
        });
        var Zt = function(t) {
            if ((1 === t || 0 === t) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                var e, i, n, s, r, o = this.t.style, a = l.transform.parse;
                if ("all" === this.e)
                    o.cssText = "",
                    s = !0;
                else
                    for (n = (e = this.e.split(" ").join("").split(",")).length; --n > -1; )
                        i = e[n],
                        l[i] && (l[i].parse === a ? s = !0 : i = "transformOrigin" === i ? Mt : l[i].p),
                        Wt(o, i);
                s && (Wt(o, Lt),
                (r = this.t._gsTransform) && (r.svg && (this.t.removeAttribute("data-svg-origin"),
                this.t.removeAttribute("transform")),
                delete this.t._gsTransform))
            }
        };
        for (Tt("clearProps", {
            parser: function(t, e, n, s, r) {
                return (r = new vt(t,n,0,0,r,2)).setRatio = Zt,
                r.e = e,
                r.pr = -10,
                r.data = s._tween,
                i = !0,
                r
            }
        }),
        u = "bezier,throwProps,physicsProps,physics2D".split(","),
        wt = u.length; wt--; )
            Pt(u[wt]);
        (u = o.prototype)._firstPT = u._lastParsedTransform = u._transform = null,
        u._onInitTween = function(t, e, a) {
            if (!t.nodeType)
                return !1;
            this._target = t,
            this._tween = a,
            this._vars = e,
            h = e.autoRound,
            i = !1,
            n = e.suffixMap || o.suffixMap,
            s = Q(t, ""),
            r = this._overwriteProps;
            var u, f, g, m, _, v, y, b, w, x = t.style;
            if (c && "" === x.zIndex && (("auto" === (u = K(t, "zIndex", s)) || "" === u) && this._addLazySet(x, "zIndex", 0)),
            "string" == typeof e && (m = x.cssText,
            u = et(t, s),
            x.cssText = m + ";" + e,
            u = it(t, u, et(t)).difs,
            !V && P.test(e) && (u.opacity = parseFloat(RegExp.$1)),
            e = u,
            x.cssText = m),
            e.className ? this._firstPT = f = l.className.parse(t, e.className, "className", this, null, null, e) : this._firstPT = f = this.parse(t, e, null),
            this._transformType) {
                for (w = 3 === this._transformType,
                Lt ? p && (c = !0,
                "" === x.zIndex && (("auto" === (y = K(t, "zIndex", s)) || "" === y) && this._addLazySet(x, "zIndex", 0)),
                d && this._addLazySet(x, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (w ? "visible" : "hidden"))) : x.zoom = 1,
                g = f; g && g._next; )
                    g = g._next;
                b = new vt(t,"transform",0,0,null,2),
                this._linkCSSP(b, null, g),
                b.setRatio = Lt ? Ut : Vt,
                b.data = this._transform || qt(t, s, !0),
                b.tween = a,
                b.pr = -1,
                r.pop()
            }
            if (i) {
                for (; f; ) {
                    for (v = f._next,
                    g = m; g && g.pr > f.pr; )
                        g = g._next;
                    (f._prev = g ? g._prev : _) ? f._prev._next = f : m = f,
                    (f._next = g) ? g._prev = f : _ = f,
                    f = v
                }
                this._firstPT = m
            }
            return !0
        }
        ,
        u.parse = function(t, e, i, r) {
            var o, a, u, c, p, f, d, g, m, _, v = t.style;
            for (o in e)
                f = e[o],
                (a = l[o]) ? i = a.parse(t, f, o, this, i, r, e) : (p = K(t, o, s) + "",
                m = "string" == typeof f,
                "color" === o || "fill" === o || "stroke" === o || -1 !== o.indexOf("Color") || m && C.test(f) ? (m || (f = ((f = pt(f)).length > 3 ? "rgba(" : "rgb(") + f.join(",") + ")"),
                i = bt(v, o, p, f, !0, "transparent", i, 0, r)) : m && I.test(f) ? i = bt(v, o, p, f, !0, null, i, 0, r) : (d = (u = parseFloat(p)) || 0 === u ? p.substr((u + "").length) : "",
                ("" === p || "auto" === p) && ("width" === o || "height" === o ? (u = rt(t, o, s),
                d = "px") : "left" === o || "top" === o ? (u = tt(t, o, s),
                d = "px") : (u = "opacity" !== o ? 0 : 1,
                d = "")),
                (_ = m && "=" === f.charAt(1)) ? (c = parseInt(f.charAt(0) + "1", 10),
                f = f.substr(2),
                c *= parseFloat(f),
                g = f.replace(x, "")) : (c = parseFloat(f),
                g = m ? f.replace(x, "") : ""),
                "" === g && (g = o in n ? n[o] : d),
                f = c || 0 === c ? (_ ? c + u : c) + g : e[o],
                d !== g && "" !== g && (c || 0 === c) && u && (u = J(t, o, u, d),
                "%" === g ? (u /= J(t, o, 100, "%") / 100,
                !0 !== e.strictUnits && (p = u + "%")) : "em" === g || "rem" === g || "vw" === g || "vh" === g ? u /= J(t, o, 1, g) : "px" !== g && (c = J(t, o, c, g),
                g = "px"),
                _ && (c || 0 === c) && (f = c + u + g)),
                _ && (c += u),
                !u && 0 !== u || !c && 0 !== c ? void 0 !== v[o] && (f || f + "" != "NaN" && null != f) ? (i = new vt(v,o,c || u || 0,0,i,-1,o,!1,0,p,f)).xs0 = "none" !== f || "display" !== o && -1 === o.indexOf("Style") ? f : p : G(e[o]) : (i = new vt(v,o,u,c - u,i,0,o,!1 !== h && ("px" === g || "zIndex" === o),0,p,f)).xs0 = g)),
                r && i && !i.plugin && (i.plugin = r);
            return i
        }
        ,
        u.setRatio = function(t) {
            var e, i, n, s = this._firstPT;
            if (1 !== t || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                if (t || this._tween._time !== this._tween._duration && 0 !== this._tween._time || -1e-6 === this._tween._rawPrevTime)
                    for (; s; ) {
                        if (e = s.c * t + s.s,
                        s.r ? e = Math.round(e) : 1e-6 > e && e > -1e-6 && (e = 0),
                        s.type)
                            if (1 === s.type)
                                if (2 === (n = s.l))
                                    s.t[s.p] = s.xs0 + e + s.xs1 + s.xn1 + s.xs2;
                                else if (3 === n)
                                    s.t[s.p] = s.xs0 + e + s.xs1 + s.xn1 + s.xs2 + s.xn2 + s.xs3;
                                else if (4 === n)
                                    s.t[s.p] = s.xs0 + e + s.xs1 + s.xn1 + s.xs2 + s.xn2 + s.xs3 + s.xn3 + s.xs4;
                                else if (5 === n)
                                    s.t[s.p] = s.xs0 + e + s.xs1 + s.xn1 + s.xs2 + s.xn2 + s.xs3 + s.xn3 + s.xs4 + s.xn4 + s.xs5;
                                else {
                                    for (i = s.xs0 + e + s.xs1,
                                    n = 1; n < s.l; n++)
                                        i += s["xn" + n] + s["xs" + (n + 1)];
                                    s.t[s.p] = i
                                }
                            else
                                -1 === s.type ? s.t[s.p] = s.xs0 : s.setRatio && s.setRatio(t);
                        else
                            s.t[s.p] = e + s.xs0;
                        s = s._next
                    }
                else
                    for (; s; )
                        2 !== s.type ? s.t[s.p] = s.b : s.setRatio(t),
                        s = s._next;
            else
                for (; s; ) {
                    if (2 !== s.type)
                        if (s.r && -1 !== s.type)
                            if (e = Math.round(s.s + s.c),
                            s.type) {
                                if (1 === s.type) {
                                    for (n = s.l,
                                    i = s.xs0 + e + s.xs1,
                                    n = 1; n < s.l; n++)
                                        i += s["xn" + n] + s["xs" + (n + 1)];
                                    s.t[s.p] = i
                                }
                            } else
                                s.t[s.p] = e + s.xs0;
                        else
                            s.t[s.p] = s.e;
                    else
                        s.setRatio(t);
                    s = s._next
                }
        }
        ,
        u._enableTransforms = function(t) {
            this._transform = this._transform || qt(this._target, s, !0),
            this._transformType = this._transform.svg && St || !t && 3 !== this._transformType ? 2 : 3
        }
        ;
        var Qt = function(t) {
            this.t[this.p] = this.e,
            this.data._linkCSSP(this, this._next, null, !0)
        };
        u._addLazySet = function(t, e, i) {
            var n = this._firstPT = new vt(t,e,0,0,this._firstPT,2);
            n.e = i,
            n.setRatio = Qt,
            n.data = this
        }
        ,
        u._linkCSSP = function(t, e, i, n) {
            return t && (e && (e._prev = t),
            t._next && (t._next._prev = t._prev),
            t._prev ? t._prev._next = t._next : this._firstPT === t && (this._firstPT = t._next,
            n = !0),
            i ? i._next = t : n || null !== this._firstPT || (this._firstPT = t),
            t._next = e,
            t._prev = i),
            t
        }
        ,
        u._kill = function(e) {
            var i, n, s, r = e;
            if (e.autoAlpha || e.alpha) {
                for (n in r = {},
                e)
                    r[n] = e[n];
                r.opacity = 1,
                r.autoAlpha && (r.visibility = 1)
            }
            return e.className && (i = this._classNamePT) && ((s = i.xfirst) && s._prev ? this._linkCSSP(s._prev, i._next, s._prev._prev) : s === this._firstPT && (this._firstPT = i._next),
            i._next && this._linkCSSP(i._next, i._next._next, s._prev),
            this._classNamePT = null),
            t.prototype._kill.call(this, r)
        }
        ;
        var Kt = function(t, e, i) {
            var n, s, r, o;
            if (t.slice)
                for (s = t.length; --s > -1; )
                    Kt(t[s], e, i);
            else
                for (s = (n = t.childNodes).length; --s > -1; )
                    o = (r = n[s]).type,
                    r.style && (e.push(et(r)),
                    i && i.push(r)),
                    1 !== o && 9 !== o && 11 !== o || !r.childNodes.length || Kt(r, e, i)
        };
        return o.cascadeTo = function(t, i, n) {
            var s, r, o, a, l = e.to(t, i, n), u = [l], h = [], c = [], p = [], f = e._internals.reservedProps;
            for (t = l._targets || l.target,
            Kt(t, h, p),
            l.render(i, !0, !0),
            Kt(t, c),
            l.render(0, !0, !0),
            l._enabled(!0),
            s = p.length; --s > -1; )
                if ((r = it(p[s], h[s], c[s])).firstMPT) {
                    for (o in r = r.difs,
                    n)
                        f[o] && (r[o] = n[o]);
                    for (o in a = {},
                    r)
                        a[o] = h[s][o];
                    u.push(e.fromTo(p[s], i, a, r))
                }
            return u
        }
        ,
        t.activate([o]),
        o
    }, !0),
    t = _gsScope._gsDefine.plugin({
        propName: "roundProps",
        version: "1.5",
        priority: -1,
        API: 2,
        init: function(t, e, i) {
            return this._tween = i,
            !0
        }
    }),
    e = function(t) {
        for (; t; )
            t.f || t.blob || (t.r = 1),
            t = t._next
    }
    ,
    (i = t.prototype)._onInitAllProps = function() {
        for (var t, i, n, s = this._tween, r = s.vars.roundProps.join ? s.vars.roundProps : s.vars.roundProps.split(","), o = r.length, a = {}, l = s._propLookup.roundProps; --o > -1; )
            a[r[o]] = 1;
        for (o = r.length; --o > -1; )
            for (t = r[o],
            i = s._firstPT; i; )
                n = i._next,
                i.pg ? i.t._roundProps(a, !0) : i.n === t && (2 === i.f && i.t ? e(i.t._firstPT) : (this._add(i.t, t, i.s, i.c),
                n && (n._prev = i._prev),
                i._prev ? i._prev._next = n : s._firstPT === i && (s._firstPT = n),
                i._next = i._prev = null,
                s._propLookup[t] = l)),
                i = n;
        return !1
    }
    ,
    i._add = function(t, e, i, n) {
        this._addTween(t, e, i, i + n, e, !0),
        this._overwriteProps.push(e)
    }
    ,
    _gsScope._gsDefine.plugin({
        propName: "attr",
        API: 2,
        version: "0.5.0",
        init: function(t, e, i) {
            var n;
            if ("function" != typeof t.setAttribute)
                return !1;
            for (n in e)
                this._addTween(t, "setAttribute", t.getAttribute(n) + "", e[n] + "", n, !1, n),
                this._overwriteProps.push(n);
            return !0
        }
    }),
    _gsScope._gsDefine.plugin({
        propName: "directionalRotation",
        version: "0.2.1",
        API: 2,
        init: function(t, e, i) {
            "object" != typeof e && (e = {
                rotation: e
            }),
            this.finals = {};
            var n, s, r, o, a, l = !0 === e.useRadians ? 2 * Math.PI : 360;
            for (n in e)
                "useRadians" !== n && (s = (a = (e[n] + "").split("_"))[0],
                r = parseFloat("function" != typeof t[n] ? t[n] : t[n.indexOf("set") || "function" != typeof t["get" + n.substr(3)] ? n : "get" + n.substr(3)]()),
                o = (this.finals[n] = "string" == typeof s && "=" === s.charAt(1) ? r + parseInt(s.charAt(0) + "1", 10) * Number(s.substr(2)) : Number(s) || 0) - r,
                a.length && (-1 !== (s = a.join("_")).indexOf("short") && ((o %= l) !== o % (l / 2) && (o = 0 > o ? o + l : o - l)),
                -1 !== s.indexOf("_cw") && 0 > o ? o = (o + 9999999999 * l) % l - (o / l | 0) * l : -1 !== s.indexOf("ccw") && o > 0 && (o = (o - 9999999999 * l) % l - (o / l | 0) * l)),
                (o > 1e-6 || -1e-6 > o) && (this._addTween(t, n, r, r + o, n),
                this._overwriteProps.push(n)));
            return !0
        },
        set: function(t) {
            var e;
            if (1 !== t)
                this._super.setRatio.call(this, t);
            else
                for (e = this._firstPT; e; )
                    e.f ? e.t[e.p](this.finals[e.p]) : e.t[e.p] = this.finals[e.p],
                    e = e._next
        }
    })._autoCSS = !0,
    _gsScope._gsDefine("easing.Back", ["easing.Ease"], function(t) {
        var e, i, n, s = _gsScope.GreenSockGlobals || _gsScope, r = s.com.greensock, o = 2 * Math.PI, a = Math.PI / 2, l = r._class, u = function(e, i) {
            var n = l("easing." + e, function() {}, !0)
              , s = n.prototype = new t;
            return s.constructor = n,
            s.getRatio = i,
            n
        }, h = t.register || function() {}
        , c = function(t, e, i, n, s) {
            var r = l("easing." + t, {
                easeOut: new e,
                easeIn: new i,
                easeInOut: new n
            }, !0);
            return h(r, t),
            r
        }, p = function(t, e, i) {
            this.t = t,
            this.v = e,
            i && (this.next = i,
            i.prev = this,
            this.c = i.v - e,
            this.gap = i.t - t)
        }, f = function(e, i) {
            var n = l("easing." + e, function(t) {
                this._p1 = t || 0 === t ? t : 1.70158,
                this._p2 = 1.525 * this._p1
            }, !0)
              , s = n.prototype = new t;
            return s.constructor = n,
            s.getRatio = i,
            s.config = function(t) {
                return new n(t)
            }
            ,
            n
        }, d = c("Back", f("BackOut", function(t) {
            return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1
        }), f("BackIn", function(t) {
            return t * t * ((this._p1 + 1) * t - this._p1)
        }), f("BackInOut", function(t) {
            return (t *= 2) < 1 ? .5 * t * t * ((this._p2 + 1) * t - this._p2) : .5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2)
        })), g = l("easing.SlowMo", function(t, e, i) {
            e = e || 0 === e ? e : .7,
            null == t ? t = .7 : t > 1 && (t = 1),
            this._p = 1 !== t ? e : 0,
            this._p1 = (1 - t) / 2,
            this._p2 = t,
            this._p3 = this._p1 + this._p2,
            this._calcEnd = !0 === i
        }, !0), m = g.prototype = new t;
        return m.constructor = g,
        m.getRatio = function(t) {
            var e = t + (.5 - t) * this._p;
            return t < this._p1 ? this._calcEnd ? 1 - (t = 1 - t / this._p1) * t : e - (t = 1 - t / this._p1) * t * t * t * e : t > this._p3 ? this._calcEnd ? 1 - (t = (t - this._p3) / this._p1) * t : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t : this._calcEnd ? 1 : e
        }
        ,
        g.ease = new g(.7,.7),
        m.config = g.config = function(t, e, i) {
            return new g(t,e,i)
        }
        ,
        (m = (e = l("easing.SteppedEase", function(t) {
            t = t || 1,
            this._p1 = 1 / t,
            this._p2 = t + 1
        }, !0)).prototype = new t).constructor = e,
        m.getRatio = function(t) {
            return 0 > t ? t = 0 : t >= 1 && (t = .999999999),
            (this._p2 * t >> 0) * this._p1
        }
        ,
        m.config = e.config = function(t) {
            return new e(t)
        }
        ,
        (m = (i = l("easing.RoughEase", function(e) {
            for (var i, n, s, r, o, a, l = (e = e || {}).taper || "none", u = [], h = 0, c = 0 | (e.points || 20), f = c, d = !1 !== e.randomize, g = !0 === e.clamp, m = e.template instanceof t ? e.template : null, _ = "number" == typeof e.strength ? .4 * e.strength : .4; --f > -1; )
                i = d ? Math.random() : 1 / c * f,
                n = m ? m.getRatio(i) : i,
                "none" === l ? s = _ : "out" === l ? s = (r = 1 - i) * r * _ : "in" === l ? s = i * i * _ : .5 > i ? s = (r = 2 * i) * r * .5 * _ : s = (r = 2 * (1 - i)) * r * .5 * _,
                d ? n += Math.random() * s - .5 * s : f % 2 ? n += .5 * s : n -= .5 * s,
                g && (n > 1 ? n = 1 : 0 > n && (n = 0)),
                u[h++] = {
                    x: i,
                    y: n
                };
            for (u.sort(function(t, e) {
                return t.x - e.x
            }),
            a = new p(1,1,null),
            f = c; --f > -1; )
                o = u[f],
                a = new p(o.x,o.y,a);
            this._prev = new p(0,0,0 !== a.t ? a : a.next)
        }, !0)).prototype = new t).constructor = i,
        m.getRatio = function(t) {
            var e = this._prev;
            if (t > e.t) {
                for (; e.next && t >= e.t; )
                    e = e.next;
                e = e.prev
            } else
                for (; e.prev && t <= e.t; )
                    e = e.prev;
            return this._prev = e,
            e.v + (t - e.t) / e.gap * e.c
        }
        ,
        m.config = function(t) {
            return new i(t)
        }
        ,
        i.ease = new i,
        c("Bounce", u("BounceOut", function(t) {
            return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
        }), u("BounceIn", function(t) {
            return (t = 1 - t) < 1 / 2.75 ? 1 - 7.5625 * t * t : 2 / 2.75 > t ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : 2.5 / 2.75 > t ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
        }), u("BounceInOut", function(t) {
            var e = .5 > t;
            return t = 1 / 2.75 > (t = e ? 1 - 2 * t : 2 * t - 1) ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375,
            e ? .5 * (1 - t) : .5 * t + .5
        })),
        c("Circ", u("CircOut", function(t) {
            return Math.sqrt(1 - (t -= 1) * t)
        }), u("CircIn", function(t) {
            return -(Math.sqrt(1 - t * t) - 1)
        }), u("CircInOut", function(t) {
            return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
        })),
        c("Elastic", (n = function(e, i, n) {
            var s = l("easing." + e, function(t, e) {
                this._p1 = t >= 1 ? t : 1,
                this._p2 = (e || n) / (1 > t ? t : 1),
                this._p3 = this._p2 / o * (Math.asin(1 / this._p1) || 0),
                this._p2 = o / this._p2
            }, !0)
              , r = s.prototype = new t;
            return r.constructor = s,
            r.getRatio = i,
            r.config = function(t, e) {
                return new s(t,e)
            }
            ,
            s
        }
        )("ElasticOut", function(t) {
            return this._p1 * Math.pow(2, -10 * t) * Math.sin((t - this._p3) * this._p2) + 1
        }, .3), n("ElasticIn", function(t) {
            return -this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2)
        }, .3), n("ElasticInOut", function(t) {
            return (t *= 2) < 1 ? this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) * -.5 : this._p1 * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) * .5 + 1
        }, .45)),
        c("Expo", u("ExpoOut", function(t) {
            return 1 - Math.pow(2, -10 * t)
        }), u("ExpoIn", function(t) {
            return Math.pow(2, 10 * (t - 1)) - .001
        }), u("ExpoInOut", function(t) {
            return (t *= 2) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
        })),
        c("Sine", u("SineOut", function(t) {
            return Math.sin(t * a)
        }), u("SineIn", function(t) {
            return 1 - Math.cos(t * a)
        }), u("SineInOut", function(t) {
            return -.5 * (Math.cos(Math.PI * t) - 1)
        })),
        l("easing.EaseLookup", {
            find: function(e) {
                return t.map[e]
            }
        }, !0),
        h(s.SlowMo, "SlowMo", "ease,"),
        h(i, "RoughEase", "ease,"),
        h(e, "SteppedEase", "ease,"),
        d
    }, !0)
}),
_gsScope._gsDefine && _gsScope._gsQueue.pop()(),
function(t, e) {
    "use strict";
    var i, n, s = t.GreenSockGlobals = t.GreenSockGlobals || t;
    if (!s.TweenLite) {
        var r, o, a, l, u, h = function(t) {
            var e, i = t.split("."), n = s;
            for (e = 0; e < i.length; e++)
                n[i[e]] = n = n[i[e]] || {};
            return n
        }, c = h("com.greensock"), p = 1e-10, f = function(t) {
            var e, i = [], n = t.length;
            for (e = 0; e !== n; i.push(t[e++]))
                ;
            return i
        }, d = function() {}, g = (i = Object.prototype.toString,
        n = i.call([]),
        function(t) {
            return null != t && (t instanceof Array || "object" == typeof t && !!t.push && i.call(t) === n)
        }
        ), m = {}, _ = function(e, i, n, r) {
            this.sc = m[e] ? m[e].sc : [],
            m[e] = this,
            this.gsClass = null,
            this.func = n;
            var o = [];
            this.check = function(a) {
                for (var l, u, c, p, f, d = i.length, g = d; --d > -1; )
                    (l = m[i[d]] || new _(i[d],[])).gsClass ? (o[d] = l.gsClass,
                    g--) : a && l.sc.push(this);
                if (0 === g && n)
                    for (c = (u = ("com.greensock." + e).split(".")).pop(),
                    p = h(u.join("."))[c] = this.gsClass = n.apply(n, o),
                    r && (s[c] = p,
                    !(f = "undefined" != typeof module && module.exports) && "function" == typeof define && define.amd ? define((t.GreenSockAMDPath ? t.GreenSockAMDPath + "/" : "") + e.split(".").pop(), [], function() {
                        return p
                    }) : "TweenMax" === e && f && (module.exports = p)),
                    d = 0; d < this.sc.length; d++)
                        this.sc[d].check()
            }
            ,
            this.check(!0)
        }, v = t._gsDefine = function(t, e, i, n) {
            return new _(t,e,i,n)
        }
        , y = c._class = function(t, e, i) {
            return e = e || function() {}
            ,
            v(t, [], function() {
                return e
            }, i),
            e
        }
        ;
        v.globals = s;
        var b = [0, 0, 1, 1]
          , w = []
          , x = y("easing.Ease", function(t, e, i, n) {
            this._func = t,
            this._type = i || 0,
            this._power = n || 0,
            this._params = e ? b.concat(e) : b
        }, !0)
          , T = x.map = {}
          , P = x.register = function(t, e, i, n) {
            for (var s, r, o, a, l = e.split(","), u = l.length, h = (i || "easeIn,easeOut,easeInOut").split(","); --u > -1; )
                for (r = l[u],
                s = n ? y("easing." + r, null, !0) : c.easing[r] || {},
                o = h.length; --o > -1; )
                    a = h[o],
                    T[r + "." + a] = T[a + r] = s[a] = t.getRatio ? t : t[a] || new t
        }
        ;
        for ((a = x.prototype)._calcEnd = !1,
        a.getRatio = function(t) {
            if (this._func)
                return this._params[0] = t,
                this._func.apply(null, this._params);
            var e = this._type
              , i = this._power
              , n = 1 === e ? 1 - t : 2 === e ? t : .5 > t ? 2 * t : 2 * (1 - t);
            return 1 === i ? n *= n : 2 === i ? n *= n * n : 3 === i ? n *= n * n * n : 4 === i && (n *= n * n * n * n),
            1 === e ? 1 - n : 2 === e ? n : .5 > t ? n / 2 : 1 - n / 2
        }
        ,
        o = (r = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"]).length; --o > -1; )
            a = r[o] + ",Power" + o,
            P(new x(null,null,1,o), a, "easeOut", !0),
            P(new x(null,null,2,o), a, "easeIn" + (0 === o ? ",easeNone" : "")),
            P(new x(null,null,3,o), a, "easeInOut");
        T.linear = c.easing.Linear.easeIn,
        T.swing = c.easing.Quad.easeInOut;
        var S = y("events.EventDispatcher", function(t) {
            this._listeners = {},
            this._eventTarget = t || this
        });
        (a = S.prototype).addEventListener = function(t, e, i, n, s) {
            s = s || 0;
            var r, o, a = this._listeners[t], h = 0;
            for (null == a && (this._listeners[t] = a = []),
            o = a.length; --o > -1; )
                (r = a[o]).c === e && r.s === i ? a.splice(o, 1) : 0 === h && r.pr < s && (h = o + 1);
            a.splice(h, 0, {
                c: e,
                s: i,
                up: n,
                pr: s
            }),
            this !== l || u || l.wake()
        }
        ,
        a.removeEventListener = function(t, e) {
            var i, n = this._listeners[t];
            if (n)
                for (i = n.length; --i > -1; )
                    if (n[i].c === e)
                        return void n.splice(i, 1)
        }
        ,
        a.dispatchEvent = function(t) {
            var e, i, n, s = this._listeners[t];
            if (s)
                for (e = s.length,
                i = this._eventTarget; --e > -1; )
                    (n = s[e]) && (n.up ? n.c.call(n.s || i, {
                        type: t,
                        target: i
                    }) : n.c.call(n.s || i))
        }
        ;
        var C = t.requestAnimationFrame
          , A = t.cancelAnimationFrame
          , O = Date.now || function() {
            return (new Date).getTime()
        }
          , E = O();
        for (o = (r = ["ms", "moz", "webkit", "o"]).length; --o > -1 && !C; )
            C = t[r[o] + "RequestAnimationFrame"],
            A = t[r[o] + "CancelAnimationFrame"] || t[r[o] + "CancelRequestAnimationFrame"];
        y("Ticker", function(t, e) {
            var i, n, s, r, o, a = this, h = O(), c = !(!1 === e || !C) && "auto", p = 500, f = 33, g = function(t) {
                var e, l, u = O() - E;
                u > p && (h += u - f),
                E += u,
                a.time = (E - h) / 1e3,
                e = a.time - o,
                (!i || e > 0 || !0 === t) && (a.frame++,
                o += e + (e >= r ? .004 : r - e),
                l = !0),
                !0 !== t && (s = n(g)),
                l && a.dispatchEvent("tick")
            };
            S.call(a),
            a.time = a.frame = 0,
            a.tick = function() {
                g(!0)
            }
            ,
            a.lagSmoothing = function(t, e) {
                p = t || 1e10,
                f = Math.min(e, p, 0)
            }
            ,
            a.sleep = function() {
                null != s && (c && A ? A(s) : clearTimeout(s),
                n = d,
                s = null,
                a === l && (u = !1))
            }
            ,
            a.wake = function(t) {
                null !== s ? a.sleep() : t ? h += -E + (E = O()) : a.frame > 10 && (E = O() - p + 5),
                n = 0 === i ? d : c && C ? C : function(t) {
                    return setTimeout(t, 1e3 * (o - a.time) + 1 | 0)
                }
                ,
                a === l && (u = !0),
                g(2)
            }
            ,
            a.fps = function(t) {
                return arguments.length ? (r = 1 / ((i = t) || 60),
                o = this.time + r,
                void a.wake()) : i
            }
            ,
            a.useRAF = function(t) {
                return arguments.length ? (a.sleep(),
                c = t,
                void a.fps(i)) : c
            }
            ,
            a.fps(t),
            setTimeout(function() {
                "auto" === c && a.frame < 5 && "hidden" !== document.visibilityState && a.useRAF(!1)
            }, 1500)
        }),
        (a = c.Ticker.prototype = new c.events.EventDispatcher).constructor = c.Ticker;
        var k = y("core.Animation", function(t, e) {
            if (this.vars = e = e || {},
            this._duration = this._totalDuration = t || 0,
            this._delay = Number(e.delay) || 0,
            this._timeScale = 1,
            this._active = !0 === e.immediateRender,
            this.data = e.data,
            this._reversed = !0 === e.reversed,
            W) {
                u || l.wake();
                var i = this.vars.useFrames ? G : W;
                i.add(this, i._time),
                this.vars.paused && this.paused(!0)
            }
        });
        l = k.ticker = new c.Ticker,
        (a = k.prototype)._dirty = a._gc = a._initted = a._paused = !1,
        a._totalTime = a._time = 0,
        a._rawPrevTime = -1,
        a._next = a._last = a._onUpdate = a._timeline = a.timeline = null,
        a._paused = !1;
        var L = function() {
            u && O() - E > 2e3 && l.wake(),
            setTimeout(L, 2e3)
        };
        L(),
        a.play = function(t, e) {
            return null != t && this.seek(t, e),
            this.reversed(!1).paused(!1)
        }
        ,
        a.pause = function(t, e) {
            return null != t && this.seek(t, e),
            this.paused(!0)
        }
        ,
        a.resume = function(t, e) {
            return null != t && this.seek(t, e),
            this.paused(!1)
        }
        ,
        a.seek = function(t, e) {
            return this.totalTime(Number(t), !1 !== e)
        }
        ,
        a.restart = function(t, e) {
            return this.reversed(!1).paused(!1).totalTime(t ? -this._delay : 0, !1 !== e, !0)
        }
        ,
        a.reverse = function(t, e) {
            return null != t && this.seek(t || this.totalDuration(), e),
            this.reversed(!0).paused(!1)
        }
        ,
        a.render = function(t, e, i) {}
        ,
        a.invalidate = function() {
            return this._time = this._totalTime = 0,
            this._initted = this._gc = !1,
            this._rawPrevTime = -1,
            (this._gc || !this.timeline) && this._enabled(!0),
            this
        }
        ,
        a.isActive = function() {
            var t, e = this._timeline, i = this._startTime;
            return !e || !this._gc && !this._paused && e.isActive() && (t = e.rawTime()) >= i && t < i + this.totalDuration() / this._timeScale
        }
        ,
        a._enabled = function(t, e) {
            return u || l.wake(),
            this._gc = !t,
            this._active = this.isActive(),
            !0 !== e && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)),
            !1
        }
        ,
        a._kill = function(t, e) {
            return this._enabled(!1, !1)
        }
        ,
        a.kill = function(t, e) {
            return this._kill(t, e),
            this
        }
        ,
        a._uncache = function(t) {
            for (var e = t ? this : this.timeline; e; )
                e._dirty = !0,
                e = e.timeline;
            return this
        }
        ,
        a._swapSelfInParams = function(t) {
            for (var e = t.length, i = t.concat(); --e > -1; )
                "{self}" === t[e] && (i[e] = this);
            return i
        }
        ,
        a._callback = function(t) {
            var e = this.vars;
            e[t].apply(e[t + "Scope"] || e.callbackScope || this, e[t + "Params"] || w)
        }
        ,
        a.eventCallback = function(t, e, i, n) {
            if ("on" === (t || "").substr(0, 2)) {
                var s = this.vars;
                if (1 === arguments.length)
                    return s[t];
                null == e ? delete s[t] : (s[t] = e,
                s[t + "Params"] = g(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i,
                s[t + "Scope"] = n),
                "onUpdate" === t && (this._onUpdate = e)
            }
            return this
        }
        ,
        a.delay = function(t) {
            return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay),
            this._delay = t,
            this) : this._delay
        }
        ,
        a.duration = function(t) {
            return arguments.length ? (this._duration = this._totalDuration = t,
            this._uncache(!0),
            this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0),
            this) : (this._dirty = !1,
            this._duration)
        }
        ,
        a.totalDuration = function(t) {
            return this._dirty = !1,
            arguments.length ? this.duration(t) : this._totalDuration
        }
        ,
        a.time = function(t, e) {
            return arguments.length ? (this._dirty && this.totalDuration(),
            this.totalTime(t > this._duration ? this._duration : t, e)) : this._time
        }
        ,
        a.totalTime = function(t, e, i) {
            if (u || l.wake(),
            !arguments.length)
                return this._totalTime;
            if (this._timeline) {
                if (0 > t && !i && (t += this.totalDuration()),
                this._timeline.smoothChildTiming) {
                    this._dirty && this.totalDuration();
                    var n = this._totalDuration
                      , s = this._timeline;
                    if (t > n && !i && (t = n),
                    this._startTime = (this._paused ? this._pauseTime : s._time) - (this._reversed ? n - t : t) / this._timeScale,
                    s._dirty || this._uncache(!1),
                    s._timeline)
                        for (; s._timeline; )
                            s._timeline._time !== (s._startTime + s._totalTime) / s._timeScale && s.totalTime(s._totalTime, !0),
                            s = s._timeline
                }
                this._gc && this._enabled(!0, !1),
                (this._totalTime !== t || 0 === this._duration) && (I.length && Z(),
                this.render(t, e, !1),
                I.length && Z())
            }
            return this
        }
        ,
        a.progress = a.totalProgress = function(t, e) {
            var i = this.duration();
            return arguments.length ? this.totalTime(i * t, e) : i ? this._time / i : this.ratio
        }
        ,
        a.startTime = function(t) {
            return arguments.length ? (t !== this._startTime && (this._startTime = t,
            this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)),
            this) : this._startTime
        }
        ,
        a.endTime = function(t) {
            return this._startTime + (0 != t ? this.totalDuration() : this.duration()) / this._timeScale
        }
        ,
        a.timeScale = function(t) {
            if (!arguments.length)
                return this._timeScale;
            if (t = t || p,
            this._timeline && this._timeline.smoothChildTiming) {
                var e = this._pauseTime
                  , i = e || 0 === e ? e : this._timeline.totalTime();
                this._startTime = i - (i - this._startTime) * this._timeScale / t
            }
            return this._timeScale = t,
            this._uncache(!1)
        }
        ,
        a.reversed = function(t) {
            return arguments.length ? (t != this._reversed && (this._reversed = t,
            this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)),
            this) : this._reversed
        }
        ,
        a.paused = function(t) {
            if (!arguments.length)
                return this._paused;
            var e, i, n = this._timeline;
            return t != this._paused && n && (u || t || l.wake(),
            i = (e = n.rawTime()) - this._pauseTime,
            !t && n.smoothChildTiming && (this._startTime += i,
            this._uncache(!1)),
            this._pauseTime = t ? e : null,
            this._paused = t,
            this._active = this.isActive(),
            !t && 0 !== i && this._initted && this.duration() && (e = n.smoothChildTiming ? this._totalTime : (e - this._startTime) / this._timeScale,
            this.render(e, e === this._totalTime, !0))),
            this._gc && !t && this._enabled(!0, !1),
            this
        }
        ;
        var R = y("core.SimpleTimeline", function(t) {
            k.call(this, 0, t),
            this.autoRemoveChildren = this.smoothChildTiming = !0
        });
        (a = R.prototype = new k).constructor = R,
        a.kill()._gc = !1,
        a._first = a._last = a._recent = null,
        a._sortChildren = !1,
        a.add = a.insert = function(t, e, i, n) {
            var s, r;
            if (t._startTime = Number(e || 0) + t._delay,
            t._paused && this !== t._timeline && (t._pauseTime = t._startTime + (this.rawTime() - t._startTime) / t._timeScale),
            t.timeline && t.timeline._remove(t, !0),
            t.timeline = t._timeline = this,
            t._gc && t._enabled(!0, !0),
            s = this._last,
            this._sortChildren)
                for (r = t._startTime; s && s._startTime > r; )
                    s = s._prev;
            return s ? (t._next = s._next,
            s._next = t) : (t._next = this._first,
            this._first = t),
            t._next ? t._next._prev = t : this._last = t,
            t._prev = s,
            this._recent = t,
            this._timeline && this._uncache(!0),
            this
        }
        ,
        a._remove = function(t, e) {
            return t.timeline === this && (e || t._enabled(!1, !0),
            t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next),
            t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev),
            t._next = t._prev = t.timeline = null,
            t === this._recent && (this._recent = this._last),
            this._timeline && this._uncache(!0)),
            this
        }
        ,
        a.render = function(t, e, i) {
            var n, s = this._first;
            for (this._totalTime = this._time = this._rawPrevTime = t; s; )
                n = s._next,
                (s._active || t >= s._startTime && !s._paused) && (s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)),
                s = n
        }
        ,
        a.rawTime = function() {
            return u || l.wake(),
            this._totalTime
        }
        ;
        var M = y("TweenLite", function(e, i, n) {
            if (k.call(this, i, n),
            this.render = M.prototype.render,
            null == e)
                throw "Cannot tween a null target.";
            this.target = e = "string" != typeof e ? e : M.selector(e) || e;
            var s, r, o, a = e.jquery || e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType), l = this.vars.overwrite;
            if (this._overwrite = l = null == l ? U[M.defaultOverwrite] : "number" == typeof l ? l >> 0 : U[l],
            (a || e instanceof Array || e.push && g(e)) && "number" != typeof e[0])
                for (this._targets = o = f(e),
                this._propLookup = [],
                this._siblings = [],
                s = 0; s < o.length; s++)
                    (r = o[s]) ? "string" != typeof r ? r.length && r !== t && r[0] && (r[0] === t || r[0].nodeType && r[0].style && !r.nodeType) ? (o.splice(s--, 1),
                    this._targets = o = o.concat(f(r))) : (this._siblings[s] = Q(r, this, !1),
                    1 === l && this._siblings[s].length > 1 && J(r, this, null, 1, this._siblings[s])) : "string" == typeof (r = o[s--] = M.selector(r)) && o.splice(s + 1, 1) : o.splice(s--, 1);
            else
                this._propLookup = {},
                this._siblings = Q(e, this, !1),
                1 === l && this._siblings.length > 1 && J(e, this, null, 1, this._siblings);
            (this.vars.immediateRender || 0 === i && 0 === this._delay && !1 !== this.vars.immediateRender) && (this._time = -p,
            this.render(Math.min(0, -this._delay)))
        }, !0)
          , D = function(e) {
            return e && e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType)
        };
        (a = M.prototype = new k).constructor = M,
        a.kill()._gc = !1,
        a.ratio = 0,
        a._firstPT = a._targets = a._overwrittenProps = a._startAt = null,
        a._notifyPluginsOfEnabled = a._lazy = !1,
        M.version = "1.18.4",
        M.defaultEase = a._ease = new x(null,null,1,1),
        M.defaultOverwrite = "auto",
        M.ticker = l,
        M.autoSleep = 120,
        M.lagSmoothing = function(t, e) {
            l.lagSmoothing(t, e)
        }
        ,
        M.selector = t.$ || t.jQuery || function(e) {
            var i = t.$ || t.jQuery;
            return i ? (M.selector = i,
            i(e)) : "undefined" == typeof document ? e : document.querySelectorAll ? document.querySelectorAll(e) : document.getElementById("#" === e.charAt(0) ? e.substr(1) : e)
        }
        ;
        var I = []
          , N = {}
          , z = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi
          , F = function(t) {
            for (var e, i = this._firstPT; i; )
                e = i.blob ? t ? this.join("") : this.start : i.c * t + i.s,
                i.r ? e = Math.round(e) : 1e-6 > e && e > -1e-6 && (e = 0),
                i.f ? i.fp ? i.t[i.p](i.fp, e) : i.t[i.p](e) : i.t[i.p] = e,
                i = i._next
        }
          , B = function(t, e, i, n) {
            var s, r, o, a, l, u, h, c = [t, e], p = 0, f = "", d = 0;
            for (c.start = t,
            i && (i(c),
            t = c[0],
            e = c[1]),
            c.length = 0,
            s = t.match(z) || [],
            r = e.match(z) || [],
            n && (n._next = null,
            n.blob = 1,
            c._firstPT = n),
            l = r.length,
            a = 0; l > a; a++)
                h = r[a],
                f += (u = e.substr(p, e.indexOf(h, p) - p)) || !a ? u : ",",
                p += u.length,
                d ? d = (d + 1) % 5 : "rgba(" === u.substr(-5) && (d = 1),
                h === s[a] || s.length <= a ? f += h : (f && (c.push(f),
                f = ""),
                o = parseFloat(s[a]),
                c.push(o),
                c._firstPT = {
                    _next: c._firstPT,
                    t: c,
                    p: c.length - 1,
                    s: o,
                    c: ("=" === h.charAt(1) ? parseInt(h.charAt(0) + "1", 10) * parseFloat(h.substr(2)) : parseFloat(h) - o) || 0,
                    f: 0,
                    r: d && 4 > d
                }),
                p += h.length;
            return (f += e.substr(p)) && c.push(f),
            c.setRatio = F,
            c
        }
          , X = function(t, e, i, n, s, r, o, a) {
            var l, u = "get" === i ? t[e] : i, h = typeof t[e], c = "string" == typeof n && "=" === n.charAt(1), p = {
                t: t,
                p: e,
                s: u,
                f: "function" === h,
                pg: 0,
                n: s || e,
                r: r,
                pr: 0,
                c: c ? parseInt(n.charAt(0) + "1", 10) * parseFloat(n.substr(2)) : parseFloat(n) - u || 0
            };
            return "number" !== h && ("function" === h && "get" === i && (l = e.indexOf("set") || "function" != typeof t["get" + e.substr(3)] ? e : "get" + e.substr(3),
            p.s = u = o ? t[l](o) : t[l]()),
            "string" == typeof u && (o || isNaN(u)) ? (p.fp = o,
            p = {
                t: B(u, n, a || M.defaultStringFilter, p),
                p: "setRatio",
                s: 0,
                c: 1,
                f: 2,
                pg: 0,
                n: s || e,
                pr: 0
            }) : c || (p.s = parseFloat(u),
            p.c = parseFloat(n) - p.s || 0)),
            p.c ? ((p._next = this._firstPT) && (p._next._prev = p),
            this._firstPT = p,
            p) : void 0
        }
          , Y = M._internals = {
            isArray: g,
            isSelector: D,
            lazyTweens: I,
            blobDif: B
        }
          , j = M._plugins = {}
          , H = Y.tweenLookup = {}
          , q = 0
          , V = Y.reservedProps = {
            ease: 1,
            delay: 1,
            overwrite: 1,
            onComplete: 1,
            onCompleteParams: 1,
            onCompleteScope: 1,
            useFrames: 1,
            runBackwards: 1,
            startAt: 1,
            onUpdate: 1,
            onUpdateParams: 1,
            onUpdateScope: 1,
            onStart: 1,
            onStartParams: 1,
            onStartScope: 1,
            onReverseComplete: 1,
            onReverseCompleteParams: 1,
            onReverseCompleteScope: 1,
            onRepeat: 1,
            onRepeatParams: 1,
            onRepeatScope: 1,
            easeParams: 1,
            yoyo: 1,
            immediateRender: 1,
            repeat: 1,
            repeatDelay: 1,
            data: 1,
            paused: 1,
            reversed: 1,
            autoCSS: 1,
            lazy: 1,
            onOverwrite: 1,
            callbackScope: 1,
            stringFilter: 1
        }
          , U = {
            none: 0,
            all: 1,
            auto: 2,
            concurrent: 3,
            allOnStart: 4,
            preexisting: 5,
            true: 1,
            false: 0
        }
          , G = k._rootFramesTimeline = new R
          , W = k._rootTimeline = new R
          , $ = 30
          , Z = Y.lazyRender = function() {
            var t, e = I.length;
            for (N = {}; --e > -1; )
                (t = I[e]) && !1 !== t._lazy && (t.render(t._lazy[0], t._lazy[1], !0),
                t._lazy = !1);
            I.length = 0
        }
        ;
        W._startTime = l.time,
        G._startTime = l.frame,
        W._active = G._active = !0,
        setTimeout(Z, 1),
        k._updateRoot = M.render = function() {
            var t, e, i;
            if (I.length && Z(),
            W.render((l.time - W._startTime) * W._timeScale, !1, !1),
            G.render((l.frame - G._startTime) * G._timeScale, !1, !1),
            I.length && Z(),
            l.frame >= $) {
                for (i in $ = l.frame + (parseInt(M.autoSleep, 10) || 120),
                H) {
                    for (t = (e = H[i].tweens).length; --t > -1; )
                        e[t]._gc && e.splice(t, 1);
                    0 === e.length && delete H[i]
                }
                if ((!(i = W._first) || i._paused) && M.autoSleep && !G._first && 1 === l._listeners.tick.length) {
                    for (; i && i._paused; )
                        i = i._next;
                    i || l.sleep()
                }
            }
        }
        ,
        l.addEventListener("tick", k._updateRoot);
        var Q = function(t, e, i) {
            var n, s, r = t._gsTweenID;
            if (H[r || (t._gsTweenID = r = "t" + q++)] || (H[r] = {
                target: t,
                tweens: []
            }),
            e && ((n = H[r].tweens)[s = n.length] = e,
            i))
                for (; --s > -1; )
                    n[s] === e && n.splice(s, 1);
            return H[r].tweens
        }
          , K = function(t, e, i, n) {
            var s, r, o = t.vars.onOverwrite;
            return o && (s = o(t, e, i, n)),
            (o = M.onOverwrite) && (r = o(t, e, i, n)),
            !1 !== s && !1 !== r
        }
          , J = function(t, e, i, n, s) {
            var r, o, a, l;
            if (1 === n || n >= 4) {
                for (l = s.length,
                r = 0; l > r; r++)
                    if ((a = s[r]) !== e)
                        a._gc || a._kill(null, t, e) && (o = !0);
                    else if (5 === n)
                        break;
                return o
            }
            var u, h = e._startTime + p, c = [], f = 0, d = 0 === e._duration;
            for (r = s.length; --r > -1; )
                (a = s[r]) === e || a._gc || a._paused || (a._timeline !== e._timeline ? (u = u || tt(e, 0, d),
                0 === tt(a, u, d) && (c[f++] = a)) : a._startTime <= h && a._startTime + a.totalDuration() / a._timeScale > h && ((d || !a._initted) && h - a._startTime <= 2e-10 || (c[f++] = a)));
            for (r = f; --r > -1; )
                if (a = c[r],
                2 === n && a._kill(i, t, e) && (o = !0),
                2 !== n || !a._firstPT && a._initted) {
                    if (2 !== n && !K(a, e))
                        continue;
                    a._enabled(!1, !1) && (o = !0)
                }
            return o
        }
          , tt = function(t, e, i) {
            for (var n = t._timeline, s = n._timeScale, r = t._startTime; n._timeline; ) {
                if (r += n._startTime,
                s *= n._timeScale,
                n._paused)
                    return -100;
                n = n._timeline
            }
            return (r /= s) > e ? r - e : i && r === e || !t._initted && 2 * p > r - e ? p : (r += t.totalDuration() / t._timeScale / s) > e + p ? 0 : r - e - p
        };
        a._init = function() {
            var t, e, i, n, s, r = this.vars, o = this._overwrittenProps, a = this._duration, l = !!r.immediateRender, u = r.ease;
            if (r.startAt) {
                for (n in this._startAt && (this._startAt.render(-1, !0),
                this._startAt.kill()),
                s = {},
                r.startAt)
                    s[n] = r.startAt[n];
                if (s.overwrite = !1,
                s.immediateRender = !0,
                s.lazy = l && !1 !== r.lazy,
                s.startAt = s.delay = null,
                this._startAt = M.to(this.target, 0, s),
                l)
                    if (this._time > 0)
                        this._startAt = null;
                    else if (0 !== a)
                        return
            } else if (r.runBackwards && 0 !== a)
                if (this._startAt)
                    this._startAt.render(-1, !0),
                    this._startAt.kill(),
                    this._startAt = null;
                else {
                    for (n in 0 !== this._time && (l = !1),
                    i = {},
                    r)
                        V[n] && "autoCSS" !== n || (i[n] = r[n]);
                    if (i.overwrite = 0,
                    i.data = "isFromStart",
                    i.lazy = l && !1 !== r.lazy,
                    i.immediateRender = l,
                    this._startAt = M.to(this.target, 0, i),
                    l) {
                        if (0 === this._time)
                            return
                    } else
                        this._startAt._init(),
                        this._startAt._enabled(!1),
                        this.vars.immediateRender && (this._startAt = null)
                }
            if (this._ease = u = u ? u instanceof x ? u : "function" == typeof u ? new x(u,r.easeParams) : T[u] || M.defaultEase : M.defaultEase,
            r.easeParams instanceof Array && u.config && (this._ease = u.config.apply(u, r.easeParams)),
            this._easeType = this._ease._type,
            this._easePower = this._ease._power,
            this._firstPT = null,
            this._targets)
                for (t = this._targets.length; --t > -1; )
                    this._initProps(this._targets[t], this._propLookup[t] = {}, this._siblings[t], o ? o[t] : null) && (e = !0);
            else
                e = this._initProps(this.target, this._propLookup, this._siblings, o);
            if (e && M._onPluginEvent("_onInitAllProps", this),
            o && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)),
            r.runBackwards)
                for (i = this._firstPT; i; )
                    i.s += i.c,
                    i.c = -i.c,
                    i = i._next;
            this._onUpdate = r.onUpdate,
            this._initted = !0
        }
        ,
        a._initProps = function(e, i, n, s) {
            var r, o, a, l, u, h;
            if (null == e)
                return !1;
            for (r in N[e._gsTweenID] && Z(),
            this.vars.css || e.style && e !== t && e.nodeType && j.css && !1 !== this.vars.autoCSS && function(t, e) {
                var i, n = {};
                for (i in t)
                    V[i] || i in e && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!j[i] || j[i] && j[i]._autoCSS) || (n[i] = t[i],
                    delete t[i]);
                t.css = n
            }(this.vars, e),
            this.vars)
                if (h = this.vars[r],
                V[r])
                    h && (h instanceof Array || h.push && g(h)) && -1 !== h.join("").indexOf("{self}") && (this.vars[r] = h = this._swapSelfInParams(h, this));
                else if (j[r] && (l = new j[r])._onInitTween(e, this.vars[r], this)) {
                    for (this._firstPT = u = {
                        _next: this._firstPT,
                        t: l,
                        p: "setRatio",
                        s: 0,
                        c: 1,
                        f: 1,
                        n: r,
                        pg: 1,
                        pr: l._priority
                    },
                    o = l._overwriteProps.length; --o > -1; )
                        i[l._overwriteProps[o]] = this._firstPT;
                    (l._priority || l._onInitAllProps) && (a = !0),
                    (l._onDisable || l._onEnable) && (this._notifyPluginsOfEnabled = !0),
                    u._next && (u._next._prev = u)
                } else
                    i[r] = X.call(this, e, r, "get", h, r, 0, null, this.vars.stringFilter);
            return s && this._kill(s, e) ? this._initProps(e, i, n, s) : this._overwrite > 1 && this._firstPT && n.length > 1 && J(e, this, i, this._overwrite, n) ? (this._kill(i, e),
            this._initProps(e, i, n, s)) : (this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration) && (N[e._gsTweenID] = !0),
            a)
        }
        ,
        a.render = function(t, e, i) {
            var n, s, r, o, a = this._time, l = this._duration, u = this._rawPrevTime;
            if (t >= l - 1e-7)
                this._totalTime = this._time = l,
                this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1,
                this._reversed || (n = !0,
                s = "onComplete",
                i = i || this._timeline.autoRemoveChildren),
                0 === l && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0),
                (0 > u || 0 >= t && t >= -1e-7 || u === p && "isPause" !== this.data) && u !== t && (i = !0,
                u > p && (s = "onReverseComplete")),
                this._rawPrevTime = o = !e || t || u === t ? t : p);
            else if (1e-7 > t)
                this._totalTime = this._time = 0,
                this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0,
                (0 !== a || 0 === l && u > 0) && (s = "onReverseComplete",
                n = this._reversed),
                0 > t && (this._active = !1,
                0 === l && (this._initted || !this.vars.lazy || i) && (u >= 0 && (u !== p || "isPause" !== this.data) && (i = !0),
                this._rawPrevTime = o = !e || t || u === t ? t : p)),
                this._initted || (i = !0);
            else if (this._totalTime = this._time = t,
            this._easeType) {
                var h = t / l
                  , c = this._easeType
                  , f = this._easePower;
                (1 === c || 3 === c && h >= .5) && (h = 1 - h),
                3 === c && (h *= 2),
                1 === f ? h *= h : 2 === f ? h *= h * h : 3 === f ? h *= h * h * h : 4 === f && (h *= h * h * h * h),
                this.ratio = 1 === c ? 1 - h : 2 === c ? h : .5 > t / l ? h / 2 : 1 - h / 2
            } else
                this.ratio = this._ease.getRatio(t / l);
            if (this._time !== a || i) {
                if (!this._initted) {
                    if (this._init(),
                    !this._initted || this._gc)
                        return;
                    if (!i && this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration))
                        return this._time = this._totalTime = a,
                        this._rawPrevTime = u,
                        I.push(this),
                        void (this._lazy = [t, e]);
                    this._time && !n ? this.ratio = this._ease.getRatio(this._time / l) : n && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                }
                for (!1 !== this._lazy && (this._lazy = !1),
                this._active || !this._paused && this._time !== a && t >= 0 && (this._active = !0),
                0 === a && (this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : s || (s = "_dummyGS")),
                this.vars.onStart && (0 !== this._time || 0 === l) && (e || this._callback("onStart"))),
                r = this._firstPT; r; )
                    r.f ? r.t[r.p](r.c * this.ratio + r.s) : r.t[r.p] = r.c * this.ratio + r.s,
                    r = r._next;
                this._onUpdate && (0 > t && this._startAt && -1e-4 !== t && this._startAt.render(t, e, i),
                e || (this._time !== a || n || i) && this._callback("onUpdate")),
                s && (!this._gc || i) && (0 > t && this._startAt && !this._onUpdate && -1e-4 !== t && this._startAt.render(t, e, i),
                n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1),
                this._active = !1),
                !e && this.vars[s] && this._callback(s),
                0 === l && this._rawPrevTime === p && o !== p && (this._rawPrevTime = 0))
            }
        }
        ,
        a._kill = function(t, e, i) {
            if ("all" === t && (t = null),
            null == t && (null == e || e === this.target))
                return this._lazy = !1,
                this._enabled(!1, !1);
            e = "string" != typeof e ? e || this._targets || this.target : M.selector(e) || e;
            var n, s, r, o, a, l, u, h, c, p = i && this._time && i._startTime === this._startTime && this._timeline === i._timeline;
            if ((g(e) || D(e)) && "number" != typeof e[0])
                for (n = e.length; --n > -1; )
                    this._kill(t, e[n], i) && (l = !0);
            else {
                if (this._targets) {
                    for (n = this._targets.length; --n > -1; )
                        if (e === this._targets[n]) {
                            a = this._propLookup[n] || {},
                            this._overwrittenProps = this._overwrittenProps || [],
                            s = this._overwrittenProps[n] = t ? this._overwrittenProps[n] || {} : "all";
                            break
                        }
                } else {
                    if (e !== this.target)
                        return !1;
                    a = this._propLookup,
                    s = this._overwrittenProps = t ? this._overwrittenProps || {} : "all"
                }
                if (a) {
                    if (u = t || a,
                    h = t !== s && "all" !== s && t !== a && ("object" != typeof t || !t._tempKill),
                    i && (M.onOverwrite || this.vars.onOverwrite)) {
                        for (r in u)
                            a[r] && (c || (c = []),
                            c.push(r));
                        if ((c || !t) && !K(this, i, e, c))
                            return !1
                    }
                    for (r in u)
                        (o = a[r]) && (p && (o.f ? o.t[o.p](o.s) : o.t[o.p] = o.s,
                        l = !0),
                        o.pg && o.t._kill(u) && (l = !0),
                        o.pg && 0 !== o.t._overwriteProps.length || (o._prev ? o._prev._next = o._next : o === this._firstPT && (this._firstPT = o._next),
                        o._next && (o._next._prev = o._prev),
                        o._next = o._prev = null),
                        delete a[r]),
                        h && (s[r] = 1);
                    !this._firstPT && this._initted && this._enabled(!1, !1)
                }
            }
            return l
        }
        ,
        a.invalidate = function() {
            return this._notifyPluginsOfEnabled && M._onPluginEvent("_onDisable", this),
            this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null,
            this._notifyPluginsOfEnabled = this._active = this._lazy = !1,
            this._propLookup = this._targets ? {} : [],
            k.prototype.invalidate.call(this),
            this.vars.immediateRender && (this._time = -p,
            this.render(Math.min(0, -this._delay))),
            this
        }
        ,
        a._enabled = function(t, e) {
            if (u || l.wake(),
            t && this._gc) {
                var i, n = this._targets;
                if (n)
                    for (i = n.length; --i > -1; )
                        this._siblings[i] = Q(n[i], this, !0);
                else
                    this._siblings = Q(this.target, this, !0)
            }
            return k.prototype._enabled.call(this, t, e),
            !(!this._notifyPluginsOfEnabled || !this._firstPT) && M._onPluginEvent(t ? "_onEnable" : "_onDisable", this)
        }
        ,
        M.to = function(t, e, i) {
            return new M(t,e,i)
        }
        ,
        M.from = function(t, e, i) {
            return i.runBackwards = !0,
            i.immediateRender = 0 != i.immediateRender,
            new M(t,e,i)
        }
        ,
        M.fromTo = function(t, e, i, n) {
            return n.startAt = i,
            n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender,
            new M(t,e,n)
        }
        ,
        M.delayedCall = function(t, e, i, n, s) {
            return new M(e,0,{
                delay: t,
                onComplete: e,
                onCompleteParams: i,
                callbackScope: n,
                onReverseComplete: e,
                onReverseCompleteParams: i,
                immediateRender: !1,
                lazy: !1,
                useFrames: s,
                overwrite: 0
            })
        }
        ,
        M.set = function(t, e) {
            return new M(t,0,e)
        }
        ,
        M.getTweensOf = function(t, e) {
            if (null == t)
                return [];
            var i, n, s, r;
            if (t = "string" != typeof t ? t : M.selector(t) || t,
            (g(t) || D(t)) && "number" != typeof t[0]) {
                for (i = t.length,
                n = []; --i > -1; )
                    n = n.concat(M.getTweensOf(t[i], e));
                for (i = n.length; --i > -1; )
                    for (r = n[i],
                    s = i; --s > -1; )
                        r === n[s] && n.splice(i, 1)
            } else
                for (i = (n = Q(t).concat()).length; --i > -1; )
                    (n[i]._gc || e && !n[i].isActive()) && n.splice(i, 1);
            return n
        }
        ,
        M.killTweensOf = M.killDelayedCallsTo = function(t, e, i) {
            "object" == typeof e && (i = e,
            e = !1);
            for (var n = M.getTweensOf(t, e), s = n.length; --s > -1; )
                n[s]._kill(i, t)
        }
        ;
        var et = y("plugins.TweenPlugin", function(t, e) {
            this._overwriteProps = (t || "").split(","),
            this._propName = this._overwriteProps[0],
            this._priority = e || 0,
            this._super = et.prototype
        }, !0);
        if (a = et.prototype,
        et.version = "1.18.0",
        et.API = 2,
        a._firstPT = null,
        a._addTween = X,
        a.setRatio = F,
        a._kill = function(t) {
            var e, i = this._overwriteProps, n = this._firstPT;
            if (null != t[this._propName])
                this._overwriteProps = [];
            else
                for (e = i.length; --e > -1; )
                    null != t[i[e]] && i.splice(e, 1);
            for (; n; )
                null != t[n.n] && (n._next && (n._next._prev = n._prev),
                n._prev ? (n._prev._next = n._next,
                n._prev = null) : this._firstPT === n && (this._firstPT = n._next)),
                n = n._next;
            return !1
        }
        ,
        a._roundProps = function(t, e) {
            for (var i = this._firstPT; i; )
                (t[this._propName] || null != i.n && t[i.n.split(this._propName + "_").join("")]) && (i.r = e),
                i = i._next
        }
        ,
        M._onPluginEvent = function(t, e) {
            var i, n, s, r, o, a = e._firstPT;
            if ("_onInitAllProps" === t) {
                for (; a; ) {
                    for (o = a._next,
                    n = s; n && n.pr > a.pr; )
                        n = n._next;
                    (a._prev = n ? n._prev : r) ? a._prev._next = a : s = a,
                    (a._next = n) ? n._prev = a : r = a,
                    a = o
                }
                a = e._firstPT = s
            }
            for (; a; )
                a.pg && "function" == typeof a.t[t] && a.t[t]() && (i = !0),
                a = a._next;
            return i
        }
        ,
        et.activate = function(t) {
            for (var e = t.length; --e > -1; )
                t[e].API === et.API && (j[(new t[e])._propName] = t[e]);
            return !0
        }
        ,
        v.plugin = function(t) {
            if (!(t && t.propName && t.init && t.API))
                throw "illegal plugin definition.";
            var e, i = t.propName, n = t.priority || 0, s = t.overwriteProps, r = {
                init: "_onInitTween",
                set: "setRatio",
                kill: "_kill",
                round: "_roundProps",
                initAll: "_onInitAllProps"
            }, o = y("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", function() {
                et.call(this, i, n),
                this._overwriteProps = s || []
            }, !0 === t.global), a = o.prototype = new et(i);
            for (e in a.constructor = o,
            o.API = t.API,
            r)
                "function" == typeof t[e] && (a[r[e]] = t[e]);
            return o.version = t.version,
            et.activate([o]),
            o
        }
        ,
        r = t._gsQueue) {
            for (o = 0; o < r.length; o++)
                r[o]();
            for (a in m)
                m[a].func || t.console.log("GSAP encountered missing dependency: com.greensock." + a)
        }
        u = !1
    }
}("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window),
((_gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window)._gsQueue || (_gsScope._gsQueue = [])).push(function() {
    "use strict";
    _gsScope._gsDefine("utils.Draggable", ["events.EventDispatcher", "TweenLite", "plugins.CSSPlugin"], function(t, e, i) {
        var n, s, r, o, a, l, u, h, c, p, f, d, g, m = {
            css: {}
        }, _ = {
            css: {}
        }, v = {
            css: {}
        }, y = {
            css: {}
        }, b = _gsScope._gsDefine.globals, w = {}, x = document, T = x.documentElement || {}, P = function(t) {
            return x.createElementNS ? x.createElementNS("http://www.w3.org/1999/xhtml", t) : x.createElement(t)
        }, S = P("div"), C = [], A = function() {
            return !1
        }, O = 180 / Math.PI, E = Date.now || function() {
            return (new Date).getTime()
        }
        , k = !(x.addEventListener || !x.all), L = x.createElement("div"), R = [], M = {}, D = 0, I = /^(?:a|input|textarea|button|select)$/i, N = 0, z = -1 !== navigator.userAgent.toLowerCase().indexOf("android"), F = 0, B = {}, X = {}, Y = function() {
            for (var t = R.length; --t > -1; )
                R[t]()
        }, j = function(t) {
            for (var i = R.length; --i > -1; )
                R[i] === t && R.splice(i, 1);
            e.to(H, 0, {
                overwrite: "all",
                delay: 15,
                onComplete: H
            })
        }, H = function() {
            R.length || e.ticker.removeEventListener("tick", Y)
        }, q = function() {
            return null != window.pageYOffset ? window.pageYOffset : null != x.scrollTop ? x.scrollTop : T.scrollTop || x.body.scrollTop || 0
        }, V = function() {
            return null != window.pageXOffset ? window.pageXOffset : null != x.scrollLeft ? x.scrollLeft : T.scrollLeft || x.body.scrollLeft || 0
        }, U = function(t, e) {
            kt(t, "scroll", e),
            W(t.parentNode) || U(t.parentNode, e)
        }, G = function(t, e) {
            Lt(t, "scroll", e),
            W(t.parentNode) || G(t.parentNode, e)
        }, W = function(t) {
            return !(t && t !== T && t !== x && t !== x.body && t !== window && t.nodeType && t.parentNode)
        }, $ = function(t, e) {
            var i = "x" === e ? "Width" : "Height"
              , n = "scroll" + i
              , s = "client" + i
              , r = x.body;
            return Math.max(0, W(t) ? Math.max(T[n], r[n]) - (window["inner" + i] || T[s] || r[s]) : t[n] - t[s])
        }, Z = function(t) {
            var e = W(t)
              , i = $(t, "x")
              , n = $(t, "y");
            e ? t = X : Z(t.parentNode),
            t._gsMaxScrollX = i,
            t._gsMaxScrollY = n,
            t._gsScrollX = t.scrollLeft || 0,
            t._gsScrollY = t.scrollTop || 0
        }, Q = function(t, e) {
            return t = t || window.event,
            w.pageX = t.clientX + x.body.scrollLeft + T.scrollLeft,
            w.pageY = t.clientY + x.body.scrollTop + T.scrollTop,
            e && (t.returnValue = !1),
            w
        }, K = function(t) {
            return t ? ("string" == typeof t && (t = e.selector(t)),
            t.length && t !== window && t[0] && t[0].style && !t.nodeType && (t = t[0]),
            t === window || t.nodeType && t.style ? t : null) : t
        }, J = function(t, e) {
            var i, n, s, r = t.style;
            if (void 0 === r[e]) {
                for (s = ["O", "Moz", "ms", "Ms", "Webkit"],
                n = 5,
                i = e.charAt(0).toUpperCase() + e.substr(1); --n > -1 && void 0 === r[s[n] + i]; )
                    ;
                if (0 > n)
                    return "";
                e = (3 === n ? "ms" : s[n]) + i
            }
            return e
        }, tt = function(t, e, i) {
            var n = t.style;
            n && (void 0 === n[e] && (e = J(t, e)),
            null == i ? n.removeProperty ? n.removeProperty(e.replace(/([A-Z])/g, "-$1").toLowerCase()) : n.removeAttribute(e) : void 0 !== n[e] && (n[e] = i))
        }, et = x.defaultView ? x.defaultView.getComputedStyle : A, it = /(?:Left|Right|Width)/i, nt = /(?:\d|\-|\+|=|#|\.)*/g, st = function(t, e, i, n, s) {
            if ("px" === n || !n)
                return i;
            if ("auto" === n || !i)
                return 0;
            var r, o = it.test(e), a = t, l = S.style, u = 0 > i;
            return u && (i = -i),
            "%" === n && -1 !== e.indexOf("border") ? r = i / 100 * (o ? t.clientWidth : t.clientHeight) : (l.cssText = "border:0 solid red;position:" + rt(t, "position", !0) + ";line-height:0;",
            "%" !== n && a.appendChild ? l[o ? "borderLeftWidth" : "borderTopWidth"] = i + n : (a = t.parentNode || x.body,
            l[o ? "width" : "height"] = i + n),
            a.appendChild(S),
            r = parseFloat(S[o ? "offsetWidth" : "offsetHeight"]),
            a.removeChild(S),
            0 !== r || s || (r = st(t, e, i, n, !0))),
            u ? -r : r
        }, rt = function(t, e, i) {
            var n, s = (t._gsTransform || {})[e];
            return s || 0 === s ? s : (t.style[e] ? s = t.style[e] : (n = et(t)) ? s = (s = n.getPropertyValue(e.replace(/([A-Z])/g, "-$1").toLowerCase())) || n.length ? s : n[e] : t.currentStyle && (s = t.currentStyle[e]),
            "auto" !== s || "top" !== e && "left" !== e || (s = function(t, e) {
                if ("absolute" !== rt(t, "position", !0))
                    return 0;
                var i = "left" === e ? "Left" : "Top"
                  , n = rt(t, "margin" + i, !0);
                return t["offset" + i] - (st(t, e, parseFloat(n), (n + "").replace(nt, "")) || 0)
            }(t, e)),
            i ? s : parseFloat(s) || 0)
        }, ot = function(t, e, i) {
            var n = t.vars
              , s = n[i]
              , r = t._listeners[e];
            "function" == typeof s && s.apply(n[i + "Scope"] || n.callbackScope || t, n[i + "Params"] || [t.pointerEvent]),
            r && t.dispatchEvent(e)
        }, at = function(t, e) {
            var i, n, s, r = K(t);
            return r ? Ct(r, e) : void 0 !== t.left ? (s = wt(e),
            {
                left: t.left - s.x,
                top: t.top - s.y,
                width: t.width,
                height: t.height
            }) : {
                left: n = t.min || t.minX || t.minRotation || 0,
                top: i = t.min || t.minY || 0,
                width: (t.max || t.maxX || t.maxRotation || 0) - n,
                height: (t.max || t.maxY || 0) - i
            }
        }, lt = function() {
            if (!x.createElementNS)
                return r = 0,
                void (o = !1);
            var t, e, i, n, s = P("div"), h = x.createElementNS("http://www.w3.org/2000/svg", "svg"), c = P("div"), p = s.style, f = x.body || T;
            x.body && ct && (p.position = "absolute",
            f.appendChild(c),
            c.appendChild(s),
            n = s.offsetParent,
            c.style[ct] = "rotate(1deg)",
            u = s.offsetParent === n,
            c.style.position = "absolute",
            p.height = "10px",
            n = s.offsetTop,
            c.style.border = "5px solid red",
            l = n !== s.offsetTop,
            f.removeChild(c)),
            p = h.style,
            h.setAttributeNS(null, "width", "400px"),
            h.setAttributeNS(null, "height", "400px"),
            h.setAttributeNS(null, "viewBox", "0 0 400 400"),
            p.display = "block",
            p.boxSizing = "border-box",
            p.border = "0px solid red",
            p.transform = "none",
            s.style.cssText = "width:100px;height:100px;overflow:scroll;-ms-overflow-style:none;",
            f.appendChild(s),
            s.appendChild(h),
            e = (i = h.createSVGPoint().matrixTransform(h.getScreenCTM())).y,
            s.scrollTop = 100,
            i.x = i.y = 0,
            i = i.matrixTransform(h.getScreenCTM()),
            a = e - i.y < 100.1 ? 0 : e - i.y - 150,
            s.removeChild(h),
            f.removeChild(s),
            f.appendChild(h),
            e = (t = h.getScreenCTM()).e,
            p.border = "50px solid red",
            t = h.getScreenCTM(),
            0 === e && 0 === t.e && 0 === t.f && 1 === t.a ? (r = 1,
            o = !0) : (r = e !== t.e ? 1 : 0,
            o = 1 !== t.a),
            f.removeChild(h)
        }, ut = "" !== J(S, "perspective"), ht = J(S, "transformOrigin").replace(/^ms/g, "Ms").replace(/([A-Z])/g, "-$1").toLowerCase(), ct = J(S, "transform"), pt = ct.replace(/^ms/g, "Ms").replace(/([A-Z])/g, "-$1").toLowerCase(), ft = {}, dt = {}, gt = window.SVGElement, mt = function(t) {
            return !!(gt && "function" == typeof t.getBBox && t.getCTM && (!t.parentNode || t.parentNode.getBBox && t.parentNode.getCTM))
        }, _t = (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(navigator.userAgent) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(navigator.userAgent)) && parseFloat(RegExp.$1) < 11, vt = [], yt = [], bt = function(t) {
            if (!t.getBoundingClientRect || !t.parentNode || !ct)
                return {
                    offsetTop: 0,
                    offsetLeft: 0,
                    scaleX: 1,
                    scaleY: 1,
                    offsetParent: T
                };
            if (!1 !== Ft.cacheSVGData && t._gsCache && t._gsCache.lastUpdate === e.ticker.frame)
                return t._gsCache;
            var i, n, s, l, u, h, c, p, f, d, g, m, _ = t, v = xt(t);
            if (v.lastUpdate = e.ticker.frame,
            t.getBBox && !v.isSVGRoot) {
                for (_ = t.parentNode,
                i = t.getBBox(); _ && "svg" !== (_.nodeName + "").toLowerCase(); )
                    _ = _.parentNode;
                return l = bt(_),
                v.offsetTop = i.y * l.scaleY,
                v.offsetLeft = i.x * l.scaleX,
                v.scaleX = l.scaleX,
                v.scaleY = l.scaleY,
                v.offsetParent = _ || T,
                v
            }
            for ((s = v.offsetParent) === x.body && (s = T),
            yt.length = vt.length = 0; _ && ("matrix(1, 0, 0, 1, 0, 0)" !== (u = rt(_, ct, !0)) && "none" !== u && "translate3d(0px, 0px, 0px)" !== u && (yt.push(_),
            vt.push(_.style[ct]),
            _.style[ct] = "none"),
            _ !== s); )
                _ = _.parentNode;
            for (n = s.getBoundingClientRect(),
            u = t.getScreenCTM(),
            c = (p = t.createSVGPoint()).matrixTransform(u),
            p.x = p.y = 10,
            p = p.matrixTransform(u),
            v.scaleX = (p.x - c.x) / 10,
            v.scaleY = (p.y - c.y) / 10,
            void 0 === r && lt(),
            v.borderBox && !o && t.getAttribute("width") && (l = et(t) || {},
            f = parseFloat(l.borderLeftWidth) + parseFloat(l.borderRightWidth) || 0,
            d = parseFloat(l.borderTopWidth) + parseFloat(l.borderBottomWidth) || 0,
            g = parseFloat(l.width) || 0,
            m = parseFloat(l.height) || 0,
            v.scaleX *= (g - f) / g,
            v.scaleY *= (m - d) / m),
            a ? (i = t.getBoundingClientRect(),
            v.offsetLeft = i.left - n.left,
            v.offsetTop = i.top - n.top) : (v.offsetLeft = c.x - n.left,
            v.offsetTop = c.y - n.top),
            v.offsetParent = s,
            h = yt.length; --h > -1; )
                yt[h].style[ct] = vt[h];
            return v
        }, wt = function(t, i) {
            if (i = i || {},
            !t || t === T || !t.parentNode || t === window)
                return {
                    x: 0,
                    y: 0
                };
            var n = et(t)
              , s = ht && n ? n.getPropertyValue(ht) : "50% 50%"
              , r = s.split(" ")
              , o = -1 !== s.indexOf("left") ? "0%" : -1 !== s.indexOf("right") ? "100%" : r[0]
              , a = -1 !== s.indexOf("top") ? "0%" : -1 !== s.indexOf("bottom") ? "100%" : r[1];
            return ("center" === a || null == a) && (a = "50%"),
            ("center" === o || isNaN(parseFloat(o))) && (o = "50%"),
            t.getBBox && mt(t) ? (t._gsTransform || (e.set(t, {
                x: "+=0",
                overwrite: !1
            }),
            t._gsTransform.xOrigin),
            s = t.getBBox(),
            i.x = t._gsTransform.xOrigin - s.x,
            i.y = t._gsTransform.yOrigin - s.y) : (t.getBBox && -1 !== (o + a).indexOf("%") && (t = {
                offsetWidth: (t = t.getBBox()).width,
                offsetHeight: t.height
            }),
            i.x = -1 !== o.indexOf("%") ? t.offsetWidth * parseFloat(o) / 100 : parseFloat(o),
            i.y = -1 !== a.indexOf("%") ? t.offsetHeight * parseFloat(a) / 100 : parseFloat(a)),
            i
        }, xt = function(t) {
            if (!1 !== Ft.cacheSVGData && t._gsCache && t._gsCache.lastUpdate === e.ticker.frame)
                return t._gsCache;
            var i, n = t._gsCache = t._gsCache || {}, s = et(t), r = t.getBBox && mt(t), o = "svg" === (t.nodeName + "").toLowerCase();
            if (n.isSVG = r,
            n.isSVGRoot = o,
            n.borderBox = "border-box" === s.boxSizing,
            n.computedStyle = s,
            o)
                (i = t.parentNode || T).insertBefore(S, t),
                n.offsetParent = S.offsetParent || T,
                i.removeChild(S);
            else if (r) {
                for (i = t.parentNode; i && "svg" !== (i.nodeName + "").toLowerCase(); )
                    i = i.parentNode;
                n.offsetParent = i
            } else
                n.offsetParent = t.offsetParent;
            return n
        }, Tt = function(t, e, i, n) {
            if (t === window || !t || !t.style || !t.parentNode)
                return [1, 0, 0, 1, 0, 0];
            var s, o, a, h, c, p, f, d, g, m, _, v, y, b, w = t._gsCache || xt(t), P = t.parentNode, S = P._gsCache || xt(P), C = w.computedStyle, A = w.isSVG ? S.offsetParent : P.offsetParent;
            return s = w.isSVG && -1 !== (t.style[ct] + "").indexOf("matrix") ? t.style[ct] : C ? C.getPropertyValue(pt) : t.currentStyle ? t.currentStyle[ct] : "1,0,0,1,0,0",
            t.getBBox && -1 !== (t.getAttribute("transform") + "").indexOf("matrix") && (s = t.getAttribute("transform")),
            (s = (s + "").match(/(?:\-|\.|\b)(\d|\.|e\-)+/g) || [1, 0, 0, 1, 0, 0]).length > 6 && (s = [s[0], s[1], s[4], s[5], s[12], s[13]]),
            n ? s[4] = s[5] = 0 : w.isSVG && (c = t._gsTransform) && (c.xOrigin || c.yOrigin) && (s[0] = parseFloat(s[0]),
            s[1] = parseFloat(s[1]),
            s[2] = parseFloat(s[2]),
            s[3] = parseFloat(s[3]),
            s[4] = parseFloat(s[4]) - (c.xOrigin - (c.xOrigin * s[0] + c.yOrigin * s[2])),
            s[5] = parseFloat(s[5]) - (c.yOrigin - (c.xOrigin * s[1] + c.yOrigin * s[3]))),
            e && (void 0 === r && lt(),
            a = w.isSVG || w.isSVGRoot ? bt(t) : t,
            w.isSVG ? (h = t.getBBox(),
            m = S.isSVGRoot ? {
                x: 0,
                y: 0
            } : P.getBBox(),
            a = {
                offsetLeft: h.x - m.x,
                offsetTop: h.y - m.y,
                offsetParent: w.offsetParent
            }) : w.isSVGRoot ? (_ = parseInt(C.borderTopWidth, 10) || 0,
            v = parseInt(C.borderLeftWidth, 10) || 0,
            y = (s[0] - r) * v + s[2] * _,
            b = s[1] * v + (s[3] - r) * _,
            p = e.x,
            f = e.y,
            d = p - (p * s[0] + f * s[2]),
            g = f - (p * s[1] + f * s[3]),
            s[4] = parseFloat(s[4]) + d,
            s[5] = parseFloat(s[5]) + g,
            e.x -= d,
            e.y -= g,
            p = a.scaleX,
            f = a.scaleY,
            e.x *= p,
            e.y *= f,
            s[0] *= p,
            s[1] *= f,
            s[2] *= p,
            s[3] *= f,
            _t || (e.x += y,
            e.y += b)) : !l && t.offsetParent && (e.x += parseInt(rt(t.offsetParent, "borderLeftWidth"), 10) || 0,
            e.y += parseInt(rt(t.offsetParent, "borderTopWidth"), 10) || 0),
            o = P === T || P === x.body,
            s[4] = Number(s[4]) + e.x + (a.offsetLeft || 0) - i.x - (o ? 0 : P.scrollLeft || 0),
            s[5] = Number(s[5]) + e.y + (a.offsetTop || 0) - i.y - (o ? 0 : P.scrollTop || 0),
            P && "fixed" === rt(t, "position", C) && (s[4] += V(),
            s[5] += q()),
            !P || P === T || A !== a.offsetParent || S.isSVG || u && "100100" !== Tt(P).join("") || (a = S.isSVGRoot ? bt(P) : P,
            s[4] -= a.offsetLeft || 0,
            s[5] -= a.offsetTop || 0,
            l || !S.offsetParent || w.isSVG || w.isSVGRoot || (s[4] -= parseInt(rt(S.offsetParent, "borderLeftWidth"), 10) || 0,
            s[5] -= parseInt(rt(S.offsetParent, "borderTopWidth"), 10) || 0))),
            s
        }, Pt = function(t, e) {
            if (!t || t === window || !t.parentNode)
                return [1, 0, 0, 1, 0, 0];
            for (var i, n, s, r, o, a, l, u, h = wt(t, ft), c = wt(t.parentNode, dt), p = Tt(t, h, c); (t = t.parentNode) && t.parentNode && t !== T; )
                h = c,
                c = wt(t.parentNode, h === ft ? dt : ft),
                l = Tt(t, h, c),
                i = p[0],
                n = p[1],
                s = p[2],
                r = p[3],
                o = p[4],
                a = p[5],
                p[0] = i * l[0] + n * l[2],
                p[1] = i * l[1] + n * l[3],
                p[2] = s * l[0] + r * l[2],
                p[3] = s * l[1] + r * l[3],
                p[4] = o * l[0] + a * l[2] + l[4],
                p[5] = o * l[1] + a * l[3] + l[5];
            return e && (i = p[0],
            n = p[1],
            s = p[2],
            r = p[3],
            o = p[4],
            a = p[5],
            u = i * r - n * s,
            p[0] = r / u,
            p[1] = -n / u,
            p[2] = -s / u,
            p[3] = i / u,
            p[4] = (s * a - r * o) / u,
            p[5] = -(i * a - n * o) / u),
            p
        }, St = function(t, e, i) {
            var n = t.x * e[0] + t.y * e[2] + e[4]
              , s = t.x * e[1] + t.y * e[3] + e[5];
            return t.x = n * i[0] + s * i[2] + i[4],
            t.y = n * i[1] + s * i[3] + i[5],
            t
        }, Ct = function(t, e, i) {
            if (!(t = K(t)))
                return null;
            e = K(e);
            var n, s, r, o, a, l, u, h, c, p, f, d, g, m, _, v, y, b, w, P, S, C, A = t.getBBox && mt(t);
            if (t === window)
                o = q(),
                r = (s = V()) + (T.clientWidth || t.innerWidth || x.body.clientWidth || 0),
                a = o + ((t.innerHeight || 0) - 20 < T.clientHeight ? T.clientHeight : t.innerHeight || x.body.clientHeight || 0);
            else {
                if (void 0 === e || e === window)
                    return t.getBoundingClientRect();
                s = -(n = wt(t)).x,
                o = -n.y,
                A ? (g = (d = t.getBBox()).width,
                m = d.height) : "svg" !== (t.nodeName + "").toLowerCase() && t.offsetWidth ? (g = t.offsetWidth,
                m = t.offsetHeight) : (S = et(t),
                g = parseFloat(S.width),
                m = parseFloat(S.height)),
                r = s + g,
                a = o + m,
                "svg" !== t.nodeName.toLowerCase() || k || (C = (_ = bt(t)).computedStyle || {},
                b = (t.getAttribute("viewBox") || "0 0").split(" "),
                w = parseFloat(b[0]),
                P = parseFloat(b[1]),
                v = parseFloat(C.borderLeftWidth) || 0,
                y = parseFloat(C.borderTopWidth) || 0,
                r -= g - (g - v) / _.scaleX - w,
                a -= m - (m - y) / _.scaleY - P,
                s -= v / _.scaleX - w,
                o -= y / _.scaleY - P,
                S && (r += (parseFloat(C.borderRightWidth) + v) / _.scaleX,
                a += (y + parseFloat(C.borderBottomWidth)) / _.scaleY))
            }
            return t === e ? {
                left: s,
                top: o,
                width: r - s,
                height: a - o
            } : (l = Pt(t),
            u = Pt(e, !0),
            h = St({
                x: s,
                y: o
            }, l, u),
            c = St({
                x: r,
                y: o
            }, l, u),
            p = St({
                x: r,
                y: a
            }, l, u),
            f = St({
                x: s,
                y: a
            }, l, u),
            s = Math.min(h.x, c.x, p.x, f.x),
            o = Math.min(h.y, c.y, p.y, f.y),
            B.x = B.y = 0,
            i && wt(e, B),
            {
                left: s + B.x,
                top: o + B.y,
                width: Math.max(h.x, c.x, p.x, f.x) - s,
                height: Math.max(h.y, c.y, p.y, f.y) - o
            })
        }, At = function(t) {
            return !!(t && t.length && t[0] && (t[0].nodeType && t[0].style && !t.nodeType || t[0].length && t[0][0]))
        }, Ot = "ontouchstart"in T && "orientation"in window, Et = function(t) {
            for (var e = t.split(","), i = (void 0 !== S.onpointerdown ? "pointerdown,pointermove,pointerup,pointercancel" : void 0 !== S.onmspointerdown ? "MSPointerDown,MSPointerMove,MSPointerUp,MSPointerCancel" : t).split(","), n = {}, s = 8; --s > -1; )
                n[e[s]] = i[s],
                n[i[s]] = e[s];
            return n
        }("touchstart,touchmove,touchend,touchcancel"), kt = function(t, e, i, n) {
            t.addEventListener ? t.addEventListener(Et[e] || e, i, n) : t.attachEvent && t.attachEvent("on" + e, i)
        }, Lt = function(t, e, i) {
            t.removeEventListener ? t.removeEventListener(Et[e] || e, i) : t.detachEvent && t.detachEvent("on" + e, i)
        }, Rt = function(t) {
            n = t.touches && N < t.touches.length,
            Lt(t.target, "touchend", Rt)
        }, Mt = function(t) {
            n = t.touches && N < t.touches.length,
            kt(t.target, "touchend", Rt)
        }, Dt = function(t, e, i, n, s, r) {
            var o, a, l, u = {};
            if (e)
                if (1 !== s && e instanceof Array) {
                    for (u.end = o = [],
                    l = e.length,
                    a = 0; l > a; a++)
                        o[a] = e[a] * s;
                    i += 1.1,
                    n -= 1.1
                } else
                    u.end = "function" == typeof e ? function(i) {
                        return e.call(t, i) * s
                    }
                    : e;
            return (i || 0 === i) && (u.max = i),
            (n || 0 === n) && (u.min = n),
            r && (u.velocity = 0),
            u
        }, It = function(t) {
            var e;
            return !(!t || !t.getAttribute || "BODY" === t.nodeName) && (!("true" !== (e = t.getAttribute("data-clickable")) && ("false" === e || !t.onclick && !I.test(t.nodeName + "") && "true" !== t.getAttribute("contentEditable"))) || It(t.parentNode))
        }, Nt = function(t, e) {
            for (var i, n = t.length; --n > -1; )
                (i = t[n]).ondragstart = i.onselectstart = e ? null : A,
                tt(i, "userSelect", e ? "text" : "none")
        }, zt = (p = x.createElement("div"),
        f = x.createElement("div"),
        d = f.style,
        g = x.body || S,
        d.display = "inline-block",
        d.position = "relative",
        p.style.cssText = f.innerHTML = "width:90px; height:40px; padding:10px; overflow:auto; visibility: hidden",
        p.appendChild(f),
        g.appendChild(p),
        h = f.offsetHeight + 18 > p.scrollHeight,
        d.width = "100%",
        ct || (d.paddingRight = "500px",
        c = p.scrollLeft = p.scrollWidth - p.clientWidth,
        d.left = "-90px",
        c = c !== p.scrollLeft),
        g.removeChild(p),
        c), Ft = function(r, o) {
            t.call(this, r),
            r = K(r),
            s || (s = b.com.greensock.plugins.ThrowPropsPlugin),
            this.vars = o = function(t) {
                var e, i = {};
                for (e in t)
                    i[e] = t[e];
                return i
            }(o || {}),
            this.target = r,
            this.x = this.y = this.rotation = 0,
            this.dragResistance = parseFloat(o.dragResistance) || 0,
            this.edgeResistance = isNaN(o.edgeResistance) ? 1 : parseFloat(o.edgeResistance) || 0,
            this.lockAxis = o.lockAxis,
            this.autoScroll = o.autoScroll || 0,
            this.lockedAxis = null,
            this.allowEventDefault = !!o.allowEventDefault;
            var a, l, u, c, p, f, d, g, w, P, S, A, I, B, H, q, V, $, J, et, it, nt, st, lt, ht, pt, ft, dt, gt, mt, _t = (o.type || (k ? "top,left" : "x,y")).toLowerCase(), vt = -1 !== _t.indexOf("x") || -1 !== _t.indexOf("y"), yt = -1 !== _t.indexOf("rotation"), bt = yt ? "rotation" : vt ? "x" : "left", xt = vt ? "y" : "top", Tt = -1 !== _t.indexOf("x") || -1 !== _t.indexOf("left") || "scroll" === _t, St = -1 !== _t.indexOf("y") || -1 !== _t.indexOf("top") || "scroll" === _t, Ct = o.minimumMovement || 2, At = this, Rt = function(t) {
                if ("string" == typeof t && (t = e.selector(t)),
                !t || t.nodeType)
                    return [t];
                var i, n = [], s = t.length;
                for (i = 0; i !== s; n.push(t[i++]))
                    ;
                return n
            }(o.trigger || o.handle || r), Bt = {}, Xt = 0, jt = !1, Ht = o.clickableTest || It, qt = 0, Vt = function(t) {
                if (At.autoScroll && At.isDragging && (jt || $)) {
                    var e, i, n, s, o, a, u, h, c = r, p = 15 * At.autoScroll;
                    for (jt = !1,
                    X.scrollTop = null != window.pageYOffset ? window.pageYOffset : null != T.scrollTop ? T.scrollTop : x.body.scrollTop,
                    X.scrollLeft = null != window.pageXOffset ? window.pageXOffset : null != T.scrollLeft ? T.scrollLeft : x.body.scrollLeft,
                    s = At.pointerX - X.scrollLeft,
                    o = At.pointerY - X.scrollTop; c && !i; )
                        e = (i = W(c.parentNode)) ? X : c.parentNode,
                        n = i ? {
                            bottom: Math.max(T.clientHeight, window.innerHeight || 0),
                            right: Math.max(T.clientWidth, window.innerWidth || 0),
                            left: 0,
                            top: 0
                        } : e.getBoundingClientRect(),
                        a = u = 0,
                        St && (0 > (h = e._gsMaxScrollY - e.scrollTop) ? u = h : o > n.bottom - 40 && h ? (jt = !0,
                        u = Math.min(h, p * (1 - Math.max(0, n.bottom - o) / 40) | 0)) : o < n.top + 40 && e.scrollTop && (jt = !0,
                        u = -Math.min(e.scrollTop, p * (1 - Math.max(0, o - n.top) / 40) | 0)),
                        u && (e.scrollTop += u)),
                        Tt && (0 > (h = e._gsMaxScrollX - e.scrollLeft) ? a = h : s > n.right - 40 && h ? (jt = !0,
                        a = Math.min(h, p * (1 - Math.max(0, n.right - s) / 40) | 0)) : s < n.left + 40 && e.scrollLeft && (jt = !0,
                        a = -Math.min(e.scrollLeft, p * (1 - Math.max(0, s - n.left) / 40) | 0)),
                        a && (e.scrollLeft += a)),
                        i && (a || u) && (window.scrollTo(e.scrollLeft, e.scrollTop),
                        ne(At.pointerX + a, At.pointerY + u)),
                        c = e
                }
                if ($) {
                    var f = At.x
                      , d = At.y;
                    1e-6 > f && f > -1e-6 && (f = 0),
                    1e-6 > d && d > -1e-6 && (d = 0),
                    yt ? (pt.data.rotation = At.rotation = f,
                    pt.setRatio(1)) : l ? (St && l.top(d),
                    Tt && l.left(f)) : vt ? (St && (pt.data.y = d),
                    Tt && (pt.data.x = f),
                    pt.setRatio(1)) : (St && (r.style.top = d + "px"),
                    Tt && (r.style.left = f + "px")),
                    !g || t || gt || (gt = !0,
                    ot(At, "drag", "onDrag"),
                    gt = !1)
                }
                $ = !1
            }, Ut = function(t, i) {
                var n, s = At.x, o = At.y;
                r._gsTransform || !vt && !yt || e.set(r, {
                    x: "+=0",
                    overwrite: !1
                }),
                vt ? (At.y = r._gsTransform.y,
                At.x = r._gsTransform.x) : yt ? At.x = At.rotation = r._gsTransform.rotation : l ? (At.y = l.top(),
                At.x = l.left()) : (At.y = parseInt(r.style.top, 10) || 0,
                At.x = parseInt(r.style.left, 10) || 0),
                !et && !it || i || (et && ((n = et(At.x)) !== At.x && (At.x = n,
                yt && (At.rotation = n))),
                it && ((n = it(At.y)) !== At.y && (At.y = n))),
                (s !== At.x || o !== At.y) && Vt(!0),
                t || ot(At, "throwupdate", "onThrowUpdate")
            }, Gt = function() {
                var t, e, i, n;
                d = !1,
                l ? (l.calibrate(),
                At.minX = P = -l.maxScrollLeft(),
                At.minY = A = -l.maxScrollTop(),
                At.maxX = w = At.maxY = S = 0,
                d = !0) : o.bounds && (t = at(o.bounds, r.parentNode),
                yt ? (At.minX = P = t.left,
                At.maxX = w = t.left + t.width,
                At.minY = A = At.maxY = S = 0) : void 0 !== o.bounds.maxX || void 0 !== o.bounds.maxY ? (t = o.bounds,
                At.minX = P = t.minX,
                At.minY = A = t.minY,
                At.maxX = w = t.maxX,
                At.maxY = S = t.maxY) : (e = at(r, r.parentNode),
                At.minX = P = rt(r, bt) + t.left - e.left,
                At.minY = A = rt(r, xt) + t.top - e.top,
                At.maxX = w = P + (t.width - e.width),
                At.maxY = S = A + (t.height - e.height)),
                P > w && (At.minX = w,
                At.maxX = w = P,
                P = At.minX),
                A > S && (At.minY = S,
                At.maxY = S = A,
                A = At.minY),
                yt && (At.minRotation = P,
                At.maxRotation = w),
                d = !0),
                o.liveSnap && (n = (i = !0 === o.liveSnap ? o.snap || {} : o.liveSnap)instanceof Array || "function" == typeof i,
                yt ? (et = te(n ? i : i.rotation, P, w, 1),
                it = null) : (Tt && (et = te(n ? i : i.x || i.left || i.scrollLeft, P, w, l ? -1 : 1)),
                St && (it = te(n ? i : i.y || i.top || i.scrollTop, A, S, l ? -1 : 1))))
            }, Wt = function() {
                At.isThrowing = !1,
                ot(At, "throwcomplete", "onThrowComplete")
            }, $t = function() {
                At.isThrowing = !1
            }, Zt = function(t, e) {
                var i, n, a, u;
                t && s ? (!0 === t && (n = (i = o.snap || {})instanceof Array || "function" == typeof i,
                t = {
                    resistance: (o.throwResistance || o.resistance || 1e3) / (yt ? 10 : 1)
                },
                yt ? t.rotation = Dt(At, n ? i : i.rotation, w, P, 1, e) : (Tt && (t[bt] = Dt(At, n ? i : i.x || i.left || i.scrollLeft, w, P, l ? -1 : 1, e || "x" === At.lockedAxis)),
                St && (t[xt] = Dt(At, n ? i : i.y || i.top || i.scrollTop, S, A, l ? -1 : 1, e || "y" === At.lockedAxis)))),
                At.isThrowing = !0,
                u = isNaN(o.overshootTolerance) ? 1 === o.edgeResistance ? 0 : 1 - At.edgeResistance + .2 : o.overshootTolerance,
                At.tween = a = s.to(l || r, {
                    throwProps: t,
                    ease: o.ease || b.Power3.easeOut,
                    onComplete: Wt,
                    onOverwrite: $t,
                    onUpdate: o.fastMode ? ot : Ut,
                    onUpdateParams: o.fastMode ? [At, "onthrowupdate", "onThrowUpdate"] : C
                }, isNaN(o.maxDuration) ? 2 : o.maxDuration, isNaN(o.minDuration) ? 0 === u ? 0 : .5 : o.minDuration, u),
                o.fastMode || (l && (l._suspendTransforms = !0),
                a.render(a.duration(), !0, !0),
                Ut(!0, !0),
                At.endX = At.x,
                At.endY = At.y,
                yt && (At.endRotation = At.x),
                a.play(0),
                Ut(!0, !0),
                l && (l._suspendTransforms = !1))) : d && At.applyBounds()
            }, Qt = function() {
                var t, e, i, n, s, o, a, l, h, p = lt || [1, 0, 0, 1, 0, 0];
                lt = Pt(r.parentNode, !0),
                At.isPressed && p.join(",") !== lt.join(",") && (t = p[0],
                e = p[1],
                i = p[2],
                n = p[3],
                s = p[4],
                o = p[5],
                h = u * (-e / (a = t * n - e * i)) + c * (t / a) + -(t * o - e * s) / a,
                c = (l = u * (n / a) + c * (-i / a) + (i * o - n * s) / a) * lt[1] + h * lt[3] + lt[5],
                u = l * lt[0] + h * lt[2] + lt[4]),
                lt[1] || lt[2] || 1 != lt[0] || 1 != lt[3] || 0 != lt[4] || 0 != lt[5] || (lt = null)
            }, Kt = function() {
                var t = 1 - At.edgeResistance;
                Qt(),
                lt && (u = At.pointerX * lt[0] + At.pointerY * lt[2] + lt[4],
                c = At.pointerX * lt[1] + At.pointerY * lt[3] + lt[5]),
                $ && (ne(At.pointerX, At.pointerY),
                Vt(!0)),
                l ? (Gt(),
                f = l.top(),
                p = l.left()) : (Jt() ? (Ut(!0, !0),
                Gt()) : At.applyBounds(),
                yt ? (V = function(t, e, i, n, s) {
                    t = K(t);
                    var r = Pt(t, !1)
                      , o = e.x
                      , a = e.y;
                    return i && (wt(t, e),
                    o -= e.x,
                    a -= e.y),
                    (n = !0 === n ? e : n || {}).x = o * r[0] + a * r[2] + r[4],
                    n.y = o * r[1] + a * r[3] + r[5],
                    n
                }(r, {
                    x: 0,
                    y: 0
                }),
                Ut(!0, !0),
                p = At.x,
                f = At.y = Math.atan2(V.y - At.pointerY, At.pointerX - V.x) * O) : (r.parentNode && r.parentNode.scrollTop || 0,
                r.parentNode && r.parentNode.scrollLeft || 0,
                f = rt(r, xt),
                p = rt(r, bt))),
                d && t && (p > w ? p = w + (p - w) / t : P > p && (p = P - (P - p) / t),
                yt || (f > S ? f = S + (f - S) / t : A > f && (f = A - (A - f) / t)))
            }, Jt = function() {
                return At.tween && At.tween.isActive()
            }, te = function(t, e, i, n) {
                return "function" == typeof t ? function(s) {
                    var r = At.isPressed ? 1 - At.edgeResistance : 1;
                    return t.call(At, s > i ? i + (s - i) * r : e > s ? e + (s - e) * r : s) * n
                }
                : t instanceof Array ? function(n) {
                    for (var s, r, o = t.length, a = 0, l = 999999999999999; --o > -1; )
                        0 > (r = (s = t[o]) - n) && (r = -r),
                        l > r && s >= e && i >= s && (a = o,
                        l = r);
                    return t[a]
                }
                : isNaN(t) ? function(t) {
                    return t
                }
                : function() {
                    return t * n
                }
            }, ee = function(t) {
                var i;
                if (!(!a || At.isPressed || !t || ("mousedown" === t.type || "pointerdown" === t.type) && E() - qt < 30 && Et[At.pointerEvent.type])) {
                    if (ht = Jt(),
                    At.pointerEvent = t,
                    Et[t.type] ? (st = -1 !== t.type.indexOf("touch") ? t.currentTarget || t.target : x,
                    kt(st, "touchend", se),
                    kt(st, "touchmove", ie),
                    kt(st, "touchcancel", se),
                    kt(x, "touchstart", Mt)) : (st = null,
                    kt(x, "mousemove", ie)),
                    dt = null,
                    kt(x, "mouseup", se),
                    t && t.target && kt(t.target, "mouseup", se),
                    nt = Ht.call(At, t.target) && !o.dragClickables)
                        return kt(t.target, "change", se),
                        ot(At, "press", "onPress"),
                        void Nt(Rt, !0);
                    if (ft = !(!st || Tt === St || l || !1 === At.vars.allowNativeTouchScrolling) && (Tt ? "y" : "x"),
                    k ? t = Q(t, !0) : ft || At.allowEventDefault || (t.preventDefault(),
                    t.preventManipulation && t.preventManipulation()),
                    t.changedTouches ? (t = H = t.changedTouches[0],
                    q = t.identifier) : t.pointerId ? q = t.pointerId : H = q = null,
                    N++,
                    function(t) {
                        R.push(t),
                        1 === R.length && e.ticker.addEventListener("tick", Y, this, !1, 1)
                    }(Vt),
                    c = At.pointerY = t.pageY,
                    u = At.pointerX = t.pageX,
                    (ft || At.autoScroll) && Z(r.parentNode),
                    !At.autoScroll || yt || l || !r.parentNode || r.getBBox || !r.parentNode._gsMaxScrollX || L.parentNode || (L.style.width = r.parentNode.scrollWidth + "px",
                    r.parentNode.appendChild(L)),
                    Kt(),
                    At.tween && At.tween.kill(),
                    At.isThrowing = !1,
                    e.killTweensOf(l || r, !0, Bt),
                    l && e.killTweensOf(r, !0, {
                        scrollTo: 1
                    }),
                    At.tween = At.lockedAxis = null,
                    (o.zIndexBoost || !yt && !l && !1 !== o.zIndexBoost) && (r.style.zIndex = Ft.zIndex++),
                    At.isPressed = !0,
                    g = !(!o.onDrag && !At._listeners.drag),
                    !yt)
                        for (i = Rt.length; --i > -1; )
                            tt(Rt[i], "cursor", o.cursor || "move");
                    ot(At, "press", "onPress")
                }
            }, ie = function(t) {
                var e, i, s, r, o = t;
                if (a && !n && At.isPressed && t) {
                    if (At.pointerEvent = t,
                    e = t.changedTouches) {
                        if ((t = e[0]) !== H && t.identifier !== q) {
                            for (r = e.length; --r > -1 && (t = e[r]).identifier !== q; )
                                ;
                            if (0 > r)
                                return
                        }
                    } else if (t.pointerId && q && t.pointerId !== q)
                        return;
                    if (k)
                        t = Q(t, !0);
                    else {
                        if (st && ft && !dt && (i = t.pageX,
                        s = t.pageY,
                        lt && (r = i * lt[0] + s * lt[2] + lt[4],
                        s = i * lt[1] + s * lt[3] + lt[5],
                        i = r),
                        dt = Math.abs(i - u) > Math.abs(s - c) && Tt ? "x" : "y",
                        !1 !== At.vars.lockAxisOnTouchScroll && (At.lockedAxis = "x" === dt ? "y" : "x",
                        "function" == typeof At.vars.onLockAxis && At.vars.onLockAxis.call(At, o)),
                        z && ft === dt))
                            return void se(o);
                        At.allowEventDefault || ft && (!dt || ft === dt) || !1 === o.cancelable || (o.preventDefault(),
                        o.preventManipulation && o.preventManipulation())
                    }
                    At.autoScroll && (jt = !0),
                    ne(t.pageX, t.pageY)
                }
            }, ne = function(t, e) {
                var i, n, s, r, o, a, l = 1 - At.dragResistance, h = 1 - At.edgeResistance;
                At.pointerX = t,
                At.pointerY = e,
                yt ? (r = Math.atan2(V.y - e, t - V.x) * O,
                o = At.y - r,
                At.y = r,
                o > 180 ? f -= 360 : -180 > o && (f += 360),
                s = p + (f - r) * l) : (lt && (a = t * lt[0] + e * lt[2] + lt[4],
                e = t * lt[1] + e * lt[3] + lt[5],
                t = a),
                Ct > (n = e - c) && n > -Ct && (n = 0),
                Ct > (i = t - u) && i > -Ct && (i = 0),
                (At.lockAxis || At.lockedAxis) && (i || n) && ((a = At.lockedAxis) || (At.lockedAxis = a = Tt && Math.abs(i) > Math.abs(n) ? "y" : St ? "x" : null,
                a && "function" == typeof At.vars.onLockAxis && At.vars.onLockAxis.call(At, At.pointerEvent)),
                "y" === a ? n = 0 : "x" === a && (i = 0)),
                s = p + i * l,
                r = f + n * l),
                et || it ? (et && (s = et(s)),
                it && (r = it(r))) : d && (s > w ? s = w + (s - w) * h : P > s && (s = P + (s - P) * h),
                yt || (r > S ? r = S + (r - S) * h : A > r && (r = A + (r - A) * h))),
                yt || (s = Math.round(s),
                r = Math.round(r)),
                (At.x !== s || At.y !== r && !yt) && (yt ? At.endRotation = At.x = At.endX = s : (St && (At.y = At.endY = r),
                Tt && (At.x = At.endX = s)),
                $ = !0,
                !At.isDragging && At.isPressed && (At.isDragging = !0,
                ot(At, "dragstart", "onDragStart")))
            }, se = function(t, i) {
                if (a && At.isPressed && (!t || null == q || i || !(t.pointerId && t.pointerId !== q || t.changedTouches && !function(t, e) {
                    for (var i = t.length; --i > -1; )
                        if (t[i].identifier === e)
                            return !0;
                    return !1
                }(t.changedTouches, q)))) {
                    At.isPressed = !1;
                    var n, s, l, u, h = t, c = At.isDragging;
                    if (st ? (Lt(st, "touchend", se),
                    Lt(st, "touchmove", ie),
                    Lt(st, "touchcancel", se),
                    Lt(x, "touchstart", Mt)) : Lt(x, "mousemove", ie),
                    Lt(x, "mouseup", se),
                    t && t.target && Lt(t.target, "mouseup", se),
                    $ = !1,
                    L.parentNode && L.parentNode.removeChild(L),
                    nt)
                        return t && Lt(t.target, "change", se),
                        Nt(Rt, !1),
                        ot(At, "release", "onRelease"),
                        ot(At, "click", "onClick"),
                        void (nt = !1);
                    if (j(Vt),
                    !yt)
                        for (s = Rt.length; --s > -1; )
                            tt(Rt[s], "cursor", o.cursor || "move");
                    if (c && (Xt = F = E(),
                    At.isDragging = !1),
                    N--,
                    t) {
                        if (k && (t = Q(t, !1)),
                        (n = t.changedTouches) && ((t = n[0]) !== H && t.identifier !== q)) {
                            for (s = n.length; --s > -1 && (t = n[s]).identifier !== q; )
                                ;
                            if (0 > s)
                                return
                        }
                        At.pointerEvent = h,
                        At.pointerX = t.pageX,
                        At.pointerY = t.pageY
                    }
                    return h && !c ? (ht && (o.snap || o.bounds) && Zt(o.throwProps),
                    ot(At, "release", "onRelease"),
                    z && "touchmove" === h.type || (ot(At, "click", "onClick"),
                    u = h.target || h.srcElement || r,
                    qt = E(),
                    e.delayedCall(1e-5, function() {
                        qt !== mt && At.enabled() && !At.isPressed && (u.click ? u.click() : x.createEvent && ((l = x.createEvent("MouseEvents")).initMouseEvent("click", !0, !0, window, 1, At.pointerEvent.screenX, At.pointerEvent.screenY, At.pointerX, At.pointerY, !1, !1, !1, !1, 0, null),
                        u.dispatchEvent(l)))
                    }))) : (Zt(o.throwProps),
                    k || At.allowEventDefault || !h || !o.dragClickables && Ht.call(At, h.target) || !c || ft && (!dt || ft !== dt) || !1 === h.cancelable || (h.preventDefault(),
                    h.preventManipulation && h.preventManipulation()),
                    ot(At, "release", "onRelease")),
                    c && ot(At, "dragend", "onDragEnd"),
                    !0
                }
            }, re = function(t) {
                if (t && At.isDragging) {
                    var e = t.target || t.srcElement || r.parentNode
                      , i = e.scrollLeft - e._gsScrollX
                      , n = e.scrollTop - e._gsScrollY;
                    (i || n) && (lt ? (u -= i * lt[0] + n * lt[2],
                    c -= n * lt[3] + i * lt[1]) : (u -= i,
                    c -= n),
                    e._gsScrollX += i,
                    e._gsScrollY += n,
                    ne(At.pointerX, At.pointerY))
                }
            }, oe = function(t) {
                var e = E()
                  , i = 40 > e - qt
                  , n = 40 > e - Xt;
                return i && mt !== qt ? void (mt = qt) : void ((At.isPressed || n || i) && (t.preventDefault ? (t.preventDefault(),
                (i || n && !1 !== At.vars.suppressClickOnDrag) && t.stopImmediatePropagation()) : t.returnValue = !1,
                t.preventManipulation && t.preventManipulation()))
            };
            (J = Ft.get(this.target)) && J.kill(),
            this.startDrag = function(t) {
                ee(t),
                At.isDragging || (At.isDragging = !0,
                ot(At, "dragstart", "onDragStart"))
            }
            ,
            this.drag = ie,
            this.endDrag = function(t) {
                se(t, !0)
            }
            ,
            this.timeSinceDrag = function() {
                return At.isDragging ? 0 : (E() - Xt) / 1e3
            }
            ,
            this.hitTest = function(t, e) {
                return Ft.hitTest(At.target, t, e)
            }
            ,
            this.getDirection = function(t, e) {
                var i, n, r, o, a, l, u = "velocity" === t && s ? t : "object" != typeof t || yt ? "start" : "element";
                return "element" === u && (a = Yt(At.target),
                l = Yt(t)),
                i = "start" === u ? At.x - p : "velocity" === u ? s.getVelocity(this.target, bt) : a.left + a.width / 2 - (l.left + l.width / 2),
                yt ? 0 > i ? "counter-clockwise" : "clockwise" : (e = e || 2,
                n = "start" === u ? At.y - f : "velocity" === u ? s.getVelocity(this.target, xt) : a.top + a.height / 2 - (l.top + l.height / 2),
                o = 1 / e > (r = Math.abs(i / n)) ? "" : 0 > i ? "left" : "right",
                e > r && ("" !== o && (o += "-"),
                o += 0 > n ? "up" : "down"),
                o)
            }
            ,
            this.applyBounds = function(t) {
                var e, i, n, s, a, l;
                if (t && o.bounds !== t)
                    return o.bounds = t,
                    At.update(!0);
                if (Ut(!0),
                Gt(),
                d) {
                    if (e = At.x,
                    i = At.y,
                    e > w ? e = w : P > e && (e = P),
                    i > S ? i = S : A > i && (i = A),
                    (At.x !== e || At.y !== i) && (n = !0,
                    At.x = At.endX = e,
                    yt ? At.endRotation = e : At.y = At.endY = i,
                    $ = !0,
                    Vt(!0),
                    At.autoScroll && !At.isDragging))
                        for (Z(r.parentNode),
                        s = r,
                        X.scrollTop = null != window.pageYOffset ? window.pageYOffset : null != T.scrollTop ? T.scrollTop : x.body.scrollTop,
                        X.scrollLeft = null != window.pageXOffset ? window.pageXOffset : null != T.scrollLeft ? T.scrollLeft : x.body.scrollLeft; s && !l; )
                            a = (l = W(s.parentNode)) ? X : s.parentNode,
                            St && a.scrollTop > a._gsMaxScrollY && (a.scrollTop = a._gsMaxScrollY),
                            Tt && a.scrollLeft > a._gsMaxScrollX && (a.scrollLeft = a._gsMaxScrollX),
                            s = a;
                    At.isThrowing && (n || At.endX > w || At.endX < P || At.endY > S || At.endY < A) && Zt(o.throwProps, n)
                }
                return At
            }
            ,
            this.update = function(t, e) {
                var i = At.x
                  , n = At.y;
                return Qt(),
                t ? At.applyBounds() : ($ && e && Vt(!0),
                Ut(!0)),
                At.isPressed && (Tt && Math.abs(i - At.x) > .01 || St && Math.abs(n - At.y) > .01 && !yt) && Kt(),
                At.autoScroll && (Z(r.parentNode),
                jt = At.isDragging,
                Vt(!0)),
                At.autoScroll && (G(r, re),
                U(r, re)),
                At
            }
            ,
            this.enable = function(t) {
                var n, u, h;
                if ("soft" !== t) {
                    for (u = Rt.length; --u > -1; )
                        h = Rt[u],
                        kt(h, "mousedown", ee),
                        kt(h, "touchstart", ee),
                        kt(h, "click", oe, !0),
                        yt || tt(h, "cursor", o.cursor || "move"),
                        tt(h, "touchCallout", "none"),
                        tt(h, "touchAction", Tt === St || l ? "none" : Tt ? "pan-y" : "pan-x");
                    Nt(Rt, !1)
                }
                return U(r, re),
                a = !0,
                s && "soft" !== t && s.track(l || r, vt ? "x,y" : yt ? "rotation" : "top,left"),
                l && l.enable(),
                r._gsDragID = n = "d" + D++,
                M[n] = this,
                l && (l.element._gsDragID = n),
                e.set(r, {
                    x: "+=0",
                    overwrite: !1
                }),
                pt = {
                    t: r,
                    data: k ? B : r._gsTransform,
                    tween: {},
                    setRatio: k ? function() {
                        e.set(r, I)
                    }
                    : i._internals.setTransformRatio || i._internals.set3DTransformRatio
                },
                At.update(!0),
                At
            }
            ,
            this.disable = function(t) {
                var e, i, n = At.isDragging;
                if (!yt)
                    for (e = Rt.length; --e > -1; )
                        tt(Rt[e], "cursor", null);
                if ("soft" !== t) {
                    for (e = Rt.length; --e > -1; )
                        i = Rt[e],
                        tt(i, "touchCallout", null),
                        tt(i, "touchAction", null),
                        Lt(i, "mousedown", ee),
                        Lt(i, "touchstart", ee),
                        Lt(i, "click", oe);
                    Nt(Rt, !0),
                    st && (Lt(st, "touchcancel", se),
                    Lt(st, "touchend", se),
                    Lt(st, "touchmove", ie)),
                    Lt(x, "mouseup", se),
                    Lt(x, "mousemove", ie)
                }
                return G(r, re),
                a = !1,
                s && "soft" !== t && s.untrack(l || r, vt ? "x,y" : yt ? "rotation" : "top,left"),
                l && l.disable(),
                j(Vt),
                At.isDragging = At.isPressed = nt = !1,
                n && ot(At, "dragend", "onDragEnd"),
                At
            }
            ,
            this.enabled = function(t, e) {
                return arguments.length ? t ? At.enable(e) : At.disable(e) : a
            }
            ,
            this.kill = function() {
                return At.isThrowing = !1,
                e.killTweensOf(l || r, !0, Bt),
                At.disable(),
                delete M[r._gsDragID],
                At
            }
            ,
            -1 !== _t.indexOf("scroll") && (l = this.scrollProxy = new function(t, i) {
                t = K(t),
                i = i || {};
                var n, s, r, o, a, l, u = x.createElement("div"), c = u.style, p = t.firstChild, f = 0, d = 0, g = t.scrollTop, m = t.scrollLeft, _ = t.scrollWidth, v = t.scrollHeight, y = 0, b = 0, w = 0;
                ut && !1 !== i.force3D ? (a = "translate3d(",
                l = "px,0px)") : ct && (a = "translate(",
                l = "px)"),
                this.scrollTop = function(t, e) {
                    return arguments.length ? void this.top(-t, e) : -this.top()
                }
                ,
                this.scrollLeft = function(t, e) {
                    return arguments.length ? void this.left(-t, e) : -this.left()
                }
                ,
                this.left = function(n, s) {
                    if (!arguments.length)
                        return -(t.scrollLeft + d);
                    var r = t.scrollLeft - m
                      , o = d;
                    return (r > 2 || -2 > r) && !s ? (m = t.scrollLeft,
                    e.killTweensOf(this, !0, {
                        left: 1,
                        scrollLeft: 1
                    }),
                    this.left(-m),
                    void (i.onKill && i.onKill())) : (0 > (n = -n) ? (d = n - .5 | 0,
                    n = 0) : n > b ? (d = n - b | 0,
                    n = b) : d = 0,
                    (d || o) && (a ? this._suspendTransforms || (c[ct] = a + -d + "px," + -f + l) : c.left = -d + "px",
                    zt && d + y >= 0 && (c.paddingRight = d + y + "px")),
                    t.scrollLeft = 0 | n,
                    void (m = t.scrollLeft))
                }
                ,
                this.top = function(n, s) {
                    if (!arguments.length)
                        return -(t.scrollTop + f);
                    var r = t.scrollTop - g
                      , o = f;
                    return (r > 2 || -2 > r) && !s ? (g = t.scrollTop,
                    e.killTweensOf(this, !0, {
                        top: 1,
                        scrollTop: 1
                    }),
                    this.top(-g),
                    void (i.onKill && i.onKill())) : (0 > (n = -n) ? (f = n - .5 | 0,
                    n = 0) : n > w ? (f = n - w | 0,
                    n = w) : f = 0,
                    (f || o) && (a ? this._suspendTransforms || (c[ct] = a + -d + "px," + -f + l) : c.top = -f + "px"),
                    t.scrollTop = 0 | n,
                    void (g = t.scrollTop))
                }
                ,
                this.maxScrollTop = function() {
                    return w
                }
                ,
                this.maxScrollLeft = function() {
                    return b
                }
                ,
                this.disable = function() {
                    for (p = u.firstChild; p; )
                        o = p.nextSibling,
                        t.appendChild(p),
                        p = o;
                    t === u.parentNode && t.removeChild(u)
                }
                ,
                this.enable = function() {
                    if ((p = t.firstChild) !== u) {
                        for (; p; )
                            o = p.nextSibling,
                            u.appendChild(p),
                            p = o;
                        t.appendChild(u),
                        this.calibrate()
                    }
                }
                ,
                this.calibrate = function(e) {
                    var i, o, a = t.clientWidth === n;
                    g = t.scrollTop,
                    m = t.scrollLeft,
                    (!a || t.clientHeight !== s || u.offsetHeight !== r || _ !== t.scrollWidth || v !== t.scrollHeight || e) && ((f || d) && (i = this.left(),
                    o = this.top(),
                    this.left(-t.scrollLeft),
                    this.top(-t.scrollTop)),
                    (!a || e) && (c.display = "block",
                    c.width = "auto",
                    c.paddingRight = "0px",
                    (y = Math.max(0, t.scrollWidth - t.clientWidth)) && (y += rt(t, "paddingLeft") + (h ? rt(t, "paddingRight") : 0))),
                    c.display = "inline-block",
                    c.position = "relative",
                    c.overflow = "visible",
                    c.verticalAlign = "top",
                    c.width = "100%",
                    c.paddingRight = y + "px",
                    h && (c.paddingBottom = rt(t, "paddingBottom", !0)),
                    k && (c.zoom = "1"),
                    n = t.clientWidth,
                    s = t.clientHeight,
                    _ = t.scrollWidth,
                    v = t.scrollHeight,
                    b = t.scrollWidth - n,
                    w = t.scrollHeight - s,
                    r = u.offsetHeight,
                    c.display = "block",
                    (i || o) && (this.left(i),
                    this.top(o)))
                }
                ,
                this.content = u,
                this.element = t,
                this._suspendTransforms = !1,
                this.enable()
            }
            (r,function(t, e) {
                var i;
                for (i in e)
                    void 0 === t[i] && (t[i] = e[i]);
                return t
            }({
                onKill: function() {
                    At.isPressed && se(null)
                }
            }, o)),
            r.style.overflowY = St && !Ot ? "auto" : "hidden",
            r.style.overflowX = Tt && !Ot ? "auto" : "hidden",
            r = l.content),
            !1 !== o.force3D && e.set(r, {
                force3D: !0
            }),
            yt ? Bt.rotation = 1 : (Tt && (Bt[bt] = 1),
            St && (Bt[xt] = 1)),
            yt ? (B = (I = y).css,
            I.overwrite = !1) : vt && (B = (I = Tt && St ? m : Tt ? _ : v).css,
            I.overwrite = !1),
            this.enable()
        }, Bt = Ft.prototype = new t;
        Bt.constructor = Ft,
        Bt.pointerX = Bt.pointerY = 0,
        Bt.isDragging = Bt.isPressed = !1,
        Ft.version = "0.14.6",
        Ft.zIndex = 1e3,
        kt(x, "touchcancel", function() {}),
        kt(x, "contextmenu", function(t) {
            var e;
            for (e in M)
                M[e].isPressed && M[e].endDrag()
        }),
        Ft.create = function(t, i) {
            "string" == typeof t && (t = e.selector(t));
            for (var n = t && 0 !== t.length ? At(t) ? function(t) {
                var e, i, n, s = [], r = t.length;
                for (e = 0; r > e; e++)
                    if (i = t[e],
                    At(i))
                        for (n = i.length,
                        n = 0; n < i.length; n++)
                            s.push(i[n]);
                    else
                        i && 0 !== i.length && s.push(i);
                return s
            }(t) : [t] : [], s = n.length; --s > -1; )
                n[s] = new Ft(n[s],i);
            return n
        }
        ,
        Ft.get = function(t) {
            return M[(K(t) || {})._gsDragID]
        }
        ,
        Ft.timeSinceDrag = function() {
            return (E() - F) / 1e3
        }
        ;
        var Xt = {}
          , Yt = function(t, e) {
            if (t === window)
                return Xt.left = Xt.top = 0,
                Xt.width = Xt.right = T.clientWidth || t.innerWidth || x.body.clientWidth || 0,
                Xt.height = Xt.bottom = (t.innerHeight || 0) - 20 < T.clientHeight ? T.clientHeight : t.innerHeight || x.body.clientHeight || 0,
                Xt;
            var i = t.pageX !== e ? {
                left: t.pageX - V(),
                top: t.pageY - q(),
                right: t.pageX - V() + 1,
                bottom: t.pageY - q() + 1
            } : t.nodeType || t.left === e || t.top === e ? k ? function(t) {
                var e, i, n = 0, s = 0;
                for (e = (t = K(t)).offsetWidth,
                i = t.offsetHeight; t; )
                    n += t.offsetTop,
                    s += t.offsetLeft,
                    t = t.offsetParent;
                return {
                    top: n,
                    left: s,
                    width: e,
                    height: i
                }
            }(t) : K(t).getBoundingClientRect() : t;
            return i.right === e && i.width !== e ? (i.right = i.left + i.width,
            i.bottom = i.top + i.height) : i.width === e && (i = {
                width: i.right - i.left,
                height: i.bottom - i.top,
                right: i.right,
                left: i.left,
                bottom: i.bottom,
                top: i.top
            }),
            i
        };
        return Ft.hitTest = function(t, e, i) {
            if (t === e)
                return !1;
            var n, s, r, o = Yt(t), a = Yt(e), l = a.left > o.right || a.right < o.left || a.top > o.bottom || a.bottom < o.top;
            return l || !i ? !l : (r = -1 !== (i + "").indexOf("%"),
            i = parseFloat(i) || 0,
            (n = {
                left: Math.max(o.left, a.left),
                top: Math.max(o.top, a.top)
            }).width = Math.min(o.right, a.right) - n.left,
            n.height = Math.min(o.bottom, a.bottom) - n.top,
            !(n.width < 0 || n.height < 0) && (r ? (i *= .01,
            (s = n.width * n.height) >= o.width * o.height * i || s >= a.width * a.height * i) : n.width > i && n.height > i))
        }
        ,
        L.style.cssText = "visibility:hidden;height:1px;top:-1px;pointer-events:none;position:relative;clear:both;",
        Ft
    }, !0)
}),
_gsScope._gsDefine && _gsScope._gsQueue.pop()(),
function(t) {
    "use strict";
    var e = function() {
        return (_gsScope.GreenSockGlobals || _gsScope).Draggable
    };
    "function" == typeof define && define.amd ? define(["TweenLite"], e) : "undefined" != typeof module && module.exports && (require("../TweenLite.js"),
    require("../plugins/CSSPlugin.js"),
    module.exports = e())
}(),
window.lazySizes = function() {
    "use strict";
    if (Date.now && window.document.getElementsByClassName && Object.freeze) {
        var t, e, i, n, s, r, o, a, l, u, h, c, p, f, d, g, m, _, v, y, b = window.document, w = 0, x = /^picture$/i, T = /^img$/i, P = 10, S = /rident|hrome/.test(navigator.userAgent || ""), C = window.setImmediate || window.setTimeout, A = function(t, e, i) {
            var n = i ? "addEventListener" : "removeEventListener";
            t[n]("load", e, !1),
            t[n]("error", e, !1)
        }, O = function(t) {
            A(t.target, O),
            V(t.target, !0)
        }, E = function(t, e, i) {
            var n = b.createEvent("Event");
            return n.initEvent(e, !0, !0),
            n.details = i || {},
            t.dispatchEvent(n),
            n
        };
        b.documentElement.classList ? (a = function(t, e) {
            t.classList.add(e)
        }
        ,
        l = function(t, e) {
            t.classList.remove(e)
        }
        ,
        u = function(t, e) {
            return t.classList.contains(e)
        }
        ) : (a = function(t, e) {
            u(t, e) || (t.className += " " + e)
        }
        ,
        l = function(t, e) {
            var i;
            u(t, e) && (i = new RegExp("(\\s|^)" + e + "(\\s|$)"),
            t.className = t.className.replace(i, " "))
        }
        ,
        u = function(t, e) {
            return t.className.match(new RegExp("(\\s|^)" + e + "(\\s|$)"))
        }
        );
        var k, L, R, M, D, I, N = Date.now(), z = function(t) {
            w--,
            clearTimeout(p),
            t && t.target && A(t.target, z),
            (!t || w < 0 || !t.target) && (w = 0)
        }, F = (R = function() {
            L = !1
        }
        ,
        M = function() {
            clearTimeout(k),
            o = 0,
            clearTimeout(r),
            B(),
            setTimeout(R)
        }
        ,
        {
            debounce: function() {
                clearTimeout(k),
                clearTimeout(void 0),
                L = !0,
                k = setTimeout(M, 66)
            },
            throttled: function() {
                var t;
                L || (L = !0,
                clearTimeout(k),
                t = (t = Date.now() - N) > 300 ? 9 : 99,
                k = setTimeout(M, t))
            }
        }), B = function() {
            var e, n, s, a;
            if (c = t.length,
            N = Date.now(),
            c) {
                for (f = window.innerWidth + P,
                d = window.innerHeight + P,
                y = -1 * P; o < c; o++)
                    if (e = t[o].getBoundingClientRect(),
                    (v = e.bottom) >= y && (g = e.top) <= d && (_ = e.right) >= y && (m = e.left) <= f && (v || _ || m || g))
                        V(t[o]),
                        s = !0;
                    else {
                        if (o < c - 1 && Date.now() - N > 9) {
                            o++,
                            n = !1,
                            r = setTimeout(B, 4);
                            break
                        }
                        !s && h && !n && i.preloadAfterLoad && w < 2 && (v || _ || m || g || "auto" != t[o].getAttribute(i.sizesAttr)) && (n = t[o])
                    }
                n && !s && (w++,
                a = V(a = n),
                A(a, z),
                A(a, z, !0),
                clearTimeout(p),
                p = setTimeout(z, 5e3))
            }
        }, X = (I = function() {
            clearTimeout(D),
            U(),
            Y()
        }
        ,
        function() {
            clearTimeout(D),
            clearTimeout(n),
            D = setTimeout(I, 99)
        }
        ), Y = function() {
            var t, i, r, o = e.length;
            if (o)
                for (i = Date.now(),
                t = (r = s || 0) + 3,
                U(); r < o; r++)
                    if (G(e[r]),
                    r > t && r < o - 1 && Date.now() - i > 9) {
                        s = r + 1,
                        n = setTimeout(Y, 4);
                        break
                    }
        }, j = function() {
            P = 400,
            clearTimeout(void 0),
            b.addEventListener("load", F.throttled, !0),
            h = !0
        }, H = function() {
            var t = b.documentElement;
            i.mutation && (window.MutationObserver ? new MutationObserver(F.throttled).observe(t, {
                childList: !0,
                subtree: !0,
                attributes: !0
            }) : (t.addEventListener("DOMNodeInserted", F.throttled, !0),
            t.addEventListener("DOMAttrModified", F.throttled, !0))),
            i.hover,
            b.addEventListener("focus", F.throttled, !0),
            window.addEventListener("hashchange", F.throttled, !0),
            "onmozfullscreenchange"in t ? window.addEventListener("mozfullscreenchange", F.throttled, !0) : "onwebkitfullscreenchange"in t ? window.addEventListener("webkitfullscreenchange", F.throttled, !0) : window.addEventListener("fullscreenchange", F.throttled, !0),
            i.cssanimation && (b.addEventListener("animationstart", F.throttled, !0),
            b.addEventListener("transitionstart", F.throttled, !0))
        };
        return i = window.lazySizesConfig || {},
        function() {
            var t, e = {
                clearSrcAttr: !0,
                mutation: !0,
                hover: !0,
                cssanimation: !0,
                lazyClass: "lazyload",
                scroll: !0,
                autosizesClass: "lazyautosizes",
                srcAttr: "data-src",
                srcsetAttr: "data-srcset",
                sizesAttr: "data-sizes",
                preloadAfterLoad: !1,
                onlyLargerSizes: !0
            };
            for (t in e)
                t in i || (i[t] = e[t])
        }(),
        setTimeout(function() {
            t = b.getElementsByClassName(i.lazyClass),
            e = b.getElementsByClassName(i.autosizesClass),
            i.scroll && addEventListener("scroll", F.throttled, !0),
            addEventListener("resize", F.debounce, !1),
            addEventListener("resize", X, !1),
            /^i|^loade|c/.test(b.readyState) ? H() : b.addEventListener("DOMContentLoaded", H, !1),
            "complete" == b.readyState ? j() : (addEventListener("load", j, !1),
            b.addEventListener("readystatechange", F.throttled, !1)),
            F.throttled()
        }),
        {
            cfg: i,
            updateAllSizes: X,
            updateAllLazy: F.throttled,
            unveilLazy: function(t) {
                u(t, i.lazyClass) && V(t)
            },
            updateSizes: G,
            updatePolyfill: q
        }
    }
    function q(t, e) {
        var i;
        window.picturefill ? picturefill({
            reevaluate: !0,
            reparse: !0,
            elements: [t]
        }) : window.respimage && !respimage._.observer ? (e && (i = t[respimage._.ns]) && (i[e.srcset ? "srcset" : "src"] = void 0),
        respimage({
            reparse: !0,
            elements: [t]
        })) : !window.HTMLPictureElement && window.console && b.readyState
    }
    function V(t, e) {
        var n, s, r, o, u, h, c, p, f, d = E(t, "lazybeforeunveil", {
            force: !!e
        });
        if (!d.defaultPrevented) {
            if (u = t.getAttribute(i.sizesAttr) || t.getAttribute("sizes"),
            T.test(t.nodeName || "") && (p = t.parentNode,
            f = x.test(p.nodeName || ""),
            !S && !f && !e && !t.complete && t.getAttribute("src") && t.src && !t.lazyload))
                return A(t, O),
                void A(t, O, !0);
            if (u && ("auto" == u ? G(t, !0) : t.setAttribute("sizes", u),
            i.clearAttr && t.removeAttribute(i.sizesAttr)),
            c = t.getAttribute(i.srcsetAttr),
            h = t.getAttribute(i.srcAttr),
            f)
                for (n = p.getElementsByTagName("source"),
                s = 0,
                r = n.length; s < r; s++)
                    (o = n[s].getAttribute(i.srcsetAttr)) && n[s].setAttribute("srcset", o);
            c ? (t.setAttribute("srcset", c),
            i.clearAttr && t.removeAttribute(i.srcsetAttr)) : h && (t.setAttribute("src", h),
            (i.clearAttr || i.clearSrcAttr) && t.removeAttribute(i.srcAttr))
        }
        return C(function() {
            l(t, i.lazyClass),
            "auto" == u && a(t, i.autosizesClass),
            (c || u) && q(t, {
                srcset: c,
                src: h
            })
        }),
        t
    }
    function U() {
        s = 0,
        clearTimeout(n)
    }
    function G(t, e) {
        var n, s, r, o, a, l, u, h;
        if (o = t.parentNode) {
            if (n = o.offsetWidth,
            s = t.offsetWidth,
            !(r = s > n ? s : n) && !t._lazysizesWidth)
                for (; o && o != b.body && !r; )
                    r = o.offsetWidth,
                    o = o.parentNode;
            if (!(h = E(t, "lazybeforesizes", {
                width: r,
                dataAttr: !!e
            })).defaultPrevented && (r = h.details.width) && r !== t._lazysizesWidth && (!i.onlyLargerSizes || !t._lazysizesWidth || t._lazysizesWidth < r)) {
                if (t._lazysizesWidth = r,
                r += "px",
                t.setAttribute("sizes", r),
                x.test(o.nodeName || ""))
                    for (a = o.getElementsByTagName("source"),
                    l = 0,
                    u = a.length; l < u; l++)
                        a[l].setAttribute("sizes", r);
                h.details.dataAttr || q(t)
            }
        }
    }
}(),
"function" == typeof define && define.amd && define(function() {
    return window.lazySizes
}),
function(t) {
    function e(e) {
        "use strict";
        var i = this;
        return this.events = {},
        this.state = null,
        this.options = e || {},
        this.options.env = this.options.env || (0 === Object.keys(t).length && process && !0 !== process.browser ? "server" : "client"),
        this.options.mode = this.options.mode || ("server" !== this.options.env && this.options.pushState && t.history && t.history.pushState ? "pushState" : "hashchange"),
        this.version = "0.5.8",
        "function" == typeof t.addEventListener && (t.addEventListener("hashchange", function() {
            i.trigger("hashchange")
        }),
        t.addEventListener("popstate", function(t) {
            if (i.state && null === i.state.previousState)
                return !1;
            i.trigger("navigate")
        })),
        this.fragment = {
            get: function() {
                return "pushState" === i.options.mode ? t.location.pathname.replace(i.options.root, "") : "pushState" !== i.options.mode && t.location ? t.location.hash ? t.location.hash.split(i.options.hashBang ? "#!" : "#")[1] : "" : t._pathname || ""
            },
            set: function(e) {
                return "pushState" === i.options.mode ? (e = i.options.root ? i.options.root + e : e,
                t.history.pushState({}, null, e)) : t.location ? t.location.hash = (i.options.hashBang ? "!" : "") + e : t._pathname = e || "",
                i
            },
            clear: function() {
                return "pushState" === i.options.mode ? t.history.pushState({}, null, i.options.root || "/") : t.location && (t.location.hash = i.options.hashBang ? "!" : ""),
                i
            }
        },
        this
    }
    e.regexRoute = function(t, e, i, n) {
        return t instanceof RegExp ? t : (t instanceof Array && (t = "(" + t.join("|") + ")"),
        t = t.concat(n ? "" : "/?").replace(/\/\(/g, "(?:/").replace(/\+/g, "__plus__").replace(/(\/)?(\.)?:(\w+)(?:(\(.*?\)))?(\?)?/g, function(t, i, n, s, r, o) {
            return e.push({
                name: s,
                optional: !!o
            }),
            i = i || "",
            (o ? "" : i) + "(?:" + (o ? i : "") + (n || "") + (r || (n ? "([^/.]+?)" : "([^/]+?)")) + ")" + (o || "")
        }).replace(/([\/.])/g, "\\$1").replace(/__plus__/g, "(.+)").replace(/\*/g, "(.*)"),
        new RegExp("^" + t + "$",i ? "" : "i"))
    }
    ,
    e._forEach = function(t, e) {
        return "function" == typeof Array.prototype.forEach ? Array.prototype.forEach.call(t, e) : function(t, e) {
            for (var i = 0, n = this.length; i < n; ++i)
                t.call(e, this[i], i, this)
        }
        .call(t, e)
    }
    ,
    e.prototype.get = e.prototype.add = function(t) {
        var i = this
          , n = []
          , s = Array.prototype.slice.call(arguments, 1, -1)
          , r = Array.prototype.slice.call(arguments, -1)[0]
          , o = e.regexRoute(t, n)
          , a = function() {
            var a = i.fragment.get().match(o);
            if (a) {
                var l = {
                    params: {},
                    keys: n,
                    matches: a.slice(1)
                };
                e._forEach(l.matches, function(t, e) {
                    var i = n[e] && n[e].name ? n[e].name : e;
                    l.params[i] = t ? decodeURIComponent(t) : void 0
                });
                var u = {
                    route: t,
                    value: i.fragment.get(),
                    params: l.params,
                    regex: a,
                    stack: [],
                    runCallback: !0,
                    callbackRan: !1,
                    propagateEvent: !0,
                    next: function() {
                        return this.stack.shift().call(i, l, u, function() {
                            u.next.call(u)
                        })
                    },
                    preventDefault: function() {
                        this.runCallback = !1
                    },
                    stopPropagation: function() {
                        this.propagateEvent = !1
                    },
                    parent: function() {
                        return !!!(!this.previousState || !this.previousState.value || this.previousState.value != this.value) && this.previousState
                    },
                    callback: function() {
                        u.callbackRan = !0,
                        u.timeStamp = Date.now(),
                        u.next()
                    }
                };
                if (u.stack = s.concat(r),
                i.trigger("match", u, l),
                !u.runCallback)
                    return i;
                if (u.previousState = i.state,
                i.state = u,
                u.parent() && !1 === u.parent().propagateEvent)
                    return u.propagateEvent = !1,
                    i;
                u.callback()
            }
            return i
        }
          , l = "pushState" !== i.options.mode && "server" !== i.options.env ? "hashchange" : "navigate";
        return a().on(l, a)
    }
    ,
    e.prototype.trigger = function(t) {
        var i = this
          , n = Array.prototype.slice.call(arguments, 1);
        return this.events[t] && e._forEach(this.events[t], function(t) {
            t.apply(i, n)
        }),
        this
    }
    ,
    e.prototype.on = e.prototype.bind = function(t, i) {
        var n = this
          , s = t.split(" ");
        return e._forEach(s, function(t) {
            n.events[t] ? n.events[t].push(i) : n.events[t] = [i]
        }),
        this
    }
    ,
    e.prototype.context = function(t) {
        var e = this;
        return function(i, n) {
            var s = ("/" !== t.slice(-1) ? t + "/" : t) + i;
            return e.get.call(e, s, n)
        }
    }
    ,
    e.prototype.navigate = function(t) {
        return this.fragment.set(t).trigger("navigate")
    }
    ,
    e.listen = function() {
        var t, i;
        return arguments[0] && arguments[1] ? (t = arguments[0],
        i = arguments[1]) : i = arguments[0],
        function() {
            for (var t in i)
                this.get.call(this, t, i[t]);
            return this
        }
        .call(new e(t || {}))
    }
    ,
    "function" != typeof t.define || t.define.amd.grapnel ? "object" == typeof module && "object" == typeof module.exports ? module.exports = exports = e : t.Grapnel = e : t.define(function(i, n, s) {
        return t.define.amd.grapnel = !0,
        e
    })
}
.call({}, "object" == typeof window ? window : this),
function(t, e, i) {
    var n = window.matchMedia;
    "undefined" != typeof module && module.exports ? module.exports = i(n) : "function" == typeof define && define.amd ? define(function() {
        return e[t] = i(n)
    }) : e[t] = i(n)
}("enquire", this, function(t) {
    "use strict";
    function e(t, e) {
        for (var i = 0, n = t.length; n > i && !1 !== e(t[i], i); i++)
            ;
    }
    function i(t) {
        this.options = t,
        !t.deferSetup && this.setup()
    }
    function n(e, i) {
        this.query = e,
        this.isUnconditional = i,
        this.handlers = [],
        this.mql = t(e);
        var n = this;
        this.listener = function(t) {
            n.mql = t,
            n.assess()
        }
        ,
        this.mql.addListener(this.listener)
    }
    function s() {
        if (!t)
            throw new Error("matchMedia not present, legacy browsers require a polyfill");
        this.queries = {},
        this.browserIsIncapable = !t("only all").matches
    }
    return i.prototype = {
        setup: function() {
            this.options.setup && this.options.setup(),
            this.initialised = !0
        },
        on: function() {
            !this.initialised && this.setup(),
            this.options.match && this.options.match()
        },
        off: function() {
            this.options.unmatch && this.options.unmatch()
        },
        destroy: function() {
            this.options.destroy ? this.options.destroy() : this.off()
        },
        equals: function(t) {
            return this.options === t || this.options.match === t
        }
    },
    n.prototype = {
        addHandler: function(t) {
            var e = new i(t);
            this.handlers.push(e),
            this.matches() && e.on()
        },
        removeHandler: function(t) {
            var i = this.handlers;
            e(i, function(e, n) {
                return e.equals(t) ? (e.destroy(),
                !i.splice(n, 1)) : void 0
            })
        },
        matches: function() {
            return this.mql.matches || this.isUnconditional
        },
        clear: function() {
            e(this.handlers, function(t) {
                t.destroy()
            }),
            this.mql.removeListener(this.listener),
            this.handlers.length = 0
        },
        assess: function() {
            var t = this.matches() ? "on" : "off";
            e(this.handlers, function(e) {
                e[t]()
            })
        }
    },
    s.prototype = {
        register: function(t, i, s) {
            var r, o = this.queries, a = s && this.browserIsIncapable;
            return o[t] || (o[t] = new n(t,a)),
            "function" == typeof i && (i = {
                match: i
            }),
            r = i,
            "[object Array]" === Object.prototype.toString.apply(r) || (i = [i]),
            e(i, function(e) {
                o[t].addHandler(e)
            }),
            this
        },
        unregister: function(t, e) {
            var i = this.queries[t];
            return i && (e ? i.removeHandler(e) : (i.clear(),
            delete this.queries[t])),
            this
        }
    },
    new s
}),
function(t, e, i) {
    "use strict";
    var n;
    PubSub && (e.publish = PubSub.publish,
    e.subscribe = PubSub.subscribe,
    e.unsubscribe = PubSub.unsubscribe),
    e.Utility = {
        createElement: function(e) {
            var i = t.createElement("div");
            return i.innerHTML = e,
            i.firstChild
        },
        isNumeric: function(t) {
            return !isNaN(parseFloat(t)) && isFinite(t)
        },
        forEach: function(t, e, i) {
            if ("[object Object]" === Object.prototype.toString.call(t))
                for (var n in t)
                    Object.prototype.hasOwnProperty.call(t, n) && e.call(i, t[n], n, t);
            else
                for (var s = 0, r = t.length; s < r; s++)
                    e.call(i, t[s], s, t)
        },
        extend2: function(t) {
            var e = {}
              , i = function(t) {
                for (var i in t)
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
            };
            i(arguments[0]);
            for (var n = 1; n < arguments.length; n++) {
                i(arguments[n])
            }
            return e
        },
        deepExtend: function t(e) {
            var i = {}
              , n = function(e) {
                for (var n in e)
                    Object.prototype.hasOwnProperty.call(e, n) && ("[object Object]" === Object.prototype.toString.call(e[n]) ? i[n] = t(i[n], e[n]) : i[n] = e[n])
            };
            n(arguments[0]);
            for (var s = 1; s < arguments.length; s++) {
                n(arguments[s])
            }
            return i
        },
        hasClass: function(t, e) {
            return t.classList ? t.classList.contains(e) : new RegExp("\\b" + e + "\\b").test(t.className)
        },
        addClass: function(t, e) {
            t.classList ? t.classList.add(e) : this.hasClass(t, e) || (t.className += " " + e)
        },
        removeClass: function(t, e) {
            t.classList ? t.classList.remove(e) : t.className = t.className.replace(new RegExp("\\b" + e + "\\b","g"), "")
        },
        wrap: function(t, e) {
            e.length || (e = [e]);
            for (var i = e.length - 1; i >= 0; i--) {
                var n = i > 0 ? t.cloneNode(!0) : t
                  , s = e[i]
                  , r = s.parentNode
                  , o = s.nextSibling;
                n.appendChild(s),
                o ? r.insertBefore(n, o) : r.appendChild(n)
            }
        },
        setAttributes: function(t, e) {
            for (var i in e)
                t.setAttribute(i, e[i]);
            return t
        },
        getParents: function(e, i) {
            var n = [];
            if (i)
                var s = i.charAt(0);
            for (; e && e !== t; e = e.parentNode)
                i ? (e.tagName.toLowerCase() === i.toLowerCase() && n.push(e),
                "." === s && e.classList.contains(i.substr(1)) && n.push(e),
                "#" === s && e.id === i.substr(1) && n.push(e),
                "[" === s && e.hasAttribute(i.substr(1, i.length - 1)) && n.push(e)) : n.push(e);
            return 0 === n.length ? null : n
        },
        extractValues: function(t, e, i) {
            var n = (i = i || {}).delimiters || ["{", "}"]
              , s = i.lowercase
              , r = i.whitespace
              , o = new RegExp(n[0] + "([^" + n.join("") + "\t\r\n]+)" + n[1],"g")
              , a = e.match(o)
              , l = new RegExp(e.replace(/[\\\^\$\*\+\.\?\(\)]/g, "\\$&").replace(o, "(.+)"));
            s && (t = t.toLowerCase()),
            r && (t = t.replace(/\s+/g, function(t) {
                for (var e = "", i = 0; i < r; i++)
                    e += t.charAt(0);
                return e
            }));
            var u = t.match(l);
            if (!u)
                return null;
            if (!a)
                return t === e ? {} : null;
            u = u.splice(1);
            for (var h = {}, c = 0; c < a.length; c++)
                h[a[c].replace(new RegExp(n[0] + "|" + n[1],"g"), "")] = u[c];
            return h
        },
        template: function(t, e) {
            for (var i in e)
                t = t.replace(new RegExp("{{" + i + "}}","g"), e[i]);
            return t
        },
        renderEmail: function(e) {
            var i = t.querySelectorAll("[email]")
              , n = e;
            i && Array.prototype.forEach.call(i, function(t, e) {
                var s = t.hasAttribute("subitem") ? "subitem" : "";
                i[e].outerHTML = "<a " + s + ' href="mailto:' + n.address + '">' + n.text + "</a>"
            })
        },
        parseTween: function(t) {
            var n, s = {
                duration: .6,
                top: "0%",
                x: "0%",
                y: "0%",
                z: "0%",
                autoAlpha: 1,
                ease: Power2.easeInOut
            }, r = e.settings.transitions, o = {};
            return "string" == typeof t ? n = r[t] !== i ? r[t] : r.slide : t instanceof Object && !(t instanceof Array) && (n = t),
            e.Utility.forEach(["from", "to", "out"], function(t, i) {
                o[t] = {},
                o[t].vars = e.Utility.extend({}, s, n[t]),
                o[t].duration = "to" === t ? o[t].vars.duration - .01 : o[t].vars.duration,
                delete o[t].vars.duration
            }),
            o
        },
        parseYouTube: function(t) {
            var e = /\/\/(?:www\.)?youtu(?:\.be|be\.com)\/(?:watch\?v=|embed\/)?([a-z0-9_\-]+)/i.exec(t);
            return e ? "http://img.youtube.com/vi/" + e[1] + "/0.jpg" : null
        },
        parseVimeo: function(e, i) {
            var n = /\/\/(?:www\.)?player.vimeo.com\/video\/([0-9a-z\-_]+)/i.exec(e);
            if (n) {
                var s, r = new XMLHttpRequest;
                r.open("GET", "http://vimeo.com/api/v2/video/" + n[1] + ".json", !0),
                r.onload = function() {
                    if (r.status >= 200 && r.status < 400) {
                        var e = JSON.parse(r.responseText);
                        s = e[0].thumbnail_medium;
                        var n = t.querySelector(".thumb-" + i + " .thumb-photo");
                        n && (n.style.backgroundImage = "url('" + s + "')")
                    }
                }
                ,
                r.onerror = function() {}
                ,
                r.send()
            }
            return null
        },
        getAbsoluteUrl: function(e) {
            return n || (n = t.createElement("a")),
            n.href = e,
            n.href
        },
        getEnviroment: function() {
            var e = "navigator"in window && "userAgent"in navigator && navigator.userAgent.toLowerCase() || ""
              , i = "navigator"in window && "vendor"in navigator && navigator.vendor.toLowerCase() || ""
              , n = "navigator"in window && "appVersion"in navigator && navigator.appVersion.toLowerCase() || ""
              , s = {
                chrome: function() {
                    return /chrome|chromium/i.test(e) && /google inc/.test(i)
                },
                firefox: function() {
                    return /firefox/i.test(e)
                },
                ie: function(t) {
                    return t ? t >= 11 ? "ActiveXObject"in window : new RegExp("msie " + t).test(e) : /msie/i.test(e) || "ActiveXObject"in window
                },
                opera: function() {
                    return /^Opera\//.test(e) || /\x20OPR\//.test(e)
                },
                safari: function() {
                    return /safari/i.test(e) && /apple computer/i.test(i)
                },
                ios: function() {
                    return s.iphone() || s.ipad() || s.ipod()
                },
                iphone: function() {
                    return /iphone/i.test(e)
                },
                ipad: function() {
                    return /ipad/i.test(e)
                },
                ipod: function() {
                    return /ipod/i.test(e)
                },
                android: function() {
                    return /android/i.test(e)
                },
                androidPhone: function() {
                    return /android/i.test(e) && /mobile/i.test(e)
                },
                androidTablet: function() {
                    return /android/i.test(e) && !/mobile/i.test(e)
                },
                blackberry: function() {
                    return /blackberry/i.test(e) || /BB10/i.test(e)
                },
                desktop: function() {
                    return !s.mobile() && !s.tablet()
                },
                linux: function() {
                    return /linux/i.test(n)
                },
                mac: function() {
                    return /mac/i.test(n)
                },
                windows: function() {
                    return /win/i.test(n)
                },
                windowsPhone: function() {
                    return s.windows() && /phone/i.test(e)
                },
                windowsTablet: function() {
                    return s.windows() && !s.windowsPhone() && /touch/i.test(e)
                },
                mobile: function() {
                    return s.iphone() || s.ipod() || s.androidPhone() || s.blackberry() || s.windowsPhone()
                },
                tablet: function() {
                    return s.ipad() || s.androidTablet() || s.windowsTablet()
                },
                touchDevice: function() {
                    return "ontouchstart"in window || "DocumentTouch"in window && t instanceof DocumentTouch
                }
            };
            return s
        }
    };
    var s, r, o = function(t) {
        return r != (s = "{{ }}") && (r = s.split(" ")),
        t && t.test ? "{{ }}" == s ? t : RegExp(t.source.replace(/\{/g, r[0].replace(/(?=.)/g, "\\")).replace(/\}/g, r[1].replace(/(?=.)/g, "\\")), t.global ? "g" : "") : r[t]
    }, a = function() {
        var t = {}
          , e = /(['"\/]).*?[^\\]\1|\.\w*|\w*:|\b(?:(?:new|typeof|in|instanceof) |(?:this|true|false|null|undefined)\b|function *\()|([a-z_$]\w*)/gi;
        return function(e, n) {
            return e && (t[e] = t[e] || (r = ((r = e) || o(0) + o(1)).replace(o(/\\{/g), "￰").replace(o(/\\}/g), "￱"),
            l = r,
            u = s(r, o(/{/), o(/}/)),
            h = [],
            u.map(function(t, e) {
                e = l.indexOf(t),
                h.push(l.slice(0, e), t),
                l = l.slice(e + t.length)
            }),
            a = h.concat(l),
            new Function("d","return " + (a[0] || a[2] || a[3] ? "[" + a.map(function(t, e) {
                return e % 2 ? i(t, !0) : '"' + t.replace(/\n/g, "\\n").replace(/"/g, '\\"') + '"'
            }).join(",") + '].join("")' : i(a[1])).replace(/\uFFF0/g, o(0)).replace(/\uFFF1/g, o(1)) + ";")))(n);
            var r, a, l, u, h
        }
        ;
        function i(t, e) {
            return t = t.replace(/\n/g, " ").replace(o(/^[{ ]+|[ }]+$|\/\*.+?\*\//g), ""),
            /^\s*[\w- "']+ *:/.test(t) ? "[" + s(t, /["' ]*[\w- ]+["' ]*:/, /,(?=["' ]*[\w- ]+["' ]*:)|}|$/).map(function(t) {
                return t.replace(/^[ "']*(.+?)[ "']*: *(.+?),? *$/, function(t, e, i) {
                    return i.replace(/[^&|=!><]+/g, n) + '?"' + e + '":"",'
                })
            }).join("") + '].join(" ").trim()' : n(t, e)
        }
        function n(t, i) {
            return (t = t.trim()) ? "(function(v){try{v=" + (t.replace(e, function(t, e, i) {
                return i ? "(d." + i + "===undefined?" + ("undefined" == typeof window ? "global." : "window.") + i + ":d." + i + ")" : t
            }) || "x") + "}catch(e){}finally{return " + (!0 === i ? '!v&&v!==0?"":v' : "v") + "}}).call(d)" : ""
        }
        function s(t, e, i) {
            var n, s = 0, r = [], o = new RegExp("(" + e.source + ")|(" + i.source + ")","g");
            return t.replace(o, function(e, i, o, a) {
                !s && i && (n = a),
                (s += i ? 1 : -1) || null == o || r.push(t.slice(n, a + o.length))
            }),
            r
        }
    }(), l = {}.toString, u = {}, h = function(t) {
        return null == t ? String(t) : u[l.call(t)] || "object"
    }, c = Array.isArray || function(t) {
        return "array" === h(t)
    }
    , p = function(t) {
        if (!t || "object" !== h(t) || t.nodeType || null != (e = t) && e == e.window)
            return !1;
        var e, n;
        try {
            if (t.constructor && !hasOwn.call(t, "constructor") && !hasOwn.call(t.constructor.prototype, "isPrototypeOf"))
                return !1
        } catch (t) {
            return !1
        }
        for (n in t)
            ;
        return n === i || hasOwn.call(t, n)
    };
    e.Utility.tmpl = a,
    e.Utility.extend = function() {
        var t, e, n, s, r, o, a, u = arguments[0] || {}, h = 1, f = arguments.length, d = !1;
        for ("boolean" == typeof u && (d = u,
        u = arguments[1] || {},
        h = 2),
        "object" != typeof u && (a = u,
        "[object Function]" !== l.call(a)) && (u = {}),
        f === h && (u = this,
        --h); h < f; h++)
            if (null != (t = arguments[h]))
                for (e in t)
                    n = u[e],
                    u !== (s = t[e]) && (d && s && (p(s) || (r = c(s))) ? (r ? (r = !1,
                    o = n && c(n) ? n : []) : o = n && p(n) ? n : {},
                    u[e] = _extend(d, o, s)) : s !== i && (u[e] = s));
        return u
    }
}(document, window.FOLIO = window.FOLIO || {}),
function(t, e, i) {
    var n, s, r = "";
    t.addEventListener ? n = "addEventListener" : (n = "attachEvent",
    r = "on"),
    s = "onwheel"in e.createElement("div") ? "wheel" : void 0 !== e.onmousewheel ? "mousewheel" : "DOMMouseScroll";
    try {
        var o = Object.defineProperty({}, "passive", {
            get: function() {
                !0
            }
        });
        t.addEventListener("testPassive", null, o),
        t.removeEventListener("testPassive", null, o)
    } catch (t) {}
    function a(e, i, o, a) {
        e[n](r + i, "wheel" == s ? o : function(e) {
            !e && (e = t.event);
            var i = {
                originalEvent: e,
                target: e.target || e.srcElement,
                type: "wheel",
                deltaMode: "MozMousePixelScroll" == e.type ? 0 : 1,
                deltaX: 0,
                deltaZ: 0,
                preventDefault: function() {
                    e.preventDefault ? e.preventDefault() : e.returnValue = !1
                }
            };
            return "mousewheel" == s ? (i.deltaY = -.025 * e.wheelDelta,
            e.wheelDeltaX && (i.deltaX = -.025 * e.wheelDeltaX)) : i.deltaY = e.detail,
            o(i)
        }
        , a || !1)
    }
    t.addWheelListener = function(t, e, i) {
        a(t, s, e, i),
        "DOMMouseScroll" == s && a(t, "MozMousePixelScroll", e, i)
    }
}(window, document),
function() {
    ("undefined" != typeof exports && null !== exports ? exports : this).Lethargy = function() {
        function t(t, e, i, n) {
            this.stability = null != t ? Math.abs(t) : 8,
            this.sensitivity = null != e ? 1 + Math.abs(e) : 100,
            this.tolerance = null != i ? 1 + Math.abs(i) : 1.1,
            this.delay = null != n ? n : 150,
            this.lastUpDeltas = function() {
                var t, e, i;
                for (i = [],
                t = 1,
                e = 2 * this.stability; 1 <= e ? t <= e : t >= e; 1 <= e ? t++ : t--)
                    i.push(null);
                return i
            }
            .call(this),
            this.lastDownDeltas = function() {
                var t, e, i;
                for (i = [],
                t = 1,
                e = 2 * this.stability; 1 <= e ? t <= e : t >= e; 1 <= e ? t++ : t--)
                    i.push(null);
                return i
            }
            .call(this),
            this.deltasTimestamp = function() {
                var t, e, i;
                for (i = [],
                t = 1,
                e = 2 * this.stability; 1 <= e ? t <= e : t >= e; 1 <= e ? t++ : t--)
                    i.push(null);
                return i
            }
            .call(this)
        }
        return t.prototype.check = function(t) {
            var e;
            return null != (t = t.originalEvent || t).wheelDelta ? e = t.wheelDelta : null != t.deltaY ? e = -40 * t.deltaY : null == t.detail && 0 !== t.detail || (e = -40 * t.detail),
            this.deltasTimestamp.push(Date.now()),
            this.deltasTimestamp.shift(),
            e > 0 ? (this.lastUpDeltas.push(e),
            this.lastUpDeltas.shift(),
            this.isInertia(1)) : (this.lastDownDeltas.push(e),
            this.lastDownDeltas.shift(),
            this.isInertia(-1))
        }
        ,
        t.prototype.isInertia = function(t) {
            var e, i, n, s, r, o, a;
            return null === (e = -1 === t ? this.lastDownDeltas : this.lastUpDeltas)[0] ? t : !(this.deltasTimestamp[2 * this.stability - 2] + this.delay > Date.now() && e[0] === e[2 * this.stability - 1]) && (n = e.slice(0, this.stability),
            i = e.slice(this.stability, 2 * this.stability),
            a = n.reduce(function(t, e) {
                return t + e
            }),
            r = i.reduce(function(t, e) {
                return t + e
            }),
            o = a / n.length,
            s = r / i.length,
            Math.abs(o) < Math.abs(s * this.tolerance) && this.sensitivity < Math.abs(s) && t)
        }
        ,
        t.prototype.showLastUpDeltas = function() {
            return this.lastUpDeltas
        }
        ,
        t.prototype.showLastDownDeltas = function() {
            return this.lastDownDeltas
        }
        ,
        t
    }()
}
.call(this),
function(t, e, i) {
    "use strict";
    e.VERSION = "0.6.2",
    e.Event = {
        KEY_UP: "folio.keyup",
        PAGE: "folio.page",
        NEXT_PAGE: "folio.page.next",
        PREV_PAGE: "folio.page.prev",
        FIRST_PAGE: "folio.page.first",
        LAST_PAGE: "folio.page.last",
        GO_TO_PAGE: "folio.page.goto",
        PAGE_TRANSITION: "folio.page.tranistion",
        PAGE_TRANSITION_START: "folio.page.tranistion.start",
        PAGE_TRANSITION_END: "folio.page.tranistion.end",
        PAGE_VIEW: "folio.page.view",
        PAGE_CLOSE: "folio.page.close",
        SECTION_DISPLAY: "folio.section.display",
        SECTION_TOGGLE: "folio.section.toggle",
        MENU: "folio.menu",
        MENU_OPEN: "folio.menu.open",
        MENU_OPENED: "folio.menu.opened",
        MENU_CLOSE: "folio.menu.close",
        MENU_CLOSED: "folio.menu.closed",
        SIDEBAR: "folio.sidebar",
        SIDEBAR_OPENED: "folio.sidebar.opened",
        SIDEBAR_CLOSED: "folio.sidebar.closed",
        HASH_CHANGE: "folio.hash.change",
        HASH_CHANGE_NEW: "folio.hash.changenew",
        MOUSE_INACTIVITY: "folio.mouse.inactivity",
        MQ: "folio.mq",
        HELP: "folio.help",
        LOADED: "folio.loaded",
        READY: "folio.ready"
    },
    e.DEFAULTS = {
        email: {
            text: "email me",
            address: "name@somedomain.com",
            subject: "",
            body: ""
        },
        analytics: {
            _setAccount: "UA-XXXXXXXX-X"
        },
        meta: '<meta charset="utf-8"> <meta http-equiv="X-UA-Compatible" content="IE=edge">  <meta name="HandheldFriendly" content="True">  <meta name="MobileOptimized" content="0"> <meta name="viewport" content="user-scalable=no, width=device-width, initial-scale=1, maximum-scale=1"> ',
        mediaQueries: {
            portrait: "screen and (orientation:portrait) ",
            "-sm": "screen and (max-width:480px)",
            "sm-": "screen and (min-width:481px)",
            "-md": "screen and (max-width:720px)",
            "md-": "screen and (min-width:721px)",
            "-lg": "screen and (max-width:960px)",
            "lg-": "screen and (min-width:961px)",
            "-xl": "screen and (max-width:1200px)",
            "xl-": "screen and (min-width:1201px)",
            "-sidebar": "screen and (max-width:800px) && cover",
            "sidebar-": "screen and (min-width:801px) && pull"
        },
        key: {
            close: "esc",
            next: "right",
            prev: "left",
            first: "home",
            last: "end",
            sidebar: "m",
            views: "v"
        },
        sidebar: {
            id: "sidebar",
            classPrefix: "sidebar",
            element: "aside",
            align: "left",
            toggle: !0,
            hidden: !0
        },
        menu: {
            src: "includes/menu-simple.html",
            parse: !0,
            element: "nav",
            classPrefix: "menu",
            submenuTrigger: "click",
            fileExtension: "html",
            mouseleave: !1
        },
        transitions: {
            "fold-right": {
                from: {
                    duration: .8,
                    x: "-100%",
                    transformOrigin: "right top",
                    rotationY: -70,
                    autoAlpha: 0
                },
                to: {
                    duration: .8,
                    x: "0%",
                    transformOrigin: "right top",
                    rotationY: 0,
                    autoAlpha: 1
                },
                out: {
                    duration: .8,
                    x: "100%",
                    transformOrigin: "right top",
                    rotationY: 0,
                    autoAlpha: 1
                }
            },
            "fold-left": {
                from: {
                    duration: .8,
                    x: "100%",
                    transformOrigin: "0% top",
                    rotationY: 70,
                    autoAlpha: 0
                },
                to: {
                    duration: .8,
                    x: "0%",
                    transformOrigin: "0% top",
                    rotationY: 0,
                    autoAlpha: 1
                },
                out: {
                    duration: .8,
                    x: "-100%",
                    transformOrigin: "0% top",
                    rotationY: 0,
                    autoAlpha: 1
                }
            },
            "fold-up": {
                from: {
                    duration: .8,
                    y: "100%",
                    transformOrigin: "left top",
                    rotationX: "-90deg",
                    autoAlpha: 0
                },
                to: {
                    duration: .8,
                    y: "0%",
                    transformOrigin: "left top",
                    rotationX: 0,
                    autoAlpha: 1
                },
                out: {
                    duration: .8,
                    y: "-100%",
                    transformOrigin: "left top",
                    rotationX: 0,
                    autoAlpha: 1
                }
            },
            "fold-down": {
                from: {
                    duration: .8,
                    y: "-100%",
                    transformOrigin: "0% bottom",
                    rotationX: 90,
                    autoAlpha: 0
                },
                to: {
                    duration: .8,
                    y: "0%",
                    transformOrigin: "0% bottom",
                    rotationX: 0,
                    autoAlpha: 1
                },
                out: {
                    duration: .8,
                    y: "100%",
                    transformOrigin: "0% bottom",
                    rotationX: 0,
                    autoAlpha: 1
                }
            },
            none: {
                from: {
                    duration: .001,
                    autoAlpha: 0
                },
                to: {
                    duration: .001,
                    autoAlpha: 1
                },
                out: {
                    duration: .001,
                    autoAlpha: 0
                }
            },
            fade: {
                from: {
                    duration: .4,
                    autoAlpha: 0
                },
                to: {
                    duration: .4,
                    autoAlpha: 1
                },
                out: {
                    duration: .4,
                    autoAlpha: 1
                }
            },
            scale: {
                from: {
                    scale: 1.25,
                    transformOrigin: "center",
                    autoAlpha: 0
                },
                to: {
                    scale: 1,
                    transformOrigin: "center",
                    autoAlpha: 1
                },
                out: {
                    scale: .65,
                    transformOrigin: "center",
                    autoAlpha: 0
                }
            },
            slide: {
                from: {
                    x: "100%"
                },
                to: {
                    x: "0%"
                },
                out: {
                    x: "-100%"
                }
            },
            right: {
                from: {
                    x: "-100%"
                },
                to: {
                    x: "0%"
                },
                out: {
                    x: "100%"
                }
            },
            left: {
                from: {
                    x: "100%"
                },
                to: {
                    x: "0%"
                },
                out: {
                    x: "-100%"
                }
            },
            up: {
                from: {
                    y: "100%"
                },
                to: {
                    y: "0%"
                },
                out: {
                    y: "-100%"
                }
            },
            down: {
                from: {
                    y: "-100%"
                },
                to: {
                    y: "0%"
                },
                out: {
                    y: "100%"
                }
            },
            "left-scale": {
                from: {
                    x: "0%",
                    scale: .85,
                    autoAlpha: 0
                },
                to: {
                    duration: .7,
                    x: "0%",
                    scale: 1
                },
                out: {
                    x: "-100%",
                    scale: 1,
                    autoAlpha: 1
                }
            },
            "right-scale": {
                from: {
                    duration: .5,
                    x: "0%",
                    scale: .85,
                    autoAlpha: 0
                },
                to: {
                    duration: .5,
                    x: "0%",
                    scale: 1,
                    delay: .2
                },
                out: {
                    duration: .5,
                    x: "100%",
                    scale: 1,
                    autoAlpha: 1
                }
            },
            "down-scale": {
                from: {
                    duration: .5,
                    y: "0%",
                    scale: .85,
                    autoAlpha: 0
                },
                to: {
                    duration: .5,
                    y: "0%",
                    scale: 1,
                    delay: .2
                },
                out: {
                    duration: .5,
                    y: "100%",
                    scale: 1,
                    autoAlpha: 1
                }
            },
            "up-scale": {
                from: {
                    duration: .5,
                    y: "0%",
                    scale: .85,
                    autoAlpha: 0
                },
                to: {
                    duration: .5,
                    y: "0%",
                    scale: 1,
                    delay: .2
                },
                out: {
                    duration: .5,
                    y: "-100%",
                    scale: 1,
                    autoAlpha: 1
                }
            },
            "scale-down": {
                from: {
                    duration: .5,
                    y: "-100%",
                    scale: 1,
                    autoAlpha: 1
                },
                to: {
                    duration: .5,
                    y: "0%",
                    scale: 1,
                    delay: .2
                },
                out: {
                    duration: .5,
                    y: "0%",
                    scale: .85,
                    autoAlpha: 0
                }
            },
            "scale-up": {
                from: {
                    duration: .5,
                    y: "100%",
                    scale: 1,
                    autoAlpha: 1
                },
                to: {
                    duration: .5,
                    y: "0%",
                    scale: 1,
                    delay: .2
                },
                out: {
                    duration: .5,
                    y: "0%",
                    scale: .85,
                    autoAlpha: 0
                }
            },
            "scale-left": {
                from: {
                    duration: .5,
                    x: "100%",
                    scale: 1,
                    autoAlpha: 1
                },
                to: {
                    duration: .5,
                    x: "0%",
                    scale: 1,
                    delay: .2
                },
                out: {
                    duration: .5,
                    x: "0%",
                    scale: .85,
                    autoAlpha: 0
                }
            },
            "scale-right": {
                from: {
                    duration: .5,
                    x: "-100%",
                    scale: 1,
                    autoAlpha: 1
                },
                to: {
                    duration: .5,
                    x: "0%",
                    scale: 1,
                    delay: .2
                },
                out: {
                    duration: .5,
                    x: "0%",
                    scale: .85,
                    autoAlpha: 0
                }
            }
        },
        content: {
            keyboard: "all",
            selector: ".content",
            transition: "up",
            skin: !1,
            error404: "404.html",
            mouseWheel: !0,
            inactivity: !1,
            gestures: !0,
            ui: "text"
        },
        project: {
            id: "PROJECT_PAGE",
            element: "main",
            parent: ".content",
            itemsPerPage: 1,
            pageClass: ".page",
            itemClass: ".page-content",
            active: !0,
            transition: "left",
            views: "normal contain",
            hiddenPages: !0,
            buttonSectionIcon: '<svg width="24" height="24" viewBox="0 0 24 24"><path d="M4 11h5V5H4v6zm0 7h5v-6H4v6zm6 0h5v-6h-5v6zm6 0h5v-6h-5v6zm-6-7h5V5h-5v6zm6-6v6h5V5h-5z"/></svg>',
            templateCustom: '<div class="page page-{{index}} {{skin && "page-skin-"}}{{skin}} {{hide &&"page-hide"}}"> {{content}} {{caption}}</div>',
            template: '<div class="page page-{{index}} {{skin && "page-skin-"}}{{skin}} {{hide &&"page-hide"}}"><div class="page-content page-content-{{type}} load" self="{{self}}">{{content}}</div>{{caption}}</div>',
            templateFit: '<div class="page page-{{index}} {{skin && "page-skin-"}}{{skin}} {{hide &&"page-hide"}}"><div class="page-content page-content-{{type}} photo-{{fit}} lazyload" background="{{src}}" self="{{self}}" fit="{{fit}}"></div>{{caption}}</div>'
        },
        thumbnails: {
            wrapper: '<div class="page thumbs-{{index}}"><div class="page-content"> {{content}} </div></div>',
            id: "THUMBS_PAGE",
            element: ".thumbs",
            parent: ".content",
            buttonViews: !1,
            active: !1,
            transition: "left",
            route: "thumbnails",
            trigger: ".thumb-content",
            buttonSectionIcon: '<svg width="24" height="24" viewBox="0 0 24 24"><path d="M4 18h3V5H4v13zM18 5v13h3V5h-3zM8 18h9V5H8v13z"/><path d="M0 0h24v24H0z" fill="none"/> </svg>',
            templateThumb: '<div class="thumb thumb-{{index}} photo {{skin && \'thumb-skin-\'}}{{skin}}"><div class="thumb-content"><div class="thumb-photo lazyload" background="{{thumbSrc}}" ></div><div class="thumb-caption">{{thumbCaption}}</div></div></div>',
            templateThumbText: '<div class="thumb thumb-{{index}} text {{skin && \'thumb-skin-\'}}{{skin}}"><div class="thumb-content">{{thumbCaption}}</div></div>',
            fit: "contain",
            size: "270x180",
            grid: "4x2"
        },
        onReady: "onFolioReady"
    }
}(document, window.FOLIO = window.FOLIO || {}),
function(t, e, i, n, s) {
    "use strict";
    e.config = {
        sidebar: {},
        menu: {},
        project: {},
        thumbnails: {},
        transitions: {}
    },
    e.settings = {},
    e.component = {},
    e.section = {};
    var r, o, a = e.Event, l = e.Utility;
    function u(i) {
        var n = this;
        e.settings = l.deepExtend({}, e.DEFAULTS, l.deepExtend({}, e.config, i)),
        !0 === e.settings.thumbnails && (e.settings.thumbnails = e.DEFAULTS.thumbnails),
        !0 === e.settings.sidebar && (e.settings.sidebar = e.DEFAULTS.sidebar),
        r = e.settings,
        window.lazySizesConfig = {
            clearAttr: !0
        },
        this.meta(),
        o = r.key;
        var s = r.content.keyboard;
        return /all|default/.test(s) && this.keyboard.enable(),
        this.enviroment(),
        r.content.inactivity && this.inactivity.enable(),
        this.router(),
        e.subscribe(a.READY, function() {
            e.Utility.renderEmail(e.settings.email);
            var i = t.querySelectorAll("a[onclick]");
            l.forEach(i, function(t, e) {
                t.addEventListener("click", function(t) {
                    t.preventDefault()
                }, !1)
            }),
            /all|custom/.test(s) && n.keyboard.userDefined(),
            r.content.mouseWheel && n.mouseWheel();
            var o = r.content.gestures;
            o && (!0 === o || "auto" === o && l.getEnviroment().touchDevice()) && n.gesture(),
            e.docs = function(t) {
                var e = t || "";
                window.location = "http://docs.foliodot.com/" + e
            }
        }),
        this
    }
    var h, c = u.prototype;
    c.getSettings = function() {
        return e.settings
    }
    ,
    c.router = function() {
        e.router = new Grapnel
    }
    ,
    c.meta = function() {
        var i = t.head;
        i.querySelectorAll('meta[name="viewport"]').length || i.insertAdjacentHTML("afterbegin", e.settings.meta)
    }
    ,
    c.enviroment = function() {
        var e = l.getEnviroment()
          , i = t.documentElement;
        e.mobile() && l.addClass(i, "is-mobile"),
        e.tablet() && l.addClass(i, "is-tablet"),
        e.desktop() && l.addClass(i, "is-desktop"),
        e.touchDevice() && l.addClass(i, "is-touch-device")
    }
    ,
    c.enquireSetup = function() {
        var n = t.querySelector("html")
          , s = e.settings.mediaQueries
          , r = n.classList;
        for (var o in r.replace = function(t) {
            for (var e = 0, i = this.length, n = this.toString().split(" "), s = t.split(" "), r = 0, o = s.length; e < i; e++)
                this.remove(n[e]);
            for (; r < o; r++)
                this.add(s[r])
        }
        ,
        r.insert = function(t, e) {
            if (r.contains(t)) {
                if (r.item(e) === t)
                    return;
                r.remove(t)
            }
            var i = r.toString().split(" ");
            i.splice(e, 0, t);
            var n = i.join(" ");
            r.replace(n)
        }
        ,
        s)
            if (s.hasOwnProperty(o)) {
                var a = s[o].split(/(\s*&&\s*)/);
                a.splice(1, 1),
                i.register(a[0], l(o, a[1]))
            }
        function l(t, i) {
            return {
                match: function() {
                    /sm/.test(t) ? r.insert(t, 0) : /md/.test(t) ? r.insert(t, 1) : /lg/.test(t) ? r.insert(t, 2) : /xl/.test(t) ? r.insert(t, 3) : n.classList.add(t),
                    e.publish(e.Event.MQ, {
                        key: t,
                        transition: i
                    })
                },
                unmatch: function() {
                    n.classList.remove(t)
                }
            }
        }
    }
    ,
    c.gesture = function() {
        var i, n = t.createElement("div"), s = t.querySelector(".content");
        t.querySelector(".page-current"),
        Draggable.create(n, {
            type: "x",
            lockAxis: !0,
            trigger: s,
            cursor: "default",
            allowNativeTouchScrolling: !0,
            clickableTest: function(t) {
                return /^(?:input|textarea|button|select)$/i.test(t.nodeName.toLowerCase())
            },
            onClick: function() {},
            onPress: function() {
                l.addClass(t.body, "on-press")
            },
            onRelease: function() {
                l.removeClass(t.body, "on-press")
            },
            onDragStart: function(n) {
                i = this.getDirection(),
                "y" === this.lockedAxis && (l.addClass(t.body, "on-drag"),
                "left" === i ? e.next() : "right" === i && e.prev())
            },
            onDragEnd: function() {
                s.style.cursor = "default",
                l.removeClass(t.body, "on-press"),
                l.removeClass(t.body, "on-drag")
            }
        })
    }
    ,
    c.inactivity = {
        enable: function() {
            var i, n, s, o = null, u = !1, h = "on-inactive", c = r.content.inactivity, p = l.isNumeric(c) ? 1e3 * c : 3e3;
            window.addEventListener("mousemove", (i = function(i) {
                u && (e.publish(a.MOUSE_INACTIVITY, !1),
                l.removeClass(t.body, h),
                u = !1),
                null !== o && clearTimeout(o),
                o = setTimeout(function() {
                    u || (e.publish(a.MOUSE_INACTIVITY, !0),
                    l.addClass(t.body, h)),
                    u = !0
                }, p)
            }
            ,
            n = 1e3,
            s = !0,
            function(t) {
                s && (s = !1,
                setTimeout(function() {
                    s = !0
                }, n),
                i(t))
            }
            ))
        }
    },
    c.keyboard = {
        enable: function() {
            e.keyboard = n,
            e.isSinglePage || (n.bind(o.next, function() {
                e.publish(a.NEXT_PAGE, "next")
            }),
            n.bind(o.prev, function() {
                e.publish(a.PREV_PAGE, "prev")
            }),
            n.bind(o.first, function() {
                e.publish(a.FIRST_PAGE, "first")
            }),
            n.bind(o.last, function() {
                e.publish(a.LAST_PAGE, "last")
            }),
            n.bind(o.close, function() {
                e.publish(a.PAGE_CLOSE, "close"),
                e.publish(a.SECTION_TOGGLE, "section")
            })),
            n.bind(o.sidebar, function() {
                e.publish(a.SIDEBAR, "sidebar")
            }),
            n.bind(o.views, function() {
                e.publish(a.PAGE_VIEW, "view")
            }),
            n.bind("h", function() {
                t.body.classList.toggle("helper")
            })
        },
        userDefined: function() {
            var i = t.querySelectorAll("kbd")
              , s = [];
            l.forEach(o, function(t, e) {
                s.push(t)
            }),
            l.forEach(i, function(t, i) {
                var r = t
                  , o = r.innerHTML
                  , a = r.parentNode.getAttribute("href");
                -1 === s.indexOf(o) ? (2 === o.length && (o = o[0] + " " + o[1]),
                3 === o.length && (o = o[0] + " " + o[1] + " " + o[2]),
                r.parentNode.hasAttribute("onclick") ? n.bind(o, function() {
                    r.parentNode.click()
                }) : a && (/(\#)/.test(a) ? "#" !== a && n.bind(o, function() {
                    e.router.fragment.set(a)
                }) : n.bind(o, function() {
                    window.location = a
                }))) : "#" === a && /toggle/.test(r.parentNode.getAttribute("onclick")) && n.bind(o, function() {
                    e.publish(e.Event.SIDEBAR, "sidebar")
                })
            })
        }
    },
    c.mouseWheel = function() {
        var i, n, s, r, o, a, l, u = t.querySelector(".content"), h = new Lethargy;
        function c() {
            s = !1,
            n = e.section.project().getOptions().active ? ".project" : ".thumbs",
            i = t.querySelector(n + " .page-current .page-content")
        }
        function p(t, i) {
            i > 0 && a <= r ? (e.next(),
            s = !0) : i < 0 && a >= o && (e.prev(),
            s = !0)
        }
        c(),
        addWheelListener(u, function(t) {
            r = i.parentNode.offsetHeight,
            o = i.offsetHeight,
            l = i.getBoundingClientRect(),
            a = Math.round(l.bottom > l.height ? l.height : l.bottom);
            var e = h.check(t);
            o > r ? (t.stopPropagation(),
            (a <= r || a >= o) && (s || !1 === e || p(t, t.deltaY))) : s || !1 === e || p(t, t.deltaY)
        }),
        e.subscribe(e.Event.PAGE_TRANSITION_END, c),
        e.subscribe(e.Event.PAGE_TRANSITION, function(t, e) {
            "edgeEnd" === e && (s = !1)
        })
    }
    ,
    c.page = {},
    c.assets = {},
    c.publish = {},
    e.core = function(t) {
        return h = h || new u(t)
    }
}(document, window.FOLIO = window.FOLIO || {}, window.enquire, window.Mousetrap),
function(t, e, i, n) {
    "use strict";
    var s, r = e.Utility, o = "background";
    function a(t) {
        t.hasAttribute(o) && r.addClass(t, "lazyload");
        var e = t.querySelectorAll("[" + o + "]");
        e && r.forEach(e, function(t, e) {
            r.addClass(t, "lazyload")
        })
    }
    function l(t, e) {
        return "hash" === e ? t.getAttribute(e) || t.getAttribute("data-" + e) || t.getAttribute("id") : t.getAttribute(e) || t.getAttribute("data-" + e)
    }
    function u(t) {
        if ("" === t.innerHTML)
            return "";
        var e = t.getAttribute("class");
        return t.setAttribute("class", "page-caption " + (e || "")),
        t.outerHTML
    }
    function h(e) {
        if (!e)
            return "";
        var i = t.createElement("div");
        return i.innerHTML = e,
        u(i)
    }
    function c(t, e) {
        return t.getAttribute("alt") || l(t, "hash") || e.toString()
    }
    function p(t) {
        return t.replace(/(.+)\.(gif|png|jpg)/i, "$1_thumb.$2")
    }
    function f(t) {
        return t.getAttribute("data-src") || t.getAttribute("src")
    }
    e.Parser = function(n) {
        return void 0 === s && (s = new function() {
            e.Utility.template;
            var n = 1
              , s = "page-content"
              , d = e.settings;
            e.content = [];
            for (var g = t.querySelector(e.settings.project.element).children, m = g.length, _ = 0; _ < m; _++) {
                var v = g[_]
                  , y = {}
                  , b = v.nextElementSibling
                  , w = b && r.hasClass(b, "caption");
                if (!r.hasClass(v, "caption") && !v.hasAttribute("exclude")) {
                    if (a(v),
                    "IMG" == v.tagName) {
                        if (y.type = "photo",
                        r.addClass(v, "lazyload"),
                        y.src = f(v),
                        r.setAttributes(v, {
                            width: "",
                            height: "",
                            "data-src": y.src
                        }),
                        v.removeAttribute("src"),
                        /staticflickr/i.test(y.src) ? y.thumbSrc = y.src.replace(/(\_[A-Z].jpg|\.jpg)/i, "_n.jpg") : y.thumbSrc = p(y.src),
                        y.thumbCaption = c(v, n),
                        w) {
                            var x = b.querySelector(".thumb-caption");
                            y.thumbCaption = x ? x.innerHTML : b.innerText
                        }
                        y.caption = w ? u(b) : h(v.getAttribute("alt")),
                        y.self = l(v, "self") || null,
                        y.self && v.removeAttribute("self"),
                        y.content = v.outerHTML
                    } else if ("A" === v.tagName && /flickr.com\/photos\//i.test(v.getAttribute("href"))) {
                        y.type = "photo flickr",
                        y.service = "flickr",
                        v.removeAttribute("data-flickr-embed");
                        var T = v.querySelector("img");
                        if (y.src = f(T),
                        r.setAttributes(T, {
                            width: "",
                            height: "",
                            src: "",
                            "data-src": y.src
                        }),
                        r.addClass(T, i && i.cfg.lazyClass),
                        y.thumbSrc = y.src.replace(/(\_[A-Z].jpg|\.jpg)/i, "_n.jpg"),
                        w)
                            y.captpion = u(b);
                        else {
                            var P = v.getAttribute("title")
                              , S = P && P.replace(", on Flickr", "") || T.getAttribute("alt");
                            S && (y.caption = h(S))
                        }
                        w && (x = b.querySelector(".thumb-caption"),
                        y.thumbCaption = x ? x.innerHTML : b.innerText),
                        y.self = l(v, "self") || null,
                        y.self && v.removeAttribute("self"),
                        y.content = v.outerHTML
                    } else if ("A" === v.tagName && v.firstElementChild && "IMG" === v.firstElementChild.nodeName)
                        y.type = "photo link",
                        y.service = "local",
                        T = v.querySelector("img"),
                        y.src = f(T),
                        r.setAttributes(T, {
                            "data-src": y.src,
                            src: ""
                        }),
                        r.addClass(T, i && i.cfg.lazyClass),
                        y.thumbSrc = p(y.src),
                        y.caption = r.hasClass(b, "caption") ? u(b) : h(T.getAttribute("alt")),
                        y.thumbCaption = c(v, n),
                        w && (x = b.querySelector(".thumb-caption"),
                        y.thumbCaption = x ? x.innerHTML : b.innerText),
                        y.self = l(v, "self") || null,
                        y.self && v.removeAttribute("self"),
                        y.content = v.outerHTML;
                    else if ("IFRAME" === v.tagName) {
                        if (y.src = v.getAttribute("src"),
                        /vimeo|youtu/.test(y.src)) {
                            y.type = "video";
                            var C = /YOUTU/i.test(y.src) ? "youtube" : /VIMEO/i.test(y.src) ? "vimeo" : null;
                            y.caption = "P" === b.tagName ? b.outerHTML : "",
                            y.thumbCaption = "video...",
                            "youtube" === C ? (y.type = "video youtube",
                            y.thumbSrc = r.parseYouTube(y.src)) : (y.type = "video vimeo",
                            y.thumbSrc = "loading.gif",
                            r.parseVimeo(y.src, n)),
                            y.content = v.outerHTML
                        }
                    } else if (!r.hasClass(v, "caption")) {
                        y.type = "custom";
                        var A = 0;
                        if ("FIGURE" === v.tagName || "ARTICLE" === v.tagName || v.getAttribute("layout")) {
                            var O = v.querySelectorAll('a[href^="https://www.flickr.com/photos/"]');
                            O && r.forEach(O, function(t, e) {
                                t.removeAttribute("data-flickr-embed"),
                                t.nextElementSibling && "SCRIPT" === t.nextElementSibling.tagName && t.parentNode.removeChild(t.nextElementSibling);
                                var i = l(t, "fit");
                                if (i) {
                                    for (var n = t, s = n.parentNode; n.firstChild; )
                                        n.firstChild.setAttribute("fit", i),
                                        s.insertBefore(n.firstChild, n);
                                    s.removeChild(n)
                                }
                            });
                            var E = v.querySelectorAll("img");
                            for (y.thumbSrc = []; A < E.length; A++) {
                                var k = l(T = E[A], "self")
                                  , L = l(T, "fit")
                                  , R = l(T, "class")
                                  , M = f(T);
                                if (/contain|cover/.test(L)) {
                                    var D = t.createElement("div");
                                    k && D.setAttribute("self", k),
                                    y.fit = /cover/.test(L) ? "cover" : "contain",
                                    r.wrap(D, T),
                                    R && D.setAttribute("class", R),
                                    r.addClass(D, "item-" + y.fit),
                                    r.addClass(D, "item-" + y.fit + "-" + (A + 1)),
                                    r.addClass(D, i && i.cfg.lazyClass),
                                    D.setAttribute(o, M),
                                    D.setAttribute("fit", L),
                                    D.style.zIndex ="99999",
                                    xyz = document.querySelectorAll("#nav");
                                    xyz.appendChild("D"),
                                    D.removeChild(T)
                                } else {
                                    var I = t.createElement("div")
                                      , N = t.createElement("div");
                                    T.removeAttribute("self"),
                                    r.addClass(T, i && i.cfg.lazyClass),
                                    k && I.setAttribute("self", k),
                                    r.addClass(N, "img-wrapper"),
                                    I.setAttribute("layout", "column center-center"),
                                    r.wrap(N, T),
                                    r.wrap(I, N)
                                }
                                /staticflickr/i.test(M) ? y.thumbSrc.push(M.replace(/(\_[A-Z].jpg|\.jpg)/i, "_n.jpg")) : y.thumbSrc.push(p(M))
                            }
                        }
                        if (r.hasClass(v, s) ? y.content = v.innerHTML : (r.addClass(v, s),
                        r.addClass(v, s + "-" + v.tagName.toLowerCase()),
                        r.addClass(v, s + "-custom"),
                        y.fit && r.addClass(v, "on-" + y.fit),
                        A && r.addClass(v, "photo-" + A + "ptych"),
                        y.content = v.outerHTML),
                        w) {
                            y.caption = u(b);
                            var z = b.querySelector(".thumb-caption");
                            y.thumbCaption = z && z.innerHTML || b.innerText
                        } else {
                            var F = v.querySelector("h1, h2, h3, h4, p");
                            if (null !== F) {
                                var B = F.innerText || F.textContent;
                                y.thumbCaption = B.length > 50 ? B.substr(0, 50) + "..." : B
                            } else
                                y.thumbCaption = (l(v, "hash") || n).toString()
                        }
                    }
                    if (0 !== Object.keys(y).length && "SCRIPT" !== v.tagName) {
                        y.hash = (l(v, "hash") || n).toString(),
                        !1 !== d.project.hiddenPages && v.hasAttribute("hide") && (y.hide = !0),
                        y.fit || (L = l(v, "fit")) && (y.fit = L),
                        y.transition = l(v, "transition") || d.project.transition;
                        var X = l(v, "skin") || d.content.skin;
                        if (X && (y.skin = X),
                        y.thumbCaption && !/<[\s\S][*|a-z][\s\S]/gm.test(y.thumbCaption) && (y.thumbCaption = y.thumbCaption.length > 48 ? y.thumbCaption.substr(0, 48) + "..." : y.thumbCaption),
                        y.thumbSrc = y.thumbSrc || [],
                        y.thumbSrc) {
                            "A" === v.tagName && v.hasAttribute(o) && y.thumbSrc.push(p(v.getAttribute(o)));
                            var Y = v.querySelectorAll("[" + o + "]");
                            Y && r.forEach(Y, function(t, e) {
                                var i = p(t.getAttribute(o));
                                -1 == y.thumbSrc.indexOf(i) && y.thumbSrc.push(i)
                            })
                        }
                        e.content.push(y),
                        n++
                    }
                }
            }
        }
        (n)),
        s
    }
}(document, window.FOLIO = window.FOLIO || {}, window.lazySizes),
function(t, e, i, n) {
    "use strict";
    var s, r = function(n) {
        var s = e.settings.content.ui
          , r = e.settings.thumbnails
          , o = e.Utility
          , a = o.tmpl
          , l = e.content
          , u = {
            currentPage: n,
            pageClass: ".thumbs",
            itemClass: ".thumb",
            singelPageID: "all-thumbs",
            onPageTransitionStart: function() {
                e.publish(e.Event.PAGE_TRANSITION, "start")
            },
            onPageTransitionEnd: function() {
                e.publish(e.Event.PAGE_TRANSITION_END, "end")
            },
            onInit: function() {}
        };
        "icon" === s && (r.buttonNext || (u.buttonNext = "icon"),
        r.buttonPrevious || (u.buttonPrevious = "icon"),
        r.buttonSection || (u.buttonSection = "icon")),
        o.extend(r, u);
        var h = r.grid.split("x");
        r.cols = h.length > 1 ? +h[0] : 4,
        r.rows = h.length > 1 ? +h[1] : 3;
        var c = 0
          , p = !1;
        if (!p)
            for (var f = 0; f < l.length; f++)
                l[f].hide || c++;
        r.itemsLength = p ? l.length : c,
        r.itemsPerPage = r.rows * r.cols || r.itemsLength,
        r.totalPages = ~~(r.itemsLength / r.itemsPerPage) + (r.itemsLength % r.itemsPerPage > 0 ? 1 : 0),
        r.canHidePages = r.totalPages > 2;
        var d = t.querySelector(r.element)
          , g = ""
          , m = r.itemsPerPage
          , _ = 1;
        if (!d) {
            var v = ""
              , y = 0;
            o.forEach(l, function(t, e) {
                var i, n = t;
                !p && n.hide || (Array.isArray(n.thumbSrc) && 0 == n.thumbSrc.length ? v += a(r.templateThumbText, n) : v += a(r.templateThumb, n),
                y % m != m - 1 && y !== r.itemsLength - 1 || (i = v,
                g += a(r.wrapper, {
                    index: _,
                    content: i
                }),
                _++,
                v = " "),
                y++)
            }),
            d = t.createElement("div"),
            o.addClass(d, "thumbs"),
            d.innerHTML = g,
            t.querySelector(e.settings.content.selector).appendChild(d)
        }
        var b = new e.component.pages(r,r.element);
        function w(t) {
            t.preventDefault(),
            t.stopPropagation();
            var n, s, a = t.target;
            o.getParents(a, r.trigger) && ((n = o.getParents(a, ".thumb")[0]) && (s = p ? b.getItemIndex(n) : /\d+/gi.exec(n.getAttribute("class"))[0] - 1,
            i.delayedCall(.05, function() {
                e.publish("onThumbClick", s)
            })))
        }
        return e.subscribe(e.Event.SECTION_DISPLAY, function(t, e) {
            var i = e === r.id ? "add" : "remove";
            b.element[i + "EventListener"]("click", w)
        }),
        b
    };
    e.section.thumbs = function(t) {
        return void 0 === s && (s = new r(t)),
        s
    }
}(document, window.FOLIO = window.FOLIO || {}, window.TweenMax),
function(t, e, i, n) {
    "use strict";
    var s, r, o, a, l, u = e.Utility, h = {
        normal: "1:1",
        contain: "fit",
        cover: "cover"
    }, c = function(a) {
        var l = u.tmpl
          , c = e.settings.content.ui
          , p = e.settings.project
          , f = this;
        this.VIEWS = p.views.replace(/\s+/g, " ").trim().split(" "),
        this.currentView = this.VIEWS[0];
        var d = {
            currentPage: a,
            onPageTransitionStart: function() {
                var t = s.options.nextPage;
                e.publish(e.Event.PAGE_TRANSITION_START, ["start", t])
            },
            onPageTransitionEnd: function() {
                e.publish(e.Event.PAGE_TRANSITION_END, {
                    section: "project",
                    current: this.options.currentPage,
                    hidden: this.isCurrentPageHidden()
                }),
                y(),
                t = e.content[this.options.currentPage],
                r !== n && (/photo/g.test(t.type) && !/contain|cover/g.test(t.fit) ? r.style.display = "block" : r.style.display = "none"),
                f.setPageBasedOnView(this);
                var t
            },
            onInit: function() {
                (r = this.viewsButton) && (o = r.querySelector("span"));
                var e = !0
                  , n = function(t) {
                    var r = t.target
                      , o = r.width
                      , a = r.height
                      , l = o > a ? "landscape" : "portrait";
                    u.addClass(r, l);
                    var h = u.getParents(r, ".load");
                    h && (u.forEach(h, function(t, e) {
                        s.timeline.isActive() || i.isTweening(g) ? _.push(t) : (u.removeClass(t, "load"),
                        t.removeEventListener("load", n))
                    }),
                    e && (y(),
                    e = !1))
                };
                t.addEventListener("lazybeforeunveil", function(t) {
                    var e = t.target;
                    e.addEventListener("load", n);
                    var i = t.target.getAttribute("background");
                    if (i) {
                        var s = i.split(",")
                          , r = s.length
                          , o = " "
                          , a = "";
                        r > 1 ? (u.forEach(s, function(t, e) {
                            o += 'url("' + t + '"),'
                        }),
                        a = r <= 2 ? "diptych" : "triptych",
                        o = o.slice(0, -1)) : o = "url(" + i + ")",
                        a && u.addClass(e, a),
                        e.style.backgroundImage = o,
                        e.removeAttribute("background"),
                        t.preventDefault()
                    }
                }),
                f.VIEWS.length > 1 && o && (o.innerText = h[f.getNextView()])
            }
        };
        "icon" === c && (p.buttonNext || (d.buttonNext = "icon"),
        p.buttonPrevious || (d.buttonPrevious = "icon"),
        p.buttonSection || (d.buttonSection = "icon"),
        p.buttonClose || (d.buttonClose = "icon")),
        1 === this.VIEWS.length && (d.buttonViews = !1),
        u.extend(!0, p, d);
        var g = t.querySelector(p.element)
          , m = ""
          , _ = [];
        var v = p.templateCustom.replace("page-caption", "page-caption-none");
        function y() {
            u.forEach(_, function(t, e) {
                u.removeClass(t, "load")
            }),
            _ = []
        }
        return u.forEach(e.content, function(t, e) {
            if (t.index = e + 1,
            "custom" === t.type)
                t.caption ? m += l(p.templateCustom, t) : (t.caption = "",
                m += l(v, t));
            else {
                var i = /cover|contain/g.test(t.fit) ? "Fit" : "";
                m += l(p["template" + i], t)
            }
        }),
        g.innerHTML = m,
        u.addClass(g, "project"),
        t.querySelector(p.parent).appendChild(g),
        s = this.project = new e.component.pages(p,p.element),
        f.view(f.currentView),
        f.setPageBasedOnView(),
        e.subscribe(e.Event.SECTION_DISPLAY, function(t, e) {
            p.id,
            y()
        }),
        e.subscribe(e.Event.PAGE_VIEW, this.viewHandler.bind(this)),
        s
    }, p = c.prototype;
    p.loadImages = function(t) {}
    ,
    p.view = function(e, i) {
        var n = this.currentView
          , s = "on-photo-fit-"
          , r = t.body;
        u.removeClass(r, s + n),
        u.addClass(r, s + e),
        this.currentView = e
    }
    ,
    p.viewHandler = function() {
        "custom" !== e.content[this.project.options.currentPage].type && this.next()
    }
    ,
    p.next = function() {
        var t = this.getNextView();
        this.view(t),
        this.setPageBasedOnView(),
        o.innerText = h[a]
    }
    ,
    p.prev = function() {}
    ,
    p.toogleView = function() {}
    ,
    p.getNextView = function() {
        var t = this
          , e = t.VIEWS
          , i = t.VIEWS.length
          , n = t.VIEWS.indexOf(t.currentView)
          , s = e[n + 1 > i - 1 ? 0 : n + 1];
        return a = e[t.VIEWS.indexOf(s) + 1 > i - 1 ? 0 : t.VIEWS.indexOf(s) + 1],
        s
    }
    ,
    p.setPageBasedOnView = function(t) {
        var i, n = [], s = (t = t || this.project).options, r = t.getPage("next"), o = t.getPage("prev"), a = t.getPage("current"), l = (i = s.prevPage,
        Math.max(0, Math.min(i, s.totalPages - 1))), h = "photo-enlarged", c = /contain|cover/.test(this.currentView);
        if (o && n.push(o),
        a && n.push(a),
        r && n.push(r),
        c)
            u.forEach(n, function(t, i) {
                var n = t.querySelector("." + h)
                  , s = t.querySelector(".page-content-photo img");
                s && !n && s.insertAdjacentHTML("afterend", '<div class="' + h + '" style="background-image: url(' + e.content[i + l].src + ')"></div>')
            });
        else {
            var p = t.element.querySelectorAll("." + h);
            u.forEach(p, function(t, e) {
                t.parentNode.removeChild(t)
            })
        }
    }
    ,
    e.section.project = function(t) {
        return l === n && (l = new c(t)),
        l
    }
}(document, window.FOLIO = window.FOLIO || {}, window.TweenMax),
function(t, e, i, n, s, r) {
    "use strict";
    var o, a, l, u, h, c, p, f = t.body, d = t.getElementsByTagName("html")[0], g = !1, m = ["from", "to", "out"], _ = "on-page-hide", v = e.Utility, y = 0, b = !1, w = {
        enable: !0,
        id: "name",
        itemClass: ".thumb",
        itemsPerPage: 12,
        grid: "4x3",
        itemsLength: 1,
        direction: "forward",
        currentClass: "",
        currentClassContentType: "",
        currentSkinClass: "",
        loop: !1,
        animate: !0,
        active: !1,
        tween: {},
        duration: {},
        onInit: function() {},
        onDestroy: function() {},
        onPageTransitionStart: function() {},
        onPageTransitionEnd: function() {},
        pageClass: ".thumbs",
        singelPageID: "all-thumbs",
        initPage: 1,
        firstPage: 0,
        nextPage: 1,
        prevPage: 0,
        exPage: 0,
        currentPage: 0,
        totalPages: 1,
        canHidePages: !0,
        status: {
            initialized: !1,
            paused: !1,
            playing: !1,
            stopped: !0,
            active: !1,
            uiVisible: !0
        },
        buttonSection: '<div class="ui ui-button ui-button-section" title="Toggle section (Esc)"><span>{{label}}</span></div>',
        buttonViews: '<div class="ui ui-button ui-button-views" title="Toggle photo view (v)"><span>{{label}}</span></div>',
        buttonViewsIcon: '<svg width="24" height="24" viewBox="0 0 24 24">                                        <path d="M12.01 5.5L10 8h4l-1.99-2.5zM18 10v4l2.5-1.99L18 10zM6 10l-2.5 2.01L6 14v-4zm8 6h-4l2.01 2.5L14 16zm7-13H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16.01H3V4.99h18v14.02z"/>                                         </svg>',
        buttonPrevious: '<div class="ui ui-button ui-button-prev" title="Previous page (&leftarrow;)"><span>{{label}}</span></div>',
        buttonPreviousIcon: '<svg width="24" height="24" viewBox="0 0 24 24"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>',
        buttonNext: '<div class="ui ui-button ui-button-next" title="Next page (&rightarrow;)"><span>{{label}}</span></div>',
        buttonNextIcon: '<svg width="24" height="24" viewBox="0 0 24 24"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>',
        buttonClose: '<div class="ui-button ui-button-close" title="Close page (Esc)"><span>{{label}}</span></div>',
        buttonCloseIcon: '<svg height="24" viewBox="0 0 24 24" width="24">                                        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>                                         <path d="M0 0h24v24H0z" fill="none"/>                                    </svg>',
        pagination: '<ul class="ui ui-pagination horizontal">@@<li class="{{hide}}"><a><span class="dot"></span></a></li>@@</ul>',
        enumeration: '<div class="ui ui-enumeration">{{current}} / {{total}}</div>'
    }, x = function(i, n) {
        return this.element = t.querySelector(n),
        this.options = v.deepExtend(w, i),
        this.$items = this.element.childNodes,
        this.bullets = {},
        this.enumeration = {},
        this.uis = [],
        this.options.tween = this._transitions(this.options.transition),
        this.options.twPrev = {},
        this.options.twCurr = {},
        this.options.twNext = {},
        this.timeline = {},
        o = e.content,
        p = this.options.currentPage,
        this._build(),
        this.addListeners(),
        this.options.onInit.call(this),
        this.options.isSinglePage || (this._setPages(this.options.currentPage),
        this._playTransition(!0)),
        this.options.status.initialized = !0,
        this
    };
    x.prototype = {
        _build: function() {
            var i, n, s, r = this, o = this.options, a = "";
            if ("THUMBS_PAGE" === o.id)
                if (/x/.test(o.size)) {
                    var l = v.extractValues(o.size, "{w}x{h}", {
                        whitespace: 1
                    });
                    l.w,
                    l.h;
                    a += ".thumb-photo {background-size: " + o.fit + ";padding-top: 0 !important; max-width: " + l.w + "px ; max-height: " + l.h + "px ; margin: 0px auto;}",
                    a += ".thumb-photo::before {padding-top: " + l.h / l.w * 100 + "%;}",
                    o.hasFixedSize = !0
                } else
                    /cover|contain/.test(o.size) && (a += ".thumb-photo {background-size: " + o.fit + ";}");
            if ("THUMBS_PAGE" === o.id && "string" == typeof o.grid && (o.cols || o.rows)) {
                o.gutterH,
                o.gutterV,
                o.padding;
                i = v.isNumeric(o.cols) ? 100 / o.cols + "%" : "inherit",
                v.isNumeric(o.rows) ? n = 100 / o.rows + "%" : (a += ".thumb { margin-bottom:48px;} ",
                n = "initial"),
                o.itemsPerPage = o.rows * o.cols || o.itemsLength,
                a += ".thumb {width: " + i + "; height: " + n + "; }.-md .thumb { } ",
                1 !== o.cols && (a += ".-md.portrait .thumb {width:" + n + "; height:" + i + "; } ")
            }
            if ("THUMBS_PAGE" === o.id && 1 === o.totalPages) {
                o.isSinglePage = !0,
                v.addClass(f, "thumbs-single-page");
                var u = r.element.querySelector(".page");
                u.id = o.singelPageID,
                v.addClass(u, o.singelPageID),
                v.addClass(u, "page-current"),
                u.style.overflowY = "auto",
                u.style["-webkit-overflow-scrolling"] = "touch",
                u.style.visibility = "inherit",
                u.style.opacity = 1,
                u.style.top = "0%",
                a += "." + o.singelPageID + " .thumb {width:" + i + " !important;} "
            }
            if (0 !== a.length) {
                var c = t.head.querySelector("#folio-css")
                  , p = '<style type="text/css">' + a + "</style>";
                c ? c.insertAdjacentHTML("afterEnd", p) : t.head.insertAdjacentHTML("beforeend", p)
            }
            this.options.pages = this.element.querySelectorAll(".page"),
            o.totalPages = o.pages.length,
            "THUMBS_PAGE" === o.id ? (o.currentPage = 1,
            s = "thumbnails") : s = "project";
            var d = "{{label}}"
              , g = /<[a-z\][\s\S]*>/i
              , m = /^(<svg)/m;
            function _(t) {
                if ("string" == typeof o[t] || "icon" === e.settings.content.ui) {
                    if ("icon" === o[t]) {
                        var i, n = t + "Icon";
                        return i = o[n] || w[n],
                        e.Utility.tmpl(w[t], {
                            label: i
                        })
                    }
                    return o[t]
                }
                return !0 === o[t] && w[t]
            }
            function y(t, e, i) {
                return g.test(t) ? m.test(t) ? w[e].replace(d, t) : t.replace(d, i) : w[e].replace(d, t)
            }
            var b = _("pagination");
            b && o.totalPages > 1 && !v.hasClass(r.element, "no-pagination") ? (/(^vertical$)|(^horizontal$)/g.test(b) && (b = w.pagination.replace("horizontal", b)),
            this.bullets = this._paginationInit(r.element, b)) : (v.addClass(r.element, "no-pagination"),
            o.pagination = !1);
            var x = _("buttonPrevious")
              , T = _("buttonNext");
            (x || T) && o.totalPages > 1 ? (x && (x = y(x, "buttonPrevious", "prev")),
            T && (T = y(T, "buttonNext", "next")),
            r._buttonsInit(r.element, x, T),
            o.arrows = !0) : o.arrows = !1;
            var P = _("buttonViews");
            P && (P = y(P, "buttonViews", "fit"),
            r.viewsButton = r._viewsButtonInit(r.element, P));
            var S = _("buttonSection");
            S && e.settings.thumbnails && o.totalPages > 1 && (S = y(S, "buttonSection", "project" === s ? "thumbnails" : "project"),
            r.sectionButton = r._sectionButtonInit(r.element, S)),
            "project" === s && e.settings.project.hiddenPages && (h = _("buttonClose")) && (h = y(h, "buttonClose", "close"));
            var C = _("enumeration");
            return C && o.totalPages > 1 ? (r.enumeration = r._enumerationInit(r.element, C),
            r._updateEnumeration()) : o.enumeration = !1,
            this
        },
        addListeners: function() {
            var t = this;
            v.forEach(["next", "prev", "first", "last", "goto", "close"], function(i, n) {
                e.subscribe("folio.page." + i, t._requestPageHandler.bind(t))
            }),
            e.subscribe(e.Event.SECTION_DISPLAY, this._update.bind(this))
        },
        next: function() {
            this.options.direction = "forward",
            this.goTo(this.options.currentPage + 1)
        },
        prev: function() {
            this.options.direction = "backward",
            this.goTo(this.options.currentPage - 1)
        },
        goTo: function(t, e, i) {
            var n = this.options;
            n.status.playing || n.isSinglePage || t === n.currentPage || (t > n.totalPages - 1 || t < 0 ? e !== r || n.status.playing || this._playEdgeTransition() : (n.animate = !(e !== r && !1 === e),
            this.options.active && (this._setPages(t),
            n.status.initialized && !b ? this._playTransition() : this._playTransition(1))))
        },
        _reqestPage: function(t) {},
        _playTransition: function(t) {
            var e = this;
            if (t) {
                var i = e.getPage("current");
                this._beforeTransitionStart(),
                n.set(i, e.options.tween.to.vars),
                e._onTransitionEnd(!0)
            } else
                e._beforeTransitionStart(),
                e.options.onPageTransitionStart.call(e),
                e.options.animate ? n.delayedCall(.05, function() {
                    e.timeline.play(0)
                }) : e.timeline.progress(1, !1)
        },
        _playEdgeTransition: function() {
            var t = this;
            if (!0 !== t.options.status.playing) {
                var i = t.getPage("current")
                  , s = "forward" === t.options.direction ? "-72" : "72";
                n.to(i, .2, {
                    x: s,
                    autoAlpha: .8,
                    repeat: 1,
                    yoyo: !0,
                    onStart: function() {
                        t.options.status.playing = !0,
                        e.publish(e.Event.PAGE_TRANSITION_START, "edgeStart")
                    },
                    onComplete: function() {
                        t.options.status.playing = !1,
                        e.publish(e.Event.PAGE_TRANSITION, "edgeEnd")
                    }
                })
            }
        },
        _setPages: function(t) {
            var i, n = this.options, s = n.id === e.settings.project.id;
            arguments.length ? (n.direction = t < n.currentPage ? "backward" : "forward",
            "forward" === n.direction ? n.nextPage = t >= n.totalPages ? n.totalPages : t : n.prevPage = t <= -1 ? 0 : t,
            s && n.hiddenPages && (o[n.currentPage].hide && (i = n.currentPage),
            o[t] && o[t].hide && (i = t))) : (n.currentPage = "forward" === n.direction ? n.nextPage : n.prevPage,
            n.prevPage = n.currentPage <= -1 ? 0 : n.currentPage - 1,
            n.nextPage = n.currentPage >= n.totalPages ? n.totalPages - 1 : n.currentPage + 1),
            s ? (i === r && (i = "forward" === n.direction ? n.nextPage < n.totalPages ? n.nextPage : n.totalPages - 1 : n.currentPage),
            a = o[i].transition,
            n.tween = this._transitions(a)) : a = e.settings.thumbnails.transition,
            this._setTweens()
        },
        _setTweens: function() {
            var t = this
              , e = t.options
              , i = {}
              , r = t.getPage("current")
              , o = t.getPage("next")
              , l = t.getPage("prev")
              , u = /fold|scale/.test(a);
            v.forEach(m, function(t, n) {
                i[t] = e.animate ? e.tween[t].duration : 1e-5
            }),
            t.timeline instanceof s && t.timeline.kill(),
            t.timeline = new s({
                paused: !0,
                onComplete: t._onTransitionEnd,
                onCompleteScope: t,
                onReverseComplete: t._onTransitionReverseEnd,
                onReverseCompleteScope: t
            }),
            "forward" === e.direction && o ? (u ? (o.style.zIndex = y,
            y++,
            r.style.zIndex = y) : (o.style.zIndex = y,
            r.style.zIndex = y++),
            n.set(o, e.tween.from.vars),
            t.timeline.to(o, i.to, e.tween.to.vars, "go").to(r, i.out, e.tween.out.vars, "go")) : l && (u ? (r.style.zIndex = y,
            y++,
            l.style.zIndex = y) : (l.style.zIndex = y,
            r.style.zIndex = y++),
            n.set(l, e.tween.out.vars),
            t.timeline.to(l, i.to, e.tween.to.vars, "go").to(r, i.from, e.tween.from.vars, "go"))
        },
        _preloadImages: function() {
            var t, e, i = this.options, n = "." + lazySizes.cfg.lazyClass;
            function s(t) {
                t.length && v.forEach(t, function(t, e) {
                    lazySizes.unveilLazy(t)
                })
            }
            "forward" === i.direction ? (e = i.pages[i.nextPage],
            t = i.pages[i.nextPage + 1]) : (e = i.pages[i.prevPage],
            t = i.pages[i.prevPage - 1]),
            i.status.initialized && i.active && e && (s(e.querySelectorAll(n)),
            "PROJECT_PAGE" === i.id && t && s(t.querySelectorAll(n)))
        },
        _transitions: function(t) {
            return e.Utility.parseTween(t)
        },
        _beforeTransitionStart: function() {
            var t, i = this.options, s = "", r = "forward" === i.direction;
            if (i.active) {
                var p = i.id === e.settings.project.id
                  , g = r ? this.getPage("prev") : this.getPage("next")
                  , m = {
                    autoAlpha: 0,
                    clearProps: "all"
                }
                  , y = i.prevPage - i.nextPage < -2
                  , b = i.pages[i.currentPage - 1]
                  , w = i.pages[i.currentPage + 1];
                if (g && n.set(g, m),
                r ? (b && n.set(b, m),
                y && w && n.set(w, m)) : (w && n.set(w, m),
                y && b && n.set(b, m)),
                i.currentClass && v.removeClass(f, i.currentClass),
                v.removeClass(f, "scroll"),
                v.removeClass(this.getPage("current"), "page-current"),
                t = (r ? i.nextPage : i.prevPage) + 1,
                i.currentClass = (p ? "on-page-" : "on-thumbs-") + t,
                l !== "on-transition-" + a && (v.removeClass(f, l),
                l = "on-transition-" + a,
                v.addClass(f, l)),
                p) {
                    if (s = o[t - 1].skin) {
                        var x = "on-skin-" + s;
                        i.currentSkinClass !== x && (i.currentSkinClass && v.removeClass(d, i.currentSkinClass),
                        i.currentSkinClass = x,
                        v.addClass(d, i.currentSkinClass))
                    } else
                        i.currentSkinClass && (v.removeClass(d, i.currentSkinClass),
                        i.currentSkinClass = !1);
                    this.options.hiddenPages && ((c = o[t - 1].hide) ? (v.addClass(f, _),
                    u ? i.pages[t - 1].insertBefore(u, i.pages[t - 1].firstChild) : u = this._closeButtonInit(i.pages[t - 1], h)) : v.hasClass(f, _) && v.removeClass(f, _))
                }
                v.addClass(f, i.currentClass),
                i.status.playing = !0,
                this.bullets && this._updateBullets()
            }
        },
        _onTransitionStart: function() {},
        _onTransitionReverseEnd: function() {
            this._setTweens()
        },
        _onTransitionEnd: function(t) {
            var e = this;
            e.options.status.playing = !1;
            e.options;
            e._hideUnusedPages(),
            e._setPages(),
            e._preloadImages(),
            v.addClass(e.getPage("current"), "page-current"),
            e.enumeration,
            e._updateEnumeration(),
            e.options.onPageTransitionEnd.call(e),
            v.addClass(f, "scroll")
        },
        _hideUnusedPages: function() {
            var t = this.options
              , e = this.getPage("current")
              , i = this.getPage("next")
              , s = (t.pages[t.currentPage + 1],
            this.getPage("prev"));
            t.pages[t.currentPage - 1];
            t.status.initialized && t.canHidePages && ("forward" === t.direction ? (s && n.set(s, {
                autoAlpha: 0,
                clearProps: "all"
            }),
            e && n.set(e, {
                autoAlpha: 0,
                clearProps: "all"
            })) : (i && n.set(i, {
                autoAlpha: 0,
                clearProps: "all"
            }),
            e && n.set(e, {
                autoAlpha: 0,
                clearProps: "all"
            })))
        },
        getPage: function(t) {
            var e, i = this.getOptions();
            switch (t) {
            case "all":
                e = i.pages;
                break;
            case "current":
            case "prev":
            case "next":
                e = i.pages[i[t + "Page"]]
            }
            return e
        },
        _buttonsInit: function(t, e, i) {
            var n, s, r = this;
            r.options;
            e && (n = v.createElement(e),
            t.insertBefore(n, t.firstChild),
            n.addEventListener("click", function(t) {
                t.preventDefault(),
                t.stopPropagation(),
                r._requestPageHandler("buttonPrevious", "prev")
            }),
            r.buttonPrevious = n,
            r.uis.push(r.buttonPrevious)),
            i && (s = v.createElement(i),
            t.insertBefore(s, t.firstChild),
            s.addEventListener("click", function(t) {
                t.preventDefault(),
                t.stopPropagation(),
                r._requestPageHandler("buttonNext", "next")
            }),
            r.buttonNext = s,
            r.uis.push(r.buttonNext))
        },
        _sectionButtonInit: function(t, i) {
            var n;
            this.options;
            return n = v.createElement(i),
            t.insertBefore(n, t.firstChild),
            n.addEventListener("click", function(t) {
                t.preventDefault(),
                t.stopPropagation(),
                e.publish(e.Event.SECTION_TOGGLE)
            }),
            this.uis.push(n),
            n
        },
        _closeButtonInit: function(t, e) {
            var i, n = this;
            n.options;
            return i = v.createElement(e),
            t.insertBefore(i, t.firstChild),
            i.addEventListener("click", function(t) {
                t.preventDefault(),
                t.stopPropagation(),
                n._closeButtonHandler()
            }),
            i
        },
        _closeButtonHandler: function() {
            c && (p ? e.goto(p + 1) : e.first())
        },
        _viewsButtonInit: function(t, i) {
            var n;
            this.options;
            return n = v.createElement(i),
            t.insertBefore(n, t.firstChild),
            n.addEventListener("click", function(t) {
                t.preventDefault(),
                t.stopPropagation(),
                e.publish(e.Event.PAGE_VIEW)
            }),
            this.uis.push(n),
            n
        },
        _hideUIs: function() {
            n.to(this.uis, 1, {
                autoAlpha: 0,
                scale: .6
            }),
            this.options.status.uiVisible = !1
        },
        _showUIs: function() {
            n.to(this.uis, .2, {
                autoAlpha: 1,
                scale: 1,
                clearProps: "all"
            }),
            this.options.status.uiVisible = !0
        },
        _inactivityHandler: function(t, e) {
            e ? this.options.status.uiVisible && this._hideUIs() : !this.options.status.uiVisible && this._showUIs()
        },
        _onHashChange: function(t, e, i) {},
        _requestPageChange: function(t, i) {
            var n, s, a = this.options;
            t = +t;
            if (a.active) {
                if (g) {
                    if (!(t < 0 || t > a.totalPages - 1))
                        return e.publish(e.Event.MENU, "menu"),
                        void (g = !1);
                    a.status.playing && this._playEdgeTransition()
                }
                var l;
                if (t < 0 || t > a.totalPages - 1)
                    this.goTo(t);
                else
                    "THUMBS_PAGE" === a.id ? (s = "/" + a.route + "/",
                    l = t,
                    n = Math.max(0, Math.min(l, a.totalPages - 1)) + 1) : (s = "/",
                    n = o[t].hash),
                    i !== r && s + n === e.router.currentHash || ("PROJECT_PAGE" !== a.id || o[a.currentPage].hide || (p = a.currentPage),
                    e.router.fragment.set(s + n),
                    e.router.currentHash = s + n,
                    b ? (b = !1,
                    this._setPages(t)) : this.goTo(t, !0, !0))
            }
        },
        _update: function(t, e) {
            this.options.active = e === this.options.id,
            this.options.active && (this.options.active,
            "toogle" === e && (this.options.active = !!this.options.active),
            "show" === e && (this.options.active = !0),
            "hide" === e && (this.options.active = !1))
        },
        _requestPageHandler: function(t, e) {
            if (this.options.active) {
                var i = this.options;
                if (t && "drag" === t && (b = !0),
                !1 === i.status.playing) {
                    if (c)
                        return this._closeButtonHandler(),
                        void (c = !1);
                    switch (e) {
                    case "next":
                        i.direction = "forward",
                        this._requestPageChange(n(i.nextPage, 1));
                        break;
                    case "prev":
                        i.direction = "backward",
                        this._requestPageChange(n(i.prevPage, -1));
                        break;
                    case "first":
                        i.direction = "backward",
                        this._requestPageChange(n(0, 1));
                        break;
                    case "last":
                        i.direction = "forward",
                        this._requestPageChange(n(i.totalPages - 1, -1));
                        break;
                    default:
                        v.isNumeric(e) && this._requestPageChange(e)
                    }
                }
            }
            function n(t, e) {
                if ("PROJECT_PAGE" === i.id) {
                    if (o[t] && !o[t].hide)
                        return t;
                    var n = t;
                    if (e > 0) {
                        for (; n < i.totalPages; n++)
                            if (!o[n].hide)
                                return n
                    } else
                        for (; n > 0; n--)
                            if (!o[n].hide)
                                return n;
                    return e > 0 ? i.totalPages : -1
                }
                return t
            }
        },
        _updateButtons: function(t) {
            this.options.active ? (n.to(this.buttonPrevious, .3, {
                opacity: 1
            }),
            n.to(this.buttonNext, .3, {
                opacity: 1
            })) : (n.set(this.buttonPrevious, {
                opacity: 0
            }),
            n.set(this.buttonNext, {
                opacity: 0
            }))
        },
        _paginationInit: function(t, i) {
            var n, s, r = this, a = r.options, l = "", u = "PROJECT_PAGE" === a.id, h = e.Utility.extractValues(i, "{wrapper}@@{bullet}@@{wrapperClose}", {
                whitespace: 1
            });
            h.bullet = h.bullet.trim();
            for (var c = /\{\{hide\}\}/i.test(h.bullet), p = 0; p < a.totalPages; p++)
                l += c ? h.bullet.replace("{{hide}}", u && o[p].hide ? "hide" : "") : h.bullet;
            (n = v.createElement(h.wrapper + h.wrapperClose)).innerHTML = l,
            t.appendChild(n),
            s = n.childNodes;
            var f = v.createElement(h.bullet).tagName;
            return n.addEventListener("click", function(t) {
                var e;
                if (t.preventDefault(),
                t.stopPropagation(),
                e = v.getParents(t.target, f)) {
                    var i = Array.prototype.indexOf.call(s, e[0]);
                    r._requestPageChange(i)
                }
            }),
            r.uis.push(n),
            s
        },
        _updateBullets: function() {
            var t, e = this.options;
            this.bullets[e.currentPage] && v.removeClass(this.bullets[e.currentPage], "act"),
            t = "forward" === this.options.direction ? e.nextPage : e.prevPage,
            this.bullets[t] && v.addClass(this.bullets[t], "act")
        },
        _enumerationInit: function(t, e) {
            var i, n = this.options;
            return i = v.createElement(e),
            n.enumerationTemplate = i.innerHTML,
            i.innerHTML = this._getEnumerationContent(i.innerHTML),
            t.insertBefore(i, t.firstChild),
            this.uis.push(i),
            i
        },
        _updateEnumeration: function() {
            this.enumeration.innerHTML = this._getEnumerationContent()
        },
        _getEnumerationContent: function(t) {
            var i = e.Utility.tmpl
              , n = this.options;
            return i(t || n.enumerationTemplate, {
                current: n.currentPage + 1,
                total: n.totalPages
            })
        },
        isCurrentPageHidden: function() {
            return c
        },
        getOptions: function(t) {
            return t ? this.options[t] : this.options
        },
        getItemIndex: function(e) {
            return Array.prototype.indexOf.call(t.querySelectorAll(this.options.itemClass), e)
        },
        getPageByIndex: function(e) {
            var i = this.options;
            return ~~(Array.prototype.indexOf.call(t.querySelectorAll(this.options.itemClass), t.querySelector(this.options.itemClass + "-" + e)) / i.itemsPerPage)
        },
        refresh: function() {},
        destroy: function() {}
    },
    e.component.pages = x
}(document, window.FOLIO = window.FOLIO || {}, window, window.TweenMax, window.TimelineMax),
function(t, e, i) {
    "use strict";
    var n, s, r, o, a = e.Utility, l = "submenu-trigger", u = "submenu-open", h = t.querySelector("html"), c = 1, p = !1;
    function f(t, i) {
        var n = this;
        return r = e.settings.sidebar.align,
        n.triggers = "",
        n.element = t,
        n.index = i + 1,
        n.options = e.settings.menu,
        n.menuIdClass = n.options.classPrefix + "-" + n.index,
        a.addClass(n.element, n.options.classPrefix),
        a.addClass(n.element, n.options.classPrefix + "-" + n.index),
        this
    }
    var d = f.prototype;
    function g(t) {
        return a.hasClass(t, u)
    }
    function m(t, i, n, s, r) {
        this.id = t,
        this.handler = i,
        this.parent = n,
        this.submenu = s,
        this._height = r,
        this.hasActiveItem = !1,
        this.isOpened = a.hasClass(n, u),
        this.build(),
        e.submenu.push(this)
    }
    d.init = function() {
        o = /(left|right)/gi.test(r),
        e.settings.menu.parse && this.build(),
        this.setSubMenus(),
        o || e.subscribe(e.Event.SIDEBAR_CLOSED, this.closeAllSubmenus.bind(this))
    }
    ,
    d.build = function() {
        var t, e, i = this.element.previousElementSibling, n = this.element.parentNode, s = n.removeChild(this.element), r = '<ul class="menu-content">', o = !1, l = s.children;
        a.forEach(l, function(i, n) {
            e = i.nextElementSibling,
            t = e && e.hasAttribute("subitem"),
            r += '<li class="menu-item' + (!o && t ? " submenu submenu-" + c++ : "") + '">',
            t ? o ? r += i.outerHTML + "</li>" : (a.addClass(i, "submenu-trigger"),
            r += i.outerHTML + '<ul class="submenu-content">',
            o = !0) : o ? (r += i.outerHTML + "</li></ul></li>",
            o = !1) : r += i.outerHTML + "</li>"
        }),
        r += "</ul>",
        s.innerHTML = r,
        i ? i.insertAdjacentHTML("afterend", s.outerHTML) : n.insertBefore(s, n.firstChild)
    }
    ,
    d.closeSubmenu = function(e) {
        var i = e || t.querySelector("." + u + " .submenu-trigger");
        i.nextElementSibling.style.maxHeight = 0,
        a.removeClass(i.parentNode, u)
    }
    ,
    d.closeAllSubmenus = function() {
        var t = this;
        a.forEach(t.triggers, function(e, i) {
            a.hasClass(e.parentNode, u) && t.closeSubmenu(e)
        })
    }
    ,
    d.setSubMenus = function() {
        var e = this
          , i = [];
        s = e.options.submenuTrigger;
        var n = t.querySelectorAll("." + e.menuIdClass + " ." + l);
        e.triggers = n,
        a.forEach(n, function(t, n) {
            var s = t.parentNode
              , r = t.nextElementSibling
              , o = r.clientHeight + 10;
            i.push(o),
            r && (r.style.maxHeight = 0);
            new m(e.menuIdClass + "-" + (n + 1),t,s,r,o)
        })
    }
    ;
    var _ = m.prototype;
    _.build = function() {
        var t = this;
        this.parent.addEventListener(s, function(e) {
            e.target && a.hasClass(e.target, l) && (e.stopPropagation(),
            e.preventDefault(),
            g(e.currentTarget) ? t.close() : t.open(),
            o || (n && n !== t.parent && (a.removeClass(n, u),
            n.querySelector(".submenu-content").style.maxHeight = 0),
            n = t.parent))
        }),
        e.settings.menu.mouseleave && t.parent.addEventListener("mouseleave", function(e) {
            !o && a.hasClass(h, "sidebar-") && g(t.parent) && t.close()
        })
    }
    ,
    _.openActive = function() {
        !p && o && this.submenu.querySelector("a.active") && (this.open(),
        this.hasActiveItem = !0,
        p = !0)
    }
    ,
    _.open = function() {
        var t, e = this;
        e.submenu.style.maxHeight = "none",
        e.submenu.style.position = "inherit",
        t = e.submenu.clientHeight,
        e.submenu.style.maxHeight = "0px",
        e.submenu.style.position = "",
        TweenMax.delayedCall(.01, function() {
            e.submenu.style.maxHeight = t + "px",
            e.isOpened = !0,
            a.addClass(e.parent, u)
        })
    }
    ,
    _.close = function() {
        this.submenu.style.maxHeight = "0px",
        this.isOpened = !1,
        a.removeClass(this.parent, u)
    }
    ,
    _.toggle = function() {}
    ,
    e.component.menu = f
}(document, window.FOLIO = window.FOLIO || {}),
function(t, e, i, n, s, r) {
    "use strict";
    var o, a, l, u, h, c, p, f, d, g, m, _, v, y, b, w, x = i.Utility, T = [], P = !0, S = {}, C = 0;
    function A() {
        var r = e.querySelector("main");
        i.isSinglePage = 1 === r.children.length;
        for (var w, A = i.Event, O = arguments.length, E = 0; E < O; E++) {
            var k = arguments[E];
            "string" == typeof k ? _ = k : null != (w = k) && "[object Object]" === Object.prototype.toString.call(w) ? S = k : "function" == typeof k && (v = k)
        }
        var L = i.core(S)
          , R = i.settings;
        o = R.content.transition;
        var M;
        if (!e.querySelector(R.project.parent)) {
            var D = e.createElement("div");
            i.Utility.addClass(D, R.content.selector.replace(/\./g, "")),
            e.body.insertBefore(D, e.body.firstChild)
        }
        R.thumbnails ? x.addClass(e.body, "on-thumbs-enabled") : x.addClass(e.body, "on-thumbs-disabled"),
        i.Parser(),
        (p = i.content).forEach(function(t, e) {
            T.push(t.hash)
        }),
        m = d = "project",
        f = 1;
        var I = i.router.fragment.get();
        function N() {
            if (!P)
                return !1;
            location.assign(R.content.error404)
        }
        g = I || _ || "/" + p[0].hash,
        i.router.fragment.set(g),
        i.router.get("/:page?", function(t, e) {
            e.stopPropagation();
            var i, n = t.params.page;
            i = n,
            f = T.indexOf(i) + 1 || 1,
            d = "project",
            -1 !== T.indexOf(n) ? (B(d, f),
            M = f) : (e.preventDefault(),
            e.stopPropagation(),
            N())
        }),
        i.router.get("/" + i.settings.thumbnails.route + "/:id?", function(t, e) {
            e.stopPropagation();
            var i = t.params.id;
            f = i,
            d = "thumbs",
            P || C && +i <= C && +i >= 1 ? M !== f && (B(d, f),
            M = f) : (e.preventDefault(),
            e.stopPropagation(),
            N())
        }),
        i.router.get("*", function(t, e) {
            e.parent() || (e.preventDefault(),
            e.stopPropagation(),
            N())
        });
        var z = e.querySelector(R.sidebar.element);
        function F() {
            a && (C = a.getOptions("totalPages"),
            l = i.Utility.parseTween(o),
            (h = new n({
                paused: !0,
                onComplete: function() {
                    i.publish(A.SECTION_DISPLAY, a.getOptions().id),
                    i.publish(A.PAGE_TRANSITION_END, "end"),
                    y.active = !0,
                    b.active = !1,
                    j(m)
                }
            })).set(a.element, l.from.vars, "thumbs").to(a.element, l.to.duration, l.to.vars, "thumbs").to(u.element, l.out.duration, l.out.vars, "thumbs"),
            (c = new n({
                paused: !0,
                onComplete: function() {
                    i.publish(A.SECTION_DISPLAY, u.getOptions().id),
                    i.publish(A.PAGE_TRANSITION_END, "end"),
                    y.active = !1,
                    b.active = !0,
                    j(m)
                }
            })).set(u.element, l.out.vars, "project").to(u.element, l.to.duration, l.to.vars, "project").to(a.element, l.from.duration, l.from.vars, "project")),
            "thumbs" === d && X(f),
            d !== m && Y(!0),
            j(m)
        }
        function B(t, e) {
            P ? (f = +f - 1,
            (!1 === R.thumbnails || i.isSinglePage) && (R.project.buttonSection = !1),
            u = i.section.project(f),
            b = u.getOptions(),
            (a = !1 !== R.thumbnails && !i.isSinglePage && i.section.thumbs(f)) && (y = a.getOptions()),
            F(),
            P = !1) : "project" === t ? function(t) {
                if (!1 === P) {
                    var e = +t;
                    "thumbs" === m ? u.options.currentPage !== e - 1 ? (i = e - 1,
                    b.active = !0,
                    u.goTo(i, !1),
                    b.active = !1,
                    Y()) : Y() : u._requestPageChange(e - 1, !0)
                }
                var i
            }(e) : function(t) {
                if (!1 === P) {
                    var e = +t;
                    "project" === m ? (X(e - 1),
                    Y()) : a._requestPageChange(e - 1, !0)
                }
            }(e)
        }
        function X(t) {
            y.active = !0,
            a.goTo(t, !1),
            y.active = !1
        }
        function Y(t) {
            if (!c.isActive() && !h.isActive())
                if ("project" === m) {
                    if (b.status.playing)
                        return;
                    t && h ? h.progress(1, !1) : h.restart(!0, !1),
                    m = "thumbs"
                } else {
                    if (y.status.playing)
                        return;
                    t ? c.progress(1, !1) : c.restart(!0, !1),
                    m = "project"
                }
        }
        function j(t) {
            var i = "project" === t ? "on-thumbs" : "on-project";
            x.removeClass(e.body, i),
            x.addClass(e.body, "on-" + t)
        }
        if (z ? i.sidebar = new i.section.sidebar(z,R.sidebar) : R.sidebar = !1,
        L.enquireSetup(),
        a && (i.subscribe(A.SECTION_TOGGLE, function() {
            !1 !== u.isCurrentPageHidden() && function() {
                if (!b.status.playing && !(a && y.status.playing || c.isActive() || h.isActive()))
                    if ("project" === m) {
                        var t = a.getPageByIndex(b.currentPage + 1);
                        i.router.fragment.set("/" + y.route + "/" + (+t + 1))
                    } else
                        i.router.fragment.set("/" + p[b.currentPage].hash)
            }()
        }),
        i.subscribe("onThumbClick", function(t, e) {
            i.router.fragment.set("/" + p[e].hash)
        })),
        i.publish(i.Event.READY, !0),
        "string" == typeof R.onReady) {
            var H = t[R.onReady];
            "function" == typeof H && H()
        } else
            "function" == typeof R.onReady && R.onReady.call(this);
        return v && v.call(this),
        s.to([".project", ".sidebar", ".thumbs"], .3, {
            opacity: 1,
            onComplete: function() {
                i.Utility.addClass(e.body, "on-ready")
            }
        }),
        i
    }
    i.init = function(t, e, i) {
        return void 0 === w && (w = new A(t,e,i)),
        w
    }
}(window, document, window.FOLIO = window.FOLIO || {}, window.TimelineMax, window.TweenMax),
function(t, e, i, n, s) {
    "use strict";
    var r, o, a, l, u, h, c, p = e.Utility, f = !0;
    function d() {
        for (var t = 1; t < arguments.length; t++)
            for (var e in arguments[t])
                arguments[t].hasOwnProperty(e) && (arguments[0][e] = arguments[t][e]);
        return arguments[0]
    }
    function g(i, n) {
        return "icon" === e.settings.content.ui && (n.buttonToggle || (n.buttonToggle = "icon"),
        n.buttonClose || (n.buttonClose = "icon")),
        this.options = d({}, g.DEFAULT_OPTIONS, n),
        this.panelTween = {},
        this.contentTween = {},
        this.alignList = ["top", "bottom", "left", "right"],
        this.body = t.body,
        this.panel = this.body.querySelector(".sidebar") || i,
        this.content = this.body.querySelector(e.settings.content.selector),
        this.icon = this.content.querySelector(this.options.iconOpen),
        this._isMenu = !1,
        this._transitions = {
            open: {},
            close: {}
        },
        this.status = {
            opened: !1,
            initialized: !1
        },
        this.init(),
        this.status.initialized = !0,
        this
    }
    g.ID = "sidebar",
    g.DEFAULT_OPTIONS = {
        id: g.ID,
        buttonToggle: '<div class="ui ui-button ui-button-toggle" title="Toggle menu (m)"><span>{{label}}</span></div>',
        buttonClose: '<div class="ui-button ui-button-close" title="Close menu (m)"><span>{{label}}</span></div>',
        parent: "body",
        mq: "none",
        buttonToggleIcon: '<svg width="24" height="24" viewBox="0 0 24 24"><path class="menu" d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>',
        buttonCloseIcon: '<svg fill="#000000" height="24" viewBox="0 0 24 24" width="24">                                        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>                                         <path d="M0 0h24v24H0z" fill="none"/>                                    </svg>',
        iconOpen: "icon-menu",
        iconClose: "icon-close",
        isSiderbar: !1,
        animate: !0,
        duration: .25,
        transitionType: "pull",
        align: "left",
        alignClass: "",
        panelClass: {}
    };
    var m = g.prototype;
    m.init = function() {
        var e = this.getOptions()
          , i = this.body;
        e.panelClass = {
            opened: "on-" + e.classPrefix + "-opened",
            closed: "on-" + e.classPrefix + "-closed"
        },
        this.alignList.indexOf(e.align) > -1 && (e.alignClass = "on-" + e.classPrefix + "-" + e.align),
        e.id === g.ID && (this._isMenu = !0),
        !p.hasClass(i, e.alignClass) && this._isMenu && (p.addClass(i, e.alignClass),
        p.addClass(this.panel, e.classPrefix + "-" + e.align));
        var n = this.status.opened = !p.hasClass(t.head, e.classPrefix + "-mobile") && !e.hidden
          , s = /<[a-z\][\s\S]*>/i;
        function r(t, i) {
            var n, r = {
                label: i
            };
            return "string" == typeof e[t] ? n = s.test(e[t]) ? p.tmpl(e[t], r) : "icon" === e[t] ? p.tmpl(g.DEFAULT_OPTIONS[t], {
                label: g.DEFAULT_OPTIONS[t + "Icon"]
            }) : p.tmpl(g.DEFAULT_OPTIONS[t], {
                label: e[t]
            }) : !0 === e[t] && (n = p.tmpl(g.DEFAULT_OPTIONS[t], r)),
            !!n && p.createElement(n)
        }
        if (!this.icon) {
            this.icon = r("buttonToggle", "menu"),
            this.content.insertBefore(this.icon, this.content.childNodes[0]);
            var o = r("buttonClose", "&times");
            o && this.panel.insertBefore(o, this.panel.childNodes[0])
        }
        this.setListeners(),
        this.icon && this.icon.addEventListener("click", this.toggle.bind(this)),
        o && o.addEventListener("click", this.toggle.bind(this)),
        p.addClass(i, n ? e.panelClass.opened : e.panelClass.closed)
    }
    ,
    m.setListeners = function() {
        e.subscribe(e.Event.MQ, this._mediaQueries.bind(this)),
        e.subscribe("folio." + this.options.id, this.toggle.bind(this)),
        e.subscribe(e.Event.READY, this.onFolioReady.bind(this))
    }
    ,
    m.onFolioReady = function() {
        this.setDefaultTweens(),
        this.setTransitions()
    }
    ,
    m.setDefaultTweens = function() {
        var t = window.getComputedStyle(this.panel).width
          , e = window.getComputedStyle(this.panel).height
          , i = this.contentTween
          , n = this.panelTween
          , s = "cover";
        function r(t) {
            return f ? 1 : t || .94
        }
        switch (this.options.align) {
        case "left":
            i.pull = {
                opened: {
                    left: t,
                    zIndex: 201,
                    opacity: 1,
                    scale: 1,
                    ease: Expo.easeOut
                },
                closed: {
                    left: 0,
                    zIndex: 201,
                    opacity: 1,
                    scale: 1,
                    ease: Cubic.easeInOut
                }
            },
            n.pull = {
                opened: {
                    x: 0,
                    opacity: 1,
                    scale: 1,
                    ease: Quart.easeOut,
                    delay: .04
                },
                closed: {
                    x: -50,
                    opacity: 0,
                    scale: .97,
                    ease: Cubic.easeOut
                }
            },
            i.cover = {
                opened: {
                    x: "0%",
                    opacity: .4,
                    scale: r(),
                    ease: Expo.easeOut
                },
                closed: {
                    x: "0%",
                    opacity: 1,
                    scale: 1,
                    ease: Expo.easeInOut
                }
            },
            n.cover = {
                opened: {
                    x: "0%",
                    opacity: 1,
                    scale: 1,
                    ease: Expo.easeOut,
                    delay: .04
                },
                closed: {
                    x: "-100%",
                    opacity: 1,
                    scale: 1,
                    ease: Expo.easeInOut
                }
            },
            i.push = {
                opened: {
                    x: t,
                    opacity: .4,
                    scale: 1,
                    ease: Expo.easeOut
                },
                closed: {
                    x: "0%",
                    opacity: 1,
                    scale: 1,
                    ease: Expo.easeInOut
                }
            },
            n.push = {
                opened: {
                    x: "0%",
                    opacity: 1,
                    scale: 1,
                    ease: Expo.easeOut
                },
                closed: {
                    x: "-" + t,
                    opacity: 1,
                    scale: 1,
                    ease: Expo.easeInOut
                }
            };
            break;
        case "right":
            i.pull = {
                opened: {
                    right: t,
                    opacity: 1,
                    scale: 1
                },
                closed: {
                    right: 0
                }
            },
            n.pull = {
                opened: {
                    x: 0,
                    opacity: 1
                },
                closed: {
                    x: t,
                    opacity: 1
                }
            },
            i[s] = {
                opened: {
                    right: 0,
                    opacity: .4,
                    scale: r(.8)
                },
                closed: {
                    right: 0,
                    opacity: 1,
                    scale: 1
                }
            },
            n[s] = {
                opened: {
                    x: 0,
                    opacity: 1
                },
                closed: {
                    x: t,
                    opacity: 1
                }
            },
            i.push = {
                opened: {
                    x: "-" + t,
                    opacity: .4,
                    scale: 1,
                    ease: Expo.easeOut
                },
                closed: {
                    x: "0%",
                    opacity: 1,
                    scale: 1,
                    ease: Expo.easeInOut
                }
            },
            n.push = {
                opened: {
                    x: "0%",
                    opacity: 1,
                    scale: 1,
                    ease: Expo.easeOut
                },
                closed: {
                    x: t,
                    opacity: 1,
                    scale: 1,
                    ease: Expo.easeInOut
                }
            };
            break;
        case "top":
            i.pull = {
                opened: {
                    top: e,
                    opacity: 1,
                    scale: 1
                },
                closed: {
                    top: 0,
                    opacity: 1,
                    scale: 1
                }
            },
            n.pull = {
                opened: {
                    y: 0,
                    opacity: 1
                },
                closed: {
                    y: "-" + e,
                    opacity: 1
                }
            },
            i[s] = {
                opened: {
                    top: 0,
                    opacity: .8,
                    scale: r(.8)
                },
                closed: {
                    top: 0,
                    opacity: 1,
                    scale: 1
                }
            },
            n[s] = {
                opened: {
                    y: "0%",
                    opacity: 1
                },
                closed: {
                    y: "-100%",
                    opacity: 1
                }
            },
            i.push = {
                opened: {
                    y: e,
                    opacity: .4,
                    scale: 1
                },
                closed: {
                    y: 0,
                    opacity: 1,
                    scale: 1
                }
            },
            n.push = {
                opened: {
                    y: 0,
                    opacity: 1
                },
                closed: {
                    y: "-" + e,
                    opacity: 1
                }
            };
            break;
        case "bottom":
            i.pull = {
                opened: {
                    bottom: e,
                    scale: 1
                },
                closed: {
                    bottom: "0%",
                    opacity: 1,
                    scale: 1
                }
            },
            n.pull = {
                opened: {
                    y: "0%",
                    opacity: 1
                },
                closed: {
                    y: e,
                    opacity: 1
                }
            },
            i[s] = {
                opened: {
                    bottom: 0,
                    opacity: .8,
                    scale: r(.8)
                },
                closed: {
                    bottom: 0,
                    opacity: 1,
                    scale: 1
                }
            },
            n[s] = {
                opened: {
                    y: 0,
                    opacity: 1
                },
                closed: {
                    y: e,
                    opacity: 1
                }
            },
            i.push = {
                opened: {
                    y: "-" + e,
                    opacity: .4,
                    scale: 1
                },
                closed: {
                    y: 0,
                    opacity: 1,
                    scale: 1
                }
            },
            n.push = {
                opened: {
                    y: 0,
                    opacity: 1
                },
                closed: {
                    y: e,
                    opacity: 1
                }
            }
        }
    }
    ,
    m.toggle = function(t) {
        var e = this.getOptions();
        !e.toggle && "-sidebar" !== e.mq && this.status.opened || (e.duration = arguments.length && parseFloat(t) ? t : .3,
        this.status.opened ? this.close() : this.open())
    }
    ,
    m.setTransitions = function() {
        var t = this
          , c = t.getOptions()
          , f = c.transitionType
          , d = c.transitions
          , g = c.panelClass
          , m = t.panel
          , _ = t.content
          , v = t.getPanelState();
        u && u.invalidate().kill(),
        h && h.invalidate().kill(),
        i.set(m, {
            clearProps: "all"
        }),
        i.set(m, t.panelTween[f][v]),
        i.set(_, {
            clearProps: "all"
        }),
        i.set(_, t.contentTween[f][v]);
        var y = d && d.open ? d.open : s
          , b = d && d.close ? d.close : s;
        u = new n({
            paused: !0,
            onStart: function() {
                e.publish(e.Event.SIDEBAR_OPENED, "sidebar")
            },
            onComplete: function() {
                t.status.opened = !0,
                p.removeClass(t.body, g.closed),
                p.addClass(t.body, g.opened),
                /push|cover/.test(f) && t.addCloseListener()
            }
        }),
        y !== s && Array.isArray(y) ? p.forEach(y, function(t, e) {
            u.add(i.to(t[0], t[1], t[2]), "open")
        }) : (r = new i.to(t.panel,c.duration,t.panelTween[f].opened),
        a = new i.to(t.content,c.duration,t.contentTween[f].opened),
        u.add(r, "open").add(a, "open")),
        h = new n({
            paused: !0,
            onStart: function() {
                e.publish(e.Event.SIDEBAR_CLOSED, "closing")
            },
            onComplete: function() {
                t.status.opened = !1,
                p.removeClass(t.body, g.opened),
                p.addClass(t.body, g.closed),
                /push|cover/.test(f) && t.removeCloseListener()
            }
        }),
        b !== s && $.isArray(b) ? p.forEach(b, function(t, e) {
            h.add(i.to(t[0], t[1], t[2]), "close")
        }) : (o = new i.to(t.panel,c.duration,t.panelTween[f].closed),
        l = new i.to(t.content,c.duration,t.contentTween[f].closed),
        h.add(o, "close").add(l, "close")),
        t._transitions.open = u,
        t._transitions.close = h
    }
    ,
    m.updateTransitions = function() {
        var t = this.getOptions().transitionType;
        "opened" === this.getPanelState() ? (r.updateTo(this.panelTween[t].opened).invalidate(),
        a.updateTo(this.contentTween[t].opened).invalidate()) : (o.updateTo(this.panelTween[t].closed).invalidate(),
        l.updateTo(this.contentTween[t].closed).invalidate())
    }
    ,
    m.setContent = function(t) {
        this.panel.html(t)
    }
    ,
    m.setOptions = function(t) {
        this.options = d(this.options, t)
    }
    ,
    m.getOptions = function() {
        return this.options
    }
    ,
    m.getTransitions = function() {
        return this._transitions
    }
    ,
    m.getPanelState = function() {
        return this.status.opened ? "opened" : "closed"
    }
    ,
    m.addCloseListener = function() {
        /push|cover/.test(this.options.transitionType) && (c = !0,
        this.content.addEventListener("mouseup", this.close.bind(this)))
    }
    ,
    m.removeCloseListener = function() {
        !0 === c && (c = !1,
        this.content.removeEventListener("mouseup", this.close.bind(this)))
    }
    ,
    m.open = function() {
        var t = this.getTransitions().open;
        !this.status.opened && !t.isActive() && t.play(0)
    }
    ,
    m.close = function() {
        var t = this.getTransitions().close;
        this.status.opened && !t.isActive() && t.play(0)
    }
    ,
    m._mediaQueries = function(e, i) {
        if (this._isMenu && i.transition) {
            var n = this.getOptions();
            "-sidebar" === i.key ? (f = !1,
            this.status.opened = !1,
            p.removeClass(t.body, n.panelClass.opened),
            p.addClass(t.body, n.panelClass.closed)) : "sidebar-" === i.key && (f = !0),
            n.mq = i.key,
            n.transitionType = i.transition,
            this.setDefaultTweens(),
            this.setTransitions()
        }
    }
    ,
    e.component.sidepanel = g
}(document, window.FOLIO = window.FOLIO || {}, window.TweenMax, window.TimelineMax),
function(t, e, i) {
    "use strict";
    var n, s, r, o = e.Utility;
    function a(t, e) {
        return this.options = e,
        this.element = t,
        o.addClass(this.element, e.classPrefix),
        this._init(t, e),
        this
    }
    function l(t) {
        o.forEach(e.submenu, function(t, e) {
            t.openActive()
        })
    }
    function u() {
        if (n !== i) {
            var e = window.location.hash
              , r = s ? "" : "*"
              , o = t.querySelector(".menu-item a[href" + r + '="' + (s || "") + e + '"]');
            o && h(o)
        }
    }
    function h(e) {
        var i = t.querySelector("a.active");
        o.addClass(e, "active"),
        i && i != e && o.removeClass(i, "active"),
        s,
        r && l()
    }
    a.prototype = Object.create(e.component.sidepanel.prototype),
    a.prototype.constructor = a,
    a.prototype._init = function(a, c) {
        r = t.querySelectorAll(e.settings.menu.element),
        e.submenu = [],
        o.forEach(r, function(t, i) {
            new e.component.menu(t,i).init()
        }),
        e.component.sidepanel.apply(this, arguments),
        function() {
            var r = location.pathname.split("/")
              , a = (r[r.length - 1],
            r[r.length - 2])
              , l = r[r.length - 3]
              , c = t.querySelectorAll(".menu-item a");
            l = l || "";
            var p = location.pathname;
            location.hash;
            "/" === location.pathname && (p = "index." + e.settings.menu.fileExtension);
            o.forEach(c, function(t, e) {
                if (n === i) {
                    var r, o, u = t.getAttribute("href");
                    "#" !== u && (u = (u = u.replace(/^(\.)+\//gm, l || a + "/")).replace(/#(\S*)/g, ""),
                    new RegExp(u),
                    o = u,
                    -1 !== (r = p).indexOf(o, r.length - o.length) && (s = t.getAttribute("href").replace(/#(\S*)/g, ""),
                    n = t))
                }
            }),
            n === i && "/" === p.slice(-1) && (p = a + "/index." + e.settings.menu.fileExtension,
            o.forEach(c, function(t, e) {
                var i = a + "/" + t.getAttribute("href")
                  , r = new RegExp(p);
                r.test(i) && (s = t.getAttribute("href"),
                n = t)
            }));
            n && n.length;
            n && h(n),
            u()
        }(),
        r && l(r),
        e.subscribe(e.Event.PAGE_TRANSITION_END, u),
        "closed" === this.getPanelState() && (this.panel.style.display = "none")
    }
    ,
    e.section.sidebar = a
}(document, window.FOLIO = window.FOLIO || {}),
function(t, e, i) {
    "use strict";
    var n = e.Event
      , s = e.Utility;
    e.next = function() {
        e.publish(n.NEXT_PAGE, "next")
    }
    ,
    e.prev = function() {
        e.publish(n.PREV_PAGE, "prev")
    }
    ,
    e.first = function() {
        e.publish(n.FIRST_PAGE, "first")
    }
    ,
    e.last = function() {
        e.publish(n.LAST_PAGE, "last")
    }
    ,
    e.close = function() {
        e.publish(n.PAGE_CLOSE, "close")
    }
    ,
    e.goto = function(t) {
        var i = e.section.project().getOptions("active");
        if (s.isNumeric(t))
            e.publish(n.GO_TO_PAGE, +(t - 1));
        else if ("string" == typeof t)
            switch (t) {
            case "project":
                i || e.toggle("section");
                break;
            case "thumbnails":
                i && e.toggle("section");
                break;
            case "next":
            case "prev":
            case "first":
            case "last":
            case "close":
                e[t]()
            }
    }
    ,
    e.toggle = function(t) {
        switch (t) {
        case "sidebar":
            e.publish(n.SIDEBAR, "sidebar");
            break;
        case "view":
            e.publish(n.PAGE_VIEW);
            break;
        case "section":
        default:
            e.publish(n.SECTION_TOGGLE, "section")
        }
    }
}(document, window.FOLIO = window.FOLIO || {});
