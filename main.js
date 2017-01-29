Vue.component('task-list', {

  template: '<li><slot></slot></li>',
  data() {
    return {
      message: 'sup'
    }
  }
});

new Vue({
  el: '#root'
})
