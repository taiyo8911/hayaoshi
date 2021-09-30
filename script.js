// テーブルをシャッフルする
function shuffleTable() {
    let n1 = document.getElementById("table").getElementsByTagName("td");
    let n2 = [];

    for (let i = 0; i < n1.length; i++) {
        n2.push(n1[i].cloneNode(true));
    };

    for (let i = n2.length - 1; i > 1; i--) {
        let j = parseInt(Math.random() * (i + 1));
        let k = n2[i];
        n2[i] = n2[j];
        n2[j] = k;
    };

    for (let i = n1.length - 1; i >= 0; i--) {
        let p = n1[i].parentNode;
        p.insertBefore(n2[i], n1[i]);
        p.removeChild(n1[i + 1]);
    };
}


// カウントアップタイマー
let startTime = Date.now();
let timer_id;

function countUp() {
    const d = new Date(Date.now() - startTime);
    const s = String(d.getSeconds()).padStart(2, "0");
    const ms = String(d.getMilliseconds()).padStart(3, "0");
    timer.textContent = `${s}:${ms}`;

    timer_id = setTimeout(() => {
        countUp();
    }, 10);


    if (correctAns == 26) {
        clearTimeout(timer_id);
    }

}


// 正解判定
let correctAns = 1;

function get() {
    //クリックした要素の文字を取得
    let myClick = event.target.innerText;

    if (correctAns <= 25) {
        //押した番号が正しいか判定する
        if (myClick == correctAns) {
            event.target.style.fontWeight = "bold"; //正しければ太文字にする
            correctAns++; //判定用の数値に1を加算する
            get(); //関数getを繰り返す
        }
    }

    else {
        // 終了時の処理
        timerAnimation();

    }
}

// 終了時のタイマーアニメーション
function timerAnimation() {
    let timer = document.getElementById("timer");
    timer.classList.add("animation");
}