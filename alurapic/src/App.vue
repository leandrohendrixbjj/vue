<template>
  <div class="container">
    <h1 class="titulo">{{ titulo }}</h1>
    <ul class="lista-fotos">
      <li class="li-lista-fotos" v-for="foto in fotos">
        <div class="painel">
          <h2 class="painel-titulo">{{ foto.titulo }}</h2>
          <div class="painel-conteudo">
            <img class="imagem-responsiva"  :src="foto.url" :alt="foto.titulo" />
          </div>
        </div>        
      </li>
    </ul>  
  </div>
</template>

<script>
   export default {
    data() {
      return {
        titulo:'AluraPic',
        fotos: []
      }
    },
    created() {
      fetch('http://localhost:3000/v1/fotos')
      .then(res => res.json())      
      .then(data => {
        this.fotos = data
      })
    }
   }
</script>

<style scoped>
 * {
  margin: 0;
  padding: 0;
 }
 
 .container {    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;    
    width: 70%;
    margin: auto;
    font-family: Helvetica, sans-serif;
  }
  
  .titulo {
    display: flex;
    flex-direction: row;
    justify-content: center;     
  }

  .lista-fotos {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;    
    list-style: none;
    padding: 0;
  }

  .li-lista-fotos{
    padding: 5px ;
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
    margin: 0 0 0 0;
    padding: 10px;
    text-transform: uppercase;
  }

  .imagem-responsiva {
    width: 100%;
  }
</style>