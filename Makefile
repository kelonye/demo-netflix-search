run:
	@webpack-dev-server --content-base dist --port 5000

build:
	@rm -rf dist && webpack --config webpack.config.js

.PHONY: build run
