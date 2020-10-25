<?php

add_action('rest_api_init', 'gsc_rest_api_init');
function gsc_rest_api_init() {
	register_rest_route('shopotam-carousel/v1/', 'carousels-list', [
		'methods' => 'GET',
		'callback' => 'gsc_get_carousels',
	]);
	register_rest_route('shopotam-carousel/v1/', 'carousel-create', [
		'methods' => 'POST',
		'callback' => 'gsc_carousel_create',
	]);
	register_rest_route('shopotam-carousel/v1/', 'carousel-update', [
		'methods' => 'POST',
		'callback' => 'gsc_carousel_update',
	]);
	register_rest_route('shopotam-carousel/v1/', 'carousel-get', [
		'methods' => 'POST',
		'callback' => 'gsc_carousel_get',
	]);
}

function gsc_get_carousels($request) {
	$args = [
		'post_type' => 'shopotam',
		'posts_per_page' => -1,
	];
	$query = new WP_Query($args);
	$response = [];
	foreach ($query->posts as $post) {
		$response[] = [
			'key' => $post->ID,
			'name' => $post->post_title,
		];
	}
	return $response;
}

function gsc_carousel_create($request) {}
function gsc_carousel_update($request) {}

function gsc_carousel_get($request) {
	$id = $request->get_param('id');
	$arr = [
		'content' => do_shortcode("[shopotam-carousel id=$id]"),
	];

	return $arr;
}

