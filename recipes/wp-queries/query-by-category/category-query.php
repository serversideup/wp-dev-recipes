<?php
    $args = [
        'post_type' => 'post', // Set to 'post' but could be a custom post type or page
        'tax_query' => [
            [
                'taxonomy' => 'category', // This is the magic, we want to use the 'category' taxonomy
                'field'    => 'name', // Limit the taxonomy by name
                'terms'    => 'industries', // Set it to a specific category, in our case it's 'industries'
            ],
        ],
    ];

    $industriesCategoryQuery = new WP_Query( $args );
