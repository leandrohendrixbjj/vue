<template>
    <div class="painel">
    	<h2 class="painel-titulo" @dblclick="show = !show">{{titulo}}</h2>
      <div class="painel-conteudo" v-show="show">
        <slot ></slot>
      </div>  
    </div> 
</template>

<script>
	export default {
		props:['titulo'],
	
    data(){
      return{
        show:true
      }
    }
  }
</script>
<!-- scoped => Aplica o estio apenas no  Html do arquivo-->
<style scoped>
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

  *  {
    box-shadow: 5px 5px 5px;
  }

</style>