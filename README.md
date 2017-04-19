
## 使用
- 确保 Node 版本为 4.0 及以上
- 执行 `npm install` 安装依赖包
- 执行 `npm start` 编译并启动本地server
- 打开浏览器访问 http://localhost:3000 

## 内容
1. 基于webpack的项目种子搭建（非Angular-CLI，见后面常见问题答复 #4）
2. 内置指令的使用
3. 自定义指令的开发与使用
4. 服务的开发与使用
5. 父子组件双向通讯

## 常见问题答复
### 1. 项目构建时 package.json 和 tsconfig.json 文件配置
package.json大致可以看看这个：https://github.com/lizhonghui/blog/issues/15 。关于tsconfig.json 这个涉及内容比较多，列巨几个需要关注的配置：
- compilerOptions.target: 指定 TS 编译后生产的目标语言，本例的es5表示编译后生成es5的代码，可选值有 'es3'(默认), 'es5', 'es6'。
- compilerOptions.module: 指定编译后的模块采用哪个 module 版本，可选值'none', 'commonjs', 'amd', 'system', 'umd', 'ES6'或'es2015'
- compilerOptions.moduleResolution: 指定TS代码的模块解释机制，可选值 node 和 classic
- compilerOptions.sourceMap: 是否生成source map文件
- compilerOptions.emitDecoratorMetadata: 
- compilerOptions.typeRoots: 指定第三方库的类型定义的文件地址

更多选项解释可以移步这里：http://json.schemastore.org/tsconfig

### 2. VSCode编辑插件
几个字母生成模板有很多这样的插件，在vscode的extension里搜索“angular snippets”，有很多类似的工具，选一个喜欢的即可，且基本都可以自定义snippet。

### 3. 关于Angular-CLI
本示例并不是用Angular-CLI搭建，而是从最基本的package.json开始搭建，方便从基础讲解，实际开发还是推荐使用Angular-CLI。
所以启动应用并不是用`ng serve`，启动步骤如下：
```bash
npm install
npm start
```
运行完上面两部命令后，若没有报错，打开浏览器访问 `http://localhost:3000` 即可。
