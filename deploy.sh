#!/usr/bin/env sh

# abort on errors
set -e

# build the site
npm run build

# navigate into the build output directory
cd docs/.vitepress/dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

# initialize a new Git repository in the build output directory
git init
git add -A
git commit -m 'deploy'

# deploy to your GitHub Pages
# if deploying to https://AdamNur422.github.io
git push -f git@github.com:AdamNur422/AdamNur422.github.io.git main

# # if deploying to https://AdamNur422.github.io/<REPO>
# git push -f git@github.com:AdamNur422/my-vitepress-site.git main:gh-pages

cd -
