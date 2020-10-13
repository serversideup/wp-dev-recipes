---
title: Customize the WooCommerce Gutenberg Product Block
description: ''
position: 4.2
category: WooCommerce
---

<social :tweet-text="'Customize the WooCommerce Gutenberg Product Block'"
    :page-url="'https://wp-dev-recipes.serversideup.net/woocommerce/customize-woocommerce-gutenberg-product-block'"
    :github-url="'https://github.com/serversideup/wp-dev-recipes'"></social>

<recipe-header 
    :complexity="'Low'"
    :compatibility="['WordPress 5.4, 5.5+', 'WooCommerce 4+']">
    </recipe-header>

## Overview
With the advent of Gutenberg, designing pages and post layout has never been easier. WooCommerce in their latest major version, added a way where you can insert a product into one of your pages/posts with the Gutenberg editor. The problem was you had minimal control over the layout. This recipe will give you full control over the style of the product block as it appears in your page.

## Step 1: Hook Into WooCommerce Product Grid Item HTML Filter
There is 1 hook and 1 function that allows you to manage the HTML output of this block. In an included file in your plugin or theme add the following code:
```php
add_filter( 'woocommerce_blocks_product_grid_item_html', 'ssu_custom_render_product_block', 10, 3);

function ssu_custom_render_product_block( $html, $data, $post ) {
    $productID = url_to_postid( $data->permalink );
    $product = wc_get_product( $productID );
    
    return '<li class="wc-block-grid__product">
                <div>
                    <a href="'.$product->get_permalink().'">'.$product->get_image( 'shop-feature').'</a>

                    <span>'.$product->get_title().'</span>
                </div>
            </li>';
}
```
What this does is when the output of the WooCommerce Gutenberg product block gets called, we override the return with our own HTML. Few things to note, we get 3 parameters passed to the function:
1. `$html` The existing HTML for the product block
2. `$data` The data that includes information regarding the product block that was entered.
3. `$post` The post that the product block is getting added to. Could be a page, post, custom post type, etc.

We don't have access to the actual product in this method, so we have to use `url_to_postid` because we have access to the product perma link and we can convert that to an ID. From the ID we can then call `wc_get_product()` and pass the ID to get the product object. With this product object we can return 100% customized HTML with classes and markup that help the product block fit the branding and style guidelines of our theme.

<alert type="danger">
This will <strong>NOT</strong> work if you are using 'plain' permalinks!!! You will have to parse the product ID from the URL since the URL variables are not being assigned correctly with the 'plain' permalink setting.
</alert>

## Usage Ideas
* Allow users to insert their WooCommerce products into posts/pages with Gutenberg
