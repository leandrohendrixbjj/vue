<template>
  <div>
    <h1 class="centralizado">{{titulo}}</h1>
    <input type="search" class="filtro" v-on:input="filtro = $event.target.value" placeholder="Filtro por titulo">
    {{filtro}}
    <ul class="lista-fotos">
      <li v-for="foto of fotosComFiltro" class="lista-fotos-item">
        <meu-painel :titulo="foto.titulo">                    
          <img-responsive :url="foto.url" :titulo="foto"></img-responsive>  
        </meu-painel>  
      </li>
    </ul>
  </div>
</template>

<script>
  import Painel from '../shared/painel/Painel.vue';
  import Image from '../shared/img-responsiva/Image.vue';

  export default {
    components: {
      'meu-painel':Painel,
      'img-responsive': Image
    },    
    data() {
      return {
        titulo:"Alura Pic",
        fotos:[],
        filtro:""
      }
    },
    computed:{
      fotosComFiltro(){
        if (this.filtro){
           let exp = new RegExp(this.filtro.trim(),'i');         
           return this.fotos.filter(foto => exp.test(foto.titulo))  
        }else{
          return this.fotos;
        }
      }
    },
    created() {
      this.$http.get('http://localhost:3000/v1/fotos')
      .then(res => res.json())
      .then(fotos => this.fotos = fotos)
      .catch(err => console.log(err))  
    }    
  }
</script>

<!-- scoped => Aplica o estio apenas no  Html do arquivo-->
<style scoped>  
  .centralizado {
    text-align: center;
  }

  .filtro {
    display: block;
    width: 100%;
  }  

  .lista-fotos {
    list-style: none;
  }

  .lista-fotos .lista-fotos-item {
    display: inline-block;
    padding:5px;
  } 

  .painel {
      padding: 0 auto;
      border: solid 2px grey;
      display: inline-block;
      margin: 5px;
      box-shadow: 5px 5px 10px grey;
      width: 200px;
      height: 100%;
      vertical-align: top;
      text-align: center;
    }

  .painel .painel-titulo {
    text-align: center;
    border: solid 2px;
    background: lightblue;
    margin: 0 0 1.5px 0;
    padding: 10px;
    text-transform: uppercase;    
  }  
  </style>