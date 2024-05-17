class Create {
    constructor() {
        this.canvas = null;
        this.context = null;
        this.reset();
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
            end: { x: 4, y: 1 },
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
                { 
                    x: 1, 
                    y: 1, 
                    type: 2, 
                    on: [
                        [2, 3, 1, 2]
                    ] 
                },
                {
                    x: 1,
                    y: 2,
                    type: 1,
                    on: [
                        [1, 3, 1, 2]
                    ]
                },
                
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

    draw() {
        this.clearScreen();
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

    drawText() {
        this.context.font = (40) + 'px NVNPixelFJVerdana8pt';
        this.context.textAlign = 'left';
        this.context.fillStyle = "white";
        this.context.fillText("Create", 10, this.gameHeight / 2);
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