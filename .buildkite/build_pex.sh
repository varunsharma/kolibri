#!/usr/bin/env sh

pip install pex                 # pex is really the only thing we need here.
buildkite-agent artifact download 'dist/*.whl' dist/
make pex
buildkite-agent artifact upload 'dist/*.pex'
