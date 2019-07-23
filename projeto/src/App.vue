<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ curso }}</h1>
    <h2>Aprendizado Vue.js</h2>
    <app1></app1>
    <app2></app2>
    <h4>Lista de cursos Ordenada</h4>
    <listas :lista="['Matemática','Linguagem', 'Compuntaçao', 'Administraçao']" ordena></listas>

    <h4>Lista de cursos Desordenada</h4>
     <listas :lista="['Matemática','Linguagem', 'Compuntaçao', 'Administraçao']"></listas>

  <cartao titulo="Curso de ADS">
    Análise e desenvolvimento de <strong>sistemas</strong>
    <div slot="rodape">
      Curso de ADS do IFPI
    </div>
  </cartao>

  </div>
</template>

<script>
import app1 from './app1.vue'
import app2 from './app2.vue'
import listas from './list.vue'
import cartao from './cartao.vue'
export default {
  name: 'app',
  components: {app1, app2, listas, cartao},
  data () {
    return {
      curso: 'Front-End com Vue.js'
    }
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

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
