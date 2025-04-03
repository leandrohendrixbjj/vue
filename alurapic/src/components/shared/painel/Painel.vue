<template>
  <div class="painel">
    <h2 class="painel-titulo">{{ foto.titulo }}</h2>
    <div class="painel-conteudo">
      <img class="painel-img" :src="foto.url" :alt="foto.titulo" />
    </div>
  </div>
</template>

<script>
export default {};
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