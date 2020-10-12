---
title: Display WooCommerce Featured Products
description: ''
position: 4.1
category: WooCommerce
---

<social :tweet-text="'Display WooCommerce Featured Products'"
    :page-url="'https://wp-dev-recipes.serversideup.net/woocommerce/display-woocommerce-featured-products'"
    :github-url="'https://github.com/serversideup/wp-dev-recipes'"></social>

<recipe-header 
    :complexity="'Low'"
    :compatibility="['WordPress 5.4, 5.5+', 'WooCommerce 4+']"
    :discussion="'https://community.serversideup.net/t/display-woocommerce-featured-products/220'">
    </recipe-header>

## Overview
Setting featured products is critical for your WooCommerce store by allowing you to display products that are either your top sellers, the focus of your business, or may be a new offering. Either way, WooCommerce provides this functionality out of the box. This recipe will go through how to set a product as a "featured product" and display those products anywhere in your theme.

## Step 1: Setting a Product as a Featured Product
To set a product as a featured product, click the Star icon (shown below) on the product listing page.

![How to set a featured product in WooCommerce](/recipes/woocommerce/display-woocommerce-featured-products/set-as-featured-product.png)

## Step 2: Create Query to Grab Featured WooCommerce Products
You can grab featured products using a simple WP Query to grab only the featured products. This can be placed in any theme template where you want to display these products:

```php
$args = array(
    'posts_per_page' => -1, // Grabs all of the featured products. Limit if needed
    'post_type'      => 'product', // Ensures the post type is a product
    'post_status'    => 'publish', // Ensures the product is published
    'tax_query'      => array(
        array(
            'taxonomy' => 'product_visibility', // Does a meta query on product visibility
            'field'    => 'name',
            'terms'    => 'featured', // Makes sure we grab all products flagged as featured
            'operator' => 'IN',
            ),
        )  
);
$featuredProducts = new WP_Query( $args );
```

## Step 3: Display Featured Products
Place this in your template file where you want to display your featured products. Within the loop you have access to a post object now that you can call all of your post methods on.

```php
while( $featuredProducts->have_posts() ){
    $featuredProducts->the_post(); 
}
```

## Usage Ideas
* Displaying a featured product grid

## Similar Recipes
* [Query By Cateogry](https://wp-dev-recipes.serversideup.net/wp-queries/query-by-category)