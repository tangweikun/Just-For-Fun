# Counter-Demo

[开发流程图](https://www.processon.com/view/link/5b974e46e4b015327ad9ae8a)

- `index.js` 组件的 container，作为该模块的唯一出口
- `actionTypes.js` 定义 action 的类型
- `component.js` UI 显示，只负责页面的渲染，不处理业务逻辑
- `reducer.js` 该模块的 reducer，修改 store
- `sagas.js` 处理复杂的 action
- `selectors.js` 处理数据
