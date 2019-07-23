<template>
	<div>
		<ul>
			<li v-for="tarefa in tarefas">
				<DelTarefa :tarefa="tarefa"></DelTarefa>{{ tarefa }}
			</li>
		</ul>
	</div>
</template>
<script>
	import DelTarefa from './DelTarefa.vue'
	export default{
		name: 'tarefas',
		components: {DelTarefa},
		data() {
			return {
		}
		},
		computed: {
			tarefas(){
				return this.$store.getters.listaTarefas
			}
		}
	}
</script>
<style>

</style>