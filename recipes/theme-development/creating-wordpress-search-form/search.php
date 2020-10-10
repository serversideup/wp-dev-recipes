<?php
    // Results are a part of the global query so we can iterate over
    // them if they exist.
    while ( have_posts() ) :
        the_post();

        get_template_part( 'template-parts/content', 'search-result' );

    endwhile;
?>