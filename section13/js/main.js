// 第1引数にコンポーネント名、第2引数にテンプレート
// Vue.component('hello-component', {
// 	template: '<p>Hello</p>'
// })

// 変数にテンプレートを代入し、componentプロパティで呼び出す
var helloComponent = {
	template: '<p>Hello</p>'
}

var app = new Vue ( {
	el: '#app',
	components: {
		'hello-component': helloComponent
	}
})