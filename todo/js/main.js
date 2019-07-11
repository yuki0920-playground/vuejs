var app = new Vue({
  el: '#app',
  methods: {
    addItem: function(event){
      // trueならreturnで終了
      if(this.newItem == '') return;
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