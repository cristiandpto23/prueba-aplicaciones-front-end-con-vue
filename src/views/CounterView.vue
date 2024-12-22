<template>
    <div class="counter">
        <h1>Ejercicio 1 - Counter con Vuex</h1>
        <p>Contador actual: {{ counter }}</p>
        <button @click="increment">Incrementar</button>
        <button @click="decrement">Decrementar</button>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    name: 'CounterView',
    computed: {
        ...mapGetters({
            counter: 'getCounter',
        }),
    },
    methods: {
        ...mapActions(['increment', 'decrement']),
    },
};
</script>

<style scoped>
.counter {
    max-width: 600px;
    margin: 2rem auto;
    padding: 2rem;
    text-align: center;
    background-color: #f5f5f5;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

h1 {
    color: #2c3e50;
    margin-bottom: 2rem;
}

p {
    font-size: 1.5rem;
    color: #42b983;
    margin: 1rem 0;
}

button {
    background-color: #42b983;
    color: white;
    border: none;
    padding: 0.8rem 1.5rem;
    margin: 0.5rem;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
}

button:hover {
    background-color: #3aa876;
}

button:active {
    transform: scale(0.98);
}
</style>
