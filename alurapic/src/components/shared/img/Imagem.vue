<template>
    <img class="painel-img" :src="foto.url" :alt="foto.titulo" />
</template>

<script>
    export default {        
        props: ['foto']
    }
</script>

<style scoped>
    .painel-img {
        width: 100%;
        max-width: 200px;
        border-radius: 8px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
    }
</style>