// 管道的面向对象封装
function Pipe(option) {
    this.ctx = option.ctx;
    this.topImg = option.topImg;
    this.bottomImg = option.bottomImg;
    this.pipeX = option.pipeX;

    this.topY = 0;
    this.bottomY = 0;

    this.width = option.topImg.width;
    this.height = option.topImg.height;
    this.space = 150;
    this.speed = 2;

    this.getY();
}
Pipe.prototype = {
    constructor: Pipe,
    drawPipe: function () {
        this.pipeX -= this.speed;
        if (this.pipeX < -this.width * 3) {
            this.pipeX += 3 * this.width * 6;
            // 需要重新赋值，以免出现重复
            this.getY();
        }
        // 绘制顶部的管道
        this.ctx.drawImage(this.topImg, this.pipeX, this.topY, this.width, this.height);
        // 绘制路径，为了给小鸟的撞击判断
        this.ctx.rect(this.pipeX, this.topY, this.width, this.height);

        // 绘制底部的管道
        this.ctx.drawImage(this.bottomImg, this.pipeX, this.bottomY, this.width, this.height);
        // 绘制路径，为了给小鸟的撞击判断
        this.ctx.rect(this.pipeX, this.bottomY, this.width, this.height);
    },
    getY: function () {
        this.topY = -(Math.random() * 250 + 120);
        this.bottomY = this.topY + this.topImg.height + this.space;
    }
}