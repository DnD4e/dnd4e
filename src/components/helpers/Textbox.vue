<template>
    <div class="grid grid-cols-3 gap-6"></div>
    <label class="block text-sm font-medium text-gray-200" for="{{ id }}">{{
        label
    }}</label>
    <div class="mt-1 flex rounded-md shadow-sm">
        <input
            type="text"
            name="{{ id }}"
            id="{{ id }}"
            placeholder="{{ placeholder }}"
            class="focus:ring-indigo-300 flex-1 block w-full rounded-md sm:text-sm border-gray-400"
        />
    </div>
</template>

<script lang="ts">
export default {
    props: {
        id: String,
        value: String,
        label: String,
        placehplder: String,
    },
};
</script>

<style></style>
