<?php

WP_CLI::add_command('parser-test', 'sc_test');

function sc_test() {
	$urls = [
		'https://shopotam.com/kompyuternaya-tehnika/komplektuyushchie/korpusa/azza/atx-mid-tower-155-mm-atx-micro-atx-5-25-5-x-2-5-3-x-3-5-7-x-expansion-slots-2-x-120-mm-532-x-198-x-453-mm-6-3-kg-7572353.html'
	];

	foreach ($urls as $url) {
		$parser = new Parser($url);
		$parser->parse();
		$data = $parser->getParsedData();
		dump($data);
	}
}
