var app = new Vue ( {
	el: '#app',
	data: {
		message: 'Hello Vue.js!'
	},
	// 複雑な処理をjsに切り出すためのプロパティ
	computed: {
		reversedMessage: function(){
			return this.message.split('').reverse().join('')
		}
	},
	// メソッドのため()が必要
	methods: {
		reversedMessageMethod: function(){
			return this.message.split('').reverse().join('')
		}
	}
})