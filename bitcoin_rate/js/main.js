var app = new Vue({
  el: "#app",
  data: {
    bpi: null
  },
  // インスタンスがマウントされた後に呼び出される
  mounted: function() {
    axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
    .then(function(response){
      console.log(response)
    })
  }
})