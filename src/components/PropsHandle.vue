<template>
	<div>
		<input class="input" type="text" name="" id="" v-model="inputText" @input="emitFilteredText"/>
        <h2 class="subtitle mt4"> {{  fileterdText }}</h2>
	</div>
</template>

<script setup>
    import { ref, computed } from 'vue';
    import { defineEmits } from 'vue';

    const emit = defineEmits(['update:modelValue'])

    const inputText = ref('');

    const fileterdText = computed(() => {
        return inputText.value.toLowerCase().split(' ').map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1);
        })
    });

    const emitFilteredText = () => {
        emit('update:modelValue', fileterdText.value);
    }
</script>
