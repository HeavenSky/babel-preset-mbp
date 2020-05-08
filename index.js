module.exports = function (_api, option, _cwd) {
	const { vue, react, stage, ...opt } = option || {};
	let N = parseInt(stage) || 0;
	if (N > 3 || N < 0) { N = 0; }
	return {
		presets: [[require(vue ? "@vue/babel-preset-app"
			: "@babel/preset-env"), opt]].concat(
			react ? require("@babel/preset-react") : [],
			require("./stage-" + N)
		),
		plugins: [],
	};
};