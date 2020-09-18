---
title: Packaging Your Plugin or Theme With Laravel Mix
description: ''
position: 1
category: General
---

<social :tweet-text="'Packaging Your WordPress Plugin or Theme With Laravel Mix'"
    :page-url="'https://wp-dev-recipes.serversideup.net/general/packaging-your-plugin-or-theme-with-laravel-mix'"
    :github-url="'https://github.com/serversideup/wp-dev-recipes'"></social>

<recipe-header 
    :wordpress-versions="[5.4, 5.5]"
    :tutorial="{
        link: 'https://serversideup.net/using-laravel-mix-in-a-wordpress-theme/',
        name: 'Using Laravel Mix in a WordPress Theme'
    }">
    </recipe-header>

## Pre-Requisite
All you have to have as a pre-requisite to this tutorial is an NPM package configured for your WordPress theme or plugin. If you are using Underscores for a theme you

## Overview
Modern front-end development requires some sort of packaging utility to help with development and make it easy manage resources. [Webpack](https://webpack.js.org/) is a very common, beautiful way to package these resources. However, it takes some time to set up and configure.

Thankfully, our friends in the [Laravel](https://laravel.com) community made a tool called [Laravel Mix](https://laravel.com/docs/8.x/mix) which makes this process a breeze. And since it's a front-end only library, it can be used with WordPress! Following this recipe, will allow you to use modern tools and libraries for development in your WordPress plugin or theme. 

## Step 1: Install Laravel Mix

```bash
npm install laravel-mix --save-dev
```

## Step 2: Install cross-env

```bash
npm install cross-env --save-dev
```

## Step 3: Add Build Scripts to package.json

```json[package.json]
...
scripts: {
    "dev": "npm run development",
    "development": "cross-env NODE_ENV=development node_modules/webpack/bin/webpack.js --progress --hide-modules --config=node_modules/laravel-mix/setup/webpack.config.js",
    "watch": "npm run development -- --watch",
    "watch-poll": "npm run watch -- --watch-poll",
    "hot": "cross-env NODE_ENV=development node_modules/webpack-dev-server/bin/webpack-dev-server.js --inline --hot --config=node_modules/laravel-mix/setup/webpack.config.js",
    "prod": "npm run production",
    "production": "cross-env NODE_ENV=production node_modules/webpack/bin/webpack.js --no-progress --hide-modules --config=node_modules/laravel-mix/setup/webpack.config.js"
}
...
```

## Step 4: Add webpack.mix.js To Plugin/Theme Root

```javascript[webpack.mix.js]
const mix = require('laravel-mix');
```

## Using Commands

### `npm run development`
You want to run this when you are developing your plugin/theme. It will ensure that all errors are outputted and helps you to debug when necessary

### `npm run production`
Builds a minified, production ready bundle of resources for your plugin/theme. Use this command when deploying your theme to production.