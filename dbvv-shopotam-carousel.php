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
require plugin_dir_path(__FILE__) . "inc/shortcode.php";

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
