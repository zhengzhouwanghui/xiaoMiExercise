//把函数添加到wondow.onload
function addLoadEvent(func) {
    var oldonload = window.onload;
    if(typeof window.onload != 'function'){
        window.onload = func;
    }else {
        window.onload = function () {
            oldonload();
            func();
        }
    }
}
function addClass(element,value) {
    if(!element.className){element.className = value;}
    else{
        newClassName = element.className;
        newClassName += ' ';
        newClassName += value;
        element.className = newClassName;
    }
}
function adddClass() {
    var sections = document.getElementsByTagName('section');
    for(var i = 0;i < sections.length;i++){
        if(sections[i].getAttribute('id') != id){
            sections[i].style.display = 'none';}
        else{sections[i].style.display = 'block';}
    }
}

function addLiClass() {
    var seckillLists = document.getElementsByClassName("seckill-banner")[0].getElementsByTagName('li');

    var seckillUls = document.querySelector('.seckill-con').querySelectorAll('ul');
    console.log(seckillUls);

    function showList() {
        /*for(var i = 0;i < seckillLists.length;i++) {
            if(!seckillLists[i].getAttribute('class')){continue;}
            seckillLists[i].removeAttribute('class');
        }
        this.setAttribute('class','active');*/
        for(var i = 0;i < seckillLists.length;i++) {
            if (seckillLists[i] === this) {
                seckillLists[i].className = 'active';
                seckillUls[i].className = 'active';
            } else {
                seckillLists[i].className = '';
                seckillUls[i].className = '';
            }
        }
    }
    for(var i = 0;i < seckillLists.length;i++){
        seckillLists[i].onclick = showList;

    }
}
//抢购时间栏设置滚动260距离固定
var seckillBanner = document.querySelector('.seckill-banner');
window.onscroll = function (ev) {
    //var scrollTop = document.documentElement.scrollTop;
    var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
    console.log(scrollTop);
    if(scrollTop >= 260){
        seckillBanner.className = 'seckill-banner seckillFixed'
    }else{seckillBanner.className = 'seckill-banner'
    }
}
//倒计时
    var maxtime = 60 * 60; //一个小时，按秒计算，自己调整!
    function count() {
        if (maxtime >= 0) {
            minutes = Math.floor(maxtime / 60);
            seconds = Math.floor(maxtime % 60);
            msg = "抢购中" + "<br>" + "距结束 " + "00:" +minutes + ":" + seconds;
            document.all["timer"].innerHTML = msg;
            if (maxtime == 5 * 60)alert("还剩5分钟");
            --maxtime;
            } else{
            clearInterval(timer);
            alert("抢购已结束!");
        }
    }
    timer = setInterval("count()", 1000);

addLoadEvent(addLiClass);
