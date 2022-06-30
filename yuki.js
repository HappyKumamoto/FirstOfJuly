//おしいのとき雪の結晶絵文字が降るように

let yuki = document.getElementsByClassName('yuki');

//let oncli = document.createElement("script");   //onclick.jsを持ってくる
//oncli.src = "onclick.js";

//絵文字を作る関数。n は個数
function yukiMaker(n) {
    let yuki = document.createElement("div");
    yuki.className = "yuki";
    yuki.textContent = `❄️`;   //雪の結晶絵文字
    for(let i = 0; i < n; i++) {
        yukiSet(yuki);
    }
}

//絵文字のセッティングをする関数。
function yukiSet(clone) {
    let yukiClone = clone.cloneNode(true);
    let yukiStyle = yukiClone.style;

    //絵文字の位置（left）、時間をずらす（animation-delay）、サイズ（font-size）をランダムで指定
    yukiStyle.left = 100 * Math.random() + "%";
    yukiStyle.animationDelay = 12 * Math.random() + "s";
    yukiStyle.fontSize = Math.floor(50 * Math.random() + 20) + "px";
    document.body.appendChild(yukiClone);

    //一つのアニメーションが終わったら新しい絵文字を生成
    yukiClone.addEventListener("animationend", function() {
        this.parentNode.removeChild(this);
        let yuki = document.createElement("div");
        yuki.className = "yuki";
        yuki.textContent = `❄️`;   //雪の結晶絵文字
        yuki(yuki);
    }, false)
}

//絵文字を50個降らせる
yukiMaker(50)