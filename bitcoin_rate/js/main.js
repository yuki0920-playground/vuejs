var app = new Vue({
  el: "#app",
  data: {
    bpi: null
  },
  // インスタンスがマウントされた後に呼び出される
  mounted: function() {
    axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
    .then(function(response){
      // console.log(response.data.bpi)
      // console.log(response.data.bpi.USD.rate_float)
      this.bpi = response.data.bpi
    }.bind(this))
    .catch(function(erro){
      console.log(erro)
    })
  }
})