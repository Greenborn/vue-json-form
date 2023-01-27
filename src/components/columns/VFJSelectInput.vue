<template>
    <div class="mb-3">
        <label :for="params.key" class="form-label">{{ params.label }}</label>
        <div class="input-group">
            <Dropdown v-model="model" class="w-100"
                :options="field_options" :optionLabel="params.option_label" :optionValue="params.option_id" @change="input_event" />
        </div>        
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps(['params', 'data_channel'])

const model = ref()
const field_options = ref([])

function input_event(){
    props.data_channel.streaming('_user_input_data', { config: props.params, data: model.value })
}

onMounted(async ()=>{
    props.data_channel.getData('field_options', async (data) => {
        field_options.value = data[ props.params.field_options ]

        props.data_channel.getData('field_value', async (data) => {
            if (data != undefined)
                model.value = data
        }, props.params.key)
    })
})
</script>