export default{
	adicionarTarefa(contexto, value){
		contexto.commit('ADD_TAREFA', value)
	},
	removerTarefa(contexto, value){
		contexto.commit('DEL_TAREFA', value)

	}
}