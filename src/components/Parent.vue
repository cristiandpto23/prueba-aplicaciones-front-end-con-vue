<template>
    <div class="parent">
        <h2>Componente Parent</h2>
        <p v-if="mensaje">Mensaje recibido: {{ mensaje }}</p>
        <hr>
        <Child @enviar-mensaje="recibirMensaje" />
    </div>
</template>

<script>
import Child from './Child.vue';

export default {
    name: 'Parent',
    components: {
        Child,
    },
    data() {
        return {
            mensaje: '',
        };
    },
    methods: {
        recibirMensaje(texto) {
            this.mensaje = texto;
        },
    },
};
</script>
