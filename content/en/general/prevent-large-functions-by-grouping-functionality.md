---
title: Prevent a Large functions.php By Grouping Functionality
description: ''
position: 1.2
category: General
---

<social :tweet-text="'Prevent a Large functions.php By Grouping Functionality'"
    :page-url="'https://wp-dev-recipes.serversideup.net/general/prevent-large-functions-by-grouping-functionality'"
    :github-url="'https://github.com/serversideup/wp-dev-recipes'"></social>

<recipe-header 
    :complexity="'Low'"
    :discussion="'https://community.serversideup.net/t/prevent-a-large-functions-php-by-grouping-functionality/217'">
    </recipe-header>


## Overview
One of the biggest problems I see when developing themes (and some plugins) for WordPress is maintainability (also one of the main reasons for this site). I've run across a lot of large themes that put way too much functionality in to a the `functions.php` file. And yes, I've been there myself. However, when it comes to debugging, updating, or adding functionality, these super large `functions.php` files become cumbersome and make the whole process take WAAY longer than it should.

I don't see this as often as with plugins, since the development ideals tend to be more of "adding functionality through programming" instead of modifying display through filters with less functionality. However, depending on how you choose to develop your plugin, these principles still apply.

Below is the primary way I've prevented a large `functions.php` file. If you use the `_underscores` base theme template, they have most of this structure in place. However, I've even taken most of their boilerplate code and divided it up into separate includes.

## Require For The Win!
This is one of my favorite ways to group functionality when developing a theme. It essentially means taking all similar functionality, grouping it in a single file, and requiring it through `require` in your `functions.php`. This method allows you not only to group your functionlity but also allows you to add some OOP to your theme.

Let's say that we are adding a theme that requires an extra piece of Post meta to a post type in your theme (yes, you can do this in a plugin as well). Instead of adding 3 decently sized methods to your `functions.php` file, you can add a file at the root of your theme (`/theme-name/inc/custom-meta.php`) that will contain the 3 methods and include it in your `functions.php` file like:

```php[functions.php]
/**
 * Loads for custom meta on pages
 */
require get_template_directory() . '/inc/custom-meta.php';
```

Now you can put all of your processing code in `custom-meta.php` and leave your `functions.php` file nice and tidy for future enhancements! It will also be super easy to debug and find the code you are looking for since it will all be grouped in one spot. If you love OOP, you can build and include classes as well which I'd highly recommend. Even more re-usable code!

## Other Options
If your development environment allows it, you could definitely do some [Composer](https://getcomposer.org/) magic! This is a much more modern approach for high functionality themes and plugins. [roots.io](https://roots.io/) has boiler plates that include Composer by default and they are amazing! I'd recommend going this route for large scale plugins and themes.

## Similar Recipes