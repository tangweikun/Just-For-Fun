# JUST FOR FUN

海外项目 C 端基础框架,使用`React`官方推荐的 [create-react-app](https://github.com/facebook/create-react-app) 搭建

## 快速开始

```bash
git clone 'https://github.com/tangweikun/Just-For-Fun.git'
cd Just-For-Fun
yarn / npm install
yarn start / npm run start
```

## 技术栈

- [redux](https://redux.js.org)
- [redux-saga](https://redux-saga.js.org)
- [reselect](https://github.com/reduxjs/reselect)
- [react-router](https://reacttraining.com/react-router)

## 基础配置

- [x] 域名代理
  > 修改`package.json`里的`proxy`
- [x] Post-Processing CSS
  > minifies your CSS and adds vendor prefixes to it automatically through Autoprefixer
- [x] NO CSS Preprocessor
  > we recommend that you don’t reuse the same CSS classes across different components.
- [x] 环境变量设置
  > 在`.env`里面配置环境变量
- [ ] Code Splitting
  > [Code-Splitting](https://reactjs.org/docs/code-splitting.html)
- [x] 代码风格
  > 使用`prettier`和`preCommit`,统一项目代码风格
- [x] hot loading
- [x] 单元测试
  > 基于`Jest`进行单元测试,配置`commit before test`
- [x] Redux DevTools
- [x] source-map-explorer
  > yarn analyze
  > 可以查看所 build 后拆分包占比大小
- [x] react-i18next
  > [react-i18next documentation](https://react.i18next.com/components/i18next-instance)

## Why use `create-react-app`

[10 Reasons I Love create-react-app](https://www.peterbe.com/plog/10-reasons-i-love-create-react-app)

[create-react-app vs other starter projects](https://www.javascriptstuff.com/create-react-app/)

- Dan Abramov
- Get started with React immediately
- No webpack config: one less thing to learn at first
- No babel config: ditto
- Very few dependencies to manage
- Running Tests Included
- Hot reloading
