"use strict";

(function (blocks, element, editor, components) {
  var el = element.createElement;
  var RichText = editor.RichText; // inspector controls

  var InspectorControls = editor.InspectorControls;
  var PanelBody = components.PanelBody;
  var PanelRow = components.PanelRow;
  var InputControl = components.TextControl;
  var blockStyle = {
    backgroundColor: '#900',
    color: '#fff',
    padding: '20px'
  };
  blocks.registerBlockType('shopotam/shopotam-carousel', {
    title: 'Shopotam Carousel',
    icon: 'universal-access-alt',
    category: 'design',
    example: {
      attributes: {
        content: 'Hello world'
      }
    },
    edit: function edit(props) {
      var content = props.attributes.content;
      var carouselItems = props.attributes.carouselItems;

      function onChangeContent(newContent) {
        props.setAttributes({
          content: newContent
        });
      }

      function onButtonClick() {
        console.log('Button clicked');
      }

      return [el(RichText, {
        tagName: 'p',
        className: props.className,
        onChange: onChangeContent,
        value: content
      }), el(InspectorControls, null, el(PanelBody, {
        initialOpen: true,
        title: 'Shopotam Carousel Settings'
      }, el(PanelRow, null, el(InputControl, {
        label: 'Carousel items',
        value: carouselItems,
        type: 'number',
        onChange: function onChange(newValue) {
          props.setAttributes({
            carouselItems: newValue
          });
        }
      }))))];
    },
    save: function save(props) {
      return el(RichText.Content, {
        tagName: 'p',
        value: " sss "
      });
    }
  });
})(window.wp.blocks, window.wp.element, window.wp.editor, window.wp.components);

