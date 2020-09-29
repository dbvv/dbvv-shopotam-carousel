<?php
require "vendor/autoload.php";
require 'inc/parser.php';

$urls = [
	"https://shopotam.ru/market/detyam/tovary-dlya-shkoly/elektronika-dlya-ucheby/smartfony/apple/iphone-xs-max-6-5-oled-2688x1242-a12-bionic-64gb-802-11ac-2x-12mp-7mp-face-id-ios-12-7110355.html",
];

foreach ($urls as $url) {
	$parser = new Parser($url);
	$parser->parse();
	$data = $parser->getParsedData();
	var_dump($data);
}
