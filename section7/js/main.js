var app = new Vue ( {
	el: '#app',
	data: {
		colors: [
			{ name: 'Red' },
			{ name: 'Green' },
			{ name: 'Blue' },
		]
	 },
	 watch: {
		 colors: {
			 handler: function(newValue, oldValue){
				 console.log('Update')
			 },
			//  配列colors配下のcolorが変更されるたび呼び出される
			 deep: true
		 }
	 }
})