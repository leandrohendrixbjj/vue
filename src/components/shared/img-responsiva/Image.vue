<template>
    <img :src=url alt=titulo class="imagem-responsiva">
</template>

<script>
  export default{
    props:['url','titulo']
  }
</script>

<!-- scoped => Aplica o estio apenas no  Html do arquivo-->
<style scoped>
  .imagem-responsiva {
      width: 100%;
    }
</style>