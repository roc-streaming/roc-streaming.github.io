# Roc website

[![Build Status](https://travis-ci.org/roc-streaming/roc-streaming.github.io.svg?branch=travis)](https://travis-ci.org/roc-streaming/roc-streaming.github.io)

This repo contains the source code and the build script for [Roc website](https://roc-streaming.org/).

It has two branches:

* `travis` — holds static content (in `www`) and the `.travis.yml` config for Travis job;
* `master` — holds automatically published content for GitHub pages.

The travis job fetches and builds Roc Toolkit documentation, merges it with other static content, and deploys the result to the `master` branch, which is then used by GitHib pages to render the website.
