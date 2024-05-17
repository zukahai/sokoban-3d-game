image = new Image();
image.src = "../../assets/images/crate.png";

class Create {
    constructor() {
        this.canvas = null;
        this.context = null;
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

    reset() {
        this.data = {
            starts: [
                { x: 0, y: 0 },
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
                //     type: 2,
                //     on: [
                //         [2, 3, 1, 2]
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
        console.log(x, y);
        let row = Math.floor((y - this.yA) / this.sizeBlock);
        let col = Math.floor((x - this.xA) / this.sizeBlock);
        console.log(row, col);
        let value = this.data.data[row][col];
        value = Math.floor(value) + 1;
        value = value % 10;
        this.data.data[row] = this.data.data[row].substring(0, col) + value + this.data.data[row].substring(col + 1);
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
        this.sizeBlock = 100;
        this.context.textAlign = 'center';
        for (let i = 0; i < this.height; i++) {
            for (let j = 0; j < this.width; j++) {
                this.context.fillRect(this.xA + j * this.sizeBlock + this.sizeBlock / 20, this.yA + i * this.sizeBlock + this.sizeBlock / 20, this.sizeBlock - this.sizeBlock / 10, this.sizeBlock - this.sizeBlock / 10);
            }
        }
    }

    drawText() {
        // danh sách màu đỏ đậm dần
        let colors = ["", "#f5eeed", "#f5b9b5", "#f77c74", "#f77c74", "#f71607", "#f71607", "#f71607", "#f71607"]
        this.context.font = (50) + 'px NVNPixelFJVerdana8pt';
        this.xA = 0;
        this.yA = 0;
        this.sizeBlock = 100;
        this.context.textAlign = 'center';
        for (let i = 0; i < this.height; i++) {
            for (let j = 0; j < this.width; j++) {
                this.context.fillStyle = colors[this.data.data[i][j]];
                this.context.fillText(this.data.data[i][j], this.xA + j * this.sizeBlock + this.sizeBlock / 2, this.yA + i * this.sizeBlock + this.sizeBlock / 2);
            }
        }
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


    clearScreen() {
        this.context.clearRect(0, 0, this.gameWidth, this.gameHeight);
        this.context.fillStyle = '#000000';
        this.context.fillRect(0, 0, this.gameWidth, this.gameHeight);
    }

    isMobile() {
        return this.gameWidth < this.gameHeight;
    }
}

var g = new Create();