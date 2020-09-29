module.exports = function (_api, _option, _cwd) {
	return {
		presets: [require("./stage-3")],
		plugins: [
			// https://github.com/tc39/proposal-decorators
			[require("@babel/plugin-proposal-decorators"), { legacy: true }],
			// https://github.com/tc39/proposal-throw-expressions
			require("@babel/plugin-proposal-throw-expressions"),
			// https://github.com/tc39/proposal-function.sent
			require("@babel/plugin-proposal-function-sent"),
		],
	};
};