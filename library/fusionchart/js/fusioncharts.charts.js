/*
 FusionCharts JavaScript Library
 Copyright FusionCharts Technologies LLP
 License Information at <http://www.fusioncharts.com/license>
*/
(function(n) {
    "object" === typeof module && "undefined" !== typeof module.exports ? module.exports = n : n(FusionCharts)
})(function(n) {
    n.register("module", ["private", "modules.renderer.js-charts", function() {
            n.register("module", ["private", "modules.renderer.js-column2d", function() {
                var a = this.hcLib,
                    b = !a.CREDIT_REGEX.test(this.window.location.hostname),
                    a = a.chartAPI;
                a("column2d", {
                    standaloneInit: !0,
                    friendlyName: "Column Chart",
                    creditLabel: b,
                    defaultDatasetType: "column",
                    applicableDSList: {
                        column: !0
                    },
                    singleseries: !0
                }, a.sscartesian, {
                    enablemousetracking: !0
                })
            }]);
            n.register("module", ["private", "modules.renderer.js-column3d", function() {
                var a = this.hcLib,
                    b = !a.CREDIT_REGEX.test(this.window.location.hostname),
                    a = a.chartAPI;
                a("column3d", {
                    friendlyName: "3D Column Chart",
                    defaultDatasetType: "column3d",
                    applicableDSList: {
                        column3d: !0
                    },
                    defaultPlotShadow: 1,
                    creditLabel: b,
                    is3D: !0,
                    standaloneInit: !0,
                    hasLegend: !1,
                    singleseries: !0,
                    fireGroupEvent: !0,
                    defaultZeroPlaneHighlighted: !1
                }, a.sscartesian3d, {
                    showplotborder: 0,
                    enablemousetracking: !0
                })
            }]);
            n.register("module", ["private", "modules.renderer.js-bar2d", function() {
                var a = this.hcLib,
                    b = a.chartAPI,
                    a = !a.CREDIT_REGEX.test(this.window.location.hostname);
                b("bar2d", {
                    friendlyName: "Bar Chart",
                    isBar: !0,
                    standaloneInit: !0,
                    defaultDatasetType: "bar2d",
                    creditLabel: a,
                    applicableDSList: {
                        bar2d: !0
                    },
                    singleseries: !0,
                    spaceManager: b.barbase
                }, b.ssbarcartesian, {
                    enablemousetracking: !0
                })
            }]);
            n.register("module", ["private", "modules.renderer.js-bar3d", function() {
                var a = this.hcLib,
                    b = !a.CREDIT_REGEX.test(this.window.location.hostname),
                    a = a.chartAPI;
                a("bar3d", {
                    friendlyName: "3D Bar Chart",
                    defaultDatasetType: "bar3d",
                    applicableDSList: {
                        bar3d: !0
                    },
                    defaultPlotShadow: 1,
                    fireGroupEvent: !0,
                    standaloneInit: !0,
                    creditLabel: b,
                    is3D: !0,
                    isBar: !0,
                    singleseries: !0,
                    defaultZeroPlaneHighlighted: !1
                }, a.ssbarcartesian3d, {
                    showplotborder: 0,
                    enablemousetracking: !0
                })
            }]);
            n.register("module", ["private", "modules.renderer.js-area2d", function() {
                var a = this.hcLib,
                    b = !a.CREDIT_REGEX.test(this.window.location.hostname),
                    a = a.chartAPI;
                a("area2d", {
                    friendlyName: "Area Chart",
                    standaloneInit: !0,
                    creditLabel: b,
                    defaultDatasetType: "area",
                    singleseries: !0,
                    defaultPlotShadow: 0
                }, a.sscartesian, {
                    enablemousetracking: !0
                }, a.areabase)
            }]);
            n.register("module", ["private", "modules.renderer.js-line", function() {
                var a = this.hcLib,
                    b = a.chartAPI,
                    a = !a.CREDIT_REGEX.test(this.window.location.hostname);
                b("line", {
                    friendlyName: "Line Chart",
                    standaloneInit: !0,
                    creditLabel: a,
                    defaultPlotShadow: 1,
                    singleseries: !0,
                    axisPaddingLeft: 0,
                    axisPaddingRight: 0,
                    defaultDatasetType: "line"
                }, b.sscartesian, {
                    zeroplanethickness: 1,
                    enablemousetracking: !0,
                    zeroplanealpha: 40,
                    showzeroplaneontop: 0
                }, b.areabase)
            }]);
            n.register("module", ["private", "modules.renderer.js-pareto2d", function() {
                var a = this.hcLib,
                    b = !a.CREDIT_REGEX.test(this.window.location.hostname),
                    m = a.chartAPI,
                    F = a.pluck,
                    Y = a.pluckNumber,
                    aa = a.componentDispose;
                m("pareto2d", {
                    defaultDatasetType: "column2d",
                    singleseries: !0,
                    creditLabel: b,
                    _createDatasets: function() {
                        var a = this.components,
                            b = this.jsonData,
                            u = this.is3D,
                            K = a.numberFormatter,
                            k = b.data || b.dataset && b.dataset[0] && b.dataset[0].data,
                            r = k && k.length,
                            p = b.chart,
                            z = this.defaultDatasetType,
                            b = new(n.get("component", ["dataset", "Pareto"])),
                            x = Y(p.showcumulativeline, 1),
                            D = [],
                            l, v;
                        if (k) {
                            for (p = 0; p < r; p++) l = k[p], v = K.getCleanValue(l.value), null !== v && "true" !== l.vline && !0 !== l.vline && 1 !== l.vline && "1" !== l.vline && D.push(l);
                            this.config.categories = D;
                            K = a.dataset || (a.dataset = []);
                            (k = F(z)) && k.toLowerCase();
                            k = n.register("component", ["datasetGroup", "column"]);
                            k = a[void 0] = new k;
                            k.chart = this;
                            k.init();
                            if (r = u ? n.get("component", ["dataset", "Column3d"]) : n.get("component", ["dataset", "Column"]))(u =
                                K[0]) ? (z = D.length, k = u.components.data.length, z < k && u.removeData(z, k - z), u.JSONData = {
                                data: D
                            }, b.configure.call(u)) : (u = new r, K.push(u), u.chart = this, u.index = p, k && k.addDataSet(u, 0, 0), b.init(u, D, z));
                            a = a.yAxis[1];
                            if (x) a && a.setAxisConfig({
                                    drawLabels: !0,
                                    drawPlotLines: !0,
                                    drawAxisName: !0,
                                    drawAxisLine: !0,
                                    drawPlotBands: !0,
                                    drawTrendLines: !0,
                                    drawTrendLabels: !0
                                }), a.show(), r = n.get("component", ["dataset", "line"]), (u = K[1]) ? (z = D.length, k = u.components.data.length, z < k && u.removeData(z, k - z), u.JSONData = {
                                    data: D
                                }, b.configure.call(u)) :
                                (u = new r, K.push(u), u.chart = this, u.index = p, b.init(u, D, "line"));
                            else {
                                if (u = K[1]) aa.call(u), K.pop();
                                a && (a.setAxisConfig({
                                    drawLabels: !1,
                                    drawPlotLines: !1,
                                    drawAxisName: !1,
                                    drawAxisLine: !1,
                                    drawPlotBands: !1,
                                    drawTrendLines: !1,
                                    drawTrendLabels: !1
                                }), a.hide())
                            }
                        } else this.setChartMessage()
                    },
                    _setCategories: function() {
                        var a = this.components,
                            b = this.jsonData,
                            u = b.dataset,
                            K = a.numberFormatter,
                            a = a.xAxis,
                            b = b.data || u && u[0].data || [],
                            u = [],
                            k, r = b.length,
                            p, z = {},
                            x = 0,
                            D;
                        for (p = 0; p < r; p++) {
                            k = b[p];
                            D = K.getCleanValue(k.value, !0);
                            if ("true" ===
                                k.vline || "1" === k.vline || 1 === k.vline || !0 === k.vline) z[x] = k;
                            else if (null === D) continue;
                            else k.value = D, u.push(k);
                            x++
                        }
                        u.sort(function(a, b) {
                            return b.value - a.value
                        });
                        for (p in z) u.splice(p, 0, z[p]);
                        a[0].setCategory(u)
                    },
                    standaloneInit: !0,
                    hasLegend: !1,
                    isPercentage: !0
                }, m.msdybasecartesian, {
                    enablemousetracking: !0,
                    plotfillalpha: a.preDefStr.NINETYSTRING
                })
            }]);
            n.register("module", ["private", "modules.renderer.js-pareto3d", function() {
                var a = this.hcLib,
                    b = !a.CREDIT_REGEX.test(this.window.location.hostname),
                    m = a.chartAPI;
                m("pareto3d", {
                    standaloneInit: !0,
                    is3D: !0,
                    friendlyName: "3D Pareto Chart",
                    creditLabel: b,
                    fireGroupEvent: !0,
                    defaultPlotShadow: 1,
                    singleseries: !0,
                    hasLegend: !1,
                    defaultDatasetType: "column3d",
                    _createDatasets: m.pareto2d,
                    _setCategories: m.pareto2d,
                    isPercentage: !0
                }, m.msdybasecartesian3d, {
                    plotfillalpha: a.preDefStr.NINETYSTRING,
                    use3dlineshift: 1,
                    enablemousetracking: !0
                })
            }]);
            n.register("module", ["private", "modules.renderer.js-pie2d", function() {
                var a = this,
                    b = a.hcLib,
                    m = b.hasTouch,
                    F = a.window,
                    Y = F.document,
                    aa = b.BLANKSTRING,
                    W = b.pluck,
                    G = b.pluckNumber,
                    u = b.toRaphaelColor,
                    K = "createTouch" in Y,
                    k = K && !(F.navigator.maxTouchPoints || F.navigator.msMaxTouchPoints),
                    r = b.each,
                    p = b.plotEventHandler,
                    z = b.schedular,
                    x = b.priorityList,
                    D = 8 === F.document.documentMode ? "visible" : "",
                    l = Math,
                    v = l.sin,
                    w = l.cos,
                    T = l.round,
                    n = l.atan2,
                    la = l.min,
                    ja = l.max,
                    ca = l.abs,
                    ga = l.PI,
                    sa = l.ceil,
                    ta = l.floor,
                    oa = ga / 180,
                    pa = 180 / ga,
                    qa = Math.PI,
                    ha = qa / 2,
                    da = 2 * qa,
                    Ea = qa + ha,
                    wa = b.graphics.convertColor,
                    M = b.POSITION_BOTTOM,
                    P = b.POSITION_RIGHT,
                    ga = b.chartAPI,
                    ua = b.COMMASTRING,
                    ya = b.ZEROSTRING,
                    va = b.ONESTRING,
                    b = !b.CREDIT_REGEX.test(F.location.hostname),
                    za = function(a, f, e, c, d) {
                        return n((f - e[1] - c.top) / d, a - e[0] - c.left)
                    };
                ga("pie2d", {
                    friendlyName: "Pie Chart",
                    standaloneInit: !0,
                    defaultSeriesType: "pie",
                    defaultPlotShadow: 1,
                    reverseLegend: 1,
                    alignCaptionWithCanvas: 0,
                    sliceOnLegendClick: !0,
                    isSingleSeries: !0,
                    dontShowLegendByDefault: !0,
                    defaultDatasetType: "Pie2D",
                    applicableDSList: {
                        Pie2D: !0
                    },
                    defaultZeroPlaneHighlighted: !1,
                    creditLabel: b,
                    _plotDragMove: function(b, f, e, c, d) {
                        var g = this.data("plotItem"),
                            A = g.chart,
                            g = g.seriesData,
                            h = A.components.dataset[0].config;
                        isNaN(b) || isNaN(f) || !h.enableRotation || g.singletonCase || g.isRightClicked || (b = za.call(d, e, c, g.pieCenter, g.chartPosition, 1), g.isRotating || (g.dragStartAngle !== b && (g.isRotating = !0), a.raiseEvent("RotationStart", {
                            startingAngle: g._rotationalStartAngle = A._startingAngle()
                        }, A.chartInstance)), h.startAngle += b - g.dragStartAngle, g.dragStartAngle = b, g.moveDuration = 0, h.updateInited || (h.updateInited = !0, setTimeout(A._batchRotate || (A._batchRotate = function() {
                            A._rotate();
                            h.updateInited = !1
                        }), 50)))
                    },
                    _plotDragStart: function(a, f, e) {
                        var c = this.data("plotItem"),
                            d = c.chart,
                            c = c.seriesData,
                            g = d.components.dataset[0].config,
                            A = -g.startAngle;
                        c.isRightClicked = m || 0 === e.button || 1 === e.button ? !1 : !0;
                        if (g.enableRotation && !c.isRightClicked) {
                            c.isRotating = !1;
                            g = d.linkedItems.container;
                            d = {
                                left: 0,
                                top: 0
                            };
                            if (g.getBoundingClientRect) g = g.getBoundingClientRect(), d.top = g.top + (F.pageYOffset || Y.scrollTop || 0) - (Y.clientTop || 0), d.left = g.left + (F.pageXOffset || Y.scrollLeft || 0) - (Y.clientLeft || 0);
                            else
                                for (; g;) d.left +=
                                    g.offsetLeft || 0, d.top += g.offsetTop || 0, g !== Y.body && g !== Y.documentElement && (d.left -= g.scrollLeft || 0, d.top -= g.scrollTop || 0), g = g.offsetParent;
                            c.chartPosition = d;
                            a = za.call(e, a, f, c.pieCenter, c.chartPosition, 1);
                            c.dragStartAngle = a;
                            c.startingAngleOnDragStart = A
                        }
                    },
                    _plotDragEnd: function(b) {
                        var f, e = this.data("plotItem"),
                            c = e.chart,
                            d = c.config,
                            g = e.seriesData;
                        g.isRightClicked || (d.clicked = !0, c.disposed || c._rotate(), !g.isRotating && c._plotGraphicClick.call(e.graphic, b), delete d.clicked, g.isRotating && (setTimeout(function() {
                            g.isRotating = !1
                        }, 0), a.raiseEvent("RotationEnd", {
                            startingAngle: f = c._startingAngle(),
                            changeInAngle: f - g._rotationalStartAngle
                        }, c.chartInstance)))
                    },
                    _plotRollOver: function(a) {
                        var f = this.plotItem || this.data("plotItem"),
                            e = f.chart,
                            c = e.components.dataset[0].config,
                            d, g;
                        c.isRotating || (p.call(this, e, a, "DataPlotRollOver"), e.onPlotHover(this, !0));
                        c.isHovered = !0;
                        (a = f.innerDiameter) && (d = f.centerLabelConfig) && (g = d.label) && e.drawDoughnutCenterLabel(g, f.center[0], f.center[1], a, a, d, !1)
                    },
                    onPlotHover: function(a, f) {
                        var e = a.data("plotItem"),
                            c = e.center,
                            d = e.rolloverProperties || {},
                            g = f ? d.color : e.color,
                            A = f ? d.borderWidth : e.borderWidth,
                            h = f ? d.borderColor : e.borderColor;
                        g && (f && (g.cx = c[0], g.cy = c[1], g.r = e.radius), d.enabled && e.graphic.attr({
                            fill: u(g),
                            "stroke-width": A,
                            stroke: h
                        }))
                    },
                    _plotRollOut: function(a) {
                        var f = this.plotItem || this.data("plotItem"),
                            e = f.chart,
                            c = e.components.dataset[0].config,
                            d, g;
                        c.isRotating || (p.call(this, e, a, "DataPlotRollOut"), e.onPlotHover(this, !1));
                        c.isHovered = !1;
                        (a = f.innerDiameter) && (d = c.centerLabelConfig) && ((g = d.label) || !g) && e.drawDoughnutCenterLabel(g,
                            f.center[0], f.center[1], a, a, d, !1)
                    },
                    _rotate: function() {
                        var a, f, e = this.components.dataset[0],
                            c = e.config,
                            d = e.components.data,
                            g = this.config,
                            A = c.slicingDistance,
                            e = e.config,
                            h = da / e.valueTotal,
                            ba = g.canvasLeft + .5 * g.canvasWidth,
                            g = g.canvasTop + .5 * g.canvasHeight,
                            q = c.pieMinRadius,
                            y = .5 * (c.piePlotOptions.innerSize || 0),
                            ma, R, t, b, k;
                        ma = (c.startAngle || 0) % da;
                        for (k = 0; k < d.length; k += 1) t = d[k].config, b = d[k].graphics, a = t.y, null !== a && void 0 !== a && (R = ma, ma -= e.singletonCase ? da : a * h, a = .5 * (ma + R), t.angle = a, t.transX = w(a) * A, t.transY =
                            v(a) * A, t.slicedTranslation = "t" + w(a) * A + ua + v(a) * A, (f = t._rotateAttrs) || (f = t._rotateAttrs = {
                                ringpath: [],
                                transform: aa
                            }), a = f.ringpath, a[0] = ba, a[1] = g, a[2] = q, a[3] = y, a[4] = ma, a[5] = R, f.transform = t.sliced ? t.slicedTranslation : aa, b.element.attr(f));
                        this.placeDataLabels(!0, d, c)
                    },
                    getPlotData: function(a, f) {
                        var e = this.components.dataset[0],
                            c = e.components.data[a].config,
                            e = e.config.userData || (e.config.userData = []),
                            d, g;
                        if (e[a]) e = e[a];
                        else {
                            e = e[a] = {};
                            for (g in c) "object" !== typeof(d = c[g]) && "function" !== typeof d && 0 !== g.indexOf("_") &&
                                (e[g] = d);
                            e.value = e.y;
                            e.categoryLabel = e.label = e.seriesName;
                            delete e.y;
                            delete e.total;
                            delete e.doNotSlice;
                            delete e.name;
                            delete e.seriesName;
                            delete e.centerAngle;
                            delete e.showInLegend;
                            delete e.angle;
                            delete e.endAngle;
                            delete e.isVisible;
                            delete e.setColor;
                            delete e.slicedTranslation;
                            delete e.startAngle;
                            delete e.transX;
                            delete e.transY;
                            delete e.pValue
                        }
                        e.sliced = f;
                        return e
                    },
                    _plotGraphicClick: function(b) {
                        var f, e = this.element || this,
                            c = e.plotItem || e.data("plotItem"),
                            d = e.data("eventArgs") || {},
                            g = c.chart,
                            A = c.index,
                            h = g.components.dataset[0],
                            ba = h.config,
                            q = ba.enableMultiSlicing,
                            h = h.components.data[A],
                            y = h.graphics,
                            h = h.config,
                            ma = h.doNotSlice,
                            R;
                        f = h.slicedTranslation;
                        var t = g.get("config", "animationObj"),
                            l = t.duration || 200,
                            x = t.dummyObj,
                            Ma = t.animObj,
                            t = t.animType;
                        !ba.isRotating && p.call(e, g, b);
                        if (!(ba.isRotating || ba.singletonCase || ma || (b = !q && g.sliceInOtherPies(A), (R = h.sliced) && b))) {
                            if (K && !k) {
                                b = (new Date).getTime();
                                if (c.lastSliceTimeStamp && 400 > b - c.lastSliceTimeStamp) return;
                                c.lastSliceTimeStamp = b
                            }
                            ba = y.element;
                            c = y.connector;
                            q = y.label || y.dataLabel;
                            f = "object" === typeof f ? "t" + f : f;
                            ma = h.connectorPath;
                            y = (R ? -1 : 1) * h.transX;
                            b = (R ? -1 : 1) * h.transY;
                            e = ba.data("eventArgs") || ba.data("eventArgs", {});
                            a.raiseEvent("slicingStart", {
                                slicedState: R,
                                dataIndex: "index" in d && d.index,
                                data: g.getPlotData(A, R)
                            }, g.chartInstance);
                            ba.animateWith(x, Ma, {
                                transform: R ? "t0,0" : f
                            }, l, t, function() {
                                a.raiseEvent("slicingEnd", {
                                    slicedState: R,
                                    dataIndex: "index" in d && d.index,
                                    data: g.getPlotData(A, R)
                                }, g.chartInstance)
                            });
                            q && q.x && ((f = q.data("textPos")) || (f = q.data("textPos", {
                                x: q.x,
                                y: q.y
                            })), q.animateWith(x, Ma, {
                                x: q.x + (R ? 0 : y)
                            }, l, t), f.x = q.x + (R ? 0 : y));
                            ma && (f = ma.slice(0), f[1] += y, f[2] += b, f[4] += y, f[6] += y, c.animateWith(x, Ma, {
                                path: f
                            }, l, t), h.connectorPath = f);
                            return e.isSliced = R = h.sliced = !R
                        }
                    },
                    sliceInOtherPies: function(a) {
                        var f = this.components.dataset[0],
                            e = f.components.data,
                            c = e.length,
                            d = 0,
                            g;
                        for (f.enableMultiSlicing = !0; c--;) c !== a && (g = e[c]).config.sliced && ++d && this._plotGraphicClick.call(g.graphics);
                        f.enableMultiSlicing = !1;
                        return !!d
                    },
                    placeDataLabels: function() {
                        var a = function(e, c) {
                                return e.point.value -
                                    c.point.value
                            },
                            f = function(e, c) {
                                return e.angle - c.angle
                            },
                            e = ["start", "start", "end", "end"],
                            c = [-1, 1, 1, -1],
                            d = [1, 1, -1, -1];
                        return function(g, A, h, ba) {
                            var q = this.config,
                                y = this.components,
                                ma = y.dataset[0],
                                R = ma.graphics,
                                t = ma.config,
                                b = q.canvasLeft,
                                k = q.canvasTop,
                                ma = q.canvasWidth,
                                x = b + .5 * q.canvasWidth,
                                p = k + .5 * q.canvasHeight,
                                K = this.linkedItems.smartLabel,
                                C = t.dataLabelOptions,
                                z = C.style,
                                I = G(sa(parseFloat(z.lineHeight)), 12),
                                ra = 1 === A.length ? q.singletonPlaceValue : !1,
                                u = C.skipOverlapLabels,
                                T = C.manageLabelOverflow,
                                W = C.connectorPadding,
                                xa;
                            xa = ba && ba.metrics || [x, p, 2 * t.pieMinRadius, t.innerSize || 0];
                            var N = xa[1],
                                B = xa[0];
                            ba = .5 * xa[2];
                            var t = [
                                    [],
                                    [],
                                    [],
                                    []
                                ],
                                x = h.labelsRadius = ba + C.distance,
                                E = p = parseInt(z.fontSize, 10),
                                L = E / 2,
                                W = [W, W, -W, -W];
                            h = h.labelsMaxInQuadrant = ta(x / E);
                            var C = C.isSmartLineSlanted,
                                S = xa[3] / 2,
                                fa, O, J, X, U, aa, F, Y, m, n, ea, Z, M, Q, ia;
                            xa = Number.POSITIVE_INFINITY;
                            var V, na;
                            O = [];
                            J = [];
                            O = this.get("config", "animationObj");
                            var P = g ? 0 : O.duration || 0,
                                ga = O.dummyObj,
                                oa = O.animObj,
                                pa = O.animType,
                                ua = this._plotDragMove,
                                wa = this._plotDragStart,
                                va = this._plotDragEnd,
                                ya = this._plotRollOver,
                                Xa = this._plotRollOut,
                                Ya = y.paper,
                                Aa = R.dataLabelContainer,
                                H, Da;
                            K.useEllipsesOnOverflow(q.useEllipsesWhenOverflow);
                            g || K.setStyle(z);
                            if (1 == A.length && !S && ra) O = A[0], (H = O.config._textAttrs).text && (na = O.graphics, V = O.config, ea = na.label, O.slicedTranslation = [b, k], H["text-anchor"] = "middle", H.x = 0, H.y = 0, H.transform = ["t", B, N], ea ? ea.animateWith(ga, oa, H, P, pa) : ea = na.label = Ya.text(H, Da, Aa).drag(ua, wa, va).hover(ya, Xa), ea.x = B, ea.data("textPos", {
                                x: B,
                                y: N
                            }).data("plotItem", H.plotItem).data("eventArgs",
                                H.eventArgs), null !== V.y && void 0 !== V.y && ea.show(), na.connector && na.connector.attr({
                                path: []
                            }));
                            else if (ra) ia = S + (ba - S) / 2, r(A, function(e) {
                                V = e.config;
                                (H = V._textAttrs).text && (na = e.graphics, ea = na.label, null !== V.y && void 0 !== V.y && ((n = na.connector) && n.show(), ea && ea.show()), H.transform = "t0,0", m = V.angle, Y = N + ia * v(m), X = B + ia * w(m), H._x = X, H._y = Y, e.sliced && (Q = e.slicedTranslation, Z = Q[0] - b, M = Q[1] - k, X += Z, Y += M), H["text-anchor"] = "middle", H.x = 0, H.y = 0, H.transform = ["t", X, Y], ea ? ea.animateWith(ga, oa, H, P, pa) : ea = na.label = Ya.text(H,
                                    Da, Aa).drag(ua, wa, va).hover(ya, Xa), ea.x = H._x, ea.x = H._x, ea.y = H._y, ea.data("plotItem", H.plotItem).data("eventArgs", H.eventArgs), H.visibility === D && ea.show())
                            });
                            else {
                                for (g = A.length - 1; 0 <= g; g--)
                                    if (O = A[g], V = O.config, H = V._textAttrs, H.text = V.displayValue) na = O.graphics, null !== V.y && void 0 !== V.y && (ea = na.label, (n = na.connector) && n.show(), ea && ea.show()), H.text = V.displayValue, H.transform = "t0,0", m = V.angle % da, 0 > m && (m = da + m), y = 0 <= m && m < ha ? 1 : m < qa ? 2 : m < Ea ? 3 : 0, t[y].push({
                                        point: O,
                                        angle: m
                                    });
                                for (g = A = 4; g--;) {
                                    if (u && (y = t[g].length -
                                            h, 0 < y))
                                        for (t[g].sort(a), R = t[g].splice(0, y), y = 0, ra = R.length; y < ra; y += 1) O = R[y].point, H = O.config._textAttrs, na = O.graphics, na.label && na.label.attr("visibility", "hidden"), na.connector && na.connector.attr({
                                            visibility: "hidden"
                                        });
                                    t[g].sort(f)
                                }
                                g = ja(t[0].length, t[1].length, t[2].length, t[3].length);
                                y = ja(la(g, h) * E, x + E);
                                J = t[0].concat(t[1]);
                                O = t[2].concat(t[3]);
                                for (g = J.length - 1; 0 <= g; g--) R = J[g].point.config, delete R.clearance, delete R.clearanceShift, S = ca(y * v(R.angle)), Math.abs(xa - S) < 2 * I && (R.clearance = 0, J[g + 1].point.clearanceShift =
                                    I / 2), xa = S;
                                xa = Number.POSITIVE_INFINITY;
                                g = 0;
                                for (ra = O.length; g < ra; g++) R = O[g].point.config, delete R.clearance, delete R.clearanceShift, S = ca(y * v(R.angle)), Math.abs(xa - S) < 2 * I && (R.clearance = 0, O[g - 1].point.clearanceShift = I / 2), xa = S;
                                t[1].reverse();
                                for (t[3].reverse(); A--;) {
                                    R = t[A];
                                    ra = R.length;
                                    u || (E = ra > h ? y / ra : p, L = E / 2);
                                    I = ra * E;
                                    xa = y;
                                    for (g = 0; g < ra; g += 1, I -= E) S = ca(y * v(R[g].angle)), xa < S ? S = xa : S < I && (S = I), xa = (R[g].oriY = S) - E;
                                    z = e[A];
                                    ra = y - (ra - 1) * E;
                                    xa = 0;
                                    for (g = R.length - 1; 0 <= g; --g, ra += E)
                                        if (O = R[g].point, m = R[g].angle, V = O.config,
                                            H = V._textAttrs, H.text && (Da = V._textCss, na = O.graphics, O = V.sliced, ea = na.label, S = ca(y * v(m)), S < xa ? S = xa : S > ra && (S = ra), xa = S + E, I = void 0 === V.clearance ? 2 * sa(G(parseFloat(V.style.border), 12), 12) : 2 * sa(G(parseFloat(V.style.border), V.clearance)), aa = (S + R[g].oriY) / 2, S = B + d[A] * x * w(l.asin(aa / y)), aa *= c[A], aa += N, F = N + ba * v(m), J = B + ba * w(m), (2 > A && S < J || 1 < A && S > J) && (S = J), X = S + W[A], Y = aa - L - 2, U = X + W[A], H._x = U, T && (fa = 1 < A ? U - q.canvasLeft : q.canvasLeft + ma - U, K.setStyle(V.style), I = G(sa(parseFloat(V.style.lineHeight)), 12) + I, I = K.getSmartText(V.displayValue,
                                                fa, I), void 0 === V.clearance && I.height > E && (aa += E), H.text = I.text, H.tooltip = I.tooltext), H._y = Y, O && (Z = V.transX, M = V.transY, X += Z, S += Z, J += Z, F += M, U += Z), H["text-anchor"] = z, H.vAlign = "middle", H.x = U, H.y = aa, (I = ea && ea.data("textPos")) ? ea.attr({
                                                x: I.x,
                                                y: I.y
                                            }).animateWith(ga, oa, H, P) : ea = na.label = Ya.text(H, Da, Aa).drag(ua, wa, va).hover(ya, Xa), ea.x = H._x, ea._x = H._x, ea.y = H._y, H.tooltip && (ea.tooltip(H.tooltip), delete H.tooltip), H.visibility === D && ea.show(), ea.data("textPos", {
                                                x: U,
                                                y: aa
                                            }).data("plotItem", H.plotItem).data("eventArgs",
                                                H.eventArgs), n = na.connector)) V.connectorPath = I = ["M", J, F, "L", C ? S : J, aa, X, aa], (O = n.data("connectorPath")) ? q.clicked || n.attr({
                                            path: O.path
                                        }).animateWith(ga, oa, {
                                            path: I
                                        }, P) : n.attr({
                                            path: I
                                        }), n.data("connectorPath", {
                                            path: I
                                        })
                                }
                            }
                        }
                    }(),
                    _spaceManager: function() {
                        var a = this.config,
                            f = this.components,
                            e = f.dataset[0],
                            c = e.components.data,
                            d = e.config,
                            g = f.legend,
                            A = f.colorManager,
                            h = this.linkedItems.smartLabel,
                            ba = d.dataLabelCounter,
                            q = 0,
                            y = this.jsonData.chart,
                            f = G(y.managelabeloverflow, 0),
                            ma = G(y.slicingdistance),
                            R = d.preSliced ||
                            a.allPlotSliceEnabled !== ya || y.showlegend === va && y.interactivelegend !== ya ? ca(G(ma, 20)) : 0,
                            t = G(y.pieradius, 0),
                            b = (ma = G(y.enablesmartlabels, y.enablesmartlabel, 1)) ? G(y.skipoverlaplabels, y.skipoverlaplabel, 1) : 0,
                            k = G(y.issmartlineslanted, 1),
                            l = ba ? G(y.labeldistance, y.nametbdistance, 5) : R,
                            x = G(y.smartlabelclearance, 5),
                            r = a.width,
                            C = a.height,
                            p = (this._manageActionBarSpace(.225 * C) || {}).bottom,
                            r = r - (a.marginRight + a.marginLeft),
                            C = C - (a.marginTop + a.marginBottom) - (p ? p + a.marginBottom : 0),
                            p = la(C, r),
                            I = W(y.smartlinecolor, A.getColor("plotFillColor")),
                            D = G(y.smartlinealpha, 100),
                            K = G(y.smartlinethickness, .7),
                            e = d.dataLabelOptions = e._parseDataLabelOptions(),
                            A = e.style,
                            A = ba ? G(parseInt(A.lineHeight, 10), 12) : 0,
                            w = 0 === t ? .15 * p : t,
                            z = 2 * w,
                            v = {
                                bottom: 0,
                                right: 0
                            },
                            u = d.pieYScale,
                            p = d.pieSliceDepth;
                        e.connectorWidth = K;
                        e.connectorPadding = G(y.connectorpadding, 5);
                        e.connectorColor = wa(I, D);
                        ba && (ma && (l = x), l += R);
                        x = z + 2 * (A + l);
                        x = this._manageChartMenuBar(x < C ? C - x : C / 2);
                        C -= (x.top || 0) + (x.bottom || 0);
                        d.showLegend && (this.hasLegend = !0, W(y.legendposition, M).toLowerCase() !== P ? (v = g._manageLegendPosition(C /
                            2), C -= v.bottom) : (v = g._manageLegendPosition(C / 2), r -= v.right));
                        this._allocateSpace(v);
                        h.useEllipsesOnOverflow(a.useEllipsesWhenOverflow);
                        if (1 !== ba)
                            for (; ba--;) h.setStyle(c[ba].config.style || a.dataLabelStyle), g = h.getOriSize(c[ba].config.displayValue), q = ja(q, g.width);
                        0 === t ? w = this._stubRadius(r, q, C, l, R, A, w) : (d.slicingDistance = R, d.pieMinRadius = w, e.distance = l);
                        a = C - 2 * (w * u + A);
                        d.managedPieSliceDepth = p > a ? p - a : d.pieSliceDepth;
                        e.isSmartLineSlanted = k;
                        e.enableSmartLabels = ma;
                        e.skipOverlapLabels = b;
                        e.manageLabelOverflow =
                            f
                    },
                    _stubRadius: function(a, f, e, c, d, g, A) {
                        var h = this.components.dataset[0],
                            ba = h.config,
                            q = G(this.jsonData.chart.slicingdistance),
                            h = ba.dataLabelOptions || (ba.dataLabelOptions = h._parseDataLabelOptions()),
                            y = 0,
                            y = la(a / 2 - f - d, e / 2 - g) - c;
                        y >= A ? A = y : q || (d = c = ja(la(c - (A - y), d), 10));
                        ba.slicingDistance = d;
                        ba.pieMinRadius = A;
                        h.distance = c;
                        return A
                    },
                    getDataSet: function(a) {
                        return this.components.dataset[a]
                    },
                    _startingAngle: function(a, f) {
                        var e, c = this.components.dataset[0].config,
                            d = (e = c.startAngle) * -pa + (0 > -1 * e ? 360 : 0);
                        isNaN(a) ||
                            (c.singletonCase || c.isRotating ? d = c.startAngle : (a += f ? d : 0, c.startAngle = -a * oa, this._rotate(a), d = a));
                        return T(100 * ((d %= 360) + (0 > d ? 360 : 0))) / 100
                    },
                    eiMethods: {
                        isPlotItemSliced: function(a) {
                            var f, e, c, d = this.apiInstance;
                            return d && d.components.dataset && (c = d.components.dataset[0]) && (f = c.components.data) && f.length && f[a] && (e = f[a].config) && e.sliced
                        },
                        addData: function() {
                            var a, f = this.apiInstance;
                            return f && f.components.dataset && (a = f.components.dataset[0]) && a.addData.apply(a, arguments)
                        },
                        removeData: function() {
                            var a, f = this.apiInstance;
                            return f && f.components.dataset && (a = f.components.dataset[0]) && a.removeData.apply(a, arguments)
                        },
                        updateData: function() {
                            var a, f = this.apiInstance;
                            return f && f.components.dataset && (a = f.components.dataset[0]) && a.updateData.apply(a, arguments)
                        },
                        slicePlotItem: function(a, f, e) {
                            var c, d, g, A, h, ba = !!f,
                                q = this.apiInstance,
                                y = q.chartInstance.args.asyncRender,
                                ma = q.getJobList();
                            if (e || y) ma.eiMethods.push(z.addJob(function() {
                                h = q && q.components.dataset && (c = q.components.dataset[0]) && (d = c.components.data) && (A = d.length) && d[a =
                                    c.config.reversePlotOrder ? A - a - 1 : a] && (g = d[a].config) && ((ba !== g.sliced || void 0 === f) && q._plotGraphicClick.call(d[a].graphics.element) || g.sliced);
                                "function" === typeof e && e(h)
                            }, q, [], x.postRender));
                            else return q && q.components.dataset && (c = q.components.dataset[0]) && (d = c.components.data) && (A = d.length) && d[a = c.config.reversePlotOrder ? A - a - 1 : a] && (g = d[a].config) && ((ba !== g.sliced || void 0 === f) && q._plotGraphicClick.call(d[a].graphics.element) || g.sliced)
                        },
                        centerLabel: function(a, f) {
                            var e = this.apiInstance,
                                c = e.getJobList(),
                                d = function() {
                                    var c = e.components.dataset[0],
                                        d = c.config,
                                        h = d.piePlotOptions.innerSize,
                                        ba = d.pieCenter,
                                        q = ba[0],
                                        ba = ba[1],
                                        d = d.centerLabelConfig,
                                        y;
                                    if ("object" !== typeof f) f = d;
                                    else
                                        for (y in d) void 0 === f[y] && (f[y] = d[y]);
                                    f.label = a;
                                    c.centerLabelConfig = f;
                                    h && e.drawDoughnutCenterLabel(a || "", q, ba, h, h, f, !0)
                                };
                            e.chartInstance.args.asyncRender ? c.eiMethods.push(z.addJob(d, e, [], x.postRender)) : d()
                        },
                        startingAngle: function(a, f, e) {
                            var c = this.apiInstance,
                                d = c.chartInstance.args.asyncRender,
                                g = c.getJobList(),
                                A;
                            if (e || d) g.eiMethods.push(z.addJob(function() {
                                A =
                                    c._startingAngle(a, f);
                                "function" === typeof e && e(A)
                            }, c, [], x.postRender));
                            else return c._startingAngle(a, f)
                        }
                    }
                }, ga.guageBase, {
                    plotborderthickness: 1,
                    alphaanimation: 0,
                    singletonPlaceValue: !0,
                    usedataplotcolorforlabels: 0,
                    enableslicing: va
                })
            }]);
            n.register("module", ["private", "modules.renderer.js-pie3d", function() {
                function a(f) {
                    this.config = {};
                    this.linkedItems = {
                        chart: f
                    }
                }
                var b = this,
                    m = b.hcLib,
                    F = m.Raphael,
                    Y = m.hasTouch,
                    aa = b.window,
                    W = m.getPosition,
                    G = m.pluck,
                    u = m.pluckNumber,
                    K = m.each,
                    k = m.plotEventHandler,
                    r = 8 === aa.document.documentMode ?
                    "visible" : "",
                    p = Math,
                    z = p.sin,
                    x = p.cos,
                    D = p.round,
                    l = p.atan2,
                    v = p.min,
                    w = p.max,
                    T = p.abs,
                    n = p.PI,
                    la = p.ceil,
                    ja = p.floor,
                    ca = Math.PI,
                    ga = ca / 2,
                    sa = 2 * ca,
                    ta = ca + ga,
                    oa = m.chartAPI,
                    pa = !m.CREDIT_REGEX.test(aa.location.hostname),
                    qa = function(f, e, c, d, g) {
                        return l((e - c[1] - d.top) / g, f - c[0] - d.left)
                    },
                    ha = m.graphics.getDarkColor,
                    da = m.graphics.getLightColor,
                    Ea = m.getFirstValue,
                    wa = m.graphics.convertColor,
                    M = m.COMMASTRING,
                    P = m.toRaphaelColor,
                    ua = m.hasSVG,
                    ya = function(f, e) {
                        for (var c = [], d = 0, g = f.length; d < g; d++) c[d] = e.call(f[d], f[d], d, f);
                        return c
                    },
                    va = function(f, e) {
                        var c = e ? 360 : sa;
                        f = (f || 0) % c;
                        return 0 > f ? c + f : f
                    },
                    za = {},
                    Ba = {};
                oa("pie3d", {
                    defaultDatasetType: "Pie3D",
                    applicableDSList: {
                        Pie3D: !0
                    },
                    is3D: !0,
                    friendlyName: "3D Pie Chart",
                    fireGroupEvent: !0,
                    creditLabel: pa,
                    getPointColor: function(f) {
                        return f
                    },
                    _configureManager: function() {
                        var f = this.components.dataset[0],
                            e = f.config,
                            c = f.components,
                            f = c.Pie3DManager,
                            c = c.data;
                        f && f.configure(e.pieSliceDepth, 1 === c.length, e.use3DLighting, !1)
                    },
                    defaultPlotShadow: 0,
                    _preDrawCalculate: function() {
                        var f, e, c = this.config,
                            d = 0,
                            g =
                            this.components.dataset[0],
                            A = g.config;
                        f = g.components;
                        e = A.dataLabelOptions;
                        var h = A.pie3DOptions = g._parsePie3DOptions(),
                            ba = G(A.startAngle, 0) % sa,
                            q = A.managedPieSliceDepth,
                            y = A.slicedOffset = h.slicedOffset,
                            ma = c.canvasWidth,
                            R = c.canvasHeight,
                            t = [c.canvasLeft + .5 * ma, c.canvasTop + .5 * R - .5 * q],
                            b, k, c = f.data,
                            l, r = v(ma, R),
                            w, C = e.distance;
                        b = A.pieYScale;
                        var W = A.slicedOffsetY || (A.slicedOffsetY = y * A.pieYScale);
                        l = f.Pie3DManager;
                        t.push(2 * A.pieMinRadius, h.innerSize || 0);
                        t = ya(t, function(e, c) {
                            return (w = /%$/.test(e)) ? [ma, R - q, r, r][c] *
                                parseInt(e, 10) / 100 : e
                        });
                        t[2] /= 2;
                        t[3] /= 2;
                        t.push(t[2] * b);
                        t.push((t[2] + t[3]) / 2);
                        t.push(t[5] * b);
                        g.getX = function(e, c) {
                            k = p.asin((e - t[1]) / (t[2] + C));
                            return t[0] + (c ? -1 : 1) * x(k) * (t[2] + C)
                        };
                        A.center = t;
                        K(c, function(e) {
                            d += e.config.y
                        });
                        A.labelsRadius = t[2] + C;
                        A.labelsRadiusY = A.labelsRadius * b;
                        A.quadrantHeight = (R - q) / 2;
                        A.quadrantWidth = ma / 2;
                        g = D(1E3 * ba) / 1E3;
                        h = g + sa;
                        ba = u(parseInt(e.style.fontSize, 10), 10) + 4;
                        A.maxLabels = ja(A.quadrantHeight / ba);
                        A.labelFontSize = ba;
                        A.connectorPadding = u(e.connectorPadding, 5);
                        A.isSmartLineSlanted =
                            G(e.isSmartLineSlanted, !0);
                        A.connectorWidth = u(e.connectorWidth, 1);
                        A.enableSmartLabels = e.enableSmartLabels;
                        l || (l = f.Pie3DManager = new a(this), this.get("graphics", "datasetGroup").trackTooltip(!0));
                        this._configureManager();
                        for (f = c.length - 1; 0 <= f; --f) e = c[f], e = e.config, ba = g, l = d ? e.y / d : 0, g = D(1E3 * (g + l * sa)) / 1E3, g > h && (g = h), b = g, e.shapeArgs = {
                            start: D(1E3 * ba) / 1E3,
                            end: D(1E3 * b) / 1E3
                        }, e.centerAngle = k = (b + ba) / 2 % sa, e.slicedTranslation = [D(x(k) * y), D(z(k) * W)], ba = x(k) * t[2], A.radiusY = b = z(k) * t[4], e.tooltipPos = [t[0] + .7 * ba, t[1] +
                            b
                        ], e.percentage = 100 * l, e.total = d
                    },
                    placeDataLabels: function() {
                        var f = function(e, c) {
                                return e.point.value - c.point.value
                            },
                            e = function(e, c) {
                                return e.angle - c.angle
                            },
                            c = ["start", "start", "end", "end"],
                            d = [-1, 1, 1, -1],
                            g = [1, 1, -1, -1];
                        return function(a) {
                            var h, ba, q = this.config,
                                y = this.components,
                                b = y.dataset[0],
                                R = b.config,
                                t = b.components.data,
                                k = R.piePlotOptions,
                                l = q.canvasLeft,
                                Ma = q.canvasTop,
                                W = q.canvasWidth,
                                aa = l + .5 * q.canvasWidth,
                                C = Ma + .5 * q.canvasHeight,
                                m = this.linkedItems.smartLabel,
                                I = R.dataLabelOptions,
                                ra = I.style;
                            h = u(la(parseFloat(ra.lineHeight)),
                                12);
                            h = Ea(I.placeInside, !1);
                            var G = I.skipOverlapLabels,
                                Y = I.manageLabelOverflow,
                                n = I.connectorPadding,
                                xa = I.distance,
                                N = I.connectorWidth,
                                B = [
                                    [],
                                    [],
                                    [],
                                    []
                                ],
                                E = parseInt(ra.fontSize, 10),
                                L = E,
                                S = L / 2,
                                n = [n, n, -n, -n],
                                fa = I.isSmartLineSlanted,
                                O, J, X, U, F, Z, M, Pa, P, ea, ka, fb, Q, ia, V, xa = 0 < xa,
                                na = R.center || (R.center = [aa, C, k.size, k.innerSize || 0]),
                                ja = na[1],
                                ha = na[0],
                                k = na[2],
                                aa = na[4],
                                C = R.labelsRadius,
                                da = D(100 * R.labelsRadiusY) / 100,
                                oa = R.maxLabels,
                                ua = R.enableSmartLabels,
                                pa = R.pieSliceDepth / 2;
                            J = this.get("config", "animationObj");
                            var qa =
                                a ? 0 : J.duration,
                                wa = J.dummyObj,
                                va = J.animObj,
                                ya = J.animType,
                                Aa, H, Da = this._plotDragMove,
                                za = this._plotDragStart,
                                Ba = this._plotDragEnd,
                                Qa = this._plotRollOver,
                                Ia = this._plotRollOut,
                                Ja = y.paper,
                                Ra = b.graphics.dataLabelContainer;
                            m.useEllipsesOnOverflow(q.useEllipsesWhenOverflow);
                            if (R.dataLabelCounter)
                                if (a || m.setStyle(ra), 1 == t.length) J = t[0], ia = J.graphics, Q = J.config, H = Q._textAttrs, Aa = Q._textCss, ka = ia.label, V = ia.connector, Q.slicedTranslation = [l, Ma], null !== Q.y && void 0 !== Q.y && (H.visibility = r, H["text-anchor"] = "middle",
                                    H.x = ha, H.y = ja + S - 2, H._x = ha), ka ? ka.animateWith(wa, va, H, qa, ya) : ka = ia.label = Ja.text(H, Aa, Ra).drag(Da, za, Ba).hover(Qa, Ia), H._x && (ka.x = H._x, delete H.x), ka.data("plotItem", H.plotItem).data("eventArgs", H.eventArgs), H.visibility === r && ka.show(), V && V.hide();
                                else if (h) K(t, function(e) {
                                ia = e.graphics;
                                Q = e.config;
                                H = Q._textAttrs;
                                ka = ia.label;
                                if (null !== Q.y && void 0 !== Q.y) {
                                    ea = Q.angle;
                                    P = ja + na[6] * z(ea) + S - 2;
                                    F = ha + na[5] * x(ea);
                                    H._x = F;
                                    H._y = P;
                                    if (Q.sliced) {
                                        e = e.slicedTranslation;
                                        var c = e[1] - Ma;
                                        F += e[0] - l;
                                        P += c
                                    }
                                    H.visibility = r;
                                    H.align =
                                        "middle";
                                    H.x = F;
                                    H.y = P
                                }
                                ka ? ka.animateWith(wa, va, H, qa, ya) : ka = ia.label = Ja.text(H, Aa, Ra).drag(Da, za, Ba).hover(Qa, Ia);
                                ka.data("plotItem", H.plotItem).data("eventArgs", H.eventArgs);
                                H.visibility === r && ka.show();
                                ka.x = H._x;
                                ka._x = H._x;
                                ka._y = H._y
                            });
                            else {
                                K(t, function(e) {
                                    ia = e.graphics;
                                    Q = e.config;
                                    Aa = Q._textCss;
                                    H = Q._textAttrs;
                                    if (H.text = Q.displayValue) ia = e.graphics, null !== Q.y && void 0 !== Q.y && (ka = ia.label, (V = ia.connector) && V.show(), ka && ka.show()), ka = ia.label, ea = Q.angle, 0 > ea && (ea = sa + ea), fb = 0 <= ea && ea < ga ? 1 : ea < ca ? 2 : ea < ta ?
                                        3 : 0, B[fb].push({
                                            point: e,
                                            angle: ea
                                        })
                                });
                                for (y = q = 4; y--;) {
                                    if (G && (b = B[y].length - oa, 0 < b))
                                        for (B[y].sort(f), R = B[y].splice(0, b), b = 0, h = R.length; b < h; b += 1) J = R[b].point, ia = J.graphics, ia.label && ia.label.attr("visibility", "hidden"), ia.connector && ia.connector.attr({
                                            visibility: "hidden"
                                        });
                                    B[y].sort(e)
                                }
                                y = w(B[0].length, B[1].length, B[2].length, B[3].length);
                                da = w(v(y, oa) * L, da + L);
                                B[1].reverse();
                                B[3].reverse();
                                for (m.setStyle(ra); q--;) {
                                    b = B[q];
                                    h = b.length;
                                    G || (L = h > oa ? da / h : E, S = L / 2);
                                    R = h * L;
                                    ra = da;
                                    for (y = 0; y < h; y += 1, R -= L) J = T(da * z(b[y].angle)),
                                        ra < J ? J = ra : J < R && (J = R), ra = (b[y].oriY = J) - L;
                                    R = c[q];
                                    t = da - (h - 1) * L;
                                    ra = 0;
                                    for (y = b.length - 1; 0 <= y; --y, t += L) J = b[y].point, ia = J.graphics, Q = J.config, H = Q._textAttrs, Aa = Q._textCss, null !== Q.y && H.text && (ea = b[y].angle, X = Q.sliced, ka = ia.label, J = T(da * z(ea)), J < ra ? J = ra : J > t && (J = t), ra = J + L, M = (J + b[y].oriY) / 2, J = ha + g[q] * C * x(p.asin(M / da)), M *= d[q], M += ja, Pa = ja + aa * z(ea), U = ha + k * x(ea), (2 > q && J < U || 1 < q && J > U) && (J = U), F = J + n[q], P = M + S - 2, Z = F + n[q], H._x = Z, Y && (O = 1 < q ? Z - l : l + W - Z, m.setStyle(Q.style), h = u(la(parseFloat(Q.style.lineHeight)), 12) + (2 * la(parseFloat(Q.style.border),
                                            12) || 0), h = m.getSmartText(Q.displayValue, O, h), H.text = h.text, H.tooltip = h.tooltext), ea < ca && (M += pa, Pa += pa, P += pa), H._y = P, X && (h = Q.transX, X = Q.transY, F += h, J += h, U += h, Pa += X, Z += h), H.visibility = r, H["text-anchor"] = R, (h = ka && ka.data("textPos")) && ka.attr({
                                            x: h.x,
                                            y: h.y
                                        }), H.x = Z, H.y = M, !a && h ? ka.animateWith(wa, va, H, qa, ya) : ka ? H && ka.attr(H) : ka = ia.label = Ja.text(H, Aa, Ra).drag(Da, za, Ba).hover(Qa, Ia), ka.data("textPos", {
                                            x: Z,
                                            y: M
                                        }).data("plotItem", H.plotItem).data("eventArgs", H.eventArgs), ka.x = H._x, ka._x = H._x, ka.y = H._y, H.tooltip &&
                                        (ka.tooltip(H.tooltip), delete H.tooltip), xa && N && ua && (V = ia.connector, Q.connectorPath || (ba = !0), Q.connectorPath = h = ["M", U, Pa, "L", fa ? J : U, M, F, M], h = {
                                            path: h,
                                            "stroke-width": N,
                                            stroke: I.connectorColor || "#606060",
                                            visibility: r
                                        }, V && (a || ba ? V.attr(h) : V.animateWith(wa, va, h, qa, ya))))
                                }
                            }
                        }
                    }(),
                    animate: function() {
                        var f, e, c, d, g = this,
                            a = g.components.dataset[0],
                            h = a.components.data;
                        f = g.graphics.datasetGroup;
                        var b = h.length;
                        e = a.config.alphaAnimation;
                        c = function() {
                            g.disposed || g.disposing || g.placeDataLabels(!1)
                        };
                        var q = g.get("config",
                                "animationObj"),
                            a = q.duration || 0,
                            y = q.dummyObj,
                            ma = q.animObj,
                            q = q.animType;
                        if (e) f.attr({
                            opacity: 0
                        }), f.animateWith(y, ma, {
                            opacity: 1
                        }, a, q, c);
                        else
                            for (f = 0; f < b; f++)
                                if (e = h[f], c = e.graphics, e = e.config, d = e.shapeArgs, e = 2 * n, c = c.element) c.attr({
                                    start: e,
                                    end: e
                                }), c = d.start, d = d.end, (void 0).animateWith(y, ma, {
                                    cx: c - e,
                                    cy: d - e
                                }, a, q)
                    },
                    _rotate: function(f) {
                        var e = this.components.dataset[0],
                            c = e.config,
                            e = e.components,
                            d = e.data,
                            g = c.slicedOffset,
                            a = c.slicedOffsetY,
                            h = c.startAngle,
                            b;
                        f = isNaN(f) ? -c._lastAngle : f;
                        b = (f - h) % 360;
                        c.startAngle =
                            u(f, c.startAngle) % 360;
                        b = -(b * n) / 180;
                        e.Pie3DManager && e.Pie3DManager.rotate(b);
                        K(d, function(e) {
                            var c = [],
                                d = e.config;
                            e = e.graphics.element;
                            var c = d.shapeArgs,
                                f = c.start += b,
                                c = c.end += b,
                                h = d.angle = va((f + c) / 2),
                                f = d.sliced,
                                c = x(h),
                                h = z(h),
                                c = d.slicedTranslation = [D(c * g), D(h * a)];
                            d.transX = c[0];
                            d.transY = c[1];
                            d.slicedX = f ? x(b) * g : 0;
                            d.slicedY = f ? z(b) * a : 0;
                            e && f && e.attr({
                                transform: "t" + c[0] + "," + c[1]
                            })
                        });
                        this.placeDataLabels(!0, d)
                    },
                    _plotRollOver: function(f) {
                        var e = this.data("plotItem"),
                            c = e.chart,
                            d = c.config,
                            g = c.components.dataset[0],
                            a = g.components.data[e.index],
                            e = a.graphics.element,
                            a = a.config.hoverEffects;
                        g.config.isRotating || (k.call(e, c, f, "DataPlotRollOver"), a.enabled && e.attr(a));
                        d.isHovered = !0
                    },
                    _plotRollOut: function(f) {
                        var e = this.data("plotItem"),
                            c = e.chart,
                            d = c.config,
                            g = c.components.dataset[0],
                            a = g.components.data[e.index],
                            e = a.config,
                            a = a.graphics.element;
                        g.config.isRotating || (k.call(a, c, f, "DataPlotRollOut"), a.attr({
                            color: e.color.color.split(",")[0],
                            alpha: e._3dAlpha,
                            borderWidth: e.borderWidth,
                            borderColor: e.borderColor
                        }));
                        d.isHovered = !1
                    },
                    _plotDragStart: function(f, e, c) {
                        var d = this.data("plotItem").chart,
                            g = d.components.dataset[0].config;
                        g.isRightClicked = Y || 0 === c.button || 1 === c.button ? !1 : !0;
                        g.enableRotation && !g.isRightClicked && (g.isRotating = !1, f = qa.call(c, f, e, g.center, g.chartPosition = W(d.linkedItems.container), g.pieYScale), g.dragStartAngle = f, g._lastAngle = -g.startAngle, g.startingAngleOnDragStart = g.startAngle)
                    },
                    _plotDragEnd: function(f) {
                        var e = this.data("plotItem"),
                            c = e.index,
                            e = e.chart,
                            d = e.config,
                            g = e.components.dataset[0],
                            a = g.config,
                            g =
                            g.components.Pie3DManager,
                            h = a.startAngle;
                        a.isRightClicked || (a.isRotating ? (setTimeout(function() {
                            a.isRotating = !1
                        }, 0), b.raiseEvent("rotationEnd", {
                            startingAngle: va(h, !0),
                            changeInAngle: h - a.startingAngleOnDragStart
                        }, e.chartInstance), !d.isHovered && g.colorObjs[c] && g.onPlotHover(c, !1)) : e._plotGraphicClick.call(this, f))
                    },
                    _plotDragMove: function(f, e, c, d, g) {
                        var a = this.data("plotItem").chart,
                            h = a.components.dataset[0].config;
                        isNaN(f) || isNaN(e) || !h.enableRotation || h.singletonCase || h.isRightClicked || (f = qa.call(g,
                            c, d, h.center, h.chartPosition, h.pieYScale), h.isRotating || (h.dragStartAngle !== f && (h.isRotating = !0), b.raiseEvent("rotationStart", {
                            startingAngle: va(h.startAngle, !0)
                        }, a.chartInstance)), e = f - h.dragStartAngle, h.dragStartAngle = f, h.moveDuration = 0, h._lastAngle += 180 * e / n, f = (new Date).getTime(), h._lastTime && !(h._lastTime + h.timerThreshold < f)) || (h._lastTime || a._rotate(), h.timerId = setTimeout(function() {
                            a.disposed && a.disposing || a._rotate()
                        }, h.timerThreshold), h._lastTime = f)
                    },
                    _stubRadius: function(f, e, c, d, g, a, h) {
                        var b =
                            this.components.dataset[0],
                            q = b.config,
                            y = u(b.config.slicingdistance),
                            b = q.dataLabelOptions || (q.dataLabelOptions = b._parseDataLabelOptions()),
                            k = 0,
                            k = q.pieYScale;
                        c -= q.pieSliceDepth;
                        k = v(f / 2 - e - g, (c / 2 - a) / k) - d;
                        k >= h ? h = k : y || (g = d = w(v(d - (h - k), g), 10));
                        q.slicingDistance = g;
                        q.pieMinRadius = h;
                        b.distance = d;
                        return h
                    },
                    _startingAngle: function(f, e) {
                        var c, d = this.components.dataset[0].config,
                            g = (c = d.startAngle) + (0 > c ? 360 : 0);
                        isNaN(f) || d.singletonCase || d.isRotating || (f += e ? g : 0, this._rotate(f), g = f);
                        return D(100 * ((g %= 360) + (0 > g ? 360 :
                            0))) / 100
                    }
                }, oa.pie2d, {
                    plotborderthickness: .1,
                    alphaanimation: 1
                });
                F._availableAnimAttrs && F._availableAnimAttrs.cx && (F._availableAnimAttrs.innerR = F._availableAnimAttrs.depth = F._availableAnimAttrs.radiusYFactor = F._availableAnimAttrs.start = F._availableAnimAttrs.end = F._availableAnimAttrs.cx);
                a.prototype = {
                    configure: function(f, e, c, d) {
                        var g = this.linkedItems.chart,
                            a = g.get("components", "paper"),
                            g = g.get("graphics", "datasetGroup");
                        "object" === typeof f && (f = f.depth, e = f.hasOnePoint, c = f.use3DLighting, d = f.isDoughnut);
                        this.renderer || (this.renderer = a);
                        this.hasOnePoint = e;
                        this.use3DLighting = c;
                        this.isDoughnut = d;
                        this.depth = f;
                        !this.bottomBorderGroup && (this.bottomBorderGroup = a.group("bottom-border", g));
                        this.bottomBorderGroup.attr({
                            transform: "t0," + f
                        });
                        !this.slicingWallsBackGroup && (this.slicingWallsBackGroup = a.group("slicingWalls-back-Side", g));
                        !this.slicingWallsFrontGroup && (this.slicingWallsFrontGroup = a.group("slicingWalls-front-Side", g));
                        !this.topGroup && (this.topGroup = a.group("top-Side", g));
                        !this.pointElemStore && (this.pointElemStore = []);
                        !this.slicingWallsArr && (this.slicingWallsArr = []);
                        this.moveCmdArr = ["M"];
                        this.lineCmdArr = ["L"];
                        this.closeCmdArr = ["Z"];
                        this.colorObjs = []
                    },
                    getArcPath: function(f, e, c, d, g, a, h, b, q, y) {
                        return c == g && d == a ? [] : ["A", h, b, 0, y, q, g, a]
                    },
                    _parseSliceColor: function(f, e, c) {
                        var d, g, a, h, b, q, y, k, R, t, l, x, r, p, D;
                        D = 3;
                        var C = (d = this.use3DLighting) ? za : Ba,
                            w = c.radiusYFactor,
                            I = c.cx,
                            K = c.cy,
                            z = c.r,
                            v = z * w,
                            u = c.innerR || 0,
                            W = I + z,
                            N = I - z,
                            B = I + u,
                            E = I - u;
                        e = e || 100;
                        c = e / 2;
                        C[f] && C[f][e] ? C = C[f][e] : (C[f] || (C[f] = {}), C[f][e] || (C[f][e] = {}), C = C[f][e], d ? (d =
                            ha(f, 80), g = ha(f, 75), q = da(f, 85), y = da(f, 70), k = da(f, 40), R = da(f, 50), da(f, 30), t = da(f, 65), ha(f, 85), a = ha(f, 69), h = ha(f, 75), b = ha(f, 95)) : (D = 10, d = ha(f, 90), g = ha(f, 87), q = da(f, 93), y = da(f, 87), k = da(f, 80), t = R = da(f, 85), da(f, 80), b = ha(f, 85), a = ha(f, 75), h = ha(f, 80)), l = g + M + q + M + y + M + q + M + g, r = e + M + e + M + e + M + e + M + e, x = g + M + f + M + q + M + f + M + g, p = c + M + c + M + c + M + c + M + c, k = g + M + f + M + k + M + f + M + g, a = h + M + q + M + R + M + q + M + a, h = "FFFFFF" + M + "FFFFFF" + M + "FFFFFF" + M + "FFFFFF" + M + "FFFFFF", D = 0 + M + c / D + M + e / D + M + c / D + M + 0, C.top = ua ? {
                            FCcolor: {
                                gradientUnits: "userSpaceOnUse",
                                radialGradient: !0,
                                color: t + M + b,
                                alpha: e + M + e,
                                ratio: "0,100"
                            }
                        } : {
                            FCcolor: {
                                gradientUnits: "objectBoundingBox",
                                color: y + M + y + M + q + M + g,
                                alpha: e + M + e + M + e + M + e,
                                angle: -72,
                                ratio: "0,8,15,77"
                            }
                        }, C.frontOuter = {
                            FCcolor: {
                                gradientUnits: "userSpaceOnUse",
                                y1: 0,
                                y2: 0,
                                color: a,
                                alpha: r,
                                angle: 0,
                                ratio: "0,20,15,15,50"
                            }
                        }, C.backOuter = {
                            FCcolor: {
                                gradientUnits: "userSpaceOnUse",
                                y1: 0,
                                y2: 0,
                                color: k,
                                alpha: p,
                                angle: 0,
                                ratio: "0,62,8,8,22"
                            }
                        }, C.frontInner = {
                            FCcolor: {
                                gradientUnits: "userSpaceOnUse",
                                y1: 0,
                                y2: 0,
                                color: x,
                                alpha: p,
                                angle: 0,
                                ratio: "0,25,5,5,65"
                            }
                        }, C.backInner = {
                            FCcolor: {
                                gradientUnits: "userSpaceOnUse",
                                y1: 0,
                                y2: 0,
                                color: l,
                                alpha: r,
                                angle: 0,
                                ratio: "0,62,8,8,22"
                            }
                        }, C.topBorder = {
                            FCcolor: {
                                gradientUnits: "userSpaceOnUse",
                                y1: 0,
                                y2: 0,
                                color: h,
                                alpha: D,
                                angle: 0,
                                ratio: "0,20,15,15,50"
                            }
                        }, C.topInnerBorder = {
                            FCcolor: {
                                gradientUnits: "userSpaceOnUse",
                                y1: 0,
                                y2: 0,
                                color: h,
                                alpha: D,
                                angle: 0,
                                ratio: "0,50,15,15,20"
                            }
                        }, C.bottom = P(wa(f, c)), C.startSlice = P(wa(d, e)), C.endSlice = P(wa(d, e)));
                        if (C.cx !== I || C.cy !== K || C.rx !== z || C.radiusYFactor !== w || C.innerRx !== u) ua && (C.top.FCcolor.cx = I, C.top.FCcolor.cy = K, C.top.FCcolor.r = z, C.top.FCcolor.fx = I - .3 *
                            z, C.top.FCcolor.fy = K + 1.2 * v), C.topBorder.FCcolor.x1 = C.backOuter.FCcolor.x1 = C.frontOuter.FCcolor.x1 = N, C.topBorder.FCcolor.x2 = C.backOuter.FCcolor.x2 = C.frontOuter.FCcolor.x2 = W, C.topInnerBorder.FCcolor.x1 = C.backInner.FCcolor.x1 = C.frontInner.FCcolor.x1 = E, C.topInnerBorder.FCcolor.x2 = C.backInner.FCcolor.x2 = C.frontInner.FCcolor.x2 = B, C.cx = I, C.cy = K, C.rx = z, C.radiusYFactor = w, C.innerRx = u;
                        return C
                    },
                    rotate: function(f) {
                        var e = this.pointElemStore,
                            c = 0,
                            d = e.length,
                            g;
                        if (!this.hasOnePoint) {
                            for (; c < d; c += 1) g = e[c], g = g._confObject,
                                g.start += f, g.end += f, this._setSliceShape(g);
                            this.refreshDrawing()
                        }
                    },
                    removeSlice: function(f) {
                        var e = this.pointElemStore,
                            c = f._confObject.elements,
                            d = this.slicingWallsArr,
                            g;
                        g = e.length;
                        var a;
                        for (--g; 0 <= g; --g) a = e[g], a === f && e.splice(g, 1);
                        g = d.length;
                        for (--g; 0 <= g; --g) e = d[g], e !== c.startSlice && e !== c.frontOuter1 && e !== c.frontOuter && e !== c.backInner && e !== c.endSlice || d.splice(g, 1);
                        f.hide && f.hide();
                        this._slicePool || (this._slicePool = []);
                        this._slicePool.push(f);
                        this.refreshDrawing()
                    },
                    useSliceFromPool: function() {
                        var a =
                            this._slicePool || (this._slicePool = []),
                            e = this.slicingWallsArr,
                            c = !1;
                        a.length && (c = a.shift(), this.pointElemStore.push(c), c.show(), a = c._confObject.elements, e.push(a.startSlice, a.frontOuter1, a.frontOuter), a.backInner && e.push(a.backInner), e.push(a.endSlice));
                        return c
                    },
                    refreshDrawing: function() {
                        var a = function(e, c) {
                            return e._conf.index - c._conf.index || e._conf.cIndex - c._conf.cIndex || e._conf.isStart - c._conf.isStart || e._conf.si - c._conf.si
                        };
                        return function() {
                            var e = this.slicingWallsArr,
                                c = 0,
                                d, g = e.length,
                                A, h, b, q,
                                y = this.slicingWallsFrontGroup,
                                k = this.slicingWallsBackGroup;
                            e.sort(a);
                            a: {
                                var R = e[0] && e[0]._conf.index,
                                    t, l;q = R <= ca;A = 1;
                                for (d = e.length; A < d; A += 1)
                                    if (l = e[A]._conf.index, t = l <= ca, t != q || l < R) break a;A = 0
                            }
                            for (; c < g; c += 1, A += 1) A === g && (A = 0), d = e[A], q = d._conf.index, q < ga ? y.appendChild(d) : q <= ca ? (h ? d.insertBefore(h) : y.appendChild(d), h = d) : q <= ta ? (b ? d.insertBefore(b) : k.appendChild(d), b = d) : k.appendChild(d)
                        }
                    }(),
                    _setSliceShape: function(a, e) {
                        var c = this.getArcPath,
                            d = a.start,
                            g = a.end,
                            A = va(d),
                            h = va(g),
                            b, q, y, k, R, t, l, r, p, D, K, C, w, I,
                            v, u, W, aa = this.isDoughnut,
                            m = a.radiusYFactor,
                            N = a.cx,
                            B = a.cy,
                            E = a.r,
                            L = E * m,
                            S = E + (ua ? -1 : 2),
                            fa = L + (ua ? -1 : 2),
                            O = a.innerR || 0,
                            J = O * m,
                            X = this.depth,
                            U = X + B,
                            F = N + E,
                            T = N - E,
                            n = N + O,
                            G = N - O,
                            Y = B - L,
                            Z = ["M", G, Y, "L", G, U + L, "Z"],
                            m = a.elements,
                            M, P, Q, ia, V, ja = "path",
                            da = (A + h) / 2,
                            ha = A > h;
                        q = x(A);
                        y = z(A);
                        k = x(h);
                        R = z(h);
                        t = N + E * q;
                        l = B + L * y;
                        r = N + S * q;
                        p = B + fa * y;
                        M = l + X;
                        P = N + E * k;
                        Q = B + L * R;
                        D = N + S * k;
                        K = B + fa * R;
                        ia = Q + X;
                        aa ? (C = N + O * q, w = B + J * y, u = w + X, I = N + O * k, v = B + J * R, W = v + X, a.startSlice = ["M", t, l, "L", t, M, C, u, C, w, "Z"], a.endSlice = ["M", P, Q, "L", P, ia, I, W, I, v, "Z"]) : (a.startSlice = ["M",
                            t, l, "L", t, M, N, U, N, B, "Z"
                        ], a.endSlice = ["M", P, Q, "L", P, ia, N, U, N, B, "Z"]);
                        ua ? (b = (A > h ? sa : 0) + h - A, a.clipTopPath = aa ? [
                                ["M", t, l, "A", E, L, 0, b > ca ? 1 : 0, 1, P, Q, "L", I, v, "A", O, J, 0, b > ca ? 1 : 0, 0, C, w, "Z"]
                            ] : [
                                ["M", t, l, "A", E, L, 0, b > ca ? 1 : 0, 1, P, Q, "L", N, B, "Z"]
                            ], a.clipOuterFrontPath1 = [Z], a.clipTopBorderPath = [
                                ["M", r, p, "A", S, fa, 0, b > ca ? 1 : 0, 1, D, K, "L", P, Q, P, Q + 1, "A", E, L, 0, b > ca ? 1 : 0, 0, t, l + 1, "L", t, l, "Z"]
                            ], d != g ? A > h ? A < ca ? (a.clipOuterFrontPath = [
                                ["M", F, B, "A", E, L, 0, 0, 1, P, Q, "v", X, "A", E, L, 0, 0, 0, F, B + X, "Z"]
                            ], a.clipOuterFrontPath1 = [
                                ["M", T, B, "A", E, L,
                                    0, 0, 0, t, l, "v", X, "A", E, L, 0, 0, 1, T, B + X, "Z"
                                ]
                            ], a.clipOuterBackPath = [
                                ["M", F, B, "A", E, L, 0, 1, 0, T, B, "v", X, "A", E, L, 0, 1, 1, F, B + X, "Z"]
                            ], aa && (a.clipInnerBackPath = [
                                ["M", n, B, "A", O, J, 0, 1, 0, G, B, "v", X, "A", O, J, 0, 1, 1, n, B + X, "Z"]
                            ], a.clipInnerFrontPath = [
                                ["M", n, B, "A", O, J, 0, 0, 1, I, v, "v", X, "A", O, J, 0, 0, 0, n, B + X, "Z", "M", G, B, "A", O, J, 0, 0, 0, C, w, "v", X, "A", O, J, 0, 0, 1, G, B + X, "Z"]
                            ])) : h > ca ? (a.clipOuterFrontPath = [
                                ["M", F, B, "A", E, L, 0, 1, 1, T, B, "v", X, "A", E, L, 0, 1, 0, F, B + X, "Z"]
                            ], a.clipOuterBackPath = [
                                ["M", T, B, "A", E, L, 0, 0, 1, P, Q, "v", X, "A", E, L, 0, 0, 0,
                                    T, B + X, "Z", "M", F, B, "A", E, L, 0, 0, 0, t, l, "v", X, "A", E, L, 0, 0, 1, F, B + X, "Z"
                                ]
                            ], aa && (a.clipInnerFrontPath = [
                                ["M", n, B, "A", O, J, 0, 1, 1, G, B, "v", X, "A", O, J, 0, 1, 0, n, B + X, "Z"]
                            ], a.clipInnerBackPath = [
                                ["M", G, B, "A", O, J, 0, 0, 1, I, v, "v", X, "A", O, J, 0, 0, 0, G, B + X, "Z", "M", n, B, "A", O, J, 0, 0, 0, C, w, "v", X, "A", O, J, 0, 0, 1, n, B + X, "Z"]
                            ])) : (a.clipOuterFrontPath = [
                                ["M", F, B, "A", E, L, 0, 0, 1, P, Q, "v", X, "A", E, L, 0, 0, 0, F, B + X, "Z"]
                            ], a.clipOuterBackPath = [
                                ["M", t, l, "A", E, L, 0, 0, 1, F, B, "v", X, "A", E, L, 0, 0, 0, t, M, "Z"]
                            ], aa && (a.clipInnerFrontPath = [
                                ["M", n, B, "A", O, J, 0, 0, 1,
                                    I, v, "v", X, "A", O, J, 0, 0, 0, n, B + X, "Z"
                                ]
                            ], a.clipInnerBackPath = [
                                ["M", C, w, "A", O, J, 0, 0, 1, n, B, "v", X, "A", O, J, 0, 0, 0, C, u, "Z"]
                            ])) : A < ca ? h > ca ? (a.clipOuterFrontPath = [
                                ["M", t, l, "A", E, L, 0, 0, 1, T, B, "v", X, "A", E, L, 0, 0, 0, t, M, "Z"]
                            ], a.clipOuterBackPath = [
                                ["M", T, B, "A", E, L, 0, 0, 1, P, Q, "v", X, "A", E, L, 0, 0, 0, T, B + X, "Z"]
                            ], aa && (a.clipInnerFrontPath = [
                                ["M", C, w, "A", O, J, 0, 0, 1, G, B, "v", X, "A", O, J, 0, 0, 0, C, u, "Z"]
                            ], a.clipInnerBackPath = [
                                ["M", G, B, "A", O, J, 0, 0, 1, I, v, "v", X, "A", O, J, 0, 0, 0, G, B + X, "Z"]
                            ])) : (a.clipOuterFrontPath = [
                                ["M", t, l, "A", E, L, 0, 0, 1, P, Q,
                                    "v", X, "A", E, L, 0, 0, 0, t, M, "Z"
                                ]
                            ], a.clipOuterBackPath = [Z], aa && (a.clipInnerFrontPath = [
                                ["M", C, w, "A", O, J, 0, 0, 1, I, v, "v", X, "A", O, J, 0, 0, 0, C, u, "Z"]
                            ], a.clipInnerBackPath = [Z])) : (a.clipOuterFrontPath = [Z], a.clipOuterBackPath = [
                                ["M", t, l, "A", E, L, 0, 0, 1, P, Q, "v", X, "A", E, L, 0, 0, 0, t, M, "Z"]
                            ], aa && (a.clipInnerFrontPath = [Z], a.clipInnerBackPath = [
                                ["M", C, w, "A", O, J, 0, 0, 1, I, v, "v", X, "A", O, J, 0, 0, 0, C, u, "Z"]
                            ])) : a.clipOuterFrontPath = a.clipOuterBackPath = a.clipInnerBackPath = a.clipInnerFrontPath = [Z], ja = "litepath", a.clipBottomBorderPath =
                            a.clipTopPath, a.startSlice = [a.startSlice], a.endSlice = [a.endSlice]) : (S = this.moveCmdArr, fa = this.lineCmdArr, q = this.closeCmdArr, X = [N, B], y = [T, B], Y = [N, Y], k = [F, B], R = [N, B + L], Z = [T, U], V = [F, U], r = [G, B], p = [n, B], D = [G, U], K = [n, U], a.clipOuterFrontPath1 = [], d != g ? (A > h ? A < ca ? (d = c(N, B, t, l, T, B, E, L, 1, 0), g = c(N, B, T, B, F, B, E, L, 1, 0), Q = c(N, B, F, B, P, Q, E, L, 1, 0), a.clipOuterBackPath = S.concat(y, g, fa, V, c(N, U, F, U, T, U, E, L, 0, 0), q), a.clipOuterFrontPath1 = S.concat([t, l], d, fa, Z, c(N, U, T, U, t, M, E, L, 0, 0), q), a.clipOuterFrontPath = S.concat(k, Q, fa, [P, ia], c(N, U, P, ia, F, U, E, L, 0, 0), q), a.clipTopBorderPath = S.concat([t, l], d, g, Q), aa ? (E = c(N, B, I, v, n, B, O, J, 0, 0), L = c(N, B, n, B, G, B, O, J, 0, 0), w = c(N, B, G, B, C, w, O, J, 0, 0), a.clipInnerBackPath = S.concat(p, L, fa, D, c(N, U, G, U, n, U, O, J, 1, 0), q), a.clipInnerFrontPath = S.concat(r, w, fa, [C, u], c(N, U, C, u, G, U, O, J, 1, 0), q, S, [I, v], E, fa, K, c(N, U, n, U, I, W, O, J, 1, 0), q), a.clipTopPath = a.clipTopBorderPath.concat(fa, [I, v], E, L, w, q), a.clipTopBorderPath = a.clipTopBorderPath.concat(S, [I, v], E, L, w)) : a.clipTopPath = a.clipTopBorderPath.concat(fa, X, q)) : h >
                            ca ? (d = c(N, B, t, l, F, B, E, L, 1, 0), g = c(N, B, F, B, T, B, E, L, 1, 0), Q = c(N, B, T, B, P, Q, E, L, 1, 0), a.clipOuterFrontPath = S.concat(k, g, fa, Z, c(N, U, T, U, F, U, E, L, 0, 0), q), a.clipOuterBackPath = S.concat([t, l], d, fa, V, c(N, U, F, U, t, M, E, L, 0, 0), q, S, y, Q, fa, [P, ia], c(N, U, P, ia, T, U, E, L, 0, 0), q), a.clipTopBorderPath = S.concat([t, l], d, g, Q), aa ? (E = c(N, B, I, v, G, B, O, J, 0, 0), L = c(N, B, G, B, n, B, O, J, 0, 0), w = c(N, B, n, B, C, w, O, J, 0, 0), a.clipInnerFrontPath = S.concat(r, L, fa, K, c(N, U, n, U, G, U, O, J, 1, 0), q), a.clipInnerBackPath = S.concat(p, w, fa, [C, u], c(N, U, C, u, n, U, O, J, 1,
                                0), q, S, [I, v], E, fa, D, c(N, U, G, U, I, W, O, J, 1, 0), q), a.clipTopPath = a.clipTopBorderPath.concat(fa, [I, v], E, L, w, q), a.clipTopBorderPath = a.clipTopBorderPath.concat(S, [I, v], E, L, w)) : a.clipTopPath = a.clipTopBorderPath.concat(fa, X, q)) : (d = c(N, B, t, l, F, B, E, L, 1, 0), g = c(N, B, F, B, P, Q, E, L, 1, 0), a.clipOuterFrontPath = S.concat(k, g, fa, [P, ia], c(N, U, P, ia, F, U, E, L, 0, 0), q), a.clipOuterBackPath = S.concat([t, l], d, fa, V, c(N, U, F, U, t, M, E, L, 0, 0), q), a.clipTopBorderPath = S.concat([t, l], d, g), aa ? (E = c(N, B, I, v, n, B, O, J, 0, 0), L = c(N, B, n, B, C, w, O, J, 0, 0),
                                a.clipInnerFrontPath = S.concat([I, v], E, fa, K, c(N, U, n, U, I, W, O, J, 1, 0), q), a.clipInnerBackPath = S.concat(p, L, fa, [C, u], c(N, U, C, u, n, U, O, J, 1, 0), q), a.clipTopPath = a.clipTopBorderPath.concat(fa, [I, v], E, L, q), a.clipTopBorderPath = a.clipTopBorderPath.concat(S, [I, v], E, L)) : a.clipTopPath = a.clipTopBorderPath.concat(fa, X, q)) : A < ca ? h > ca ? (d = c(N, B, t, l, T, B, E, L, 1, 0), g = c(N, B, T, B, P, Q, E, L, 1, 0), a.clipOuterBackPath = S.concat(y, g, fa, [P, ia], c(N, U, P, ia, T, U, E, L, 0, 0), q), a.clipOuterFrontPath = S.concat([t, l], d, fa, Z, c(N, U, T, U, t, M, E, L, 0, 0),
                                q), a.clipTopBorderPath = S.concat([t, l], d, g), aa ? (E = c(N, B, I, v, G, B, O, J, 0, 0), L = c(N, B, G, B, C, w, O, J, 0, 0), a.clipInnerBackPath = S.concat([I, v], E, fa, D, c(N, U, G, U, I, W, O, J, 1, 0), q), a.clipInnerFrontPath = S.concat(r, L, fa, [C, u], c(N, U, C, u, G, U, O, J, 1, 0), q), a.clipTopPath = a.clipTopBorderPath.concat(fa, [I, v], E, L, q), a.clipTopBorderPath = a.clipTopBorderPath.concat(S, [I, v], E, L)) : a.clipTopPath = a.clipTopBorderPath.concat(fa, X, q)) : (d = c(N, B, t, l, P, Q, E, L, 1, 0), a.clipOuterBackPath = S.concat([t, l]), a.clipTopBorderPath = a.clipOuterBackPath.concat(d),
                                a.clipOuterFrontPath = a.clipTopBorderPath.concat(fa, [P, ia], c(N, U, P, ia, t, M, E, L, 0, 0), q), aa ? (E = c(N, B, I, v, C, w, O, J, 0, 0), a.clipInnerBackPath = S.concat([I, v]), a.clipTopPath = a.clipTopBorderPath.concat(fa, [I, v], E, q), a.clipTopBorderPath = a.clipTopBorderPath.concat(S, [I, v], E), a.clipInnerFrontPath = a.clipInnerBackPath.concat(E, fa, [C, u], c(N, U, C, u, I, W, O, J, 1, 0), q)) : a.clipTopPath = a.clipTopBorderPath.concat(fa, X, q)) : (d = c(N, B, t, l, P, Q, E, L, 1, 0), a.clipOuterFrontPath = S.concat([t, l]), a.clipTopBorderPath = a.clipOuterFrontPath.concat(d),
                                a.clipOuterBackPath = a.clipTopBorderPath.concat(fa, [P, ia], c(N, U, P, ia, t, M, E, L, 0, 0), q), aa ? (E = c(N, B, I, v, C, w, O, J, 0, 0), a.clipInnerFrontPath = S.concat([I, v]), a.clipTopPath = a.clipTopBorderPath.concat(fa, [I, v], E, q), a.clipTopBorderPath = a.clipTopBorderPath.concat(a.clipInnerFrontPath, E), a.clipInnerBackPath = a.clipInnerFrontPath.concat(E, fa, [C, u], c(N, U, C, u, I, W, O, J, 1, 0), q)) : a.clipTopPath = a.clipTopBorderPath.concat(fa, X, q)), d = S.concat(y, fa, k), E = S.concat(Y, fa, R), a.clipTopPath = a.clipTopPath.concat(d, E), a.clipOuterFrontPath =
                            a.clipOuterFrontPath.concat(d), a.clipOuterFrontPath1 = a.clipOuterFrontPath1.concat(d), a.clipOuterBackPath = a.clipOuterBackPath.concat(d), aa && (E = S.concat(r, fa, p), a.clipInnerFrontPath = a.clipInnerFrontPath.concat(E), a.clipInnerBackPath = a.clipInnerBackPath.concat(E))) : (a.clipTopPath = a.clipOuterFrontPath = a.clipOuterBackPath = [], aa && (a.clipInnerFrontPath = a.clipInnerBackPath = [])), a.clipBottomBorderPath = a.clipTopBorderPath);
                        e || (m.startSlice._conf.index = A, m.endSlice._conf.index = h, m.backOuter._conf.index = C = ha &&
                            (A <= ta || h > ta) || A <= ta && h > ta ? ta : A > ca ? A : h, m.frontOuter._conf.index = c = h <= ga ? h : A > h || A <= ga ? ga : A, m.frontOuter1._conf.index = A, m.frontOuter1._conf.cIndex = ca, A > h ? (m.backOuter._conf.cIndex = A < ta ? ta : sa, m.startSlice._conf.cIndex = A < ca ? (A + ca) / 2 : (A + sa) / 2, m.endSlice._conf.cIndex = m.frontOuter._conf.cIndex = 0) : m.backOuter._conf.cIndex = m.startSlice._conf.cIndex = m.endSlice._conf.cIndex = m.frontOuter._conf.cIndex = da, b > ca ? m.frontOuter1.show().attr(ja, a.clipOuterFrontPath1) : m.frontOuter1.hide(), a.thisElement._attr(ja, a.clipTopPath),
                            m.bottom.attr(ja, a.clipTopPath), m.bottomBorder.attr(ja, a.clipBottomBorderPath), m.topBorder && m.topBorder.attr(ja, a.clipTopBorderPath), m.frontOuter.attr(ja, a.clipOuterFrontPath), m.backOuter.attr(ja, a.clipOuterBackPath), aa && (m.backInner.attr(ja, a.clipInnerBackPath), m.frontInner.attr(ja, a.clipInnerFrontPath), m.backInner._conf.index = C, m.frontInner._conf.index = c, A > h ? (m.backInner._conf.cIndex = sa, m.frontInner._conf.cIndex = 0) : m.backInner._conf.cIndex = m.frontInner._conf.cIndex = da), this.hasOnePoint ? (m.startSlice.hide(),
                                m.endSlice.hide()) : (m.startSlice.attr(ja, a.startSlice).show(), m.endSlice.attr(ja, a.endSlice).show()))
                    },
                    _setSliceCosmetics: function(a) {
                        var e = a.thisElement,
                            c = a.showBorderEffect,
                            d = a.elements,
                            g = wa(a.borderColor, u(a.borderAlpha, a.alpha)),
                            A = a.borderWidth,
                            h;
                        a.color && (a = this._parseSliceColor(a.color, a.alpha, a), ua ? (h = {
                            fill: P(a.top),
                            "stroke-width": 0
                        }, c ? d.topBorder.show().attr({
                            fill: P(a.topBorder),
                            "stroke-width": 0
                        }) : (d.topBorder.hide(), h.stroke = g, h["stroke-width"] = A), e._attr(h)) : (e._attr({
                                fill: P(a.top),
                                "stroke-width": 0
                            }),
                            d.topBorder.attr({
                                stroke: g,
                                "stroke-width": A
                            })), d.bottom.attr({
                            fill: P(a.bottom)
                        }), d.bottomBorder.attr({
                            stroke: g,
                            "stroke-width": A
                        }), d.frontOuter.attr({
                            fill: P(a.frontOuter)
                        }), d.frontOuter1.attr({
                            fill: P(a.frontOuter)
                        }), d.backOuter.attr({
                            fill: P(a.backOuter)
                        }), d.startSlice.attr({
                            fill: P(a.startSlice),
                            stroke: g,
                            "stroke-width": A
                        }), d.endSlice.attr({
                            fill: P(a.endSlice),
                            stroke: g,
                            "stroke-width": A
                        }), this.isDoughnut && (d.frontInner.attr({
                            fill: P(a.frontInner)
                        }), d.backInner.attr({
                            fill: P(a.backInner)
                        })))
                    },
                    createSlice: function() {
                        var a = {
                                stroke: !0,
                                strokeWidth: !0,
                                "stroke-width": !0,
                                dashstyle: !0,
                                "stroke-dasharray": !0,
                                translateX: !0,
                                translateY: !0,
                                "stroke-opacity": !0,
                                fill: !0,
                                opacity: !0,
                                transform: !0,
                                ishot: !0,
                                cursor: !0,
                                start: !0,
                                end: !0,
                                color: !0,
                                alpha: !0,
                                borderColor: !0,
                                borderAlpha: !0,
                                borderWidth: !0,
                                rolloverProps: !0,
                                showBorderEffect: !0,
                                positionIndex: !0,
                                cx: !0,
                                cy: !0,
                                radiusYFactor: !0,
                                r: !0,
                                innerR: !0
                            },
                            e = function(e, c) {
                                var d, g, h = this,
                                    A = h._confObject,
                                    b = {},
                                    q = A.elements,
                                    y, l, k, ba = A.Pie3DManager,
                                    x;
                                "string" === typeof e && void 0 !== c && null !== c && (d = e, e = {}, e[d] =
                                    c);
                                if (e && "string" !== typeof e) {
                                    for (d in e)
                                        if (g = e[d], a[d])
                                            if (A[d] = g, "ishot" === d || "cursor" === d || "transform" === d) b[d] = g, x = !0;
                                            else if ("start" === d || "end" === d || "cx" === d || "cy" === d || "radiusYFactor" === d || "r" === d || "innerR" === d) l = !0;
                                    else {
                                        if ("color" === d || "alpha" === d || "borderColor" === d || "borderAlpha" === d || "borderWidth" === d) k = !0
                                    } else h._attr(d, g);
                                    l && (ba._setSliceShape(A), ba.refreshDrawing());
                                    (k || l) && ba._setSliceCosmetics(A);
                                    if (x) {
                                        for (y in q) q[y].attr(b);
                                        h._attr(b)
                                    }
                                } else h = a[e] ? A[e] : h._attr(e);
                                return h
                            },
                            c = function(e,
                                a) {
                                var c = this._confObject.elements,
                                    d;
                                for (d in c) c[d].on(e, a);
                                return this._on(e, a)
                            },
                            d = function(e, a, c) {
                                var d, g = this._confObject.elements,
                                    h = -1 < aa.navigator.userAgent.toLowerCase().indexOf("android");
                                for (d in g) h ? "topBorder" !== d && "frontOuter" !== d && "startSlice" !== d && "endSlice" !== d || g[d].drag(e, a, c) : g[d].drag(e, a, c);
                                return this._drag(e, a, c)
                            },
                            g = function() {
                                var e = this._confObject.elements,
                                    a;
                                for (a in e) e[a].hide();
                                return this._hide()
                            },
                            A = function() {
                                var e = this._confObject.elements,
                                    a;
                                for (a in e) e[a].show();
                                return this._show()
                            },
                            h = function() {
                                var e = this._confObject,
                                    a = e.elements,
                                    c;
                                for (c in a) a[c].destroy();
                                ua && (e.clipTop.destroy(), e.clipOuterFront.destroy(), e.clipOuterBack.destroy(), e.clipOuterFront1 && e.clipOuterFront1.destroy(), e.clipInnerFront && e.clipInnerFront.destroy(), e.clipInnerBack && e.clipInnerBack.destroy());
                                return this._destroy()
                            },
                            b = function(e) {
                                var a = this._confObject.elements,
                                    c;
                                for (c in a) a[c].tooltip(e);
                                return this._tooltip(e)
                            },
                            q = function(e, a) {
                                var c = this._confObject.elements,
                                    d;
                                if (void 0 === a) return this._data(e);
                                for (d in c) c[d].data(e,
                                    a);
                                return this._data(e, a)
                            },
                            y = 0;
                        return function() {
                            var a = this.renderer,
                                f, t = {
                                    elements: {},
                                    Pie3DManager: this
                                },
                                l = this.slicingWallsArr,
                                k = t.elements,
                                x = ua ? "litepath" : "path";
                            f = a[x](this.topGroup);
                            f._confObject = t;
                            t.thisElement = f;
                            f._destroy = f.destroy;
                            f.destroy = h;
                            f._show = f.show;
                            f.show = A;
                            f._hide = f.hide;
                            f.hide = g;
                            f._on = f.on;
                            f.on = c;
                            f._drag = f.drag;
                            f.drag = d;
                            f._attr = f.attr;
                            f.attr = e;
                            f._tooltip = f.tooltip;
                            f.tooltip = b;
                            f._data = f.data;
                            f.data = q;
                            this.pointElemStore.push(f);
                            k.topBorder = a[x](this.topGroup);
                            k.bottom = a[x](this.bottomBorderGroup).attr({
                                "stroke-width": 0
                            });
                            k.bottomBorder = a[x](this.bottomBorderGroup);
                            k.frontOuter = a[x](this.slicingWallsFrontGroup).attr({
                                "stroke-width": 0
                            });
                            k.backOuter = a[x](this.slicingWallsFrontGroup).attr({
                                "stroke-width": 0
                            });
                            k.startSlice = a[x](this.slicingWallsFrontGroup);
                            k.endSlice = a[x](this.slicingWallsFrontGroup);
                            k.frontOuter1 = a[x](this.slicingWallsFrontGroup).attr({
                                "stroke-width": 0
                            });
                            k.frontOuter._conf = {
                                si: y,
                                isStart: .5
                            };
                            k.frontOuter1._conf = {
                                si: y,
                                isStart: .5
                            };
                            k.startSlice._conf = {
                                si: y,
                                isStart: 0
                            };
                            k.endSlice._conf = {
                                si: y,
                                isStart: 1
                            };
                            k.backOuter._conf = {
                                si: y,
                                isStart: .4
                            };
                            l.push(k.startSlice, k.frontOuter1, k.frontOuter, k.backOuter, k.endSlice);
                            this.isDoughnut && (k.frontInner = a[x](this.slicingWallsFrontGroup).attr({
                                "stroke-width": 0
                            }), k.backInner = a[x](this.slicingWallsFrontGroup).attr({
                                "stroke-width": 0
                            }), k.backInner._conf = {
                                si: y,
                                isStart: .5
                            }, k.frontInner._conf = {
                                si: y,
                                isStart: .4
                            }, l.push(k.frontInner, k.backInner));
                            y += 1;
                            return f
                        }
                    }()
                };
                a.prototype.constructor = a
            }]);
            n.register("module", ["private", "modules.renderer.js-doughnut2d", function() {
                var a = this,
                    b = a.hcLib,
                    m = a.window,
                    F = !b.CREDIT_REGEX.test(m.location.hostname),
                    n = b.chartAPI,
                    aa = b.getFirstColor,
                    W = b.getFirstAlpha,
                    G = b.hasSVG,
                    u = b.toRaphaelColor,
                    K = b.hashify,
                    k = 8 === m.document.documentMode ? "visible" : "",
                    r = b.graphics.getLightColor,
                    p = Math.floor,
                    z = b.graphics.getDarkColor;
                n("doughnut2d", {
                    friendlyName: "Doughnut Chart",
                    defaultDatasetType: "Doughnut2D",
                    creditLabel: F,
                    applicableDSList: {
                        Doughnut2D: !0
                    },
                    getPointColor: function(a, b, k) {
                        var v;
                        a = aa(a);
                        b = W(b);
                        100 > k && G ? (v = z(a, p(100 * (85 - .2 * (100 - k))) / 100), a = r(a, p(100 * (100 - .5 * k)) / 100),
                            b = {
                                FCcolor: {
                                    color: v + "," + a + "," + a + "," + v,
                                    alpha: b + "," + b + "," + b + "," + b,
                                    radialGradient: !0,
                                    gradientUnits: "userSpaceOnUse",
                                    r: k
                                }
                            }) : b = {
                            FCcolor: {
                                color: a + "," + a,
                                alpha: b + "," + b,
                                ratio: "0,100"
                            }
                        };
                        return b
                    },
                    drawDoughnutCenterLabel: function(a, b, l, r, w, p, m) {
                        var z = this.components,
                            n = z.dataset[0].config;
                        p = p || n.lastCenterLabelConfig;
                        var z = z.paper,
                            F = this.linkedItems.smartLabel,
                            aa = this.graphics,
                            G = aa.datasetGroup,
                            W = p.padding,
                            Y = 2 * p.textPadding,
                            pa = {
                                fontFamily: p.font,
                                fontSize: p.fontSize + "px",
                                lineHeight: 1.2 * p.fontSize + "px",
                                fontWeight: p.bold ?
                                    "bold" : "",
                                fontStyle: p.italic ? "italic" : ""
                            },
                            qa = 1.414 * (.5 * r - W) - Y;
                        w = 1.414 * (.5 * w - W) - Y;
                        var ha;
                        F.setStyle(pa);
                        F.useEllipsesOnOverflow(this.config.useEllipsesWhenOverflow);
                        F = F.getSmartText(a, qa, w);
                        (w = aa.doughnutCenterLabel) ? (w.attr("text") !== a && this.centerLabelChange(a), ha = aa.centerLabelOvalBg) : (p.bgOval && (aa.centerLabelOvalBg = ha = z.circle(b, l, .5 * r - W, G)), w = aa.doughnutCenterLabel = z.text(G).hover(this.centerLabelRollover, this.centerLabelRollout).click(this.centerLabelClick), w.chart = this);
                        a ? (w.css(pa).attr({
                            x: b,
                            y: l,
                            text: F.text,
                            visibility: k,
                            direction: n.textDirection,
                            fill: u({
                                FCcolor: {
                                    color: p.color,
                                    alpha: p.alpha
                                }
                            }),
                            "text-bound": p.bgOval ? "none" : [u({
                                FCcolor: {
                                    color: p.bgColor,
                                    alpha: p.bgAlpha
                                }
                            }), u({
                                FCcolor: {
                                    color: p.borderColor,
                                    alpha: p.borderAlpha
                                }
                            }), p.borderThickness, p.textPadding, p.borderRadius]
                        }).tooltip(p.toolText || F.tooltext), p.bgOval && ha && ha.attr({
                            visibility: k,
                            fill: K(p.bgColor),
                            "fill-opacity": p.bgAlpha / 100,
                            stroke: K(p.borderColor),
                            "stroke-width": p.borderThickness,
                            "stroke-opacity": p.borderAlpha / 100
                        })) : (w.attr("visibility",
                            "hidden"), ha && ha.attr("visibility", "hidden"));
                        m && (n.lastCenterLabelConfig = p, n.centerLabelConfig = p)
                    },
                    centerLabelRollover: function() {
                        var b = this.chart,
                            k = b.config,
                            l = b.chartInstance,
                            p = l.ref,
                            r = b.components.dataset[0].config.lastCenterLabelConfig,
                            k = {
                                height: k.height,
                                width: k.width,
                                pixelHeight: p.offsetHeight,
                                pixelWidth: p.offsetWidth,
                                id: l.id,
                                renderer: l.args.renderer,
                                container: b.linkedItems.container,
                                centerLabelText: r && r.label
                            };
                        this.attr("text") && a.raiseEvent("centerLabelRollover", k, l, this, b.hoverOnCenterLabel)
                    },
                    centerLabelRollout: function() {
                        var b = this.chart,
                            k = b.config,
                            l = b.chartInstance,
                            p = l.ref,
                            r = b.components.dataset[0].config.lastCenterLabelConfig,
                            k = {
                                height: k.height,
                                width: k.width,
                                pixelHeight: p.offsetHeight,
                                pixelWidth: p.offsetWidth,
                                id: l.id,
                                renderer: l.args.renderer,
                                container: b.linkedItems.container,
                                centerLabelText: r && r.label
                            };
                        this.attr("text") && a.raiseEvent("centerLabelRollout", k, l, this, b.hoverOffCenterLabel)
                    },
                    centerLabelClick: function() {
                        var b = this.chart,
                            k = b.config,
                            l = b.chartInstance,
                            p = l.ref,
                            r = b.components.dataset[0].config.lastCenterLabelConfig,
                            b = {
                                height: k.height,
                                width: k.width,
                                pixelHeight: p.offsetHeight,
                                pixelWidth: p.offsetWidth,
                                id: l.id,
                                renderer: l.args.renderer,
                                container: b.linkedItems.container,
                                centerLabelText: r && r.label
                            };
                        this.attr("text") && a.raiseEvent("centerLabelClick", b, l)
                    },
                    centerLabelChange: function(b) {
                        var k = this.config,
                            l = this.chartInstance,
                            p = l.ref;
                        a.raiseEvent("centerLabelChanged", {
                            height: k.height,
                            width: k.width,
                            pixelHeight: p.offsetHeight,
                            pixelWidth: p.offsetWidth,
                            id: l.id,
                            renderer: l.args.renderer,
                            container: this.linkedItems.container,
                            centerLabelText: b
                        }, l)
                    },
                    hoverOnCenterLabel: function() {
                        var a = this.chart.components.dataset[0].config.lastCenterLabelConfig;
                        (a.hoverColor || a.hoverAlpha) && this.attr({
                            fill: u({
                                FCcolor: {
                                    color: a.hoverColor || a.color,
                                    alpha: a.hoverAlpha || a.alpha
                                }
                            })
                        })
                    },
                    hoverOffCenterLabel: function() {
                        var a = this.chart.components.dataset[0].config.lastCenterLabelConfig;
                        (a.hoverColor || a.hoverAlpha) && this.attr({
                            fill: u({
                                FCcolor: {
                                    color: a.color,
                                    alpha: a.alpha
                                }
                            })
                        })
                    }
                }, n.pie2d, {
                    singletonPlaceValue: !1
                })
            }]);
            n.register("module", ["private",
                "modules.renderer.js-doughnut3d",
                function() {
                    var a = this.hcLib,
                        b = !a.CREDIT_REGEX.test(this.window.location.hostname),
                        a = a.chartAPI;
                    a("doughnut3d", {
                        friendlyName: "3D Doughnut Chart",
                        defaultDatasetType: "Doughnut3D",
                        creditLabel: b,
                        applicableDSList: {
                            Doughnut3D: !0
                        },
                        _configureManager: function() {
                            var a = this.components.dataset[0],
                                b = a.config,
                                n = a.components,
                                a = n.Pie3DManager,
                                n = n.data;
                            a && a.configure(b.pieSliceDepth, 1 === n.length, b.use3DLighting, !0)
                        }
                    }, a.pie3d)
                }
            ]);
            n.register("module", ["private", "modules.renderer.js-mscolumn2d",
                function() {
                    var a = this.hcLib,
                        b = !a.CREDIT_REGEX.test(this.window.location.hostname),
                        a = a.chartAPI;
                    a("mscolumn2d", {
                        standaloneInit: !0,
                        friendlyName: "Multi-series Column Chart",
                        creditLabel: b,
                        defaultDatasetType: "column",
                        applicableDSList: {
                            column: !0
                        },
                        eiMethods: {}
                    }, a.mscartesian, {
                        enablemousetracking: !0
                    })
                }
            ]);
            n.register("module", ["private", "modules.renderer.js-mscolumn3d", function() {
                var a = this.hcLib,
                    b = !a.CREDIT_REGEX.test(this.window.location.hostname),
                    a = a.chartAPI;
                a("mscolumn3d", {
                    standaloneInit: !0,
                    defaultDatasetType: "column3d",
                    friendlyName: "Multi-series 3D Column Chart",
                    applicableDSList: {
                        column3d: !0
                    },
                    defaultPlotShadow: 1,
                    fireGroupEvent: !0,
                    is3D: !0,
                    creditLabel: b,
                    defaultZeroPlaneHighlighted: !1
                }, a.mscartesian3d, {
                    showplotborder: 0,
                    enablemousetracking: !0
                })
            }]);
            n.register("module", ["private", "modules.renderer.js-msbar2d", function() {
                var a = this.hcLib,
                    b = a.chartAPI,
                    a = !a.CREDIT_REGEX.test(this.window.location.hostname);
                b("msbar2d", {
                    standaloneInit: !0,
                    friendlyName: "Multi-series Bar Chart",
                    isBar: !0,
                    hasLegend: !0,
                    creditLabel: a,
                    defaultDatasetType: "bar2d",
                    applicableDSList: {
                        bar2d: !0
                    }
                }, b.msbarcartesian, {
                    enablemousetracking: !0
                })
            }]);
            n.register("module", ["private", "modules.renderer.js-msbar3d", function() {
                var a = this.hcLib,
                    b = a.chartAPI,
                    a = !a.CREDIT_REGEX.test(this.window.location.hostname);
                b("msbar3d", {
                    standaloneInit: !0,
                    defaultSeriesType: "bar3d",
                    friendlyName: "Multi-series 3D Bar Chart",
                    fireGroupEvent: !0,
                    defaultPlotShadow: 1,
                    is3D: !0,
                    isBar: !0,
                    hasLegend: !0,
                    creditLabel: a,
                    defaultZeroPlaneHighlighted: !1,
                    defaultDatasetType: "bar3d",
                    applicableDSList: {
                        bar3d: !0
                    }
                }, b.msbarcartesian3d, {
                    showplotborder: 0,
                    enablemousetracking: !0
                })
            }]);
            n.register("module", ["private", "modules.renderer.js-msarea", function() {
                var a = this.hcLib,
                    b = !a.CREDIT_REGEX.test(this.window.location.hostname),
                    a = a.chartAPI;
                a("msarea", {
                    standaloneInit: !0,
                    friendlyName: "Multi-series Area Chart",
                    creditLabel: b,
                    defaultDatasetType: "area",
                    defaultPlotShadow: 0,
                    applicableDSList: {
                        area: !0
                    }
                }, a.areabase, {
                    enablemousetracking: !0
                })
            }]);
            n.register("module", ["private", "modules.renderer.js-msline", function() {
                var a = this.hcLib,
                    b = a.chartAPI,
                    a = !a.CREDIT_REGEX.test(this.window.location.hostname);
                b("msline", {
                    standaloneInit: !0,
                    friendlyName: "Multi-series Line Chart",
                    creditLabel: a,
                    defaultDatasetType: "line",
                    defaultPlotShadow: 1,
                    axisPaddingLeft: 0,
                    axisPaddingRight: 0,
                    applicableDSList: {
                        line: !0
                    }
                }, b.areabase, {
                    zeroplanethickness: 1,
                    zeroplanealpha: 40,
                    showzeroplaneontop: 0,
                    enablemousetracking: !0
                })
            }]);
            n.register("module", ["private", "modules.renderer.js-stackedarea2d", function() {
                var a = this.hcLib,
                    b = a.chartAPI,
                    m = !a.CREDIT_REGEX.test(this.window.location.hostname);
                b("stackedarea2d", {
                    friendlyName: "Stacked Area Chart",
                    showsum: 0,
                    creditLabel: m
                }, b.msarea, {
                    plotfillalpha: a.preDefStr.HUNDREDSTRING,
                    isstacked: 1
                })
            }]);
            n.register("module", ["private", "modules.renderer.js-stackedcolumn2d", function() {
                var a = this.hcLib,
                    b = a.chartAPI,
                    a = !a.CREDIT_REGEX.test(this.window.location.hostname);
                b("stackedcolumn2d", {
                    friendlyName: "Stacked Column Chart",
                    creditLabel: a
                }, b.mscolumn2d, {
                    isstacked: !0
                })
            }]);
            n.register("module", ["private", "modules.renderer.js-stackedcolumn3d", function() {
                var a = this.hcLib,
                    b = !a.CREDIT_REGEX.test(this.window.location.hostname),
                    m = a.chartAPI;
                m("stackedcolumn3d", {
                    friendlyName: "3D Stacked Column Chart",
                    creditLabel: b,
                    _mouseEvtHandler: function(b) {
                        var m = b.data.mouseTracker,
                            n = this.config,
                            W = n.canvasLeft,
                            G = n.canvasRight,
                            u = n.canvasBottom,
                            K = n.canvasTop,
                            k = n.datasetOrder || this.components.dataset,
                            r = a.getMouseCoordinate(this.linkedItems.container, b.originalEvent, this),
                            p = r.chartX,
                            r = r.chartY,
                            z, x = this.components,
                            D = "datasetGroup_" + k[0].type,
                            l, v = !1,
                            w = k.length,
                            T, Z = m._lastDatasetIndex,
                            la =
                            m._lastPointIndex;
                        if (p > W && p < G && r > K && r < u || this.config.plotOverFlow) {
                            for (; w-- && !v;) z = k[w], z.valueLook = !0, z && z.visible && (l = z._getHoveredPlot && z._getHoveredPlot(p, r)) && l.hovered && (v = !0, l.datasetIndex = w, T = m._getMouseEvents(b, l.datasetIndex, l.pointIndex));
                            for (w = 0; w < k.length && !v;) z = k[w], z.valueLook = !1, z && z.visible && (l = z._getHoveredPlot && z._getHoveredPlot(p, r)) && l.hovered && (v = !0, l.datasetIndex = w, T = m._getMouseEvents(b, l.datasetIndex, l.pointIndex)), w++
                        }(!v || T && T.fireOut) && void 0 !== Z && (delete m._lastDatasetIndex,
                            delete m._lastPointIndex, k[Z] && k[Z]._firePlotEvent && k[Z]._firePlotEvent("mouseout", la, b));
                        if (v)
                            for (W = T.events && T.events.length, m._lastDatasetIndex = l.datasetIndex, la = m._lastPointIndex = l.pointIndex, n.drawTrendRegion && x[D]._notifyGroup(!0, b), m = 0; m < W; m += 1) z && z._firePlotEvent && z._firePlotEvent(T.events[m], la, b, l.datasetIndex);
                        else n.drawTrendRegion && x[D]._notifyGroup(!1, b);
                        n.drawTrendRegion && x[D]._getHoveredRegion(p, r, b)
                    }
                }, m.mscolumn3d, {
                    showplotborder: 0,
                    enablemousetracking: !0
                }, m.stackedcolumn2d)
            }]);
            n.register("module", ["private", "modules.renderer.js-stackedbar2d", function() {
                var a = this.hcLib,
                    b = !a.CREDIT_REGEX.test(this.window.location.hostname),
                    a = a.chartAPI;
                a("stackedbar2d", {
                    friendlyName: "Stacked Bar Chart",
                    creditLabel: b
                }, a.msbar2d, {
                    maxbarheight: 50,
                    enablemousetracking: !0
                }, a.stackedcolumn2d)
            }]);
            n.register("module", ["private", "modules.renderer.js-stackedbar3d", function() {
                var a = this.hcLib,
                    b = !a.CREDIT_REGEX.test(this.window.location.hostname),
                    m = a.chartAPI;
                m("stackedbar3d", {
                    friendlyName: "3D Stacked Bar Chart",
                    creditLabel: b,
                    _mouseEvtHandler: function(b) {
                        var m = b.data.mouseTracker,
                            n = this.config,
                            W = n.canvasLeft,
                            G = n.canvasRight,
                            u = n.canvasBottom,
                            K = n.canvasTop,
                            k = n.datasetOrder || this.components.dataset,
                            r = a.getMouseCoordinate(this.linkedItems.container, b.originalEvent, this),
                            p = r.chartX,
                            r = r.chartY,
                            z, x = this.components,
                            D = "datasetGroup_" + k[0].type,
                            l, v = !1,
                            w = k.length,
                            T, Z = m._lastDatasetIndex,
                            la = m._lastPointIndex;
                        if (p > W && p < G && r > K && r < u || this.config.plotOverFlow) {
                            for (w = k.length; w-- && !v;)
                                if (z = k[w], z.valueLook = !0, z && z.visible) {
                                    if ((l = z._getHoveredPlot &&
                                            z._getHoveredPlot(p, r)) && l.hovered)
                                        for (W = 0; W <= w; ++W)
                                            if (w !== W && l && (G = k[W], (u = G._getHoveredPlot && G._getHoveredPlot(p, r)) && u.pointIndex === l.pointIndex - 1)) {
                                                l = u;
                                                w = W;
                                                z = G;
                                                z.valueLook = !0;
                                                break
                                            }
                                    l && l.hovered && (v = !0, l.datasetIndex = w, T = m._getMouseEvents(b, l.datasetIndex, l.pointIndex))
                                }
                            for (w = 0; w < k.length && !v;) {
                                z = k[w];
                                z.valueLook = !1;
                                if (z && z.visible) {
                                    if ((l = z._getHoveredPlot && z._getHoveredPlot(p, r)) && l.hovered)
                                        for (W = 0; W <= w; ++W)
                                            if (w !== W && l && (G = k[W], (u = G._getHoveredPlot && G._getHoveredPlot(p, r)) && u.pointIndex === l.pointIndex -
                                                    1)) {
                                                l = u;
                                                w = W;
                                                z = G;
                                                z.valueLook = !1;
                                                break
                                            }
                                    l && l.hovered && (v = !0, l.datasetIndex = w, T = m._getMouseEvents(b, l.datasetIndex, l.pointIndex))
                                }
                                w++
                            }
                        }(!v || T && T.fireOut) && void 0 !== Z && (delete m._lastDatasetIndex, delete m._lastPointIndex, k[Z] && k[Z]._firePlotEvent && k[Z]._firePlotEvent("mouseout", la, b));
                        if (v)
                            for (k = T.events && T.events.length, m._lastDatasetIndex = l.datasetIndex, la = m._lastPointIndex = l.pointIndex, n.drawTrendRegion && x[D]._notifyGroup(!0, b), m = 0; m < k; m += 1) z && z._firePlotEvent && z._firePlotEvent(T.events[m], la, b, l.datasetIndex);
                        else n.drawTrendRegion && x[D]._notifyGroup(!1, b);
                        n.drawTrendRegion && x[D]._getHoveredRegion(p, r, b)
                    }
                }, m.msbar3d, {
                    showplotborder: 0,
                    enablemousetracking: !0
                }, m.stackedcolumn2d)
            }]);
            n.register("module", ["private", "modules.renderer.js-marimekko", function() {
                var a = this.hcLib,
                    b = a.chartAPI,
                    a = !a.CREDIT_REGEX.test(this.window.location.hostname),
                    m = Math,
                    n = m.min,
                    Y = m.max;
                b("marimekko", {
                    standaloneInit: !0,
                    friendlyName: "Marimekko Chart",
                    isValueAbs: !0,
                    distributedColumns: !0,
                    stack100percent: !0,
                    defaultDatasetType: "marimekko",
                    applicableDSList: {
                        marimekko: !0
                    },
                    isStacked: !0,
                    showsum: 1,
                    creditLabel: a,
                    _setAxisLimits: function() {
                        var a = this.components,
                            b = a.dataset,
                            m = a.yAxis,
                            a = a.xAxis,
                            u, K = b.length,
                            k, r = -Infinity,
                            p = Infinity,
                            z = Infinity,
                            x = -Infinity,
                            D, l, v = {};
                        D = this.config.categories;
                        var w = [],
                            T = function(a) {
                                r = Y(r, a.max);
                                p = n(p, a.min);
                                x = Y(x, a.xMax || -Infinity);
                                z = n(z, a.xMin || Infinity)
                            };
                        for (k = 0; k < K; k++) u = b[k], (l = u.groupManager) ? v[u.type] = l : w.push(u);
                        for (l in v) b = v[l].getDataLimits(), T(b);
                        K = w.length;
                        for (k = 0; k < K; k++) b = w[k].getDataLimits(), T(b); -
                        Infinity === r && (r = 0);
                        Infinity === p && (p = 0);
                        m[0].setAxisConfig({
                            isPercent: this.config.isstacked ? this.config.stack100percent : 0
                        });
                        m[0].setDataLimit(r, p);
                        if (-Infinity !== x || Infinity !== z) a[0].config.xaxisrange = {
                            max: x,
                            min: z
                        }, a[0].setDataLimit(x, z);
                        m = v[l].getStackSumPercent();
                        k = m.length;
                        l = a[0].getCategoryLen();
                        l > k && D.splice(k, l - k);
                        this._setCategories();
                        k = a[0].getLimit();
                        z = k.min;
                        x = k.max;
                        D = z;
                        l = x - z;
                        for (k = 0; k < m.length; k++) b = m[k], K = l * b / 100, b = D + K / 2, a[0].updateCategory(k, {
                            x: b
                        }), D += K
                    }
                }, b.mscartesian, {
                    isstacked: !0,
                    showpercentvalues: 0,
                    usepercentdistribution: 1,
                    showsum: 1,
                    enablemousetracking: !0
                })
            }]);
            n.register("module", ["private", "modules.renderer.js-msstackedcolumn2d", function() {
                var a = this.hcLib,
                    b = !a.CREDIT_REGEX.test(this.window.location.hostname),
                    m = a.chartAPI,
                    F = a.pluck,
                    Y = a.componentDispose;
                m("msstackedcolumn2d", {
                    standaloneInit: !0,
                    defaultDatasetType: "column",
                    applicableDSList: {
                        column: !0
                    },
                    friendlyName: "Multi-series Stacked Column Chart",
                    _createDatasets: function() {
                        var a = this.components,
                            b = this.jsonData,
                            m = b.dataset,
                            u = m && m.length || 0,
                            K, k, r, p = this.defaultDatasetType,
                            z = this.applicableDSList,
                            x, D, l, v, w, T, Z = b.lineset || [],
                            la = this.config,
                            ja = la.dataSetMap,
                            ca = la.lineSetMap,
                            ga = ja && ja.length,
                            sa = a.legend,
                            ta = [],
                            oa = [],
                            pa = 0;
                        l = 0;
                        var qa, ha = -1,
                            da, Ea = this.config.catLen,
                            wa = a.xAxis[0],
                            M, P, ua = a.dataset;
                        if (m || 0 !== Z.length) {
                            this.config.categories = b.categories && b.categories[0].category;
                            k = a.dataset = [];
                            for (b = 0; b < u; b++) {
                                w = m[b];
                                ha++;
                                if (w.dataset)
                                    for (P = !0, T = w.dataset && w.dataset.length || 0, ta[b] = [], K = 0; K < T; K++) {
                                        if (l = w.dataset[K], x = (x = F(l.renderas,
                                                p)) && x.toLowerCase(), z[x] || (x = p), r = n.get("component", ["dataset", x])) v = "datasetGroup_" + x, D = n.register("component", ["datasetGroup", x]), x = a[v], D && !x ? (x = a[v] = new D, x.chart = this, x.init()) : x && ja && 0 !== ja.length && !qa && (x.init(), qa = !0), ja && ja[b] && ja[b][K] ? (r = ja[b][K], r.index = pa, v = r.JSONData, D = v.data.length, v = l.data && l.data.length || 0, da = wa.getCategoryLen(), M = Ea - da, D -= v, D = this._getDiff(D, v, M, da), v = D.diff, D = D.startIndex, 0 < v && r.removeData(D, v, !1), r.JSONData = l, r.configure()) : (r = new r, r.chart = this, r.index = pa, r.init(l)),
                                            pa++, ta[b].push(r), k.push(r), x && x.addDataSet(r, ha, K)
                                    } else T = K = 0, ha--;
                                w = ja && ja[b] && ja[b].length;
                                if (w > T)
                                    for (l = K, w = w - T + K; l < w; l++) x = ja[b][l], sa.removeItem(x.legendItemId), Y.call(x)
                            }
                            if (ga > u)
                                for (l = b, w = ga - u + b; l < w; l++)
                                    for (T = ja[l].length, K = 0; K < T; K++) x = ja[l][K], sa.removeItem(x.legendItemId), Y.call(x);
                            la.dataSetMap = ta;
                            if (this.lineset) {
                                b = 0;
                                for (u = Z.length; b < u; b++) m = Z[b], r = n.get("component", ["dataset", "line"]), r = new r, ca && ca[b] ? (r = ca[b], r.index = pa, v = r.JSONData, D = v.data.length, v = m.data && m.data.length || 0, D > v && r.removeData(v,
                                    D - v, !1), r.JSONData = m, r.configure()) : (r.chart = this, r.index = pa, r.init(m)), oa.push(r), k.push(r), pa++;
                                Z = ca && ca.length;
                                if (Z > u)
                                    for (l = b, w = Z - u + b; l < w; l++) x = ca[l], sa.removeItem(x.legendItemId), Y.call(x);
                                la.lineSetMap = oa
                            }
                            P ? this.config.catLen = wa.getCategoryLen() : (a.dataset = ua, this.setChartMessage())
                        } else this.setChartMessage()
                    },
                    creditLabel: b
                }, m.mscartesian, {
                    isstacked: !0,
                    enablemousetracking: !0
                })
            }]);
            n.register("module", ["private", "modules.renderer.js-mscombi2d", function() {
                var a = this.hcLib,
                    b = a.chartAPI,
                    m = !a.CREDIT_REGEX.test(this.window.location.hostname),
                    F = a.pluck,
                    Y = a.componentDispose;
                b("mscombi2d", {
                    friendlyName: "Multi-series Combination Chart",
                    standaloneInit: !0,
                    creditLabel: m,
                    defaultDatasetType: "column",
                    applicableDSList: {
                        line: !0,
                        area: !0,
                        column: !0
                    },
                    _createDatasets: function() {
                        var a = this.components,
                            b = this.jsonData,
                            m = b.dataset,
                            u = m && m.length,
                            K, k, r = this.defaultDatasetType,
                            p = this.applicableDSList;
                        K = this.components.legend;
                        var z = a.xAxis[0],
                            x, D, l, v, w, T = this.config.isstacked,
                            Z, la, ja = [],
                            ca = {},
                            ga = this.config,
                            sa = this.config.catLen,
                            ta = ga.datasetMap || (ga.datasetMap = {
                                line: [],
                                area: [],
                                column: [],
                                column3d: [],
                                scrollcolumn2d: []
                            }),
                            oa = {
                                line: [],
                                area: [],
                                column: [],
                                column3d: [],
                                scrollcolumn2d: []
                            };
                        m || this.setChartMessage();
                        this.config.categories = b.categories && b.categories[0].category;
                        b = a.dataset = [];
                        K && K.emptyItems();
                        for (K = 0; K < u; K++)
                            if (w = m[K], v = w.parentyaxis || "", D = (D = this.config.isdual && "s" === v.toLowerCase() ? "line" === this.defaultSecondaryDataset ? this.sDefaultDatasetType : F(w.renderas, this.sDefaultDatasetType) : F(w.renderas, r)) && D.toLowerCase(), p[D] || (D = r), l = n.get("component", ["dataset", D])) void 0 === ca[D] ? ca[D] = 0 : ca[D]++, k = "datasetGroup_" + D, v = n.register("component", ["datasetGroup", D]), (x = a[k]) && ja.push(x), v && !x && (x = a[k] = new v, x.chart = this, x.init()), v = ta[D], (k = v[0]) ? (delete k.legendItemId, x = z.getCategoryLen(), l = sa - x, la = k.JSONData, Z = la.data && la.data.length, la = w.data && w.data.length || 0, Z -= la, l = this._getDiff(Z, la, l, x), x = l.diff, l = l.startIndex, 0 < x && k.removeData(l, x, !1), k.index = K, k.JSONData = w, k.configure(), v.splice(0, 1)) : (k = new l, k.chart = this, k.index = K, x && (T ? x.addDataSet(k, 0,
                                ca[D]) : x.addDataSet(k, ca[D], 0)), k.init(w)), oa[D].push(k), b.push(k);
                        this._setDatasetOrder();
                        for (m in ta)
                            if (v = ta[m], r = v[0] && v[0].groupManager, u = v.length, p = void 0 === ca[m] ? 0 : ca[m] + 1, u)
                                for (T && r && r.removeDataSet(0, p, u), a = 0; a < u; a++) r && !T && r.removeDataSet(p, 0, 1), "column" === v[a].type && !0 === this.is3D ? (v[a].visible = !1, v[a].draw()) : Y.call(v[a]);
                        ga.datasetMap = oa;
                        this.config.catLen = z.getCategoryLen()
                    }
                }, b.areabase, {
                    enablemousetracking: !0
                })
            }]);
            n.register("module", ["private", "modules.renderer.js-mscombi3d", function() {
                var a =
                    this.hcLib,
                    b = !a.CREDIT_REGEX.test(this.window.location.hostname),
                    a = a.chartAPI;
                a("mscombi3d", {
                    standaloneInit: !0,
                    friendlyName: "Multi-series 3D Combination Chart",
                    defaultDatasetType: "column3d",
                    is3D: !0,
                    creditLabel: b,
                    defaultPlotShadow: 1,
                    applicableDSList: {
                        column3d: !0,
                        line: !0,
                        area: !0
                    },
                    _createDatasets: a.mscombi2d
                }, a.mscartesian3d, {
                    showplotborder: 0,
                    enablemousetracking: !0
                }, a.areabase)
            }]);
            n.register("module", ["private", "modules.renderer.js-mscolumnline3d", function() {
                var a = this.hcLib,
                    b = !a.CREDIT_REGEX.test(this.window.location.hostname),
                    a = a.chartAPI;
                a("mscolumnline3d", {
                    friendlyName: "Multi-series Column and Line Chart",
                    is3D: !0,
                    creditLabel: b,
                    defaultPlotShadow: 1,
                    applicableDSList: {
                        column3d: !0,
                        line: !0
                    }
                }, a.mscombi3d, {
                    use3dlineshift: 1,
                    showplotborder: 0,
                    enablemousetracking: !0
                }, a.msarea)
            }]);
            n.register("module", ["private", "modules.renderer.js-stackedcolumn2dline", function() {
                var a = this.hcLib,
                    b = a.chartAPI,
                    a = !a.CREDIT_REGEX.test(this.window.location.hostname);
                b("stackedcolumn2dline", {
                    friendlyName: "Stacked Column and Line Chart",
                    defaultDatasetType: "column",
                    creditLabel: a,
                    applicableDSList: {
                        line: !0,
                        column: !0
                    }
                }, b.mscombi2d, {
                    isstacked: !0,
                    stack100percent: 0,
                    enablemousetracking: !0
                }, b.msarea)
            }]);
            n.register("module", ["private", "modules.renderer.js-stackedcolumn3dline", function() {
                var a = this.hcLib,
                    b = !a.CREDIT_REGEX.test(this.window.location.hostname),
                    a = a.chartAPI;
                a("stackedcolumn3dline", {
                    friendlyName: "Stacked 3D Column and Line Chart",
                    is3D: !0,
                    creditLabel: b,
                    _mouseEvtHandler: a.stackedcolumn3d._mouseEvtHandler,
                    applicableDSList: {
                        column3d: !0,
                        line: !0
                    }
                }, a.mscombi3d, {
                    use3dlineshift: 1,
                    isstacked: !0,
                    stack100percent: 0,
                    showplotborder: 0,
                    enablemousetracking: !0
                }, a.msarea)
            }]);
            n.register("module", ["private", "modules.renderer.js-mscombidy2d", function() {
                var a = this.hcLib,
                    b = !a.CREDIT_REGEX.test(this.window.location.hostname),
                    a = a.chartAPI;
                a("mscombidy2d", {
                    standaloneInit: !0,
                    friendlyName: "Multi-series Dual Y-Axis Combination Chart",
                    defaultDatasetType: "column",
                    sDefaultDatasetType: "line",
                    _createDatasets: a.mscombi2d,
                    creditLabel: b,
                    applicableDSList: {
                        column: !0,
                        line: !0,
                        area: !0
                    }
                }, a.msdybasecartesian, {
                    isdual: 1,
                    enablemousetracking: !0
                }, a.msarea)
            }]);
            n.register("module", ["private", "modules.renderer.js-mscolumn3dlinedy", function() {
                var a = this.hcLib,
                    b = !a.CREDIT_REGEX.test(this.window.location.hostname),
                    a = a.chartAPI;
                a("mscolumn3dlinedy", {
                    standaloneInit: !0,
                    friendlyName: "Multi-series 3D Column and Line Chart",
                    defaultDatasetType: "column3d",
                    sDefaultDatasetType: "line",
                    is3D: !0,
                    creditLabel: b,
                    _createDatasets: a.mscombi2d,
                    defaultPlotShadow: 1,
                    applicableDSList: {
                        column3d: !0,
                        line: !0
                    }
                }, a.msdybasecartesian3d, {
                    use3dlineshift: 1,
                    isdual: !0,
                    showplotborder: 0,
                    enablemousetracking: !0
                }, a.msarea)
            }]);
            n.register("module", ["private", "modules.renderer.js-stackedcolumn3dlinedy", function() {
                var a = this.hcLib,
                    b = a.chartAPI,
                    a = !a.CREDIT_REGEX.test(this.window.location.hostname);
                b("stackedcolumn3dlinedy", {
                    standaloneInit: !0,
                    friendlyName: "Stacked 3D Column and Line Chart",
                    is3D: !0,
                    defaultDatasetType: "column3d",
                    creditLabel: a,
                    sDefaultDatasetType: "line",
                    defaultSecondaryDataset: "line",
                    _createDatasets: b.mscombi2d,
                    _mouseEvtHandler: b.stackedcolumn3d._mouseEvtHandler,
                    applicableDSList: {
                        column3d: !0,
                        line: !0
                    }
                }, b.msdybasecartesian3d, {
                    use3dlineshift: 1,
                    isdual: !0,
                    isstacked: !0,
                    showplotborder: 0,
                    enablemousetracking: !0
                }, b.msarea)
            }]);
            n.register("module", ["private", "modules.renderer.js-msstackedcolumn2dlinedy", function() {
                var a = this.hcLib,
                    b = !a.CREDIT_REGEX.test(this.window.location.hostname),
                    a = a.chartAPI;
                a("msstackedcolumn2dlinedy", {
                    standaloneInit: !0,
                    friendlyName: "Multi-series Dual Y-Axis Stacked Column and Line Chart",
                    stack100percent: 0,
                    defaultDatasetType: "column",
                    sDefaultDatasetType: "line",
                    hasLineSet: !0,
                    creditLabel: b,
                    applicableDSList: {
                        column: !0
                    },
                    lineset: !0,
                    _createDatasets: a.msstackedcolumn2d
                }, a.msdybasecartesian, {
                    isdual: !0,
                    haslineset: !0,
                    isstacked: !0,
                    enablemousetracking: !0
                }, a.msarea)
            }]);
            n.register("module", ["private", "modules.renderer.js-scrollcolumn2d", function() {
                var a = this,
                    b = a.hcLib,
                    m = b.chartAPI,
                    n = !b.CREDIT_REGEX.test(a.window.location.hostname),
                    Y = Math,
                    aa = Y.floor,
                    W = Y.round,
                    G = b.pluckNumber,
                    u = b.Raphael;
                m("scrollcolumn2d", {
                    standaloneInit: !0,
                    friendlyName: "Scrollable Multi-series Column Chart",
                    tooltipConstraint: "plot",
                    canvasborderthickness: 1,
                    creditLabel: n,
                    defaultDatasetType: "scrollcolumn2d",
                    applicableDSList: {
                        scrollcolumn2d: !0
                    },
                    avgScrollPointWidth: 40,
                    hasScroll: !0,
                    defaultPlotShadow: 1,
                    binSize: 0,
                    _manageScrollerPosition: function() {
                        var a = this.config,
                            b;
                        b = this._scrollBar.get;
                        var m = this.components.scrollBar,
                            p;
                        b = b()[0];
                        m.setConfiguaration(b.conf);
                        b = a.scrollEnabled;
                        p = m.getLogicalSpace();
                        this._allocateSpace({
                            bottom: a.shift = !1 === b ? 0 : p.height + m.conf.padding
                        })
                    },
                    _resetViewPortConfig: function() {
                        this.config.viewPortConfig = {
                            scaleX: 1,
                            scaleY: 1,
                            x: 0,
                            y: 0
                        }
                    },
                    updateManager: function(a) {
                        var b = this.config,
                            m = this.config.viewPortConfig,
                            p = m.scaleX,
                            n = this.graphics.datasetGroup,
                            x = this.graphics.datalabelsGroup,
                            u = this.graphics.trackerGroup,
                            l = b.canvasWidth * (p - 1) * a,
                            v = this.components.xAxis[0],
                            w = this.graphics.sumLabelsLayer;
                        m.x = l / p;
                        m = "t" + -W(l) + ",0";
                        b.lastScrollPosition = a;
                        n.attr({
                            transform: m
                        });
                        x.attr({
                            transform: m
                        });
                        u.attr({
                            transform: m
                        });
                        w && w.attr({
                            transform: m
                        });
                        a = v.getAxisConfig("animateAxis");
                        b = v.getAxisConfig("drawAxisName");
                        v.setAxisConfig({
                            animateAxis: !1,
                            drawAxisName: !1
                        });
                        v.draw();
                        v.setAxisConfig({
                            animateAxis: a,
                            drawAxisName: b
                        })
                    },
                    _createToolBox: function() {
                        var a = this.components,
                            b = this._scrollBar,
                            r = b.get,
                            p = b.add,
                            n, x, u = a.scrollBar;
                        m.mscartesian._createToolBox.call(this);
                        n = a.tb;
                        x = (a.toolBoxAPI || n.getAPIInstances(n.ALIGNMENT_HORIZONTAL)).Scroller;
                        b.clear();
                        p({
                            isHorizontal: !0
                        }, {
                            scroll: function(a) {
                                return function() {
                                    a.updateManager.apply(a, arguments)
                                }
                            }(this)
                        });
                        b = r()[0];
                        u || (a.scrollBar = (new x(b.conf, n.idCount, n.pId)).attachEventHandlers(b.handler))
                    },
                    _setAxisScale: function() {
                        var a =
                            this.config,
                            b = this.components.xAxis[0].getCategoryLen(),
                            m = this.jsonData,
                            p = a.scrollOptions || (a.scrollOptions = {}),
                            n = this.components.dataset,
                            x = n.length,
                            u, l, v = 0,
                            w;
                        w = a.canvasWidth;
                        var F = a.scrollToEnd,
                            Z = a.lastScrollPosition,
                            m = G(m.chart.numvisibleplot, aa(a.width / this.avgScrollPointWidth));
                        for (l = 0; l < x; l++) u = n[l], "column" === u.type && v++;
                        this.config.isstacked && (v = 1);
                        b *= v || 1;
                        2 <= m && m < b ? (a.viewPortConfig.scaleX = b /= m, w = w * (b - 1) * (void 0 !== Z ? Z : F ? 1 : 0), a.viewPortConfig.x = w / b, p.vxLength = m / x, a.scrollEnabled = !0) : a.scrollEnabled = !1
                    },
                    drawScrollBar: function() {
                        var b = this,
                            k = b.config,
                            m = k.viewPortConfig,
                            p = b.components,
                            n = b.graphics,
                            x = p.paper,
                            D = p.xAxis[0],
                            l = D.config,
                            v = D.config.axisRange,
                            w = k.scrollOptions || (k.scrollOptions = {}),
                            F = v.max,
                            Z = v.min,
                            aa = w.vxLength,
                            W = p.scrollBar,
                            v = W.node,
                            Y = k.scrollToEnd,
                            ga = k.lastScrollPosition,
                            sa = m.scaleX,
                            ta, oa, pa, qa, ha;
                        qa = void 0 !== ga ? ga : Y ? 1 : 0;
                        m = k.canvasLeft;
                        Y = k.canvasTop;
                        ga = k.canvasHeight;
                        ta = k.canvasWidth;
                        p = p.canvas.config;
                        oa = p.canvasBorderWidth;
                        pa = l.showAxisLine ? l.axisLineThickness || 0 : 0;
                        ha = G(oa, l.lineStartExtension);
                        l = G(oa, l.lineEndExtension);
                        w.viewPortMin = Z;
                        w.viewPortMax = F;
                        sa = w.scrollRatio = 1 / sa;
                        aa = w.windowedCanvasWidth = D.getAxisPosition(aa);
                        D = w.fullCanvasWidth = D.getAxisPosition(F - Z) - aa;
                        w = n.scrollBarParentGroup;
                        w || (w = n.scrollBarParentGroup = x.group("scrollBarParentGroup", n.parentGroup).insertBefore(n.datalabelsGroup));
                        !1 !== k.scrollEnabled ? (W.draw(m - ha, Y + ga + oa + pa - 2, {
                            width: ta + ha + l,
                            scrollRatio: sa,
                            roundEdges: p.isRoundEdges,
                            fullCanvasWidth: D,
                            windowedCanvasWidth: aa,
                            scrollPosition: qa,
                            parentLayer: w
                        }), !v && function() {
                            var k;
                            u.eve.on("raphael.scroll.start." + W.node.id, function(l) {
                                k = l;
                                a.raiseEvent("scrollstart", {
                                    scrollPosition: l
                                }, b.chartInstance)
                            });
                            u.eve.on("raphael.scroll.end." + W.node.id, function(l) {
                                a.raiseEvent("scrollend", {
                                    prevScrollPosition: k,
                                    scrollPosition: l
                                }, b.chartInstance)
                            })
                        }()) : W && W.node && W.node.hide()
                    },
                    _drawDataset: function() {
                        this._setClipping();
                        m.mscartesian._drawDataset.call(this)
                    },
                    _setClipping: function() {
                        var a = this.config,
                            b = this.graphics.datasetGroup,
                            m = this.graphics.datalabelsGroup,
                            p = this.graphics.trackerGroup,
                            n = a.viewPortConfig,
                            u = this.graphics.sumLabelsLayer,
                            D = n.scaleX,
                            l = this.get("config", "animationObj"),
                            v = l.duration,
                            w = l.dummyObj,
                            F = l.animObj,
                            l = l.animType,
                            n = n.x,
                            a = a.height,
                            G = this.components.canvas.config.clip["clip-canvas"],
                            G = G && G.slice(0) || [];
                        this.config.clipSet ? (b.animateWith(w, F, {
                            "clip-rect": G
                        }, v, l), m.animateWith(w, F, {
                            "clip-rect": G
                        }, v, l), p.attr({
                            "clip-rect": G
                        }), G[3] = a, G[1] = 0, u && u.animateWith(w, F, {
                            "clip-rect": G
                        }, v, l)) : (b.attr({
                                "clip-rect": G
                            }), m.attr({
                                "clip-rect": G
                            }), p.attr({
                                "clip-rect": G
                            }), G[3] = a, G[1] =
                            0, u && u.attr({
                                "clip-rect": G
                            }));
                        b.attr({
                            transform: "T" + -(n * D) + ",0"
                        });
                        m.attr({
                            transform: "T" + -(n * D) + ",0"
                        });
                        p.attr({
                            transform: "T" + -(n * D) + ",0"
                        });
                        u && u.attr({
                            transform: "T" + -(n * D) + ",0"
                        });
                        this.config.clipSet = !0
                    },
                    configure: function() {
                        var a = this.jsonData.chart,
                            b;
                        m.mscolumn2d.configure.call(this);
                        b = this.config;
                        b.scrollToEnd = G(a.scrolltoend, 0);
                        b.lastScrollPosition = void 0
                    }
                }, m.scrollbase)
            }]);
            n.register("module", ["private", "modules.renderer.js-scrollarea2d", function() {
                var a = this.hcLib,
                    b = !a.CREDIT_REGEX.test(this.window.location.hostname),
                    m = a.chartAPI,
                    n = a.pluckNumber,
                    Y = Math.floor;
                m("scrollarea2d", {
                    friendlyName: "Scrollable Multi-series Area Chart",
                    tooltipConstraint: "plot",
                    canvasborderthickness: 1,
                    creditLabel: b,
                    hasScroll: !0,
                    defaultDatasetType: "scrollarea2d",
                    applicableDSList: {
                        scrollarea2d: !0
                    },
                    avgScrollPointWidth: 75,
                    defaultPlotShadow: 0,
                    binSize: 0,
                    _setAxisScale: function() {
                        var a = this.config,
                            b = this.components.xAxis[0].getCategoryLen(),
                            m = this.jsonData,
                            u = a.scrollOptions || (a.scrollOptions = {}),
                            K;
                        K = a.lastScrollPosition;
                        var k = a.scrollToEnd,
                            r = a.canvasWidth,
                            m = n(m.chart.numvisibleplot, Y(a.width / this.avgScrollPointWidth));
                        2 <= m && m < b ? (a.viewPortConfig.scaleX = b /= m, K = r * (b - 1) * (void 0 !== K ? K : k ? 1 : 0), a.viewPortConfig.x = K / b, u.vxLength = m, a.scrollEnabled = !0) : a.scrollEnabled = !1
                    }
                }, m.scrollcolumn2d, {
                    enablemousetracking: !0
                }, m.areabase)
            }]);
            n.register("module", ["private", "modules.renderer.js-scrollline2d", function() {
                var a = this.hcLib,
                    b = a.chartAPI,
                    a = !a.CREDIT_REGEX.test(this.window.location.hostname);
                b("scrollline2d", {
                    friendlyName: "Scrollable Multi-series Line Chart",
                    tooltipConstraint: "plot",
                    canvasborderthickness: 1,
                    defaultDatasetType: "line",
                    creditLabel: a,
                    avgScrollPointWidth: 75,
                    defaultPlotShadow: 1,
                    binSize: 0
                }, b.scrollarea2d, {
                    zeroplanethickness: 1,
                    zeroplanealpha: 40,
                    showzeroplaneontop: 0,
                    enablemousetracking: !0
                }, b.areabase)
            }]);
            n.register("module", ["private", "modules.renderer.js-scrollstackedcolumn2d", function() {
                var a = this.hcLib,
                    b = !a.CREDIT_REGEX.test(this.window.location.hostname),
                    a = a.chartAPI;
                a("scrollstackedcolumn2d", {
                    friendlyName: "Scrollable Stacked Column Chart",
                    canvasborderthickness: 1,
                    tooltipConstraint: "plot",
                    avgScrollPointWidth: 75,
                    creditLabel: b
                }, a.scrollcolumn2d, {}, a.stackedcolumn2d)
            }]);
            n.register("module", ["private", "modules.renderer.js-scrollcombi2d", function() {
                var a = this.hcLib,
                    b = !a.CREDIT_REGEX.test(this.window.location.hostname),
                    a = a.chartAPI;
                a("scrollcombi2d", {
                        friendlyName: "Scrollable Combination Chart",
                        tooltipConstraint: "plot",
                        hasScroll: !0,
                        canvasborderthickness: 1,
                        avgScrollPointWidth: 40,
                        applicableDSList: {
                            area: !0,
                            line: !0,
                            column: !0
                        },
                        creditLabel: b,
                        _createDatasets: a.mscombi2d
                    },
                    a.scrollcolumn2d, {}, a.msarea)
            }]);
            n.register("module", ["private", "modules.renderer.js-scrollcombidy2d", function() {
                var a = this.hcLib,
                    b = !a.CREDIT_REGEX.test(this.window.location.hostname),
                    a = a.chartAPI;
                a("scrollcombidy2d", {
                    friendlyName: "Scrollable Dual Y-Axis Combination Chart",
                    tooltipConstraint: "plot",
                    canvasborderthickness: 1,
                    avgScrollPointWidth: 40,
                    hasScroll: !0,
                    _drawDataset: a.scrollcolumn2d,
                    updateManager: a.scrollcolumn2d,
                    _setAxisScale: a.scrollcolumn2d,
                    _createToolBox: a.scrollcolumn2d,
                    _scrollBar: a.scrollcolumn2d,
                    _manageScrollerPosition: a.scrollcolumn2d,
                    drawScrollBar: a.scrollcolumn2d,
                    _setClipping: a.scrollcolumn2d,
                    creditLabel: b,
                    configure: a.scrollcolumn2d
                }, a.mscombidy2d, {
                    enablemousetracking: !0,
                    isdual: !0
                }, a.areabase)
            }]);
            n.register("module", ["private", "modules.renderer.js-scatter", function() {
                var a = this.hcLib,
                    b = a.chartAPI,
                    a = !a.CREDIT_REGEX.test(this.window.location.hostname);
                b("scatter", {
                    friendlyName: "Scatter Chart",
                    isXY: !0,
                    standaloneInit: !0,
                    hasLegend: !0,
                    defaultZeroPlaneHighlighted: !1,
                    creditLabel: a,
                    defaultDatasetType: "Scatter",
                    applicableDSList: {
                        Scatter: !0
                    },
                    drawTracker: !0
                }, b.scatterBase, {
                    allowreversexaxis: !0,
                    enablemousetracking: !0
                })
            }]);
            n.register("module", ["private", "modules.renderer.js-bubble", function() {
                var a = this.hcLib,
                    b = !a.CREDIT_REGEX.test(this.window.location.hostname),
                    a = a.chartAPI,
                    m = Math,
                    n = m.max,
                    Y = m.min;
                a("bubble", {
                    friendlyName: "Bubble Chart",
                    standaloneInit: !0,
                    defaultDatasetType: "bubble",
                    creditLabel: b,
                    applicableDSList: {
                        bubble: !0
                    },
                    getDataLimits: function() {
                        var a = this.components.dataset,
                            b, m, u, K = -Infinity,
                            k = Infinity;
                        b = 0;
                        for (u = a.length; b < u; b++) m = a[b], m = m.getDataLimits(), K = n(K, m.zMax || -Infinity), k = Y(k, m.zMin || Infinity);
                        K = -Infinity === K ? 0 : K;
                        k = Infinity === k ? 0 : k;
                        return {
                            zMax: K,
                            zMin: k
                        }
                    }
                }, a.scatter, {
                    enablemousetracking: !0
                })
            }])
        },
        [3, 2, 2, "sr4"]
    ]);
    n.register("module", ["private", "modules.renderer.js-zoomline", function() {
        var a = this,
            b = a.hcLib,
            m = b.hashify,
            F = a.window,
            Y = F.document,
            aa = F.Image,
            W = F.MouseEvent,
            G = /msie/i.test(F.navigator.userAgent) && !F.opera,
            u = b.chartAPI,
            K = b.extend2,
            k = b.addEvent,
            r = b.pluck,
            p = b.pluckNumber,
            z = b.getFirstColor,
            x = b.graphics.convertColor,
            D = b.bindSelectionEvent,
            l = b.parseUnsafeString,
            v = b.componentDispose,
            w = b.Raphael,
            T = b.toRaphaelColor,
            Z = b.hasTouch,
            la = b.plotEventHandler,
            ja = b.getMouseCoordinate,
            ca = !b.CREDIT_REGEX.test(F.location.hostname),
            ga = b.TOUCH_THRESHOLD_PIXELS,
            sa = b.CLICK_THRESHOLD_PIXELS,
            ta = Z ? ga : sa,
            oa = b.preDefStr.DEFAULT,
            pa = "rgba(192,192,192," + (G ? .002 : 1E-6) + ")",
            qa = b.schedular,
            ha = b.priorityList,
            da = Math,
            Ea = da.ceil,
            wa = da.floor,
            M = da.round,
            P = da.max,
            ua = da.min,
            ya = da.cos,
            va = da.sin,
            za = F.parseFloat,
            Ba = F.parseInt,
            f;
        K(b.eventList, {
            zoomed: "FC_Zoomed",
            pinned: "FC_Pinned",
            resetzoomchart: "FC_ResetZoomChart"
        });
        u("zoomline", {
            standaloneInit: !0,
            canvasborderthickness: 1,
            defaultDatasetType: "zoomline",
            applicableDSList: {
                zoomline: !0
            },
            friendlyName: "Zoomable and Panable Multi-series Line Chart",
            creditLabel: ca,
            _drawAxis: function() {
                var a = this.components.yAxis || [],
                    c, d;
                c = 0;
                for (d = a.length; c < d; c++) a[c].draw()
            },
            _setCategories: function() {
                var a = this.config,
                    c = this.jsonData,
                    d = this.components.xAxis,
                    g, b, h;
                b = a.cdmchar;
                var f = c.categories &&
                    c.categories[0].category || [];
                if ((a.cdm || "string" === typeof f) && f.split) {
                    a = f.split(b);
                    g = [];
                    b = 0;
                    for (h = a.length; b < h; b += 1) g.push({
                        label: a[b]
                    });
                    this.config.categories = c.categories[0].category = g
                }
                d[0].setAxisPadding(0, 0);
                d[0].setCategory(g || f)
            },
            _createDatasets: function() {
                var a, c, d, g, b, h, f, q, y;
                b = {};
                var k = this.config;
                a = this.components;
                q = this.jsonData;
                var l = q.dataset,
                    t = l && l.length,
                    m = k.cdmchar,
                    p = k.cdm,
                    u = this.defaultDatasetType,
                    w = this.applicableDSList,
                    k = this.components.legend.components.items || [];
                q = q.categories &&
                    q.categories[0].category;
                l && q || this.setChartMessage();
                this.config.categories = q;
                q = a.dataset || (a.dataset = []);
                y = q.length;
                for (a = 0; a < t; a++) {
                    f = l[a];
                    if (p && f.data && f.data.split) {
                        h = f.data.split(m);
                        g = [];
                        c = 0;
                        for (d = h.length; c < d; c++) g.push({
                            value: h[c]
                        });
                        f.data = g
                    }
                    c = f.parentyaxis || "";
                    c = (c = this.isDual && "s" === c.toLowerCase() ? r(f.renderas, this.sDefaultDatasetType) : r(f.renderas, u)) && c.toLowerCase();
                    w[c] || (c = u);
                    if (d = n.get("component", ["dataset", c])) void 0 === b[c] ? b[c] = 0 : b[c]++, (c = q[a]) ? (d = (c.JSONData.data || []).length,
                        g = (f.data || []).length, d > g && c.removeData(g, d - g, !1), q[a].JSONData = f, q[a].configure(), q[a]._deleteGridImages && q[a]._deleteGridImages()) : (c = new d, q.push(c), c.chart = this, c.index = a, c.init(f))
                }
                if (y > t) {
                    b = y - t;
                    c = a;
                    for (t = b + a; c < t; c++) v.call(q[c]);
                    q.splice(a, b);
                    k.splice(a, b)
                }
            },
            isWithinCanvas: function(a, c) {
                var d = c.get("config"),
                    g = b.getMouseCoordinate(c.get("linkedItems", "container"), a, c),
                    A = g.chartX,
                    h = g.chartY,
                    f = d.canvasLeft,
                    q = d.canvasTop,
                    y = d.canvasLeft + d.canvasWidth,
                    d = d.canvasHeight + d.canvasTop;
                g.insideCanvas = !1;
                g.originalEvent = a;
                A > f && A < y && h > q && h < d && (g.insideCanvas = !0);
                return g
            },
            highlightPoint: function(a, c, d, g, A, h) {
                var f = this,
                    q = f.config,
                    y = f.components,
                    k = f.graphics,
                    l = y.paper,
                    t = k.tracker,
                    m = (y = y.dataset[A]) && y.config;
                A = y && m.zoomedRadius || 0;
                var p = y && m.hoverCosmetics,
                    y = p && p.fill,
                    m = p && p.borderColor,
                    p = p && p.borderThickness,
                    n = {},
                    n = function(a) {
                        b.plotEventHandler.call(this, f, a)
                    },
                    u = function(a) {
                        b.plotEventHandler.call(this, f, a, "dataplotRollover")
                    },
                    w = function(a) {
                        b.plotEventHandler.call(this, f, a, "dataplotRollout")
                    };
                t || (t = k.tracker = l.circle(0, 0, 0, k.trackerGroup).attr({
                    "clip-rect": q.canvasLeft + "," + q.canvasTop + "," + q.canvasWidth + "," + q.canvasHeight
                }).click(n).trackTooltip(!0).hover(u, w));
                g && t.data("eventArgs", {
                    x: g.x,
                    y: g.y,
                    tooltip: g.tooltip,
                    link: g.link
                });
                q.lastHoveredPoint = g;
                n = Number(a) ? {
                    r: A,
                    fill: y,
                    stroke: m,
                    "stroke-width": p
                } : {
                    r: A,
                    fill: pa,
                    stroke: pa,
                    "stroke-width": 0
                };
                t.attr(n).tooltip(h).transform("t" + (c + q.canvasLeft) + "," + (d + q.canvasTop));
                g && f.fireMouseEvent("mouseover", t && t.node, q.lastMouseEvent)
            },
            fireMouseEvent: function(a,
                c, d) {
                var g;
                c && a && (d || (d = {}), d.originalEvent && (d = d.originalEvent), d.touches && (d = d.touches[0]), c.dispatchEvent ? (W ? g = new W(a, {
                        bubbles: !!d.bubbles,
                        cancelable: !!d.cancelable,
                        clientX: d.clientX || d.pageX && d.pageX - Y.body.scrollLeft - Y.documentElement.scrollLeft || 0,
                        clientY: d.clientY || d.pageY && d.pageY - Y.body.scrollTop - Y.documentElement.scrollTop || 0,
                        screenX: d.screenX || 0,
                        screenY: d.screenY || 0,
                        pageX: d.pageX || 0,
                        pageY: d.pageY || 0
                    }) : Y.createEvent && (g = Y.createEvent("HTMLEvents"), g.initEvent(a, !!d.bubbles, !!d.cancelable)),
                    g.eventName = a, g && c.dispatchEvent(g)) : Y.createEventObject && c.fireEvent && (g = Y.createEventObject(), g.eventType = a, g.eventName = a, c.fireEvent("on" + a, g)))
            },
            configure: function() {
                var a, c = this.jsonData.chart || {},
                    d = this.components.colorManager,
                    g = d.getColor("canvasBorderColor"),
                    b;
                c.animation = 0;
                c.showvalues = 0;
                u.msline.configure.call(this);
                b = this.config;
                a = b.style;
                K(b, {
                    useRoundEdges: p(c.useroundedges, 0),
                    animation: !1,
                    zoomType: "x",
                    canvasPadding: p(c.canvaspadding, 0),
                    scrollColor: z(r(c.scrollcolor, d.getColor("altHGridColor"))),
                    scrollShowButtons: !!p(c.scrollshowbuttons, 1),
                    scrollHeight: p(c.scrollheight, 16) || 16,
                    scrollBarFlat: p(c.flatscrollbars, 0),
                    allowPinMode: p(c.allowpinmode, 1),
                    skipOverlapPoints: p(c.skipoverlappoints, 1),
                    showToolBarButtonTooltext: p(c.showtoolbarbuttontooltext, 1),
                    btnResetChartTooltext: r(c.btnresetcharttooltext, "Reset Chart"),
                    btnZoomOutTooltext: r(c.btnzoomouttooltext, "Zoom out one level"),
                    btnSwitchToZoomModeTooltext: r(c.btnswitchtozoommodetooltext, "<strong>Switch to Zoom Mode</strong><br/>Select a subset of data to zoom into it for detailed view"),
                    btnSwitchToPinModeTooltext: r(c.btnswitchtopinmodetooltext, "<strong>Switch to Pin Mode</strong><br/>Select a subset of data and compare with the rest of the view"),
                    pinPaneFill: x(r(c.pinpanebgcolor, g), p(c.pinpanebgalpha, 15)),
                    zoomPaneFill: x(r(c.zoompanebgcolor, "#b9d5f1"), p(c.zoompanebgalpha, 30)),
                    zoomPaneStroke: x(r(c.zoompanebordercolor, "#3399ff"), p(c.zoompaneborderalpha, 80)),
                    showPeakData: p(c.showpeakdata, 0),
                    maxPeakDataLimit: p(c.maxpeakdatalimit, c.maxpeaklimit, null),
                    minPeakDataLimit: p(c.minpeakdatalimit,
                        c.minpeaklimit, null),
                    crossline: {
                        enabled: p(c.showcrossline, 1),
                        line: {
                            "stroke-width": p(c.crosslinethickness, 1),
                            stroke: z(r(c.crosslinecolor, "#000000")),
                            "stroke-opacity": p(c.crosslinealpha, 20) / 100
                        },
                        labelEnabled: p(c.showcrosslinelabel, c.showcrossline, 1),
                        labelstyle: {
                            fontSize: za(c.crosslinelabelsize) ? za(c.crosslinelabelsize) + "px" : a.outCanfontSize,
                            fontFamily: r(c.crosslinelabelfont, a.outCanfontFamily)
                        },
                        valueEnabled: p(c.showcrosslinevalues, c.showcrossline, 1),
                        valuestyle: {
                            fontSize: za(c.crosslinevaluesize) ? za(c.crosslinevaluesize) +
                                "px" : a.inCanfontSize,
                            fontFamily: r(c.crosslinevaluefont, a.inCanvasStyle.fontFamily)
                        }
                    },
                    useCrossline: p(c.usecrossline, 1),
                    tooltipSepChar: r(c.tooltipsepchar, ", "),
                    showTerminalValidData: p(c.showterminalvaliddata, 0),
                    cdmchar: r(c.dataseparator, "|"),
                    cdm: p(c.compactdatamode, 0)
                })
            },
            getValuePixel: function(a) {
                var c = this.config.viewPortConfig;
                return c.ddsi + wa(a / c.ppp)
            },
            __toolbar: function() {
                var a, c, d, g, b = this,
                    h = b.components,
                    f = h.tb = new(n.register("component", ["toolbox", "toolbox"])),
                    q = f.getDefaultConfiguration(),
                    k,
                    l;
                f.init({
                    iAPI: {
                        chart: b
                    },
                    graphics: b.graphics,
                    chart: b,
                    components: h
                });
                a = h.toolBoxAPI || f.getAPIInstances(f.ALIGNMENT_HORIZONTAL);
                c = a.SymbolStore;
                d = a.ComponentGroup;
                g = a.Toolbar;
                k = a.Symbol;
                l = a.Scroller;
                f.graphics = {};
                return {
                    reInit: function() {
                        f.init({
                            iAPI: {
                                chart: b
                            },
                            graphics: b.graphics,
                            chart: b,
                            components: h
                        })
                    },
                    addSymbol: function(a, e, c, d) {
                        a = new k(a);
                        c && d.setConfiguaration({
                            buttons: K(K({}, q), c)
                        });
                        e.tooltext = c.tooltip;
                        e && a.attachEventHandlers(e);
                        d.addSymbol(a);
                        return a
                    },
                    addScroll: function(a, e) {
                        var c = new l(a);
                        e && c.attachEventHandlers(e);
                        return c
                    },
                    addComponentGroup: function(a, e) {
                        var c;
                        c = new d;
                        c.setConfiguaration({
                            group: {
                                fill: e ? e.fill : x("EBEBEB", 0),
                                borderThickness: e ? p(e.borderThickness, 0) : 0
                            }
                        });
                        return c
                    },
                    addToolBox: function(a) {
                        var e, c = new g;
                        for (e = 0; e < a.length; e += 1) c.addComponent(a[e]);
                        return c
                    },
                    setDrawingArea: function(a, e) {
                        a.drawingArea = e;
                        return a
                    },
                    draw: function(a) {
                        var e, c, d;
                        for (e = 0; e < a.length; e += 1) c = a[e], d = c.drawingArea, c.draw(d.x, d.y)
                    },
                    registerSymbol: function(a, e) {
                        c.register(a, e)
                    },
                    getLogicalSpace: function(a) {
                        return a.getLogicalSpace()
                    },
                    getNode: function(a) {
                        return a.node
                    }
                }
            },
            __preDraw: function() {
                var a, c, d, g, b, h, k, q, y, l, m = this,
                    t = m.components,
                    n = t.paper,
                    u = m.graphics;
                c = u.imageContainer;
                var r = m.config,
                    v = r.canvasLeft,
                    x = r.canvasWidth;
                a = m.jsonData.chart;
                var C = r.cdm;
                d = t.xAxis[0];
                var z = r.viewPortConfig,
                    I = m.components.canvas.config,
                    F = P(I.canvasPadding, I.canvasPaddingLeft, I.canvasPaddingRight);
                l = t.yAxis[0];
                q = u.datasetGroup;
                var I = r.canvasHeight,
                    G = r.canvasTop,
                    M = m.jsonData.chart,
                    M = r.borderWidth || (r.borderWidth = p(M.showborder, 1) ? p(M.borderthickness,
                        1) : 0),
                    T = r.allowPinMode,
                    W = r.crossline,
                    z = d.getCategoryLen(),
                    N = Ba(p(a.displaystartindex, 1), 10) - 1,
                    B = Ba(p(a.displayendindex, z || 2), 10) - 1,
                    E = 0,
                    L = t.dataset,
                    S = L.length,
                    t = u.crossline;
                r.updateAnimDuration = 100;
                c.transform("t" + v + "," + G);
                c.attr({
                    "clip-rect": v + "," + G + "," + x + "," + I
                });
                r.status = "zoom";
                r.maxZoomLimit = p(a.maxzoomlimit, 1E3);
                r.viewPortHistory = [];
                1 > (c = p(a.pixelsperpoint, 15)) && (c = 1);
                (d = p(a.pixelsperlabel, a.xaxisminlabelwidth, d.getAxisConfig("labels").rotation ? 20 : 60)) < c && (d = c);
                (0 > N || N >= (z - 1 || 1)) && (N = 0);
                (B <= N ||
                    B > (z - 1 || 1)) && (B = z - 1 || 1);
                z = r.viewPortConfig = K(r.viewPortConfig, {
                    amrd: p(a.anchorminrenderdistance, 20),
                    nvl: p(a.numvisiblelabels, 0),
                    cdm: C,
                    oppp: c,
                    oppl: d,
                    dsi: N,
                    dei: B,
                    vdl: B - N,
                    clen: z,
                    offset: 0,
                    step: 1,
                    llen: 0,
                    alen: 0,
                    ddsi: N,
                    ddei: B,
                    ppc: 0
                });
                if (z.clen) {
                    for (; S--;) a = L[S].config, E = P(E, a.drawanchors && (a.anchorradius || 0) + (Number(a.anchorborderthickness) || 0) || 0);
                    r.overFlowingMarkerWidth = E;
                    F = r.canvasPadding = P(E, F);
                    r._prezoomed = z.dei - z.dsi < z.clen - 1;
                    g = r._visw = r.canvasWidth - 2 * F;
                    b = r._visx = r.canvasLeft + F;
                    r._visout = -(r.height +
                        I + 1E3);
                    r._ypvr = l && l.getPVR() || 0;
                    a = r._yminValue = l.getLimit().min;
                    h = r._ymin = l.getPixel(a);
                    l = q.attr("clip-rect", [b - E, G, g + 2 * E, I]);
                    u.scroll || (u.scroll = n.group("scroll").insertAfter(u.datasetGroup));
                    T && (q = w.crispBound(0, G - h, 0, I, M), k = r["clip-pinrect"] = [q.x, G, q.width, q.height], y = (u.zoompin = n.group("zoompin")).insertBefore(l).transform(r._pingrouptransform = ["T", b, h]).hide(), u.pinrect = n.rect(0, G - h, g, I, y).attr({
                            "stroke-width": 0,
                            stroke: "none",
                            fill: r.pinPaneFill,
                            "shape-rendering": "crisp",
                            ishot: !0
                        }), u.pintracker =
                        n.rect(u.trackerGroup).attr({
                            transform: y.transform(),
                            x: 0,
                            y: G - h,
                            width: 0,
                            height: I,
                            stroke: "none",
                            fill: pa,
                            ishot: !0,
                            cursor: w.svg && "ew-resize" || "e-resize"
                        }).hide().drag(function(a) {
                            var e = b + a + this.__pindragdelta,
                                c = this.__pinboundleft,
                                d = this.__pinboundright,
                                g = this.data("cliprect").slice(0);
                            e < c ? e = c : e > d && (e = d);
                            y.transform(["T", e, h]);
                            u.pintracker.transform(y.transform());
                            w.svg || (g[0] = g[0] + e - b - this.__pindragdelta, y.attr("clip-rect", g));
                            this.__pindragoffset = a
                        }, function() {
                            this.__pinboundleft = 0 - k[0] + b + v;
                            this.__pinboundright =
                                this.__pinboundleft + g - k[2];
                            this.data("cliprect", y.attr("clip-rect"));
                            y._.clipispath = !0
                        }, function() {
                            y._.clipispath = !1;
                            this.__pindragdelta = this.__pindragoffset;
                            delete this.__pindragoffset;
                            delete this.__pinboundleft;
                            delete this.__pinboundright
                        }));
                    M++;
                    q = w.crispBound(v - M, G + I + M, x + M + M, r.scrollHeight, M);
                    M--;
                    D(m, {
                        attr: {
                            stroke: r.zoomPaneStroke,
                            fill: r.zoomPaneFill,
                            strokeWidth: 0
                        },
                        selectionStart: function() {},
                        selectionEnd: function(a) {
                            var e = a.selectionLeft - v;
                            a = e + a.selectionWidth;
                            u.crossline && u.crossline.hide();
                            m[r.viewPortConfig.pinned ? "pinRangePixels" : "zoomRangePixels"](e, a)
                        }
                    });
                    W && 0 !== W.enabled && 1 === r.useCrossline ? (t || (t = u.crossline = new f), t.configure(m, W)) : (W && (W.enabled = 0), t && t.hide())
                }
            },
            resetZoom: function() {
                var e = this.config.viewPortHistory,
                    c = e[0];
                if (!e.length) return !1;
                e.length = 0;
                this.zoomTo(c.dsi, c.dei, c) && a.raiseEvent("zoomReset", this._zoomargs, this.chartInstance, [this.chartInstance.id]);
                return !0
            },
            eiMethods: {
                zoomOut: function(a) {
                    var c = this.apiInstance,
                        d = c.chartInstance.args.asyncRender,
                        g, b = c.getJobList();
                    if (c)
                        if (d) b.eiMethods.push(qa.addJob(function() {
                            g = c.zoomOut && c.zoomOut();
                            "function" === typeof a && a(g)
                        }, c, [], ha.postRender));
                        else return c.zoomOut && c.zoomOut()
                },
                zoomTo: function(a, c, d) {
                    var g = this.apiInstance,
                        b = g.chartInstance.args.asyncRender,
                        h, f = g.getJobList();
                    if (g)
                        if (b || d) f.eiMethods.push(qa.addJob(function() {
                            h = g.zoomRange && g.zoomRange(a, c);
                            "function" === typeof d && d(h)
                        }, g, [], ha.postRender));
                        else return g.zoomRange && g.zoomRange(a, c)
                },
                resetChart: function() {
                    var a = this.apiInstance,
                        c = a.chartInstance.args.asyncRender,
                        d = a.getJobList(),
                        g = function() {
                            a.pinRangePixels && a.pinRangePixels();
                            a.resetZoom && a.resetZoom()
                        };
                    a && (c ? d.eiMethods.push(qa.addJob(g, a, [], ha.postRender)) : g())
                },
                setZoomMode: function(a) {
                    var c = this.apiInstance,
                        d = c.chartInstance.args.asyncRender,
                        g = c.getJobList();
                    c && (d ? g.eiMethods.push(qa.addJob(function() {
                        c.activatePin && c.activatePin(!a)
                    }, c, [], ha.postRender)) : c.activatePin && c.activatePin(!a))
                },
                getViewStartIndex: function(a) {
                    var c = this.apiInstance,
                        d = c.chartInstance.args.asyncRender,
                        g, b = c.getJobList();
                    if (a ||
                        d) b.eiMethods.push(qa.addJob(function() {
                        "function" === typeof a && c && (g = c.config.viewPortConfig) && a(g.ddsi)
                    }, c, [], ha.postRender));
                    else if (c && (g = c.config.viewPortConfig)) return g.ddsi
                },
                getViewEndIndex: function(a) {
                    var c = this.apiInstance,
                        d = c.chartInstance.args.asyncRender,
                        g, b, h = c.getJobList();
                    if (a || d) h.eiMethods.push(qa.addJob(function() {
                        "function" === typeof a && c && (g = c.config.viewPortConfig) && (b = g.ddei - 1, a((b >= g.clen ? g.clen : b) - 1))
                    }, c, [], ha.postRender));
                    else if (c && (g = c.config.viewPortConfig)) return b = g.ddei -
                        1, (b >= g.clen ? g.clen : b) - 1
                }
            },
            zoomOut: function() {
                var e, c, d = this.config;
                c = d.viewPortHistory;
                var b, f, h;
                e = c.pop();
                c = c[0] || d.viewPortConfig;
                e ? (b = e.dsi, f = e.dei) : d._prezoomed && (b = 0, f = c.clen - 1);
                (h = this.zoomTo(b, f, e)) && a.raiseEvent("zoomedout", h, this.chartInstance);
                return !0
            },
            zoomRangePixels: function(e, c) {
                var d = this.config,
                    b = d.viewPortHistory,
                    d = d.viewPortConfig,
                    f = d.ppp,
                    h = d.ddsi,
                    k;
                b.push(d);
                (k = this.zoomTo(h + wa(e / f), h + wa(c / f))) ? a.raiseEvent("zoomedin", k, this.chartInstance): b.pop()
            },
            zoomRange: function(e, c) {
                var d,
                    b, f = this.config,
                    h = f.viewPortConfig;
                b = this.components.xAxis[0];
                var k = f.viewPortHistory,
                    q;
                k.push(h);
                d = b.getPixel(e);
                b = b.getPixel(c);
                h.x = d;
                h.scaleX = f.canvasWidth / (d - b);
                (q = this.zoomTo(+e, +c)) ? a.raiseEvent("zoomedin", q, this.chartInstance): k.pop()
            },
            zoomTo: function(e, c, d) {
                var b, f;
                b = this.config;
                var h = this.components,
                    k = b.viewPortConfig,
                    q = b.canvasHeight;
                f = b.canvasLeft;
                var l = b.canvasTop,
                    m = b.canvasBottom,
                    p = b.viewPortHistory,
                    t = k.clen,
                    n = this.components.xAxis[0];
                0 > e && (e = 0);
                e >= t - 1 && (e = t - 1);
                c <= e && (c = e + 1);
                c > t - 1 && (c =
                    t - 1);
                if (e === c || e === k.dsi && c === k.dei) return !1;
                this.pinRangePixels();
                k = K({}, k);
                k.dsi = e;
                k.dei = c;
                k = b.viewPortConfig = k;
                d ? this.updateVisual(d.x, d.y, d.scaleX, d.scaleY) : (d = n.getPixel(e), b = n.getPixel(c), f = this.getOriginalPositions(d - f, l, b - f, m - l), this.zoomSelection(f[0], 0, f[2], q));
                h.scrollBar.node.attr({
                    "scroll-ratio": k.vdl / (t - !!t),
                    "scroll-position": [k.dsi / (t - k.vdl - 1), !0]
                });
                h = {
                    level: p.length + 1,
                    startIndex: e,
                    startLabel: n.getLabel(e).label,
                    endIndex: c,
                    endLabel: n.getLabel(c).label
                };
                a.raiseEvent("zoomed", h, this.chartInstance, [this.chartInstance.id, e, c, h.startLabel, h.endLabel, h.level]);
                return h
            },
            activatePin: function(e) {
                var c = this.config.viewPortConfig,
                    d = this.components.tb.graphics.pinButton;
                if (c.pinned ^ (e = !!e)) return e || this.pinRangePixels(), a.raiseEvent("zoomModeChanged", {
                    pinModeActive: e
                }, this.chartInstance, []), this.updateButtonVisual(d.node, e ? "pressed" : "enable"), c.pinned = e
            },
            updateButtonVisual: function(a, c) {
                return a.attr({
                    disable: {
                        config: {
                            hover: {
                                fill: "#FFFFFF",
                                "stroke-width": 1,
                                stroke: "#E3E3E3",
                                cursor: "default"
                            },
                            normal: {
                                fill: "#FFFFFF",
                                stroke: "#E3E3E3",
                                "stroke-width": 1,
                                cursor: "default"
                            },
                            disable: {
                                fill: "#FFFFFF",
                                "stroke-width": 1,
                                stroke: "#E3E3E3",
                                "stroke-opacity": 1,
                                cursor: "default"
                            },
                            pressed: {
                                fill: "#FFFFFF",
                                "stroke-width": 1,
                                stroke: "#E3E3E3",
                                cursor: "default"
                            }
                        },
                        "button-disabled": !1,
                        stroke: "#E3E3E3",
                        "stroke-opacity": 1
                    },
                    enable: {
                        config: {
                            hover: {
                                fill: "#FFFFFF",
                                "stroke-width": 1,
                                stroke: "#aaaaaa",
                                cursor: "pointer"
                            },
                            normal: {
                                fill: "#FFFFFF",
                                stroke: "#C2C2C2",
                                "stroke-width": 1,
                                cursor: "pointer"
                            },
                            disable: {
                                fill: "#FFFFFF",
                                "stroke-width": 1,
                                stroke: "#E3E3E3",
                                "stroke-opacity": 1,
                                cursor: "pointer"
                            },
                            pressed: {
                                fill: "#EFEFEF",
                                "stroke-width": 1,
                                stroke: "#C2C2C2",
                                cursor: "pointer"
                            }
                        },
                        "button-disabled": !1,
                        fill: ["#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", !0],
                        stroke: "#C2C2C2",
                        "stroke-opacity": 1
                    },
                    pressed: {
                        config: {
                            pressed: {
                                fill: ["#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", !0]
                            }
                        },
                        fill: ["#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", !0],
                        stroke: "#E3E3E3"
                    }
                }[c])
            },
            pinRangePixels: function(a, c) {
                var d, b = this.components,
                    f = b.paper,
                    h = this.graphics,
                    k = this.config,
                    q = k.canvasLeft,
                    l = k.viewPortConfig,
                    m = h.zoompin;
                d = h.pinrect;
                var p = k["clip-pinrect"],
                    t = k._pingrouptransform,
                    b = b.dataset,
                    n = c - a,
                    r, u, w, h = h.pintracker;
                if (l && m && d) {
                    if (a === c) return m.hide(), h.hide(), l.pinned = !1;
                    for (w = b.length; w--;) r = b[w], d = r.graphics, u = d.pinline, u || (u = d.pinline = f.path(m)), u.attr({
                        path: d.lineElement.attrs.path,
                        transform: ["T", -k._visx, -k._ymin]
                    }).attr(r.config.pin);
                    p[0] = a + q;
                    p[2] = n;
                    m.attr({
                        "clip-rect": p,
                        transform: t
                    }).show();
                    h.__pindragdelta = 0;
                    h.show().attr({
                        transform: t,
                        x: a,
                        width: n
                    });
                    this.getValuePixel(a);
                    this.getValuePixel(c);
                    return l.pinned = !0
                }
            },
            _createLayers: function() {
                var a, c = this.components.paper;
                u.scatter._createLayers.call(this);
                a = this.graphics;
                a.imageContainer = c.group("dataset-orphan", a.dataSetGroup);
                this.__preDraw();
                this.toogleDragPan(!0)
            },
            getValue: function(a) {
                var c = this.config,
                    d = this.components,
                    b = c.viewPortConfig;
                a = this.getOriginalPositions(a.x, a.y, a.x, a.y);
                var f = d.xAxis[0].config.axisRange,
                    d = d.yAxis[0].config.axisRange,
                    h = f.min,
                    k = d.max;
                return {
                    x: h + (a[0] - c.canvasLeft) / (c.canvasWidth * b.scaleX / (f.max - h)),
                    y: k - (a[1] -
                        c.canvasTop) / (c.canvasHeight * b.scaleY / (k - d.min))
                }
            },
            getOriginalPositions: function(a, c, d, b) {
                var f = this.config,
                    h = f.viewPortConfig,
                    k = h.scaleX,
                    q = h.scaleY,
                    l = h.x,
                    h = h.y,
                    m = ua(a, d);
                a = P(a, d);
                d = ua(c, b);
                c = P(c, b);
                a = a > f.canvasWidth ? f.canvasWidth : a;
                c = c > f.canvasHeight ? f.canvasHeight : c;
                m = 0 > m ? 0 : m;
                d = 0 > d ? 0 : d;
                return [l + m / k, h + d / q, (a - m) / k, (c - d) / q]
            },
            zoomSelection: function(a, c, d, b) {
                var f = this.config;
                d && b && (d = Math.abs(f.canvasWidth / d), b = Math.abs(f.canvasHeight / b), this.updateVisual(a, c, d, b))
            },
            updateVisual: function(a, c, d, b, f) {
                var h =
                    this.config,
                    k = h.viewPortConfig,
                    q = h.canvasWidth,
                    l = h.canvasHeight,
                    m = h.viewPortHistory.slice(-1)[0] || k,
                    h = h.maxZoomLimit;
                k.x = isNaN(a) ? a = m.x : a;
                k.y = isNaN(c) ? c = m.y : c;
                k.scaleX = d || (d = m.scaleX);
                k.scaleY = b || (b = m.scaleY);
                d > h && (k.x = ua(a, q - q / h), k.scaleX = h);
                b > h && (k.y = ua(c, l - l / h), k.scaleY = h);
                this.updateManager(f)
            },
            toogleDragPan: function(a) {
                var c = this.config.viewPortConfig,
                    d = c.status;
                a && (c.status = "zoom" === d ? "pan" : "zoom")
            },
            resize: function() {
                var a = this.config,
                    c = this.graphics,
                    d = this.components.canvas,
                    b = d.graphics,
                    f =
                    b.canvasBorderElement,
                    b = b.canvasElement,
                    d = d.config.canvasBorderThickness,
                    h = d / 2,
                    k = a.canvasHeight -= d,
                    q = a.canvasWidth -= 2 * d,
                    m = a.canvasLeft += d;
                a.canvasBottom -= d;
                a.canvasRight -= d;
                b ? b.attr({
                    x: m,
                    y: a.canvasTop,
                    height: k,
                    width: q
                }) : this.drawCanvas();
                f && f.attr({
                    x: m - h,
                    y: a.canvasTop - h,
                    height: k + d,
                    width: q + d,
                    "stroke-width": d
                });
                c.imageContainer.attr({
                    "clip-rect": a.canvasLeft + "," + a.canvasTop + "," + a.canvasWidth + "," + a.canvasHeight
                }).transform("t" + a.canvasLeft + "," + a.canvasTop);
                c.trackerElem.attr({
                    x: a.canvasLeft,
                    y: a.canvasTop,
                    width: a.canvasWidth,
                    height: a.canvasHeight
                });
                c.tracker && c.tracker.attr({
                    "clip-rect": a.canvasLeft + "," + a.canvasTop + "," + a.canvasWidth + "," + a.canvasHeight
                })
            },
            updateManager: function(a) {
                var c, d;
                d = this.components;
                var b = d.dataset,
                    f = b.length;
                c = this.config;
                var h = c.viewPortConfig,
                    k = c._ypvr,
                    q = c._visw,
                    m = this.components.xAxis[0],
                    l = function() {
                        return m.getPixel.apply(m, arguments)
                    },
                    p = m.getAxisConfig("labels").style,
                    t, r, u, w, v, x = this.updateButtonVisual,
                    C = d.tb.graphics,
                    z = C.zoomOutButton,
                    C = C.resetButton,
                    I = c.viewPortHistory;
                if (c.legendClicked)
                    for (a = 0; a < f; a += 1) b[a].draw();
                else {
                    !h && (h = c.viewPortConfig);
                    t = h.oppp;
                    v = u = h.nvl;
                    r = h.dsi;
                    u = h.dei;
                    r = h.vdl = u - r;
                    u = h.ppl = v ? q / v : h.oppl;
                    q = h.step = (w = h.ppp = q / r) < t ? Ea(t / w) : 1;
                    p = h.lskip = Ea(P(u, za(p.lineHeight)) / w / q);
                    void 0 !== a ? (t = (h.clen - r - 1) * a, h.offset = (t - (t = Ba(t))) * w, r = t + r) : (t = h.dsi, r = h.dei, h.offset = 0);
                    w = h.norm = t % q;
                    h.ddsi = t -= w;
                    h.ddei = r = r + 2 * q - w;
                    h.pvr = k;
                    h._ymin = c._ymin;
                    h._yminValue = c._yminValue;
                    h.x = (l(t) - l(m.getLimit().min) + h.offset) / h.scaleX;
                    r - t > m.getCategoryLen() ? h.scaleX = 1 : h.scaleX = m.getCategoryLen() /
                        Math.abs(r - t - q - .9);
                    void 0 !== a && d.scrollBar.node && d.scrollBar.node.attr({
                        "scroll-position": h._pos = a
                    });
                    d = m._getVisibleConfig();
                    d = Math.ceil((d.maxValue - d.minValue + 1) / v);
                    c = c.viewPortConfig && c.viewPortConfig.scaleX;
                    c = Math.max(Math.round(m.getAxisConfig("labelStep") / c), v ? d : p * q);
                    m.setLabelConfig({
                        step: c
                    });
                    c = m.getAxisConfig("animateAxis");
                    v = m.getAxisConfig("drawAxisName");
                    a && m.setAxisConfig({
                        animateAxis: !1,
                        drawAxisName: !1
                    });
                    m.draw();
                    m.setAxisConfig({
                        animateAxis: c,
                        drawAxisName: v
                    });
                    for (a = 0; a < f; a += 1) b[a].draw();
                    x(z.node, h.vdl === h.clen - 1 ? "disable" : "enable");
                    x(C.node, 0 < I.length ? "enable" : "disable");
                    F.FC_DEV_ENVIRONMENT && F.jQuery && (n["debugger"].enable() ? (this.debug = this.debug || (F.jQuery("#fc-zoominfo").length || F.jQuery("body").append('<pre id="fc-zoominfo">'), F.jQuery("#fc-zoominfo").css({
                        position: "absolute",
                        left: "10px",
                        top: "0",
                        "pointer-events": "none",
                        opacity: .7,
                        width: "250px",
                        zIndex: "999",
                        border: "1px solid #cccccc",
                        "box-shadow": "1px 1px 3px #cccccc",
                        background: "#ffffff"
                    })), this.debug.text(JSON.stringify(h,
                        0, 2))) : (this.debug && F.jQuery("#fc-zoominfo").remove(), delete this.debug))
                }
            },
            _drawDataset: function() {
                u.zoomline.updateManager.call(this)
            },
            getParsedLabel: function(a) {
                var c = this.xlabels;
                return c.parsed[a] || (c.parsed[a] = l(c.data[a] || ""))
            },
            _createToolBox: function() {
                var a, c, d, b, f, h, k, m = this,
                    l = m.config;
                k = l.allowPinMode;
                b = m.components;
                var p = l.showToolBarButtonTooltext;
                a = b.chartMenuBar;
                c = b.actionBar;
                a && a.drawn || c && c.drawn || (u.scrollcolumn2d._createToolBox.call(m), a = b.tb, c = a.graphics || (a.graphics = {}), d = b.toolBoxAPI ||
                    a.getAPIInstances(a.ALIGNMENT_HORIZONTAL), d = d.Symbol, b = (b.chartMenuBar || b.actionBar).componentGroups[0], f = c.zoomOutButton = (new d("zoomOutIcon", void 0, a.idCount++, a.pId)).attachEventHandlers({
                        click: function() {
                            m.zoomOut()
                        },
                        tooltext: p && l.btnZoomOutTooltext || ""
                    }), h = c.resetButton = (new d("resetIcon", void 0, a.idCount++, a.pId)).attachEventHandlers({
                        click: function() {
                            m.resetZoom()
                        },
                        tooltext: p && l.btnResetChartTooltext || ""
                    }), k && (k = c.pinButton = (new d("pinModeIcon", void 0, a.idCount++, a.pId)).attachEventHandlers({
                        click: function() {
                            m.activatePin(!l.viewPortConfig.pinned)
                        },
                        tooltext: p && l.btnSwitchToPinModeTooltext || ""
                    }), b.addSymbol(k, !0)), b.addSymbol(h, !0), b.addSymbol(f, !0))
            },
            _scrollBar: u.scrollcolumn2d,
            _manageScrollerPosition: u.scrollcolumn2d,
            draw: function() {
                var b, c, d, g, f, h, k, m, l, p, n = this,
                    t = n.config,
                    r = n.graphics || (n.graphics = {});
                h = n.components;
                b = n.jsonData;
                g = b.dataset;
                var v = b.categories && b.categories[0].category,
                    x;
                u.msline.draw.call(n);
                k = t.canvasLeft;
                m = t.canvasTop;
                l = t.canvasHeight;
                p = t.canvasWidth;
                b = t.borderWidth;
                c = t.useRoundEdges;
                d = t.viewPortConfig;
                (x = r.toolboxParentGroup) ||
                (x = r.toolboxParentGroup = h.paper.group("toolbarParentGroup", r.parentGroup));
                g && v && (b++, g = w.crispBound(k - b, m + l + b, p + b + b, t.scrollHeight, b), b--, h = (f = h.scrollBar) && f.node, f.draw(g.x + (c && -1 || b % 2), g.y - (c && 4 || 2), {
                    isHorizontal: !0,
                    width: g.width - (!c && 2 || 0),
                    height: g.height,
                    showButtons: t.scrollShowButtons,
                    scrollRatio: d.vdl / (d.clen - !!d.clen),
                    scrollPosition: [d.dsi / (d.clen - d.vdl - 1), !1],
                    r: c && 2 || 0,
                    parentLayer: x.insertBefore(r.datalabelsGroup)
                }), !h && function() {
                    var c;
                    w.eve.on("raphael.scroll.start." + f.node.id, function(b) {
                        c =
                            b;
                        n.graphics.crossline && n.graphics.crossline.disable(!0);
                        a.raiseEvent("scrollstart", {
                            scrollPosition: b
                        }, n.chartInstance)
                    });
                    w.eve.on("raphael.scroll.end." + f.node.id, function(b) {
                        n.graphics.crossline && n.graphics.crossline.disable(!1);
                        a.raiseEvent("scrollend", {
                            prevScrollPosition: c,
                            scrollPosition: b
                        }, n.chartInstance)
                    })
                }())
            }
        }, u.msline, {
            showValues: 0,
            zeroplanethickness: 1,
            zeroplanealpha: 40,
            showzeroplaneontop: 0,
            enablemousetracking: !0
        });
        u("zoomlinedy", {
            standaloneInit: !0,
            defaultDatasetType: "zoomline",
            applicableDSList: {
                zoomline: !0
            },
            creditLabel: ca,
            friendlyName: "Zoomable and Panable Multi-series Dual-axis Line Chart",
            _spaceManager: u.msdybasecartesian._spaceManager,
            _setAxisLimits: u.msdybasecartesian._setAxisLimits,
            _createAxes: u.msdybasecartesian._createAxes,
            _feedAxesRawData: u.msdybasecartesian._feedAxesRawData
        }, u.zoomline, {
            isdual: !0
        });
        n.register("component", ["dataset", "zoomline", {
            _setConfigure: function() {
                var a = this.config,
                    c = this.chart.jsonData.chart,
                    b = this.JSONData;
                a.drawanchors = p(c.drawanchors, c.showanchors, 1);
                a.anchorradius =
                    p(b.anchorradius, c.anchorradius, a.linethickness + 2);
                this.__base__._setConfigure.apply(this, arguments)
            },
            _firePlotEvent: function(a, c, d, g) {
                var f = this.chart,
                    h = this.components,
                    h = (h.dataRT || h.data)[c],
                    k = h.graphics.element,
                    m = b.toolTip,
                    l = d.originalEvent,
                    p = f.components.paper.canvas.style,
                    n = !this.chart.config.useCrossline,
                    t, r;
                if (k) switch (t = h.config, r = t.setLink, t = t.eventArgs, a) {
                    case "mouseover":
                        n && this._decideTooltipType(c, g, d);
                        this._rolloverResponseSetter(f, h, l);
                        r && (p.cursor = "pointer");
                        break;
                    case "mouseout":
                        m.hide(f.chartInstance.id);
                        this._rolloutResponseSetter(f, h, l);
                        r && (p.cursor = oa);
                        break;
                    case "click":
                        la.call(k, f, l, "dataplotclick", t);
                        break;
                    case "mousemove":
                        n && this._decideTooltipType(c, g, d)
                }
            },
            configure: function() {
                var a, c, d = {};
                a = this.chart.jsonData.chart;
                a.animation = 0;
                a.showvalues = p(a.showvalues, 0);
                this.__base__.configure.call(this);
                c = this.config;
                a = c.linethickness + p(a.pinlinethicknessdelta, 1);
                d["stroke-width"] = 0 < a && a || 0;
                d["stroke-dasharray"] = [3, 2];
                d.stroke = b.hashify(c.linecolor);
                d["stroke-opacity"] = c.alpha / 100;
                d["stroke-linejoin"] =
                    c["stroke-linejoin"] = "round";
                d["stroke-linecap"] = c["stroke-linecap"] = "round";
                c.pin = d;
                c.animation = !1;
                c.transposeanimduration = 0
            },
            isWithinShape: function(a, c, b, g) {
                if (a) {
                    var f = a.config.anchorProps,
                        h = f.borderThickness,
                        k = this.components.data,
                        m = p(a.config.dragTolerance, 0),
                        l, n;
                    l = a._xPos;
                    n = a._yPos;
                    if (null !== n) return a = a.config.hoverEffects, f = Math.max(f.radius, a && a.anchorRadius || 0, ta) + h / 2, b = Math.sqrt(Math.pow(b - l, 2) + Math.pow(g - n, 2)), b <= f || b <= m ? {
                        pointIndex: c,
                        hovered: !0,
                        pointObj: k[c]
                    } : !1
                }
            },
            draw: function() {
                var a,
                    c, d = !1,
                    g = !1,
                    f = this,
                    h = f.JSONData,
                    k = f.chart,
                    m = k.components,
                    l = f.config,
                    n = f.index || f.positionIndex,
                    u = k.config,
                    t = k.jsonData.chart,
                    w = f.components,
                    v = w.data,
                    x = v.length,
                    z, D = m.paper,
                    C = m.xAxis[0],
                    F = f.yAxis,
                    I, G, K = k.graphics,
                    M = K.datalabelsGroup,
                    W = b.parseUnsafeString,
                    Z = b.getValidValue,
                    N, B, E, L, S, fa, O, J, X, U = l.linethickness,
                    Y = f.graphics.container,
                    ca = f.graphics.trackerContainer,
                    ha = u.viewPortConfig,
                    da = K.datasetGroup,
                    ga, ea = l.shadow,
                    ka, la = f.graphics.dataLabelContainer,
                    Q = {},
                    ia, V, na = k.is3D,
                    sa = l.use3dlineshift,
                    pa, qa, oa,
                    ta = F.getAxisBase(),
                    wa = F.yBasePos = F.getAxisPosition(ta),
                    va = C.getAxisPosition(0),
                    ya = C.getAxisPosition(1) - va,
                    za, Ba = na ? 10 : 0,
                    Aa = na && sa ? 10 : 0,
                    H = [P(0, u.canvasLeft - Ba), P(0, u.canvasTop - Aa), P(1, u.canvasWidth + 2 * Ba), P(1, u.canvasHeight + Aa)],
                    Da = [P(0, u.canvasLeft - Ba), P(0, u.canvasTop - Aa), 1, P(1, u.canvasHeight + 2 * Aa)],
                    Ea = {},
                    qb = k.hasScroll || !1,
                    Qa, Ia = l.lineDashStyle,
                    Ja = {
                        color: l.linecolor,
                        alpha: l.alpha
                    };
                [T(Ja), Ia].join(":");
                var Ra, gb, Za, Na = f.graphics.lineElement,
                    Sa = f.visible,
                    hb, $a, Fa = f.pool || (f.pool = {
                        element: []
                    }),
                    ib = {},
                    ab = {},
                    jb = {},
                    kb, bb = [],
                    lb, Ca, Ta, Ua, cb, db, rb = u.showTerminalValidData,
                    Oa = u.viewPortConfig,
                    sb = u.showPeakData,
                    mb = u.maxPeakDataLimit,
                    nb = u.minPeakDataLimit,
                    tb = p(u.useCrossline, 0),
                    Ga = Oa.step,
                    eb = C.getPixel(Oa.step) - va < Oa.amrd,
                    ob = function(a, c) {
                        var b = a.graphics;
                        V = a.config;
                        L = V.setValue;
                        E = V.setLink;
                        hb = V.x || c;
                        qa = Z(W(r(V.setLevelTooltext, h.plottooltext, t.plottooltext)));
                        V.toolTipValue = F.dataLabels(L);
                        pa = V.showValue;
                        Q = V.anchorProps;
                        ka = Q.shadow;
                        fa = V.displayValue;
                        $a = V.dip || 0;
                        a || (a = v[c] = {
                            graphics: {}
                        });
                        Za = {
                            color: V.color,
                            alpha: V.alpha
                        };
                        oa = V.dashStyle;
                        I = V.xPos || C.getAxisPosition(hb) - Ba;
                        G = f.visible ? F.getAxisPosition(L) + Aa : wa;
                        ga = V.hoverEffects;
                        Q.isAnchorHoverRadius = ga.anchorRadius;
                        kb = C.getLabel(c);
                        N = V.toolText + (qa ? "" : V.toolTipValue);
                        V.finalTooltext = N;
                        S = {
                            index: c,
                            link: E,
                            value: L,
                            displayValue: fa,
                            categoryLabel: kb,
                            toolText: N,
                            id: l.userID,
                            datasetIndex: n,
                            datasetName: h.seriesname,
                            visible: Sa
                        };
                        null === V.setValue || eb || (Q.imageUrl ? (ia = new aa, ia.onload = f._onAnchorImageLoad(f, c, S, I, G), ia.onerror = f._onErrorSetter(I, G, c, f), ia.src = Q.imageUrl) :
                            (B = b.element, B || (B = Fa.element && Fa.element.length ? b.element = Fa.element.shift() : b.element = D.polypath(Y.anchorGroup)), B.attr({
                                    polypath: [Q.symbol[1] || 2, I, G, Q.radius, Q.startAngle, $a],
                                    fill: T({
                                        color: Q.bgColor,
                                        alpha: Q.bgAlpha
                                    }),
                                    stroke: T({
                                        color: Q.borderColor,
                                        alpha: Q.borderAlpha
                                    }),
                                    "stroke-width": Q.borderThickness,
                                    visibility: Q.radius ? Sa : "hidden"
                                }).shadow(ka, Y.anchorShadowGroup).data("anchorRadius", Q.radius).data("anchorHoverRadius", ga.anchorRadius).data("hoverEnabled", ga.enabled).data("eventArgs", S), ga.enabled &&
                                (X = {
                                    polypath: [ga.anchorSides || 2, I, G, ga.anchorRadius, ga.startAngle, ga.dip],
                                    fill: T({
                                        color: ga.anchorColor,
                                        alpha: ga.anchorBgAlpha
                                    }),
                                    stroke: T({
                                        color: ga.anchorBorderColor,
                                        alpha: ga.anchorBorderAlpha
                                    }),
                                    "stroke-width": ga.anchorBorderThickness
                                }, J = {
                                    polypath: [Q.sides, I, G, Q.radius, Q.startAngle, $a],
                                    fill: T({
                                        color: Q.bgColor,
                                        alpha: Q.bgAlpha
                                    }),
                                    stroke: T({
                                        color: Q.borderColor,
                                        alpha: Q.borderAlpha
                                    }),
                                    "stroke-width": Q.borderThickness
                                }, B && B.data("setRolloverAttr", X).data("setRolloutAttr", J)), B[L || 0 === L ? "show" : "hide"]()), P(Q.radius,
                                ga && ga.anchorRadius || 0));
                        a._xPos = I;
                        a._yPos = G;
                        [T(Za || Ja), oa || Ia].join(":");
                        jb = f.getLinePath([a], jb);
                        Ra = T(Za || Ja);
                        gb = oa || Ia;
                        r(V.setColor, V.setAlpha, V.setDashed);
                        [Ra, gb].join(":");
                        pa && !Q.imageUrl && f.drawLabel(c);
                        bb.push(a)
                    },
                    ub = function(a, c) {
                        var b = a && a.length,
                            d = a.slice().sort(function(a, c) {
                                return a.config.setValue - c.config.setValue
                            }),
                            e = d && d.pop().config.setValue,
                            g = d.length && d.shift().config.setValue || e,
                            d = 0;
                        if (e > mb || g < nb)
                            for (; d < b;) {
                                B = a[d];
                                e = B.config.setValue;
                                if (e > mb || e < nb) e = c + d, ob(B, e);
                                d += 1
                            }
                    },
                    Va = function(c,
                        b) {
                        --c;
                        b += 1;
                        var d;
                        for (z = c; z < b; z += 1)
                            for (d in a = v[z] && v[z].graphics || {}, v[z] && (v[z].config.isRemoving = !0), a) Fa[d] || (Fa[d] = []), a[d] && (Fa[d].push(a[d].hide()), a[d] = void 0)
                    },
                    Wa = ha.ddsi || 0,
                    Ha = ha.ddei || x,
                    Ka = l._oldStartIndex,
                    La = l._oldEndIndex,
                    vb = l._oldStep,
                    pb = w.removeDataArr,
                    wb = pb && pb.length;
                da.line = da.line || D.group("line", da);
                da.lineConnector = da.lineConnector || D.group("line-connector", da);
                Y || (Y = f.graphics.container = {
                    lineShadowGroup: D.group("connector-shadow", da.line),
                    anchorShadowGroup: D.group("anchor-shadow",
                        da.lineConnector),
                    lineGroup: D.group("line", da.line),
                    anchorGroup: D.group("anchors", da.lineConnector)
                }, Y.lineGroup.trackTooltip(!0), Sa || (Y.lineShadowGroup.hide(), Y.anchorShadowGroup.hide(), Y.lineGroup.hide(), Y.anchorGroup.hide()));
                ca || (ca = f.graphics.trackerContainer = D.group("line-hot", K.trackerGroup).toBack(), Sa || ca.hide());
                v || (v = f.components.data = []);
                la || (la = f.graphics.dataLabelContainer = f.graphics.dataLabelContainer || D.group("datalabel", M), Sa || la.hide());
                za = ya * x;
                eb && !l._oldHideAnchors ? Va(Ka, La) : Ga !==
                    vb ? Va(Ka, La) : (Wa > Ka && Va(Ka, Wa > La ? La : Wa), Ha < La && Va(Ha < Ka ? Ka : Ha, La), (Wa < Ka || Ha > La) && Va(Ka, La));
                l._oldHideAnchors = eb;
                l._oldEndIndex = Ha;
                l._oldStep = Ga;
                f.setVisibility(Sa);
                for (z = l._oldStartIndex = Wa; z <= Ha; z += Ga) {
                    O = v[z] || {};
                    V = O.config || {};
                    V.isRemoving = !1;
                    L = V.setValue || null;
                    Ta = z;
                    if (rb)
                        if (0 === z && null === L) {
                            lb = 0;
                            for (Ca = c = z; Ca < x;)
                                if (null !== v[Ca].config.setValue || d ? d = !0 : Ca++, null === v[c].config.setValue && !g && c <= x ? (c += Ga, lb++) : g = !0, d && g) {
                                    d = g = !1;
                                    break
                                }
                            0 !== Ca % Ga && (V = v[Ca].config, Ta = Ca)
                        } else if (z >= x && null === L) {
                        for (Ca =
                            c = z; 0 < Ca && (void 0 !== v[Ca] || d ? d = !0 : Ca--, void 0 === v[c] && !g && 0 <= c ? c -= Ga : g = !0, !d || !g););
                        0 !== Ca % Ga && (V = v[Ca].config, Ta = Ca)
                    }
                    if (O = v[Ta]) ob(O, Ta), sb && 1 < Ga && (Ua = ua(z + 1, Ha), db = ua(Ua + Ga, Ha), cb = db === Ha ? v.slice(Ua) : v.slice(Ua, db), cb.length && ub(cb, Ua))
                }
                ab = f.getLinePath(bb, {});
                ib = f.getLinePath(bb, ib);
                l.lastPath = ab;
                Na || (Na = Fa.lineElement && Fa.lineElement.length ? f.graphics.lineElement = Fa.lineElement.shift() : f.graphics.lineElement = D.path(Y.lineGroup));
                tb || Na.tooltipListenerAttached || (Na.tooltipListenerAttached = !0, Na.mousemove(function(a) {
                    Oa =
                        u.viewPortConfig;
                    var c = u._visx,
                        b = Oa.step,
                        d = Oa.ppp * b,
                        c = ja(k.linkedItems.container, a, k).chartX - c,
                        e;
                    a = u.tooltipSepChar;
                    c = (c += d / 2 + Oa.offset) - c % d;
                    e = (e = k.getValuePixel(c)) + e % b;
                    b = C.getLabel(e).label + a + f.components.data[e].config.formatedVal;
                    b = l.seriesname && l.seriesname + a + b || b;
                    Na.tooltip(0 === u.crossline.enabled ? b : !1)
                }));
                Na.attr({
                    path: ab.getPathArr(),
                    "stroke-dasharray": Ia,
                    "stroke-width": U,
                    stroke: T(Ja),
                    "stroke-linecap": "round",
                    "stroke-linejoin": 2 <= U ? "round" : "miter"
                }).shadow(ea, Y.lineShadowGroup);
                qb && (Qa = Ea.startPercent,
                    H[2] = za + Da[0], 1 === Qa && (Da[0] = H[2], H[0] = 0));
                H[3] += Aa;
                f.drawn = !0;
                wb && f.remove()
            },
            setVisibility: function(a, c) {
                var b = this.graphics,
                    g = b && b.container,
                    f = b && b.trackerContainer,
                    b = b && b.dataLabelContainer,
                    h = a ? "show" : "hide";
                g.lineGroup[h]();
                g.anchorGroup[h]();
                g.anchorShadowGroup[h]();
                g.lineShadowGroup[h]();
                f[h]();
                b[h]();
                c && this.transposeLimits(a)
            },
            transposeLimits: function(a) {
                var c = this.chart,
                    b = c.config,
                    g = this.yAxis;
                c._chartAnimation();
                this.visible = a;
                this._conatinerHidden = !a;
                c._setAxisLimits();
                g.draw();
                b.legendClicked = !0;
                c._drawDataset();
                delete b.legendClicked
            },
            hide: function() {
                this.setVisibility(!1, !0)
            },
            show: function() {
                this.setVisibility(!0, !0)
            }
        }, "Line"]);
        f = function() {};
        f.prototype.configure = function(a, c) {
            var b, g, f, h = {},
                l = this,
                q = a.components,
                p = q.numberFormatter,
                n = q.paper,
                r = a.config;
            b = a.graphics;
            g = this.left = r._visx;
            f = this.top = r.canvasTop;
            var t = this.height = r.canvasHeight,
                u = this._visout = r._visout,
                v = this.plots = a.components.dataset,
                w = b.datalabelsGroup,
                x, z, C = c.labelstyle,
                D = c.valuestyle,
                I = q.yAxis[0],
                F = I.getLimit(),
                G =
                q.yAxis[1],
                M = G && G.getLimit();
            z = this.tracker;
            var q = this.labels,
                P = this.positionLabel;
            x = a.get("linkedItems");
            var T = x.container,
                N = x.eventListeners || (x.eventListeners = []);
            l.width = r._visw;
            x = this.group;
            x || (x = this.group = n.group("crossline-labels", w), this.container = T);
            x.attr({
                transform: ["T", g, r._ymin]
            }).css(D);
            z || (z = l.tracker = T, N.push(k(T, "touchstart mousemove", function(c) {
                var b = l.onMouseMove,
                    d = l.onMouseOut;
                a.isWithinCanvas(c, a).insideCanvas ? b.call(l, c) : d.call(l, c)
            }, l)), N.push(k(T, "mousedown", function() {
                    l.onMouseDown()
                },
                l)), N.push(k(T, "mouseup", function() {
                l.onMouseUp()
            }, l)), N.push(k(T, "mouseout", function() {
                l.onMouseOut()
            }, l)));
            z = this.line;
            z || (z = this.line = n.path(w).toBack());
            z.attr(K({
                path: ["M", g, f, "l", 0, t]
            }, c.line));
            q || (q = this.labels = c.valueEnabled && n.set());
            c.labelEnabled ? (h.x = u, h.y = f + t + (r.scrollHeight || 0) + 2.5, h["vertical-align"] = "top", h.direction = r.textDirection, h.text = "", P ? (P.attr(h), P.css(C)) : P = this.positionLabel = n.text(h, C, b.datalabelsGroup).insertBefore(b.datasetGroup)) : (P && P.remove(), delete this.positionLabel);
            this.hide();
            this.ppixelRatio = -I.getPVR();
            this.spixelRatio = G && -G.getPVR();
            this.yminValue = r._yminValue;
            this.pyaxisminvalue = F.min;
            this.pyaxismaxvalue = F.max;
            this.syaxisminvalue = M && M.min;
            this.syaxismaxvalue = M && M.max;
            this.positionLabels = r.xlabels || {
                data: [],
                parsed: []
            };
            this.chart = a;
            this.getZoomInfo = function() {
                return r.viewPortConfig
            };
            this.getDataIndexFromPixel = function(c) {
                return Math.round(a.components.xAxis[0].getValue(c))
            };
            this.getPositionLabel = function(c) {
                return (c = a.components.xAxis[0].getLabel(c)) && c.label ||
                    ""
            };
            if (c.valueEnabled) {
                b = 0;
                for (g = v.length; b < g; b += 1) f = v[b], f = m(f.config.linecolor), h.x = 0, h.y = u, h.fill = f, h.direction = r.textDirection, h.text = "", h["text-bound"] = D["text-bound"], h.lineHeight = D.lineHeight, q[b] ? q[b].attr(h) : q[b] = q.items[b] = n.text(h, void 0, x);
                for (; b < q.items.length; b += 1) q[b].remove(), delete q[b], q.items.splice(b, 1);
                this.numberFormatter = p
            } else if (q.items && q.items.length) {
                for (b = 0; b < q.items.length; b += 1) q[b].remove(), delete q[b];
                q.length = 0
            }
        };
        f.prototype.disable = function(a) {
            void 0 !== a && (this.disabled = !!a) && this.visible && this.hide();
            return this.disabled
        };
        f.prototype.onMouseOut = function() {
            this.hide();
            this.position = void 0
        };
        f.prototype.onMouseDown = function() {
            !Z && this.hide();
            this._mouseIsDown = !0
        };
        f.prototype.onMouseUp = function() {
            !Z && this.hide();
            delete this._mouseIsDown
        };
        f.prototype.onMouseMove = function(a) {
            if (!(this.disabled || this._mouseIsDown && !Z)) {
                var c, b = this.getZoomInfo(),
                    g = this.line,
                    f = this.left,
                    b = b.step,
                    h = this.chart,
                    k = h.components.xAxis[0],
                    l = h.get("config"),
                    m = l.canvasLeft,
                    p = k.getAxisConfig("axisDimention");
                a = ja(this.container, a, h).chartX - f;
                var f = k._getVisibleConfig(),
                    p = p.x - m,
                    n;
                n = (n = this.getDataIndexFromPixel(M(a))) + ((c = n % b) > b / 2 ? b - c : -c);
                a = k.getPixel(n) - p - m;
                g.transform(["T", M(a), 0]);
                this.hidden && 0 !== l.crossline.enabled && this.show();
                (n < f.minValue || n > f.maxValue) && this.hide();
                if (n !== this.position || this.hidden) this.position = n, this.lineX = a, this.updateLabels()
            }
        };
        f.prototype.updateLabels = function() {
            var a = this,
                c = a.labels,
                b = a.plots,
                f = a.width,
                k = a.position,
                h = a.lineX,
                l = wa(h),
                m = a.ppixelRatio,
                n = a.spixelRatio,
                p = a.yminValue,
                r = a._visout,
                t = a.numberFormatter,
                u = a.pyaxisminvalue,
                v = a.pyaxismaxvalue,
                w = a.syaxisminvalue,
                x = a.syaxismaxvalue,
                z = function() {
                    function c() {
                        this.y = 0;
                        this.lRef = void 0;
                        this.__index = this.__shift = 0
                    }

                    function b(a) {
                        for (var c = 0; c < a;) this.push(c++);
                        return this
                    }

                    function d(a) {
                        var c, b, e, f = {},
                            g = Number.POSITIVE_INFINITY;
                        for (c = 0; c < this.length; c++) b = this[c] - a, 0 > b ? e = w.NEG : e = w.POS, b = u(b), b <= g && (g = b, f.absValue = b, f.noScaleSide = e);
                        return f
                    }

                    function f(a) {
                        this.holes = b.call([], a)
                    }
                    var g = -1 * a.height,
                        h = p * m,
                        k = 0,
                        l, n = {},
                        t, u = Math.abs,
                        v = Math.floor,
                        w = {};
                    "function" != typeof Object.create && (Object.create = function() {
                        function a() {}
                        var c = Object.prototype.hasOwnProperty;
                        return function(b) {
                            var d, e, f;
                            if ("object" != typeof b) throw new TypeError("Object prototype may only be an Object or null");
                            a.prototype = b;
                            f = new a;
                            a.prototype = null;
                            if (1 < arguments.length)
                                for (e in d = Object(arguments[1]), d) c.call(d, e) && (f[e] = d[e]);
                            return f
                        }
                    }());
                    Array.prototype.indexOf || (Array.prototype.indexOf = function(a, c) {
                        var b, d, e;
                        if (null == this) throw new TypeError('"this" is null or not defined');
                        d = Object(this);
                        e = d.length >>> 0;
                        if (0 === e) return -1;
                        b = +c || 0;
                        Infinity === Math.abs(b) && (b = 0);
                        if (b >= e) return -1;
                        for (b = Math.max(0 <= b ? b : e - Math.abs(b), 0); b < e;) {
                            if (b in d && d[b] === a) return b;
                            b++
                        }
                        return -1
                    });
                    Array.prototype.forEach || (Array.prototype.forEach = function(a, c) {
                        var b, d, e, f, g;
                        if (null == this) throw new TypeError(" this is null or not defined");
                        e = Object(this);
                        f = e.length >>> 0;
                        if ("function" !== typeof a) throw new TypeError(a + " is not a function");
                        1 < arguments.length && (b = c);
                        for (d = 0; d < f;) d in e && (g = e[d], a.call(b, g,
                            d, e)), d++
                    });
                    c.prototype.constructor = c;
                    c.prototype.applyShift = function(a) {
                        this.__shift = a;
                        this.lRef.calcY = this.y += a * k
                    };
                    c.prototype.applyDirectIndex = function(a) {
                        this.__index = a;
                        this.lRef.calcY = this.y = g - a * k * -1
                    };
                    try {
                        Object.defineProperty(w, "POS", {
                            enumerable: !1,
                            configurable: !1,
                            get: function() {
                                return 1
                            }
                        }), Object.defineProperty(w, "NEG", {
                            enumerable: !1,
                            configurable: !1,
                            get: function() {
                                return -1
                            }
                        })
                    } catch (A) {
                        w.POS = 1, w.NEG = -1
                    }
                    f.prototype = Object.create(Array.prototype);
                    f.prototype.constructor = f;
                    f.prototype.repositionHoles =
                        function() {
                            var a, c = 0,
                                b;
                            for (a = this.holes.length = 0; a < this.length; a++) b = this[a], !b && (this.holes[c++] = a)
                        };
                    f.prototype.attachShift = function(a, b, e) {
                        var f, g = this.length;
                        if (a === r) e.calcY = r;
                        else if (g = b > g - 1 ? g - 1 : b, f = this[g], b = new c, b.y = a, b.lRef = e, f) {
                            a = d.call(this.holes, g);
                            e = g + a.absValue * a.noScaleSide;
                            if (a.noScaleSide === w.POS) return b.applyDirectIndex(e), this.splice(e, 1, b), this.holes.splice(this.holes.indexOf(e), 1), e;
                            if (a.noScaleSide === w.NEG) {
                                a = this.splice(e + 1, this.length - 1);
                                this.pop();
                                a.forEach(function(a) {
                                    a &&
                                        a.applyShift(-1)
                                });
                                for ([].push.apply(this, a); this[e];) e++;
                                this.push(0);
                                this.repositionHoles();
                                a = d.call(this.holes, e);
                                e += a.absValue * a.noScaleSide;
                                b.applyDirectIndex(e);
                                this.splice(e, 1, b);
                                this.repositionHoles();
                                return this.length - 1
                            }
                        } else b.applyDirectIndex(g), this.splice(g, 1, b), this.holes.splice(this.holes.indexOf(g), 1)
                    };
                    try {
                        Object.defineProperty(n, "top", {
                            enumerable: !1,
                            configurable: !1,
                            get: function() {
                                return g
                            }
                        }), Object.defineProperty(n, "bottom", {
                            enumerable: !1,
                            configurable: !1,
                            get: function() {
                                return h
                            }
                        })
                    } catch (A) {
                        n.top =
                            g, n.bottom = h
                    }
                    n.init = function(a, c) {
                        var b;
                        k = a + 2;
                        g += k / 2;
                        t = v(u(g) / k);
                        l = new f(t);
                        for (b = 0; b < t; b++) l.push(0)
                    };
                    n.occupy = function(a, c) {
                        var b = v(u(g - a) / k);
                        l && l.attachShift(a, b, c)
                    };
                    return n
                }();
            c && (c[0] && c[0].attr({
                text: t.yAxis("0")
            }), c[0] && z.init(c[0].getBBox().height, c.length), c.forEach(function(a, c) {
                var e = b[c],
                    f = e.components.data[k] && e.components.data[k].config.setValue,
                    g = e.config.parentYAxis;
                z.occupy(void 0 === f || !e.visible || (g ? f > x || f < w : f > v || f < u) ? r : g ? (f - w) * n : (f - u) * m, a)
            }));
            c && c.forEach(function(a, c) {
                var e = b[c],
                    m, n;
                (e = t[e.config.parentYAxis ? "sYAxis" : "yAxis"](e.components.data[k] && e.components.data[k].config.setValue)) ? (a.attr({
                    text: e
                }), e = (e = (e = (e = a.getBBox()) && e.width) && .5 * e) && e + 10, n = a.calcY, m = P(0, ua(l, f)), void 0 !== n && void 0 !== m && a.attr({
                    x: m,
                    y: n,
                    "text-anchor": h <= e && "start" || h + e >= f && "end" || "middle",
                    "text-bound": ["rgba(255,255,255,0.8)", "rgba(0,0,0,0.2)", 1, 2.5]
                })) : a.attr({
                    x: -f
                })
            });
            a.positionLabel && a.positionLabel.attr({
                x: h + a.left,
                text: a.getPositionLabel(k),
                "text-bound": ["rgba(255,255,255,1)", "rgba(0,0,0,1)",
                    1, 2.5
                ]
            })
        };
        f.prototype.show = function() {
            this.disabled || (this.hidden = !1, this.group.attr("visibility", "visible"), this.line.attr("visibility", "visible"), this.positionLabel && this.positionLabel.attr("visibility", "visible"))
        };
        f.prototype.hide = function() {
            this.hidden = !0;
            this.group.attr("visibility", "hidden");
            this.line.attr("visibility", "hidden");
            this.positionLabel && this.positionLabel.attr("visibility", "hidden")
        };
        f.prototype.dispose = function() {
            for (var a in this) this.hasOwnProperty(a) && delete this[a]
        };
        w.addSymbol({
            pinModeIcon: function(a,
                c, b) {
                var f = .5 * b,
                    k = a - b,
                    h = a + b,
                    l = a - f,
                    m = a + f,
                    n = a + .5,
                    p = n + 1,
                    r = n + 1.5,
                    t = c - b,
                    u = c + f,
                    v = c - f,
                    f = c + (b - f);
                return ["M", k, t, "L", l, v, l, f, k, u, a - .5, u, a, c + b + .5, n, u, h, u, m, f, m, v, h, t, r, t, r, v, r, f, p, f, p, v, r, v, r, t, "Z"]
            },
            zoomOutIcon: function(a, c, b) {
                a -= .2 * b;
                c -= .2 * b;
                var f = .8 * b,
                    k = w.rad(43),
                    h = w.rad(48),
                    l = a + f * ya(k),
                    k = c + f * va(k),
                    m = a + f * ya(h),
                    h = c + f * va(h),
                    n = w.rad(45),
                    p = l + b * ya(n),
                    r = k + b * va(n),
                    t = m + b * ya(n);
                b = h + b * va(n);
                return ["M", l, k, "A", f, f, 0, 1, 0, m, h, "Z", "M", l + 1, k + 1, "L", p, r, t, b, m + 1, h + 1, "Z", "M", a - 2, c, "L", a + 2, c, "Z"]
            },
            resetIcon: function(a, c, b) {
                var f =
                    a - b,
                    k = (da.PI / 2 + da.PI) / 2;
                a += b * ya(k);
                var k = c + b * va(k),
                    h = 2 * b / 3;
                return ["M", f, c, "A", b, b, 0, 1, 1, a, k, "L", a + h, k - 1, a + 2, k + h - .5, a, k]
            }
        })
    }])
});