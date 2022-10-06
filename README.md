# 静的サイト環境テンプレート

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

## コマンド一覧

開発モードでブラウザ立ち上げ（assets配下の変更時 ホットリロード対応）

```bash
yarn start
```

開発モードでビルド

```bash
yarn build
```

本番モードでビルド

```bash
yarn release
```
