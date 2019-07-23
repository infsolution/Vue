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
	import {mapGetters} from 'vuex'
	export default{
		name: 'tarefas',
		components: {DelTarefa},
		data() {
			return {
		}
		},
		computed: {
			...mapGetters({
				tarefas:'listaTarefas'
			})
		}
	}
</script>
<style>

</style>