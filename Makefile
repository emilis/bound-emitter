### Variables -----------------------------------------------------------------

BROWSERIFY=		./node_modules/.bin/browserify
UGLIFY=			./node_modules/.bin/uglify -s $^ -o $@

### Tasks ---------------------------------------------------------------------

.PHONY: build
build:\
	bound-emitter.js\
	dist/bound-emitter.js\
	dist/bound-emitter.min.js\
	dist/bound-emitter.standalone.js\
	dist/bound-emitter.standalone.min.js\


setup:\

	npm install browserify uglify


publish:\
	build\

	git push && npm publish


publish-patch:\
	build\

	npm version patch
	git push && npm publish


publish-minor:\
	build\

	npm version minor
	git push && npm publish


### Targets -------------------------------------------------------------------

bound-emitter.js:\
	src/header.js\
	src/function.js\

	cat $^ > $@


dist/bound-emitter.js:\
	bound-emitter.js\

	${BROWSERIFY} -s BoundEmitter -o $@ $^

dist/bound-emitter.min.js:\
	dist/bound-emitter.js

	${UGLIFY}

dist/bound-emitter.standalone.js:\
	src/function.js\

	cp $^ $@

dist/bound-emitter.standalone.min.js:\
	dist/bound-emitter.standalone.js\

	${UGLIFY}
