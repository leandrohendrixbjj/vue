<template>
  <div class="corpo">
     <h1 class="centralizado">{{titulo}}</h1>
     <ul class="lista-fotos">
       <li class="lista-fotos-item" v-for="foto in fotos">
         <img :src="foto.url" :alt="foto.alt">
       </li>
     </ul>                    
  </div>
</template>
   
<script>
   export default{
      data(){
         return {
            titulo:"AluraPIC",
            fotos:[]  
         }
      },
      created(){
         this.$http.get('http://localhost:3000/v1/fotos')
         .then(res => res.json())
         .then(data => this.fotos = data)
         .catch(err => console.log(err))  
      }
   }
</script>

<style>
  .centralizado {
    text-align: center;
  }

  .corpo {
    font-family: Helvetica, sans-serif;
    margin: 0 auto;
    width: 96%;
  }

  .lista-fotos {
    list-style: none;
  }

  .lista-fotos .lista-fotos-item {
    display: inline-block;
  }
</style>