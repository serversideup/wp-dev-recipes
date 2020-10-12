---
title: WP Query Posts or Pages By Category
description: ''
position: 5.1
category: WP Queries
---

<social :tweet-text="'WP Query Posts or Pages By Category'"
    :page-url="'https://wp-dev-recipes.serversideup.net/wp-queries/query-by-category'"
    :github-url="'https://github.com/serversideup/wp-dev-recipes'"></social>

<recipe-header 
    :complexity="'Low'"
    :compatibility="['WordPress 5.4, 5.5+']">
    </recipe-header>

## Overview
By default WordPress allows you to categorize your content. This functionality is extremely powerful and allows you to have full control of your content. Using this recipe will allow you to find all posts (custom or pages) that are in the same category. This will allow you to build recommended reading sections, customize your archive pages, or whatever other functionality you can come up when grouped by category.

## Step 1: Build the Category Query with WP Query
Add this query to the template you wish to load posts by category:
```php
<?php
    $args = [
        'post_type' => 'post', // Could be `page` or Custom Post Type
        'tax_query' => array(
            array(
                'taxonomy' => 'category',
                'field'    => 'name',
                'terms'    => 'industries',
            ),
        ),
    ];

    $industriesCategoryQuery = new WP_Query( $args );

```

We used a sample category named "Industries" with a slug of "industries". You can customize this query in any way you feel necessary using the appropriate arguments for [WP Query](https://developer.wordpress.org/reference/classes/wp_query/). The `tax_query` is where we filter by category.

## Step 2: Use the Results
Use the following to iterate over the results:
```php
<?php
    while( $industriesCategoryQuery->have_posts() ){
        $industriesCategoryQuery->the_post();

        // You now have access to $post and methods like the_title();
    }
```

## Usage Ideas
* Display lists of posts by category on a category page
* Find similar posts or recommended reading

## Similar Recipes
* [Display WooCommerce Featured Products](https://wp-dev-recipes.serversideup.net/woocommerce/display-woocommerce-featured-products)