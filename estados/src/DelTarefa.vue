<template>
	<div>
		<button @click="apagar(tarefa)">Apagar</button>
	</div>
</template>
<script>
import { mapActions }from 'vuex'
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
			...mapActions({
				apagar: 'removerTarefa'
			})
		}
	}
</script>
<style>
</style>