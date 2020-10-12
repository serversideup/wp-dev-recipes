<?php
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