# 同构方案-babel动态构建

常规建立应用

1.通过 webpack 构建客户端包

2.建立 server 确定模板（模板中引用 客户端构建包）

3.建立 router.js 用于服务端路由查找

4.使用 css-modules-require-hook 处理 node 中的 css

5.使用 babel-node 启动服务，动态处理 组件jsx和es6语法（bable单独配置）

