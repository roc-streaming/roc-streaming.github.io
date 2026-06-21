# Roc Streaming website

[![build](https://github.com/roc-streaming/roc-streaming.github.io/actions/workflows/build.yml/badge.svg)](https://github.com/roc-streaming/roc-streaming.github.io/actions/workflows/build.yml)

This repo contains the source code and the build script for [Roc website](https://roc-streaming.org/).

Build dependencies are managed by [pixi](https://pixi.prefix.dev/latest/).

To serve website on localhost, run:

```
pixi run serve
```

To build static website, run:

```
pixi run build
```

It will build static website + documentation from:

- roc-toolkit
- rocd
- roc-cast

To remove generated build artifacts, run:

```
pixi run clean
```

When you push to the main branch, Github actions automatically build and publish website on Github pages.

## License

Website content is licensed under [CC BY-SA 4.0](LICENSE.md).

Third-party font and icon notices are [listed here](NOTICE.md).

Projects-specific docs (Roc Toolkit, RocD, Roc cast) are licensed under MPL-2.0.
