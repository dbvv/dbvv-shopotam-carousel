<?php
/**
 * Plugin Name:     Dbvv Shopotam Carousel
 * Plugin URI:      PLUGIN SITE HERE
 * Description:     PLUGIN DESCRIPTION HERE
 * Author:          YOUR NAME HERE
 * Author URI:      YOUR SITE HERE
 * Text Domain:     dbvv-shopotam-carousel
 * Domain Path:     /languages
 * Version:         0.1.0
 *
 * @package         Dbvv_Shopotam_Carousel
 */

// Your code starts here.
require plugin_dir_path(__FILE__) . "inc/parser.php";
require plugin_dir_path(__FILE__) . "inc/cpt.php";
require plugin_dir_path(__FILE__) . "inc/api.php";
require plugin_dir_path(__FILE__) . "inc/shortcode.php";

if (defined('WP_CLI') && WP_CLI) {
	require plugin_dir_path(__FILE__) . "inc/cli-test.php";
}

add_action( 'after_setup_theme', 'crb_load' );
function crb_load() {
    require_once( 'vendor/autoload.php' );
    \Carbon_Fields\Carbon_Fields::boot();
}


add_action("wp_enqueue_scripts", "dbvv_shopotam_carousel_scripts");
function dbvv_shopotam_carousel_scripts() {
	wp_enqueue_script('owl-carousel', plugin_dir_url(__FILE__) . 'assets/owl.carousel.min.js', ['jquery']);
	wp_enqueue_script('shopotam-carousel', plugin_dir_url(__FILE__) . 'assets/app.js', ['jquery', "owl-carousel"]);

	wp_enqueue_style("owl-carousel", plugin_dir_url(__FILE__) . 'assets/owl.carousel.min.css');
	wp_enqueue_style('owl-carousel-theme', plugin_dir_url(__FILE__) . 'assets/owl.theme.default.css');
	wp_enqueue_style('shopotam-carousel-style', plugin_dir_url(__FILE__) . 'assets/app.css', ['owl-carousel', 'owl-carousel-theme'], '0.1.1');
}

add_action('admin_enqueue_scripts', 'dbvv_shopotam_carousel_scripts_admin');
function dbvv_shopotam_carousel_scripts_admin() {
	wp_enqueue_script('owl-carousel', plugin_dir_url(__FILE__) . 'assets/owl.carousel.min.js', ['jquery']);
	wp_enqueue_script('shopotam-carousel', plugin_dir_url(__FILE__) . 'assets/app.js', ['jquery', "owl-carousel"]);
	wp_enqueue_style("owl-carousel", plugin_dir_url(__FILE__) . 'assets/owl.carousel.min.css');
	wp_enqueue_style('owl-carousel-theme', plugin_dir_url(__FILE__) . 'assets/owl.theme.default.css');
}

function gutenberg_shopotam_carousel_register_block() {

	wp_register_script(
		'gutenberg-shopotam-carousel',
		plugin_dir_url(__FILE__) . 'assets/block.js',
		[
			'wp-blocks', 'wp-element', 'wp-editor', 'wp-components'
		],
		'0.0.1'
	);

	wp_register_style(
		'gutenberg-shopotam-carousel-style',
		plugin_dir_url(__FILE__) . 'assets/app.css',
		[
			'wp-edit-blocks',
		],
		filemtime(plugin_dir_path(__FILE__) . 'assets/app.css')
	);

	register_block_type( 'shopotam/shopotam-carousel', array(
		'editor_script' => 'gutenberg-shopotam-carousel',
		'editor_style' => 'gutenberg-shopotam-carousel-style',
	));

	wp_localize_script('gutenberg-shopotam-carousel', 'gsc', [
		'rest' => [
			'carousels' => get_rest_url(0, '/shopotam-carousel/v1/carousels-list'),
			'carouselCreate' => get_rest_url(0, '/shopotam-carousel/v1/carousel-create'),
			'carouselGet' => get_rest_url(0, '/shopotam-carousel/v1/carousel-get'),
			'carouselUpdate' => get_rest_url(0, '/shopotam-carousel/v1/carousel-update'),
		],
	]);
}
add_action( 'init', 'gutenberg_shopotam_carousel_register_block'  );

