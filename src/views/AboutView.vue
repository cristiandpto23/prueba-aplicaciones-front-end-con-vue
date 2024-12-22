<template>
    <div class="about">

        <Parent />
    </div>
</template>

<script>
import Parent from '@/components/Parent.vue';

export default {
    name: 'AboutView',
    components: {
        Parent,
    },
};
</script>

<style>
@media (min-width: 1024px) {
    .about {
        min-height: 100vh;
        display: flex;
        align-items: center;
    }
}
</style>
