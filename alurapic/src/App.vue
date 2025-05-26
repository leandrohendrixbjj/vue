<template>
  <div class="container">    
    <meu-menu :routes="routes" />
    <router-view />
  </div>
</template>

<script>
import { routes } from './routes.js'
import Menu from './components/shared/menu/Menu.vue'

export default {
  components: {
    'meu-menu': Menu,    
  },

  data() {
    return {
      routes,
    }
  }  
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container {
  width: 80%;
  margin: 0 auto;
  padding: 20px;
}

</style>
