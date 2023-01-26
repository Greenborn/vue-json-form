<template>
    <div class="mb-3">
        <label :for="params.key" class="form-label">{{ params.label }}</label>
        <div class="input-group">
            <ColorPicker v-model="model" :inline="true" />
        </div>        
    </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps(['params', 'data_channel'])

const model = ref()

function input_event(){
    props.data_channel.streaming('_user_input_data', { config: props.params, data: model.value })
}
</script>