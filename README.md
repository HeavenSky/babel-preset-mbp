# babel-preset-mbp 预设babel最佳实践

## 参考来源
> https://npmjs.com/package/@babel/preset-stage-0

## 使用方法
```json
// .babelrc
{ "presets": [["mbp",{/* option */}]] }
{ "presets": ["babel-preset-mbp/stage-0"] }
{ "presets": ["babel-preset-mbp/stage-1"] }
{ "presets": ["babel-preset-mbp/stage-2"] }
{ "presets": ["babel-preset-mbp/stage-3"] }
```
### option
```ts
interface Option {
	vue?: boolean;      // 是否启用vue预设
	react?: boolean;    // 是否启用react预设
	stage?: number;     // 启用的stage版本: 0,1,2,3
	[key: string]: any; // @babel/preset-env配置项
}
```

## 开发说明
> https://babeljs.io/docs/en/config-files#config-function-api
```js
module.exports = function (_api, _option, _cwd) {
	return {
		presets: [ ... ],
		plugins: [ ... ],
	};
};
```
