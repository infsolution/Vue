<template>
	<div>
		<button @click="apagar">Apagar</button>
	</div>
</template>
<script>
	export default{
		name: 'DelTarefa',
		props:{
			tarefa: {
				required: true,
				type: String
			}
		},
		data() {
			return {
		}
		},
		methods:{
			apagar(){
				this.$store.dispatch('removerTarefa', this.tarefa)
			}
		}
	}
</script>
<style>
</style>