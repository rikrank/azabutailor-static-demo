# 麻布テイラー静的環境構築テンプレート

## 推奨環境

- [Node v16+ (16.17.0)](https://nodejs.org/en/)

## 依存環境

- [Yarn](https://yarnpkg.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Sass](https://sass-lang.com/)
- [PostCSS](https://postcss.org/)
- [imagemin](https://github.com/imagemin/imagemin#readme)
- [svg-sprite](https://github.com/svg-sprite/svg-sprite#readme)
- [ESLint](https://eslint.org/)
- [Stylelint](https://stylelint.io/)
- [HTML-vallidate](https://html-validate.org/)
- [Prettier](https://prettier.io/)
- [browser-sync](https://browsersync.io/)

## 導入方法


```bash
yarn install
```
## 特徴
* Gulp非依存
* 画像圧縮 / Webp生成対応
* ssi出力対応
## コマンド一覧

開発モード

```bash
yarn start
```

本番ビルド

```bash
yarn release
```

## 備考

### Pug
- 新規でページを作成する場合は、**src直下の階層**にて新たにディレクトリを作成してください。
  - その際、
    - **作成したページ内にページ名の定義**
    - **_pagedata.pug にてmeta情報の追加**
  をおこなってください。
  ▶︎ 上記が不足しているとコンパイルが効かなくなります。

  ex：
  ```
  // example.pug

  block page
  - var page = "example";
  ...

  ------------------------ 

  // _pagedata.pug

  "example": {
      "title": "Example Page",
      "backTitle": backTitle,
      "description": "",
      "keywords": "",
      "url": "",
      "ogpType": "website",
      "ogpImage": "/assets/img/ogp.jpg",
      "fbAppId": "",
      "fbAdmins": "",
      "twitterCard": "summary_large_image",
      "twitterSite": "",
      "twitterImage": "/assets/img/ogp_twitter.jpg"
    }
    ...
  ```

### SCSS
- ページ特有のスタイルを作成する場合は、`assets > scss > object > project` 配下にて
「_ページ名-page」という命名に沿ってファイルを作成してください。（EX：_about-page.scss）
- サイト全体で共通で使い回すパーツは`src > assets > ssi` にて作成してください。
