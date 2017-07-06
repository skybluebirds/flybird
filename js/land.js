// 绘制陆地的面向对象封装
function Land(option) {
    this.ctx = option.ctx;
    this.landImg = option.landImg;
    this.x = option.x;
    this.y = option.y;

    this.width = option.landImg.width;
    this.speed = 2;
}
Land.prototype = {
    constructor: Land,
    drawLand: function () {
        this.x -= this.speed;
        if (this.x < -this.width) {
            // 陆地的宽度的3倍才能达到背景的宽度，但是为了避免出现断层的现象需要加多一个倍率即4倍宽度
            this.x += 4 * this.width;
        }
        this.ctx.drawImage(this.landImg, this.x, this.y);
    }
}