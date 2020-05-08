module.exports = function (_api, _option, _cwd) {
	return {
		presets: [require("./stage-1")],
		plugins: [
			require("@babel/plugin-proposal-function-bind"),
		],
	};
};