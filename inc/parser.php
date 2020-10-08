<?php

use KubAT\PhpSimple\HtmlDomParser;

class Parser {
	private $url;
	private $parsedData;

	public function __construct($url) {
		$this->url = $url;
	}

	public function parse() {
		$str = file_get_contents($this->url);
		$dom = HtmlDomParser::str_get_html( $str );
		$meta = $dom->find('[type="application/ld+json"]');

		if (count($meta) == 0) {
			return false;
		}

		$this->parsedData = json_decode($meta[0]->innertext, true);
		$orderForm = $dom->find('[id="order-form"]')[0];
		$dataVariations = $orderForm->attr['data-variations'];
		$data = json_decode(htmlspecialchars_decode($dataVariations), true);
		if (isset($data['combinations']) && count($data['combinations']) > 0) {
			$combination = $data['combinations'][0];
			if (isset($combination['price_old_formatted'])) {
				$this->parsedData['originalPrice'] = $combination['price_old_formatted'];
			}
		}
		return true;

	}

	public function getParsedData() {
		return $this->parsedData;
	}
}
