<?php
    // Loads the extra field to pre-populate the post field 
    $extraField = get_post_meta( $post->ID, 'ssu-extra-field', true );
?>
<div>
    <div>
        <label for="ssu-extra-field">SSU Extra Field</label><br>
        <input name="ssu-extra-field" type="text" value="<?php echo $extraField; ?>"/>
    </div>
</div>