<template>
  <button 
    class="botao botao-perigo" 
    :type="tipo"
    @click="excluir"
  >
    {{ rotulo }}
  </button>
</template>

<script>
export default {
  props: ['tipo', 'rotulo', 'fotoId'],

  methods: {
    excluir() {
      
      const confirmar = confirm("Tem certeza que deseja excluir esta foto?");
      if (!confirmar) return;

      fetch(`http://localhost:3000/v1/fotos/${this.fotoId}`, {
        method: 'DELETE'
      })
        .then(response => {
          if (!response.ok) {
            throw new Error("Erro ao excluir");
          }
          this.$emit('excluir', this.fotoId); // Notifica o pai para remover da tela
        })
        .catch(err => {
          console.error("Erro ao excluir foto:", err);
          alert("Erro ao excluir a foto.");
        });
    },    
  }
}
</script>


<style scoped>
.botao {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 1rem;
  padding: 0.6rem 1.2rem;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: background-color 0.3s ease, box-shadow 0.2s ease, transform 0.1s ease;
  color: white;
  font-weight: 600;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);  
}

.botao-perigo {
  background-color: #e53935;
}

.botao-perigo:hover {
  background-color: #d32f2f;
  box-shadow: 0 6px 10px rgba(229, 57, 53, 0.3);
}

.botao-perigo:active {
  background-color: #c62828;
  transform: scale(0.98);
}
</style>
