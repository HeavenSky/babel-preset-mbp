# babel-preset-mbp
babel预设的最佳实践

## 参考来源
* 移除stage-4提案,且根据提案最新阶段做调整
* proposals参考: https://github.com/tc39/proposals
* preset参考: https://babeljs.io/docs/en/babel-preset-env
* stage参考: https://npmjs.com/package/@babel/preset-stage-0
* transform参考: https://babeljs.io/docs/en/babel-plugin-transform-runtime
* transform-runtime一定配上version参数,减少直接注入代码
* preset-env内corejs参数,结合useBuiltIns来polyfill对象和方法,相当于import"core-js/es/array"
* transform-runtime内corejs参数,处理需要polyfill新对象为局部变量,相当于将Promise替换成_Promise

## 使用方法
* .babelrc
```json
{ "presets": [["mbp",{/* option */}]] }
```

### 查看子依赖和次级依赖
* 几乎把常见的babel依赖都涵盖进去了
* http://npm.broofa.com/?q=babel-preset-mbp

### option
```ts
interface Option {
	ts?: boolean|object;      // 是否启用ts预设
	vue?: boolean|object;      // 是否启用vue预设
	react?: boolean|object;    // 是否启用react预设
	stage?: number|string;     // 启用的stage版本: 0,1,2,3
	run?: boolean|object;      // 是否启用transform-runtime
	[key: string]: any;        // env和vue共用配置项
} // 属性值为对象时表示对应语法预设的配置项
```

## 开发说明
* https://babeljs.io/docs/en/config-files#config-function-api
```js
module.exports = function (_api, _option, _cwd) {
	return { presets: [ ... ], plugins: [ ... ] };
};
```

## 其他说明
- plugin 会运行在 preset 之前
- plugin 从第一个开始顺序执行
- preset 从最后一个逆序执行
- 子依赖包内包含的命令不会自动安装,常见使用组合
	- @babel/cli + babel-preset-mbp
	- babel-loader + babel-preset-mbp
	- @rollup/plugin-babel + babel-preset-mbp
