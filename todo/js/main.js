var app = new Vue({
  el: '#app',
  methods: {
    addItem: function(event){
      var todo = {
        item: this.newItem
      };
      this.todos.push(todo);
      this.newItem = ''
    }
  },
  data: {
    newItem: '',
    todos: [],
  }
})