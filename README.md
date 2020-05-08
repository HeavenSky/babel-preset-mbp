# babel-preset-mbp 预设babel最佳实践

## 参考来源
> https://npmjs.com/package/@babel/preset-stage-0

## 使用方法
```json
// .babelrc
{ "presets": ["mbp"] } // 等同 ["mbp/stage-0"]
{ "presets": ["mbp/stage-0"] }
{ "presets": ["mbp/stage-1"] }
{ "presets": ["mbp/stage-2"] }
{ "presets": ["mbp/stage-3"] }
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
