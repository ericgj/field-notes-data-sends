
default: build

deploy: gh_pages
	@git checkout gh-pages && git push origin gh-pages

gh_pages: build
	@git branch -D gh-pages && git checkout -b gh-pages && mkdir -p ./.saved && mv build ./.saved/ && mv node_modules ./.saved/ && mv components ./.saved/ && rm -r ./* && mv ./.saved/build/* . && mv ./.saved/* . && echo "node_modules" > .gitignore && echo "components" >> .gitignore && git add -A && git commit

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

.PHONY: deploy gh_pages build clean clean_build
