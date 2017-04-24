# YACNODE 
如你所见，又一个基于 React 技术栈的 cnode 社区的客户端。再不弄下 React 我的 React 技术就要长毛啦。

## 编码规范

使用 EsLint 检测 JavaScript 相关代码，使用 StyleLint 检测 CSS 相关代码。

1. ES6 规范：[airbnb 的 ES6 编码规范](https://github.com/airbnb/javascript)
2. React/JSX 规范：[airbnb 的 React/JSX 编码规范](https://github.com/airbnb/javascript/tree/master/react)
3. SCSS 规范： [stylelint 标准规范](https://github.com/stylelint/stylelint-config-standard/blob/master/index.js)

## 架构

还是 React 中熟悉的那个味儿，以 Redux 为核心的应用架构，大约是用到了这些玩意儿。

1. react
2. redux
3. react-router

## 测试

React 和 Redux 本身推崇的函数式编程的理念，除了文绉绉以外，还有一个优点就是方便测试，所以干嘛不趁来一发测试驱动开发呢，分为单元测试和功能测试，大约用到了下边一些东西。

1. karma
2. jasmine
3. enzyme
4. nightwatch

## 脚本

1. 单次运行单元测试 `npm run test-unit`
2. 单次运行功能测试 `npm run test-functional`
3. 启动单元测试服务 `npm run karma`
4. 启动开发服务器 `npm run dev`
5. 构建项目 `npm run build`
