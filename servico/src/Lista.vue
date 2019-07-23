<template>
	<div>
		<h2>Lista de {{titulo}}</h2>
		<ul>
			<li v-for="item in lista">{{item.nome}} de {{ item.marca }}</li>
		</ul>
	</div>
</template>
<script>
	export default{
		name: 'Lista',
		props: {
			titulo: null,
			lista: {
				required: true,
				type: Array | Object
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