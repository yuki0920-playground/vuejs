Vue.component('button-counter', {
	data: function(){
		// dataのオブジェクトは関数
		// data:{count:0}ではない
		return {
			count: 0
		}
	},
	// template: '<button v-on:click="count++">{{ count }}</button>'
	// divで囲うとspanタグbuttonタグなど複数のタグを使用できる
	template: '<div><span>count:</span><button v-on:click="count++">{{ count }}</button></div>'
})
var app = new Vue ( {
	el: '#app',
})