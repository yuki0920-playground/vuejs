// 第1引数にコンポーネント名、第2引数にテンプレート
Vue.component('hello-component', {
	template: '<p>Hello</p>'
})

var app = new Vue ( {
	el: '#app',
})