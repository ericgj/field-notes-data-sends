
default: build

clean:
	@rm -rf build node_modules components

build: node_modules components clean_build
	@node build.js

clean_build:
	@mkdir -p build
	@rm -rf build/*

node_modules: package.json
	@npm install

components: component.json
	@component install

.PHONY: build clean clean_build
