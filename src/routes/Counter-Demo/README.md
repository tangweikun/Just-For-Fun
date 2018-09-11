# Counter-Demo

[开发流程图](https://www.processon.com/view/link/5b974e46e4b015327ad9ae8a)

1.  在 `routes` 文件夹下创建文件 `Counter-Demo`
1.  创建 [actionTypes.js](./actionTypes.js)，里面定义不同类型的`ACTION_TYPE`，统一已模块名称作为前缀(避免不同模块`ACTION_TYPE`命名出现冲突)，命名统一采用大写
1.  创建 [reducer.js](./reducer.js)，在里面定义一个`reducer`，根据`ACTION_TYPE`来对`store`进行更新，找到`src/reducers.js`，将刚刚创建的`reducer.js`引入到`src/reducers.js`并添加到`rootReducer`里面完成`reducer`的注册
1.  创建 [sagas.js](./sagas.js)，定义需要的`saga`，以及一个`watchSaga`，将`watchSaga`引入到`src/sagas.js`里面完成`saga`的注册
1.  创建 [selectors.js](./selectors.js)，在里面取得我们需要在组件上显示的数据
1.  创建 [index.js](./index.js)，从`actions.js`里面获得的方法和从`selectors.js`获得的数据，并通过`connect`绑定到 UI 组件`component.js`上
1.  创建 [component.js](./component.js)，根据`index.js`传过来的方法和数据来渲染组件
1.  🎉 🎉 🎉 到此一个`redux`组件已经完成 🎉 🎉 🎉
1.  找到 `src/route.js` 文件，在这个文件里面引入`Counter-Demo/index.js`，并创建一个路由 `/counter` 绑定 `Counter-Demo`
