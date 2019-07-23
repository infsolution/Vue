<template>
	<div>
		<input type="text" v-model="tarefa">
		<button @click="adicionar">Add</button>
	</div>
</template>
<script>
	export default{
		name: 'addTarefa',
		data() {
			return {
				tarefa: ''
		}
		},
		methods:{
			adicionar(){
				if(this.tarefa != ''){
					this.$store.dispatch('adicionarTarefa',this.tarefa)
				}
				this.tarefa = ''
			}
		}
	}
</script>
<style>
</style>