---
title: Add a Custom Menu To Your WordPress Theme
description: ''
position: 2.1
category: 🎨 Themes
---

<social :tweet-text="'Add a Custom Menu to Your Wordpress Theme'"
    :page-url="'https://wp-dev-recipes.serversideup.net/themes/add-custom-menu-to-your-wordpress-theme'"
    :github-url="'https://github.com/serversideup/wp-dev-recipes'"></social>


<recipe-header 
    :complexity="'Low'"
    :compatibility="['Wordpress 5.4, 5.5+']"
    :discussion="'https://community.serversideup.net/t/add-a-custom-menu-to-your-wordpress-theme/206'">
    </recipe-header>

## Overview
In this recipe, we will be adding a custom menu to your WordPress theme. This can be used to add header menus, footer menus, responsive pop-out menus, wherever you need a custom menu. These menus will be able to be controlled via Appearance -> Menus in your Admin Dashboard. This is just the basic registration and display of these menus. 

## Step 1: Register your Nav Menu
The first step is to register your menu in the theme. A lot of the time, this would be done in the `functions.php` file. If you choose to break up `functions.php` in smaller parts, place this wherever you include your menu settings.

```php[functions.php]
register_nav_menus(
    array(
        'header' => esc_html__( 'Primary Header Menu', 'your_theme' ),
        'footer' => esc_html__( 'Footer Menu', 'your_theme' )
    )
);
```

## Step 2: Display your Nav Menu
In any template part (header, footer, sidebar), partial, page, wherever you want to display this menu, place the following code:
```php
wp_nav_menu(
    array(
        'theme_location' => 'header', // Key in the array when you register_nav_menus()
    )
);
```
