(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

(function (blocks, element, editor) {
  var el = element.createElement;
  var RichText = editor.RichText;
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

      function onChangeContent(newContent) {
        props.setAttributes({
          content: newContent
        });
      }

      function onButtonClick() {
        console.log('Button clicked');
      }

      return el(RichText, {
        tagName: 'p',
        className: props.className,
        onChange: onChangeContent,
        value: content
      } //el(
      //'button',
      //{
      //onClick: onButtonClick,
      //},
      //'Edit carousel'
      //)
      );
    },
    save: function save(props) {
      return el(RichText.Content, {
        tagName: 'p',
        value: props.attributes.content + " sss "
      });
    }
  });
})(window.wp.blocks, window.wp.element, window.wp.editor);

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJqcy9ibG9jay5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUUsV0FBVSxNQUFWLEVBQWtCLE9BQWxCLEVBQTJCLE1BQTNCLEVBQW9DO0FBQ2xDLE1BQUksRUFBRSxHQUFHLE9BQU8sQ0FBQyxhQUFqQjtBQUNILE1BQU0sUUFBUSxHQUFHLE1BQU0sQ0FBQyxRQUF4QjtBQUVHLE1BQUksVUFBVSxHQUFHO0FBQ2IsSUFBQSxlQUFlLEVBQUUsTUFESjtBQUViLElBQUEsS0FBSyxFQUFFLE1BRk07QUFHYixJQUFBLE9BQU8sRUFBRTtBQUhJLEdBQWpCO0FBTUEsRUFBQSxNQUFNLENBQUMsaUJBQVAsQ0FBeUIsNEJBQXpCLEVBQXVEO0FBQ3pELElBQUEsS0FBSyxFQUFFLG1CQURrRDtBQUV6RCxJQUFBLElBQUksRUFBRSxzQkFGbUQ7QUFHekQsSUFBQSxRQUFRLEVBQUUsUUFIK0M7QUFJekQsSUFBQSxPQUFPLEVBQUU7QUFDUixNQUFBLFVBQVUsRUFBRTtBQUNYLFFBQUEsT0FBTyxFQUFFO0FBREU7QUFESixLQUpnRDtBQVV6RCxJQUFBLElBQUksRUFBRSxjQUFTLEtBQVQsRUFBZ0I7QUFDckIsVUFBSSxPQUFPLEdBQUcsS0FBSyxDQUFDLFVBQU4sQ0FBaUIsT0FBL0I7O0FBQ0EsZUFBUyxlQUFULENBQXlCLFVBQXpCLEVBQXFDO0FBQ3BDLFFBQUEsS0FBSyxDQUFDLGFBQU4sQ0FBb0I7QUFDbkIsVUFBQSxPQUFPLEVBQUU7QUFEVSxTQUFwQjtBQUdBOztBQUVELGVBQVMsYUFBVCxHQUF5QjtBQUN4QixRQUFBLE9BQU8sQ0FBQyxHQUFSLENBQVksZ0JBQVo7QUFDQTs7QUFDUSxhQUFPLEVBQUUsQ0FDakIsUUFEaUIsRUFFakI7QUFDQyxRQUFBLE9BQU8sRUFBRSxHQURWO0FBRUMsUUFBQSxTQUFTLEVBQUUsS0FBSyxDQUFDLFNBRmxCO0FBR0MsUUFBQSxRQUFRLEVBQUUsZUFIWDtBQUlDLFFBQUEsS0FBSyxFQUFFO0FBSlIsT0FGaUIsQ0FRakI7QUFDQztBQUNBO0FBQ0M7QUFDRDtBQUNBO0FBQ0Q7QUFkaUIsT0FBVDtBQWlCSCxLQXRDa0Q7QUF1Q25ELElBQUEsSUFBSSxFQUFFLGNBQVMsS0FBVCxFQUFnQjtBQUNsQixhQUFPLEVBQUUsQ0FDakIsUUFBUSxDQUFDLE9BRFEsRUFDQztBQUNqQixRQUFBLE9BQU8sRUFBRSxHQURRO0FBRWpCLFFBQUEsS0FBSyxFQUFFLEtBQUssQ0FBQyxVQUFOLENBQWlCLE9BQWpCLEdBQTJCO0FBRmpCLE9BREQsQ0FBVDtBQU1IO0FBOUNrRCxHQUF2RDtBQWdESCxDQTFEQyxFQTJERSxNQUFNLENBQUMsRUFBUCxDQUFVLE1BM0RaLEVBNERFLE1BQU0sQ0FBQyxFQUFQLENBQVUsT0E1RFosRUE2REQsTUFBTSxDQUFDLEVBQVAsQ0FBVSxNQTdEVCxDQUFGIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiKCBmdW5jdGlvbiggYmxvY2tzLCBlbGVtZW50LCBlZGl0b3IgKSB7XG4gICAgdmFyIGVsID0gZWxlbWVudC5jcmVhdGVFbGVtZW50O1xuXHRjb25zdCBSaWNoVGV4dCA9IGVkaXRvci5SaWNoVGV4dDtcblxuICAgIHZhciBibG9ja1N0eWxlID0ge1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjOTAwJyxcbiAgICAgICAgY29sb3I6ICcjZmZmJyxcbiAgICAgICAgcGFkZGluZzogJzIwcHgnLFxuICAgIH07XG5cbiAgICBibG9ja3MucmVnaXN0ZXJCbG9ja1R5cGUoJ3Nob3BvdGFtL3Nob3BvdGFtLWNhcm91c2VsJywge1xuXHRcdHRpdGxlOiAnU2hvcG90YW0gQ2Fyb3VzZWwnLFxuXHRcdGljb246ICd1bml2ZXJzYWwtYWNjZXNzLWFsdCcsXG5cdFx0Y2F0ZWdvcnk6ICdkZXNpZ24nLFxuXHRcdGV4YW1wbGU6IHtcblx0XHRcdGF0dHJpYnV0ZXM6IHtcblx0XHRcdFx0Y29udGVudDogJ0hlbGxvIHdvcmxkJyxcblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0ZWRpdDogZnVuY3Rpb24ocHJvcHMpIHtcblx0XHRcdHZhciBjb250ZW50ID0gcHJvcHMuYXR0cmlidXRlcy5jb250ZW50O1xuXHRcdFx0ZnVuY3Rpb24gb25DaGFuZ2VDb250ZW50KG5ld0NvbnRlbnQpIHtcblx0XHRcdFx0cHJvcHMuc2V0QXR0cmlidXRlcyh7XG5cdFx0XHRcdFx0Y29udGVudDogbmV3Q29udGVudCxcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cblx0XHRcdGZ1bmN0aW9uIG9uQnV0dG9uQ2xpY2soKSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCdCdXR0b24gY2xpY2tlZCcpO1xuXHRcdFx0fVxuICAgICAgICAgICAgcmV0dXJuIGVsKFxuXHRcdFx0XHRSaWNoVGV4dCxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHRhZ05hbWU6ICdwJyxcblx0XHRcdFx0XHRjbGFzc05hbWU6IHByb3BzLmNsYXNzTmFtZSxcblx0XHRcdFx0XHRvbkNoYW5nZTogb25DaGFuZ2VDb250ZW50LFxuXHRcdFx0XHRcdHZhbHVlOiBjb250ZW50LFxuXHRcdFx0XHR9XG5cdFx0XHRcdC8vZWwoXG5cdFx0XHRcdFx0Ly8nYnV0dG9uJyxcblx0XHRcdFx0XHQvL3tcblx0XHRcdFx0XHRcdC8vb25DbGljazogb25CdXR0b25DbGljayxcblx0XHRcdFx0XHQvL30sXG5cdFx0XHRcdFx0Ly8nRWRpdCBjYXJvdXNlbCdcblx0XHRcdFx0Ly8pXG5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH0sXG4gICAgICAgIHNhdmU6IGZ1bmN0aW9uKHByb3BzKSB7XG4gICAgICAgICAgICByZXR1cm4gZWwoXG5cdFx0XHRcdFJpY2hUZXh0LkNvbnRlbnQsIHtcblx0XHRcdFx0XHR0YWdOYW1lOiAncCcsXG5cdFx0XHRcdFx0dmFsdWU6IHByb3BzLmF0dHJpYnV0ZXMuY29udGVudCArIFwiIHNzcyBcIixcblx0XHRcdFx0fVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSxcbiAgICB9ICk7XG59KFxuICAgIHdpbmRvdy53cC5ibG9ja3MsXG4gICAgd2luZG93LndwLmVsZW1lbnQsXG5cdHdpbmRvdy53cC5lZGl0b3JcbikgKTtcblxuIl19
