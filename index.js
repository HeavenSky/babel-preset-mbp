module.exports = function (_api, option, _cwd) {
	const { vue, react, stage, ...opt } = option || {};
	const N = parseInt(stage); const env = require(vue
		? "@vue/babel-preset-app" : "@babel/preset-env");
	return {
		presets: [[env, opt]].concat(
			react ? require("@babel/preset-react") : [],
			N > -1 && N < 4 ? require("./stage-" + N) : []),
		plugins: [],
	};
};