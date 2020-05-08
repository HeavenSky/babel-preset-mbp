module.exports = {
	presets: [],
	plugins: [
		require("@babel/syntax-import-meta"),
		require("@babel/syntax-dynamic-import"),
		require("@babel/proposal-json-strings"),
		[require("@babel/proposal-class-properties"), { loose: true }],
	],
};