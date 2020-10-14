---
title: Search For WooCommerce Products and Variations
description: ''
position: 4.3
category: 💰 WooCommerce
---

<social :tweet-text="'Search For WooCommerce Products and Variations'"
    :page-url="'https://wp-dev-recipes.serversideup.net/woocommerce/search-for-woocommerce-products-variations'"
    :github-url="'https://github.com/serversideup/wp-dev-recipes'"></social>

<recipe-header 
    :complexity="'Medium'"
    :compatibility="['WordPress 5.4, 5.5+', 'WooCommerce 4+']"
    :discussion="'https://community.serversideup.net/t/search-for-woocommerce-products-and-variations/223'">
    </recipe-header>

## Overview
By default WordPress only searches posts and pages. However, if you have a WooCommerce platform, it's extremely beneficial to allow users to search for products and product variations if you have them. 

## Step 1: Hook into `pre_get_posts` action
When you hook into the `pre_get_posts` action, you can easily modify the query used during the default WordPress search method. This allows you to adjust it so you can provide `product` and `product_variation` search functionality.

Add the following to an included PHP file in your WordPress theme or plugin:
```php
add_action( 'pre_get_posts', 'ssu_search_woocommerce_products' );

function ssu_search_woocommerce_products( $query ) {
	if( ! is_admin() && is_search() && $query->is_main_query() ) {
		$query->set( 'post_type', array( 'post', 'page', 'product', 'product_variation' ) );
	}
}
```

Before we modify the query, we check to see if 3 checks are true:
1. The search is NOT coming from the admin side `!is_admin()`
2. The query is the search query from a search form `is_search()`
3. The query is the main query used to render the search template page `$query->is_main_query()`

Now we just adjust the post types searched to include `product` post type and `product_variation` post type. You will now get products and product variations in your search results.

## Usage Ideas
* Autocomplete products and product variations

## Similar Recipes
* [Creating a WordPress Search Form ](https://wp-dev-recipes.serversideup.net/themes/creating-wordpress-search-form)