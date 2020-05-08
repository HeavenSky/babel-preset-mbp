module.exports = {
	presets: [require("./stage-3")],
	plugins: [
		[require("@babel/plugin-proposal-decorators"), { legacy: true }],
		require("@babel/plugin-proposal-function-sent"),
		require("@babel/plugin-proposal-export-namespace-from"),
		require("@babel/plugin-proposal-numeric-separator"),
		require("@babel/plugin-proposal-throw-expressions"),
	],
};