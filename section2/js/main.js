var app = new Vue ( {
	el: '#app',
	data : {
		message: 'Hello Vue.js!',
		url: 'https://jp.vuejs.org',
		toggle: true,
		languages: ['JavaScript', 'Ruby', 'Python']
	},
  methods: {
  	clickHandler: function() {
    	this.message = 'Clicked!'
    }
	}
})