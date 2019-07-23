<template>
	<div>
		<div class="cartao">
			<h2>{{ titulo }}</h2>
			<slot></slot>
			<hr>
			<slot name="rodape"></slot>
		</div>
</div>
	</div>
</template>
<script>
	export default{
		name: 'cartao',
		props:['titulo', 'conteudo'],
		data() {
			return {
		}
		},
	}
</script>
<style>
	.cartao { border: 1px solid #000; padding: 10px; }
</style>