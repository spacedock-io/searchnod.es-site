#!/bin/bash
node build.js
if [[ $? == 0 ]]; then
   cp -R site/components/rainbow dist/rainbow
   cp -R img dist/img
   cp -R style/ dist/style
   cp index.production.html dist/index.html
fi
