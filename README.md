# babel-preset-mbp
babel预设的最佳实践

## 参考来源
* preset参考: https://babeljs.io/docs/en/babel-preset-env
* stage参考: https://npmjs.com/package/@babel/preset-stage-0
* proposals参考: https://github.com/tc39/proposals
* 移除stage-4提案,且根据提案最新阶段做调整

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
- 子依赖包内包含的命令不会自动安装,常见使用组合
	- @babel/cli + babel-preset-mbp
	- babel-loader + babel-preset-mbp
	- @rollup/plugin-babel + babel-preset-mbp
