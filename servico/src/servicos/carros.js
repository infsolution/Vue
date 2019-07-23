import {http} from './configuracoes.js'

export default{
	lista: ()=> {
		return http.get('/dados/carro.json')
	}
}