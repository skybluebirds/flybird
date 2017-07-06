// 小鸟面向对象的封装
        function Bird(option) {
            this.ctx = option.ctx;
            this.birdImg = option.birdImg;
            this.canvasX = option.canvasX;
            this.canvasY = option.canvasY;

            this.birdW = option.birdImg.width / 3;
            this.birdH = option.birdImg.height;
            this.index = 0;
            this.birdX = 0;
            this.birdY = 0;
            // 加速度
            this.g = 0.0003;
            // 初速度
            this.birdSpeed = 0;
            this.step = 1;
            this.maxSpeed = 0.45;
            this.maxAngle = 45;

            this.startY = new Date();
            this.endY = new Date();
        }
        Bird.prototype = {
            constructor: Bird,
            drawBird: function () {
                this.birdX = this.birdW * this.index;

                // 小鸟转动角度: 最大的角度/最大的速度 = 当前的角度/当前的速度
                var currentAngle = this.maxAngle * this.birdSpeed / this.maxSpeed;
                if (currentAngle > 45) {
                    currentAngle = 45;
                }

                // 小鸟下落运动
                // 公式：下落的位移 = 末速度*时间 + 加速度g * 时间*时间 / 2;
                // 公式：末速度 = 初速度 + 加速度*时间；
                this.startY = new Date();
                var offsetTime = this.startY - this.endY;
                this.endY = this.startY;
                // 下落的位移
                var distanceY = this.birdSpeed * offsetTime + offsetTime * offsetTime * this.g / 2;
                this.birdSpeed = this.birdSpeed + this.g * offsetTime;

                this.canvasY += distanceY;
                this.ctx.save();
                this.ctx.translate(this.canvasX + this.birdW / 2, this.canvasY + this.birdH / 2);
                this.ctx.rotate(Math.PI / 180 * currentAngle);
                // 小鸟的原地运动
                this.ctx.drawImage(this.birdImg, this.birdX, this.birdY, this.birdW, this.birdH, -this.birdW / 2, -this.birdH / 2, this.birdW, this.birdH);
                this.ctx.restore();
                this.index++;
                if (this.index > 2) {
                    this.index = 0;
                }
            }

        }