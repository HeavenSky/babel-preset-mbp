module.exports = function (_api, _option, _cwd) {
	return {
		presets: [require("./stage-2")],
		plugins: [
			require("@babel/plugin-proposal-export-default-from"),
			require("@babel/plugin-proposal-logical-assignment-operators"),
			[require("@babel/plugin-proposal-optional-chaining"), { loose: false }],
			[require("@babel/plugin-proposal-pipeline-operator"), { proposal: "minimal" }],
			[require("@babel/plugin-proposal-nullish-coalescing-operator"), { loose: false }],
			require("@babel/plugin-proposal-do-expressions"),
		],
	};
};