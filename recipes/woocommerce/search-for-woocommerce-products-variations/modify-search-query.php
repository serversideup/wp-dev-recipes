<?php
add_action( 'pre_get_posts', 'ssu_search_woocommerce_products' );

function ssu_search_woocommerce_products( $query ) {
	if( ! is_admin() && is_search() && $query->is_main_query() ) {
		$query->set( 'post_type', array( 'post', 'page', 'product', 'product_variation' ) );
	}
}