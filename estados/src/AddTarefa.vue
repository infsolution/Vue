<template>
	<div>
		<input type="text" v-model="tarefa">
		<button @click="submeterTarefa">Add</button>
	</div>
</template>
<script>
	import {mapActions} from 'vuex'
	export default{
		name: 'addTarefa',
		data() {
			return {
				tarefa: ''
		}
		},
		methods:{
			...mapActions({
				adicionar: 'adicionarTarefa'
			}),
			submeterTarefa(){
			if(this.tarefa != ''){
				this.adicionar(this.tarefa)
			}
			this.tarefa = ''
			}
		}
	}
</script>
<style>
</style>