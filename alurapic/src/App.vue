<template>
  <div class="container">
    <h1 class="titulo">{{ titulo }}</h1>
    <ul class="fotos">
      <li v-for="foto in fotos">
        <div class="painel">
          <h2 class="painel-titulo">{{ foto.titulo }}</h2>
          <div class="painel-conteudo">
            <img class="painel-img" :src="foto.url" :alt="foto.titulo" />
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
      titulo: "AluraPic",
      fotos: []
    };
  },
  created() {
    fetch("http://localhost:3000/v1/fotos")
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        this.fotos = data;
      })
      .catch((error) => console.error("Error fetching dog images:", error));
  }
};
</script>

<style>
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

.titulo {
  text-align: center;
  font-size: 2em;
  margin-bottom: 20px;
}

.fotos {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  list-style: none;
}

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