module.exports = {
	module: {
		loaders: [
			{ test: /\.css$/, loader: "style!css" },
			{ test: /\.jade$/, loader: "jade" }
		]
	}
}