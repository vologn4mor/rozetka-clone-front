// import Vue from 'vue';
//
// Vue.directive('custom-click-outside', {
//   bind(el, binding, vnode) {
//     const vm = vnode.context;
//     const callback = binding.value;
//
//     el.clickOutsideEvent = function(event) {
//       if (!(el === event.target || el.contains(event.target))) {
//         return callback.call(vm, event);
//       }
//     };
//     document.body.addEventListener('click', el.clickOutsideEvent);
//   },
//   unbind(el) {
//     document.body.removeEventListener('click', el.clickOutsideEvent);
//   },
// });

import Vue from 'vue';

Vue.directive('click-outside', {
  bind: function(el, binding, vnode) {
    el.eventSetDrag = function() {
      el.setAttribute('data-dragging', 'yes');
    };
    el.eventClearDrag = function() {
      el.removeAttribute('data-dragging');
    };
    el.eventOnClick = function(event) {
      const dragging = el.getAttribute('data-dragging');
      // Check that the click was outside the el and its children, and wasn't a drag
      if (!(el === event.target || el.contains(event.target)) && !dragging) {
        // call method provided in attribute value
        vnode.context[binding.expression](event);
      }
    };
    document.addEventListener('touchstart', el.eventClearDrag);
    document.addEventListener('touchmove', el.eventSetDrag);
    document.addEventListener('click', el.eventOnClick);
    document.addEventListener('touchend', el.eventOnClick);
  }, unbind: function(el) {
    document.removeEventListener('touchstart', el.eventClearDrag);
    document.removeEventListener('touchmove', el.eventSetDrag);
    document.removeEventListener('click', el.eventOnClick);
    document.removeEventListener('touchend', el.eventOnClick);
    el.removeAttribute('data-dragging');
  },
});
