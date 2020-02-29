
let scroll=function(element,target) {
    clearInterval(element.timeId);
    element.timeId = setInterval(() => {
                    let step=20;
                    // 先判断是向左还是向右
                    let current=element.offsetLeft;
                    step=current<target?step:-step;
                    element.style.left = current+step + "px";
                    //判断移动是否需要结束
                    if (Math.abs(target - current) < Math.abs(step)) {
                        element.style.left = target+'px';
                        clearInterval(element.timeId);
                    }
                }, 10);
}
export default scroll