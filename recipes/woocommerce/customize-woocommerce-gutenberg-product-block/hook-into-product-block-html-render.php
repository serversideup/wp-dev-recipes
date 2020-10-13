<?php
    // Hook into the filter that gets called when the product block's HTML gets rendered.
    add_filter( 'woocommerce_blocks_product_grid_item_html', 'ssu_custom_render_product_block', 10, 3);

    function ssu_custom_render_product_block( $html, $data, $post ) {
        // Get the product ID from the permalink of the product we entered into the product block.
        $productID = url_to_postid( $data->permalink );

        // Gets the product by ID.
        $product = wc_get_product( $productID );
        
        // Returns the HTML of the new product block completely styled for what we are looking for.
        return '<li class="wc-block-grid__product">
                    <div>
                        <a href="'.$product->get_permalink().'">'.$product->get_image( 'shop-feature').'</a>

                        <span>'.$product->get_title().'</span>
                    </div>
                </li>';
    }