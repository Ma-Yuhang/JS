    // 函数封装 obj 目标对象 target 目标位置
    // 缓动动画原理：
    // 盒子当前的位置 + 变化的值     变化的值 = （目标位置-当前位置）/10
    function animate(obj, target, callback) {
        clearInterval(obj.timer);
        obj.timer = setInterval(function () {
            // 步长要写在定时器里
            // 把步长值改为整数，不要出现小数
            // var step = Math.ceil((target - obj.offsetLeft) / 10);
            var step = (target - obj.offsetLeft) / 10;
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            if (obj.offsetLeft == target) {
                clearInterval(obj.timer);
                // 回调函数写在定时器结束的后边
                if (callback) {
                    callback();
                }
            } else {
                obj.style.left = obj.offsetLeft + step + 'px';
            }
        }, 15)
    }