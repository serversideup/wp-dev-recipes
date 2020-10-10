<?php
/**
 * This will allow you to categorize the pages
 * in your WordPress install
 */
function ssu_add_categories_to_pages() {
	register_taxonomy_for_object_type( 'category', 'page' );
}

add_action( 'init', 'ssu_add_categories_to_pages' );