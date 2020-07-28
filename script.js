//テーブルをシャッフルする
function shuffleTable() {
    var n1 = document.getElementById("t1").getElementsByTagName("td");
    var n2 = new Array();

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


//タイマー関係
var PassSec = -1; // 秒数カウント用変数

// 繰り返し処理の中身
function showPassage() {
    PassSec++; // カウントアップ
    var msg = PassSec + "秒"; // 表示文作成
    document.getElementById("PassageArea").innerHTML = msg; // 表示更新
}

// 繰り返し処理の開始
function startShowing() {
    PassSec = 0; // カウンタのリセット
    PassageID = setInterval('showPassage()', 1000); // タイマーをセット(1000ms間隔)
}

// 繰り返し処理の中止
function stopShowing() {
    clearInterval(PassageID);
}


//押した番号が順番通りかどうか判定するための数値を定義
var count = 1;

function get() {
    //クリックした要素の文字を取得
    var myclick = event.target.innerText;
    //文字を数値に変換
    var mystr = Number(myclick);
    if (count > 25)
        stopShowing(); //25まで押したらタイマーを止める
    else {
        //押した番号が正しいか判定する
        if (mystr == count) {
            event.target.style.fontWeight = "bold"; //正しければ太文字にする
            count++; //判定用の数値に1を加算する
            get(); //関数getを繰り返す
        }
    }
}
