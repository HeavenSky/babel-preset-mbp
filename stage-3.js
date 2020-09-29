module.exports = function (_api, _option, _cwd) {
	return {
		presets: [],
		plugins: [
			// https://github.com/tc39/proposal-static-class-features
			[require("@babel/plugin-proposal-class-properties"), { loose: true }],
		],
	};
};