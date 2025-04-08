<template>
  <div class="painel">
    <h2 class="painel-titulo">{{ titulo }}</h2>
    <slot class="painel-conteudo"></slot>
  </div>
</template>

<script>
export default {  
  props: ['titulo']
}
</script>

<style scoped>
.painel {
  padding: 0 auto;
  border: solid 2px grey;
  display: inline-block;
  margin: 5px;
  box-shadow: 5px 5px 10px grey;
  width: 200px;
  vertical-align: top;
  text-align: center;
}

.painel .painel-titulo {
  text-align: center;
  border: solid 2px;
  background: lightblue;
  margin: 0;
  padding: 10px;
  text-transform: uppercase;
}

.painel-img {
  width: 100%;
  max-width: 200px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
}
</style>