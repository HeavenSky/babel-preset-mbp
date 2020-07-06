module.exports = function (_api, _option, _cwd) {
	return {
		presets: [],
		plugins: [
			[require("@babel/plugin-proposal-class-properties"), { loose: true }],
			require("@babel/plugin-proposal-logical-assignment-operators"),
			require("@babel/plugin-proposal-numeric-separator"),
		],
	};
};