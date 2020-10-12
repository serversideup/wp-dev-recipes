<?php
/**
 * Hooks into the `add_meta_boxes` hook to register our meta box.
 */
add_action("add_meta_boxes", "ssu_add_post_meta_box");
function ssu_add_post_meta_box()
{
    // Param 1: Unique identifier for the meta box
    // Param 2: Meta box title 
    // Param 3: Callback to display the contents of the meta box
    // Param 4: Which page to display the metabox on. We use 'post' because we only want it on the post pages.
    add_meta_box("ssu-custom-meta-fields", "SSU Custom Meta Fields", "ssu_post_box_markup", "post", "normal", "high", null);
}

/**
 * Uses the global post and displays the meta box.
 */
function ssu_post_box_markup( $post )
{
    // Creates a nonce and includes the form with the fields we are adding.
    wp_nonce_field( basename(__FILE__), "ssu-post-additional-fields-nonce" );
    include( get_template_directory().'/inc/custom-post-meta-field/markup.php' );
}

/**
 * Hooks into the `save_post` hook and calls our method so we can
 * save the extra data being added in our input.
 */
add_action("save_post", "ssu_save_post_custom_meta_fields", 10, 3);
function ssu_save_post_custom_meta_fields( $postID, $post, $update )
{
    // Ensures that the nonce we registed is valid and the request is
    // coming from our site.
    if ( !isset($_POST["ssu-post-additional-fields-nonce"] ) 
        || !wp_verify_nonce( $_POST["ssu-post-additional-fields-nonce"], basename(__FILE__) ) ){
            return $postID;
    }

    // Ensures the user has permission to edit the post
    if( !current_user_can( "edit_post", $postID ) ){
        return $postID;
    }

    // Ensures we are not doing an auto save.
    if( defined("DOING_AUTOSAVE") && DOING_AUTOSAVE ){
        return $postID;
    }

    // Grabs the extra field from the request and updates the post
    // meta with it.
    $ssuExtraField = '';
    if( isset( $_POST['ssu-extra-field'] ) ){
        $ssuExtraField = $_POST['ssu-extra-field'];
    }
    update_post_meta( $postID, 'ssu-extra-field', $ssuExtraField );
}