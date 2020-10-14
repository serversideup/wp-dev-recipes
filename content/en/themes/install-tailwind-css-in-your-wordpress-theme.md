---
title: Install TailwindCSS in Your WordPress Theme
description: ''
position: 2
category: 🎨 Themes
---

<social :tweet-text="'Install TailwindCSS in Your WordPress Theme'"
    :page-url="'https://wp-dev-recipes.serversideup.net/themes/install-tailwind-css-in-your-wordpress-theme'"
    :github-url="'https://github.com/serversideup/wp-dev-recipes'"></social>

<recipe-header 
    :complexity="'Low'"
    :compatibility="['Wordpress 5.4, 5.5+']"
    :tutorial="'https://serversideup.net/installing-tailwindcss-in-a-wordpress-theme/'"
    :discussion="'https://community.serversideup.net/t/installing-tailwindcss-in-a-wordpress-theme/146'">
    </recipe-header>

## Pre-Requisite(s)
* [Packaging Your Plugin or Theme With Laravel Mix](https://wp-dev-recipes.serversideup.net/general/packaging-your-plugin-or-theme-with-laravel-mix)

## Overview
Implementing this recipe will allow you to use the functionality of [TailwindCSS](https://tailwindcss.com) in your WordPress theme. TailwindCSS makes designing themes a breeze. Implementing this recipe will increase the speed of how fast you can design your WordPress theme.

## Step 1: Include TailwindCSS in Your Package

```bash
npm install tailwindcss
```

## Step 2: Create `resources` Directory
The `resources` directory will store the un-compiled CSS if you need to make components. It will also store the CSS entry point for TailwindCSS. I usually add a nested `/resources/css` directory to store the specific CSS files

## Step 3: Create TailwindCSS Entry File
```css[resources/css/theme.css]
@import "tailwindcss/base";

@import "tailwindcss/components";

@import "tailwindcss/utilities";
```

## Step 4: Init TailwindCSS
Run the following command to create your TailwindCSS config file:

```bash
npx tailwindcss init
```

This will live in the root of your theme.

## Step 5: (Optional) Install PostCSS-Nested
If you want to nest css to make it more readable in your component files, run the following command:

```bash
npm install postcss-nested
```

## Step 6: Add TailwindCSS To Your `webpack.mix.js`
We need to let Laravel Mix (the pre-requisite) know to compile our TailwindCSS resources:

```javascript[webpack.mix.js]
mix.postCss('resources/css/theme.css', 'css', [
	require('tailwindcss'),
	require('postcss-nested')
])
.options({
	processCssUrls: false
});
```

This will output your compiled css to a root level `/css` directory where you can include it in your theme.

## Step 7: Include Compiled CSS In Your Theme
All we have to do is include the compiled CSS in our theme. Usually developers put this in the `functions.php` file. However, you can put it in any PHP file that gets loaded automatically by your theme.

```php[functions.php]
wp_enqueue_style( 'your-theme-styles', get_template_directory_uri().'/css/theme.css', array(), YOUR_THEME_VERSION );
```