image = new Image();
image.src = "../../assets/images/crate.png";

class Create {
    constructor() {
        this.canvas = null;
        this.context = null;
        this.reset();
        if (localStorage.getItem("test") != null) {
            this.data = JSON.parse(localStorage.getItem("test"));
            this.width = this.data.width;
            this.height = this.data.height;
        } else {
            this.reset();
        }
        this.init();
        this.listenMouse();
        this.listenKeyboard();
    }

    save() {
        this.data.width = this.data.data[0].length;
        this.data.height = this.data.data.length;
        localStorage.setItem("test", JSON.stringify(this.data));
    }

    saveFile() {
        let atributes = ["starts", "end", "data", "objects", "triggers", "width", "height", "x", "y"];
        let jsonData = JSON.stringify(this.data, null, 2);
        atributes.forEach(atr => {
            jsonData = jsonData.replace(`"${atr}"`, atr);
        });
        jsonData = "var indexLevel = 100;\nlevels[indexLevel] = " + jsonData;

        const blob = new Blob([jsonData], { type: "application/json" });
        const url = URL.createObjectURL(blob);

        const a = document.createElement("a");
        a.href = url;
        a.download = "data.txt";
        a.style.display = "none";
        document.body.appendChild(a);
        a.click();

        // Xóa liên kết tạm thời
        document.body.removeChild(a);
        URL.revokeObjectURL(url);

    }

    reset() {
        this.data = {
            starts: [
                { x: 1, y: 1 },
            ],
            end: { x: 4, y: 2 },
            data: [
                "11111",
                "11111",
                "11111",
                "11111",
            ],
            objects: [
                [2, 1],
                [2, 2, 2]
            ],
            triggers: [
                // {
                //     x: 1,
                //     y: 1,
                //     type: 1,
                //     on: [
                //         [2, 3, 1, 2, 0, 1]
                //     ]
                // },
                // {
                //     x: 1,
                //     y: 2,
                //     type: 1,
                //     on: [
                //         [1, 3, 1, 2]
                //     ]
                // },

            ],
        }
        this.width = this.data.data[0].length;
        this.height = this.data.data.length;
        this.isP = false;
        this.isQ = false;
        this.isS = false;
        this.isK = false;
        this.isB = 0;
        this.vct = 1;
        this.isM = 0;
    }

    addRowBottom() {
        this.data.data.push("1".repeat(this.width));
        this.height++;
    }

    addRowTop() {
        this.data.data.unshift("1".repeat(this.width));
        this.height++;
        this.data.starts.forEach(start => {
            start.y++;
        });
        this.data.end.y++;
        this.data.objects.forEach(object => {
            object[1]++;
        });
        this.data.triggers.forEach(trigger => {
            trigger.y++;
            trigger["on"].forEach(on => {
                on[1]++;
            });
        });
    }

    addColumnRight() {
        for (let i = 0; i < this.height; i++) {
            this.data.data[i] += "1";
        }
        this.width++;
    }

    addColumnLeft() {
        for (let i = 0; i < this.height; i++) {
            this.data.data[i] = "1" + this.data.data[i];
        }
        this.width++;
        this.data.starts.forEach(start => {
            start.x++;
        });
        this.data.end.x++;
        this.data.objects.forEach(object => {
            object[0]++;
        });
        this.data.triggers.forEach(trigger => {
            trigger.x++;
            trigger["on"].forEach(on => {
                on[0]++;
            });
        });
    }

    init() {
        this.gameWidth = 0, this.gameHeight = 0;
        this.canvas = document.createElement("canvas");
        this.context = this.canvas.getContext("2d");
        document.body.appendChild(this.canvas);
        this.start();
    }

    solveMouse(x, y) {
        if (x < this.xA || x > this.xA + this.width * this.sizeBlock || y < this.yA || y > this.yA + this.height * this.sizeBlock) return;
        let row = Math.floor((y - this.yA) / this.sizeBlock);
        let col = Math.floor((x - this.xA) / this.sizeBlock);
        if (this.isP) {
            this.solveP(row, col);
            return;
        }
        if (this.isQ) {
            this.solveQ(row, col);
            return;
        }
        if (this.isS) {
            this.solveS(row, col);
            return;
        }
        if (this.isK) {
            this.solveK(row, col);
            return;
        }

        if (this.isB > 0) {
            this.solveB(row, col);
            return;
        }

        if (this.isM > 0) {
            this.solveM(row, col);
            return;
        }

        console.log(row, col);
        let value = this.data.data[row][col];
        value = Math.floor(value) + 1;
        value = value % 10;
        this.data.data[row] = this.data.data[row].substring(0, col) + value + this.data.data[row].substring(col + 1);
        this.refreshTrigger();
    }

    solveB(row, col) {
        let x = col;
        let y = row;
        if (this.isB == 1) {
            let index = -1;
            this.data.triggers.forEach((trigger, i) => {
                if (trigger.x == x && trigger.y == y) {
                    index = i;
                }
            });
            if (index != -1) {
                console.log("innn");
                this.data.triggers.splice(index, 1);
                this.isB = 0;
            } else {
                // this.data.triggers.push({ x: x, y: y, type: 1, on: [] });
                this.xTrigger = x;
                this.yTrigger = y;
                console.log(this.xTrigger, this.yTrigger);
                this.isB = 2;
            }
        } else {
            this.data.triggers.push({ x: this.xTrigger, y: this.yTrigger, type: 1, on: [[x, y, 0, 0, this.vct]] });
            this.isB = 0;
            this.refreshTrigger();
        }
    }

    solveM(row, col) {
        let x = col;
        let y = row;
        if (this.isM == 1) {
            let index = -1;
            this.data.triggers.forEach((trigger, i) => {
                if (trigger.x == x && trigger.y == y) {
                    index = i;
                }
            });
            if (index != -1) {
                console.log("innn");
                this.data.triggers.splice(index, 1);
                this.isM = 0;
            } else {
                // this.data.triggers.push({ x: x, y: y, type: 1, on: [] });
                this.xTrigger = x;
                this.yTrigger = y;
                console.log(this.xTrigger, this.yTrigger);
                this.isM = 2;
            }
        } else {
            this.data.triggers.push({ x: this.xTrigger, y: this.yTrigger, type: 2, on: [[x, y, 0, 0, this.vct]] });
            this.isM = 0;
            this.refreshTrigger();
        }
    }

    refreshTrigger() {
        this.data.triggers.forEach(trigger => {
            trigger["on"].forEach(on => {
                console.log(on[1], on[0], on);
                let value = Math.floor(this.data.data[on[1]][on[0]]);
                on[2] = value;
                on[3] = value + on[4];
            });
        });
    }

    solveP(row, col) {
        let x = col;
        let y = row;
        let index = -1;
        this.data.objects.forEach((object, i) => {
            if (object[0] == x && object[1] == y) {
                index = i;
            }
        });
        if (index != -1) {
            this.data.objects.splice(index, 1);
        } else {
            this.data.objects.push([x, y]);
        }
        this.isP = false;
    }

    solveQ(row, col) {
        let x = col;
        let y = row;
        let index = -1;
        this.data.objects.forEach((object, i) => {
            if (object[0] == x && object[1] == y) {
                index = i;
            }
        }
        );
        if (index != -1) {
            this.data.objects.splice(index, 1);
        } else {
            this.data.objects.push([x, y, 2]);
        }
        this.isQ = false;
    }

    solveS(row, col) {
        let x = col;
        let y = row;
        let index = -1;
        this.data.starts.forEach((start, i) => {
            if (start.x == x && start.y == y) {
                index = i;
            }
        });
        if (index != -1) {
            this.data.starts.splice(index, 1);
        } else {
            this.data.starts.push({ x: x, y: y });
        }
    }

    solveZ() {
        this.vct ++;
        if (this.vct > 5) {
            this.vct = -5;
        }
    }

    solveK(row, col) {
        this.data.end.x = col;
        this.data.end.y = row;
        this.isK = false;
    }

    listenKeyboard() {
        document.addEventListener("keydown", evt => {
            switch (evt.keyCode) {
                case 37: // Left
                    this.addColumnLeft();
                    break;
                case 38: // Up
                    this.addRowTop();
                    break;
                case 39: // Right
                    this.addColumnRight();
                    break;
                case 40: // Down
                    this.addRowBottom();
                    break;
                //enter
                case 13:
                    this.save();
                    console.log("enter");
                    // Mở một tab mới
                    window.open("../?level=test", "_blank");
                    console.log(JSON.parse(localStorage.getItem("test")));
                    break;
                // r
                case 82:
                    this.reset()
                    break;
                //p
                case 80:
                    this.isP = !this.isP;
                    break;
                //q
                case 81:
                    this.isQ = !this.isQ;
                    break;
                //s
                case 83:
                    this.isS = !this.isS;
                    break;
                //h
                case 72:
                    this.saveFile();
                    break;
                //k
                case 75:
                    this.isK = !this.isK;
                    break;
                //b
                case 66:
                    this.isB = (this.isB > 0) ? 0 : 1;
                    break;
                //z
                case 90:
                    this.solveZ();
                    break;
                //m
                case 77:
                    this.isM = (this.isM > 0) ? 0 : 1;
                    break;

            }
        })
    }

    listenMouse() {
        document.addEventListener("mousedown", evt => {
            var x = evt.offsetX == undefined ? evt.layerX : evt.offsetX;
            var y = evt.offsetY == undefined ? evt.layerY : evt.offsetY;
            this.solveMouse(x, y);
        })

        document.addEventListener("mousemove", evt => {
            var x = evt.offsetX == undefined ? evt.layerX : evt.offsetX;
            var y = evt.offsetY == undefined ? evt.layerY : evt.offsetY;

        })

        document.addEventListener("mouseup", evt => {
            var x = evt.offsetX == undefined ? evt.layerX : evt.offsetX;
            var y = evt.offsetY == undefined ? evt.layerY : evt.offsetY;
        })
    }



    loop(timestamp) {
        this.update();
        this.draw();
        requestAnimationFrame((timestamp) => this.loop(timestamp));
    }

    start() {
        console.log("start");
        requestAnimationFrame((timestamp) => this.loop(timestamp));
    }

    update() {
        this.render();
    }

    render() {
        if (this.canvas.width != document.documentElement.clientWidth || this.canvas.height != document.documentElement.clientHeight) {
            this.canvas.width = document.documentElement.clientWidth;
            this.canvas.height = document.documentElement.clientHeight;
            this.gameWidth = this.canvas.width;
            this.gameHeight = this.canvas.height;
        }
    }

    drawScreen() {
        this.context.fillStyle = "#03fc6f";
        this.xA = 0;
        this.yA = 0;
        this.sizeBlock = this.getSizeBlock();
        this.context.textAlign = 'center';
        for (let i = 0; i < this.height; i++) {
            for (let j = 0; j < this.width; j++) {
                this.context.fillRect(this.xA + j * this.sizeBlock + this.sizeBlock / 20, this.yA + i * this.sizeBlock + this.sizeBlock / 20, this.sizeBlock - this.sizeBlock / 10, this.sizeBlock - this.sizeBlock / 10);
            }
        }
    }

    drawText() {
        // danh sách màu đỏ đậm dần
        let colors = ["", "#f5eeed", "#f77c74", "#f77c74", "#f71607", "#f71607", "#f71607", "#f71607"]
        this.context.font = this.sizeBlock / 2 + 'px NVNPixelFJVerdana8pt';
        this.xA = 0;
        this.yA = 0;
        this.context.textAlign = 'center';
        for (let i = 0; i < this.height; i++) {
            for (let j = 0; j < this.width; j++) {
                this.context.fillStyle = colors[this.data.data[i][j]];
                this.context.fillText(this.data.data[i][j], this.xA + j * this.sizeBlock + this.sizeBlock / 2, this.yA + i * this.sizeBlock + this.sizeBlock / 1.5);
            }
        }

        let tutorial = [
            "R: Làm mới",
            "↑: Thêm hàng trên",
            "↓: Thêm hàng dưới",
            "←: Thêm cột trái",
            "→: Thêm cột phải",
            "Enter: Lưu và chơi thử",
            "Click: Thay đổi giá trị (0→9)",
            "S: Thêm điểm xuất phát",
            "P: Đặt, huỷ khối thường",
            "Q: Đặt, huỷ khối leo",
            "B: Đặt,huỷ công tắc thường",
            "M: Đặt, huỷ công tắc giữ",
            "K: Thay đổi điểm kết thúc",
            "H: Lưu file với dữ liệu và data",
        ];

        this.context.fillStyle = "white";
        this.context.textAlign = 'left';
        this.context.font = (20) + 'px NVNPixelFJVerdana8pt';

        tutorial.forEach((t, i) => {
            this.context.fillText(t.split(":")[0] + ":", this.gameWidth * 0.75 + 20, 40 + i * 30);
            this.context.fillText(t.split(":")[1], this.gameWidth * 0.75 + 80, 40 + i * 30);
        });
    }


    drawItem() {
        this.drawCircle(this.data.end.x * this.sizeBlock + this.sizeBlock / 2, this.data.end.y * this.sizeBlock + this.sizeBlock / 2, this.sizeBlock / 4);
        this.data.starts.forEach(start => {
            this.drawSquare(start.x * this.sizeBlock + this.sizeBlock / 4, start.y * this.sizeBlock + this.sizeBlock / 4, this.sizeBlock / 2, "black");
        });
        this.data.objects.forEach(object => {
            if (object.length == 2)
                this.context.drawImage(image, object[0] * this.sizeBlock + this.sizeBlock / 4, object[1] * this.sizeBlock + this.sizeBlock / 4, this.sizeBlock / 2, this.sizeBlock / 2);
            else
                this.drawSquare(object[0] * this.sizeBlock + this.sizeBlock / 4, object[1] * this.sizeBlock + this.sizeBlock / 4, this.sizeBlock / 2, "cyan");
        });
        this.data.triggers.forEach(trigger => {
            let color = (trigger.type == 1) ? "blue" : "green";
            this.drawSquare(trigger.x * this.sizeBlock + 0.6 * this.sizeBlock, trigger.y * this.sizeBlock + 0.6 * this.sizeBlock, this.sizeBlock / 3, color);
        });
    }

    drawSquare(x, y, size, color) {
        this.context.fillStyle = color;
        this.context.fillRect(x, y, size, size);
    }

    drawCircle(x, y, r) {
        this.context.fillStyle = "#cf30b9";
        this.context.beginPath();
        this.context.arc(x, y, r, 0, 2 * Math.PI);
        this.context.fill();
        this.context.stroke();
        this.context.closePath();
    }

    draw() {
        this.clearScreen();
        this.drawScreen();
        this.drawItem();
        this.drawText();
        this.drawSolid();
    }

    drawFPS() {
        this.context.textAlign = 'left';
        this.context.font = (20) + 'px NVNPixelFJVerdana8pt';
        this.context.fillStyle = "white";
        let fps = this.fps.getFPS();
        if (fps < 30)
            this.context.fillStyle = "red";
        this.context.fillText("FPS: " + fps, 50, 50);
    }

    drawSolid() {
        if (this.isP) {
            this.context.drawImage(image, this.gameWidth * 0.75 + this.gameWidth * 0.25 / 2 - this.sizeBlock / 4, this.gameHeight - this.sizeBlock, this.sizeBlock / 2, this.sizeBlock / 2);
        }
        if (this.isQ) {
            this.drawSquare(this.gameWidth * 0.75 + this.gameWidth * 0.25 / 2 - this.sizeBlock / 4, this.gameHeight - this.sizeBlock, this.sizeBlock / 2, "cyan");
        }
        if (this.isS) {
            // vẽ viền trắng
            this.drawSquare(this.gameWidth * 0.75 + this.gameWidth * 0.25 / 2 - this.sizeBlock / 4 - 5, this.gameHeight - this.sizeBlock - 5, this.sizeBlock / 2 + 10, "white");
            this.drawSquare(this.gameWidth * 0.75 + this.gameWidth * 0.25 / 2 - this.sizeBlock / 4, this.gameHeight - this.sizeBlock, this.sizeBlock / 2, "black");
        }
        if (this.isK) {
            this.drawCircle(this.gameWidth * 0.75 + this.gameWidth * 0.25 / 2, this.gameHeight - this.sizeBlock / 2, this.sizeBlock / 4);
        }

        if (this.isB > 0) {
            this.drawSquare(this.gameWidth * 0.75 + this.gameWidth * 0.25 / 2 - this.sizeBlock / 4, this.gameHeight - this.sizeBlock, this.sizeBlock / 2, "blue");
            this.context.textAlign = "center";
            this.context.fillStyle = "#ffffff";
            if (this.isB == 2) {
                this.context.fillText("Chọn vị trí ảnh hưởng", this.gameWidth * 0.75 + this.gameWidth * 0.25 / 2, this.gameHeight - 25);
            } else {
                this.context.fillText(this.vct, this.gameWidth * 0.75 + this.gameWidth * 0.25 / 2, this.gameHeight - this.sizeBlock / 1.5);
                this.context.fillText("Bấm Z để chọn độ cao", this.gameWidth * 0.75 + this.gameWidth * 0.25 / 2, this.gameHeight - 25);
            }
        }

        if (this.isM > 0) {
            this.drawSquare(this.gameWidth * 0.75 + this.gameWidth * 0.25 / 2 - this.sizeBlock / 4, this.gameHeight - this.sizeBlock, this.sizeBlock / 2, "green");
            this.context.textAlign = "center";
            this.context.fillStyle = "#ffffff";
            if (this.isM == 2) {
                this.context.fillText("Chọn vị trí ảnh hưởng", this.gameWidth * 0.75 + this.gameWidth * 0.25 / 2, this.gameHeight - 25);
            } else {
                this.context.fillText(this.vct, this.gameWidth * 0.75 + this.gameWidth * 0.25 / 2, this.gameHeight - this.sizeBlock / 1.5);
                this.context.fillText("Bấm Z để chọn độ cao", this.gameWidth * 0.75 + this.gameWidth * 0.25 / 2, this.gameHeight - 25);
            }
        }
    }

    clearScreen() {
        this.context.clearRect(0, 0, this.gameWidth, this.gameHeight);
        this.context.fillStyle = '#000000';
        this.context.fillRect(0, 0, this.gameWidth, this.gameHeight);
    }

    isMobile() {
        return this.gameWidth < this.gameHeight;
    }

    getSizeBlock() {
        let w = 0.75 * this.gameWidth;
        let h = this.gameHeight;
        let size = Math.min(w / this.width, h / this.height);
        return size;
    }
}

var g = new Create();