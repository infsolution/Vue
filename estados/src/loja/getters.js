export default{
	listaTarefas: estado => {
		let lista = estado.tarefas.slice()
		return lista.reverse()
	},
	buscarTarefas: estado => termo => {
		let resultado = []
		if(termo != ''){
			for(let i = 0; i < estado.tarefas.length; i++){
				if(estado.tarefas[i].indexOf(termo) > -1){
					resultado.push(estado.tarefas[i])
				}
			}
		}
		return resultado
	},
}