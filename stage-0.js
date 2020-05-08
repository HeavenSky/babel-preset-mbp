module.exports = {
	presets: [require("./stage-1")],
	plugins: [
		require("@babel/plugin-proposal-function-bind"),
	],
};