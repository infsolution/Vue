<template>
	<div>
		<ul>
			<li v-for="item in lista">{{ item }}</li>
		</ul>
	</div>
</template>
<script>
	export default{
		name: 'listas',
		props:{
			ordena:null,
			lista:{
				required:true,
				type: Array,
				default:[]
			}
		},
		created(){
			if(typeof this.ordena != 'undefined'){
				this.lista.sort()
			}
		},
		data() {
			return {
		}
		},
	}
</script>
<style>
</style>