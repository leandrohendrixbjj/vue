<template>
    <div>
        <h1 class="titulo">{{ titulo }}</h1>
        <div class="seek-foto">
            <input type="text" 
                   v-on:input="filtro = 
                   $event.target.value" 
                   placeholder="Digite algo..."
                class="styled-input" />
            {{ filtro }}
        </div>
        <ul class="fotos">
            <li v-for="foto in fotosComFiltro" :key="foto.id">
                <meu-painel :titulo="foto.titulo" :visivel="foto.visivel">
                    <my-img :foto="foto" />
                </meu-painel>
            </li>
        </ul>
    </div>
</template>

<script>
    import Painel from '../shared/painel/Painel.vue'
    import Imagem from '../shared/img/Imagem.vue'

    export default {

        components: {
            'meu-painel': Painel,
            'my-img': Imagem
        },

        data() {
            return {
                titulo: "AluraPic",
                fotos: [],
                filtro: ''
            };
        },        

        created() {
            fetch("http://localhost:3000/v1/fotos")
                .then((resp) => resp.json())
                .then((data) => {
                    this.fotos = data.map(foto => Object.assign({}, foto, {
                        visivel: true
                    }))
                })
                .catch((error) => console.error("Error fetching dog images:", error))
        },

        computed: {
            fotosComFiltro() {
                if (this.filtro) {
                    const value = this.filtro.toLowerCase()

                    return this.fotos.filter((data) =>
                        data.titulo.toLowerCase().includes(value)
                    )
                }
                return this.fotos

            }
        }
    };
</script>

<style scoped>
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

    .seek-foto {
        width: 100%;
        display: flex;
        justify-content: center;
        margin: 20px 0;
    }

    .styled-input {
        width: 80%;
        padding: 12px 16px;
        font-size: 16px;
        border: 2px solid #ccc;
        border-radius: 8px;
        transition: border-color 0.3s ease, box-shadow 0.3s ease;
    }

    .styled-input:focus {
        border-color: #007bff;
        box-shadow: 0 0 0 4px rgba(0, 123, 255, 0.25);
        outline: none;
    }
</style>