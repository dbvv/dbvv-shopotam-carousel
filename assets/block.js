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
				default: [
					'sss',
					'urls',
				],
			},
		},
		edit: function (props) {
			var content = props.attributes.content;
			var carouselItems = props.attributes.carouselItems;

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
				console.log('Button clicked');
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

			function editModalContent(ID = null, post_title = '', urls = []) {


			}

			function UrlsList(urls = []) {
				var els = [];
				var onUrlChange = function (e) {
					console.log('url_changed', e);
				}
				for (var i = 0; i < urls.length; i++) {
					els.push(el(
						RichText,
						{
							onChange: onUrlChange,
							value: urls[i],
							className: 'url',
							blockStyle: {
								border: '1px solid black',
								marginBottom: '10px',
							},
						}
					));
				}
				return els;
			}

			function onEditModalRequestClose () {
				props.setAttributes({
					isOpenEditModal: false,
				});
			}

			var EditModal = function () {
				console.log('isOpenEditModal', props.attributes.isOpenEditModal);
				if (props.attributes.isOpenEditModal) {
					return el(Modal, {
						title: 'Редактировать',
						onRequestClose: onEditModalRequestClose,
					}, [
						el(RichText, {
							value: 'text',
						}, 	UrlsList(props.attributes.urls)),



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
				EditModal(),

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

