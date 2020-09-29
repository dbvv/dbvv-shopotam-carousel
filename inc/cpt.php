<?php

add_action("init", "dbvv_shopotam_carousel_register_post_types");
function dbvv_shopotam_carousel_register_post_types() {
	// Custom Post Type: name
	$labels = array(
		'name'                => _x( 'Shopotam carousel items', ' General Name', 'dbvv-shopotam-carousel' ),
		'singular_name'       => _x( 'Shopotam carousel item', 'Shopotam carousel items Singular Name', 'dbvv-shopotam-carousel' ),
		'menu_name'           => __( 'Shopotam crousel', 'dbvv-shopotam-carousel' ),
		'parent_item_colon'   => __( 'Parent Shopotam carousel item:', 'dbvv-shopotam-carousel' ),
		'all_items'           => __( 'All Shopotam carousel items', 'dbvv-shopotam-carousel' ),
		'view_item'           => __( 'View Shopotam carousel item', 'dbvv-shopotam-carousel' ),
		'add_new_item'        => __( 'Add New Shopotam carousel item', 'dbvv-shopotam-carousel' ),
		'add_new'             => __( 'Add New', 'dbvv-shopotam-carousel' ),
		'edit_item'           => __( 'Edit Shopotam carousel item', 'dbvv-shopotam-carousel' ),
		'update_item'         => __( 'Update Shopotam carousel item', 'dbvv-shopotam-carousel' ),
		'search_items'        => __( 'Search Shopotam carousel item', 'dbvv-shopotam-carousel' ),
		'not_found'           => __( 'Not found', 'dbvv-shopotam-carousel' ),
		'not_found_in_trash'  => __( 'Not found in Trash', 'dbvv-shopotam-carousel' ),
	);
	$args = array(
		'label'               => $labels,
		'description'         => __( 'Shopotam carousel. Parsed and presaved data', 'dbvv-shopotam-carousel' ),
		'labels'              => $labels,
		'supports'            => array(
			"title",
			"editor",
			"custom_fields",
		),
		'public'              => true,
		'show_ui'             => true,
		'show_in_menu'        => true,
		'show_in_nav_menus'   => true,
		'show_in_admin_bar'   => true,
		'can_export'          => true,
		'publicly_queryable'  => true,
		'capability_type'     => 'post',
	);
	register_post_type( 'shopotam', $args );
}

use Carbon_Fields\Container;
use Carbon_Fields\Field;

add_action( 'carbon_fields_register_fields', 'crb_attach_theme_options' );
function crb_attach_theme_options() {
	Container::make( 'post_meta', __( 'Urls' ) )
		->where("post_type", "=", "shopotam")
		->add_fields( array(
			Field::make("complex", "urls", __("Product urls"))
				->add_fields([
					Field::make("text", "url", __("Shopotam product url")),
				]),
        ) );
}


