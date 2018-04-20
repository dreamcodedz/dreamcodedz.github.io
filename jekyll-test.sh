#!/usr/bin/env bash
set -e # halt script on error

cd ..

bundle exec jekyll serve --config _config.yml --verbose