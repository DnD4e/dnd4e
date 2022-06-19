<script setup lang="ts">
import BlockVue from "./components/slots/Block.vue";
import Block from "./components/slots/Block.vue";
</script>

<template>
    <!-- TODO: Extract to a component as our base compontent -->
    <BlockVue>
        <h1>DND 4<sup>th</sup> Edition</h1>
        <p>
            Pok pok try-hard portland blue bottle intelligentsia. Taxidermy
            scenester franzen humblebrag tilde street art wolf chartreuse
            authentic williamsburg marfa occupy. Hell of plaid authentic subway
            tile next level, seitan whatever beard snackwave prism cardigan
            raclette. Jianbing semiotics affogato, tattooed skateboard
            humblebrag post-ironic gastropub cold-pressed craft beer trust fund
            tilde listicle bushwick bitters. Aesthetic polaroid af, poke tousled
            marfa trust fund live-edge knausgaard cray. Swag meditation tonx,
            bitters before they sold out fingerstache gastropub.
        </p>
    </BlockVue>
    <BlockVue>Test</BlockVue>
    <BlockVue>Test</BlockVue>
</template>

<style lang="postcss">
body {
    @apply bg-white dark:bg-slate-800;
}

#app {
    @apply flex items-start justify-center;
}
</style>
