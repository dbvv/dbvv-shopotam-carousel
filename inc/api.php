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

function gsc_carousel_create($request) {
	$data = $request->get_params();

	$post_args = [
		'post_title' => $data['title'],
		'post_status' => 'publish',
		'post_type' => 'shopotam',
	];
	$post_id = wp_insert_post($post_args);

	$urls = [];
	foreach ($data['urls'] as $url) {
		$urls[] = [
			'url' => $url,
		];
	}

	carbon_set_post_meta($post_id, 'urls', $urls);
	$content = generate_shopotam_carousel_post_content($post_id);
	$edited = wp_update_post([
		'ID' => $post_id,
		'post_content' => $content,
	], true);
	return [
		'post_id' => $post_id,
		'error' => $edited,
	];
}
function gsc_carousel_update($request) {
	$data = $request->get_params();

	$post_args = [
		'ID' => $data['ID'],
		'post_title' => $data['title'],
		'post_type' => 'shopotam',
	];
	$post_id = wp_update_post($post_args);

	$urls = [];
	foreach ($data['urls'] as $url) {
		$urls[] = [
			'url' => $url,
		];
	}

	carbon_set_post_meta($post_id, 'urls', $urls);
	$content = generate_shopotam_carousel_post_content($post_id);
	$edited = wp_update_post([
		'ID' => $post_id,
		'post_content' => $content,
	], true);
	return [
		'post_id' => $post_id,
		'error' => $edited,
	];
}

function gsc_carousel_get($request) {
	$id = $request->get_param('id');
	$arr = [
		'content' => do_shortcode("[shopotam-carousel id=$id]"),
	];

	return $arr;
}

