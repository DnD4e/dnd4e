<script setup lang="ts">
import BlockVue from "./components/slots/Block.vue";
import Block from "./components/slots/Block.vue";
import FormTextbox from "./components/helpers/FormTextbox.vue";
import FormSelectVue from "./components/helpers/FormSelect.vue";
import { classOptions } from "./models/sets/class";
import FormSelect from "./components/helpers/FormSelect.vue";
</script>

<template>
  <!-- TODO: Extract to a component as our base compontent -->
  <BlockVue>
    <h1>DND 4<sup>th</sup> Edition</h1>
    <p>
      Pok pok try-hard portland blue bottle intelligentsia. Taxidermy scenester
      franzen humblebrag tilde street art wolf chartreuse authentic williamsburg
      marfa occupy. Hell of plaid authentic subway tile next level, seitan
      whatever beard snackwave prism cardigan raclette. Jianbing semiotics
      affogato, tattooed skateboard humblebrag post-ironic gastropub
      cold-pressed craft beer trust fund tilde listicle bushwick bitters.
      Aesthetic polaroid af, poke tousled marfa trust fund live-edge knausgaard
      cray. Swag meditation tonx, bitters before they sold out fingerstache
      gastropub.
    </p>
  </BlockVue>
  <BlockVue>
    <FormSelect
      id="Test"
      value="TestValue"
      label="Test Label"
      textPlaceholder="Test Placeholder"
      :selectOptions="classOptions"
    >
    </FormSelect>
  </BlockVue>
</template>

<style lang="postcss">
body {
  @apply bg-white dark:bg-slate-800;
}

#app {
  @apply grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4;
}
</style>
