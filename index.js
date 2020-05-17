module.exports = function (_api, option, _cwd) {
	const { ts, vue, react, stage, ...opt } = option || {};
	const N = parseInt(stage, 10); Object.assign(opt, vue);
	const presets = [
		[require(vue ? "@vue/babel-preset-app" : "@babel/preset-env"), opt],
		react && [require("@babel/preset-react"), { ...react }],
		ts && [require("@babel/preset-typescript"), { ...ts }],
		N > -1 && N < 4 && require("./stage-" + N),
	].filter(Boolean); return { presets };
};