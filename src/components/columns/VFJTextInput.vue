<template>
    <div class="mb-3">
        <label :for="params.key" class="form-label">{{ params.label }}</label>
        <div class="input-group">
            <InputText 
                :disabled="params.disabled" @input="input_event"
                :type="params.type"  v-model="model" class="w-100" />
        </div>        
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps(['params', 'data_channel'])

const model = ref()

function input_event(){
    props.data_channel.streaming('_user_input_data', { config: props.params, data: model.value })
}

onMounted(async ()=>{
    props.data_channel.getData('field_value', async (data) => {
        if (data != undefined)
            model.value = data
    }, props.params.key)
})
</script>