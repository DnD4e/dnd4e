<template>
  <div>
    <label class="block text-lg font-medium text-slate-300 mb-3" :for="id">{{
      label
    }}</label>
    <div class="mt-1 rounded-md shadow-sm">
      <input
        type="text"
        :name="id"
        :id="id"
        :placeholder="textPlaceholder"
        :value="value"
        class="block w-full rounded-md text-lg border-slate-900 bg-slate-600 p-2 text-slate-300 focus:ring-slate-800"
      />
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    id: String,
    value: String,
    label: String,
    textPlaceholder: String,
  },
};
</script>

<style></style>
