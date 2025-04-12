all: static roc_toolkit rocd roc_droid

clean:
	rm -rf build dist

.PHONY: static
static:
	mkdir -p dist
	cp -a static/. dist/

roc_toolkit:
	mkdir -p build dist
	rm -rf build/roc-toolkit dist/toolkit
	git clone --depth 1 https://github.com/roc-streaming/roc-toolkit.git build/roc-toolkit
	build/roc-toolkit/scripts/make_doc.sh
	cp -a build/roc-toolkit/docs/html dist/toolkit

rocd:
	mkdir -p build dist
	rm -rf build/rocd dist/rocd
	git clone --depth 1 https://github.com/roc-streaming/rocd.git build/rocd
	make -C build/rocd docs-docker
	cp -a build/rocd/site dist/rocd

roc_droid:
	mkdir -p build dist
	rm -rf build/roc-droid dist/droid
	git clone --depth 1 -b flutter https://github.com/roc-streaming/roc-droid.git build/roc-droid
	build/roc-droid/script/generate_docs.py
	cp -a build/roc-droid/site dist/droid
