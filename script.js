//テーブルをシャッフルする
function shuffleTable() {
    var n1 = document.getElementById("table").getElementsByTagName("td");
    var n2 = [];

    for (var i = 0; i < n1.length; i++) {
        n2.push(n1[i].cloneNode(true));
    };

    for (var i = n2.length - 1; i > 1; i--) {
        var j = parseInt(Math.random() * (i + 1));
        var k = n2[i];
        n2[i] = n2[j];
        n2[j] = k;
    };

    for (var i = n1.length - 1; i >= 0; i--) {
        var p = n1[i].parentNode;
        p.insertBefore(n2[i], n1[i]);
        p.removeChild(n1[i + 1]);
    };
}


// 終了時にアニメーションを起動
function animation() {
    let timer = document.getElementById("timer");
    timer.classList.add("animation");
}




//押した番号が順番通りかどうか判定するための数値を定義
var count = 1;

function get() {
    //クリックした要素の文字を取得
    let myClick = event.target.innerText;

    if (count <= 25) {
        //押した番号が正しいか判定する
        if (myClick == count) {
            event.target.style.fontWeight = "bold"; //正しければ太文字にする
            count++; //判定用の数値に1を加算する
            get(); //関数getを繰り返す
        }
    }

    else {
        // タイマーを点滅させる
        animation();


    }
}

let startTime = Date.now();
let timer_id;

//countUp()関数の中身
function countUp() {
    const d = new Date(Date.now() - startTime);
    const s = String(d.getSeconds()).padStart(2, "0");
    const ms = String(d.getMilliseconds()).padStart(3, "0");
    timer.textContent = `${s}:${ms}`;

    timer_id = setTimeout(() => {
        countUp();
    }, 10);


    if (count == 26) {
        clearTimeout(timer_id);
    }

}