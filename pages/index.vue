<template>
    <div>
        <h1>Hello world! </h1>
        <h2>{{ count }}</h2>
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    methods: {
        // increment() {
        //     this.$store.commit('counter/increment');
        // },
        // decrement() {
        //     this.$store.commit('counter/decrement');
        // },
        ...mapActions('counter', [
            'increment',
            'decrement',
        ])
    },
    computed: {
        count () {
            return this.$store.state.counter.counter
        }
    }    
}
</script>