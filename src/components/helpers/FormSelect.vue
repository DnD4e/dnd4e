<template>
    <div>
        <label
            class="block text-lg font-medium text-slate-300 mb-3"
            :for="id"
            >{{ label }}</label
        >
        <div class="mt-1 rounded-md shadow-sm">
            <select
                :name="id"
                :id="id"
                v-bind="value"
                v-model="value"
                @input="$emit('update:modelValue', $event.target.value)"
                class="block w-full rounded-md text-lg border-slate-900 bg-slate-600 p-2 text-slate-300 focus:ring-slate-800 mb-2"
            >
                <option
                    v-for="option in selectOptions"
                    :value="option"
                    :key="option"
                >
                    {{ option }}
                </option>
            </select>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps({
    id: String,
    value: String,
    label: String,
    textPlaceholder: String,
    selectOptions: Set,
});
defineEmits(["update:modelValue"]);
</script>

<style></style>
