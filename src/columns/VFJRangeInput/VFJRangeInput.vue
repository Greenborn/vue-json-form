<template>
    <div class="mb-3">
        <label :for="params.field" class="form-label">{{ params.label }}</label>
        <div class="input-group">
            <Slider v-model="model" :range="config.range"  @slideend="input_event" :step="config.step" :min="config.min" :max="config.max" class="w-100"/>
        </div>        
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { VFJRangeInputConf } from './VFJRangeInputConf'

const props = defineProps(['params', 'modelValue'])
const emit  = defineEmits(['update:modelValue'])

const config = ref(new VFJRangeInputConf(props.params))

const model = ref(config.value.min)

function input_event(){
    emit('update:modelValue', { config: config.value, data: model.value })
}

onMounted(async ()=>{
})
</script>