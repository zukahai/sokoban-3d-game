isWin = false;

function SfxrP() {
    this.set = function (e) {
        for (var t = 0; 24 > t; t++)
            this[String.fromCharCode(97 + t)] = e[t] || 0;
        this.c < 0.01 && (this.c = 0.01);
        var a = this.b + this.c + this.e;
        if (0.18 > a) {
            var r = 0.18 / a;
            (this.b *= r), (this.c *= r), (this.e *= r);
        }
    };
}
function sy() {
    this._p = new SfxrP();
    var e, t, a, r, o, i, n, l, s, g, d, h;
    (this.reset = function () {
        var e = this._p;
        (r = 100 / (e.f * e.f + 0.001)),
            (o = 100 / (e.g * e.g + 0.001)),
            (i = 1 - e.h * e.h * e.h * 0.01),
            (n = -e.i * e.i * e.i * 1e-6),
            e.a || ((d = 0.5 - e.n / 2), (h = 5e-5 * -e.o)),
            (l = 1 + e.l * e.l * (e.l > 0 ? -0.9 : 10)),
            (s = 0),
            (g = 1 == e.m ? 0 : (1 - e.m) * (1 - e.m) * 2e4 + 32);
    }),
        (this.totalReset = function () {
            this.reset();
            var r = this._p;
            return (
                (e = r.b * r.b * 1e5),
                (t = r.c * r.c * 1e5),
                (a = r.e * r.e * 1e5 + 12),
                3 * (((e + t + a) / 3) | 0)
            );
        }),
        (this.sW = function (v, c) {
            var f = this._p,
                u = 1 != f.s || f.v,
                x = f.v * f.v * 0.1,
                m = 1 + 3e-4 * f.w,
                y = f.s * f.s * f.s * 0.1,
                p = 1 + 1e-4 * f.t,
                M = 1 != f.s,
                b = f.x * f.x,
                T = f.g,
                w = f.q || f.r,
                E = f.r * f.r * f.r * 0.2,
                R = f.q * f.q * (f.q < 0 ? -1020 : 1020),
                S = f.p ? (((1 - f.p) * (1 - f.p) * 2e4) | 0) + 32 : 0,
                U = f.d,
                A = f.j / 2,
                D = f.k * f.k * 0.01,
                z = f.a,
                C = e,
                L = 1 / e,
                I = 1 / t,
                F = 1 / a,
                _ = (5 / (1 + f.u * f.u * 20)) * (0.01 + y);
            _ > 0.8 && (_ = 0.8), (_ = 1 - _);
            for (
                var B,
                P,
                N,
                H,
                k,
                Z,
                W = !1,
                X = 0,
                Y = 0,
                G = 0,
                O = 0,
                V = 0,
                j = 0,
                q = 0,
                K = 0,
                J = 0,
                Q = 0,
                $ = new Array(1024),
                et = new Array(32),
                tt = $.length;
                tt--;

            )
                $[tt] = 0;
            for (var tt = et.length; tt--;) et[tt] = 2 * Math.random() - 1;
            for (var tt = 0; c > tt; tt++) {
                if (W) return tt;
                if (
                    (S && ++J >= S && ((J = 0), this.reset()),
                        g && ++s >= g && ((g = 0), (r *= l)),
                        (i += n),
                        (r *= i),
                        r > o && ((r = o), T > 0 && (W = !0)),
                        (P = r),
                        A > 0 && ((Q += D), (P *= 1 + Math.sin(Q) * A)),
                        (P |= 0),
                        8 > P && (P = 8),
                        z || ((d += h), 0 > d ? (d = 0) : d > 0.5 && (d = 0.5)),
                        ++Y > C)
                )
                    switch (((Y = 0), ++X)) {
                        case 1:
                            C = t;
                            break;
                        case 2:
                            C = a;
                    }
                switch (X) {
                    case 0:
                        G = Y * L;
                        break;
                    case 1:
                        G = 1 + 2 * (1 - Y * I) * U;
                        break;
                    case 2:
                        G = 1 - Y * F;
                        break;
                    case 3:
                        (G = 0), (W = !0);
                }
                w &&
                    ((R += E),
                        (N = 0 | R),
                        0 > N ? (N = -N) : N > 1023 && (N = 1023)),
                    u &&
                    m &&
                    ((x *= m), 1e-5 > x ? (x = 1e-5) : x > 0.1 && (x = 0.1)),
                    (Z = 0);
                for (var at = 8; at--;) {
                    if ((q++, q >= P && ((q %= P), 3 == z)))
                        for (var rt = et.length; rt--;)
                            et[rt] = 2 * Math.random() - 1;
                    switch (z) {
                        case 0:
                            k = d > q / P ? 0.5 : -0.5;
                            break;
                        case 1:
                            k = 1 - (q / P) * 2;
                            break;
                        case 2:
                            (H = q / P),
                                (H = 6.28318531 * (H > 0.5 ? H - 1 : H)),
                                (k =
                                    1.27323954 * H +
                                    0.405284735 * H * H * (0 > H ? 1 : -1)),
                                (k = 0.225 * ((0 > k ? -1 : 1) * k * k - k) + k);
                            break;
                        case 3:
                            k = et[Math.abs(((32 * q) / P) | 0)];
                    }
                    u &&
                        ((B = j),
                            (y *= p),
                            0 > y ? (y = 0) : y > 0.1 && (y = 0.1),
                            M ? ((V += (k - j) * y), (V *= _)) : ((j = k), (V = 0)),
                            (j += V),
                            (O += j - B),
                            (O *= 1 - x),
                            (k = O)),
                        w &&
                        (($[K % 1024] = k), (k += $[(K - N + 1024) % 1024]), K++),
                        (Z += k);
                }
                (Z *= 0.125 * G * b), (v[tt] = Z >= 1 ? 1 : -1 >= Z ? -1 : Z);
            }
            return c;
        });
}

function getShader(e, t) {
    for (var a = document.getElementById(t), r = "", o = a.firstChild; o;)
        3 == o.nodeType && (r += o.textContent), (o = o.nextSibling);
    var i;
    return (
        "x-shader/x-fragment" == a.type
            ? (i = e.createShader(e.FRAGMENT_SHADER))
            : "x-shader/x-vertex" == a.type &&
            (i = e.createShader(e.VERTEX_SHADER)),
        e.shaderSource(i, r),
        e.compileShader(i),
        e.getShaderParameter(i, e.COMPILE_STATUS)
            ? i
            : (alert(a.type + e.getShaderInfoLog(i)), null)
    );
}
function initShaders() {
    for (
        var e = getShader(gl, "shader-vs"),
        t = getShader(gl, "shader-fs"),
        a = getShader(gl, "lava-fs"),
        r = [
            ["shaderProgram", t],
            ["shaderProgramLava", a],
        ],
        o = 0;
        o < r.length;
        o++
    )
        (s = gl.createProgram()),
            gl.attachShader(s, e),
            gl.attachShader(s, r[o][1]),
            gl.linkProgram(s),
            gl.useProgram(s),
            (s.vertexPositionAttribute = gl.getAttribLocation(s, "avp")),
            gl.enableVertexAttribArray(s.vertexPositionAttribute),
            (s.textureCoordAttribute = gl.getAttribLocation(
                s,
                "aTextureCoord"
            )),
            gl.enableVertexAttribArray(s.textureCoordAttribute),
            (s.it = gl.getUniformLocation(s, "it")),
            (s.res = gl.getUniformLocation(s, "res")),
            (s.pMatrixUniform = gl.getUniformLocation(s, "uPMatrix")),
            (s.mvMatrixUniform = gl.getUniformLocation(s, "uMVMatrix")),
            (s.samplerUniform = gl.getUniformLocation(s, "uSampler")),
            (s.cp = gl.getUniformLocation(s, "cp")),
            (s.lights = gl.getUniformLocation(s, "lights")),
            (s.nbLights = gl.getUniformLocation(s, "nbLights")),
            (s.cubeFace = gl.getUniformLocation(s, "cubeFace")),
            (s.isPlayer = gl.getUniformLocation(s, "isPlayer")),
            (s.isCurrentPlayer = gl.getUniformLocation(s, "isCurrentPlayer")),
            (s.ac = gl.getUniformLocation(s, "ac")),
            (window[r[o][0]] = s);
    initBuffers();
}
function setTextureParams(e) {
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, e),
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR),
        gl.texParameteri(
            gl.TEXTURE_2D,
            gl.TEXTURE_MIN_FILTER,
            gl.LINEAR_MIPMAP_NEAREST
        ),
        gl.generateMipmap(gl.TEXTURE_2D);
}
function handleLoadedTexture(e) {
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, !0),
        gl.bindTexture(gl.TEXTURE_2D, e),
        setTextureParams(e.image);
}
function handleLoadedTextureFromCanvas(e, t) {
    (texture = gl.createTexture()),
        gl.bindTexture(gl.TEXTURE_2D, texture),
        setTextureParams(t),
        (window[e] = texture);
}
function handleLoadedTextureFromCanvasTiles(e, t) {
    (texture = gl.createTexture()),
        gl.bindTexture(gl.TEXTURE_2D, texture),
        setTextureParams(t),
        (tilesColors[e] = texture),
        tilesColors.length++;
}
function initTexture() {
    (crate = gl.createTexture()),
        (crate.image = new Image()),
        (crate.image.onload = function () {
            handleLoadedTexture(crate);
        }),
        (crate.image.src = "./crate.png");
}
function degToRad(e) {
    return (e * Math.PI) / 180;
}
function initBuffers() {
    (cubeVertexIndexBuffer = gl.createBuffer()),
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, cubeVertexIndexBuffer);
    for (var e = [0, 1, 2, 0, 2, 3], t = 6; 36 > t; t++)
        e.push(e[t - 6] + 4);
    gl.bufferData(
        gl.ELEMENT_ARRAY_BUFFER,
        new Uint16Array(e),
        gl.STATIC_DRAW
    ),
        (cubeVertexIndexBuffer.itemSize = 1),
        (cubeVertexIndexBuffer.numItems = e.length);
}
function drawScene() {
    if (isWin) {
        drawHUDEnd();
        return;
    }
    ctx.font = 30 + 'px MyCustomFont';
    gl.viewport(0, 0, gl.viewportWidth, gl.viewportHeight),
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT),
        mat4.perspective(
            fov,
            gl.viewportWidth / gl.viewportHeight,
            0.001,
            100,
            pMatrix
        ),
        mat4.identity(mvMatrix),
        (blocksInMove = !1),
        levelExplode && levelExplodeSince--;
    var e = players[selectedPlayer];
    e &&
        ((1 == e.inMoveX || -1 == e.inMoveX) && (e.inMoveX = 0),
            (1 == e.inMoveY || -1 == e.inMoveY) && (e.inMoveY = 0),
            moveF && move(0, 1, e) && (e.rotation.xD = (e.rotation.xD + 1) % 4),
            moveB &&
            move(0, -1, e) &&
            (e.rotation.xD--, -1 == e.rotation.xD && (e.rotation.xD = 3)),
            moveR && move(1, 0, e),
            moveL && move(-1, 0, e),
            e.inMoveY > 0
                ? ((e.y += -(1 / (vitesseRotation / 2))), e.inMoveY--)
                : e.inMoveY < 0 &&
                ((e.y -= -(1 / (vitesseRotation / 2))), e.inMoveY++),
            e.inMoveX > 0
                ? ((e.x += 1 / (vitesseRotation / 2)), e.inMoveX--)
                : e.inMoveX < 0 &&
                ((e.x -= 1 / (vitesseRotation / 2)), e.inMoveX++)),
        zoomOn
            ? ((camera.x -= (camera.x - -zoomOn.x) / 10),
                (camera.y -= (camera.y - (zoomOn.y + 10)) / 10),
                (camera.z -= (camera.z - (zoomOn.z + 20)) / 10))
            : e &&
            ((camera.x -= (camera.x - -e.x) / 10),
                (camera.y -= (camera.y - (-e.y + 10)) / 10),
                (camera.z -= (camera.z - (e.z + 20)) / 10));
    for (var t = 0; t < players.length; t++) {
        for (
            var e = players[t],
            a = level[e.tile.x][e.tile.y],
            r = 2 * (a.h + a.o.length),
            o = 0;
            o < a.p.length && a.p[o] != players[t];
            o++
        )
            r += 2;
        a.h || (r = -1e3),
            e.z > r
                ? (0 == e.inMoveZ && (e.inMoveZ = 0.1),
                    (e.z -= e.inMoveZ),
                    (e.inMoveZ *= 1.1),
                    0 == e.z && gameOver(),
                    e.z <= r && ((e.z = r), (e.inMoveZ = 0)))
                : (-1e3 == r && gameOver(),
                    r > e.z
                        ? (e.z = r + a.inMoveZ / vitesseRotation)
                        : ((e.inMoveZ = 0), (e.z = r))),
            drawCube({
                x: players[t].x,
                y: players[t].y,
                z: players[t].z,
                h: 1,
                type: "player",
                player: e,
                selectedPlayer: t == selectedPlayer,
            });
    }
    for (var i = 0; i < levels[gameLevel].width; i++)
        for (var n = 0; n < levels[gameLevel].height; n++) {
            var a = level[i][n],
                l = a.h + a.o.length;
            if ((a.h || (l = -10), a.o.length))
                for (var t = 0; t < a.o.length; t++) {
                    var s = a.o[t],
                        g = { x: 0, y: 0, z: 0 };
                    if (
                        (s.inMoveX > 0 &&
                            (g.x = (-(--s.inMoveX) / vitesseRotation) * 2),
                            s.inMoveX < 0 && (g.x = (-++s.inMoveX / vitesseRotation) * 2),
                            s.inMoveY > 0 && (g.y = (--s.inMoveY / vitesseRotation) * 2),
                            s.inMoveY < 0 && (g.y = (++s.inMoveY / vitesseRotation) * 2),
                            l < s.z + s.inMoveZ)
                    ) {
                        if (
                            (0 == s.speedZ &&
                                ((s.speedZ = 0.1), (s.inMoveZ = 2 * (s.z - l))),
                                s.speedZ > 0
                                    ? (s.speedZ *= 1.1)
                                    : s.speedZ < -0.04
                                        ? (s.speedZ *= 0.9)
                                        : (s.speedZ = 0.05),
                                (s.inMoveZ -= s.speedZ),
                                (g.z = s.inMoveZ),
                                l > s.z + s.inMoveZ)
                        )
                            if (s.inMoveZ > -0.1) g.z = 0;
                            else {
                                if (!a.h) {
                                    continue;
                                }
                                (s.speedZ = 0.2 * s.inMoveZ),
                                    (s.inMoveZ = -s.inMoveZ),
                                    (g.z = s.inMoveZ);
                            }
                        s.z = a.h + t + 1;
                    } else
                        l > s.z && a.inMoveZ < 0
                            ? ((g.z = a.inMoveZ / vitesseRotation), (s.z = a.h + t))
                            : (s.z = a.h + t + 1),
                            (s.inMoveZ = 0),
                            (s.speedZ = 0);
                    drawCube({
                        x: 2 * i,
                        y: 2 * -n,
                        z: 2 * (l - a.o.length + t),
                        h: 1,
                        type: "block" + (2 == a.o[t].type ? "2" : ""),
                        decal: g,
                    });
                }
            var l = a.h;
            if (l) {
                var g = { x: 0, y: 0, z: 0 },
                    d = { x: 0, y: 0, z: 0 };
                if (levelExplode) {
                    if (0 == levelExplodeSince) return void nextLevel();
                    (blocksInMove = !0),
                        (a.inMoveZ += a.speedZ),
                        (g.z = a.inMoveZ / vitesseRotation),
                        (a.speedZ -= 0.2),
                        (a.decalX += a.speedX),
                        (a.decalY += a.speedY),
                        (g.x = a.decalX),
                        (g.y = a.decalY),
                        (a.speedX *= 0.9999),
                        (a.speedY *= 0.9999),
                        (a.rotation.x += a.rotationSpeed.x),
                        (a.rotation.y += a.rotationSpeed.y),
                        (a.rotation.z += a.rotationSpeed.z),
                        (d = a.rotation);
                } else
                    a.inMoveZ &&
                        ((blocksInMove = !0),
                            a.inMoveZ > 0 && (g.z = --a.inMoveZ / vitesseRotation),
                            a.inMoveZ < 0 && (g.z = ++a.inMoveZ / vitesseRotation));
                drawCube({
                    x: 2 * i,
                    y: 2 * -n,
                    z: 0,
                    h: l - 0.2,
                    type: "normal",
                    trigger: a.t,
                    decal: g,
                    rotation: d,
                    triggered: a.triggered,
                }),
                    drawCube({
                        x: 2 * i,
                        y: 2 * -n,
                        z: 2 * l - 0.4,
                        h: 0.2,
                        type: "normal2",
                        trigger: a.t,
                        decal: g,
                        rotation: d,
                    }),
                    a.t &&
                    !a.finish &&
                    drawCube({
                        x: 2 * i,
                        y: 2 * -n,
                        z: 2 * l,
                        h: 1,
                        type: "trigger",
                        trigger: a.t,
                        decal: g,
                    });
            }
        }
    for (
        levelDrawing &&
        !blocksInMove &&
        ((levelDrawing = !1), startTuto(), (vitesseRotation = 10)),
        lightsDisplayed = [],
        t = 0;
        t < lights.length;
        t += 4
    ) {
        var h = Math.abs(camera.x - lights[t] / 2);
        (h += Math.abs(camera.y + lights[t + 1] / 2)),
            100 > h &&
            (lightsDisplayed.push(lights[t]),
                lightsDisplayed.push(lights[t + 1]),
                lightsDisplayed.push(lights[t + 2]),
                lightsDisplayed.push(lights[t + 3]));
    }
    var v = levels[gameLevel];
    drawCube({
        x: 2 * v.end.x,
        y: 2 * -v.end.y,
        z: 2 * level[v.end.x][v.end.y].h,
        h: 0.1,
        type: "ball",
        decal: {
            x: 0,
            y: 0,
            z: level[v.end.x][v.end.y].inMoveZ / vitesseRotation,
        },
    });
}
function drawHUDEnd() {
    if (isWin)
        return;
    alert("Bạn đã hoàn thành tẩt cả các màn trong trò chơi!");
    // load
    window.location.reload();
    isWin = true;
    console.log("End");
    ctx.font = 80 + 'px MyCustomFont';
    // frame++;
    ctx.fillStyle = "#000000";
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    ctx.fillStyle = "#ffffff";
    ctx.textAlign = "center";
    ctx.fillText("Có thể trò chơi quá dễ với bạn!", canvasHUD.width / 2, canvasHUD.height / 2 - 100);

}
function drawHUDHome() {
    ctx.font = canvasHUD.width / 10 + 'px MyCustomFont';
    frame++;
    ctx.fillStyle = "#000000";
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    ctx.fillRect(0, 0, canvasHUD.width, canvasHUD.height),
    ctx.fillStyle = "#ffffff";
    ctx.textAlign = "center";
    ctx.fillText("SOKOBAN 3D", canvasHUD.width / 2, canvasHUD.height / 2 - 100);
    ctx.font = canvasHUD.width / 30 + 'px MyCustomFont';
    ctx.fillText("Bấm phím A để bắt đầu", canvasHUD.width / 2, canvasHUD.height / 2 + 100);
}
function drawHUD() {
    ctx.font = 30 + 'px MyCustomFont';
    if (
        (ctx.clearRect(0, 0, window.innerWidth, window.innerHeight), tutoText)
    )
        // drawText(
        //     window.innerWidth / 2 - 18 * (tutoText.length / 2),
        //     window.innerHeight / 2 + 144,
        //     tutoText.toUpperCase(),
        //     3
        // );
        {
            ctx.textAlign = "center";
            ctx.font = 30 + 'px MyCustomFont';
            ctx.fillText(tutoText, window.innerWidth / 2, window.innerHeight / 2 + 256);
        }
    else if (!isWin) {
        ctx.textAlign = "left";
        ctx.font = 20 + 'px MyCustomFont';
        ctx.fillStyle = "#ffffff";
        ctx.fillText("Số bước: " + nbMoves, 20, 50);
        ctx.fillText("M - Tắt âm thanh", 20, 90);
        ctx.fillText("R - Chơi lại", 20, 130);

        ctx.textAlign = "center";
        ctx.font = 30 + 'px MyCustomFont';
        ctx.fillText("Màn chơi " + gameLevel, canvasHUD.width / 2, 50);
    }
}
function tick() {
    frame++,
        drawScene(),
        drawHUD(),
        (rafTick = requestAnimationFrame(tick));
}
function resize() {
    var e = document.getElementById("game");
    (e.width = window.innerWidth),
        (e.height = window.innerHeight),
        (gl = e.getContext("webgl")),
        (gl.viewportWidth = e.width),
        (gl.viewportHeight = e.height),
        (canvasHUD.width = e.width),
        (canvasHUD.height = e.height);
}
function webGLStart() {
    (canvasHUD = document.getElementById("HUD")),
        (ctx = canvasHUD.getContext("2d")),
        resize(),
        gl || alert("Could not load WebGL sorry"),
        initShaders(),
        initTexture(),
        gl.clearColor(0.5, 0.25, 0.85, 1),
        gl.enable(gl.DEPTH_TEST),
        gl.enable(gl.BLEND),
        gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
    var e = document.createElement("canvas");
    (e.width = 512), (e.height = 512);
    var t = e.getContext("2d"),
        a = t.getImageData(0, 0, e.width, e.height);
    t.clearRect(0, 0, 512, 512);
    for (var r = 0; r < a.data.length; r += 4) {
        var o = Math.floor(255 * Math.random());
        (a.data[r] = (193 * (255 - (255 - o) / 1200)) / 255),
            (a.data[r + 1] = (171 * (255 - (255 - o) / 1200)) / 255),
            (a.data[r + 2] = (146 * (255 - (255 - o) / 1200)) / 255),
            (a.data[r + 3] = 255);
    }
    t.putImageData(a, 0, 0), handleLoadedTextureFromCanvas("mur", e);
    var i = 50;
    t.clearRect(0, 0, 512, 512);
    for (var r = 0; r < a.data.length; r += 4) {
        var n = (r / 4) % 512,
            l = Math.floor(r / 2048),
            g = i > l || l > 512 - i || i > n || n > 512 - i;
        Math.hypot(256 - n, 256 - l) < 150 && (g = !0),
            (a.data[r + 0] = g ? 196 : 54),
            (a.data[r + 1] = g ? 221 : 64),
            (a.data[r + 2] = g ? 55 : 216),
            (a.data[r + 3] = 255);
    }
    t.putImageData(a, 0, 0),
        handleLoadedTextureFromCanvas("red", e),
        t.clearRect(0, 0, 512, 512);
    for (var r = 0; r < a.data.length; r += 4) {
        var n = (r / 4) % 512,
            l = Math.floor(r / 2048),
            g = i > l || l > 512 - i || i > n || n > 512 - i;
        n >= 206 && 306 >= n && l >= 206 && 306 >= l && (g = !0),
            (a.data[r + 0] = g ? 255 : 54),
            (a.data[r + 1] = g ? 121 : 64),
            (a.data[r + 2] = g ? 0 : 216),
            (a.data[r + 3] = 255);
    }
    t.putImageData(a, 0, 0), handleLoadedTextureFromCanvas("blue", e);
    for (var d = 0; 23 > d; d++) {
        var h = 10 + 3 * Math.random(),
            o = Math.random(),
            v = { r: 27 - 60 * o, g: 165 - 10 * o, b: 211 - 7.5 * o };
        (delta = { r: 0, g: 0, b: 0 }), t.clearRect(0, 0, 512, 512);
        for (var r = 0; r < a.data.length; r += 4) {
            var n = (r / 4) % 512,
                l = Math.floor(r / 2048);
            if (((i = 21 == d ? 30 : h), 22 == d)) {
                i = 30;
                var g = i > l || l > 512 - i || i > n || n > 512 - i;
                (x2 = Math.abs(n - 256)),
                    (y2 = Math.abs(l - 256)),
                    (Math.hypot(x2, y2) < 128 ||
                        Math.hypot(128 - x2, 128 - y2) < 64 ||
                        Math.hypot(192 - x2, 192 - y2) < 32) &&
                    (g = !0),
                    g
                        ? (delta.r =
                            delta.g =
                            delta.b =
                            Math.hypot(256 - n, 256 - l) > 32
                                ? Math.hypot(256 - n, 256 - l)
                                : 255)
                        : (delta = { r: 0, g: 0, b: 0 });
            } else var g = i > l || l > 512 - i || i > n || n > 512 - i;
            (a.data[r + 0] = g ? v.r / 2 + delta.r : v.r),
                (a.data[r + 1] = g ? v.g / 2 + delta.g : v.g),
                (a.data[r + 2] = g ? v.b / 2 + delta.b : v.b),
                (a.data[r + 3] = 255);
        }
        t.putImageData(a, 0, 0), handleLoadedTextureFromCanvasTiles(d, e);
    }
    (s = 256), (e.width = s), (e.height = s);
    var t = e.getContext("2d"),
        a = t.getImageData(0, 0, e.width, e.height);
    t.clearRect(0, 0, s, s);
    for (var r = 0; r < a.data.length; r += 4) {
        var o = Math.floor(255 * Math.random());
        (a.data[r] = Math.floor(255 * Math.random())),
            (a.data[r + 1] = Math.floor(255 * Math.random())),
            (a.data[r + 2] = Math.floor(255 * Math.random())),
            (a.data[r + 3] = Math.floor(255 * Math.random()));
    }
    t.putImageData(a, 0, 0),
        handleLoadedTextureFromCanvas("sphereTexture", e),
        initLevels(),
        initGame(),
        drawHUDHome();
}
var synth = new sy();
(window.jsfxr = function (e) {
    window._audioContext = window._audioContext || new AudioContext();
    var t = window._audioContext;
    synth._p.set(e);
    var a = synth.totalReset(),
        r = ((a + 1) >> 1) << 1,
        o = t.createBuffer(1, r, t.sampleRate),
        i = o.getChannelData(0);
    return 2 * synth.sW(i, a), o;
}),
    (window.playSound = function (e) {
        if (sound) {
            jsfxr(e);
            var t = window._audioContext,
                a = t.createBufferSource();
            return (
                (a.buffer = jsfxr(e)),
                (a.loop = !1),
                a.connect(t.destination),
                a.start(t.currentTime),
                [a.buffer, t, a]
            );
        }
    }),
    (glMatrixArrayType =
        "undefined" != typeof Float32Array
            ? Float32Array
            : "undefined" != typeof WebGLFloatArray
                ? WebGLFloatArray
                : Array);
var mat3 = {};
(mat3.create = function (e) {
    var t = new glMatrixArrayType(9);
    return (
        e &&
        ((t[0] = e[0]),
            (t[1] = e[1]),
            (t[2] = e[2]),
            (t[3] = e[3]),
            (t[4] = e[4]),
            (t[5] = e[5]),
            (t[6] = e[6]),
            (t[7] = e[7]),
            (t[8] = e[8]),
            (t[9] = e[9])),
        t
    );
}),
    (mat3.transpose = function (e, t) {
        if (!t || e == t) {
            var a = e[1],
                r = e[2],
                o = e[5];
            return (
                (e[1] = e[3]),
                (e[2] = e[6]),
                (e[3] = a),
                (e[5] = e[7]),
                (e[6] = r),
                (e[7] = o),
                e
            );
        }
        return (
            (t[0] = e[0]),
            (t[1] = e[3]),
            (t[2] = e[6]),
            (t[3] = e[1]),
            (t[4] = e[4]),
            (t[5] = e[7]),
            (t[6] = e[2]),
            (t[7] = e[5]),
            (t[8] = e[8]),
            t
        );
    });
var mat4 = {};
(mat4.create = function (e) {
    var t = new glMatrixArrayType(16);
    return (
        e &&
        ((t[0] = e[0]),
            (t[1] = e[1]),
            (t[2] = e[2]),
            (t[3] = e[3]),
            (t[4] = e[4]),
            (t[5] = e[5]),
            (t[6] = e[6]),
            (t[7] = e[7]),
            (t[8] = e[8]),
            (t[9] = e[9]),
            (t[10] = e[10]),
            (t[11] = e[11]),
            (t[12] = e[12]),
            (t[13] = e[13]),
            (t[14] = e[14]),
            (t[15] = e[15])),
        t
    );
}),
    (mat4.identity = function (e) {
        return (
            (e[0] = 1),
            (e[1] = 0),
            (e[2] = 0),
            (e[3] = 0),
            (e[4] = 0),
            (e[5] = 1),
            (e[6] = 0),
            (e[7] = 0),
            (e[8] = 0),
            (e[9] = 0),
            (e[10] = 1),
            (e[11] = 0),
            (e[12] = 0),
            (e[13] = 0),
            (e[14] = 0),
            (e[15] = 1),
            e
        );
    }),
    (mat4.toInverseMat3 = function (e, t) {
        var a = e[0],
            r = e[1],
            o = e[2],
            i = e[4],
            n = e[5],
            l = e[6],
            s = e[8],
            g = e[9],
            d = e[10],
            h = d * n - l * g,
            v = -d * i + l * s,
            c = g * i - n * s,
            f = a * h + r * v + o * c;
        return f
            ? ((f = 1 / f),
                t || (t = mat3.create()),
                (t[0] = h * f),
                (t[1] = (-d * r + o * g) * f),
                (t[2] = (l * r - o * n) * f),
                (t[3] = v * f),
                (t[4] = (d * a - o * s) * f),
                (t[5] = (-l * a + o * i) * f),
                (t[6] = c * f),
                (t[7] = (-g * a + r * s) * f),
                (t[8] = (n * a - r * i) * f),
                t)
            : null;
    }),
    (mat4.translate = function (e, t, a) {
        var r = t[0],
            o = t[1];
        if (((t = t[2]), !a || e == a))
            return (
                (e[12] = e[0] * r + e[4] * o + e[8] * t + e[12]),
                (e[13] = e[1] * r + e[5] * o + e[9] * t + e[13]),
                (e[14] = e[2] * r + e[6] * o + e[10] * t + e[14]),
                (e[15] = e[3] * r + e[7] * o + e[11] * t + e[15]),
                e
            );
        var i = e[0],
            n = e[1],
            l = e[2],
            s = e[3],
            g = e[4],
            d = e[5],
            h = e[6],
            v = e[7],
            c = e[8],
            f = e[9],
            u = e[10],
            x = e[11];
        return (
            (a[0] = i),
            (a[1] = n),
            (a[2] = l),
            (a[3] = s),
            (a[4] = g),
            (a[5] = d),
            (a[6] = h),
            (a[7] = v),
            (a[8] = c),
            (a[9] = f),
            (a[10] = u),
            (a[11] = x),
            (a[12] = i * r + g * o + c * t + e[12]),
            (a[13] = n * r + d * o + f * t + e[13]),
            (a[14] = l * r + h * o + u * t + e[14]),
            (a[15] = s * r + v * o + x * t + e[15]),
            a
        );
    }),
    (mat4.rotate = function (e, t, a, r) {
        var o = a[0],
            i = a[1];
        a = a[2];
        var n = Math.sqrt(o * o + i * i + a * a);
        if (!n) return null;
        1 != n && ((o *= n = 1 / n), (i *= n), (a *= n));
        var l = Math.sin(t),
            s = Math.cos(t),
            g = 1 - s;
        (t = e[0]), (n = e[1]);
        var d = e[2],
            h = e[3],
            v = e[4],
            c = e[5],
            f = e[6],
            u = e[7],
            x = e[8],
            m = e[9],
            y = e[10],
            p = e[11],
            M = o * o * g + s,
            b = i * o * g + a * l,
            T = a * o * g - i * l,
            w = o * i * g - a * l,
            E = i * i * g + s,
            R = a * i * g + o * l,
            S = o * a * g + i * l;
        return (
            (o = i * a * g - o * l),
            (i = a * a * g + s),
            r
                ? e != r &&
                ((r[12] = e[12]),
                    (r[13] = e[13]),
                    (r[14] = e[14]),
                    (r[15] = e[15]))
                : (r = e),
            (r[0] = t * M + v * b + x * T),
            (r[1] = n * M + c * b + m * T),
            (r[2] = d * M + f * b + y * T),
            (r[3] = h * M + u * b + p * T),
            (r[4] = t * w + v * E + x * R),
            (r[5] = n * w + c * E + m * R),
            (r[6] = d * w + f * E + y * R),
            (r[7] = h * w + u * E + p * R),
            (r[8] = t * S + v * o + x * i),
            (r[9] = n * S + c * o + m * i),
            (r[10] = d * S + f * o + y * i),
            (r[11] = h * S + u * o + p * i),
            r
        );
    }),
    (mat4.frustum = function (e, t, a, r, o, i, n) {
        n || (n = mat4.create());
        var l = t - e,
            s = r - a,
            g = i - o;
        return (
            (n[0] = (2 * o) / l),
            (n[1] = 0),
            (n[2] = 0),
            (n[3] = 0),
            (n[4] = 0),
            (n[5] = (2 * o) / s),
            (n[6] = 0),
            (n[7] = 0),
            (n[8] = (t + e) / l),
            (n[9] = (r + a) / s),
            (n[10] = -(i + o) / g),
            (n[11] = -1),
            (n[12] = 0),
            (n[13] = 0),
            (n[14] = (-i * o * 2) / g),
            (n[15] = 0),
            n
        );
    }),
    (mat4.perspective = function (e, t, a, r, o) {
        return (
            (e = a * Math.tan((e * Math.PI) / 360)),
            (t *= e),
            mat4.frustum(-t, t, -e, e, a, r, o)
        );
    });
var sound = 1,
    font = [];
(font[0] = "01110100011001110101110011000101110"),
    (font[1] = "00100011000010000100001000010001110"),
    (font[2] = "01110100010000100110010001000011111"),
    (font[3] = "01110100010000100110000011000101110"),
    (font[4] = "00010001100101010010111110001000010"),
    (font[5] = "11111100001111000001000011000101110"),
    (font[6] = "00110010001000011110100011000101110"),
    (font[7] = "11111000010001000100010000100001000"),
    (font[8] = "01110100011000101110100011000101110"),
    (font[9] = "01110100011000101111000010001001100"),
    (font.A = "00100010101000110001111111000110001"),
    (font.B = "11110010010100101110010010100111110"),
    (font.C = "01110100011000010000100001000101110"),
    (font.D = "11110010010100101001010010100111110"),
    (font.E = "11111100001000011110100001000011111"),
    (font.F = "11111100001000011110100001000010000"),
    (font.G = "01110100011000010011100011000101111"),
    (font.H = "10001100011000111111100011000110001"),
    (font.I = "01110001000010000100001000010001110"),
    (font.J = "00111000100010000100001001001001100"),
    (font.K = "10001100101010011000101001001010001"),
    (font.L = "10000100001000010000100001000011111"),
    (font.M = "10001110111010110101100011000110001"),
    (font.N = "10001100011100110101100111000110001"),
    (font.O = "01110100011000110001100011000101110"),
    (font.P = "11110100011000111110100001000010000"),
    (font.Q = "01110100011000110001101011001001101"),
    (font.R = "11110100011000111110101001001010001"),
    (font.S = "01110100011000001110000011000101110"),
    (font.T = "11111001000010000100001000010000100"),
    (font.U = "10001100011000110001100011000101110"),
    (font.V = "10001100011000110001100010101000100"),
    (font.W = "10001100011000110101101011010101010"),
    (font.X = "10001100010101000100010101000110001"),
    (font.Y = "10001100011000101010001000010000100"),
    (font.Z = "11111000010001000100010001000011111"),
    (font["-"] = "00000000000000011111000000000000000"),
    (font["."] = "00000000000000000000000000011000110"),
    (font[","] = "00000000000000000000000110000100010"),
    (font["!"] = "00100001000010000100001000000000100"),
    (font["("] = "00010001000100001000010000010000010"),
    (font[")"] = "00100000100000100001000010001000100");
var speedZ = (frame = totalMove = 0),
    gl,
    shaderProgram,
    shaderProgramLava,
    ctx,
    mur,
    red,
    portal,
    textureDoor,
    textureKey,
    moveF = (moveB = moveL = moveR = !1),
    UVW = [],
    mvMatrix = mat4.create(),
    pMatrix = mat4.create(),
    lights = new Float32Array([0, 0, 0, 0, 5, -5, 2, 2]),
    lightsDisplayed = [],
    nbMoves = (nbMovesAtStart = 0),
    tilesColors = { length: 0 },
    cubeVertexIndexBuffer,
    sphereVertexIndexBuffer,
    coordBuffer = [],
    UVWBuffer = [],
    players = [],
    selectedPlayer = 0,
    vitesseRotation = 10,
    canvas2,
    canvasHUD,
    GAME,
    camera,
    triggers,
    level,
    levels,
    fov = 45,
    gameLevel = 1,
    levelDrawing = !1,
    levelExplode = !1,
    zoomOn = !1;
(getP = function (e, t, a) {
    return (
        (e /= 2),
        (t /= 2),
        [
            -e,
            -t,
            2 * a,
            e,
            -t,
            2 * a,
            e,
            t,
            2 * a,
            -e,
            t,
            2 * a,
            -e,
            -t,
            0,
            -e,
            t,
            0,
            e,
            t,
            0,
            e,
            -t,
            0,
            -e,
            t,
            0,
            -e,
            t,
            2 * a,
            e,
            t,
            2 * a,
            e,
            t,
            0,
            -e,
            -t,
            0,
            e,
            -t,
            0,
            e,
            -t,
            2 * a,
            -e,
            -t,
            2 * a,
            e,
            -t,
            0,
            e,
            t,
            0,
            e,
            t,
            2 * a,
            e,
            -t,
            2 * a,
            -e,
            -t,
            0,
            -e,
            -t,
            2 * a,
            -e,
            t,
            2 * a,
            -e,
            t,
            0,
        ]
    );
}),
    (getCube = function (e) {
        return getP(2, 2, e);
    }),
    (getUVW = function (e, t) {
        if (UVW[e] && UVW[e][t]) return UVW[e][t];
        UVW[e] || (UVW[e] = []);
        var a = [
            0,
            0,
            1,
            0,
            1,
            1,
            0,
            1,
            0,
            1,
            0,
            0,
            1,
            0,
            1,
            1,
            0,
            t,
            0,
            0,
            1,
            0,
            1,
            t,
            0,
            0,
            1,
            0,
            1,
            t,
            0,
            t,
            0,
            0,
            1,
            0,
            1,
            t,
            0,
            t,
            1,
            0,
            1,
            t,
            0,
            t,
            0,
            0,
        ];
        return (UVW[e][t] = a), a;
    }),
    (getCoord = function (e, t, a) {
        return (
            coordBuffer[e] || (coordBuffer[e] = []),
            coordBuffer[e][t] ||
            ((coordBuffer[e][t] = gl.createBuffer()),
                gl.bindBuffer(gl.ARRAY_BUFFER, coordBuffer[e][t]),
                gl.bufferData(
                    gl.ARRAY_BUFFER,
                    new Float32Array(a),
                    gl.STATIC_DRAW
                ),
                (coordBuffer[e][t].itemSize = 3),
                (coordBuffer[e][t].numItems = a.length / 3)),
            coordBuffer[e][t]
        );
    }),
    (getUVWBuffer = function (e, t) {
        if ((UVWBuffer[e] || (UVWBuffer[e] = []), !UVWBuffer[e][t])) {
            var a = new Float32Array(getUVW(e, t));
            (UVWBuffer[e][t] = gl.createBuffer()),
                gl.bindBuffer(gl.ARRAY_BUFFER, UVWBuffer[e][t]),
                gl.bufferData(gl.ARRAY_BUFFER, a, gl.STATIC_DRAW),
                (UVWBuffer[e][t].itemSize = 2),
                (UVWBuffer[e][t].numItems = a.length / 2);
        }
        return UVWBuffer[e][t];
    }),
    (drawCube = function (e) {
        var t = e.x,
            a = e.y,
            r = e.z,
            o = e.h,
            i = e.type,
            n = e.trigger,
            l = e.decal,
            s = e.rotation,
            g = e.player,
            d = e.selectedPlayer,
            h = e.triggered;
        switch (i) {
            case "trigger":
                o = 0.2;
                for (var v = getCube(o), c = 0; c < v.length; c++) v[c] /= 2;
                break;
            case "player":
                for (var v = getCube(o), c = 0; c < v.length; c += 3) v[c + 2]--;
                break;
            default:
                var v = getCube(o);
        }
        if (e.geometry)
            var v = getP(e.geometry.x, e.geometry.y, e.geometry.z);
        if (
            ((cam = {
                x: t + camera.x,
                y: a + camera.y,
                z: r + -1.2 - camera.z,
            }),
                l && ((cam.x += l.x), (cam.y += l.y), (cam.z += l.z)),
                mat4.identity(mvMatrix),
                mat4.rotate(mvMatrix, degToRad(camera.rotation.z), [1, 0, 0]),
                mat4.rotate(mvMatrix, degToRad(camera.rotation.y), [0, 1, 0]),
                mat4.rotate(mvMatrix, degToRad(-90), [1, 0, 0]),
                mat4.translate(mvMatrix, [cam.x, cam.y, cam.z]),
                "ball" == i &&
                (mat4.rotate(mvMatrix, -Math.atan(cam.x / cam.y), [0, 0, 1]),
                    mat4.rotate(
                        mvMatrix,
                        Math.atan((a - cam.y) / (cam.z - r)),
                        [1, 0, 0]
                    ),
                    mat4.translate(mvMatrix, [
                        0,
                        0.5,
                        Math.sin(frame / 50) / 4 + 0.7,
                    ]),
                    (lights[0] = t),
                    (lights[1] = a),
                    (lights[2] = r + l.z)),
                "player" === i)
        )
            switch (
            (mat4.translate(mvMatrix, [0, 0, 1]),
                g.inMoveY > 0
                    ? (g.rotation.x += degToRad(90 / vitesseRotation))
                    : g.inMoveY < 0 &&
                    (g.rotation.x -= degToRad(90 / vitesseRotation)),
                g.inMoveX > 0
                    ? (g.rotation.y += degToRad(90 / vitesseRotation))
                    : g.inMoveX < 0 &&
                    (g.rotation.y -= degToRad(90 / vitesseRotation)),
                mat4.rotate(mvMatrix, g.rotation.x, [1, 0, 0]),
                g.rotation.xD)
            ) {
                case 0:
                    mat4.rotate(mvMatrix, g.rotation.y, [0, 1, 0]);
                    break;
                case 1:
                    mat4.rotate(mvMatrix, -g.rotation.y, [0, 0, 1]);
                    break;
                case 2:
                    mat4.rotate(mvMatrix, -g.rotation.y, [0, 1, 0]);
                    break;
                case 3:
                    mat4.rotate(mvMatrix, g.rotation.y, [0, 0, 1]);
            }
        if (
            (s &&
                (mat4.rotate(mvMatrix, s.x, [1, 0, 0]),
                    mat4.rotate(mvMatrix, s.y, [0, 1, 0]),
                    mat4.rotate(mvMatrix, s.z, [0, 0, 1])),
                (f = "ball" == i ? shaderProgramLava : shaderProgram),
                e.geometry)
        )
            var f = shaderProgramLava;
        gl.useProgram(f), gl.uniform3f(f.cp, t, a, r);
        var u = getUVWBuffer(i, o);
        gl.bindBuffer(gl.ARRAY_BUFFER, u),
            gl.vertexAttribPointer(
                f.textureCoordAttribute,
                u.itemSize,
                gl.FLOAT,
                !1,
                0,
                0
            ),
            (u = getCoord(i, o, v)),
            gl.bindBuffer(gl.ARRAY_BUFFER, u),
            gl.vertexAttribPointer(
                f.vertexPositionAttribute,
                u.itemSize,
                gl.FLOAT,
                !1,
                0,
                0
            ),
            lightsDisplayed.length && gl.uniform4fv(f.lights, lightsDisplayed),
            gl.uniform1i(f.nbLights, lightsDisplayed.length / 4),
            gl.uniform3f(f.ac, 0.1, 0.1, 0.1),
            gl.uniform2f(f.res, 1920, 1e3),
            gl.uniform1i(f.samplerUniform, 0),
            gl.uniform1f(f.it, frame),
            gl.uniformMatrix4fv(f.pMatrixUniform, !1, pMatrix),
            gl.uniformMatrix4fv(f.mvMatrixUniform, !1, mvMatrix),
            gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, cubeVertexIndexBuffer),
            gl.activeTexture(gl.TEXTURE0),
            gl.uniform1i(f.isPlayer, 0),
            gl.uniform1i(f.cubeFace, 1),
            gl.uniform1i(f.isCurrentPlayer, 0),
            "ball" == i
                ? (gl.bindTexture(gl.TEXTURE_2D, sphereTexture),
                    gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_SHORT, 0))
                : "block" == i || "block2" == i
                    ? ("block2" == i
                        ? gl.bindTexture(gl.TEXTURE_2D, tilesColors[22])
                        : gl.bindTexture(gl.TEXTURE_2D, crate),
                        gl.uniform1i(f.isCurrentPlayer, "block2" == i ? 1 : 0),
                        gl.uniform1i(f.cubeFace, 1),
                        gl.drawElements(gl.TRIANGLES, 36, gl.UNSIGNED_SHORT, 0),
                        gl.uniform1i(f.cubeFace, 5),
                        gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_SHORT, 36),
                        gl.uniform1i(f.cubeFace, 6),
                        gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_SHORT, 48),
                        gl.uniform1i(f.isCurrentPlayer, 0))
                    : "player" == i
                        ? (gl.uniform1i(f.isPlayer, 1),
                            gl.uniform1i(f.isCurrentPlayer, d ? 1 : 0),
                            gl.uniform1i(f.cubeFace, 1),
                            gl.drawElements(gl.TRIANGLES, 36, gl.UNSIGNED_SHORT, 0),
                            gl.uniform1i(f.cubeFace, 5),
                            gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_SHORT, 36),
                            gl.uniform1i(f.cubeFace, 6),
                            gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_SHORT, 48))
                        : ("trigger" == i
                            ? gl.bindTexture(gl.TEXTURE_2D, n.color)
                            : gl.bindTexture(
                                gl.TEXTURE_2D,
                                h
                                    ? tilesColors[21]
                                    : tilesColors[(t / 2 + (-a / 2) * 10) % 21]
                            ),
                            gl.uniform1i(f.cubeFace, 0),
                            gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_SHORT, 0),
                            "normal2" != i && gl.bindTexture(gl.TEXTURE_2D, mur),
                            gl.drawElements(gl.TRIANGLES, 30, gl.UNSIGNED_SHORT, 12),
                            gl.uniform1i(f.cubeFace, 5),
                            gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_SHORT, 36),
                            gl.uniform1i(f.cubeFace, 6),
                            gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_SHORT, 48));
    }),
    (move = function (e, t, a) {
        if (
            0 == a.inMoveX &&
            0 == a.inMoveY &&
            0 == a.inMoveZ &&
            a.haveControl
        ) {
            var r = level[a.tile.x][a.tile.y];
            if (!level[a.tile.x + e] || !level[a.tile.x + e][a.tile.y + t])
                return !1;
            for (
                var o = level[a.tile.x + e][a.tile.y + t],
                i = !1,
                n = 0,
                l = 2 * o.h,
                s = 0;
                s < players.length;
                s++
            )
                players[s].tile.x == a.tile.x + e &&
                    players[s].tile.y == a.tile.y + t &&
                    l++;
            if (l > a.z) n = 0;
            else {
                if (
                    r.p.length > 1 &&
                    r.p[r.p.length - 1].z > players[selectedPlayer].z
                )
                    return 0;
                if (((l += 2 * o.o.length), l - a.z > 2)) n = 0;
                else if (l > a.z) {
                    if (
                        (l == a.z + 2 &&
                            2 == o.o[0].type &&
                            1 == o.o.length &&
                            (n = 1),
                            !n)
                    ) {
                        if (
                            !level[a.tile.x + e + e] ||
                            !level[a.tile.x + e + e][a.tile.y + t + t]
                        )
                            return !1;
                        var i = level[a.tile.x + e + e][a.tile.y + t + t];
                        2 * i.h + 2 * i.o.length > a.z
                            ? (n = 0)
                            : ((n = 1),
                                i.o.push(o.o[o.o.length - 1]),
                                o.o.pop(),
                                (i.o[i.o.length - 1].inMoveX = e * vitesseRotation),
                                (i.o[i.o.length - 1].inMoveY = t * vitesseRotation));
                    }
                } else n = 1;
            }
            return (
                n &&
                (level[a.tile.x][a.tile.y].p.pop(),
                    (a.inMoveX = e * vitesseRotation + (e ? (e > 0 ? 1 : -1) : 0)),
                    (a.inMoveY = t * vitesseRotation + (t ? (t > 0 ? 1 : -1) : 0)),
                    (a.tile.x += e),
                    (a.tile.y += t),
                    level[a.tile.x][a.tile.y].p.push(a)),
                n && i && i.t && actionTrigger(i.t, !0),
                n && r.t && !r.o.length && actionTrigger(r.t, !1),
                n && o.t && !o.o.length && actionTrigger(o.t, !0),
                (nbMoves += n),
                n &&
                playSound([
                    0,
                    ,
                    0.047,
                    0.5711,
                    0.1329,
                    0.8391,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    1,
                    ,
                    ,
                    ,
                    ,
                    0.5,
                ]),
                n
            );
        }
    }),
    (actionTrigger = function (e, t) {
        if (e.state != t)
            switch (((e.state = t), e.action && e.action(), e.type)) {
                case 1:
                    if (!t) return;
                case 2:
                    for (var a = 0; a < e.on.length; a++) {
                        var r = e.on[a];
                        (level[r[0]][r[1]].nb += t ? 1 : -1),
                            (t === !1 && level[r[0]][r[1]].nb > 0) ||
                            switchTileHeight(r[0], r[1], r[2], r[3], t);
                    }
                    break;
                case 3:
                    for (var a = 0; a < e.on.length; a++) {
                        var r = e.on[a];
                        switchTileHeight(r[0], r[1], t ? r[2] : -r[2], null, t);
                    }
            }
    }),
    (gameOver = function () {
        initGame();
    }),
    (nextLevel = function () {
        (nbMovesAtStart = nbMoves),
            (levelExplode = !1),
            18 == ++gameLevel
                ? (cancelAnimationFrame(tick), drawHUDEnd())
                : initGame();
    }),
    (explodeLevel = function () {
        (players = []),
            (vitesseRotation = 10),
            (levelExplode = !0),
            (levelExplodeSince = 200);
        for (var e = levels[gameLevel], t = 0; t < e.width; t++)
            for (var a = 0; a < e.height; a++)
                (level[t][a].speedZ = 3 * Math.random()),
                    (level[t][a].o = []),
                    (f = t > e.width / 2 ? 1 : t < e.width / 2 ? -1 : 0),
                    (level[t][a].speedX = Math.random() * f),
                    (f = a > e.height / 2 ? -1 : a < e.height / 2 ? 1 : 0),
                    (level[t][a].speedY = Math.random() * f),
                    (level[t][a].decalX = 0),
                    (level[t][a].decalY = 0),
                    (level[t][a].rotation = { x: 0, y: 0, z: 0 }),
                    (level[t][a].rotationSpeed = {
                        x: 0.1 * Math.random(),
                        y: 0.1 * Math.random(),
                        z: 0.1 * Math.random(),
                    });
    }),
    (rafTick = null),
    (rafHUD = null),
    (waitingKeyStart = !0),
    (initGame = function () {
        (nbMoves = nbMovesAtStart),
            (camera = {
                x: -8,
                y: 16,
                z: 23,
                rotation: { x: -2, y: 0, z: 63 },
            });
        var e = levels[gameLevel];
        e.triggers.push({
            x: e.end.x,
            y: e.end.y,
            action: function () {
                explodeLevel();
            },
            type: "finish",
        }),
            (selectedPlayer = 0),
            (level = []),
            (vitesseRotation = 1),
            (levelDrawing = !0),
            (levelTmp = e.data.join(""));
        for (var t = 0; t < e.width; t++) {
            level[t] = [];
            for (var a = 0; a < e.height; a++)
                level[t][a] = {
                    h: levelTmp[t + a * e.width]
                        ? parseInt(levelTmp[t + a * e.width])
                        : !1,
                    o: [],
                    p: [],
                    t: !1,
                    z: 0,
                    inMoveZ: -Math.round(50 * Math.random()),
                    nb: 0,
                };
        }
        for (var r = 0; r < e.starts.length; r++)
            (players[r] = {
                x: 2 * e.starts[r].x,
                y: 2 * -e.starts[r].y,
                z: 22,
                rotation: { x: 0, y: 0, z: 0, xD: 0 },
                tile: { x: e.starts[r].x, y: e.starts[r].y },
                inMoveY: 0,
                inMoveX: 0,
                inMoveZ: 0,
                haveControl: !1,
            }),
                (level[e.starts[r].x][e.starts[r].y].p = [players[r]]);
        for (var r = 0; r < e.objects.length; r++)
            (t = e.objects[r][0]),
                (a = e.objects[r][1]),
                (type = e.objects[r][2] ? e.objects[r][2] : 0),
                (level[t][a].o = [{ x: t, y: a, z: level[t][a].h, type: type }]);
        for (var r = 0; r < e.triggers.length; r++)
            if (
                ((t = e.triggers[r].x),
                    (a = e.triggers[r].y),
                    (level[t][a].t = {
                        type: e.triggers[r].type,
                        on: e.triggers[r].on,
                        action: e.triggers[r].action,
                        color: 2 == e.triggers[r].type ? red : blue,
                    }),
                    e.triggers[r].on)
            )
                for (var o = 0; o < e.triggers[r].on.length; o++)
                    level[e.triggers[r].on[o][0]][
                        e.triggers[r].on[o][1]
                    ].triggered = !0;
        level[e.end.x][e.end.y].finish = !0;
    }),
    (addPlayerControl = function () {
        if (tutoNumber === !1)
            for (var e = 0; e < players.length; e++)
                players[e].haveControl = !0;
    });
var tutoNumber = !1,
    tutoText = !1;
(startTuto = function () {
    tuto[gameLevel]
        ? ((tutoNumber = -1), nextTuto())
        : addPlayerControl();
}),
    (nextTuto = function () {
        if ((tutoNumber++, tuto[gameLevel][tutoNumber])) {
            var e = tuto[gameLevel][tutoNumber];
            (zoomOn = e[0]), (tutoText = e[1]), setTimeout(nextTuto, e[2]);
        } else
            (zoomOn = !1),
                (tutoNumber = !1),
                (tutoText = !1),
                addPlayerControl();
    }),
    (switchTileHeight = function (e, t, a, r, o) {
        null == r &&
            ((r = o ? level[e][t].h + a : level[e][t].h),
                (a = o ? level[e][t].h : level[e][t].h + a)),
            o
                ? level[e][t].h == a &&
                ((level[e][t].inMoveZ = vitesseRotation * (a > r ? 2 : -2)),
                    playSound([
                        2, 0.1, 0.20875772806897386, 0.4, 0.3995907182891785, 0.6,
                        0.20781957085118677, -0.15, 0, 0, 0, 0, 0, 0.8997235718602934,
                        -0.19289283657523948, 0, 0, 0, 1, 0, 0, 0.0583846933342502, 0,
                        0.55,
                    ]))
                : level[e][t].h == r &&
                ((level[e][t].inMoveZ = vitesseRotation * (a > r ? -2 : 2)),
                    playSound([
                        2, 0.1, 0.20875772806897386, 0.4, 0.3995907182891785, 0.6,
                        0.20781957085118677, 0.15, 0, 0, 0, 0, 0, 0.8997235718602934,
                        -0.19289283657523948, 0, 0, 0, 1, 0, 0, 0.0583846933342502, 0,
                        0.6,
                    ])),
            (level[e][t].h = o ? r : a);
    }),
    (document.onkeydown = function (e) {
        switch (
        (waitingKeyStart &&
            ((waitingKeyStart = !1), tick(), cancelAnimationFrame(rafHUD)),
            e.keyCode)
        ) {
            case 90:
            case 87:
            case 38:
                moveB = !0;
                break;
            case 81:
            case 65:
            case 37:
                moveL = !0;
                break;
            case 40:
            case 83:
                moveF = !0;
                break;
            case 68:
            case 39:
                moveR = !0;
                break;
            case 17:
            case 32:
                break;
            // p
            case 80:
                nextLevel();
                break;
        }
    }),
    (document.onkeyup = function (e) {
        switch (e.keyCode) {
            case 90:
            case 87:
            case 38:
                moveB = !1;
                break;
            case 81:
            case 65:
            case 37:
                moveL = !1;
                break;
            case 40:
            case 83:
                moveF = !1;
                break;
            case 68:
            case 39:
                moveR = !1;
                break;
            case 82:
                gameOver();
                break;
            case 77:
                sound = 1 - sound;
                break;
            case 32:
                selectedPlayer =
                    (selectedPlayer + 1) % levels[gameLevel].starts.length;
        }
    });
    var tuto = {
        1: [
          [{ x: 2, y: 2, z: -8 }, "Đây là bạn. Di chuyển bằng các phím mũi tên", 4e3],
          [{ x: 14, y: 2, z: -8 }, "Cẩn thận với các lỗ", 3e3],
          [{ x: 22, y: 2, z: -8 }, "Đây là mục tiêu của bạn, lấy quả cầu để thắng", 4e3],
        ],
        2: [[{ x: 12, y: 2, z: 0 }, "Bạn có thể đẩy các thùng", 3e3]],
        5: [
          [
            { x: 2, y: -2, z: -6 },
            "Đây là một công tắc, nó thay đổi một cái gì đó trong sân khấu",
            3e3,
          ],
        ],
        6: [
          [
            { x: 2, y: -2, z: -6 },
            "Đây là một loại kích hoạt khác, phải giữ nó được nhấn",
            3e3,
          ],
        ],
        7: [
          [
            { x: 8, y: 6, z: 0 },
            "Đây là một người chơi khác.",
            3e3,
          ],
          [
            { x: 8, y: 6, z: 0 },
            "Chuyển đổi giữa các người chơi bằng phím cách",
            4e3,
          ],
        ],
        12: [
          [
            { x: 8, y: -2, z: -8 },
            "Khối này không thể di chuyển, nhưng có thể leo lên",
            4e3,
          ],
        ],
      };

initLevels = function () {
    levels = {
        1: {
            width: 14,
            height: 8,
            starts: [{ x: 1, y: 4 }],
            end: { x: 11, y: 4 },
            data: [
                "00000000000000",
                "33333333333300",
                "32222222222300",
                "32222220222300",
                "32222200222200",
                "32222220222300",
                "32222222222300",
                "33333333333300",
            ],
            objects: [],
            triggers: [],
        },
        2: {
            width: 9,
            height: 6,
            starts: [{ x: 1, y: 1 }],
            end: { x: 6, y: 5 },
            data: [
                "333333333",
                "322222223",
                "333333233",
                "000003230",
                "000003230",
                "000003230",
            ],
            objects: [[6, 1]],
            triggers: [],
        },
        3: {
            width: 14,
            height: 8,
            starts: [{ x: 1, y: 4 }],
            end: { x: 11, y: 4 },
            data: [
                "00000000000000",
                "33333333333300",
                "33333333333300",
                "33322222333300",
                "32223322221200",
                "33322222333300",
                "33333333333300",
                "33333333333300",
            ],
            objects: [[7, 4]],
            triggers: [],
        },
        4: {
            width: 14,
            height: 8,
            starts: [{ x: 1, y: 4 }],
            end: { x: 11, y: 4 },
            data: [
                "00000000000000",
                "33333333333300",
                "33333333333300",
                "33322222333300",
                "32222222211200",
                "33322232333300",
                "33333333333300",
                "33333333333300",
            ],
            objects: [
                [4, 4],
                [6, 4],
                [7, 4],
            ],
            triggers: [],
        },
        5: {
            width: 14,
            height: 8,
            starts: [{ x: 1, y: 4 }],
            end: { x: 11, y: 4 },
            data: [
                "00000000000000",
                "33333333333300",
                "32222233333300",
                "33333222333300",
                "32223222221200",
                "32223333233300",
                "33322222233300",
                "33333333333300",
            ],
            objects: [],
            triggers: [{ x: 1, y: 2, type: 1, on: [[10, 4, 1, 2]] }],
        },
        6: {
            width: 14,
            height: 8,
            starts: [{ x: 1, y: 4 }],
            end: { x: 11, y: 4 },
            data: [
                "00000000000000",
                "33333333333300",
                "32222222233300",
                "33323232333300",
                "32222232322200",
                "32223232333300",
                "33322233333300",
                "33333333333300",
            ],
            objects: [
                [2, 5],
                [5, 5],
            ],
            triggers: [{ x: 1, y: 2, type: 2, on: [[8, 4, 3, 2]] }],
        },
        7: {
            width: 9,
            height: 7,
            starts: [
                { x: 1, y: 1 },
                { x: 4, y: 3 },
            ],
            end: { x: 1, y: 5 },
            data: [
                "222222222",
                "211111122",
                "222222122",
                "211112122",
                "222222122",
                "211111112",
                "222222222",
            ],
            triggers: [{ x: 1, y: 3, type: 2, on: [[7, 1, 2, 1]] }],
            objects: [[6, 1]],
        },
        8: {
            width: 14,
            height: 8,
            starts: [{ x: 1, y: 3 }],
            end: { x: 9, y: 4 },
            data: [
                "00000000000000",
                "55544044433300",
                "55504043333300",
                "55504043333300",
                "54444133333300",
                "54444043333300",
                "55544043333300",
                "55554044433300",
            ],
            objects: [
                [4, 2],
                [1, 6],
            ],
            triggers: [],
        },
        9: {
            width: 14,
            height: 8,
            starts: [
                { x: 1, y: 1 },
                { x: 1, y: 3 },
            ],
            end: { x: 8, y: 2 },
            data: [
                "33333333333300",
                "33333333333300",
                "33333435533300",
                "33333333333300",
                "33333333333300",
                "00000000000000",
                "00000000000000",
                "00000000000000",
            ],
            objects: [[1, 2]],
            triggers: [{ x: 4, y: 2, type: 2, on: [[6, 2, 3, 4]] }],
        },
        10: {
            width: 14,
            height: 8,
            starts: [
                { x: 2, y: 6 },
                { x: 10, y: 2 },
            ],
            end: { x: 5, y: 4 },
            data: [
                "00000000000000",
                "33323332333000",
                "33323332333000",
                "33323332333000",
                "33323532333000",
                "33323332333000",
                "33323332333000",
                "33323332333000",
            ],
            objects: [
                [1, 4],
                [9, 4],
            ],
            triggers: [
                {
                    x: 1,
                    y: 6,
                    type: 2,
                    on: [
                        [3, 4, 2, 3],
                        [7, 4, 2, 3],
                    ],
                },
                {
                    x: 9,
                    y: 6,
                    type: 2,
                    on: [
                        [3, 4, 2, 3],
                        [7, 4, 2, 3],
                    ],
                },
                { x: 4, y: 6, type: 3, on: [[5, 3, 1]] },
                { x: 6, y: 6, type: 3, on: [[5, 3, 1]] },
            ],
        },
        11: {
            width: 17,
            height: 12,
            best: 204,
            starts: [{ x: 9, y: 6 }],
            end: { x: 16, y: 6 },
            data: [
                "41111111111133333",
                "33333333333332223",
                "22222222222222323",
                "22222333333322223",
                "33333344444322233",
                "00000345554332220",
                "55555555554332225",
                "00000055554322220",
                "33333344444323233",
                "32222333333322223",
                "32322222222222223",
                "33333333333333333",
            ],
            objects: [
                [9, 5],
                [9, 6],
                [9, 7],
            ],
            triggers: [
                { x: 15, y: 10, type: 3, on: [[16, 6, -1]] },
                { x: 15, y: 9, type: 3, on: [[16, 6, -1]] },
                { x: 14, y: 9, type: 3, on: [[16, 6, -1]] },
            ],
        },
        12: {
            width: 9,
            height: 7,
            starts: [{ x: 5, y: 3 }],
            end: { x: 7, y: 3 },
            data: [
                "111111111",
                "111111112",
                "111111012",
                "111111020",
                "111111012",
                "111111112",
                "111111111",
            ],
            objects: [
                [4, 1, 2],
                [1, 2],
                [1, 3],
                [1, 4],
                [4, 5, 2],
            ],
            triggers: [
                { x: 5, y: 5, type: 2, on: [[5, 5, 1, 2]] },
                { x: 5, y: 1, type: 2, on: [[5, 1, 1, 2]] },
            ],
        },
        13: {
            width: 8,
            height: 7,
            starts: [{ x: 3, y: 4 }],
            end: { x: 7, y: 2 },
            data: [
                "12222200",
                "22221100",
                "21111102",
                "12222101",
                "21111101",
                "22222122",
                "12222222",
            ],
            objects: [
                [2, 2],
                [2, 4],
            ],
            triggers: [
                { x: 5, y: 5, type: 2, on: [[5, 5, 1, 2]] },
                { x: 4, y: 1, type: 2, on: [[4, 1, 1, 2]] },
                { x: 1, y: 4, type: 2, on: [[1, 4, 1, 2]] },
            ],
        },
        14: {
            width: 16,
            height: 7,
            starts: [{ x: 1, y: 3 }],
            end: { x: 13, y: 3 },
            data: [
                "022222220000200",
                "0021111122202220",
                "0221222111222222",
                "0211111111222212",
                "0211121112222222",
                "0221121112002220",
                "0022222222000200",
            ],
            objects: [
                [2, 2],
                [4, 3],
                [7, 3],
                [6, 4],
            ],
            triggers: [
                { x: 2, y: 5, type: 2, on: [[9, 3, 2, 1]] },
                { x: 3, y: 5, type: 2, on: [[10, 3, 2, 1]] },
                { x: 2, y: 4, type: 2, on: [[11, 3, 2, 1]] },
                { x: 3, y: 4, type: 2, on: [[12, 3, 2, 1]] },
            ],
        },
        15: {
            width: 15,
            height: 15,
            starts: [{ x: 0, y: 3 }],
            end: { x: 7, y: 10 },
            data: [
                "222222000000000",
                "222222222022230",
                "332333222322230",
                "222222222022230",
                "333333222000100",
                "222222223000200",
                "333332223000200",
                "000000000002200",
                "000000333302200",
                "000000322333230",
                "000000322222230",
                "000000322333330",
                "000000333300000",
                "000000000000000",
                "000000000000000",
            ],
            objects: [
                [2, 2, 2],
                [5, 3, 2],
                [6, 3],
                [7, 3],
                [12, 6],
            ],
            triggers: [
                { x: 2, y: 5, type: 2, on: [[2, 2, 2, 1]] },
                { x: 0, y: 2, type: 2, on: [[9, 2, 3, 2]] },
            ],
        },
        16: {
            width: 16,
            height: 16,
            starts: [{ x: 8, y: 7 }],
            end: { x: 7, y: 10 },
            data: [
                "0000000000000000",
                "0004444444000000",
                "0004323334444400",
                "0004222223333400",
                "0004222222223400",
                "0004222222223400",
                "0004222333222400",
                "0004222323323400",
                "0004222322333400",
                "0004222222444400",
                "0004444344400000",
                "0000000000000000",
                "0000000000000000",
                "0000000000000000",
                "2222222222222222",
                "2222222222222222",
            ],
            objects: [
                [5, 3, 2],
                [5, 4],
                [6, 4],
                [7, 3],
                [8, 4],
            ],
            triggers: [],
        },
        17: {
            width: 27,
            height: 12,
            starts: [
                { x: 11, y: 11 },
                { x: 19, y: 10 },
                { x: 20, y: 10 },
            ],
            end: { x: 11, y: 6 },
            data: [
                "111111111111111111111111111",
                "112111211122211122222111111",
                "112111211211121111211111111",
                "112111211211121111211111111",
                "112212211211121111211111111",
                "112111211222221111211111111",
                "112111211211121111211111111",
                "112111211211121122222111111",
                "111111111111111111111111111",
                "111111111111111111111111111",
                "111111111111111111111111111",
                "555555555555555555555555555",
            ],
            objects: [[4, 4, 2]],
            triggers: [
                // { x: 1, y: 5, type: 2, on: [[4, 3, 1, 3]] },
                // { x: 4, y: 2, type: 2, on: [[4, 2, 1, 3]] },
            ],
        },
    };
};