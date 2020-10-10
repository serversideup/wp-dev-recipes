---
title: Enable Categories on WordPress Pages
description: ''
position: 2.3
category: Themes
---

<social :tweet-text="'Enable Categories on WordPress Pages'"
    :page-url="'https://wp-dev-recipes.serversideup.net/themes/enable-categories-for-wordpress-pages'"
    :github-url="'https://github.com/serversideup/wp-dev-recipes'"></social>

<recipe-header 
    :complexity="'Low'"
    :compatibility="['WordPress 5.0+']"
    :discussion="'https://community.serversideup.net/t/enable-categories-on-wordpress-pages/215'">
    </recipe-header>

## Overview
When using this recipe, you will be able to apply the category taxonomy to your WordPress pages. This functionality will act exactly how WordPress posts work and allow you to sort, categorize and query your pages by category.

## Step 1: Add Action to Register Categories on Pages
```php[functions.php]
function ssu_add_categories_to_pages() {
	register_taxonomy_for_object_type( 'category', 'page' );
}

add_action( 'init', 'ssu_add_categories_to_pages' );
```

When initialized, the `category` taxonomy will be registered for pages.

## Usage Ideas
* Static page content that needs to be categorized