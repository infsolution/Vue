<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ $store.state.nome }}</h1>
    <AddTarefa></AddTarefa>
    <Tarefas></Tarefas>
    <Busca></Busca>
  </div>
</template>

<script>
import AddTarefa from './AddTarefa.vue'
import Tarefas from './Tarefas.vue'
import Busca from './Busca.vue'
import {mapState} from 'vuex'

export default {
  name: 'app',
  components:{AddTarefa, Tarefas, Busca},
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed: {
    ...mapState(['nome'])
  },
  // mounted(){
  //   setTimeout(()=>{
  //     this.$store.state.nome = 'Marcelia'
  //   }, 3000)
  // },
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
  margin: 10 10px;
}*/

a {
  color: #42b983;
}
</style>
