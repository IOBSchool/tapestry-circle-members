# Tapestry Circle ── メンバー専用ページ

THE THREAD修了生コミュニティ「Tapestry Circle」のメンバー専用静的ハブ。

- 公開URL: https://iobschool.github.io/tapestry-circle-members/
- 合言葉: `tapestry26`
- 方式: クライアントサイド簡易ゲート（localStorage保存・期限なし）
- 想定対象: 現在2名、これから増えるTapestry Circleメンバー

## ファイル構成
```
tapestry-circle-members/
├── index.html        # ゲート＋本体
├── style.css         # スタイル（モバイルファースト）
├── script.js         # 自動ログイン・ログアウト・リンク差し替え
├── assets/           # .icsなど（追加予定）
└── README.md
```

## 更新方法

### パスワードを変える
`index.html` の `doGateUnlock()` 内 `'tapestry26'` と、必要なら `localStorage` キー `tapestry-circle-members-auth` を変更。

### Zoom URL を入れる
`script.js` 冒頭の `ZOOM_URL` を差し替え。空のままだとボタンは「Zoom URLは準備中」表示。

### AIコーチURLを入れる
`script.js` 冒頭の `AI_COACH_URL` を差し替え。空のままだと「AIコーチは準備中」表示。

### コンテンツを編集したらキャッシュバスター更新
`index.html` の `style.css?v=1` / `script.js?v=1` の数字を1つ繰り上げる。

## デザインメモ
- ベースはTHE THREAD系の温色・余白多めトーン
- アクセントは「織り糸」の5色（ローズ/オリーブ/くすみブルー/マスタード/くすみ紫）を細い帯・SVGの結び目で散らす
- フォント: Noto Serif JP ＋ Cormorant Garamond
- スマホファースト（max-width 560px ベース）

## デプロイ
GitHub Pages（main / root）で公開。
