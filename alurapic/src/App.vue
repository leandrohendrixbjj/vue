<template>
  <div class="container">
    <router-view />
  </div>
</template>

<script>
  export default {}
</script>

<style scoped>
  * {
    margin: 0;
    padding: 0;
  }

  .container {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 60%;
    margin: auto;
  }
</style>