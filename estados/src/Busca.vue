<template>
	<div>
		<label>Buscar por</label>
		<input type="text" v-model="termo">
		<ul>
			<li v-for="tarefa in resultado">{{ tarefa }}</li>
		</ul>
	</div>
</template>
<script>
	export default{
		name: 'Busca',
		data() {
			return {
				termo: ''
		}
		},
		computed:{
			resultado(){
				return this.$store.getters.buscarTarefas(this.termo)
			}
		},
	}
</script>
<style>
</style>