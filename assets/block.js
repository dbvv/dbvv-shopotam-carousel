"use strict";

(function ($, blocks, element, editor, components) {
	var el = element.createElement;
	var RichText = editor.RichText; // inspector controls
	var html = function (html) {
		return {
			__html: html,
		};
	}

	var InspectorControls = editor.InspectorControls;
	var InnerBlocks = editor.InnerBlocks;

	var Button = components.Button;
	var CustomSelectControl = components.CustomSelectControl;
	var Disabled = components.Disabled;
	var InputControl = components.TextControl;
	var Modal = components.Modal;
	var PanelBody = components.PanelBody;
	var PanelRow = components.PanelRow;

	var blockStyle = {
		backgroundColor: '#900',
		color: '#fff',
		padding: '20px'
	};
	let carousels = [];
	$.ajax({
		url: window.gsc.rest.carousels,
		success: function (data) {
			carousels = data;
		}
	});
	blocks.registerBlockType('shopotam/shopotam-carousel', {
		title: 'Shopotam Carousel',
		icon: 'universal-access-alt',
		category: 'design',
		example: {
			attributes: {
				content: '<p></p>',
			},
		},
		attributes: {
			content: {
				type: 'string',
				default: '',
			},
			carouselID: {
				type: 'string',
				source: 'attribute',
				selector: '.shopotam-items-carousel',
				attribute: 'data-id',
			},
			isOpenEditModal: {
				type: 'boolean',
				default: false,
			},
			urls: {
				type: 'array',
				selector: 'a',
				source: 'query',
				query: {
					url : {
						type: 'string',
						attribute: 'href',
						source: 'attribute',

					}
				},
				default: [
				],
			},
			urlsChanged: {
				type: 'string',
				default: Date.now(),
			},
		},
		componentDidUpdate: function (prevProps) {
			console.log(prevProps);
		},
		edit: function (props) {
			var content = props.attributes.content;
			var carouselItems = props.attributes.carouselItems;
			console.log('props', props)

			function onChangeContent(newContent) {
				props.setAttributes({
					content: newContent
				});
			}

			function onChangeCarouselSelect(e) {
				$.ajax({
					url: window.gsc.rest.carouselGet,
					method: 'POST',
					data: {
						id: e.selectedItem.key,
					},
					success: function (data) {
						props.setAttributes({
							content: data.content,
						});
						setTimeout(carouselReinit, 1000);
					},
				});
			}

			function onButtonClick() {
				props.setAttributes({
					isOpenEditModal: true,
				});
			}

			function carouselReinit() {
				$(".shopotam-items-carousel").owlCarousel({
					nav: true,
					navText: ['', ''],
					dots: false,
					items: 3,
					loop: true,
					responsive: {
						0: {
							items: 2,
							stagePadding: 20,
							nav: false,
						},
						576: {
							items: 3,
							stagePadding: 50,
							nav: true,
						},
					}
				});
			}

			var CarouselsSelect = function () {
				var value = carousels.find(function (option) {
					return option.key === parseInt(props.attributes.carouselID);
				})
				return el(CustomSelectControl, {
					label: 'select carousel',
					options: carousels,
					onChange: onChangeCarouselSelect,
					value: value,
				});
			};

			function onEditModalRequestClose () {
				props.setAttributes({
					isOpenEditModal: false,
				});
			}

			function UrlsList(urls = []) {
				return urls.map(function (itemLabel, id) {
					return el('li', {
						id: id
					}, el(RichText, {
						value: itemLabel.url,
						style: {
							padding: '5px',
							border: '1px solid black',
							marginBottom: '5px',
						},
						onChange: function (newValue) {
							let urls = props.attributes.urls;
							urls[id].url = newValue;
							props.setAttributes({
								urls: urls,
							})
						}
					}));
				});
			}

			var EditModal = function (urlsList = []) {
				if (props.attributes.isOpenEditModal) {
					console.log('urls_init', urlsList);
					return el(Modal, {
						title: 'Редактировать',
						onRequestClose: onEditModalRequestClose,
					}, [
						el(RichText, {
							value: 'text',
							onChange: function (e) {
								console.log('e', e)
							}
						}),
						el('ol', null, [
							UrlsList(urlsList),
							el(Button, {
								onClick: function () {
									//var urls = props.attributes.urls;
									var urls = urlsList;
									urls.push('');
									props.setAttributes({
										urls: [],
									});
									props.setAttributes({
										urls: urls,
									});
								},
							}, 'Добавить ссылку'),
						el(Button, {
							isPrimary: true,
							onClick: function () {
								console.log('urls', props.attributes.urls)
							},
						}, 'Сохранить'),

					  ])

					]);
				}
			}

			setTimeout(carouselReinit, 2000);

			return [
				el(RichText, {
					className: props.className,
					onChange: carouselReinit,
					dangerouslySetInnerHTML:  html(props.attributes.content),
					value: props.attributes.content,
					disabled: true,
					formattingControls: [],
				}),
				EditModal(props.attributes.urls),

				el(Button, {
					isPrimary: true,
					label: 'Редактировать',
					onClick: onButtonClick,
				}, 'Редактировать'),
				el(InspectorControls, null, el(PanelBody, {
					initialOpen: true,
					title: 'Shopotam Carousel Settings'
				},
					[
						el(PanelRow, null, el(InputControl, {
							label: 'Carousel items',
							value: carouselItems,
							type: 'number',
							onChange: function (newValue) {
								props.setAttributes({
									carouselItems: newValue
								});
							}
						})),
						el(PanelRow, null, CarouselsSelect()),
						,
					],
				))];
		},
		save: function save(props) {
			return el(RichText.Content, {
				tagName: 'div',
				value: props.attributes.content,
			});
		}
	});
})(jQuery, window.wp.blocks, window.wp.element, window.wp.blockEditor, window.wp.components);

