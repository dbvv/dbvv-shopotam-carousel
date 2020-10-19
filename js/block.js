( function( blocks, element, editor ) {
    var el = element.createElement;
	const RichText = editor.RichText;

    var blockStyle = {
        backgroundColor: '#900',
        color: '#fff',
        padding: '20px',
    };

    blocks.registerBlockType('shopotam/shopotam-carousel', {
		title: 'Shopotam Carousel',
		icon: 'universal-access-alt',
		category: 'design',
		example: {
			attributes: {
				content: 'Hello world',
			}
		},

		edit: function(props) {
			var content = props.attributes.content;
			function onChangeContent(newContent) {
				props.setAttributes({
					content: newContent,
				});
			}

			function onButtonClick() {
				console.log('Button clicked');
			}
            return el(
				RichText,
				{
					tagName: 'p',
					className: props.className,
					onChange: onChangeContent,
					value: content,
				}
				//el(
					//'button',
					//{
						//onClick: onButtonClick,
					//},
					//'Edit carousel'
				//)

            );
        },
        save: function(props) {
            return el(
				RichText.Content, {
					tagName: 'p',
					value: props.attributes.content + " sss ",
				}
            );
        },
    } );
}(
    window.wp.blocks,
    window.wp.element,
	window.wp.editor
) );

