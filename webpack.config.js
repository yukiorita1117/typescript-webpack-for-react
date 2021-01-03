const path = require("path");

// webpackへの指示内容をまとめた設定ファイル
// // 無名の連想配列に設定情報を書き連ね、エクスポートしている。
module.exports = {
  // jsファイルに何か適当な変更を加えてみると、速やかにバンドルが実行されます。2回目以降は差分更新なので、毎回コマンド実行した場合よりも高速。
  watch: true,
  watchOptions: {
    // 編集予定の無いファイルは見に行くと効率悪いのでignoreします。
    ignored: /node_modules/,
  },
  // バンドルする時のモードを決めれる。
  // モード値を production に設定すると最適化された状態で、JSファイルが出力される。デバッグしやすい状態にバンドルする。
  // モード値を development に設定するとソースマップ有効でJSファイルが出力される。本番用なのでなるべくファイルサイズを小さくする。
  mode: "development",

  // ローカル開発用環境を立ち上げる
  devServer: {
    contentBase: "dist",
    // ブラウザが自動的に localhost を開く様にする
    open: true,
  },

  // webpackがビルドする際に開始点(エントリーポイント)となるJSファイルを設定
  entry: "./src/index.tsx",

  // bundle後のファイルをwebpackがどこにどのような名前で出力すればいいのかを指定できる
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        // プロパティに 拡張子を指定。Loaderがどのような種類のファイルを処理するべきなのか特定する。正規表現で拡張子を指定します。
        // .ts もしくは .tsxにする。
        test: /\.tsx?$/,
        // プロパティに　loaderを指定。TypeScript をコンパイルする
        use: "ts-loader",
      },
    ],
  },
  // 以下を定義しないと import 文で拡張子を書く必要が生まれる。
  // フロントエンドの開発では拡張子を省略することが多いので、記載したほうがトラブルに巻き込まれにくい。
  resolve: {
    // 拡張子を配列で指定
    extensions: [".ts", ".tsx", ".js", ".json"],
  },
  // plugins: {},
};
