# Roc website

[![build](https://github.com/roc-streaming/roc-streaming.github.io/actions/workflows/build.yml/badge.svg)](https://github.com/roc-streaming/roc-streaming.github.io/actions/workflows/build.yml)

This repo contains the source code and the build script for [Roc website](https://roc-streaming.org/).

To build website locally, run:

```
make
```

It will build static website + documentation from:

- roc-toolkit
- rocd
- roc-droid

When you push to the main branch, Github actions automatically build and publish website on Github pages.
