<template>
  <nav class="navbar">
    <ul class="nav-list">
      <li class="nav-item" v-for="route in routes" :key="route.path">
        <router-link :to="route.path" class="nav-link">{{ route.name }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
  export default {
    name: 'Menu',
    props: { 
      routes: {
        type: Array,
        required: true
      }
    }
  }
</script>

<style scoped>
  .navbar {
    background-color: #1e293b;    
    padding: 15px 20px;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .nav-list {
    list-style: none;
    display: flex;
    gap: 20px;
    justify-content: flex-start;
  }

  .nav-link {
    text-decoration: none;
    color: #f1f5f9;
    font-weight: 500;
    font-size: 16px;
    transition: color 0.3s ease, border-bottom 0.3s ease;
    padding-bottom: 2px;
    border-bottom: 2px solid transparent;
    font-size: 18px;
    font-weight: bold;
  }

  .nav-link:hover {
    color: #38bdf8;
    border-bottom: 2px solid #38bdf8;
  }
</style>