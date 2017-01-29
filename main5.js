Vue.component('message',{

  props: ['title', 'body'],

  template: `
    <article class="message">
      <div class="message-header">
        {{ title }}
        <button class="delete"></button>
      </div>
      <div class="message-body">
        {{ body }}
    </article>
  `
});




new Vue({
  el: '#root'
})
