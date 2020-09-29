module.exports = function (_api, _option, _cwd) {
	return {
		presets: [require("./stage-1")],
		plugins: [
			// https://github.com/tc39/proposal-bind-operator
			require("@babel/plugin-proposal-function-bind"),
		],
	};
};