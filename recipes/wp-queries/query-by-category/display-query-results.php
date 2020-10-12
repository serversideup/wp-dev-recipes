<?php
while( $industriesCategoryQuery->have_posts() ){
    $industriesCategoryQuery->the_post();
    // Display or process category query
}