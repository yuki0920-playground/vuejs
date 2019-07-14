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
				 console.log('Update'),
				//  deeオプションは古い値が新しい値に書き換えられる仕様
				 console.log('new %s, oldValue %s',
					JSON.stringify(newValue, null, '\t'),
					JSON.stringify(oldValue, null, '\t'))
			 },
			//  配列colors配下のcolorが変更されるたび呼び出される
			 deep: true,
			//  初期読み込み時にフックする
			 immediate: true
		 }
	 }
})