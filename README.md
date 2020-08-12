# webpack 构建 SSR

建立常规 React 应用

1. 配置 webpack server 的构建规则
2. 编写 server 入口文件
3. 使用 Webpack 构建 server包
4. 编写 server 服务文件，引用 构建好的 server 包
5. 启动服务

## 关于样式
1. SSR 时，需要将页面的 样式 一并返回，如何获取 样式 是关键问题
2. 使用 isomorphic-style-loader 可以实现，但需要对业务代码进行改写
3. 我们可以构建一个单独的样式文件出来，这一步是通过 客户端构建时完成的
4. 使用 mini-css-extract-plugin 插件，在构建客户端代码的同时，构建一个css文件，并将它交由 node 返回给 浏览器
5. mini-css-extract-plugin 不能和 style-loader 同时使用