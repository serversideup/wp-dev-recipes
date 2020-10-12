<?php
while( $featuredProducts->have_posts() ){
    $featuredProducts->the_post();
    // Display or process featured product here.
}
