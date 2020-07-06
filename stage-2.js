module.exports = function (_api, _option, _cwd) {
	return {
		presets: [require("./stage-3")],
		plugins: [
			[require("@babel/plugin-proposal-decorators"), { legacy: true }],
			require("@babel/plugin-proposal-throw-expressions"),
			require("@babel/plugin-proposal-function-sent"),
		],
	};
};