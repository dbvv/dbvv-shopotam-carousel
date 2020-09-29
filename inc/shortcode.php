<?php

function dbvv_shopotam_carousel_shortcode( $atts ){
	if (!isset($atts['id'])) return;

	$post_id = $atts["id"];
	return get_post($post_id)->post_content;
}
add_shortcode('shopotam-carousel', 'dbvv_shopotam_carousel_shortcode');

