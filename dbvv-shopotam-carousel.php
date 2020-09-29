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

