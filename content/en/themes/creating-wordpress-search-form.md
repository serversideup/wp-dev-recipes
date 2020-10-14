---
title: Creating a WordPress Search Form
description: ''
position: 2.2
category: 🎨 Themes
---

<social :tweet-text="'Creating a WordPress Search Form'"
    :page-url="'https://wp-dev-recipes.serversideup.net/themes/creating-wordpress-search-form'"
    :github-url="'https://github.com/serversideup/wp-dev-recipes'"></social>

<recipe-header 
    :complexity="'Medium'"
    :compatibility="['WordPress 5.4, 5.5+']"
    :discussion="'https://community.serversideup.net/t/creating-a-wordpress-search-form/219'">
    </recipe-header>

## Overview
WordPress provides a very basic search experience that users can use to find posts within your site, blog, store, etc. In this recipe, we will use the basic functionality to build a simple form into our theme and display the results in the `search.php` template. I consider this a "theme" recipe instead of a "plugin" recipe since most of the functionality is baked into theme templates.

There are 2 different templates that are affected by this recipe. First is the `search.php` page. This will display the search results and you can customize that display in the template. Second, there is a `searchform.php` template that actually displays the search form (Source: [https://codex.wordpress.org/Creating_a_Search_Page](https://codex.wordpress.org/Creating_a_Search_Page)). We will be working in the `search.php` to show the results and providing code that you can either put in the `searchform.php` (the preferred method) or in any part of your theme if you want to break up search forms into different levels of complexity.

## Step 1: Add `searchform.php` to Your Theme

```html[searchform.php]
<form method="GET" action="/">
    <input placeholder="Search" name="s" type="text"/>
    <input type="submit" value="Search"/>
</form>
```
You can also add that code to any part of your template. As long as the action is `/` and the search input has a name of `s`. 

## Step 2: Display Search Results in `search.php` Template

The results will now be a part of the main WordPress query. So to display the basic results, add the following to `search.php`:

```php[search.php]
while ( have_posts() ) :
    the_post();

    get_template_part( 'template-parts/content', 'search-result' );

endwhile;
```

You can modify the display of the search result with the `template-parts/content-search-result.php` file.

## Usage Ideas
* Basic search for content on your site.