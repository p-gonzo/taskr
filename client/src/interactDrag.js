import interact from 'interactjs';
import axios from 'axios';



// target elements with the "draggable" class
interact('.draggable')
  .draggable({
    //inertia: true,
    restrict: {
      //restriction: "parent",
      endOnly: true,
      elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
    },
    // enable autoScroll
    autoScroll: true,
    onmove: dragMoveListener,
    onend: function (event) {
      //send the x/y position to a database
      axios.patch('/pads', event.target.dataset)
        .then(() => {
      console.log('pad info sent');
    });
 
    },
    ignoreFrom: '.task',
  });

  function dragMoveListener (event) {
    var target = event.target,
        // keep the dragged position in the data-x/data-y attributes
        x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
        y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

    // translate the element
    target.style.webkitTransform =
    target.style.transform =
      'translate(' + x + 'px, ' + y + 'px)';

    // update the posiion attributes
    target.setAttribute('data-x', x);
    target.setAttribute('data-y', y);
  }

  // this is used later in the resizing and gesture demos
  window.dragMoveListener = dragMoveListener;