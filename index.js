module.exports = function (_api, option, _cwd) {
	const { run, ts, vue, react, stage, ...opt } = option || {};
	const N = parseInt(stage, 10); Object.assign(opt, vue);
	return {
		presets: [
			[require(vue ? "@vue/babel-preset-app" : "@babel/preset-env"), opt],
			react && [require("@babel/preset-react"), { ...react }],
			ts && [require("@babel/preset-typescript"), { ...ts }],
			N > -1 && N < 4 && require(`./stage-${N}`),
		].filter(Boolean), // https://github.com/tc39/proposals
		plugins: [
			run && [require("@babel/plugin-transform-runtime"), { ...run }],
		].filter(Boolean),
	};
};