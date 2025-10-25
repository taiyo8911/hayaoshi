# 早押しアタック

1から25までの数字を順番にタップして、速さを競うWebゲームです。

## デモ

🎮 [ゲームをプレイする](https://taiyo8911.github.io/hayaoshi/)

## ゲーム説明

画面上にランダムに配置された1〜25の数字を、1から順番にクリック/タップしていくゲームです。
全ての数字を正しい順番でクリックするまでの時間を計測し、スピードを競います。

## 特徴

- 📱 レスポンシブデザイン（PC・スマートフォン対応）
- ⏱️ リアルタイムタイマー表示
- 🔊 効果音・BGM機能（選択可能）
- 🐦 Twitter共有機能
- 🎲 数字がランダムに配置される5×5グリッド

## 遊び方

1. トップページから「スタート（BGMあり）」または「スタート（BGMなし）」を選択
2. 画面に表示された1〜25の数字を、1から順番にクリック/タップ
3. 全ての数字をクリックし終わると、タイムが表示されます
4. リトライボタンで何度でも挑戦可能
5. Twitterで記録をシェアできます

## ファイル構成

```
hayaoshi/
├── index.html          # トップページ（ゲーム選択画面）
├── game.html           # ゲーム画面（BGMなし）
├── game-bgm.html       # ゲーム画面（BGMあり）
├── css/
│   ├── main.css        # メインスタイル
│   └── game.css        # ゲーム画面スタイル
├── script/
│   └── script.js       # ゲームロジック
└── audio/
    ├── effect-omanuke.mp3  # 効果音
    └── bgm-csikos.mp3      # BGM
```

## 使用技術

- HTML5
- CSS3
- JavaScript（Vanilla JS）
- Twitter Web Intents API

## クレジット

- **効果音素材**: [ポケットサウンド](https://pocket-se.info/)

## 参考サイト

開発にあたり、以下のサイトを参考にしました：

- [経過時間をリアルタイムに表示する](https://www.nishishi.com/javascript-tips/setinterval-passage.html)
- [クリックされた要素のインデックスを取得する](https://ja.stackoverflow.com/questions/51144/javascript%E3%81%A7%E3%82%AF%E3%83%AA%E3%83%83%E3%82%AF%E3%81%95%E3%82%8C%E3%81%9F%E8%A6%81%E7%B4%A0%E3%81%AEindex%E3%82%92%E5%8F%96%E5%BE%97%E3%81%97%E3%81%9F%E3%81%84)
- [一度しか押せないボタンを作る](https://www.nishishi.com/javascript-tips/button-disabled.html)
- [要素の文字列を設定・取得する](https://kita-note.com/js-edit-text)

## ライセンス

このプロジェクトはオープンソースです。

---

⚡ Let's see how fast you can click!
