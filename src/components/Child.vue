<template>
    <div class="child">
        <h3>Componente Child</h3>
        <input type="text" v-model="texto" placeholder="Escribe un mensaje" />
        <button @click="enviarMensaje">Enviar al Parent</button>
    </div>
</template>

<script>
export default {
    name: 'Child',
    data() {
        return {
            texto: '',
        };
    },
    methods: {
        enviarMensaje() {
            this.$emit('enviar-mensaje', this.texto);
        },
    },
};
</script>
