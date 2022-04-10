"use strict";

// テーブルをシャッフル
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
const startTime = Date.now();
let timer_id;

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
        timerAnimation();
        stopBGM();
    }
}

// BGMを再生する
function playBGM() {
    //音声の再生
    let bgm = document.getElementById("bgm");
    bgm.volume = 0.2;
    bgm.currentTime = 1.4;
    bgm.play();
}

// BGMを停止する
function stopBGM() {
    let bgm = document.getElementById("bgm");
    bgm.muted = true;
}

// ミス時の効果音再生
function effect() {
    let effect = document.getElementById("effect");
    effect.play();
}

// 終了時のアニメーション
function timerAnimation() {
    let timer = document.getElementById("timer");
    timer.classList.add("animation");
}

// 正誤判定
let count = 1;

function get() {
    //クリックした要素を取得(番号を取得)
    let myClick = event.target.innerText;

    // countが25以下で正しい数字を押した場合
    if (count <= 25 && myClick == count) {
        // 太文字にする
        event.target.style.fontWeight = "bold";
        // カウントをインクリメント
        count++;
    }
    else if (myClick != count) {
        effect();
    }
}