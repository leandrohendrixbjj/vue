<template>
  <div>
    <button 
      class="botao botao-perigo" 
      :type="tipo"
      @click="mostrarConfirmacao"
    >
      {{ rotulo }}
    </button>

    <!-- Modal de Confirmação -->
    <div v-if="mostrarModal" class="modal-overlay" @click="fecharModal">
      <div class="modal-content" @click.stop>
        <div class="modal-header">
          <h3>Confirmar Exclusão</h3>
          <button class="modal-close" @click="fecharModal">&times;</button>
        </div>
        <div class="modal-body">
          <p>Tem certeza que deseja excluir esta foto?</p>
          <p class="modal-warning">Esta ação não pode ser desfeita.</p>
        </div>
        <div class="modal-footer">
          <button class="botao-secundario" @click="fecharModal">
            Cancelar
          </button>
          <button class="botao-confirmar" @click="excluir">
            Excluir
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['tipo', 'rotulo', 'fotoId'],

  data() {
    return {
      mostrarModal: false
    }
  },

  methods: {
    mostrarConfirmacao() {
      this.mostrarModal = true;
    },

    fecharModal() {
      this.mostrarModal = false;
    },

    excluir() {
      this.mostrarModal = false;

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

/* Modal Styles */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  animation: fadeIn 0.3s ease;
}

.modal-content {
  background: white;
  border-radius: 12px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  max-width: 400px;
  width: 90%;
  animation: slideIn 0.3s ease;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 24px 0;
}

.modal-header h3 {
  margin: 0;
  font-size: 1.25rem;
  font-weight: 600;
  color: #1a1a1a;
}

.modal-close {
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #666;
  padding: 0;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.2s ease;
}

.modal-close:hover {
  background-color: #f5f5f5;
  color: #333;
}

.modal-body {
  padding: 20px 24px;
}

.modal-body p {
  margin: 0 0 8px 0;
  font-size: 1rem;
  color: #333;
  line-height: 1.5;
}

.modal-warning {
  font-size: 0.9rem;
  color: #666;
  font-style: italic;
}

.modal-footer {
  display: flex;
  gap: 12px;
  padding: 0 24px 24px;
  justify-content: flex-end;
}

.botao-secundario {
  padding: 10px 20px;
  border: 2px solid #e0e0e0;
  background: white;
  color: #666;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.2s ease;
  font-size: 0.9rem;
}

.botao-secundario:hover {
  border-color: #ccc;
  background: #f9f9f9;
}

.botao-confirmar {
  padding: 10px 20px;
  border: none;
  background: #e53935;
  color: white;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.2s ease;
  font-size: 0.9rem;
}

.botao-confirmar:hover {
  background: #d32f2f;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideIn {
  from { 
    opacity: 0;
    transform: translateY(-20px) scale(0.95);
  }
  to { 
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
</style>
