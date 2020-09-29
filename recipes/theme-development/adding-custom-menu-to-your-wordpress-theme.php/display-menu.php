<?php
    /**
     * In your template partial (header.php, footer.php, sidebar.php), page template, anywhere
     * where you want to display this menu, add this code snippet. The wp_nav_menu() method
     * will display the menu you defined by the parameter array you pass. 
     * 
     * In this example `header` is the key of the array we passed in register_nav_menus() for
     * the Primary Header Menu. If you want to display the footer, set `theme_location` => 'footer'
     */
    wp_nav_menu(
        array(
            'theme_location' => 'header', // Key in the array when you register_nav_menus()
        )
    );
?>