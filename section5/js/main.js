Vue.filter('numberFormat', function(value) {
	return value.toLocaleString()
}
)

var app = new Vue ({
	el: "#app",
	data: {
		price: 29800000,
	},
	// filters: {
	// 	numberFormat: function(value){
	// 		return value.toLocaleString()
	// 	}
	// }
})