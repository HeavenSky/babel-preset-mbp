module.exports = function (_api, _option, _cwd) {
	return {
		presets: [require("./stage-2")],
		plugins: [
			// https://github.com/tc39/proposal-pipeline-operator
			[require("@babel/plugin-proposal-pipeline-operator"), { proposal: "minimal" }],
			// https://github.com/tc39/proposal-export-default-from
			require("@babel/plugin-proposal-export-default-from"),
			// https://github.com/tc39/proposal-do-expressions
			require("@babel/plugin-proposal-do-expressions"),
		],
	};
};