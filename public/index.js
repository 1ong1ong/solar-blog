(function(){
    let bp = document.createElement('script');
    let curProtocol = window.location.protocol.split(':')[0];
    if (curProtocol === 'https') {
        bp.src = 'https://zz.bdstatic.com/linksubmit/push.js';
    }
    else {
        bp.src = 'http://push.zhanzhang.baidu.com/push.js';
    }
    let s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(bp, s);
})();

(function () {
    let app = document.getElementById("app");
    app.style.display = 'none';
    //loading
    let loader = document.getElementById("appLoading"),
        bar = loader.querySelector("#percentText"),
        num = 0,
        time = 0;

    let timer = setInterval(function () {
        num = num + 1;
        time++;
        if (num > 90) {
            num = 90;
        } else {
            bar.innerHTML = num + "%";
        }
        if (time > 98) {
            clearInterval(timer);
        }
    }, 800);
})(window);