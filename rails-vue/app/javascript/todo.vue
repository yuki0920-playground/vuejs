<template>
  <div id="app">
    <h1>Todo List</h1>
    <form v-on:click.prevent>
      <!-- 入力値を双方向データバインディング -->
      <input type="text" v-model="newItem">
      <button v-on:click="addItem">
        Add
      </button>
    </form>
    <pre>{{ $data }}</pre>
    <ul>
      <!-- 第1引数value,第2引数value -->
      <li v-for="(todo, index) in todos">
        <!-- 入力の真偽値を双方向データバインディング -->
        <input type="checkbox" v-model="todo.isDone">
        <!-- 動的にクラスを設定 -->
        <span v-bind:class="{ done: todo.isDone }">{{ todo.item }}</span>
        <!-- クリック時にindexを渡した上でイベントを呼ぶ -->
        <button v-on:click="deleteItem(index)">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      newItem: '',
      todos: []
    }
  },
  methods: {
    addItem: function(event) {
      // ボタン押下時のイベントのデバッグ
      // alert();
      // newItemが空の時は何も実行しない
      if (this.newItem === '') return;
      // オブジェクトとしてタスクを定義する(オブジェクトの定義は手続き内)
      // todo.itemでitemを取得
      var todo = {
        item: this.newItem,
        isDone: false
      };
      // 配列todosに定義したtodoを追加
      this.todos.push(todo);
      this.newItem = '';
    },
    deleteItem: function(index) {
      alert(index);
      this.todos.splice(index, 1)
    }
  }
}
</script>

<style scoped>
#app ul {
  list-style: none;
}
#app li > span.done {
  text-decoration: line-through;
}
</style>