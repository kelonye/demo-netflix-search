run:
	@webpack-dev-server --content-base dist

build:
	@rm -rf dist && webpack --config webpack.config.js

.PHONY: build run
