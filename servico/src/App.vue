<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>Nossas Listas</h1>
    <Lista titulo="Carros" :lista="carros"></Lista>
    <Lista titulo="Aviões" :lista="avioes"></Lista>

  </div>
</template>

<script>
import Carro from './servicos/carros'
import Aviao from './servicos/avioes'
import Lista from './Lista.vue'
export default {
  name: 'app',
  components: {Lista},
  data () {
    return {
      carros:{},
      avioes: {}
    }
  },
  mounted(){
    Carro.lista().then(dado => this.carros = dado.data)
    Aviao.lista().then(dado => this.avioes = dado.data)
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

/*ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}*/

a {
  color: #42b983;
}
</style>
