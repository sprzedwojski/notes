#!/usr/bin/env bash

rm -rf src/main/resources/static
rm -rf src/main/resources/templates
cd notes-frontend
npm run-script build
cd ..
cp -r notes-frontend/build src/main/resources/static
mkdir src/main/resources/templates
mv src/main/resources/static/index.html src/main/resources/templates/