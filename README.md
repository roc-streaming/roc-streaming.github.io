# Roc website

[![Build](https://github.com/roc-streaming/roc-streaming.github.io/workflows/build/badge.svg)](https://github.com/roc-streaming/roc-streaming.github.io/actions)

This repo contains the source code and the build script for [Roc website](https://roc-streaming.org/).

It has two branches:

* `job` — holds static content (in `www`) and GitHub Actions job to build and publish static content;
* `master` — holds automatically published content for GitHub pages.

The job fetches and builds Roc Toolkit documentation, merges it with pre-defined static content, and deploys the result to the `master` branch, which is then used by GitHib pages to render the website.
