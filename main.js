Vue.component('task-list', {

  template:
    `<div>
        <task v-for="task in tasks">{{ task.description }}</task>
    </div>
    `,

  data() {
    return {
      tasks: [
        { description: 'write code', completed: false },
        { description: 'rewrite resume', completed: false },
        { description: 'call mom', completed: false },
        { description: 'return clothes to store', completed: false },
        { description: 'be awesome', completed: false },
        { description: 'go running', completed: false },
        { description: 'profit', completed: false }
      ]
    }
  }
});

Vue.component('task', {

  template: '<li><slot></slot></li>',

});



new Vue({
  el: '#root'
})
