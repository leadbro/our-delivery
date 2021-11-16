#!/bin/bash

yarn generate

cd ./dist

grep -rli '"/images/' * | xargs -i@ sed -i 's/\"\/images\//\"\/our-delivery\/images\//g' @

git init
git add --all
git commit -m "build"
git branch -M dist
git remote add origin git@github.com:leadbro/our-delivery.git
git push -u origin dist --force

