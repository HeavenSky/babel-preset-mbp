module.exports = {
	presets: [],
	plugins: [
		require("@babel/plugin-syntax-import-meta"),
		require("@babel/plugin-syntax-dynamic-import"),
		require("@babel/plugin-proposal-json-strings"),
		[require("@babel/plugin-proposal-class-properties"), { loose: true }],
	],
};