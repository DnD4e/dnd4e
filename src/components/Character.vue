<script setup lang="ts">
import { ref } from "vue";
import { generateNewCharacter } from "../models/interfaces/character";
import FormTextbox from "./helpers/FormTextbox.vue";

const char = ref(generateNewCharacter());
</script>

<template>
  <p>Race: {{ char.race }}</p>

  <FormTextbox
    id="Race"
    :value="char.race"
    label="Race"
    textPlaceholder="Test Placeholder"
  />
</template>
<style></style>
