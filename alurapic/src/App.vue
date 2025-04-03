<template>
  <div class="container">
    <h1 class="titulo">{{ titulo }}</h1>
    <ul class="fotos">
      <li v-for="foto in fotos">
        <meu-painel :titulo="foto.titulo">
          <img class="painel-img" :src="foto.url" :alt="foto.titulo" />
        </meu-painel>
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
</style>