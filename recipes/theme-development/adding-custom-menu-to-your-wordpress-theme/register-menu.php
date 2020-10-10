<?php
    /**
     * Place this in the functions.php file or wherever you include the file to
     * manage your navigation menus.
     */
    register_nav_menus(
        array(
            'header' => esc_html__( 'Primary Header Menu', 'your_theme' ),
            'footer' => esc_html__( 'Footer Menu', 'your_theme' )
        )
    );
?>