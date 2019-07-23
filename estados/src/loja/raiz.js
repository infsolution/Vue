import Vue from 'vue'
import Vuex from 'vuex'
import estado from './estado'
import mutacoes from './mutacoes'
import getters from './getters'
import acoes from './acoes'

Vue.use(Vuex)

export default new Vuex.Store({
	state: estado,
	mutations: mutacoes,
	getters: getters,
	actions: acoes
})