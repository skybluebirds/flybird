//天空的封装对象函数
function Sky(option) {
    this.ctx = option.ctx;
    this.skyImg = option.skyImg;
    this.x = option.x;
    this.y = option.y;

    this.width = option.skyImg.width;
    this.speed = 2;
}
Sky.prototype = {
    constructor: Sky,
    drawSky: function () {
        // 天空需要向左移动，即X方向需要进行改变
        this.x -= this.speed;
        // 判断当天空的一张图片加载完成后的情况
        if (this.x < -this.width) {
            // 需要+=2倍的宽度，以便使背景之间的无缝连接
            this.x += 2 * this.width;
        }
        // 绘制天空的图片
        this.ctx.drawImage(this.skyImg, this.x, this.y);
    }
}