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
		//echo $str;
		$dom = HtmlDomParser::str_get_html( $str );
		$meta = $dom->find('[type="application/ld+json"]');

		if (count($meta) == 0) {
			return false;
		}

		$this->parsedData = json_decode($meta[0]->innertext, true);
		$orderForm = $dom->find('#order-form');
		$dataVariations = $orderForm->atts['data-variations'];
		$originalPrice = 11;
		$this->parsedData['originalPrice'] = $originalPrice;
		return true;

	}

	public function getParsedData() {
		return $this->parsedData;
	}
}
